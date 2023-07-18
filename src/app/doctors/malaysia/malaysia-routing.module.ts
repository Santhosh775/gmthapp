import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MalaysiaPage } from './malaysia.page';

const routes: Routes = [
  {
    path: '',
    component: MalaysiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MalaysiaPageRoutingModule {}
