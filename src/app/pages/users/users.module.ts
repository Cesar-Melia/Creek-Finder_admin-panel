import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    CreateUserComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    UsersComponent,
  ],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
