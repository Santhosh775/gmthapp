import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuclearPage } from './nuclear.page';

const routes: Routes = [
  {
    path: '',
    component: NuclearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuclearPageRoutingModule {}
