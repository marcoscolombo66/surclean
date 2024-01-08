import { ModalController } from '@ionic/angular';
/* eslint-disable @typescript-eslint/naming-convention */
import { ImagesproviderService } from './../../imagesprovider.service';
import { IniciarusuarioService } from './../../iniciarusuario.service';
import { Component,OnInit } from '@angular/core';
import { ToastController, NavController,NavParams } from '@ionic/angular';
import { Location } from "@angular/common";
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { Clipboard } from '@capacitor/clipboard';
import {AppConfig} from '../../config'
import { Tab3Page } from 'src/app/tab3/tab3.page';
@Component({
  selector: 'app-comprobante',
  templateUrl: './comprobante.page.html',
  styleUrls: ['./comprobante.page.scss'],
})


export class ComprobantePage implements OnInit {

  image: string;
  isSelected=	false;
  usuario: any;
  SUFFIX: any;
  idOrden: any;
  ifGuardaImagen: any;
  totalSuma: any;
  urlRoot: string = AppConfig.urlRoot;

  constructor(public navCtrl: NavController, public location: Location,
              public ALERT: ToastController,
              public IMAGES: ImagesproviderService,
              public storage: Storage, public navParams: NavParams, public modalCtrl: ModalController,
              public inicia: IniciarusuarioService)
  {
    this.idOrden = this.navParams.get('idOrden');
    this.totalSuma = this.navParams.get('totalSuma');
    this.ifGuardaImagen= true;
    this.urlRoot = this.navParams.get('url_proyecto');
  }
  selectFileToUpload(event): void
  {
    // eslint-disable-next-line no-underscore-dangle
    this.IMAGES
    .handleImageSelection(event)
    .subscribe((res) =>
     {

        // Retrieve the file type from the base64 data URI string
        this.SUFFIX 			= res.split(':')[1].split('/')[1].split(';')[0];


        // Do we have correct file type?
        if(this.IMAGES.isCorrectFileType(this.SUFFIX))
        {

           // Hide the file input field, display the image in the component template
           // and display an upload button
           this.isSelected 	= true;
           this.image 			= res;
           this.displayAlert('Ahora debes hacer click en ENVIAR','light');
        }

        // If we don't alert the user
        else
        {
           this.displayAlert('Tenes que subir una imágen que tenga los siguientes formatos: jpg, gif or png','warning');
        }
     },
     (error) =>
     {
        console.dir(error);
        this.displayAlert(error.message,'warning');
     });
  }

  myBackButton(){
   this.location.back();
 }
  uploadFile(): void
  {
    this.ifGuardaImagen=false;
     
    
     this.IMAGES
     //.uploadImageSelection(this.getUsuario(),
     //.uploadImageSelection(this.idusuario,
     .uploadImageSelection(this.idOrden,
                           this.image,
                           this.SUFFIX,
                           (this.urlRoot)
                           )
     .subscribe((res) =>
     {
        this.displayAlert(res.message,'success');
        this.ifGuardaImagen=true;        
        this.modalCtrl.dismiss();
     },
     (error: any) =>
     {
        this.ifGuardaImagen=true;
        console.dir(error);
        this.displayAlert('Error! Este comprobante ya fue enviado.','warning');
        this.modalCtrl.dismiss();
     });
  }




  /**
   * @public
   * @method displayAlert
   * @param message  {string}  The message to be displayed to the user
   * @description    			Use the Ionic AlertController API to provide user feedback
   * @return {none}
   */


  async displayAlert(message,color) {
   const toast = await this.ALERT.create({
     message,
     duration: 3000,
     position: 'bottom',
     color: color
   });
   toast.present();
 }

 async copiarCbu()
 {
   //total final resto es total final menos el 23% que seria la comision.
   const  cbu = '898798798798798978978';
   Clipboard.write({
     // eslint-disable-next-line id-blacklist
     string: ''+ cbu,
   });
   this.displayAlert('Se copió el CBU:  '+cbu, 'success');
       //Va a ir Link personalizado.
 }
 cancel() {
  
  return this.modalCtrl.dismiss(null, 'cancel');
}

  ngOnInit(){}

}
