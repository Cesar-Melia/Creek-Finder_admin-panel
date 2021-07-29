import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  userToUpdate: any;
  isThereUser: Boolean;
  userId: string;

  constructor(private userService: UsersService, private route: ActivatedRoute) {
    this.userId = '';
    this.userToUpdate = '';
    this.isThereUser = false;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.userId = params.get('userId');
      this.getUserFromParams();
    })
  }

  submitCreateUserForm(event: any): void {
    this.userId = event.target.id.value;

    this.userService
      .getUsersId(event.target.id.value)
      .subscribe((userIdData: any) => {
        console.log(userIdData);
        this.userToUpdate = userIdData;
        this.isThereUser = true;
      });
  }

  getUserFromParams(): void {
    this.userService
      .getUsersId(this.userId)
      .subscribe((userIdData: any) => {
        console.log(userIdData);
        this.userToUpdate = userIdData;
        this.isThereUser = true;
      });
  }

  submitEditUser(event: any): void {
    if (
      confirm(
        'Estas seguro de actualizar el usuario: ' + event.target.userName.value
      )
    ) {
      let password;
      let role;
      let img;

      event.target.password.value
        ? (password = event.target.password.value)
        : (password = undefined);

      event.target.role.value
        ? (role = event.target.role.value)
        : (role = undefined);

      // event.target.img.value
      // ? (img = event.target.img.value)
      // : (img = undefined);

      let editedUser = {
        userName: event.target.userName.value,
        email: event.target.email.value,
        password: password,
        role: role,
      };

      this.userService
        .editUser(this.userId, editedUser)
        .subscribe((editedUserData: any) => {
          console.log(editedUserData);

          event.target.role.select = '';
          event.target.userName.value = '';
          event.target.email.value = '';
          event.target.password.value = '';
        });
    }
  }
}
