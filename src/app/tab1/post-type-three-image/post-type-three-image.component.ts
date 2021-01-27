import {Component, Input, OnInit} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {PostService} from '../../core/postCreate.service';

@Component({
  selector: 'app-post-type-three-image',
  templateUrl: './post-type-three-image.component.html',
  styleUrls: ['./post-type-three-image.component.scss'],
})
export class PostTypeThreeImageComponent implements OnInit {

  @Input() post: string;
  thumbnail = [];
  constructor(
    private actionSheetController: ActionSheetController,
    private postService: PostService
  ) { }

  ngOnInit() {
    // @ts-ignore
    this.post.image.map((link) => {
      console.log(link);
      const regex = /images%2F/gi;
      this.thumbnail.push(link.replace(regex, 'images%2Fthumb@105_'));
    });
  }

  async share(event) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Share Post',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Add to Bookmarks',
        icon: 'bookmark',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Copy link to Post',
        icon: 'link',
        handler: () => {
          console.log('link clicked');
        }
      }, {
        text: 'Share Post via...',
        icon: 'share',
        handler: () => {
          console.log('share clicked');
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  updateLikes(postId, currentLikes) {
    setTimeout(() => {
      this.postService.updateLikes(postId, currentLikes);
    }, 500);
  }

}
