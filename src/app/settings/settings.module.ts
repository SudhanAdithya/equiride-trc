import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './settings.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SettingsRoutingModule } from './settings-routing.module';
import { TabsPageModule } from '../tabs/tabs.module';
import {HeaderComponent} from '../header/header.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SettingsRoutingModule,
    TabsPageModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [SettingsComponent, HeaderComponent]
})
export class SettingsModule {}
