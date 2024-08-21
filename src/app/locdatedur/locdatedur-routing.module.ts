import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocdatedurPage } from './locdatedur.page';

const routes: Routes = [
  {
    path: '',
    component: LocdatedurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocdatedurPageRoutingModule {}
