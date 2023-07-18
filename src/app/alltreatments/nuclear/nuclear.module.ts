import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuclearPageRoutingModule } from './nuclear-routing.module';

import { NuclearPage } from './nuclear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuclearPageRoutingModule
  ],
  declarations: [NuclearPage]
})
export class NuclearPageModule {}
