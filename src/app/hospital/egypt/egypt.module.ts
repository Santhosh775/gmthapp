import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EgyptPageRoutingModule } from './egypt-routing.module';

import { EgyptPage } from './egypt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EgyptPageRoutingModule
  ],
  declarations: [EgyptPage]
})
export class EgyptPageModule {}
