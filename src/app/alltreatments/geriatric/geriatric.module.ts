import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeriatricPageRoutingModule } from './geriatric-routing.module';

import { GeriatricPage } from './geriatric.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeriatricPageRoutingModule
  ],
  declarations: [GeriatricPage]
})
export class GeriatricPageModule {}
