import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MicrobiologyPageRoutingModule } from './microbiology-routing.module';

import { MicrobiologyPage } from './microbiology.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MicrobiologyPageRoutingModule
  ],
  declarations: [MicrobiologyPage]
})
export class MicrobiologyPageModule {}
