/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { IniciarusuarioService } from '../../iniciarusuario.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { LoadingController, NavController, NavParams } from '@ionic/angular';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ModalController,ToastController } from '@ionic/angular';
import { ComprobantePage } from '../comprobante/comprobante.page';
import { AppConfig } from '../../config';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
   
  user: any;
  itemsJson: any;
  idOrden : any;
  arrayCarro: any[]; // Cambia el tipo a array
  isModalOpen = false;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  
  chats: any;
  totalSuma: number = 0;
  tokenUala:any;
  public myForm: FormGroup;
  mensaje: any;
   
  urlRoot: string = AppConfig.urlRoot;
  
 constructor(public http: HttpClient, public navParams: NavParams,public modalCtrl: ModalController,
   public navCtrl: NavController, public inicia: IniciarusuarioService, 
   public formBuilder: FormBuilder, public toastController: ToastController, 
   public loadingCtrl: LoadingController)
    {    
    this.arrayCarro =  this.inicia.obtenerProductosSeleccionados()
    const productosSeleccionadosString = JSON.stringify(this.arrayCarro, null, 2);
    const productosSeleccionadosObject = JSON.parse(productosSeleccionadosString);

    // Convierte el objeto en un array
    this.arrayCarro = Object.values(productosSeleccionadosObject);
    for (const item of this.arrayCarro) {
      this.totalSuma += item.cant*item.precio;
    }

     
    }
    cancel() {
      return this.modalCtrl.dismiss(null, 'cancel');
    }
  ngOnInit() {    
    
  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      //duration: 3000,
      spinner: 'circles',
    });

    loading.present();
  }
  async presentToast(mensaje,position,color) {
    const toast = await this.toastController.create({
      //header: 'Toast header',
      message: mensaje,
      duration: 2000,
      position: position,
      color: color,
      buttons: [
        {
          side: 'start',                    
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
    
    async pagarUala(){
      {    
        this.user= await this.inicia.getUser();
        this.showLoading()         
        this.itemsJson=this.arrayCarro.map(item => {
          return {
            "title": item.nombreProducto,  // Puedes personalizar esto según tus necesidades
            "picture_url": `${this.urlRoot}/images/${item.fotoProducto}`,            
            "quantity": item.cant,
            "currency_id": "ARS",  // Puedes personalizar esto según tus necesidades
            "unit_price": parseFloat(item.precio) 
          };
        }); 
        let cadenaProductos = this.arrayCarro.map(item => item.nombreProducto.toString()).join(', ');
        let total = this.arrayCarro.reduce((acc, item) => {
          let subtotal = item.cant * parseFloat(item.precio);
                return acc + subtotal;
            }, 0);
            this.totalSuma = total;
          
          const idUsuario = this.user[0].idUsuario;             
          const usuario = this.user[0].usuario;             
          this.inicia.generarTokenUala(this.user).subscribe(
            (tokenUala: any) => {
              this.tokenUala = tokenUala;
                   
              
            this.inicia.setOrden(idUsuario,(this.itemsJson), this.totalSuma,'uala',usuario).subscribe(
              (idOrden: any) => {
                this.idOrden = idOrden;
                //console.log("ID de Orden obtenido:", this.idOrden);
                // Resto de tu código después de obtener el ID de la orden
                // Definir la URL y el cuerpo de la solicitud url_chk_uala
            const url = this.user[0].url_chk_uala;
            const cuerpoSolicitud = {
              "amount": total.toString(),
              "description": cadenaProductos,
              "userName": this.user[0].userNameUala,
              "callback_fail": this.user[0].callback_fail_uala,
              "callback_success": this.user[0].callback_success_uala,
              "notification_url": this.user[0].notification_url_uala              
            };  
            // Configurar las cabeceras de la solicitud
            const cabeceras = new HttpHeaders({
              'Content-Type': 'application/json',            
              'Authorization': 'Bearer '+this.tokenUala.access_token
            });
            this.http.post(url, cuerpoSolicitud, { headers: cabeceras })
            .subscribe(
              (respuesta: any) => {
                //console.log('Respuesta de la API:', respuesta);
                window.open(respuesta.links.checkoutLink,'_system','location=yes');                
                this.updateOrdenUala(this.idOrden,respuesta.links.checkoutLink,respuesta.uuid);
                // vaciaCarro     
                this.vaciarCarro();
                this.navCtrl.navigateRoot('/tab3');
                this.modalCtrl.dismiss(null, 'cancel'); 
                this.loadingCtrl.dismiss();
                // Manejar la respuesta aquí
              },
              (error) => {
                console.error('Error en la llamada API:', error);
                // Manejar el error aquí
              }
            );  
            },
            (error: any) => {
              console.error("Error al obtener el ID de la orden:", error);
              // Manejar el error según tus necesidades
              
            }
          );            
        }
        ); 
            
        }           
      }
    async pagarMercadopago(){
  {      
       this.user= await this.inicia.getUser();
       this.showLoading()
       this.itemsJson=this.arrayCarro.map(item => {
        return {
          "title": item.nombreProducto,  // Puedes personalizar esto según tus necesidades
          "picture_url": `${this.urlRoot}/images/${item.fotoProducto}`,            
          "quantity": item.cant,
          "currency_id": "ARS",  // Puedes personalizar esto según tus necesidades
          "unit_price": parseFloat(item.precio) 
        };
      });
          
      
      
      const idUsuario = this.user[0].idUsuario;
      const nombre = this.user[0].nombre;
      const apellido = this.user[0].apellido;
      const usuario = this.user[0].usuario;
      const telefono = this.user[0].telefono;        
      
      this.inicia.setOrden(idUsuario,(this.itemsJson), this.totalSuma,'mercadopago',usuario).subscribe(
        (idOrden: any) => {
          this.idOrden = idOrden;
          //console.log("ID de Orden obtenido:", this.idOrden);
          // Resto de tu código después de obtener el ID de la orden
          // Definir la URL y el cuerpo de la solicitud this.user[0].idUsuario
      const url = this.user[0].url_chk_mp;
      const cuerpoSolicitud = {
        "auto_return": 'all',
        "back_urls": {
          "success": this.user[0].url_success_mp,
          "pending": this.user[0].url_pending_mp,
          "failure": this.user[0].url_failure_mp
        },        
        //"expires": false,
        "external_reference":this.idOrden,
        "items": this.itemsJson,
       // "marketplace_fee": null,
        //"metadata": null,
        "payer": {
          "name": nombre,
          "surname": apellido,
          "email": usuario,
          "phone": {
            "number": telefono
          },
          "identification": {},
          "address": {
            "street_number": null
          }
        }              
      };  
      // Configurar las cabeceras de la solicitud
      const cabeceras = new HttpHeaders({
        'Content-Type': 'application/json',        
        'Authorization': 'Bearer '+this.user[0].Authorization_mp
      });
      this.http.post(url, cuerpoSolicitud, { headers: cabeceras })
      .subscribe(
        (respuesta: any) => {
          //console.log('Respuesta de la API:', respuesta);
          window.open(respuesta.init_point,'_system','location=yes');          
          this.updateOrden(this.idOrden,respuesta.init_point);
          // Manejar la respuesta aquí
          // vaciaCarro     
          this.vaciarCarro();
          this.navCtrl.navigateRoot('/tab3');
          this.modalCtrl.dismiss(null, 'cancel');
          this.loadingCtrl.dismiss();
        },
        (error) => {
          console.error('Error en la llamada API:', error);
          // Manejar el error aquí
        }
      );  
        },
        (error: any) => {
          console.error("Error al obtener el ID de la orden:", error);
          // Manejar el error según tus necesidades
          
        }
      ); 
      // Realizar la solicitud POST utilizando HttpClient      
      }      
       
    }
  public updateOrden(idOrden: any, respuesta: any){   
    
    const headers: any = new HttpHeaders({ 'Content-Type': 'application/octet-stream' });
      const options: any = { idOrden: idOrden, respuesta:respuesta };
    
      this.http.post(`${this.urlRoot}/index.php/Api/updateOrden/` ,
        JSON.stringify(options), headers)
        .subscribe(
          (res: any) => {
            //console.log(res);            
          },
          (error: any) => {
            console.log(error);            
          }
        );
  }
  public updateOrdenUala(idOrden: any, respuesta: any, uuid: any){   
    
    const headers: any = new HttpHeaders({ 'Content-Type': 'application/octet-stream' });
      const options: any = { idOrden: idOrden, respuesta:respuesta, uuid: uuid};
    
      this.http.post(`${this.urlRoot}/index.php/Api/updateOrden/` ,
        JSON.stringify(options), headers)
        .subscribe(
          (res: any) => {
            //console.log(res);            
          },
          (error: any) => {
            console.log(error);            
          }
        );
  }

  public delete(idproducto: number){
    this.totalSuma=0;
    this.inicia.eliminarProductoCarro(idproducto);
    this.presentToast('Se elimino el producto de la lista.', 'bottom', 'success')
    this.arrayCarro =  this.inicia.obtenerProductosSeleccionados()
    const productosSeleccionadosString = JSON.stringify(this.arrayCarro, null, 2);
    const productosSeleccionadosObject = JSON.parse(productosSeleccionadosString);

    // Convierte el objeto en un array
    this.arrayCarro = Object.values(productosSeleccionadosObject);
    for (const item of this.arrayCarro) {
      this.totalSuma += (item.precio * item.cant);
    }
  }

  async whatsapp(){
    {           
            
      this.itemsJson=this.arrayCarro.map(item => {
        return {
          "title": item.nombreProducto,  // Puedes personalizar esto según tus necesidades
          "picture_url": `${this.urlRoot}/images/${item.fotoProducto}`,            
          "quantity": item.cant,
          "currency_id": "ARS",  // Puedes personalizar esto según tus necesidades
          "unit_price": parseFloat(item.precio) 
        };
      }); 
      let cadenaProductos = this.arrayCarro.map(item => item.nombreProducto.toString()).join(', ');
      let total = this.arrayCarro.reduce((acc, item) => {
        let subtotal = item.cant * parseFloat(item.precio);
              return acc + subtotal;
          }, 0);
          this.totalSuma = total;        
          let mensaje = "Hola!%0AQuería%20consultarte%20por:%0A"
          mensaje=mensaje+cadenaProductos.replace(/ /g, '%20');
          mensaje= mensaje + ".%0A%0AGracias!";
          const urlWhataspp=`${"https://wa.me/542974235583?text="}${mensaje}`;
          
          window.open(urlWhataspp,'_system','location=yes'); 
          
          
      }           
    }
  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
async transferencia(){
  this.user= await this.inicia.getUser();
  this.itemsJson=this.arrayCarro.map(item => {
    return {
      "title": item.nombreProducto,  // Puedes personalizar esto según tus necesidades
      "picture_url": `${this.urlRoot}/images/${item.fotoProducto}`,            
      "quantity": item.cant,
      "currency_id": "ARS",  // Puedes personalizar esto según tus necesidades
      "unit_price": parseFloat(item.precio) 
    };
  });
  this.user= await this.inicia.getUser();
      const idUsuario = this.user[0].idUsuario;
      const usuario = this.user[0].usuario;
  this.inicia.setOrden(idUsuario,(this.itemsJson), this.totalSuma,'transferencia',usuario).subscribe(
    (idOrden: any) => {
      this.idOrden = idOrden;
     //console.log('tipo',typeof this.idOrden) 
      if(typeof this.idOrden==='number'){
        
        //redirecciona a cargar comprobante
        this.modalCtrl.dismiss(null, 'cancel');
        this.subirComprobante(this.idOrden,this.urlRoot);
        // vaciaCarro     
        this.vaciarCarro();
        this.navCtrl.navigateRoot('/tab3');
      
      }
      else {
        this.presentToast('Ocurrió un error, vuelva a intentar.','middle','primary');
      }
    }
      ) 
      
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////  
async subirComprobante(idOrden,url) {

  const modal = await this.modalCtrl.create({
    component: ComprobantePage,
   // breakpoints: [0, 0.99],
    //initialBreakpoint: 0.99,
   handle: true,
    componentProps: {
      idOrden: idOrden,
      totalSuma: this.totalSuma,
      url_proyecto: url
    },
    animated: true,
    canDismiss: true,
    showBackdrop: true,
  });
  await modal.present();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
  vaciarCarro() {
  this.arrayCarro=null;
  this.totalSuma=0;
  this.inicia.vaciarProductosSeleccionados();   
}


}
