import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GastroenterologyPage } from './gastroenterology.page';

const routes: Routes = [
  {
    path: '',
    component: GastroenterologyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GastroenterologyPageRoutingModule {}
