import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreekRoutingModule } from './creeks-routing.module';
import { CreateCreekComponent } from './pages/create-creek/create-creek.component';
import { UpdateCreekComponent } from './pages/update-creek/update-creek.component';
import { DeleteCreekComponent } from './pages/delete-creek/delete-creek.component';
import { CreeksComponent } from './creeks.component';

@NgModule({
  declarations: [
    CreateCreekComponent,
    UpdateCreekComponent,
    DeleteCreekComponent,
    CreeksComponent,
  ],
  imports: [CommonModule, CreekRoutingModule],
})
export class CreekModule {}
