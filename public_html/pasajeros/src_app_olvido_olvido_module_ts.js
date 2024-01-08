"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_olvido_olvido_module_ts"],{

/***/ 3533:
/*!*************************************************!*\
  !*** ./src/app/olvido/olvido-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OlvidoPageRoutingModule": () => (/* binding */ OlvidoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _olvido_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./olvido.page */ 6853);




const routes = [
    {
        path: '',
        component: _olvido_page__WEBPACK_IMPORTED_MODULE_0__.OlvidoPage
    }
];
let OlvidoPageRoutingModule = class OlvidoPageRoutingModule {
};
OlvidoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OlvidoPageRoutingModule);



/***/ }),

/***/ 7717:
/*!*****************************************!*\
  !*** ./src/app/olvido/olvido.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OlvidoPageModule": () => (/* binding */ OlvidoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _olvido_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./olvido-routing.module */ 3533);
/* harmony import */ var _olvido_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./olvido.page */ 6853);







let OlvidoPageModule = class OlvidoPageModule {
};
OlvidoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _olvido_routing_module__WEBPACK_IMPORTED_MODULE_0__.OlvidoPageRoutingModule
        ],
        declarations: [_olvido_page__WEBPACK_IMPORTED_MODULE_1__.OlvidoPage]
    })
], OlvidoPageModule);



/***/ }),

/***/ 6853:
/*!***************************************!*\
  !*** ./src/app/olvido/olvido.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OlvidoPage": () => (/* binding */ OlvidoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _olvido_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./olvido.page.html?ngResource */ 4145);
/* harmony import */ var _olvido_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./olvido.page.scss?ngResource */ 3471);
/* harmony import */ var _iniciarusuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../iniciarusuario.service */ 7574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config */ 9698);












let OlvidoPage = class OlvidoPage {
    constructor(http, actionSheetCtrl, alertController, modalCtrl, toast, formBuilder, inicia) {
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertController = alertController;
        this.modalCtrl = modalCtrl;
        this.toast = toast;
        this.formBuilder = formBuilder;
        this.inicia = inicia;
        this.urlRoot = src_app_config__WEBPACK_IMPORTED_MODULE_3__.AppConfig.urlRoot;
        this.myForm = this.formBuilder.group({
            usuario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
        });
    }
    recordar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log('pp', this.myForm.value.usuario);
            if (!this.myForm.valid) {
                this.presentToast(' ¡Atención! Ha ocurrido un error.<br/>Ingrese los valores requeridos.');
                return false;
            }
            else {
                //////////////////////////////////RESERVA///////////////////////////////////////////
                // eslint-disable-next-line @typescript-eslint/naming-convention
                const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({ 'Content-Type': 'application/octet-stream' });
                const options = {
                    //idNEGOCIOS,
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    USUARIO: this.myForm.value.usuario,
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                };
                //options 	: any		= { "idNEGOCIOS": '1' };
                (this.http.post(this.urlRoot + '/index.php/Api/resetPass/', JSON.stringify(options), headers))
                    //probar crear otra consulta q devuelva valores location y stopover en api php.
                    .subscribe((res) => {
                    this.presentToast(' Se reseteo la contraseña, se enviara a su email!');
                }, (error) => {
                    this.presentToast(' ¡Atención! Ha ocurrido un error.<br/>Vuelva a intentarlo');
                    console.log(error);
                });
            }
        });
    }
    presentToast(mensaje) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: mensaje,
                duration: 2000,
                position: 'top'
            });
            toast.present();
        });
    }
    ngOnInit() {
    }
};
OlvidoPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _iniciarusuario_service__WEBPACK_IMPORTED_MODULE_2__.IniciarusuarioService }
];
OlvidoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-olvido',
        template: _olvido_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_olvido_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OlvidoPage);



/***/ }),

/***/ 3471:
/*!****************************************************!*\
  !*** ./src/app/olvido/olvido.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n/* *{font-family: 'arial';}*/\n\n.avatar {\n  border-radius: 50%;\n  width: 150px;\n  height: 150px;\n  margin-top: 10px;\n}\n\n/* DOES NOT WORK - not specific enough */\n\n.alert-wrapper {\n  background: #e5e5e5;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class .alert-wrapper {\n  background: #e5e5e5;\n}\n\n.ion-card-content-class {\n  max-width: 300px;\n  text-align: justify;\n}\n\n.isCSS {\n  text-align: center;\n  max-width: 240px;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n}\n\n.centrar {\n  margin-left: 70px;\n  margin-right: 70px;\n  max-width: 350px;\n  text-align: justify;\n}\n\n.estrellita {\n  color: gold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9sdmlkby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUEsNEJBQUE7O0FBRUE7RUFBUSxrQkFBQTtFQUFvQixZQUFBO0VBQWMsYUFBQTtFQUFlLGdCQUFBO0FBSXpEOztBQUZBLHdDQUFBOztBQUNBO0VBQ0EsbUJBQUE7QUFLQTs7QUFGQSx1RUFBQTs7QUFDQTtFQUNBLG1CQUFBO0FBS0E7O0FBSEE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTUE7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkVBQUE7QUFLRjs7QUFGQTtFQUNFLGlCQUFBO0VBQWlCLGtCQUFBO0VBQW1CLGdCQUFBO0VBQ3BDLG1CQUFBO0FBT0Y7O0FBRkE7RUFDQSxXQUFBO0FBS0EiLCJmaWxlIjoib2x2aWRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcclxuICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xyXG4gIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XHJcbn1cclxuXHJcbi8qICp7Zm9udC1mYW1pbHk6ICdhcmlhbCc7fSovXHJcblxyXG4uYXZhdGFye2JvcmRlci1yYWRpdXM6IDUwJTsgd2lkdGg6IDE1MHB4OyBoZWlnaHQ6IDE1MHB4OyBtYXJnaW4tdG9wOjEwcHg7fVxyXG5cclxuLyogRE9FUyBOT1QgV09SSyAtIG5vdCBzcGVjaWZpYyBlbm91Z2ggKi9cclxuLmFsZXJ0LXdyYXBwZXIge1xyXG5iYWNrZ3JvdW5kOiAjZTVlNWU1O1xyXG59XHJcblxyXG4vKiBXb3JrcyAtIHBhc3MgXCJteS1jdXN0b20tY2xhc3NcIiBpbiBjc3NDbGFzcyB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSAqL1xyXG4ubXktY3VzdG9tLWNsYXNzIC5hbGVydC13cmFwcGVyIHtcclxuYmFja2dyb3VuZDogI2U1ZTVlNTtcclxufVxyXG4uaW9uLWNhcmQtY29udGVudC1jbGFzc3tcclxubWF4LXdpZHRoOiAzMDBweDtcclxudGV4dC1hbGlnbjoganVzdGlmeTtcclxuXHJcbn1cclxuXHJcbi5pc0NTU3tcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBtYXgtd2lkdGg6IDI0MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY2VudHJhcntcclxuICBtYXJnaW4tbGVmdDo3MHB4O21hcmdpbi1yaWdodDogNzBweDttYXgtd2lkdGg6IDM1MHB4O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcblxyXG5cclxuLmVzdHJlbGxpdGF7XHJcbmNvbG9yOmdvbGQ7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 4145:
/*!****************************************************!*\
  !*** ./src/app/olvido/olvido.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-content ><ion-grid>\r\n  <ion-row>\r\n    <ion-col ></ion-col>\r\n    <ion-col style=\"min-width:350px;\">\r\n\r\n  <ion-card class=\"ionCardLogin\">\r\n      <ion-card-header style=\"background-color:black;\">\r\n        <ion-card-title class=\"isCSS\">\r\n          <img src='../../assets/logo_top.png' style=\"padding-left:70px;text-align:right;width:100%;height:100%;\"/>\r\n        </ion-card-title>\r\n      </ion-card-header>\r\n\r\n        <form [formGroup]=\"myForm\" (ngSubmit)='recordar()' method=\"post\">\r\n      <ion-card-content>\r\n\r\n        <ion-card-header>\r\n        <ion-card-title class=\"etiqueta\">EMAIL</ion-card-title>\r\n        <ion-card-title class=\"etiqueta\"><ion-input style=\"background-color:white;\" ngModel type=\"email\" formControlName=\"usuario\" placeholder=\"Ingresa tu email para resetear contraseña\" required></ion-input></ion-card-title>\r\n\r\n\r\n        <ion-card-title style=\"text-align: center;\"><ion-button type=\"submit\" fill=\"outline\">RESETEAR</ion-button></ion-card-title>\r\n        <ion-card-sub-title class=\"isCSS\" routerLink=\"/registro\">\r\n        <p>&nbsp;</p>\r\n        <p>  Si no tenes cuenta, podés <span style=\"text-decoration:underline;font-weight:solid;cursor: pointer;\">registrarte</span></p>\r\n        </ion-card-sub-title>\r\n        <ion-card-sub-title class=\"isCSS\" style=\"text-align: center;\"routerLink=\"/login\">\r\n          <p>&nbsp;</p>\r\n          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span style=\"text-align:center;text-decoration:underline;font-weight:solid;cursor: pointer;\"> Iniciar sesión </span></p>\r\n          </ion-card-sub-title>\r\n\r\n\r\n\r\n  </ion-card-header>\r\n        </ion-card-content>\r\n    </form>\r\n      </ion-card>\r\n  </ion-col>\r\n  <ion-col></ion-col>\r\n  </ion-row></ion-grid>\r\n  </ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_olvido_olvido_module_ts.js.map