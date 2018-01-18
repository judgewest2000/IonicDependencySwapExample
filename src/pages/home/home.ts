import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotoTakerProvider } from '../../providers/photo-taker/photo-taker';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private photoTakerProvider: PhotoTakerProvider) {

  }

  imageSrc = '';

  async takePhoto() {
    const result = await this.photoTakerProvider.takePhoto();
    this.imageSrc = result;
  }

}
