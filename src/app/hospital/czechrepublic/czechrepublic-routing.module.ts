import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CzechrepublicPage } from './czechrepublic.page';

const routes: Routes = [
  {
    path: '',
    component: CzechrepublicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CzechrepublicPageRoutingModule {}
