import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Platform } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class FcmService {

  constructor(private firebase: Firebase,
              private afs: AngularFirestore,
              private afAuth: AngularFireAuth,
              private platform: Platform) {}

  async getToken() {
    let token;
    if (this.platform.is('android')) {
      token = await this.firebase.getToken();
    }

    if (this.platform.is('ios')) {
      token = await this.firebase.getToken();
      await this.firebase.grantPermission();
    }
    this.saveToken(token);
  }

  private saveToken(token) {
    if (!token) {
      return;
    }
    this.afAuth.onAuthStateChanged(user => {
      if (user) {
        const devicesRef = this.afs.collection(`devices/`);
        const data = {
          token
        };
        return devicesRef.doc(user.uid).set(data);
      }
    });
  }

  onNotifications() {
    return this.firebase.onNotificationOpen();
  }
}
