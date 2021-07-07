import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCreekComponent } from './create-creek/create-creek.component';
import { UpdateCreekComponent } from './update-creek/update-creek.component';
import { DeleteCreekComponent } from './delete-creek/delete-creek.component';

const routes: Routes = [
  { path: 'create-creek', component: CreateCreekComponent },
  { path: 'update-creek', component: UpdateCreekComponent },
  { path: 'delete-creek', component: DeleteCreekComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreekRoutingModule { }
