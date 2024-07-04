"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_modals_resultados_resultados_page_ts"],{

/***/ 5353:
/*!******************************************************!*\
  !*** ./src/app/modals/resultados/resultados.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultadosPage": () => (/* binding */ ResultadosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _resultados_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resultados.page.html?ngResource */ 920);
/* harmony import */ var _resultados_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resultados.page.scss?ngResource */ 638);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config */ 9698);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _masinfo_masinfo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../masinfo/masinfo.page */ 3339);









let ResultadosPage = class ResultadosPage {
    constructor(navParams, http, modalCtrl) {
        this.navParams = navParams;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.urlRoot = src_app_config__WEBPACK_IMPORTED_MODULE_2__.AppConfig.urlRoot;
        this.pageNumber = 1;
        this.getProductos();
        this.nombreCategoria = this.navParams.get('nombreCategoria');
    }
    modalMasInfo(idProducto, nombreProducto, descripcionProducto, fotoProducto, precioProducto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            //const user= await this.inicia.getUser();
            //const url_proyecto = user[0].url_proyecto
            const modal = yield this.modalCtrl.create({
                component: _masinfo_masinfo_page__WEBPACK_IMPORTED_MODULE_3__.MasinfoPage,
                //breakpoints: [0, 0.99],
                //initialBreakpoint: 0.99,
                //handle: true,
                componentProps: {
                    mySubject: idProducto,
                    mySubject2: nombreProducto,
                    mySubject3: descripcionProducto,
                    mySubject4: fotoProducto,
                    mySubject5: precioProducto,
                    url_proyecto: this.urlRoot,
                },
                animated: true,
                canDismiss: true,
                keyboardClose: true,
            });
            yield modal.present();
        });
    }
    onIonInfinite(ev) {
        setTimeout(() => {
            // Incrementa el número de página
            this.pageNumber++;
            // Llama al método getProductos con el número de página actual
            this.getProductos(this.pageNumber);
            // Deshabilita el evento ionInfinite si ya no hay más productos
            if (this.productos.length % 6 !== 0) {
                ev.target.disabled = true;
            }
            // Completa el evento de scroll infinito
            ev.target.complete();
        }, 500);
    }
    getProductos(pageNumber = 1) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ 'Content-Type': 'application/octet-stream' });
            const options = { IDCATEGORIA: this.navParams.get('idCategoria'), pageNumber };
            // Realiza la solicitud HTTP con las opciones
            this.http.post(this.urlRoot + '/index.php/Api/ProductosCategoria/', JSON.stringify(options), headers)
                .subscribe((res) => {
                // Si está buscando, asigna los resultados de la búsqueda
                this.productos = res;
                // ...
            }, (error) => {
                console.log(error);
            });
        });
    }
    cancel() {
        return this.modalCtrl.dismiss(null, 'cancel');
    }
    ngOnInit() {
    }
};
ResultadosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
ResultadosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-resultados',
        template: _resultados_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_resultados_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResultadosPage);



/***/ }),

/***/ 638:
/*!*******************************************************************!*\
  !*** ./src/app/modals/resultados/resultados.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* Estilos para centrar títulos */\n.centered-title {\n  text-align: center;\n  margin-bottom: 16px;\n  /* Agrega espacio entre el título y los productos */\n}\n/* Estilos para centrar contenido de las tarjetas */\n.product-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 300px;\n  height: 250px;\n  margin-bottom: 0px;\n}\n.centered-header {\n  text-align: center;\n}\n/* Estilos opcionales para las imágenes */\n.product-card img {\n  max-width: 80%;\n  /* Para que las imágenes no se salgan de la tarjeta */\n  height: auto;\n  /* Para mantener la proporción de aspecto */\n  margin-bottom: 0px;\n  /* Espacio entre la imagen y el título */\n}\n/* En tu archivo de estilos */\n.custom-back-button {\n  --color: #5BA4C0;\n  /* Cambia el color aquí */\n}\n/* En tu archivo de estilos */\nion-grid {\n  margin-bottom: 50px;\n  /* Ajusta el valor según necesites */\n}\n/* En tu archivo de estilos */\n.product-card {\n  overflow: hidden;\n  /* Para ocultar el desbordamiento de la imagen */\n}\n.product-card img {\n  width: 100px;\n  height: 100px;\n  /* Ajusta este valor según el tamaño que desees */\n  object-fit: cover;\n  transition: transform 0.3s ease;\n  /* Transición solo para transform */\n}\n.product-card:hover img {\n  transform: scale(1);\n  /* No escalar la imagen */\n  opacity: 0.8;\n  /* Opacidad inicial */\n  transition: opacity 0.3s ease;\n}\n.product-card:hover {\n  box-shadow: 0 4px 8px rgba(91, 164, 192, 0.5);\n  /* Sombra en el contenedor */\n  opacity: 1;\n  /* Opacidad completa al pasar el ratón */\n}\n.product-card .info {\n  display: none;\n  /* Ocultar por defecto */\n}\n.product-card:hover .info {\n  display: block;\n  /* Mostrar al pasar el ratón */\n}\n@media (max-width: 768px) {\n  .product-card {\n    width: 90%;\n    /* Ancho adaptable */\n    max-width: 400px;\n    /* Límite para pantallas muy pequeñas */\n    margin: 15px auto;\n    /* Centrado horizontal y espacio vertical */\n    padding: 15px;\n    /* Espacio interno */\n    box-sizing: border-box;\n    /* Incluye el padding en el ancho */\n    display: flex;\n    flex-direction: column;\n    /* Elementos en columna */\n    align-items: center;\n  }\n}\n@media (min-width: 768px) and (max-width: 1024px) {\n  /* Estilos específicos para tablets */\n  .product-card {\n    /* Ajustes para el diseño de la tarjeta en tablets */\n    width: 100%;\n    /* Ejemplo: Dos tarjetas por fila */\n    margin: 10px;\n    /* Ajusta el margen según necesites */\n    height: 100%;\n  }\n\n  ion-card-title {\n    font-size: 1.2em;\n    /* Ejemplo: Aumenta el tamaño de fuente del título */\n  }\n\n  ion-card-subtitle {\n    font-size: 0.9em;\n    /* Ejemplo: Ajusta el tamaño de fuente de la descripción */\n  }\n}\n@media (min-width: 1280px) {\n  /* Estilos específicos para pantallas de 1280px a 1366px de ancho */\n  .product-card {\n    width: 100%;\n    /* Ejemplo: Tres tarjetas por fila */\n    margin: 10px;\n    /* Ajusta el margen según necesites */\n    height: 100%;\n  }\n\n  ion-card-title {\n    font-size: 1.2em;\n    /* Ejemplo: Aumenta el tamaño de fuente del título */\n  }\n\n  ion-card-subtitle {\n    font-size: 0.9em;\n    /* Ejemplo: Ajusta el tamaño de fuente de la descripción */\n  }\n}\n@media (min-width: 1025px) {\n  /* Estilos específicos para pantallas de 1280px a 1366px de ancho */\n  .product-card {\n    width: 100%;\n    /* Ejemplo: Tres tarjetas por fila */\n    margin: 10px;\n    /* Ajusta el margen según necesites */\n    height: 100%;\n  }\n\n  ion-card-title {\n    font-size: 1.2em;\n    /* Ejemplo: Aumenta el tamaño de fuente del título */\n  }\n\n  ion-card-subtitle {\n    font-size: 0.9em;\n    /* Ejemplo: Ajusta el tamaño de fuente de la descripción */\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxQcm95ZWN0b3MlMjBDbGllbnRlc1xcc3VyY2xlYW5cXHN1cmNsZWFuXFxzcmNcXGFwcFxcbW9kYWxzXFxyZXN1bHRhZG9zXFxyZXN1bHRhZG9zLnBhZ2Uuc2NzcyIsInJlc3VsdGFkb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixpQ0FBQTtBQUNBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUFxQixtREFBQTtBREd6QjtBQ0FFLG1EQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QURHSjtBQ0FFO0VBQ0ksa0JBQUE7QURHTjtBQ0NFLHlDQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQWdCLHFEQUFBO0VBQ2hCLFlBQUE7RUFBa0IsMkNBQUE7RUFDbEIsa0JBQUE7RUFBb0Isd0NBQUE7QURLeEI7QUNGQSw2QkFBQTtBQUNBO0VBQ0ksZ0JBQUE7RUFBa0IseUJBQUE7QURNdEI7QUNIRSw2QkFBQTtBQUNGO0VBQ0ksbUJBQUE7RUFBcUIsb0NBQUE7QURPekI7QUNHQSw2QkFBQTtBQUNBO0VBQ0ksZ0JBQUE7RUFBa0IsZ0RBQUE7QURDdEI7QUNFRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQWUsaURBQUE7RUFDZixpQkFBQTtFQUNBLCtCQUFBO0VBQWlDLG1DQUFBO0FER3JDO0FDQUU7RUFDRSxtQkFBQTtFQUFxQix5QkFBQTtFQUNyQixZQUFBO0VBQWMscUJBQUE7RUFDaEIsNkJBQUE7QURLRjtBQ0ZFO0VBQ0UsNkNBQUE7RUFBK0MsNEJBQUE7RUFDL0MsVUFBQTtFQUFZLHdDQUFBO0FET2hCO0FDSkU7RUFDRSxhQUFBO0VBQWUsd0JBQUE7QURRbkI7QUNMRTtFQUNFLGNBQUE7RUFBZ0IsOEJBQUE7QURTcEI7QUNORTtFQUNFO0lBTUUsVUFBQTtJQUFZLG9CQUFBO0lBQ1osZ0JBQUE7SUFBa0IsdUNBQUE7SUFDbEIsaUJBQUE7SUFBbUIsMkNBQUE7SUFDbkIsYUFBQTtJQUFlLG9CQUFBO0lBQ2Ysc0JBQUE7SUFBd0IsbUNBQUE7SUFDeEIsYUFBQTtJQUNBLHNCQUFBO0lBQXdCLHlCQUFBO0lBQ3hCLG1CQUFBO0VEVUo7QUFDRjtBQ0xFO0VBQ0UscUNBQUE7RUFFQTtJQUNFLG9EQUFBO0lBQ0EsV0FBQTtJQUFhLG1DQUFBO0lBQ2IsWUFBQTtJQUFjLHFDQUFBO0lBQ2QsWUFBQTtFRFFKOztFQ0xFO0lBQ0UsZ0JBQUE7SUFBa0Isb0RBQUE7RURTdEI7O0VDTkU7SUFDRSxnQkFBQTtJQUFrQiwwREFBQTtFRFV0QjtBQUNGO0FDSkU7RUFDRSxtRUFBQTtFQUNBO0lBQ0UsV0FBQTtJQUFhLG9DQUFBO0lBQ2IsWUFBQTtJQUFjLHFDQUFBO0lBQ2QsWUFBQTtFRFFKOztFQ05FO0lBQ0UsZ0JBQUE7SUFBa0Isb0RBQUE7RURVdEI7O0VDUEU7SUFDRSxnQkFBQTtJQUFrQiwwREFBQTtFRFd0QjtBQUNGO0FDUEc7RUFDQyxtRUFBQTtFQUNBO0lBQ0UsV0FBQTtJQUFhLG9DQUFBO0lBQ2IsWUFBQTtJQUFjLHFDQUFBO0lBQ2QsWUFBQTtFRFdKOztFQ1RFO0lBQ0UsZ0JBQUE7SUFBa0Isb0RBQUE7RURhdEI7O0VDVkU7SUFDRSxnQkFBQTtJQUFrQiwwREFBQTtFRGN0QjtBQUNGIiwiZmlsZSI6InJlc3VsdGFkb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogRXN0aWxvcyBwYXJhIGNlbnRyYXIgdMOtdHVsb3MgKi9cbi5jZW50ZXJlZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgLyogQWdyZWdhIGVzcGFjaW8gZW50cmUgZWwgdMOtdHVsbyB5IGxvcyBwcm9kdWN0b3MgKi9cbn1cblxuLyogRXN0aWxvcyBwYXJhIGNlbnRyYXIgY29udGVuaWRvIGRlIGxhcyB0YXJqZXRhcyAqL1xuLnByb2R1Y3QtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uY2VudGVyZWQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBFc3RpbG9zIG9wY2lvbmFsZXMgcGFyYSBsYXMgaW3DoWdlbmVzICovXG4ucHJvZHVjdC1jYXJkIGltZyB7XG4gIG1heC13aWR0aDogODAlO1xuICAvKiBQYXJhIHF1ZSBsYXMgaW3DoWdlbmVzIG5vIHNlIHNhbGdhbiBkZSBsYSB0YXJqZXRhICovXG4gIGhlaWdodDogYXV0bztcbiAgLyogUGFyYSBtYW50ZW5lciBsYSBwcm9wb3JjacOzbiBkZSBhc3BlY3RvICovXG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgLyogRXNwYWNpbyBlbnRyZSBsYSBpbWFnZW4geSBlbCB0w610dWxvICovXG59XG5cbi8qIEVuIHR1IGFyY2hpdm8gZGUgZXN0aWxvcyAqL1xuLmN1c3RvbS1iYWNrLWJ1dHRvbiB7XG4gIC0tY29sb3I6ICM1QkE0QzA7XG4gIC8qIENhbWJpYSBlbCBjb2xvciBhcXXDrSAqL1xufVxuXG4vKiBFbiB0dSBhcmNoaXZvIGRlIGVzdGlsb3MgKi9cbmlvbi1ncmlkIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgLyogQWp1c3RhIGVsIHZhbG9yIHNlZ8O6biBuZWNlc2l0ZXMgKi9cbn1cblxuLyogRW4gdHUgYXJjaGl2byBkZSBlc3RpbG9zICovXG4ucHJvZHVjdC1jYXJkIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLyogUGFyYSBvY3VsdGFyIGVsIGRlc2JvcmRhbWllbnRvIGRlIGxhIGltYWdlbiAqL1xufVxuXG4ucHJvZHVjdC1jYXJkIGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgLyogQWp1c3RhIGVzdGUgdmFsb3Igc2Vnw7puIGVsIHRhbWHDsW8gcXVlIGRlc2VlcyAqL1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgLyogVHJhbnNpY2nDs24gc29sbyBwYXJhIHRyYW5zZm9ybSAqL1xufVxuXG4ucHJvZHVjdC1jYXJkOmhvdmVyIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC8qIE5vIGVzY2FsYXIgbGEgaW1hZ2VuICovXG4gIG9wYWNpdHk6IDAuODtcbiAgLyogT3BhY2lkYWQgaW5pY2lhbCAqL1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cblxuLnByb2R1Y3QtY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDkxLCAxNjQsIDE5MiwgMC41KTtcbiAgLyogU29tYnJhIGVuIGVsIGNvbnRlbmVkb3IgKi9cbiAgb3BhY2l0eTogMTtcbiAgLyogT3BhY2lkYWQgY29tcGxldGEgYWwgcGFzYXIgZWwgcmF0w7NuICovXG59XG5cbi5wcm9kdWN0LWNhcmQgLmluZm8ge1xuICBkaXNwbGF5OiBub25lO1xuICAvKiBPY3VsdGFyIHBvciBkZWZlY3RvICovXG59XG5cbi5wcm9kdWN0LWNhcmQ6aG92ZXIgLmluZm8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgLyogTW9zdHJhciBhbCBwYXNhciBlbCByYXTDs24gKi9cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9kdWN0LWNhcmQge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgLyogQW5jaG8gYWRhcHRhYmxlICovXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAvKiBMw61taXRlIHBhcmEgcGFudGFsbGFzIG11eSBwZXF1ZcOxYXMgKi9cbiAgICBtYXJnaW46IDE1cHggYXV0bztcbiAgICAvKiBDZW50cmFkbyBob3Jpem9udGFsIHkgZXNwYWNpbyB2ZXJ0aWNhbCAqL1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgLyogRXNwYWNpbyBpbnRlcm5vICovXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAvKiBJbmNsdXllIGVsIHBhZGRpbmcgZW4gZWwgYW5jaG8gKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLyogRWxlbWVudG9zIGVuIGNvbHVtbmEgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLyogRXN0aWxvcyBlc3BlY8OtZmljb3MgcGFyYSB0YWJsZXRzICovXG4gIC5wcm9kdWN0LWNhcmQge1xuICAgIC8qIEFqdXN0ZXMgcGFyYSBlbCBkaXNlw7FvIGRlIGxhIHRhcmpldGEgZW4gdGFibGV0cyAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIEVqZW1wbG86IERvcyB0YXJqZXRhcyBwb3IgZmlsYSAqL1xuICAgIG1hcmdpbjogMTBweDtcbiAgICAvKiBBanVzdGEgZWwgbWFyZ2VuIHNlZ8O6biBuZWNlc2l0ZXMgKi9cbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICBpb24tY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAvKiBFamVtcGxvOiBBdW1lbnRhIGVsIHRhbWHDsW8gZGUgZnVlbnRlIGRlbCB0w610dWxvICovXG4gIH1cblxuICBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAvKiBFamVtcGxvOiBBanVzdGEgZWwgdGFtYcOxbyBkZSBmdWVudGUgZGUgbGEgZGVzY3JpcGNpw7NuICovXG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgLyogRXN0aWxvcyBlc3BlY8OtZmljb3MgcGFyYSBwYW50YWxsYXMgZGUgMTI4MHB4IGEgMTM2NnB4IGRlIGFuY2hvICovXG4gIC5wcm9kdWN0LWNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIEVqZW1wbG86IFRyZXMgdGFyamV0YXMgcG9yIGZpbGEgKi9cbiAgICBtYXJnaW46IDEwcHg7XG4gICAgLyogQWp1c3RhIGVsIG1hcmdlbiBzZWfDum4gbmVjZXNpdGVzICovXG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgaW9uLWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgLyogRWplbXBsbzogQXVtZW50YSBlbCB0YW1hw7FvIGRlIGZ1ZW50ZSBkZWwgdMOtdHVsbyAqL1xuICB9XG5cbiAgaW9uLWNhcmQtc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgLyogRWplbXBsbzogQWp1c3RhIGVsIHRhbWHDsW8gZGUgZnVlbnRlIGRlIGxhIGRlc2NyaXBjacOzbiAqL1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gIC8qIEVzdGlsb3MgZXNwZWPDrWZpY29zIHBhcmEgcGFudGFsbGFzIGRlIDEyODBweCBhIDEzNjZweCBkZSBhbmNobyAqL1xuICAucHJvZHVjdC1jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBFamVtcGxvOiBUcmVzIHRhcmpldGFzIHBvciBmaWxhICovXG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIC8qIEFqdXN0YSBlbCBtYXJnZW4gc2Vnw7puIG5lY2VzaXRlcyAqL1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIC8qIEVqZW1wbG86IEF1bWVudGEgZWwgdGFtYcOxbyBkZSBmdWVudGUgZGVsIHTDrXR1bG8gKi9cbiAgfVxuXG4gIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIC8qIEVqZW1wbG86IEFqdXN0YSBlbCB0YW1hw7FvIGRlIGZ1ZW50ZSBkZSBsYSBkZXNjcmlwY2nDs24gKi9cbiAgfVxufSIsIi8qIEVzdGlsb3MgcGFyYSBjZW50cmFyIHTDrXR1bG9zICovXHJcbi5jZW50ZXJlZC10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4OyAvKiBBZ3JlZ2EgZXNwYWNpbyBlbnRyZSBlbCB0w610dWxvIHkgbG9zIHByb2R1Y3RvcyAqL1xyXG4gIH1cclxuICBcclxuICAvKiBFc3RpbG9zIHBhcmEgY2VudHJhciBjb250ZW5pZG8gZGUgbGFzIHRhcmpldGFzICovXHJcbiAgLnByb2R1Y3QtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuXHJcbiAgfVxyXG4gIC5jZW50ZXJlZC1oZWFkZXJ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiBcclxuXHJcbiAgLyogRXN0aWxvcyBvcGNpb25hbGVzIHBhcmEgbGFzIGltw6FnZW5lcyAqL1xyXG4gIC5wcm9kdWN0LWNhcmQgaW1nIHtcclxuICAgIG1heC13aWR0aDogODAlOyAvKiBQYXJhIHF1ZSBsYXMgaW3DoWdlbmVzIG5vIHNlIHNhbGdhbiBkZSBsYSB0YXJqZXRhICovXHJcbiAgICBoZWlnaHQ6IGF1dG87ICAgICAvKiBQYXJhIG1hbnRlbmVyIGxhIHByb3BvcmNpw7NuIGRlIGFzcGVjdG8gKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDBweDsgLyogRXNwYWNpbyBlbnRyZSBsYSBpbWFnZW4geSBlbCB0w610dWxvICovXHJcbiAgfVxyXG4gIFxyXG4vKiBFbiB0dSBhcmNoaXZvIGRlIGVzdGlsb3MgKi9cclxuLmN1c3RvbS1iYWNrLWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yOiAjNUJBNEMwOyAvKiBDYW1iaWEgZWwgY29sb3IgYXF1w60gKi9cclxuICB9XHJcbiAgXHJcbiAgLyogRW4gdHUgYXJjaGl2byBkZSBlc3RpbG9zICovXHJcbmlvbi1ncmlkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7IC8qIEFqdXN0YSBlbCB2YWxvciBzZWfDum4gbmVjZXNpdGVzICovXHJcbiAgfVxyXG4gIFxyXG4vLyAvKiBFbiB0dSBhcmNoaXZvIGRlIGVzdGlsb3MgKi9cclxuLy8gLnByb2R1Y3QtY2FyZCBpbWcge1xyXG4vLyAgICAgd2lkdGg6IDE1MHB4OyAvKiBBanVzdGEgZWwgdmFsb3Igc2Vnw7puIG5lY2VzaXRlcyAqL1xyXG4vLyAgICAgaGVpZ2h0OiAyMDBweDsgLyogQWp1c3RhIGVsIHZhbG9yIHNlZ8O6biBuZWNlc2l0ZXMgKi9cclxuLy8gICAgIG9iamVjdC1maXQ6IGNvdmVyOyAvKiBPcGNpb25hbDogUGFyYSBxdWUgbGEgaW1hZ2VuIHNlIGFqdXN0ZSBhbCBjb250ZW5lZG9yIHNpbiBkZWZvcm1hcnNlICovXHJcbi8vICAgfVxyXG4gIFxyXG4vKiBFbiB0dSBhcmNoaXZvIGRlIGVzdGlsb3MgKi9cclxuLnByb2R1Y3QtY2FyZCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBQYXJhIG9jdWx0YXIgZWwgZGVzYm9yZGFtaWVudG8gZGUgbGEgaW1hZ2VuICovXHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LWNhcmQgaW1nIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7IC8qIEFqdXN0YSBlc3RlIHZhbG9yIHNlZ8O6biBlbCB0YW1hw7FvIHF1ZSBkZXNlZXMgKi9cclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTsgLyogVHJhbnNpY2nDs24gc29sbyBwYXJhIHRyYW5zZm9ybSAqL1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC1jYXJkOmhvdmVyIGltZyB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyAvKiBObyBlc2NhbGFyIGxhIGltYWdlbiAqL1xyXG4gICAgb3BhY2l0eTogMC44OyAvKiBPcGFjaWRhZCBpbmljaWFsICovXHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LWNhcmQ6aG92ZXIgeyBcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDkxLCAxNjQsIDE5MiwgMC41KTsgLyogU29tYnJhIGVuIGVsIGNvbnRlbmVkb3IgKi9cclxuICAgIG9wYWNpdHk6IDE7IC8qIE9wYWNpZGFkIGNvbXBsZXRhIGFsIHBhc2FyIGVsIHJhdMOzbiAqL1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC1jYXJkIC5pbmZvIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIE9jdWx0YXIgcG9yIGRlZmVjdG8gKi9cclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtY2FyZDpob3ZlciAuaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBibG9jazsgLyogTW9zdHJhciBhbCBwYXNhciBlbCByYXTDs24gKi9cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAucHJvZHVjdC1jYXJkIHtcclxuICAgICAgLy8gd2lkdGg6IDUwMHB4O1xyXG4gICAgICAvLyBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB3aWR0aDogOTAlOyAvKiBBbmNobyBhZGFwdGFibGUgKi9cclxuICAgICAgbWF4LXdpZHRoOiA0MDBweDsgLyogTMOtbWl0ZSBwYXJhIHBhbnRhbGxhcyBtdXkgcGVxdWXDsWFzICovXHJcbiAgICAgIG1hcmdpbjogMTVweCBhdXRvOyAvKiBDZW50cmFkbyBob3Jpem9udGFsIHkgZXNwYWNpbyB2ZXJ0aWNhbCAqL1xyXG4gICAgICBwYWRkaW5nOiAxNXB4OyAvKiBFc3BhY2lvIGludGVybm8gKi9cclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogSW5jbHV5ZSBlbCBwYWRkaW5nIGVuIGVsIGFuY2hvICovXHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIEVsZW1lbnRvcyBlbiBjb2x1bW5hICovXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAvKiBFc3RpbG9zIGVzcGVjw61maWNvcyBwYXJhIHRhYmxldHMgKi9cclxuICBcclxuICAgIC5wcm9kdWN0LWNhcmQge1xyXG4gICAgICAvKiBBanVzdGVzIHBhcmEgZWwgZGlzZcOxbyBkZSBsYSB0YXJqZXRhIGVuIHRhYmxldHMgKi9cclxuICAgICAgd2lkdGg6IDEwMCU7IC8qIEVqZW1wbG86IERvcyB0YXJqZXRhcyBwb3IgZmlsYSAqL1xyXG4gICAgICBtYXJnaW46IDEwcHg7IC8qIEFqdXN0YSBlbCBtYXJnZW4gc2Vnw7puIG5lY2VzaXRlcyAqL1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07IC8qIEVqZW1wbG86IEF1bWVudGEgZWwgdGFtYcOxbyBkZSBmdWVudGUgZGVsIHTDrXR1bG8gKi9cclxuICAgIH1cclxuICBcclxuICAgIGlvbi1jYXJkLXN1YnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAwLjllbTsgLyogRWplbXBsbzogQWp1c3RhIGVsIHRhbWHDsW8gZGUgZnVlbnRlIGRlIGxhIGRlc2NyaXBjacOzbiAqL1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuICAvL01hbmVqbyBkZSBwYW50YWxsYXMgMTI4MCB4IDgwMFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpICB7IFxyXG4gICAgLyogRXN0aWxvcyBlc3BlY8OtZmljb3MgcGFyYSBwYW50YWxsYXMgZGUgMTI4MHB4IGEgMTM2NnB4IGRlIGFuY2hvICovXHJcbiAgICAucHJvZHVjdC1jYXJkIHtcclxuICAgICAgd2lkdGg6IDEwMCU7IC8qIEVqZW1wbG86IFRyZXMgdGFyamV0YXMgcG9yIGZpbGEgKi9cclxuICAgICAgbWFyZ2luOiAxMHB4OyAvKiBBanVzdGEgZWwgbWFyZ2VuIHNlZ8O6biBuZWNlc2l0ZXMgKi9cclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDEuMmVtOyAvKiBFamVtcGxvOiBBdW1lbnRhIGVsIHRhbWHDsW8gZGUgZnVlbnRlIGRlbCB0w610dWxvICovXHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07IC8qIEVqZW1wbG86IEFqdXN0YSBlbCB0YW1hw7FvIGRlIGZ1ZW50ZSBkZSBsYSBkZXNjcmlwY2nDs24gKi9cclxuICAgIH1cclxuICB9XHJcblxyXG4gICBcclxuICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkgIHsgXHJcbiAgICAvKiBFc3RpbG9zIGVzcGVjw61maWNvcyBwYXJhIHBhbnRhbGxhcyBkZSAxMjgwcHggYSAxMzY2cHggZGUgYW5jaG8gKi9cclxuICAgIC5wcm9kdWN0LWNhcmQge1xyXG4gICAgICB3aWR0aDogMTAwJTsgLyogRWplbXBsbzogVHJlcyB0YXJqZXRhcyBwb3IgZmlsYSAqL1xyXG4gICAgICBtYXJnaW46IDEwcHg7IC8qIEFqdXN0YSBlbCBtYXJnZW4gc2Vnw7puIG5lY2VzaXRlcyAqL1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07IC8qIEVqZW1wbG86IEF1bWVudGEgZWwgdGFtYcOxbyBkZSBmdWVudGUgZGVsIHTDrXR1bG8gKi9cclxuICAgIH1cclxuICBcclxuICAgIGlvbi1jYXJkLXN1YnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAwLjllbTsgLyogRWplbXBsbzogQWp1c3RhIGVsIHRhbWHDsW8gZGUgZnVlbnRlIGRlIGxhIGRlc2NyaXBjacOzbiAqL1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 920:
/*!*******************************************************************!*\
  !*** ./src/app/modals/resultados/resultados.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n<ion-header>\r\n  <ion-toolbar>   \r\n    <ion-buttons slot=\"start\">     \r\n      <ion-button class=\"custom-back-button\"   (click)=\"cancel()\">\r\n        <ion-icon name=\"arrow-back-sharp\" style=\"font-size: 22px;color:#5BA4C0;\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"centered-title\" style=\"margin-top: 15px;\">\r\n    <ion-label style=\"font-size: 22px;font-family: 'Montserrat', sans-serif;\">{{nombreCategoria}}</ion-label>\r\n  </div>\r\n\r\n  <ion-grid >\r\n     <ion-row>\r\n      <ion-col  *ngFor=\"let consulta of productos\"  size=\"12\" size-sm=\"3\">\r\n        <ion-card class=\"product-card\"\r\n        (click)=\"modalMasInfo(consulta.idProducto, consulta.nombreProducto, consulta.descripcionProducto, consulta.fotoProducto, consulta.precioProducto)\"\r\n        >\r\n        <ion-card-header>\r\n          <ion-card-title>\r\n            <img *ngIf=\"consulta.fotoProducto; else sinFoto\" \r\n            [src]=\"urlRoot + '/images/' + consulta.fotoProducto\" \r\n            alt=\"{{ consulta.nombreProducto }}\" />\r\n            <ng-template #sinFoto>\r\n              <img src=\"{{urlRoot}}/images/sinfoto.png\" alt=\"Sin foto\" />\r\n            </ng-template>\r\n          </ion-card-title>\r\n         \r\n        </ion-card-header>\r\n         \r\n\r\n          <ion-card-header class=\"centered-header\">\r\n            <ion-card-title>{{consulta.nombreProducto}}</ion-card-title>\r\n            <ion-card-subtitle style=\"color:#2a8b58;\">En Stock</ion-card-subtitle>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-col>\r\n     </ion-row>\r\n        \r\n      \r\n    \r\n  </ion-grid>\r\n  <ion-infinite-scroll (ionInfinite)=\"onIonInfinite($event)\">\r\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_modals_resultados_resultados_page_ts.js.map