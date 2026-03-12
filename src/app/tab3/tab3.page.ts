import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  todayNotifs = [
    {
      icon: 'checkmark-circle-outline',
      iconClass: 'icon-success',
      title: 'Ride Confirmed!',
      message: 'Your session with Coach Ravi on March 15 at 7:00 AM has been confirmed.',
      time: '30 min ago'
    },
    {
      icon: 'heart-outline',
      iconClass: 'icon-like',
      title: 'Priya Sharma',
      message: 'liked your post about the morning trail ride.',
      time: '1 hour ago'
    },
    {
      icon: 'people-outline',
      iconClass: 'icon-follow',
      title: 'New Follower',
      message: 'Karthik Vel started following you.',
      time: '3 hours ago'
    },
  ];

  earlierNotifs = [
    {
      icon: 'trophy-outline',
      iconClass: 'icon-event',
      title: 'TRC Championship',
      message: 'Registration closes in 5 days. Don\'t miss your chance to compete!',
      time: 'Yesterday'
    },
    {
      icon: 'chatbubble-outline',
      iconClass: 'icon-comment',
      title: 'Arjun Kumar',
      message: 'commented on your post: "Amazing progress! 🏇"',
      time: 'Yesterday'
    },
    {
      icon: 'ribbon-outline',
      iconClass: 'icon-achievement',
      title: 'Achievement Unlocked!',
      message: 'You\'ve completed 25 riding sessions. You earned the "Silver Rider" badge!',
      time: '2 days ago'
    },
    {
      icon: 'calendar-outline',
      iconClass: 'icon-reminder',
      title: 'Upcoming Session',
      message: 'Reminder: Trail ride with Meera\'s group this Saturday at 6:30 AM.',
      time: '3 days ago'
    },
  ];

  constructor() { }
}
