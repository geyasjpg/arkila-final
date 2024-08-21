import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayGcashPage } from './pay-gcash.page';

const routes: Routes = [
  {
    path: '',
    component: PayGcashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayGcashPageRoutingModule {}
