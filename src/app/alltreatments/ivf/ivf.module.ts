import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IVFPageRoutingModule } from './ivf-routing.module';

import { IVFPage } from './ivf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IVFPageRoutingModule
  ],
  declarations: [IVFPage]
})
export class IVFPageModule {}
