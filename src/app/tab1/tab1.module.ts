import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Tab1Page} from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

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
  declarations: [Tab1Page, CDVPhotoLibraryPipe ]
})
export class Tab1PageModule {}
