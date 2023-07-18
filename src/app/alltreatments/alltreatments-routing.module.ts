import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlltreatmentsPage } from './alltreatments.page';

const routes: Routes = [
  {
    path: '',
    component: AlltreatmentsPage
  },
  {
    path: 'allergy',
    loadChildren: () => import('./allergy/allergy.module').then( m => m.AllergyPageModule)
  },
  {
    path: 'anesthesiology',
    loadChildren: () => import('./anesthesiology/anesthesiology.module').then( m => m.AnesthesiologyPageModule)
  },
  {
    path: 'biochemistry',
    loadChildren: () => import('./biochemistry/biochemistry.module').then( m => m.BiochemistryPageModule)
  },
  {
    path: 'cardiology',
    loadChildren: () => import('./cardiology/cardiology.module').then( m => m.CardiologyPageModule)
  },
  {
    path: 'cosmetic',
    loadChildren: () => import('./cosmetic/cosmetic.module').then( m => m.CosmeticPageModule)
  },
  {
    path: 'dental',
    loadChildren: () => import('./dental/dental.module').then( m => m.DentalPageModule)
  },
  {
    path: 'dermatology',
    loadChildren: () => import('./dermatology/dermatology.module').then( m => m.DermatologyPageModule)
  },
  {
    path: 'endocrinology',
    loadChildren: () => import('./endocrinology/endocrinology.module').then( m => m.EndocrinologyPageModule)
  },
  {
    path: 'ent',
    loadChildren: () => import('./ent/ent.module').then( m => m.ENTPageModule)
  },
  {
    path: 'gastroenterology',
    loadChildren: () => import('./gastroenterology/gastroenterology.module').then( m => m.GastroenterologyPageModule)
  },
  {
    path: 'general',
    loadChildren: () => import('./general/general.module').then( m => m.GeneralPageModule)
  },
  {
    path: 'geriatric',
    loadChildren: () => import('./geriatric/geriatric.module').then( m => m.GeriatricPageModule)
  },
  {
    path: 'gynecology',
    loadChildren: () => import('./gynecology/gynecology.module').then( m => m.GynecologyPageModule)
  },
  {
    path: 'heamatology',
    loadChildren: () => import('./heamatology/heamatology.module').then( m => m.HeamatologyPageModule)
  },
  {
    path: 'hepatology',
    loadChildren: () => import('./hepatology/hepatology.module').then( m => m.HepatologyPageModule)
  },
  {
    path: 'infectious',
    loadChildren: () => import('./infectious/infectious.module').then( m => m.InfectiousPageModule)
  },
  {
    path: 'internal',
    loadChildren: () => import('./internal/internal.module').then( m => m.InternalPageModule)
  },
  {
    path: 'ivf',
    loadChildren: () => import('./ivf/ivf.module').then( m => m.IVFPageModule)
  },
  {
    path: 'joint',
    loadChildren: () => import('./joint/joint.module').then( m => m.JointPageModule)
  },
  {
    path: 'microbiology',
    loadChildren: () => import('./microbiology/microbiology.module').then( m => m.MicrobiologyPageModule)
  },
  {
    path: 'neonatology',
    loadChildren: () => import('./neonatology/neonatology.module').then( m => m.NeonatologyPageModule)
  },
  {
    path: 'nephrology',
    loadChildren: () => import('./nephrology/nephrology.module').then( m => m.NephrologyPageModule)
  },
  {
    path: 'neurology',
    loadChildren: () => import('./neurology/neurology.module').then( m => m.NeurologyPageModule)
  },
  {
    path: 'nuclear',
    loadChildren: () => import('./nuclear/nuclear.module').then( m => m.NuclearPageModule)
  },
  {
    path: 'nutrition',
    loadChildren: () => import('./nutrition/nutrition.module').then( m => m.NutritionPageModule)
  },
  {
    path: 'obesity',
    loadChildren: () => import('./obesity/obesity.module').then( m => m.ObesityPageModule)
  },
  {
    path: 'oncology',
    loadChildren: () => import('./oncology/oncology.module').then( m => m.OncologyPageModule)
  },
  {
    path: 'opthalmology',
    loadChildren: () => import('./opthalmology/opthalmology.module').then( m => m.OpthalmologyPageModule)
  },
  {
    path: 'oral',
    loadChildren: () => import('./oral/oral.module').then( m => m.OralPageModule)
  },
  {
    path: 'orthopedics',
    loadChildren: () => import('./orthopedics/orthopedics.module').then( m => m.OrthopedicsPageModule)
  },
  {
    path: 'pathology',
    loadChildren: () => import('./pathology/pathology.module').then( m => m.PathologyPageModule)
  },
  {
    path: 'pediatrics',
    loadChildren: () => import('./pediatrics/pediatrics.module').then( m => m.PediatricsPageModule)
  },
  {
    path: 'physiotherapy',
    loadChildren: () => import('./physiotherapy/physiotherapy.module').then( m => m.PhysiotherapyPageModule)
  },
  {
    path: 'psychiatry',
    loadChildren: () => import('./psychiatry/psychiatry.module').then( m => m.PsychiatryPageModule)
  },
  {
    path: 'pulmonology',
    loadChildren: () => import('./pulmonology/pulmonology.module').then( m => m.PulmonologyPageModule)
  },
  {
    path: 'radiology',
    loadChildren: () => import('./radiology/radiology.module').then( m => m.RadiologyPageModule)
  },
  {
    path: 'rheumatology',
    loadChildren: () => import('./rheumatology/rheumatology.module').then( m => m.RheumatologyPageModule)
  },
  {
    path: 'robotics',
    loadChildren: () => import('./robotics/robotics.module').then( m => m.RoboticsPageModule)
  },
  {
    path: 'sexual',
    loadChildren: () => import('./sexual/sexual.module').then( m => m.SexualPageModule)
  },
  {
    path: 'spine',
    loadChildren: () => import('./spine/spine.module').then( m => m.SpinePageModule)
  },
  {
    path: 'transplant',
    loadChildren: () => import('./transplant/transplant.module').then( m => m.TransplantPageModule)
  },
  {
    path: 'urology',
    loadChildren: () => import('./urology/urology.module').then( m => m.UrologyPageModule)
  },
  {
    path: 'vascular',
    loadChildren: () => import('./vascular/vascular.module').then( m => m.VascularPageModule)
  },
  {
    path: 'weight',
    loadChildren: () => import('./weight/weight.module').then( m => m.WeightPageModule)
  },
  {
    path: 'wellness',
    loadChildren: () => import('./wellness/wellness.module').then( m => m.WellnessPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlltreatmentsPageRoutingModule {}
