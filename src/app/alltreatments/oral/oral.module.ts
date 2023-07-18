import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OralPageRoutingModule } from './oral-routing.module';

import { OralPage } from './oral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OralPageRoutingModule
  ],
  declarations: [OralPage]
})
export class OralPageModule {}
