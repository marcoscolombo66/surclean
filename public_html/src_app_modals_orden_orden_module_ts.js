"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modals_orden_orden_module_ts"],{

/***/ 3364:
/*!******************************************************!*\
  !*** ./src/app/modals/orden/orden-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdenPageRoutingModule": () => (/* binding */ OrdenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _orden_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orden.page */ 5362);




const routes = [
    {
        path: '',
        component: _orden_page__WEBPACK_IMPORTED_MODULE_0__.OrdenPage
    }
];
let OrdenPageRoutingModule = class OrdenPageRoutingModule {
};
OrdenPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrdenPageRoutingModule);



/***/ }),

/***/ 216:
/*!**********************************************!*\
  !*** ./src/app/modals/orden/orden.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdenPageModule": () => (/* binding */ OrdenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _orden_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orden-routing.module */ 3364);
/* harmony import */ var _orden_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orden.page */ 5362);







let OrdenPageModule = class OrdenPageModule {
};
OrdenPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _orden_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrdenPageRoutingModule
        ],
        declarations: [_orden_page__WEBPACK_IMPORTED_MODULE_1__.OrdenPage]
    })
], OrdenPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modals_orden_orden_module_ts.js.map