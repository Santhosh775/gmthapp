import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlltreatmentsPageRoutingModule } from './alltreatments-routing.module';

import { AlltreatmentsPage } from './alltreatments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlltreatmentsPageRoutingModule
  ],
  declarations: [AlltreatmentsPage]
})
export class AlltreatmentsPageModule {}
