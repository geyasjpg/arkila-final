import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'locdatedur',
    loadChildren: () => import('./locdatedur/locdatedur.module').then( m => m.LocdatedurPageModule)
  },
  {
    path: 'moredetails',
    loadChildren: () => import('./moredetails/moredetails.module').then( m => m.MoredetailsPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'personal-info',
    loadChildren: () => import('./personal-info/personal-info.module').then( m => m.PersonalInfoPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'select',
    loadChildren: () => import('./select/select.module').then( m => m.SelectPageModule)
  },
  {
    path: 'uploadcar',
    loadChildren: () => import('./uploadcar/uploadcar.module').then( m => m.UploadcarPageModule)
  },
  {
    path: 'uploaddocs',
    loadChildren: () => import('./uploaddocs/uploaddocs.module').then( m => m.UploaddocsPageModule)
  },
  {
    path: 'user-bookmark',
    loadChildren: () => import('./user-bookmark/user-bookmark.module').then( m => m.UserBookmarkPageModule)
  },
  {
    path: 'waitaccept',
    loadChildren: () => import('./waitaccept/waitaccept.module').then( m => m.WaitacceptPageModule)
  },
  {
    path: 'pay-gcash',
    loadChildren: () => import('./pay-gcash/pay-gcash.module').then( m => m.PayGcashPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
