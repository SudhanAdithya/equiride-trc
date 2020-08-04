import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HorsesComponent } from './horses.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HorsesRoutingModule } from './horses-routing.module';
import {TabsPageModule} from '../tabs/tabs.module';
import {HeaderComponent} from '../header/header.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HorsesRoutingModule,
    TabsPageModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [HorsesComponent, HeaderComponent]
})
export class HorsesModule {}
