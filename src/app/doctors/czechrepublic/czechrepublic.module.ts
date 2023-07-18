import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CzechrepublicPageRoutingModule } from './czechrepublic-routing.module';

import { CzechrepublicPage } from './czechrepublic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CzechrepublicPageRoutingModule
  ],
  declarations: [CzechrepublicPage]
})
export class CzechrepublicPageModule {}
