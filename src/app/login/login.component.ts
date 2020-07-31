import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../core/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {LoadingController, Platform} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
//import {GooglePlus} from '@ionic-native/google-plus/ngx';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent implements OnInit {
  loading;
  constructor(private activatedRoute: ActivatedRoute,
              private authService: AuthService,
              private fireAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router,
              private platform: Platform,
              //private google: GooglePlus,
              private loadingController: LoadingController) {
  }

  ngOnInit() {}

  async startLoading() {
    this.loading = await this.loadingController.create({
      message: 'Logging you in...',
    });
    await this.loading.present();
  }

  async login() {
    let params;
    if (this.platform.is('android')) {
      params = {
        webClientId: '585702289182-o4l7cdovpl5m7kpjkb86960l3hv4o64p.apps.googleusercontent.com',
        offline: true
      };
    } else {
      params = {};
    }
    // this.google.login(params).then((response) => {
    //   const {idToken, accessToken} = response;
    //   this.onLoginSuccess(idToken, accessToken);
    // }).catch((error) => {
    //   alert('error:' + JSON.stringify(error));
    //   this.loading.dismiss();
    // });
  }

  onLoginSuccess(accessToken, accessSecret) {
    const credential = accessSecret ? firebase.auth.GoogleAuthProvider
      .credential(accessToken, accessSecret) : firebase.auth.GoogleAuthProvider
      .credential(accessToken);
    this.fireAuth.signInWithCredential(credential).then((response) => {
      this.router.navigate(['/home/profile']).then(r => this.loading.dismiss());
    }, (error) => {
      this.loading.dismiss();
      alert('error :' + JSON.stringify(error));
    });
  }

  doGoogleLogin() {
    this.startLoading().then(r => {
      if (this.platform.is('cordova')) {
        this.login().then(() => {
        });
      } else {
        this.authService.doGoogleLogin().then(() => {
          this.router.navigate(['/home/profile']).then(r => this.loading.dismiss());
        });
      }
    });

  }
}
