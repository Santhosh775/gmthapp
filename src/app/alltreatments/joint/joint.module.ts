import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JointPageRoutingModule } from './joint-routing.module';

import { JointPage } from './joint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JointPageRoutingModule
  ],
  declarations: [JointPage]
})
export class JointPageModule {}
