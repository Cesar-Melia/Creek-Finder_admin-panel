import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreekRoutingModule } from './creeks-routing.module';
import { CreateCreekComponent } from './create-creek/create-creek.component';
import { UpdateCreekComponent } from './update-creek/update-creek.component';
import { DeleteCreekComponent } from './delete-creek/delete-creek.component';


@NgModule({
  declarations: [
    CreateCreekComponent,
    UpdateCreekComponent,
    DeleteCreekComponent
  ],
  imports: [
    CommonModule,
    CreekRoutingModule
  ]
})
export class CreekModule { }
