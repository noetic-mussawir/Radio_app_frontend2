import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'login' , component : LoginCompComponent},
  {path:'livesms',component:ViewComponent,canActivate:[AuthGuard]},
  {path:'' , redirectTo : 'login' , pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
