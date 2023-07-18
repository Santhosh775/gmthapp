import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpinePage } from './spine.page';

const routes: Routes = [
  {
    path: '',
    component: SpinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpinePageRoutingModule {}
