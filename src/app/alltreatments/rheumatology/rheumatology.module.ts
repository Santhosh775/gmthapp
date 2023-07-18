import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RheumatologyPageRoutingModule } from './rheumatology-routing.module';

import { RheumatologyPage } from './rheumatology.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RheumatologyPageRoutingModule
  ],
  declarations: [RheumatologyPage]
})
export class RheumatologyPageModule {}
