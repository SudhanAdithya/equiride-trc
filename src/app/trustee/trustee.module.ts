import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrusteeComponent } from './trustee.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TrusteeRoutingModule } from './trustee-routing.module';
import {TabsPageModule} from '../tabs/tabs.module';
import {HeaderComponent} from '../header/header.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TrusteeRoutingModule,
    TabsPageModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [TrusteeComponent, HeaderComponent]
})
export class TrusteeModule {}
