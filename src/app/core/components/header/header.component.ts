import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuActive: boolean;
  isAuth: boolean;
  userLogged: Object | undefined;
  logout: Function;

  constructor(private authService: AuthService) {
    this.menuActive = false;
    this.isAuth = false;
    this.userLogged = undefined;
    this.logout = authService.logout;
  }

  ngOnInit(): void {
    const checkUser = async () => {
      this.userLogged = await this.authService.checksession();

      this.userLogged && (this.isAuth = true);

      console.log('Usuario logueado: ', this.userLogged);
    };

    checkUser();
  }

  activateMenu(): void {
    this.menuActive = !this.menuActive;

    console.log('menu -->', this.menuActive);
  }
}
