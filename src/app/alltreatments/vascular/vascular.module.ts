import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VascularPageRoutingModule } from './vascular-routing.module';

import { VascularPage } from './vascular.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VascularPageRoutingModule
  ],
  declarations: [VascularPage]
})
export class VascularPageModule {}
