import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MalaysiaPageRoutingModule } from './malaysia-routing.module';

import { MalaysiaPage } from './malaysia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MalaysiaPageRoutingModule
  ],
  declarations: [MalaysiaPage]
})
export class MalaysiaPageModule {}
