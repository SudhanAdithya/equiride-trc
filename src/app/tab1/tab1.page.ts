import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalController, Platform} from '@ionic/angular';
import {Router} from '@angular/router';
import {PostPage} from './post/post.page';
import {PostService} from '../core/postCreate.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy{

  subscription;
  posts = [];

  constructor(private router: Router,
              private platform: Platform,
              private postService: PostService,
              public modalController: ModalController) {}

  ngOnInit() {
    this.ionViewDidEnter();
    this.getPosts();
  }
  ngOnDestroy() {
    this.ionViewWillLeave();
  }

  getPosts() {
    this.postService.getAllPosts().subscribe((data) => {
      this.posts = data;
    });
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

  async presentModal() {
    const modal = await this.modalController.create({
      component: PostPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribeWithPriority(9999, () => {});
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

  navigate() {
    this.router.navigate(['/home/tab1/post']);
  }
}
