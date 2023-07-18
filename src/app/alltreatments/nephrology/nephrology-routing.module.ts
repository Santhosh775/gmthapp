import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NephrologyPage } from './nephrology.page';

const routes: Routes = [
  {
    path: '',
    component: NephrologyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NephrologyPageRoutingModule {}
