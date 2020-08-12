import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { timer } from 'rxjs';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import {AuthService} from './core/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  email;
  name;
  imgUrl;
  showSubmenu = false;
  showSplash = true;
  isAdmin = false;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fireAuth: AngularFireAuth,
    private router: Router,
    private menuController: MenuController,
    private afs: AngularFirestore
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(5000).subscribe(() => { this.showSplash = false; });
      this.fireAuth.onAuthStateChanged(user => {
        if (user) {
          this.imgUrl = user.photoURL;
          this.name = user.displayName;
          this.email = user.email;
          this.afs.collection(`users`, ref => ref.where('uid', '==', user.uid))
            .valueChanges()
            .subscribe((userData) => {
              try {
                // @ts-ignore
                this.isAdmin = userData[0].type === 'admin';
              } catch (e) {
                this.isAdmin = false;
              }
            });
          this.router.navigate(['/home/tab1']);
        } else {
          this.router.navigate(['/login']);
        }
      });
    });
  }


  async navigate(route) {
    await this.router.navigate([`/menu/${route}`]);
    await this.menuController.close();
  }
}
