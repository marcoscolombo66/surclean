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

module.exports = "@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\nion-header {\n  z-index: 10;\n  /* Asegura que esté por encima del contenido */\n}\n.foto {\n  width: 100%;\n}\n.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.contenedor {\n  background-color: transparent !important;\n  display: inline-block;\n  position: relative;\n  margin-right: 25px;\n}\n.contenedor ion-buttons {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  color: black;\n  font-family: \"Roboto\", sans-serif !important;\n  font-size: 14px;\n}\n@media (max-width: 768px) {\n  .container {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .contenedor {\n    top: -15px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .contenedor-logo {\n    margin: 10px 0;\n    /* Añadir margen superior e inferior de 10px */\n    display: flex;\n    justify-content: center;\n    width: 100%;\n  }\n\n  .contenedor ion-buttons {\n    justify-content: center;\n    flex-direction: column;\n    /* Cambia la dirección a columna */\n    align-items: center;\n  }\n}\n.contenedor-logo {\n  display: inline-block;\n  width: 200px;\n  margin-left: 10px;\n}\n.lupa {\n  display: inline-block;\n  margin-right: 100px;\n}\n@media (max-width: 768px) {\n  .lupa {\n    margin-right: 20px;\n  }\n}\n.otros {\n  --border-style: none;\n  --color: black;\n  font-family: \"Roboto\", sans-serif;\n}\n@media (max-width: 1024px) and (max-height: 600px) {\n  .contenedor ion-buttons {\n    gap: 5px;\n  }\n}\nion-input {\n  width: 100px;\n  color: teal;\n}\nion-accordion {\n  --border-width: 0;\n  width: auto;\n}\nion-accordion::part(container) {\n  position: static;\n}\n.footer-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.social-icons a {\n  margin: 0 10px;\n  /* Espacio entre los iconos */\n  display: inline-flex;\n  /* Para centrar el icono verticalmente */\n  align-items: center;\n}\n.social-icons ion-icon {\n  font-size: 20px;\n  /* Tamaño inicial del icono */\n  color: #5BA4C0;\n  /* Color negro por defecto */\n  transition: all 0.3s ease;\n  /* Transición suave para los cambios */\n}\n.social-icons a:hover ion-icon {\n  font-size: 28px;\n  /* Agrandar al pasar el mouse */\n  color: #5BA4C0;\n  /* Color aqua al pasar el mouse */\n  text-shadow: 0 2px 4px #5BA4C0;\n  /* Sombra #5BA4C0 */\n}\n.developed-by {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  margin-right: 10px;\n}\n.developed-by img {\n  width: 120px;\n  margin-left: 10px;\n}\nspan {\n  color: #5BA4C0;\n}\n@media (max-width: 768px) {\n  .contenedor-logo {\n    margin-left: -50px;\n  }\n\n  .search-container {\n    margin-left: 28px;\n  }\n}\n.map-container {\n  width: 90%;\n  /* Ancho inicial amplio para ocupar la mayor parte de la pantalla */\n  max-width: 1000px;\n  /* Límite máximo para pantallas muy grandes */\n  height: 400px;\n  /* Altura inicial razonable */\n  margin: 20px auto;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  transition: box-shadow 0.3s ease;\n  /* Transición suave para la sombra al pasar el mouse */\n}\n.map-container iframe {\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n/* Hover effect SUTIL EN EL MAPA */\n.map-container:hover {\n  box-shadow: 0 6px 12px rgba(91, 164, 192, 0.5);\n}\n.sucursal-titulo {\n  font-family: \"Roboto\", sans-serif !important;\n  /* Fuente elegante */\n  font-size: 1.5em;\n  /* Tamaño de fuente grande */\n  font-weight: 500;\n  /* Negrita para destacar */\n  color: #3C3F44;\n  /* Color de texto oscuro */\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  /* Sombra sutil */\n  margin-bottom: 10px;\n  /* Espacio entre el título y la dirección */\n  text-align: left;\n  margin-left: 35px;\n  width: 100%;\n}\nion-card {\n  font-family: \"Roboto\", sans-serif !important;\n  background-color: white;\n  /* Fondo blanco base */\n  overflow: hidden;\n  /* Para que la salpicadura no se desborde */\n  position: relative;\n  /* Para posicionar el pseudoelemento */\n  text-align: justify;\n  /* Centra el texto horizontalmente */\n  padding: 10px;\n  /* Margen de 10px en todos los lados */\n}\nion-card::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: radial-gradient(circle at 20% 30%, #5BA4C0 10%, transparent 11%), radial-gradient(circle at 80% 70%, #5BA4C0 10%, transparent 11%), radial-gradient(circle at 40% 90%, #5BA4C0 10%, transparent 11%);\n  opacity: 0.3;\n  /* Ajusta la opacidad para que sea más sutil */\n  z-index: -1;\n  /* Coloca el efecto detrás del contenido de la tarjeta */\n  mix-blend-mode: multiply;\n  /* Para mezclar los colores con el fondo blanco */\n  color: #3C3F44;\n}\n.card-container {\n  padding: 30px;\n  border-radius: 12px;\n  margin: 10px;\n  transition: transform 0.3s, box-shadow 0.3s;\n  font-family: \"Roboto\", sans-serif !important;\n  /* Fuente elegante */\n  display: flex;\n  /* Activa Flexbox */\n  justify-content: center;\n  /* Centra las tarjetas horizontalmente */\n  gap: 20px;\n}\n.card-container:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n}\n.ion-card2 {\n  font-family: \"Roboto\", sans-serif !important;\n  background-color: white;\n  /* Fondo blanco base */\n  overflow: hidden;\n  /* Para que la salpicadura no se desborde */\n  position: relative;\n  /* Para posicionar el pseudoelemento */\n  text-align: center;\n  /* Centra el texto horizontalmente */\n  padding: 10px;\n  /* Margen de 10px en todos los lados */\n  width: 300px;\n  /* Ajusta el ancho de las tarjetas según tus necesidades */\n}\n/* ESTILOS SLIDER */\n.my-swiper {\n  width: 90%;\n  /* Ancho del slider */\n  margin: 0 auto;\n  /* Centrar el slider */\n}\n.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.search-container {\n  display: flex;\n  align-items: center;\n}\n.search-container ion-searchbar {\n  flex: 1;\n}\n.search-container ion-button {\n  margin-left: 8px;\n}\n.search-results-container {\n  padding: 0 16px;\n}\n.search-results {\n  width: 100%;\n}\n.custom-searchbar {\n  width: 100%;\n}\n.product-image {\n  max-width: 100px;\n  max-height: 100px;\n}\n@media (min-width: 768px) {\n  .product-image {\n    max-width: 50%;\n    /* En pantallas medianas, ocupa el 50% del ancho */\n  }\n\n  .large-screen {\n    display: block !important;\n  }\n}\n@media (min-width: 1024px) {\n  .product-image {\n    max-width: 30%;\n    /* En pantallas grandes, ocupa el 30% del ancho */\n  }\n\n  .large-screen {\n    display: block !important;\n  }\n}\n.grid-wrapper {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n.search-results {\n  width: 80%;\n  /* Ajusta este valor según el ancho deseado */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.row-content {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.align-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.product-image {\n  max-width: 100px;\n  max-height: 100px;\n}\nion-col.size-auto {\n  flex: 1;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,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QUFBO0VBQ0EsbUJBQUE7QUE1QkY7QUErQkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBNUJGO0FBK0JBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUE1QkY7QUErQkE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBNUJGO0FBaUNBO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0FBOUJGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgLyogQXNlZ3VyYSBxdWUgZXN0w6kgcG9yIGVuY2ltYSBkZWwgY29udGVuaWRvICovXHJcbn1cclxuXHJcbi5mb3RvIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbmVkb3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yIGlvbi1idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDEwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jb250ZW5lZG9yIHtcclxuICAgIHRvcDogLTE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY29udGVuZWRvci1sb2dvIHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgLyogQcOxYWRpciBtYXJnZW4gc3VwZXJpb3IgZSBpbmZlcmlvciBkZSAxMHB4ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuY29udGVuZWRvciBpb24tYnV0dG9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAvKiBDYW1iaWEgbGEgZGlyZWNjacOzbiBhIGNvbHVtbmEgKi9cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGVuZWRvci1sb2dvIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIFxyXG59XHJcblxyXG4ubHVwYSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5sdXBhIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5vdHJvcyB7XHJcbiAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgLS1jb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1heC1oZWlnaHQ6IDYwMHB4KSB7XHJcbiAgLmNvbnRlbmVkb3IgaW9uLWJ1dHRvbnMge1xyXG4gICAgZ2FwOiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBjb2xvcjogdGVhbDtcclxufVxyXG5cclxuaW9uLWFjY29yZGlvbiB7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbmlvbi1hY2NvcmRpb246OnBhcnQoY29udGFpbmVyKSB7XHJcbiAgcG9zaXRpb246IHN0YXRpYztcclxufVxyXG5cclxuXHJcblxyXG4vL0ZPT1RFUlxyXG4uZm9vdGVyLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4uc29jaWFsLWljb25zIGEge1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG4gIC8qIEVzcGFjaW8gZW50cmUgbG9zIGljb25vcyAqL1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIC8qIFBhcmEgY2VudHJhciBlbCBpY29ubyB2ZXJ0aWNhbG1lbnRlICovXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNvY2lhbC1pY29ucyBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIC8qIFRhbWHDsW8gaW5pY2lhbCBkZWwgaWNvbm8gKi9cclxuICBjb2xvcjogIzVCQTRDMDtcclxuICAvKiBDb2xvciBuZWdybyBwb3IgZGVmZWN0byAqL1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgLyogVHJhbnNpY2nDs24gc3VhdmUgcGFyYSBsb3MgY2FtYmlvcyAqL1xyXG59XHJcblxyXG4uc29jaWFsLWljb25zIGE6aG92ZXIgaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICAvKiBBZ3JhbmRhciBhbCBwYXNhciBlbCBtb3VzZSAqL1xyXG4gIGNvbG9yOiM1QkE0QzA7XHJcbiAgLyogQ29sb3IgYXF1YSBhbCBwYXNhciBlbCBtb3VzZSAqL1xyXG4gIHRleHQtc2hhZG93OiAwIDJweCA0cHggIzVCQTRDMDtcclxuICAvKiBTb21icmEgIzVCQTRDMCAqL1xyXG59XHJcblxyXG4uZGV2ZWxvcGVkLWJ5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmRldmVsb3BlZC1ieSBpbWcge1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBcclxufVxyXG5cclxuLy9URVhUTyBERVNBUlJPTExBRE8gUE9SXHJcbnNwYW4ge1xyXG4gIGNvbG9yOiAjNUJBNEMwO1xyXG59XHJcblxyXG5cclxuLy9DRU5UUkFETyBERSBMT0dPIEVOIFBBTlRBTExBUyBDSElDQVNcclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbnRlbmVkb3ItbG9nbyB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XHJcbiAgfVxyXG4gIC5zZWFyY2gtY29udGFpbmVye21hcmdpbi1sZWZ0OjI4cHg7fVxyXG59XHJcblxyXG5cclxuXHJcbi8vTUFQQSBDT04gTUFSQ0FET1IgREUgU1VDVVJTQUxcclxuLm1hcC1jb250YWluZXIge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgLyogQW5jaG8gaW5pY2lhbCBhbXBsaW8gcGFyYSBvY3VwYXIgbGEgbWF5b3IgcGFydGUgZGUgbGEgcGFudGFsbGEgKi9cclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAvKiBMw61taXRlIG3DoXhpbW8gcGFyYSBwYW50YWxsYXMgbXV5IGdyYW5kZXMgKi9cclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIC8qIEFsdHVyYSBpbmljaWFsIHJhem9uYWJsZSAqL1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG4gIC8qIFRyYW5zaWNpw7NuIHN1YXZlIHBhcmEgbGEgc29tYnJhIGFsIHBhc2FyIGVsIG1vdXNlICovXHJcbn1cclxuXHJcbi5tYXAtY29udGFpbmVyIGlmcmFtZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLyogSG92ZXIgZWZmZWN0IFNVVElMIEVOIEVMIE1BUEEgKi9cclxuLm1hcC1jb250YWluZXI6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSg5MSwgMTY0LCAxOTIsIDAuNSk7XHJcbn1cclxuXHJcblxyXG4vL1NPTUJSRUFETyBTVVRJTCBFTiBUSVRVTE8gU1VDVVJTQUxcclxuLnN1Y3Vyc2FsLXRpdHVsbyB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgLyogRnVlbnRlIGVsZWdhbnRlICovXHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICAvKiBUYW1hw7FvIGRlIGZ1ZW50ZSBncmFuZGUgKi9cclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIC8qIE5lZ3JpdGEgcGFyYSBkZXN0YWNhciAqL1xyXG4gIGNvbG9yOiAjM0MzRjQ0O1xyXG4gIC8qIENvbG9yIGRlIHRleHRvIG9zY3VybyAqL1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgLyogU29tYnJhIHN1dGlsICovXHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAvKiBFc3BhY2lvIGVudHJlIGVsIHTDrXR1bG8geSBsYSBkaXJlY2Npw7NuICovXHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW4tbGVmdDogMzVweDtcclxuICB3aWR0aDoxMDAlO1xyXG5cclxufVxyXG5cclxuLy9UQVJKRVRBU1xyXG5pb24tY2FyZCB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLyogRm9uZG8gYmxhbmNvIGJhc2UgKi9cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC8qIFBhcmEgcXVlIGxhIHNhbHBpY2FkdXJhIG5vIHNlIGRlc2JvcmRlICovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qIFBhcmEgcG9zaWNpb25hciBlbCBwc2V1ZG9lbGVtZW50byAqL1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgLyogQ2VudHJhIGVsIHRleHRvIGhvcml6b250YWxtZW50ZSAqL1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgLyogTWFyZ2VuIGRlIDEwcHggZW4gdG9kb3MgbG9zIGxhZG9zICovXHJcblxyXG5cclxufVxyXG5cclxuaW9uLWNhcmQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDIwJSAzMCUsICM1QkE0QzAgMTAlLCB0cmFuc3BhcmVudCAxMSUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA4MCUgNzAlLCAjNUJBNEMwIDEwJSwgdHJhbnNwYXJlbnQgMTElKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgNDAlIDkwJSwgIzVCQTRDMCAxMCUsIHRyYW5zcGFyZW50IDExJSk7XHJcblxyXG4gIG9wYWNpdHk6IDAuMztcclxuICAvKiBBanVzdGEgbGEgb3BhY2lkYWQgcGFyYSBxdWUgc2VhIG3DoXMgc3V0aWwgKi9cclxuICB6LWluZGV4OiAtMTtcclxuICAvKiBDb2xvY2EgZWwgZWZlY3RvIGRldHLDoXMgZGVsIGNvbnRlbmlkbyBkZSBsYSB0YXJqZXRhICovXHJcbiAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xyXG4gIC8qIFBhcmEgbWV6Y2xhciBsb3MgY29sb3JlcyBjb24gZWwgZm9uZG8gYmxhbmNvICovXHJcbiAgY29sb3I6ICMzQzNGNDQ7XHJcbn1cclxuXHJcblxyXG4uY2FyZC1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJveC1zaGFkb3cgMC4zcztcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAvKiBGdWVudGUgZWxlZ2FudGUgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qIEFjdGl2YSBGbGV4Ym94ICovXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLyogQ2VudHJhIGxhcyB0YXJqZXRhcyBob3Jpem9udGFsbWVudGUgKi9cclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICBib3gtc2hhZG93OiAwIDIwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5pb24tY2FyZDIge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC8qIEZvbmRvIGJsYW5jbyBiYXNlICovXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAvKiBQYXJhIHF1ZSBsYSBzYWxwaWNhZHVyYSBubyBzZSBkZXNib3JkZSAqL1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvKiBQYXJhIHBvc2ljaW9uYXIgZWwgcHNldWRvZWxlbWVudG8gKi9cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLyogQ2VudHJhIGVsIHRleHRvIGhvcml6b250YWxtZW50ZSAqL1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgLyogTWFyZ2VuIGRlIDEwcHggZW4gdG9kb3MgbG9zIGxhZG9zICovXHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIC8qIEFqdXN0YSBlbCBhbmNobyBkZSBsYXMgdGFyamV0YXMgc2Vnw7puIHR1cyBuZWNlc2lkYWRlcyAqL1xyXG5cclxuXHJcbn1cclxuXHJcbi8qIEVTVElMT1MgU0xJREVSICovXHJcbi5teS1zd2lwZXIge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgLyogQW5jaG8gZGVsIHNsaWRlciAqL1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIC8qIENlbnRyYXIgZWwgc2xpZGVyICovXHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWFyY2gtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWFyY2gtY29udGFpbmVyIGlvbi1zZWFyY2hiYXIge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5zZWFyY2gtY29udGFpbmVyIGlvbi1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0cy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHRzIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmN1c3RvbS1zZWFyY2hiYXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLnByb2R1Y3QtaW1hZ2Uge1xyXG4gIG1heC13aWR0aDogMTAwcHg7XHJcbiAgbWF4LWhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5wcm9kdWN0LWltYWdlIHtcclxuICAgIG1heC13aWR0aDogNTAlOyAvKiBFbiBwYW50YWxsYXMgbWVkaWFuYXMsIG9jdXBhIGVsIDUwJSBkZWwgYW5jaG8gKi9cclxuICB9XHJcbiAgLmxhcmdlLXNjcmVlbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gIC5wcm9kdWN0LWltYWdlIHtcclxuICAgIG1heC13aWR0aDogMzAlOyAvKiBFbiBwYW50YWxsYXMgZ3JhbmRlcywgb2N1cGEgZWwgMzAlIGRlbCBhbmNobyAqL1xyXG4gIH1cclxuICAubGFyZ2Utc2NyZWVuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi5ncmlkLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0cyB7XHJcbiAgd2lkdGg6IDgwJTsgLyogQWp1c3RhIGVzdGUgdmFsb3Igc2Vnw7puIGVsIGFuY2hvIGRlc2VhZG8gKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnJvdy1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFsaWduLWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvZHVjdC1pbWFnZSB7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxuICBtYXgtaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuXHJcblxyXG5pb24tY29sLnNpemUtYXV0byB7XHJcbiAgZmxleDogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */";

/***/ }),

/***/ 1670:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <!-- LOGO -->\r\n      <div class=\"container\">\r\n        <div class=\"contenedor-logo\">\r\n          <a href=\"#\"><img src=\"../../assets/LOGO_SURCLEAN_4.svg\" alt=\"Logo Surclean\"></a>\r\n        </div>\r\n        <!-- MENU DE NAVEGACIÓN -->\r\n        <div class=\"contenedor\">\r\n          \r\n          <ion-buttons>\r\n          <ion-label *ngFor=\"let categoria of categorias\" >\r\n            <ion-button   *ngIf=\"!mostrarBusqueda\" (click)=\"modalResultados(categoria.idCategoria, categoria.nombreCategoria);\">             \r\n                {{categoria.nombreCategoria}}              \r\n            </ion-button>              \r\n          </ion-label>\r\n              \r\n              \r\n            \r\n            <ion-accordion-group class=\"contenedor\" expand=\"inset\" *ngIf=\"!mostrarBusqueda\">\r\n              <ion-accordion value=\"otros-productos\">\r\n                <ion-item slot=\"header\">\r\n                  <ion-label>OTROS PRODUCTOS</ion-label>\r\n                </ion-item>\r\n                <div *ngFor=\"let categoriaOtro of categoriasOtros\" class=\"ion-padding\" slot=\"content\" \r\n                (click)=\"modalResultados(categoriaOtro.idCategoria, categoriaOtro.nombreCategoria);\" style=\"cursor: pointer;\">\r\n                  {{categoriaOtro.nombreCategoria}}\r\n                </div>                \r\n              </ion-accordion>\r\n            </ion-accordion-group>\r\n            <div class=\"search-container\" *ngIf=\"mostrarBusqueda\">\r\n              <ion-searchbar class=\"custom-searchbar\" show-clear-button=\"never\" show-cancel-button=\"never\"\r\n              placeholder=\"Buscar producto\" (ionInput)=\"buscarProductos($event)\"></ion-searchbar>\r\n              <ion-button (click)=\"iniciarBusqueda()\"><ion-icon name=\"close-sharp\"></ion-icon></ion-button>\r\n            </div>\r\n            <ion-button *ngIf=\"!mostrarBusqueda\" (click)=\"iniciarBusqueda()\"><ion-icon name=\"search-sharp\"></ion-icon></ion-button>\r\n          </ion-buttons>\r\n        </div>\r\n      </div>\r\n    </ion-toolbar>\r\n  </ion-header>  \r\n  \r\n  <div class=\"grid-wrapper\">\r\n    <ion-grid *ngIf=\"mostrarBusqueda && productos.length > 0\" class=\"search-results\">\r\n      <ion-row *ngFor=\"let resultado of productos\" class=\"align-center row-content\" style=\"cursor: pointer;\"\r\n      (click)=\"modalMasInfo(resultado.idProducto, resultado.nombreProducto, resultado.descripcionProducto, resultado.fotoProducto, resultado.precioProducto)\">\r\n        <!-- Columna adicional solo visible en pantallas grandes -->\r\n         \r\n        <ion-col size=\"4\" class=\"align-center ion-hide large-screen\">\r\n        </ion-col>\r\n        <ion-col size=\"auto\" class=\"align-center\">\r\n          <img src=\"{{urlRoot}}/images/{{ resultado.fotoProducto }}\" class=\"product-image\"/>\r\n        </ion-col>\r\n        <ion-col size=\"auto\" class=\"align-center\">\r\n          {{ resultado.nombreProducto }}\r\n        </ion-col>\r\n        <ion-col></ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n  <!-- SLIDER -->\r\n  <swiper-container class=\"image-slider\" [slidesPerView]=\"1\" [loop]=\"true\" navigation=\"true\"\r\n  pagination=\"false\" centered-slides=\"true\" autoplay-delay=\"3000\" autoplay-disable-on-interaction=\"false\">\r\n    <swiper-slide><ion-img class=\"imgBanner\" src=\"../../assets/IMAGEN_PAG_1.png\"></ion-img></swiper-slide>\r\n    <swiper-slide><ion-img class=\"imgBanner\" src=\"../../assets/IMAGEN_PAG_2.png\"></ion-img></swiper-slide>\r\n    <swiper-slide><ion-img class=\"imgBanner\" src=\"../../assets/IMAGEN_PAG_3.png\"></ion-img></swiper-slide>\r\n  </swiper-container>\r\n\r\n  <!-- TARJETA -->\r\n  <ion-card class=\"card-container\">\r\n    <ion-card-content>\r\n      Somos una pequeña empresa dedicada a la fabricación de productos químicos, comprometida a ofrecer productos de limpieza, desinfección y sanitización de alta calidad a precios competitivos. Nuestro objetivo es ser la primera alternativa para nuestros clientes, brindando una amplia gama de productos como detergentes, suavizantes de ropa, líquidos baja espuma, soluciones para el cuidado del automotor, limpieza de baños, cocina y pisos. Valoramos la honestidad, la transparencia, el servicio al cliente, la calidad y el asesoramiento técnico en cada paso de nuestro proceso.\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <!-- LOGO -->\r\n  <img class=\"foto\" src=\"../../assets/LOGO_SURCLEAN_4.svg\" alt=\"Logo surclean\">\r\n  <h2 class=\"sucursal-titulo\">Nuestra Sucursal</h2>\r\n\r\n  <!-- MAPA -->\r\n  <div class=\"map-container\">\r\n    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.2112936233602!2d-58.36912112520551!3d-34.725068063915444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a332add2d5c173%3A0xca7e811a968d8607!2sAv.%209%20de%20Julio%203373%2C%20B1825ALC%20Lan%C3%BAs%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1717151842060!5m2!1ses-419!2sar\" width=\"800\" height=\"600\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\r\n  </div>\r\n\r\n  <!-- TARJETA -->\r\n  <ion-card class=\"card-container\">\r\n    <ion-card-content>\r\n      Somos una pequeña empresa dedicada a la fabricación de productos químicos, comprometida a ofrecer productos de limpieza, desinfección y sanitización de alta calidad a precios competitivos. Nuestro objetivo es ser la primera alternativa para nuestros clientes, brindando una amplia gama de productos como detergentes, suavizantes de ropa, líquidos baja espuma, soluciones para el cuidado del automotor, limpieza de baños, cocina y pisos. Valoramos la honestidad, la transparencia, el servicio al cliente, la calidad y el asesoramiento técnico en cada paso de nuestro proceso.\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <!-- FOOTER -->\r\n  <ion-footer collapse=\"fade\">\r\n    <ion-toolbar>\r\n      <div class=\"footer-row\">\r\n        <div class=\"social-icons\">\r\n          <a href=\"https://www.instagram.com/surcleanquimica/\" target=\"_blank\"><ion-icon name=\"logo-instagram\"></ion-icon></a>\r\n          <a href=\"https://wa.me/+541137390935\" target=\"_blank\"><ion-icon name=\"logo-whatsapp\"></ion-icon></a>\r\n          <a href=\"mailto:ventas@codificardev.com.ar\"><ion-icon name=\"mail-outline\"></ion-icon>\r\n          </a>\r\n        </div>\r\n        <div class=\"developed-by\">\r\n          <span>Desarrollado por</span>\r\n          <a href=\"https://www.codificardev.com.ar\" target=\"_blank\"><img src=\"../../assets/logo-codificardev.svg\" alt=\"Logo CodificAr Dev\"></a>\r\n        </div>\r\n      </div>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map