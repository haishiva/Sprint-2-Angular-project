import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewpageComponent } from './newpage/newpage.component';
import { MyserviceService } from './myservice.service';


const routes: Routes = [
  {
  path: '',
  component: LoginComponent},
{path: "login",component:LoginComponent},
{path: "register",component:RegisterComponent},
{path:"recovery",component:RecoveryComponent},
{path:"logout",component:LoginComponent},
{path:"home",component:HomepageComponent},
{path:"newpage",component:NewpageComponent, canActivate:[MyserviceService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
