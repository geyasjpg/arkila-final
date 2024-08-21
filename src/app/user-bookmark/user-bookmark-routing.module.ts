import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserBookmarkPage } from './user-bookmark.page';

const routes: Routes = [
  {
    path: '',
    component: UserBookmarkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserBookmarkPageRoutingModule {}
