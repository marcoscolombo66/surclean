import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuDesplegablePage } from './menu-desplegable.page';

const routes: Routes = [
  {
    path: '',
    component: MenuDesplegablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuDesplegablePageRoutingModule {}
