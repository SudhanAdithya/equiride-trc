import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrivacyComponent } from './privacy.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PrivacyRoutingModule } from './privacy-routing.module';
import { TabsPageModule } from '../tabs/tabs.module';
import {HeaderComponent} from '../header/header.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PrivacyRoutingModule,
    TabsPageModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [PrivacyComponent, HeaderComponent]
})
export class PrivacyModule {}
