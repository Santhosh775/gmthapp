import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnitedarabemiratesPageRoutingModule } from './unitedarabemirates-routing.module';

import { UnitedarabemiratesPage } from './unitedarabemirates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnitedarabemiratesPageRoutingModule
  ],
  declarations: [UnitedarabemiratesPage]
})
export class UnitedarabemiratesPageModule {}
