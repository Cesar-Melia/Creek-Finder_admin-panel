import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/pages/users/services/users.service'
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  CreateUserForm: FormGroup;

  constructor(
    private createUser: UsersService,
    private formBuilder: FormBuilder
  ) {
    this.CreateUserForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  submitCreateUserForm(): void {
    console.log(this.CreateUserForm.value.email)

    this.createUser
      .createUser(
        this.CreateUserForm.value.userName,
        this.CreateUserForm.value.password,
        this.CreateUserForm.value.email,
        this.CreateUserForm.value.role)
      .subscribe((newUserData: any) => {
        console.log('Nuevo usuario creado', newUserData)
      })
  }

}
