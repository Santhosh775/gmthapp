import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeurologyPageRoutingModule } from './neurology-routing.module';

import { NeurologyPage } from './neurology.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeurologyPageRoutingModule
  ],
  declarations: [NeurologyPage]
})
export class NeurologyPageModule {}
