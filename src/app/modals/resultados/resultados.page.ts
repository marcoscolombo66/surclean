import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AppConfig } from 'src/app/config';
import { ModalController } from '@ionic/angular';
import { MasinfoPage } from '../masinfo/masinfo.page';
import { NavParams } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {
  urlRoot: string = AppConfig.urlRoot;
  productos: any;
  nombreCategoria: any;
  pageNumber: number = 1;
  constructor( public navParams: NavParams,public http: HttpClient,public modalCtrl: ModalController) {
    this.getProductos();
    this.nombreCategoria=this.navParams.get('nombreCategoria')
   }
   async  modalMasInfo(idProducto,nombreProducto,descripcionProducto,fotoProducto,precioProducto) {
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
        url_proyecto: this.urlRoot,
        
      },
      animated: true,
      canDismiss: true,
      keyboardClose: true,
    });
    await modal.present();
  }

  onIonInfinite(ev) {
    setTimeout(() => {
      // Incrementa el número de página
      this.pageNumber++;
  
      // Llama al método getProductos con el número de página actual
      this.getProductos(this.pageNumber);
  
      // Deshabilita el evento ionInfinite si ya no hay más productos
      if (this.productos.length % 6 !== 0) {
        (ev as InfiniteScrollCustomEvent).target.disabled = true;
      }
  
      // Completa el evento de scroll infinito
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
  async getProductos(pageNumber: number = 1) {
    const headers: any		= new HttpHeaders({'Content-Type' : 'application/octet-stream'});
    
    const options: any = {IDCATEGORIA: this.navParams.get('idCategoria'),pageNumber};
  
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
