import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrusteeComponent } from './trustee.component';
import {AuthGuard} from '../core/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: TrusteeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrusteeRoutingModule {}
