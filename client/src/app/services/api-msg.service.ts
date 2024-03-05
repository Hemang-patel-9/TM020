import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiMsgService {

  constructor(private http: HttpClient) { }
  mail(data: any) {
    return this.http.post('http://localhost:8000/sendmail', data);
  }
}
