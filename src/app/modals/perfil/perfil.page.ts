import { Component, OnInit } from '@angular/core';
import { IniciarusuarioService } from '../../iniciarusuario.service';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ToastController, NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Location } from "@angular/common";
import { AppConfig } from 'src/app/config';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  public registroForm: FormGroup;
  data: any;
  datosUsuario: any;
  idUSUARIO: any;
  okok: any;
  usuario: any;
  finalModalData: any;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  FOTO_PERFIL: any;
  // eslint-disable-next-line @typescript-eslint/naming-convention
	bandera: any;
  urlRoot: string = AppConfig.urlRoot;
  constructor(private location: Location,public modalCtrl: ModalController,public http: HttpClient,public menuCtrl: MenuController,
    public toast: ToastController,public fb: FormBuilder,public storage: Storage,public inicia: IniciarusuarioService) {

      this.inicia.verificar();

    this.registroForm = this.fb.group({
      nombre:['',[Validators.required,Validators.minLength(3)]],
      apellido:['',[Validators.required,Validators.minLength(3)]],
      whatsapp:['',[Validators.required,Validators.minLength(10),Validators.required,Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]],
      dni:['',[Validators.required,Validators.minLength(7)]],
      direccion:['',[Validators.required,Validators.minLength(10)]],
    });

   }
   closeMenu() {

    this.menuCtrl.close();
  }
   async ngOnInit() {
    this.inicia.verificar();
    this.datosUsuario=  await this.inicia.getUser();

    this.registroForm.controls.nombre.setValue(this.datosUsuario[0].nombre);
    this.registroForm.controls.apellido.setValue(this.datosUsuario[0].apellido);
    this.registroForm.controls.whatsapp.setValue(this.datosUsuario[0].telefono);
    this.registroForm.controls.dni.setValue(this.datosUsuario[0].dni);    
    this.registroForm.controls.direccion.setValue(this.datosUsuario[0].direccion);    
      }

      async guardar()
      {
	  this.bandera='';
        if (this.registroForm.value.nombre==='' || this.registroForm.value.nombre===undefined || this.registroForm.value.nombre===null){
         this.bandera='- Nombre<br/>';
        }
        if (this.registroForm.value.whatsapp==='' || this.registroForm.value.whatsapp===undefined
        || this.registroForm.value.whatsapp===null){
        this.bandera='- Whatsapp<br/>';
       }
        
        this.idUSUARIO= await this.inicia.getUser();
        this.idUSUARIO=this.idUSUARIO['0'].idUsuario;

        if(this.bandera!==''){
          this.presentToast('<u><strong>Complete:</strong></u>  <br/>'+this.bandera,2000,'warning','warning-toast');
        }
		else {
    //////////////////////////////////RESERVA///////////////////////////////////////////
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const headers: any		= new HttpHeaders({'Content-Type' : 'application/octet-stream'});

        const options: any		= {
          //idNEGOCIOS,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          nombre: this.registroForm.value.nombre,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          apellido: this.registroForm.value.apellido,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          telefono: this.registroForm.value.whatsapp,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          direccion: this.registroForm.value.direccion,
          // eslint-disable-next-line @typescript-eslint/naming-convention
         idUsuario: this.idUSUARIO,
         dni: this.registroForm.value.dni,
         };
        //options 	: any		= { "idNEGOCIOS": '1' };       
         (this.http.post(this.urlRoot+'/index.php/Api/updateUsuario/',
        JSON.stringify(options), headers))
        //probar crear otra consulta q devuelva valores location y stopover en api php.

        .subscribe(
         (res: any) => {
          this.presentToast(' Se guardaron los cambios!',2000,'checkmark','sucess-toast');
        },
        (error: any) =>{
         if(this.bandera!==''){
          this.presentToast(' ¡Atención! Ha ocurrido un error.<br/>Vuelva a intentarlo',2000,'warning','warning-toast');
         console.log(error);
          }
        }
        );
      }
      }

async presentToast(mensaje,duracion,icon,css) {
  const toast = await this.toast.create({
    message: mensaje,
    duration: duracion,
    icon,
    cssClass: css,
    position:'middle'
  });
  toast.present();
}
myBackButton(){
  this.location.back();
}
 // eslint-disable-next-line @typescript-eslint/naming-convention
 

}
