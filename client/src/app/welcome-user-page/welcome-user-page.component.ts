import { Component, OnInit } from '@angular/core';
// import { ToggleGroup } from 'toggle-group';
import AOS from 'aos';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiUserService } from '../services/api-user.service';
import { Router } from '@angular/router';
import { CookieService} from "ngx-cookie-service";

// import { MatDialog } from '@angular/material/dialog';
interface Option {
  image: string;
  text: string;
}
@Component({
  selector: 'app-welcome-user-page',
  templateUrl: './welcome-user-page.component.html',
  styleUrl: './welcome-user-page.component.css'
})
export class WelcomeUserPageComponent  implements OnInit{

  currentStep = 1;
  languageStep = 1;
  selectedLanguage: string | null = null;
  options: Option[] = [
    {image: '../../assets/images/Group 3594.svg', text: 'Designer'},
    {image: '../../assets/images/Group 3595.svg', text: 'Developer'},
    {image: '../../assets/images/Group 3596.svg', text: 'Freelancer'},
    {image: '../../assets/images/Group 3598.svg', text: 'Other'}
  ];
  // constructor(private dialogRef : MatDialog){}

  ngOnInit(): void {
      AOS.init();
  }


  userinfoForm = new FormGroup(
    {
      userName : new FormControl('', Validators.required),
      frontendData : new FormControl([String]),
      backendData : new FormControl([String]),
      databaseData : new FormControl([String]),
      optionData : new FormControl([String]),
      selectedOption : new FormControl(null, Validators.required)
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

  constructor(private _api: ApiUserService, private _router: Router, private cookieService: CookieService) { }


  gotoNextStep() {  
    if (this.userinfoForm) {
      this.currentStep++;
    }    
  }

  selectLanguage(language: any) {
    this.selectedLanguage = language;
    (this.userinfoForm.get('frontendData') as FormControl).setValue = this.selectLanguage;
    this.userinfoForm.value.frontendData?.push(language);
  }
  backEndClick(language:any)
  {
    this.selectedLanguage = language;
    (this.userinfoForm.get('backendData') as FormControl).setValue = this.selectLanguage;
    this.userinfoForm.value.backendData?.push(language);
  }
  databaseClick(language:any)
  {
    this.selectedLanguage = language;
    (this.userinfoForm.get('databaseData') as FormControl).setValue = this.selectLanguage;
    this.userinfoForm.value.databaseData?.push(language);
  }
  optionClick(language:any)
  {
    this.selectedLanguage = language;
    (this.userinfoForm.get('optionData') as FormControl).setValue = this.selectLanguage;
    this.userinfoForm.value.optionData?.push(language);
  }
  selectOption(option: Option) {
    (this.userinfoForm.get('selectedOption') as FormControl).setValue(option);
  }

  // frontendDataSet(option : string)
  // {
    // (this.userinfoForm.get('frontendData') as FormControl).setValue(option);
  // }

  gotoNextTopic() {
    this.languageStep++;
    console.log(this.userinfoForm.value);
    this.selectedLanguage=null;
  }

  saveData()
  {
    this.cookieService.set("jwt","hemang",{secure:true,expires:900000});
    console.log(this.userinfoForm.value);
    this._api.extradata(this.userinfoForm.value).subscribe((res) => {

      this._router.navigate(['/userhome'])
    });
    console.log("extra data called!");
  }
}