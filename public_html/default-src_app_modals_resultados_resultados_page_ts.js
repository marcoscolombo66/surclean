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

module.exports = "@charset \"UTF-8\";\n/* Estilos para centrar títulos */\n.centered-title {\n  text-align: center;\n  margin-bottom: 0px;\n  /* Agrega espacio entre el título y los productos */\n}\n/* Estilos para centrar contenido de las tarjetas */\n.product-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 300xpx;\n  height: 250px;\n  margin-bottom: 0px;\n}\n.centered-header {\n  text-align: center;\n}\n/* Estilos opcionales para las imágenes */\n.product-card img {\n  max-width: 100%;\n  /* Para que las imágenes no se salgan de la tarjeta */\n  height: auto;\n  /* Para mantener la proporción de aspecto */\n  margin-bottom: 0px;\n  /* Espacio entre la imagen y el título */\n}\n/* En tu archivo de estilos */\n.custom-back-button {\n  --color: #5BA4C0;\n  /* Cambia el color aquí */\n}\n/* En tu archivo de estilos */\nion-grid {\n  margin-bottom: 50px;\n  /* Ajusta el valor según necesites */\n}\n/* En tu archivo de estilos */\n.product-card {\n  overflow: hidden;\n  /* Para ocultar el desbordamiento de la imagen */\n}\n.product-card img {\n  width: 100px;\n  height: 110px;\n  /* Ajusta este valor según el tamaño que desees */\n  object-fit: cover;\n  transition: transform 0.3s ease;\n  /* Transición solo para transform */\n}\n.product-card:hover img {\n  transform: scale(1);\n  /* No escalar la imagen */\n  opacity: 0.8;\n  /* Opacidad inicial */\n  transition: opacity 0.3s ease;\n}\n.product-card:hover {\n  box-shadow: 0 4px 8px rgba(91, 164, 192, 0.5);\n  /* Sombra en el contenedor */\n  opacity: 1;\n  /* Opacidad completa al pasar el ratón */\n}\n.product-card .info {\n  display: none;\n  /* Ocultar por defecto */\n}\n.product-card:hover .info {\n  display: block;\n  /* Mostrar al pasar el ratón */\n}\n@media (max-width: 768px) {\n  .product-card {\n    width: 300px;\n    height: 200px;\n    display: flex;\n    align-items: center;\n    margin-bottom: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxQcm95ZWN0b3MlMjBDbGllbnRlc1xcc3VyY2xlYW5cXHN1cmNsZWFuXFxzcmNcXGFwcFxcbW9kYWxzXFxyZXN1bHRhZG9zXFxyZXN1bHRhZG9zLnBhZ2Uuc2NzcyIsInJlc3VsdGFkb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixpQ0FBQTtBQUNBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUFvQixtREFBQTtBREd4QjtBQ0FFLG1EQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QURHSjtBQ0RFO0VBQ0ksa0JBQUE7QURJTjtBQ0FFLHlDQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQWlCLHFEQUFBO0VBQ2pCLFlBQUE7RUFBa0IsMkNBQUE7RUFDbEIsa0JBQUE7RUFBb0Isd0NBQUE7QURNeEI7QUNIQSw2QkFBQTtBQUNBO0VBQ0ksZ0JBQUE7RUFBa0IseUJBQUE7QURPdEI7QUNKRSw2QkFBQTtBQUNGO0VBQ0ksbUJBQUE7RUFBcUIsb0NBQUE7QURRekI7QUNFQSw2QkFBQTtBQUNBO0VBQ0ksZ0JBQUE7RUFBa0IsZ0RBQUE7QURFdEI7QUNDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQWUsaURBQUE7RUFDZixpQkFBQTtFQUNBLCtCQUFBO0VBQWlDLG1DQUFBO0FESXJDO0FDREU7RUFDRSxtQkFBQTtFQUFxQix5QkFBQTtFQUNyQixZQUFBO0VBQWMscUJBQUE7RUFDaEIsNkJBQUE7QURNRjtBQ0hFO0VBQ0UsNkNBQUE7RUFBK0MsNEJBQUE7RUFDL0MsVUFBQTtFQUFZLHdDQUFBO0FEUWhCO0FDTEU7RUFDRSxhQUFBO0VBQWUsd0JBQUE7QURTbkI7QUNORTtFQUNFLGNBQUE7RUFBZ0IsOEJBQUE7QURVcEI7QUNQRTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFRFVKO0FBQ0YiLCJmaWxlIjoicmVzdWx0YWRvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiBFc3RpbG9zIHBhcmEgY2VudHJhciB0w610dWxvcyAqL1xuLmNlbnRlcmVkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIC8qIEFncmVnYSBlc3BhY2lvIGVudHJlIGVsIHTDrXR1bG8geSBsb3MgcHJvZHVjdG9zICovXG59XG5cbi8qIEVzdGlsb3MgcGFyYSBjZW50cmFyIGNvbnRlbmlkbyBkZSBsYXMgdGFyamV0YXMgKi9cbi5wcm9kdWN0LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMzAweHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5jZW50ZXJlZC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIEVzdGlsb3Mgb3BjaW9uYWxlcyBwYXJhIGxhcyBpbcOhZ2VuZXMgKi9cbi5wcm9kdWN0LWNhcmQgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICAvKiBQYXJhIHF1ZSBsYXMgaW3DoWdlbmVzIG5vIHNlIHNhbGdhbiBkZSBsYSB0YXJqZXRhICovXG4gIGhlaWdodDogYXV0bztcbiAgLyogUGFyYSBtYW50ZW5lciBsYSBwcm9wb3JjacOzbiBkZSBhc3BlY3RvICovXG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgLyogRXNwYWNpbyBlbnRyZSBsYSBpbWFnZW4geSBlbCB0w610dWxvICovXG59XG5cbi8qIEVuIHR1IGFyY2hpdm8gZGUgZXN0aWxvcyAqL1xuLmN1c3RvbS1iYWNrLWJ1dHRvbiB7XG4gIC0tY29sb3I6ICM1QkE0QzA7XG4gIC8qIENhbWJpYSBlbCBjb2xvciBhcXXDrSAqL1xufVxuXG4vKiBFbiB0dSBhcmNoaXZvIGRlIGVzdGlsb3MgKi9cbmlvbi1ncmlkIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgLyogQWp1c3RhIGVsIHZhbG9yIHNlZ8O6biBuZWNlc2l0ZXMgKi9cbn1cblxuLyogRW4gdHUgYXJjaGl2byBkZSBlc3RpbG9zICovXG4ucHJvZHVjdC1jYXJkIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLyogUGFyYSBvY3VsdGFyIGVsIGRlc2JvcmRhbWllbnRvIGRlIGxhIGltYWdlbiAqL1xufVxuXG4ucHJvZHVjdC1jYXJkIGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgLyogQWp1c3RhIGVzdGUgdmFsb3Igc2Vnw7puIGVsIHRhbWHDsW8gcXVlIGRlc2VlcyAqL1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgLyogVHJhbnNpY2nDs24gc29sbyBwYXJhIHRyYW5zZm9ybSAqL1xufVxuXG4ucHJvZHVjdC1jYXJkOmhvdmVyIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC8qIE5vIGVzY2FsYXIgbGEgaW1hZ2VuICovXG4gIG9wYWNpdHk6IDAuODtcbiAgLyogT3BhY2lkYWQgaW5pY2lhbCAqL1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cblxuLnByb2R1Y3QtY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDkxLCAxNjQsIDE5MiwgMC41KTtcbiAgLyogU29tYnJhIGVuIGVsIGNvbnRlbmVkb3IgKi9cbiAgb3BhY2l0eTogMTtcbiAgLyogT3BhY2lkYWQgY29tcGxldGEgYWwgcGFzYXIgZWwgcmF0w7NuICovXG59XG5cbi5wcm9kdWN0LWNhcmQgLmluZm8ge1xuICBkaXNwbGF5OiBub25lO1xuICAvKiBPY3VsdGFyIHBvciBkZWZlY3RvICovXG59XG5cbi5wcm9kdWN0LWNhcmQ6aG92ZXIgLmluZm8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgLyogTW9zdHJhciBhbCBwYXNhciBlbCByYXTDs24gKi9cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9kdWN0LWNhcmQge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbn0iLCIvKiBFc3RpbG9zIHBhcmEgY2VudHJhciB0w610dWxvcyAqL1xyXG4uY2VudGVyZWQtdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4OyAvKiBBZ3JlZ2EgZXNwYWNpbyBlbnRyZSBlbCB0w610dWxvIHkgbG9zIHByb2R1Y3RvcyAqL1xyXG4gIH1cclxuICBcclxuICAvKiBFc3RpbG9zIHBhcmEgY2VudHJhciBjb250ZW5pZG8gZGUgbGFzIHRhcmpldGFzICovXHJcbiAgLnByb2R1Y3QtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gICAgd2lkdGg6IDMwMHhweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gIC5jZW50ZXJlZC1oZWFkZXJ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiBcclxuXHJcbiAgLyogRXN0aWxvcyBvcGNpb25hbGVzIHBhcmEgbGFzIGltw6FnZW5lcyAqL1xyXG4gIC5wcm9kdWN0LWNhcmQgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTsgLyogUGFyYSBxdWUgbGFzIGltw6FnZW5lcyBubyBzZSBzYWxnYW4gZGUgbGEgdGFyamV0YSAqL1xyXG4gICAgaGVpZ2h0OiBhdXRvOyAgICAgLyogUGFyYSBtYW50ZW5lciBsYSBwcm9wb3JjacOzbiBkZSBhc3BlY3RvICovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7IC8qIEVzcGFjaW8gZW50cmUgbGEgaW1hZ2VuIHkgZWwgdMOtdHVsbyAqL1xyXG4gIH1cclxuICBcclxuLyogRW4gdHUgYXJjaGl2byBkZSBlc3RpbG9zICovXHJcbi5jdXN0b20tYmFjay1idXR0b24ge1xyXG4gICAgLS1jb2xvcjogIzVCQTRDMDsgLyogQ2FtYmlhIGVsIGNvbG9yIGFxdcOtICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qIEVuIHR1IGFyY2hpdm8gZGUgZXN0aWxvcyAqL1xyXG5pb24tZ3JpZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4OyAvKiBBanVzdGEgZWwgdmFsb3Igc2Vnw7puIG5lY2VzaXRlcyAqL1xyXG4gIH1cclxuICBcclxuLy8gLyogRW4gdHUgYXJjaGl2byBkZSBlc3RpbG9zICovXHJcbi8vIC5wcm9kdWN0LWNhcmQgaW1nIHtcclxuLy8gICAgIHdpZHRoOiAxNTBweDsgLyogQWp1c3RhIGVsIHZhbG9yIHNlZ8O6biBuZWNlc2l0ZXMgKi9cclxuLy8gICAgIGhlaWdodDogMjAwcHg7IC8qIEFqdXN0YSBlbCB2YWxvciBzZWfDum4gbmVjZXNpdGVzICovXHJcbi8vICAgICBvYmplY3QtZml0OiBjb3ZlcjsgLyogT3BjaW9uYWw6IFBhcmEgcXVlIGxhIGltYWdlbiBzZSBhanVzdGUgYWwgY29udGVuZWRvciBzaW4gZGVmb3JtYXJzZSAqL1xyXG4vLyAgIH1cclxuICBcclxuLyogRW4gdHUgYXJjaGl2byBkZSBlc3RpbG9zICovXHJcbi5wcm9kdWN0LWNhcmQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogUGFyYSBvY3VsdGFyIGVsIGRlc2JvcmRhbWllbnRvIGRlIGxhIGltYWdlbiAqL1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC1jYXJkIGltZyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDExMHB4OyAvKiBBanVzdGEgZXN0ZSB2YWxvciBzZWfDum4gZWwgdGFtYcOxbyBxdWUgZGVzZWVzICovXHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7IC8qIFRyYW5zaWNpw7NuIHNvbG8gcGFyYSB0cmFuc2Zvcm0gKi9cclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtY2FyZDpob3ZlciBpbWcge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgLyogTm8gZXNjYWxhciBsYSBpbWFnZW4gKi9cclxuICAgIG9wYWNpdHk6IDAuODsgLyogT3BhY2lkYWQgaW5pY2lhbCAqL1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC1jYXJkOmhvdmVyIHsgXHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSg5MSwgMTY0LCAxOTIsIDAuNSk7IC8qIFNvbWJyYSBlbiBlbCBjb250ZW5lZG9yICovXHJcbiAgICBvcGFjaXR5OiAxOyAvKiBPcGFjaWRhZCBjb21wbGV0YSBhbCBwYXNhciBlbCByYXTDs24gKi9cclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtY2FyZCAuaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBub25lOyAvKiBPY3VsdGFyIHBvciBkZWZlY3RvICovXHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LWNhcmQ6aG92ZXIgLmluZm8ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7IC8qIE1vc3RyYXIgYWwgcGFzYXIgZWwgcmF0w7NuICovXHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnByb2R1Y3QtY2FyZCB7XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG5cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICJdfQ== */";

/***/ }),

/***/ 920:
/*!*******************************************************************!*\
  !*** ./src/app/modals/resultados/resultados.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n<ion-header>\r\n  <ion-toolbar>   \r\n    <ion-buttons slot=\"start\">     \r\n      <ion-button class=\"custom-back-button\"   (click)=\"cancel()\">\r\n        <ion-icon name=\"arrow-back-sharp\" style=\"font-size: 22px;color:#5BA4C0;\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"centered-title\" style=\"margin-top: 15px;\">\r\n    <ion-label style=\"font-size: 22px;font-family: 'Montserrat', sans-serif;\">{{nombreCategoria}}</ion-label>\r\n  </div>\r\n\r\n  <ion-grid >\r\n    <ion-row *ngFor=\"let consulta of productos\" class=\"centered-title\">      \r\n      <ion-col></ion-col>\r\n      <ion-col    \r\n         \r\n        (click)=\"modalMasInfo(consulta.idProducto, consulta.nombreProducto, consulta.descripcionProducto, consulta.fotoProducto, consulta.precioProducto)\">\r\n        <ion-card class=\"product-card\">\r\n          <img *ngIf=\"consulta.fotoProducto; else sinFoto\" \r\n              [src]=\"urlRoot + '/images/' + consulta.fotoProducto\" \r\n              alt=\"{{ consulta.nombreProducto }}\" />\r\n          <ng-template #sinFoto>\r\n            <img src=\"{{urlRoot}}/images/sinfoto.png\" alt=\"Sin foto\" />\r\n          </ng-template>\r\n\r\n          <ion-card-header class=\"centered-header\">\r\n            <ion-card-title>{{consulta.nombreProducto}}</ion-card-title>\r\n            <ion-card-subtitle style=\"color:#2a8b58;\">En Stock</ion-card-subtitle>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col></ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-infinite-scroll (ionInfinite)=\"onIonInfinite($event)\">\r\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_modals_resultados_resultados_page_ts.js.map