"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 5564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 530);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);








const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage,
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modals_comprobante_comprobante_page_ts"), __webpack_require__.e("default-src_app_modals_masinfo_masinfo_page_ts"), __webpack_require__.e("default-src_app_modals_checkout_checkout_page_ts"), __webpack_require__.e("src_app_tab1_tab1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab1/tab1.module */ 2168)).then(m => m.Tab1PageModule)
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab2_tab2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tab2/tab2.module */ 4608)).then(m => m.Tab2PageModule)
                    }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modals_comprobante_comprobante_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tab3_tab3_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab3/tab3.module */ 3746)).then(m => m.Tab3PageModule)
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tab1/tab1',
        pathMatch: 'full'
    }
];
let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 5230);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 4710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _iniciarusuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../iniciarusuario.service */ 7574);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 190);







let TabsPage = class TabsPage {
    constructor(navCtrl, actionSheetCtrl, storage, inicia) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storage = storage;
        this.inicia = inicia;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
        });
    }
    presentActionSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Opciones',
                cssClass: 'tabs.page.css',
                buttons: [
                    {
                        text: 'Perfil',
                        role: 'destructive',
                        icon: 'person-sharp',
                        handler: () => { this.perfil(); },
                        data: {
                            action: 'delete',
                        },
                    },
                    {
                        text: 'Salir',
                        role: 'destructive',
                        icon: 'log-out-sharp',
                        handler: () => { this.cerrar(); },
                        data: {
                            action: 'delete',
                        },
                    },
                ],
            });
            yield actionSheet.present();
        });
    }
    cerrar() {
        console.log('cerrar');
        //this.storage.remove('token');
        this.storage.remove('datos_user');
        this.inicia.verificar();
    }
    perfil() {
        this.navCtrl.navigateRoot('perfil');
    }
};
TabsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ActionSheetController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _iniciarusuario_service__WEBPACK_IMPORTED_MODULE_2__.IniciarusuarioService }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tabs',
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 4710:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* Estilo general para todos los tamaños de pantalla */\n.menu_inicio {\n  font-family: \"Helvetica\";\n  color: #e95816;\n}\n.ionTabBar {\n  padding-right: 10px;\n}\n/* DOES NOT WORK - not specific enough */\n.action-sheet-group {\n  background: #e5e5e5;\n}\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n.my-custom-class .action-sheet-group {\n  background: #e5e5e5;\n}\n/* Ajuste de padding solo para pantallas más grandes (mayores a 768 píxeles) */\n@media screen and (min-width: 769px) {\n  .menu_inicio {\n    padding-right: 20px;\n    /* Si también quieres ajustar el padding a la derecha */\n  }\n\n  .ionTabBar {\n    padding-right: 100px;\n  }\n\n  /* DOES NOT WORK - not specific enough */\n  .action-sheet-group {\n    background: #e5e5e5;\n  }\n\n  /* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n  .my-custom-class .action-sheet-group {\n    background: #e5e5e5;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQixzREFBQTtBQUNBO0VBQ0ksd0JBQUE7RUFDQSxjQUFBO0FBRUo7QUFBRTtFQUNJLG1CQUFBO0FBR047QUFBQyx3Q0FBQTtBQUNEO0VBQ0UsbUJBQUE7QUFHRjtBQUFBLHVFQUFBO0FBQ0E7RUFDRSxtQkFBQTtBQUdGO0FBQUUsOEVBQUE7QUFDQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSx1REFBQTtFQUdKOztFQURFO0lBQ0Usb0JBQUE7RUFJSjs7RUFERSx3Q0FBQTtFQUNKO0lBQ0UsbUJBQUE7RUFJQTs7RUFERix1RUFBQTtFQUNBO0lBQ0UsbUJBQUE7RUFJQTtBQUNGIiwiZmlsZSI6InRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRXN0aWxvIGdlbmVyYWwgcGFyYSB0b2RvcyBsb3MgdGFtYcOxb3MgZGUgcGFudGFsbGEgKi9cclxuLm1lbnVfaW5pY2lvIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhJztcclxuICAgIGNvbG9yOiAjZTk1ODE2O1xyXG4gIH1cclxuICAuaW9uVGFiQmFye1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbiAgfVxyXG5cclxuIC8qIERPRVMgTk9UIFdPUksgLSBub3Qgc3BlY2lmaWMgZW5vdWdoICovXHJcbi5hY3Rpb24tc2hlZXQtZ3JvdXAge1xyXG4gIGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbn1cclxuXHJcbi8qIFdvcmtzIC0gcGFzcyBcIm15LWN1c3RvbS1jbGFzc1wiIGluIGNzc0NsYXNzIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5ICovXHJcbi5teS1jdXN0b20tY2xhc3MgLmFjdGlvbi1zaGVldC1ncm91cCB7XHJcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcclxufVxyXG4gIFxyXG4gIC8qIEFqdXN0ZSBkZSBwYWRkaW5nIHNvbG8gcGFyYSBwYW50YWxsYXMgbcOhcyBncmFuZGVzIChtYXlvcmVzIGEgNzY4IHDDrXhlbGVzKSAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XHJcbiAgICAubWVudV9pbmljaW8ge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XHJcbiAgICAgIC8qIFNpIHRhbWJpw6luIHF1aWVyZXMgYWp1c3RhciBlbCBwYWRkaW5nIGEgbGEgZGVyZWNoYSAqL1xyXG4gICAgfVxyXG4gICAgLmlvblRhYkJhcntcclxuICAgICAgcGFkZGluZy1yaWdodDoxMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAvKiBET0VTIE5PVCBXT1JLIC0gbm90IHNwZWNpZmljIGVub3VnaCAqL1xyXG4uYWN0aW9uLXNoZWV0LWdyb3VwIHtcclxuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xyXG59XHJcblxyXG4vKiBXb3JrcyAtIHBhc3MgXCJteS1jdXN0b20tY2xhc3NcIiBpbiBjc3NDbGFzcyB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSAqL1xyXG4ubXktY3VzdG9tLWNsYXNzIC5hY3Rpb24tc2hlZXQtZ3JvdXAge1xyXG4gIGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbn1cclxuICB9XHJcblxyXG4gICJdfQ== */";

/***/ }),

/***/ 5230:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "    <ion-tabs>\r\n      <ion-tab-bar slot=\"bottom\" translucent=\"true\" class=\"ionTabBar\">\r\n    \r\n        <ion-tab-button tab=\"tab3\" >\r\n          <ion-icon name=\"document-text-sharp\" style=\"font-family: 'Helvetica';color:#e95816;\"></ion-icon>\r\n          <label style=\"font-family: 'Helvetica';color:#e95816;\">Ordenes</label>\r\n        </ion-tab-button>\r\n        \r\n         \r\n\r\n        <ion-tab-button   tab=\"tab1\">\r\n          <ion-icon name=\"home-sharp\" style=\"font-family: 'Helvetica';color:#e95816;\"></ion-icon>\r\n          <label style=\"font-family: 'Helvetica';color:#e95816;\">Inicio</label>\r\n        </ion-tab-button>\r\n    \r\n        <ion-tab-button   (click)=\"presentActionSheet()\">\r\n          <ion-icon name=\"settings-sharp\" style=\"font-family: 'Helvetica';color:#e95816;\"></ion-icon>\r\n          <label style=\"font-family: 'Helvetica';color:#e95816;\">Ajustes</label>\r\n        </ion-tab-button>\r\n      </ion-tab-bar>  \r\n    </ion-tabs>\r\n ";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map