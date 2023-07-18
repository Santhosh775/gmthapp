import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsychiatryPage } from './psychiatry.page';

const routes: Routes = [
  {
    path: '',
    component: PsychiatryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PsychiatryPageRoutingModule {}
