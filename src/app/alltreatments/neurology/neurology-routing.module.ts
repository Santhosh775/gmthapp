import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeurologyPage } from './neurology.page';

const routes: Routes = [
  {
    path: '',
    component: NeurologyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeurologyPageRoutingModule {}
