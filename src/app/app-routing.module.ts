import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule) },
  { path: 'creeks', loadChildren: () => import('./pages/creeks/creeks.module').then((m) => m.CreekModule) },
  { path: 'users', loadChildren: () => import('./pages/users/users.module').then((m) => m.UsersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
