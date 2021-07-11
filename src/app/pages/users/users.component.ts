import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { User } from './models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService],
})
export class UsersComponent implements OnInit {
  users: User[];
  filteredUsers: User[];
  filter: { userName: string, email: string, role: string };
  filterRole: string;

  constructor(
    private usersService: UsersService,
  ) {
    this.users = [];
    this.filteredUsers = [];
    this.filter = { userName: '', email: '', role: '' };
    this.filterRole = '';
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((usersData: any) => {
      console.log('Resultado petición API: ', usersData);

      this.users = usersData;
      this.filteredUsers = usersData;
    });
  }

  filterUser(): void {
    this.filteredUsers = this.users

    this.filteredUsers = this.filteredUsers.filter((user) => {
      return user.userName.toLowerCase().includes(this.filter.userName.toLowerCase())
    })
  }
  filterUserEmail(): void {
    this.filteredUsers = this.users

    this.filteredUsers = this.filteredUsers.filter((user) => {
      return user.email.toLowerCase().includes(this.filter.email.toLowerCase())
    })
  }

  filterUserRole(): void {
    this.filteredUsers = this.users

    this.filteredUsers = this.filteredUsers.filter((user) => {
      return user.role?.toLowerCase().includes(this.filterRole.toLowerCase())
    })
  }
}
