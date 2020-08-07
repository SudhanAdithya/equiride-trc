import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HorsesComponent } from './horses.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HorsesRoutingModule } from './horses-routing.module';
import {TabsPageModule} from '../tabs/tabs.module';
import {HeaderModule} from '../header/header.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HorsesRoutingModule,
    TabsPageModule,
    HeaderModule
  ],

  declarations: [HorsesComponent ]
})
export class HorsesModule {}
