import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoFormComponent } from './auto/auto-form/auto-form.component';
import { AutoComponent } from './auto/auto.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : "auto", component: AutoComponent},
  {path : "auto/form", component: AutoFormComponent},
  {path : "auto/form/:patente", component: AutoFormComponent},
  {path : "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
