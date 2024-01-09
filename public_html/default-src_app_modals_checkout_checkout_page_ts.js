"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_modals_checkout_checkout_page_ts"],{

/***/ 6098:
/*!**************************************************!*\
  !*** ./src/app/modals/checkout/checkout.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutPage": () => (/* binding */ CheckoutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _checkout_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout.page.html?ngResource */ 5910);
/* harmony import */ var _checkout_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.page.scss?ngResource */ 3321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _iniciarusuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../iniciarusuario.service */ 7574);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _comprobante_comprobante_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comprobante/comprobante.page */ 6893);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ 9698);



/* eslint-disable @typescript-eslint/naming-convention */








let CheckoutPage = class CheckoutPage {
    constructor(http, navParams, modalCtrl, navCtrl, inicia, formBuilder, toastController, loadingCtrl) {
        this.http = http;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.inicia = inicia;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.loadingCtrl = loadingCtrl;
        this.isModalOpen = false;
        this.totalSuma = 0;
        this.urlRoot = _config__WEBPACK_IMPORTED_MODULE_4__.AppConfig.urlRoot;
        this.arrayCarro = this.inicia.obtenerProductosSeleccionados();
        const productosSeleccionadosString = JSON.stringify(this.arrayCarro, null, 2);
        const productosSeleccionadosObject = JSON.parse(productosSeleccionadosString);
        // Convierte el objeto en un array
        this.arrayCarro = Object.values(productosSeleccionadosObject);
        for (const item of this.arrayCarro) {
            this.totalSuma += item.cant * item.precio;
        }
    }
    cancel() {
        return this.modalCtrl.dismiss(null, 'cancel');
    }
    ngOnInit() {
    }
    showLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...',
                //duration: 3000,
                spinner: 'circles',
            });
            loading.present();
        });
    }
    presentToast(mensaje, position, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                //header: 'Toast header',
                message: mensaje,
                duration: 2000,
                position: position,
                color: color,
                buttons: [
                    {
                        side: 'start',
                        handler: () => {
                            //console.log('Favorite clicked');
                        },
                    },
                    {
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            //console.log('Cancel clicked');
                        },
                    },
                ],
            });
            toast.present();
        });
    }
    pagarUala() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            {
                this.user = yield this.inicia.getUser();
                this.showLoading();
                this.itemsJson = this.arrayCarro.map(item => {
                    return {
                        "title": item.nombreProducto,
                        "picture_url": `${this.urlRoot}/images/${item.fotoProducto}`,
                        "quantity": item.cant,
                        "currency_id": "ARS",
                        "unit_price": parseFloat(item.precio)
                    };
                });
                let cadenaProductos = this.arrayCarro.map(item => item.nombreProducto.toString()).join(', ');
                let total = this.arrayCarro.reduce((acc, item) => {
                    let subtotal = item.cant * parseFloat(item.precio);
                    return acc + subtotal;
                }, 0);
                this.totalSuma = total;
                const idUsuario = this.user[0].idUsuario;
                const usuario = this.user[0].usuario;
                this.inicia.generarTokenUala(this.user).subscribe((tokenUala) => {
                    this.tokenUala = tokenUala;
                    this.inicia.setOrden(idUsuario, (this.itemsJson), this.totalSuma, 'uala', usuario).subscribe((idOrden) => {
                        this.idOrden = idOrden;
                        //console.log("ID de Orden obtenido:", this.idOrden);
                        // Resto de tu código después de obtener el ID de la orden
                        // Definir la URL y el cuerpo de la solicitud url_chk_uala
                        const url = this.user[0].url_chk_uala;
                        const cuerpoSolicitud = {
                            "amount": total.toString(),
                            "description": cadenaProductos,
                            "userName": this.user[0].userNameUala,
                            "callback_fail": this.user[0].callback_fail_uala,
                            "callback_success": this.user[0].callback_success_uala,
                            "notification_url": this.user[0].notification_url_uala
                        };
                        // Configurar las cabeceras de la solicitud
                        const cabeceras = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + this.tokenUala.access_token
                        });
                        this.http.post(url, cuerpoSolicitud, { headers: cabeceras })
                            .subscribe((respuesta) => {
                            //console.log('Respuesta de la API:', respuesta);
                            window.open(respuesta.links.checkoutLink, '_system', 'location=yes');
                            this.updateOrdenUala(this.idOrden, respuesta.links.checkoutLink, respuesta.uuid);
                            // vaciaCarro     
                            this.vaciarCarro();
                            this.navCtrl.navigateRoot('/tab3');
                            this.modalCtrl.dismiss(null, 'cancel');
                            this.loadingCtrl.dismiss();
                            // Manejar la respuesta aquí
                        }, (error) => {
                            console.error('Error en la llamada API:', error);
                            // Manejar el error aquí
                        });
                    }, (error) => {
                        console.error("Error al obtener el ID de la orden:", error);
                        // Manejar el error según tus necesidades
                    });
                });
            }
        });
    }
    pagarMercadopago() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            {
                this.user = yield this.inicia.getUser();
                this.showLoading();
                this.itemsJson = this.arrayCarro.map(item => {
                    return {
                        "title": item.nombreProducto,
                        "picture_url": `${this.urlRoot}/images/${item.fotoProducto}`,
                        "quantity": item.cant,
                        "currency_id": "ARS",
                        "unit_price": parseFloat(item.precio)
                    };
                });
                const idUsuario = this.user[0].idUsuario;
                const nombre = this.user[0].nombre;
                const apellido = this.user[0].apellido;
                const usuario = this.user[0].usuario;
                const telefono = this.user[0].telefono;
                this.inicia.setOrden(idUsuario, (this.itemsJson), this.totalSuma, 'mercadopago', usuario).subscribe((idOrden) => {
                    this.idOrden = idOrden;
                    //console.log("ID de Orden obtenido:", this.idOrden);
                    // Resto de tu código después de obtener el ID de la orden
                    // Definir la URL y el cuerpo de la solicitud this.user[0].idUsuario
                    const url = this.user[0].url_chk_mp;
                    const cuerpoSolicitud = {
                        "auto_return": 'all',
                        "back_urls": {
                            "success": this.user[0].url_success_mp,
                            "pending": this.user[0].url_pending_mp,
                            "failure": this.user[0].url_failure_mp
                        },
                        //"expires": false,
                        "external_reference": this.idOrden,
                        "items": this.itemsJson,
                        // "marketplace_fee": null,
                        //"metadata": null,
                        "payer": {
                            "name": nombre,
                            "surname": apellido,
                            "email": usuario,
                            "phone": {
                                "number": telefono
                            },
                            "identification": {},
                            "address": {
                                "street_number": null
                            }
                        }
                    };
                    // Configurar las cabeceras de la solicitud
                    const cabeceras = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + this.user[0].Authorization_mp
                    });
                    this.http.post(url, cuerpoSolicitud, { headers: cabeceras })
                        .subscribe((respuesta) => {
                        //console.log('Respuesta de la API:', respuesta);
                        window.open(respuesta.init_point, '_system', 'location=yes');
                        this.updateOrden(this.idOrden, respuesta.init_point);
                        // Manejar la respuesta aquí
                        // vaciaCarro     
                        this.vaciarCarro();
                        this.navCtrl.navigateRoot('/tab3');
                        this.modalCtrl.dismiss(null, 'cancel');
                        this.loadingCtrl.dismiss();
                    }, (error) => {
                        console.error('Error en la llamada API:', error);
                        // Manejar el error aquí
                    });
                }, (error) => {
                    console.error("Error al obtener el ID de la orden:", error);
                    // Manejar el error según tus necesidades
                });
                // Realizar la solicitud POST utilizando HttpClient      
            }
        });
    }
    updateOrden(idOrden, respuesta) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({ 'Content-Type': 'application/octet-stream' });
        const options = { idOrden: idOrden, respuesta: respuesta };
        this.http.post(`${this.urlRoot}/index.php/Api/updateOrden/`, JSON.stringify(options), headers)
            .subscribe((res) => {
            //console.log(res);            
        }, (error) => {
            console.log(error);
        });
    }
    updateOrdenUala(idOrden, respuesta, uuid) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({ 'Content-Type': 'application/octet-stream' });
        const options = { idOrden: idOrden, respuesta: respuesta, uuid: uuid };
        this.http.post(`${this.urlRoot}/index.php/Api/updateOrden/`, JSON.stringify(options), headers)
            .subscribe((res) => {
            //console.log(res);            
        }, (error) => {
            console.log(error);
        });
    }
    delete(idproducto) {
        this.totalSuma = 0;
        this.inicia.eliminarProductoCarro(idproducto);
        this.presentToast('Se elimino el producto de la lista.', 'bottom', 'success');
        this.arrayCarro = this.inicia.obtenerProductosSeleccionados();
        const productosSeleccionadosString = JSON.stringify(this.arrayCarro, null, 2);
        const productosSeleccionadosObject = JSON.parse(productosSeleccionadosString);
        // Convierte el objeto en un array
        this.arrayCarro = Object.values(productosSeleccionadosObject);
        for (const item of this.arrayCarro) {
            this.totalSuma += (item.precio * item.cant);
        }
    }
    whatsapp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            {
                this.itemsJson = this.arrayCarro.map(item => {
                    return {
                        "title": item.nombreProducto,
                        "picture_url": `${this.urlRoot}/images/${item.fotoProducto}`,
                        "quantity": item.cant,
                        "currency_id": "ARS",
                        "unit_price": parseFloat(item.precio)
                    };
                });
                let cadenaProductos = this.arrayCarro.map(item => item.nombreProducto.toString()).join(', ');
                let total = this.arrayCarro.reduce((acc, item) => {
                    let subtotal = item.cant * parseFloat(item.precio);
                    return acc + subtotal;
                }, 0);
                this.totalSuma = total;
                let mensaje = "Hola!%0AQuería%20consultarte%20por:%0A";
                mensaje = mensaje + cadenaProductos.replace(/ /g, '%20');
                mensaje = mensaje + ".%0A%0AGracias!";
                const urlWhataspp = `${"https://wa.me/542974235278?text="}${mensaje}`;
                window.open(urlWhataspp, '_system', 'location=yes');
            }
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    transferencia() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this.inicia.getUser();
            this.itemsJson = this.arrayCarro.map(item => {
                return {
                    "title": item.nombreProducto,
                    "picture_url": `${this.urlRoot}/images/${item.fotoProducto}`,
                    "quantity": item.cant,
                    "currency_id": "ARS",
                    "unit_price": parseFloat(item.precio)
                };
            });
            this.user = yield this.inicia.getUser();
            const idUsuario = this.user[0].idUsuario;
            const usuario = this.user[0].usuario;
            this.inicia.setOrden(idUsuario, (this.itemsJson), this.totalSuma, 'transferencia', usuario).subscribe((idOrden) => {
                this.idOrden = idOrden;
                //console.log('tipo',typeof this.idOrden) 
                if (typeof this.idOrden === 'number') {
                    //redirecciona a cargar comprobante
                    this.modalCtrl.dismiss(null, 'cancel');
                    this.subirComprobante(this.idOrden, this.urlRoot);
                    // vaciaCarro     
                    this.vaciarCarro();
                    this.navCtrl.navigateRoot('/tab3');
                }
                else {
                    this.presentToast('Ocurrió un error, vuelva a intentar.', 'middle', 'primary');
                }
            });
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////  
    subirComprobante(idOrden, url) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _comprobante_comprobante_page__WEBPACK_IMPORTED_MODULE_3__.ComprobantePage,
                // breakpoints: [0, 0.99],
                //initialBreakpoint: 0.99,
                handle: true,
                componentProps: {
                    idOrden: idOrden,
                    totalSuma: this.totalSuma,
                    url_proyecto: url
                },
                animated: true,
                canDismiss: true,
                showBackdrop: true,
            });
            yield modal.present();
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    vaciarCarro() {
        this.arrayCarro = null;
        this.totalSuma = 0;
        this.inicia.vaciarProductosSeleccionados();
    }
};
CheckoutPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _iniciarusuario_service__WEBPACK_IMPORTED_MODULE_2__.IniciarusuarioService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController }
];
CheckoutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-checkout',
        template: _checkout_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_checkout_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CheckoutPage);



/***/ }),

/***/ 3321:
/*!***************************************************************!*\
  !*** ./src/app/modals/checkout/checkout.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja291dC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 5910:
/*!***************************************************************!*\
  !*** ./src/app/modals/checkout/checkout.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>   \r\n    <ion-buttons slot=\"start\">     \r\n      <ion-button (click)=\"cancel()\">\r\n        <ion-icon name=\"arrow-back-sharp\" style=\"font-size: 22px;\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<ion-grid>  \r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-title>Productos en el carro</ion-card-title>          \r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-list>           \r\n            <ion-item *ngFor=\"let item of arrayCarro\">\r\n              <ion-thumbnail slot=\"start\" style=\"max-width: 30px;max-height: 30px;\">\r\n                <ion-img alt=\"{{ item.nombreProducto }}\" src=\"{{url_proyecto}}/images/{{item.fotoProducto}}\" ></ion-img>\r\n              </ion-thumbnail>              \r\n              <ion-label>{{ item.cant }} x {{ item.nombreProducto | slice:0:15 }}</ion-label>              \r\n              <ion-label style=\"max-width: 90px;text-align:right;\">$ {{ item.precio }}</ion-label>\r\n              <ion-label  style=\"max-width: 90px;text-align:right;\">$ {{ item.precio * item.cant }}</ion-label>\r\n              <ion-label  style=\"max-width: 30px;text-align:right;\" (click)=\"delete(item.idProducto)\"><ion-icon name=\"close-sharp\" style=\"color:red;\"></ion-icon></ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label style=\"max-width: 20px;max-height: 30px;\"></ion-label>\r\n              <ion-label></ion-label>\r\n              <ion-label style=\"max-width: 50px;text-align:right;\">Total: </ion-label>\r\n              <ion-label style=\"max-width: 110px;text-align:right;\">$ {{totalSuma}}</ion-label>\r\n              <ion-label style=\"max-width: 10px;text-align:right;\"></ion-label>\r\n            </ion-item> \r\n            \r\n            <ion-item style=\"text-align: center;\" *ngIf=\"totalSuma!==0\">\r\n              <ion-label style=\"max-width: 30px;max-height: 30px;\"></ion-label>\r\n              <ion-label></ion-label>\r\n              <ion-label style=\"max-width: 30px;text-align:right;\"> </ion-label>\r\n              <ion-label style=\"max-width: 20px;text-align:right;\"></ion-label>\r\n              <ion-label style=\"max-width: 110px;text-align:right; color:#115c2b;\" (click)=\"vaciarCarro()\"> <ion-icon name=\"trash-bin-sharp\"></ion-icon> Vaciar</ion-label>\r\n            </ion-item>              \r\n          </ion-list>          \r\n        </ion-card-content>\r\n      </ion-card>    \r\n</ion-grid>\r\n<ion-row style=\"text-align: center;display:none;\" *ngIf=\"totalSuma!==0\">\r\n  <ion-col></ion-col> \r\n  <ion-col><label style=\"font-weight: bold;\">PAGAR</label></ion-col>\r\n  <ion-col></ion-col>\r\n</ion-row>\r\n<ion-row style=\"text-align: center;display:none;\" *ngIf=\"totalSuma!==0\">\r\n  <ion-col></ion-col>\r\n  <ion-col><ion-button (click)=\"pagarUala()\">Uala</ion-button></ion-col>\r\n  <ion-col></ion-col>\r\n</ion-row>\r\n<ion-row style=\"text-align: center;display:none;\" *ngIf=\"totalSuma!==0\">\r\n  <ion-col></ion-col>\r\n  <ion-col><ion-button (click)=\"pagarMercadopago()\">Mercadopago</ion-button></ion-col>\r\n  <ion-col></ion-col>\r\n</ion-row>\r\n<ion-row style=\"text-align: center;display:none;\" *ngIf=\"totalSuma!==0\">\r\n  <ion-col></ion-col>\r\n  <ion-col><ion-button (click)=\"transferencia()\">Transferencia</ion-button></ion-col>\r\n  <ion-col></ion-col>\r\n</ion-row>\r\n\r\n<ion-row style=\"text-align: center;\">\r\n  <ion-col></ion-col>\r\n  <ion-col><ion-button (click)=\"whatsapp()\"><ion-icon name=\"chatbubble-sharp\"></ion-icon>&nbsp;&nbsp; Consultar</ion-button></ion-col>\r\n  <ion-col></ion-col>\r\n</ion-row>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_modals_checkout_checkout_page_ts.js.map