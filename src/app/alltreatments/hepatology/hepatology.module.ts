import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HepatologyPageRoutingModule } from './hepatology-routing.module';

import { HepatologyPage } from './hepatology.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HepatologyPageRoutingModule
  ],
  declarations: [HepatologyPage]
})
export class HepatologyPageModule {}
