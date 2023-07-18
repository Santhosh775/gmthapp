import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ENTPageRoutingModule } from './ent-routing.module';

import { ENTPage } from './ent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ENTPageRoutingModule
  ],
  declarations: [ENTPage]
})
export class ENTPageModule {}
