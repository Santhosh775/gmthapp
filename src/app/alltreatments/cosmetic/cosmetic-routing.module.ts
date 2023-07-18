import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CosmeticPage } from './cosmetic.page';

const routes: Routes = [
  {
    path: '',
    component: CosmeticPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CosmeticPageRoutingModule {}
