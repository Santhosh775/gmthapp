import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoboticsPage } from './robotics.page';

const routes: Routes = [
  {
    path: '',
    component: RoboticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoboticsPageRoutingModule {}
