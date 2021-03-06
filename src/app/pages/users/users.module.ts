import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { CreateUserComponent } from './pages/create-user/create-user.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { UsersComponent } from './users.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateUserComponent, UpdateUserComponent, UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class UsersModule {}
