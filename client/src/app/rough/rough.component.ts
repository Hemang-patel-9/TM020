import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-rough',
  templateUrl: './rough.component.html',
  styleUrl: './rough.component.css'
})
export class RoughComponent implements OnInit {
  constructor(private cookie:CookieService){}

  ngOnInit(): void {}
  Allow()
  {
    console.log("called cookie");
    this.cookie.set("data","hemang",{expires:1})
    this.cookie.set("name","hemangbhai",{expires:1})
  }
  delete()
  {
    this.cookie.delete("data");
    this.cookie.delete("name");
  }
}
