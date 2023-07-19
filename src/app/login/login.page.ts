import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email!: string;
  password!: string;
  router: any;

  constructor(private navCtrl: NavController) {}

  login() {
   
    this.router.navigate(['/home']);
    }
  }
