import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Drivers } from '@ionic/storage';
import { IniciarusuarioService } from './iniciarusuario.service';
import { SearchPopoverComponent } from './search-popover/search-popover.component'; // Asegúrate de que la ruta sea correcta
import { PopoverComponent } from './popover/popover.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  declarations: [AppComponent,  SearchPopoverComponent, PopoverComponent],
  entryComponents: [],
 

  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
    IonicStorageModule.forRoot({
      name: 'AntiguoShop',
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
    }),],
  providers: [IniciarusuarioService,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
