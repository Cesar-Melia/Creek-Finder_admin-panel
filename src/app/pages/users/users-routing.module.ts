import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';

const routes: Routes = [
  { path: 'create-user', component: CreateUserComponent },
  { path: 'update-user', component: UpdateUserComponent },
  { path: 'delete-user', component: DeleteUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
