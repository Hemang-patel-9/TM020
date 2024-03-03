import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { io } from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class ApiChatService {

  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() { }

  socket = io('http://localhost:3000');

  public sendMessage(message: any, name: any) {
    console.log('sendMessage: ', message)
    this.socket.emit('message', message, name);
  }

  public getNewMessage = () => {
    this.socket.on('message', (message) => {
      this.message$.next(message);
    });

    return this.message$.asObservable();
  };
}
