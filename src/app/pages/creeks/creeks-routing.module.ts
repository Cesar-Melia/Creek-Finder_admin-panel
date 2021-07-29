import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCreekComponent } from './pages/create-creek/create-creek.component';
import { UpdateCreekComponent } from './pages/update-creek/update-creek.component';
import { CreeksComponent } from './creeks.component';

const routes: Routes = [
  { path: '', component: CreeksComponent },
  { path: 'create-creek', component: CreateCreekComponent },
  { path: 'update-creek/:creekId', component: UpdateCreekComponent },
  { path: 'update-creek', component: UpdateCreekComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreekRoutingModule {}
