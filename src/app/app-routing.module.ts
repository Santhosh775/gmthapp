import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'hospital',
    loadChildren: () => import('./hospital/hospital.module').then( m => m.HospitalPageModule)
  },
  {
    path: 'doctors',
    loadChildren: () => import('./doctors/doctors.module').then( m => m.DoctorsPageModule)
  },
  {
    path: 'medical-tourism',
    loadChildren: () => import('./medical-tourism/medical-tourism.module').then( m => m.MedicalTourismPageModule)
  },
  {
    path: 'patient-stories',
    loadChildren: () => import('./patient-stories/patients-stories.module').then( m => m.PatientsStoriesPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'alltreatments',
    loadChildren: () => import('./alltreatments/alltreatments.module').then( m => m.AlltreatmentsPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), IonicModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
