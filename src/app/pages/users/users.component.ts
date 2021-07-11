import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { User } from './models/User';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService],
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(
    private usersService: UsersService,
  ) {
    this.users = [];
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((usersData: any) => {
      console.log('Resultado petición API: ', usersData);

      this.users = usersData;
    });
  }
}
