import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ENTPage } from './ent.page';

const routes: Routes = [
  {
    path: '',
    component: ENTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ENTPageRoutingModule {}
