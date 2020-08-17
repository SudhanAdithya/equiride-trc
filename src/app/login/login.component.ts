import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../core/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {LoadingController, Platform} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import { slider } from '../config/slider';
import * as firebase from 'firebase';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent implements OnInit {
  loading;
  slideOpts = slider;
  @Output() loggedIn = new EventEmitter();

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
    this.loading = await this.loadingController.create({message: 'Connecting ...'});
  }

  async presentLoading(loading) {
    await loading.present();
  }

  async startLoading() {
    this.loading = await this.loadingController.create({message: 'Logging you in...'});
    await this.loading.present();
  }

  doGoogleLogin() {
    this.startLoading().then(r => {
      if (this.platform.is('cordova')) {
        this.login().then(() => {
          this.checkMemberType();
        });
      } else {
        this.authService.doGoogleLogin().then((a) => {
          this.checkMemberType();
        });
      }
    });
  }

  async login() {
    this.google.login({
      webClientId: environment.webClientId,
      offline: true
    }).then((response) => {
        const { idToken, accessToken } = response;
        this.onLoginSuccess(idToken, accessToken);
      }).catch((error) => {
      this.loading.dismiss();
      console.log(error);
    });
  }

  onLoginSuccess(accessToken, accessSecret) {
    const credential = accessSecret ? firebase.auth.GoogleAuthProvider
      .credential(accessToken, accessSecret) : firebase.auth.GoogleAuthProvider
      .credential(accessToken);
    this.fireAuth.signInWithCredential(credential)
      .then((response) => {
        this.loading.dismiss();
      });
  }

  checkMemberType() {
    let member;
    this.afs.collection('members').valueChanges().subscribe((data) => {
      this.fireAuth.authState.subscribe(async user => {
        if (user) {
          member = data.find(({email}) => email === user.email);
          if (member) {
            await this.authService.createUser(member);
            this.router.navigate(['/home/tab1']).then(r => this.loading.dismiss());
          } else {
            alert('enroll for TRC');
            await this.authService.doLogout();
            this.router.navigate(['/login']).then(r => this.loading.dismiss());
          }
        }
      });
    });
  }
}
