import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuActive: boolean = false;
  isAuth: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  activateMenu(): void {
    this.menuActive = !this.menuActive;

    console.log('menu -->', this.menuActive);
  }
}
