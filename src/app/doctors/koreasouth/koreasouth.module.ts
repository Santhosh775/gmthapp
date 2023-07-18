import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KoreasouthPageRoutingModule } from './koreasouth-routing.module';

import { KoreasouthPage } from './koreasouth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KoreasouthPageRoutingModule
  ],
  declarations: [KoreasouthPage]
})
export class KoreasouthPageModule {}
