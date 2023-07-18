import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpinePageRoutingModule } from './spine-routing.module';

import { SpinePage } from './spine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpinePageRoutingModule
  ],
  declarations: [SpinePage]
})
export class SpinePageModule {}
