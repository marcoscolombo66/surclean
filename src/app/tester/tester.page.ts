import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.page.html',
  styleUrls: ['./tester.page.scss'],
})
export class TesterPage implements OnInit {
  @ViewChild('slider') slider: IonSlides;
  mostrarBusqueda: boolean = false; // Declara la propiedad aquí
  
 

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

  logs: string[] = [];
 

  constructor() { }    
  
  test(event: any) {
    console.log('Valor seleccionado:', event.detail.value);
  }
  iniciarBusqueda() {
    this.mostrarBusqueda = !this.mostrarBusqueda;
    console.log('Valor selecc') 
  }

  realizarBusqueda(event: any) {
    const textoBusqueda = event.target.value;
    // Aquí puedes implementar la lógica para buscar según el texto ingresado
    console.log('Texto de búsqueda:', textoBusqueda);
  }
  

  abrirModal(){console.log('se va a abrir pagina con los resultados de busqueda por categoria');}
  ngOnInit() {
  }
  
}