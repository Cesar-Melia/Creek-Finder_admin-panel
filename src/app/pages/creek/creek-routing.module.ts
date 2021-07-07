import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCreekComponent } from './create-creek/create-creek.component';

const routes: Routes = [
  { path: 'create-creek', component: CreateCreekComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreekRoutingModule { }
