import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './User/loginpage/loginpage.component';
import { RegistrationFormComponent } from './User/registration-form/registration-form.component';
import { ShowdataComponent } from './User/showdata/showdata.component';
import { UploadComponent } from './user/upload/upload.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      redirectTo: "/app-loginpage",
      pathMatch: 'full'
    },
    { path:'app-loginpage', component:LoginpageComponent },
    { path:'app-registration-form', component:RegistrationFormComponent },
    { path: 'app-showdata', component:ShowdataComponent },
    {path:'app-upload', component:UploadComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
