"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ 9698);
/* harmony import */ var _iniciarusuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../iniciarusuario.service */ 7574);



/* eslint-disable @typescript-eslint/naming-convention */











let LoginPage = class LoginPage {
    constructor(toastController, alertController, router, inicia, http, modalController, navCtrl, route, Str, fb) {
        this.toastController = toastController;
        this.alertController = alertController;
        this.router = router;
        this.inicia = inicia;
        this.http = http;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.route = route;
        this.Str = Str;
        this.fb = fb;
        this.isLoggedIn = false;
        this.urlRoot = _config__WEBPACK_IMPORTED_MODULE_3__.AppConfig.urlRoot;
        this.loginForm = this.fb.group({
            usuario: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6)]]
        });
    }
    login3() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({ 'Content-Type': 'application/octet-stream' });
        const USUARIO = this.loginForm.value.usuario;
        const PASSWORD = this.loginForm.value.password;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const options = { USUARIO, PASSWORD };
        //options 	: any		= { "idNEGOCIOS": '1' };
        this.okok = (this.http.post(this.urlRoot + '/index.php/Api/iniciarSesion/', JSON.stringify(options), headers))
            //probar crear otra consulta q devuelva valores location y stopover en api php.
            .subscribe((res) => {
            this.okok = res;
            //
            this.Str.set('datos_user', res)
                .then((data) => {
                //console.log('data',data)
                // this.loginExitoso();
                //this.getNotificaciones(data['0'].idCONDUCTORES);
                this.navCtrl.navigateRoot('/tab1');
                this.isLoggedIn = true;
            }, error => console.error('Error storing item', error));
            return this.isLoggedIn;
        }, (error) => {
            this.presentAlert();
            console.log('error', error);
        });
    }
    registrarme() {
        this.router.navigate(['/registro']);
    }
    loginExitoso() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const result = yield this.Str.get('datos_user');
            const toast = yield this.toastController.create({
                message: 'Hola ' + result[0].NOMBRE + ' ' + result[0].APELLIDO + '!',
                duration: 2000,
                position: 'top',
                //showCloseButton: true,
                //closeButtonText:"Cerrar",
            });
            toast.present();
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Usuario y/o contraseña incorrectos',
                message: 'Intente nuevamente',
                buttons: ['Aceptar']
            });
            yield alert.present();
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.Str.create();
            this.inicia.verificar();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _iniciarusuario_service__WEBPACK_IMPORTED_MODULE_4__.IniciarusuarioService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n/* *{font-family: 'arial';}*/\n.avatar {\n  border-radius: 50%;\n  width: 150px;\n  height: 150px;\n  margin-top: 10px;\n}\n/* DOES NOT WORK - not specific enough */\n.alert-wrapper {\n  background: #e5e5e5;\n}\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n.my-custom-class .alert-wrapper {\n  background: #e5e5e5;\n}\n.ion-card-content-class {\n  max-width: 300px;\n  text-align: justify;\n}\n.isCSS {\n  text-align: center;\n  max-width: 240px;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n}\n.centrar {\n  margin-left: 70px;\n  margin-right: 70px;\n  max-width: 350px;\n  text-align: justify;\n}\n.loginCenter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  /* Para que los elementos se envuelvan en filas si no caben en una sola línea */\n  margin-left: 0;\n}\n.estrellita {\n  color: gold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFByb3llY3RvcyUyMENsaWVudGVzXFxzdXJjbGVhblxcc3VyY2xlYW5cXHNyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwibG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7QURFRjtBQ0NBLDRCQUFBO0FBRUE7RUFBUSxrQkFBQTtFQUFvQixZQUFBO0VBQWMsYUFBQTtFQUFlLGdCQUFBO0FES3pEO0FDSEEsd0NBQUE7QUFDQTtFQUNBLG1CQUFBO0FETUE7QUNIQSx1RUFBQTtBQUNBO0VBQ0EsbUJBQUE7QURNQTtBQ0pBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBRE9BO0FDSEE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkVBQUE7QURNRjtBQ0hBO0VBQ0UsaUJBQUE7RUFBaUIsa0JBQUE7RUFBbUIsZ0JBQUE7RUFDcEMsbUJBQUE7QURRRjtBQ0pBO0VBQ0UsYUFBQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQWlCLCtFQUFBO0VBQ2pCLGNBQUE7QURRSjtBQ05BO0VBQ0EsV0FBQTtBRFNBIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbjpyb290IHtcbiAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn1cblxuLyogKntmb250LWZhbWlseTogJ2FyaWFsJzt9Ki9cbi5hdmF0YXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLyogRE9FUyBOT1QgV09SSyAtIG5vdCBzcGVjaWZpYyBlbm91Z2ggKi9cbi5hbGVydC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbn1cblxuLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cbi5teS1jdXN0b20tY2xhc3MgLmFsZXJ0LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xufVxuXG4uaW9uLWNhcmQtY29udGVudC1jbGFzcyB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5pc0NTUyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAyNDBweDtcbiAgZm9udC1mYW1pbHk6IFwiR2lsbCBTYW5zXCIsIFwiR2lsbCBTYW5zIE1UXCIsIENhbGlicmksIFwiVHJlYnVjaGV0IE1TXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jZW50cmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gIG1hcmdpbi1yaWdodDogNzBweDtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmxvZ2luQ2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLyogUGFyYSBxdWUgbG9zIGVsZW1lbnRvcyBzZSBlbnZ1ZWx2YW4gZW4gZmlsYXMgc2kgbm8gY2FiZW4gZW4gdW5hIHNvbGEgbMOtbmVhICovXG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uZXN0cmVsbGl0YSB7XG4gIGNvbG9yOiBnb2xkO1xufSIsIjpyb290IHtcclxuICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xyXG4gIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XHJcbn1cclxuXHJcbi8qICp7Zm9udC1mYW1pbHk6ICdhcmlhbCc7fSovXHJcblxyXG4uYXZhdGFye2JvcmRlci1yYWRpdXM6IDUwJTsgd2lkdGg6IDE1MHB4OyBoZWlnaHQ6IDE1MHB4OyBtYXJnaW4tdG9wOjEwcHg7fVxyXG5cclxuLyogRE9FUyBOT1QgV09SSyAtIG5vdCBzcGVjaWZpYyBlbm91Z2ggKi9cclxuLmFsZXJ0LXdyYXBwZXIge1xyXG5iYWNrZ3JvdW5kOiAjZTVlNWU1O1xyXG59XHJcblxyXG4vKiBXb3JrcyAtIHBhc3MgXCJteS1jdXN0b20tY2xhc3NcIiBpbiBjc3NDbGFzcyB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSAqL1xyXG4ubXktY3VzdG9tLWNsYXNzIC5hbGVydC13cmFwcGVyIHtcclxuYmFja2dyb3VuZDogI2U1ZTVlNTtcclxufVxyXG4uaW9uLWNhcmQtY29udGVudC1jbGFzc3tcclxubWF4LXdpZHRoOiAzMDBweDtcclxudGV4dC1hbGlnbjoganVzdGlmeTtcclxuXHJcbn1cclxuXHJcbi5pc0NTU3tcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBtYXgtd2lkdGg6IDI0MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY2VudHJhcntcclxuICBtYXJnaW4tbGVmdDo3MHB4O21hcmdpbi1yaWdodDogNzBweDttYXgtd2lkdGg6IDM1MHB4O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcblxyXG4ubG9naW5DZW50ZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDsgLyogUGFyYSBxdWUgbG9zIGVsZW1lbnRvcyBzZSBlbnZ1ZWx2YW4gZW4gZmlsYXMgc2kgbm8gY2FiZW4gZW4gdW5hIHNvbGEgbMOtbmVhICovXHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG4uZXN0cmVsbGl0YXtcclxuY29sb3I6Z29sZDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-content ><ion-grid class=\"loginCenter\">\r\n  <ion-row>\r\n    <ion-col ></ion-col>\r\n    <ion-col style=\"min-width:350px;\">\r\n  \r\n  <ion-card class=\"ionCardLogin\">\r\n      <ion-card-header>\r\n        <ion-card-title class=\"isCSS\">\r\n          <img src='/assets/logo_top.png' style=\"padding-left:70px;text-align:right;width:100%;height:100%;\"/>\r\n        </ion-card-title>\r\n      </ion-card-header>\r\n  \r\n        <form  [formGroup]=\"loginForm\" (ngSubmit)=\"login3()\">\r\n      <ion-card-content>\r\n  \r\n        <ion-card-header>\r\n        <ion-card-title class=\"etiqueta\"><strong>USUARIO</strong></ion-card-title>\r\n        <ion-card-title class=\"etiqueta\">\r\n          <ion-input formControlName=\"usuario\"\r\n            placeholder=\"Ingresar usuario\"\r\n            [ngClass]=\"{error:loginForm.get('usuario').hasError('required') && loginForm.get('usuario').dirty,warning:loginForm.get('usuario').hasError('minlength')&&\r\n            loginForm.get('usuario').dirty}\"></ion-input>\r\n            <div *ngIf=\"loginForm.get('usuario').errors && loginForm.get('usuario').dirty\">\r\n              <p *ngIf=\"loginForm.get('usuario').hasError('required')\">El campo es obligatorio</p>\r\n              <p *ngIf=\"loginForm.get('usuario').hasError('email')\">Debe ser un email valido</p>\r\n            </div>\r\n        </ion-card-title>\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n        <ion-card-title class=\"etiqueta\" ><strong>CONTRASEÑA</strong></ion-card-title>\r\n        <ion-card-title class=\"etiqueta\">\r\n          <ion-input formControlName=\"password\" type=\"password\" placeholder=\"Ingresar Contraseña\"></ion-input>\r\n            <div *ngIf=\"loginForm.get('password').errors && loginForm.get('password').dirty\">\r\n              <p *ngIf=\"loginForm.get('password').hasError('required')\">El campo es obligatorio</p>\r\n              <p *ngIf=\"loginForm.get('password').hasError('minlength')\">La contraseña debe tener al menos 6 caracteres</p>\r\n            </div>\r\n        </ion-card-title>\r\n  \r\n        <ion-card-title style=\"text-align: center;\"><ion-button type=\"submit\" [disabled]=\"loginForm.invalid\" fill=\"outline\" >Iniciar sesión</ion-button></ion-card-title>\r\n        <ion-card-sub-title class=\"isCSS\" routerLink=\"/registro\">\r\n        <p>&nbsp;</p>\r\n        <p>  Si no tenes cuenta, podés <span style=\"text-decoration:underline;font-weight:solid;cursor: pointer;\">registrarte</span></p>\r\n        </ion-card-sub-title>\r\n        <ion-card-sub-title class=\"isCSS\" routerLink=\"/olvido\">\r\n          <p>&nbsp;</p>\r\n          <p>  <span style=\"text-decoration:underline;font-weight:solid;cursor: pointer;\"> ¿Olvidaste tu contraseña? </span></p>\r\n          </ion-card-sub-title>\r\n  \r\n  \r\n  \r\n  </ion-card-header>\r\n        </ion-card-content>\r\n    </form>\r\n      </ion-card>\r\n  </ion-col>\r\n  <ion-col></ion-col>\r\n  </ion-row></ion-grid>\r\n  </ion-content>\r\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map