import { Component, OnInit } from '@angular/core';
import { IniciarusuarioService } from '../../iniciarusuario.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { NavParams } from '@ionic/angular';
import { interval} from 'rxjs';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { Clipboard } from '@capacitor/clipboard';
import { ComprobantePage } from '../comprobante/comprobante.page';
import { AppConfig } from 'src/app/config';
@Component({
  selector: 'app-orden',
  templateUrl: './orden.page.html',
  styleUrls: ['./orden.page.scss'],
})
export class OrdenPage implements OnInit {
// eslint-disable-next-line @typescript-eslint/naming-convention

      procesaPago: any = this.navParams.get('procesaPago');
      idOrden : any =this.navParams.get('idOrden');
      fecha : any =this.navParams.get('fecha');
      totalCompra : any =this.navParams.get('totalCompra');
      respuesta : any =this.navParams.get('respuesta');
      metodoPago : any =this.navParams.get('metodoPago');
      dataProductos: any[] = [];
      isModalOpen = false;
      urlRoot: string = AppConfig.urlRoot;

      
// eslint-disable-next-line @typescript-eslint/naming-convention
      nomostrar: any;
      chats: any;


public myForm: FormGroup;
mensaje: any;
constructor(public http: HttpClient, public navParams: NavParams,public modalCtrl: ModalController,
  public inicia: IniciarusuarioService, public formBuilder: FormBuilder, public toastController: ToastController)
  {      
    this.nomostrar=true;
          
  }
  async copiarCbu()
  {
    //total final resto es total final menos el 23% que seria la comision.
    const  cbu = '898798798798798978978';
    Clipboard.write({
      // eslint-disable-next-line id-blacklist
      string: ''+ cbu,
    });
    this.presentToast('Se copió el CBU:  '+cbu);
        //Va a ir Link personalizado.
  }
  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      //header: 'Toast header',
      message: mensaje,
      duration: 2000,
      position: 'middle',
      color: 'primary',
      buttons: [
        {
          side: 'start',
          icon: 'cash-sharp',          
          handler: () => {
            //console.log('Favorite clicked');
          },
        },
        {
          icon: 'close',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');
          },
        },
      ],
      });
    toast.present();
    }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  ngOnInit() {
    var dataString = this.navParams.get('dataProductos');
    
    
    try {
      this.dataProductos = JSON.parse(dataString);

      //console.log('tipo',typeof this.dataProductos);
      
        //console.log('Datos parseados:', this.dataProductos);
    
      
    } catch (error) {
      console.error('Error al parsear la cadena JSON:', error);
    } 
    
  }
  urlPago(respuesta){
    window.open(respuesta,'_system','location=yes');
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
async subirComprobante() {

  const modal = await this.modalCtrl.create({
    component: ComprobantePage,
   // breakpoints: [0, 0.99],
    //initialBreakpoint: 0.99,
    handle: true,
    componentProps: {
      idOrden: this.idOrden,
      totalSuma: this.totalCompra
    },
    animated: true,
    canDismiss: true,
    showBackdrop: true,
  });
  await modal.present();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
