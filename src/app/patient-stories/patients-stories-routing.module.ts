import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientsStoriesPage } from './patients-stories.page';

const routes: Routes = [
  {
    path: '',
    component: PatientsStoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsStoriesPageRoutingModule {}
