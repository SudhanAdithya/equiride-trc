import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userProfile = {
    name: 'Sudhan M',
    role: 'Premium Member · Since 2024',
    bio: 'Passionate equestrian 🐎 | Dressage enthusiast | Weekend trail rider at TRC. Life is better in the saddle.',
    avatar: 'https://ui-avatars.com/api/?name=Sudhan+M&background=D4A76A&color=0F1117&bold=true&size=256',
    rides: 87,
    posts: 24,
    following: 156,
    badges: [
      { name: 'Gold Rider', icon: 'trophy-outline', bg: 'rgba(212, 167, 106, 0.15)' },
      { name: '50 Rides', icon: 'ribbon-outline', bg: 'rgba(46, 196, 182, 0.15)' },
      { name: 'Early Bird', icon: 'sunny-outline', bg: 'rgba(251, 191, 36, 0.15)' },
      { name: 'Social Star', icon: 'star-outline', bg: 'rgba(124, 92, 252, 0.15)' },
    ],
    recentPosts: [
      {
        message: 'Just completed my 50th ride at TRC! What an incredible journey it has been. From being nervous about canter to now doing cross-country jumps. 🎉',
        date: 'Mar 8, 2026',
        likes: 34,
        comments: 11
      },
      {
        message: 'Morning trail ride through the countryside with the advanced batch. The fog made everything look so magical. Best way to start a weekend! 🌅',
        date: 'Mar 5, 2026',
        likes: 28,
        comments: 7
      },
      {
        message: 'Bonding session with Luna today. She was so responsive during groundwork. Building trust with these beautiful creatures is the most rewarding experience. 💛',
        date: 'Mar 1, 2026',
        likes: 45,
        comments: 14
      }
    ]
  };

  constructor() { }

  ngOnInit() { }
}
