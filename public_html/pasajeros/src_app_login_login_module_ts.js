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

module.exports = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n/* *{font-family: 'arial';}*/\n\n.avatar {\n  border-radius: 50%;\n  width: 150px;\n  height: 150px;\n  margin-top: 10px;\n}\n\n/* DOES NOT WORK - not specific enough */\n\n.alert-wrapper {\n  background: #e5e5e5;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class .alert-wrapper {\n  background: #e5e5e5;\n}\n\n.ion-card-content-class {\n  max-width: 300px;\n  text-align: justify;\n}\n\n.isCSS {\n  text-align: center;\n  max-width: 240px;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n}\n\n.centrar {\n  margin-left: 70px;\n  margin-right: 70px;\n  max-width: 350px;\n  text-align: justify;\n}\n\n.estrellita {\n  color: gold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQSw0QkFBQTs7QUFFQTtFQUFRLGtCQUFBO0VBQW9CLFlBQUE7RUFBYyxhQUFBO0VBQWUsZ0JBQUE7QUFJekQ7O0FBRkEsd0NBQUE7O0FBQ0E7RUFDQSxtQkFBQTtBQUtBOztBQUZBLHVFQUFBOztBQUNBO0VBQ0EsbUJBQUE7QUFLQTs7QUFIQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFNQTs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2RUFBQTtBQUtGOztBQUZBO0VBQ0UsaUJBQUE7RUFBaUIsa0JBQUE7RUFBbUIsZ0JBQUE7RUFDcEMsbUJBQUE7QUFPRjs7QUFGQTtFQUNBLFdBQUE7QUFLQSIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcbiAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcclxuICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xyXG59XHJcblxyXG4vKiAqe2ZvbnQtZmFtaWx5OiAnYXJpYWwnO30qL1xyXG5cclxuLmF2YXRhcntib3JkZXItcmFkaXVzOiA1MCU7IHdpZHRoOiAxNTBweDsgaGVpZ2h0OiAxNTBweDsgbWFyZ2luLXRvcDoxMHB4O31cclxuXHJcbi8qIERPRVMgTk9UIFdPUksgLSBub3Qgc3BlY2lmaWMgZW5vdWdoICovXHJcbi5hbGVydC13cmFwcGVyIHtcclxuYmFja2dyb3VuZDogI2U1ZTVlNTtcclxufVxyXG5cclxuLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cclxuLm15LWN1c3RvbS1jbGFzcyAuYWxlcnQtd3JhcHBlciB7XHJcbmJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbn1cclxuLmlvbi1jYXJkLWNvbnRlbnQtY2xhc3N7XHJcbm1heC13aWR0aDogMzAwcHg7XHJcbnRleHQtYWxpZ246IGp1c3RpZnk7XHJcblxyXG59XHJcblxyXG4uaXNDU1N7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAyNDBweDtcclxuICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNlbnRyYXJ7XHJcbiAgbWFyZ2luLWxlZnQ6NzBweDttYXJnaW4tcmlnaHQ6IDcwcHg7bWF4LXdpZHRoOiAzNTBweDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG5cclxuXHJcbi5lc3RyZWxsaXRhe1xyXG5jb2xvcjpnb2xkO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-content ><ion-grid>\r\n  <ion-row>\r\n    <ion-col ></ion-col>\r\n    <ion-col style=\"min-width:350px;\">\r\n  \r\n  <ion-card class=\"ionCardLogin\">\r\n      <ion-card-header >\r\n        <ion-card-title class=\"isCSS\">\r\n          <img src='/assets/logo_top.png' style=\"padding-left:70px;text-align:right;width:100%;height:100%;\"/>\r\n        </ion-card-title>\r\n      </ion-card-header>\r\n  \r\n        <form  [formGroup]=\"loginForm\" (ngSubmit)=\"login3()\">\r\n      <ion-card-content>\r\n  \r\n        <ion-card-header>\r\n        <ion-card-title class=\"etiqueta\"><strong>USUARIO</strong></ion-card-title>\r\n        <ion-card-title class=\"etiqueta\">\r\n          <ion-input formControlName=\"usuario\"\r\n            placeholder=\"Ingresar usuario\"\r\n            [ngClass]=\"{error:loginForm.get('usuario').hasError('required') && loginForm.get('usuario').dirty,warning:loginForm.get('usuario').hasError('minlength')&&\r\n            loginForm.get('usuario').dirty}\"></ion-input>\r\n            <div *ngIf=\"loginForm.get('usuario').errors && loginForm.get('usuario').dirty\">\r\n              <p *ngIf=\"loginForm.get('usuario').hasError('required')\">El campo es obligatorio</p>\r\n              <p *ngIf=\"loginForm.get('usuario').hasError('email')\">Debe ser un email valido</p>\r\n            </div>\r\n        </ion-card-title>\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n        <ion-card-title class=\"etiqueta\" ><strong>CONTRASEÑA</strong></ion-card-title>\r\n        <ion-card-title class=\"etiqueta\">\r\n          <ion-input formControlName=\"password\" type=\"password\" placeholder=\"Ingresar Contraseña\"></ion-input>\r\n            <div *ngIf=\"loginForm.get('password').errors && loginForm.get('password').dirty\">\r\n              <p *ngIf=\"loginForm.get('password').hasError('required')\">El campo es obligatorio</p>\r\n              <p *ngIf=\"loginForm.get('password').hasError('minlength')\">La contraseña debe tener al menos 6 caracteres</p>\r\n            </div>\r\n        </ion-card-title>\r\n  \r\n        <ion-card-title style=\"text-align: center;\"><ion-button type=\"submit\" [disabled]=\"loginForm.invalid\" fill=\"outline\" >Iniciar sesión</ion-button></ion-card-title>\r\n        <ion-card-sub-title class=\"isCSS\" routerLink=\"/registro\">\r\n        <p>&nbsp;</p>\r\n        <p>  Si no tenes cuenta, podés <span style=\"text-decoration:underline;font-weight:solid;cursor: pointer;\">registrarte</span></p>\r\n        </ion-card-sub-title>\r\n        <ion-card-sub-title class=\"isCSS\" routerLink=\"/olvido\">\r\n          <p>&nbsp;</p>\r\n          <p>  <span style=\"text-decoration:underline;font-weight:solid;cursor: pointer;\"> ¿Olvidaste tu contraseña? </span></p>\r\n          </ion-card-sub-title>\r\n  \r\n  \r\n  \r\n  </ion-card-header>\r\n        </ion-card-content>\r\n    </form>\r\n      </ion-card>\r\n  </ion-col>\r\n  <ion-col></ion-col>\r\n  </ion-row></ion-grid>\r\n  </ion-content>\r\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map