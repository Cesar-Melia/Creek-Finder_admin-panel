import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/pages/users/services/users.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  createUserForm: FormGroup;

  constructor(
    private createUser: UsersService,
    private formBuilder: FormBuilder
  ) {
    this.createUserForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  submitCreateUserForm(): void {
    let newUser = {
      userName: this.createUserForm.value.userName,
      password: this.createUserForm.value.password,
      email: this.createUserForm.value.email,
    };

    this.createUser.createUser(newUser).subscribe((newUserData: User) => {
      console.log('Nuevo usuario creado', newUserData);
    });
  }
}
