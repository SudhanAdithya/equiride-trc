import {Component, OnDestroy, OnInit} from '@angular/core';
import {FcmService} from '../core/fcm.service';
import {ActionSheetController, ModalController, Platform, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {PostPage} from './post/post.page';
import {PostCreateService} from '../core/postCreate.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy{

  subscription;
  posts = [];
  items = [
    {name: 'Hasan Sezen', avatar: 'https://placehold.it/316X160', groep: 'Groep 1'},
  ];
  items2 = [
    {name: 'Hasan Sezen', avatar: 'https://placehold.it/158X160', groep: 'Groep 1'},
    {name: 'Hasan Sezen', avatar: 'https://placehold.it/158X160', groep: 'Groep 1'},
  ];
  items3 = [
    {name: 'Hasan Sezen', avatar: 'https://placehold.it/105X160', groep: 'Groep 1'},
    {name: 'Hasan Sezen', avatar: 'https://placehold.it/105X160', groep: 'Groep 1'},
    {name: 'Hasan Sezen', avatar: 'https://placehold.it/105X160', groep: 'Groep 1'},
    {name: 'Hasan Sezen', avatar: 'https://placehold.it/105X160', groep: 'Groep 1'},
  ];

  constructor(private router: Router,
              private actionSheetController: ActionSheetController,
              private platform: Platform,
              private postCreateService: PostCreateService,
              public modalController: ModalController) {}

  ngOnInit() {
    this.ionViewDidEnter();
    this.getPosts();
  }
  ngOnDestroy() {
    this.ionViewWillLeave();
  }

  getPosts() {
    this.postCreateService.getAllPosts().subscribe((data) => {
      this.posts = data;
      console.log(data);
    }) ;
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  loadData(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      event.target.complete();
      event.target.disabled = true;
    }, 2000);
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

  async presentModal() {
    const modal = await this.modalController.create({
      component: PostPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribeWithPriority(9999, () => {
      // do nothing
    });
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

  navigate() {
    this.router.navigate(['/home/tab1/post']);
  }
}
