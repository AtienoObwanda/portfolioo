import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CaseStudyComponent } from './case-study/case-study.component';
import { IntroComponent } from './intro/intro.component';


const routes: Routes = [
  {path: '', component:IntroComponent},
  // { path: 'case-study', component: CaseStudyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
