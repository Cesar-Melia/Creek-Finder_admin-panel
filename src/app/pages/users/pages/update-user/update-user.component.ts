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
}
