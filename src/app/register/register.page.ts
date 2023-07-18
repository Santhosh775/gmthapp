import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  firstName!: string;
  lastName!: string;
  email!: string;
  mobileNo!: string;
  passportNo!: string;
  password!: string;
  confirmPassword!: string;

  constructor(private alertController: AlertController) {}

  async register() {
  
    if (!this.firstName || !this.lastName) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Please enter your first name and last name',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }
  
    if (this.password !== this.confirmPassword) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Passwords do not match',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }
  
    if (!/^\d+$/.test(this.mobileNo)) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Mobile number should only contain numbers',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }
  
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.mobileNo = '';
    this.passportNo = '';
    this.password = '';
    this.confirmPassword = '';
  
    
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Registration successful',
      buttons: ['OK'],
    });
    await alert.present();
  }
  
}
