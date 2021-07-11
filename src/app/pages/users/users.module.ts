import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { CreateUserComponent } from './pages/create-user/create-user.component';
import { DeleteUserComponent } from './pages/delete-user/delete-user.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { UsersComponent } from './users.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateUserComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    UsersComponent,
  ],
  imports: [CommonModule, UsersRoutingModule, HttpClientModule, ReactiveFormsModule],
})
export class UsersModule { }
