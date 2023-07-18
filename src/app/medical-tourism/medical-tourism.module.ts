import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalTourismPageRoutingModule } from './medical-tourism-routing.module';

import { MedicalTourismPage } from './medical-tourism.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalTourismPageRoutingModule
  ],
  declarations: [MedicalTourismPage]
})
export class MedicalTourismPageModule {}
