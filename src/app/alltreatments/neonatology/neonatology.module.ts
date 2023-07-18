import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeonatologyPageRoutingModule } from './neonatology-routing.module';

import { NeonatologyPage } from './neonatology.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeonatologyPageRoutingModule
  ],
  declarations: [NeonatologyPage]
})
export class NeonatologyPageModule {}
