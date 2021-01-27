import {AngularFireAuth} from '@angular/fire/auth';
import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';


@Injectable()
export class PostService {
  authState = null;
  posts;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }

  createPost(payload, type) {
    const data = {
      type,
      postedBy: this.authState.displayName,
      photoURL: this.authState.photoURL,
      likes: 0,
      created_date: Date.now(),
      email: this.authState.email,
      uid: this.authState.uid,
      name: this.authState.displayName,
      message: payload.messages,
      image: payload.images,
      video: payload.videos
    };
    const postId = Math.random().toString(36).substring(2);
    const postRef = this.afs.doc(`posts/${postId}`).set(data);
    return postRef;
  }

  getAllPosts() {
    return this.afs.collection('posts', (ref) => ref.orderBy('created_date', 'desc')).valueChanges({ idField: 'postId' });
  }

  updateLikes(postId, currentLikes) {
    this.afs.doc(`posts/${postId}`).update({likes: currentLikes + 1}).then(() => {})
      .catch((error) => {
      });
  }
}
