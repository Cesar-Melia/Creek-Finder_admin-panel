import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { UsersComponent } from './users.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'update-user/:userId', component: UpdateUserComponent },
  { path: 'update-user', component: UpdateUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
