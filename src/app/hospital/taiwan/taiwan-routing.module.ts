import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaiwanPage } from './taiwan.page';

const routes: Routes = [
  {
    path: '',
    component: TaiwanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaiwanPageRoutingModule {}
