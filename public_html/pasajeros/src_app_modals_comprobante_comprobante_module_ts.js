"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modals_comprobante_comprobante_module_ts"],{

/***/ 7613:
/*!******************************************************************!*\
  !*** ./src/app/modals/comprobante/comprobante-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComprobantePageRoutingModule": () => (/* binding */ ComprobantePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _comprobante_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comprobante.page */ 6893);




const routes = [
    {
        path: '',
        component: _comprobante_page__WEBPACK_IMPORTED_MODULE_0__.ComprobantePage
    }
];
let ComprobantePageRoutingModule = class ComprobantePageRoutingModule {
};
ComprobantePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ComprobantePageRoutingModule);



/***/ }),

/***/ 9805:
/*!**********************************************************!*\
  !*** ./src/app/modals/comprobante/comprobante.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComprobantePageModule": () => (/* binding */ ComprobantePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _comprobante_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comprobante-routing.module */ 7613);
/* harmony import */ var _comprobante_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comprobante.page */ 6893);







let ComprobantePageModule = class ComprobantePageModule {
};
ComprobantePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _comprobante_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComprobantePageRoutingModule
        ],
        declarations: [_comprobante_page__WEBPACK_IMPORTED_MODULE_1__.ComprobantePage]
    })
], ComprobantePageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modals_comprobante_comprobante_module_ts.js.map