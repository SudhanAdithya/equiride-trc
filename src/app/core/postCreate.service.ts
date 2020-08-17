import {AngularFireAuth} from '@angular/fire/auth';
import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';


@Injectable()
export class PostCreateService {
  authState = null;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }

  createPost(message, type) {
    const data = {
      type,
      postedBy: this.authState.displayName,
      photoURL: this.authState.photoURL,
      likes: 0,
      created_date: Date.now(),
      email: this.authState.email,
      uid: this.authState.uid,
      name: this.authState.displayName,
      message,
      image: [],
      video: []
    };
    const postId = Math.random().toString(36).substring(2);
    const postRef = this.afs.doc(`posts/${postId}`).set(data);
    return postRef;
  }

  getAllPosts() {
    return this.afs.collection(`posts`).valueChanges();
  }
}
