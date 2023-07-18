import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrthopedicsPage } from './orthopedics.page';

const routes: Routes = [
  {
    path: '',
    component: OrthopedicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrthopedicsPageRoutingModule {}
