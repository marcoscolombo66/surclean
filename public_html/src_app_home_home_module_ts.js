"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 2267);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 1670);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config */ 9698);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _modals_masinfo_masinfo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/masinfo/masinfo.page */ 3339);
/* harmony import */ var _modals_resultados_resultados_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/resultados/resultados.page */ 5353);









let HomePage = class HomePage {
    constructor(http, modalCtrl) {
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.mostrarBusqueda = false; // Declara la propiedad aquí
        this.mostrarMenu = true;
        this.resultadosBusqueda = []; // Agrega la propiedad para los resultados de búsqueda
        this.urlRoot = src_app_config__WEBPACK_IMPORTED_MODULE_2__.AppConfig.urlRoot;
        this.isSearching = false;
        this.getCategorias();
    }
    test(event) {
        console.log('Valor seleccionado:', event.detail.value);
    }
    iniciarBusqueda() {
        this.mostrarBusqueda = !this.mostrarBusqueda;
        console.log('Valor selecc');
    }
    modalMasInfo(idProducto, nombreProducto, descripcionProducto, fotoProducto, precioProducto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            //const user= await this.inicia.getUser();
            //const url_proyecto = user[0].url_proyecto
            const modal = yield this.modalCtrl.create({
                component: _modals_masinfo_masinfo_page__WEBPACK_IMPORTED_MODULE_3__.MasinfoPage,
                //breakpoints: [0, 0.99],
                //initialBreakpoint: 0.99,
                //handle: true,
                componentProps: {
                    mySubject: idProducto,
                    mySubject2: nombreProducto,
                    mySubject3: descripcionProducto,
                    mySubject4: fotoProducto,
                    mySubject5: precioProducto,
                    url_proyecto: this.urlRoot
                },
                animated: true,
                canDismiss: true,
                keyboardClose: true,
            });
            yield modal.present();
        });
    }
    buscarProductos(event) {
        this.searchText = event.target.value.trim().toLowerCase();
        // Verifica si hay texto de búsqueda
        if (this.searchText) {
            // Desactiva el Infinite Scroll y realiza la búsqueda
            this.isSearching = true;
            this.getProductos(this.searchText);
        }
        else {
            // Si no hay texto de búsqueda, reactiva el Infinite Scroll y carga los productos normales
            this.isSearching = false;
            this.pageNumber = 1; // Restaura el número de página a 1
            this.productos = this.getProductos(null, this.pageNumber);
        }
    }
    getProductos(busqueda = null, pageNumber = 1) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({ 'Content-Type': 'application/octet-stream' });
            const options = { busqueda, pageNumber };
            // Realiza la solicitud HTTP con las opciones
            this.http.post(this.urlRoot + '/index.php/Api/Productos/', JSON.stringify(options), headers)
                .subscribe((res) => {
                if (this.isSearching) {
                    // Si está buscando, asigna los resultados de la búsqueda
                    this.productos = res;
                }
                else {
                    // Si no está buscando, concatena los resultados al arreglo existente
                    this.productos = this.productos.concat(res);
                }
                // ...
            }, (error) => {
                console.log(error);
            });
        });
    }
    abrirModal(idCategoria) {
        console.log('se va a abrir pagina con los resultados de busqueda por categoria:', idCategoria);
    }
    ngOnInit() {
    }
    getCategorias() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({ 'Content-Type': 'application/octet-stream' });
            const options = {};
            // Llamar a la API con las opciones
            this.http.post(this.urlRoot + '/index.php/Api/Categorias/', JSON.stringify(options), headers)
                .subscribe((res) => {
                // Filtrar las categorías cuyo campo 'otros' sea igual a 1 y transformar los nombres a mayúsculas
                this.categoriasOtros = res
                    .filter((categoria) => categoria.otros == 1)
                    .map((categoria) => (Object.assign(Object.assign({}, categoria), { nombreCategoria: categoria.nombreCategoria.toUpperCase(), idCategoria: categoria.idCategoria })));
                this.categorias = res
                    .filter((categoria) => categoria.otros == 0)
                    .map((categoria) => (Object.assign(Object.assign({}, categoria), { nombreCategoria: categoria.nombreCategoria.toUpperCase(), idCategoria: categoria.idCategoria })));
            }, (error) => {
                console.log(error);
            });
        });
    }
    modalResultados(idCategoria, nombreCategoria) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            //const user= await this.inicia.getUser();
            //const url_proyecto = user[0].url_proyecto
            const modal = yield this.modalCtrl.create({
                component: _modals_resultados_resultados_page__WEBPACK_IMPORTED_MODULE_4__.ResultadosPage,
                //breakpoints: [0, 0.99],
                //initialBreakpoint: 0.99,
                //handle: true,
                componentProps: {
                    idCategoria: idCategoria,
                    nombreCategoria: nombreCategoria
                },
                animated: true,
                canDismiss: true,
                keyboardClose: true,
            });
            yield modal.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
HomePage.propDecorators = {
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['slider',] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\nion-header {\n  z-index: 10;\n  /* Asegura que esté por encima del contenido */\n}\n.foto {\n  width: 50%;\n}\n.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.contenedor {\n  background-color: transparent !important;\n  display: inline-block;\n  position: relative;\n  margin-right: 25px;\n}\n.contenedor ion-buttons {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  color: black;\n  font-family: \"Roboto\", sans-serif !important;\n  font-size: 14px;\n}\n@media (max-width: 768px) {\n  .container {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .contenedor {\n    top: -15px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .contenedor-logo {\n    margin: 10px 0;\n    /* Añadir margen superior e inferior de 10px */\n    display: flex;\n    justify-content: center;\n    width: 100%;\n  }\n\n  .contenedor ion-buttons {\n    justify-content: center;\n    flex-direction: column;\n    /* Cambia la dirección a columna */\n    align-items: center;\n  }\n}\n.contenedor-logo {\n  display: inline-block;\n  width: 200px;\n  margin-left: 10px;\n}\n.lupa {\n  display: inline-block;\n  margin-right: 100px;\n}\n@media (max-width: 768px) {\n  .lupa {\n    margin-right: 20px;\n  }\n}\n.otros {\n  --border-style: none;\n  --color: black;\n  font-family: \"Roboto\", sans-serif;\n}\n@media (max-width: 1024px) and (max-height: 600px) {\n  .contenedor ion-buttons {\n    gap: 5px;\n  }\n}\nion-input {\n  width: 100px;\n  color: teal;\n}\nion-accordion {\n  --border-width: 0;\n  width: auto;\n}\n@media (max-width: 768px) {\n  ion-accordion {\n    margin-left: 20px;\n    /* Ajusta este valor según sea necesario */\n  }\n}\nion-accordion::part(container) {\n  position: static;\n}\n.footer-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.social-icons a {\n  margin: 0 10px;\n  /* Espacio entre los iconos */\n  display: inline-flex;\n  /* Para centrar el icono verticalmente */\n  align-items: center;\n}\n.social-icons ion-icon {\n  font-size: 20px;\n  /* Tamaño inicial del icono */\n  color: #5BA4C0;\n  /* Color negro por defecto */\n  transition: all 0.3s ease;\n  /* Transición suave para los cambios */\n}\n.social-icons a:hover ion-icon {\n  font-size: 28px;\n  /* Agrandar al pasar el mouse */\n  color: #5BA4C0;\n  /* Color aqua al pasar el mouse */\n  text-shadow: 0 2px 4px #5BA4C0;\n  /* Sombra #5BA4C0 */\n}\n.developed-by {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  margin-right: 10px;\n}\n.developed-by img {\n  width: 120px;\n  margin-left: 10px;\n}\nspan {\n  color: #5BA4C0;\n}\n@media (max-width: 768px) {\n  .contenedor-logo {\n    margin-left: -50px;\n  }\n\n  .search-container {\n    margin-left: 28px;\n  }\n}\n.map-container {\n  width: 90%;\n  /* Ancho inicial amplio para ocupar la mayor parte de la pantalla */\n  max-width: 1000px;\n  /* Límite máximo para pantallas muy grandes */\n  height: 400px;\n  /* Altura inicial razonable */\n  margin: 20px auto;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  transition: box-shadow 0.3s ease;\n  /* Transición suave para la sombra al pasar el mouse */\n}\n.map-container iframe {\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n/* Hover effect SUTIL EN EL MAPA */\n.map-container:hover {\n  box-shadow: 0 6px 12px rgba(91, 164, 192, 0.5);\n}\n.sucursal-titulo {\n  font-family: \"Roboto\", sans-serif !important;\n  /* Fuente elegante */\n  font-size: 1.5em;\n  /* Tamaño de fuente grande */\n  font-weight: 500;\n  /* Negrita para destacar */\n  color: #3C3F44;\n  /* Color de texto oscuro */\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  /* Sombra sutil */\n  margin-bottom: 20px;\n  /* Espacio entre el título y la dirección */\n  margin-left: 0px;\n  width: 100%;\n  justify-content: center;\n}\nion-card {\n  font-family: \"Roboto\", sans-serif !important;\n  background-color: white;\n  /* Fondo blanco base */\n  overflow: hidden;\n  /* Para que la salpicadura no se desborde */\n  position: relative;\n  /* Para posicionar el pseudoelemento */\n  text-align: justify;\n  /* Centra el texto horizontalmente */\n  padding: 10px;\n  /* Margen de 10px en todos los lados */\n}\nion-card::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: radial-gradient(circle at 20% 30%, #5BA4C0 10%, transparent 11%), radial-gradient(circle at 80% 70%, #5BA4C0 10%, transparent 11%), radial-gradient(circle at 40% 90%, #5BA4C0 10%, transparent 11%);\n  opacity: 0.3;\n  /* Ajusta la opacidad para que sea más sutil */\n  z-index: -1;\n  /* Coloca el efecto detrás del contenido de la tarjeta */\n  mix-blend-mode: multiply;\n  /* Para mezclar los colores con el fondo blanco */\n  color: #3C3F44;\n}\n.card-container {\n  padding: 30px;\n  border-radius: 12px;\n  margin: 10px;\n  transition: transform 0.3s, box-shadow 0.3s;\n  font-family: \"Roboto\", sans-serif !important;\n  /* Fuente elegante */\n  display: flex;\n  /* Activa Flexbox */\n  justify-content: center;\n  /* Centra las tarjetas horizontalmente */\n  gap: 20px;\n}\n.card-container:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n}\n.ion-card2 {\n  font-family: \"Roboto\", sans-serif !important;\n  background-color: white;\n  /* Fondo blanco base */\n  overflow: hidden;\n  /* Para que la salpicadura no se desborde */\n  position: relative;\n  /* Para posicionar el pseudoelemento */\n  text-align: center;\n  /* Centra el texto horizontalmente */\n  padding: 10px;\n  /* Margen de 10px en todos los lados */\n  width: 300px;\n  /* Ajusta el ancho de las tarjetas según tus necesidades */\n}\n/* ESTILOS SLIDER */\n.my-swiper {\n  width: 90%;\n  /* Ancho del slider */\n  margin: 0 auto;\n  /* Centrar el slider */\n}\n.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.search-container {\n  display: flex;\n  align-items: center;\n}\n.search-container ion-searchbar {\n  flex: 1;\n}\n.search-container ion-button {\n  margin-left: 8px;\n}\n.search-results-container {\n  padding: 0 16px;\n}\n.search-results {\n  width: 100%;\n}\n.custom-searchbar {\n  width: 100%;\n}\n.product-image {\n  max-width: 100px;\n  max-height: 100px;\n}\n@media (min-width: 768px) {\n  .product-image {\n    max-width: 50%;\n    /* En pantallas medianas, ocupa el 50% del ancho */\n  }\n\n  .large-screen {\n    display: block !important;\n  }\n}\n@media (min-width: 1024px) {\n  .product-image {\n    max-width: 30%;\n    /* En pantallas grandes, ocupa el 30% del ancho */\n  }\n\n  .large-screen {\n    display: block !important;\n  }\n}\n.grid-wrapper {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n.search-results {\n  width: 80%;\n  /* Ajusta este valor según el ancho deseado */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.row-content {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.align-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.product-image {\n  max-width: 100px;\n  max-height: 100px;\n}\nion-col.size-auto {\n  flex: 1;\n  text-align: center;\n}\n.social-icons2 a {\n  margin: 0 10px;\n  /* Espacio entre los iconos */\n  display: inline-flex;\n  /* Para centrar el icono verticalmente */\n  align-items: center;\n}\n.social-icons2 ion-icon {\n  font-size: 40px;\n  /* Tamaño inicial del icono */\n  color: #5BA4C0;\n  /* Color negro por defecto */\n  transition: all 0.3s ease;\n  /* Transición suave para los cambios */\n}\n.social-icons2 a:hover ion-icon {\n  font-size: 28px;\n  /* Agrandar al pasar el mouse */\n  color: #5BA4C0;\n  /* Color aqua al pasar el mouse */\n  text-shadow: 0 2px 4px #5BA4C0;\n  /* Sombra #5BA4C0 */\n}\n.header-container2 {\n  display: flex;\n  /* Usamos flexbox para la distribución */\n  justify-content: space-around;\n  /* Espacio entre logo e iconos */\n  align-items: center;\n  /* Alineación vertical al centro */\n  width: 100%;\n  /* Ocupa todo el ancho de la pantalla */\n  padding: 50px;\n  /* Espacio interno opcional */\n}\n.logo {\n  width: 150px;\n  /* Ajusta el ancho del logo según necesites */\n}\n/*# sourceMappingURL=data:application/json;base64,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RUFDRSxVQUFBO0VBQVksNkNBQUE7RUFDWixhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQTFCRjtBQTZCQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUExQkY7QUE2QkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTFCRjtBQTZCQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUExQkY7QUErQkE7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7QUE1QkY7QUFrQ0E7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7QUEvQkY7QUFrQ0E7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLHNDQUFBO0FBL0JGO0FBa0NBO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQS9CRjtBQWtDQTtFQUNFLGFBQUE7RUFBeUIsd0NBQUE7RUFDekIsNkJBQUE7RUFBK0IsZ0NBQUE7RUFDL0IsbUJBQUE7RUFBd0Isa0NBQUE7RUFDeEIsV0FBQTtFQUF3Qix1Q0FBQTtFQUN4QixhQUFBO0VBQXdCLDZCQUFBO0FBMUIxQjtBQTZCQTtFQUNFLFlBQUE7RUFBd0IsNkNBQUE7QUF6QjFCIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgLyogQXNlZ3VyYSBxdWUgZXN0w6kgcG9yIGVuY2ltYSBkZWwgY29udGVuaWRvICovXHJcbn1cclxuXHJcbi5mb3RvIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVuZWRvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1yaWdodDogMjVweDtcclxufVxyXG5cclxuLmNvbnRlbmVkb3IgaW9uLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMTBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbmVkb3Ige1xyXG4gICAgdG9wOiAtMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jb250ZW5lZG9yLWxvZ28ge1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAvKiBBw7FhZGlyIG1hcmdlbiBzdXBlcmlvciBlIGluZmVyaW9yIGRlIDEwcHggKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5jb250ZW5lZG9yIGlvbi1idXR0b25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC8qIENhbWJpYSBsYSBkaXJlY2Npw7NuIGEgY29sdW1uYSAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yLWxvZ28ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgXHJcbn1cclxuXHJcbi5sdXBhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmx1cGEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm90cm9zIHtcclxuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcclxuICAtLWNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LWhlaWdodDogNjAwcHgpIHtcclxuICAuY29udGVuZWRvciBpb24tYnV0dG9ucyB7XHJcbiAgICBnYXA6IDVweDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGNvbG9yOiB0ZWFsO1xyXG59XHJcblxyXG5pb24tYWNjb3JkaW9uIHtcclxuICAtLWJvcmRlci13aWR0aDogMDtcclxuICB3aWR0aDogYXV0bztcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4OyAvKiBBanVzdGEgZXN0ZSB2YWxvciBzZWfDum4gc2VhIG5lY2VzYXJpbyAqL1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWFjY29yZGlvbjo6cGFydChjb250YWluZXIpIHtcclxuICBwb3NpdGlvbjogc3RhdGljO1xyXG59XHJcblxyXG5cclxuXHJcbi8vRk9PVEVSXHJcbi5mb290ZXItcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcbi5zb2NpYWwtaWNvbnMgYSB7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgLyogRXNwYWNpbyBlbnRyZSBsb3MgaWNvbm9zICovXHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgLyogUGFyYSBjZW50cmFyIGVsIGljb25vIHZlcnRpY2FsbWVudGUgKi9cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc29jaWFsLWljb25zIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgLyogVGFtYcOxbyBpbmljaWFsIGRlbCBpY29ubyAqL1xyXG4gIGNvbG9yOiAjNUJBNEMwO1xyXG4gIC8qIENvbG9yIG5lZ3JvIHBvciBkZWZlY3RvICovXHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAvKiBUcmFuc2ljacOzbiBzdWF2ZSBwYXJhIGxvcyBjYW1iaW9zICovXHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbnMgYTpob3ZlciBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIC8qIEFncmFuZGFyIGFsIHBhc2FyIGVsIG1vdXNlICovXHJcbiAgY29sb3I6IzVCQTRDMDtcclxuICAvKiBDb2xvciBhcXVhIGFsIHBhc2FyIGVsIG1vdXNlICovXHJcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDRweCAjNUJBNEMwO1xyXG4gIC8qIFNvbWJyYSAjNUJBNEMwICovXHJcbn1cclxuXHJcbi5kZXZlbG9wZWQtYnkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZGV2ZWxvcGVkLWJ5IGltZyB7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIFxyXG59XHJcblxyXG4vL1RFWFRPIERFU0FSUk9MTEFETyBQT1Jcclxuc3BhbiB7XHJcbiAgY29sb3I6ICM1QkE0QzA7XHJcbn1cclxuXHJcblxyXG4vL0NFTlRSQURPIERFIExPR08gRU4gUEFOVEFMTEFTIENISUNBU1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGVuZWRvci1sb2dvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcclxuICB9XHJcbiAgLnNlYXJjaC1jb250YWluZXJ7bWFyZ2luLWxlZnQ6MjhweDt9XHJcbn1cclxuXHJcblxyXG5cclxuLy9NQVBBIENPTiBNQVJDQURPUiBERSBTVUNVUlNBTFxyXG4ubWFwLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICAvKiBBbmNobyBpbmljaWFsIGFtcGxpbyBwYXJhIG9jdXBhciBsYSBtYXlvciBwYXJ0ZSBkZSBsYSBwYW50YWxsYSAqL1xyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIC8qIEzDrW1pdGUgbcOheGltbyBwYXJhIHBhbnRhbGxhcyBtdXkgZ3JhbmRlcyAqL1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgLyogQWx0dXJhIGluaWNpYWwgcmF6b25hYmxlICovXHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2U7XHJcbiAgLyogVHJhbnNpY2nDs24gc3VhdmUgcGFyYSBsYSBzb21icmEgYWwgcGFzYXIgZWwgbW91c2UgKi9cclxufVxyXG5cclxuLm1hcC1jb250YWluZXIgaWZyYW1lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4vKiBIb3ZlciBlZmZlY3QgU1VUSUwgRU4gRUwgTUFQQSAqL1xyXG4ubWFwLWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDkxLCAxNjQsIDE5MiwgMC41KTtcclxufVxyXG5cclxuXHJcbi8vU09NQlJFQURPIFNVVElMIEVOIFRJVFVMTyBTVUNVUlNBTFxyXG4uc3VjdXJzYWwtdGl0dWxvIHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAvKiBGdWVudGUgZWxlZ2FudGUgKi9cclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIC8qIFRhbWHDsW8gZGUgZnVlbnRlIGdyYW5kZSAqL1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgLyogTmVncml0YSBwYXJhIGRlc3RhY2FyICovXHJcbiAgY29sb3I6ICMzQzNGNDQ7XHJcbiAgLyogQ29sb3IgZGUgdGV4dG8gb3NjdXJvICovXHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAvKiBTb21icmEgc3V0aWwgKi9cclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIC8qIEVzcGFjaW8gZW50cmUgZWwgdMOtdHVsbyB5IGxhIGRpcmVjY2nDs24gKi9cclxuICAvL3RleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4vL1RBUkpFVEFTXHJcbmlvbi1jYXJkIHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAvKiBGb25kbyBibGFuY28gYmFzZSAqL1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLyogUGFyYSBxdWUgbGEgc2FscGljYWR1cmEgbm8gc2UgZGVzYm9yZGUgKi9cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLyogUGFyYSBwb3NpY2lvbmFyIGVsIHBzZXVkb2VsZW1lbnRvICovXHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAvKiBDZW50cmEgZWwgdGV4dG8gaG9yaXpvbnRhbG1lbnRlICovXHJcbiAgcGFkZGluZzogMTBweDtcclxuICAvKiBNYXJnZW4gZGUgMTBweCBlbiB0b2RvcyBsb3MgbGFkb3MgKi9cclxuXHJcblxyXG59XHJcblxyXG5pb24tY2FyZDo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMjAlIDMwJSwgIzVCQTRDMCAxMCUsIHRyYW5zcGFyZW50IDExJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDgwJSA3MCUsICM1QkE0QzAgMTAlLCB0cmFuc3BhcmVudCAxMSUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA0MCUgOTAlLCAjNUJBNEMwIDEwJSwgdHJhbnNwYXJlbnQgMTElKTtcclxuXHJcbiAgb3BhY2l0eTogMC4zO1xyXG4gIC8qIEFqdXN0YSBsYSBvcGFjaWRhZCBwYXJhIHF1ZSBzZWEgbcOhcyBzdXRpbCAqL1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIC8qIENvbG9jYSBlbCBlZmVjdG8gZGV0csOhcyBkZWwgY29udGVuaWRvIGRlIGxhIHRhcmpldGEgKi9cclxuICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XHJcbiAgLyogUGFyYSBtZXpjbGFyIGxvcyBjb2xvcmVzIGNvbiBlbCBmb25kbyBibGFuY28gKi9cclxuICBjb2xvcjogIzNDM0Y0NDtcclxufVxyXG5cclxuXHJcbi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgYm94LXNoYWRvdyAwLjNzO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gIC8qIEZ1ZW50ZSBlbGVnYW50ZSAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLyogQWN0aXZhIEZsZXhib3ggKi9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvKiBDZW50cmEgbGFzIHRhcmpldGFzIGhvcml6b250YWxtZW50ZSAqL1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgMjBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmlvbi1jYXJkMiB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLyogRm9uZG8gYmxhbmNvIGJhc2UgKi9cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC8qIFBhcmEgcXVlIGxhIHNhbHBpY2FkdXJhIG5vIHNlIGRlc2JvcmRlICovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qIFBhcmEgcG9zaWNpb25hciBlbCBwc2V1ZG9lbGVtZW50byAqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvKiBDZW50cmEgZWwgdGV4dG8gaG9yaXpvbnRhbG1lbnRlICovXHJcbiAgcGFkZGluZzogMTBweDtcclxuICAvKiBNYXJnZW4gZGUgMTBweCBlbiB0b2RvcyBsb3MgbGFkb3MgKi9cclxuICB3aWR0aDogMzAwcHg7XHJcbiAgLyogQWp1c3RhIGVsIGFuY2hvIGRlIGxhcyB0YXJqZXRhcyBzZWfDum4gdHVzIG5lY2VzaWRhZGVzICovXHJcblxyXG5cclxufVxyXG5cclxuLyogRVNUSUxPUyBTTElERVIgKi9cclxuLm15LXN3aXBlciB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICAvKiBBbmNobyBkZWwgc2xpZGVyICovXHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgLyogQ2VudHJhciBlbCBzbGlkZXIgKi9cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlYXJjaC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlYXJjaC1jb250YWluZXIgaW9uLXNlYXJjaGJhciB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnNlYXJjaC1jb250YWluZXIgaW9uLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHRzLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdHMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY3VzdG9tLXNlYXJjaGJhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4ucHJvZHVjdC1pbWFnZSB7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxuICBtYXgtaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLnByb2R1Y3QtaW1hZ2Uge1xyXG4gICAgbWF4LXdpZHRoOiA1MCU7IC8qIEVuIHBhbnRhbGxhcyBtZWRpYW5hcywgb2N1cGEgZWwgNTAlIGRlbCBhbmNobyAqL1xyXG4gIH1cclxuICAubGFyZ2Utc2NyZWVuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgLnByb2R1Y3QtaW1hZ2Uge1xyXG4gICAgbWF4LXdpZHRoOiAzMCU7IC8qIEVuIHBhbnRhbGxhcyBncmFuZGVzLCBvY3VwYSBlbCAzMCUgZGVsIGFuY2hvICovXHJcbiAgfVxyXG4gIC5sYXJnZS1zY3JlZW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLmdyaWQtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHRzIHtcclxuICB3aWR0aDogODAlOyAvKiBBanVzdGEgZXN0ZSB2YWxvciBzZWfDum4gZWwgYW5jaG8gZGVzZWFkbyAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucm93LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYWxpZ24tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWltYWdlIHtcclxuICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbmlvbi1jb2wuc2l6ZS1hdXRvIHtcclxuICBmbGV4OiAxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4vL0lDT05PUyBSRURFUyBOTyBGT09URVJcclxuLnNvY2lhbC1pY29uczIgYSB7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgLyogRXNwYWNpbyBlbnRyZSBsb3MgaWNvbm9zICovXHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgLyogUGFyYSBjZW50cmFyIGVsIGljb25vIHZlcnRpY2FsbWVudGUgKi9cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc29jaWFsLWljb25zMiBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIC8qIFRhbWHDsW8gaW5pY2lhbCBkZWwgaWNvbm8gKi9cclxuICBjb2xvcjogIzVCQTRDMDtcclxuICAvKiBDb2xvciBuZWdybyBwb3IgZGVmZWN0byAqL1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgLyogVHJhbnNpY2nDs24gc3VhdmUgcGFyYSBsb3MgY2FtYmlvcyAqL1xyXG59XHJcblxyXG4uc29jaWFsLWljb25zMiBhOmhvdmVyIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgLyogQWdyYW5kYXIgYWwgcGFzYXIgZWwgbW91c2UgKi9cclxuICBjb2xvcjojNUJBNEMwO1xyXG4gIC8qIENvbG9yIGFxdWEgYWwgcGFzYXIgZWwgbW91c2UgKi9cclxuICB0ZXh0LXNoYWRvdzogMCAycHggNHB4ICM1QkE0QzA7XHJcbiAgLyogU29tYnJhICM1QkE0QzAgKi9cclxufVxyXG5cclxuLmhlYWRlci1jb250YWluZXIyIHtcclxuICBkaXNwbGF5OiBmbGV4OyAgICAgICAgICAgLyogVXNhbW9zIGZsZXhib3ggcGFyYSBsYSBkaXN0cmlidWNpw7NuICovXHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IC8qIEVzcGFjaW8gZW50cmUgbG9nbyBlIGljb25vcyAqL1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIC8qIEFsaW5lYWNpw7NuIHZlcnRpY2FsIGFsIGNlbnRybyAqL1xyXG4gIHdpZHRoOiAxMDAlOyAgICAgICAgICAgIC8qIE9jdXBhIHRvZG8gZWwgYW5jaG8gZGUgbGEgcGFudGFsbGEgKi9cclxuICBwYWRkaW5nOiA1MHB4OyAgICAgICAgICAvKiBFc3BhY2lvIGludGVybm8gb3BjaW9uYWwgKi9cclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIHdpZHRoOiAxNTBweDsgICAgICAgICAgIC8qIEFqdXN0YSBlbCBhbmNobyBkZWwgbG9nbyBzZWfDum4gbmVjZXNpdGVzICovXHJcbiAgXHJcbn1cclxuXHJcblxyXG4iXX0= */";

/***/ }),

/***/ 1670:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <!-- LOGO -->\r\n      <div class=\"container\">\r\n        <div class=\"contenedor-logo\">\r\n          <a href=\"#\"><img src=\"../../assets/LOGO_SURCLEAN_4.svg\" alt=\"Logo Surclean\"></a>\r\n        </div>\r\n        <!-- MENU DE NAVEGACIÓN -->\r\n        <div class=\"contenedor\">\r\n          \r\n          <ion-buttons>\r\n          <ion-label *ngFor=\"let categoria of categorias\" >\r\n            <ion-button   *ngIf=\"!mostrarBusqueda\" (click)=\"modalResultados(categoria.idCategoria, categoria.nombreCategoria);\">             \r\n                {{categoria.nombreCategoria}}              \r\n            </ion-button>              \r\n          </ion-label>\r\n              \r\n              \r\n            \r\n            <ion-accordion-group class=\"contenedor\" expand=\"inset\" *ngIf=\"!mostrarBusqueda\">\r\n              <ion-accordion value=\"otros-productos\">\r\n                <ion-item slot=\"header\">\r\n                  <ion-label>OTROS PRODUCTOS</ion-label>\r\n                </ion-item>\r\n                <div *ngFor=\"let categoriaOtro of categoriasOtros\" class=\"ion-padding\" slot=\"content\" \r\n                (click)=\"modalResultados(categoriaOtro.idCategoria, categoriaOtro.nombreCategoria);\" style=\"cursor: pointer;\">\r\n                  {{categoriaOtro.nombreCategoria}}\r\n                </div>                \r\n              </ion-accordion>\r\n            </ion-accordion-group>\r\n            <div class=\"search-container\" *ngIf=\"mostrarBusqueda\">\r\n              <ion-searchbar class=\"custom-searchbar\" show-clear-button=\"never\" show-cancel-button=\"never\"\r\n              placeholder=\"Buscar producto\" (ionInput)=\"buscarProductos($event)\"></ion-searchbar>\r\n              <ion-button (click)=\"iniciarBusqueda()\"><ion-icon name=\"close-sharp\"></ion-icon></ion-button>\r\n            </div>\r\n            <ion-button *ngIf=\"!mostrarBusqueda\" (click)=\"iniciarBusqueda()\"><ion-icon name=\"search-sharp\"></ion-icon></ion-button>\r\n          </ion-buttons>\r\n        </div>\r\n      </div>\r\n    </ion-toolbar>\r\n  </ion-header>  \r\n  \r\n  <div class=\"grid-wrapper\">\r\n    <ion-grid *ngIf=\"mostrarBusqueda && productos.length > 0\" class=\"search-results\">\r\n      <ion-row *ngFor=\"let resultado of productos\" class=\"align-center row-content\" style=\"cursor: pointer;\"\r\n      (click)=\"modalMasInfo(resultado.idProducto, resultado.nombreProducto, resultado.descripcionProducto, resultado.fotoProducto, resultado.precioProducto)\">\r\n        <!-- Columna adicional solo visible en pantallas grandes -->\r\n         \r\n        <ion-col size=\"4\" class=\"align-center ion-hide large-screen\">\r\n        </ion-col>\r\n        <ion-col size=\"auto\" class=\"align-center\">\r\n          <img src=\"{{urlRoot}}/images/{{ resultado.fotoProducto }}\" class=\"product-image\"/>\r\n        </ion-col>\r\n        <ion-col size=\"auto\" class=\"align-center\">\r\n          {{ resultado.nombreProducto }}\r\n        </ion-col>\r\n        <ion-col></ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n  <!-- SLIDER -->\r\n  <swiper-container class=\"image-slider\" [slidesPerView]=\"1\" [loop]=\"true\" navigation=\"true\"\r\n  pagination=\"false\" centered-slides=\"true\" autoplay-delay=\"3000\" autoplay-disable-on-interaction=\"false\">\r\n    <swiper-slide><ion-img class=\"imgBanner\" src=\"../../assets/IMAGEN_PAG_1.png\"></ion-img></swiper-slide>\r\n    <swiper-slide><ion-img class=\"imgBanner\" src=\"../../assets/IMAGEN_PAG_2.png\"></ion-img></swiper-slide>\r\n    <swiper-slide><ion-img class=\"imgBanner\" src=\"../../assets/IMAGEN_PAG_3.png\"></ion-img></swiper-slide>\r\n  </swiper-container>\r\n\r\n  <!-- TARJETA -->\r\n  <ion-card class=\"card-container\">\r\n    <ion-card-content>\r\n      Somos una pequeña empresa dedicada a la fabricación de productos químicos, comprometida a ofrecer productos de limpieza, desinfección y sanitización de alta calidad a precios competitivos. Nuestro objetivo es ser la primera alternativa para nuestros clientes, brindando una amplia gama de productos como detergentes, suavizantes de ropa, líquidos baja espuma, soluciones para el cuidado del automotor, limpieza de baños, cocina y pisos. Valoramos la honestidad, la transparencia, el servicio al cliente, la calidad y el asesoramiento técnico en cada paso de nuestro proceso.\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <!-- LOGO -->\r\n  <div class=\"header-container2\">\r\n  <img class=\"foto\" src=\"../../assets/LOGO_SURCLEAN_4.svg\" alt=\"Logo surclean\">\r\n\r\n  <div class=\"social-icons2\">\r\n    <a href=\"https://www.instagram.com/surcleanquimica/\" target=\"_blank\">\r\n      <ion-icon name=\"logo-instagram\"></ion-icon>\r\n    </a>\r\n    <a href=\"https://wa.me/+541137390935\" target=\"_blank\">\r\n      <ion-icon name=\"logo-whatsapp\"></ion-icon>\r\n    </a>\r\n    <a href=\"mailto:surclean.adm@gmail.com\" target=\"_blank\">\r\n      <ion-icon name=\"mail-outline\"></ion-icon>\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n  <h2 class=\"sucursal-titulo\">Nuestra Sucursal</h2>\r\n  \r\n\r\n  <!-- MAPA -->\r\n  <div class=\"map-container\">\r\n    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.2112936233602!2d-58.36912112520551!3d-34.725068063915444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a332add2d5c173%3A0xca7e811a968d8607!2sAv.%209%20de%20Julio%203373%2C%20B1825ALC%20Lan%C3%BAs%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1717151842060!5m2!1ses-419!2sar\" width=\"800\" height=\"600\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\r\n  </div>\r\n\r\n  <!-- FOOTER -->\r\n  <ion-footer collapse=\"fade\">\r\n    <ion-toolbar>\r\n      <div class=\"footer-row\">\r\n        <div class=\"social-icons\">\r\n          <a href=\"https://www.instagram.com/surcleanquimica/\" target=\"_blank\"><ion-icon name=\"logo-instagram\"></ion-icon></a>\r\n          <a href=\"https://wa.me/+541137390935\" target=\"_blank\"><ion-icon name=\"logo-whatsapp\"></ion-icon></a>\r\n          <a href=\"mailto:surclean.adm@gmail.com\"><ion-icon name=\"mail-outline\"></ion-icon>\r\n          </a>\r\n        </div>\r\n        <div class=\"developed-by\">\r\n          <span>Desarrollado por</span>\r\n          <a href=\"https://www.codificardev.com.ar\" target=\"_blank\"><img src=\"../../assets/logo-codificardev.svg\" alt=\"Logo CodificAr Dev\"></a>\r\n        </div>\r\n      </div>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map