import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhysiotherapyPageRoutingModule } from './physiotherapy-routing.module';

import { PhysiotherapyPage } from './physiotherapy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhysiotherapyPageRoutingModule
  ],
  declarations: [PhysiotherapyPage]
})
export class PhysiotherapyPageModule {}
