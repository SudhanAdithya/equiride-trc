import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Tab1Page} from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { PostTypeTextComponent } from './post-type-text/post-type-text.component';
import { PostTypeOneImageComponent } from './post-type-one-image/post-type-one-image.component';
import { PostTypeTwoImageComponent } from './post-type-two-image/post-type-two-image.component';
import { PostTypeThreeImageComponent } from './post-type-three-image/post-type-three-image.component';
import { PostTypeVideoComponent } from './post-type-video/post-type-video.component';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { Camera } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { HeaderModule } from '../header/header.module';
import { CDVPhotoLibraryPipe } from '../pipes/cdvphotolibrary.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    HeaderModule,
    ReactiveFormsModule
  ],
  providers: [
    Camera,
    ImagePicker,
    PhotoLibrary
  ],
  declarations: [
    Tab1Page,
    CDVPhotoLibraryPipe,
    PostTypeTextComponent,
    PostTypeOneImageComponent,
    PostTypeTwoImageComponent,
    PostTypeThreeImageComponent,
    PostTypeVideoComponent
  ]
})
export class Tab1PageModule {}
