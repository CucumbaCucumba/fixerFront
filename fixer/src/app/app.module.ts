import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ValidateComponent } from './validate/validate.component';
import { AuthInterceptor } from './interceptors/token-interceptor.interceptor';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { Salle7SearchComponent } from './salle7-search/salle7-search.component';
import { ProfessionsSideComponent } from './professions-side/professions-side.component';
import { Salle7ListComponent } from './salle7-list/salle7-list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainScreenSalle7Component } from './main-screen-salle7/main-screen-salle7.component';
import { MainScreenAdminComponent } from './main-screen-admin/main-screen-admin.component';
import { ValidSalle7Component } from './valid-salle7/valid-salle7.component';




@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    LoginComponent,
    RegisterComponent,
    ValidateComponent,
    MainScreenComponent,
    Salle7SearchComponent,
    ProfessionsSideComponent,
    Salle7ListComponent,
    AboutUsComponent,
    MainScreenSalle7Component,
    MainScreenAdminComponent,
    ValidSalle7Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
