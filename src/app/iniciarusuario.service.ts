import { Injectable } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { AppConfig } from './config';
@Injectable({
  providedIn: 'root'
})

export class IniciarusuarioService {
  dolar: any;
  // Objeto JSON para almacenar los productos seleccionados
  productosSeleccionados: any;
  userService: any; 
  urlRoot: string = AppConfig.urlRoot; 
  constructor(public storage: Storage, public navCtrl: NavController,public httpClient: HttpClient) {
    this.init();
  }
  
  
  async getUserProfile(idusuario){
    const headers: any		= new HttpHeaders({'Content-Type' : 'application/octet-stream'});
    const idUSUARIO: any = idusuario;        
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const options: any		= {idUSUARIO};         
    return (this.httpClient.post(this.urlRoot +'/index.php/Api/getUserById/',
    JSON.stringify(options), headers))
    }
  async init() {
    const storage = await this.storage.create();
    const productosJSON = await storage.get('productosSeleccionados');
    this.productosSeleccionados = JSON.parse(productosJSON) || {};

    //const userJSON = await this.storage.get('datos_user');
    //this.userService = JSON.parse(userJSON) || {};
  
  }
  onClickProduct(idProducto,nombreProducto: String,fotoProducto: String, cantidad: number = 1,precio: any){
    this.productosSeleccionados[idProducto] = { idProducto,nombreProducto:nombreProducto,fotoProducto:fotoProducto, cant: cantidad, precio: precio };
    this.storage.set('productosSeleccionados', JSON.stringify(this.productosSeleccionados, null, 2));     
  }
  obtenerProductosSeleccionados() {
    // Obtener el objeto JSON de productos desde el almacenamiento local
    return this.productosSeleccionados;
  }
  eliminarProductoCarro(idProducto: number) {
    delete this.productosSeleccionados[idProducto];
    this.storage.set('productosSeleccionados', JSON.stringify(this.productosSeleccionados, null, 2));
  }
  vaciarProductosSeleccionados() {
    this.productosSeleccionados = {}; // Vaciar la variable local
    this.storage.remove('productosSeleccionados'); // Eliminar la información del almacenamiento
  }


  async tieneDatosAlmacenados(): Promise<boolean> {
    const datosUsuario = await this.storage.get('datos_user');
    return datosUsuario !== null && datosUsuario !== undefined;
  }
   verificar(): any{
    this.storage.get('datos_user').then(data=>
      {
        if(data)
        {
          //console.log('Login','activo');      
          
        }
        else
        {           
          console.log('Login','Inactivo');         
         return this.navCtrl.navigateRoot('/login');
      }
});

   }

   public setOrden(idUsuario: any, itemsJson: any, totalCompra: any, metodopago: any, usuario: any): Observable<any> {
    const headers: any = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options: any = {
      itemsJson: JSON.stringify(itemsJson),
      idUsuario: idUsuario,      
      totalCompra: totalCompra,
      metodoPago: metodopago,
      usuario: usuario
    };
  
    return this.httpClient.post(`${this.urlRoot}/index.php/Api/setOrden/`,
      options, headers);
  }
  public generarTokenUala(user: any){          
    //console.log("ID de Orden obtenido:", this.idOrden);
    // Resto de tu código después de obtener el ID de la orden
    // Definir la URL y el cuerpo de la solicitud client_id_uala
     
    const url = user[0].url_token_uala;
    const cuerpoSolicitud = {
      "user_name": user[0].userNameUala,
      "client_id": user[0].client_id_uala,
      "client_secret_id": user[0].client_secret_id_uala,
      "grant_type": user[0].grant_type
    };  
    // Configurar las cabeceras de la solicitud
    const cabeceras = new HttpHeaders({
      'Content-Type': 'application/json',            
      });
    return this.httpClient.post(url, cuerpoSolicitud, { headers: cabeceras });
  }
  public  getUser(){    
    return new Promise((resolve, reject) => {
      this.storage.get('datos_user').then(resp => {
        resolve(resp);
      }, err =>{
        reject(err.json());
        console.log('error',err.json);
      });
    });
  }
  public getDolarBlue(): Observable<any>{
     //this.authService.login(form.value.usuario, form.value.password);
 //this.https.get(this.urlVar);
 return this.httpClient.get('https://api.bluelytics.com.ar/v2/latest');
  }

  }

