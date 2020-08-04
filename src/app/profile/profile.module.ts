import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProfileRoutingModule } from './profile-routing.module';
import {TabsPageModule} from '../tabs/tabs.module';
import {HeaderModule} from '../header/header.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ProfileRoutingModule,
    TabsPageModule,
    HeaderModule
  ],
  declarations: [ProfileComponent ]
})
export class ProfileModule {}
