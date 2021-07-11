import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  deleteUserForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private deletUserService: UsersService
  ) {
    this.deleteUserForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      userName: ['', [Validators.required]],


    });
  }

  ngOnInit(): void {

  }

  submitDeleteUserForm(event: any): void {
    if (confirm('Estas seguro de querer borrar al usuario?')) {
      this.deletUserService.deleteUser(event.target.id.value)
        .subscribe((deleteUserData: any) => {
          console.log(deleteUserData)
        })

    }
    console.log(this.deleteUserForm)

  }

}
