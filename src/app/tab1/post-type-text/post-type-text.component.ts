import {Component, Input, OnInit} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {PostService} from '../../core/postCreate.service';

@Component({
  selector: 'app-post-type-text',
  templateUrl: './post-type-text.component.html',
  styleUrls: ['./post-type-text.component.scss'],
})
export class PostTypeTextComponent implements OnInit {

  @Input() post: string;
  constructor(
    private actionSheetController: ActionSheetController,
    private postService: PostService
  ) {}

  ngOnInit() {}

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
    }, 1000);
  }

}
