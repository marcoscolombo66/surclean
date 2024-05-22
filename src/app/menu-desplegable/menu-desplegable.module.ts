import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuDesplegablePageRoutingModule } from './menu-desplegable-routing.module';

import { MenuDesplegablePage } from './menu-desplegable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuDesplegablePageRoutingModule
  ],
  declarations: [MenuDesplegablePage]
})
export class MenuDesplegablePageModule {}
