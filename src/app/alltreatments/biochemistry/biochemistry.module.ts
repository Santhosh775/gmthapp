import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiochemistryPageRoutingModule } from './biochemistry-routing.module';

import { BiochemistryPage } from './biochemistry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BiochemistryPageRoutingModule
  ],
  declarations: [BiochemistryPage]
})
export class BiochemistryPageModule {}
