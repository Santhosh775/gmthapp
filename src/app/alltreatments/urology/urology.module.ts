import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UrologyPageRoutingModule } from './urology-routing.module';

import { UrologyPage } from './urology.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UrologyPageRoutingModule
  ],
  declarations: [UrologyPage]
})
export class UrologyPageModule {}
