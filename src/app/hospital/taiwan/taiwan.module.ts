import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaiwanPageRoutingModule } from './taiwan-routing.module';

import { TaiwanPage } from './taiwan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaiwanPageRoutingModule
  ],
  declarations: [TaiwanPage]
})
export class TaiwanPageModule {}
