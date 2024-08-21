import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadcarPageRoutingModule } from './uploadcar-routing.module';

import { UploadcarPage } from './uploadcar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadcarPageRoutingModule
  ],
  declarations: [UploadcarPage]
})
export class UploadcarPageModule {}
