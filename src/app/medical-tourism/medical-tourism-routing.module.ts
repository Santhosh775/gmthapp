import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalTourismPage } from './medical-tourism.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalTourismPage
  },
  {
    path: 'medical',
    loadChildren: () => import('./medical/medical.module').then( m => m.MedicalPageModule)
  },
  {
    path: 'partnered',
    loadChildren: () => import('./partnered/partnered.module').then( m => m.PartneredPageModule)
  },
  {
    path: 'process',
    loadChildren: () => import('./process/process.module').then( m => m.ProcessPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalTourismPageRoutingModule {}
