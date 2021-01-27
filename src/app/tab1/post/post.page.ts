import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalController, Platform} from '@ionic/angular';
import {Camera} from '@ionic-native/camera/ngx';
import {ImagePicker} from '@ionic-native/image-picker/ngx';
import {AngularFireStorage} from '@angular/fire/storage';
import {map} from 'rxjs/operators';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../core/auth.service';
import {PostService} from '../../core/postCreate.service';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/forkJoin';
import {File} from '@ionic-native/file/ngx';

@Component({
  selector: 'app-post',
  templateUrl: 'post.page.html',
  styleUrls: ['post.page.scss']
})
export class PostPage implements OnInit, OnDestroy {
  base64Image;
  picture;
  options;
  imageResponse = [];
  imageUrls = [];
  videoResponse = [];
  uploadProgress;
  ref;
  uploadState;
  task;
  message;
  enablePost = false;
  post: FormGroup;
  photoURL;
  formSubscription;
  downloadURLs;
  processes;
  displayImage;

  constructor(public modalController: ModalController,
              public camera: Camera,
              public platform: Platform,
              private storage: AngularFireStorage,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private postService: PostService,
              private file: File,
              public imagePicker: ImagePicker) {
  }

  ngOnInit() {
    this.post = this.formBuilder.group({message: []});
    this.formSubscription = this.post.controls.message.valueChanges.subscribe(value => {
      this.message = value;
      this.enablePost = !!value;
    });
    this.photoURL = this.authService.authState.photoURL;
  }

  ngOnDestroy() {
    this.formSubscription.unsubscribe();
    if (this.platform.is('cordova')) {
      this.downloadURLs.unsubscribe();
    }
  }

  async accessCamera() {
    try{
      const options = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.CAMERA,
        encodingType: this.camera.EncodingType.JPEG
      };
      const tempImage = await this.camera.getPicture(options);
      const randomId = Math.random().toString(36).substring(2);
      this.imageResponse.push({data: 'data:image/jpeg;base64,' + tempImage, id: randomId});
      this.uploadFile();
    } catch (e) {
      console.log(e);
    }
  }

  async getImages() {
    try{
      this.options = {
        quality: 100,
        outputType: 1
      };
      const results = await this.imagePicker.getPictures(this.options);
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < results.length; i++) {
        const randomId = Math.random().toString(36).substring(2);
        this.imageResponse.push({data: 'data:image/jpeg;base64,' + results[i], id: randomId});
      }
      this.uploadFile();
    } catch (e) {
      console.log(e);
    }
  }

  getVideos() {
    // const options = {
    //   mediaType: this.camera.MediaType.VIDEO,
    //   destinationType: this.camera.DestinationType.FILE_URI,
    //   sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    // };
    // const path = this.file.dataDirectory;
    // this.file.createDir(path, 'my_media', false);

    // this.camera.getPicture(options)
    //   .then(async (videoUrl) => {
    //       if (videoUrl) {
    //         console.log('videoUrl----->' + videoUrl);
    //         const fullPath = videoUrl;
    //         let myPath = fullPath;
    //         // Make sure we copy from the right location
    //         if (fullPath.indexOf('file://') < 0) {
    //           myPath = 'file://' + fullPath;
    //         }
    //
    //         const ext = myPath.split('.').pop();
    //         const d = Date.now();
    //         const newName = `${d}.${ext}`;
    //
    //         const name = myPath.substr(myPath.lastIndexOf('/') + 1);
    //         const copyFrom = myPath.substr(0, myPath.lastIndexOf('/') + 1);
    //         const copyTo = this.file.dataDirectory + 'my_media';
    //
    //         this.file.copyFile(copyFrom, name, copyTo, newName).then(
    //           async success => {
    //             console.log('success: ' + JSON.stringify(success));
    //             const path1 = success.nativeURL.substr(0, success.nativeURL.lastIndexOf('/') + 1);
    //             console.log('path1: ' + path1);
    //             const buffer = await this.file.readAsArrayBuffer(path1, success.name);
    //             console.log('buffer: ' + JSON.stringify(buffer));
    //             const type = {type: 'video/mp4'};
    //             const fileBlob = new Blob([buffer], type);
    //             console.log('fileBlob: ' + JSON.stringify(fileBlob));
    //             const randomId = Math.random().toString(36).substring(2);
    //             const uploadTask = this.storage.upload(`images/${randomId}`, fileBlob);
    //             uploadTask.percentageChanges().subscribe(changes => {
    //               this.uploadProgress = changes;
    //             });
    //             uploadTask.then(() => {
    //               alert('uploded');
    //             });
    //           },
    //           error => {
    //             console.log('error: ' + error);
    //           }
    //         );
    //         // const filename = videoUrl.substr(videoUrl.lastIndexOf('/') + 1);
    //         // // console.log('filename---->' + filename);
    //         // let dirpath = videoUrl.substr(0, videoUrl.lastIndexOf('/') + 1);
    //         // // console.log('dirPath----->' + dirpath);
    //         // dirpath = dirpath.includes('file://') ? dirpath : 'file://' + dirpath;
    //         // // console.log('dirPath----->' + JSON.stringify(dirpath));
    //         // const dirUrl = await this.file.resolveDirectoryUrl(dirpath);
    //         // console.log('dirUrl----->' + JSON.stringify(dirUrl));
    //
    //         // const retrievedFile = await this.file.getFile(dirUrl, filename, {});
    //         // console.log('retrievedFile----->' + JSON.stringify(retrievedFile));
    //         // retrievedFile.file(async data => {
    //         //   // if (data.size > MAX_FILE_SIZE) { return this.presentAlert('Error', 'You cannot upload more than 5mb.'); }
    //         //   // if (data.type !== ALLOWED_MIME_TYPE) { return this.presentAlert('Error', 'Incorrect file type.'); }
    //         //   // this.selectedVideo = retrievedFile.nativeURL;
    //         //   console.log('data----->' + JSON.stringify(data));
    //         //
    //         // });
    //         try {
    //           // const dirUrl = await this.file.resolveDirectoryUrl(dirpath);
    //           // const retrievedFile = await this.file.getFile(dirUrl, filename, {});
    //           // retrievedFile.file(async data => {
    //           //   // if (data.size > MAX_FILE_SIZE) { return this.presentAlert('Error', 'You cannot upload more than 5mb.'); }
    //           //   // if (data.type !== ALLOWED_MIME_TYPE) { return this.presentAlert('Error', 'Incorrect file type.'); }
    //           //   // this.selectedVideo = retrievedFile.nativeURL;
    //           //   alert(retrievedFile.nativeURL);
    //           //
    //           //   const path = retrievedFile.nativeURL.substr(0, retrievedFile.nativeURL.lastIndexOf('/') + 1);
    //           //   const buffer = await this.file.readAsArrayBuffer(path, filename);
    //           //   alert(JSON.stringify(buffer));
    //           //   const type = {type: 'video/mp4'};
    //           //   const fileBlob = new Blob([buffer], type);
    //           //   alert(JSON.stringify(fileBlob));
    //           //   //const randomId = Math.random().toString(36).substring(2);
    //           //   const uploadTask = this.storage.upload(`images/${randomId}`, fileBlob);
    //           //   uploadTask.percentageChanges().subscribe( changes => {
    //           //     this.uploadProgress = changes;
    //           //   });
    //           //   uploadTask.then(() => {
    //           //     alert('uploded');
    //           //   });
    //           // });
    //
    //         } catch (err) {
    //           alert(err);
    //         }
    //       }
    //     },
    //     (err) => {
    //       console.log(err);
    //     });
    // const options = {
    //   maximumImagesCount: 1,
    //   quality: 100,
    //   allow_video: true,
    //   outputType: 0
    // };
    //
    // this.imagePicker.getPictures(options).then( async (videoUrl) => {
    //       alert(videoUrl);
    //       if (videoUrl) {
    //         const filename = videoUrl.substr(videoUrl.lastIndexOf('/') + 1);
    //         let dirpath = videoUrl.substr(0, videoUrl.lastIndexOf('/') + 1);
    //         dirpath = dirpath.includes('file://') ? dirpath : 'file://' + dirpath;
    //         alert(dirpath);
    //         // try {
    //         //   const dirUrl = await this.file.resolveDirectoryUrl(dirpath);
    //         //   const retrievedFile = await this.file.getFile(dirUrl, filename, {});
    //         //
    //         // } catch (err) {
    //         //
    //         // }
    //       }
    //     },
    //     (err) => {
    //       console.log(err);
    //     });
  }

  uploadFile() {
    const imageArr = this.imageResponse;
    imageArr.forEach((res, index) => {
      this.ref = this.storage.ref('images/' + res.id);
      this.task = this.ref.putString(res.data, 'data_url');
      this.uploadProgress = this.task.snapshotChanges()
        .pipe(map(s => {
          // @ts-ignore
          return (s.bytesTransferred / s.totalBytes) * 100;
        }));
      this.enablePost = this.imageResponse.length !== 0;
    });
  }

  postData() {
    const type = this.postType();
    type === 1 ? this.postText(type) : this.postMedia(type);
  }

  postText(type) {
    const payload = {
      messages: this.message,
      images: [],
      videos: [],
      type,
    };
    this.postService.createPost(payload, type).then(() => {
      this.dismiss(true);
    });
  }

  postMedia(type) {
    this.getTasksForEachProcess().subscribe(tasksArray => {
      console.log(tasksArray);
      const payload = {
        messages: this.message,
        images: tasksArray,
        videos: [],
        type,
      };
      this.postService.createPost(payload, type).then(() => {
        this.dismiss(true);
      });
    });
  }

  getTasksForEachProcess(): Observable<any> {
    const tasksObservables = this.imageResponse.map((process, processIdx) => {
      this.ref = this.storage.ref('images/' + process.id);
      return this.ref.getDownloadURL();
    });
    return Observable.forkJoin(tasksObservables);
  }

  postType(): number {
    let postType = 1;
    if (this.imageResponse.length === 0 && this.videoResponse.length === 0) {
      postType = 1;
    } else if (this.imageResponse.length === 1 && this.videoResponse.length === 0) {
      postType = 2;
    } else if (this.imageResponse.length === 2 && this.videoResponse.length === 0) {
      postType = 3;
    } else if (this.imageResponse.length >= 3 && this.videoResponse.length === 0) {
      postType = 4;
    } else if (this.videoResponse.length !== 0) {
      postType = 5;
    }
    return postType;
  }

  deleteImage(id, index): void {
    this.imageResponse.splice(index, 1);
    this.ref = this.storage.ref('images/' + id);
    this.downloadURLs = this.ref.getDownloadURL();
    this.downloadURLs.subscribe(url => {
      this.storage.storage.refFromURL(url).delete().then((sussess) => {
        this.enablePost = this.imageResponse.length !== 0;
      }, (error) => {
        alert(error);
      });
    });
  }

  dismiss(postCreated) {
    this.displayImage = [];
    this.imageResponse = [];
    this.modalController.dismiss();
    if (!postCreated) {
      this.imageResponse.forEach((response, index) => {
        this.deleteImage(response.id, index);
      });
    }
  }
}
