"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modals_perfil_perfil_module_ts"],{

/***/ 8849:
/*!********************************************************!*\
  !*** ./src/app/modals/perfil/perfil-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPageRoutingModule": () => (/* binding */ PerfilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil.page */ 907);




const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_0__.PerfilPage
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ 7701:
/*!************************************************!*\
  !*** ./src/app/modals/perfil/perfil.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPageModule": () => (/* binding */ PerfilPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil-routing.module */ 8849);
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.page */ 907);







let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__.PerfilPageRoutingModule
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_1__.PerfilPage]
    })
], PerfilPageModule);



/***/ }),

/***/ 907:
/*!**********************************************!*\
  !*** ./src/app/modals/perfil/perfil.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPage": () => (/* binding */ PerfilPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _perfil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil.page.html?ngResource */ 3113);
/* harmony import */ var _perfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.page.scss?ngResource */ 3785);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _iniciarusuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../iniciarusuario.service */ 7574);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config */ 9698);













let PerfilPage = class PerfilPage {
    constructor(location, modalCtrl, http, menuCtrl, toast, fb, storage, inicia) {
        this.location = location;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.menuCtrl = menuCtrl;
        this.toast = toast;
        this.fb = fb;
        this.storage = storage;
        this.inicia = inicia;
        this.urlRoot = src_app_config__WEBPACK_IMPORTED_MODULE_4__.AppConfig.urlRoot;
        this.inicia.verificar();
        this.registroForm = this.fb.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3)]],
            apellido: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3)]],
            whatsapp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]],
            dni: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(7)]],
            direccion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10)]],
        });
    }
    closeMenu() {
        this.menuCtrl.close();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.inicia.verificar();
            this.datosUsuario = yield this.inicia.getUser();
            this.registroForm.controls.nombre.setValue(this.datosUsuario[0].nombre);
            this.registroForm.controls.apellido.setValue(this.datosUsuario[0].apellido);
            this.registroForm.controls.whatsapp.setValue(this.datosUsuario[0].telefono);
            this.registroForm.controls.dni.setValue(this.datosUsuario[0].dni);
            this.registroForm.controls.direccion.setValue(this.datosUsuario[0].direccion);
        });
    }
    guardar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.bandera = '';
            if (this.registroForm.value.nombre === '' || this.registroForm.value.nombre === undefined || this.registroForm.value.nombre === null) {
                this.bandera = '- Nombre<br/>';
            }
            if (this.registroForm.value.whatsapp === '' || this.registroForm.value.whatsapp === undefined
                || this.registroForm.value.whatsapp === null) {
                this.bandera = '- Whatsapp<br/>';
            }
            this.idUSUARIO = yield this.inicia.getUser();
            this.idUSUARIO = this.idUSUARIO['0'].idUsuario;
            if (this.bandera !== '') {
                this.presentToast('<u><strong>Complete:</strong></u>  <br/>' + this.bandera, 2000, 'warning', 'warning-toast');
            }
            else {
                //////////////////////////////////RESERVA///////////////////////////////////////////
                // eslint-disable-next-line @typescript-eslint/naming-convention
                const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({ 'Content-Type': 'application/octet-stream' });
                const options = {
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
                (this.http.post(this.urlRoot + '/index.php/Api/updateUsuario/', JSON.stringify(options), headers))
                    //probar crear otra consulta q devuelva valores location y stopover en api php.
                    .subscribe((res) => {
                    this.presentToast(' Se guardaron los cambios!', 2000, 'checkmark', 'sucess-toast');
                }, (error) => {
                    if (this.bandera !== '') {
                        this.presentToast(' ¡Atención! Ha ocurrido un error.<br/>Vuelva a intentarlo', 2000, 'warning', 'warning-toast');
                        console.log(error);
                    }
                });
            }
        });
    }
    presentToast(mensaje, duracion, icon, css) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: mensaje,
                duration: duracion,
                icon,
                cssClass: css,
                position: 'middle'
            });
            toast.present();
        });
    }
    myBackButton() {
        this.location.back();
    }
};
PerfilPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _iniciarusuario_service__WEBPACK_IMPORTED_MODULE_2__.IniciarusuarioService }
];
PerfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-perfil',
        template: _perfil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_perfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PerfilPage);



/***/ }),

/***/ 3785:
/*!***********************************************************!*\
  !*** ./src/app/modals/perfil/perfil.page.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJmaWwucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 3113:
/*!***********************************************************!*\
  !*** ./src/app/modals/perfil/perfil.page.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>   \r\n    <ion-buttons slot=\"start\">     \r\n      <ion-button (click)=\"myBackButton()\">\r\n        <ion-icon name=\"arrow-back-sharp\" style=\"font-size: 22px;\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid> \r\n      <ion-card >\r\n        <form [formGroup]=\"registroForm\">\r\n          <ion-card-content>\r\n            <ion-card-header>\r\n              <ion-card-title >\r\n                  <strong>NOMBRE</strong>\r\n                  <ion-input formControlName=\"nombre\" placeholder=\"Ingresar nombre\"></ion-input>\r\n                </ion-card-title>\r\n                <ion-card-title >\r\n                  <strong>APELLIDO</strong>\r\n                  <ion-input formControlName=\"apellido\" placeholder=\"Ingresar apellido\"></ion-input>\r\n                </ion-card-title>\r\n                <ion-card-title >\r\n                  <strong>DNI</strong>\r\n                  <ion-input formControlName=\"dni\" placeholder=\"Ingresar N° DNI sin puntos\"></ion-input>\r\n                </ion-card-title>\r\n                <ion-card-title >\r\n                  <strong>DIRECCIÓN</strong>\r\n                 <ion-input formControlName=\"direccion\" placeholder=\"Ingresar dirección\"></ion-input>\r\n                </ion-card-title>\r\n                <ion-card-title >\r\n                 <strong>TELEFONO</strong>\r\n                 <ion-input formControlName=\"whatsapp\" placeholder=\"Ingresar whatsapp\"></ion-input>\r\n                </ion-card-title>\r\n\r\n                <ion-card-title >\r\n                  <ion-row>\r\n                    <ion-col></ion-col>\r\n                    <ion-col><ion-button (click)=\"guardar()\">Actualizar</ion-button></ion-col>\r\n                    <ion-col></ion-col>\r\n                  </ion-row>           \r\n                </ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card-content>\r\n      </form>\r\n    </ion-card>  \r\n</ion-grid>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_modals_perfil_perfil_module_ts.js.map