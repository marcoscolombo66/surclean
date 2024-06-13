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

module.exports = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n/* *{font-family: 'arial';}*/\n\n.avatar {\n  border-radius: 50%;\n  width: 150px;\n  height: 150px;\n  margin-top: 10px;\n}\n\n/* DOES NOT WORK - not specific enough */\n\n.alert-wrapper {\n  background: #e5e5e5;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class .alert-wrapper {\n  background: #e5e5e5;\n}\n\n.ion-card-content-class {\n  max-width: 300px;\n  text-align: justify;\n}\n\n.isCSS {\n  text-align: center;\n  max-width: 240px;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n}\n\n.centrar {\n  margin-left: 70px;\n  margin-right: 70px;\n  max-width: 350px;\n  text-align: justify;\n}\n\n.estrellita {\n  color: gold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9sdmlkby5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxQcm95ZWN0b3MlMjBDbGllbnRlc1xcc3VyY2xlYW5cXHN1cmNsZWFuXFxzcmNcXGFwcFxcb2x2aWRvXFxvbHZpZG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQ0NGOztBREVBLDRCQUFBOztBQUVBO0VBQVEsa0JBQUE7RUFBb0IsWUFBQTtFQUFjLGFBQUE7RUFBZSxnQkFBQTtBQ0l6RDs7QURGQSx3Q0FBQTs7QUFDQTtFQUNBLG1CQUFBO0FDS0E7O0FERkEsdUVBQUE7O0FBQ0E7RUFDQSxtQkFBQTtBQ0tBOztBREhBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ01BOztBREZBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZFQUFBO0FDS0Y7O0FERkE7RUFDRSxpQkFBQTtFQUFpQixrQkFBQTtFQUFtQixnQkFBQTtFQUNwQyxtQkFBQTtBQ09GOztBREZBO0VBQ0EsV0FBQTtBQ0tBIiwiZmlsZSI6Im9sdmlkby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcbiAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcclxuICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xyXG59XHJcblxyXG4vKiAqe2ZvbnQtZmFtaWx5OiAnYXJpYWwnO30qL1xyXG5cclxuLmF2YXRhcntib3JkZXItcmFkaXVzOiA1MCU7IHdpZHRoOiAxNTBweDsgaGVpZ2h0OiAxNTBweDsgbWFyZ2luLXRvcDoxMHB4O31cclxuXHJcbi8qIERPRVMgTk9UIFdPUksgLSBub3Qgc3BlY2lmaWMgZW5vdWdoICovXHJcbi5hbGVydC13cmFwcGVyIHtcclxuYmFja2dyb3VuZDogI2U1ZTVlNTtcclxufVxyXG5cclxuLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cclxuLm15LWN1c3RvbS1jbGFzcyAuYWxlcnQtd3JhcHBlciB7XHJcbmJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbn1cclxuLmlvbi1jYXJkLWNvbnRlbnQtY2xhc3N7XHJcbm1heC13aWR0aDogMzAwcHg7XHJcbnRleHQtYWxpZ246IGp1c3RpZnk7XHJcblxyXG59XHJcblxyXG4uaXNDU1N7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAyNDBweDtcclxuICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNlbnRyYXJ7XHJcbiAgbWFyZ2luLWxlZnQ6NzBweDttYXJnaW4tcmlnaHQ6IDcwcHg7bWF4LXdpZHRoOiAzNTBweDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG5cclxuXHJcbi5lc3RyZWxsaXRhe1xyXG5jb2xvcjpnb2xkO1xyXG59XHJcbiIsIjpyb290IHtcbiAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn1cblxuLyogKntmb250LWZhbWlseTogJ2FyaWFsJzt9Ki9cbi5hdmF0YXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLyogRE9FUyBOT1QgV09SSyAtIG5vdCBzcGVjaWZpYyBlbm91Z2ggKi9cbi5hbGVydC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbn1cblxuLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cbi5teS1jdXN0b20tY2xhc3MgLmFsZXJ0LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xufVxuXG4uaW9uLWNhcmQtY29udGVudC1jbGFzcyB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5pc0NTUyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAyNDBweDtcbiAgZm9udC1mYW1pbHk6IFwiR2lsbCBTYW5zXCIsIFwiR2lsbCBTYW5zIE1UXCIsIENhbGlicmksIFwiVHJlYnVjaGV0IE1TXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jZW50cmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gIG1hcmdpbi1yaWdodDogNzBweDtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmVzdHJlbGxpdGEge1xuICBjb2xvcjogZ29sZDtcbn0iXX0= */";

/***/ }),

/***/ 4145:
/*!****************************************************!*\
  !*** ./src/app/olvido/olvido.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-content ><ion-grid>\r\n  <ion-row>\r\n    <ion-col ></ion-col>\r\n    <ion-col style=\"min-width:350px;\">\r\n\r\n  <ion-card class=\"ionCardLogin\">\r\n      <ion-card-header>\r\n        <ion-card-title class=\"isCSS\">\r\n          <img src='/assets/logo_top.png' style=\"padding-left:70px;text-align:right;width:100%;height:100%;\"/>\r\n        </ion-card-title>\r\n      </ion-card-header>\r\n\r\n        <form [formGroup]=\"myForm\" (ngSubmit)='recordar()' method=\"post\">\r\n      <ion-card-content>\r\n\r\n        <ion-card-header>\r\n        <ion-card-title class=\"etiqueta\">EMAIL</ion-card-title>\r\n        <ion-card-title class=\"etiqueta\"><ion-input style=\"background-color:white;\" ngModel type=\"email\" formControlName=\"usuario\" placeholder=\"Ingresa tu email para resetear contraseña\" required></ion-input></ion-card-title>\r\n\r\n\r\n        <ion-card-title style=\"text-align: center;\"><ion-button type=\"submit\" fill=\"outline\">RESETEAR</ion-button></ion-card-title>\r\n        <ion-card-sub-title class=\"isCSS\" routerLink=\"/registro\">\r\n        <p>&nbsp;</p>\r\n        <p>  Si no tenes cuenta, podés <span style=\"text-decoration:underline;font-weight:solid;cursor: pointer;\">registrarte</span></p>\r\n        </ion-card-sub-title>\r\n        <ion-card-sub-title class=\"isCSS\" style=\"text-align: center;\"routerLink=\"/login\">\r\n          <p>&nbsp;</p>\r\n          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span style=\"text-align:center;text-decoration:underline;font-weight:solid;cursor: pointer;\"> Iniciar sesión </span></p>\r\n          </ion-card-sub-title>\r\n\r\n\r\n\r\n  </ion-card-header>\r\n        </ion-card-content>\r\n    </form>\r\n      </ion-card>\r\n  </ion-col>\r\n  <ion-col></ion-col>\r\n  </ion-row></ion-grid>\r\n  </ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_olvido_olvido_module_ts.js.map