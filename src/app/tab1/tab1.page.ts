import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { PostPage } from './post/post.page';
import { PostService } from '../core/postCreate.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {

  subscription;
  posts = [];
  displayPosts = [];

  // Fake story users
  storyUsers = [
    { name: 'You', avatar: 'https://ui-avatars.com/api/?name=You&background=D4A76A&color=0F1117&bold=true&size=128', hasStory: false },
    { name: 'Priya', avatar: 'https://ui-avatars.com/api/?name=Priya+S&background=2EC4B6&color=fff&bold=true&size=128', hasStory: true },
    { name: 'Arjun', avatar: 'https://ui-avatars.com/api/?name=Arjun+K&background=7C5CFC&color=fff&bold=true&size=128', hasStory: true },
    { name: 'Meera', avatar: 'https://ui-avatars.com/api/?name=Meera+R&background=F87171&color=fff&bold=true&size=128', hasStory: true },
    { name: 'Karthik', avatar: 'https://ui-avatars.com/api/?name=Karthik&background=34D399&color=fff&bold=true&size=128', hasStory: true },
    { name: 'Divya', avatar: 'https://ui-avatars.com/api/?name=Divya+M&background=FBBF24&color=0F1117&bold=true&size=128', hasStory: true },
    { name: 'Ravi', avatar: 'https://ui-avatars.com/api/?name=Ravi+P&background=D4A76A&color=0F1117&bold=true&size=128', hasStory: false },
  ];

  // Fake posts for portfolio demonstration
  fakePosts = [
    {
      postId: 'fake1',
      postedBy: 'Priya Sharma',
      photoURL: 'https://ui-avatars.com/api/?name=Priya+S&background=2EC4B6&color=fff&bold=true&size=128',
      message: 'Just had the most incredible morning ride with Thunderbolt! 🐴 The sunrise over the TRC arena was absolutely magical. Nothing beats that feeling of freedom on horseback.',
      image: ['assets/post-horse-1.png'],
      likes: 47,
      comments: 12,
      liked: false,
      type: 2,
      timeAgo: '2 hours ago',
      created_date: Date.now() - 7200000
    },
    {
      postId: 'fake2',
      postedBy: 'Arjun Kumar',
      photoURL: 'https://ui-avatars.com/api/?name=Arjun+K&background=7C5CFC&color=fff&bold=true&size=128',
      message: 'Finally mastered the canter transition today! Coach Ravi has been incredibly patient. The dressage arena at TRC is world-class. Grateful for this community. 🏇✨',
      image: [],
      likes: 32,
      comments: 8,
      liked: true,
      type: 1,
      timeAgo: '4 hours ago',
      created_date: Date.now() - 14400000
    },
    {
      postId: 'fake3',
      postedBy: 'Meera Rajesh',
      photoURL: 'https://ui-avatars.com/api/?name=Meera+R&background=F87171&color=fff&bold=true&size=128',
      message: 'Weekend showjumping practice at the main arena! Star performed beautifully over the 1.2m course. So proud of our partnership. 🌟 Next stop: State Championship!',
      image: ['assets/post-horse-2.png'],
      likes: 89,
      comments: 23,
      liked: false,
      type: 2,
      timeAgo: '6 hours ago',
      created_date: Date.now() - 21600000
    },
    {
      postId: 'fake4',
      postedBy: 'TRC Official',
      photoURL: 'https://ui-avatars.com/api/?name=TRC&background=D4A76A&color=0F1117&bold=true&size=128',
      message: '📢 Exciting news! TRC Annual Championship 2026 registrations are now open. Categories: Dressage, Show Jumping, Cross Country & Trail Riding. Early bird discount ends March 20th!',
      image: [],
      likes: 156,
      comments: 45,
      liked: false,
      type: 1,
      timeAgo: '8 hours ago',
      created_date: Date.now() - 28800000
    },
    {
      postId: 'fake5',
      postedBy: 'Karthik Vel',
      photoURL: 'https://ui-avatars.com/api/?name=Karthik&background=34D399&color=fff&bold=true&size=128',
      message: 'Bonding time with my favorite mare, Luna 🌙 She was so calm today during grooming. Building trust with these magnificent creatures is the most rewarding part of riding.',
      image: ['assets/horserding.jpg'],
      likes: 64,
      comments: 15,
      liked: true,
      type: 2,
      timeAgo: 'Yesterday',
      created_date: Date.now() - 86400000
    },
    {
      postId: 'fake6',
      postedBy: 'Divya Menon',
      photoURL: 'https://ui-avatars.com/api/?name=Divya+M&background=FBBF24&color=0F1117&bold=true&size=128',
      message: 'First trail ride through the countryside and I\'m hooked! 🌿 The paths around TRC are so scenic. Already booked my next session. Huge thanks to the staff for making me feel safe as a beginner!',
      image: [],
      likes: 41,
      comments: 9,
      liked: false,
      type: 1,
      timeAgo: 'Yesterday',
      created_date: Date.now() - 93600000
    },
    {
      postId: 'fake7',
      postedBy: 'Ravi Prasad',
      photoURL: 'https://ui-avatars.com/api/?name=Ravi+P&background=D4A76A&color=0F1117&bold=true&size=128',
      message: 'Teaching the next generation of riders at TRC! Our junior batch is showing incredible progress. These kids are fearless! 🏆 #ProudCoach #TRCFamily',
      image: [],
      likes: 78,
      comments: 19,
      liked: false,
      type: 1,
      timeAgo: '2 days ago',
      created_date: Date.now() - 172800000
    }
  ];

  constructor(private router: Router,
    private platform: Platform,
    private postService: PostService,
    public modalController: ModalController) { }

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
      // Merge real + fake posts and sort by date descending (newest first)
      const allPosts = [...this.posts, ...this.fakePosts];
      this.displayPosts = allPosts.sort((a, b) => {
        const dateA = a.created_date || 0;
        const dateB = b.created_date || 0;
        return dateB - dateA;
      });
    });
  }

  toggleLike(post) {
    post.liked = !post.liked;
    post.likes += post.liked ? 1 : -1;
  }

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 1500);
  }

  loadData(event) {
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
    this.subscription = this.platform.backButton.subscribeWithPriority(9999, () => { });
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

  navigate() {
    this.router.navigate(['/home/tab1/post']);
  }
}
