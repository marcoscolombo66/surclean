"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 9818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 3746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3-routing.module */ 9818);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page */ 8592);







let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_0__.Tab3PageRoutingModule
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_1__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 8592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page.html?ngResource */ 9769);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss?ngResource */ 7087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _iniciarusuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../iniciarusuario.service */ 7574);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3491);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _modals_orden_orden_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/orden/orden.page */ 5362);
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config */ 9698);











let Tab3Page = class Tab3Page {
    constructor(location, inicia, http, modalCtrl) {
        this.location = location;
        this.inicia = inicia;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.canDismiss = false;
        this.urlRoot = src_app_config__WEBPACK_IMPORTED_MODULE_4__.AppConfig.urlRoot;
        this.nomostrar = true;
        const numbers = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.interval)(20000);
        numbers.subscribe(() => {
            this.getOrdenes();
        });
    }
    ngOnInit() {
        this.inicia.verificar();
        this.getOrdenes();
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    openWindow(url) {
        window.open(url, '_system', 'location=yes');
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    getOrdenes() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.nomostrar = false;
            // eslint-disable-next-line @typescript-eslint/naming-convention
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({ 'Content-Type': 'application/octet-stream' });
            this.idUSUARIO = yield this.inicia.getUser();
            const options = {
                //idNEGOCIOS,
                idUsuario: this.idUSUARIO['0'].idUsuario
            };
            //options 	: any		= { "idNEGOCIOS": '1' };
            (this.http.post(this.urlRoot + '/index.php/Api/getOrdenes/', JSON.stringify(options), headers))
                //probar crear otra consulta q devuelva valores location y stopover en api php.
                .subscribe((res) => {
                this.consulta = res;
                this.nomostrar = true;
                //console.log('reservas',this.reservas);
            }, (error) => {
                //console.log('error',error);
                //this.presentAlert(' ¡Atención! ','Este vehiculo no esta registrado en el barrio.','Se recomienda llamar al 101');
                this.nomostrar = false;
                console.log(error);
                //this.navCtrl.navigateRoot('/tab3');
            });
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    myBackButton() {
        this.location.back();
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    modalMasInfo(idOrden, fecha, totalCompra, respuesta, dataProductos, procesaPago, metodoPago) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modals_orden_orden_page__WEBPACK_IMPORTED_MODULE_3__.OrdenPage,
                componentProps: {
                    idOrden: idOrden,
                    fecha: fecha,
                    totalCompra: totalCompra,
                    respuesta: respuesta,
                    dataProductos: dataProductos,
                    procesaPago: procesaPago,
                    metodoPago: metodoPago
                },
                animated: true,
                canDismiss: true,
                keyboardClose: true,
            });
            yield modal.present();
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location },
    { type: _iniciarusuario_service__WEBPACK_IMPORTED_MODULE_2__.IniciarusuarioService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-tab3',
        template: _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab3Page);



/***/ }),

/***/ 1925:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scheduler": () => (/* binding */ Scheduler)
/* harmony export */ });
class Scheduler {
    constructor(SchedulerAction, now = Scheduler.now) {
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    schedule(work, delay = 0, state) {
        return new this.SchedulerAction(this, work).schedule(state, delay);
    }
}
Scheduler.now = () => Date.now();


/***/ }),

/***/ 3491:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/interval.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interval": () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 2378);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 328);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isNumeric */ 7269);



function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    if (!(0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_1__.isNumeric)(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber, counter: 0, period }));
        return subscriber;
    });
}
function dispatch(state) {
    const { subscriber, counter, period } = state;
    subscriber.next(counter);
    this.schedule({ subscriber, counter: counter + 1, period }, period);
}


/***/ }),

/***/ 5353:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 2425);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
    constructor(scheduler, work) {
        super();
    }
    schedule(state, delay = 0) {
        return this;
    }
}


/***/ }),

/***/ 3670:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncAction": () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 5353);

class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    schedule(state, delay = 0) {
        if (this.closed) {
            return this;
        }
        this.state = state;
        const id = this.id;
        const scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    }
    execute(state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        const error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    }
    _execute(state, delay) {
        let errored = false;
        let errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    }
    _unsubscribe() {
        const id = this.id;
        const scheduler = this.scheduler;
        const actions = scheduler.actions;
        const index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    }
}


/***/ }),

/***/ 2901:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncScheduler": () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 1925);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
    constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
        super(SchedulerAction, () => {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        });
        this.actions = [];
        this.active = false;
        this.scheduled = undefined;
    }
    schedule(work, delay = 0, state) {
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return super.schedule(work, delay, state);
        }
    }
    flush(action) {
        const { actions } = this;
        if (this.active) {
            actions.push(action);
            return;
        }
        let error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}


/***/ }),

/***/ 328:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asyncScheduler": () => (/* binding */ asyncScheduler),
/* harmony export */   "async": () => (/* binding */ async)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 3670);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 2901);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;


/***/ }),

/***/ 7269:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isNumeric.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNumeric": () => (/* binding */ isNumeric)
/* harmony export */ });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ 4327);

function isNumeric(val) {
    return !(0,_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(val) && (val - parseFloat(val) + 1) >= 0;
}


/***/ }),

/***/ 7087:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n.pendiente {\n  background: #eeee2f;\n  color: #000;\n  font-weight: bold;\n  font-family: \"Helvetica\";\n  /* Puedes personalizar el color amarillo según tus necesidades */\n  padding: 5px;\n  border-radius: 10%;\n  text-transform: capitalize;\n}\n.fallo {\n  background: red;\n  color: #fff;\n  font-weight: bold;\n  font-family: \"Helvetica\";\n  /* Puedes personalizar el color amarillo según tus necesidades */\n  padding: 5px;\n  border-radius: 10%;\n  text-transform: capitalize;\n}\n.aprobado {\n  background: #0abe61c2;\n  color: #000;\n  font-weight: bold;\n  font-family: \"Helvetica\";\n  /* Puedes personalizar el color amarillo según tus necesidades */\n  padding: 5px;\n  border-radius: 10%;\n  text-transform: capitalize;\n  /* Puedes personalizar el color verde según tus necesidades */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFBeUIsZ0VBQUE7RUFDekIsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFHSjtBQUFFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQXlCLGdFQUFBO0VBQ3pCLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBSUo7QUFERTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFBeUIsZ0VBQUE7RUFDekIsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2REFBQTtBQUtKIiwiZmlsZSI6InRhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBlbmRpZW50ZSB7ICAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlZTJmOyAgXHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EnOy8qIFB1ZWRlcyBwZXJzb25hbGl6YXIgZWwgY29sb3IgYW1hcmlsbG8gc2Vnw7puIHR1cyBuZWNlc2lkYWRlcyAqL1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWxsbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7ICBcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ0hlbHZldGljYSc7LyogUHVlZGVzIHBlcnNvbmFsaXphciBlbCBjb2xvciBhbWFyaWxsbyBzZWfDum4gdHVzIG5lY2VzaWRhZGVzICovXHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcbiAgXHJcbiAgLmFwcm9iYWRvIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiAjMGFiZTYxYzI7ICBcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ0hlbHZldGljYSc7LyogUHVlZGVzIHBlcnNvbmFsaXphciBlbCBjb2xvciBhbWFyaWxsbyBzZWfDum4gdHVzIG5lY2VzaWRhZGVzICovXHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIC8qIFB1ZWRlcyBwZXJzb25hbGl6YXIgZWwgY29sb3IgdmVyZGUgc2Vnw7puIHR1cyBuZWNlc2lkYWRlcyAqL1xyXG4gIH0iXX0= */";

/***/ }),

/***/ 9769:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>   \r\n    <ion-buttons slot=\"start\">     \r\n      <ion-button (click)=\"myBackButton()\">\r\n        <ion-icon name=\"arrow-back-sharp\" style=\"font-size: 22px;\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">     \r\n      <ion-button (click)=\"getOrdenes()\">\r\n        <ion-icon name=\"refresh-sharp\" style=\"font-size: 22px;\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<ion-grid *ngIf=\"nomostrar\" >   \r\n  <ion-card *ngFor=\"let item of consulta\">    \r\n      <ion-card-header>\r\n        <ion-card-title color=\"primary\"><label style=\"font-weight: bold;\">N° de Orden: </label>{{item.idOrden}}</ion-card-title>\r\n        <ion-card-title color=\"primary\"><label style=\"font-weight: bold;\">Fecha: </label>  {{ item.fecha | date: 'dd/MM/yyyy HH:mm' }}</ion-card-title>\r\n        <ion-card-title><label style=\"font-weight: bold;\">Total compra: </label>$ {{item.totalCompra}}</ion-card-title>        \r\n        <ion-card-title>\r\n          <label style=\"font-weight: bold;\">Estado: </label>\r\n          <label [ngClass]=\"{'pendiente': item.procesaPago === 'pendiente', 'fallo': item.procesaPago === 'fallo', 'aprobado': item.procesaPago === 'aprobado'}\">{{item.procesaPago}}</label></ion-card-title>        \r\n      </ion-card-header>      \r\n        <ion-card-content>\r\n        <ion-button fill=\"outline\" class=\"tab1IonButton\" \r\n        (click)=\"modalMasInfo(\r\n          item.idOrden,\r\n          item.fecha,\r\n          item.totalCompra,\r\n          item.respuesta,\r\n          item.dataProductos,\r\n          item.procesaPago,item.metodoPago);\">Ver orden</ion-button>       \r\n        </ion-card-content> \r\n  </ion-card> \r\n</ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map