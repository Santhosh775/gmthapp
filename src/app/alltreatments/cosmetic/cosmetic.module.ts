import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CosmeticPageRoutingModule } from './cosmetic-routing.module';

import { CosmeticPage } from './cosmetic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CosmeticPageRoutingModule
  ],
  declarations: [CosmeticPage]
})
export class CosmeticPageModule {}
