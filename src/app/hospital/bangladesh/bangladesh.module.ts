import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BangladeshPageRoutingModule } from './bangladesh-routing.module';

import { BangladeshPage } from './bangladesh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BangladeshPageRoutingModule
  ],
  declarations: [BangladeshPage]
})
export class BangladeshPageModule {}
