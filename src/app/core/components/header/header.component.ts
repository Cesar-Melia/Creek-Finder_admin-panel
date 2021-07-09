import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuActive: boolean;
  isAuth: boolean;

  constructor() {
    this.menuActive = false;
    this.isAuth = false;
  }

  ngOnInit(): void {}

  activateMenu(): void {
    this.menuActive = !this.menuActive;

    console.log('menu -->', this.menuActive);
  }
}
