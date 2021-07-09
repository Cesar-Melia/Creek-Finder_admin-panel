import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { CreateUserComponent } from './components/create-user/create-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UsersComponent } from './components/users.component';

@NgModule({
  declarations: [
    CreateUserComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    UsersComponent,
  ],
  imports: [CommonModule, UsersRoutingModule, HttpClientModule],
})
export class UsersModule {}
