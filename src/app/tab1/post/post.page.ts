import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {Camera} from '@ionic-native/camera/ngx';
import {ImagePicker} from '@ionic-native/image-picker/ngx';
import {DomSanitizer} from '@angular/platform-browser';
import { AngularFireStorage } from '@angular/fire/storage';
import { map} from 'rxjs/operators';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../core/auth.service';
import {PostService} from '../../core/postCreate.service';

@Component({
  selector: 'app-post',
  templateUrl: 'post.page.html',
  styleUrls: ['post.page.scss']
})
export class PostPage implements OnInit{

  base64Image;
  picture;
  options;
  imageResponse = [];
  fb;
  uploadProgress;
  ref;
  uploadState;
  task;
  message;
  enablePost = false;
  post: FormGroup;
  photoURL;

  constructor(private router: Router,
              public modalController: ModalController,
              public camera: Camera,
              public sanitizer: DomSanitizer,
              private storage: AngularFireStorage,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private postService: PostService,
              public imagePicker: ImagePicker) {}

  ngOnInit() {
    this.post = this.formBuilder.group({
      message: [this.message]
    });
    this.post.controls.message.valueChanges.subscribe(value => {
      this.enablePost = !!value;
    });
    this.photoURL = this.authService.authState.photoURL;
  }

  dismiss(){
    this.modalController.dismiss({
      dismissed: true
    });
    this.router.navigate(['/home/tab1']);
  }

  accessCamera(){
    this.camera.getPicture({
      targetWidth: 512,
      targetHeight: 512,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.picture = imageData;
    }, (err) => {
      console.log(err);
    });
  }


  getImages() {
    this.options = {
      // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
      // selection of a single image, the plugin will return it.
      // maximumImagesCount: 3,

      // max width and height to allow the images to be.  Will keep aspect
      // ratio no matter what.  So if both are 800, the returned image
      // will be at most 800 pixels wide and 800 pixels tall.  If the width is
      // 800 and height 0 the image will be 800 pixels wide if the source
      // is at least that wide.
      width: 105,
      height: 160,

      // quality of resized image, defaults to 100
      quality: 25,

      // output type, defaults to FILE_URIs.
      // available options are
      // window.imagePicker.OutputType.FILE_URI (0) or
      // window.imagePicker.OutputType.BASE64_STRING (1)
      outputType: 1
    };
    this.imageResponse = [];
    this.imagePicker.getPictures(this.options).then((results) => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < results.length; i++) {
        console.log(results[i]);
        this.imageResponse.push('data:image/jpeg;base64,' + results[i]);
      }
    }, (err) => {
      console.log(err);
    }).finally(() => {
      this.uploadFile();
    });
  }

  uploadFile() {
    this.imageResponse.forEach((res) => {
      const randomId = Math.random().toString(36).substring(2);
      this.ref = this.storage.ref('images/' + randomId);
      this.task = this.ref.putString(res, 'data_url');
      this.uploadProgress = this.task.snapshotChanges()
        .pipe(map(s => {
          // @ts-ignore
          return (s.bytesTransferred / s.totalBytes) * 100;
        }));
    });
  }

  postData() {
    const type = 1;
    this.postService.createPost(this.message, type).then(() => {
      this.dismiss();
    });
  }

  onFileSelected(event) {
    const randomId = Math.random().toString(36).substring(2);
    this.ref = this.storage.ref('images/' + randomId);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.snapshotChanges()
      .pipe(map(s => {
        // @ts-ignore
        return (s.bytesTransferred / s.totalBytes) * 100;
      }));
    this.uploadState = this.task.snapshotChanges().pipe(map(s => {
      // @ts-ignore
      this.uploadState = s.state;
    }));
  }

}
