import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import AOS from 'aos'
import { ApiUserService } from '../services/api-user.service';
import { Router } from '@angular/router';
import { getAuth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import 'firebase/auth';
import {AuthService} from '../services/auth-google.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  signupForm = new FormGroup(
    {
      email: new FormControl(''),
      password: new FormControl(''),
      confirmpassword: new FormControl(''),
      rememberMe: new FormControl(false)
    }
  );
  notMatch = false

  constructor(private _api: ApiUserService, private _router: Router,private authService:AuthService) { }

  onSubmit() {
    console.log(this.signupForm.value);
  }

  ngOnInit(): void {
    AOS.init();
  }

  adduser() {
    console.log(this.signupForm.value);

    if (this.signupForm.value.password != this.signupForm.value.confirmpassword) {
      location.reload();
      return;
    }

    this._api.register(this.signupForm.value).subscribe((res) => {
      this._router.navigate(['/welcomeuser'])
    });

    this._api.email = this.signupForm.value.email;
  }

  loginWithGoogle() {
    // this.authService.GoogleAuth();
    // const auth = getAuth();
    // return signInWithPopup(auth, new GoogleAuthProvider());
  }

}
