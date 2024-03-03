import { Component } from '@angular/core';
import { ApiChatService } from '../services/api-chat.service';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { Router } from '@angular/router';
import { ApiUserService } from '../services/api-user.service';
@Component({
  selector: 'app-dashboard-community',
  templateUrl: './dashboard-community.component.html',
  styleUrl: './dashboard-community.component.css'
})
export class DashboardCommunityComponent {
  newMessage = "";
  messageList: { msg: string, sent: boolean }[] = [];
  name: string[] = ["hemang"];
  temp = [
    { name: 'All', img: '../../assets/images/large.png', number: 20101 },
    { name: 'MongoDB', img: '../../assets/images/mongodb-original-wordmark.png', number: 2001 },
    { name: 'Python', img: '../../assets/images/python-original-wordmark.png', number: 2101 },
    { name: 'React', img: '../../assets/images/react-original-wordmark.png', number: 2011 },
    { name: 'Swift', img: '../../assets/images/swift-original.png', number: 10101 },
    { name: 'Tailwind', img: '../../assets/images/tailwindcss-plain.png', number: 20341 },
    { name: 'JavaScript', img: '../../assets/images/javascript-original.png', number: 101 },
  ]

  temp2 = [
    { icon: '../../assets/images/javascript-original.png', name: 'JavaScript Universe', desc: 'The official server for Midjourney, a text-to-image AI where your imagination is the only limit.', member: '13397765 Members', bg: '../../assets/images/Image.png' },
    { icon: '../../assets/images/Image-1.png', name: 'World of C', desc: 'A space for developers and enthusiasts to collaborate and share creations built with OpenAIs powerful models.', member: '3105794 Members', bg: '../../assets/images/Image-2.png' },
    { icon: '../../assets/images/Image-3.png', name: 'The Linked Data Structure', desc: 'Sui is a boundless platform to build rich and dynamic on-chain assets from gaming to finance.', member: '654681 Members', bg: '../../assets/images/Image-4.png' },
    { icon: '../../assets/images/Image-5.png', name: 'Java Issues 😩', desc: 'The official VALORANT Discord server, in collaboration with Riot Games. Find the latest news and talk about the game!', member: '305531 Online', bg: '../../assets/images/Image-6.png' }
  ]

  currentpage = 1;

  constructor(private chat: ApiChatService,private router:Router,private _user:ApiUserService) { }
  ngOnInit() {
    this.chat.getNewMessage().subscribe((message: string) => {
      this.messageList.push({ msg: message, sent: false });
    });
  }

  sendMessage() {
    this.chat.sendMessage(this.newMessage, this.name);
    this.messageList.push({ msg: this.newMessage, sent: true });
    this.newMessage = "";
  }
  onnextstep() {
    this.currentpage = 2;
  }
  onbeforestep() {
    this.currentpage = 1;
  }

  showCall(){

    this._user.vCall().subscribe(res=>{
      
    })

  }
}