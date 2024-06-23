"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_modals_comprobante_comprobante_page_ts"],{

/***/ 1182:
/*!*******************************************!*\
  !*** ./src/app/imagesprovider.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagesproviderService": () => (/* binding */ ImagesproviderService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2378);

/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */



let ImagesproviderService = class ImagesproviderService {
    /**
     * @name _REMOTE_URI
     * @type String
     * @private
     * @description              The URI for the remote PHP script that will handle the image upload/parsing
     */
    constructor(http) {
        this.http = http;
        /**
         * @name _READER
         * @type object
         * @private
         * @description              Creates a FileReader API object
         */
        this._READER = new FileReader();
    }
    handleImageSelection(event) {
        const file = event.target.files[0];
        this._READER.readAsDataURL(file);
        return rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable.create((observer) => {
            this._READER.onloadend = () => {
                observer.next(this._READER.result);
                observer.complete();
            };
        });
    }
    isCorrectFileType(file) {
        return (/^(gif|jpg|jpeg|png)$/i).test(file);
    }
    random() {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < 21; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    uploadImageSelection(vidorden, vfile, mimeType, url) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/octet-stream' });
        const fileName = 'foto_comprobante_' + this.random() + '_' + vidorden + '.' + mimeType;
        const options = {
            idOrden: vidorden,
            name: fileName,
            file: vfile
        };
        return this.http.post((url) + '/index.php/Api/cargaComprobante', JSON.stringify(options), headers);
    }
};
ImagesproviderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ImagesproviderService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ImagesproviderService);



/***/ }),

/***/ 6893:
/*!********************************************************!*\
  !*** ./src/app/modals/comprobante/comprobante.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComprobantePage": () => (/* binding */ ComprobantePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _comprobante_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comprobante.page.html?ngResource */ 2030);
/* harmony import */ var _comprobante_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comprobante.page.scss?ngResource */ 9156);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _imagesprovider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../imagesprovider.service */ 1182);
/* harmony import */ var _iniciarusuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../iniciarusuario.service */ 7574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _capacitor_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/clipboard */ 4410);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config */ 9698);




/* eslint-disable @typescript-eslint/naming-convention */








let ComprobantePage = class ComprobantePage {
    constructor(navCtrl, location, ALERT, IMAGES, storage, navParams, modalCtrl, inicia) {
        this.navCtrl = navCtrl;
        this.location = location;
        this.ALERT = ALERT;
        this.IMAGES = IMAGES;
        this.storage = storage;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.inicia = inicia;
        this.isSelected = false;
        this.urlRoot = _config__WEBPACK_IMPORTED_MODULE_6__.AppConfig.urlRoot;
        this.idOrden = this.navParams.get('idOrden');
        this.totalSuma = this.navParams.get('totalSuma');
        this.ifGuardaImagen = true;
        this.urlRoot = this.navParams.get('url_proyecto');
    }
    selectFileToUpload(event) {
        // eslint-disable-next-line no-underscore-dangle
        this.IMAGES
            .handleImageSelection(event)
            .subscribe((res) => {
            // Retrieve the file type from the base64 data URI string
            this.SUFFIX = res.split(':')[1].split('/')[1].split(';')[0];
            // Do we have correct file type?
            if (this.IMAGES.isCorrectFileType(this.SUFFIX)) {
                // Hide the file input field, display the image in the component template
                // and display an upload button
                this.isSelected = true;
                this.image = res;
                this.displayAlert('Ahora debes hacer click en ENVIAR', 'light');
            }
            // If we don't alert the user
            else {
                this.displayAlert('Tenes que subir una imágen que tenga los siguientes formatos: jpg, gif or png', 'warning');
            }
        }, (error) => {
            console.dir(error);
            this.displayAlert(error.message, 'warning');
        });
    }
    myBackButton() {
        this.location.back();
    }
    uploadFile() {
        this.ifGuardaImagen = false;
        this.IMAGES
            //.uploadImageSelection(this.getUsuario(),
            //.uploadImageSelection(this.idusuario,
            .uploadImageSelection(this.idOrden, this.image, this.SUFFIX, (this.urlRoot))
            .subscribe((res) => {
            this.displayAlert(res.message, 'success');
            this.ifGuardaImagen = true;
            this.modalCtrl.dismiss();
        }, (error) => {
            this.ifGuardaImagen = true;
            console.dir(error);
            this.displayAlert('Error! Este comprobante ya fue enviado.', 'warning');
            this.modalCtrl.dismiss();
        });
    }
    /**
     * @public
     * @method displayAlert
     * @param message  {string}  The message to be displayed to the user
     * @description    			Use the Ionic AlertController API to provide user feedback
     * @return {none}
     */
    displayAlert(message, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.ALERT.create({
                message,
                duration: 3000,
                position: 'bottom',
                color: color
            });
            toast.present();
        });
    }
    copiarCbu() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            //total final resto es total final menos el 23% que seria la comision.
            const cbu = '898798798798798978978';
            _capacitor_clipboard__WEBPACK_IMPORTED_MODULE_5__.Clipboard.write({
                // eslint-disable-next-line id-blacklist
                string: '' + cbu,
            });
            this.displayAlert('Se copió el CBU:  ' + cbu, 'success');
            //Va a ir Link personalizado.
        });
    }
    cancel() {
        return this.modalCtrl.dismiss(null, 'cancel');
    }
    ngOnInit() { }
};
ComprobantePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _imagesprovider_service__WEBPACK_IMPORTED_MODULE_2__.ImagesproviderService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _iniciarusuario_service__WEBPACK_IMPORTED_MODULE_3__.IniciarusuarioService }
];
ComprobantePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-comprobante',
        template: _comprobante_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_comprobante_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComprobantePage);



/***/ }),

/***/ 3509:
/*!*******************************************************************!*\
  !*** ./node_modules/@capacitor/clipboard/dist/esm/definitions.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 4410:
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/clipboard/dist/esm/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Clipboard": () => (/* binding */ Clipboard)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web */ 7784);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions */ 3509);


const Clipboard = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Clipboard', {
    web: () => new _web__WEBPACK_IMPORTED_MODULE_1__.ClipboardWeb(),
});




/***/ }),

/***/ 7784:
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/clipboard/dist/esm/web.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClipboardWeb": () => (/* binding */ ClipboardWeb)
/* harmony export */ });
/* harmony import */ var D_Proyectos_Clientes_surclean_surclean_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 5099);


class ClipboardWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.WebPlugin {
  write(options) {
    var _this = this;
    return (0,D_Proyectos_Clientes_surclean_surclean_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (typeof navigator === 'undefined' || !navigator.clipboard) {
        throw _this.unavailable('Clipboard API not available in this browser');
      }
      if (options.string !== undefined) {
        yield _this.writeText(options.string);
      } else if (options.url) {
        yield _this.writeText(options.url);
      } else if (options.image) {
        if (typeof ClipboardItem !== 'undefined') {
          try {
            const blob = yield (yield fetch(options.image)).blob();
            const clipboardItemInput = new ClipboardItem({
              [blob.type]: blob
            });
            yield navigator.clipboard.write([clipboardItemInput]);
          } catch (err) {
            throw new Error('Failed to write image');
          }
        } else {
          throw _this.unavailable('Writing images to the clipboard is not supported in this browser');
        }
      } else {
        throw new Error('Nothing to write');
      }
    })();
  }
  read() {
    var _this2 = this;
    return (0,D_Proyectos_Clientes_surclean_surclean_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (typeof navigator === 'undefined' || !navigator.clipboard) {
        throw _this2.unavailable('Clipboard API not available in this browser');
      }
      if (typeof ClipboardItem !== 'undefined') {
        try {
          const clipboardItems = yield navigator.clipboard.read();
          const type = clipboardItems[0].types[0];
          const clipboardBlob = yield clipboardItems[0].getType(type);
          const data = yield _this2._getBlobData(clipboardBlob, type);
          return {
            value: data,
            type
          };
        } catch (err) {
          return _this2.readText();
        }
      } else {
        return _this2.readText();
      }
    })();
  }
  readText() {
    var _this3 = this;
    return (0,D_Proyectos_Clientes_surclean_surclean_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (typeof navigator === 'undefined' || !navigator.clipboard || !navigator.clipboard.readText) {
        throw _this3.unavailable('Reading from clipboard not supported in this browser');
      }
      const text = yield navigator.clipboard.readText();
      return {
        value: text,
        type: 'text/plain'
      };
    })();
  }
  writeText(text) {
    var _this4 = this;
    return (0,D_Proyectos_Clientes_surclean_surclean_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (typeof navigator === 'undefined' || !navigator.clipboard || !navigator.clipboard.writeText) {
        throw _this4.unavailable('Writting to clipboard not supported in this browser');
      }
      yield navigator.clipboard.writeText(text);
    })();
  }
  _getBlobData(clipboardBlob, type) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      if (type.includes('image')) {
        reader.readAsDataURL(clipboardBlob);
      } else {
        reader.readAsText(clipboardBlob);
      }
      reader.onloadend = () => {
        const r = reader.result;
        resolve(r);
      };
      reader.onerror = e => {
        reject(e);
      };
    });
  }
}

/***/ }),

/***/ 5099:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": () => (/* binding */ Capacitor),
/* harmony export */   "CapacitorException": () => (/* binding */ CapacitorException),
/* harmony export */   "CapacitorPlatforms": () => (/* binding */ CapacitorPlatforms),
/* harmony export */   "ExceptionCode": () => (/* binding */ ExceptionCode),
/* harmony export */   "Plugins": () => (/* binding */ Plugins),
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin),
/* harmony export */   "WebView": () => (/* binding */ WebView),
/* harmony export */   "addPlatform": () => (/* binding */ addPlatform),
/* harmony export */   "registerPlugin": () => (/* binding */ registerPlugin),
/* harmony export */   "registerWebPlugin": () => (/* binding */ registerWebPlugin),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform)
/* harmony export */ });
/* harmony import */ var D_Proyectos_Clientes_surclean_surclean_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);

/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = win => {
  const defaultPlatformMap = new Map();
  defaultPlatformMap.set('web', {
    name: 'web'
  });
  const capPlatforms = win.CapacitorPlatforms || {
    currentPlatform: {
      name: 'web'
    },
    platforms: defaultPlatformMap
  };
  const addPlatform = (name, platform) => {
    capPlatforms.platforms.set(name, platform);
  };
  const setPlatform = name => {
    if (capPlatforms.platforms.has(name)) {
      capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
    }
  };
  capPlatforms.addPlatform = addPlatform;
  capPlatforms.setPlatform = setPlatform;
  return capPlatforms;
};
const initPlatforms = win => win.CapacitorPlatforms = createCapacitorPlatforms(win);
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const setPlatform = CapacitorPlatforms.setPlatform;
const legacyRegisterWebPlugin = (cap, webPlugin) => {
  var _a;
  const config = webPlugin.config;
  const Plugins = cap.Plugins;
  if (!config || !config.name) {
    // TODO: add link to upgrade guide
    throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
  }
  // TODO: add link to upgrade guide
  console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);
  if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
    // Add the web plugin into the plugins registry if there already isn't
    // an existing one. If it doesn't already exist, that means
    // there's no existing native implementation for it.
    // - OR -
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    Plugins[config.name] = webPlugin;
  }
};
var ExceptionCode;
(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */
  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));
class CapacitorException extends Error {
  constructor(message, code) {
    super(message);
    this.message = message;
    this.code = code;
  }
}
const getPlatformId = win => {
  var _a, _b;
  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return 'android';
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return 'ios';
  } else {
    return 'web';
  }
};
const createCapacitor = win => {
  var _a, _b, _c, _d, _e;
  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  /**
   * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
   */
  const capPlatforms = win.CapacitorPlatforms;
  const defaultGetPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };
  const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;
  const defaultIsNativePlatform = () => getPlatform() !== 'web';
  const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;
  const defaultIsPluginAvailable = pluginName => {
    const plugin = registeredPlugins.get(pluginName);
    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      // JS implementation available for the current platform.
      return true;
    }
    if (getPluginHeader(pluginName)) {
      // Native implementation available.
      return true;
    }
    return false;
  };
  const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;
  const defaultGetPluginHeader = pluginName => {
    var _a;
    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
  };
  const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;
  const handleError = err => win.console.error(err);
  const pluginMethodNoop = (_target, prop, pluginName) => {
    return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
  };
  const registeredPlugins = new Map();
  const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);
    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }
    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;
    const loadPluginImplementation = /*#__PURE__*/function () {
      var _ref = (0,D_Proyectos_Clientes_surclean_surclean_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = yield jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }
        return jsImplementation;
      });
      return function loadPluginImplementation() {
        return _ref.apply(this, arguments);
      };
    }();
    const createPluginMethod = (impl, prop) => {
      var _a, _b;
      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);
        if (methodHeader) {
          if (methodHeader.rtype === 'promise') {
            return options => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };
    const createPluginMethodWrapper = prop => {
      let remove;
      const wrapper = (...args) => {
        const p = loadPluginImplementation().then(impl => {
          const fn = createPluginMethod(impl, prop);
          if (fn) {
            const p = fn(...args);
            remove = p === null || p === void 0 ? void 0 : p.remove;
            return p;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });
        if (prop === 'addListener') {
          p.remove = /*#__PURE__*/(0,D_Proyectos_Clientes_surclean_surclean_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return remove();
          });
        }
        return p;
      };
      // Some flair ✨
      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
      Object.defineProperty(wrapper, 'name', {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };
    const addListener = createPluginMethodWrapper('addListener');
    const removeListener = createPluginMethodWrapper('removeListener');
    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);
      const remove = /*#__PURE__*/function () {
        var _ref3 = (0,D_Proyectos_Clientes_surclean_surclean_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const callbackId = yield call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        });
        return function remove() {
          return _ref3.apply(this, arguments);
        };
      }();
      const p = new Promise(resolve => call.then(() => resolve({
        remove
      })));
      p.remove = /*#__PURE__*/(0,D_Proyectos_Clientes_surclean_surclean_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };
    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case '$$typeof':
            return undefined;
          case 'toJSON':
            return () => ({});
          case 'addListener':
            return pluginHeader ? addListenerNative : addListener;
          case 'removeListener':
            return removeListener;
          default:
            return createPluginMethodWrapper(prop);
        }
      }
    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
    });
    return proxy;
  };
  const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin;
  // Add in convertFileSrc for web, it will already be available in native context
  if (!cap.convertFileSrc) {
    cap.convertFileSrc = filePath => filePath;
  }
  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.pluginMethodNoop = pluginMethodNoop;
  cap.registerPlugin = registerPlugin;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled;
  // Deprecated props
  cap.platform = cap.getPlatform();
  cap.isNative = cap.isNativePlatform();
  return cap;
};
const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);
const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */
const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */
const registerWebPlugin = plugin => legacyRegisterWebPlugin(Capacitor, plugin);

/**
 * Base class web plugins should extend.
 */
class WebPlugin {
  constructor(config) {
    this.listeners = {};
    this.windowListeners = {};
    if (config) {
      // TODO: add link to upgrade guide
      console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
      this.config = config;
    }
  }
  addListener(eventName, listenerFunc) {
    var _this = this;
    const listeners = this.listeners[eventName];
    if (!listeners) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(listenerFunc);
    // If we haven't added a window listener for this event and it requires one,
    // go ahead and add it
    const windowListener = this.windowListeners[eventName];
    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }
    const remove = /*#__PURE__*/function () {
      var _ref5 = (0,D_Proyectos_Clientes_surclean_surclean_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this.removeListener(eventName, listenerFunc);
      });
      return function remove() {
        return _ref5.apply(this, arguments);
      };
    }();
    const p = Promise.resolve({
      remove
    });
    Object.defineProperty(p, 'remove', {
      value: function () {
        var _ref6 = (0,D_Proyectos_Clientes_surclean_surclean_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.warn(`Using addListener() without 'await' is deprecated.`);
          yield remove();
        });
        return function value() {
          return _ref6.apply(this, arguments);
        };
      }()
    });
    return p;
  }
  removeAllListeners() {
    var _this2 = this;
    return (0,D_Proyectos_Clientes_surclean_surclean_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.listeners = {};
      for (const listener in _this2.windowListeners) {
        _this2.removeWindowListener(_this2.windowListeners[listener]);
      }
      _this2.windowListeners = {};
    })();
  }
  notifyListeners(eventName, data) {
    const listeners = this.listeners[eventName];
    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }
  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }
  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: event => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }
  unimplemented(msg = 'not implemented') {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }
  unavailable(msg = 'not available') {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }
  removeListener(eventName, listenerFunc) {
    var _this3 = this;
    return (0,D_Proyectos_Clientes_surclean_surclean_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const listeners = _this3.listeners[eventName];
      if (!listeners) {
        return;
      }
      const index = listeners.indexOf(listenerFunc);
      _this3.listeners[eventName].splice(index, 1);
      // If there are no more listeners for this type of event,
      // remove the window listener
      if (!_this3.listeners[eventName].length) {
        _this3.removeWindowListener(_this3.windowListeners[eventName]);
      }
    })();
  }
  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }
  removeWindowListener(handle) {
    if (!handle) {
      return;
    }
    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }
}
const WebView = /*#__PURE__*/registerPlugin('WebView');


/***/ }),

/***/ 9156:
/*!*********************************************************************!*\
  !*** ./src/app/modals/comprobante/comprobante.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wcm9iYW50ZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 2030:
/*!*********************************************************************!*\
  !*** ./src/app/modals/comprobante/comprobante.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>    \r\n    \r\n\r\n    <ion-buttons slot=\"start\">     \r\n      <ion-button (click)=\"copiarCbu()\">\r\n        <ion-icon name=\"copy-sharp\" style=\"font-size: 22px;\"></ion-icon> Copiar CBU         \r\n      </ion-button>      \r\n    </ion-buttons>\r\n\r\n    <ion-buttons slot=\"end\">     \r\n      <ion-button>\r\n        Total a pagar: $ {{totalSuma}}         \r\n      </ion-button>      \r\n    </ion-buttons>\r\n\r\n    <ion-buttons slot=\"end\">     \r\n      <ion-button routerLink=\"/tab3\" (click)=\"cancel()\">\r\n        <ion-icon name=\"close-sharp\" style=\"font-size: 22px;\"></ion-icon>         \r\n      </ion-button>\r\n    </ion-buttons>\r\n     \r\n  </ion-toolbar>\r\n</ion-header>\r\n    \r\n\r\n\r\n<ion-content padding>\r\n\r\n  <ion-card>\r\n    <ion-label style=\"margin-left:20px;margin-top:40px;font-weight: bold;\">Comprobante transferencia</ion-label>\r\n    <ion-card-header class=\"etiqueta\">\r\n       \r\n\r\n      <div *ngIf=\"!isSelected\">\r\n\r\n        <input\r\n           type=\"file\"\r\n           (change)=\"selectFileToUpload($event)\">\r\n     </div>\r\n     <ion-row *ngIf=\"!ifGuardaImagen\">\r\n      <ion-col></ion-col><ion-col></ion-col>           \r\n      <ion-col><ion-spinner name=\"lines\"></ion-spinner></ion-col>          \r\n      <ion-col></ion-col><ion-col></ion-col>       \r\n    </ion-row>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n\r\n      <div *ngIf=\"isSelected\">        \r\n        <ion-button  shape=\"round\" expand=\"block\" fill=\"outline\"\r\n           (click)=\"uploadFile()\">Enviar</ion-button>\r\n\r\n           <!-- Display the selected image -->\r\n        <img [src]=\"image\">\r\n     </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n </ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_modals_comprobante_comprobante_page_ts.js.map