import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnitedkingdomPageRoutingModule } from './unitedkingdom-routing.module';

import { UnitedkingdomPage } from './unitedkingdom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnitedkingdomPageRoutingModule
  ],
  declarations: [UnitedkingdomPage]
})
export class UnitedkingdomPageModule {}
