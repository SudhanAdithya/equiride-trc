import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import {AuthService} from './core/auth.service';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import {FcmService} from './core/fcm.service';
import {Firebase} from '@ionic-native/firebase/ngx';
import {AuthGuard} from './core/auth.guard';
import {PostPage} from './tab1/post/post.page';
import {AngularFireStorageModule, BUCKET} from '@angular/fire/storage';
import {ReactiveFormsModule} from '@angular/forms';
import {PostService} from './core/postCreate.service';

@NgModule({
  declarations: [AppComponent, PostPage],
  entryComponents: [PostPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'cloud'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule, ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    GooglePlus,
    Firebase,
    FcmService,
    AuthGuard,
    PostService,
    { provide: BUCKET, useValue: 'gs://cedar-dogfish-285017.appspot.com' },
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
