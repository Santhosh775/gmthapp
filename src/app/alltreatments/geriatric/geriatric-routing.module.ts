import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeriatricPage } from './geriatric.page';

const routes: Routes = [
  {
    path: '',
    component: GeriatricPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeriatricPageRoutingModule {}
