import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HepatologyPage } from './hepatology.page';

const routes: Routes = [
  {
    path: '',
    component: HepatologyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HepatologyPageRoutingModule {}
