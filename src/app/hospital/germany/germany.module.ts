import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GermanyPageRoutingModule } from './germany-routing.module';

import { GermanyPage } from './germany.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GermanyPageRoutingModule
  ],
  declarations: [GermanyPage]
})
export class GermanyPageModule {}
