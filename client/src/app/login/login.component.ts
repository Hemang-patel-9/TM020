import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Aos from 'aos';
import { ApiUserService } from '../services/api-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm = new FormGroup(
    {
      email : new FormControl(''),
      password : new FormControl(''),
      remeberME : new FormControl(false)
    }
  )

  constructor(private _api: ApiUserService, private _router: Router) { }

  ngOnInit(): void {
      Aos.init();
  }

  login(){
    console.log(this.loginForm.value);
    
    this._api.signin(this.loginForm.value).subscribe(res=>{
      this._api.email=this.loginForm.value.email;
      this._router.navigate(['/userhome']);
    })
  }
}