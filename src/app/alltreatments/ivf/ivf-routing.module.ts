import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IVFPage } from './ivf.page';

const routes: Routes = [
  {
    path: '',
    component: IVFPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IVFPageRoutingModule {}
