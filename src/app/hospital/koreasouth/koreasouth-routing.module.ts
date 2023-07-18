import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KoreasouthPage } from './koreasouth.page';

const routes: Routes = [
  {
    path: '',
    component: KoreasouthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KoreasouthPageRoutingModule {}
