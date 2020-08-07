import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'facility',
        loadChildren: () => import('../facility/facility.module').then(m => m.FacilityModule)
      },
      {
        path: 'horses',
        loadChildren: () => import('../horses/horses.module').then(m => m.HorsesModule)
      },
      {
        path: 'trustee',
        loadChildren: () => import('../trustee/trustee.module').then(m => m.TrusteeModule)
      },
      {
        path: 'privacy',
        loadChildren: () => import('../privacy/privacy.module').then(m => m.PrivacyModule)
      },
      {
        path: 'help',
        loadChildren: () => import('../help/help.module').then(m => m.HelpModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenusRoutingModule {}
