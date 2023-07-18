import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WellnessPageRoutingModule } from './wellness-routing.module';

import { WellnessPage } from './wellness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WellnessPageRoutingModule
  ],
  declarations: [WellnessPage]
})
export class WellnessPageModule {}
