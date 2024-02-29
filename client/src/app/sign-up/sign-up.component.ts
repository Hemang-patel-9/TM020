import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import AOS from 'aos'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{
  signupForm = new FormGroup(
    {
      email : new FormControl(''),
      password : new FormControl(''),
      confirmpassword : new FormControl(''),
      rememberMe : new FormControl(false)
    }
  );

  onSubmit()
  {
    console.log(this.signupForm.value);
  }

  ngOnInit(): void {
      AOS.init();
  }
}
