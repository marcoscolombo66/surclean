import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, PopoverController } from '@ionic/angular';
import {SearchPopoverComponent } from '../search-popover/search-popover.component'; // Asegúrate de importar el componente




@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  @ViewChild('slider') slider: IonSlides;
  

  async presentSearchPopover(ev: any) { 
    const popover = await this.popoverController.create({
      component: SearchPopoverComponent,
      event: ev,
      translucent: true,
    });
    await popover.present();
  }
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
  initialSlide: 0,
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true, // Activa el bucle para que el slider se repita
  autoplay: {
    delay: 3000, // Retraso entre diapositivas en milisegundos (3 segundos en este caso)
    disableOnInteraction: false // Si es true, el autoplay se detiene al interactuar con el slider
  },
  arrow: true
};
  mostrarMenu: boolean = true;

  
  constructor(private popoverController: PopoverController) {} // Inyecta el PopoverController

  ngOnInit() {
  }

}
