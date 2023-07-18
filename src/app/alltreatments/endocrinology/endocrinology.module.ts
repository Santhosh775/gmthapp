import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EndocrinologyPageRoutingModule } from './endocrinology-routing.module';

import { EndocrinologyPage } from './endocrinology.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EndocrinologyPageRoutingModule
  ],
  declarations: [EndocrinologyPage]
})
export class EndocrinologyPageModule {}
