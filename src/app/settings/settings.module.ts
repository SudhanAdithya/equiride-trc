import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './settings.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SettingsRoutingModule } from './settings-routing.module';
import { TabsPageModule } from '../tabs/tabs.module';
import { HeaderModule } from '../header/header.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SettingsRoutingModule,
    TabsPageModule,
    HeaderModule
  ],

  declarations: [SettingsComponent ]
})
export class SettingsModule {}
