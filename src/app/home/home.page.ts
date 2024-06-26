import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppConfig } from 'src/app/config';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { MasinfoPage } from '../modals/masinfo/masinfo.page';
import { ResultadosPage } from '../modals/resultados/resultados.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('slider') slider: IonSlides;
  mostrarBusqueda: boolean = false; // Declara la propiedad aquí
  mostrarMenu: boolean = true;
  resultadosBusqueda: string[] = []; // Agrega la propiedad para los resultados de búsqueda
  searchText: any;
  urlRoot: string = AppConfig.urlRoot;
  productos: any;
  isSearching: boolean= false;
  pageNumber: number;
  categorias: any;
  categoriasOtros: any;
  constructor(public http: HttpClient,private modalCtrl: ModalController) {
    this.getCategorias();
    
   }    
  
  test(event: any) {
    console.log('Valor seleccionado:', event.detail.value);
  }

  iniciarBusqueda() {
    this.mostrarBusqueda = !this.mostrarBusqueda;
    console.log('Valor selecc') 
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
  buscarProductos(event: any) {
    this.searchText = event.target.value.trim().toLowerCase();
    
    // Verifica si hay texto de búsqueda
    if (this.searchText) {
      // Desactiva el Infinite Scroll y realiza la búsqueda
      this.isSearching = true;
      this.getProductos(this.searchText);
    } 
    else {
      // Si no hay texto de búsqueda, reactiva el Infinite Scroll y carga los productos normales
      this.isSearching = false;
      this.pageNumber = 1; // Restaura el número de página a 1
      this.productos=this.getProductos(null, this.pageNumber);
    }
  }
  async getProductos(busqueda: string = null, pageNumber: number = 1) {
    const headers: any		= new HttpHeaders({'Content-Type' : 'application/octet-stream'});
    
    const options: any = { busqueda, pageNumber };
  
    // Realiza la solicitud HTTP con las opciones
    this.http.post(this.urlRoot + '/index.php/Api/Productos/', JSON.stringify(options), headers)
      .subscribe(
        (res: any) => {
          if (this.isSearching) {
            // Si está buscando, asigna los resultados de la búsqueda
            this.productos = res;
          } else {
            // Si no está buscando, concatena los resultados al arreglo existente
            this.productos = this.productos.concat(res);
          }
          
  
          // ...
        },
        (error: any) => {
          console.log(error);
        }
      );
  } 
  abrirModal(idCategoria: number) {
    console.log('se va a abrir pagina con los resultados de busqueda por categoria:', idCategoria);
  }

  ngOnInit() {
  }

  async getCategorias()
  {     
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const headers: any		= new HttpHeaders({'Content-Type' : 'application/octet-stream'});
      const options: any = {};  

    // Llamar a la API con las opciones
    this.http.post(this.urlRoot+'/index.php/Api/Categorias/',
      JSON.stringify(options), headers)
      .subscribe(
        (res: any) => {
         // Filtrar las categorías cuyo campo 'otros' sea igual a 1 y transformar los nombres a mayúsculas
        this.categoriasOtros = res
        .filter((categoria: any) => categoria.otros == 1)
        .map((categoria: any) => ({
          ...categoria,
          nombreCategoria: categoria.nombreCategoria.toUpperCase(),
          idCategoria: categoria.idCategoria
        }));
        
        this.categorias = res
        .filter((categoria: any) => categoria.otros == 0)
        .map((categoria: any) => ({
          ...categoria,
          nombreCategoria: categoria.nombreCategoria.toUpperCase(),
          idCategoria: categoria.idCategoria
        })); 
                 
        },
        (error: any) => {         
          console.log(error);
        }
      );
}
async modalResultados(idCategoria,nombreCategoria) {
   
  //const user= await this.inicia.getUser();
  //const url_proyecto = user[0].url_proyecto
  const modal = await this.modalCtrl.create({
    component: ResultadosPage,
    breakpoints: [0, 0.99],
    initialBreakpoint: 0.99,
    handle: false,
    componentProps: {
      idCategoria: idCategoria,
      nombreCategoria:nombreCategoria              
    },
    animated: true,
    canDismiss: true,
    keyboardClose: true,
  });
  await modal.present();
}

}
