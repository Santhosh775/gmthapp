import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartneredPageRoutingModule } from './partnered-routing.module';

import { PartneredPage } from './partnered.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartneredPageRoutingModule
  ],
  declarations: [PartneredPage]
})
export class PartneredPageModule {}
