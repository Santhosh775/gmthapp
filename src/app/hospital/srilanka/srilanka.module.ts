import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SrilankaPageRoutingModule } from './srilanka-routing.module';

import { SrilankaPage } from './srilanka.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SrilankaPageRoutingModule
  ],
  declarations: [SrilankaPage]
})
export class SrilankaPageModule {}
