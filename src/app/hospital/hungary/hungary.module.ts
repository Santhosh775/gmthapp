import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HungaryPageRoutingModule } from './hungary-routing.module';

import { HungaryPage } from './hungary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HungaryPageRoutingModule
  ],
  declarations: [HungaryPage]
})
export class HungaryPageModule {}
