import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IranPageRoutingModule } from './iran-routing.module';

import { IranPage } from './iran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IranPageRoutingModule
  ],
  declarations: [IranPage]
})
export class IranPageModule {}
