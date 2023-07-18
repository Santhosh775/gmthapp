import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoboticsPageRoutingModule } from './robotics-routing.module';

import { RoboticsPage } from './robotics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoboticsPageRoutingModule
  ],
  declarations: [RoboticsPage]
})
export class RoboticsPageModule {}
