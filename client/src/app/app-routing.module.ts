import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { DashboardCommunityComponent } from './dashboard-community/dashboard-community.component';
import { DashboardCoursesComponent } from './dashboard-courses/dashboard-courses.component';
import { DashboardQuizComponent } from './dashboard-quiz/dashboard-quiz.component';
import { DashboardTechtokensComponent } from './dashboard-techtokens/dashboard-techtokens.component';
import { HeroCoursesComponent } from './hero-courses/hero-courses.component';
import { HeroQuizComponent } from './hero-quiz/hero-quiz.component';
import { HeroAboutComponent } from './hero-about/hero-about.component';
import { HeroHelpComponent } from './hero-help/hero-help.component';
import { WelcomeUserPageComponent } from './welcome-user-page/welcome-user-page.component';

const routes: Routes = [
  { path: '', component: HeroSectionComponent },
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
    path: 'usercommunity', component: DashboardCommunityComponent
  },
  {
    path: 'usercourses', component: DashboardCoursesComponent
  },
  {
    path: 'userquiz', component: DashboardQuizComponent
  },
  {
    path: 'usertechtokens', component: DashboardTechtokensComponent
  },
  {
    path: 'hero-courses', component: HeroCoursesComponent
  },
  {
    path: 'hero-quiz', component: HeroQuizComponent
  },
  {
    path: 'hero-about', component: HeroAboutComponent
  },
  {
    path: 'hero-help', component: HeroHelpComponent
  },
  {
    path:'welcomeuser',component:WelcomeUserPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
