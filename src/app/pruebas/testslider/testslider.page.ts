
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonSlides, Platform } from '@ionic/angular'; // Importa IonSlides desde '@ionic/angular'

@Component({
  selector: 'app-testslider',
  templateUrl: './testslider.page.html',
  styleUrls: ['./testslider.page.scss'],
})
export class TestsliderPage implements OnInit {
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
    loop: false, // Desactiva el bucle
    arrow: true
  };
  mostrarMenu: boolean = true;

  
  constructor(private navCtrl: NavController, private platform: Platform) {
    this.detectarDispositivo();
  }
  toggleMenu() {
    this.mostrarMenu = !this.mostrarMenu;
    const menuContent = document.getElementById('main-content'); // Obtiene el contenido del menú
    menuContent.classList.toggle('hidden'); // Muestra/oculta el menú vertical basado en mostrarMenu
  }
  ngOnInit() {
    
  }
 
  
  iniciarBusqueda() {
    this.mostrarBusqueda = true;
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

  prev() {
    this.slider.slidePrev();
  }

  next() {
    this.slider.slideNext();
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
}
