import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Aos from 'aos';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm = new FormGroup(
    {
      email : new FormControl(''),
      password : new FormControl('')
    }
  )

  onSubmit()
  {
    console.log(this.loginForm.value);
    
  }

  ngOnInit(): void {
      Aos.init();
  }
}
