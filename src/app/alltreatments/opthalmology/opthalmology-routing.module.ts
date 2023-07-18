import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpthalmologyPage } from './opthalmology.page';

const routes: Routes = [
  {
    path: '',
    component: OpthalmologyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpthalmologyPageRoutingModule {}
