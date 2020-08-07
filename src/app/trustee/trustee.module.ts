import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrusteeComponent } from './trustee.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TrusteeRoutingModule } from './trustee-routing.module';
import {TabsPageModule} from '../tabs/tabs.module';
import {HeaderModule} from '../header/header.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TrusteeRoutingModule,
    TabsPageModule,
    HeaderModule
  ],

  declarations: [TrusteeComponent ]
})
export class TrusteeModule {}
