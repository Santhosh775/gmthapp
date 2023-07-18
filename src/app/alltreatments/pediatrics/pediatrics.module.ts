import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PediatricsPageRoutingModule } from './pediatrics-routing.module';

import { PediatricsPage } from './pediatrics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PediatricsPageRoutingModule
  ],
  declarations: [PediatricsPage]
})
export class PediatricsPageModule {}
