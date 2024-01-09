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
        //this.inicia.verificar();
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
            //const user= await this.inicia.getUser();
            //const url_proyecto = user[0].url_proyecto
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
                    url_proyecto: this.urlRoot
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
            //const user= await this.inicia.getUser();
            //const url_proyecto = user[0].url_proyecto
            const modal = yield this.modalCtrl.create({
                component: _modals_checkout_checkout_page__WEBPACK_IMPORTED_MODULE_5__.CheckoutPage,
                //breakpoints: [0, 0.99],
                //initialBreakpoint: 0.99,
                //handle: true,
                componentProps: {
                    url_proyecto: this.urlRoot,
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

module.exports = "@charset \"UTF-8\";\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n/* *{font-family: 'arial';}*/\n.avatar {\n  border-radius: 50%;\n  width: 150px;\n  height: 150px;\n  margin-top: 10px;\n}\n/* DOES NOT WORK - not specific enough */\n.alert-wrapper {\n  background: #6742e0d5;\n}\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n.my-custom-class .alert-wrapper {\n  background: #6742e0d5;\n}\n.ion-card-content-class {\n  text-align: justify;\n}\n.cartIcontxt {\n  margin-top: 10px;\n  padding-right: 1px;\n  width: 27px;\n  max-width: 27px;\n  height: 20px;\n  color: #ffffff;\n}\n.cartIcon {\n  padding-right: 1px;\n  width: 27px;\n  max-width: 27px;\n  height: 20px;\n  color: #115c2b;\n}\n.filterIcon {\n  margin-top: 20px;\n  padding-right: 1px;\n  width: 25px;\n  max-width: 25px;\n  height: 20px;\n  color: #115c2b;\n}\n.searchBar {\n  max-width: 265px;\n  width: 290px;\n  border-radius: 5%;\n  border-width: 1px;\n}\n.catBar {\n  max-width: 300px;\n  border-radius: 5%;\n  border-width: 0px;\n}\n.catBarSelect {\n  color: #115c2b;\n  border-width: 0px;\n  /* Si también quieres ajustar el padding a la derecha */\n}\n.catBarSelectOption {\n  color: #115c2b;\n  border-width: 0px;\n  max-width: 300px;\n}\n.filterRow {\n  margin-left: 1px;\n}\n.tab1IonCard {\n  border-radius: 5%;\n  border-width: 1px;\n  text-align: center;\n}\n.tab1IonButton {\n  border-radius: 5%;\n}\n.slides-custom {\n  /* Agrega estilos personalizados aquí para sobrescribir los estilos predeterminados de ion-slides */\n  /* Por ejemplo, para quitar el margen y el relleno predeterminados: */\n  /* Otros estilos personalizados... */\n}\nion-fab-button {\n  --background: #ffffff;\n  --background-activated: transparent;\n  --background-hover: #115c2b;\n  --border-radius: 10px;\n  --border-width: 0px;\n  --box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.3), 0px 0px 0px 0px rgba(0, 0, 0, 0.15);\n  --color: #115c2b;\n  width: 30px;\n  height: 30px;\n}\n/* Ajuste de padding solo para pantallas más grandes (mayores a 768 píxeles) */\n@media screen and (min-width: 769px) {\n  .slides-custom {\n    /* Agrega estilos personalizados aquí para sobrescribir los estilos predeterminados de ion-slides */\n    /* Por ejemplo, para quitar el margen y el relleno predeterminados: */\n    height: auto;\n    width: auto;\n    display: block;\n    margin: 0;\n    padding: 0;\n    position: static;\n    /* Otros estilos personalizados... */\n  }\n\n  .filterIcon {\n    margin-top: 20px;\n    padding-right: 5px;\n    width: 30px;\n    height: 20px;\n    color: #115c2b;\n  }\n\n  .searchBar {\n    max-width: 300px;\n    border-radius: 5%;\n    border-width: 1px;\n    /* Si también quieres ajustar el padding a la derecha */\n  }\n\n  .catBar {\n    max-width: 300px;\n    border-radius: 5%;\n    border-width: 1px;\n    /* Si también quieres ajustar el padding a la derecha */\n  }\n\n  .catBarSelect {\n    color: #115c2b;\n    border-width: 0px;\n    width: 200px;\n    max-width: 200px;\n    /* Si también quieres ajustar el padding a la derecha */\n  }\n\n  .catBarSelectOption {\n    color: #115c2b;\n    border-width: 0px;\n    width: 200px;\n    max-width: 200px;\n  }\n\n  .tab1IonCard {\n    max-width: 300px;\n    border-radius: 5%;\n    border-width: 1px;\n    /* Si también quieres ajustar el padding a la derecha */\n  }\n\n  .tab1IonButton {\n    border-radius: 5%;\n  }\n\n  .ion-card-content-class {\n    text-align: justify;\n  }\n\n  .filterRow {\n    margin-left: 15px;\n    border-radius: 5%;\n    border-width: 1px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNkO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQUNKO0FBRUMsNEJBQUE7QUFFQztFQUFRLGtCQUFBO0VBQW9CLFlBQUE7RUFBYyxhQUFBO0VBQWUsZ0JBQUE7QUFJM0Q7QUFGRSx3Q0FBQTtBQUNGO0VBQ0UscUJBQUE7QUFLRjtBQUZBLHVFQUFBO0FBQ0E7RUFDRSxxQkFBQTtBQUtGO0FBSEE7RUFDQSxtQkFBQTtBQU1BO0FBRkE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUtGO0FBRkE7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFJRjtBQUZBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFLRjtBQUhBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQU1GO0FBSkE7RUFFRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFNRjtBQUpBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBRUEsdURBQUE7QUFNRjtBQUpBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFPRjtBQUpBO0VBQ0UsZ0JBQUE7QUFPRjtBQUxBO0VBRUUsaUJBQUE7RUFBa0IsaUJBQUE7RUFDbEIsa0JBQUE7QUFRRjtBQUhBO0VBQ0UsaUJBQUE7QUFNRjtBQUpBO0VBQ0UsbUdBQUE7RUFDQSxxRUFBQTtFQUVBLG9DQUFBO0FBTUY7QUFKQTtFQUNFLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxRkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFPRjtBQUxBLDhFQUFBO0FBQ0E7RUFDRTtJQUNFLG1HQUFBO0lBQ0EscUVBQUE7SUFDQSxZQUFBO0lBQWMsV0FBQTtJQUFhLGNBQUE7SUFBZ0IsU0FBQTtJQUFXLFVBQUE7SUFBWSxnQkFBQTtJQUNsRSxvQ0FBQTtFQWFGOztFQVhBO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFQWNGOztFQVpBO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtJQUFrQixpQkFBQTtJQUVsQix1REFBQTtFQWVGOztFQWJBO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtJQUFrQixpQkFBQTtJQUVsQix1REFBQTtFQWdCRjs7RUFkQTtJQUNFLGNBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLHVEQUFBO0VBaUJGOztFQWZBO0lBQ0UsY0FBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VBa0JGOztFQWZBO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtJQUFrQixpQkFBQTtJQUNsQix1REFBQTtFQW1CRjs7RUFqQkE7SUFDRSxpQkFBQTtFQW9CRjs7RUFsQkE7SUFDRSxtQkFBQTtFQXFCRjs7RUFuQkU7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0lBQWtCLGlCQUFBO0VBdUJ0QjtBQUNGIiwiZmlsZSI6InRhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgOnJvb3Qge1xyXG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcclxuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XHJcbiAgfVxyXG5cclxuIC8qICp7Zm9udC1mYW1pbHk6ICdhcmlhbCc7fSovXHJcblxyXG4gIC5hdmF0YXJ7Ym9yZGVyLXJhZGl1czogNTAlOyB3aWR0aDogMTUwcHg7IGhlaWdodDogMTUwcHg7IG1hcmdpbi10b3A6MTBweDt9XHJcblxyXG4gIC8qIERPRVMgTk9UIFdPUksgLSBub3Qgc3BlY2lmaWMgZW5vdWdoICovXHJcbi5hbGVydC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNjc0MmUwZDU7XHJcbn1cclxuXHJcbi8qIFdvcmtzIC0gcGFzcyBcIm15LWN1c3RvbS1jbGFzc1wiIGluIGNzc0NsYXNzIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5ICovXHJcbi5teS1jdXN0b20tY2xhc3MgLmFsZXJ0LXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6ICM2NzQyZTBkNTtcclxufVxyXG4uaW9uLWNhcmQtY29udGVudC1jbGFzc3tcclxudGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gXHJcbi5jYXJ0SWNvbnR4dHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6MXB4OyBcclxuICB3aWR0aDoyN3B4O1xyXG4gIG1heC13aWR0aDoyN3B4O1xyXG4gIGhlaWdodDoyMHB4O1xyXG4gIGNvbG9yOiNmZmZmZmY7XHJcbiAgXHJcbn1cclxuLmNhcnRJY29ue1xyXG4gIFxyXG4gIHBhZGRpbmctcmlnaHQ6MXB4OyBcclxuICB3aWR0aDoyN3B4O1xyXG4gIG1heC13aWR0aDoyN3B4O1xyXG4gIGhlaWdodDoyMHB4O1xyXG4gIGNvbG9yOiMxMTVjMmI7XHJcbn1cclxuLmZpbHRlckljb257XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OjFweDsgXHJcbiAgd2lkdGg6MjVweDtcclxuICBtYXgtd2lkdGg6MjVweDtcclxuICBoZWlnaHQ6MjBweDtcclxuICBjb2xvcjojMTE1YzJiO1xyXG59XHJcbi5zZWFyY2hCYXJ7XHJcbiAgbWF4LXdpZHRoOjI2NXB4O1xyXG4gIHdpZHRoOjI5MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG59XHJcbi5jYXRCYXJ7XHJcbiAvL3dpZHRoOjMwMHB4O1xyXG4gIG1heC13aWR0aDozMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1JTtcclxuICBib3JkZXItd2lkdGg6IDBweDtcclxufVxyXG4uY2F0QmFyU2VsZWN0e1xyXG4gIGNvbG9yOiMxMTVjMmI7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcblxyXG4gIC8qIFNpIHRhbWJpw6luIHF1aWVyZXMgYWp1c3RhciBlbCBwYWRkaW5nIGEgbGEgZGVyZWNoYSAqL1xyXG59XHJcbi5jYXRCYXJTZWxlY3RPcHRpb257XHJcbiAgY29sb3I6IzExNWMyYjsgIFxyXG4gIGJvcmRlci13aWR0aDogMHB4O1xyXG4gIG1heC13aWR0aDozMDBweDtcclxuIC8vIHdpZHRoOjMwMHB4O1xyXG59XHJcbi5maWx0ZXJSb3d7XHJcbiAgbWFyZ2luLWxlZnQ6MXB4OyAgXHJcbn1cclxuLnRhYjFJb25DYXJke1xyXG4gIC8vbWF4LXdpZHRoOjMwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUlO2JvcmRlci13aWR0aDogMXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGFiMUltZ0lvbkNhcmR7XHJcbiAgLy93aWR0aDogMTAwJTtcclxufVxyXG4udGFiMUlvbkJ1dHRvbntcclxuICBib3JkZXItcmFkaXVzOiA1JTtcclxufVxyXG4uc2xpZGVzLWN1c3RvbSB7XHJcbiAgLyogQWdyZWdhIGVzdGlsb3MgcGVyc29uYWxpemFkb3MgYXF1w60gcGFyYSBzb2JyZXNjcmliaXIgbG9zIGVzdGlsb3MgcHJlZGV0ZXJtaW5hZG9zIGRlIGlvbi1zbGlkZXMgKi9cclxuICAvKiBQb3IgZWplbXBsbywgcGFyYSBxdWl0YXIgZWwgbWFyZ2VuIHkgZWwgcmVsbGVubyBwcmVkZXRlcm1pbmFkb3M6ICovXHJcbiAvLyBoZWlnaHQ6IGF1dG87IHdpZHRoOiBhdXRvOyBkaXNwbGF5OiBibG9jazsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyBwb3NpdGlvbjogc3RhdGljO1xyXG4gIC8qIE90cm9zIGVzdGlsb3MgcGVyc29uYWxpemFkb3MuLi4gKi9cclxufVxyXG5pb24tZmFiLWJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzExNWMyYjtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcclxuICAtLWJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIC0tY29sb3I6ICMxMTVjMmI7XHJcbiAgd2lkdGg6MzBweDtcclxuICBoZWlnaHQ6MzBweDtcclxufVxyXG4vKiBBanVzdGUgZGUgcGFkZGluZyBzb2xvIHBhcmEgcGFudGFsbGFzIG3DoXMgZ3JhbmRlcyAobWF5b3JlcyBhIDc2OCBww614ZWxlcykgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcclxuICAuc2xpZGVzLWN1c3RvbSB7XHJcbiAgICAvKiBBZ3JlZ2EgZXN0aWxvcyBwZXJzb25hbGl6YWRvcyBhcXXDrSBwYXJhIHNvYnJlc2NyaWJpciBsb3MgZXN0aWxvcyBwcmVkZXRlcm1pbmFkb3MgZGUgaW9uLXNsaWRlcyAqL1xyXG4gICAgLyogUG9yIGVqZW1wbG8sIHBhcmEgcXVpdGFyIGVsIG1hcmdlbiB5IGVsIHJlbGxlbm8gcHJlZGV0ZXJtaW5hZG9zOiAqL1xyXG4gICAgaGVpZ2h0OiBhdXRvOyB3aWR0aDogYXV0bzsgZGlzcGxheTogYmxvY2s7IG1hcmdpbjogMDsgcGFkZGluZzogMDsgcG9zaXRpb246IHN0YXRpYztcclxuICAgIC8qIE90cm9zIGVzdGlsb3MgcGVyc29uYWxpemFkb3MuLi4gKi9cclxuICB9XHJcbiAgLmZpbHRlckljb257XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDo1cHg7IFxyXG4gICAgd2lkdGg6MzBweDtcclxuICAgIGhlaWdodDoyMHB4O1xyXG4gICAgY29sb3I6IzExNWMyYjsgICAgICAgXHJcbiAgfVxyXG4gIC5zZWFyY2hCYXIge1xyXG4gICAgbWF4LXdpZHRoOjMwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7Ym9yZGVyLXdpZHRoOiAxcHg7XHJcblxyXG4gICAgLyogU2kgdGFtYmnDqW4gcXVpZXJlcyBhanVzdGFyIGVsIHBhZGRpbmcgYSBsYSBkZXJlY2hhICovXHJcbiAgfVxyXG4gIC5jYXRCYXIge1xyXG4gICAgbWF4LXdpZHRoOjMwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7Ym9yZGVyLXdpZHRoOiAxcHg7XHJcblxyXG4gICAgLyogU2kgdGFtYmnDqW4gcXVpZXJlcyBhanVzdGFyIGVsIHBhZGRpbmcgYSBsYSBkZXJlY2hhICovXHJcbiAgfVxyXG4gIC5jYXRCYXJTZWxlY3R7XHJcbiAgICBjb2xvcjojMTE1YzJiO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICB3aWR0aDoyMDBweDtcclxuICAgIG1heC13aWR0aDoyMDBweDtcclxuICAgIC8qIFNpIHRhbWJpw6luIHF1aWVyZXMgYWp1c3RhciBlbCBwYWRkaW5nIGEgbGEgZGVyZWNoYSAqL1xyXG4gIH1cclxuICAuY2F0QmFyU2VsZWN0T3B0aW9ue1xyXG4gICAgY29sb3I6IzExNWMyYjtcclxuICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgd2lkdGg6MjAwcHg7XHJcbiAgICBtYXgtd2lkdGg6MjAwcHg7XHJcbiAgfVxyXG5cclxuICAudGFiMUlvbkNhcmQge1xyXG4gICAgbWF4LXdpZHRoOjMwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7Ym9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAvKiBTaSB0YW1iacOpbiBxdWllcmVzIGFqdXN0YXIgZWwgcGFkZGluZyBhIGxhIGRlcmVjaGEgKi9cclxuICB9XHJcbiAgLnRhYjFJb25CdXR0b257XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuICB9XHJcbiAgLmlvbi1jYXJkLWNvbnRlbnQtY2xhc3N7ICAgIFxyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTsgICAgXHJcbiAgICB9XHJcbiAgICAuZmlsdGVyUm93e1xyXG4gICAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1JTtib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgXHJcbiAgICB9XHJcbn1cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9TRUFSQ0hCQVJcclxuXHJcblxyXG5cclxuIl19 */";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-content>  \r\n  \r\n  <ion-grid>\r\n    <ion-row style=\"text-align: center;\">\r\n      <ion-col (click)=\"modalCheckout()\" >\r\n        <ion-badge  color=\"danger\" class=\"cartIcontxt\">\r\n          {{totalCantidades}}\r\n        </ion-badge>\r\n        <ion-icon   name=\"cart-sharp\" class=\"cartIcon\"></ion-icon>\r\n       \r\n      </ion-col>\r\n      <ion-col style=\"text-align: left;\">\r\n        <ion-searchbar [debounce]=\"500\" class=\"searchBar\" showCancelButton=\"focus\"  (ionInput)=\"buscarProductos($event)\"></ion-searchbar>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-icon class=\"filterIcon\" (click)=\"showFilter()\" name=\"filter-sharp\" ></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"showFilters\" class=\"filterRow\">\r\n      <ion-col ></ion-col>\r\n      <ion-col> \r\n            <ion-select  class=\"catBarSelect\"\r\n            aria-label=\"Categorias\"\r\n            placeholder=\"Elegir Categorias\"\r\n            (ionChange)=\"handleChange($event)\"\r\n            [multiple]=\"true\">\r\n              <ion-select-option class=\"catBarSelectOption\" *ngFor=\"let cat of categorias\" [value]=\"cat.idCategoria\">\r\n                {{ cat.nombreCategoria }}\r\n              </ion-select-option>\r\n            </ion-select>\r\n      </ion-col>\r\n      <ion-col></ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row  *ngIf=\"!searchText && !noVerPorCat\" style=\"text-align: center;\">\r\n      <ion-col></ion-col>\r\n      <ion-col>\r\n        <ion-label><h1 style=\"text-align: left;margin-left:20px;\">Ofertas</h1></ion-label>\r\n          <ion-card class=\"tab1IonCard\">               \r\n              <ion-slides pager=\"true\" loop=\"true\" class=\"slides-custom\"  [options]=\"{  slidesPerView:1, autoplay: {delay: 2500} }\" style=\"max-height:250px;\">\r\n                <ion-slide  style=\"max-height:245px;\" *ngFor=\"let consulta of productosOfertas\">        \r\n                  <ion-img style=\"max-height:240px;\" (click)=\"modalMasInfo(consulta.idProducto,consulta.nombreProducto,consulta.descripcionProducto,consulta.fotoProducto,\r\n                  consulta.precioProducto);\"\r\n                  src=\"{{urlRoot}}/images/{{consulta.fotoProducto}}\"></ion-img>                \r\n                </ion-slide>\r\n              </ion-slides>            \r\n          </ion-card>\r\n        \r\n      </ion-col>\r\n      <ion-col></ion-col>\r\n    </ion-row>    \r\n\r\n    <ion-row  >\r\n      <ion-col></ion-col>\r\n      <ion-col>        \r\n        <ion-list>           \r\n          <ion-card  *ngFor=\"let consulta of productos\" class=\"tab1IonCard\" >\r\n            <ion-card-header>        \r\n              <ion-img src=\"{{urlRoot}}/images/{{consulta.fotoProducto}}\"\r\n              (click)=\"modalMasInfo(consulta.idProducto,consulta.nombreProducto,consulta.descripcionProducto,consulta.fotoProducto,\r\n                      consulta.precioProducto);\">                     \r\n              </ion-img>              \r\n              \r\n            </ion-card-header>\r\n            <ion-card-header>\r\n              <ion-card-title color=\"primary\"\r\n              (click)=\"modalMasInfo(consulta.idProducto,consulta.nombreProducto,consulta.descripcionProducto,consulta.fotoProducto,\r\n              consulta.precioProducto);\">\r\n                {{consulta.nombreProducto | slice:0:23}}\r\n              </ion-card-title>\r\n              <ion-card-subtitle\r\n              (click)=\"modalMasInfo(consulta.idProducto,consulta.nombreProducto,consulta.descripcionProducto,consulta.fotoProducto,\r\n              consulta.precioProducto);\">{{consulta.descripcionProducto | slice:0:70}}... &nbsp;\r\n              </ion-card-subtitle>              \r\n              <ion-card-title color=\"primary\"\r\n              (click)=\"modalMasInfo(consulta.idProducto,consulta.nombreProducto,consulta.descripcionProducto,consulta.fotoProducto,\r\n              consulta.precioProducto);\"> $ {{consulta.precioProducto}}</ion-card-title>\r\n              <ion-card-title (click)=\"modalMasInfo(consulta.idProducto,consulta.nombreProducto,consulta.descripcionProducto,consulta.fotoProducto,\r\n              consulta.precioProducto);\">\r\n                <ion-icon name=\"eye-sharp\" style=\"font-size: 20px;color:#115c2b;\"></ion-icon>\r\n              </ion-card-title>                    \r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-row style=\"display: none;\">\r\n                <ion-col (click)=\"decrementar(consulta.idProducto)\">\r\n                  <ion-icon name=\"remove-circle-outline\" style=\"font-size:24px;\"></ion-icon>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-label>{{ cantidadesPorProducto[consulta.idProducto] || 1 }}</ion-label>\r\n                </ion-col>\r\n                <ion-col (click)=\"incrementar(consulta.idProducto)\">                  \r\n                  <ion-icon name=\"add-circle-outline\" style=\"font-size:24px;\"></ion-icon>\r\n                </ion-col>\r\n              </ion-row>            \r\n            </ion-card-content>\r\n              <ion-card-content>\r\n              <ion-button fill=\"outline\" class=\"tab1IonButton\"\r\n              (click)=\"add(consulta.idProducto,consulta.nombreProducto,consulta.fotoProducto,consulta.precioProducto)\">Añadir al carrito</ion-button>\r\n              </ion-card-content> \r\n          </ion-card>   \r\n        </ion-list>\r\n        <ion-infinite-scroll (ionInfinite)=\"onIonInfinite($event)\" *ngIf=\"!noVerPorCat\">\r\n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n        </ion-infinite-scroll>\r\n      </ion-col>\r\n      <ion-col></ion-col>\r\n    </ion-row>\r\n  </ion-grid> \r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map