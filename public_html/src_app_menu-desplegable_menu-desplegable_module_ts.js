"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_menu-desplegable_menu-desplegable_module_ts"],{

/***/ 3275:
/*!*********************************************************************!*\
  !*** ./src/app/menu-desplegable/menu-desplegable-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuDesplegablePageRoutingModule": () => (/* binding */ MenuDesplegablePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _menu_desplegable_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-desplegable.page */ 2021);




const routes = [
    {
        path: '',
        component: _menu_desplegable_page__WEBPACK_IMPORTED_MODULE_0__.MenuDesplegablePage
    }
];
let MenuDesplegablePageRoutingModule = class MenuDesplegablePageRoutingModule {
};
MenuDesplegablePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MenuDesplegablePageRoutingModule);



/***/ }),

/***/ 3387:
/*!*************************************************************!*\
  !*** ./src/app/menu-desplegable/menu-desplegable.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuDesplegablePageModule": () => (/* binding */ MenuDesplegablePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _menu_desplegable_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-desplegable-routing.module */ 3275);
/* harmony import */ var _menu_desplegable_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-desplegable.page */ 2021);







let MenuDesplegablePageModule = class MenuDesplegablePageModule {
};
MenuDesplegablePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _menu_desplegable_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenuDesplegablePageRoutingModule
        ],
        declarations: [_menu_desplegable_page__WEBPACK_IMPORTED_MODULE_1__.MenuDesplegablePage]
    })
], MenuDesplegablePageModule);



/***/ }),

/***/ 2021:
/*!***********************************************************!*\
  !*** ./src/app/menu-desplegable/menu-desplegable.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuDesplegablePage": () => (/* binding */ MenuDesplegablePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _menu_desplegable_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-desplegable.page.html?ngResource */ 5244);
/* harmony import */ var _menu_desplegable_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-desplegable.page.scss?ngResource */ 690);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let MenuDesplegablePage = class MenuDesplegablePage {
    constructor() {
        this.productosMenuOpen = false;
        this.submenuWidth = 0;
    }
    ngOnInit() { }
    toggleProductosMenu() {
        this.productosMenuOpen = !this.productosMenuOpen;
        // Calcular el ancho solo si el elemento existe y está visible
        if (this.productosMenuOpen && this.otrosProductosBtn && this.otrosProductosBtn.nativeElement) {
            this.submenuWidth = this.otrosProductosBtn.nativeElement.offsetWidth;
        }
    }
    navigateTo(page) {
        console.log('Navigating to', page);
        // Aquí implementarías la lógica de navegación a la página correspondiente
    }
};
MenuDesplegablePage.ctorParameters = () => [];
MenuDesplegablePage.propDecorators = {
    otrosProductosBtn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['otrosProductosBtn',] }]
};
MenuDesplegablePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-menu-desplegable',
        template: _menu_desplegable_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_menu_desplegable_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MenuDesplegablePage);



/***/ }),

/***/ 690:
/*!************************************************************************!*\
  !*** ./src/app/menu-desplegable/menu-desplegable.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #f4f4f4;\n}\n\nion-grid {\n  padding: 16px;\n}\n\n.menu-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.menu-item {\n  text-align: center;\n  padding: 10px 20px;\n  background-color: white;\n  color: black;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.menu-item:hover {\n  background-color: #0056b3;\n}\n\nion-list {\n  display: block;\n  /* Cambiado a block para estirarlo verticalmente */\n  background-color: #740909;\n  border-radius: 4px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  padding: 0;\n  /* Ajustar padding si es necesario */\n}\n\nion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --inner-padding-top: 10px;\n  --inner-padding-bottom: 10px;\n  cursor: pointer;\n  color: black;\n  /* Cambiar color del texto a blanco */\n}\n\nion-item:hover {\n  background-color: #f1f1f1;\n  color: black;\n  /* Cambiar color del texto al hacer hover */\n}\n\n.submenu {\n  position: absolute;\n  z-index: 10;\n  background-color: white(116, 9, 9);\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  overflow: hidden;\n  width: 250px;\n  left: 80%;\n  top: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtZGVzcGxlZ2FibGUucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUHJveWVjdG9zJTIwQ2xpZW50ZXNcXHN1cmNsZWFuXFxzdXJjbGVhblxcc3JjXFxhcHBcXG1lbnUtZGVzcGxlZ2FibGVcXG1lbnUtZGVzcGxlZ2FibGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUJBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtBQ0RGOztBREdFO0VBQ0UseUJBQUE7QUNESjs7QURLQTtFQUNFLGNBQUE7RUFBZ0Isa0RBQUE7RUFDaEIseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsVUFBQTtFQUFZLG9DQUFBO0FDQWQ7O0FER0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQWMscUNBQUE7QUNDaEI7O0FEQ0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFBYywyQ0FBQTtBQ0VsQjs7QURhQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FDVkYiLCJmaWxlIjoibWVudS1kZXNwbGVnYWJsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBob21lLnBhZ2Uuc2Nzc1xyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogI2Y0ZjRmNDsgLy8gQ2FtYmlhIGVsIGZvbmRvIGRlbCBjb250ZW5pZG8gc2kgZXMgbmVjZXNhcmlvXHJcbn1cclxuXHJcbmlvbi1ncmlkIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4ubWVudS1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm1lbnUtaXRlbSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiBDYW1iaWFkbyBhIGJsb2NrIHBhcmEgZXN0aXJhcmxvIHZlcnRpY2FsbWVudGUgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE2LCA5LCA5KTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgcGFkZGluZzogMDsgLyogQWp1c3RhciBwYWRkaW5nIHNpIGVzIG5lY2VzYXJpbyAqL1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgLS1pbm5lci1wYWRkaW5nLXRvcDogMTBweDtcclxuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogYmxhY2s7IC8qIENhbWJpYXIgY29sb3IgZGVsIHRleHRvIGEgYmxhbmNvICovXHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIGNvbG9yOiBibGFjazsgLyogQ2FtYmlhciBjb2xvciBkZWwgdGV4dG8gYWwgaGFjZXIgaG92ZXIgKi9cclxuICB9XHJcbn1cclxuXHJcbi8vIEVzdGlsb3MgZXNwZWPDrWZpY29zIHBhcmEgZWwgc3VibWVudVxyXG4vLyAuc3VibWVudSB7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIHotaW5kZXg6IDEwO1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlKDExNiwgOSwgOSk7XHJcbi8vICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuLy8gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgIHdpZHRoOiAyMDBweDsgLyogQWp1c3RhciBlbCBhbmNobyBzZWfDum4gc2VhIG5lY2VzYXJpbyAqL1xyXG4vLyB9XHJcblxyXG4uc3VibWVudSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlKDExNiwgOSwgOSk7IC8vIENvcnJlZ2lkbyBwYXJhIHVzYXIgbGEgbm90YWNpw7NuIGRlIGNvbG9yIFJHQlxyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogMjUwcHg7IC8vIEFqdXN0YXIgZWwgYW5jaG8gc2Vnw7puIHNlYSBuZWNlc2FyaW9cclxuICBsZWZ0OiA4MCU7IC8vIEVzdG8gcG9zaWNpb25hcsOhIGVsIHN1Ym1lbsO6IGEgbGEgZGVyZWNoYSBkZWwgZWxlbWVudG8gcGFkcmVcclxuICB0b3A6IDEwOyAvLyBBc2Vnw7pyYXRlIGRlIHF1ZSBlbCBzdWJtZW7DuiBlc3TDqSBhbGluZWFkbyB2ZXJ0aWNhbG1lbnRlXHJcbn1cclxuXHJcblxyXG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2Y0ZjRmNDtcbn1cblxuaW9uLWdyaWQge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4ubWVudS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tZW51LWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xufVxuLm1lbnUtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG59XG5cbmlvbi1saXN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC8qIENhbWJpYWRvIGEgYmxvY2sgcGFyYSBlc3RpcmFybG8gdmVydGljYWxtZW50ZSAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQwOTA5O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwYWRkaW5nOiAwO1xuICAvKiBBanVzdGFyIHBhZGRpbmcgc2kgZXMgbmVjZXNhcmlvICovXG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiAxMHB4O1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgLyogQ2FtYmlhciBjb2xvciBkZWwgdGV4dG8gYSBibGFuY28gKi9cbn1cbmlvbi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgY29sb3I6IGJsYWNrO1xuICAvKiBDYW1iaWFyIGNvbG9yIGRlbCB0ZXh0byBhbCBoYWNlciBob3ZlciAqL1xufVxuXG4uc3VibWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlKDExNiwgOSwgOSk7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMjUwcHg7XG4gIGxlZnQ6IDgwJTtcbiAgdG9wOiAxMDtcbn0iXX0= */";

/***/ }),

/***/ 5244:
/*!************************************************************************!*\
  !*** ./src/app/menu-desplegable/menu-desplegable.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"menu-row\">\n      <ion-col class=\"menu-item\" (click)=\"navigateTo('inicio')\">\n        Detergentes\n      </ion-col>\n      <ion-col class=\"menu-item\" (click)=\"navigateTo('servicios')\">\n        Desinfectantes\n      </ion-col>\n      <ion-col class=\"menu-item\" (click)=\"navigateTo('servicios')\">\n        Ceras y Lustradores\n      </ion-col>\n      <ion-col class=\"menu-item\" (click)=\"navigateTo('servicios')\">\n        Auxiliares Textiles\n      </ion-col>\n      <ion-col #otrosProductosBtn class=\"menu-item\" (click)=\"toggleProductosMenu()\">\n        Otros Productos\n        <ion-icon name=\"caret-down\" *ngIf=\"productosMenuOpen\"></ion-icon>\n        <ion-icon name=\"caret-forward\" *ngIf=\"!productosMenuOpen\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"productosMenuOpen && otrosProductosBtn\" [ngStyle]=\"{ width: submenuWidth + 'px', top: otrosProductosBtn.nativeElement.offsetTop + otrosProductosBtn.nativeElement.offsetHeight + 'px', left: otrosProductosBtn.nativeElement.offsetLeft + 'px' }\" class=\"submenu\">\n      <ion-col>\n        <ion-list>\n          <ion-item (click)=\"navigateTo('detergentes')\">\n            Líquidos Baja Espuma\n          </ion-item>\n          <ion-item (click)=\"navigateTo('lavandina')\">\n            Perfumes Para La Ropa\n          </ion-item>\n          <ion-item (click)=\"navigateTo('otros')\">\n            Perfuminas\n          </ion-item>\n          <ion-item (click)=\"navigateTo('otros')\">\n            Limpiadores y Desengrasantes\n          </ion-item>\n          <ion-item (click)=\"navigateTo('otros')\">\n            Jabones Líquidos\n          </ion-item>\n          <ion-item (click)=\"navigateTo('otros')\">\n            Línea Automotor\n          </ion-item>\n          <ion-item (click)=\"navigateTo('otros')\">\n            Desodorantes tradicionales\n          </ion-item>\n          <ion-item (click)=\"navigateTo('otros')\">\n            Desodorantes Pinos\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_menu-desplegable_menu-desplegable_module_ts.js.map