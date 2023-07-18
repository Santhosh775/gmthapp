import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouthafricaPage } from './southafrica.page';

const routes: Routes = [
  {
    path: '',
    component: SouthafricaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouthafricaPageRoutingModule {}
