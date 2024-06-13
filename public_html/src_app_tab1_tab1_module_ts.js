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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 8165);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _iniciarusuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../iniciarusuario.service */ 7574);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _modals_masinfo_masinfo_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/masinfo/masinfo.page */ 3339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/config */ 9698);















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
        this.mostrarBusqueda = false; // Declara la propiedad aquí
        this.photos = [
            'https://zonazero.nyc3.cdn.digitaloceanspaces.com/dev/15536367e8a2169aa3b6bf35c66f9646.jpg',
            'https://zonazero.nyc3.cdn.digitaloceanspaces.com/dev/9672053fa2213156bbf46107f308094a.jpg',
            'https://zonazero.nyc3.cdn.digitaloceanspaces.com/dev/15536367e8a2169aa3b6bf35c66f9646.jpg',
            'https://zonazero.nyc3.cdn.digitaloceanspaces.com/dev/9672053fa2213156bbf46107f308094a.jpg',
            'https://zonazero.nyc3.cdn.digitaloceanspaces.com/dev/15536367e8a2169aa3b6bf35c66f9646.jpg',
            'https://zonazero.nyc3.cdn.digitaloceanspaces.com/dev/9672053fa2213156bbf46107f308094a.jpg',
            'https://zonazero.nyc3.cdn.digitaloceanspaces.com/dev/15536367e8a2169aa3b6bf35c66f9646.jpg',
            'https://zonazero.nyc3.cdn.digitaloceanspaces.com/dev/9672053fa2213156bbf46107f308094a.jpg',
            // Agrega las URL de las otras fotos aquí
        ];
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 1,
            spaceBetween: 25,
            loop: true,
            arrow: false
        };
        this.mostrarMenu = true;
        this.verCarro = false;
        this.showFilters = false;
        this.productos = [];
        this.searchText = '';
        this.cantidadesPorProducto = {};
        //backButtonEnabled = true;
        this.totalCantidades = 0;
        this.urlRoot = src_app_config__WEBPACK_IMPORTED_MODULE_5__.AppConfig.urlRoot;
        this.pageNumber = 1;
        this.filtroCategoria = ''; // Nueva propiedad
        this.noVerPorCat = false;
        this.productosOfertas = [];
        this.isSearching = false;
    }
    ngDoCheck() {
        this.calculaTotal();
    }
    onIonInfinite(ev) {
        setTimeout(() => {
            // Incrementa el número de página
            this.pageNumber++;
            // Llama al método getProductos con el número de página actual
            this.getProductos(null, this.pageNumber);
            // Deshabilita el evento ionInfinite si ya no hay más productos
            if (this.productos.length % 6 !== 0) {
                ev.target.disabled = true;
            }
            // Completa el evento de scroll infinito
            ev.target.complete();
        }, 500);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({ 'Content-Type': 'application/octet-stream' });
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({ 'Content-Type': 'application/octet-stream' });
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
            this.getProductos(null, this.pageNumber);
        }
    }
    ngOnInit() {
        //this.inicia.verificar();
        this.startAutoplay();
        this.getProductos();
        this.getProductosOferta();
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.goBack();
        });
    }
    goBack() {
        this.navCtrl.back();
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
    getProductos(busqueda = null, pageNumber = 1) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({ 'Content-Type': 'application/octet-stream' });
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
    getCategorias() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({ 'Content-Type': 'application/octet-stream' });
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            /*//const user= await this.inicia.getUser();
            //const url_proyecto = user[0].url_proyecto
            const modal = await this.modalCtrl.create({
              component: CheckoutPage,
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
            await modal.present();
            */
            this.navCtrl.navigateRoot('checkout');
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////////
    toggleMenu() {
        this.mostrarMenu = !this.mostrarMenu;
        //const menuContent = document.getElementById('main-content'); // Obtiene el contenido del menú
        //menuContent.classList.toggle('hidden'); // Muestra/oculta el menú vertical basado en mostrarMenu
    }
    startAutoplay() {
        setInterval(() => {
            this.slider.slideNext(); // Avanzar a la siguiente diapositiva
        }, 5000); // Cambiar de diapositiva cada 3 segundos (ajusta el valor según tus necesidades)
    }
    iniciarBusqueda() {
        this.mostrarBusqueda = !this.mostrarBusqueda;
        this.mostrarMenu = !this.mostrarMenu;
    }
    realizarBusqueda(event) {
        const textoBusqueda = event.target.value;
        // Aquí puedes implementar la lógica para buscar según el texto ingresado
        console.log('Texto de búsqueda:', textoBusqueda);
    }
    navigateTo(page) {
        // Aquí puedes definir la navegación a cada sección
        switch (page) {
            case 'home':
                // Navegar a la página de inicio
                break;
            case 'productos':
                // Navegar a la página de productos
                break;
            case 'quienes-somos':
                // Navegar a la página de Quiénes Somos
                break;
            case 'ubicacion':
                // Navegar a la página de Ubicación
                break;
            case 'servicios':
                // Navegar a la página de Servicios
                break;
            default:
                break;
        }
    }
    detectarDispositivo() {
        this.pantallaChica = this.isSmallScreen();
        if (this.pantallaChica) {
            this.pantallaChica = false;
            console.log('Estás en una pantalla chica');
        }
        else {
            this.pantallaChica = false;
            console.log('Estás en una pantalla grande');
        }
    }
    isSmallScreen() {
        return window.innerWidth < 768; // Cambia 768 por el punto de corte deseado
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _iniciarusuario_service__WEBPACK_IMPORTED_MODULE_2__.IniciarusuarioService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage }
];
Tab1Page.propDecorators = {
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['slider',] }]
};
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
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

module.exports = "@charset \"UTF-8\";\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n.productosLista {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  /* Para que los elementos se envuelvan en filas si no caben en una sola línea */\n  margin-left: 0;\n}\n/* *{font-family: 'arial';}*/\n.avatar {\n  border-radius: 50%;\n  width: 150px;\n  height: 150px;\n  margin-top: 10px;\n}\n/* DOES NOT WORK - not specific enough */\n.alert-wrapper {\n  background: #6742e0d5;\n}\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n.my-custom-class .alert-wrapper {\n  background: #6742e0d5;\n}\n.ion-card-content-class {\n  text-align: justify;\n}\n.cartIcontxt {\n  margin-top: 10px;\n  padding-right: 1px;\n  width: 27px;\n  max-width: 27px;\n  height: 20px;\n  color: #ffffff;\n}\n.cartIcon {\n  padding-right: 1px;\n  width: 27px;\n  max-width: 27px;\n  height: 20px;\n  color: #115c2b;\n}\n.filterIcon {\n  margin-top: 20px;\n  padding-right: 1px;\n  width: 25px;\n  max-width: 25px;\n  height: 20px;\n  color: #115c2b;\n}\n.searchBar {\n  max-width: 220px;\n  width: 220px;\n  border-radius: 5%;\n  border-width: 1px;\n}\n.catBar {\n  width: 300px;\n  max-width: 300px;\n  border-radius: 5%;\n  border-width: 0px;\n}\n.catBarSelect {\n  color: #115c2b;\n  border-width: 0px;\n  /* Si también quieres ajustar el padding a la derecha */\n}\n.catBarSelectOption {\n  color: #115c2b;\n  border-width: 0px;\n  max-width: 300px;\n  width: 300px;\n}\n.filterRow {\n  margin-left: 1px;\n}\n.tab1IonCard {\n  text-align: center;\n  margin: 10px;\n  /* Ajusta el margen según sea necesario */\n  width: 300px;\n  height: 550px;\n  border-radius: 5%;\n  border-width: 1px;\n  text-align: center;\n}\n.tab1ImgIonCard {\n  width: 100%;\n}\n.tab1IonButton {\n  border-radius: 5%;\n}\n.tab2IonCard {\n  width: 300px;\n  height: 300px;\n  border-radius: 5%;\n  border-width: 1px;\n  text-align: center;\n}\n.tab2IonButton {\n  border-radius: 5%;\n}\n.slides-custom {\n  /* Agrega estilos personalizados aquí para sobrescribir los estilos predeterminados de ion-slides */\n  /* Por ejemplo, para quitar el margen y el relleno predeterminados: */\n  height: auto;\n  width: auto;\n  display: block;\n  margin: 0;\n  padding: 0;\n  position: static;\n  /* Otros estilos personalizados... */\n}\nion-fab-button {\n  --background: #ffffff;\n  --background-activated: transparent;\n  --background-hover: #115c2b;\n  --border-radius: 10px;\n  --border-width: 0px;\n  --box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.3), 0px 0px 0px 0px rgba(0, 0, 0, 0.15);\n  --color: #115c2b;\n  width: 30px;\n  height: 30px;\n}\n/* Ajuste de padding solo para pantallas más grandes (mayores a 768 píxeles) */\n@media screen and (min-width: 769px) {\n  .slides-custom {\n    /* Agrega estilos personalizados aquí para sobrescribir los estilos predeterminados de ion-slides */\n    /* Por ejemplo, para quitar el margen y el relleno predeterminados: */\n    height: auto;\n    width: auto;\n    display: block;\n    margin: 0;\n    padding: 0;\n    position: static;\n    /* Otros estilos personalizados... */\n  }\n\n  .filterIcon {\n    margin-top: 20px;\n    padding-right: 5px;\n    width: 30px;\n    height: 20px;\n    color: #115c2b;\n  }\n\n  .searchBar {\n    max-width: 330px;\n    width: 330px;\n    border-radius: 5%;\n    border-width: 1px;\n    /* Si también quieres ajustar el padding a la derecha */\n  }\n\n  .catBar {\n    border-radius: 5%;\n    border-width: 1px;\n    /* Si también quieres ajustar el padding a la derecha */\n  }\n\n  .catBarSelect {\n    color: #115c2b;\n    border-width: 0px;\n    /* Si también quieres ajustar el padding a la derecha */\n  }\n\n  .catBarSelectOption {\n    color: #115c2b;\n    border-width: 0px;\n  }\n\n  .tab1IonCard {\n    text-align: center;\n    margin: 10px;\n    /* Ajusta el margen según sea necesario */\n    width: 300px;\n    height: 550px;\n    border-radius: 5%;\n    border-width: 1px;\n    text-align: center;\n  }\n\n  .tab1IonButton {\n    border-radius: 5%;\n  }\n\n  .ion-card-content-class {\n    text-align: justify;\n  }\n\n  .filterRow {\n    margin-left: 1px;\n    border-radius: 5%;\n    border-width: 1px;\n    margin-right: 150px;\n  }\n\n  .productosLista {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    /* Para que los elementos se envuelvan en filas si no caben en una sola línea */\n    margin-left: 0;\n  }\n}\n.logo {\n  max-width: 150px;\n  max-height: 150px;\n  /* Ensure logo doesn't exceed container width */\n  /* Maintain aspect ratio */\n  margin-left: 10px;\n  /* Move logo to the left (adjust as needed) */\n  justify-content: center;\n  margin: 0 auto;\n}\nion-toolbar {\n  --border-width: 0;\n}\nion-header::after {\n  height: 0px;\n  /* Altura de la línea */\n  background-color: transparent;\n  /* Color de fondo de la línea */\n}\n.menu-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n@media (max-width: 767px) {\n  .menu-container {\n    flex-direction: row;\n    align-items: stretch;\n  }\n}\n.horizontal-menu {\n  display: flex;\n  width: 100%;\n  border: none;\n  justify-content: start;\n  /* Or justify-content: center */\n  align-items: center;\n  /* Align items vertically in the center */\n}\n.horizontal-menu .mobile-menu-toggle {\n  display: none;\n  /* Hide toggle button on larger screens */\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .horizontal-menu {\n    flex-direction: column;\n    /* Stack menu items vertically on small screens */\n  }\n  .horizontal-menu .mobile-menu-toggle {\n    display: block;\n    /* Show toggle button on small screens */\n  }\n}\n.horizontal-menu .menu-item {\n  position: relative;\n  padding: 5px 10px;\n  /* Reduced padding */\n  border-right: none;\n  transition: font-size 0.3s;\n  flex: 1;\n  /* Allow items to flex and share available space */\n  text-align: center;\n}\n.horizontal-menu .menu-item:last-child {\n  border-right: none;\n}\n.horizontal-menu .menu-item:hover {\n  font-size: 1.2em;\n}\n.horizontal-menu .menu-item:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff);\n  background-size: 500% 500%;\n  border-radius: 5px;\n  z-index: -1;\n  opacity: 0;\n  transition: opacity 0.5s;\n  pointer-events: none;\n}\n.horizontal-menu .menu-item:hover:before {\n  opacity: 1;\n}\nion-slides {\n  position: relative;\n  /* Asegúrate de que ion-slides tenga position: relative */\n}\n.slide-content {\n  position: relative;\n  /* Permite posicionar los botones dentro del contenedor */\n  width: 100%;\n  /* Ocupa todo el ancho de la diapositiva */\n  height: auto;\n  /* Ocupa toda la altura de la diapositiva */\n}\nion-button {\n  position: absolute;\n  top: 80%;\n  transform: translateY(-50%);\n  z-index: 10;\n  /* Asegura que los botones estén por encima de las imágenes */\n}\n/*# sourceMappingURL=data:application/json;base64,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Q0Usa0JBQUE7RUFBb0IseURBQUE7QUFtQ3RCO0FBaENBO0VBQ0Usa0JBQUE7RUFBb0IseURBQUE7RUFDcEIsV0FBQTtFQUFhLDBDQUFBO0VBQ2IsWUFBQTtFQUFjLDJDQUFBO0FBc0NoQjtBQW5DQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUFhLDZEQUFBO0FBdUNmIiwiZmlsZSI6InRhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjpyb290IHtcclxuICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xyXG4gIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XHJcbn1cclxuLnByb2R1Y3Rvc0xpc3RhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwOyAvKiBQYXJhIHF1ZSBsb3MgZWxlbWVudG9zIHNlIGVudnVlbHZhbiBlbiBmaWxhcyBzaSBubyBjYWJlbiBlbiB1bmEgc29sYSBsw61uZWEgKi9cclxuICBtYXJnaW4tbGVmdDogMDt9XHJcblxyXG4vKiAqe2ZvbnQtZmFtaWx5OiAnYXJpYWwnO30qL1xyXG5cclxuLmF2YXRhcntib3JkZXItcmFkaXVzOiA1MCU7IHdpZHRoOiAxNTBweDsgaGVpZ2h0OiAxNTBweDsgbWFyZ2luLXRvcDoxMHB4O31cclxuXHJcbi8qIERPRVMgTk9UIFdPUksgLSBub3Qgc3BlY2lmaWMgZW5vdWdoICovXHJcbi5hbGVydC13cmFwcGVyIHtcclxuYmFja2dyb3VuZDogIzY3NDJlMGQ1O1xyXG59XHJcblxyXG4vKiBXb3JrcyAtIHBhc3MgXCJteS1jdXN0b20tY2xhc3NcIiBpbiBjc3NDbGFzcyB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSAqL1xyXG4ubXktY3VzdG9tLWNsYXNzIC5hbGVydC13cmFwcGVyIHtcclxuYmFja2dyb3VuZDogIzY3NDJlMGQ1O1xyXG59XHJcbi5pb24tY2FyZC1jb250ZW50LWNsYXNze1xyXG50ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBcclxuLmNhcnRJY29udHh0e1xyXG5tYXJnaW4tdG9wOiAxMHB4O1xyXG5wYWRkaW5nLXJpZ2h0OjFweDsgXHJcbndpZHRoOjI3cHg7XHJcbm1heC13aWR0aDoyN3B4O1xyXG5oZWlnaHQ6MjBweDtcclxuY29sb3I6I2ZmZmZmZjtcclxuXHJcbn1cclxuLmNhcnRJY29ue1xyXG5cclxucGFkZGluZy1yaWdodDoxcHg7IFxyXG53aWR0aDoyN3B4O1xyXG5tYXgtd2lkdGg6MjdweDtcclxuaGVpZ2h0OjIwcHg7XHJcbmNvbG9yOiMxMTVjMmI7XHJcbn1cclxuLmZpbHRlckljb257XHJcbm1hcmdpbi10b3A6IDIwcHg7XHJcbnBhZGRpbmctcmlnaHQ6MXB4OyBcclxud2lkdGg6MjVweDtcclxubWF4LXdpZHRoOjI1cHg7XHJcbmhlaWdodDoyMHB4O1xyXG5jb2xvcjojMTE1YzJiO1xyXG59XHJcbi5zZWFyY2hCYXJ7XHJcbm1heC13aWR0aDoyMjBweDtcclxud2lkdGg6MjIwcHg7XHJcbmJvcmRlci1yYWRpdXM6IDUlO1xyXG5ib3JkZXItd2lkdGg6IDFweDtcclxufVxyXG4uY2F0QmFye1xyXG53aWR0aDozMDBweDtcclxubWF4LXdpZHRoOjMwMHB4O1xyXG5ib3JkZXItcmFkaXVzOiA1JTtcclxuYm9yZGVyLXdpZHRoOiAwcHg7XHJcbn1cclxuLmNhdEJhclNlbGVjdHtcclxuY29sb3I6IzExNWMyYjtcclxuYm9yZGVyLXdpZHRoOiAwcHg7XHJcblxyXG4vKiBTaSB0YW1iacOpbiBxdWllcmVzIGFqdXN0YXIgZWwgcGFkZGluZyBhIGxhIGRlcmVjaGEgKi9cclxufVxyXG4uY2F0QmFyU2VsZWN0T3B0aW9ue1xyXG5jb2xvcjojMTE1YzJiOyAgXHJcbmJvcmRlci13aWR0aDogMHB4O1xyXG5tYXgtd2lkdGg6MzAwcHg7XHJcbndpZHRoOjMwMHB4O1xyXG59XHJcbi5maWx0ZXJSb3d7XHJcbm1hcmdpbi1sZWZ0OjFweDsgIFxyXG59XHJcbi50YWIxSW9uQ2FyZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMTBweDsgLyogQWp1c3RhIGVsIG1hcmdlbiBzZWfDum4gc2VhIG5lY2VzYXJpbyAqL1xyXG4gIHdpZHRoOjMwMHB4O1xyXG5oZWlnaHQ6NTUwcHg7XHJcbmJvcmRlci1yYWRpdXM6IDUlO2JvcmRlci13aWR0aDogMXB4O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4udGFiMUltZ0lvbkNhcmR7XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcbi50YWIxSW9uQnV0dG9ue1xyXG5ib3JkZXItcmFkaXVzOiA1JTtcclxufVxyXG4udGFiMklvbkNhcmR7XHJcbndpZHRoOjMwMHB4O1xyXG5oZWlnaHQ6MzAwcHg7XHJcbmJvcmRlci1yYWRpdXM6IDUlO2JvcmRlci13aWR0aDogMXB4O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRhYjJJb25CdXR0b257XHJcbmJvcmRlci1yYWRpdXM6IDUlO1xyXG59XHJcbi5zbGlkZXMtY3VzdG9tIHtcclxuLyogQWdyZWdhIGVzdGlsb3MgcGVyc29uYWxpemFkb3MgYXF1w60gcGFyYSBzb2JyZXNjcmliaXIgbG9zIGVzdGlsb3MgcHJlZGV0ZXJtaW5hZG9zIGRlIGlvbi1zbGlkZXMgKi9cclxuLyogUG9yIGVqZW1wbG8sIHBhcmEgcXVpdGFyIGVsIG1hcmdlbiB5IGVsIHJlbGxlbm8gcHJlZGV0ZXJtaW5hZG9zOiAqL1xyXG5oZWlnaHQ6IGF1dG87IHdpZHRoOiBhdXRvOyBkaXNwbGF5OiBibG9jazsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyBwb3NpdGlvbjogc3RhdGljO1xyXG4vKiBPdHJvcyBlc3RpbG9zIHBlcnNvbmFsaXphZG9zLi4uICovXHJcbn1cclxuaW9uLWZhYi1idXR0b24ge1xyXG4tLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xyXG4tLWJhY2tncm91bmQtaG92ZXI6ICMxMTVjMmI7XHJcbi0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuLS1ib3JkZXItd2lkdGg6IDBweDtcclxuLS1ib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuLS1jb2xvcjogIzExNWMyYjtcclxud2lkdGg6MzBweDtcclxuaGVpZ2h0OjMwcHg7XHJcbn1cclxuLyogQWp1c3RlIGRlIHBhZGRpbmcgc29sbyBwYXJhIHBhbnRhbGxhcyBtw6FzIGdyYW5kZXMgKG1heW9yZXMgYSA3NjggcMOteGVsZXMpICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XHJcbi5zbGlkZXMtY3VzdG9tIHtcclxuICAvKiBBZ3JlZ2EgZXN0aWxvcyBwZXJzb25hbGl6YWRvcyBhcXXDrSBwYXJhIHNvYnJlc2NyaWJpciBsb3MgZXN0aWxvcyBwcmVkZXRlcm1pbmFkb3MgZGUgaW9uLXNsaWRlcyAqL1xyXG4gIC8qIFBvciBlamVtcGxvLCBwYXJhIHF1aXRhciBlbCBtYXJnZW4geSBlbCByZWxsZW5vIHByZWRldGVybWluYWRvczogKi9cclxuICBoZWlnaHQ6IGF1dG87IHdpZHRoOiBhdXRvOyBkaXNwbGF5OiBibG9jazsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyBwb3NpdGlvbjogc3RhdGljO1xyXG4gIC8qIE90cm9zIGVzdGlsb3MgcGVyc29uYWxpemFkb3MuLi4gKi9cclxufVxyXG4uZmlsdGVySWNvbntcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6NXB4OyBcclxuICB3aWR0aDozMHB4O1xyXG4gIGhlaWdodDoyMHB4O1xyXG4gIGNvbG9yOiMxMTVjMmI7ICAgICAgIFxyXG59XHJcbi5zZWFyY2hCYXIge1xyXG4gIG1heC13aWR0aDozMzBweDtcclxuICB3aWR0aDozMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA1JTtib3JkZXItd2lkdGg6IDFweDtcclxuXHJcbiAgLyogU2kgdGFtYmnDqW4gcXVpZXJlcyBhanVzdGFyIGVsIHBhZGRpbmcgYSBsYSBkZXJlY2hhICovXHJcbn1cclxuLmNhdEJhciB7XHJcbiAvLyBtYXgtd2lkdGg6MzAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNSU7Ym9yZGVyLXdpZHRoOiAxcHg7XHJcblxyXG4gIC8qIFNpIHRhbWJpw6luIHF1aWVyZXMgYWp1c3RhciBlbCBwYWRkaW5nIGEgbGEgZGVyZWNoYSAqL1xyXG59XHJcbi5jYXRCYXJTZWxlY3R7XHJcbiAgY29sb3I6IzExNWMyYjtcclxuICBib3JkZXItd2lkdGg6IDBweDtcclxuIC8vIHdpZHRoOjIwMHB4O1xyXG4gIC8vbWF4LXdpZHRoOjIwMHB4O1xyXG4gIC8qIFNpIHRhbWJpw6luIHF1aWVyZXMgYWp1c3RhciBlbCBwYWRkaW5nIGEgbGEgZGVyZWNoYSAqL1xyXG59XHJcbi5jYXRCYXJTZWxlY3RPcHRpb257XHJcbiAgY29sb3I6IzExNWMyYjtcclxuICBib3JkZXItd2lkdGg6IDBweDtcclxuICAvL3dpZHRoOjIwMHB4O1xyXG4gIC8vbWF4LXdpZHRoOjIwMHB4O1xyXG59XHJcblxyXG4udGFiMUlvbkNhcmQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDEwcHg7IC8qIEFqdXN0YSBlbCBtYXJnZW4gc2Vnw7puIHNlYSBuZWNlc2FyaW8gKi9cclxuICB3aWR0aDozMDBweDtcclxuaGVpZ2h0OjU1MHB4O1xyXG5ib3JkZXItcmFkaXVzOiA1JTtib3JkZXItd2lkdGg6IDFweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGFiMUlvbkJ1dHRvbntcclxuICBib3JkZXItcmFkaXVzOiA1JTtcclxufVxyXG4uaW9uLWNhcmQtY29udGVudC1jbGFzc3sgICAgXHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTsgICAgXHJcbiAgfVxyXG4gIC5maWx0ZXJSb3d7XHJcbiAgICBtYXJnaW4tbGVmdDoxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtib3JkZXItd2lkdGg6IDFweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTUwcHg7XHJcbiAgICBcclxuICB9XHJcbiAgLnByb2R1Y3Rvc0xpc3RhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7IC8qIFBhcmEgcXVlIGxvcyBlbGVtZW50b3Mgc2UgZW52dWVsdmFuIGVuIGZpbGFzIHNpIG5vIGNhYmVuIGVuIHVuYSBzb2xhIGzDrW5lYSAqL1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7IH1cclxuICBcclxufVxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1NFQVJDSEJBUlxyXG5cclxuLmxvZ28geyAgXHJcbiAgXHJcbiAgbWF4LXdpZHRoOiAxNTBweDtcclxuICBtYXgtaGVpZ2h0OiAxNTBweDsgLyogRW5zdXJlIGxvZ28gZG9lc24ndCBleGNlZWQgY29udGFpbmVyIHdpZHRoICovXHJcbiAgLyogTWFpbnRhaW4gYXNwZWN0IHJhdGlvICovXHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7IC8qIE1vdmUgbG9nbyB0byB0aGUgbGVmdCAoYWRqdXN0IGFzIG5lZWRlZCkgKi9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAwOyAvLyBFbGltaW5hIGVsIGJvcmRlIGluZmVyaW9yIGRlbCB0b29sYmFyXHJcbn1cclxuXHJcblxyXG5pb24taGVhZGVyOjphZnRlciB7XHJcbiAgaGVpZ2h0OiAwcHg7IC8qIEFsdHVyYSBkZSBsYSBsw61uZWEgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogQ29sb3IgZGUgZm9uZG8gZGUgbGEgbMOtbmVhICovXHJcbn1cclxuXHJcblxyXG4ubWVudS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAubWVudS1jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIH1cclxufVxyXG5cclxuLmhvcml6b250YWwtbWVudSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDsgLyogT3IganVzdGlmeS1jb250ZW50OiBjZW50ZXIgKi9cclxuICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBBbGlnbiBpdGVtcyB2ZXJ0aWNhbGx5IGluIHRoZSBjZW50ZXIgKi9cclxuXHJcbiAgLm1vYmlsZS1tZW51LXRvZ2dsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRlIHRvZ2dsZSBidXR0b24gb24gbGFyZ2VyIHNjcmVlbnMgKi9cclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogU3RhY2sgbWVudSBpdGVtcyB2ZXJ0aWNhbGx5IG9uIHNtYWxsIHNjcmVlbnMgKi9cclxuICAgIC5tb2JpbGUtbWVudS10b2dnbGUge1xyXG4gICAgIFxyXG4gICAgICBkaXNwbGF5OiBibG9jazsgLyogU2hvdyB0b2dnbGUgYnV0dG9uIG9uIHNtYWxsIHNjcmVlbnMgKi9cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tZW51LWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7IC8qIFJlZHVjZWQgcGFkZGluZyAqL1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuM3M7XHJcbiAgICBmbGV4OiAxOyAvKiBBbGxvdyBpdGVtcyB0byBmbGV4IGFuZCBzaGFyZSBhdmFpbGFibGUgc3BhY2UgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIH1cclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmYwMGZmLCAjMDBmZmZmLCAjZmZmZjAwLCAjZmYwMGZmKTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiA1MDAlIDUwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlcjpiZWZvcmUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLXNsaWRlcyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBBc2Vnw7pyYXRlIGRlIHF1ZSBpb24tc2xpZGVzIHRlbmdhIHBvc2l0aW9uOiByZWxhdGl2ZSAqL1xyXG59XHJcblxyXG4uc2xpZGUtY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBQZXJtaXRlIHBvc2ljaW9uYXIgbG9zIGJvdG9uZXMgZGVudHJvIGRlbCBjb250ZW5lZG9yICovXHJcbiAgd2lkdGg6IDEwMCU7IC8qIE9jdXBhIHRvZG8gZWwgYW5jaG8gZGUgbGEgZGlhcG9zaXRpdmEgKi9cclxuICBoZWlnaHQ6IGF1dG87IC8qIE9jdXBhIHRvZGEgbGEgYWx0dXJhIGRlIGxhIGRpYXBvc2l0aXZhICovXHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDgwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgei1pbmRleDogMTA7IC8qIEFzZWd1cmEgcXVlIGxvcyBib3RvbmVzIGVzdMOpbiBwb3IgZW5jaW1hIGRlIGxhcyBpbcOhZ2VuZXMgKi9cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<!-- Menú horizontal para pantallas grandes -->\r\n<ion-content class=\"ion-text-center\" *ngIf=\"!pantallaChica\">\r\n  <ion-header>\r\n    <ion-toolbar color=\"white\">\r\n      <!-- Logo -->\r\n     \r\n      <ion-header>\r\n        <ion-toolbar color=\"white\">\r\n          <div class=\"header-content\">\r\n            <img class=\"logo\" src=\"https://i.postimg.cc/qv5xtrh1/8530a21d-816b-4a00-9f2f-591f0c6ce018-Whats-App-Image-2024-04-04-at-1-03-59-PM.webp\" alt=\"Logo\" slot=\"start\" (click)=\"toggleMenu()\">\r\n            <div class=\"menu-container\" *ngIf=\"mostrarMenu\">\r\n              </div>\r\n          </div>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      \r\n      <!-- Menú horizontal -->\r\n      <div class=\"menu-container\">\r\n        <ion-list lines=\"none\" class=\"horizontal-menu\" >\r\n          <ion-item (click)=\"navigateTo('home')\" class=\"menu-item\" *ngIf=\"mostrarMenu\">\r\n            <ion-label>Home</ion-label>\r\n          </ion-item>\r\n          <ion-item (click)=\"navigateTo('productos')\" class=\"menu-item\" *ngIf=\"mostrarMenu\">\r\n            <ion-label>Productos</ion-label>\r\n          </ion-item>\r\n          <ion-item (click)=\"navigateTo('quienes-somos')\" class=\"menu-item\" *ngIf=\"mostrarMenu\">\r\n            <ion-label>Nosotros</ion-label>\r\n          </ion-item>\r\n          <ion-item (click)=\"navigateTo('ubicacion')\" class=\"menu-item\" *ngIf=\"mostrarMenu\">\r\n            <ion-label>Ubicación</ion-label>\r\n          </ion-item>\r\n          <ion-item (click)=\"navigateTo('servicios')\" class=\"menu-item\" *ngIf=\"mostrarMenu\">\r\n            <ion-label>Servicios</ion-label>\r\n          </ion-item>\r\n          <ion-item (click)=\"iniciarBusqueda()\">\r\n            <ion-icon name=\"search-circle-sharp\"></ion-icon>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"mostrarBusqueda\">\r\n            <ion-searchbar  [debounce]=\"500\" class=\"searchBar\" search-icon=\"none\"\r\n            showCancelButton=\"focus\"  (ionInput)=\"buscarProductos($event)\"></ion-searchbar>\r\n            <ion-icon class=\"filterIcon\" (click)=\"showFilter()\" name=\"filter-sharp\" ></ion-icon>\r\n          </ion-item>\r\n        </ion-list>\r\n      </div>\r\n      <!-- Logo -->\r\n      \r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n\r\n  <!-- FLECHAS Y SLIDER -->\r\n  <ion-slides *ngIf=\"!mostrarBusqueda\" pager=\"true\" [options]=\"slideOpts\" #slider class=\"image-slider\">\r\n    <ion-slide *ngFor=\"let photo of photos\">\r\n      <div class=\"slide-content\">  \r\n        <img [src]=\"photo\">\r\n      </div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n  \r\n  <ion-grid>\r\n    <ion-row *ngIf=\"showFilters\" class=\"filterRow\">\r\n      <ion-col ></ion-col>\r\n      <ion-col> \r\n            <ion-select  class=\"catBarSelect\"\r\n            aria-label=\"Categorias\"\r\n            placeholder=\"Elegir Categorias\"\r\n            (ionChange)=\"handleChange($event)\"\r\n            [multiple]=\"true\">\r\n              <ion-select-option class=\"catBarSelectOption\" *ngFor=\"let cat of categorias\" [value]=\"cat.idCategoria\">\r\n                {{ cat.nombreCategoria }}\r\n              </ion-select-option>\r\n            </ion-select>\r\n      </ion-col>\r\n      <ion-col></ion-col>\r\n    </ion-row>     \r\n\r\n    <ion-row class=\"productosLista\">\r\n        \r\n        <ion-card  *ngFor=\"let consulta of productos\" class=\"tab1IonCard\" >\r\n          <ion-card-header>        \r\n            <img src=\"{{urlRoot}}/images/{{consulta.fotoProducto}}\" style=\"margin-top:11px;width:200px;height:200px;\"\r\n            (click)=\"modalMasInfo(consulta.idProducto,consulta.nombreProducto,consulta.descripcionProducto,consulta.fotoProducto,\r\n                    consulta.precioProducto);\"/>                     \r\n                          \r\n            \r\n          </ion-card-header>\r\n          <ion-card-header>\r\n            <ion-card-title color=\"primary\" width=\"40px;\"\r\n            (click)=\"modalMasInfo(consulta.idProducto,consulta.nombreProducto,consulta.descripcionProducto,consulta.fotoProducto,\r\n            consulta.precioProducto);\">\r\n              {{consulta.nombreProducto | slice:0:23}}\r\n            </ion-card-title>\r\n            <ion-card-subtitle style=\"height:35px;\"\r\n            (click)=\"modalMasInfo(consulta.idProducto,consulta.nombreProducto,consulta.descripcionProducto,consulta.fotoProducto,\r\n            consulta.precioProducto);\">{{consulta.descripcionProducto | slice:0:70}}... &nbsp;\r\n            </ion-card-subtitle>              \r\n            <ion-card-title color=\"primary\"\r\n            (click)=\"modalMasInfo(consulta.idProducto,consulta.nombreProducto,consulta.descripcionProducto,consulta.fotoProducto,\r\n            consulta.precioProducto);\"> US$ {{consulta.precioProducto}}</ion-card-title>\r\n            <ion-card-title (click)=\"modalMasInfo(consulta.idProducto,consulta.nombreProducto,consulta.descripcionProducto,consulta.fotoProducto,\r\n            consulta.precioProducto);\">\r\n              <ion-icon name=\"eye-sharp\" style=\"font-size: 20px;\" color=\"primary\"></ion-icon>\r\n            </ion-card-title>                    \r\n          </ion-card-header>\r\n         <!-- <ion-card-content>\r\n            <ion-row>\r\n              <ion-col (click)=\"decrementar(consulta.idProducto)\">\r\n                <ion-icon name=\"remove-circle-outline\" style=\"font-size:24px;\"></ion-icon>\r\n              </ion-col>\r\n              <ion-col>\r\n                <ion-label>{{ cantidadesPorProducto[consulta.idProducto] || 1 }}</ion-label>\r\n              </ion-col>\r\n              <ion-col (click)=\"incrementar(consulta.idProducto)\">                  \r\n                <ion-icon name=\"add-circle-outline\" style=\"font-size:24px;\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>            \r\n          </ion-card-content>-->\r\n            <ion-card-content>\r\n            <ion-button fill=\"outline\" class=\"tab1IonButton\"\r\n            (click)=\"add(consulta.idProducto,consulta.nombreProducto,consulta.fotoProducto,consulta.precioProducto)\">Añadir al carrito</ion-button>\r\n            </ion-card-content> \r\n        </ion-card>   \r\n       \r\n        <ion-infinite-scroll *ngIf=\"!isSearching\" (ionInfinite)=\"onIonInfinite($event)\">\r\n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n        </ion-infinite-scroll>\r\n               \r\n           \r\n    </ion-row>\r\n  </ion-grid> \r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map