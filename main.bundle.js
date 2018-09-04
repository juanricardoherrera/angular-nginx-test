webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\">\r\n    <img src=\"../assets/images/logo-itau.png\" alt=\"\">\r\n</div>\r\n\r\n<router-outlet>\r\n</router-outlet>\r\n\r\n<div class=\"footer-container\"></div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_catalogos_service_service__ = __webpack_require__("../../../../../src/app/services/catalogos-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_bpm_service__ = __webpack_require__("../../../../../src/app/services/bpm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_consulta_listas_service__ = __webpack_require__("../../../../../src/app/services/consulta-listas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pages_routes__ = __webpack_require__("../../../../../src/app/pages/pages.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_list_query_list_query_component__ = __webpack_require__("../../../../../src/app/pages/list-query/list-query.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__commons_directives_OnlyLettersDirective__ = __webpack_require__("../../../../../src/app/commons/directives/OnlyLettersDirective.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__commons_directives_OnlyNumbersDirective__ = __webpack_require__("../../../../../src/app/commons/directives/OnlyNumbersDirective.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__commons_directives_AddressNormalizeDirective__ = __webpack_require__("../../../../../src/app/commons/directives/AddressNormalizeDirective.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_modals_validate_modal_validate_modal_component__ = __webpack_require__("../../../../../src/app/components/modals/validate-modal/validate-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_form_link_form_link_component__ = __webpack_require__("../../../../../src/app/pages/form-link/form-link.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_solicitudes_service_service__ = __webpack_require__("../../../../../src/app/services/solicitudes-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_mask__ = __webpack_require__("../../../../ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_currency_mask__ = __webpack_require__("../../../../ng2-currency-mask/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_currency_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng2_currency_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_modals_generic_modal_generic_modal_component__ = __webpack_require__("../../../../../src/app/components/modals/generic-modal/generic-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_restrictive_list_restrictive_list_component__ = __webpack_require__("../../../../../src/app/pages/restrictive-list/restrictive-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_create_pdf_service__ = __webpack_require__("../../../../../src/app/services/create-pdf.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_get_ip_adress_service__ = __webpack_require__("../../../../../src/app/services/get-ip-adress.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Services



// Routes

// Pages

// Directives



// Modals





// Masks








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_list_query_list_query_component__["a" /* ListQueryComponent */],
                __WEBPACK_IMPORTED_MODULE_11__commons_directives_OnlyLettersDirective__["a" /* OnlyLettersDirective */],
                __WEBPACK_IMPORTED_MODULE_12__commons_directives_OnlyNumbersDirective__["a" /* OnlyNumbersDirective */],
                __WEBPACK_IMPORTED_MODULE_14__components_modals_validate_modal_validate_modal_component__["a" /* ValidateModalComponent */],
                __WEBPACK_IMPORTED_MODULE_13__commons_directives_AddressNormalizeDirective__["a" /* AddressNormalizeDirective */],
                __WEBPACK_IMPORTED_MODULE_15__pages_form_link_form_link_component__["a" /* FormLinkComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_modals_generic_modal_generic_modal_component__["a" /* GenericModalComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pages_restrictive_list_restrictive_list_component__["a" /* RestrictiveListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__pages_pages_routes__["a" /* App_Routing */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_17__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_19_ngx_mask__["a" /* NgxMaskModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_20_ng2_currency_mask__["CurrencyMaskModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_catalogos_service_service__["a" /* CatalogosServiceService */],
                __WEBPACK_IMPORTED_MODULE_18__services_solicitudes_service_service__["a" /* SolicitudesServiceService */],
                __WEBPACK_IMPORTED_MODULE_7__services_bpm_service__["a" /* BpmService */],
                __WEBPACK_IMPORTED_MODULE_8__services_consulta_listas_service__["a" /* ConsultaListasService */],
                __WEBPACK_IMPORTED_MODULE_24__services_create_pdf_service__["a" /* CreatePdfService */],
                __WEBPACK_IMPORTED_MODULE_25__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_26__services_get_ip_adress_service__["a" /* GetIpAdressService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/commons/constants/modals.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVICE_RESPONSE; });
/* unused harmony export SERVICE_RESPONSE_FAIL */
var SERVICE_RESPONSE = {
    imagen: "../../../assets/images/icono_validando.svg",
    principalText: "Cumplimiento está",
    secondaryText: " validando su solicitud",
    button: true,
    buttonText: "Cerrar",
    class: false
};
var SERVICE_RESPONSE_FAIL = {
    imagen: "../../../assets/images/icono-no_apto.svg",
    principalText: "Este cliente ",
    secondaryText: " no es apto para validar",
    buttonText: "Cerrar",
    button: "Continuar",
    class: true
};


/***/ }),

/***/ "../../../../../src/app/commons/constants/rest-config.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REST_CONFIG; });
var REST_CONFIG = {
    API_URL: "http://christianvalencia.pragma.com.co:7800/bpm/process/getAllProcesses",
    CREATE_INSTANCE: "http://christianvalencia.pragma.com.co:7800/bpm/process/createInstance",
    FINISH_TASK: "http://christianvalencia.pragma.com.co:7800/bpm/task/finishTask",
    RECLAIM_TASK: "http://christianvalencia.pragma.com.co:7800/bpm/task/reclaimTask",
    BULK_INSTANCE_ID: "http://christianvalencia.pragma.com.co:7800/bpm/process/getBulkInstanceDetails/"
};


/***/ }),

/***/ "../../../../../src/app/commons/constants/services.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    AppSettings.URL = 'http://christianvalencia.pragma.com.co:7810/';
    AppSettings.URL_SOR = 'http://christianvalencia.pragma.com.co:7700/solicitudes';
    AppSettings.URL_LIST = 'http://christianvalencia.pragma.com.co:7201/listas-restrictivas/consultarListas';
    AppSettings.URL_FINIX = 'http://christianvalencia.pragma.com.co:7202';
    AppSettings.URL_PDF = 'http://192.168.8.100:7900/';
    AppSettings.URL_LOGIN = 'http://christianvalencia.pragma.com.co:7002/integration/sapi/auth';
    return AppSettings;
}());



/***/ }),

/***/ "../../../../../src/app/commons/directives/AddressNormalizeDirective.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressNormalizeDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validations_ValidAddress__ = __webpack_require__("../../../../../src/app/commons/validations/ValidAddress.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddressNormalizeDirective = (function () {
    function AddressNormalizeDirective(_el) {
        this._el = _el;
        this.validAddress = new __WEBPACK_IMPORTED_MODULE_1__validations_ValidAddress__["a" /* ValidAddress */]();
    }
    AddressNormalizeDirective.prototype.onblur = function (event) {
        var initalValue = this._el.nativeElement.value;
        this._el.nativeElement.value = this.validAddress.validacionDireccion(initalValue);
        if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('blur', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AddressNormalizeDirective.prototype, "onblur", null);
    AddressNormalizeDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[addressNormalize]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], AddressNormalizeDirective);
    return AddressNormalizeDirective;
}());



/***/ }),

/***/ "../../../../../src/app/commons/directives/OnlyLettersDirective.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlyLettersDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnlyLettersDirective = (function () {
    function OnlyLettersDirective(_el) {
        this._el = _el;
    }
    OnlyLettersDirective.prototype.onInputChange = function (event) {
        var initalValue = this._el.nativeElement.value;
        this._el.nativeElement.value = initalValue.replace(/[^a-z|^A-Z]/g, '');
        if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OnlyLettersDirective.prototype, "onInputChange", null);
    OnlyLettersDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[onlyLetters]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], OnlyLettersDirective);
    return OnlyLettersDirective;
}());



/***/ }),

/***/ "../../../../../src/app/commons/directives/OnlyNumbersDirective.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlyNumbersDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnlyNumbersDirective = (function () {
    function OnlyNumbersDirective(_el) {
        this._el = _el;
    }
    OnlyNumbersDirective.prototype.onInputChange = function (event) {
        var initalValue = this._el.nativeElement.value;
        this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
        if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OnlyNumbersDirective.prototype, "onInputChange", null);
    OnlyNumbersDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[onlyNumbers]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], OnlyNumbersDirective);
    return OnlyNumbersDirective;
}());



/***/ }),

/***/ "../../../../../src/app/commons/validations/AddressValidator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddressValidator = (function () {
    function AddressValidator() {
        this.validator = this.addressComparison();
    }
    AddressValidator_1 = AddressValidator;
    AddressValidator.prototype.validate = function (c) { return this.validator(c); };
    AddressValidator.prototype.addressComparison = function () {
        return function (c) {
            if (c.value != undefined) {
                var arrayAddress = c.value.split(" ");
                var comparacion = ['AGRUPACION', 'APARTADO AEREO', 'APARTAMENTO', 'AUTOPISTA', 'AVENIDA', 'AVENIDA CALLE', 'AVENIDA CARRERA', 'BARRIO', 'BLOQUE', 'BODEGA', 'CALE', 'CALLE', 'CAMINO', 'CARRERA', 'CARRETERA', 'CASA', 'CELULA', 'CENTRO', 'CENTRO ADMINISTRATIVO NACIONAL', 'CENTRO COMERCIAL', 'CIRCULAR', 'CONJUNTO', 'CONSULTORIO', 'DEPOSITO', 'DIAGONAL', 'EDIFICIO', 'ENTRADA', 'ESQUINA', 'ESTE', 'ETAPA', 'GARAGE SOTANO', 'GARAJE', 'INTERIOR', 'KILOMETRO', 'LOCAL', 'LOTE', 'MANZANA', 'MEZZANINE', 'MODULO', 'MUNICIPIO', 'No', 'No.', 'NORTE', 'OCCIDENTE', 'OESTE', 'OFICINA', 'PARCELA', 'PASEO', 'PENTHOUSE', 'PISO', 'PREDIO', 'PUENTE', 'PUESTO', 'SALON COMUNAL', 'SECTOR', 'SEMISOTANO', 'SOLAR', 'SOTANO', 'SUPERMANZANA', 'SUR', 'TORRE', 'TRANSVERSAL', 'UNIDAD', 'UNIDAD RESIDENCIAL', 'URBANIZACION', 'VEREDA', 'VIA', 'ZONA', 'AG', 'A.A.', 'AP', 'AUTOP', 'AV', 'AV CL', 'AV KR', 'BRR', 'BL', 'BG', 'CL', 'CL', 'CAMINO', 'KR', 'CT', 'CS', 'CEL', 'CEN', 'CAN', 'CCO', 'CIRCULAR', 'CONJ', 'CONS', 'DP', 'DG', 'ED', 'ENT', 'ESQ', 'EST', 'ET', 'GS', 'GJ', 'INT', 'KM', 'LC', 'LT', 'MZ', 'MEZZ', 'MOD', 'MCP', 'NTE', 'OCC', 'OE', 'OF', 'PA', 'PASEO', 'PH', 'PI', 'PD', 'PTE', 'PTO', 'SC', 'SECT', 'SS', 'SL', 'ST', 'SPMZ', 'SUR', 'TRR', 'TV', 'UN', 'UR', 'URB', 'VEREDA', 'VIA', 'ZN'];
                //console.log(arrayAddress);
                for (var i = 0; i < arrayAddress.length; i++) {
                    var element = arrayAddress[0].toUpperCase();
                    console.log("Elemento: " + element);
                    //if (comparacion.includes(element)) {
                    if ((comparacion.indexOf(element))) {
                        var onlyLettersNumbers = new RegExp(/^[A-Za-z0-9\s]+$/g);
                        if (onlyLettersNumbers.test(c.value)) {
                            return null;
                        }
                    }
                    else {
                        //console.log("Direccion mala: " + c.value);
                        return {
                            addressComparison: {
                                valid: false
                            }
                        };
                    }
                }
            }
        };
    };
    AddressValidator = AddressValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
            selector: '[addressComparison][ngModel]',
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_forms__["NG_VALIDATORS"],
                    useExisting: AddressValidator_1,
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AddressValidator);
    return AddressValidator;
    var AddressValidator_1;
}());



/***/ }),

/***/ "../../../../../src/app/commons/validations/ValidAddress.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidAddress; });
var ValidAddress = (function () {
    function ValidAddress() {
    }
    ValidAddress.prototype.validacionDireccion = function (direccion) {
        var dirNormalice;
        var nuevaDireccion;
        var dirTrim;
        var maxlength = (direccion.length);
        if (maxlength > 0) {
            dirTrim = direccion.trim();
            dirNormalice = this.addressNormalize(dirTrim);
            //Eliminar espacios extras
            nuevaDireccion = dirNormalice.replace(/\s+/gi, ' ').trim();
            //console.log("Resultado Final: " + nuevaDireccion);
            return nuevaDireccion;
        }
        return "";
    };
    ValidAddress.prototype.addressNormalize = function (text) {
        var txt = text.toUpperCase();
        txt = txt.replace(/\./g, ' ');
        txt = txt.replace(/\!/g, ' ');
        txt = txt.replace(/\#/g, ' ');
        txt = txt.replace(/\$/g, ' ');
        txt = txt.replace(/\%/g, ' ');
        txt = txt.replace(/\&/g, ' ');
        txt = txt.replace(/\(/g, ' ');
        txt = txt.replace(/\)/g, ' ');
        txt = txt.replace(/\*/g, ' ');
        txt = txt.replace(/\+/g, ' ');
        txt = txt.replace(/\,/g, ' ');
        txt = txt.replace(/\-/g, ' ');
        txt = txt.replace(/\//g, ' ');
        txt = txt.replace(/\:/g, ' ');
        txt = txt.replace(/\;/g, ' ');
        txt = txt.replace(/\=/g, ' ');
        txt = txt.replace(/\?/g, ' ');
        txt = txt.replace(/\[/g, ' ');
        txt = txt.replace(/\]/g, ' ');
        txt = txt.replace(/\_/g, ' ');
        txt = txt.replace(/\{/g, ' ');
        txt = txt.replace(/\|/g, ' ');
        txt = txt.replace(/\}/g, ' ');
        txt = txt.replace(/\¡/g, ' ');
        txt = txt.replace(/\¨/g, ' ');
        txt = txt.replace(/\¬/g, ' ');
        txt = txt.replace(/(^|\W)AGRUPACION($|\W)/, ' AG ');
        txt = txt.replace(/(^|\W)APARTADO AEREO($|\W)/, ' A.A. ');
        txt = txt.replace(/(^|\W)APARTAMENTO($|\W)/, ' AP ');
        txt = txt.replace(/(^|\W)AUTOPISTA($|\W)/, ' AUTOP ');
        txt = txt.replace(/(^|\W)AVENIDA($|\W)/, ' AV ');
        txt = txt.replace(/(^|\W)AVENIDA CALLE($|\W)/, ' AV CL ');
        txt = txt.replace(/(^|\W)AVENIDA CARRERA($|\W)/, ' AV KR ');
        txt = txt.replace(/(^|\W)BARRIO($|\W)/, ' BRR ');
        txt = txt.replace(/(^|\W)BLOQUE($|\W)/, ' BL ');
        txt = txt.replace(/(^|\W)BODEGA($|\W)/, ' BG ');
        txt = txt.replace(/(^|\W)CALE($|\W)/, ' CL ');
        txt = txt.replace(/(^|\W)CALLE($|\W)/, ' CL ');
        txt = txt.replace(/(^|\W)CAMINO($|\W)/, ' CAMINO ');
        txt = txt.replace(/(^|\W)CARRERA($|\W)/, ' KR ');
        txt = txt.replace(/(^|\W)CARRETERA($|\W)/, ' CT ');
        txt = txt.replace(/(^|\W)CASA($|\W)/, ' CS ');
        txt = txt.replace(/(^|\W)CELULA($|\W)/, ' CEL ');
        txt = txt.replace(/(^|\W)CENTRO($|\W)/, ' CEN ');
        txt = txt.replace(/(^|\W)CENTRO ADMINISTRATIVO NACIONAL($|\W)/, ' CAN ');
        txt = txt.replace(/(^|\W)CENTRO COMERCIAL($|\W)/, ' CCO ');
        txt = txt.replace(/(^|\W)CIRCULAR($|\W)/, ' CIRCULAR ');
        txt = txt.replace(/(^|\W)CONJUNTO($|\W)/, ' CONJ ');
        txt = txt.replace(/(^|\W)CONSULTORIO($|\W)/, ' CONS ');
        txt = txt.replace(/(^|\W)DEPOSITO($|\W)/, ' DP ');
        txt = txt.replace(/(^|\W)DIAGONAL($|\W)/, ' DG ');
        txt = txt.replace(/(^|\W)EDIFICIO($|\W)/, ' ED ');
        txt = txt.replace(/(^|\W)ENTRADA($|\W)/, ' ENT ');
        txt = txt.replace(/(^|\W)ESQUINA($|\W)/, ' ESQ ');
        txt = txt.replace(/(^|\W)ESTE($|\W)/, ' EST ');
        txt = txt.replace(/(^|\W)ETAPA($|\W)/, ' ET ');
        txt = txt.replace(/(^|\W)GARAGE SOTANO($|\W)/, ' GS ');
        txt = txt.replace(/(^|\W)GARAJE($|\W)/, ' GJ ');
        txt = txt.replace(/(^|\W)INTERIOR($|\W)/, ' INT ');
        txt = txt.replace(/(^|\W)KILOMETRO($|\W)/, ' KM ');
        txt = txt.replace(/(^|\W)LOCAL($|\W)/, ' LC ');
        txt = txt.replace(/(^|\W)LOTE($|\W)/, ' LT ');
        txt = txt.replace(/(^|\W)MANZANA($|\W)/, ' MZ ');
        txt = txt.replace(/(^|\W)MEZZANINE($|\W)/, ' MEZZ ');
        txt = txt.replace(/(^|\W)MODULO($|\W)/, ' MOD ');
        txt = txt.replace(/(^|\W)MUNICIPIO($|\W)/, ' MCP ');
        txt = txt.replace(/(^|\W)No($|\W)/, ' ');
        txt = txt.replace(/(^|\W)No.($|\W)/, ' ');
        txt = txt.replace(/(^|\W)NORTE($|\W)/, ' NTE ');
        txt = txt.replace(/(^|\W)OCCIDENTE($|\W)/, ' OCC ');
        txt = txt.replace(/(^|\W)OESTE($|\W)/, ' OE ');
        txt = txt.replace(/(^|\W)OFICINA($|\W)/, ' OF ');
        txt = txt.replace(/(^|\W)PARCELA($|\W)/, ' PA ');
        txt = txt.replace(/(^|\W)PASEO($|\W)/, ' PASEO ');
        txt = txt.replace(/(^|\W)PENTHOUSE($|\W)/, ' PH ');
        txt = txt.replace(/(^|\W)PISO($|\W)/, ' PI ');
        txt = txt.replace(/(^|\W)PREDIO($|\W)/, ' PD ');
        txt = txt.replace(/(^|\W)PUENTE($|\W)/, ' PTE ');
        txt = txt.replace(/(^|\W)PUESTO($|\W)/, ' PTO ');
        txt = txt.replace(/(^|\W)SALON COMUNAL($|\W)/, ' SC ');
        txt = txt.replace(/(^|\W)SECTOR($|\W)/, ' SECT ');
        txt = txt.replace(/(^|\W)SEMISOTANO($|\W)/, ' SS ');
        txt = txt.replace(/(^|\W)SOLAR($|\W)/, ' SL ');
        txt = txt.replace(/(^|\W)SOTANO($|\W)/, ' ST ');
        txt = txt.replace(/(^|\W)SUPERMANZANA($|\W)/, ' SPMZ ');
        txt = txt.replace(/(^|\W)SUR($|\W)/, ' SUR ');
        txt = txt.replace(/(^|\W)TORRE($|\W)/, ' TRR ');
        txt = txt.replace(/(^|\W)TRANSVERSAL($|\W)/, ' TV ');
        txt = txt.replace(/(^|\W)UNIDAD($|\W)/, ' UN ');
        txt = txt.replace(/(^|\W)UNIDAD RESIDENCIAL($|\W)/, ' UR ');
        txt = txt.replace(/(^|\W)URBANIZACION($|\W)/, ' URB ');
        txt = txt.replace(/(^|\W)VEREDA($|\W)/, ' VEREDA ');
        txt = txt.replace(/(^|\W)VIA($|\W)/, ' VIA ');
        txt = txt.replace(/(^|\W)ZONA($|\W)/, ' ZN ');
        return txt;
    };
    return ValidAddress;
}());



/***/ }),

/***/ "../../../../../src/app/components/modals/generic-modal/generic-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'colorModal': data.class}\" class=\"fondoNaranja\">\r\n\r\n    <div class=\"contenedorPopup\">\r\n        <div class=\"contentItems\">\r\n            <div class=\"imageIcon\">\r\n                <img [src]=\"data.imagen\" alt=\"\">\r\n            </div>\r\n            <div class=\"TextoPopUp\">\r\n                <h2>{{data.principalText}}<span>{{data.secondaryText}}</span></h2>\r\n            </div>\r\n            <div class=\"BotonPopUp\">\r\n                <button *ngIf=data.button (click)=\"restrictList()\">{{data.buttonText}}</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/modals/generic-modal/generic-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fondoNaranja {\n  background: #FF6600;\n  position: fixed;\n  z-index: 99;\n  width: 100%;\n  height: 100%;\n  padding-top: 2rem;\n  margin-top: 4rem; }\n  .fondoNaranja button {\n    width: 235px;\n    height: 55px;\n    background: #FFF;\n    border-radius: 10px;\n    border: none;\n    font-family: 'open_sansbold';\n    font-size: 25px;\n    color: #EC7404;\n    line-height: 22px;\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);\n    display: inline-block; }\n\n.contentItems {\n  margin: 3rem 0 0 25rem; }\n\n.colorModal {\n  background: #3A404A;\n  position: fixed;\n  z-index: 99;\n  width: 100%;\n  height: 100%;\n  padding-top: 2rem;\n  margin-top: 4rem; }\n  .colorModal button {\n    width: 235px;\n    height: 55px;\n    background: #FF6600;\n    border-radius: 10px;\n    border: none;\n    font-family: 'open_sansbold';\n    font-size: 25px;\n    color: #FFFFFF;\n    line-height: 22px;\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);\n    display: inline-block; }\n\n.IconoPopUp {\n  width: 240px;\n  height: 240px;\n  margin: 125px 0px 20px 250px; }\n\n.imageIcon {\n  width: 10rem; }\n\n.IconoPopUp.IconoNored {\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/images/icono_nored.svg")) + ") no-repeat 0% 0%;\n  background-size: contain; }\n\n.TextoPopUp {\n  width: 300px; }\n  .TextoPopUp h2 {\n    color: #FFF;\n    font-family: 'open_sansregular';\n    font-size: 30px;\n    text-align: left;\n    line-height: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modals/generic-modal/generic-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GenericModalComponent = (function () {
    function GenericModalComponent(router) {
        this.router = router;
    }
    GenericModalComponent.prototype.ngOnInit = function () {
    };
    GenericModalComponent.prototype.restrictList = function () {
        //this.router.navigate(["/formulario-vinculacion"]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GenericModalComponent.prototype, "data", void 0);
    GenericModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-generic-modal',
            template: __webpack_require__("../../../../../src/app/components/modals/generic-modal/generic-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/modals/generic-modal/generic-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], GenericModalComponent);
    return GenericModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/modals/validate-modal/validate-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"FondoNaranja\">\r\n\r\n    <div class=\"contenedorPopup\">\r\n        <div class=\"imageIcon\">\r\n            <img src=\"../../../../assets/images/icono_validando.svg\" alt=\"\">\r\n        </div>\r\n        <div class=\"TextoPopUp\">\r\n            <h2>Solicitud <span>Completada</span></h2>\r\n        </div>\r\n        <!-- <div class=\"BotonPopUp\">\r\n            <button>Regresar</button>\r\n            <h4>Presiona <a href=\"#\">ENTER</a></h4>\r\n        </div> -->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/modals/validate-modal/validate-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".FondoNaranja {\n  background: #EC7404;\n  position: fixed;\n  z-index: 99;\n  width: 100%;\n  height: 100%;\n  padding-top: 2rem; }\n\n.contenedorPopup {\n  text-align: center; }\n\n.FondoGris {\n  background: #605751; }\n\n.IconoPopUp {\n  width: 240px;\n  height: 240px;\n  margin: 125px 0px 20px 250px; }\n\n.imageIcon {\n  width: 20rem;\n  margin-left: auto;\n  margin-right: auto; }\n\n.IconoPopUp.IconoNored {\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/images/icono_nored.svg")) + ") no-repeat 0% 0%;\n  background-size: contain; }\n\n.TextoPopUp {\n  width: 400px;\n  margin-right: auto;\n  margin-left: auto; }\n\n.TextoPopUp h2 {\n  color: #FFF;\n  font-family: 'open_sansregular';\n  font-size: 34px;\n  text-align: left;\n  line-height: auto; }\n\n.TextoPopUp h2 span {\n  font-family: 'open_sansbold'; }\n\n.BotonPopUp h4 {\n  font-family: 'open_sansregular';\n  font-size: 24px;\n  color: #FFF;\n  display: inline-block;\n  margin-left: 30px; }\n\n.BotonPopUp h4 a {\n  font-family: 'open_sansbold';\n  color: #FFF;\n  text-decoration: underline; }\n\n.BotonPopUp button {\n  width: 314px;\n  height: 80px;\n  background: #FFF;\n  border-radius: 10px;\n  border: none;\n  font-family: 'open_sansbold';\n  font-size: 34px;\n  color: #EC7404;\n  text-align: center;\n  line-height: 22px;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);\n  display: inline-block; }\n\n.BotonPopUpDos {\n  width: 700px;\n  height: auto;\n  margin: 70px 0px 20px 140px; }\n\n.BotonPopUpDos h4 {\n  font-family: 'open_sansregular';\n  font-size: 24px;\n  color: #FFF;\n  text-align: left;\n  display: inline-block;\n  margin-left: 30px; }\n\n.BotonPopUpDos h4 a {\n  font-family: 'open_sansbold';\n  color: #FFF;\n  text-decoration: underline; }\n\n.BotonPopUpDos button {\n  width: 314px;\n  height: 80px;\n  background: #EC7404;\n  border-radius: 10px;\n  border: none;\n  font-family: 'open_sansbold';\n  font-size: 34px;\n  color: #FFF;\n  text-align: center;\n  line-height: 22px;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);\n  display: inline-block; }\n\n.BotonPopUpDos .Regresar {\n  width: 80px;\n  height: 80px;\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/images/icono_regresar.svg")) + ") no-repeat 0% 0%;\n  background-size: contain;\n  float: left;\n  margin-right: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modals/validate-modal/validate-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateModalComponent = (function () {
    function ValidateModalComponent() {
    }
    ValidateModalComponent.prototype.ngOnInit = function () {
    };
    ValidateModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-validate-modal',
            template: __webpack_require__("../../../../../src/app/components/modals/validate-modal/validate-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/modals/validate-modal/validate-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ValidateModalComponent);
    return ValidateModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_button_toggle__ = __webpack_require__("../../../material/esm5/button-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_tooltip__ = __webpack_require__("../../../material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_grid_list__ = __webpack_require__("../../../material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_slide_toggle__ = __webpack_require__("../../../material/esm5/slide-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_chips__ = __webpack_require__("../../../material/esm5/chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_stepper__ = __webpack_require__("../../../material/esm5/stepper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_progress_bar__ = __webpack_require__("../../../material/esm5/progress-bar.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_14__angular_material_progress_bar__["a" /* MatProgressBarModule */], __WEBPACK_IMPORTED_MODULE_13__angular_material_stepper__["a" /* MatStepperModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material_chips__["a" /* MatChipsModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material_slide_toggle__["a" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material_autocomplete__["a" /* MatAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material_grid_list__["a" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material_tooltip__["a" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material_select__["a" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__["a" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material_button_toggle__["a" /* MatButtonToggleModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material_input__["b" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material_form_field__["c" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatNativeDateModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material_datepicker__["a" /* MatDatepickerModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_14__angular_material_progress_bar__["a" /* MatProgressBarModule */], __WEBPACK_IMPORTED_MODULE_13__angular_material_stepper__["a" /* MatStepperModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material_chips__["a" /* MatChipsModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material_slide_toggle__["a" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material_autocomplete__["a" /* MatAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material_grid_list__["a" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material_tooltip__["a" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material_select__["a" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__["a" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material_button_toggle__["a" /* MatButtonToggleModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material_input__["b" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material_form_field__["c" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatNativeDateModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material_datepicker__["a" /* MatDatepickerModule */]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/form-link/form-link.component.html":
/***/ (function(module, exports) {

module.exports = "<app-validate-modal *ngIf=\"modalIsShowed\"></app-validate-modal>\r\n<form class=\"form-link-container contenedor\">\r\n    <!--CONTENIDO-->\r\n\r\n    <!--LATERAL-->\r\n\r\n    <div class=\"lateral\">\r\n        <div class=\"logoItau\"></div>\r\n        <div class=\"raya\"></div>\r\n        <div class=\"nombre\">\r\n            <span class=\"black-h2\">\r\n                <label>Analizando a: </label>\r\n            </span>\r\n            <br />\r\n            <span class=\"orange-h1\">\r\n                <label for=\"form-nameEmp\">{{nombre}} {{primerApellido}} {{segundoApellido}}</label>\r\n                <br />\r\n            </span>\r\n            <span class=\"black-h1\">{{numeroIdentificacion}}</span>\r\n            <br />\r\n            <span class=\"black-h2\">Información básica: </span>\r\n            <div class=\"spacer-h\"></div>\r\n            <span class=\"orange-h2\">\r\n                <label>Contacto:</label>\r\n                <br />\r\n            </span>\r\n            <div class=\"label-side-menu\">\r\n                <div class=\"section\">\r\n                    <div class=\"left\">\r\n                        <mat-icon>email</mat-icon>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <label class=\"black-h2\" for=\"form-email\">{{email.value}}</label>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"section\">\r\n                    <div class=\"left\">\r\n                        <mat-icon>phone</mat-icon>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <label class=\"black-h2\" for=\"form-email\">{{phone.value}}</label>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"section\">\r\n                    <div class=\"left\">\r\n                        <mat-icon>location_on</mat-icon>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <label class=\"black-h2\" for=\"form-email\">{{address.value}}</label>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"spacer-h\"></div>\r\n            <span class=\"orange-h2\">\r\n                    <label>EMPRESA</label>\r\n                    <br />\r\n            </span>\r\n            <div class=\"label-side-menu\">\r\n                <div class=\"section\">\r\n                    <div class=\"content\">\r\n                        <label class=\"black-h2\" for=\"form-email\">{{nameEmp.value}}</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"spacer-h\"></div>\r\n            <span class=\"orange-h2\">\r\n                    <label>INFORMACIÓN FINANCIERA</label>\r\n                    <br />\r\n            </span>\r\n            <div class=\"section\">\r\n                <div class=\"content\">\r\n                    <label class=\"black-h1\">Patrimonio:</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"section\">\r\n                <div class=\"content\">\r\n                    <label class=\"black-h2\">{{patrimonio.value}}</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"spacer-h\"></div>\r\n            <span class=\"orange-h2\">\r\n                    <label>INFORMACIÓN ADICIONAL</label>\r\n                    <br />\r\n            </span>\r\n\r\n            <h3>\r\n                <label for=\"form-nameEmp\"></label>\r\n            </h3>\r\n\r\n\r\n        </div>\r\n    </div>\r\n    <!--FIN LATERAL-->\r\n    <!--MAIN-->\r\n    <div class=\"main\">\r\n        <!--MAIN-WRAP-->\r\n        <div class=\"main-top\">\r\n            <div class=\"top\">\r\n                <div class=\"textoperfil\">\r\n                    <p>{{nombre}} {{primerApellido}} {{segundoApellido}}</p>\r\n                    <p>\r\n                        <span>{{instanceId}}</span>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"main-wrap\">\r\n            <!--VINCULACION-->\r\n\r\n            <mat-grid-list cols=\"4\" rowHeight=\"4:1\">\r\n                <mat-grid-tile [colspan]=\"0.5\">\r\n                    <span class=\"step\">1</span>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile [colspan]=\"0.5\">\r\n                    <span class=\"step current-step\" matBadge=\"4\" matBadgeOverlap=\"false\">2</span>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile [colspan]=\"2\">\r\n                    <span class=\"step\">3</span>\r\n                </mat-grid-tile>\r\n            </mat-grid-list>\r\n            <div>\r\n                <div class=\"step-label\">\r\n                    <span class=\"step current-step\">PASO</span>\r\n                </div>\r\n                <div class=\"step-progress\">\r\n                    <div class=\"break\"></div>\r\n                    <div class=\"break\"></div>\r\n                    <mat-progress-bar mode=\"determinate\" value=\"28\"></mat-progress-bar>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- -->\r\n            <div class=\"vinculacion\">\r\n                <h1>Vinculacion</h1>\r\n\r\n                <!--                 <div class=\"Aviso Corto\">\r\n                    <div class=\"AvisoBox\">\r\n                        <div class=\"icono\"></div>\r\n                        <div class=\"frase\">\r\n                            <p>Recuerda diligenciar el formato FT1446</p>\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n\r\n                <h2>Información básica</h2>\r\n                <h3>Lugar de nacimiento (Ciudad, Departamento)</h3>\r\n                <div>\r\n                    <mat-form-field class=\"field-search contenedor\">\r\n                        <input required maxlength=80 class=\"buscar\" type=\"text\" placeholder=\"\" aria-label=\"Number\" matInput [formControl]=\"birthplace\" [matAutocomplete]=\"autobplace\">\r\n                        <mat-autocomplete #autobplace=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let option of filteredOptionsBirth | async\" [value]=\"option.nombre + ' - ' + option.valor + ' - ' + option.nombreDpto + ' - ' + option.valorPadre\">\r\n                                {{option.nombre}} , {{option.nombreDpto}} , {{option.valor}}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <h3>Fecha de nacimiento</h3>\r\n                <div class=\"fechaNacimiento \">\r\n                    <mat-form-field class=\"field-date contenedor\">\r\n                        <input required maxlength=10 class=\"birthday\" matInput mask='99/99/9999' [formControl]=\"date\" placeholder=\"\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <h3>Sexo</h3>\r\n                <div></div>\r\n                <mat-button-toggle-group [formControl]=\"sexoControl\" class=\"botonera\" name=\"fontStyle\" aria-label=\"Font Style\">\r\n                    <mat-button-toggle class=\"opcionUnoActive\" value=\"m\">Masculino</mat-button-toggle>\r\n                    <mat-button-toggle class=\"OpcionDos\" value=\"f\">Femenino</mat-button-toggle>\r\n                </mat-button-toggle-group>\r\n\r\n\r\n                <div class=\"clearFifth\"></div>\r\n\r\n\r\n                <h2>Contacto</h2>\r\n                <h3>Dirección de residencia</h3>\r\n                <div>\r\n                    <mat-form-field class=\"field-address contenedor\">\r\n                        <input addressNormalize maxlength=80 matInput id=\"form-address\" [formControl]=\"address\" required>\r\n                        <div *ngIf=\"address.invalid && address.value != '' \" class=\"direccion\">\r\n                            <span class=\"input.ng-invalid\">Dirección no Valida</span>\r\n                        </div>\r\n                    </mat-form-field>\r\n                </div>\r\n                <h3>Lugar de residencia (Ciudad, Departamento)</h3>\r\n                <div>\r\n\r\n                    <mat-form-field class=\"field-search contenedor\">\r\n                        <input maxlength=80 class=\"buscar\" type=\"text\" placeholder=\"\" aria-label=\"Number\" matInput [formControl]=\"place\" [matAutocomplete]=\"auto\">\r\n                        <mat-autocomplete #auto=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let option of filteredOptionsDate | async\" [value]=\"option.nombre + ' - ' + option.valor + ' - ' + option.nombreDpto + ' - ' + option.valorPadre\">\r\n                                {{option.nombre}} , {{option.nombreDpto}}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                    </mat-form-field>\r\n\r\n\r\n\r\n                </div>\r\n                <h3>Correo electrónico</h3>\r\n                <div>\r\n                    <mat-form-field class=\"field-email contenedor\">\r\n                        <input required id=\"form-email\" maxlength=40 matInput type=\"email\" [formControl]=\"email\">\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <h3>Celular</h3>\r\n                <mat-form-field class=\"field-phone contenedor\">\r\n                    <input required onlyNumbers maxlength=14 minlength=\"10\" id=\"form-phone\" matInput [formControl]=\"phone\">\r\n                </mat-form-field>\r\n                <h3>¿Tiene residencia en otro país?</h3>\r\n                <mat-button-toggle-group class=\"botonera\" [formControl]=\"resPaisControl\" name=\"fontStyle\" aria-label=\"Font Style\">\r\n                    <mat-button-toggle class=\"opcionUnoActive\" value=\"S\">Si</mat-button-toggle>\r\n                    <mat-button-toggle class=\"OpcionDos\" value=\"N\">No</mat-button-toggle>\r\n                </mat-button-toggle-group>\r\n                <div>\r\n                    <h3>¿Tiene dirección en otro país?</h3>\r\n                    <mat-button-toggle-group class=\"botonera\" [formControl]=\"dirPaisControl\" name=\"fontStyle\" aria-label=\"Font Style\">\r\n                        <mat-button-toggle class=\"opcionUnoActive\" value=\"S\">Si</mat-button-toggle>\r\n                        <mat-button-toggle class=\"OpcionDos\" value=\"N\">No</mat-button-toggle>\r\n                    </mat-button-toggle-group>\r\n                </div>\r\n                <div class=\"spacer-h\"></div>\r\n                <div *ngIf=\"dirPaisControl.value=='S'\">\r\n                    <h3>País</h3>\r\n                    <div>\r\n\r\n                        <mat-form-field class=\"field-search contenedor\">\r\n                            <input maxlength=80 class=\"buscar\" type=\"text\" placeholder=\"\" aria-label=\"Number\" matInput [formControl]=\"country\" [matAutocomplete]=\"autocountry\">\r\n                            <mat-autocomplete #autocountry=\"matAutocomplete\">\r\n                                <mat-option *ngFor=\"let option of filteredOptionsCountry | async\" [value]=\"option.nombre + ' - ' + option.valor\">\r\n                                    {{option.nombre}}\r\n                                </mat-option>\r\n                            </mat-autocomplete>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"clearFifth\"></div>\r\n\r\n                <h2>Ocupación</h2>\r\n                <h3>Tipo de ocupación</h3>\r\n                <div class=\"ocupacion\">\r\n                    <mat-button-toggle-group class=\"botonera ocup\" name=\"fontStyle\" [formControl]=\"typeOcup\" aria-label=\"Font Style\">\r\n                        <mat-button-toggle matTooltip=\"Hogar\" class=\"opcionUnoActive hogar \" value=\"1\">\r\n\r\n                        </mat-button-toggle>\r\n\r\n                        <mat-button-toggle matTooltip=\"Empleado\" class=\"opcionUnoActive empleado \" value=\"2\">\r\n\r\n                        </mat-button-toggle>\r\n\r\n                        <mat-button-toggle matTooltip=\"Independiente\" class=\"opcionUnoActive independiente \" value=\"3\">\r\n\r\n                        </mat-button-toggle>\r\n\r\n                        <mat-button-toggle matTooltip=\"Pensionado\" class=\"OpcionDos pensionado \" value=\"4\">\r\n\r\n                        </mat-button-toggle>\r\n\r\n                    </mat-button-toggle-group>\r\n                </div>\r\n\r\n\r\n                <div class=\"clearFifth\"></div>\r\n\r\n                <h2>Contacto</h2>\r\n                <h3>Actividad económica (CIIU)</h3>\r\n                <div>\r\n                    <mat-form-field class=\"field-ciiu contenedor\">\r\n                        <input maxlength=80 class=\"buscar\" type=\"text\" placeholder=\"\" aria-label=\"Number\" id=\"form-ciiu\" matInput [formControl]=\"ciiu_control\" [matAutocomplete]=\"autociiu\">\r\n                        <mat-autocomplete #autociiu=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let option of filteredOptionsCatalog | async\" [value]=\"option.valor + ' - ' + option.nombre\">\r\n                                {{option.nombre}}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"clearFifth\"></div>\r\n\r\n                <h2>Empresa</h2>\r\n                <h3>Nombre</h3>\r\n                <div>\r\n                    <mat-form-field class=\"field-nameEmp contenedor\">\r\n                        <input maxlength=100 id=\"form-nameEmp\" matInput [formControl]=\"nameEmp\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <h3>Dirección</h3>\r\n                <div>\r\n                    <mat-form-field class=\"field-addEmp contenedor\">\r\n                        <input addressNormalize maxlength=80 id=\"form-addEmp\" matInput [formControl]=\"addEmp\" required=false>\r\n                        <div *ngIf=\"addEmp.invalid && addEmp.value != '' \" class=\"direccion\">\r\n                            <span class=\"input.ng-invalid\">Dirección no Valida</span>\r\n                        </div>\r\n                    </mat-form-field>\r\n                </div>\r\n                <h3>Ubicación (Ciudad, Departamento)</h3>\r\n                <div>\r\n                    <mat-form-field class=\"field-locate contenedor\">\r\n                        <input maxlength=100 id=\"form-locate\" class=\"buscar\" matInput [formControl]=\"locate\" [matAutocomplete]=\"autolocate\">\r\n                        <mat-autocomplete #autolocate=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let option of filteredOptionsLocate | async\" [value]=\"option.nombre + ' - ' + option.valor + ' - ' + option.nombreDpto + ' - ' + option.valorPadre\">\r\n                                {{option.nombre}} , {{option.nombreDpto}}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                    </mat-form-field>\r\n\r\n\r\n                </div>\r\n                <h3>Teléfono</h3>\r\n                <div>\r\n                    <mat-form-field class=\"field-phoneEmp contenedor\">\r\n                        <input maxlength=14 onlyNumbers id=\"form-phoneEmp\" matInput [formControl]=\"phoneEmp\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <h3>Convenio de nómina</h3>\r\n                <div>\r\n                    <mat-form-field class=\"field-nomina contenedor\">\r\n                        <input maxlength=80 id=\"form-nomina\" class=\"buscar\" matInput [formControl]=\"nomina\" [matAutocomplete]=\"autonomina\">\r\n                        <mat-autocomplete #autonomina=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let option of filteredOptionsNomina | async\" [value]=\"option.nombre + ' - ' + option.valor\">\r\n                                {{option.nombre}}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"clearFifth\"></div>\r\n\r\n                <h2>Información financiera</h2>\r\n                <h3>Ingreso principal</h3>\r\n                <div>\r\n                    <mat-form-field class=\"field-main contenedor\">\r\n                        <input required maxlength=25 id=\"form-main\" onfocus=\"this.value=''\" class=\"\" matInput [formControl]=\"main\" onlyNumbers currencyMask [options]=\"{ prefix: '$ ', thousands: '.', decimal: ',', align: 'left', precision: '0' }\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <!--<h5>Información de PILA</h5>-->\r\n                <h3>Otros ingresos</h3>\r\n\r\n                <div class=\"break\"></div>\r\n                <div>\r\n                    <mat-grid-list cols=\"2\" rowHeight=\"3:1\">\r\n                        <mat-grid-tile>\r\n                            <mat-form-field class=\"field-others contenedor otrosIngresos\">\r\n                                <input maxlength=25 onfocus=\"this.value=''\" id=\"form-others\" [formControl]=\"others\" class=\"\" matInput onlyNumbers currencyMask [options]=\"{ prefix: '$ ', thousands: '.', decimal: ',', align: 'left', precision: '0' }\">\r\n                            </mat-form-field>\r\n                        </mat-grid-tile>\r\n                        <mat-grid-tile>\r\n                            <mat-form-field class=\"field-concept contenedor otrosIngresos\">\r\n                                <mat-select placeholder=\"Concepto\" id=\"form-conceptoid\" [formControl]=\"conceptoing\">\r\n                                    <mat-option *ngFor=\"let option of lstTipoOperacion\" [value]=\"option.nombre + ' - ' + option.valor\">\r\n                                        {{option.nombre}}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </mat-grid-tile>\r\n                    </mat-grid-list>\r\n\r\n\r\n\r\n                </div>\r\n                <div class=\"break\"></div>\r\n                <div class=\"spacer-h\"></div>\r\n                <h3>Egresos mensuales</h3>\r\n                <div>\r\n                    <mat-form-field class=\"field-output contenedor\">\r\n                        <input required maxlength=25 onfocus=\"this.value=''\" id=\"form-output\" class=\"\" matInput [formControl]=\"output\" onlyNumbers currencyMask [options]=\"{ prefix: '$ ', thousands: '.', decimal: ',', align: 'left', precision: '0' }\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <h3>Total activos</h3>\r\n                <div>\r\n                    <mat-form-field class=\"field-total contenedor\">\r\n                        <input required maxlength=25 onfocus=\"this.value=''\" id=\"form-total\" class=\"\" matInput [formControl]=\"total\" onlyNumbers currencyMask [options]=\"{ prefix: '$ ', thousands: '.', decimal: ',', align: 'left', precision: '0' }\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <h3>Total pasivos</h3>\r\n                <div>\r\n                    <mat-form-field class=\"field-pasive contenedor\">\r\n                        <input required maxlength=25 onfocus=\"this.value=''\" id=\"form-pasive\" class=\"\" matInput [formControl]=\"pasive\" onlyNumbers currencyMask [options]=\"{ prefix: '$ ', thousands: '.', decimal: ',', align: 'left', precision: '0' }\">\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <h3>Patrimonio</h3>\r\n                <div>\r\n                    <mat-form-field class=\"field-patrimonio contenedor\">\r\n                        <input maxlength=25 id=\"form-pasive\" onfocus=\"getTotal()\" class=\"\" matInput [formControl]=\"patrimonio\" onlyNumbers currencyMask [options]=\"{ prefix: '$ ', thousands: '.', decimal: ',', align: 'left', precision: '0' }\">\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"clearFifth\"></div>\r\n\r\n                <h2>Información adicional</h2>\r\n                <div>\r\n                    <h3>PEP</h3>\r\n                    <div class=\"break\"></div>\r\n                    <mat-button-toggle-group class=\"botonera\" [formControl]=\"pepControl\" name=\"fontStyle\" aria-label=\"Font Style\">\r\n                        <mat-button-toggle class=\"opcionUnoActive\" value=\"S\">Si</mat-button-toggle>\r\n                        <mat-button-toggle class=\"OpcionDos\" value=\"N\">No</mat-button-toggle>\r\n                    </mat-button-toggle-group>\r\n                </div>\r\n\r\n                <div>\r\n                    <div class=\"spacer-h\"></div>\r\n                    <h3>PRP</h3>\r\n                    <div class=\"break\"></div>\r\n                    <mat-button-toggle-group class=\"botonera\" [formControl]=\"prpControl\" name=\"fontStyle\" aria-label=\"Font Style\">\r\n                        <mat-button-toggle class=\"opcionUnoActive\" value=\"S\">Si</mat-button-toggle>\r\n                        <mat-button-toggle class=\"OpcionDos\" value=\"N\">No</mat-button-toggle>\r\n                    </mat-button-toggle-group>\r\n                </div>\r\n\r\n                <div class=\"clearFifth\"></div>\r\n\r\n                <div class=\"spacer-h\"></div>\r\n                <h2>Operaciones en moneda extranjera</h2>\r\n                <h3>¿Realiza operaciones en moneda extranjero?</h3>\r\n                <mat-button-toggle-group [formControl]=\"opeExtControl\" class=\"botonera\" name=\"fontStyle\" aria-label=\"Font Style\">\r\n                    <mat-button-toggle class=\"opcionUnoActive\" value=\"S\">Si</mat-button-toggle>\r\n                    <mat-button-toggle class=\"OpcionDos\" value=\"N\">No</mat-button-toggle>\r\n                </mat-button-toggle-group>\r\n                <div class=\"spacer-h\"></div>\r\n                <div class=\"opeInternacionales\" *ngIf=\"opeExtControl.value=='S'\">\r\n                    <h3>Tipo de producto</h3>\r\n                    <div class=\"spacer-h\"></div>\r\n                    <div class=\"spacer-h\"></div>\r\n                    <div>\r\n                        <mat-slide-toggle class=\"tipoOpeImportaciones\" [formControl]=\"tipoOperacionesInter\"></mat-slide-toggle>\r\n                        <mat-slide-toggle class=\"tipoOpeExportaciones\" [formControl]=\"tipoOperacionesExpo\"></mat-slide-toggle>\r\n                        <mat-slide-toggle class=\"tipoOpeInversiones\" [formControl]=\"tipoOperacionesInve\"></mat-slide-toggle>\r\n                        <mat-slide-toggle class=\"tipoOpeCredito\" [formControl]=\"tipoOperacionesCred\"></mat-slide-toggle>\r\n                        <mat-slide-toggle class=\"tipoOpeServicio\" [formControl]=\"tipoOperacionesServ\"></mat-slide-toggle>\r\n                        <mat-slide-toggle class=\"tipoOpeOtros\" [formControl]=\"tipoOperacionesOtro\"></mat-slide-toggle>\r\n                    </div>\r\n                    <div class=\"spacer-h\"></div>\r\n                    <div *ngIf=\"tipoOperacionesOtro.value\">\r\n                        <h3>Otro tipo de operación ¿Cuál?</h3>\r\n                        <div>\r\n                            <mat-form-field class=\"field-operation contenedor\">\r\n                                <input maxlength=26 id=\"form-operation\" class=\"\" matInput [formControl]=\"operation\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <h2>Productos en moneda extranjera</h2>\r\n                    <h3>¿Es cliente titular de productos en monda extranjera?</h3>\r\n                    <mat-button-toggle-group [formControl]=\"\" class=\"botonera\" name=\"fontStyle\" aria-label=\"Font Style\">\r\n                        <mat-button-toggle class=\"opcionUnoActive\" value=\"S\">Si</mat-button-toggle>\r\n                        <mat-button-toggle class=\"OpcionDos\" value=\"N\">No</mat-button-toggle>\r\n                    </mat-button-toggle-group>\r\n                    <div class=\"spacer-h\"></div>\r\n\r\n                    <h3>Tipo de producto</h3>\r\n                    <div>\r\n                        <mat-form-field class=\"field-numpro contenedor\">\r\n                            <input maxlength=26 id=\"form-operation\" class=\"\" matInput [formControl]=\"numpro\">\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"break\"></div>\r\n\r\n\r\n\r\n                    <div class=\"break\"></div>\r\n                    <h3>Número del producto</h3>\r\n                    <div>\r\n                        <mat-form-field class=\"field-numpro contenedor\">\r\n                            <input maxlength=26 id=\"form-operation\" class=\"\" matInput [formControl]=\"numpro\">\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"break\"></div>\r\n\r\n                    <h3>Entidad</h3>\r\n                    <div>\r\n                        <mat-form-field class=\"field-entity contenedor\">\r\n                            <input id=\"form-entity\" matInput [formControl]=\"entity\">\r\n                        </mat-form-field>\r\n                    </div>\r\n\r\n                    <h3>Moneda</h3>\r\n                    <div>\r\n                        <mat-form-field class=\"field-coin contenedor\">\r\n                            <input id=\"form-coin\" class=\"\" matInput [formControl]=\"coin\">\r\n                        </mat-form-field>\r\n                    </div>\r\n\r\n                    <h3>Monto</h3>\r\n                    <div>\r\n                        <mat-form-field class=\"field-amount contenedor\">\r\n                            <input id=\"form-amount\" class=\"\" matInput [formControl]=\"amount\">\r\n                        </mat-form-field>\r\n                    </div>\r\n\r\n                    <h3>País</h3>\r\n                    <!--<div>\r\n                        <mat-form-field class=\"field-amount contenedor\">\r\n                            <input id=\"form-countryCoin\" class=\"\" matInput [formControl]=\"countryCoin\">\r\n                        </mat-form-field>\r\n                    </div>-->\r\n\r\n                    <mat-form-field class=\"field-search contenedor\">\r\n                        <input maxlength=80 class=\"buscar\" type=\"text\" placeholder=\"\" aria-label=\"Number\" matInput [formControl]=\"countryCoin\" [matAutocomplete]=\"autocountrycoin\">\r\n                        <mat-autocomplete #autocountrycoin=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let option of filteredOptionsCoinCountry | async\" [value]=\"option.nombre + ' - ' + option.valor\">\r\n                                {{option.nombre}}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                    </mat-form-field>\r\n\r\n\r\n\r\n                </div>\r\n                <div class=\"clearFifth\"></div>\r\n                <button [disabled]=\"!formValid()\" mat-button (click)=\"onSubmit()\">Vincular</button>\r\n                <div class=\"clearFifth\"></div>\r\n                <div class=\"break\"></div>\r\n                <div class=\"modal-chip\" *ngIf=\"errorMessage\">\r\n                    <div class=\"modal-content\">\r\n                        <mat-chip color=\"primary\" class=\"alertError\" selected>{{errorMessageTxt}} {{globalTimer}}</mat-chip>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-chip\" *ngIf=\"errorMessageFinal\">\r\n                    <div class=\"modal-content\">\r\n                        <mat-chip color=\"primary\" class=\"alertError\" selected>{{errorMessageTxt}}\r\n                            <button class=\"linkRetry\" (click)=\"onSubmit()\">REINTENTAR</button>\r\n                        </mat-chip>\r\n                    </div>\r\n                </div>\r\n                <div class=\"clearFifth\"></div>\r\n            </div>\r\n            <!--FIN VINCULACION-->\r\n        </div>\r\n        <!--FIN MAIN-WRAP-->\r\n    </div>\r\n    <!--FIN MAIN-->\r\n\r\n\r\n    <!--FIN CONTENID=-->\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/pages/form-link/form-link.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vinculacion {\n  width: 100%;\n  height: auto;\n  margin: 0px auto;\n  display: block; }\n\n.vinculacion h1 {\n  font-family: 'open_sansbold';\n  font-size: 74px;\n  color: #E6E5E4;\n  text-align: left; }\n\n.vinculacion h2 {\n  font-family: 'open_sanssemibold';\n  font-size: 48px;\n  color: #2C241F;\n  text-align: left;\n  margin: 0px 0px 35px 0px; }\n\n.vinculacion h3 {\n  font-family: 'open_sansregular';\n  font-size: 24px;\n  color: #2C241F;\n  text-align: left;\n  display: inline-block;\n  margin: 0px 0px 20px 0px; }\n\n.vinculacion h5 {\n  font-family: 'open_sansregular';\n  font-size: 18px;\n  color: #2C241F;\n  text-align: left;\n  margin: -10px 0px 20px 40px; }\n\n.vinculacion input {\n  width: 93.9%;\n  height: 80px;\n  background: #FFFFFF;\n  border: 2px solid #D6D4D2;\n  border-radius: 10px;\n  font-family: 'open_sansregular';\n  font-size: 34px;\n  color: #C9C7C6;\n  text-align: left;\n  line-height: 22px;\n  padding: 0px 25px 0px 25px;\n  margin-bottom: 25px; }\n\n.vinculacion input.active {\n  border: 2px solid #EC7404;\n  box-shadow: 0 2px 24px 0 rgba(236, 116, 4, 0.35); }\n\n.vinculacion input.buscar {\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/images/icono_buscar.svg")) + ") no-repeat 97% 50%;\n  background-size: 3.5%; }\n\n.vinculacion h4 {\n  font-family: 'open_sansregular';\n  font-size: 24px;\n  color: #EC7404;\n  text-align: left;\n  display: inline-block;\n  margin-left: 30px; }\n\n.vinculacion h4 a {\n  font-family: 'open_sansbold';\n  color: #EC7404;\n  text-decoration: underline; }\n\n.vinculacion button {\n  width: 314px;\n  height: 80px;\n  background: #EC7404;\n  border-radius: 10px;\n  border: none;\n  font-family: 'open_sansbold';\n  font-size: 34px;\n  color: #FFF;\n  text-align: center;\n  line-height: 22px;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);\n  display: inline-block; }\n\n.vinculacion .botonera {\n  width: 644px;\n  height: 90px;\n  text-align: left; }\n\n.vinculacion .botonera button {\n  width: 320px;\n  height: 54px;\n  background: #FFF;\n  border-radius: 10px;\n  border: 2px solid #D6D4D2;\n  font-family: 'open_sansbold';\n  font-size: 18px;\n  color: #8B8B8B;\n  text-align: center;\n  line-height: 22px;\n  display: inline-block;\n  box-shadow: none; }\n\n.vinculacion .botonera button.opcionUno {\n  border-radius: 10px 0px 0px 10px; }\n\n.vinculacion .botonera button.opcionUnoActive {\n  border-radius: 10px 0px 0px 10px;\n  background: #3A5890;\n  color: #FFF;\n  border: 2px solid #3A5890; }\n\n.vinculacion .botonera button.opcionDos {\n  border-radius: 0px 10px 10px 0px;\n  border-left: none; }\n\n.vinculacion .botonera button.opcionDosActive {\n  border-radius: 0px 10px 10px 0px;\n  background: #3A5890;\n  color: #FFF;\n  border: 2px solid #3A5890; }\n\n.vinculacion .direccion span {\n  color: #e91313;\n  font-weight: bold; }\n\n.vinculacion .ocupacion {\n  width: 825px;\n  height: 140px;\n  text-align: left; }\n\n.vinculacion .ocupacion ul {\n  width: 820px;\n  height: 140px;\n  display: block; }\n\n.vinculacion .ocupacion ul li a {\n  width: 120px;\n  height: 130px;\n  float: left;\n  display: block;\n  text-indent: -99999px;\n  margin-right: 80px; }\n\n.vinculacion .ocupacion ul li.hogar {\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/images/icono_hogar_off.svg")) + ") no-repeat 50% 0%;\n  background-size: 128%; }\n\n.vinculacion .ocupacion ul li.hogar a:hover {\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/images/icono_hogar_on.svg")) + ") no-repeat 50% 0%;\n  background-size: 128%; }\n\n.vinculacion .ocupacion ul li.empleado a {\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/images/icono_empleado_off.svg")) + ") no-repeat 50% 0%;\n  background-size: 128%; }\n\n.vinculacion .ocupacion ul li.empleado a:hover {\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/images/icono_empleado_on.svg")) + ") no-repeat 50% 0%;\n  background-size: 128%; }\n\n.vinculacion .ocupacion ul li.independiente a {\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/images/icono_independiente_off.svg")) + ") no-repeat 50% 0%;\n  background-size: 128%; }\n\n.vinculacion .ocupacion ul li.independiente a:hover {\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/images/icono_independiente_on.svg")) + ") no-repeat 50% 0%;\n  background-size: 128%; }\n\n.vinculacion .ocupacion ul li.pensionado a {\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/images/icono_pensionado.svg")) + ") no-repeat 50% 0%;\n  background-size: 128%; }\n\n.vinculacion .ocupacion ul li.pensionado a:hover {\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/images/icono_pensionado_on.svg")) + ") no-repeat 50% 0%;\n  background-size: 128%; }\n\n.vinculacion .operacion {\n  width: 750px;\n  height: 140px;\n  text-align: left; }\n\n.vinculacion .operacion ul {\n  width: 820px;\n  height: 140px;\n  display: block; }\n\n.vinculacion .operacion ul li a {\n  width: 120px;\n  height: 130px;\n  float: left;\n  display: block;\n  text-indent: -99999px;\n  margin-right: 12px; }\n\n.vinculacion .fechaNacimiento {\n  width: 700px;\n  height: 115px;\n  text-align: left;\n  clear: both; }\n\n.vinculacion .fechaNacimiento input {\n  width: 154px;\n  height: 80px;\n  background: #FFFFFF;\n  border: 2px solid #D6D4D2;\n  border-radius: 10px;\n  font-family: 'open_sansregular';\n  font-size: 34px;\n  color: #C9C7C6;\n  text-align: left;\n  line-height: 22px;\n  padding: 0px 25px 0px 25px;\n  margin-right: 4px;\n  margin-bottom: 25px;\n  display: inline-block; }\n\n.vinculacion .fechaNacimiento p {\n  background: #FFF;\n  font-family: 'open_sansregular';\n  font-size: 18px;\n  color: #8B8B8B;\n  text-align: left;\n  line-height: 22px;\n  padding: 10px; }\n\n.vinculacion .fechaNacimiento p.dia {\n  position: absolute;\n  display: block;\n  margin: -20px 0px 0px 20px;\n  z-index: 10; }\n\n.vinculacion .fechaNacimiento p.mes {\n  position: absolute;\n  display: block;\n  margin: -20px 0px 0px 235px;\n  z-index: 10; }\n\n.vinculacion .fechaNacimiento p.year {\n  position: absolute;\n  display: block;\n  margin: -20px 0px 0px 450px;\n  z-index: 10; }\n\n.vinculacion .otrosIngresos {\n  width: 860px;\n  height: 104px;\n  text-align: left;\n  clear: both; }\n\n.vinculacion .otrosIngresos input {\n  width: 550px;\n  height: 80px;\n  background: #FFFFFF;\n  border: 2px solid #D6D4D2;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n  font-family: 'open_sansregular';\n  font-size: 34px;\n  color: #C9C7C6;\n  text-align: left;\n  line-height: 22px;\n  padding: 0px 25px 0px 25px;\n  margin-bottom: 25px;\n  float: left; }\n\n.vinculacion .otrosIngresos select {\n  width: 256px;\n  height: 84px;\n  border: 2px solid #D6D4D2;\n  border-left: none;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  font-family: 'open_sansregular';\n  font-size: 34px;\n  color: #C9C7C6;\n  text-align: left;\n  line-height: 22px;\n  padding: 0px 25px 0px 25px;\n  margin-bottom: 25px;\n  float: left;\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/images/icon_flecha_abajo.svg")) + ") no-repeat 90% 50% #FFFFFF;\n  background-size: 10%;\n  -webkit-appearance: none;\n  /*Removes default chrome and safari style*/\n  -moz-appearance: none;\n  /*Removes default style Firefox*/ }\n\n.vinculacion .otrosIngresos p {\n  background: #FFF;\n  font-family: 'open_sansregular';\n  font-size: 18px;\n  color: #8B8B8B;\n  text-align: left;\n  line-height: 22px;\n  padding: 10px; }\n\n.vinculacion .otrosIngresos p.concepto {\n  position: absolute;\n  display: block;\n  margin: -20px 0px 0px 620px;\n  z-index: 10; }\n\n/* Validaciones */\n/* input.ng-invalid {\r\n    box-shadow: 0 0 5px red;\r\n    padding: 3px 0px 3px 3px;\r\n    margin: 5px 1px 3px 0px;\r\n    border: 1px solid red;\r\n} */\n/*FIN vincULACION*/\n.opcionUnoActive.mat-button-toggle,\n.OpcionDos.mat-button-toggle {\n  width: 50%;\n  background: #FFF;\n  border-radius: 10px;\n  border: 2px solid #D6D4D2;\n  font-family: 'open_sansbold';\n  font-size: 18px;\n  color: #8B8B8B;\n  text-align: center;\n  line-height: 22px;\n  display: inline-block;\n  box-shadow: none; }\n\n.ocupacion .opcionUnoActive.mat-button-toggle,\n.ocupacion .OpcionDos.mat-button-toggle {\n  width: 50%;\n  background: #FFF;\n  border: 2px solid #fff;\n  font-family: 'open_sansbold';\n  font-size: 18px;\n  color: #8B8B8B;\n  text-align: center;\n  line-height: 22px;\n  display: inline-block;\n  box-shadow: none; }\n\n.mat-button-toggle-group,\n.mat-button-toggle-standalone {\n  box-shadow: none; }\n\n.opcionUnoActive.mat-button-toggle.cdk-focused {\n  border-radius: 10px 0px 0px 10px;\n  background: #3A5890;\n  color: #FFF;\n  border: 2px solid #3A5890; }\n\n.OpcionDos.mat-button-toggle.cdk-focused {\n  border-radius: 0px 10px 10px 0px;\n  background: #3A5890;\n  color: #FFF;\n  border: 2px solid #3A5890; }\n\n.mat-button-toggle-label-content {\n  font-size: 1.5em !important;\n  margin-left: 25% !important; }\n\nmat-button-toggle-group.botonera.mat-button-toggle-group {\n  height: 54px !important; }\n\nmat-button-toggle-group.botonera.mat-button-toggle-group.ocup {\n  height: 125px !important; }\n\n.ocup mat-button-toggle.opcionUnoActive.mat-button-toggle {\n  width: 40%;\n  margin-right: 1%; }\n\n.ocup mat-button-toggle.OpcionDos.mat-button-toggle {\n  width: 40%;\n  margin-right: 1%; }\n\n.break {\n  height: 3px;\n  width: 100%; }\n\n.spacer-h {\n  height: 30px;\n  width: 100%; }\n\nbutton.mat-button[disabled] {\n  background-color: #c2c2c2 !important; }\n\n.birthday {\n  width: 100% !important; }\n\nmat-datepicker-toggle.mat-datepicker-toggle {\n  right: 0;\n  position: absolute;\n  text-align: 24%;\n  top: 24%; }\n\n.field-concept {\n  border: 2px solid #D6D4D2 !important;\n  border-radius: 0px 10px 10px 0px !important;\n  height: 64px !important;\n  width: 100% !important;\n  background: #FFF;\n  font-family: 'open_sansregular';\n  font-size: 18px;\n  color: #8B8B8B;\n  text-align: left;\n  line-height: 22px;\n  padding: 10px;\n  margin: 0 !important; }\n\n.field-others {\n  width: 100% !important;\n  float: left;\n  height: 124px !important; }\n\n.vinculacion .otrosIngresos input {\n  height: 84px !important; }\n\n.opcionUnoActive.mat-button-toggle-checked {\n  background: #3A5890 !important;\n  color: #FFF !important;\n  border: 2px solid #3A5890 !important; }\n\n.OpcionDos.mat-button-toggle-checked {\n  background: #3A5890 !important;\n  color: #FFF !important;\n  border: 2px solid #3A5890 !important; }\n\n/*Iconos*/\n.ocupacion .mat-button-toggle-label-content {\n  width: 120px;\n  height: 130px;\n  float: left;\n  display: block;\n  text-indent: -99999px;\n  margin-right: 80px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/form-link/form-link.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormLinkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_create_pdf_service__ = __webpack_require__("../../../../../src/app/services/create-pdf.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bpm_service__ = __webpack_require__("../../../../../src/app/services/bpm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_solicitudes_service_service__ = __webpack_require__("../../../../../src/app/services/solicitudes-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_catalogos_service_service__ = __webpack_require__("../../../../../src/app/services/catalogos-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__commons_validations_AddressValidator__ = __webpack_require__("../../../../../src/app/commons/validations/AddressValidator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FormLinkComponent = (function () {
    function FormLinkComponent(catalogoService, activatedRoute, _bpmService, _solicitudesService, _formBuilder, _pdfService) {
        this.catalogoService = catalogoService;
        this.activatedRoute = activatedRoute;
        this._bpmService = _bpmService;
        this._solicitudesService = _solicitudesService;
        this._formBuilder = _formBuilder;
        this._pdfService = _pdfService;
        this.addressValidator = new __WEBPACK_IMPORTED_MODULE_8__commons_validations_AddressValidator__["a" /* AddressValidator */]();
        this.entity = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(20)]);
        this.email = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(40), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].email]);
        this.phone = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(10)]);
        this.date = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(20)]);
        this.address = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [/*Validators.required, Validators.maxLength(20)*/ this.addressValidator.addressComparison()]);
        this.search = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(20)]);
        this.country = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(20)]);
        this.ciiu_control = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(200)]);
        this.sexoControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(200)]);
        this.nameEmp = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(20)]);
        this.addEmp = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [/*Validators.required, Validators.maxLength(20)*/ this.addressValidator.addressComparison()]);
        this.locate = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(100)]);
        this.phoneEmp = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(14)]);
        this.nomina = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(200)]);
        this.main = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(20)]);
        this.others = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(20)]);
        this.output = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(20)]);
        this.total = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(20)]);
        this.pasive = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(20)]);
        this.operation = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(20)]);
        this.numero = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(20)]);
        this.countryCoin = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(20)]);
        this.coin = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(20)]);
        this.amount = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(20)]);
        this.place = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(80)]);
        this.birthplace = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(80), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]);
        this.pepControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(200)]);
        this.prpControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(200)]);
        this.resPaisControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(200)]);
        this.dirPaisControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(200)]);
        this.opeExtControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(200)]);
        this.tipoOpeControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(200)]);
        this.typeOcup = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(200)]);
        this.conceptoing = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(200)]);
        this.patrimonio = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(200)]);
        this.tipoOperacionesInter = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(20)]);
        this.tipoOperacionesOtro = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(20)]);
        this.tipoOperacionesServ = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(20)]);
        this.tipoOperacionesCred = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(20)]);
        this.tipoOperacionesInve = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(20)]);
        this.tipoOperacionesExpo = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(20)]);
        this.direccionResidencia = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [this.addressValidator.addressComparison()]);
        this.direccionEmpresa = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [this.addressValidator.addressComparison()]);
        this.codDepto = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]("", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(20)]);
        this.numpro = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]("", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(25)]);
        this.isLinear = false;
        this.actualDate = new Date().toISOString();
        this.modalIsShowed = false;
        this.errorMessage = false;
        this.errorInter = false;
        this.errorMessageFinal = false;
        this.errorMessageTxt = "";
        this.ingresoPrincipal = this.main;
        this.globalTimer = 0;
        this.globalTimerAux = 0;
        this.patrimonioValue = Number(this.total.value) - Number(this.pasive.value);
        this.options_full = [""];
        this.options_empty = [""];
        window.scroll(0, 0);
        this.getCiudades();
        this.getPaises();
        this.getParametros("CIIU");
        this.getTipoOperacion("CONCEPTO_OTROS_INGRESOS");
        this.getNomina();
        this.ciudades_empty = [];
        this.paises_empty = [];
        this.lstCiiu_empty = [];
        this.lstTipoOperacion = [];
        this.lstNomina_empty = [];
        this.pepControl.setValue("N");
        this.prpControl.setValue("N");
        this.opeExtControl.setValue("N");
        this.resPaisControl.setValue("N");
        this.dirPaisControl.setValue("N");
    }
    FormLinkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        });
        this.activatedRoute.params.subscribe(function (params) {
            _this.instanceId = params["instance"];
            console.log(_this.instanceId);
        });
        this._solicitudesService.getByInstanceId(this.instanceId).subscribe(function (result) {
            console.log(result);
            _this.idUser = JSON.parse(result._body);
            _this.personaNatural = _this.idUser[0].personaNatural[0].datosBasicos;
            console.log("Persona Natural: " + _this.personaNatural.numeroIdentificacion);
            _this.numeroIdentificacion = _this.personaNatural.numeroIdentificacion;
            _this.codTipoIdentificacion = _this.personaNatural.codTipoIdentificacion;
            _this.nombre = _this.personaNatural.nombre;
            _this.primerApellido = _this.personaNatural.primerApellido;
            _this.segundoApellido = _this.personaNatural.segundoApellido;
            _this.idUser = _this.idUser[0].id;
        }, function (err) { return console.log(err); });
        setTimeout(function () {
            _this._bpmService.getBulkInstance(_this.instanceId).subscribe(function (result) {
                var body = JSON.stringify(result);
                var object = JSON.parse(body);
                var tasks = object.data.processDetails[0].tasks;
                var _loop_1 = function (i) {
                    setTimeout(function () {
                        if (tasks[i].status !== "Closed" &&
                            tasks[i].status === "Received") {
                            // Task ID de la siguiente Tarea
                            console.log("ID TASK SIGUIENTE TAREA: " + tasks[i].tkiid);
                            _this.taskId = tasks[i].tkiid;
                            console.log("TaksId reclaim" + _this.taskId);
                            _this._bpmService.reclaimTask(_this.taskId).subscribe();
                        }
                    }, 2500);
                    console.log("TaksId" + tasks[i].tkiid);
                };
                for (var i = 0; i < tasks.length; i++) {
                    _loop_1(i);
                }
            }, function (error) {
                var errorMsg = error;
                console.log(errorMsg);
            });
        }, 5000);
        this.filteredOptionsDate = this.place.valueChanges.pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["startWith"])(""), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (value) { return _this._filter(value); }));
        this.filteredOptionsCountry = this.country.valueChanges.pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["startWith"])(""), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (value) { return _this._filterCountry(value); }));
        this.filteredOptionsCoinCountry = this.countryCoin.valueChanges.pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["startWith"])(""), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (value) { return _this._filterCountry(value); }));
        this.filteredOptionsCatalog = this.ciiu_control.valueChanges.pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["startWith"])(""), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (value) { return _this._filterCatalog(value); }));
        this.filteredOptionsLocate = this.locate.valueChanges.pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["startWith"])(""), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (value) { return _this._filter(value); }));
        this.filteredOptionsBirth = this.birthplace.valueChanges.pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["startWith"])(""), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (value) { return _this._filter(value); }));
        this.filteredOptionsNomina = this.nomina.valueChanges.pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["startWith"])(""), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (value) { return _this._filterNomina(value); }));
        console.log("filteredOptionsCountry");
    };
    FormLinkComponent.prototype._filter = function (value) {
        console.log("_filter.ciudades");
        var filterValue = value.toLowerCase();
        if (value.length > 2) {
            console.log("this.ciudades");
            return this.ciudades.filter(function (option) {
                return option.nombre.toLowerCase().includes(filterValue);
            });
        }
        else {
            return this.ciudades_empty.filter(function (option) {
                return option.nombre.toLowerCase().includes(filterValue);
            });
        }
    };
    FormLinkComponent.prototype._filterCountry = function (value) {
        console.log("_filter.paises");
        if (value) {
            var filterValue_1 = value.toLowerCase();
            if (value.length > 2) {
                console.log("this.paises");
                // console.log(this.ciudades);
                return this.paises.filter(function (option) {
                    return option.nombre.toLowerCase().includes(filterValue_1);
                });
            }
            else {
                return this.paises_empty.filter(function (option) {
                    return option.nombre.toLowerCase().includes(filterValue_1);
                });
            }
        }
    };
    FormLinkComponent.prototype._filterCatalog = function (value) {
        console.log("_filter.generic");
        if (value) {
            var filterValue_2 = value.toLowerCase();
            if (value.length > 2) {
                return this.lstCiiu.filter(function (option) {
                    return option.nombre.toLowerCase().includes(filterValue_2);
                });
            }
            else {
                return this.lstCiiu_empty.filter(function (option) {
                    return option.nombre.toLowerCase().includes(filterValue_2);
                });
            }
        }
    };
    FormLinkComponent.prototype._filterNomina = function (value) {
        console.log("_filter.nomina");
        if (value) {
            var filterValue_3 = value.toLowerCase();
            if (value.length > 2) {
                return this.lstNomina.filter(function (option) {
                    return option.nombre.toLowerCase().includes(filterValue_3);
                });
            }
            else {
                return this.lstNomina_empty.filter(function (option) {
                    return option.nombre.toLowerCase().includes(filterValue_3);
                });
            }
        }
    };
    FormLinkComponent.prototype.getErrorMessage = function () {
        return this.email.hasError("required")
            ? "You must enter a value"
            : this.email.hasError("email")
                ? "Not a valid email"
                : "";
    };
    FormLinkComponent.prototype.formValid = function () {
        return (this.entity.valid &&
            this.amount.valid &&
            this.coin.valid &&
            this.country.valid &&
            this.countryCoin.valid &&
            this.numero.valid &&
            this.operation.valid &&
            this.pasive.valid &&
            this.total.valid &&
            this.output.valid &&
            this.others.valid &&
            this.main.valid &&
            this.nomina.valid &&
            this.phoneEmp.valid &&
            this.locate.valid &&
            this.addEmp.valid &&
            this.entity.valid &&
            this.email.valid &&
            this.phone.valid &&
            this.ciiu_control.valid &&
            this.date.valid &&
            this.address.valid &&
            this.search.valid &&
            this.country.valid &&
            this.nameEmp.valid &&
            this.place.valid);
    };
    FormLinkComponent.prototype.getCiudades = function () {
        var _this = this;
        this.catalogoService.loadCatalog("CIUDAD").subscribe(function (response) {
            var list = response.json();
            _this.ciudades = list.map(function (catalog) {
                return {
                    nombre: catalog.valor,
                    valor: catalog.llave,
                    nombreDpto: catalog.valorPadre,
                    valorPadre: catalog.llavePadre
                };
            });
            console.log("ciudades.length{" + _this.ciudades.length + "}");
        }, function (err) {
            _this.infoMessage = "Ha ocurrido un error";
        });
    };
    FormLinkComponent.prototype.getPaises = function () {
        var _this = this;
        this.catalogoService.loadCatalog("PAIS").subscribe(function (response) {
            var list = response.json();
            _this.paises = list.map(function (catalog) {
                return {
                    nombre: catalog.valor,
                    valor: catalog.llave
                };
            });
            console.log("this.paises{" + _this.paises.length + "}");
        }, function (err) {
            _this.infoMessage = "Ha ocurrido un error";
        });
    };
    FormLinkComponent.prototype.getParametros = function (value) {
        var _this = this;
        this.catalogoService.loadCatalog(value).subscribe(function (response) {
            var list = response.json();
            _this.lstCiiu = list.map(function (catalog) {
                return {
                    nombre: catalog.valor,
                    valor: catalog.llave
                };
            });
            console.log("lista.length{" + _this.lstCiiu.length + "}");
        }, function (err) {
            _this.infoMessage = "Ha ocurrido un error";
        });
    };
    FormLinkComponent.prototype.getTipoOperacion = function (value) {
        var _this = this;
        this.catalogoService.loadCatalog(value).subscribe(function (response) {
            var list = response.json();
            _this.lstTipoOperacion = list.map(function (catalog) {
                return {
                    nombre: catalog.valor,
                    valor: catalog.llave
                };
            });
            console.log("lstTipoOperacion.length{" + _this.lstTipoOperacion.length + "}");
        }, function (err) {
            _this.infoMessage = "Ha ocurrido un error";
        });
    };
    FormLinkComponent.prototype.getNomina = function () {
        var _this = this;
        this.catalogoService.loadCatalog("CONVENIO_NOMINA").subscribe(function (response) {
            var list = response.json();
            _this.lstNomina = list.map(function (catalog) {
                return {
                    nombre: catalog.valor,
                    valor: catalog.llave
                };
            });
            console.log("lstNomina.length{" + _this.lstNomina.length + "}");
            console.log(_this.lstNomina);
        }, function (err) {
            _this.infoMessage = "Ha ocurrido un error";
        });
    };
    FormLinkComponent.prototype.noNumber = function (value) { };
    FormLinkComponent.prototype.onlyNumbers = function (value) {
        if (value) {
            return value.replace(/\D/g, "");
        }
        else {
            return "0";
        }
    };
    FormLinkComponent.prototype.trueToYes = function (value) {
        // console.log("value{"+value+"}");
        if (value) {
            return "S";
        }
        else {
            return "N";
        }
    };
    FormLinkComponent.prototype.vincular = function (body, intentos) {
        var _this = this;
        this.errorMessageFinal = false;
        this._solicitudesService.update(body).subscribe(function (res) {
            console.log("TaskID Finalizar Tarea : " + _this.taskId);
            console.log("Instance Finalizar Tarea : " + _this.instanceId);
            _this.finalizarTarea = {
                idTask: _this.taskId,
                parameters: '{"datosFlujo":{"numeroSolicitud":"' +
                    _this.instanceId +
                    '","clienteExisteListasRestrictivas":true,"cumplimientoAprobo":true}}'
            };
            _this._bpmService.endTask(_this.finalizarTarea).subscribe(function (respons) {
                console.log(respons);
                _this.modalIsShowed = true;
                _this.errorMessageTxt = "La vinculación se realizó con éxito";
            }, function (err) {
                intentos += 1;
                _this.errorMessage = true;
                if (intentos < 3) {
                    var segundos = Number(intentos) * Number(15);
                    _this.globalTimer = segundos;
                    _this.errorMessageTxt =
                        "Ha ocurrido un problema. Reintentando en ";
                    setTimeout(function () {
                        _this.vincular(body, intentos);
                    }, segundos * 1000);
                    var intervalError_1 = setInterval(function () {
                        _this.globalTimer = _this.globalTimer - 1;
                        if (_this.globalTimer < 2) {
                            clearInterval(intervalError_1);
                        }
                    }, 1000);
                }
                else {
                    _this.errorMessageTxt =
                        "No se puedo crear el cliente. Falla del servicio";
                    _this.errorMessage = false;
                    _this.errorMessageFinal = true;
                }
                console.error(err);
            });
            intentos = 0;
            _this.errorMessage = false;
        }, function (err) {
            intentos += 1;
            _this.errorMessage = true;
            if (intentos < 3) {
                var segundos = Number(intentos) * Number(15);
                _this.globalTimer = segundos;
                _this.errorMessageTxt = "Ha ocurrido un problema. Reintentando en ";
                setTimeout(function () {
                    _this.vincular(body, intentos);
                }, segundos * 1000);
                var intervalError_2 = setInterval(function () {
                    _this.globalTimer = _this.globalTimer - 1;
                    if (_this.globalTimer < 2) {
                        clearInterval(intervalError_2);
                    }
                }, 1000);
            }
            else {
                _this.errorMessageTxt =
                    "No se puedo crear el cliente. Falla del servicio";
                _this.errorMessage = false;
                _this.errorMessageFinal = true;
            }
            console.log(err);
        });
    };
    FormLinkComponent.prototype.onSubmit = function () {
        console.log("birthplace{" + this.birthplace.value + "}");
        var codBirthPlace = this.onlyNumbers(this.birthplace.value);
        console.log("birthplace{" + codBirthPlace + "}");
        var codResidPlace = this.onlyNumbers(this.place.value);
        console.log("codResidPlace{" + codResidPlace + "}");
        var birPlace = this.birthplace.value.split("-");
        var resPlace = this.place.value.split("-");
        var locPlace = this.locate.value.split("-");
        var emptyCity = "0-0-0-0";
        if (birPlace.length < 4) {
            birPlace = emptyCity.split("-");
        }
        if (resPlace.length < 4) {
            resPlace = emptyCity.split("-");
        }
        if (locPlace.length < 4) {
            locPlace = emptyCity.split("-");
        }
        console.log("codBirthPlace{" + birPlace + "}");
        console.log("codResidPlace{" + resPlace + "}");
        console.log("codLocatPlace{" + locPlace + "}");
        var body = {
            id: this.idUser,
            fechaRadicacion: this.actualDate,
            numeroSolicitud: this.instanceId,
            personaNatural: [
                {
                    datosBasicos: {
                        numeroIdentificacion: this.numeroIdentificacion,
                        codTipoIdentificacion: this.codTipoIdentificacion,
                        desTipoIdentificacion: "CC",
                        nombre: this.nombre,
                        primerApellido: this.primerApellido,
                        segundoApellido: this.segundoApellido,
                        codCiudadNacimiento: birPlace[1],
                        desCiudadNacimiento: birPlace[0],
                        codDepartamentoNacimiento: birPlace[3],
                        desDepartamentoNacimiento: birPlace[2],
                        fechaNacimiento: this.date.value,
                        codGenero: this.sexoControl.value,
                        desGenero: this.sexoControl.value === "m" ? "Masculino" : "Femenino"
                    },
                    ubicacion: {
                        direccionResidencia: this.address.value,
                        codCiudadResidencia: resPlace[1],
                        desCiudadResidencia: resPlace[0],
                        codDepartamentoResidencia: resPlace[3],
                        desDepartamentoResidencia: resPlace[2],
                        correoElectronico: this.email.value,
                        numeroCelular: this.phone.value,
                        residenciaFiscalOtroPais: this.resPaisControl.value,
                        direccionOtroPais: this.dirPaisControl.value,
                        codOtroPais: this.onlyNumbers(this.country.value),
                        desOtroPais: this.country.value
                    },
                    actividadEconomica: {
                        codOcupacion: this.typeOcup.value,
                        desOcupacion: this.typeOcup.value,
                        codCIIU: this.onlyNumbers(this.ciiu_control.value),
                        desCIIU: this.ciiu_control.value,
                        nombreEmpresa: this.nameEmp.value,
                        direccionEmpresa: this.addEmp.value,
                        codCiudadEmpresa: locPlace[1],
                        desCiudadEmpresa: locPlace[0],
                        codDepartamentoEmpresa: locPlace[3],
                        desDepartamentoEmpresa: locPlace[2],
                        telefonoOficina: this.phoneEmp.value,
                        codConvenio: this.onlyNumbers(this.nomina.value),
                        desConvenio: this.nomina.value
                    },
                    informacionFinanciera: {
                        ingresoPrincipalCore: this.main.value,
                        ingresoPrincipalTercerasFuentes: 0,
                        otrosIngresos: this.others.value,
                        codConceptoOtrosIngresos: this.onlyNumbers(this.conceptoing.value),
                        desConceptoOtrosIngresos: this.conceptoing.value,
                        totalIngresos: Number(this.main.value) + Number(this.others.value),
                        egresosMensuales: this.output.value,
                        totalActivos: this.total.value,
                        totalPasivos: this.pasive.value,
                        patrimonio: Number(this.total.value) - Number(this.pasive.value),
                    },
                    operacionesMonedaExtranjera: {
                        realizaOperacionesMonedaExtranjera: this.trueToYes(this.opeExtControl.value),
                        tipoOperacionImportaciones: this.trueToYes(this.tipoOperacionesInter.value),
                        tipoOperacionExportaciones: this.trueToYes(this.tipoOperacionesExpo.value),
                        tipoOperacionInversiones: this.trueToYes(this.tipoOperacionesInve.value),
                        tipoOperacionCredito: this.trueToYes(this.tipoOperacionesCred.value),
                        tipoOperacionPagoServicios: this.trueToYes(this.tipoOperacionesServ.value),
                        tipoOperacionOtras: this.trueToYes(this.tipoOperacionesOtro.value),
                        otroTipoOperacion: this.operation.value,
                        titularProductosMonedaExtranjera: "Si",
                        tipoProducto: this.tipoOpeControl.value,
                        numeroProducto: this.numpro,
                        monto: this.amount.value,
                        entidad: this.entity.value,
                        codMoneda: this.coin.value,
                        desMoneda: this.coin.value,
                        codPais: this.countryCoin.value,
                        desPais: this.countryCoin.value
                        /*             codCiudad: '01',
                        desCiudad: 'Bogota' */
                    },
                    publicamenteExpuesto: {
                        pep: this.pepControl.value,
                        prp: this.prpControl.value
                    }
                }
            ],
            codEstadoSolicitud: "T",
            desEstadoSolicitud: "Tramitada",
            auditoria: {
                usuarioCreacion: "EJH01380",
                usuarioModificacion: "EJH01380",
                fechaCreacion: "2018-08-14T19:46:47.924+0000",
                fechaModificacion: "2018-08-14T19:46:47.924+0000"
            }
        };
        var bodyPdf = {
            auditoria: {
                fechaCreacion: "2018-08-27T15:46:58.623Z",
                fechaModificacion: "2018-08-27T15:46:58.623Z",
                usuarioCreacion: "EJH01380",
                usuarioModificacion: "EJH01380"
            },
            codEstadoSolicitud: "T",
            desEstadoSolicitud: "Tramitada",
            fechaRadicacion: "2018-08-27T15:46:58.623Z",
            numeroSolicitud: "string",
            personaNatural: [
                {
                    actividadEconomica: {
                        codCIIU: this.splitText(this.ciiu_control.value)[0],
                        codCiudadEmpresa: locPlace[1],
                        codConvenio: this.onlyNumbers(this.nomina.value),
                        codDepartamentoEmpresa: locPlace[3],
                        codOcupacion: this.typeOcup.value,
                        desCIIU: this.splitText(this.ciiu_control.value)[1],
                        desCiudadEmpresa: this.onlyNumbers(this.locate.value),
                        desConvenio: this.nomina.value,
                        desDepartamentoEmpresa: locPlace[2],
                        desOcupacion: this.getOcupation(this.typeOcup.value),
                        direccionEmpresa: this.addEmp.value,
                        nombreEmpresa: this.nameEmp.value,
                        telefonoOficina: this.phoneEmp.value
                    },
                    datosBasicos: {
                        codCiudadNacimiento: codBirthPlace,
                        codDepartamentoNacimiento: birPlace[3],
                        codGenero: this.sexoControl.value,
                        codTipoIdentificacion: this.codTipoIdentificacion,
                        desCiudadNacimiento: this.birthplace.value,
                        desDepartamentoNacimiento: birPlace[2],
                        desGenero: this.sexoControl.value === "m" ? "Masculino" : "Femenino",
                        desTipoIdentificacion: "CC",
                        fechaNacimiento: this.date.value,
                        nombre: this.nombre,
                        numeroIdentificacion: this.numeroIdentificacion,
                        primerApellido: this.primerApellido,
                        segundoApellido: this.segundoApellido
                    },
                    informacionFinanciera: {
                        codConceptoOtrosIngresos: this.onlyNumbers(this.conceptoing.value),
                        desConceptoOtrosIngresos: this.conceptoing.value,
                        egresosMensuales: Number(this.output.value),
                        ingresoPrincipalCore: Number(this.main.value),
                        ingresoPrincipalTercerasFuentes: 0,
                        otrosIngresos: Number(this.others.value),
                        patrimonio: Number(this.patrimonio.value),
                        totalActivos: Number(this.total.value),
                        totalIngresos: Number(this.main.value) + Number(this.others.value),
                        totalPasivos: Number(this.pasive.value)
                    },
                    operacionesMonedaExtranjera: {
                        codCiudad: "",
                        codMoneda: this.coin.value,
                        codPais: this.countryCoin.value,
                        desCiudad: "",
                        desMoneda: this.coin.value,
                        desPais: this.countryCoin.value,
                        entidad: this.entity.value,
                        monto: Number(this.amount.value),
                        numeroProducto: Number(this.numpro),
                        otroTipoOperacion: this.operation.value,
                        realizaOperacionesMonedaExtranjera: this.trueToYes(this.opeExtControl.value),
                        tipoOperacionCredito: this.trueToYes(this.tipoOperacionesCred.value),
                        tipoOperacionExportaciones: this.trueToYes(this.tipoOperacionesExpo.value),
                        tipoOperacionImportaciones: this.trueToYes(this.tipoOperacionesInter.value),
                        tipoOperacionInversiones: this.trueToYes(this.tipoOperacionesInve.value),
                        tipoOperacionOtras: this.trueToYes(this.tipoOperacionesOtro.value),
                        tipoOperacionPagoServicios: this.trueToYes(this.tipoOperacionesServ.value),
                        tipoProducto: this.tipoOpeControl.value,
                        titularProductosMonedaExtranjera: "Si"
                    },
                    publicamenteExpuesto: {
                        pep: this.trueToYes(this.pepControl.value),
                        prp: this.trueToYes(this.prpControl.value)
                    },
                    ubicacion: {
                        codCiudadResidencia: codResidPlace,
                        codDepartamentoResidencia: resPlace[3],
                        codOtroPais: this.onlyNumbers(this.country.value),
                        correoElectronico: this.email.value,
                        desCiudadResidencia: this.place.value,
                        desDepartamentoResidencia: resPlace[2],
                        desOtroPais: this.country.value,
                        direccionOtroPais: this.changeYesNo(this.dirPaisControl.value),
                        direccionResidencia: this.address.value,
                        numeroCelular: this.phone.value,
                        residenciaFiscalOtroPais: this.changeYesNo(this.resPaisControl.value)
                    }
                }
            ],
            radicador: {
                codOficina: "007",
                codTipoIdentificacion: "001",
                desOficina: "001",
                desTipoIdentificacion: "CC",
                nombreRadicador: "Juan Pablo Umbarila",
                numeroIdentificacion: "111000",
                usuarioRadicador: "Juan.Umbarila"
            },
            vendedor: {
                codOficina: "007",
                codTipoIdentificacion: "001",
                desOficina: "001",
                desTipoIdentificacion: "222000",
                nombreVendedor: "Diego Aguirre",
                numeroIdentificacion: "222000",
                usuarioVendedor: "Diego.Aguirre"
            }
        };
        console.log("Json de body");
        console.log(bodyPdf);
        console.log(this.getOcupation(this.typeOcup.value)),
            this._pdfService.createPdf(bodyPdf).subscribe(function (res) {
                var pdfFile = res._body;
                console.log(pdfFile);
                var file = new Blob([pdfFile], { type: "application/pdf" });
                console.log(file);
                var fileURL = URL.createObjectURL(file);
                window.open(fileURL);
            }, function (err) {
                console.log(err);
            });
        /* const intentos = 0; */
        /* this.vincular(body, intentos); */
    };
    FormLinkComponent.prototype.getOcupation = function (value) {
        switch (value) {
            case "1":
                return value = "Hogar";
            case "2":
                return value = "Empleado";
            case "3":
                return value = "Independiente";
            case "4":
                return value = "Pensionado";
        }
    };
    FormLinkComponent.prototype.splitText = function (value) {
        var result;
        result = value.split(" - ");
        console.log("Array de valor: ");
        console.log(result);
        return result;
    };
    FormLinkComponent.prototype.changeYesNo = function (value) {
        if (value === "S") {
            value = "Si";
        }
        else {
            value = "No";
        }
        return value;
    };
    FormLinkComponent.prototype.getTotal = function () {
        console.log("ingresa a la funcion");
        var total = Number(this.total) - Number(this.pasive);
        return total.toString();
    };
    FormLinkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: "app-form-link",
            template: __webpack_require__("../../../../../src/app/pages/form-link/form-link.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/form-link/form-link.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_catalogos_service_service__["a" /* CatalogosServiceService */],
            __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__services_bpm_service__["a" /* BpmService */],
            __WEBPACK_IMPORTED_MODULE_6__services_solicitudes_service_service__["a" /* SolicitudesServiceService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_0__services_create_pdf_service__["a" /* CreatePdfService */]])
    ], FormLinkComponent);
    return FormLinkComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/list-query/list-query.component.html":
/***/ (function(module, exports) {

module.exports = "<!--CONTENIDO-->\r\n<app-generic-modal *ngIf=\"modalIsShowed && dataModal\" [data]=\"dataModal\"></app-generic-modal>\r\n<div class=\"contenedor\">\r\n    <!--LATERAL-->\r\n    <div class=\"lateral\">\r\n        <div class=\"logoItau\"></div>\r\n    </div>\r\n    <!--FIN LATERAL-->\r\n\r\n    <!--MAIN-->\r\n    <div class=\"main\">\r\n        <!--MAIN-WRAP-->\r\n        <div class=\"stepProgressBar\">\r\n            <mat-grid-list cols=\"4\" rowHeight=\"4:1\">\r\n                <mat-grid-tile [colspan]=\"0.5\">\r\n                    <span class=\"step current-step\">1</span>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile [colspan]=\"0.5\">\r\n                    <span class=\"step\" matBadge=\"4\" matBadgeOverlap=\"false\">2</span>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile [colspan]=\"2\">\r\n                    <span class=\"step\">3</span>\r\n                </mat-grid-tile>\r\n            </mat-grid-list>\r\n            <div>\r\n                <div class=\"step-label\">\r\n                    <span class=\"step current-step\">PASO</span>\r\n                </div>\r\n                <div class=\"step-progress\">\r\n                    <div class=\"break\"></div>\r\n                    <div class=\"break\"></div>\r\n                    <mat-progress-bar mode=\"determinate\" value=\"0\"></mat-progress-bar>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"main-wrap\">\r\n            <!--LISTAS-->\r\n            <form class=\"listas\" [formGroup]=\"registerForm\">\r\n                <div class=\"documentos\">\r\n                    <h1>Consulta en listas</h1>\r\n                    <h2>Documento de identidad del cliente</h2>\r\n                    <h3>Tipo de documento</h3>\r\n                    <button class=\"cedula\">Cédula de ciudadanía</button>\r\n                    <h3>Número</h3>\r\n                    <input onlyNumbers required formControlName=\"documentId\" [(ngModel)]=\"user.documentId\" input-has-content maxlength=\"20\">\r\n                </div>\r\n\r\n                <h2>Información personal</h2>\r\n                <div class=\"apellidos\">\r\n                    <div>\r\n                        <h3>Primer Apellido</h3>\r\n                        <input formControlName=\"firstLastname\" [(ngModel)]=\"user.firstLastname\" input-has-content maxlength=\"40\">\r\n                    </div>\r\n                    <div>\r\n                        <h3>Segundo Apellido</h3>\r\n                        <input formControlName=\"secondLastname\" [(ngModel)]=\"user.secondLastname\" input-has-content maxlength=\"40\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"nombre\">\r\n                    <h3>Nombre</h3>\r\n                    <input required formControlName=\"name\" [(ngModel)]=\"user.name\" input-has-content maxlength=\"60\">\r\n                </div>\r\n\r\n                <input [disabled]=\"formIsInValid\" class=\"consultar\" type=\"submit\" value=\"Consultar\" (click)=\"onSubmit()\">\r\n                <!--  <h4>Presiona <a href=\"\">ENTER</a></h4> -->\r\n\r\n            </form>\r\n            <!--FIN LISTAS-->\r\n        </div>\r\n        <!--FIN MAIN-WRAP-->\r\n    </div>\r\n    <!--FIN MAIN-->\r\n</div>\r\n<!--FIN CONTENID=-->"

/***/ }),

/***/ "../../../../../src/app/pages/list-query/list-query.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*LISTAS*/\n.listas {\n  width: 100%;\n  height: auto;\n  margin: 0px auto;\n  display: block; }\n  .listas h1 {\n    font-family: 'open_sansbold';\n    font-size: 74px;\n    text-align: left;\n    color: #373D45;\n    opacity: 0.30; }\n  .listas h2 {\n    font-family: 'open_sanssemibold';\n    font-size: 48px;\n    color: #2C241F;\n    text-align: left;\n    margin: 0px 0px 35px 0px; }\n  .listas h3 {\n    font-family: 'open_sansregular';\n    font-size: 24px;\n    color: #605751;\n    text-align: left;\n    display: inline-block;\n    margin: 0px 0px 20px 0px; }\n  .listas h4 {\n    font-family: 'open_sansregular';\n    font-size: 24px;\n    color: #EC7404;\n    text-align: left;\n    display: inline-block;\n    margin-left: 30px; }\n    .listas h4 a {\n      font-family: 'open_sansbold';\n      color: #EC7404;\n      text-decoration: underline; }\n  .listas input {\n    height: 80px;\n    background: #FFFFFF;\n    border: 2px solid #D6D4D2;\n    border-radius: 10px;\n    font-family: 'open_sansregular';\n    font-size: 34px;\n    color: #C9C7C6;\n    text-align: left;\n    line-height: 22px;\n    padding: 0px 25px 0px 25px;\n    margin-bottom: 25px; }\n  .listas input:focus {\n    border: 2px solid #EC7404;\n    box-shadow: 0 2px 24px 0 rgba(236, 116, 4, 0.35); }\n  .listas button.cedula {\n    width: 229px;\n    height: 54px;\n    background: #605751;\n    border-radius: 10px;\n    border: none;\n    font-family: 'open_sansbold';\n    font-size: 18px;\n    color: #FFF;\n    text-align: center;\n    line-height: 22px;\n    box-shadow: 0 3px 6px 0 rgba(236, 16, 4, 0.17);\n    display: block;\n    margin-bottom: 15px; }\n  .listas .consultar {\n    width: 314px;\n    height: 80px;\n    background: #EC7404;\n    border-radius: 10px;\n    border: none;\n    font-family: 'open_sansbold';\n    font-size: 34px;\n    color: #FFF;\n    text-align: center;\n    line-height: 22px;\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);\n    display: inline-block; }\n  .listas .consultar[disabled] {\n    opacity: .4; }\n\n.apellidos {\n  display: -ms-flexbox;\n  display: flex; }\n  .apellidos div {\n    margin-right: 20px; }\n    .apellidos div input {\n      width: 23rem; }\n\n.nombre input {\n  width: 93.9%; }\n\n.documentos h1 {\n  margin-top: 0; }\n\n.documentos input {\n  width: 93.9%; }\n\n/* input.ng-invalid {\r\n    box-shadow: 0 0 5px red;\r\n    padding: 3px 0px 3px 3px;\r\n    margin: 5px 1px 3px 0px;\r\n    border: 1px solid red;\r\n} */\n.stepProgressBar {\n  width: 70%;\n  margin-left: 6rem;\n  margin-top: 3rem; }\n\n/*FIN LISTAS*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/list-query/list-query.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListQueryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commons_constants_modals_constant__ = __webpack_require__("../../../../../src/app/commons/constants/modals.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_solicitudes_service_service__ = __webpack_require__("../../../../../src/app/services/solicitudes-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_bpm_service__ = __webpack_require__("../../../../../src/app/services/bpm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_consulta_listas_service__ = __webpack_require__("../../../../../src/app/services/consulta-listas.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListQueryComponent = (function () {
    function ListQueryComponent(router, _service, _bpmService, _listService) {
        this.router = router;
        this._service = _service;
        this._bpmService = _bpmService;
        this._listService = _listService;
        this.listasRestrictivas = false;
        this.modalIsShowed = false;
        this.formErrorMsg = {};
        this.date = new Date().toISOString();
        this.user = {
            documentId: "",
            firstLastname: "",
            secondLastname: "",
            name: ""
        };
        window.scroll(0, 0);
    }
    ListQueryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(20)
            ]),
            firstLastname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(20)
            ]),
            secondLastname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(20)]),
            documentId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(20),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern("^(0|[1-9][0-9]*)$")
            ])
        });
        // Crear proceso
        this._bpmService.createProcess().subscribe(function (result) {
            var body = JSON.parse(result._body);
            console.log("Instance ID: " + body.data.piid);
            console.log("Task ID:     " + body.data.tasks[0].tkiid);
            _this.taskId = body.data.tasks[0].tkiid;
            _this.instanceId = body.data.piid;
            // Asignar Tarea
            _this._bpmService.reclaimTask(_this.taskId).subscribe();
        }, function (error) {
            var errorMsg = error;
            console.log(errorMsg);
        });
    };
    ListQueryComponent.prototype.onSubmit = function () {
        var _this = this;
        var body = {
            fechaRadicacion: this.date,
            numeroSolicitud: this.instanceId,
            personaNatural: [
                {
                    datosBasicos: {
                        numeroIdentificacion: this.registerForm.get("documentId").value,
                        codTipoIdentificacion: "CC",
                        primerApellido: this.registerForm.get("firstLastname").value,
                        segundoApellido: this.registerForm.get("secondLastname").value,
                        nombre: this.registerForm.get("name").value
                    },
                    consultarListas: {
                        totalResultados: this.totalResultados,
                        resultados: this.resultados
                    }
                }
            ],
            codEstadoSolicitud: "T",
            desEstadoSolicitud: "Tramitado",
            auditoria: {
                usuarioCreacion: "EJH01380",
                usuarioModificacion: "EJH01380",
                fechaCreacion: this.date,
                fechaModificacion: this.date
            }
        };
        var fullName = (this.registerForm.get("name").value +
            " " +
            this.registerForm.get("firstLastname").value +
            " " +
            this.registerForm.get("secondLastname").value).toUpperCase();
        console.log("Full name: " + fullName);
        var listBody = {
            valor: fullName,
            grupos: "names",
            coincidencia: 0,
            cia: 1,
            tipo: 1
        };
        this._listService.validateList(listBody).subscribe(function (res) {
            var resBody = JSON.parse(res._body);
            _this.resultados = resBody.resultados;
            _this.totalResultados = resBody.totalResultados;
            if (_this.totalResultados == null) {
                _this.resultados = [];
                _this.totalResultados = 0;
                _this.router.navigate(["/formulario-vinculacion"]);
                body.personaNatural[0].consultarListas.resultados = _this.resultados;
                body.personaNatural[0].consultarListas.totalResultados = _this.totalResultados;
                _this._service.createOrUpdate(body).subscribe(function () {
                    _this.finalizarTarea = {
                        idTask: _this.taskId,
                        parameters: '{"datosFlujo":{"numeroSolicitud":"' +
                            _this.instanceId +
                            '","clienteExisteListasRestrictivas":' +
                            _this.listasRestrictivas +
                            ',"cumplimientoAprobo":true}}'
                    };
                    _this._bpmService.endTask(_this.finalizarTarea).subscribe();
                }, function (err) { return console.log(err); });
            }
            else {
                _this.listasRestrictivas = true;
                _this.dataModal = {
                    imagen: __WEBPACK_IMPORTED_MODULE_0__commons_constants_modals_constant__["a" /* SERVICE_RESPONSE */].imagen,
                    principalText: __WEBPACK_IMPORTED_MODULE_0__commons_constants_modals_constant__["a" /* SERVICE_RESPONSE */].principalText,
                    secondaryText: __WEBPACK_IMPORTED_MODULE_0__commons_constants_modals_constant__["a" /* SERVICE_RESPONSE */].secondaryText,
                    buttonText: __WEBPACK_IMPORTED_MODULE_0__commons_constants_modals_constant__["a" /* SERVICE_RESPONSE */].buttonText,
                    button: __WEBPACK_IMPORTED_MODULE_0__commons_constants_modals_constant__["a" /* SERVICE_RESPONSE */].button,
                    class: __WEBPACK_IMPORTED_MODULE_0__commons_constants_modals_constant__["a" /* SERVICE_RESPONSE */].class
                };
                _this.modalIsShowed = true;
                body.personaNatural[0].consultarListas.resultados = _this.resultados;
                body.personaNatural[0].consultarListas.totalResultados = _this.totalResultados;
                _this._service.createOrUpdate(body).subscribe(function () {
                    _this.finalizarTarea = {
                        idTask: _this.taskId,
                        parameters: '{"datosFlujo":{"numeroSolicitud":"' +
                            _this.instanceId +
                            '","clienteExisteListasRestrictivas":' +
                            _this.listasRestrictivas +
                            ',"cumplimientoAprobo":true}}'
                    };
                    _this._bpmService.endTask(_this.finalizarTarea).subscribe();
                }, function (err) { return console.log(err); });
            }
        }, function (err) { return console.log("ESTE ES EL ERROR DEL SERVICIO " + err); });
        this.router.navigate(["/formulario-vinculacion", this.instanceId]);
    };
    Object.defineProperty(ListQueryComponent.prototype, "formIsInValid", {
        get: function () {
            return this.registerForm.invalid;
        },
        enumerable: true,
        configurable: true
    });
    ListQueryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "app-list-query",
            template: __webpack_require__("../../../../../src/app/pages/list-query/list-query.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/list-query/list-query.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_solicitudes_service_service__["a" /* SolicitudesServiceService */],
            __WEBPACK_IMPORTED_MODULE_5__services_bpm_service__["a" /* BpmService */],
            __WEBPACK_IMPORTED_MODULE_6__services_consulta_listas_service__["a" /* ConsultaListasService */]])
    ], ListQueryComponent);
    return ListQueryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--CONTENIDO-->\r\n\r\n<div class=\"contenedor\">\r\n    <app-generic-modal *ngIf=\"modalIsShowed && dataModal\" [data]=\"dataModal\"></app-generic-modal>\r\n    <!--MAIN-->\r\n    <div class=\"main\">\r\n        <!--MAIN-WRAP-->\r\n        <div class=\"main-wrap\">\r\n            <!--LOGIN-->\r\n            <form class=\"login\">\r\n                <div class=\"fields\">\r\n                    <h4>Hola</h4>\r\n                    <h1>Iniciar sesión</h1>\r\n                    <h2>Oficina</h2>\r\n                    <!--  <input id=\"office\" required maxlength=20 [formControl]=\"office\"> -->\r\n\r\n                    <mat-form-field class=\"field-search contenedor\">\r\n                        <input maxlength=150 class=\"buscar\" type=\"text\" placeholder=\"\" [formControl]=\"office\" aria-label=\"Number\" matInput [matAutocomplete]=\"autoOffice\">\r\n                        <mat-autocomplete #autoOffice=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let option of filteredOptionsOffice | async\" [value]=\"option.valor\">\r\n                                {{option.valor}}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                    </mat-form-field>\r\n\r\n                    <h2>Nombre de usuario</h2>\r\n                    <input id=\"username\" required [formControl]=\"username\" maxlength=20>\r\n                    <div class=\"container-password\">\r\n                        <h2>Contraseña</h2>\r\n                        <input type=\"password\" id=\"password\" required [formControl]=\"password\" minlength=\"8\" maxlength=20>\r\n                        <img [src]=\"!visibility ? '../../../assets/images/visibility.svg' : '../../../assets/images/visibility-off.svg'\" alt=\"\" (click)=\"showPass()\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"msgButton\">\r\n                    <button id=\"submit\" [disabled]=\"!formValid()\" class=\"submit\" (click)=\"onSubmit()\">Iniciar</button>\r\n                    <div *ngIf=\"userInvalid\">\r\n                        <p><strong>Ingresaste</strong> un usuario o contraseña incorrecta</p>\r\n                    </div>\r\n                </div>\r\n\r\n            </form>\r\n\r\n            <!--FIN LOGIN-->\r\n        </div>\r\n\r\n        <!--FIN MAIN-WRAP-->\r\n    </div>\r\n\r\n    <!--FIN MAIN-->\r\n\r\n</div>\r\n\r\n\r\n<!--FIN CONTENID=-->"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login {\n  width: 100%;\n  height: auto;\n  margin: 0px auto;\n  display: block; }\n  .login h1 {\n    font-family: 'open_sansbold';\n    font-size: 74px;\n    color: #E6E5E4;\n    text-align: left;\n    margin-top: 0;\n    margin-top: 0;\n    margin-bottom: 0; }\n  .login h2 {\n    font-family: 'open_sansregular';\n    font-size: 24px;\n    color: #605751;\n    text-align: left;\n    margin: 7px 0px 15px 0px; }\n  .login h3 {\n    margin-left: 30px;\n    margin-top: 25px;\n    margin-bottom: 10px;\n    font-family: 'open_sansregular';\n    font-size: 30px;\n    color: #EC7404;\n    text-align: left;\n    display: inline-block; }\n    .login h3 a {\n      font-family: 'open_sansbold';\n      color: #EC7404;\n      text-decoration: underline; }\n  .login h4 {\n    font-family: 'open_sansbold';\n    font-size: 35px;\n    color: #EC7404;\n    text-align: left;\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0; }\n  .login input.active {\n    border: 2px solid #EC7404;\n    box-shadow: 0 2px 24px 0 rgba(236, 116, 4, 0.35); }\n  .login p a {\n    color: #EC7404;\n    text-decoration: underline; }\n\n.fields input {\n  width: 93.9%;\n  height: 80px;\n  background: #FFFFFF;\n  border: 2px solid #D6D4D2;\n  border-radius: 10px;\n  font-family: 'open_sansregular';\n  font-size: 34px;\n  color: #C9C7C6;\n  text-align: left;\n  line-height: 22px;\n  padding: 0px 25px 0px 25px; }\n\n/* input.ng-invalid {\r\n    box-shadow: 0 0 5px red;\r\n    padding: 3px 0px 3px 3px;\r\n    margin: 5px 1px 3px 0px;\r\n    border: 1px solid red;\r\n} */\n.submit {\n  width: 314px;\n  height: 80px;\n  background: #EC7404;\n  border-radius: 10px;\n  border: none;\n  font-family: 'open_sansbold';\n  font-size: 34px;\n  color: #FFF;\n  text-align: center;\n  line-height: 22px;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);\n  display: inline-block;\n  margin-top: 15px;\n  margin-right: 30px; }\n\n.submit[disabled] {\n  opacity: .4; }\n\n.container-password {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: end;\n      justify-content: flex-end; }\n  .container-password img {\n    position: absolute;\n    right: 140px;\n    padding-bottom: 15px;\n    width: 50px; }\n\n.msgButton {\n  display: -ms-flexbox;\n  display: flex; }\n  .msgButton div {\n    width: 200px; }\n    .msgButton div p {\n      color: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_get_ip_adress_service__ = __webpack_require__("../../../../../src/app/services/get-ip-adress.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_catalogos_service_service__ = __webpack_require__("../../../../../src/app/services/catalogos-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = (function () {
    function LoginComponent(router, catalogoService, _loginService, _formBuilder, http, _getIpAdress) {
        this.router = router;
        this.catalogoService = catalogoService;
        this._loginService = _loginService;
        this._formBuilder = _formBuilder;
        this.http = http;
        this._getIpAdress = _getIpAdress;
        this.office = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]("", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(150)]);
        this.username = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]("", [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(80)
        ]);
        this.password = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]("", [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(20),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(8)
        ]);
        this.isLinear = false;
        this.modalIsShowed = false;
        this.ipAddress = {};
        this.activeSession = false;
        this.userInvalid = false;
        window.scroll(0, 0);
        this.getOficinas();
        this.oficinas_empty = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ip");
        this._getIpAdress.getIpAddress().subscribe(function (data) {
            console.log(data);
        });
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        });
        this.filteredOptionsOffice = this.office.valueChanges.pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["startWith"])(""), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (value) { return _this._filterOffice(value); }));
    };
    LoginComponent.prototype.getOficinas = function () {
        var _this = this;
        this.catalogoService.loadCatalog("OFICINA").subscribe(function (response) {
            console.log(response);
            var list = response.json();
            _this.oficinas = list.map(function (catalog) {
                return {
                    valor: catalog.valor,
                    llave: catalog.llave
                };
            });
        }, function (err) {
            console.log(err);
            _this.infoMessage = "Ha ocurrido un error";
        });
    };
    LoginComponent.prototype._filterOffice = function (value) {
        if (value) {
            var filterValue_1 = value.toLowerCase();
            if (value.length > 2) {
                return (this.oficinas.filter(function (option) {
                    return option.valor.toLowerCase().indexOf(filterValue_1);
                }) &&
                    this.oficinas.filter(function (option) {
                        return option.llave.toLowerCase().indexOf(filterValue_1);
                    }));
            }
            else {
                return (this.oficinas_empty.filter(function (option) {
                    return option.valor.toLowerCase().indexOf(filterValue_1);
                }) &&
                    this.oficinas.filter(function (option) {
                        return option.llave.toLowerCase().indexOf(filterValue_1);
                    }));
            }
        }
    };
    // office: this.office,
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var body = {
            user: this.username.value,
            password: this.password.value,
            ipAddress: "127.0.0.0"
        };
        this._loginService.login(body).subscribe(function (repos) {
            console.log(repos);
            var body = JSON.parse(repos._body);
            body = body.header.status;
            if (body === 200) {
                _this.router.navigate(["/consulta-listas"]);
            }
            else {
                console.log("Error desconocido");
            }
        }, function (err) {
            console.log(err);
            var body = JSON.parse(err._body);
            body = body.header.status;
            if (body === 401) {
                _this.userInvalid = true;
            }
            else {
                console.log("Error desconocido");
            }
        });
        console.log(body);
        // this.modalIsShowed = true;
    };
    LoginComponent.prototype.formValid = function () {
        return this.office.valid && this.username.valid && this.password.valid;
    };
    LoginComponent.prototype.showPass = function () {
        if (document.getElementById("password").getAttribute("type") === "password") {
            document.getElementById("password").setAttribute("type", "text");
        }
        else {
            document.getElementById("password").setAttribute("type", "password");
        }
        this.visibility = !this.visibility;
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: "app-login",
            template: __webpack_require__("../../../../../src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_catalogos_service_service__["a" /* CatalogosServiceService */],
            __WEBPACK_IMPORTED_MODULE_7__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_0__services_get_ip_adress_service__["a" /* GetIpAdressService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pages.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App_Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_link_form_link_component__ = __webpack_require__("../../../../../src/app/pages/form-link/form-link.component.ts");
// Routing pages


var App_Routes = [
    /*     { path: 'login', component: LoginComponent},
        { path: 'consulta-listas', component: ListQueryComponent},
        { path: 'formulario-vinculacion/:instance', component: FormLinkComponent}, */
    { path: 'formulario-vinculacion', component: __WEBPACK_IMPORTED_MODULE_1__form_link_form_link_component__["a" /* FormLinkComponent */] },
    /*     { path: 'listas-restrictivas', component: RestrictiveListComponent}, */
    /*   { path: 'heroes', component: HeroesComponent},
     { path: 'heroe/:id', component: HeroeComponent},
     { path: 'resultSearch/:termino', component: ResultSearchComponent}, */
    { path: '**', pathMatch: 'full', redirectTo: 'formulario-vinculacion' }
];
var App_Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(App_Routes, { useHash: true });


/***/ }),

/***/ "../../../../../src/app/pages/restrictive-list/restrictive-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"Contenedor\">\r\n    <!--LATERAL-->\r\n\r\n    <!--FIN LATERAL-->\r\n    <!--MAIN-->\r\n    <div class=\"main\">\r\n        <!--MAIN-WRAP-->\r\n\r\n        <div class=\"main-wrap\">\r\n            <!--RESULTADOS-->\r\n            <div class=\"resultados\">\r\n                <h1>06 Coincidencias</h1>\r\n                <div class=\"columnas\">\r\n                    <div class=\"izq\">\r\n                        <h2>Lista</h2>\r\n                    </div>\r\n                    <div class=\"centro\">\r\n                        <h2>Porcentaje</h2>\r\n                    </div>\r\n                    <div class=\"der\">\r\n                        <h2>Detalle</h2>\r\n                    </div>\r\n                </div>\r\n                <div class=\"columnas\">\r\n                    <div class=\"izq\">\r\n                        <h3>CLINTON</h3>\r\n                        <h4>Gabriel Mariano Riveros Ocampo</h4>\r\n                    </div>\r\n                    <div class=\"centro\">\r\n                        <h3>52%</h3>\r\n                    </div>\r\n                    <div class=\"der\">\r\n                        <h4>Music for self improvement</h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"columnas\">\r\n                    <div class=\"izq\">\r\n                        <h3>PORT</h3>\r\n                        <h4>Andres Bedoya Arango</h4>\r\n                    </div>\r\n                    <div class=\"centro\">\r\n                        <h3>94%</h3>\r\n                    </div>\r\n                    <div class=\"der\">\r\n                        <h4>Astronomy or astrology</h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"columnas\">\r\n                    <div class=\"izq\">\r\n                        <h3>OGFTS</h3>\r\n                        <h4>Rafael Antonio Vavarro Gil</h4>\r\n                    </div>\r\n                    <div class=\"centro\">\r\n                        <h3>40%</h3>\r\n                    </div>\r\n                    <div class=\"der\">\r\n                        <h4>Techniques</h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"columnas\">\r\n                    <div class=\"izq\">\r\n                        <h3>WJND</h3>\r\n                        <h4>Gabriel Mariano Riveros Ocampo</h4>\r\n                    </div>\r\n                    <div class=\"centro\">\r\n                        <h3>52%</h3>\r\n                    </div>\r\n                    <div class=\"der\">\r\n                        <h4>Hoop Earring a Style from history</h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"columnas\">\r\n                    <div class=\"izq\">\r\n                        <h3>OMU</h3>\r\n                        <h4>Gabriel Mariano Riveros Ocampo</h4>\r\n                    </div>\r\n                    <div class=\"centro\">\r\n                        <h3><span>100%</span></h3>\r\n                    </div>\r\n                    <div class=\"der\">\r\n                        <h4>Music for self improvement</h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"columnas\">\r\n                    <div class=\"izq\">\r\n                        <h3>PSD</h3>\r\n                        <h4>Gabriel Mariano Riveros Ocampo</h4>\r\n                    </div>\r\n                    <div class=\"centro\">\r\n                        <h3>52%</h3>\r\n                    </div>\r\n                    <div class=\"der\">\r\n                        <h4>Music for self improvement</h4>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <h2>Resultado de análisis</h2>\r\n                <h3>Análisis</h3>\r\n                <div class=\"botonera\">\r\n                    <button>Aprobar</button>\r\n                    <button>Rechazar</button>\r\n                </div>\r\n                <div class=\"container-textArea\">\r\n                    <h3>Casual</h3>\r\n                    <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\"></textarea>\r\n                </div>\r\n\r\n            </div>\r\n            <!--FIN RESULTADOS-->\r\n        </div>\r\n        <!--FIN MAIN-WRAP-->\r\n    </div>\r\n    <!--FIN MAIN-->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/restrictive-list/restrictive-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".resultados {\n  width: 100%;\n  height: auto;\n  margin: 0px auto;\n  display: block; }\n\n.resultados h1 {\n  font-family: 'open_sansbold';\n  font-size: 74px;\n  color: #E6E5E4; }\n\n.resultados h2 {\n  font-family: 'open_sanssemibold';\n  font-size: 48px;\n  color: #2C241F;\n  margin: 0px 0px 35px 0px; }\n\n.resultados h3 {\n  font-family: 'open_sansregular';\n  font-size: 24px;\n  color: #605751;\n  display: inline-block;\n  margin: 0px 0px 0 0px; }\n\n.resultados .columnas {\n  width: 100%;\n  height: auto;\n  clear: both;\n  overflow: auto;\n  margin-bottom: 25px; }\n\n.resultados .columnas h2 {\n  font-family: 'open_sansregular';\n  font-size: 24px;\n  color: #EC7404; }\n\n.resultados .columnas h3 {\n  font-family: 'open_sanssemibold';\n  font-size: 40px;\n  color: #373D45;\n  line-height: auto; }\n\n.resultados .columnas h3 span {\n  color: #ED2038; }\n\n.resultados .columnas h4 {\n  font-family: 'open_sansregular';\n  font-size: 16px;\n  color: #3A404A;\n  margin: 0;\n  opacity: 0.60; }\n\n.resultados .columnas .izq {\n  width: 38.9%;\n  height: auto;\n  text-align: left;\n  display: inline-table;\n  overflow: auto; }\n\n.resultados .columnas .centro {\n  width: 21.2%;\n  height: auto;\n  text-align: left;\n  display: inline-table;\n  overflow: auto; }\n\n.resultados .columnas .der {\n  width: 38.9%;\n  height: auto;\n  text-align: right;\n  display: inline-table;\n  overflow: auto; }\n\n.botonera button {\n  margin-right: 20px;\n  width: 312px;\n  height: 56px;\n  background: white;\n  border: solid #FF6600 1px;\n  border-radius: 10px;\n  box-shadow: 0px 3px 7px -2px #FF6600;\n  color: #FF6600;\n  font-size: 18px;\n  font-weight: bold;\n  margin-top: 20px; }\n\n.container-textArea {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  margin-top: 20px; }\n  .container-textArea textarea {\n    margin-top: 10px;\n    width: 640px;\n    border-radius: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/restrictive-list/restrictive-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestrictiveListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RestrictiveListComponent = (function () {
    function RestrictiveListComponent() {
    }
    RestrictiveListComponent.prototype.ngOnInit = function () {
    };
    RestrictiveListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-restrictive-list',
            template: __webpack_require__("../../../../../src/app/pages/restrictive-list/restrictive-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/restrictive-list/restrictive-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RestrictiveListComponent);
    return RestrictiveListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/bpm.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BpmService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_constants_rest_config_constant__ = __webpack_require__("../../../../../src/app/commons/constants/rest-config.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BpmService = (function () {
    function BpmService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__commons_constants_rest_config_constant__["a" /* REST_CONFIG */].API_URL;
        this.createInstance = __WEBPACK_IMPORTED_MODULE_3__commons_constants_rest_config_constant__["a" /* REST_CONFIG */].CREATE_INSTANCE;
        this.asignTask = __WEBPACK_IMPORTED_MODULE_3__commons_constants_rest_config_constant__["a" /* REST_CONFIG */].RECLAIM_TASK;
        this.finishTask = __WEBPACK_IMPORTED_MODULE_3__commons_constants_rest_config_constant__["a" /* REST_CONFIG */].FINISH_TASK;
        this.bulkInstance = __WEBPACK_IMPORTED_MODULE_3__commons_constants_rest_config_constant__["a" /* REST_CONFIG */].BULK_INSTANCE_ID;
        /*         this.url;
            this.tkiid;
            this.createInstance;
            this.iniciarProceso;
            this.asignTask;
            this.finalizarTarea;
            this.bulkInstance; */
    }
    BpmService.prototype.getAllProcesses = function () {
        return this._http.get(this.url).map(function (res) { return res.json(); });
    };
    BpmService.prototype.createProcess = function () {
        this.iniciarProceso = {
            idBpd: '25.e9c27b2b-a244-4dc9-b307-fb94e30feaec',
            idSnapshot: '2064.2309742c-3f10-41ef-adb0-484855bef506',
            idBranch: '2063.ed0f5171-e97f-4ea9-984d-3a6e9445738f',
            idAppProcess: '2066.468fcf83-5197-40d2-8a26-8b42f2f6cd9c'
        };
        var body = JSON.stringify(this.iniciarProceso);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post(this.createInstance, body, options);
    };
    BpmService.prototype.reclaimTask = function (tkiid) {
        var body = JSON.stringify(tkiid);
        return this._http.put(this.asignTask, body);
    };
    BpmService.prototype.endTask = function (finalizarTarea) {
        var body = JSON.stringify(finalizarTarea);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.put(this.finishTask, body, options);
    };
    BpmService.prototype.getBulkInstance = function (piid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http
            .get(this.bulkInstance + piid, options)
            .map(function (res) { return res.json(); });
    };
    BpmService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], BpmService);
    return BpmService;
}());



/***/ }),

/***/ "../../../../../src/app/services/catalogos-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogosServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_constants_services_constant__ = __webpack_require__("../../../../../src/app/commons/constants/services.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CatalogosServiceService = (function () {
    function CatalogosServiceService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__commons_constants_services_constant__["a" /* AppSettings */].URL;
    }
    CatalogosServiceService.prototype.loadCatalog = function (catalogType) {
        return this.http.get(this.apiUrl.concat('catalogos/params?tipoCatalogo=').concat(catalogType));
    };
    CatalogosServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__["b" /* Http */]])
    ], CatalogosServiceService);
    return CatalogosServiceService;
}());



/***/ }),

/***/ "../../../../../src/app/services/consulta-listas.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultaListasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_constants_services_constant__ = __webpack_require__("../../../../../src/app/commons/constants/services.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConsultaListasService = (function () {
    function ConsultaListasService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__commons_constants_services_constant__["a" /* AppSettings */].URL_LIST;
    }
    ConsultaListasService.prototype.validateList = function (listBody) {
        var repos = this.http.post(this.apiUrl, listBody);
        return repos;
    };
    ConsultaListasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ConsultaListasService);
    return ConsultaListasService;
}());



/***/ }),

/***/ "../../../../../src/app/services/create-pdf.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePdfService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_constants_services_constant__ = __webpack_require__("../../../../../src/app/commons/constants/services.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreatePdfService = (function () {
    function CreatePdfService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_1__commons_constants_services_constant__["a" /* AppSettings */].URL_PDF;
    }
    CreatePdfService.prototype.createPdf = function (body) {
        var repos = this.http.post(this.apiUrl.concat("v1/reports/formatoVinculacion"), body, { responseType: __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* ResponseContentType */].ArrayBuffer });
        return repos;
    };
    CreatePdfService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], CreatePdfService);
    return CreatePdfService;
}());



/***/ }),

/***/ "../../../../../src/app/services/get-ip-adress.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetIpAdressService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GetIpAdressService = (function () {
    function GetIpAdressService(http) {
        this.http = http;
    }
    GetIpAdressService.prototype.getIpAddress = function () {
        return this.http
            .get("http://freegeoip.net/json/?callback")
            .map(function (response) { return response || {}; })
            .catch(this.handleError);
    };
    GetIpAdressService.prototype.handleError = function (error) {
        console.error('observable error: ', error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    GetIpAdressService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GetIpAdressService);
    return GetIpAdressService;
}());



/***/ }),

/***/ "../../../../../src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_constants_services_constant__ = __webpack_require__("../../../../../src/app/commons/constants/services.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_1__commons_constants_services_constant__["a" /* AppSettings */].URL_LOGIN;
    }
    LoginService.prototype.login = function (body) {
        var repos = this.http.post(this.apiUrl, body);
        return repos;
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/services/solicitudes-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitudesServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_constants_services_constant__ = __webpack_require__("../../../../../src/app/commons/constants/services.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SolicitudesServiceService = (function () {
    function SolicitudesServiceService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_1__commons_constants_services_constant__["a" /* AppSettings */].URL_SOR;
    }
    SolicitudesServiceService.prototype.createOrUpdate = function (body) {
        var repos = this.http.post(this.apiUrl, body);
        return repos;
    };
    SolicitudesServiceService.prototype.update = function (body) {
        var repos = this.http.put(this.apiUrl, body);
        return repos;
    };
    SolicitudesServiceService.prototype.getByInstanceId = function (instanceId) {
        return this.http.get(this.apiUrl.concat('/params?numeroSolicitud=').concat(instanceId));
    };
    SolicitudesServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__node_modules_angular_http__["b" /* Http */]])
    ], SolicitudesServiceService);
    return SolicitudesServiceService;
}());



/***/ }),

/***/ "../../../../../src/assets/images/icon_flecha_abajo.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon_flecha_abajo.af09f56142b12d398f1a.svg";

/***/ }),

/***/ "../../../../../src/assets/images/icono_buscar.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icono_buscar.8d2738d115f0ec3f9667.svg";

/***/ }),

/***/ "../../../../../src/assets/images/icono_empleado_off.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icono_empleado_off.1698d6f9c198346a0c8f.svg";

/***/ }),

/***/ "../../../../../src/assets/images/icono_empleado_on.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icono_empleado_on.9d154aa00213649bcd9f.svg";

/***/ }),

/***/ "../../../../../src/assets/images/icono_hogar_off.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icono_hogar_off.16745d4e97bf47730d8f.svg";

/***/ }),

/***/ "../../../../../src/assets/images/icono_hogar_on.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icono_hogar_on.a2a3ed54f5fc231ffb80.svg";

/***/ }),

/***/ "../../../../../src/assets/images/icono_independiente_off.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icono_independiente_off.dc67bd5a6a09b32a6001.svg";

/***/ }),

/***/ "../../../../../src/assets/images/icono_independiente_on.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icono_independiente_on.1e3f4c7ebcc43d503492.svg";

/***/ }),

/***/ "../../../../../src/assets/images/icono_nored.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icono_nored.6ad424cc26ad00f186ce.svg";

/***/ }),

/***/ "../../../../../src/assets/images/icono_pensionado.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icono_pensionado.b2fd71602948929c05c0.svg";

/***/ }),

/***/ "../../../../../src/assets/images/icono_pensionado_on.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icono_pensionado_on.21558b8e3fa7cb1ff389.svg";

/***/ }),

/***/ "../../../../../src/assets/images/icono_regresar.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icono_regresar.e03bce4c95ec7d854df4.svg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map