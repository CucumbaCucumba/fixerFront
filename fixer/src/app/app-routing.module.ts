import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ValidateComponent } from './validate/validate.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainScreenSalle7Component } from './main-screen-salle7/main-screen-salle7.component';
import { MainScreenAdminComponent } from './main-screen-admin/main-screen-admin.component';
import { AdminGuard, ClientGuard, Salle7Guard } from './guards/client.guard';

const routes: Routes = [
  {path:'admin',component:MainScreenAdminComponent,canActivate: [AdminGuard]},
  {path:'salle7',component:MainScreenSalle7Component,canActivate: [Salle7Guard]},
  {path:'main',component:MainScreenComponent,canActivate: [ClientGuard]},
  {path:'about',component:AboutUsComponent},
  {path:'validate/:email',component:ValidateComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:AcceuilComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
