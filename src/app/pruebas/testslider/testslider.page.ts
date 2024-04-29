import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';


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

  fotos = [
    { url: 'https://i.postimg.cc/15rBTBm1/Foto-Alejandro-Sosa.png', descripcion: 'Cloro Ultra Concentrado 100gr/l Anmat Senasa '},
    { url: 'https://i.postimg.cc/bJQLNQtQ/Marcos-Colombo-Coordinador-Regional-de-Chubut.png', descripcion: 'hola \n escripción de la imagen 2' },
    { url: 'https://i.postimg.cc/g0p1TLZn/photo-2023-10-21-14-00-22.jpg', descripcion: 'hola\nDescripción de la imagen 3' },
    { url: 'https://i.postimg.cc/15rBTBm1/Foto-Alejandro-Sosa.png', descripcion: 'hola\nDescripción de la imagen 1' },
    { url: 'https://i.postimg.cc/bJQLNQtQ/Marcos-Colombo-Coordinador-Regional-de-Chubut.png', descripcion: 'hola\nDescripción de la imagen 2' },
    { url: 'https://i.postimg.cc/g0p1TLZn/photo-2023-10-21-14-00-22.jpg', descripcion: 'hola\nDescripción de la imagen 3' },
    { url: 'https://i.postimg.cc/15rBTBm1/Foto-Alejandro-Sosa.png', descripcion: 'hola\nDescripción de la imagen 1' },
    { url: 'https://i.postimg.cc/bJQLNQtQ/Marcos-Colombo-Coordinador-Regional-de-Chubut.png', descripcion: 'hola\nDescripción de la imagen 2' },
    { url: 'https://i.postimg.cc/g0p1TLZn/photo-2023-10-21-14-00-22.jpg', descripcion: 'hola\nDescripción de la imagen 3' },
  ];
  constructor() { }

  ngOnInit() {
  }
  prevSlide() {
    document.querySelector('ion-slides').slidePrev();
  }

  nextSlide() {
    document.querySelector('ion-slides').slideNext();
  }
}

/*

import { Component } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
export class SliderPage {
  slideOptions = {
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
    },
  };

  fotos = [
    { url: 'URL_DE_LA_IMAGEN_1', descripcion: 'Descripción de la imagen 1' },
    { url: 'URL_DE_LA_IMAGEN_2', descripcion: 'Descripción de la imagen 2' },
    { url: 'URL_DE_LA_IMAGEN_3', descripcion: 'Descripción de la imagen 3' },
  ];
}


*/