import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadcarPage } from './uploadcar.page';

const routes: Routes = [
  {
    path: '',
    component: UploadcarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadcarPageRoutingModule {}
