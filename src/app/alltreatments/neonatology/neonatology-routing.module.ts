import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeonatologyPage } from './neonatology.page';

const routes: Routes = [
  {
    path: '',
    component: NeonatologyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeonatologyPageRoutingModule {}
