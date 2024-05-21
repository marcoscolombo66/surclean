import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { IniciarusuarioService } from '../iniciarusuario.service';
import { ToastController, NavController ,IonSlides} from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { MasinfoPage } from '../modals/masinfo/masinfo.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AppConfig } from 'src/app/config';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  @ViewChild('slider') slider: IonSlides;
  mostrarBusqueda: boolean = false; // Declara la propiedad aquí
  pantallaChica: boolean;

  photos = [
    'https://zonazero.nyc3.cdn.digitaloceanspaces.com/dev/15536367e8a2169aa3b6bf35c66f9646.jpg',
    'https://zonazero.nyc3.cdn.digitaloceanspaces.com/dev/9672053fa2213156bbf46107f308094a.jpg',
    'https://zonazero.nyc3.cdn.digitaloceanspaces.com/dev/15536367e8a2169aa3b6bf35c66f9646.jpg',
    'https://zonazero.nyc3.cdn.digitaloceanspaces.com/dev/9672053fa2213156bbf46107f308094a.jpg',
    'https://zonazero.nyc3.cdn.digitaloceanspaces.com/dev/15536367e8a2169aa3b6bf35c66f9646.jpg',
    'https://zonazero.nyc3.cdn.digitaloceanspaces.com/dev/9672053fa2213156bbf46107f308094a.jpg',
    'https://zonazero.nyc3.cdn.digitaloceanspaces.com/dev/15536367e8a2169aa3b6bf35c66f9646.jpg',
    'https://zonazero.nyc3.cdn.digitaloceanspaces.com/dev/9672053fa2213156bbf46107f308094a.jpg',
    // Agrega las URL de las otras fotos aquí
  ];

  slideOpts = {
    initialSlide: 0, // Inicia en la primera foto
    speed: 400, // Velocidad de transición
    slidesPerView: 1, // Muestra una sola foto a la vez
    spaceBetween: 25, // Sin espacio entre las fotos
    loop: true, // Desactiva el bucle
    arrow: false
  };
  mostrarMenu: boolean = true;
categorias: any;
verCarro: any = false;
showFilters: any = false;
productos: any[] = []; 
searchText: string = '';
cantidadesPorProducto: {[idProducto: string]: number} = {};  
registroForm: FormGroup;
//backButtonEnabled = true;
totalCantidades: any=0;

urlRoot: string = AppConfig.urlRoot;

pageNumber: number = 1;

filtroCategoria: string = ''; // Nueva propiedad
noVerPorCat: any = false;
  productosOfertas: any[] = [];
  isSearching: boolean= false;
  constructor(public fb: FormBuilder, public http: HttpClient,private platform: Platform,
            private route: ActivatedRoute,public alertController: AlertController,
            private modalCtrl: ModalController,public menuCtrl: MenuController,public toastController:ToastController,
            public inicia: IniciarusuarioService, public navCtrl: NavController,public Str: Storage)
            {                 
               
            }
   
  ngDoCheck(){
    this.calculaTotal();
  }
   
  onIonInfinite(ev) {
    setTimeout(() => {
      // Incrementa el número de página
      this.pageNumber++;
  
      // Llama al método getProductos con el número de página actual
      this.getProductos(null, this.pageNumber);
  
      // Deshabilita el evento ionInfinite si ya no hay más productos
      if (this.productos.length % 6 !== 0) {
        (ev as InfiniteScrollCustomEvent).target.disabled = true;
      }
  
      // Completa el evento de scroll infinito
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
    showFilter(){
      if(this.showFilters){       
        this.showFilters=false;
        this.noVerPorCat= false;
      }
      else
      {
        this.showFilters=true;
        this.noVerPorCat= true;
        this.getCategorias();
      }      
    }    
  
    handleChange(ev) {
      const selectedCategoria = ev.target.value;
      this.filtroCategoria = selectedCategoria;
      this.getProductosCategoria(selectedCategoria);
      this.noVerPorCat=true;
    }
    async getProductosOferta() {
      const headers: any = new HttpHeaders({ 'Content-Type': 'application/octet-stream' });
      const options: any = {};
    
      this.http.post(this.urlRoot+'/index.php/Api/ProductosOfertas/',
        JSON.stringify(options), headers)
        .subscribe(
          (res: any) => {
            this.productosOfertas = res;            
          },
          (error: any) => {
            console.log(error);            
          }
        );
    }
    async getProductosCategoria(categoria: string) {
      const headers: any = new HttpHeaders({ 'Content-Type': 'application/octet-stream' });
      const options: any = { busqueda: categoria };
    
      this.http.post(this.urlRoot+'/index.php/Api/ProductosCategorias/',
        JSON.stringify(options), headers)
        .subscribe(
          (res: any) => {
            this.productos = res;            
          },
          (error: any) => {
            console.log(error);            
          }
        );
    }
  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      //header: 'Toast header',
      message: mensaje,
      duration: 2000,
      position: 'bottom',
      color: 'primary',
      buttons: [
        {
          side: 'start',
          icon: 'cart',          
          handler: () => {
            console.log('Favorite clicked');
          },
        },
        {
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
      });
    toast.present();
    }
  
    buscarProductos(event: any) {
      this.searchText = event.target.value.trim().toLowerCase();
      
      // Verifica si hay texto de búsqueda
      if (this.searchText) {
        // Desactiva el Infinite Scroll y realiza la búsqueda
        this.isSearching = true;
        this.getProductos(this.searchText);
      } else {
        // Si no hay texto de búsqueda, reactiva el Infinite Scroll y carga los productos normales
        this.isSearching = false;
        this.pageNumber = 1; // Restaura el número de página a 1
        this.getProductos(null, this.pageNumber);
      }
    }  
   
  ngOnInit() {    
    //this.inicia.verificar();
    this.startAutoplay();
    this.getProductos();
    this.getProductosOferta();
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.goBack();
    });    
  }
  goBack() {
    this.navCtrl.back();
  }
   incrementar(idProducto: string) { 
     this.cantidadesPorProducto[idProducto] =  (this.cantidadesPorProducto[idProducto] || 1) + 1;
     
  }

  decrementar(idProducto: string) {
    if (this.cantidadesPorProducto[idProducto] && this.cantidadesPorProducto[idProducto] > 1) {
      this.cantidadesPorProducto[idProducto]--;
      
    }
  }
  public add(idproducto: number,nombreProducto: String, fotoProducto: String, precio: any){
    const cantidad = this.cantidadesPorProducto[idproducto] || 1;
    this.inicia.onClickProduct(idproducto,nombreProducto, fotoProducto, cantidad,precio)
    this.presentToast('Agregaste '+ cantidad + ' items de este producto.')
    
    this.calculaTotal();
    
  }
  
  calculaTotal(){   
    const arrayProductos = this.inicia.obtenerProductosSeleccionados()
    // Inicializa una variable para la sumatoria total
      let _totalCantidades = 0;

      // Recorre el objeto y suma las cantidades
      for (const key in arrayProductos) {
        if (arrayProductos.hasOwnProperty(key)) {
          _totalCantidades += arrayProductos[key].cant;
        }
    }
    // Imprime la sumatoria total en la consola    
    this.totalCantidades =_totalCantidades;
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
        this.categorias = res;        
      },
      (error: any) => {         
        console.log(error);
      }
    );
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

  async modalCheckout() {
     
    /*//const user= await this.inicia.getUser();
    //const url_proyecto = user[0].url_proyecto
    const modal = await this.modalCtrl.create({
      component: CheckoutPage,
      //breakpoints: [0, 0.99],
      //initialBreakpoint: 0.99,
      //handle: true,
      componentProps: {
        url_proyecto: this.urlRoot,
                
      },
      animated: true,
      canDismiss: true,
      keyboardClose: true,
    });
    await modal.present();
    */
    this.navCtrl.navigateRoot('checkout');
  }

  ////////////////////////////////////////////////////////////////////////////////////////////
  toggleMenu() {
    this.mostrarMenu = !this.mostrarMenu;
    //const menuContent = document.getElementById('main-content'); // Obtiene el contenido del menú
    //menuContent.classList.toggle('hidden'); // Muestra/oculta el menú vertical basado en mostrarMenu
  }
   
  startAutoplay() {
    setInterval(() => {
      this.slider.slideNext(); // Avanzar a la siguiente diapositiva
    }, 5000); // Cambiar de diapositiva cada 3 segundos (ajusta el valor según tus necesidades)
  }
  
  iniciarBusqueda() {
    this.mostrarBusqueda = !this.mostrarBusqueda;
    //this.mostrarMenu = !this.mostrarMenu;
  }

  realizarBusqueda(event: any) {
    const textoBusqueda = event.target.value;
    // Aquí puedes implementar la lógica para buscar según el texto ingresado
    console.log('Texto de búsqueda:', textoBusqueda);
  }

  navigateTo(page: string) {
    // Aquí puedes definir la navegación a cada sección
    switch (page) {
      case 'home':
        // Navegar a la página de inicio
        break;
      case 'productos':
        // Navegar a la página de productos
        break;
      case 'quienes-somos':
        // Navegar a la página de Quiénes Somos
        break;
      case 'ubicacion':
        // Navegar a la página de Ubicación
        break;
      case 'servicios':
        // Navegar a la página de Servicios
        break;
      default:
        break;
    }
  }

  
  detectarDispositivo() {
    this.pantallaChica = this.isSmallScreen();
    if (this.pantallaChica) {
      this.pantallaChica=false;
      console.log('Estás en una pantalla chica');
    } else {
      this.pantallaChica=false;
      console.log('Estás en una pantalla grande');
    }
  }

  isSmallScreen(): boolean {
    return window.innerWidth < 768; // Cambia 768 por el punto de corte deseado
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
}
