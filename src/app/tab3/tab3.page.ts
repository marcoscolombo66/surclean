import { Component, OnInit } from '@angular/core';
import { IniciarusuarioService } from '../iniciarusuario.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { interval} from 'rxjs';
import { ModalController } from '@ionic/angular';
import { Location } from "@angular/common";
import { OrdenPage } from '../modals/orden/orden.page';
import { AppConfig } from 'src/app/config';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  canDismiss = false;
  nomostrar: any;
  consulta: any;
  idUSUARIO: any;
  urlRoot: string = AppConfig.urlRoot;
  constructor(public location: Location, public inicia: IniciarusuarioService,public http: HttpClient, public modalCtrl: ModalController)
  {
this.nomostrar=true;
const numbers = interval(20000);
    numbers.subscribe(()=>{
      this.getOrdenes();
    });
   }

  ngOnInit() {
    this.inicia.verificar();
   this.getOrdenes();
  }
 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
openWindow(url)
{
window.open(url,'_system','location=yes');
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async getOrdenes()
  {
    this.nomostrar=false;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const headers: any		= new HttpHeaders({'Content-Type' : 'application/octet-stream'});

    this.idUSUARIO= await this.inicia.getUser();
        

    const options: any		= {
      //idNEGOCIOS,
      idUsuario: this.idUSUARIO['0'].idUsuario
     };
    //options 	: any		= { "idNEGOCIOS": '1' };

     (this.http.post(this.urlRoot+'/index.php/Api/getOrdenes/',
    JSON.stringify(options), headers))


    //probar crear otra consulta q devuelva valores location y stopover en api php.

    .subscribe(
     (res: any) => {
      this.consulta=res;
      this.nomostrar=true;
      //console.log('reservas',this.reservas);
    },
    (error: any) =>{
     //console.log('error',error);
     //this.presentAlert(' ¡Atención! ','Este vehiculo no esta registrado en el barrio.','Se recomienda llamar al 101');
     this.nomostrar=false;
     console.log(error);
     //this.navCtrl.navigateRoot('/tab3');
    }
    );
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
myBackButton(){
  this.location.back();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
async modalMasInfo(idOrden,fecha,totalCompra,respuesta,dataProductos,procesaPago,metodoPago) {

  const modal = await this.modalCtrl.create({
    component: OrdenPage,
    
    componentProps: {
      idOrden: idOrden,
      fecha: fecha,
      totalCompra: totalCompra,
      respuesta: respuesta,
      dataProductos: dataProductos,
      procesaPago: procesaPago,
      metodoPago: metodoPago
    },
    animated: true,
    canDismiss: true,
    keyboardClose: true,
  });
  await modal.present();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
