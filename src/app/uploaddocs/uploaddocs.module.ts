import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploaddocsPageRoutingModule } from './uploaddocs-routing.module';

import { UploaddocsPage } from './uploaddocs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploaddocsPageRoutingModule
  ],
  declarations: [UploaddocsPage]
})
export class UploaddocsPageModule {}
