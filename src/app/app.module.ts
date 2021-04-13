import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModuleModule } from './User/loginpage/login-module.module';
import { UserRegistrationModule } from './User/registration-form/user-registration.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ShowDataModule } from './User/showdata/show-data.module';
// import { UploadModule } from './User/upload/upload.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    LoginModuleModule,
    UserRegistrationModule,
    ShowDataModule,
    // UploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
