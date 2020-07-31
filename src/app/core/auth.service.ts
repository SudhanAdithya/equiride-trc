import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {Injectable} from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {of} from 'rxjs';
import {Router} from '@angular/router';


@Injectable()
export class AuthService {
  user$;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        console.log(user.uid);
        if (user) {
          return this.afs.doc(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      }));
  }

  async doGoogleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    await this.afAuth.signInWithPopup(provider);
  }

  async doLogout() {
    await this.afAuth.signOut();
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
