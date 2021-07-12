import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  userToUpdate: any
  isThereUser: Boolean
  constructor(
    private userService: UsersService
  ) {
    this.userToUpdate = '';
    this.isThereUser = false;
  }

  ngOnInit(): void {
  }


  submitCreateUserForm(event: any): void {
    console.log(event.target.id.value)
    this.userService.getUsersId(event.target.id.value)
      .subscribe((userIdData: any) => {
        console.log(userIdData)
        this.userToUpdate = userIdData
        this.isThereUser = true

      })
  }

  submitEditUser(event: any): void {

    let userOgId = event.target.id.placeholder;


    if (confirm('Estas seguro de actualizar a ' + event.target.userName.value)) {
      let editedUser = {
        userName: event.target.userName.value,
        email: event.target.email.value,
        password: event.target.password.value,
        id: event.target.id.value,
        // role: event.target.role.value
      }
      this.userService.editUser(userOgId, editedUser)
        .subscribe((editedUserData: any) => {
          console.log(editedUserData)
        })
    }
  }

}

