import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PulmonologyPageRoutingModule } from './pulmonology-routing.module';

import { PulmonologyPage } from './pulmonology.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PulmonologyPageRoutingModule
  ],
  declarations: [PulmonologyPage]
})
export class PulmonologyPageModule {}
