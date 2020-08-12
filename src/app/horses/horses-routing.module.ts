import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorsesComponent } from './horses.component';
import {AuthGuard} from '../core/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: HorsesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorsesRoutingModule {}
