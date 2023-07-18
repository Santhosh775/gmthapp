import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GastroenterologyPageRoutingModule } from './gastroenterology-routing.module';

import { GastroenterologyPage } from './gastroenterology.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GastroenterologyPageRoutingModule
  ],
  declarations: [GastroenterologyPage]
})
export class GastroenterologyPageModule {}
