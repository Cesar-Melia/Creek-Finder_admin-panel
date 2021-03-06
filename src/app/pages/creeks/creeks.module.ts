import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreekRoutingModule } from './creeks-routing.module';
import { CreateCreekComponent } from './pages/create-creek/create-creek.component';
import { UpdateCreekComponent } from './pages/update-creek/update-creek.component';
import { CreeksComponent } from './creeks.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateCreekComponent, UpdateCreekComponent, CreeksComponent],
  imports: [
    CommonModule,
    CreekRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class CreekModule {}
