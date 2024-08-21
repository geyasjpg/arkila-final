import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocdatedurPageRoutingModule } from './locdatedur-routing.module';

import { LocdatedurPage } from './locdatedur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocdatedurPageRoutingModule
  ],
  declarations: [LocdatedurPage]
})
export class LocdatedurPageModule {}
