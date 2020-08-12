import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { SlotComponent } from './slot/slot.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { EventComponent } from './event/event.component';
import {AuthGuard} from '../core/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: Tab2Page,
  },
  {
    path: 'slot',
    canActivate: [AuthGuard],
    component: SlotComponent,
  },
  {
    path: 'restaurant',
    canActivate: [AuthGuard],
    component: RestaurantComponent,
  },
  {
    path: 'event',
    canActivate: [AuthGuard],
    component: EventComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
