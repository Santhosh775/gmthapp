import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeamatologyPageRoutingModule } from './heamatology-routing.module';

import { HeamatologyPage } from './heamatology.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeamatologyPageRoutingModule
  ],
  declarations: [HeamatologyPage]
})
export class HeamatologyPageModule {}
