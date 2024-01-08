"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_registro_registro_module_ts"],{

/***/ 4967:
/*!*****************************************************!*\
  !*** ./src/app/registro/registro-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageRoutingModule": () => (/* binding */ RegistroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page */ 2299);




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_0__.RegistroPage
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroPageRoutingModule);



/***/ }),

/***/ 636:
/*!*********************************************!*\
  !*** ./src/app/registro/registro.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageModule": () => (/* binding */ RegistroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-routing.module */ 4967);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page */ 2299);







let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroPageRoutingModule
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_1__.RegistroPage]
    })
], RegistroPageModule);



/***/ }),

/***/ 2299:
/*!*******************************************!*\
  !*** ./src/app/registro/registro.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPage": () => (/* binding */ RegistroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page.html?ngResource */ 9575);
/* harmony import */ var _registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page.scss?ngResource */ 7177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config */ 9698);



/* eslint-disable @typescript-eslint/naming-convention */







let RegistroPage = class RegistroPage {
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    constructor(storage, fb, alertController, router, http) {
        this.storage = storage;
        this.fb = fb;
        this.alertController = alertController;
        this.router = router;
        this.http = http;
        this.urlRoot = src_app_config__WEBPACK_IMPORTED_MODULE_3__.AppConfig.urlRoot;
        this.registroForm = this.fb.group({
            usuario: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3)]],
            apellido: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3)]],
            whatsapp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]],
            password2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]],
        }, {
            validator: this.passwordMatchValidator
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    passwordMatchValidator(formGroup) {
        const password = formGroup.get('password').value;
        const password2 = formGroup.get('password2').value;
        return password === password2 ? null : { mismatch: true };
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    registro() {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ 'Content-Type': 'application/octet-stream' });
        const options = {
            //idNEGOCIOS,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            USUARIO: this.registroForm.value.usuario,
            PASSWORD: this.registroForm.value.password,
            NOMBRE: this.registroForm.value.nombre,
            APELLIDO: this.registroForm.value.apellido,
            TELEFONO: this.registroForm.value.whatsapp
        };
        //options 	: any		= { "idNEGOCIOS": '1' };
        (this.http.post(this.urlRoot + '/index.php/Api/registrarUsuario/', JSON.stringify(options), headers))
            //probar crear otra consulta q devuelva valores location y stopover en api php.
            .subscribe((res) => {
            console.log('registro', res);
            this.presentAlert2();
        }, (error) => {
            //console.log('error',error);
            //this.presentAlert(' ¡Atención! ','Este vehiculo no esta registrado en el barrio.','Se recomienda llamar al 101');
            console.log(error);
            this.presentAlert();
            //this.navCtrl.navigateRoot('/tab3');
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    loguearme() {
        this.router.navigate(['/login']);
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alerta',
                subHeader: 'Ya existe este usuario en la base de datos.',
                message: 'Error',
                buttons: ['Aceptar']
            });
            yield alert.present();
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    presentAlert2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alerta',
                subHeader: 'Se registro correctamente',
                message: 'Ya puede iniciar sesion',
                buttons: ['Aceptar']
            });
            yield alert.present();
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ngOnInit() {
    }
};
RegistroPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient }
];
RegistroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-registro',
        template: _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegistroPage);



/***/ }),

/***/ 7177:
/*!********************************************************!*\
  !*** ./src/app/registro/registro.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n/* *{font-family: 'arial';}*/\n\n.avatar {\n  border-radius: 50%;\n  width: 150px;\n  height: 150px;\n  margin-top: 10px;\n}\n\n/* DOES NOT WORK - not specific enough */\n\n.alert-wrapper {\n  background: #e5e5e5;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class .alert-wrapper {\n  background: #e5e5e5;\n}\n\n.ion-card-content-class {\n  max-width: 300px;\n  text-align: justify;\n}\n\n.isCSS {\n  text-align: center;\n  max-width: 240px;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n}\n\n.centrar {\n  margin-left: 70px;\n  margin-right: 70px;\n  max-width: 350px;\n  text-align: justify;\n}\n\n.estrellita {\n  color: gold;\n}\n\n.error {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQSw0QkFBQTs7QUFFQTtFQUFRLGtCQUFBO0VBQW9CLFlBQUE7RUFBYyxhQUFBO0VBQWUsZ0JBQUE7QUFJekQ7O0FBRkEsd0NBQUE7O0FBQ0E7RUFDQSxtQkFBQTtBQUtBOztBQUZBLHVFQUFBOztBQUNBO0VBQ0EsbUJBQUE7QUFLQTs7QUFIQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFNQTs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2RUFBQTtBQUtGOztBQUZBO0VBQ0UsaUJBQUE7RUFBaUIsa0JBQUE7RUFBbUIsZ0JBQUE7RUFDcEMsbUJBQUE7QUFPRjs7QUFGQTtFQUNBLFdBQUE7QUFLQTs7QUFGQTtFQUFPLFVBQUE7QUFNUCIsImZpbGUiOiJyZWdpc3Ryby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcbiAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcclxuICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xyXG59XHJcblxyXG4vKiAqe2ZvbnQtZmFtaWx5OiAnYXJpYWwnO30qL1xyXG5cclxuLmF2YXRhcntib3JkZXItcmFkaXVzOiA1MCU7IHdpZHRoOiAxNTBweDsgaGVpZ2h0OiAxNTBweDsgbWFyZ2luLXRvcDoxMHB4O31cclxuXHJcbi8qIERPRVMgTk9UIFdPUksgLSBub3Qgc3BlY2lmaWMgZW5vdWdoICovXHJcbi5hbGVydC13cmFwcGVyIHtcclxuYmFja2dyb3VuZDogI2U1ZTVlNTtcclxufVxyXG5cclxuLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cclxuLm15LWN1c3RvbS1jbGFzcyAuYWxlcnQtd3JhcHBlciB7XHJcbmJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbn1cclxuLmlvbi1jYXJkLWNvbnRlbnQtY2xhc3N7XHJcbm1heC13aWR0aDogMzAwcHg7XHJcbnRleHQtYWxpZ246IGp1c3RpZnk7XHJcblxyXG59XHJcblxyXG4uaXNDU1N7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAyNDBweDtcclxuICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNlbnRyYXJ7XHJcbiAgbWFyZ2luLWxlZnQ6NzBweDttYXJnaW4tcmlnaHQ6IDcwcHg7bWF4LXdpZHRoOiAzNTBweDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG5cclxuXHJcbi5lc3RyZWxsaXRhe1xyXG5jb2xvcjpnb2xkO1xyXG59XHJcblxyXG4uZXJyb3J7Y29sb3I6cmVkO31cclxuIl19 */";

/***/ }),

/***/ 9575:
/*!********************************************************!*\
  !*** ./src/app/registro/registro.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-content><ion-grid>\r\n  <ion-row>\r\n    <ion-col ></ion-col>\r\n    <ion-col style=\"min-width:350px;\">\r\n      <ion-card class=\"ionCardLogin\">\r\n        <ion-card-header style=\"background-color: black;\">\r\n          <ion-card-title class=\"isCSS\">\r\n           <img src='../../assets/logo_top.png' style=\"padding-left:70px;text-align:right;width:100%;height:100%;\"/>\r\n          </ion-card-title>\r\n        </ion-card-header>\r\n\r\n\r\n\r\n      <form [formGroup]=\"registroForm\" (ngSubmit)=\"registro()\">\r\n        <ion-card-content>\r\n\r\n          <ion-card-header>\r\n          <ion-card-title class=\"etiqueta\">EMAIL</ion-card-title>\r\n          <ion-card-title class=\"etiqueta\"><ion-input formControlName=\"usuario\"\r\n            placeholder=\"Ingresar email\" style=\"background-color:white;\"\r\n            [ngClass]=\"{error:registroForm.get('usuario').hasError('required') && registroForm.get('usuario').dirty,warning:registroForm.get('usuario').hasError('minlength')&&\r\n            registroForm.get('usuario').dirty}\"></ion-input>\r\n            <div *ngIf=\"registroForm.get('usuario').errors && registroForm.get('usuario').dirty\">\r\n              <p class=\"error\" *ngIf=\"registroForm.get('usuario').hasError('required')\">El campo es obligatorio</p>\r\n              <p class=\"error\" *ngIf=\"registroForm.get('usuario').hasError('email')\">Debe ser un email valido</p>\r\n            </div>\r\n          </ion-card-title>\r\n\r\n          <ion-card-title class=\"etiqueta\">NOMBRE</ion-card-title>\r\n          <ion-card-title class=\"etiqueta\"><ion-input formControlName=\"nombre\"\r\n            placeholder=\"Ingresar nombre\" style=\"background-color:white;\"\r\n            [ngClass]=\"{error:registroForm.get('nombre').hasError('required') && registroForm.get('nombre').dirty,warning:registroForm.get('nombre').hasError('minlength')&&\r\n            registroForm.get('usuario').dirty}\"></ion-input>\r\n            <div *ngIf=\"registroForm.get('nombre').errors && registroForm.get('nombre').dirty\">\r\n              <p class=\"error\" *ngIf=\"registroForm.get('nombre').hasError('required')\">El campo es obligatorio</p>\r\n              <p class=\"error\" *ngIf=\"registroForm.get('nombre').hasError('nombre')\">Debe ser un nombre valido</p>\r\n            </div>\r\n          </ion-card-title>\r\n\r\n          <ion-card-title class=\"etiqueta\">APELLIDO</ion-card-title>\r\n          <ion-card-title class=\"etiqueta\"><ion-input formControlName=\"apellido\"\r\n            placeholder=\"Ingresar apellido\" style=\"background-color:white;\"\r\n            [ngClass]=\"{error:registroForm.get('apellido').hasError('required') && registroForm.get('apellido').dirty,warning:registroForm.get('apellido').hasError('minlength')&&\r\n            registroForm.get('apellido').dirty}\"></ion-input>\r\n            <div *ngIf=\"registroForm.get('apellido').errors && registroForm.get('apellido').dirty\">\r\n              <p class=\"error\" *ngIf=\"registroForm.get('apellido').hasError('required')\">El campo es obligatorio</p>\r\n              <p class=\"error\" *ngIf=\"registroForm.get('apellido').hasError('apellido')\">Debe ser un apellido valido</p>\r\n            </div>\r\n          </ion-card-title>\r\n\r\n          <ion-card-title class=\"etiqueta\">WHATSAPP [Ej: 542974235278]</ion-card-title>\r\n          <ion-card-title class=\"etiqueta\">\r\n            <ion-input  style=\"background-color:white;\" formControlName=\"whatsapp\" placeholder=\"Ingresa tu numero celular cod.pais + area(sin 0) + nro (sin 15)\"\r\n          value=\"\"></ion-input>\r\n          <div *ngIf=\"registroForm.get('whatsapp').errors && registroForm.get('whatsapp').dirty\">\r\n            <p class=\"error\" *ngIf=\"registroForm.get('whatsapp').hasError('minlength')\">Debe tener al menos 10 digitos</p>\r\n            <p class=\"error\" *ngIf=\"registroForm.get('whatsapp').hasError('required')\">El campo es obligatorio</p>\r\n            <p class=\"error\" *ngIf=\"registroForm.get('whatsapp').hasError('pattern')\">Debe ser un numero whatsapp valido [Ej: 542974235278]</p>\r\n          </div>\r\n          </ion-card-title>\r\n\r\n          <ion-card-title class=\"etiqueta\">CONTRASEÑA</ion-card-title>\r\n          <ion-card-title class=\"etiqueta\">\r\n            <ion-input style=\"background-color:white;\" formControlName=\"password\" type=\"password\" placeholder=\"Ingresar Contraseña\"></ion-input>\r\n            <div *ngIf=\"registroForm.get('password').errors && registroForm.get('password').dirty\">\r\n              <p class=\"error\" *ngIf=\"registroForm.get('password').hasError('required')\">El campo es obligatorio</p>\r\n              <p class=\"error\" *ngIf=\"registroForm.get('password').hasError('minlength')\">La contraseña debe tener al menos 6 caracteres</p>\r\n            </div>\r\n          </ion-card-title>\r\n\r\n          <ion-card-title class=\"etiqueta\">REPETIR CONTRASEÑA</ion-card-title>\r\n          <ion-card-title class=\"etiqueta\">\r\n            <ion-input style=\"background-color:white;\" formControlName=\"password2\" type=\"password\" placeholder=\"Repetir Contraseña\"></ion-input>\r\n            <div *ngIf=\"registroForm.get('password2').errors && registroForm.get('password2').dirty\">\r\n              <p class=\"error\" *ngIf=\"registroForm.get('password2').hasError('required')\">El campo es obligatorio</p>\r\n              <p class=\"error\" *ngIf=\"registroForm.get('password2').hasError('minlength')\">La contraseña debe tener al menos 6 caracteres</p>\r\n              <div *ngIf=\"registroForm.hasError('mismatch') && registroForm.get('password2').dirty\">\r\n                <p class=\"error\" >Las contraseñas no coinciden</p>\r\n              </div>\r\n            </div>\r\n          </ion-card-title>         \r\n\r\n          <ion-card-title style=\"text-align: center;\">\r\n            <ion-button type=\"submit\" fill=\"outline\"  [disabled]=\"registroForm.invalid\"  >Registrarme</ion-button>\r\n          </ion-card-title>\r\n          <ion-card-sub-title class=\"isCSS\" routerLink=\"/login\">\r\n          <p>&nbsp;</p>\r\n          <p>  Si ya estas registrado, podés <span style=\"text-decoration:underline;font-weight:solid;cursor: pointer;\">Ingresar acá</span></p>\r\n          </ion-card-sub-title>\r\n\r\n    </ion-card-header>\r\n          </ion-card-content>\r\n\r\n\r\n\r\n    </form>\r\n  </ion-card>\r\n</ion-col>\r\n<ion-col></ion-col>\r\n</ion-row></ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_registro_registro_module_ts.js.map