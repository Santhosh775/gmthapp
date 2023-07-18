import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VascularPage } from './vascular.page';

const routes: Routes = [
  {
    path: '',
    component: VascularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VascularPageRoutingModule {}
