import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContattiComponent } from './contatti/contatti.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contatti', component: ContattiComponent },
  { path: 'chi-siamo', component: ChiSiamoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }