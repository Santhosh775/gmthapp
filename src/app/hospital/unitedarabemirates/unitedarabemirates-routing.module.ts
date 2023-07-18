import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnitedarabemiratesPage } from './unitedarabemirates.page';

const routes: Routes = [
  {
    path: '',
    component: UnitedarabemiratesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitedarabemiratesPageRoutingModule {}
