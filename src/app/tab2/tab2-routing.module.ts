import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { SlotComponent } from './slot/slot.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'slot',
    component: SlotComponent,
  },
  {
    path: 'restaurant',
    component: RestaurantComponent,
  },
  {
    path: 'event',
    component: EventComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
