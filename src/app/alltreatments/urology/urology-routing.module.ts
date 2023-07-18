import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrologyPage } from './urology.page';

const routes: Routes = [
  {
    path: '',
    component: UrologyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UrologyPageRoutingModule {}
