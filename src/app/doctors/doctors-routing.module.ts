import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorsPage } from './doctors.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorsPage
  },
  {
    path: 'bangladesh',
    loadChildren: () => import('./bangladesh/bangladesh.module').then( m => m.BangladeshPageModule)
  },
  {
    path: 'brazil',
    loadChildren: () => import('./brazil/brazil.module').then( m => m.BrazilPageModule)
  },
  {
    path: 'canada',
    loadChildren: () => import('./canada/canada.module').then( m => m.CanadaPageModule)
  },
  {
    path: 'egypt',
    loadChildren: () => import('./egypt/egypt.module').then( m => m.EgyptPageModule)
  },
  {
    path: 'france',
    loadChildren: () => import('./france/france.module').then( m => m.FrancePageModule)
  },
  {
    path: 'germany',
    loadChildren: () => import('./germany/germany.module').then( m => m.GermanyPageModule)
  },
  {
    path: 'hungary',
    loadChildren: () => import('./hungary/hungary.module').then( m => m.HungaryPageModule)
  },
  {
    path: 'india',
    loadChildren: () => import('./india/india.module').then( m => m.IndiaPageModule)
  },
  {
    path: 'indonesia',
    loadChildren: () => import('./indonesia/indonesia.module').then( m => m.IndonesiaPageModule)
  },
  {
    path: 'iran',
    loadChildren: () => import('./iran/iran.module').then( m => m.IranPageModule)
  },
  {
    path: 'italy',
    loadChildren: () => import('./italy/italy.module').then( m => m.ItalyPageModule)
  },
  {
    path: 'japan',
    loadChildren: () => import('./japan/japan.module').then( m => m.JapanPageModule)
  },
  {
    path: 'koreasouth',
    loadChildren: () => import('./koreasouth/koreasouth.module').then( m => m.KoreasouthPageModule)
  },
  {
    path: 'malaysia',
    loadChildren: () => import('./malaysia/malaysia.module').then( m => m.MalaysiaPageModule)
  },
  {
    path: 'mexico',
    loadChildren: () => import('./mexico/mexico.module').then( m => m.MexicoPageModule)
  },
  {
    path: 'singapore',
    loadChildren: () => import('./singapore/singapore.module').then( m => m.SingaporePageModule)
  },
  {
    path: 'spain',
    loadChildren: () => import('./spain/spain.module').then( m => m.SpainPageModule)
  },
  {
    path: 'srilanka',
    loadChildren: () => import('./srilanka/srilanka.module').then( m => m.SrilankaPageModule)
  },
  {
    path: 'taiwan',
    loadChildren: () => import('./taiwan/taiwan.module').then( m => m.TaiwanPageModule)
  },
  {
    path: 'thailand',
    loadChildren: () => import('./thailand/thailand.module').then( m => m.ThailandPageModule)
  },
  {
    path: 'turkey',
    loadChildren: () => import('./turkey/turkey.module').then( m => m.TurkeyPageModule)
  },
  {
    path: 'unitedkingdom',
    loadChildren: () => import('./unitedkingdom/unitedkingdom.module').then( m => m.UnitedkingdomPageModule)
  },
  {
    path: 'czechrepublic',
    loadChildren: () => import('./czechrepublic/czechrepublic.module').then( m => m.CzechrepublicPageModule)
  },
  {
    path: 'unitedarabemirates',
    loadChildren: () => import('./unitedarabemirates/unitedarabemirates.module').then( m => m.UnitedarabemiratesPageModule)
  },
  {
    path: 'southafrica',
    loadChildren: () => import('./southafrica/southafrica.module').then( m => m.SouthafricaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorsPageRoutingModule {}
