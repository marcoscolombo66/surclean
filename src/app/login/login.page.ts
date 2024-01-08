/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';

import { AppConfig } from '../config';
import { IniciarusuarioService } from '../iniciarusuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  okok: any;
  isLoggedIn = false;  
  idConductor: any;
  public loginForm: FormGroup;
  urlRoot: string = AppConfig.urlRoot;
  constructor(public toastController: ToastController,
    public alertController: AlertController,
    public router: Router, public inicia: IniciarusuarioService, 
    private http: HttpClient,
    private modalController: ModalController,
    private navCtrl: NavController,public route: ActivatedRoute, public Str: Storage,public fb: FormBuilder,
    ) {

      this.loginForm = this.fb.group({
        usuario:['',[Validators.required,Validators.minLength(5),Validators.email]], 
        password:['',[Validators.required,Validators.minLength(6)]]
      });


  }
  login3(){
    const headers: any		= new HttpHeaders({'Content-Type' : 'application/octet-stream'});
    const USUARIO: any = this.loginForm.value.usuario;
    const PASSWORD: any = this.loginForm.value.password;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const options: any		= {USUARIO,PASSWORD};
    //options 	: any		= { "idNEGOCIOS": '1' };
     
    this.okok=(this.http.post(this.urlRoot +'/index.php/Api/iniciarSesion/',
    JSON.stringify(options), headers))
    //probar crear otra consulta q devuelva valores location y stopover en api php.
    .subscribe(
      (res: any) => {
      this.okok=res;
      //

      this.Str.set('datos_user', res)
      .then(
        (data) =>
        {
          //console.log('data',data)
         // this.loginExitoso();
          //this.getNotificaciones(data['0'].idCONDUCTORES);
          this.navCtrl.navigateRoot('/tab1');
          this.isLoggedIn = true;
       },
        error => console.error('Error storing item', error),
        );
        return this.isLoggedIn;
     },
     (error: any) =>{
       this.presentAlert();
      console.log('error',error);

     }
     );
    }
  registrarme(){
    this.router.navigate(['/registro']);
  }
  async loginExitoso() {

    const result: any = await this.Str.get('datos_user');

    const toast = await this.toastController.create({
      message: 'Hola '+result[0].NOMBRE+' '+result[0].APELLIDO+'!',
      duration: 2000,
    position: 'top',
    //showCloseButton: true,
    //closeButtonText:"Cerrar",
    });
    toast.present();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Usuario y/o contraseña incorrectos',
      message: 'Intente nuevamente',
      buttons: ['Aceptar']
    });

    await alert.present();
  }


  async ngOnInit() {
    await this.Str.create();
    this.inicia.verificar()
  }

}
