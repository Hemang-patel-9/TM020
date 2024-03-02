import { Component, OnInit } from '@angular/core';
import { ToggleGroup } from 'toggle-group';
import AOS from 'aos';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-welcome-user-page',
  templateUrl: './welcome-user-page.component.html',
  styleUrl: './welcome-user-page.component.css'
})
export class WelcomeUserPageComponent  implements OnInit{

  currentStep = 1;
  languageStep = 1;
  constructor(private dialogRef : MatDialog){}

  ngOnInit(): void {
      AOS.init();
  }


  userinfoForm = new FormGroup(
    {
      userName : new FormControl(''),
      professionInfo : new FormControl(''),
      frontendData : new FormControl([]),
      backendData : new FormControl([]),
      databaseData : new FormControl([]),
      otherData : new FormControl([]),
    }
  )


  frontendDataList = [
    {name : 'HTML', img : ''},
    {name : 'CSS', img : ''},
    {name : 'React', img : ''},
    {name : 'JQuery', img : ''},
    {name : 'Bootstrap', img : ''},
    {name : 'Flutter', img : ''},
    {name : 'Tailwind', img : ''},
    {name : 'ViewJS', img : ''},
    {name : 'NextJS', img : ''},
    {name : 'CoreJS', img : ''},
    {name : 'VanilaJS', img : ''},
    {name : 'ExternalLib', img : ''},
    {name : 'Wordpress', img : ''},
    {name : 'Swift', img : ''},
    {name : 'Jengo', img : ''},
    {name : 'SASS', img : ''},
    {name : 'SCSS', img : ''},
    {name : 'Python', img : ''},
    {name : 'Typescript', img : ''},
    {name : 'Angular', img : ''},
    {name : 'Rust', img : ''},
  ]

  backendDataList = [
    {name : 'NodeJS', img: ''},
    {name : 'Express', img: ''},
    {name : 'NPM', img: ''},
    {name : 'PHP', img: ''},
    {name : 'Laravell', img: ''},
    {name : 'Kotlin', img: ''},
    {name : 'Python', img: ''},
    {name : 'Java', img: ''},
    {name : 'C', img: ''},
    {name : 'C++', img: ''},
    {name : 'C#', img: ''},
    {name : 'Ruby', img: ''},
    {name : 'GoLang', img: ''},
    {name : 'R', img: ''},
    {name : 'Malbolge', img: ''},
    {name : 'Perl', img: ''},
    {name : 'Rust', img: ''},
    {name : '.net', img: ''},
    {name : 'Flask', img: ''},
    {name : 'ObjectiveC', img: ''},
  ]

  databaseDataList = [
    {name: 'MySQL', img: ''},
    {name: 'Oracle', img: ''},
    {name: 'Sqlite', img: ''},
    {name: 'MSSQL', img: ''},
    {name: 'PostGraySQL', img: ''},
    {name: 'Kasandra', img: ''},
    {name: 'MongoDB', img: ''},
    {name: 'Raddis', img: ''},
    {name: 'DynemoDB', img: ''},
    {name: 'CosDB', img: ''},
    {name: 'IpmDB', img: ''},
    {name: 'InfinetDB', img: ''},
    {name: 'Neoforj', img: ''},
    {name: 'FirebirdSQL', img: ''},
    {name: 'ElasticSearch', img: ''},
  ]

  otherDataList = [
    {name : 'DSA', img: ''},
    {name : 'Figma', img: ''},
    {name : 'Blender', img: ''},
    {name : 'DAA', img: ''},
    {name : 'WebRTC', img: ''},
    {name : 'DF', img: ''},
    {name : 'SoftwareEng', img: ''},
    {name : 'AI', img: ''},
    {name : 'ML', img: ''},
    {name : 'IOT', img: ''},
    {name : 'Data Mining', img: ''},
    {name : 'Data Science', img: ''},
    {name : 'Block Chain', img: ''},
    {name : 'starbitcoin', img: ''},
    {name : 'Networkaddministrator', img: ''},
    {name : 'SCSU', img: ''},
    {name : 'Big Data', img: ''},
    {name : 'Digital Marketing', img: ''},
  ]

  gotoNextStep(){
    this.currentStep++;
  }

  gotoNextTopic() {
    this.languageStep++;
  }
  
}