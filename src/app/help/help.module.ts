import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HelpComponent } from './help.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HelpRoutingModule } from './help-routing.module';
import { TabsPageModule } from '../tabs/tabs.module';
import {HeaderModule} from '../header/header.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HelpRoutingModule,
    TabsPageModule,
    HeaderModule,
  ],
  declarations: [HelpComponent]
})
export class HelpModule {}
