import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientsStoriesPageRoutingModule } from './patients-stories-routing.module';

import { PatientsStoriesPage } from './patients-stories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientsStoriesPageRoutingModule
  ],
  declarations: [PatientsStoriesPage]
})
export class PatientsStoriesPageModule {}
