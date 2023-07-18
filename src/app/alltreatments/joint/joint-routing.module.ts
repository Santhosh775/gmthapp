import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JointPage } from './joint.page';

const routes: Routes = [
  {
    path: '',
    component: JointPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JointPageRoutingModule {}
