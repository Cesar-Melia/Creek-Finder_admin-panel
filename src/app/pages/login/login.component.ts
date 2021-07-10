import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  //Comprobar si se puede usar directamente.
  login(email: string, password: string): void {
    this.authService.login(email, password).subscribe((loginData: any) => {
      console.log('Usuario logueado: ', loginData);
    });
  }
}
