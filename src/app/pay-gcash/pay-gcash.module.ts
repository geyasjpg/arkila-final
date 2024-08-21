import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayGcashPageRoutingModule } from './pay-gcash-routing.module';

import { PayGcashPage } from './pay-gcash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayGcashPageRoutingModule
  ],
  declarations: [PayGcashPage]
})
export class PayGcashPageModule {}
