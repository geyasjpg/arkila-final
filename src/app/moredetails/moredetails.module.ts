import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoredetailsPageRoutingModule } from './moredetails-routing.module';

import { MoredetailsPage } from './moredetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoredetailsPageRoutingModule
  ],
  declarations: [MoredetailsPage]
})
export class MoredetailsPageModule {}
