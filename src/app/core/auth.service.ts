import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {Injectable} from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {BehaviorSubject, of, Subject} from 'rxjs';
import {Router} from '@angular/router';


@Injectable()
export class AuthService {
  authState = null;
  userData;
  eventChanged = new BehaviorSubject<boolean>(false);

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }

  async doGoogleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    await this.afAuth.signInWithPopup(provider);
  }

  async doLogout() {
    await this.afAuth.signOut();
  }

  get isAuthenticated() {
    return this.authState !== null;
  }

  setUserData(data) {
    this.userData = data;
    this.eventChanged.next(true);
  }

  createUser(user) {
    const data = {
      bio: '',
      doj: Date.now(),
      email: this.authState.email,
      last_login_date: Date.now(),
      mobile_no: this.authState.phoneNumber,
      profession: user.profession,
      type: user.type,
      uid: this.authState.uid,
      name: this.authState.displayName,
      horses: [],
      boarding: false,
      arena_book_count: 0,
      party_book_count: 0
    };
    const devicesRef = this.afs.doc(`users/${this.authState.uid}`).update({last_login_date: Date.now()})
      .then(() => {})
      .catch((error) => {
        this.afs.doc(`users/${this.authState.uid}`).set(data);
      });
    return devicesRef;
  }

  getUserData() {
    return this.userData;
  }

  updateData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`jobs/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: 'test'
    };
    return userRef.set(data, {merge: true});
  }
}
