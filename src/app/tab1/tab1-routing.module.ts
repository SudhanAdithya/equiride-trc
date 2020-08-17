import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import {AuthGuard} from '../core/auth.guard';
import {PostPage} from './post/post.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: Tab1Page,
  },
  {
    path: 'post',
    canActivate: [AuthGuard],
    component: PostPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
