import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NephrologyPageRoutingModule } from './nephrology-routing.module';

import { NephrologyPage } from './nephrology.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NephrologyPageRoutingModule
  ],
  declarations: [NephrologyPage]
})
export class NephrologyPageModule {}
