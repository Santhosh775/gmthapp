import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardiologyPageRoutingModule } from './cardiology-routing.module';

import { CardiologyPage } from './cardiology.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardiologyPageRoutingModule
  ],
  declarations: [CardiologyPage]
})
export class CardiologyPageModule {}
