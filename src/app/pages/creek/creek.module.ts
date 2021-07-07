import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreekRoutingModule } from './creek-routing.module';
import { CreateCreekComponent } from './create-creek/create-creek.component';


@NgModule({
  declarations: [
    CreateCreekComponent
  ],
  imports: [
    CommonModule,
    CreekRoutingModule
  ]
})
export class CreekModule { }
