/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { IniciarusuarioService } from '../../iniciarusuario.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { NavParams, ToastController } from '@ionic/angular';
import { interval} from 'rxjs';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AppConfig } from 'src/app/config';
@Component({
  selector: 'app-masinfo',
  templateUrl: './masinfo.page.html',
  styleUrls: ['./masinfo.page.scss'],
})
export class MasinfoPage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  idProducto : any =this.navParams.get('mySubject');
  nombreProducto : any =this.navParams.get('mySubject2');
  descripcionProducto : any =this.navParams.get('mySubject3');
  fotoProducto : any =this.navParams.get('mySubject4');
  precioProducto : any =this.navParams.get('mySubject5');
  isModalOpen = false;
  // eslint-disable-next-line @typescript-eslint/naming-convention

  nomostrar: any;
  chats: any;
  cantidadesPorProducto: {[idProducto: string]: number} = {};  
  urlRoot: string = AppConfig.urlRoot;
  public myForm: FormGroup;
  mensaje: any;
  totalCantidades: number;
  constructor(public http: HttpClient, public navParams: NavParams,public modalCtrl: ModalController,
    public toastController:ToastController, public inicia: IniciarusuarioService, public formBuilder: FormBuilder)
    {
      this.myForm=this.formBuilder.group({
        //asientos:['1',Validators.required],
        //totales:['']
      });
      this.nomostrar=true;


    this.myForm=this.formBuilder.group({
      //mensaje:['',Validators.required]
    });
        
    }
    cancel() {
      return this.modalCtrl.dismiss(null, 'cancel');
    }
    incrementar(idProducto: string) { 
      this.cantidadesPorProducto[idProducto] =  (this.cantidadesPorProducto[idProducto] || 1) + 1;
      
   }
 
   decrementar(idProducto: string) {
     if (this.cantidadesPorProducto[idProducto] && this.cantidadesPorProducto[idProducto] > 1) {
       this.cantidadesPorProducto[idProducto]--;
       
     }
   }
   public add(idproducto: number,nombreProducto: String, fotoProducto: String, precio: any){
    const cantidad = this.cantidadesPorProducto[idproducto] || 1;
    this.inicia.onClickProduct(idproducto,nombreProducto, fotoProducto, cantidad,precio)
    this.presentToast('Agregaste '+ cantidad + ' items de este producto.')
    
    this.calculaTotal();
    
  }
  calculaTotal(){   
    const arrayProductos = this.inicia.obtenerProductosSeleccionados()
    // Inicializa una variable para la sumatoria total
      let _totalCantidades = 0;

      // Recorre el objeto y suma las cantidades
      for (const key in arrayProductos) {
        if (arrayProductos.hasOwnProperty(key)) {
          _totalCantidades += arrayProductos[key].cant;
        }
    }
    // Imprime la sumatoria total en la consola    
    this.totalCantidades =_totalCantidades;
  }
  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      //header: 'Toast header',
      message: mensaje,
      duration: 2000,
      position: 'bottom',
      color: 'primary',
      buttons: [
        {
          side: 'start',
          icon: 'cart',          
          handler: () => {
            console.log('Favorite clicked');
          },
        },
        {
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
      });
    toast.present();
    }
  ngOnInit() {    
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


}
