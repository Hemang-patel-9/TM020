import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {
  apiurl = "http://localhost:8000"
  email: any = "";

  constructor(private _http: HttpClient) { }

  register(user: any) {
    return this._http.post(this.apiurl + "/user", user);
  }

  signin(user: any) {
    return this._http.post(this.apiurl + "/user/signin", user);
  }

  extradata(user: any) {
    return this._http.patch(this.apiurl + "/user/" + this.email, user);
  }

  getOne() {
    return this._http.get(this.apiurl + "/user/" + this.email);
  }

  vCall(){
    return this._http.get(this.apiurl +"/user/videocall");
  }
}
