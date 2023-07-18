import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OralPage } from './oral.page';

const routes: Routes = [
  {
    path: '',
    component: OralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OralPageRoutingModule {}
