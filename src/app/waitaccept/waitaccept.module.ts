import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitacceptPageRoutingModule } from './waitaccept-routing.module';

import { WaitacceptPage } from './waitaccept.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitacceptPageRoutingModule
  ],
  declarations: [WaitacceptPage]
})
export class WaitacceptPageModule {}
