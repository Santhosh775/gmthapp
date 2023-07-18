import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MicrobiologyPage } from './microbiology.page';

const routes: Routes = [
  {
    path: '',
    component: MicrobiologyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MicrobiologyPageRoutingModule {}
