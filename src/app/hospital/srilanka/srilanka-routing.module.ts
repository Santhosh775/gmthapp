import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SrilankaPage } from './srilanka.page';

const routes: Routes = [
  {
    path: '',
    component: SrilankaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SrilankaPageRoutingModule {}
