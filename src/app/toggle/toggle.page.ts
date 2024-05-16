import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.page.html',
  styleUrls: ['./toggle.page.scss'],
})
export class TogglePage implements OnInit {
 pantallaChica: boolean;

  constructor() { }

  ngOnInit(): void {
    this.pantallaChica = this.isSmallScreen();
    if (this.pantallaChica) {
      console.log('Estás en una pantalla chica');
    } else {
      console.log('Estás en una pantalla grande');
    }
  }

  isSmallScreen(): boolean {
    return window.innerWidth < 768; // Puedes ajustar este valor según tu diseño y necesidades
  }
}
  


