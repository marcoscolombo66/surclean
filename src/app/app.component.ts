import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public menuCtrl: MenuController) {}
  closeMenu() {
    this.menuCtrl.close();
  }
}
