import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // providers: [AuthService],
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void { }

  submitForm(): void {
    console.log('Campos formulario: ', this.loginForm);
    console.log('Campo email: ', this.loginForm.value.email);
    console.log('Campo password: ', this.loginForm.value.password);

    this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe((loginData: any) => {
        console.log('Usuario logueado: ', loginData);
      });
  }
}
