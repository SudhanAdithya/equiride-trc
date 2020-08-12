import { Component } from '@angular/core';
import { FcmService } from '../core/fcm.service';
import { Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  navigate =
    [
      {
        title : 'App',
        url   : '/apps',
        icon  : 'apps'
      },
      {
        title : 'Book',
        url   : '/book',
        icon  : 'book'
      },
      {
        title : 'Paint',
        url   : '/paint',
        icon  : 'brush'
      },
      {
        title : 'Contacts',
        url   : '/contacts',
        icon  : 'contacts'
      },
      {
        title : 'Facebook',
        url   : '/facebook.com',
        icon  : 'logo-facebook'
      },
    ];
  constructor(public fcm: FcmService, public toastController: ToastController, private platform: Platform) {
    this.platform.ready().then(() => {
      this.notificationSetup();
    });
  }
  private async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 3000
    });
    toast.present();
  }

  private notificationSetup() {
    this.fcm.getToken();
    this.fcm.onNotifications().subscribe(
      (msg) => {
        if (this.platform.is('ios')) {
          this.presentToast(msg.aps.alert);
        } else {
          this.presentToast(msg.body);
        }
      });
  }

}
