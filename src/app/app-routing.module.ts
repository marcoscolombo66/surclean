import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{path: 'home',loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  //{path: '',redirectTo: 'home',pathMatch: 'full'},
  {
    path: '',
    redirectTo: 'tab1',
    pathMatch: 'full'
  },
  {path: '',loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)},  
  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },  
  {
    path: 'comprobante',
    loadChildren: () => import('./modals/comprobante/comprobante.module').then( m => m.ComprobantePageModule)
  },
  {
    path: 'masinfo',
    loadChildren: () => import('./modals/masinfo/masinfo.module').then( m => m.MasinfoPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },  
  {
    path: 'olvido',
    loadChildren: () => import('./olvido/olvido.module').then( m => m.OlvidoPageModule)
  },
  {
    path: 'modalcheckout',
    loadChildren: () => import('./modals/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./modals/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'orden',
    loadChildren: () => import('./modals/orden/orden.module').then( m => m.OrdenPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
