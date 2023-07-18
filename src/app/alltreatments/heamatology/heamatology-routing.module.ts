import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeamatologyPage } from './heamatology.page';

const routes: Routes = [
  {
    path: '',
    component: HeamatologyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeamatologyPageRoutingModule {}
