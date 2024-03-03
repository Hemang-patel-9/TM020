import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { WelcomeUserPageComponent } from './welcome-user-page/welcome-user-page.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HeroCoursesComponent } from './hero-courses/hero-courses.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardCommunityComponent } from './dashboard-community/dashboard-community.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HelloComponent } from './videocall/hello.component';
import { HeroQuizComponent } from './hero-quiz/hero-quiz.component';
import { HeroAboutComponent } from './hero-about/hero-about.component';
import { HeroHelpComponent } from './hero-help/hero-help.component';
import { DashboardCoursesComponent } from './dashboard-courses/dashboard-courses.component';
import { DashboardQuizComponent } from './dashboard-quiz/dashboard-quiz.component';
import { DashboardTechtokensComponent } from './dashboard-techtokens/dashboard-techtokens.component';
@NgModule({
  declarations: [
    AppComponent,
    UserdashboardComponent,
    WelcomeUserPageComponent,
    LoginComponent,
    SignUpComponent,
    HeroSectionComponent,
    HeroCoursesComponent,
    DashboardCommunityComponent,
    HelloComponent,
    HeroQuizComponent,
    HeroAboutComponent,
    HeroHelpComponent,
    DashboardCoursesComponent,
    DashboardQuizComponent,
    DashboardTechtokensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp({ "projectId": "auth-practice-620eb", "appId": "1:781210580581:web:f249216543456a47b4b88c", "storageBucket": "auth-practice-620eb.appspot.com", "apiKey": "AIzaSyCQaElP6JlAEhCDFTUHXg23mUENPUxz2JY", "authDomain": "auth-practice-620eb.firebaseapp.com", "messagingSenderId": "781210580581" })),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    provideFirestore(() => getFirestore()),
    provideRemoteConfig(() => getRemoteConfig()),
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }