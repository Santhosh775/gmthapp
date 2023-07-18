import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EgyptPage } from './egypt.page';

const routes: Routes = [
  {
    path: '',
    component: EgyptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EgyptPageRoutingModule {}
