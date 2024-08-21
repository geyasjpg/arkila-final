import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserBookmarkPageRoutingModule } from './user-bookmark-routing.module';

import { UserBookmarkPage } from './user-bookmark.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserBookmarkPageRoutingModule
  ],
  declarations: [UserBookmarkPage]
})
export class UserBookmarkPageModule {}
