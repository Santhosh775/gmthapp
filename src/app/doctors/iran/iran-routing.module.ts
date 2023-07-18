import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IranPage } from './iran.page';

const routes: Routes = [
  {
    path: '',
    component: IranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IranPageRoutingModule {}
