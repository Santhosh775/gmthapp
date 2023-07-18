import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GermanyPage } from './germany.page';

const routes: Routes = [
  {
    path: '',
    component: GermanyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GermanyPageRoutingModule {}
