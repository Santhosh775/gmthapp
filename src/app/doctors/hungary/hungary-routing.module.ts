import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HungaryPage } from './hungary.page';

const routes: Routes = [
  {
    path: '',
    component: HungaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HungaryPageRoutingModule {}
