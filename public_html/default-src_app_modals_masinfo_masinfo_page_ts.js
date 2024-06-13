"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_modals_masinfo_masinfo_page_ts"],{

/***/ 3339:
/*!************************************************!*\
  !*** ./src/app/modals/masinfo/masinfo.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasinfoPage": () => (/* binding */ MasinfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _masinfo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./masinfo.page.html?ngResource */ 344);
/* harmony import */ var _masinfo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./masinfo.page.scss?ngResource */ 3438);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _iniciarusuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../iniciarusuario.service */ 7574);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config */ 9698);



/* eslint-disable @typescript-eslint/naming-convention */







let MasinfoPage = class MasinfoPage {
    constructor(http, navParams, modalCtrl, toastController, inicia, formBuilder) {
        this.http = http;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastController = toastController;
        this.inicia = inicia;
        this.formBuilder = formBuilder;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.idProducto = this.navParams.get('mySubject');
        this.nombreProducto = this.navParams.get('mySubject2');
        this.descripcionProducto = this.navParams.get('mySubject3');
        this.fotoProducto = this.navParams.get('mySubject4');
        this.precioProducto = this.navParams.get('mySubject5');
        this.isModalOpen = false;
        this.cantidadesPorProducto = {};
        this.urlRoot = src_app_config__WEBPACK_IMPORTED_MODULE_3__.AppConfig.urlRoot;
        this.myForm = this.formBuilder.group({
        //asientos:['1',Validators.required],
        //totales:['']
        });
        this.nomostrar = true;
        this.myForm = this.formBuilder.group({
        //mensaje:['',Validators.required]
        });
    }
    cancel() {
        return this.modalCtrl.dismiss(null, 'cancel');
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
    presentToast(mensaje) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
    ngOnInit() {
    }
};
MasinfoPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _iniciarusuario_service__WEBPACK_IMPORTED_MODULE_2__.IniciarusuarioService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder }
];
MasinfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-masinfo',
        template: _masinfo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_masinfo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MasinfoPage);



/***/ }),

/***/ 3438:
/*!*************************************************************!*\
  !*** ./src/app/modals/masinfo/masinfo.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "body {\n  margin-top: 20px;\n  background: #eee;\n}\n\n.info-combo > h3 {\n  margin: 3px 0;\n}\n\n.no-margin-bottom {\n  margin-bottom: 0 !important;\n}\n\n.info-combo > h5 {\n  margin: 2px 0 6px 0;\n}\n\n/* Messages */\n\n.messages-panel img.img-circle {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.medium-image {\n  width: 45px;\n  height: 45px;\n  margin-right: 5px;\n}\n\n.img-circle {\n  border-radius: 50%;\n}\n\n.messages-panel {\n  width: 100%;\n  height: calc(100vh - 150px);\n  min-height: 460px;\n  background-color: #fbfcff;\n  display: inline-block;\n  border-top-left-radius: 5px;\n  margin-bottom: 0;\n}\n\n.messages-panel img.img-circle {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.messages-panel .tab-content {\n  border: none;\n  background-color: transparent;\n}\n\n.contacts-list {\n  background-color: #fff;\n  border-right: 1px solid #cfdbe2;\n  width: 305px;\n  height: 100%;\n  border-top-left-radius: 5px;\n  float: left;\n}\n\n.message-body {\n  background-color: #fbfcff;\n  height: 100%;\n  width: calc(100% - 305px);\n  float: right;\n}\n\n.message-body .message-top {\n  display: inline-block;\n  width: 100%;\n  position: relative;\n  min-height: 53px;\n  height: auto;\n  background-color: #fff;\n  border-bottom: 1px solid rgba(205, 211, 237, 0.5);\n}\n\n.message-body .message-top .new-message-wrapper {\n  width: 100%;\n}\n\n.bordeMensajero {\n  margin-left: 5px;\n  padding-left: 10px;\n  border-color: #eee;\n  border-width: 1px;\n  box-sizing: border-box;\n  border-style: solid;\n}\n\nion-input.bordeMensajero {\n  --background: #fff;\n  --color: #6742e0d5;\n  --placeholder-color: #ddd;\n  --placeholder-opacity: .8;\n  --padding-bottom: 10px;\n  --padding-end: 10px;\n  --padding-start: 10px;\n  --padding-top: 10px;\n}\n\n.message-body .message-top > .btn {\n  height: 53px;\n  line-height: 53px;\n  padding: 0 20px;\n  float: right;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  margin: 0;\n  font-size: 15px;\n  opacity: 0.9;\n}\n\n.message-body .message-top > .btn:hover,\n.message-body .message-top > .btn:focus,\n.message-body .message-top > .btn.active {\n  opacity: 1;\n}\n\n.message-body .message-top > .btn > i {\n  margin-right: 5px;\n  font-size: 18px;\n}\n\n.new-message-wrapper {\n  position: absolute;\n  max-height: 400px;\n  top: 53px;\n  background-color: #fff;\n  z-index: 105;\n  padding: 20px 15px 30px 15px;\n  border-bottom: 1px solid #cfdbe2;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n  box-shadow: 0 7px 10px rgba(0, 0, 0, 0.25);\n  transition: 0.5s;\n  display: none;\n}\n\n.new-message-wrapper.closed {\n  opacity: 0;\n  max-height: 0;\n}\n\n.chat-footer.new-message-textarea {\n  display: block;\n  position: relative;\n  padding: 0 10px;\n}\n\n.chat-footer.new-message-textarea .send-message-button {\n  right: 35px;\n}\n\n.chat-footer.new-message-textarea .upload-file {\n  right: 85px;\n}\n\n.chat-footer.new-message-textarea .send-message-text {\n  padding-right: 100px;\n  height: 90px;\n}\n\n.message-chat {\n  width: 100%;\n  overflow: hidden;\n}\n\n.chat-body {\n  width: calc(100% + 17px);\n  min-height: 290px;\n  height: calc(100vh - 320px);\n  background-color: #fbfcff;\n  margin-bottom: 30px;\n  padding: 30px 5px 5px 5px;\n  overflow-y: scroll;\n}\n\n.message {\n  position: relative;\n  width: 100%;\n}\n\n.message br {\n  clear: both;\n}\n\n.message .message-body {\n  position: relative;\n  width: auto;\n  max-width: calc(100% - 150px);\n  float: left;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #dbe3e8;\n  margin: 0 5px 20px 15px;\n  color: #788288;\n}\n\n.message:after {\n  content: \"\";\n  position: absolute;\n  top: 11px;\n  left: 63px;\n  float: left;\n  z-index: 100;\n  border-top: 10px solid transparent;\n  border-left: none;\n  border-bottom: 10px solid transparent;\n  border-right: 13px solid #fff;\n}\n\n.message:before {\n  content: \"\";\n  position: absolute;\n  top: 10px;\n  left: 62px;\n  float: left;\n  z-index: 99;\n  border-top: 11px solid transparent;\n  border-left: none;\n  border-bottom: 11px solid transparent;\n  border-right: 13px solid #dbe3e8;\n}\n\n.message .medium-image {\n  float: left;\n  margin-left: 10px;\n}\n\n.message .message-info {\n  width: 100%;\n  height: 22px;\n}\n\n.message .message-info > h5 > i {\n  font-size: 11px;\n  font-weight: 700;\n  margin: 0 2px 0 0;\n  color: #a2b8c5;\n}\n\n.message .message-info > h5 {\n  color: #a2b8c5;\n  margin: 8px 0 0 0;\n  font-size: 12px;\n  float: right;\n  padding-right: 10px;\n}\n\n.message .message-info > h4 {\n  font-size: 14px;\n  font-weight: 600;\n  margin: 7px 13px 0 10px;\n  color: #6742e0d5;\n  float: left;\n}\n\n.message hr {\n  margin: 4px 2%;\n  width: 96%;\n  opacity: 0.75;\n}\n\n.message .message-text {\n  text-align: left;\n  padding: 3px 13px 10px 13px;\n  font-size: 14px;\n}\n\n.message.my-message .message-body {\n  float: right;\n  margin: 0 15px 20px 5px;\n}\n\n.message.my-message:after {\n  content: \"\";\n  position: absolute;\n  top: 11px;\n  left: auto;\n  right: 63px;\n  float: left;\n  z-index: 100;\n  border-top: 10px solid transparent;\n  border-left: 13px solid #fff;\n  border-bottom: 10px solid transparent;\n  border-right: none;\n}\n\n.message.my-message:before {\n  content: \"\";\n  position: absolute;\n  top: 10px;\n  left: auto;\n  right: 62px;\n  float: left;\n  z-index: 99;\n  border-top: 11px solid transparent;\n  border-left: 13px solid #dbe3e8;\n  border-bottom: 11px solid transparent;\n  border-right: none;\n}\n\n.message.my-message .medium-image {\n  float: right;\n  margin-left: 5px;\n  margin-right: 10px;\n}\n\n.message.my-message .message-info > h5 {\n  float: left;\n  padding-left: 10px;\n  padding-right: 0;\n}\n\n.message.my-message .message-info > h4 {\n  float: right;\n}\n\n.message.info .message-body {\n  background-color: #6742e0d5;\n  border: 1px solid #6742e0bb;\n  color: #fff;\n}\n\n.message.info:after, .message.info:before {\n  border-right: 13px solid #6742e0d5;\n}\n\n.message.success .message-body {\n  background-color: #0ec8a2;\n  border: 1px solid #0ec8a2;\n  color: #fff;\n}\n\n.message.success:after, .message.success:before {\n  border-right: 13px solid #0ec8a2;\n}\n\n.message.warning .message-body {\n  background-color: #ff9e2a;\n  border: 1px solid #ff9e2a;\n  color: #fff;\n}\n\n.message.warning:after, .message.warning:before {\n  border-right: 13px solid #ff9e2a;\n}\n\n.message.danger .message-body {\n  background-color: #f95858;\n  border: 1px solid #f95858;\n  color: #fff;\n}\n\n.message.danger:after, .message.danger:before {\n  border-right: 13px solid #f95858;\n}\n\n.message.dark .message-body {\n  background-color: #314557;\n  border: 1px solid #314557;\n  color: #fff;\n}\n\n.message.dark:after, .message.dark:before {\n  border-right: 13px solid #314557;\n}\n\n.message.info .message-info > h4, .message.success .message-info > h4,\n.message.warning .message-info > h4, .message.danger .message-info > h4,\n.message.dark .message-info > h4 {\n  color: #fff;\n}\n\n.message.info .message-info > h5, .message.info .message-info > h5 > i,\n.message.success .message-info > h5, .message.success .message-info > h5 > i,\n.message.warning .message-info > h5, .message.warning .message-info > h5 > i,\n.message.danger .message-info > h5, .message.danger .message-info > h5 > i,\n.message.dark .message-info > h5, .message.dark .message-info > h5 > i {\n  color: #fff;\n  opacity: 0.9;\n}\n\n.chat-footer {\n  position: relative;\n  padding: 0 80px;\n}\n\n.chat-footer .send-message-text {\n  position: relative;\n  display: block;\n  background-color: #fff;\n  border-radius: 5px;\n  padding: 5px 95px 5px 10px;\n  font-size: 13px;\n  resize: vertical;\n  outline: none;\n  border: 1px solid #e0e6eb;\n}\n\n.chat-footer .send-message-button {\n  display: block;\n  margin: auto;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  outline: none;\n  font-weight: 600;\n  border-radius: 50%;\n  padding: 0;\n}\n\n.chat-footer .send-message-button > i {\n  font-size: 16px;\n  margin: 0 0 0 -2px;\n}\n\n/* Profile page */\n\n.profile-main {\n  background-color: #fff;\n  border: 1px solid #dce2e9;\n  border-radius: 3px;\n  position: relative;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,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O0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFBQTs7QUFHQTtFQUNBLGdDQUFBO0FBQUE7O0FBR0E7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUFBOztBQUdBO0VBQ0EsZ0NBQUE7QUFBQTs7QUFHQTs7O0VBR0EsV0FBQTtBQUFBOztBQUdBOzs7OztFQUtBLFdBQUE7RUFDQSxZQUFBO0FBQUE7O0FBR0E7RUFDQSxrQkFBQTtFQUVBLGVBQUE7QUFEQTs7QUFJQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUVBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUZBOztBQUtBO0VBQ0EsY0FBQTtFQUVBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUhBOztBQUtBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRkE7O0FBSUEsaUJBQUE7O0FBRUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRkEiLCJmaWxlIjoibWFzaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gIG1hcmdpbi10b3A6MjBweDtcclxuICBiYWNrZ3JvdW5kOiNlZWU7XHJcbn1cclxuXHJcblxyXG4uaW5mby1jb21ibyA+IGgzIHtcclxuICBtYXJnaW46IDNweCAwO1xyXG59XHJcblxyXG4ubm8tbWFyZ2luLWJvdHRvbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5mby1jb21ibyA+IGg1IHtcclxuICBtYXJnaW46IDJweCAwIDZweCAwO1xyXG59XHJcbi8qIE1lc3NhZ2VzICovXHJcbi5tZXNzYWdlcy1wYW5lbCBpbWcuaW1nLWNpcmNsZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG4ubWVkaXVtLWltYWdlIHtcclxuICB3aWR0aDogNDVweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5pbWctY2lyY2xlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLm1lc3NhZ2VzLXBhbmVsIHtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4KTtcclxubWluLWhlaWdodDogNDYwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmYmZjZmY7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG5tYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4ubWVzc2FnZXMtcGFuZWwgaW1nLmltZy1jaXJjbGUge1xyXG5ib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcbi5tZXNzYWdlcy1wYW5lbCAudGFiLWNvbnRlbnQge1xyXG5ib3JkZXI6IG5vbmU7XHJcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY29udGFjdHMtbGlzdCB7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbmJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjZmRiZTI7XHJcbndpZHRoOiAzMDVweDtcclxuaGVpZ2h0OiAxMDAlO1xyXG5ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbmZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5cclxuLm1lc3NhZ2UtYm9keSB7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmYmZjZmY7XHJcbmhlaWdodDogMTAwJTtcclxud2lkdGg6IGNhbGMoMTAwJSAtIDMwNXB4KTtcclxuZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ubWVzc2FnZS1ib2R5IC5tZXNzYWdlLXRvcCB7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxud2lkdGg6IDEwMCU7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxubWluLWhlaWdodDogNTNweDtcclxuaGVpZ2h0OiBhdXRvO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5ib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMDUsMjExLDIzNywwLjUpO1xyXG59XHJcblxyXG4ubWVzc2FnZS1ib2R5IC5tZXNzYWdlLXRvcCAubmV3LW1lc3NhZ2Utd3JhcHBlciB7XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLmJvcmRlTWVuc2FqZXJve1xyXG4gIG1hcmdpbi1sZWZ0OjVweDtcclxuICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICBib3JkZXItY29sb3I6ICNlZWU7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO31cclxuXHJcbiAgaW9uLWlucHV0LmJvcmRlTWVuc2FqZXJvIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC0tY29sb3I6ICM2NzQyZTBkNTtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNkZGQ7XHJcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IC44O1xyXG5cclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4ubWVzc2FnZS1ib2R5IC5tZXNzYWdlLXRvcCA+IC5idG4ge1xyXG5oZWlnaHQ6IDUzcHg7XHJcbmxpbmUtaGVpZ2h0OiA1M3B4O1xyXG5wYWRkaW5nOiAwIDIwcHg7XHJcbmZsb2F0OiByaWdodDtcclxuYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbm1hcmdpbjogMDtcclxuZm9udC1zaXplOiAxNXB4O1xyXG5vcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5tZXNzYWdlLWJvZHkgLm1lc3NhZ2UtdG9wID4gLmJ0bjpob3ZlcixcclxuLm1lc3NhZ2UtYm9keSAubWVzc2FnZS10b3AgPiAuYnRuOmZvY3VzLFxyXG4ubWVzc2FnZS1ib2R5IC5tZXNzYWdlLXRvcCA+IC5idG4uYWN0aXZlIHtcclxub3BhY2l0eTogMTtcclxufVxyXG5cclxuLm1lc3NhZ2UtYm9keSAubWVzc2FnZS10b3AgPiAuYnRuID4gaSB7XHJcbm1hcmdpbi1yaWdodDogNXB4O1xyXG5mb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5uZXctbWVzc2FnZS13cmFwcGVyIHtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5tYXgtaGVpZ2h0OiA0MDBweDtcclxudG9wOiA1M3B4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG56LWluZGV4OiAxMDU7XHJcbnBhZGRpbmc6IDIwcHggMTVweCAzMHB4IDE1cHg7XHJcbmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2ZkYmUyO1xyXG5ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XHJcbmJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XHJcbmJveC1zaGFkb3c6IDAgN3B4IDEwcHggcmdiYSgwLDAsMCwwLjI1KTtcclxudHJhbnNpdGlvbjogMC41cztcclxuZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm5ldy1tZXNzYWdlLXdyYXBwZXIuY2xvc2VkIHtcclxub3BhY2l0eTogMDtcclxubWF4LWhlaWdodDogMDtcclxufVxyXG5cclxuLmNoYXQtZm9vdGVyLm5ldy1tZXNzYWdlLXRleHRhcmVhIHtcclxuZGlzcGxheTogYmxvY2s7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxucGFkZGluZzogMCAxMHB4O1xyXG59XHJcblxyXG4uY2hhdC1mb290ZXIubmV3LW1lc3NhZ2UtdGV4dGFyZWEgLnNlbmQtbWVzc2FnZS1idXR0b24ge1xyXG5yaWdodDogMzVweDtcclxufVxyXG5cclxuLmNoYXQtZm9vdGVyLm5ldy1tZXNzYWdlLXRleHRhcmVhIC51cGxvYWQtZmlsZSB7XHJcbnJpZ2h0OiA4NXB4O1xyXG59XHJcblxyXG4uY2hhdC1mb290ZXIubmV3LW1lc3NhZ2UtdGV4dGFyZWEgLnNlbmQtbWVzc2FnZS10ZXh0IHtcclxucGFkZGluZy1yaWdodDogMTAwcHg7XHJcbmhlaWdodDogOTBweDtcclxufVxyXG5cclxuLm1lc3NhZ2UtY2hhdCB7XHJcbndpZHRoOiAxMDAlO1xyXG5vdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY2hhdC1ib2R5IHtcclxud2lkdGg6IGNhbGMoMTAwJSArIDE3cHgpO1xyXG5taW4taGVpZ2h0OiAyOTBweDtcclxuaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzIwcHgpO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmJmY2ZmO1xyXG5tYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5wYWRkaW5nOiAzMHB4IDVweCA1cHggNXB4O1xyXG5vdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG53aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1lc3NhZ2UgYnIge1xyXG5jbGVhcjogYm90aDtcclxufVxyXG5cclxuLm1lc3NhZ2UgLm1lc3NhZ2UtYm9keSB7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxud2lkdGg6IGF1dG87XHJcbm1heC13aWR0aDogY2FsYygxMDAlIC0gMTUwcHgpO1xyXG5mbG9hdDogbGVmdDtcclxuYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuYm9yZGVyLXJhZGl1czogNHB4O1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjZGJlM2U4O1xyXG5tYXJnaW46IDAgNXB4IDIwcHggMTVweDtcclxuY29sb3I6ICM3ODgyODg7XHJcbn1cclxuXHJcbi5tZXNzYWdlOmFmdGVyIHtcclxuY29udGVudDogXCJcIjtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG50b3A6IDExcHg7XHJcbmxlZnQ6IDYzcHg7XHJcbmZsb2F0OiBsZWZ0O1xyXG56LWluZGV4OiAxMDA7XHJcbmJvcmRlci10b3A6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbmJvcmRlci1sZWZ0OiBub25lO1xyXG5ib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5ib3JkZXItcmlnaHQ6IDEzcHggc29saWQgI2ZmZjtcclxufVxyXG5cclxuLm1lc3NhZ2U6YmVmb3JlIHtcclxuY29udGVudDogXCJcIjtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG50b3A6IDEwcHg7XHJcbmxlZnQ6IDYycHg7XHJcbmZsb2F0OiBsZWZ0O1xyXG56LWluZGV4OiA5OTtcclxuYm9yZGVyLXRvcDogMTFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbmJvcmRlci1ib3R0b206IDExcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbmJvcmRlci1yaWdodDogMTNweCBzb2xpZCAjZGJlM2U4O1xyXG59XHJcblxyXG4ubWVzc2FnZSAubWVkaXVtLWltYWdlIHtcclxuZmxvYXQ6IGxlZnQ7XHJcbm1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZSAubWVzc2FnZS1pbmZvIHtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMjJweDtcclxufVxyXG5cclxuLm1lc3NhZ2UgLm1lc3NhZ2UtaW5mbyA+IGg1ID4gaSB7XHJcbmZvbnQtc2l6ZTogMTFweDtcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxubWFyZ2luOiAwIDJweCAwIDA7XHJcbmNvbG9yOiAjYTJiOGM1O1xyXG59XHJcblxyXG4ubWVzc2FnZSAubWVzc2FnZS1pbmZvID4gaDUge1xyXG5jb2xvcjogI2EyYjhjNTtcclxubWFyZ2luOiA4cHggMCAwIDA7XHJcbmZvbnQtc2l6ZTogMTJweDtcclxuZmxvYXQ6IHJpZ2h0O1xyXG5wYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZSAubWVzc2FnZS1pbmZvID4gaDQge1xyXG5mb250LXNpemU6IDE0cHg7XHJcbmZvbnQtd2VpZ2h0OiA2MDA7XHJcbm1hcmdpbjogN3B4IDEzcHggMCAxMHB4O1xyXG5jb2xvcjogIzY3NDJlMGQ1O1xyXG5mbG9hdDogbGVmdDtcclxufVxyXG5cclxuLm1lc3NhZ2UgaHIge1xyXG5tYXJnaW46IDRweCAyJTtcclxud2lkdGg6IDk2JTtcclxub3BhY2l0eTogMC43NTtcclxufVxyXG5cclxuLm1lc3NhZ2UgLm1lc3NhZ2UtdGV4dCB7XHJcbnRleHQtYWxpZ246IGxlZnQ7XHJcbnBhZGRpbmc6IDNweCAxM3B4IDEwcHggMTNweDtcclxuZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS5teS1tZXNzYWdlIC5tZXNzYWdlLWJvZHkge1xyXG5mbG9hdDogcmlnaHQ7XHJcbm1hcmdpbjogMCAxNXB4IDIwcHggNXB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS5teS1tZXNzYWdlOmFmdGVyIHtcclxuY29udGVudDogXCJcIjtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG50b3A6IDExcHg7XHJcbmxlZnQ6IGF1dG87XHJcbnJpZ2h0OiA2M3B4O1xyXG5mbG9hdDogbGVmdDtcclxuei1pbmRleDogMTAwO1xyXG5ib3JkZXItdG9wOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5ib3JkZXItbGVmdDogMTNweCBzb2xpZCAjZmZmO1xyXG5ib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5ib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn1cclxuXHJcbi5tZXNzYWdlLm15LW1lc3NhZ2U6YmVmb3JlIHtcclxuY29udGVudDogXCJcIjtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG50b3A6IDEwcHg7XHJcbmxlZnQ6IGF1dG87XHJcbnJpZ2h0OiA2MnB4O1xyXG5mbG9hdDogbGVmdDtcclxuei1pbmRleDogOTk7XHJcbmJvcmRlci10b3A6IDExcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbmJvcmRlci1sZWZ0OiAxM3B4IHNvbGlkICNkYmUzZTg7XHJcbmJvcmRlci1ib3R0b206IDExcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbmJvcmRlci1yaWdodDogbm9uZTtcclxufVxyXG5cclxuLm1lc3NhZ2UubXktbWVzc2FnZSAubWVkaXVtLWltYWdlIHtcclxuZmxvYXQ6IHJpZ2h0O1xyXG5tYXJnaW4tbGVmdDogNXB4O1xyXG5tYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlLm15LW1lc3NhZ2UgLm1lc3NhZ2UtaW5mbyA+IGg1IHtcclxuZmxvYXQ6IGxlZnQ7XHJcbnBhZGRpbmctbGVmdDogMTBweDtcclxucGFkZGluZy1yaWdodDogMDtcclxufVxyXG5cclxuLm1lc3NhZ2UubXktbWVzc2FnZSAubWVzc2FnZS1pbmZvID4gaDQge1xyXG5mbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5tZXNzYWdlLmluZm8gLm1lc3NhZ2UtYm9keSB7XHJcbmJhY2tncm91bmQtY29sb3I6ICM2NzQyZTBkNTtcclxuYm9yZGVyOiAxcHggc29saWQgIzY3NDJlMGJiO1xyXG5jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm1lc3NhZ2UuaW5mbzphZnRlciwgLm1lc3NhZ2UuaW5mbzpiZWZvcmUge1xyXG5ib3JkZXItcmlnaHQ6IDEzcHggc29saWQgIzY3NDJlMGQ1O1xyXG59XHJcblxyXG4ubWVzc2FnZS5zdWNjZXNzIC5tZXNzYWdlLWJvZHkge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMGVjOGEyO1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjMGVjOGEyO1xyXG5jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm1lc3NhZ2Uuc3VjY2VzczphZnRlciwgLm1lc3NhZ2Uuc3VjY2VzczpiZWZvcmUge1xyXG5ib3JkZXItcmlnaHQ6IDEzcHggc29saWQgIzBlYzhhMjtcclxufVxyXG5cclxuLm1lc3NhZ2Uud2FybmluZyAubWVzc2FnZS1ib2R5IHtcclxuYmFja2dyb3VuZC1jb2xvcjogI2ZmOWUyYTtcclxuYm9yZGVyOiAxcHggc29saWQgI2ZmOWUyYTtcclxuY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tZXNzYWdlLndhcm5pbmc6YWZ0ZXIsIC5tZXNzYWdlLndhcm5pbmc6YmVmb3JlIHtcclxuYm9yZGVyLXJpZ2h0OiAxM3B4IHNvbGlkICNmZjllMmE7XHJcbn1cclxuXHJcbi5tZXNzYWdlLmRhbmdlciAubWVzc2FnZS1ib2R5IHtcclxuYmFja2dyb3VuZC1jb2xvcjogI2Y5NTg1ODtcclxuYm9yZGVyOiAxcHggc29saWQgI2Y5NTg1ODtcclxuY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tZXNzYWdlLmRhbmdlcjphZnRlciwgLm1lc3NhZ2UuZGFuZ2VyOmJlZm9yZSB7XHJcbmJvcmRlci1yaWdodDogMTNweCBzb2xpZCAjZjk1ODU4O1xyXG59XHJcblxyXG4ubWVzc2FnZS5kYXJrIC5tZXNzYWdlLWJvZHkge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMzE0NTU3O1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjMzE0NTU3O1xyXG5jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm1lc3NhZ2UuZGFyazphZnRlciwgLm1lc3NhZ2UuZGFyazpiZWZvcmUge1xyXG5ib3JkZXItcmlnaHQ6IDEzcHggc29saWQgIzMxNDU1NztcclxufVxyXG5cclxuLm1lc3NhZ2UuaW5mbyAubWVzc2FnZS1pbmZvID4gaDQsIC5tZXNzYWdlLnN1Y2Nlc3MgLm1lc3NhZ2UtaW5mbyA+IGg0LFxyXG4ubWVzc2FnZS53YXJuaW5nIC5tZXNzYWdlLWluZm8gPiBoNCwgLm1lc3NhZ2UuZGFuZ2VyIC5tZXNzYWdlLWluZm8gPiBoNCxcclxuLm1lc3NhZ2UuZGFyayAubWVzc2FnZS1pbmZvID4gaDQge1xyXG5jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm1lc3NhZ2UuaW5mbyAubWVzc2FnZS1pbmZvID4gaDUsIC5tZXNzYWdlLmluZm8gLm1lc3NhZ2UtaW5mbyA+IGg1ID4gaSxcclxuLm1lc3NhZ2Uuc3VjY2VzcyAubWVzc2FnZS1pbmZvID4gaDUsIC5tZXNzYWdlLnN1Y2Nlc3MgLm1lc3NhZ2UtaW5mbyA+IGg1ID4gaSxcclxuLm1lc3NhZ2Uud2FybmluZyAubWVzc2FnZS1pbmZvID4gaDUsIC5tZXNzYWdlLndhcm5pbmcgLm1lc3NhZ2UtaW5mbyA+IGg1ID4gaSxcclxuLm1lc3NhZ2UuZGFuZ2VyIC5tZXNzYWdlLWluZm8gPiBoNSwgLm1lc3NhZ2UuZGFuZ2VyIC5tZXNzYWdlLWluZm8gPiBoNSA+IGksXHJcbi5tZXNzYWdlLmRhcmsgLm1lc3NhZ2UtaW5mbyA+IGg1LCAubWVzc2FnZS5kYXJrIC5tZXNzYWdlLWluZm8gPiBoNSA+IGkge1xyXG5jb2xvcjogI2ZmZjtcclxub3BhY2l0eTogMC45O1xyXG59XHJcblxyXG4uY2hhdC1mb290ZXIge1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG5wYWRkaW5nOiAwIDgwcHg7XHJcbn1cclxuXHJcbi5jaGF0LWZvb3RlciAuc2VuZC1tZXNzYWdlLXRleHQge1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5cclxuYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuYm9yZGVyLXJhZGl1czogNXB4O1xyXG5wYWRkaW5nOiA1cHggOTVweCA1cHggMTBweDtcclxuZm9udC1zaXplOiAxM3B4O1xyXG5yZXNpemU6IHZlcnRpY2FsO1xyXG5vdXRsaW5lOiBub25lO1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjZTBlNmViO1xyXG59XHJcblxyXG4uY2hhdC1mb290ZXIgLnNlbmQtbWVzc2FnZS1idXR0b24ge1xyXG5kaXNwbGF5OiBibG9jaztcclxuXHJcbm1hcmdpbjogYXV0bztcclxuYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjA1KTtcclxub3V0bGluZTogbm9uZTtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxuYm9yZGVyLXJhZGl1czogNTAlO1xyXG5wYWRkaW5nOiAwO1xyXG59XHJcbi5jaGF0LWZvb3RlciAuc2VuZC1tZXNzYWdlLWJ1dHRvbiA+IGkge1xyXG5mb250LXNpemU6IDE2cHg7XHJcbm1hcmdpbjogMCAwIDAgLTJweDtcclxufVxyXG4vKiBQcm9maWxlIHBhZ2UgKi9cclxuXHJcbi5wcm9maWxlLW1haW4ge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjZGNlMmU5O1xyXG5ib3JkZXItcmFkaXVzOiAzcHg7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxubWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */";

/***/ }),

/***/ 344:
/*!*************************************************************!*\
  !*** ./src/app/modals/masinfo/masinfo.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>   \r\n    <ion-buttons slot=\"start\">     \r\n      <ion-button (click)=\"cancel()\">\r\n        <ion-icon name=\"arrow-back-sharp\" style=\"font-size: 22px;color:#5BA4C0;\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<ion-card>\r\n  \r\n  <ion-card-header style=\"\r\n    display: flex;\r\n    justify-content: center;    \r\n    margin-left: 0;\">\r\n    <ion-img alt=\"{{nombreProducto}}\" src=\"{{urlRoot}}/images/{{fotoProducto}}\" \r\n    style=\"max-width:300px;max-height: 300px;\"></ion-img>\r\n  </ion-card-header>\r\n  <ion-card-header>\r\n    <ion-card-title><span style=\"font-weight:bold;font-size: 22px;\">{{nombreProducto}}</span></ion-card-title>    \r\n  </ion-card-header>\r\n\r\n  <ion-card-content style=\"font-size: 20px;\">\r\n    {{descripcionProducto}}\r\n  </ion-card-content>\r\n\r\n  \r\n\r\n  \r\n\r\n  \r\n  \r\n</ion-card>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_modals_masinfo_masinfo_page_ts.js.map