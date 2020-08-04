import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrusteeComponent } from './trustee.component';

const routes: Routes = [
  {
    path: '',
    component: TrusteeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrusteeRoutingModule {}
