import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SouthafricaPageRoutingModule } from './southafrica-routing.module';

import { SouthafricaPage } from './southafrica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouthafricaPageRoutingModule
  ],
  declarations: [SouthafricaPage]
})
export class SouthafricaPageModule {}
