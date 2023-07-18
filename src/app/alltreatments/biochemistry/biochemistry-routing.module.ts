import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiochemistryPage } from './biochemistry.page';

const routes: Routes = [
  {
    path: '',
    component: BiochemistryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiochemistryPageRoutingModule {}
