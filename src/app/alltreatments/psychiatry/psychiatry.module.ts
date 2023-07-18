import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PsychiatryPageRoutingModule } from './psychiatry-routing.module';

import { PsychiatryPage } from './psychiatry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PsychiatryPageRoutingModule
  ],
  declarations: [PsychiatryPage]
})
export class PsychiatryPageModule {}
