import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-testslider',
  templateUrl: './testslider.page.html',
  styleUrls: ['./testslider.page.scss'],
})
export class TestsliderPage implements OnInit {
  slideOptions = {
    slidesPerView: 2,
    autoplay: {
      delay: 2500,
    },
    initialSlide: 1,
    speed: 400,
    pager: false,
    scrollbar: false,
  };

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  prevSlide() {
    document.querySelector('ion-slides').slidePrev();
  }

  nextSlide() {
    document.querySelector('ion-slides').slideNext();
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
}
