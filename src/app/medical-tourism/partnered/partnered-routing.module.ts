import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartneredPage } from './partnered.page';

const routes: Routes = [
  {
    path: '',
    component: PartneredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartneredPageRoutingModule {}
