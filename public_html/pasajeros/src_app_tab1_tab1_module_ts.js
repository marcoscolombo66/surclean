"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page */ 6923);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_0__.Tab1PageRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_1__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 8165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _iniciarusuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../iniciarusuario.service */ 7574);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _modals_masinfo_masinfo_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/masinfo/masinfo.page */ 3339);
/* harmony import */ var _modals_checkout_checkout_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/checkout/checkout.page */ 6098);
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/config */ 9698);
















let Tab1Page = class Tab1Page {
    constructor(fb, http, platform, route, alertController, modalCtrl, menuCtrl, toastController, inicia, navCtrl, Str) {
        this.fb = fb;
        this.http = http;
        this.platform = platform;
        this.route = route;
        this.alertController = alertController;
        this.modalCtrl = modalCtrl;
        this.menuCtrl = menuCtrl;
        this.toastController = toastController;
        this.inicia = inicia;
        this.navCtrl = navCtrl;
        this.Str = Str;
        this.verCarro = false;
        this.showFilters = false;
        this.productos = [];
        this.searchText = '';
        this.cantidadesPorProducto = {};
        //backButtonEnabled = true;
        this.totalCantidades = 0;
        this.urlRoot = src_app_config__WEBPACK_IMPORTED_MODULE_6__.AppConfig.urlRoot;
        this.filtroCategoria = ''; // Nueva propiedad
        this.noVerPorCat = false;
        this.productosOfertas = [];
    }
    ngDoCheck() {
        this.calculaTotal();
    }
    showFilter() {
        if (this.showFilters) {
            this.showFilters = false;
            this.noVerPorCat = false;
        }
        else {
            this.showFilters = true;
            this.noVerPorCat = true;
            this.getCategorias();
        }
    }
    handleChange(ev) {
        const selectedCategoria = ev.target.value;
        this.filtroCategoria = selectedCategoria;
        this.getProductosCategoria(selectedCategoria);
        this.noVerPorCat = true;
    }
    getProductosOferta() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpHeaders({ 'Content-Type': 'application/octet-stream' });
            const options = {};
            this.http.post(this.urlRoot + '/index.php/Api/ProductosOfertas/', JSON.stringify(options), headers)
                .subscribe((res) => {
                this.productosOfertas = res;
            }, (error) => {
                console.log(error);
            });
        });
    }
    getProductosCategoria(categoria) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpHeaders({ 'Content-Type': 'application/octet-stream' });
            const options = { busqueda: categoria };
            this.http.post(this.urlRoot + '/index.php/Api/ProductosCategorias/', JSON.stringify(options), headers)
                .subscribe((res) => {
                this.productos = res;
            }, (error) => {
                console.log(error);
            });
        });
    }
    presentToast(mensaje) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                //header: 'Toast header',
                message: mensaje,
                duration: 2000,
                position: 'bottom',
                color: 'primary',
                buttons: [
                    {
                        side: 'start',
                        icon: 'cart',
                        handler: () => {
                            console.log('Favorite clicked');
                        },
                    },
                    {
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        },
                    },
                ],
            });
            toast.present();
        });
    }
    buscarProductos(event) {
        this.searchText = event.target.value.trim().toLowerCase();
        // Obtener el valor de búsqueda del evento
        const busqueda = event.target.value;
        // Llamar a getProductos con el valor de búsqueda
        this.getProductos(busqueda);
    }
    ngOnInit() {
        this.inicia.verificar();
        this.getProductos();
        this.getProductosOferta();
    }
    incrementar(idProducto) {
        this.cantidadesPorProducto[idProducto] = (this.cantidadesPorProducto[idProducto] || 1) + 1;
    }
    decrementar(idProducto) {
        if (this.cantidadesPorProducto[idProducto] && this.cantidadesPorProducto[idProducto] > 1) {
            this.cantidadesPorProducto[idProducto]--;
        }
    }
    add(idproducto, nombreProducto, fotoProducto, precio) {
        const cantidad = this.cantidadesPorProducto[idproducto] || 1;
        this.inicia.onClickProduct(idproducto, nombreProducto, fotoProducto, cantidad, precio);
        this.presentToast('Agregaste ' + cantidad + ' items de este producto.');
        this.calculaTotal();
    }
    calculaTotal() {
        const arrayProductos = this.inicia.obtenerProductosSeleccionados();
        // Inicializa una variable para la sumatoria total
        let _totalCantidades = 0;
        // Recorre el objeto y suma las cantidades
        for (const key in arrayProductos) {
            if (arrayProductos.hasOwnProperty(key)) {
                _totalCantidades += arrayProductos[key].cant;
            }
        }
        // Imprime la sumatoria total en la consola    
        this.totalCantidades = _totalCantidades;
    }
    onIonInfinite(ev) {
        if (this.noVerPorCat !== true) {
            setTimeout(() => {
                this.getProductos();
                //this.buscarProductos(this.searchText);    
                ev.target.complete();
            }, 500);
        }
    }
    getProductos(busqueda = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpHeaders({ 'Content-Type': 'application/octet-stream' });
            //const BUSQUEDA: any=this.registroForm.value.busqueda;
            const options = {};
            if (busqueda) {
                options.busqueda = busqueda;
            }
            // Llamar a la API con las opciones
            this.http.post(this.urlRoot + '/index.php/Api/Productos/', JSON.stringify(options), headers)
                .subscribe((res) => {
                this.productos = res;
            }, (error) => {
                console.log(error);
            });
        });
    }
    getCategorias() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpHeaders({ 'Content-Type': 'application/octet-stream' });
            const options = {};
            // Llamar a la API con las opciones
            this.http.post(this.urlRoot + '/index.php/Api/Categorias/', JSON.stringify(options), headers)
                .subscribe((res) => {
                this.categorias = res;
            }, (error) => {
                console.log(error);
            });
        });
    }
    modalMasInfo(idProducto, nombreProducto, descripcionProducto, fotoProducto, precioProducto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.inicia.getUser();
            const url_proyecto = user[0].url_proyecto;
            const modal = yield this.modalCtrl.create({
                component: _modals_masinfo_masinfo_page__WEBPACK_IMPORTED_MODULE_4__.MasinfoPage,
                //breakpoints: [0, 0.99],
                //initialBreakpoint: 0.99,
                //handle: true,
                componentProps: {
                    mySubject: idProducto,
                    mySubject2: nombreProducto,
                    mySubject3: descripcionProducto,
                    mySubject4: fotoProducto,
                    mySubject5: precioProducto,
                    url_proyecto: url_proyecto
                },
                animated: true,
                canDismiss: true,
                keyboardClose: true,
            });
            yield modal.present();
        });
    }
    modalCheckout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.inicia.getUser();
            const url_proyecto = user[0].url_proyecto;
            const modal = yield this.modalCtrl.create({
                component: _modals_checkout_checkout_page__WEBPACK_IMPORTED_MODULE_5__.CheckoutPage,
                //breakpoints: [0, 0.99],
                //initialBreakpoint: 0.99,
                //handle: true,
                componentProps: {
                    url_proyecto: url_proyecto,
                },
                animated: true,
                canDismiss: true,
                keyboardClose: true,
            });
            yield modal.present();
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController },
    { type: _iniciarusuario_service__WEBPACK_IMPORTED_MODULE_2__.IniciarusuarioService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-tab1',
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 8165:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n/* *{font-family: 'arial';}*/\n.avatar {\n  border-radius: 50%;\n  width: 150px;\n  height: 150px;\n  margin-top: 10px;\n}\n/* DOES NOT WORK - not specific enough */\n.alert-wrapper {\n  background: #6742e0d5;\n}\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n.my-custom-class .alert-wrapper {\n  background: #6742e0d5;\n}\n.ion-card-content-class {\n  text-align: justify;\n}\n.cartIcontxt {\n  margin-top: 10px;\n  padding-right: 1px;\n  width: 27px;\n  max-width: 27px;\n  height: 20px;\n  color: #ffffff;\n}\n.cartIcon {\n  padding-right: 1px;\n  width: 27px;\n  max-width: 27px;\n  height: 20px;\n  color: #e95816;\n}\n.filterIcon {\n  margin-top: 20px;\n  padding-right: 1px;\n  width: 25px;\n  max-width: 25px;\n  height: 20px;\n  color: #e95816;\n}\n.searchBar {\n  max-width: 265px;\n  width: 300px;\n  border-radius: 5%;\n  border-width: 1px;\n}\n.catBar {\n  width: 300px;\n  max-width: 300px;\n  border-radius: 5%;\n  border-width: 0px;\n}\n.catBarSelect {\n  color: #e95816;\n  border-width: 0px;\n  /* Si también quieres ajustar el padding a la derecha */\n}\n.catBarSelectOption {\n  color: #e95816;\n  border-width: 0px;\n  max-width: 300px;\n  width: 300px;\n}\n.filterRow {\n  margin-left: 1px;\n}\n.tab1IonCard {\n  max-width: 300px;\n  border-radius: 5%;\n  border-width: 1px;\n  text-align: center;\n}\n.tab1ImgIonCard {\n  width: 100%;\n}\n.tab1IonButton {\n  border-radius: 5%;\n}\n.slides-custom {\n  /* Agrega estilos personalizados aquí para sobrescribir los estilos predeterminados de ion-slides */\n  /* Por ejemplo, para quitar el margen y el relleno predeterminados: */\n  height: auto;\n  width: auto;\n  display: block;\n  margin: 0;\n  padding: 0;\n  position: static;\n  /* Otros estilos personalizados... */\n}\nion-fab-button {\n  --background: #ffffff;\n  --background-activated: transparent;\n  --background-hover: #e95816;\n  --border-radius: 10px;\n  --border-width: 0px;\n  --box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.3), 0px 0px 0px 0px rgba(0, 0, 0, 0.15);\n  --color: #e95816;\n  width: 30px;\n  height: 30px;\n}\n/* Ajuste de padding solo para pantallas más grandes (mayores a 768 píxeles) */\n@media screen and (min-width: 769px) {\n  .slides-custom {\n    /* Agrega estilos personalizados aquí para sobrescribir los estilos predeterminados de ion-slides */\n    /* Por ejemplo, para quitar el margen y el relleno predeterminados: */\n    height: auto;\n    width: auto;\n    display: block;\n    margin: 0;\n    padding: 0;\n    position: static;\n    /* Otros estilos personalizados... */\n  }\n\n  .filterIcon {\n    margin-top: 20px;\n    padding-right: 5px;\n    width: 30px;\n    height: 20px;\n    color: #e95816;\n  }\n\n  .searchBar {\n    max-width: 300px;\n    border-radius: 5%;\n    border-width: 1px;\n    /* Si también quieres ajustar el padding a la derecha */\n  }\n\n  .catBar {\n    max-width: 300px;\n    border-radius: 5%;\n    border-width: 1px;\n    /* Si también quieres ajustar el padding a la derecha */\n  }\n\n  .catBarSelect {\n    color: #e95816;\n    border-width: 0px;\n    width: 200px;\n    max-width: 200px;\n    /* Si también quieres ajustar el padding a la derecha */\n  }\n\n  .catBarSelectOption {\n    color: #e95816;\n    border-width: 0px;\n    width: 200px;\n    max-width: 200px;\n  }\n\n  .tab1IonCard {\n    max-width: 300px;\n    border-radius: 5%;\n    border-width: 1px;\n    /* Si también quieres ajustar el padding a la derecha */\n  }\n\n  .tab1IonButton {\n    border-radius: 5%;\n  }\n\n  .ion-card-content-class {\n    text-align: justify;\n  }\n\n  .filterRow {\n    margin-left: 15px;\n    border-radius: 5%;\n    border-width: 1px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNkO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQUNKO0FBRUMsNEJBQUE7QUFFQztFQUFRLGtCQUFBO0VBQW9CLFlBQUE7RUFBYyxhQUFBO0VBQWUsZ0JBQUE7QUFJM0Q7QUFGRSx3Q0FBQTtBQUNGO0VBQ0UscUJBQUE7QUFLRjtBQUZBLHVFQUFBO0FBQ0E7RUFDRSxxQkFBQTtBQUtGO0FBSEE7RUFDQSxtQkFBQTtBQU1BO0FBRkE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUtGO0FBRkE7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFJRjtBQUZBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFLRjtBQUhBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQU1GO0FBSkE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBT0Y7QUFMQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUVBLHVEQUFBO0FBT0Y7QUFMQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQVFGO0FBTkE7RUFDRSxnQkFBQTtBQVNGO0FBUEE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQWtCLGlCQUFBO0VBQ2xCLGtCQUFBO0FBV0Y7QUFUQTtFQUNFLFdBQUE7QUFZRjtBQVZBO0VBQ0UsaUJBQUE7QUFhRjtBQVhBO0VBQ0UsbUdBQUE7RUFDQSxxRUFBQTtFQUNBLFlBQUE7RUFBYyxXQUFBO0VBQWEsY0FBQTtFQUFnQixTQUFBO0VBQVcsVUFBQTtFQUFZLGdCQUFBO0VBQ2xFLG9DQUFBO0FBbUJGO0FBakJBO0VBQ0UscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFGQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQW9CRjtBQWxCQSw4RUFBQTtBQUNBO0VBQ0U7SUFDRSxtR0FBQTtJQUNBLHFFQUFBO0lBQ0EsWUFBQTtJQUFjLFdBQUE7SUFBYSxjQUFBO0lBQWdCLFNBQUE7SUFBVyxVQUFBO0lBQVksZ0JBQUE7SUFDbEUsb0NBQUE7RUEwQkY7O0VBeEJBO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFQTJCRjs7RUF6QkE7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0lBQWtCLGlCQUFBO0lBRWxCLHVEQUFBO0VBNEJGOztFQTFCQTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7SUFBa0IsaUJBQUE7SUFFbEIsdURBQUE7RUE2QkY7O0VBM0JBO0lBQ0UsY0FBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsdURBQUE7RUE4QkY7O0VBNUJBO0lBQ0UsY0FBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VBK0JGOztFQTVCQTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7SUFBa0IsaUJBQUE7SUFDbEIsdURBQUE7RUFnQ0Y7O0VBOUJBO0lBQ0UsaUJBQUE7RUFpQ0Y7O0VBL0JBO0lBQ0UsbUJBQUE7RUFrQ0Y7O0VBaENFO0lBQ0UsaUJBQUE7SUFDQSxpQkFBQTtJQUFrQixpQkFBQTtFQW9DdEI7QUFDRiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIDpyb290IHtcclxuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XHJcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xyXG4gIH1cclxuXHJcbiAvKiAqe2ZvbnQtZmFtaWx5OiAnYXJpYWwnO30qL1xyXG5cclxuICAuYXZhdGFye2JvcmRlci1yYWRpdXM6IDUwJTsgd2lkdGg6IDE1MHB4OyBoZWlnaHQ6IDE1MHB4OyBtYXJnaW4tdG9wOjEwcHg7fVxyXG5cclxuICAvKiBET0VTIE5PVCBXT1JLIC0gbm90IHNwZWNpZmljIGVub3VnaCAqL1xyXG4uYWxlcnQtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogIzY3NDJlMGQ1O1xyXG59XHJcblxyXG4vKiBXb3JrcyAtIHBhc3MgXCJteS1jdXN0b20tY2xhc3NcIiBpbiBjc3NDbGFzcyB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSAqL1xyXG4ubXktY3VzdG9tLWNsYXNzIC5hbGVydC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNjc0MmUwZDU7XHJcbn1cclxuLmlvbi1jYXJkLWNvbnRlbnQtY2xhc3N7XHJcbnRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFxyXG4uY2FydEljb250eHR7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OjFweDsgXHJcbiAgd2lkdGg6MjdweDtcclxuICBtYXgtd2lkdGg6MjdweDtcclxuICBoZWlnaHQ6MjBweDtcclxuICBjb2xvcjojZmZmZmZmO1xyXG4gIFxyXG59XHJcbi5jYXJ0SWNvbntcclxuICBcclxuICBwYWRkaW5nLXJpZ2h0OjFweDsgXHJcbiAgd2lkdGg6MjdweDtcclxuICBtYXgtd2lkdGg6MjdweDtcclxuICBoZWlnaHQ6MjBweDtcclxuICBjb2xvcjojZTk1ODE2O1xyXG59XHJcbi5maWx0ZXJJY29ue1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDoxcHg7IFxyXG4gIHdpZHRoOjI1cHg7XHJcbiAgbWF4LXdpZHRoOjI1cHg7XHJcbiAgaGVpZ2h0OjIwcHg7XHJcbiAgY29sb3I6I2U5NTgxNjtcclxufVxyXG4uc2VhcmNoQmFye1xyXG4gIG1heC13aWR0aDoyNjVweDtcclxuICB3aWR0aDozMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1JTtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxufVxyXG4uY2F0QmFye1xyXG4gIHdpZHRoOjMwMHB4O1xyXG4gIG1heC13aWR0aDozMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1JTtcclxuICBib3JkZXItd2lkdGg6IDBweDtcclxufVxyXG4uY2F0QmFyU2VsZWN0e1xyXG4gIGNvbG9yOiNlOTU4MTY7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcblxyXG4gIC8qIFNpIHRhbWJpw6luIHF1aWVyZXMgYWp1c3RhciBlbCBwYWRkaW5nIGEgbGEgZGVyZWNoYSAqL1xyXG59XHJcbi5jYXRCYXJTZWxlY3RPcHRpb257XHJcbiAgY29sb3I6I2U5NTgxNjsgIFxyXG4gIGJvcmRlci13aWR0aDogMHB4O1xyXG4gIG1heC13aWR0aDozMDBweDtcclxuICB3aWR0aDozMDBweDtcclxufVxyXG4uZmlsdGVyUm93e1xyXG4gIG1hcmdpbi1sZWZ0OjFweDsgIFxyXG59XHJcbi50YWIxSW9uQ2FyZHtcclxuICBtYXgtd2lkdGg6MzAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNSU7Ym9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50YWIxSW1nSW9uQ2FyZHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4udGFiMUlvbkJ1dHRvbntcclxuICBib3JkZXItcmFkaXVzOiA1JTtcclxufVxyXG4uc2xpZGVzLWN1c3RvbSB7XHJcbiAgLyogQWdyZWdhIGVzdGlsb3MgcGVyc29uYWxpemFkb3MgYXF1w60gcGFyYSBzb2JyZXNjcmliaXIgbG9zIGVzdGlsb3MgcHJlZGV0ZXJtaW5hZG9zIGRlIGlvbi1zbGlkZXMgKi9cclxuICAvKiBQb3IgZWplbXBsbywgcGFyYSBxdWl0YXIgZWwgbWFyZ2VuIHkgZWwgcmVsbGVubyBwcmVkZXRlcm1pbmFkb3M6ICovXHJcbiAgaGVpZ2h0OiBhdXRvOyB3aWR0aDogYXV0bzsgZGlzcGxheTogYmxvY2s7IG1hcmdpbjogMDsgcGFkZGluZzogMDsgcG9zaXRpb246IHN0YXRpYztcclxuICAvKiBPdHJvcyBlc3RpbG9zIHBlcnNvbmFsaXphZG9zLi4uICovXHJcbn1cclxuaW9uLWZhYi1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6ICNlOTU4MTY7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgLS1ib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAtLWNvbG9yOiAjZTk1ODE2O1xyXG4gIHdpZHRoOjMwcHg7XHJcbiAgaGVpZ2h0OjMwcHg7XHJcbn1cclxuLyogQWp1c3RlIGRlIHBhZGRpbmcgc29sbyBwYXJhIHBhbnRhbGxhcyBtw6FzIGdyYW5kZXMgKG1heW9yZXMgYSA3NjggcMOteGVsZXMpICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XHJcbiAgLnNsaWRlcy1jdXN0b20ge1xyXG4gICAgLyogQWdyZWdhIGVzdGlsb3MgcGVyc29uYWxpemFkb3MgYXF1w60gcGFyYSBzb2JyZXNjcmliaXIgbG9zIGVzdGlsb3MgcHJlZGV0ZXJtaW5hZG9zIGRlIGlvbi1zbGlkZXMgKi9cclxuICAgIC8qIFBvciBlamVtcGxvLCBwYXJhIHF1aXRhciBlbCBtYXJnZW4geSBlbCByZWxsZW5vIHByZWRldGVybWluYWRvczogKi9cclxuICAgIGhlaWdodDogYXV0bzsgd2lkdGg6IGF1dG87IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7IHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAvKiBPdHJvcyBlc3RpbG9zIHBlcnNvbmFsaXphZG9zLi4uICovXHJcbiAgfVxyXG4gIC5maWx0ZXJJY29ue1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6NXB4OyBcclxuICAgIHdpZHRoOjMwcHg7XHJcbiAgICBoZWlnaHQ6MjBweDtcclxuICAgIGNvbG9yOiNlOTU4MTY7ICAgICAgIFxyXG4gIH1cclxuICAuc2VhcmNoQmFyIHtcclxuICAgIG1heC13aWR0aDozMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO2JvcmRlci13aWR0aDogMXB4O1xyXG5cclxuICAgIC8qIFNpIHRhbWJpw6luIHF1aWVyZXMgYWp1c3RhciBlbCBwYWRkaW5nIGEgbGEgZGVyZWNoYSAqL1xyXG4gIH1cclxuICAuY2F0QmFyIHtcclxuICAgIG1heC13aWR0aDozMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO2JvcmRlci13aWR0aDogMXB4O1xyXG5cclxuICAgIC8qIFNpIHRhbWJpw6luIHF1aWVyZXMgYWp1c3RhciBlbCBwYWRkaW5nIGEgbGEgZGVyZWNoYSAqL1xyXG4gIH1cclxuICAuY2F0QmFyU2VsZWN0e1xyXG4gICAgY29sb3I6I2U5NTgxNjtcclxuICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgd2lkdGg6MjAwcHg7XHJcbiAgICBtYXgtd2lkdGg6MjAwcHg7XHJcbiAgICAvKiBTaSB0YW1iacOpbiBxdWllcmVzIGFqdXN0YXIgZWwgcGFkZGluZyBhIGxhIGRlcmVjaGEgKi9cclxuICB9XHJcbiAgLmNhdEJhclNlbGVjdE9wdGlvbntcclxuICAgIGNvbG9yOiNlOTU4MTY7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgbWF4LXdpZHRoOjIwMHB4O1xyXG4gIH1cclxuXHJcbiAgLnRhYjFJb25DYXJkIHtcclxuICAgIG1heC13aWR0aDozMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO2JvcmRlci13aWR0aDogMXB4O1xyXG4gICAgLyogU2kgdGFtYmnDqW4gcXVpZXJlcyBhanVzdGFyIGVsIHBhZGRpbmcgYSBsYSBkZXJlY2hhICovXHJcbiAgfVxyXG4gIC50YWIxSW9uQnV0dG9ue1xyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgfVxyXG4gIC5pb24tY2FyZC1jb250ZW50LWNsYXNzeyAgICBcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7ICAgIFxyXG4gICAgfVxyXG4gICAgLmZpbHRlclJvd3tcclxuICAgICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNSU7Ym9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgIFxyXG4gICAgfVxyXG59XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vU0VBUkNIQkFSXHJcblxyXG5cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-content>  \r\n  \r\n  <ion-grid>\r\n    <ion-row style=\"text-align: center;\">\r\n      <ion-col (click)=\"modalCheckout()\" >\r\n        <ion-badge  color=\"danger\" class=\"cartIcontxt\">\r\n          {{totalCantidades}}\r\n        </ion-badge>\r\n        <ion-icon   name=\"cart-sharp\" class=\"cartIcon\"></ion-icon>\r\n       <!-- <ion-badge *ngIf=\"verCarro && totalCantidades !== 0; else recalculaTotal\" color=\"danger\" class=\"cartIcontxt\">\r\n          {{totalCantidades}}\r\n        </ion-badge>  \r\n        <ng-template #recalculaTotal>\r\n          {{ recalcularTotalCantidades() }}\r\n        </ng-template>     \r\n        <ion-icon  *ngIf=\"verCarro\" name=\"cart-sharp\" class=\"cartIcon\"></ion-icon>--> \r\n      </ion-col>\r\n      <ion-col style=\"text-align: left;\">\r\n        <ion-searchbar [debounce]=\"500\" class=\"searchBar\" showCancelButton=\"focus\"  (ionInput)=\"buscarProductos($event)\"></ion-searchbar>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-icon class=\"filterIcon\" (click)=\"showFilter()\" name=\"filter-sharp\" ></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"showFilters\" class=\"filterRow\">\r\n      <ion-col ></ion-col>\r\n      <ion-col> \r\n            <ion-select  class=\"catBarSelect\"\r\n            aria-label=\"Categorias\"\r\n            placeholder=\"Elegir Categorias\"\r\n            (ionChange)=\"handleChange($event)\"\r\n            [multiple]=\"true\">\r\n              <ion-select-option class=\"catBarSelectOption\" *ngFor=\"let cat of categorias\" [value]=\"cat.idCategoria\">\r\n                {{ cat.nombreCategoria }}\r\n              </ion-select-option>\r\n            </ion-select>\r\n      </ion-col>\r\n      <ion-col></ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row  *ngIf=\"!searchText && !noVerPorCat\" style=\"text-align: center;\">\r\n      <ion-col></ion-col>\r\n      <ion-col>\r\n        <ion-label><h1 style=\"text-align: left;margin-left:20px;\">Ofertas</h1></ion-label>\r\n          <ion-card class=\"tab1IonCard\">               \r\n              <ion-slides pager=\"true\" loop=\"true\" class=\"slides-custom\"  [options]=\"{  slidesPerView:1, autoplay: {delay: 2500} }\" style=\"max-height:250px;\">\r\n                <ion-slide  style=\"max-height:245px;\" *ngFor=\"let consulta of productosOfertas\">        \r\n                  <ion-img style=\"max-height:240px;\" (click)=\"modalMasInfo(consulta.idProducto,consulta.nombreProducto,consulta.descripcionProducto,consulta.fotoProducto,\r\n                  consulta.precioProducto);\"\r\n                  src=\"{{urlRoot}}/images/{{consulta.fotoProducto}}\"></ion-img>                \r\n                </ion-slide>\r\n              </ion-slides>            \r\n          </ion-card>\r\n        \r\n      </ion-col>\r\n      <ion-col></ion-col>\r\n    </ion-row>    \r\n\r\n    <ion-row  >\r\n      <ion-col></ion-col>\r\n      <ion-col>        \r\n        <ion-list>           \r\n          <ion-card  *ngFor=\"let consulta of productos\" class=\"tab1IonCard\" >\r\n            <ion-card-header>        \r\n              <ion-img src=\"{{urlRoot}}/images/{{consulta.fotoProducto}}\"\r\n              (click)=\"modalMasInfo(consulta.idProducto,consulta.nombreProducto,consulta.descripcionProducto,consulta.fotoProducto,\r\n                      consulta.precioProducto);\">                     \r\n              </ion-img>              \r\n              \r\n            </ion-card-header>\r\n            <ion-card-header>\r\n              <ion-card-title color=\"primary\"\r\n              (click)=\"modalMasInfo(consulta.idProducto,consulta.nombreProducto,consulta.descripcionProducto,consulta.fotoProducto,\r\n              consulta.precioProducto);\">\r\n                {{consulta.nombreProducto | slice:0:23}}\r\n              </ion-card-title>\r\n              <ion-card-subtitle\r\n              (click)=\"modalMasInfo(consulta.idProducto,consulta.nombreProducto,consulta.descripcionProducto,consulta.fotoProducto,\r\n              consulta.precioProducto);\">{{consulta.descripcionProducto | slice:0:70}}... &nbsp;\r\n              </ion-card-subtitle>              \r\n              <ion-card-title color=\"primary\"\r\n              (click)=\"modalMasInfo(consulta.idProducto,consulta.nombreProducto,consulta.descripcionProducto,consulta.fotoProducto,\r\n              consulta.precioProducto);\"> $ {{consulta.precioProducto}}</ion-card-title>\r\n              <ion-card-title (click)=\"modalMasInfo(consulta.idProducto,consulta.nombreProducto,consulta.descripcionProducto,consulta.fotoProducto,\r\n              consulta.precioProducto);\">\r\n                <ion-icon name=\"eye-sharp\" style=\"font-size: 20px;color:#e95816;\"></ion-icon>\r\n              </ion-card-title>                    \r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-row>\r\n                <ion-col (click)=\"decrementar(consulta.idProducto)\">\r\n                  <ion-icon name=\"remove-circle-outline\" style=\"font-size:24px;\"></ion-icon>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-label>{{ cantidadesPorProducto[consulta.idProducto] || 1 }}</ion-label>\r\n                </ion-col>\r\n                <ion-col (click)=\"incrementar(consulta.idProducto)\">                  \r\n                  <ion-icon name=\"add-circle-outline\" style=\"font-size:24px;\"></ion-icon>\r\n                </ion-col>\r\n              </ion-row>            \r\n            </ion-card-content>\r\n              <ion-card-content>\r\n              <ion-button fill=\"outline\" class=\"tab1IonButton\"\r\n              (click)=\"add(consulta.idProducto,consulta.nombreProducto,consulta.fotoProducto,consulta.precioProducto)\">Añadir al carrito</ion-button>\r\n              </ion-card-content> \r\n          </ion-card>   \r\n        </ion-list>\r\n        <ion-infinite-scroll (ionInfinite)=\"onIonInfinite($event)\" *ngIf=\"!noVerPorCat\">\r\n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n        </ion-infinite-scroll>\r\n      </ion-col>\r\n      <ion-col></ion-col>\r\n    </ion-row>\r\n  </ion-grid> \r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map