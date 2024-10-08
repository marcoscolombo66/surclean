import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { IniciarusuarioService } from '../iniciarusuario.service';
import { Storage } from '@ionic/storage';
import { PerfilPage } from '../modals/perfil/perfil.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
   
  constructor(public navCtrl: NavController,private actionSheetCtrl: ActionSheetController,public storage: Storage,public inicia: IniciarusuarioService) { }

  async ngOnInit() {
    await this.storage.create();
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones',
      cssClass: 'tabs.page.css',
      buttons: [
        
        {
          text: 'Consulta',
          role: 'destructive',
          icon: 'logo-whatsapp',
          handler: () => {this.whatsapp();},         
          data: {
            action: 'delete',
          },
        }, 
        {
          text: 'Mi perfil',
          role: 'destructive',
          icon: 'person-sharp',
          handler: () => {this.perfil(); },         
          data: {
            action: 'delete',
          },
        },       
        {
          text: 'Salir',
          role: 'destructive',
          icon: 'log-out-sharp',
          handler: () => {this.cerrar()},
          data: {
            action: 'delete',
          },
        } 
      ],
    });

    await actionSheet.present();
  }

  whatsapp()
    {        
          let mensaje = "Hola!%0AQuería%20consultarte%20por:%0A";
          const urlWhataspp=`${"https://wa.me/542974235278?text="}${mensaje}`;          
          window.open(urlWhataspp,'_system','location=yes');                
    }
 cerrar(){
  console.log('cerrar')
  //this.storage.remove('token');
  this.storage.remove('datos_user');
  this.navCtrl.navigateRoot('login');
 }

 perfil(){
  this.navCtrl.navigateRoot('perfil');
 } 


  

}
