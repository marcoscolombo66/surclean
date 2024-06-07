import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AppConfig } from 'src/app/config';
import { ModalController } from '@ionic/angular';
import { MasinfoPage } from '../masinfo/masinfo.page';
import { NavParams } from '@ionic/angular';
@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {
  urlRoot: string = AppConfig.urlRoot;
  productos: any;
  constructor( public navParams: NavParams,public http: HttpClient,public modalCtrl: ModalController) {
    this.getProductos();
   }
   async modalMasInfo(idProducto,nombreProducto,descripcionProducto,fotoProducto,precioProducto) {
    //const user= await this.inicia.getUser();
    //const url_proyecto = user[0].url_proyecto
    const modal = await this.modalCtrl.create({
      component: MasinfoPage,
      //breakpoints: [0, 0.99],
      //initialBreakpoint: 0.99,
      //handle: true,
      componentProps: {
        mySubject: idProducto,
        mySubject2: nombreProducto,
        mySubject3: descripcionProducto,
        mySubject4: fotoProducto,
        mySubject5: precioProducto,
        url_proyecto: this.urlRoot
      },
      animated: true,
      canDismiss: true,
      keyboardClose: true,
    });
    await modal.present();
  }
  async getProductos() {
    const headers: any		= new HttpHeaders({'Content-Type' : 'application/octet-stream'});
    
    const options: any = {IDCATEGORIA: this.navParams.get('idCategoria')};
  
    // Realiza la solicitud HTTP con las opciones
    this.http.post(this.urlRoot + '/index.php/Api/ProductosCategoria/', JSON.stringify(options), headers)
      .subscribe(
        (res: any) => {          
            // Si está buscando, asigna los resultados de la búsqueda
            this.productos = res;
         
  
          // ...
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  ngOnInit() {
  }

}
