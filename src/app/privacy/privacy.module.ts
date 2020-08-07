import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrivacyComponent } from './privacy.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PrivacyRoutingModule } from './privacy-routing.module';
import { TabsPageModule } from '../tabs/tabs.module';
import {HeaderModule} from '../header/header.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PrivacyRoutingModule,
    TabsPageModule,
    HeaderModule
  ],

  declarations: [PrivacyComponent ]
})
export class PrivacyModule {}
