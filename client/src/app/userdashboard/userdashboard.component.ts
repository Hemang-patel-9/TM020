import { Component } from '@angular/core';
import { ApiUserService } from '../services/api-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {

  number = 10;

  currentUser:any = {
    name:"",
    email:""
  };

  courseList = [
    { name: 'HTML', icon: '', progress: 80 },
    { name: 'Tailwind', icon: '', progress: 0 },
    { name: 'NodeJS', icon: '', progress: 70 },
    { name: 'JAVA', icon: '', progress: 10 },
    { name: 'MySQL', icon: '', progress: 20 },
    { name: 'MongoDB', icon: '', progress: 30 },
    { name: 'Figma', icon: '', progress: 90 },
    { name: 'DSA', icon: '', progress: 50 },
  ]

  constructor(private _api: ApiUserService, private _router: Router) { }

  ngOnInit() {
    this._api.getOne().subscribe(res => {
      this.currentUser = res;
    })
    console.log(this.currentUser);

    

  }

}