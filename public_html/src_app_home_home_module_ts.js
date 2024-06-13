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

module.exports = "@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\nion-header {\n  z-index: 10;\n  /* Asegura que esté por encima del contenido */\n}\n.foto {\n  width: 100%;\n}\n.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.contenedor {\n  background-color: transparent !important;\n  display: inline-block;\n  position: relative;\n  margin-right: 25px;\n}\n.contenedor ion-buttons {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  color: black;\n  font-family: \"Roboto\", sans-serif !important;\n  font-size: 14px;\n}\n@media (max-width: 768px) {\n  .container {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .contenedor {\n    top: -15px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .contenedor-logo {\n    margin: 10px 0;\n    /* Añadir margen superior e inferior de 10px */\n    display: flex;\n    justify-content: center;\n    width: 100%;\n  }\n\n  .contenedor ion-buttons {\n    justify-content: center;\n    flex-direction: column;\n    /* Cambia la dirección a columna */\n    align-items: center;\n  }\n}\n.contenedor-logo {\n  display: inline-block;\n  width: 200px;\n  margin-left: 10px;\n}\n.lupa {\n  display: inline-block;\n  margin-right: 100px;\n}\n@media (max-width: 768px) {\n  .lupa {\n    margin-right: 20px;\n  }\n}\n.otros {\n  --border-style: none;\n  --color: black;\n  font-family: \"Roboto\", sans-serif;\n}\n@media (max-width: 1024px) and (max-height: 600px) {\n  .contenedor ion-buttons {\n    gap: 5px;\n  }\n}\nion-input {\n  width: 100px;\n  color: teal;\n}\nion-accordion {\n  --border-width: 0;\n  width: auto;\n}\n@media (max-width: 768px) {\n  ion-accordion {\n    margin-left: 20px;\n    /* Ajusta este valor según sea necesario */\n  }\n}\nion-accordion::part(container) {\n  position: static;\n}\n.footer-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.social-icons a {\n  margin: 0 10px;\n  /* Espacio entre los iconos */\n  display: inline-flex;\n  /* Para centrar el icono verticalmente */\n  align-items: center;\n}\n.social-icons ion-icon {\n  font-size: 20px;\n  /* Tamaño inicial del icono */\n  color: #5BA4C0;\n  /* Color negro por defecto */\n  transition: all 0.3s ease;\n  /* Transición suave para los cambios */\n}\n.social-icons a:hover ion-icon {\n  font-size: 28px;\n  /* Agrandar al pasar el mouse */\n  color: #5BA4C0;\n  /* Color aqua al pasar el mouse */\n  text-shadow: 0 2px 4px #5BA4C0;\n  /* Sombra #5BA4C0 */\n}\n.developed-by {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  margin-right: 10px;\n}\n.developed-by img {\n  width: 120px;\n  margin-left: 10px;\n}\nspan {\n  color: #5BA4C0;\n}\n@media (max-width: 768px) {\n  .contenedor-logo {\n    margin-left: -50px;\n  }\n\n  .search-container {\n    margin-left: 28px;\n  }\n}\n.map-container {\n  width: 90%;\n  /* Ancho inicial amplio para ocupar la mayor parte de la pantalla */\n  max-width: 1000px;\n  /* Límite máximo para pantallas muy grandes */\n  height: 400px;\n  /* Altura inicial razonable */\n  margin: 20px auto;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  transition: box-shadow 0.3s ease;\n  /* Transición suave para la sombra al pasar el mouse */\n}\n.map-container iframe {\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n/* Hover effect SUTIL EN EL MAPA */\n.map-container:hover {\n  box-shadow: 0 6px 12px rgba(91, 164, 192, 0.5);\n}\n.sucursal-titulo {\n  font-family: \"Roboto\", sans-serif !important;\n  /* Fuente elegante */\n  font-size: 1.5em;\n  /* Tamaño de fuente grande */\n  font-weight: 500;\n  /* Negrita para destacar */\n  color: #3C3F44;\n  /* Color de texto oscuro */\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  /* Sombra sutil */\n  margin-bottom: 10px;\n  /* Espacio entre el título y la dirección */\n  text-align: left;\n  margin-left: 35px;\n  width: 100%;\n}\nion-card {\n  font-family: \"Roboto\", sans-serif !important;\n  background-color: white;\n  /* Fondo blanco base */\n  overflow: hidden;\n  /* Para que la salpicadura no se desborde */\n  position: relative;\n  /* Para posicionar el pseudoelemento */\n  text-align: justify;\n  /* Centra el texto horizontalmente */\n  padding: 10px;\n  /* Margen de 10px en todos los lados */\n}\nion-card::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: radial-gradient(circle at 20% 30%, #5BA4C0 10%, transparent 11%), radial-gradient(circle at 80% 70%, #5BA4C0 10%, transparent 11%), radial-gradient(circle at 40% 90%, #5BA4C0 10%, transparent 11%);\n  opacity: 0.3;\n  /* Ajusta la opacidad para que sea más sutil */\n  z-index: -1;\n  /* Coloca el efecto detrás del contenido de la tarjeta */\n  mix-blend-mode: multiply;\n  /* Para mezclar los colores con el fondo blanco */\n  color: #3C3F44;\n}\n.card-container {\n  padding: 30px;\n  border-radius: 12px;\n  margin: 10px;\n  transition: transform 0.3s, box-shadow 0.3s;\n  font-family: \"Roboto\", sans-serif !important;\n  /* Fuente elegante */\n  display: flex;\n  /* Activa Flexbox */\n  justify-content: center;\n  /* Centra las tarjetas horizontalmente */\n  gap: 20px;\n}\n.card-container:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n}\n.ion-card2 {\n  font-family: \"Roboto\", sans-serif !important;\n  background-color: white;\n  /* Fondo blanco base */\n  overflow: hidden;\n  /* Para que la salpicadura no se desborde */\n  position: relative;\n  /* Para posicionar el pseudoelemento */\n  text-align: center;\n  /* Centra el texto horizontalmente */\n  padding: 10px;\n  /* Margen de 10px en todos los lados */\n  width: 300px;\n  /* Ajusta el ancho de las tarjetas según tus necesidades */\n}\n/* ESTILOS SLIDER */\n.my-swiper {\n  width: 90%;\n  /* Ancho del slider */\n  margin: 0 auto;\n  /* Centrar el slider */\n}\n.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.search-container {\n  display: flex;\n  align-items: center;\n}\n.search-container ion-searchbar {\n  flex: 1;\n}\n.search-container ion-button {\n  margin-left: 8px;\n}\n.search-results-container {\n  padding: 0 16px;\n}\n.search-results {\n  width: 100%;\n}\n.custom-searchbar {\n  width: 100%;\n}\n.product-image {\n  max-width: 100px;\n  max-height: 100px;\n}\n@media (min-width: 768px) {\n  .product-image {\n    max-width: 50%;\n    /* En pantallas medianas, ocupa el 50% del ancho */\n  }\n\n  .large-screen {\n    display: block !important;\n  }\n}\n@media (min-width: 1024px) {\n  .product-image {\n    max-width: 30%;\n    /* En pantallas grandes, ocupa el 30% del ancho */\n  }\n\n  .large-screen {\n    display: block !important;\n  }\n}\n.grid-wrapper {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n.search-results {\n  width: 80%;\n  /* Ajusta este valor según el ancho deseado */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.row-content {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.align-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.product-image {\n  max-width: 100px;\n  max-height: 100px;\n}\nion-col.size-auto {\n  flex: 1;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFByb3llY3RvcyUyMENsaWVudGVzXFxzdXJjbGVhblxcc3VyY2xlYW5cXHNyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FSLDJFQUFBO0FBRVI7RUFDRSxXQUFBO0VBQ0EsOENBQUE7QURDRjtBQ0VBO0VBQ0UsV0FBQTtBRENGO0FDRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBRENGO0FDRUE7RUFDRSx3Q0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRENGO0FDRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFDQSxlQUFBO0FEQ0Y7QUNFQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxtQkFBQTtFRENGOztFQ0VBO0lBQ0UsVUFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0VEQ0Y7O0VDRUE7SUFDRSxjQUFBO0lBQ0EsOENBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxXQUFBO0VEQ0Y7O0VDSUE7SUFDRSx1QkFBQTtJQUNBLHNCQUFBO0lBQ0Esa0NBQUE7SUFDQSxtQkFBQTtFRERGO0FBQ0Y7QUNJQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FERkY7QUNNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QURIRjtBQ01BO0VBQ0U7SUFDRSxrQkFBQTtFREhGO0FBQ0Y7QUNNQTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FESkY7QUNPQTtFQUNFO0lBQ0UsUUFBQTtFREpGO0FBQ0Y7QUNPQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FETEY7QUNRQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBRExGO0FDTUU7RUFIRjtJQUlJLGlCQUFBO0lBQW1CLDBDQUFBO0VERnJCO0FBQ0Y7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QTtJQUFnQixpREFBQTtFRHZCbEI7O0VDeUJBO0lBQ0UseUJBQUE7RUR0QkY7QUFDRjtBQzJCQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUR6QkY7QUM2QkE7RUFDRSxVQUFBO0VBQVksNkNBQUE7RUFDWixhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBRHpCRjtBQzRCQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUR6QkY7QUM0QkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRHpCRjtBQzRCQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUR6QkY7QUM4QkE7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7QUQzQkYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFwiKTtcbmlvbi1oZWFkZXIge1xuICB6LWluZGV4OiAxMDtcbiAgLyogQXNlZ3VyYSBxdWUgZXN0w6kgcG9yIGVuY2ltYSBkZWwgY29udGVuaWRvICovXG59XG5cbi5mb3RvIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cblxuLmNvbnRlbmVkb3IgaW9uLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuY29udGVuZWRvciB7XG4gICAgdG9wOiAtMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5jb250ZW5lZG9yLWxvZ28ge1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIC8qIEHDsWFkaXIgbWFyZ2VuIHN1cGVyaW9yIGUgaW5mZXJpb3IgZGUgMTBweCAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuY29udGVuZWRvciBpb24tYnV0dG9ucyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAvKiBDYW1iaWEgbGEgZGlyZWNjacOzbiBhIGNvbHVtbmEgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG4uY29udGVuZWRvci1sb2dvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubHVwYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5sdXBhIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbi5vdHJvcyB7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xuICAtLWNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LWhlaWdodDogNjAwcHgpIHtcbiAgLmNvbnRlbmVkb3IgaW9uLWJ1dHRvbnMge1xuICAgIGdhcDogNXB4O1xuICB9XG59XG5pb24taW5wdXQge1xuICB3aWR0aDogMTAwcHg7XG4gIGNvbG9yOiB0ZWFsO1xufVxuXG5pb24tYWNjb3JkaW9uIHtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG4gIHdpZHRoOiBhdXRvO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGlvbi1hY2NvcmRpb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIC8qIEFqdXN0YSBlc3RlIHZhbG9yIHNlZ8O6biBzZWEgbmVjZXNhcmlvICovXG4gIH1cbn1cblxuaW9uLWFjY29yZGlvbjo6cGFydChjb250YWluZXIpIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbn1cblxuLmZvb3Rlci1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zb2NpYWwtaWNvbnMgYSB7XG4gIG1hcmdpbjogMCAxMHB4O1xuICAvKiBFc3BhY2lvIGVudHJlIGxvcyBpY29ub3MgKi9cbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIC8qIFBhcmEgY2VudHJhciBlbCBpY29ubyB2ZXJ0aWNhbG1lbnRlICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zb2NpYWwtaWNvbnMgaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIC8qIFRhbWHDsW8gaW5pY2lhbCBkZWwgaWNvbm8gKi9cbiAgY29sb3I6ICM1QkE0QzA7XG4gIC8qIENvbG9yIG5lZ3JvIHBvciBkZWZlY3RvICovXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIC8qIFRyYW5zaWNpw7NuIHN1YXZlIHBhcmEgbG9zIGNhbWJpb3MgKi9cbn1cblxuLnNvY2lhbC1pY29ucyBhOmhvdmVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICAvKiBBZ3JhbmRhciBhbCBwYXNhciBlbCBtb3VzZSAqL1xuICBjb2xvcjogIzVCQTRDMDtcbiAgLyogQ29sb3IgYXF1YSBhbCBwYXNhciBlbCBtb3VzZSAqL1xuICB0ZXh0LXNoYWRvdzogMCAycHggNHB4ICM1QkE0QzA7XG4gIC8qIFNvbWJyYSAjNUJBNEMwICovXG59XG5cbi5kZXZlbG9wZWQtYnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmRldmVsb3BlZC1ieSBpbWcge1xuICB3aWR0aDogMTIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5zcGFuIHtcbiAgY29sb3I6ICM1QkE0QzA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGVuZWRvci1sb2dvIHtcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XG4gIH1cblxuICAuc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDI4cHg7XG4gIH1cbn1cbi5tYXAtY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgLyogQW5jaG8gaW5pY2lhbCBhbXBsaW8gcGFyYSBvY3VwYXIgbGEgbWF5b3IgcGFydGUgZGUgbGEgcGFudGFsbGEgKi9cbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIC8qIEzDrW1pdGUgbcOheGltbyBwYXJhIHBhbnRhbGxhcyBtdXkgZ3JhbmRlcyAqL1xuICBoZWlnaHQ6IDQwMHB4O1xuICAvKiBBbHR1cmEgaW5pY2lhbCByYXpvbmFibGUgKi9cbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlO1xuICAvKiBUcmFuc2ljacOzbiBzdWF2ZSBwYXJhIGxhIHNvbWJyYSBhbCBwYXNhciBlbCBtb3VzZSAqL1xufVxuXG4ubWFwLWNvbnRhaW5lciBpZnJhbWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi8qIEhvdmVyIGVmZmVjdCBTVVRJTCBFTiBFTCBNQVBBICovXG4ubWFwLWNvbnRhaW5lcjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSg5MSwgMTY0LCAxOTIsIDAuNSk7XG59XG5cbi5zdWN1cnNhbC10aXR1bG8ge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAvKiBGdWVudGUgZWxlZ2FudGUgKi9cbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgLyogVGFtYcOxbyBkZSBmdWVudGUgZ3JhbmRlICovXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC8qIE5lZ3JpdGEgcGFyYSBkZXN0YWNhciAqL1xuICBjb2xvcjogIzNDM0Y0NDtcbiAgLyogQ29sb3IgZGUgdGV4dG8gb3NjdXJvICovXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIC8qIFNvbWJyYSBzdXRpbCAqL1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAvKiBFc3BhY2lvIGVudHJlIGVsIHTDrXR1bG8geSBsYSBkaXJlY2Npw7NuICovXG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWNhcmQge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLyogRm9uZG8gYmxhbmNvIGJhc2UgKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLyogUGFyYSBxdWUgbGEgc2FscGljYWR1cmEgbm8gc2UgZGVzYm9yZGUgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBQYXJhIHBvc2ljaW9uYXIgZWwgcHNldWRvZWxlbWVudG8gKi9cbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgLyogQ2VudHJhIGVsIHRleHRvIGhvcml6b250YWxtZW50ZSAqL1xuICBwYWRkaW5nOiAxMHB4O1xuICAvKiBNYXJnZW4gZGUgMTBweCBlbiB0b2RvcyBsb3MgbGFkb3MgKi9cbn1cblxuaW9uLWNhcmQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDIwJSAzMCUsICM1QkE0QzAgMTAlLCB0cmFuc3BhcmVudCAxMSUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDgwJSA3MCUsICM1QkE0QzAgMTAlLCB0cmFuc3BhcmVudCAxMSUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDQwJSA5MCUsICM1QkE0QzAgMTAlLCB0cmFuc3BhcmVudCAxMSUpO1xuICBvcGFjaXR5OiAwLjM7XG4gIC8qIEFqdXN0YSBsYSBvcGFjaWRhZCBwYXJhIHF1ZSBzZWEgbcOhcyBzdXRpbCAqL1xuICB6LWluZGV4OiAtMTtcbiAgLyogQ29sb2NhIGVsIGVmZWN0byBkZXRyw6FzIGRlbCBjb250ZW5pZG8gZGUgbGEgdGFyamV0YSAqL1xuICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XG4gIC8qIFBhcmEgbWV6Y2xhciBsb3MgY29sb3JlcyBjb24gZWwgZm9uZG8gYmxhbmNvICovXG4gIGNvbG9yOiAjM0MzRjQ0O1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW46IDEwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBib3gtc2hhZG93IDAuM3M7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIC8qIEZ1ZW50ZSBlbGVnYW50ZSAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBBY3RpdmEgRmxleGJveCAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLyogQ2VudHJhIGxhcyB0YXJqZXRhcyBob3Jpem9udGFsbWVudGUgKi9cbiAgZ2FwOiAyMHB4O1xufVxuXG4uY2FyZC1jb250YWluZXI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICBib3gtc2hhZG93OiAwIDIwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5pb24tY2FyZDIge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLyogRm9uZG8gYmxhbmNvIGJhc2UgKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLyogUGFyYSBxdWUgbGEgc2FscGljYWR1cmEgbm8gc2UgZGVzYm9yZGUgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBQYXJhIHBvc2ljaW9uYXIgZWwgcHNldWRvZWxlbWVudG8gKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKiBDZW50cmEgZWwgdGV4dG8gaG9yaXpvbnRhbG1lbnRlICovXG4gIHBhZGRpbmc6IDEwcHg7XG4gIC8qIE1hcmdlbiBkZSAxMHB4IGVuIHRvZG9zIGxvcyBsYWRvcyAqL1xuICB3aWR0aDogMzAwcHg7XG4gIC8qIEFqdXN0YSBlbCBhbmNobyBkZSBsYXMgdGFyamV0YXMgc2Vnw7puIHR1cyBuZWNlc2lkYWRlcyAqL1xufVxuXG4vKiBFU1RJTE9TIFNMSURFUiAqL1xuLm15LXN3aXBlciB7XG4gIHdpZHRoOiA5MCU7XG4gIC8qIEFuY2hvIGRlbCBzbGlkZXIgKi9cbiAgbWFyZ2luOiAwIGF1dG87XG4gIC8qIENlbnRyYXIgZWwgc2xpZGVyICovXG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWFyY2gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlYXJjaC1jb250YWluZXIgaW9uLXNlYXJjaGJhciB7XG4gIGZsZXg6IDE7XG59XG5cbi5zZWFyY2gtY29udGFpbmVyIGlvbi1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uc2VhcmNoLXJlc3VsdHMtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuXG4uc2VhcmNoLXJlc3VsdHMge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmN1c3RvbS1zZWFyY2hiYXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2R1Y3QtaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9kdWN0LWltYWdlIHtcbiAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICAvKiBFbiBwYW50YWxsYXMgbWVkaWFuYXMsIG9jdXBhIGVsIDUwJSBkZWwgYW5jaG8gKi9cbiAgfVxuXG4gIC5sYXJnZS1zY3JlZW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLnByb2R1Y3QtaW1hZ2Uge1xuICAgIG1heC13aWR0aDogMzAlO1xuICAgIC8qIEVuIHBhbnRhbGxhcyBncmFuZGVzLCBvY3VwYSBlbCAzMCUgZGVsIGFuY2hvICovXG4gIH1cblxuICAubGFyZ2Utc2NyZWVuIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG4uZ3JpZC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VhcmNoLXJlc3VsdHMge1xuICB3aWR0aDogODAlO1xuICAvKiBBanVzdGEgZXN0ZSB2YWxvciBzZWfDum4gZWwgYW5jaG8gZGVzZWFkbyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucm93LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWxpZ24tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9kdWN0LWltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG59XG5cbmlvbi1jb2wuc2l6ZS1hdXRvIHtcbiAgZmxleDogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSIsIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIC8qIEFzZWd1cmEgcXVlIGVzdMOpIHBvciBlbmNpbWEgZGVsIGNvbnRlbmlkbyAqL1xyXG59XHJcblxyXG4uZm90byB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uY29udGVuZWRvciBpb24tYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY29udGVuZWRvciB7XHJcbiAgICB0b3A6IC0xNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbmVkb3ItbG9nbyB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIC8qIEHDsWFkaXIgbWFyZ2VuIHN1cGVyaW9yIGUgaW5mZXJpb3IgZGUgMTBweCAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLmNvbnRlbmVkb3IgaW9uLWJ1dHRvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLyogQ2FtYmlhIGxhIGRpcmVjY2nDs24gYSBjb2x1bW5hICovXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbmVkb3ItbG9nbyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBcclxufVxyXG5cclxuLmx1cGEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubHVwYSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ub3Ryb3Mge1xyXG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gIC0tY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChtYXgtaGVpZ2h0OiA2MDBweCkge1xyXG4gIC5jb250ZW5lZG9yIGlvbi1idXR0b25zIHtcclxuICAgIGdhcDogNXB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgY29sb3I6IHRlYWw7XHJcbn1cclxuXHJcbmlvbi1hY2NvcmRpb24ge1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7IC8qIEFqdXN0YSBlc3RlIHZhbG9yIHNlZ8O6biBzZWEgbmVjZXNhcmlvICovXHJcbiAgfVxyXG59XHJcblxyXG5pb24tYWNjb3JkaW9uOjpwYXJ0KGNvbnRhaW5lcikge1xyXG4gIHBvc2l0aW9uOiBzdGF0aWM7XHJcbn1cclxuXHJcblxyXG5cclxuLy9GT09URVJcclxuLmZvb3Rlci1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLnNvY2lhbC1pY29ucyBhIHtcclxuICBtYXJnaW46IDAgMTBweDtcclxuICAvKiBFc3BhY2lvIGVudHJlIGxvcyBpY29ub3MgKi9cclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAvKiBQYXJhIGNlbnRyYXIgZWwgaWNvbm8gdmVydGljYWxtZW50ZSAqL1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbnMgaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICAvKiBUYW1hw7FvIGluaWNpYWwgZGVsIGljb25vICovXHJcbiAgY29sb3I6ICM1QkE0QzA7XHJcbiAgLyogQ29sb3IgbmVncm8gcG9yIGRlZmVjdG8gKi9cclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIC8qIFRyYW5zaWNpw7NuIHN1YXZlIHBhcmEgbG9zIGNhbWJpb3MgKi9cclxufVxyXG5cclxuLnNvY2lhbC1pY29ucyBhOmhvdmVyIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgLyogQWdyYW5kYXIgYWwgcGFzYXIgZWwgbW91c2UgKi9cclxuICBjb2xvcjojNUJBNEMwO1xyXG4gIC8qIENvbG9yIGFxdWEgYWwgcGFzYXIgZWwgbW91c2UgKi9cclxuICB0ZXh0LXNoYWRvdzogMCAycHggNHB4ICM1QkE0QzA7XHJcbiAgLyogU29tYnJhICM1QkE0QzAgKi9cclxufVxyXG5cclxuLmRldmVsb3BlZC1ieSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5kZXZlbG9wZWQtYnkgaW1nIHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgXHJcbn1cclxuXHJcbi8vVEVYVE8gREVTQVJST0xMQURPIFBPUlxyXG5zcGFuIHtcclxuICBjb2xvcjogIzVCQTRDMDtcclxufVxyXG5cclxuXHJcbi8vQ0VOVFJBRE8gREUgTE9HTyBFTiBQQU5UQUxMQVMgQ0hJQ0FTXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250ZW5lZG9yLWxvZ28ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xyXG4gIH1cclxuICAuc2VhcmNoLWNvbnRhaW5lcnttYXJnaW4tbGVmdDoyOHB4O31cclxufVxyXG5cclxuXHJcblxyXG4vL01BUEEgQ09OIE1BUkNBRE9SIERFIFNVQ1VSU0FMXHJcbi5tYXAtY29udGFpbmVyIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIC8qIEFuY2hvIGluaWNpYWwgYW1wbGlvIHBhcmEgb2N1cGFyIGxhIG1heW9yIHBhcnRlIGRlIGxhIHBhbnRhbGxhICovXHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgLyogTMOtbWl0ZSBtw6F4aW1vIHBhcmEgcGFudGFsbGFzIG11eSBncmFuZGVzICovXHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICAvKiBBbHR1cmEgaW5pY2lhbCByYXpvbmFibGUgKi9cclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZTtcclxuICAvKiBUcmFuc2ljacOzbiBzdWF2ZSBwYXJhIGxhIHNvbWJyYSBhbCBwYXNhciBlbCBtb3VzZSAqL1xyXG59XHJcblxyXG4ubWFwLWNvbnRhaW5lciBpZnJhbWUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi8qIEhvdmVyIGVmZmVjdCBTVVRJTCBFTiBFTCBNQVBBICovXHJcbi5tYXAtY29udGFpbmVyOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoOTEsIDE2NCwgMTkyLCAwLjUpO1xyXG59XHJcblxyXG5cclxuLy9TT01CUkVBRE8gU1VUSUwgRU4gVElUVUxPIFNVQ1VSU0FMXHJcbi5zdWN1cnNhbC10aXR1bG8ge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gIC8qIEZ1ZW50ZSBlbGVnYW50ZSAqL1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgLyogVGFtYcOxbyBkZSBmdWVudGUgZ3JhbmRlICovXHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAvKiBOZWdyaXRhIHBhcmEgZGVzdGFjYXIgKi9cclxuICBjb2xvcjogIzNDM0Y0NDtcclxuICAvKiBDb2xvciBkZSB0ZXh0byBvc2N1cm8gKi9cclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIC8qIFNvbWJyYSBzdXRpbCAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgLyogRXNwYWNpbyBlbnRyZSBlbCB0w610dWxvIHkgbGEgZGlyZWNjacOzbiAqL1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAgd2lkdGg6MTAwJTtcclxuXHJcbn1cclxuXHJcbi8vVEFSSkVUQVNcclxuaW9uLWNhcmQge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC8qIEZvbmRvIGJsYW5jbyBiYXNlICovXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAvKiBQYXJhIHF1ZSBsYSBzYWxwaWNhZHVyYSBubyBzZSBkZXNib3JkZSAqL1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvKiBQYXJhIHBvc2ljaW9uYXIgZWwgcHNldWRvZWxlbWVudG8gKi9cclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIC8qIENlbnRyYSBlbCB0ZXh0byBob3Jpem9udGFsbWVudGUgKi9cclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC8qIE1hcmdlbiBkZSAxMHB4IGVuIHRvZG9zIGxvcyBsYWRvcyAqL1xyXG5cclxuXHJcbn1cclxuXHJcbmlvbi1jYXJkOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAyMCUgMzAlLCAjNUJBNEMwIDEwJSwgdHJhbnNwYXJlbnQgMTElKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgODAlIDcwJSwgIzVCQTRDMCAxMCUsIHRyYW5zcGFyZW50IDExJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDQwJSA5MCUsICM1QkE0QzAgMTAlLCB0cmFuc3BhcmVudCAxMSUpO1xyXG5cclxuICBvcGFjaXR5OiAwLjM7XHJcbiAgLyogQWp1c3RhIGxhIG9wYWNpZGFkIHBhcmEgcXVlIHNlYSBtw6FzIHN1dGlsICovXHJcbiAgei1pbmRleDogLTE7XHJcbiAgLyogQ29sb2NhIGVsIGVmZWN0byBkZXRyw6FzIGRlbCBjb250ZW5pZG8gZGUgbGEgdGFyamV0YSAqL1xyXG4gIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcclxuICAvKiBQYXJhIG1lemNsYXIgbG9zIGNvbG9yZXMgY29uIGVsIGZvbmRvIGJsYW5jbyAqL1xyXG4gIGNvbG9yOiAjM0MzRjQ0O1xyXG59XHJcblxyXG5cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBib3gtc2hhZG93IDAuM3M7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgLyogRnVlbnRlIGVsZWdhbnRlICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvKiBBY3RpdmEgRmxleGJveCAqL1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC8qIENlbnRyYSBsYXMgdGFyamV0YXMgaG9yaXpvbnRhbG1lbnRlICovXHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXI6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgYm94LXNoYWRvdzogMCAyMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uaW9uLWNhcmQyIHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAvKiBGb25kbyBibGFuY28gYmFzZSAqL1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLyogUGFyYSBxdWUgbGEgc2FscGljYWR1cmEgbm8gc2UgZGVzYm9yZGUgKi9cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLyogUGFyYSBwb3NpY2lvbmFyIGVsIHBzZXVkb2VsZW1lbnRvICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8qIENlbnRyYSBlbCB0ZXh0byBob3Jpem9udGFsbWVudGUgKi9cclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC8qIE1hcmdlbiBkZSAxMHB4IGVuIHRvZG9zIGxvcyBsYWRvcyAqL1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICAvKiBBanVzdGEgZWwgYW5jaG8gZGUgbGFzIHRhcmpldGFzIHNlZ8O6biB0dXMgbmVjZXNpZGFkZXMgKi9cclxuXHJcblxyXG59XHJcblxyXG4vKiBFU1RJTE9TIFNMSURFUiAqL1xyXG4ubXktc3dpcGVyIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIC8qIEFuY2hvIGRlbCBzbGlkZXIgKi9cclxuICBtYXJnaW46IDAgYXV0bztcclxuICAvKiBDZW50cmFyIGVsIHNsaWRlciAqL1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2VhcmNoLWNvbnRhaW5lciBpb24tc2VhcmNoYmFyIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uc2VhcmNoLWNvbnRhaW5lciBpb24tYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdHMtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0cyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jdXN0b20tc2VhcmNoYmFyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5wcm9kdWN0LWltYWdlIHtcclxuICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAucHJvZHVjdC1pbWFnZSB7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTsgLyogRW4gcGFudGFsbGFzIG1lZGlhbmFzLCBvY3VwYSBlbCA1MCUgZGVsIGFuY2hvICovXHJcbiAgfVxyXG4gIC5sYXJnZS1zY3JlZW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAucHJvZHVjdC1pbWFnZSB7XHJcbiAgICBtYXgtd2lkdGg6IDMwJTsgLyogRW4gcGFudGFsbGFzIGdyYW5kZXMsIG9jdXBhIGVsIDMwJSBkZWwgYW5jaG8gKi9cclxuICB9XHJcbiAgLmxhcmdlLXNjcmVlbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4uZ3JpZC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIFxyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdHMge1xyXG4gIHdpZHRoOiA4MCU7IC8qIEFqdXN0YSBlc3RlIHZhbG9yIHNlZ8O6biBlbCBhbmNobyBkZXNlYWRvICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yb3ctY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5hbGlnbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2R1Y3QtaW1hZ2Uge1xyXG4gIG1heC13aWR0aDogMTAwcHg7XHJcbiAgbWF4LWhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuaW9uLWNvbC5zaXplLWF1dG8ge1xyXG4gIGZsZXg6IDE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 1670:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <!-- LOGO -->\r\n      <div class=\"container\">\r\n        <div class=\"contenedor-logo\">\r\n          <a href=\"#\"><img src=\"../../assets/LOGO_SURCLEAN_4.svg\" alt=\"Logo Surclean\"></a>\r\n        </div>\r\n        <!-- MENU DE NAVEGACIÓN -->\r\n        <div class=\"contenedor\">\r\n          \r\n          <ion-buttons>\r\n          <ion-label *ngFor=\"let categoria of categorias\" >\r\n            <ion-button   *ngIf=\"!mostrarBusqueda\" (click)=\"modalResultados(categoria.idCategoria, categoria.nombreCategoria);\">             \r\n                {{categoria.nombreCategoria}}              \r\n            </ion-button>              \r\n          </ion-label>\r\n              \r\n              \r\n            \r\n            <ion-accordion-group class=\"contenedor\" expand=\"inset\" *ngIf=\"!mostrarBusqueda\">\r\n              <ion-accordion value=\"otros-productos\">\r\n                <ion-item slot=\"header\">\r\n                  <ion-label>OTROS PRODUCTOS</ion-label>\r\n                </ion-item>\r\n                <div *ngFor=\"let categoriaOtro of categoriasOtros\" class=\"ion-padding\" slot=\"content\" \r\n                (click)=\"modalResultados(categoriaOtro.idCategoria, categoriaOtro.nombreCategoria);\" style=\"cursor: pointer;\">\r\n                  {{categoriaOtro.nombreCategoria}}\r\n                </div>                \r\n              </ion-accordion>\r\n            </ion-accordion-group>\r\n            <div class=\"search-container\" *ngIf=\"mostrarBusqueda\">\r\n              <ion-searchbar class=\"custom-searchbar\" show-clear-button=\"never\" show-cancel-button=\"never\"\r\n              placeholder=\"Buscar producto\" (ionInput)=\"buscarProductos($event)\"></ion-searchbar>\r\n              <ion-button (click)=\"iniciarBusqueda()\"><ion-icon name=\"close-sharp\"></ion-icon></ion-button>\r\n            </div>\r\n            <ion-button *ngIf=\"!mostrarBusqueda\" (click)=\"iniciarBusqueda()\"><ion-icon name=\"search-sharp\"></ion-icon></ion-button>\r\n          </ion-buttons>\r\n        </div>\r\n      </div>\r\n    </ion-toolbar>\r\n  </ion-header>  \r\n  \r\n  <div class=\"grid-wrapper\">\r\n    <ion-grid *ngIf=\"mostrarBusqueda && productos.length > 0\" class=\"search-results\">\r\n      <ion-row *ngFor=\"let resultado of productos\" class=\"align-center row-content\" style=\"cursor: pointer;\"\r\n      (click)=\"modalMasInfo(resultado.idProducto, resultado.nombreProducto, resultado.descripcionProducto, resultado.fotoProducto, resultado.precioProducto)\">\r\n        <!-- Columna adicional solo visible en pantallas grandes -->\r\n         \r\n        <ion-col size=\"4\" class=\"align-center ion-hide large-screen\">\r\n        </ion-col>\r\n        <ion-col size=\"auto\" class=\"align-center\">\r\n          <img src=\"{{urlRoot}}/images/{{ resultado.fotoProducto }}\" class=\"product-image\"/>\r\n        </ion-col>\r\n        <ion-col size=\"auto\" class=\"align-center\">\r\n          {{ resultado.nombreProducto }}\r\n        </ion-col>\r\n        <ion-col></ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n  <!-- SLIDER -->\r\n  <swiper-container class=\"image-slider\" [slidesPerView]=\"1\" [loop]=\"true\" navigation=\"true\"\r\n  pagination=\"false\" centered-slides=\"true\" autoplay-delay=\"3000\" autoplay-disable-on-interaction=\"false\">\r\n    <swiper-slide><ion-img class=\"imgBanner\" src=\"../../assets/IMAGEN_PAG_1.png\"></ion-img></swiper-slide>\r\n    <swiper-slide><ion-img class=\"imgBanner\" src=\"../../assets/IMAGEN_PAG_2.png\"></ion-img></swiper-slide>\r\n    <swiper-slide><ion-img class=\"imgBanner\" src=\"../../assets/IMAGEN_PAG_3.png\"></ion-img></swiper-slide>\r\n  </swiper-container>\r\n\r\n  <!-- TARJETA -->\r\n  <ion-card class=\"card-container\">\r\n    <ion-card-content>\r\n      Somos una pequeña empresa dedicada a la fabricación de productos químicos, comprometida a ofrecer productos de limpieza, desinfección y sanitización de alta calidad a precios competitivos. Nuestro objetivo es ser la primera alternativa para nuestros clientes, brindando una amplia gama de productos como detergentes, suavizantes de ropa, líquidos baja espuma, soluciones para el cuidado del automotor, limpieza de baños, cocina y pisos. Valoramos la honestidad, la transparencia, el servicio al cliente, la calidad y el asesoramiento técnico en cada paso de nuestro proceso.\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <!-- LOGO -->\r\n  <img class=\"foto\" src=\"../../assets/LOGO_SURCLEAN_4.svg\" alt=\"Logo surclean\">\r\n  <h2 class=\"sucursal-titulo\">Nuestra Sucursal</h2>\r\n\r\n  <!-- MAPA -->\r\n  <div class=\"map-container\">\r\n    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.2112936233602!2d-58.36912112520551!3d-34.725068063915444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a332add2d5c173%3A0xca7e811a968d8607!2sAv.%209%20de%20Julio%203373%2C%20B1825ALC%20Lan%C3%BAs%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1717151842060!5m2!1ses-419!2sar\" width=\"800\" height=\"600\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\r\n  </div>\r\n\r\n  <!-- FOOTER -->\r\n  <ion-footer collapse=\"fade\">\r\n    <ion-toolbar>\r\n      <div class=\"footer-row\">\r\n        <div class=\"social-icons\">\r\n          <a href=\"https://www.instagram.com/surcleanquimica/\" target=\"_blank\"><ion-icon name=\"logo-instagram\"></ion-icon></a>\r\n          <a href=\"https://wa.me/+541137390935\" target=\"_blank\"><ion-icon name=\"logo-whatsapp\"></ion-icon></a>\r\n          <a href=\"mailto:info@surclean.com.ar\"><ion-icon name=\"mail-outline\"></ion-icon>\r\n          </a>\r\n        </div>\r\n        <div class=\"developed-by\">\r\n          <span>Desarrollado por</span>\r\n          <a href=\"https://www.codificardev.com.ar\" target=\"_blank\"><img src=\"../../assets/logo-codificardev.svg\" alt=\"Logo CodificAr Dev\"></a>\r\n        </div>\r\n      </div>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map