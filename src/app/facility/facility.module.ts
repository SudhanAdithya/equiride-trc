import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FacilityComponent } from './facility.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FacilityRoutingModule } from './facility-routing.module';
import { TabsPageModule } from '../tabs/tabs.module';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    FacilityRoutingModule,
    TabsPageModule,
    HeaderModule
  ],

  declarations: [FacilityComponent]
})
export class FacilityModule {}
