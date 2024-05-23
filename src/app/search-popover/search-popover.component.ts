import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-search-popover',
  template: `
    <ion-searchbar placeholder="Buscar..."></ion-searchbar>
  `,
})
export class SearchPopoverComponent {
  constructor(private popoverController: PopoverController) {} // Este es el constructor correcto


  dismissPopover() {
    this.popoverController.dismiss();
  }
}
