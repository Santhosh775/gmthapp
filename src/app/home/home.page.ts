import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  alertButtons!: any[];
  setResult: any;
  handlerMessage: any;
  roleMessage:any;
  router: any;
  constructor(private navCtrl: NavController) {}
  navigateTo(pageName: string) {
    this.router.navigateByUrl(pageName);
  }

  goToLoginPage() {
    this.navCtrl.navigateForward('/login');
  }

}
export class ExampleComponent {
  handlerMessage = '';
  roleMessage = '';

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        this.handlerMessage = 'Alert canceled';
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.handlerMessage = 'Alert confirmed';
      },
    },
  ];

  setResult(ev: { detail: { role: any; }; }) {
    this.roleMessage = `Dismissed with role: ${ev.detail.role}`;
  }
}

