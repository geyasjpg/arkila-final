import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploaddocsPage } from './uploaddocs.page';

const routes: Routes = [
  {
    path: '',
    component: UploaddocsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploaddocsPageRoutingModule {}
