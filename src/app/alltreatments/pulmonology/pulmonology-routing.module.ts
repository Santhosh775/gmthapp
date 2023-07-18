import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PulmonologyPage } from './pulmonology.page';

const routes: Routes = [
  {
    path: '',
    component: PulmonologyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PulmonologyPageRoutingModule {}
