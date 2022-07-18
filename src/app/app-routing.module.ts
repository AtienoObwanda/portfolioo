import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CaseStudyComponent } from './case-study/case-study.component';


const routes: Routes = [
  { path: 'home', component: LandingComponent},
  { path: '', redirectTo:"/home", pathMatch:"full"},
  { path: 'case-study', component: CaseStudyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
