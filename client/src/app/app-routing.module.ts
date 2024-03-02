import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { WelcomeUserPageComponent } from './welcome-user-page/welcome-user-page.component';

const routes: Routes = [
  {path: '', component: HeroSectionComponent},
  {
    path: 'signup', component: SignUpComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'userhome', component: UserdashboardComponent
  },
  {
    path: 'welcomeuser', component: WelcomeUserPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }