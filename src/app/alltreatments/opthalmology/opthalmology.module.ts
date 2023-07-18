import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpthalmologyPageRoutingModule } from './opthalmology-routing.module';

import { OpthalmologyPage } from './opthalmology.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpthalmologyPageRoutingModule
  ],
  declarations: [OpthalmologyPage]
})
export class OpthalmologyPageModule {}
