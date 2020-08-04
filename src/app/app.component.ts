import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { timer } from 'rxjs';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

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
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fireAuth: AngularFireAuth,
    private router: Router,
    private menuController: MenuController
  ) {
    this.initializeApp();
    this.fireAuth.onAuthStateChanged(user => {
      if (user) {
        this.imgUrl = user.photoURL;
        this.name = user.displayName;
        this.email = user.email;
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(5000).subscribe(() => { this.showSplash = false; });
    });
  }

  async navigate(route) {
    await this.router.navigate([`/menu/${route}`]);
    await this.menuController.close();
  }
}
