"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modals_masinfo_masinfo_module_ts"],{

/***/ 6582:
/*!**********************************************************!*\
  !*** ./src/app/modals/masinfo/masinfo-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasinfoPageRoutingModule": () => (/* binding */ MasinfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _masinfo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./masinfo.page */ 3339);




const routes = [
    {
        path: '',
        component: _masinfo_page__WEBPACK_IMPORTED_MODULE_0__.MasinfoPage
    }
];
let MasinfoPageRoutingModule = class MasinfoPageRoutingModule {
};
MasinfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MasinfoPageRoutingModule);



/***/ }),

/***/ 3762:
/*!**************************************************!*\
  !*** ./src/app/modals/masinfo/masinfo.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasinfoPageModule": () => (/* binding */ MasinfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _masinfo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./masinfo-routing.module */ 6582);
/* harmony import */ var _masinfo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./masinfo.page */ 3339);







let MasinfoPageModule = class MasinfoPageModule {
};
MasinfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _masinfo_routing_module__WEBPACK_IMPORTED_MODULE_0__.MasinfoPageRoutingModule
        ],
        declarations: [_masinfo_page__WEBPACK_IMPORTED_MODULE_1__.MasinfoPage]
    })
], MasinfoPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modals_masinfo_masinfo_module_ts.js.map