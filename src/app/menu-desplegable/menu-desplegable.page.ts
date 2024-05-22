import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu-desplegable',
  templateUrl: './menu-desplegable.page.html',
  styleUrls: ['./menu-desplegable.page.scss'],
})
export class MenuDesplegablePage implements OnInit {
  productosMenuOpen = false;
  @ViewChild('otrosProductosBtn') otrosProductosBtn: ElementRef;
  submenuWidth: number = 0; 

  constructor() { }

  ngOnInit() { }

  toggleProductosMenu() {
    this.productosMenuOpen = !this.productosMenuOpen;

    // Calcular el ancho solo si el elemento existe y está visible
    if (this.productosMenuOpen && this.otrosProductosBtn && this.otrosProductosBtn.nativeElement) {
      this.submenuWidth = this.otrosProductosBtn.nativeElement.offsetWidth;
    }
  }

  navigateTo(page: string) {
    console.log('Navigating to', page);
    // Aquí implementarías la lógica de navegación a la página correspondiente
  }
}
