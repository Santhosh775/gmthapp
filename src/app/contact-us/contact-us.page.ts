import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {


  email! : string ;  
  name! : string;
  message! : string;
  mobile!  : number;
  subject! : string;

  constructor() { }

  ngOnInit() {
  }


  register(){
    
  }

}
