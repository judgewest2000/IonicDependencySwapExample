import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheetController } from 'ionic-angular';

/*
  Generated class for the PhotoTakerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/




export abstract class PhotoTakerProvider {
  abstract takePhoto(): Promise<string>;
}

@Injectable()

export class PhotoTakerProviderImpl implements PhotoTakerProvider {

  constructor(private camera: Camera, public actionSheetCtrl: ActionSheetController) {

  }

  async takePhoto() {

    const size = await this.getSize();
    
    const sourceType = await this.getCameraType();
    
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: sourceType,
      correctOrientation: true,
      targetHeight: size,
      targetWidth: size
    }

    const imageData = await this.camera.getPicture(options);


    return `data:image/jpeg;base64,${imageData}`;
  }


  getCameraType(): Promise<number> {

    return new Promise((resolve, reject) => {
      let actionSheet = this.actionSheetCtrl.create({
        title: 'Camera source',
        buttons: [
          {
            text: 'Camera',
            handler: () => resolve(this.camera.PictureSourceType.CAMERA)
          }, {
            text: 'Photo Library',
            handler: () => resolve(this.camera.PictureSourceType.PHOTOLIBRARY)
          }, {
            text: 'Saved Photo Album',
            handler: () => resolve(this.camera.PictureSourceType.SAVEDPHOTOALBUM)
          }
        ]
      });
      actionSheet.present();
    });
  }


  getSize(): Promise<number> {
    return new Promise((resolve, reject) => {
      let actionSheet = this.actionSheetCtrl.create({
        title: 'Size',
        buttons: [
          {
            text: '150',
            handler: () => resolve(150)
          }, {
            text: '250',
            handler: () => resolve(250)
          }, {
            text: '350',
            handler: () => resolve(350)
          }
        ]
      });
      actionSheet.present();
    });
  }







}

@Injectable()
export class PhotoTakerProviderMock implements PhotoTakerProvider {

  private getImage() {
    return `data:image/png;base64,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`;
  }

  takePhoto(): Promise<string> {
    return new Promise((resolve, reject) => {

      const image = this.getImage();


      resizeImage(150, image, data => {
        resolve(data);
      });



    });
  }



}