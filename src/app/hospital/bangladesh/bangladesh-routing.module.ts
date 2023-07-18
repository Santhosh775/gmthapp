import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BangladeshPage } from './bangladesh.page';

const routes: Routes = [
  {
    path: '',
    component: BangladeshPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BangladeshPageRoutingModule {}
