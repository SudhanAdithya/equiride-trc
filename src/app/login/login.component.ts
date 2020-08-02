import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../core/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {LoadingController, Platform} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent implements OnInit {
  loading;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(private activatedRoute: ActivatedRoute,
              private authService: AuthService,
              private fireAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router,
              private platform: Platform,
              private google: GooglePlus,
              private loadingController: LoadingController) {
  }



  async ngOnInit() {
    this.loading = await this.loadingController.create({
      message: 'Connecting ...'
    });
  }


  async presentLoading(loading) {
    await loading.present();
  }


  async login() {
    let params;
    if (this.platform.is('android') || this.platform.is('ios')) {
      params = {
        webClientId: '432502126830-hf1k89ongmuo1t8d9pjlkfdsloksaeeu.apps.googleusercontent.com',
        offline: true
      };
    }
    else {
      params = {};
    }
    this.google.login(params)
      .then((response) => {
        const { idToken, accessToken } = response;
        this.onLoginSuccess(idToken, accessToken);
      }).catch((error) => {
      console.log(error);
      alert('error:' + JSON.stringify(error));
    });
  }
  onLoginSuccess(accessToken, accessSecret) {
    const credential = accessSecret ? firebase.auth.GoogleAuthProvider
      .credential(accessToken, accessSecret) : firebase.auth.GoogleAuthProvider
      .credential(accessToken);
    this.fireAuth.signInWithCredential(credential)
      .then((response) => {
        this.router.navigate(['/home/tab1']);
        this.loading.dismiss();
      });

  }
  onLoginError(err) {
    console.log(err);
  }

  async startLoading() {
    this.loading = await this.loadingController.create({
      message: 'Logging you in...',
    });
    await this.loading.present();
  }
  //
  // async login() {
  //   let params;
  //   if (this.platform.is('android')) {
  //     params = {
  //       webClientId: '432502126830-eofcqms71fn8t8lgkbniu0k54q0j09qn.apps.googleusercontent.com',
  //       offline: true
  //     };
  //   } else {
  //     params = {};
  //   }
  //   this.google.login(params).then((response) => {
  //     const {idToken, accessToken} = response;
  //     this.onLoginSuccess(idToken, accessToken);
  //   }).catch((error) => {
  //     alert('error:' + JSON.stringify(error));
  //     this.loading.dismiss();
  //   });
  // }
  //
  // onLoginSuccess(accessToken, accessSecret) {
  //   const credential = accessSecret ? firebase.auth.GoogleAuthProvider
  //     .credential(accessToken, accessSecret) : firebase.auth.GoogleAuthProvider
  //     .credential(accessToken);
  //   this.fireAuth.signInWithCredential(credential).then((response) => {
  //     this.router.navigate(['/home/profile']).then(r => this.loading.dismiss());
  //   }, (error) => {
  //     this.loading.dismiss();
  //     alert('error :' + JSON.stringify(error));
  //   });
  // }
  //

  doGoogleLogin() {
    this.startLoading().then(r => {
      if (this.platform.is('cordova')) {
        this.login().then(() => {
        });
      } else {
        this.authService.doGoogleLogin().then(() => {
          this.router.navigate(['/home/tab1']).then(r => this.loading.dismiss());
        });
      }
    });

  }
}
