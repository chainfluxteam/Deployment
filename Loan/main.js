(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Authguard/financial.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/Authguard/financial.guard.ts ***!
  \**********************************************/
/*! exports provided: FinancialGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialGuard", function() { return FinancialGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_contactservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/contactservice.service */ "./src/app/service/contactservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FinancialGuard = /** @class */ (function () {
    function FinancialGuard(cs, router) {
        this.cs = cs;
        this.router = router;
    }
    FinancialGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.cs.fi_check_registeration().then(function (registered) {
            console.log(registered);
            if (!registered) {
                _this.router.navigate(["fireg"]);
                return false;
            }
            else {
                return true;
            }
        });
    };
    FinancialGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_service_contactservice_service__WEBPACK_IMPORTED_MODULE_2__["ContactserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FinancialGuard);
    return FinancialGuard;
}());



/***/ }),

/***/ "./src/app/Authguard/investor.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/Authguard/investor.guard.ts ***!
  \*********************************************/
/*! exports provided: InvestorGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestorGuard", function() { return InvestorGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_contactservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/contactservice.service */ "./src/app/service/contactservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InvestorGuard = /** @class */ (function () {
    function InvestorGuard(cs, router) {
        this.cs = cs;
        this.router = router;
    }
    InvestorGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        //return true;
        return this.cs.investor_check_registeration().then(function (registered) {
            console.log(registered);
            if (!registered) {
                _this.router.navigate(["inverstorreg"]);
                return false;
            }
            else {
                return true;
            }
        });
    };
    InvestorGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_service_contactservice_service__WEBPACK_IMPORTED_MODULE_2__["ContactserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], InvestorGuard);
    return InvestorGuard;
}());



/***/ }),

/***/ "./src/app/Authguard/spv.guard.ts":
/*!****************************************!*\
  !*** ./src/app/Authguard/spv.guard.ts ***!
  \****************************************/
/*! exports provided: SpvGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpvGuard", function() { return SpvGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_contactservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/contactservice.service */ "./src/app/service/contactservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpvGuard = /** @class */ (function () {
    function SpvGuard(cs, router) {
        this.cs = cs;
        this.router = router;
    }
    SpvGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        //return true;
        return this.cs.spv_check_registeration().then(function (registered) {
            console.log(registered);
            if (!registered) {
                _this.router.navigate(["spvreg"]);
                return false;
            }
            else {
                return true;
            }
        });
    };
    SpvGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_service_contactservice_service__WEBPACK_IMPORTED_MODULE_2__["ContactserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SpvGuard);
    return SpvGuard;
}());



/***/ }),

/***/ "./src/app/Contractabi.json":
/*!**********************************!*\
  !*** ./src/app/Contractabi.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, default */
/***/ (function(module) {

module.exports = [{"constant":false,"inputs":[{"name":"_loanId","type":"uint256[]"}],"name":"createPacking","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"Investor_ether","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"loanId","type":"uint256"},{"name":"FI","type":"address"}],"name":"purchase_loan","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_packindex","type":"uint256"},{"name":"choosespvadd","type":"address"}],"name":"purchase_pack","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"bytes"},{"name":"_loan_interst","type":"uint256"},{"name":"_time","type":"uint256"}],"name":"register","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"bank_address","type":"address"},{"name":"tokenvalue","type":"uint256"}],"name":"req_loan","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ln_id","type":"uint256"},{"name":"fiaddress","type":"address"}],"name":"settlement","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"SPV_ether","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"inv_details","outputs":[{"name":"invsavailable_pack","type":"uint256"},{"name":"spvtotal","type":"uint256"},{"name":"fitotal","type":"uint256"},{"name":"spvt","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"ln_get","outputs":[{"name":"id","type":"uint256"},{"name":"token","type":"uint256"},{"name":"bank_address","type":"address"},{"name":"borr_address","type":"address"},{"name":"amount","type":"uint256"},{"name":"count","type":"uint256"},{"name":"months","type":"uint256"},{"name":"spvid","type":"uint256"},{"name":"token_address","type":"address"},{"name":"count1","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"loanadd","outputs":[{"name":"spv","type":"address"},{"name":"invs","type":"address"},{"name":"fins","type":"address"},{"name":"spck","type":"uint256"},{"name":"ipck","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"show_registers","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"spv_details","outputs":[{"name":"initial_spv_ether","type":"uint256"},{"name":"spv_loan","type":"uint256"},{"name":"interest","type":"uint256"},{"name":"spv_id","type":"uint256"},{"name":"spvlnid","type":"uint256"},{"name":"packln_id","type":"uint256"},{"name":"packid","type":"uint256"},{"name":"add","type":"address"},{"name":"invsadd","type":"address"},{"name":"fiadd","type":"address"},{"name":"name","type":"bytes"},{"name":"spvether","type":"uint256"},{"name":"invether","type":"uint256"},{"name":"available_pack","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"spv_reg","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"spv_registers","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"}];

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/app-routing/routes.ts");
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })
// export class AppRoutingModule { }





var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["APP_BASE_HREF"], useValue: '/' }
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _financial_financial_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../financial/financial.component */ "./src/app/financial/financial.component.ts");
/* harmony import */ var _spv_spv_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spv/spv.component */ "./src/app/spv/spv.component.ts");
/* harmony import */ var _inverstor_inverstor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inverstor/inverstor.component */ "./src/app/inverstor/inverstor.component.ts");
/* harmony import */ var _totalfi_totalfi_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../totalfi/totalfi.component */ "./src/app/totalfi/totalfi.component.ts");
/* harmony import */ var _monthlypayment_monthlypayment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../monthlypayment/monthlypayment.component */ "./src/app/monthlypayment/monthlypayment.component.ts");
/* harmony import */ var _purchaseloan_purchaseloan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../purchaseloan/purchaseloan.component */ "./src/app/purchaseloan/purchaseloan.component.ts");
/* harmony import */ var _createpack_createpack_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../createpack/createpack.component */ "./src/app/createpack/createpack.component.ts");
/* harmony import */ var _spvpackdetail_spvpackdetail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../spvpackdetail/spvpackdetail.component */ "./src/app/spvpackdetail/spvpackdetail.component.ts");
/* harmony import */ var _investorpackdetail_investorpackdetail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../investorpackdetail/investorpackdetail.component */ "./src/app/investorpackdetail/investorpackdetail.component.ts");
/* harmony import */ var _purchasepack_purchasepack_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../purchasepack/purchasepack.component */ "./src/app/purchasepack/purchasepack.component.ts");
/* harmony import */ var _metamask_error_metamask_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../metamask-error/metamask-error.component */ "./src/app/metamask-error/metamask-error.component.ts");
/* harmony import */ var _financialreg_financialreg_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../financialreg/financialreg.component */ "./src/app/financialreg/financialreg.component.ts");
/* harmony import */ var _investorreg_investorreg_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../investorreg/investorreg.component */ "./src/app/investorreg/investorreg.component.ts");
/* harmony import */ var _spvreg_spvreg_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../spvreg/spvreg.component */ "./src/app/spvreg/spvreg.component.ts");
/* harmony import */ var _Authguard_financial_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Authguard/financial.guard */ "./src/app/Authguard/financial.guard.ts");
/* harmony import */ var _Authguard_spv_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Authguard/spv.guard */ "./src/app/Authguard/spv.guard.ts");
/* harmony import */ var _Authguard_investor_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Authguard/investor.guard */ "./src/app/Authguard/investor.guard.ts");


//import { BorrowerComponent } from '../borrower/borrower.component';
















var routes = [
    {
        path: 'metamask',
        component: _metamask_error_metamask_error_component__WEBPACK_IMPORTED_MODULE_11__["MetamaskErrorComponent"],
    },
    { path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    },
    {
        path: 'financial',
        component: _financial_financial_component__WEBPACK_IMPORTED_MODULE_1__["FinancialComponent"],
        canActivate: [_Authguard_financial_guard__WEBPACK_IMPORTED_MODULE_15__["FinancialGuard"]]
    },
    { path: 'fireg',
        component: _financialreg_financialreg_component__WEBPACK_IMPORTED_MODULE_12__["FinancialregComponent"],
    },
    // { 
    //     path:'Borrower',
    //     component:BorrowerComponent 
    // },
    {
        path: 'totalfi',
        component: _totalfi_totalfi_component__WEBPACK_IMPORTED_MODULE_4__["TotalfiComponent"]
    },
    {
        path: 'Monthlypayment',
        component: _monthlypayment_monthlypayment_component__WEBPACK_IMPORTED_MODULE_5__["MonthlypaymentComponent"]
    },
    // { 
    //     path:'Borrower',
    //     component:BorrowerComponent 
    // },
    { path: 'spvreg',
        component: _spvreg_spvreg_component__WEBPACK_IMPORTED_MODULE_14__["SpvregComponent"],
    },
    {
        path: 'SPV',
        component: _spv_spv_component__WEBPACK_IMPORTED_MODULE_2__["SPVComponent"],
        canActivate: [_Authguard_spv_guard__WEBPACK_IMPORTED_MODULE_16__["SpvGuard"]]
    },
    {
        path: 'purchaseloan',
        component: _purchaseloan_purchaseloan_component__WEBPACK_IMPORTED_MODULE_6__["PurchaseloanComponent"],
        canActivate: [_Authguard_spv_guard__WEBPACK_IMPORTED_MODULE_16__["SpvGuard"]]
    },
    {
        path: 'createpack',
        component: _createpack_createpack_component__WEBPACK_IMPORTED_MODULE_7__["CreatepackComponent"],
        canActivate: [_Authguard_spv_guard__WEBPACK_IMPORTED_MODULE_16__["SpvGuard"]]
    },
    {
        path: 'spvpackdetail',
        component: _spvpackdetail_spvpackdetail_component__WEBPACK_IMPORTED_MODULE_8__["SpvpackdetailComponent"],
        canActivate: [_Authguard_spv_guard__WEBPACK_IMPORTED_MODULE_16__["SpvGuard"]]
    },
    { path: 'inverstorreg',
        component: _investorreg_investorreg_component__WEBPACK_IMPORTED_MODULE_13__["InvestorregComponent"],
    },
    {
        path: 'Investor',
        component: _inverstor_inverstor_component__WEBPACK_IMPORTED_MODULE_3__["InverstorComponent"],
        canActivate: [_Authguard_investor_guard__WEBPACK_IMPORTED_MODULE_17__["InvestorGuard"]]
    },
    {
        path: 'Purchasepack',
        component: _purchasepack_purchasepack_component__WEBPACK_IMPORTED_MODULE_10__["PurchasepackComponent"],
        canActivate: [_Authguard_investor_guard__WEBPACK_IMPORTED_MODULE_17__["InvestorGuard"]]
    },
    {
        path: 'Investorpackdetail',
        component: _investorpackdetail_investorpackdetail_component__WEBPACK_IMPORTED_MODULE_9__["InvestorpackdetailComponent"],
        canActivate: [_Authguard_investor_guard__WEBPACK_IMPORTED_MODULE_17__["InvestorGuard"]]
    },
    {
        path: '',
        redirectTo: 'Fi',
        pathMatch: 'full'
    }
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n        <app-header></app-header>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _financial_financial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./financial/financial.component */ "./src/app/financial/financial.component.ts");
/* harmony import */ var _spv_spv_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spv/spv.component */ "./src/app/spv/spv.component.ts");
/* harmony import */ var _inverstor_inverstor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inverstor/inverstor.component */ "./src/app/inverstor/inverstor.component.ts");
/* harmony import */ var _metamask_error_metamask_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./metamask-error/metamask-error.component */ "./src/app/metamask-error/metamask-error.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _service_contactservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/contactservice.service */ "./src/app/service/contactservice.service.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _financialreg_financialreg_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./financialreg/financialreg.component */ "./src/app/financialreg/financialreg.component.ts");
/* harmony import */ var _spvreg_spvreg_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./spvreg/spvreg.component */ "./src/app/spvreg/spvreg.component.ts");
/* harmony import */ var _investorreg_investorreg_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./investorreg/investorreg.component */ "./src/app/investorreg/investorreg.component.ts");
/* harmony import */ var _totalfi_totalfi_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./totalfi/totalfi.component */ "./src/app/totalfi/totalfi.component.ts");
/* harmony import */ var _monthlypayment_monthlypayment_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./monthlypayment/monthlypayment.component */ "./src/app/monthlypayment/monthlypayment.component.ts");
/* harmony import */ var _purchasepack_purchasepack_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./purchasepack/purchasepack.component */ "./src/app/purchasepack/purchasepack.component.ts");
/* harmony import */ var _createpack_createpack_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./createpack/createpack.component */ "./src/app/createpack/createpack.component.ts");
/* harmony import */ var _spvpackdetail_spvpackdetail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./spvpackdetail/spvpackdetail.component */ "./src/app/spvpackdetail/spvpackdetail.component.ts");
/* harmony import */ var _purchaseloan_purchaseloan_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./purchaseloan/purchaseloan.component */ "./src/app/purchaseloan/purchaseloan.component.ts");
/* harmony import */ var _investorpackdetail_investorpackdetail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./investorpackdetail/investorpackdetail.component */ "./src/app/investorpackdetail/investorpackdetail.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { BorrowerComponent } from './borrower/borrower.component';




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _financial_financial_component__WEBPACK_IMPORTED_MODULE_4__["FinancialComponent"],
                //BorrowerComponent,
                _spv_spv_component__WEBPACK_IMPORTED_MODULE_5__["SPVComponent"],
                _inverstor_inverstor_component__WEBPACK_IMPORTED_MODULE_6__["InverstorComponent"],
                _metamask_error_metamask_error_component__WEBPACK_IMPORTED_MODULE_7__["MetamaskErrorComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _financialreg_financialreg_component__WEBPACK_IMPORTED_MODULE_12__["FinancialregComponent"],
                _spvreg_spvreg_component__WEBPACK_IMPORTED_MODULE_13__["SpvregComponent"],
                _investorreg_investorreg_component__WEBPACK_IMPORTED_MODULE_14__["InvestorregComponent"],
                _totalfi_totalfi_component__WEBPACK_IMPORTED_MODULE_15__["TotalfiComponent"],
                _monthlypayment_monthlypayment_component__WEBPACK_IMPORTED_MODULE_16__["MonthlypaymentComponent"],
                _purchasepack_purchasepack_component__WEBPACK_IMPORTED_MODULE_17__["PurchasepackComponent"],
                _createpack_createpack_component__WEBPACK_IMPORTED_MODULE_18__["CreatepackComponent"],
                _spvpackdetail_spvpackdetail_component__WEBPACK_IMPORTED_MODULE_19__["SpvpackdetailComponent"],
                _purchaseloan_purchaseloan_component__WEBPACK_IMPORTED_MODULE_20__["PurchaseloanComponent"],
                _investorpackdetail_investorpackdetail_component__WEBPACK_IMPORTED_MODULE_21__["InvestorpackdetailComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_23__["WelcomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_22__["NgxSpinnerModule"]
            ],
            providers: [_service_contactservice_service__WEBPACK_IMPORTED_MODULE_9__["ContactserviceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/createpack/createpack.component.css":
/*!*****************************************************!*\
  !*** ./src/app/createpack/createpack.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/createpack/createpack.component.html":
/*!******************************************************!*\
  !*** ./src/app/createpack/createpack.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div><h1 style=\"color:#338ecf;text-align:center;\">Create Packs</h1></div> \r\n<br>\r\n    <div class=\"row\">   \r\n<div class=\"form-group col-sm-4\" id=\"create_pack\"> \r\n<div class=\"container\" style=\"border:3px solid #428bca;background:white;width:350px;height:200px;\">\r\n<div><h3 style=\"color: #338ecf;text-align:center;\">Create Pack</h3></div>\r\n<input type=\"text\" [(ngModel)]=\"pack_id\" #a value={{ids}}  class=\"form-control\" placeholder=\"loan id\" readonly/>\r\n<br>\r\n<input type=\"button\" [disabled]=button class=\"btn btn-primary\" #b (click)=\"createPack(a.value)\" value=\"Create\"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n<input type=\"button\" class=\"btn btn-danger\"  (click)=\"clear(a.value)\" value=\"Clear\"/>\r\n</div>\r\n</div>\r\n  \r\n</div>  \r\n&nbsp;  &nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n<div class=\"row\">\r\n<div class=\"col-sm-8\" id=\"spv_loan_detail\">\r\n  <div class=\"container\" style=\"border:3px solid #428bca;background:white;overflow-y:auto;height:450px;\">\r\n    <div><h3 style=\"color:#338ecf;text-align:center;\">SPV Loan Details</h3><h3 style=\"color:#338ecf;text-align:right;\">Available Loan:{{loan}}</h3></div> \r\n    <table  class=\"table table-responsive-md\">\r\n    <thead>\r\n      <tr>\r\n        <th><h4 style=\"color: black;\">Loan Id</h4></th>\r\n        <th><h4 style=\"color: black;\">Token address</h4></th>\r\n        <th><h4 style=\"color: black;\">Token value</h4></th>\r\n        <th><h4 style=\"color: black;\">Bank Address</h4></th>\r\n        <th><h4 style=\"color: black;\">Total Amount</h4></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let bank of loandetails;\">\r\n            <td>{{bank.loanid}}</td>\r\n            <td>{{bank.tokenvalue}}</td>\r\n            <td>{{bank.tokenaddress}} </td>\r\n            <td>{{bank.bankaddress}}</td>\r\n            <td>{{bank.totalamount}}</td>\r\n            <td><button class=\"btn btn-primary\" (click)=\"selectloan(bank.loanid)\">SelectID</button></td>\r\n        </tr>\r\n    </tbody>\r\n  </table>\r\n  </div>\r\n</div>  \r\n</div>\r\n<ngx-spinner\r\n    bdColor=\"rgba(51,51,51,0.8)\"\r\n    size=\"medium\"\r\n    color=\"#fff\"\r\n    loadingText=\"Loading...\"\r\n    type=\"ball-scale-multiple\">\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/createpack/createpack.component.ts":
/*!****************************************************!*\
  !*** ./src/app/createpack/createpack.component.ts ***!
  \****************************************************/
/*! exports provided: CreatepackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatepackComponent", function() { return CreatepackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_contactservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/contactservice.service */ "./src/app/service/contactservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreatepackComponent = /** @class */ (function () {
    function CreatepackComponent(spv, router, spinner) {
        var _this = this;
        this.spv = spv;
        this.router = router;
        this.spinner = spinner;
        this.loanid = [];
        this.ids = [];
        this.details = [];
        this.detail = [];
        this.loandetails = [];
        this.purdetails = [];
        this.packdetails = [];
        spv.getAccount().then(function (address) { return _this.address = address; });
    }
    CreatepackComponent.prototype.choosefi = function (bank_address) {
        var _this = this;
        this.spv.bank_reg(bank_address).then(function (val) {
            for (var j = val[3].toNumber(); j < val[4].toNumber(); j++) {
                _this.spv.loandetails(val[9], j).then(function (result) {
                    if (result[0] > 0) {
                        _this.purdetails.push({ "loanid": result[0], "tokenaddress": result[7], "tokenvalue": result[1], "bankaddress": result[2], "totalamount": result[4] });
                    }
                });
            }
        });
    };
    CreatepackComponent.prototype.selectloan = function (loanid) {
        var ii = this.ids.length;
        var i;
        // console.log(ii);
        // console.log(this.ids[0]);
        if (ii == 0) {
            this.ids.push(loanid);
        }
        else {
            for (i = 0; i < this.ids.length; i++) {
                if (parseInt(this.ids[i]) == loanid) {
                    break;
                }
            }
            if (i == this.ids.length) {
                this.ids.push(loanid);
            }
        }
    };
    CreatepackComponent.prototype.clear = function (a) {
        console.log("s");
        this.ids.length = 0;
        console.log(a = this.ids);
        a = this.ids;
    };
    CreatepackComponent.prototype.createPack = function (a) {
        var _this = this;
        if (this.ids.length > 0) {
            this.button = false;
            this.spinner.show();
            var value = a.split(",");
            console.log(value);
            for (var i = 0; i < value.length; i++) {
                console.log(value.length);
                this.loanid.push(parseInt(value[i]));
            }
            this.spv.createPack(this.loanid).then(function (res) {
                console.log("Hash :" + res);
                console.log(res[0]);
                console.log(res.length);
                if (1 === res.length) {
                    _this.spinner.hide();
                }
                else
                    _this.spv.hash(res).then(function (result) {
                        console.log("result : " + result);
                        _this.spinner.hide();
                        _this.router.navigate(['']);
                    });
            });
        }
        else {
            this.button = true;
        }
        this.button = false;
    };
    CreatepackComponent.prototype.pur_loan = function (loanid, bankaddress) {
        this.spv.pur_loan(loanid, bankaddress).then(function (res) {
        });
    };
    CreatepackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spv.getAccount().then(function (address) { return _this.address = address; });
        this.spv.getUserBalance().then(function (balance) { return _this.balance = balance; });
        this.spv.spv_reg1().then(function (result) {
            _this.details.push({ "spvaddress": _this.address, "totalamount": result[0], "totalloan": result[1], "availablepack": result[2] });
        });
        this.spv.borrower_view_fi().then(function (obj) {
            obj.forEach(function (item) {
                _this.spv.bank_reg(item).then(function (result) {
                    _this.detail.push({ "bank_address": result[9], "bank_name": result[10], "deposit_amount": result[0], "loan_interest": result[2] });
                });
            });
        });
        this.spv.borrower_view_fi().then(function (obj) {
            obj.forEach(function (item) {
                _this.spv.bank_reg(item).then(function (val) {
                    for (var j = val[3].toNumber(); j < val[4].toNumber(); j++) {
                        var a = j;
                        _this.spv.loandetails(item, a).then(function (result) {
                            _this.spv.spv_loanid(result[0]).then(function (result1) {
                                if (_this.address == result1[0] && result1[3] != 1 && result[6] > result[5]) {
                                    _this.loandetails.push({ "loanid": result[0], "tokenaddress": result[8], "tokenvalue": result[1], "bankaddress": result[2], "totalamount": result[4] });
                                }
                            });
                        });
                        _this.spv.investortable1(_this.address).then(function (result1) {
                            _this.loan = result1[3];
                            console.log(result1[3]);
                        });
                    }
                });
            });
        });
        this.spv.borrower_view_fi().then(function (obj) {
            obj.forEach(function (item) {
                _this.spv.bank_reg(item).then(function (val) {
                    for (var j = val[3].toNumber(); j < val[4].toNumber(); j++) {
                        _this.spv.loandetails(item, j).then(function (result) {
                            if (_this.address == result[3]) {
                                _this.purdetails.push({ "loanid": result[0], "tokenaddress": result[7], "tokenvalue": result[1], "bankaddress": result[2], "totalamount": result[4] });
                            }
                        });
                    }
                });
            });
        });
        this.spv.spv_reg1().then(function (res) {
            for (var i = res[5].toNumber(); i <= res[6].toNumber(); i++) {
                _this.spv.loandetails(res[7], i).then(function (result) {
                    var a = result[1] / 1000000000000000000;
                    if (a > 0) {
                        _this.packdetails.push({ "packid": result[0], "tokenvalue": a });
                    }
                });
            }
        });
    };
    CreatepackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createpack',
            template: __webpack_require__(/*! ./createpack.component.html */ "./src/app/createpack/createpack.component.html"),
            styles: [__webpack_require__(/*! ./createpack.component.css */ "./src/app/createpack/createpack.component.css")]
        }),
        __metadata("design:paramtypes", [_service_contactservice_service__WEBPACK_IMPORTED_MODULE_1__["ContactserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], CreatepackComponent);
    return CreatepackComponent;
}());



/***/ }),

/***/ "./src/app/financial/financial.component.css":
/*!***************************************************!*\
  !*** ./src/app/financial/financial.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/financial/financial.component.html":
/*!****************************************************!*\
  !*** ./src/app/financial/financial.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div><h1 style=\"color:#338ecf;text-align:center;\">Financial Institution Details</h1></div> \r\n<br><br><br>\r\n                <div class=\"container\" style=\"border:3px solid #428bca;background:white;height:350px;overflow-y:auto;\">\r\n                                <div class=\"col-sm-12\" id=\"fidetail_hide1\">\r\n                        <h3 style=\"color: #338ecf;text-align:center;\">Financial Institute Details</h3> \r\n                <table  class=\"table table-responsive-md\">\r\n                        <thead>\r\n                        <tr>\r\n                        <th><h4 style=\"color: black;\">Financial Institute Address</h4></th>\r\n                        <th><h4 style=\"color: black;\">Bank Name</h4></th>\r\n                        <th><h4 style=\"color: black;\">Balance</h4></th>\r\n                        <th><h4 style=\"color: black;\">Fixed Int</h4></th>\r\n                        <th><h4 style=\"color: black;\">Duration</h4></th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                                <tr *ngFor=\"let bank of details;\">\r\n                                        <td color=\"white\">{{bank.bank_address}}</td>\r\n                                        <td >{{bank.bank_name}} </td>\r\n                                        <td>{{bank.deposit_amount}}</td>\r\n                                        <td>{{bank.loan_interest}}</td>\r\n                                        <td>{{bank.duration}}</td>\r\n                                </tr>\r\n                        </tbody>\r\n                </table>\r\n                </div>\r\n        </div> \r\n\r\n        <br><br><br>\r\n\r\n       \r\n                <div class=\"container\" style=\"border:3px solid #428bca;background:white;overflow-y:auto;height:350px;\">\r\n                                <div class=\"col-sm-12\" id=\"fidetail_hide1\">\r\n                        <h3 style=\"color: #338ecf;text-align:center;\">Financial Institute Loan Details</h3> \r\n                        <table  class=\"table table-responsive-md\">\r\n                                <thead>\r\n                                        <tr>\r\n                                                <th><h4 style=\"color: black;\">Loan Id</h4></th>\r\n                                                <th><h4 style=\"color: black;\">Token Address</h4></th>\r\n                                                <th><h4 style=\"color: black;\">token value</h4></th>\r\n                                                <th><h4 style=\"color: black;\">Borrower Address</h4></th>\r\n                                                <th><h4 style=\"color: black;\">Total Amount</h4></th>\r\n                                                <th><h4 style=\"color: black;\">Total Paid Ins.</h4></th>\r\n                                                <th><h4 style=\"color: black;\">Total Months</h4></th>\r\n                                                <th><h4 style=\"color: black;\">Balance Loan</h4></th>\r\n                                                <th><h4 style=\"color: black;\">Balance Installment</h4></th>\r\n                                        </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                        <tr *ngFor=\"let bank of loandetails;\">\r\n                                                <td>{{bank.loanid}}</td>\r\n                                                <td>{{bank.tokenaddress}} </td>\r\n                                                <td>{{bank.tokenvalue}}</td>\r\n                                                <td>{{bank.borroweraddress}}</td>\r\n                                                <td>{{bank.totalamount}}</td>\r\n                                                <td>{{bank.totalpaidins}}</td>\r\n                                                <td>{{bank.totalmonth}}</td>\r\n                                                <td>{{bank.balanceloan}}</td>\r\n                                                <td>{{bank.balanceins}}</td>\r\n                                        </tr>\r\n                                </tbody>\r\n                        </table>\r\n                </div>\r\n        </div>  \r\n\r\n\r\n \r\n \r\n \r\n \r\n \r\n "

/***/ }),

/***/ "./src/app/financial/financial.component.ts":
/*!**************************************************!*\
  !*** ./src/app/financial/financial.component.ts ***!
  \**************************************************/
/*! exports provided: FinancialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialComponent", function() { return FinancialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_contactservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/contactservice.service */ "./src/app/service/contactservice.service.ts");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FinancialComponent = /** @class */ (function () {
    function FinancialComponent(reg, router) {
        var _this = this;
        this.reg = reg;
        this.router = router;
        this.details = [];
        this.loandetails = [];
        reg.getAccount().then(function (address) { return _this.address = address; });
    }
    FinancialComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reg.getAccount().then(function (address) { return _this.address = address; });
        this.reg.getUserBalance().then(function (balance) { return _this.balance = balance; });
        console.log(this.address);
        var meta = this;
        meta.reg.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.reg.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_2__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            window.location.reload(true);
                            // alert('Address Change Detected Please Refresh Page');
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            var _this = this;
            meta.reg.getUserBalance().then(function (balance) { return _this.balance = balance; });
            //meta.alltablework();
        }, 20000);
        this.reg.bank_reg1().then(function (obj) {
            console.log(_this.address);
            console.log("works");
            console.log(obj);
            var a = obj[2] / 100;
            _this.details.push({ "bank_address": _this.address, "bank_name": obj[10], "deposit_amount": obj[0], "loan_interest": a, "duration": obj[1] });
        });
        this.reg.borrower_view_fi().then(function (obj) {
            _this.reg.bank_reg1().then(function (val) {
                for (var j = val[3].toNumber(); j < val[4].toNumber(); j++) {
                    _this.reg.loandetails(val[9], j).then(function (result) {
                        var e = result[4] / val[1];
                        var f = result[6] - result[5];
                        var c = e * f;
                        if (result[0] > 0) {
                            _this.loandetails.push({ "loanid": result[0], "tokenaddress": result[8], "tokenvalue": result[1], "borroweraddress": result[3], "totalamount": result[4], "totalpaidins": result[5], "totalmonth": result[6], "balanceloan": c, "balanceins": e });
                        }
                    });
                }
            });
        });
    };
    FinancialComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
        if (this.id2) {
            clearInterval(this.id2);
        }
    };
    FinancialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-financial',
            template: __webpack_require__(/*! ./financial.component.html */ "./src/app/financial/financial.component.html"),
            styles: [__webpack_require__(/*! ./financial.component.css */ "./src/app/financial/financial.component.css")]
        }),
        __metadata("design:paramtypes", [_service_contactservice_service__WEBPACK_IMPORTED_MODULE_1__["ContactserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FinancialComponent);
    return FinancialComponent;
}());



/***/ }),

/***/ "./src/app/financialreg/financialreg.component.css":
/*!*********************************************************!*\
  !*** ./src/app/financialreg/financialreg.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .container\r\n{\r\n    margin: 20% 50%;\r\n    \r\n} */\r\nbody {font-family: Arial, Helvetica, sans-serif;}\r\n* {box-sizing: border-box}\r\n/* Full-width input fields */\r\n/* input[type=text], input[type=password],input[type=number] {\r\n    width: 95%;\r\n    padding: 15px;\r\n    margin: 5px 0 22px 0;\r\n    display: inline-block;\r\n    border: none;\r\n    background: #f1f1f1;\r\n} */\r\ninput[type=text]:focus, input[type=password]:focus,input[type=number]:focus {\r\n    background-color: #ddd;\r\n    outline: none;\r\n}\r\nhr {\r\n    border: 1px solid #f1f1f1;\r\n    margin-bottom: 25px;\r\n}\r\n/* Set a style for all buttons */\r\nbutton {\r\n   \r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    opacity: 0.9;\r\n}\r\nbutton:hover {\r\n    opacity:1;\r\n}\r\n/* Extra styles for the cancel button */\r\n.btn-danger {\r\n    padding: 14px 20px;\r\n    background-color: #f44336;\r\n}\r\n/* Float cancel and signup buttons and add an equal width */\r\n.btn-primary, .btn-danger {\r\n  float: left;\r\n  width: 50%;\r\n}\r\n/* Add padding to container elements */\r\n.container {\r\n    padding: 16px;\r\n}\r\n/* Clear floats */\r\n.clearfix::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n}\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    .btn-primary, .btn-danger {\r\n       width: 100%;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/financialreg/financialreg.component.html":
/*!**********************************************************!*\
  !*** ./src/app/financialreg/financialreg.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\r\n\r\n  <div class=\"container\" style=\"border:3px solid #428bca;background:white\">\r\n    <h1>Register The Financial Institution Here...</h1>\r\n    <p>Please fill in this form to create an account.</p>\r\n    <hr style=\"border:1px solid #428bca;\">\r\n\r\n    <form [formGroup]=\"angForm\" novalidate>\r\n  \r\n      <div class=\"form-group\">\r\n          <label>Bank Name:</label>\r\n          <input class=\"form-control\" formControlName=\"name\" type=\"text\" placeholder=\"Enter the Bank Name\" #a>\r\n      </div>\r\n      <div *ngIf=\"angForm.controls['name'].invalid && (angForm.controls['name'].dirty || angForm.controls['name'].touched)\" class=\"alert alert-danger\" >\r\n          <div *ngIf=\"angForm.controls['name'].errors.required\">\r\n            BankName is required.\r\n          </div>\r\n      </div>\r\n\r\n       <div class=\"form-group\">\r\n          <label>Loan Interest</label>\r\n          <input class=\"form-control\" formControlName=\"address\" type=\"text\" placeholder=\"Enter the Loan Intrest \" #b> \r\n      </div>\r\n      <div *ngIf=\"angForm.controls['address'].invalid && (angForm.controls['address'].dirty || angForm.controls['address'].touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"angForm.controls['address'].errors.required\">\r\n            Loan Interest is required.\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n          <label>Deposit Amount</label>\r\n          <input class=\"form-control\" formControlName=\"deposit\" type=\"text\" placeholder=\"Enter the Deposit Amount in Ether in Numbers \" #c>\r\n      </div>\r\n      <div *ngIf=\"angForm.controls['deposit'].invalid && (angForm.controls['deposit'].dirty || angForm.controls['deposit'].touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"angForm.controls['deposit'].errors.required\">\r\n          Deposit Amount is required.\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n          <label>Duration(Total Months in Numbers)</label>\r\n          <input class=\"form-control\" formControlName=\"duration\" type=\"number\" placeholder=\"Enter the duration in Months\" #d>\r\n      </div>\r\n      <div *ngIf=\"angForm.controls['duration'].invalid && (angForm.controls['duration'].dirty || angForm.controls['duration'].touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"angForm.controls['duration'].errors.required\">\r\n          Duration is required.\r\n        </div>\r\n      </div>\r\n     \r\n      <button type=\"submit\"\r\n          [disabled]=\"angForm.pristine || angForm.invalid\" #b2 class=\"btn btn-primary\" (click)=\"register_bank(a.value,b.value,c.value,d.value)\">Register\r\n      </button>\r\n      <button type=\"submit\" class=\"btn btn-danger\" #b1 (click)=\"cancel()\">Cancel</button>\r\n</form>\r\n  \r\n\r\n\r\n<ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  loadingText=\"Loading...\"\r\n  type=\"ball-scale-multiple\">\r\n</ngx-spinner>\r\n"

/***/ }),

/***/ "./src/app/financialreg/financialreg.component.ts":
/*!********************************************************!*\
  !*** ./src/app/financialreg/financialreg.component.ts ***!
  \********************************************************/
/*! exports provided: FinancialregComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialregComponent", function() { return FinancialregComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_contactservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/contactservice.service */ "./src/app/service/contactservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FinancialregComponent = /** @class */ (function () {
    function FinancialregComponent(reg, router, spinner, fb) {
        var _this = this;
        this.reg = reg;
        this.router = router;
        this.spinner = spinner;
        this.fb = fb;
        reg.getAccount().then(function (address) { return _this.address = address; });
        this.createForm();
    }
    FinancialregComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            deposit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            duration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    };
    FinancialregComponent.prototype.cancel = function () {
        this.router.navigate(['home']);
    };
    FinancialregComponent.prototype.register_bank = function (a, b, c, d) {
        var _this = this;
        this.spinner.show();
        //console.log(this.bank_name,this.loan_interest,this.deposit_amount,this.duration);
        this.reg.register_bank1(a, b, c, d).then(function (res) {
            console.log("Hash :" + res);
            if (res === 0) {
                _this.spinner.hide();
            }
            else
                _this.reg.hash(res).then(function (result) {
                    console.log("result : " + result);
                    _this.spinner.hide();
                    //this.router.navigate(['financial']);
                    _this.reg.fi_check_registeration();
                });
        });
    };
    FinancialregComponent.prototype.ngOnInit = function () {
        var _this = this;
        var meta = this;
        meta.reg.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.reg.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_4__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            window.location.reload(true);
                            // alert('Address Change Detected Please Refresh Page');
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            var _this = this;
            meta.reg.getUserBalance().then(function (balance) { return _this.balance = balance; });
            //meta.alltablework();
        }, 20000);
    };
    FinancialregComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
        if (this.id2) {
            clearInterval(this.id2);
        }
    };
    FinancialregComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-financialreg',
            template: __webpack_require__(/*! ./financialreg.component.html */ "./src/app/financialreg/financialreg.component.html"),
            styles: [__webpack_require__(/*! ./financialreg.component.css */ "./src/app/financialreg/financialreg.component.css")]
        }),
        __metadata("design:paramtypes", [_service_contactservice_service__WEBPACK_IMPORTED_MODULE_1__["ContactserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], FinancialregComponent);
    return FinancialregComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,html{\r\n    height: 100%;\r\n}\r\n\r\n/* remove outer padding */\r\n\r\n.container-main .row{\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\n/*Remove rounded coners*/\r\n\r\nnav.sidebar.navbar {\r\n    border-radius: 0px;\r\n}\r\n\r\nnav.sidebar, .container-main{\r\n    transition: margin 200ms ease-out;\r\n}\r\n\r\n/* Icons */\r\n\r\n.menu-icon {\r\n    font-size: 20px;\r\n}\r\n\r\n/* Add gap to nav and right windows.*/\r\n\r\n/*.container-main{\r\n    padding: 10px 10px 0 10px;\r\n}*/\r\n\r\n/* Colors */\r\n\r\n.navbar-m2p {\r\n    background-color: #3071a9;\r\n    border-color: #3071a9;\r\n    height: 2000%;\r\n}\r\n\r\n.navbar-m2p span, .navbar-m2p a {\r\n    color: #FFFFFF;\r\n}\r\n\r\n.active .dropdown-toggle {\r\n    background-color: #245682;\r\n    border-color: #245682;\r\n}\r\n\r\n.nav .open > a {\r\n    background-color: #245682;\r\n    border-color: #245682;\r\n}\r\n\r\n.nav li > a:hover, .nav .open > a:hover,\r\n.nav li > a:focus, .nav .open > a:focus,\r\n.nav li > a:active, .nav .open > a:active {\r\n    background-color: #245682;\r\n}\r\n\r\n.nav .open ul > li {\r\n    background-color: #428bca\r\n}\r\n\r\n.navbar-m2p .navbar-nav .open .dropdown-menu>li>a {\r\n    color: #FFFFFF;\r\n    padding: 10px;\r\n}\r\n\r\n/* borda menu active */\r\n\r\n.navbar-m2p .navbar-nav .active a {\r\n    margin-left: -1px;\r\n    border-left: 5px solid #428bca;\r\n}\r\n\r\n/* Hamburger */\r\n\r\n.navbar-toggle {\r\n    background-color: white;\r\n    border: 1px solid black;\r\n}\r\n\r\n.navbar-toggle .icon-bar,\r\n.navbar-toggle .icon-bar + .icon-bar {\r\n    background-color: #428bca;\r\n}\r\n\r\nnav:hover .forAnimate{\r\n    opacity: 1;\r\n}\r\n\r\n.navbar-m2p .dropdown-menu {\r\n    padding: 0px;\r\n}\r\n\r\n.nav li.separator {\r\n    padding: 10px 15px;\r\n    text-transform: uppercase;\r\n    background-color: #6aa3d5;\r\n    color: white;\r\n}\r\n\r\n.navbar-header\r\n{\r\n    background-color: black;\r\n}\r\n\r\n/* .....NavBar: Icon only with coloring/layout.....*/\r\n\r\n/*small/medium side display*/\r\n\r\n@media (min-width: 768px) {\r\n\r\n    /*Allow main to be next to Nav*/\r\n    .container-main{\r\n        position: absolute;\r\n        width: calc(100% - 40px); /*keeps 100% minus nav size*/\r\n        margin-left: 40px;\r\n        float: right;\r\n    }\r\n\r\n    /*lets nav bar to be showed on mouseover*/\r\n    nav.sidebar:hover + .container-main{\r\n        margin-left: 300px;\r\n    }\r\n\r\n    /*Center Brand*/\r\n    nav.sidebar.navbar.sidebar>.container .navbar-brand, .navbar>.container-fluid .navbar-brand {\r\n        margin-left: 0px;\r\n    }\r\n    /*Center Brand*/\r\n    nav.sidebar .navbar-brand, nav.sidebar .navbar-header{\r\n        text-align: center;\r\n        width: 100%;\r\n        margin-left: 0px;\r\n        font-size: 25px;\r\n        line-height: 27px;\r\n    }\r\n\r\n    /*Center Icons*/\r\n    nav.sidebar a{\r\n        padding-right: 13px;\r\n    }\r\n\r\n    /* Colors/style dropdown box*/\r\n    nav.sidebar .navbar-nav .open .dropdown-menu {\r\n        position: static;\r\n        float: none;\r\n        width: auto;\r\n        margin-top: 0;\r\n        background-color: transparent;\r\n        border: 0;\r\n        box-shadow: none;\r\n    }\r\n\r\n    /*allows nav box to use 100% width*/\r\n    nav.sidebar .navbar-collapse, nav.sidebar .container-fluid{\r\n        padding: 0 1px 0 1px;\r\n    }\r\n\r\n    /*gives sidebar width/height*/\r\n    nav.sidebar{\r\n        width: 300px;\r\n        height: 100%;\r\n        position:fixed;\r\n        margin-left: -260px;\r\n        float: left;\r\n        z-index: 8000;\r\n        margin-bottom: 0px;\r\n    }\r\n\r\n    /*give sidebar 100% width;*/\r\n    nav.sidebar li {\r\n        width: 100%;\r\n    }\r\n\r\n    /* Move nav to full on mouse over*/\r\n    nav.sidebar:hover{\r\n        margin-left: 0px;\r\n    }\r\n    /*for hiden things when navbar hidden*/\r\n    .forAnimate{\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n/* .....NavBar: Fully showing nav bar..... */\r\n\r\n@media (min-width: 1330px) {\r\n\r\n    /*Allow main to be next to Nav*/\r\n    .container-main{\r\n        width: calc(100% - 300px); /*keeps 100% minus nav size*/\r\n        margin-left: 300px;\r\n    }\r\n\r\n    /*Show all nav*/\r\n    nav.sidebar{\r\n        margin-left: 0px;\r\n        float: left;\r\n    }\r\n    /*Show hidden items on nav*/\r\n    nav.sidebar .forAnimate{\r\n        opacity: 1;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<nav class=\"navbar navbar-m2p sidebar\" role=\"navigation\">\r\n    <div class=\"container-fluid\">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-sidebar-navbar-collapse-1\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"#\">\r\n               <font size=\"5\"style=\"color: #6aa3d5\">LOAN</font><font size=\"4\">SECURITIZATION</font>\r\n            </a>\r\n        </div>\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-sidebar-navbar-collapse-1\">\r\n            <ul class=\"nav navbar-nav\">\r\n            <li class=\"separator\">Account Details</li>\r\n            <a>Account:</a><input type=\"text\" class=\"form-control\" value={{address}} placeholder=\"Address\"readonly/>\r\n             <a>Balance in Eth:</a><input type=\"text\" class=\"form-control\" value={{balance}} placeholder=\"Balance\"readonly/>\r\n             <li class=\"separator\">Content</li>\r\n                <!-- Home -->\r\n                <!-- <li class=\"active open\"> -->\r\n                        <li class=\"\">\r\n                    <a href=\"#\" routerLink=\"/home\" class=\"sidebar-title\">\r\n                      <span class=\"pull-right hidden-xs showopacity glyphicon material-icons\">av_timer</span>Home\r\n                  </a>\r\n                </li>\r\n                <!-- Financial Institution -->\r\n                <li class=\"\">\r\n                        <a href=\"#\" routerLink=\"/financial\"  class=\"sidebar-title\">\r\n                        <span class=\"menu-icon pull-right hidden-xs showopacity glyphicon material-icons\">burst_mode</span>Financial Institution\r\n                    </a>\r\n                </li>\r\n                <!-- Borrower -->\r\n                <li class=\"\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <span class=\"menu-icon pull-right hidden-xs showopacity glyphicon material-icons\">description</span>\r\n                        Borrower <span class=\"caret\"></span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu forAnimate\" role=\"menu\">\r\n                        <li><a href=\"#\" routerLink=\"/totalfi\" ><i class=\"material-icons\">add</i>Home</a></li>\r\n                        <li><a href=\"#\" routerLink=\"/Monthlypayment\" ><i class=\"material-icons\">add</i>Monthly Payment</a></li>\r\n                    </ul>\r\n                </li>\r\n                <!-- SPV -->\r\n                <li class=\"\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <span class=\"menu-icon pull-right hidden-xs showopacity glyphicon material-icons\">chat_bubble_outline</span>\r\n                        SPV <span class=\"caret\"></span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu forAnimate\" role=\"menu\">\r\n                            <li><a href=\"#\" routerLink=\"/SPV\" ><i class=\"material-icons\">add</i>Home</a></li>\r\n                            <li><a href=\"#\" routerLink=\"/purchaseloan\" ><i class=\"material-icons\">add</i>Purchase Loan</a></li>\r\n                            <li><a href=\"#\" routerLink=\"/createpack\" ><i class=\"material-icons\">add</i>Create Pack</a></li>\r\n                            <li><a href=\"#\" routerLink=\"/spvpackdetail\" ><i class=\"material-icons\">add</i>SPV Pack Detail</a></li>\r\n                    </ul>\r\n                </li>\r\n                <!-- Investor -->\r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon material-icons\">label</span>\r\n                        Investor <span class=\"caret\"></span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu forAnimate\" role=\"menu\">\r\n                            <li><a href=\"#\" routerLink=\"/Investor\" ><i class=\"material-icons\">add</i>Home</a></li>\r\n                            <li><a href=\"#\" routerLink=\"/Purchasepack\" ><i class=\"material-icons\">add</i>Purchase Pack</a></li>\r\n                            <li><a href=\"#\" routerLink=\"/Investorpackdetail\" ><i class=\"material-icons\">add</i>Investor Pack Detail</a></li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_contactservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/contactservice.service */ "./src/app/service/contactservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(take, router) {
        var _this = this;
        this.take = take;
        this.router = router;
        take.getUserBalance().then(function (balance) { return _this.balance = balance; });
        take.getAccount().then(function (address) { return _this.address = address; });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var meta = this;
        meta.take.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.take.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_3__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            window.location.reload(true);
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            var _this = this;
            meta.take.getUserBalance().then(function (balance) { return _this.balance = balance; });
            //meta.alltablework();
        }, 20000);
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
        if (this.id2) {
            clearInterval(this.id2);
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_service_contactservice_service__WEBPACK_IMPORTED_MODULE_1__["ContactserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/inverstor/inverstor.component.css":
/*!***************************************************!*\
  !*** ./src/app/inverstor/inverstor.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th,td \r\n{\r\n    text-align:center\r\n}\r\n.table-wrapper-2 \r\n{\r\n    display: block;\r\n    max-height: 300px;\r\n    overflow-y: auto;\r\n    overflow-y:scroll;\r\n}"

/***/ }),

/***/ "./src/app/inverstor/inverstor.component.html":
/*!****************************************************!*\
  !*** ./src/app/inverstor/inverstor.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1 style=\"color:#338ecf;text-align:center;\">Investor Details</h1>\r\n</div>\r\n<div classs=\"container\">\r\n  <div id=\"invester_register\">\r\n    <div class=\"container\">\r\n                 \r\n                  <div class=\"container\" style=\"border:3px solid #428bca;background:white;height:200px;overflow-y:auto;\">\r\n                      <div class=\"col-sm-12\" id=\"investor_detail\">\r\n                    <h3 style=\"color: #338ecf;text-align:center;\">Investor  Details</h3>\r\n                                  <table class=\"table table-hover\" id=\"invesdetai_table\">\r\n                                      <thead>\r\n                                        <tr>\r\n                                          <th><h4 style=\"color: black;\">Investor Address</h4></th>\r\n                                          <th><h4 style=\"color: black;\">Total Amount</h4></th>\r\n                                          <th><h4 style=\"color: black;\">Package</h4></th>\r\n                                        </tr>\r\n                                      </thead>\r\n                                      <tbody>\r\n                                      <tr *ngFor=\"let investor of details;\">\r\n                                          <td >{{investor.investor_address}}</td>\r\n                                          <td >{{investor.Totalamt}} </td>\r\n                                          <td>{{investor.pack}}</td>\r\n                                      </tr>\r\n                      \r\n                                      </tbody>\r\n                                    </table>\r\n                    </div>\r\n                </div>  \r\n\r\n       \r\n      </div>\r\n      </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/inverstor/inverstor.component.ts":
/*!**************************************************!*\
  !*** ./src/app/inverstor/inverstor.component.ts ***!
  \**************************************************/
/*! exports provided: InverstorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InverstorComponent", function() { return InverstorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_contactservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/contactservice.service */ "./src/app/service/contactservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InverstorComponent = /** @class */ (function () {
    function InverstorComponent(inv) {
        var _this = this;
        this.inv = inv;
        this.details = [];
        this.details1 = [];
        this.spvdetails = [];
        this.packdetails = [];
        inv.getUserBalance().then(function (balance) { return _this.balance = balance; });
        inv.getAccount().then(function (address) { return _this.address = address; });
    }
    // inv_reg(){
    //   alert("hai");
    //  console.log(this.inves_ether);
    //  this.inv.Investorether(this.inves_ether).then((res)=>{
    //     alert("second")
    //     console.log(res)
    //  });
    // }
    InverstorComponent.prototype.pur_pack = function () {
        alert("hai");
        console.log(this.spvaddress);
        this.inv.purchasepack(this.packageid, this.spvaddress).then(function (res) {
            alert("second");
            console.log(res);
        });
    };
    InverstorComponent.prototype.choosespv = function (spvaddress) {
        var _this = this;
        this.inv.spv_reg2(spvaddress).then(function (res) {
            for (var i = res[5].toNumber(); i <= res[6].toNumber(); i++) {
                _this.inv.loandetails(res[7], i).then(function (result) {
                    if (result[0] > 0) {
                        var a = result[1] / 1000000000000000000;
                        _this.packdetails.push({ "packid": result[0], "tokenvalue": a });
                    }
                });
            }
        });
    };
    InverstorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inv.getAccount().then(function (address) { return _this.address = address; });
        this.inv.getUserBalance().then(function (balance) { return _this.balance = balance; });
        console.log(this.address);
        this.inv.investordetails().then(function (obj) {
            _this.inv.investortable().then(function (obj1) {
                if (obj[12] > 0)
                    _this.details.push({ "investor_address": obj[8], "Totalamt": obj[12], "pack": obj1[0] });
            });
        });
        this.inv.spv_details().then(function (obj) {
            obj.forEach(function (item) {
                _this.inv.spv_reg2(item).then(function (result) {
                    _this.spvdetails.push({ "spvaddress": result[7], "totalamount": result[11], "totalloan": result[1], "availablepack": result[13] });
                });
            });
        });
        this.inv.spv_details().then(function (obj) {
            obj.forEach(function (item) {
                console.log(item);
                _this.inv.spv_reg2(item).then(function (res) {
                    console.log(res);
                    for (var i = res[5].toNumber(); i <= res[6].toNumber(); i++) {
                        console.log(i);
                        _this.inv.loandetails1(i).then(function (result) {
                            console.log(result[0]);
                            if (result[0] > 0) {
                                var a = result[1] / 1000000000000000000;
                                _this.details1.push({ "investor_package": result[0], "token_value": a });
                            }
                        });
                    }
                });
            });
        });
    };
    InverstorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inverstor',
            template: __webpack_require__(/*! ./inverstor.component.html */ "./src/app/inverstor/inverstor.component.html"),
            styles: [__webpack_require__(/*! ./inverstor.component.css */ "./src/app/inverstor/inverstor.component.css")]
        }),
        __metadata("design:paramtypes", [_service_contactservice_service__WEBPACK_IMPORTED_MODULE_1__["ContactserviceService"]])
    ], InverstorComponent);
    return InverstorComponent;
}());



/***/ }),

/***/ "./src/app/investorpackdetail/investorpackdetail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/investorpackdetail/investorpackdetail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/investorpackdetail/investorpackdetail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/investorpackdetail/investorpackdetail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div><h1 style=\"color:#338ecf;text-align:center;\">Investor Pack Details</h1></div> \r\n<br>\r\n<br><br>\r\n    <div class=\"col-sm-2\" id=\"invester_pack_details\">\r\n      <div class=\"container\" style=\"border:3px solid #428bca;background:white;height:350px;overflow-y:auto;\">\r\n        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <h3 style=\"color: #338ecf;text-align:center;\">Inverstor Package Details</h3></div> \r\n      <table class=\"table table-hover\" id=\"inves_loan_table\">\r\n          <thead>\r\n            <tr>\r\n              <th><h4 style=\"color: black;\">Package Id</h4></th>\r\n              <th><h4 style=\"color: black;\">Total Amount</h4></th>            \r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n              <tr *ngFor=\"let investorpackage of details1;\">\r\n                  <td >{{investorpackage.investor_package}}</td>\r\n                  <td >{{investorpackage.token_value}} </td>\r\n               </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n        </div>\r\n    </div>  \r\n  "

/***/ }),

/***/ "./src/app/investorpackdetail/investorpackdetail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/investorpackdetail/investorpackdetail.component.ts ***!
  \********************************************************************/
/*! exports provided: InvestorpackdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestorpackdetailComponent", function() { return InvestorpackdetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_contactservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/contactservice.service */ "./src/app/service/contactservice.service.ts");
// import { Component, OnInit } from '@angular/core';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// @Component({
//   selector: 'app-investorpackdetail',
//   templateUrl: './investorpackdetail.component.html',
//   styleUrls: ['./investorpackdetail.component.css']
// })
// export class InvestorpackdetailComponent implements OnInit {
//   constructor() { }
//   ngOnInit() {
//   }
// }


var InvestorpackdetailComponent = /** @class */ (function () {
    function InvestorpackdetailComponent(inv) {
        var _this = this;
        this.inv = inv;
        this.details = [];
        this.details1 = [];
        this.spvdetails = [];
        this.packdetails = [];
        inv.getUserBalance().then(function (balance) { return _this.balance = balance; });
        inv.getAccount().then(function (address) { return _this.address = address; });
    }
    // inv_reg(){
    //   alert("hai");
    //  console.log(this.inves_ether);
    //  this.inv.Investorether(this.inves_ether).then((res)=>{
    //     alert("second")
    //     console.log(res)
    //  });
    // }
    InvestorpackdetailComponent.prototype.pur_pack = function () {
        alert("hai");
        console.log(this.spvaddress);
        this.inv.purchasepack(this.packageid, this.spvaddress).then(function (res) {
            alert("second");
            console.log(res);
        });
    };
    InvestorpackdetailComponent.prototype.choosespv = function (spvaddress) {
        var _this = this;
        this.inv.spv_reg2(spvaddress).then(function (res) {
            for (var i = res[5].toNumber(); i <= res[6].toNumber(); i++) {
                _this.inv.loandetails(res[7], i).then(function (result) {
                    if (result[0] > 0) {
                        var a = result[1] / 1000000000000000000;
                        _this.packdetails.push({ "packid": result[0], "tokenvalue": a });
                    }
                });
            }
        });
    };
    InvestorpackdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inv.getAccount().then(function (address) { return _this.address = address; });
        this.inv.getUserBalance().then(function (balance) { return _this.balance = balance; });
        console.log(this.address);
        this.inv.investordetails().then(function (obj) {
            if (obj[0] > 0)
                _this.details.push({ "investor_address": obj[8], "Totalamt": obj[0], "pack": obj[2] });
        });
        this.inv.spv_details().then(function (obj) {
            obj.forEach(function (item) {
                _this.inv.spv_reg2(item).then(function (result) {
                    _this.spvdetails.push({ "spvaddress": result[7], "totalamount": result[0], "totalloan": result[1], "availablepack": result[2] });
                });
            });
        });
        this.inv.spv_details().then(function (obj) {
            obj.forEach(function (item) {
                console.log(item);
                _this.inv.spv_reg2(item).then(function (res) {
                    console.log(res);
                    for (var i = res[5].toNumber(); i <= res[6].toNumber(); i++) {
                        console.log(i);
                        _this.inv.loandetails1(i).then(function (result) {
                            if (result[0] > 0) {
                                var a = result[1] / 1000000000000000000;
                                _this.details1.push({ "investor_package": result[0], "token_value": a });
                            }
                        });
                    }
                });
            });
        });
    };
    InvestorpackdetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-investorpackdetail',
            template: __webpack_require__(/*! ./investorpackdetail.component.html */ "./src/app/investorpackdetail/investorpackdetail.component.html"),
            styles: [__webpack_require__(/*! ./investorpackdetail.component.css */ "./src/app/investorpackdetail/investorpackdetail.component.css")]
        }),
        __metadata("design:paramtypes", [_service_contactservice_service__WEBPACK_IMPORTED_MODULE_1__["ContactserviceService"]])
    ], InvestorpackdetailComponent);
    return InvestorpackdetailComponent;
}());



/***/ }),

/***/ "./src/app/investorreg/investorreg.component.css":
/*!*******************************************************!*\
  !*** ./src/app/investorreg/investorreg.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .container\r\n{\r\n    margin: 20% 50%;\r\n    \r\n} */\r\nbody {font-family: Arial, Helvetica, sans-serif;}\r\n* {box-sizing: border-box}\r\n/* Full-width input fields */\r\n/* input[type=text], input[type=password],input[type=number] {\r\n    width: 95%;\r\n    padding: 15px;\r\n    margin: 5px 0 22px 0;\r\n    display: inline-block;\r\n    border: none;\r\n    background: #f1f1f1;\r\n} */\r\ninput[type=text]:focus, input[type=password]:focus,input[type=number]:focus {\r\n    background-color: #ddd;\r\n    outline: none;\r\n}\r\nhr {\r\n    border: 1px solid #f1f1f1;\r\n    margin-bottom: 25px;\r\n}\r\n/* Set a style for all buttons */\r\nbutton {\r\n   \r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    opacity: 0.9;\r\n}\r\nbutton:hover {\r\n    opacity:1;\r\n}\r\n/* Extra styles for the cancel button */\r\n.btn-danger {\r\n    padding: 14px 20px;\r\n    background-color: #f44336;\r\n}\r\n/* Float cancel and signup buttons and add an equal width */\r\n.btn-primary, .btn-danger {\r\n  float: left;\r\n  width: 50%;\r\n}\r\n/* Add padding to container elements */\r\n.container {\r\n    padding: 16px;\r\n}\r\n/* Clear floats */\r\n.clearfix::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n}\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    .btn-primary, .btn-danger {\r\n       width: 100%;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/investorreg/investorreg.component.html":
/*!********************************************************!*\
  !*** ./src/app/investorreg/investorreg.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  \r\n      <div class=\"container\" style=\"border:3px solid #428bca;;background:white\">\r\n          <h1>Register The Investor Here...</h1>\r\n          <p>Please fill in this form to create an account.</p>\r\n          <hr style=\"border:1px solid #428bca;\">\r\n          <form [formGroup]=\"angForm\" #fid novalidate>\r\n      \r\n            <div class=\"form-group\">\r\n                <label>Deposit Amount</label>\r\n                <input class=\"form-control\" formControlName=\"amt\" type=\"text\" placeholder=\"Enter the amount in Ether\" #a>\r\n            </div>\r\n            <div *ngIf=\"angForm.controls['amt'].invalid && (angForm.controls['amt'].dirty || angForm.controls['amt'].touched)\" class=\"alert alert-danger\" >\r\n                <div *ngIf=\"angForm.controls['amt'].errors.required\">\r\n                  Deposit is required.\r\n                </div>\r\n            </div>\r\n            <button type=\"submit\"\r\n                [disabled]=\"angForm.pristine || angForm.invalid\" class=\"btn btn-primary\" (click)=\"inv_reg(a.value)\">Register\r\n            </button>\r\n            <button type=\"submit\" class=\"btn btn-danger\" (click)=\"fid.reset()\">Cancel</button>\r\n      </form>\r\n        </div>\r\n    \r\n  \r\n</div>\r\n\r\n\r\n<ngx-spinner\r\n      bdColor=\"rgba(51,51,51,0.8)\"\r\n      size=\"medium\"\r\n      color=\"#fff\"\r\n      loadingText=\"Loading...\"\r\n      type=\"ball-scale-multiple\">\r\n</ngx-spinner>\r\n\r\n<ngx-spinner></ngx-spinner>\r\n"

/***/ }),

/***/ "./src/app/investorreg/investorreg.component.ts":
/*!******************************************************!*\
  !*** ./src/app/investorreg/investorreg.component.ts ***!
  \******************************************************/
/*! exports provided: InvestorregComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestorregComponent", function() { return InvestorregComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_contactservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/contactservice.service */ "./src/app/service/contactservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InvestorregComponent = /** @class */ (function () {
    function InvestorregComponent(inv, router, spinner, fb) {
        var _this = this;
        this.inv = inv;
        this.router = router;
        this.spinner = spinner;
        this.fb = fb;
        inv.getUserBalance().then(function (balance) { return _this.balance = balance; });
        inv.getAccount().then(function (address) { return _this.address = address; });
        this.createForm();
    }
    InvestorregComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            amt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    InvestorregComponent.prototype.cancel = function () {
        this.router.navigate(['home']);
    };
    InvestorregComponent.prototype.inv_reg = function (a) {
        var _this = this;
        this.spinner.show();
        console.log(a);
        this.inv.Investorether(a).then(function (res) {
            console.log("Hash :" + res);
            if (res === 0) {
                _this.spinner.hide();
            }
            else
                _this.inv.hash(res).then(function (result) {
                    console.log("result : " + result);
                    _this.spinner.hide();
                    _this.router.navigate(['Investor']);
                });
        });
    };
    InvestorregComponent.prototype.ngOnInit = function () {
    };
    InvestorregComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-investorreg',
            template: __webpack_require__(/*! ./investorreg.component.html */ "./src/app/investorreg/investorreg.component.html"),
            styles: [__webpack_require__(/*! ./investorreg.component.css */ "./src/app/investorreg/investorreg.component.css")]
        }),
        __metadata("design:paramtypes", [_service_contactservice_service__WEBPACK_IMPORTED_MODULE_1__["ContactserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], InvestorregComponent);
    return InvestorregComponent;
}());



/***/ }),

/***/ "./src/app/metamask-error/metamask-error.component.css":
/*!*************************************************************!*\
  !*** ./src/app/metamask-error/metamask-error.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 50%;\r\n}"

/***/ }),

/***/ "./src/app/metamask-error/metamask-error.component.html":
/*!**************************************************************!*\
  !*** ./src/app/metamask-error/metamask-error.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\r\n\t<head>\r\n\t\t<title>Ethereum Account Connectivity Error Page</title>\r\n\t</head>\r\n\t<body>\r\n\t\t<br><br><br>\r\n\t\t <img class=\"center\" src=\"./assets/metamask-fox-logo.png\"/> \r\n\t\t\r\n\t\t\t<p style=\"text-align:center\">\r\n\t\t\t\t<br>There was an error while fetching your account.\r\n\t\t\t\t<br>Make sure your Ethereum client is configured correctly\r\n\r\n\t\t\t\t<br>Tips:\r\n\t\t\t\t<br>Ensure you unlocked your MetaMask plugin.\r\n\t\t\t\t<br>If you don't have MetaMask plugin install here: \r\n\t\t\t\t<br><a href =\"https://metamask.io/ \">https://metamask.io/</a>\r\n\t\t\t</p>\r\n\t\r\n\t</body>\r\n</html>"

/***/ }),

/***/ "./src/app/metamask-error/metamask-error.component.ts":
/*!************************************************************!*\
  !*** ./src/app/metamask-error/metamask-error.component.ts ***!
  \************************************************************/
/*! exports provided: MetamaskErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetamaskErrorComponent", function() { return MetamaskErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_contactservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/contactservice.service */ "./src/app/service/contactservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MetamaskErrorComponent = /** @class */ (function () {
    function MetamaskErrorComponent(wcs, router) {
        this.wcs = wcs;
        this.router = router;
    }
    MetamaskErrorComponent.prototype.ngOnInit = function () {
        var meta = this;
        this.id1 = setInterval(function () {
            if (typeof window.web3 !== 'undefined') {
                meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_2__(window.web3.currentProvider);
                if (meta._web3.eth.accounts[0] !== undefined) {
                    meta.router.navigate(['home']);
                }
            }
        }, 200);
    };
    MetamaskErrorComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    MetamaskErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-metamask-error',
            template: __webpack_require__(/*! ./metamask-error.component.html */ "./src/app/metamask-error/metamask-error.component.html"),
            styles: [__webpack_require__(/*! ./metamask-error.component.css */ "./src/app/metamask-error/metamask-error.component.css")]
        }),
        __metadata("design:paramtypes", [_service_contactservice_service__WEBPACK_IMPORTED_MODULE_3__["ContactserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MetamaskErrorComponent);
    return MetamaskErrorComponent;
}());



/***/ }),

/***/ "./src/app/monthlypayment/monthlypayment.component.css":
/*!*************************************************************!*\
  !*** ./src/app/monthlypayment/monthlypayment.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/monthlypayment/monthlypayment.component.html":
/*!**************************************************************!*\
  !*** ./src/app/monthlypayment/monthlypayment.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div><h1 style=\"color:#338ecf;text-align:center;\">Monthly Payment</h1></div> \r\n<br><br><br>\r\n<div class=\"col-sm-12\" id=\"borrrow_hide\">\r\n    <div class=\"container\" style=\"border:3px solid #428bca;background:white;overflow-y:auto;height:450px;\">\r\n              <h3 style=\"color: #338ecf;text-align:center;\">Borrower Loan Details</h3>\r\n        <table class=\"table table-responsive-md\">\r\n        <!-- <thead class=\"mdb-color lighten-4\"> -->\r\n                    <tr>\r\n                      <th><h4 style=\"color: black;\">Loan Id</h4></th>\r\n                      <th><h4 style=\"color: black;\">Token Address</h4></th>\r\n                      <th><h4 style=\"color: black;\">Token value</h4></th>\r\n                      <!-- <th><h4 style=\"color: black;\">Token name</h4></th> -->\r\n                      <th><h4 style=\"color: black;\">Bank Address</h4></th>\r\n                      <!-- <th><h4 style=\"color: black;\">Borrower Address<h4></th> -->\r\n                      <th><h4 style=\"color: black;\">Total Amount</h4></th>\r\n                      <th><h4 style=\"color: black;\">Total Paid Ins.</h4></th>\r\n                      <!-- <th><h4 style=\"color: black;\">Last Paid</h4></th> -->\r\n                      <th><h4 style=\"color: black;\">Total Months</h4></th>\r\n                      <th><h4 style=\"color: black;\">Balance Loan</h4></th>\r\n                      <th><h4 style=\"color: black;\">Balance Installment</h4></th>\r\n                    </tr>\r\n                  <!-- </thead> -->\r\n                  <tbody id=\"get_loan_list\">\r\n                    <tr *ngFor=\"let bank of loandetails;\">\r\n                        <td>{{bank.loanid}}</td>\r\n                        <td>{{bank.tokenaddress}} </td>\r\n                        <td>{{bank.tokenvalue}}</td>\r\n                        <td>{{bank.bankaddress}}</td>\r\n                        <td>{{bank.totalamount}}</td>\r\n                        <td>{{bank.totalpaidins}}</td>\r\n                        <td>{{bank.totalmonth}}</td>\r\n                        <td>{{bank.balanceloan}}</td>\r\n                        <td>{{bank.balanceins}}</td>\r\n                        <td><button  class=\"btn btn-primary\"  (click)=\"MonthlyPayment(bank.loanid,bank.bankaddress,bank.balanceins)\">Payment</button></td>\r\n                        <!-- <td><a class=\"btn btn-primary\" (click)=\"delete(data.id)\"><i class=\"fa fa-trash\"></i></a></td> -->\r\n                    </tr>     \r\n                  </tbody>\r\n                </table>\r\n</div>\r\n   </div>\r\n\r\n\r\n   <ngx-spinner\r\n              bdColor=\"rgba(51,51,51,0.8)\"\r\n              size=\"medium\"\r\n              color=\"#fff\"\r\n              loadingText=\"Loading...\"\r\n              type=\"ball-scale-multiple\">\r\n        </ngx-spinner>"

/***/ }),

/***/ "./src/app/monthlypayment/monthlypayment.component.ts":
/*!************************************************************!*\
  !*** ./src/app/monthlypayment/monthlypayment.component.ts ***!
  \************************************************************/
/*! exports provided: MonthlypaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthlypaymentComponent", function() { return MonthlypaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_contactservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/contactservice.service */ "./src/app/service/contactservice.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// declare let window: any;
// import * as Web3 from 'web3';


var MonthlypaymentComponent = /** @class */ (function () {
    function MonthlypaymentComponent(get, router, spinner) {
        var _this = this;
        this.get = get;
        this.router = router;
        this.spinner = spinner;
        this.alldetails = [];
        this.loandetails = [];
        this.isButtonVisible = true;
        get.getAccount().then(function (address) { return _this.address = address; });
        get.borrower_view_fi();
    }
    MonthlypaymentComponent.prototype.MonthlyPayment = function (loanid, bankaddress, balanceins) {
        var _this = this;
        this.spinner.show();
        this.get.MonthlyPayment(loanid, bankaddress, balanceins).then(function (res) {
            console.log(res);
            console.log("Hash :" + res);
            if (res === 0) {
                _this.spinner.hide();
            }
            else
                _this.get.hash(res).then(function (result) {
                    console.log("result : " + result);
                    _this.spinner.hide();
                    _this.get.loandetails(bankaddress, loanid).then(function (result) {
                        if (result[5] == result[6]) {
                            alert("The Loan Process is completed and the respected Token is delivered to revered Account Shortly");
                        }
                    });
                });
        });
    };
    MonthlypaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.get.borrower_view_fi().then(function (obj) {
            obj.forEach(function (item) {
                // console.log(item);
                console.log(_this.address);
                _this.get.bank_reg(item).then(function (val) {
                    for (var j = val[3].toNumber(); j < val[4].toNumber(); j++) {
                        _this.get.loandetails(item, j).then(function (result) {
                            var e = result[4] / val[1];
                            var f = result[6] - result[5];
                            var c = e * f;
                            console.log();
                            console.log(f);
                            if (_this.address == result[3] && result[5] < result[6]) {
                                _this.loandetails.push({ "loanid": result[0], "tokenaddress": result[8], "tokenvalue": result[1], "bankaddress": result[2], "totalamount": result[4], "totalpaidins": result[5], "totalmonth": result[6], "balanceloan": c, "balanceins": e });
                            }
                        });
                    }
                });
            });
        });
    };
    MonthlypaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-monthlypayment',
            template: __webpack_require__(/*! ./monthlypayment.component.html */ "./src/app/monthlypayment/monthlypayment.component.html"),
            styles: [__webpack_require__(/*! ./monthlypayment.component.css */ "./src/app/monthlypayment/monthlypayment.component.css")]
        }),
        __metadata("design:paramtypes", [_service_contactservice_service__WEBPACK_IMPORTED_MODULE_2__["ContactserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], MonthlypaymentComponent);
    return MonthlypaymentComponent;
}());



/***/ }),

/***/ "./src/app/purchaseloan/purchaseloan.component.css":
/*!*********************************************************!*\
  !*** ./src/app/purchaseloan/purchaseloan.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/purchaseloan/purchaseloan.component.html":
/*!**********************************************************!*\
  !*** ./src/app/purchaseloan/purchaseloan.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div><h1 style=\"color:#338ecf;text-align:center;\">Loan Purchasing</h1></div> \r\n<br>\r\n<br><br>\r\n    <div class=\"col-sm-8\" id=\"fidetail_hide1\">\r\n    <div class=\"container\" style=\"border:3px solid #428bca;background:white;height:350px;overflow-y:auto;\">\r\n      <h3 style=\"color: #338ecf;text-align:center;\">Financial Institute Details</h3> \r\n    <table  class=\"table table-responsive-md\">\r\n    <thead>\r\n    <tr>\r\n    <th><h4 style=\"color: black;\">Financial Institute Address</h4></th>\r\n    <th><h4 style=\"color: black;\">Bank Name</h4></th>\r\n    <th><h4 style=\"color: black;\">Balance</h4></th>\r\n    <th><h4 style=\"color: black;\">Fixed Int</h4></th>\r\n    <th><h4 style=\"color: black;\">Duration</h4></th>\r\n    <th><h4 style=\"color: black;\">Available Loan</h4></th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let bank of detail;\">\r\n            <td >{{bank.bank_address}}</td>\r\n            <td >{{bank.bank_name}} </td>\r\n            <td>{{bank.deposit_amount}}</td>\r\n            <td>{{bank.loan_interest}}</td>\r\n            <td>{{bank.duration}}</td>\r\n            <td>{{bank.loan}}</td>\r\n            <td><button class=\"btn btn-primary\" (click)=\"choosefi(bank.bank_address)\">choose</button></td>\r\n        </tr>\r\n    </tbody>\r\n    </table>\r\n    </div>\r\n    </div>\r\n    &nbsp;  &nbsp;  &nbsp;  &nbsp;\r\n    <div class=\"col-sm-8\" id=\"spv_deta\">\r\n    &nbsp;\r\n    <div class=\"container\" style=\"border:3px solid #428bca;background:white;overflow-y:auto;height:400px;\">\r\n      <div><h3 style=\"color: #338ecf;text-align:center;\">FI Loan Details</h3></div>\r\n    <table  class=\"table table-responsive-md\">\r\n        <thead>\r\n          <tr>\r\n            <th><h4 style=\"color: black;\">Loan Id</h4></th>\r\n            <th><h4 style=\"color: black;\">token address</h4></th>\r\n            <th><h4 style=\"color: black;\">Token Value</h4></th>\r\n            <th><h4 style=\"color: black;\">Bank Address</h4></th>\r\n            <th><h4 style=\"color: black;\">Total Amount</h4></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody >\r\n          <tr *ngFor=\"let spv of purdetails;\">\r\n            <td >{{spv.loanid}}</td>\r\n            <td >{{spv.tokenaddress}} </td>\r\n            <td>{{spv.tokenvalue}}</td>\r\n            <td>{{spv.bankaddress}}</td>\r\n            <td>{{spv.totalamount}}</td>\r\n            <td><button  class=\"btn btn-primary\" (click)=\"pur_loan(spv.loanid,spv.bankaddress)\">Buy</button></td>    \r\n        </tr>\r\n    \r\n        </tbody>\r\n      </table>\r\n      </div>\r\n    </div>  \r\n    \r\n   \r\n    <ngx-spinner\r\n    bdColor=\"rgba(51,51,51,0.8)\"\r\n    size=\"medium\"\r\n    color=\"#fff\"\r\n    loadingText=\"Loading...\"\r\n    type=\"ball-scale-multiple\">\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/purchaseloan/purchaseloan.component.ts":
/*!********************************************************!*\
  !*** ./src/app/purchaseloan/purchaseloan.component.ts ***!
  \********************************************************/
/*! exports provided: PurchaseloanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseloanComponent", function() { return PurchaseloanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_contactservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/contactservice.service */ "./src/app/service/contactservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PurchaseloanComponent = /** @class */ (function () {
    function PurchaseloanComponent(spv, router, spinner) {
        var _this = this;
        this.spv = spv;
        this.router = router;
        this.spinner = spinner;
        this.loanid = [];
        this.details = [];
        this.detail = [];
        this.loandetails = [];
        this.purdetails = [];
        this.packdetails = [];
        spv.getAccount().then(function (address) { return _this.address = address; });
    }
    PurchaseloanComponent.prototype.choosefi = function (bank_address) {
        var _this = this;
        this.spv.bank_reg(bank_address).then(function (val) {
            for (var j = val[3].toNumber(); j < val[4].toNumber(); j++) {
                _this.spv.loandetails(val[9], j).then(function (result) {
                    _this.spv.spv_loanid(result[0]).then(function (result1) {
                        if (result[0] > 0 && result1[0] == "0x0000000000000000000000000000000000000000" && result[5] < result[6]) {
                            _this.purdetails.push({ "loanid": result[0], "tokenaddress": result[8], "tokenvalue": result[1], "bankaddress": result[2], "totalamount": result[4] });
                        }
                    });
                });
            }
            _this.purdetails = [];
        });
    };
    PurchaseloanComponent.prototype.createPack = function (a) {
        var value = a.split(",");
        console.log(value);
        for (var i = 0; i < value.length; i++) {
            console.log(value.length);
            this.loanid.push(parseInt(value[i]));
        }
        this.spv.createPack(this.loanid).then(function (res) {
        });
    };
    PurchaseloanComponent.prototype.pur_loan = function (loanid, bankaddress) {
        var _this = this;
        this.spinner.show();
        this.spv.pur_loan(loanid, bankaddress).then(function (res) {
            console.log("Hash :" + res);
            if (res === 0) {
                _this.spinner.hide();
            }
            else
                _this.spv.hash(res).then(function (result) {
                    console.log("result : " + result);
                    _this.spinner.hide();
                    _this.router.navigate(['createpack']);
                });
        });
    };
    PurchaseloanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spv.getAccount().then(function (address) { return _this.address = address; });
        this.spv.getUserBalance().then(function (balance) { return _this.balance = balance; });
        this.spv.spv_reg1().then(function (result) {
            _this.spv.investortable().then(function (obj1) {
                _this.details.push({ "spvaddress": _this.address, "totalamount": result[0], "totalloan": result[1], "availablepack": obj1[1] });
            });
        });
        this.spv.borrower_view_fi().then(function (obj) {
            obj.forEach(function (item) {
                _this.spv.bank_reg(item).then(function (result) {
                    var a = result[2] / 100;
                    _this.spv.investortable1(item).then(function (result1) {
                        if (_this.address != result[9]) {
                            _this.detail.push({ "bank_address": result[9], "bank_name": result[10], "deposit_amount": result[0], "loan_interest": a, "duration": result[1], "loan": result1[2] });
                        }
                    });
                });
            });
        });
        this.spv.borrower_view_fi().then(function (obj) {
            obj.forEach(function (item) {
                _this.spv.bank_reg(item).then(function (val) {
                    for (var j = val[3].toNumber(); j < val[4].toNumber(); j++) {
                        var a = j;
                        _this.spv.loandetails(item, a).then(function (result) {
                            _this.spv.spv_loanid(result[0]).then(function (result1) {
                                if (_this.address == result1[0]) {
                                    _this.loandetails.push({ "loanid": result[0], "tokenaddress": result[8], "tokenvalue": result[1], "bankaddress": result[2], "totalamount": result[4] });
                                }
                            });
                        });
                    }
                });
            });
        });
        this.spv.borrower_view_fi().then(function (obj) {
            obj.forEach(function (item) {
                _this.spv.bank_reg(item).then(function (val) {
                    for (var j = val[3].toNumber(); j < val[4].toNumber(); j++) {
                        _this.spv.loandetails(item, j).then(function (result) {
                            if (_this.address == result[3]) {
                                _this.purdetails.push({ "loanid": result[0], "tokenaddress": result[8], "tokenvalue": result[1], "bankaddress": result[2], "totalamount": result[4] });
                            }
                        });
                    }
                });
            });
        });
        this.spv.spv_reg1().then(function (res) {
            for (var i = res[5].toNumber(); i <= res[6].toNumber(); i++) {
                _this.spv.loandetails(res[7], i).then(function (result) {
                    var a = result[1] / 1000000000000000000;
                    if (a > 0) {
                        _this.packdetails.push({ "packid": result[0], "tokenvalue": a });
                    }
                });
            }
        });
    };
    PurchaseloanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-purchaseloan',
            template: __webpack_require__(/*! ./purchaseloan.component.html */ "./src/app/purchaseloan/purchaseloan.component.html"),
            styles: [__webpack_require__(/*! ./purchaseloan.component.css */ "./src/app/purchaseloan/purchaseloan.component.css")]
        }),
        __metadata("design:paramtypes", [_service_contactservice_service__WEBPACK_IMPORTED_MODULE_1__["ContactserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], PurchaseloanComponent);
    return PurchaseloanComponent;
}());



/***/ }),

/***/ "./src/app/purchasepack/purchasepack.component.css":
/*!*********************************************************!*\
  !*** ./src/app/purchasepack/purchasepack.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/purchasepack/purchasepack.component.html":
/*!**********************************************************!*\
  !*** ./src/app/purchasepack/purchasepack.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div><h1 style=\"color:#338ecf;text-align:center;\">Purchasing Pack</h1></div> \r\n<br>\r\n<br><br>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8\" id=\"spvdetail_hide1\">\r\n            <div class=\"container\" style=\"border:3px solid #428bca;background:white;height:250px;overflow-y:auto;\">\r\n              <div><h3 style=\"color: #338ecf;text-align:center;\">SPV Details</h3></div> \r\n            <table class=\"table table-hover\">\r\n              <thead>\r\n                <tr>\r\n                  <th><h4 style=\"color: black;\">SPV Address</h4></th>\r\n                  <th><h4 style=\"color: black;\">Total Amount</h4></th>\r\n                  <th><h4 style=\"color: black;\">Available Loan</h4></th>\r\n                  <th><h4 style=\"color: black;\">Available pack</h4></th>\r\n                </tr>\r\n              </thead>\r\n              <tbody id=\"spv_list1\">\r\n                <tr *ngFor=\"let spv of spvdetails;\">\r\n                  <td >{{spv.spvaddress}} </td>\r\n                  <td>{{spv.totalamount}}</td>\r\n                  <td>{{spv.totalloan}}</td>\r\n                  <td>{{spv.availablepack}}</td>\r\n                  <td><button class=\"btn btn-primary\" (click)=\"choosespv(spv.spvaddress)\">choose</button></td>\r\n              </tr>\r\n              </tbody>\r\n          </table>\r\n          </div>\r\n        </div>\r\n    </div>  \r\n    <br>\r\n    <br>\r\n    <!-- <div class=\"row\">\r\n        <div class=\"form-group col-sm-4\" id=\"purchase_pack\">\r\n            <div class=\"container\" style=\"background:white;height:200px;width:350px;\">\r\n              <div><h3 style=\"color: #338ecf;text-align:center;\">Purchase Pack</h3></div> \r\n            <input type=\"text\" [(ngModel)]=\"spvaddress\" id=\"spv_add\" class=\"form-control\" placeholder=\"SPV Adress\"/>\r\n            <input type=\"text\" [(ngModel)]=\"packageid\" id=\"pack_id\" class=\"form-control\" placeholder=\"Pack Id\"/>\r\n            <input type=\"button\" class=\"btn btn-primary\" (click)=\"pur_pack()\" value=\"Purchase\"/>\r\n            <div id=\"status\"></div>\r\n            </div>\r\n          </div>\r\n                    </div> -->\r\n                    &nbsp;\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-2\" id=\"spv_packdetail\">\r\n                            <div class=\"container\" style=\"border:3px solid #428bca;background:white;height:250px;overflow-y:auto;\">\r\n                              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h3 style=\"color: #338ecf;text-align:center;\">SPV package details</h3></div> \r\n                            <table class=\"table table-hover\" id=\"invester_cls\">\r\n                                <thead>\r\n                                  <tr>\r\n                                    <th><h4 style=\"color: black;\">SPV Address</h4></th>\r\n                                    <th><h4 style=\"color: black;\">Package Id</h4></th>\r\n                                    <th><h4 style=\"color: black;\">Total Amount</h4></th>\r\n                                  </tr>\r\n                                </thead>\r\n                                <tbody id=\"spvpackdetail_body\">\r\n                                  <tr *ngFor=\"let spv of packdetails;\">\r\n                                    <td>{{spv.address}}</td>\r\n                                    <td>{{spv.packid}}</td>\r\n                                    <td>{{spv.tokenvalue}} </td> \r\n                                    <td><button class=\"btn btn-primary\" (click)=\"pur_pack(spv.address,spv.packid)\">Buy</button></td>\r\n                                </tr>\r\n                                </tbody>\r\n                              </table>\r\n                              </div>\r\n                          </div>  \r\n                          </div>\r\n                          <ngx-spinner\r\n                          bdColor=\"rgba(51,51,51,0.8)\"\r\n                          size=\"medium\"\r\n                          color=\"#fff\"\r\n                          loadingText=\"Loading...\"\r\n                          type=\"ball-scale-multiple\">\r\n                      </ngx-spinner>\r\n                          "

/***/ }),

/***/ "./src/app/purchasepack/purchasepack.component.ts":
/*!********************************************************!*\
  !*** ./src/app/purchasepack/purchasepack.component.ts ***!
  \********************************************************/
/*! exports provided: PurchasepackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasepackComponent", function() { return PurchasepackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_contactservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/contactservice.service */ "./src/app/service/contactservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
// import { Component, OnInit } from '@angular/core';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// @Component({
//   selector: 'app-purchasepack',
//   templateUrl: './purchasepack.component.html',
//   styleUrls: ['./purchasepack.component.css']
// })
// export class PurchasepackComponent implements OnInit {
//   constructor() { }
//   ngOnInit() {
//   }
// }




var PurchasepackComponent = /** @class */ (function () {
    function PurchasepackComponent(inv, router, spinner) {
        var _this = this;
        this.inv = inv;
        this.router = router;
        this.spinner = spinner;
        this.details = [];
        this.details1 = [];
        this.spvdetails = [];
        this.packdetails = [];
        inv.getUserBalance().then(function (balance) { return _this.balance = balance; });
        inv.getAccount().then(function (address) { return _this.address = address; });
    }
    PurchasepackComponent.prototype.pur_pack = function (packid, address) {
        var _this = this;
        this.spinner.show();
        this.inv.purchasepack(address, packid).then(function (res) {
            if (res === 0) {
                _this.spinner.hide();
            }
            else
                _this.inv.hash(res).then(function (result) {
                    console.log("result : " + result);
                    _this.spinner.hide();
                    _this.router.navigate(['Investorpackdetail']);
                });
        });
    };
    PurchasepackComponent.prototype.choosespv = function (spvaddress) {
        var _this = this;
        this.inv.spv_reg2(spvaddress).then(function (res) {
            for (var i = res[5].toNumber(); i <= res[6].toNumber(); i++) {
                _this.inv.loandetails(res[7], i).then(function (result) {
                    _this.inv.spv_loanid(result[0]).then(function (result1) {
                        if (result[0] > 0 && result1[4] != 1) {
                            var a = result[1] / 1000000000000000000;
                            _this.packdetails.push({ "address": res[7], "packid": result[0], "tokenvalue": a });
                        }
                    });
                });
            }
            _this.packdetails = [];
        });
    };
    PurchasepackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inv.getAccount().then(function (address) { return _this.address = address; });
        this.inv.getUserBalance().then(function (balance) { return _this.balance = balance; });
        console.log(this.address);
        this.inv.investordetails().then(function (obj) {
            if (obj[0] > 0)
                _this.details.push({ "investor_address": obj[8], "Totalamt": obj[0], "pack": obj[2] });
        });
        this.inv.spv_details().then(function (obj) {
            obj.forEach(function (item) {
                _this.inv.spv_reg2(item).then(function (result) {
                    _this.inv.investortable1(result[7]).then(function (obj1) {
                        _this.spvdetails.push({ "spvaddress": result[7], "totalamount": result[11], "totalloan": obj1[1], "availablepack": result[13] });
                    });
                });
            });
        });
        this.inv.spv_details().then(function (obj) {
            obj.forEach(function (item) {
                console.log(item);
                _this.inv.spv_reg2(item).then(function (res) {
                    console.log(res);
                    for (var i = res[5].toNumber(); i <= res[6].toNumber(); i++) {
                        console.log(i);
                        _this.inv.loandetails1(i).then(function (result) {
                            console.log(result[0]);
                            if (result[0] > 0) {
                                var a = result[1] / 1000000000000000000;
                                _this.details1.push({ "investor_package": result[0], "token_value": a });
                            }
                        });
                    }
                });
            });
        });
    };
    PurchasepackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-purchasepack',
            template: __webpack_require__(/*! ./purchasepack.component.html */ "./src/app/purchasepack/purchasepack.component.html"),
            styles: [__webpack_require__(/*! ./purchasepack.component.css */ "./src/app/purchasepack/purchasepack.component.css")]
        }),
        __metadata("design:paramtypes", [_service_contactservice_service__WEBPACK_IMPORTED_MODULE_1__["ContactserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], PurchasepackComponent);
    return PurchasepackComponent;
}());



/***/ }),

/***/ "./src/app/service/contactservice.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/contactservice.service.ts ***!
  \***************************************************/
/*! exports provided: ContactserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactserviceService", function() { return ContactserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var tokenAbi = __webpack_require__(/*! ../Contractabi.json */ "./src/app/Contractabi.json");
var ContactserviceService = /** @class */ (function () {
    function ContactserviceService(router) {
        this.router = router;
        this._account = null;
        this._tokenContractAddress = "0xcf576583222736b60d1de28d333c37f0ada3a7d9";
        if (typeof window.web3 !== 'undefined') {
            // Use Mist/MetaMask's provider
            this._web3 = new web3__WEBPACK_IMPORTED_MODULE_2__(window.web3.currentProvider);
        }
        else {
            console.warn("Please use a dapp browser like mist or MetaMask plugin for chrome");
        }
        this._web3.version.getNetwork(function (err, netId) {
            switch (netId) {
                case "1":
                    console.log('This is mainnet');
                    break;
                case "2":
                    console.log('This is deprecated Morden test network');
                    break;
                case "3":
                    console.log('This is ropsten test network');
                    break;
                case "4":
                    console.log('This is the Rinkeby test network');
                case "42":
                    console.log('This is the kovan test network');
                    break;
                default:
                    console.log('This is an unknown network.');
            }
        });
        this._tokenContract = this._web3.eth.contract(tokenAbi).at(this._tokenContractAddress);
    }
    //account address working//
    ContactserviceService.prototype.getAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this._account == null)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this._web3.eth.getAccounts(function (err, accs) {
                                    if (err != null) {
                                        alert('There was an error fetching your accounts.');
                                        return;
                                    }
                                    if (accs.length === 0) {
                                        alert('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
                                        return;
                                    }
                                    resolve(accs[0]);
                                });
                            })];
                    case 1:
                        _a._account = (_b.sent());
                        this._web3.eth.defaultAccount = this._account;
                        _b.label = 2;
                    case 2: return [2 /*return*/, Promise.resolve(this._account)];
                }
            });
        });
    };
    //account balance working//
    ContactserviceService.prototype.getUserBalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this._web3.eth.getBalance(account, function (err, balance) {
                                    balance = _this._web3.fromWei(balance, "ether") + "";
                                    resolve(balance);
                                });
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ContactserviceService.prototype.fi_check_registeration = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account, meta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        account = '';
                        meta = this;
                        return [4 /*yield*/, meta.getAccount().then(function (address) { return _this.account = address; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                meta._tokenContract.spv_details(_this.account, function (error, result) {
                                    if (error) {
                                        reject(error);
                                    }
                                    else {
                                        console.log(meta.account);
                                        console.log(result[9]);
                                        if (result[9] === meta.account) {
                                            console.log(result[9] === meta.account);
                                        }
                                    }
                                    resolve(result[9] === meta.account);
                                });
                            })];
                }
            });
        });
    };
    ContactserviceService.prototype.spv_check_registeration = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account, meta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        account = '';
                        meta = this;
                        return [4 /*yield*/, meta.getAccount().then(function (address) { return _this.account = address; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                meta._tokenContract.spv_details(_this.account, function (error, result) {
                                    if (error) {
                                        reject(error);
                                    }
                                    else {
                                        console.log(meta.account);
                                        console.log(result[7]);
                                        if (result[7] === meta.account) {
                                            console.log(result[7] === meta.account);
                                        }
                                    }
                                    resolve(result[7] === meta.account);
                                });
                            })];
                }
            });
        });
    };
    ContactserviceService.prototype.investor_check_registeration = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account, meta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        account = '';
                        meta = this;
                        return [4 /*yield*/, meta.getAccount().then(function (address) { return _this.account = address; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                meta._tokenContract.spv_details(_this.account, function (error, result) {
                                    if (error) {
                                        reject(error);
                                    }
                                    else {
                                        console.log(meta.account);
                                        console.log(result[8]);
                                        if (result[8] === meta.account) {
                                            console.log(result[8] === meta.account);
                                        }
                                    }
                                    resolve(result[8] === meta.account);
                                });
                            })];
                }
            });
        });
    };
    //fi loan details//
    ContactserviceService.prototype.bank_reg1 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.spv_details(account, function (error, result) {
                                    if (error) {
                                        reject(error);
                                    }
                                    result[10] = _web3.toAscii(result[10]);
                                    result[0] = _web3.fromWei(result[0], "ether");
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    //borrower loan details//
    ContactserviceService.prototype.bank_reg = function (add) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.spv_details(add, function (error, result) {
                                    if (error) {
                                        reject(error);
                                    }
                                    result[10] = _web3.toAscii(result[10]);
                                    result[0] = _web3.fromWei(result[0], "ether");
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    ContactserviceService.prototype.loandetails = function (add, id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.ln_get(add, id, function (error, result) {
                                    result[4] = meta._web3.fromWei(result[4], "ether");
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    ContactserviceService.prototype.borrower_view_fi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        return [4 /*yield*/, this.getAccount().then(function (address) { return _this._account = address; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this._tokenContract.show_registers(function (err, result1) {
                                    var gen_id = 0;
                                    resolve(result1);
                                });
                            })];
                }
            });
        });
    };
    //register bank//
    ContactserviceService.prototype.register_bank1 = function (a, b, c, d) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account, bb;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        bb = b * 100;
                        console.log("b value:" + b);
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.register.sendTransaction(a, bb, d, { from: account, value: _this._web3.toWei(c, "ether"), gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        //reject(err);
                                        console.log(err);
                                        resolve(0);
                                    }
                                    console.log(result);
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    //request loan//
    ContactserviceService.prototype.request_loan = function (d, e, f) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.req_loan(d, e, f, { from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        //reject(err);
                                        resolve(0);
                                    }
                                    resolve((result));
                                });
                            })];
                }
            });
        });
    };
    //monthly payment//
    ContactserviceService.prototype.MonthlyPayment = function (d, e, f) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.settlement(d, e, { from: account, value: _this._web3.toWei(f, "ether"), gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        //reject(err);
                                        resolve(0);
                                    }
                                    resolve((result));
                                });
                            })];
                }
            });
        });
    };
    //spv reg//
    ContactserviceService.prototype.spv_reg = function (a) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this._tokenContract.SPV_ether({ from: account, value: _this._web3.toWei(a, "ether"), gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        //reject(err);
                                        resolve(0);
                                    }
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    //purchase loan//
    ContactserviceService.prototype.pur_loan = function (a, b) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this._tokenContract.purchase_loan(a, b, { from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        //reject(err);
                                        resolve(0);
                                    }
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    //create pack//
    ContactserviceService.prototype.createPack = function (a) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this._tokenContract.createPacking(a, { from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        //reject(err);
                                        console.log([0]);
                                        resolve([0]);
                                    }
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    ContactserviceService.prototype.spv_reg1 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.spv_details(account, function (error, result) {
                                    if (error) {
                                        reject(error);
                                    }
                                    result[10] = _web3.toAscii(result[10]);
                                    result[11] = meta._web3.fromWei(result[11], "ether");
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    ContactserviceService.prototype.spv_view = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        return [4 /*yield*/, this.getAccount().then(function (address) { return _this._account = address; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this._tokenContract.spv_registers(function (err, result1) {
                                    var gen_id = 0;
                                    resolve(result1);
                                });
                            })];
                }
            });
        });
    };
    ContactserviceService.prototype.spv_loanid = function (add) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.loanadd(add, function (error, result) {
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    //investor ether//
    ContactserviceService.prototype.Investorether = function (a) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.Investor_ether({ from: account, value: _this._web3.toWei(a, "ether"), gas: 600000 }, function (error, result) {
                                    if (error) {
                                        //reject(error);
                                        resolve(0);
                                    }
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    //investor details//
    ContactserviceService.prototype.investordetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.spv_details.call(account, function (error, result) {
                                    if (error) {
                                        reject(error);
                                    }
                                    // result[2] = _web3.toAscii(result[2])
                                    result[12] = meta._web3.fromWei(result[12], "ether");
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    ContactserviceService.prototype.investortable = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.inv_details.call(account, function (error, result) {
                                    if (error) {
                                        reject(error);
                                    }
                                    // result[2] = _web3.toAscii(result[2])
                                    //result[0] = meta._web3.fromWei(result[0],"ether")
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    ContactserviceService.prototype.investortable1 = function (add) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.inv_details.call(add, function (error, result) {
                                    if (error) {
                                        reject(error);
                                    }
                                    // result[2] = _web3.toAscii(result[2])
                                    //result[0] = meta._web3.fromWei(result[0],"ether")
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    //purchase pack//
    ContactserviceService.prototype.purchasepack = function (a, b) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.purchase_pack(a, b, { from: account, gas: 600000 }, function (error, result) {
                                    if (error != null) {
                                        //reject(err);
                                        resolve(0);
                                    }
                                    resolve(result);
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    ContactserviceService.prototype.spv_details = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        return [4 /*yield*/, this.getAccount().then(function (address) { return _this._account = address; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this._tokenContract.spv_registers(function (err, result1) {
                                    resolve(result1);
                                });
                            })];
                }
            });
        });
    };
    //spv details//
    ContactserviceService.prototype.spv_reg2 = function (add) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.spv_details(add, function (error, result) {
                                    if (error) {
                                        reject(error);
                                    }
                                    result[10] = _web3.toAscii(result[10]);
                                    result[11] = meta._web3.fromWei(result[11], "ether");
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    ContactserviceService.prototype.loandetails1 = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.ln_get(account, id, function (error, result) {
                                    result[4] = meta._web3.fromWei(result[4], "ether");
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    ContactserviceService.prototype.hash = function (a) {
        return __awaiter(this, void 0, void 0, function () {
            var meta;
            return __generator(this, function (_a) {
                meta = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var accountInterval = setInterval(function () {
                            meta._web3.eth.getTransactionReceipt(a, function (err, result) {
                                if (err != null) {
                                    reject(err);
                                }
                                if (result !== null) {
                                    clearInterval(accountInterval);
                                    // console.log("obj 1 :"+result);
                                    if (result.status == 0x1) {
                                        // console.log("obj "+result.status)
                                        resolve("Success");
                                        meta.router.navigate(['']);
                                        // window.location.reload();
                                    }
                                    else {
                                        // console.log("obj "+result.status)
                                        resolve("Failed");
                                        meta.router.navigate(['']);
                                        // window.location.reload();
                                    }
                                }
                            });
                        }, 100);
                    })];
            });
        });
    };
    ContactserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ContactserviceService);
    return ContactserviceService;
}());



/***/ }),

/***/ "./src/app/spv/spv.component.css":
/*!***************************************!*\
  !*** ./src/app/spv/spv.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th,td {\r\n    text-align:center\r\n}\r\n.table-wrapper-2 {\r\n    display: block;\r\n    max-height: 300px;\r\n    overflow-y: auto;\r\n    overflow-y:scroll;\r\n}\r\nth{\r\n    font-style: normal;\r\n}"

/***/ }),

/***/ "./src/app/spv/spv.component.html":
/*!****************************************!*\
  !*** ./src/app/spv/spv.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div><h1 style=\"color:#338ecf;text-align:center;\">SPV Details</h1></div> \r\n  <br>\r\n  <br>\r\n  <div id=\"spv_registered\">\r\n      <div class=\"row\">\r\n   <div class=\"col-sm-4\" id=\"spvdetail_hide\">\r\n     <div class=\"container\" style=\"border:3px solid #428bca;background:white;overflow-y:auto;height:200px;\">\r\n        <h3 style=\"color: #338ecf;text-align:center;\" >SPV Details</h3>  \r\n          <table class=\"table table-hover\">\r\n            <thead>\r\n              <tr>\r\n                <th><h4 style=\"color: black;\">SPV Address</h4></th>\r\n                <th><h4 style=\"color: black;\">Total Amount</h4></th>\r\n                <th><h4 style=\"color: black;\">Available Loan</h4></th>\r\n                <th><h4 style=\"color: black;\">Available pack</h4></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let spv of details;\">\r\n                    <td >{{spv.spvaddress}} </td>\r\n                    <td>{{spv.totalamount}}</td>\r\n                    <td>{{spv.totalloan}}</td>\r\n                    <td>{{spv.availablepack}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n      </div>\r\n      </div>\r\n      </div>\r\n     <br><br><br><br><br>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-8\" id=\"spv_loan_detail\">\r\n          <div class=\"container\" style=\"border:3px solid #428bca;background:white;overflow-y:auto;height:450px;\">\r\n            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h3 style=\"color: #338ecf;text-align:center;\">SPV Loan Details</h3></div> \r\n        <table  class=\"table table-responsive-md\">\r\n            <thead>\r\n              <tr>\r\n                <th><h4 style=\"color: black;\">Loan Id</h4></th>\r\n                <th><h4 style=\"color: black;\">Token address</h4></th>\r\n                <th><h4 style=\"color: black;\">Token value</h4></th>\r\n                <th><h4 style=\"color: black;\">Bank Address</h4></th>\r\n                <th><h4 style=\"color: black;\">Total Amount</h4></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let bank of loandetails;\">\r\n                    <td>{{bank.loanid}}</td>\r\n                    <td>{{bank.tokenaddress}} </td>\r\n                    <td>{{bank.tokenvalue}}</td>\r\n                    <td>{{bank.bankaddress}}</td>\r\n                    <td>{{bank.totalamount}}</td>\r\n                </tr>\r\n            </tbody>\r\n          </table>\r\n          </div>\r\n        </div>  \r\n        </div>\r\n\r\n      <!--purchaseloan-->\r\n<!-- <div id=\"purchaseloan\" class=\"tab-pane fade\">\r\n<div class=\"col-sm-8\" id=\"fidetail_hide1\">\r\n<div class=\"container\" style=\"background:white;overflow-y:scroll;height:350px;\">\r\n  <h3 style=\"color: #338ecf;\">Financial Institute Details</h3> \r\n<table  class=\"table table-responsive-md\">\r\n<thead>\r\n<tr>\r\n<th><h4 style=\"color: black;\">Financial Institute Address</h4></th>\r\n<th><h4 style=\"color: black;\">Bank Name</h4></th>\r\n<th><h4 style=\"color: black;\">Balance</h4></th>\r\n<th><h4 style=\"color: black;\">Fixed Int.</h4></th>\r\n</tr>\r\n</thead>\r\n<tbody>\r\n    <tr *ngFor=\"let bank of detail;\">\r\n        <td >{{bank.bank_address}}</td>\r\n        <td >{{bank.bank_name}} </td>\r\n        <td>{{bank.deposit_amount}}</td>\r\n        <td>{{bank.loan_interest}}</td>\r\n        <td><button class=\"btn btn-primary\" (click)=\"choosefi(bank.bank_address)\">choose</button></td>\r\n    </tr>\r\n</tbody>\r\n</table>\r\n</div>\r\n</div>\r\n&nbsp;  &nbsp;  &nbsp;  &nbsp;\r\n<div class=\"col-sm-8\" id=\"spv_deta\">\r\n&nbsp;\r\n<div class=\"container\" style=\"background:white;overflow-y:scroll;height:400px;\">\r\n  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h3 style=\"color: #338ecf;\">FI Loan Details</h3></div>\r\n<table  class=\"table table-responsive-md\">\r\n    <thead>\r\n      <tr>\r\n        <th><h4 style=\"color: black;\">Loan Id</h4></th>\r\n        <th><h4 style=\"color: black;\">token address</h4></th>\r\n        <th><h4 style=\"color: black;\">Token Value</h4></th>\r\n        <th><h4 style=\"color: black;\">Bank Address</h4></th>\r\n        <th><h4 style=\"color: black;\">Total Amount</h4></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody >\r\n      <tr *ngFor=\"let spv of purdetails;\">\r\n        <td >{{spv.loanid}}</td>\r\n        <td >{{spv.tokenaddress}} </td>\r\n        <td>{{spv.tokenvalue}}</td>\r\n        <td>{{spv.bankaddress}}</td>\r\n        <td>{{spv.totalamount}}</td>\r\n        <td><button class=\"btn btn-primary\" (click)=\"pur_loan(spv.loanid,spv.bankaddress)\">Buy</button></td>\r\n\r\n      \r\n    </tr>\r\n\r\n    </tbody>\r\n  </table>\r\n  </div>\r\n</div>  \r\n\r\n</div>  \r\n<!--createpack--\r\n<div id=\"createpack\" class=\"tab-pane fade\">   \r\n    <div class=\"row\">   \r\n<div class=\"form-group col-sm-4\" id=\"create_pack\"> \r\n<div class=\"container\" style=\"background:white;width:370px;\">\r\n<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h3 style=\"color: #338ecf;\">Create Pack</h3></div>\r\n<input type=\"text\" [(ngModel)]=\"pack_id\" #a class=\"form-control\" placeholder=\"loan id\"/>\r\n<input type=\"button\" class=\"btn btn-primary\" (click)=\"createPack(a.value)\" value=\"Create\"/>\r\n\r\n<div id=\"status\"></div>\r\n</div>\r\n</div>\r\n  \r\n</div>  \r\n&nbsp;  &nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n<div class=\"row\">\r\n<div class=\"col-sm-8\" id=\"spv_loan_detail\">\r\n  <div class=\"container\" style=\"background:white;overflow-y:scroll;height:350px;\">\r\n    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h3 style=\"color: #338ecf;\">SPV Loan Details</h3></div> \r\n<table  class=\"table table-responsive-md\">\r\n    <thead>\r\n      <tr>\r\n        <th><h4 style=\"color: black;\">Loan Id</h4></th>\r\n        <th><h4 style=\"color: black;\">Token address</h4></th>\r\n        <th><h4 style=\"color: black;\">Token value</h4></th>\r\n        <th><h4 style=\"color: black;\">Bank Address</h4></th>\r\n        <th><h4 style=\"color: black;\">Total Amount</h4></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let bank of loandetails;\">\r\n            <td>{{bank.loanid}}</td>\r\n            <td>{{bank.tokenaddress}} </td>\r\n            <td>{{bank.tokenvalue}}</td>\r\n            <td>{{bank.bankaddress}}</td>\r\n            <td>{{bank.totalamount}}</td>\r\n        </tr>\r\n    </tbody>\r\n  </table>\r\n  </div>\r\n</div>  \r\n</div>\r\n</div>\r\n<!--spvpack\r\n<div id=\"spvpack\" class=\"tab-pane fade\">\r\n    <div class=\"col-sm-4\" id=\"spv_pack\">\r\n    <div class=\"container\" style=\"background:white;overflow-y:scroll;height:350px;\">\r\n <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h3 style=\"color: #338ecf;\">SPV package details</h3></div> \r\n  <table  class=\"table table-responsive-md\">\r\n      <thead>\r\n        <tr>\r\n          <th><h4 style=\"color: black;\">Package Id</h4></th>\r\n          <th><h4 style=\"color: black;\">token value</h4></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n          <tr *ngFor=\"let spv of packdetails;\">\r\n              <td>{{spv.packid}}</td>\r\n              <td>{{spv.tokenvalue}} </td>\r\n              \r\n          </tr>\r\n      </tbody>\r\n    </table>\r\n    </div>\r\n    </div>\r\n</div> -->\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/spv/spv.component.ts":
/*!**************************************!*\
  !*** ./src/app/spv/spv.component.ts ***!
  \**************************************/
/*! exports provided: SPVComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPVComponent", function() { return SPVComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_contactservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/contactservice.service */ "./src/app/service/contactservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SPVComponent = /** @class */ (function () {
    function SPVComponent(spv) {
        var _this = this;
        this.spv = spv;
        this.loanid = [];
        this.details = [];
        this.detail = [];
        this.loandetails = [];
        this.purdetails = [];
        this.packdetails = [];
        spv.getAccount().then(function (address) { return _this.address = address; });
    }
    SPVComponent.prototype.choosefi = function (bank_address) {
        var _this = this;
        this.spv.bank_reg(bank_address).then(function (val) {
            for (var j = val[3].toNumber(); j < val[4].toNumber(); j++) {
                _this.spv.loandetails(val[9], j).then(function (result) {
                    if (result[0] > 0) {
                        _this.purdetails.push({ "loanid": result[0], "tokenaddress": result[8], "tokenvalue": result[1], "bankaddress": result[2], "totalamount": result[4] });
                    }
                });
            }
        });
    };
    SPVComponent.prototype.createPack = function (a) {
        var value = a.split(",");
        console.log(value);
        for (var i = 0; i < value.length; i++) {
            console.log(value.length);
            this.loanid.push(parseInt(value[i]));
        }
        this.spv.createPack(this.loanid).then(function (res) {
        });
    };
    SPVComponent.prototype.pur_loan = function (loanid, bankaddress) {
        this.spv.pur_loan(loanid, bankaddress).then(function (res) {
        });
    };
    SPVComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spv.getAccount().then(function (address) { return _this.address = address; });
        this.spv.getUserBalance().then(function (balance) { return _this.balance = balance; });
        this.spv.spv_reg1().then(function (result) {
            _this.spv.investortable().then(function (obj1) {
                _this.details.push({ "spvaddress": _this.address, "totalamount": result[11], "totalloan": obj1[1], "availablepack": result[13] });
            });
        });
        this.spv.borrower_view_fi().then(function (obj) {
            obj.forEach(function (item) {
                _this.spv.bank_reg(item).then(function (result) {
                    _this.detail.push({ "bank_address": result[9], "bank_name": result[10], "deposit_amount": result[0], "loan_interest": result[2] });
                });
            });
        });
        this.spv.borrower_view_fi().then(function (obj) {
            obj.forEach(function (item) {
                _this.spv.bank_reg(item).then(function (val) {
                    for (var j = val[3].toNumber(); j < val[4].toNumber(); j++) {
                        var a = j;
                        _this.spv.loandetails(item, a).then(function (result) {
                            _this.spv.spv_loanid(result[0]).then(function (result1) {
                                if (_this.address == result1[0]) {
                                    _this.loandetails.push({ "loanid": result[0], "tokenaddress": result[8], "tokenvalue": result[1], "bankaddress": result[2], "totalamount": result[4] });
                                }
                            });
                        });
                    }
                });
            });
        });
        this.spv.borrower_view_fi().then(function (obj) {
            obj.forEach(function (item) {
                _this.spv.bank_reg(item).then(function (val) {
                    for (var j = val[3].toNumber(); j < val[4].toNumber(); j++) {
                        _this.spv.loandetails(item, j).then(function (result) {
                            if (_this.address == result[3]) {
                                _this.purdetails.push({ "loanid": result[0], "tokenaddress": result[8], "tokenvalue": result[1], "bankaddress": result[2], "totalamount": result[4] });
                            }
                        });
                    }
                });
            });
        });
        this.spv.spv_reg1().then(function (res) {
            for (var i = res[5].toNumber(); i <= res[6].toNumber(); i++) {
                _this.spv.loandetails(res[7], i).then(function (result) {
                    var a = result[1] / 1000000000000000000;
                    if (a > 0) {
                        _this.packdetails.push({ "packid": result[0], "tokenvalue": a });
                    }
                });
            }
        });
    };
    SPVComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spv',
            template: __webpack_require__(/*! ./spv.component.html */ "./src/app/spv/spv.component.html"),
            styles: [__webpack_require__(/*! ./spv.component.css */ "./src/app/spv/spv.component.css")]
        }),
        __metadata("design:paramtypes", [_service_contactservice_service__WEBPACK_IMPORTED_MODULE_1__["ContactserviceService"]])
    ], SPVComponent);
    return SPVComponent;
}());



/***/ }),

/***/ "./src/app/spvpackdetail/spvpackdetail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/spvpackdetail/spvpackdetail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/spvpackdetail/spvpackdetail.component.html":
/*!************************************************************!*\
  !*** ./src/app/spvpackdetail/spvpackdetail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div><h1 style=\"color:#338ecf;text-align:center;\">SPV PackDetails</h1></div> \r\n<br>\r\n<br><br>\r\n<div class=\"col-sm-4\" id=\"spv_pack\">\r\n    <div class=\"container\" style=\"border:3px solid #428bca;background:white;overflow-y:auto;height:350px;\">\r\n <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h3 style=\"color: #338ecf;text-align:center;\">SPV package details</h3></div> \r\n  <table  class=\"table table-responsive-md\">\r\n      <thead>\r\n        <tr>\r\n          <th><h4 style=\"color: black;\">Package Id</h4></th>\r\n          <th><h4 style=\"color: black;\">Total Amount</h4></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n          <tr *ngFor=\"let spv of packdetails;\">\r\n              <td>{{spv.packid}}</td>\r\n              <td>{{spv.tokenvalue}} </td>\r\n              \r\n          </tr>\r\n      </tbody>\r\n    </table>\r\n    </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/spvpackdetail/spvpackdetail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/spvpackdetail/spvpackdetail.component.ts ***!
  \**********************************************************/
/*! exports provided: SpvpackdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpvpackdetailComponent", function() { return SpvpackdetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_contactservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/contactservice.service */ "./src/app/service/contactservice.service.ts");
// import { Component, OnInit } from '@angular/core';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// @Component({
//   selector: 'app-spvpackdetail',
//   templateUrl: './spvpackdetail.component.html',
//   styleUrls: ['./spvpackdetail.component.css']
// })
// export class SpvpackdetailComponent implements OnInit {
//   constructor() { }
//   ngOnInit() {
//   }
// }


var SpvpackdetailComponent = /** @class */ (function () {
    function SpvpackdetailComponent(spv) {
        var _this = this;
        this.spv = spv;
        this.loanid = [];
        this.details = [];
        this.detail = [];
        this.loandetails = [];
        this.purdetails = [];
        this.packdetails = [];
        spv.getAccount().then(function (address) { return _this.address = address; });
    }
    SpvpackdetailComponent.prototype.choosefi = function (bank_address) {
        var _this = this;
        this.spv.bank_reg(bank_address).then(function (val) {
            for (var j = val[3].toNumber(); j < val[4].toNumber(); j++) {
                _this.spv.loandetails(val[9], j).then(function (result) {
                    if (result[0] > 0) {
                        _this.purdetails.push({ "loanid": result[0], "tokenaddress": result[7], "tokenvalue": result[1], "bankaddress": result[2], "totalamount": result[4] });
                    }
                });
            }
        });
    };
    SpvpackdetailComponent.prototype.createPack = function (a) {
        var value = a.split(",");
        console.log(value);
        for (var i = 0; i < value.length; i++) {
            console.log(value.length);
            this.loanid.push(parseInt(value[i]));
        }
        this.spv.createPack(this.loanid).then(function (res) {
        });
    };
    SpvpackdetailComponent.prototype.pur_loan = function (loanid, bankaddress) {
        this.spv.pur_loan(loanid, bankaddress).then(function (res) {
        });
    };
    SpvpackdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spv.getAccount().then(function (address) { return _this.address = address; });
        this.spv.getUserBalance().then(function (balance) { return _this.balance = balance; });
        this.spv.spv_reg1().then(function (result) {
            _this.details.push({ "spvaddress": _this.address, "totalamount": result[11], "totalloan": result[1], "availablepack": result[13] });
        });
        this.spv.borrower_view_fi().then(function (obj) {
            obj.forEach(function (item) {
                _this.spv.bank_reg(item).then(function (result) {
                    _this.detail.push({ "bank_address": result[9], "bank_name": result[10], "deposit_amount": result[0], "loan_interest": result[2] });
                });
            });
        });
        this.spv.borrower_view_fi().then(function (obj) {
            obj.forEach(function (item) {
                _this.spv.bank_reg(item).then(function (val) {
                    for (var j = val[3].toNumber(); j < val[4].toNumber(); j++) {
                        var a = j;
                        _this.spv.loandetails(item, a).then(function (result) {
                            _this.spv.spv_loanid(result[0]).then(function (result1) {
                                if (_this.address == result1[0]) {
                                    _this.loandetails.push({ "loanid": result[0], "tokenaddress": result[7], "tokenvalue": result[1], "bankaddress": result[2], "totalamount": result[4] });
                                }
                            });
                        });
                    }
                });
            });
        });
        this.spv.borrower_view_fi().then(function (obj) {
            obj.forEach(function (item) {
                _this.spv.bank_reg(item).then(function (val) {
                    for (var j = val[3].toNumber(); j < val[4].toNumber(); j++) {
                        _this.spv.loandetails(item, j).then(function (result) {
                            if (_this.address == result[3]) {
                                _this.purdetails.push({ "loanid": result[0], "tokenaddress": result[7], "tokenvalue": result[1], "bankaddress": result[2], "totalamount": result[4] });
                            }
                        });
                    }
                });
            });
        });
        this.spv.spv_reg1().then(function (res) {
            for (var i = res[5].toNumber(); i <= res[6].toNumber(); i++) {
                _this.spv.loandetails(res[7], i).then(function (result) {
                    var a = result[1] / 1000000000000000000;
                    if (a > 0) {
                        _this.packdetails.push({ "packid": result[0], "tokenvalue": a });
                    }
                });
            }
        });
    };
    SpvpackdetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spvpackdetail',
            template: __webpack_require__(/*! ./spvpackdetail.component.html */ "./src/app/spvpackdetail/spvpackdetail.component.html"),
            styles: [__webpack_require__(/*! ./spvpackdetail.component.css */ "./src/app/spvpackdetail/spvpackdetail.component.css")]
        }),
        __metadata("design:paramtypes", [_service_contactservice_service__WEBPACK_IMPORTED_MODULE_1__["ContactserviceService"]])
    ], SpvpackdetailComponent);
    return SpvpackdetailComponent;
}());



/***/ }),

/***/ "./src/app/spvreg/spvreg.component.css":
/*!*********************************************!*\
  !*** ./src/app/spvreg/spvreg.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .container\r\n{\r\n    margin: 20% 50%;\r\n    \r\n} */\r\nbody {font-family: Arial, Helvetica, sans-serif;}\r\n* {box-sizing: border-box}\r\n/* Full-width input fields */\r\n/* input[type=text], input[type=password],input[type=number] {\r\n    width: 95%;\r\n    padding: 15px;\r\n    margin: 5px 0 22px 0;\r\n    display: inline-block;\r\n    border: none;\r\n    background: #f1f1f1;\r\n} */\r\ninput[type=text]:focus, input[type=password]:focus,input[type=number]:focus {\r\n    background-color: #ddd;\r\n    outline: none;\r\n}\r\nhr {\r\n    border: 1px solid #f1f1f1;\r\n    margin-bottom: 25px;\r\n}\r\n/* Set a style for all buttons */\r\nbutton {\r\n   \r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    opacity: 0.9;\r\n}\r\nbutton:hover {\r\n    opacity:1;\r\n}\r\n/* Extra styles for the cancel button */\r\n.btn-danger {\r\n    padding: 14px 20px;\r\n    background-color: #f44336;\r\n}\r\n/* Float cancel and signup buttons and add an equal width */\r\n.btn-primary, .btn-danger {\r\n  float: left;\r\n  width: 50%;\r\n}\r\n/* Add padding to container elements */\r\n.container {\r\n    padding: 16px;\r\n}\r\n/* Clear floats */\r\n.clearfix::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n}\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    .btn-primary, .btn-danger {\r\n       width: 100%;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/spvreg/spvreg.component.html":
/*!**********************************************!*\
  !*** ./src/app/spvreg/spvreg.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n    \r\n     \r\n          <div class=\"container\" style=\"border:3px solid #428bca;;background:white\">\r\n              <h1>Register The SPV Here...</h1>\r\n              <p>Please fill in this form to create an account.</p>\r\n              <hr style=\"border:1px solid #428bca;\">\r\n              <form [formGroup]=\"angForm\" #fid novalidate>\r\n          \r\n                <div class=\"form-group\">\r\n                    <label>Deposit Amount</label>\r\n                    <input class=\"form-control\" formControlName=\"amt\" type=\"text\" placeholder=\"Enter the amount in Ether\" #a>\r\n                </div>\r\n                <div *ngIf=\"angForm.controls['amt'].invalid && (angForm.controls['amt'].dirty || angForm.controls['amt'].touched)\" class=\"alert alert-danger\" >\r\n                    <div *ngIf=\"angForm.controls['amt'].errors.required\">\r\n                      Deposit is required.\r\n                    </div>\r\n                </div>\r\n                <button type=\"submit\"\r\n                    [disabled]=\"angForm.pristine || angForm.invalid\" class=\"btn btn-primary\" (click)=\"spv_reg(a.value)\">Register\r\n                </button>\r\n                <button type=\"submit\" class=\"btn btn-danger\" (click)=\"fid.reset()\">Cancel</button>\r\n          </form>\r\n           </div>\r\n</div>\r\n\r\n  \r\n\r\n\r\n\r\n<ngx-spinner\r\n      bdColor=\"rgba(51,51,51,0.8)\"\r\n      size=\"medium\"\r\n      color=\"#fff\"\r\n      loadingText=\"Loading...\"\r\n      type=\"ball-scale-multiple\">\r\n</ngx-spinner>\r\n\r\n"

/***/ }),

/***/ "./src/app/spvreg/spvreg.component.ts":
/*!********************************************!*\
  !*** ./src/app/spvreg/spvreg.component.ts ***!
  \********************************************/
/*! exports provided: SpvregComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpvregComponent", function() { return SpvregComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_contactservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/contactservice.service */ "./src/app/service/contactservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SpvregComponent = /** @class */ (function () {
    function SpvregComponent(spv, router, spinner, fb) {
        var _this = this;
        this.spv = spv;
        this.router = router;
        this.spinner = spinner;
        this.fb = fb;
        spv.getAccount().then(function (address) { return _this.address = address; });
        this.createForm();
    }
    SpvregComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            amt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    SpvregComponent.prototype.cancel = function () {
        this.router.navigate(['home']);
    };
    SpvregComponent.prototype.spv_reg = function (a) {
        var _this = this;
        //alert("hai");
        this.spinner.show();
        this.spv.spv_reg(a).then(function (res) {
            // alert("second")
            console.log("Hash :" + res);
            if (res === 0) {
                _this.spinner.hide();
            }
            else
                _this.spv.hash(res).then(function (result) {
                    console.log("result : " + result);
                    _this.spinner.hide();
                    _this.router.navigate(['SPV']);
                });
        });
    };
    SpvregComponent.prototype.ngOnInit = function () {
    };
    SpvregComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spvreg',
            template: __webpack_require__(/*! ./spvreg.component.html */ "./src/app/spvreg/spvreg.component.html"),
            styles: [__webpack_require__(/*! ./spvreg.component.css */ "./src/app/spvreg/spvreg.component.css")]
        }),
        __metadata("design:paramtypes", [_service_contactservice_service__WEBPACK_IMPORTED_MODULE_1__["ContactserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], SpvregComponent);
    return SpvregComponent;
}());



/***/ }),

/***/ "./src/app/totalfi/totalfi.component.css":
/*!***********************************************!*\
  !*** ./src/app/totalfi/totalfi.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/totalfi/totalfi.component.html":
/*!************************************************!*\
  !*** ./src/app/totalfi/totalfi.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div><h1 style=\"color:#338ecf;text-align:center;\">Loan Request</h1></div> \r\n<br><br>\r\n      <div class=\"container\" style=\"border:3px solid #428bca;background:white;overflow-y:auto;height:350px;\">\r\n          <div class=\"col-sm-12\" id=\"fidetail_hide\">\r\n          <h3 style=\"color: #338ecf;text-align:center;\">Financial Institution Details</h3>\r\n              <table class=\"table table-responsive-md\" >\r\n              <!-- <thead class=\"mdb-color lighten-4\"> -->\r\n                <tr>\r\n                    <th><h4 style=\"color: black;\">Financial Institute Address</h4></th>\r\n                    <th><h4 style=\"color: black;\">Bank Name</h4></th>\r\n                    <th><h4 style=\"color: black;\">Balance</h4></th>\r\n                    <th><h4 style=\"color: black;\">Fixed Int</h4></th>\r\n                    <th><h4 style=\"color: black;\">Duration</h4></th>\r\n                    <th><h4 style=\"color:black\">Select FI</h4></th>\r\n                    \r\n                  </tr>\r\n            <!-- </thead> -->\r\n            <tbody>\r\n                <tr *ngFor=\"let bank of alldetails;\">\r\n                    <td >{{bank.bank_address}}</td>\r\n                    <td >{{bank.bank_name}} </td>\r\n                    <td>{{bank.deposit_amount}}</td>\r\n                    <td>{{bank.loan_interest}}</td>\r\n                    <td>{{bank.duration}}</td>\r\n                    <td> <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"choosefi(bank.bank_address)\">GetLoan</button></td>\r\n                </tr>     \r\n            </tbody>\r\n          </table>\r\n    </div>\r\n     </div>\r\n               \r\n                <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n                  <div class=\"modal-dialog modal-lg\">\r\n                    <div class=\"modal-content\">\r\n                      <div class=\"modal-header\">\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                        <h4 class=\"modal-title\">Loan Request</h4>\r\n                      </div>\r\n                      <div class=\"modal-body\">\r\n                        <form [formGroup]=\"angForm\" novalidate>\r\n  \r\n                          <div class=\"form-group\">\r\n                              <label>Token Address</label>\r\n                              <input class=\"form-control\" formControlName=\"add\" type=\"text\" placeholder=\"Enter the token address\" #a>\r\n                          </div>\r\n                          <div *ngIf=\"angForm.controls['add'].invalid && (angForm.controls['add'].dirty || angForm.controls['add'].touched)\" class=\"alert alert-danger\" >\r\n                              <div *ngIf=\"angForm.controls['add'].errors.required\">\r\n                                Token Address is required.\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label>Financial Institution Address</label>\r\n                          <input type=\"text\"  class=\"form-control\" #b value={{_address}} placeholder=\"Bank Address\" readonly/>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label>Number of Token</label>\r\n                            <input class=\"form-control\" formControlName=\"num\" type=\"text\" placeholder=\"Enter the number of Tokens\" #c>\r\n                          </div>\r\n  \r\n                          <div *ngIf=\"angForm.controls['num'].invalid && (angForm.controls['num'].dirty || angForm.controls['num'].touched)\" class=\"alert alert-danger\" >\r\n                            <div *ngIf=\"angForm.controls['num'].errors.required\">\r\n                              Number of Token  is required.\r\n                            </div>\r\n                          </div>\r\n                          <button type=\"submit\"\r\n                              [disabled]=\"angForm.pristine || angForm.invalid\" class=\"btn btn-primary\" (click)=\"req_loan(a.value,b.value,c.value)\">Register\r\n                          </button>\r\n                    </form>\r\n                      </div>\r\n                      <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              \r\n              \r\n\r\n              <ngx-spinner\r\n              bdColor=\"rgba(51,51,51,0.8)\"\r\n              size=\"medium\"\r\n              color=\"#fff\"\r\n              loadingText=\"Loading...\"\r\n              type=\"ball-scale-multiple\">\r\n        </ngx-spinner>"

/***/ }),

/***/ "./src/app/totalfi/totalfi.component.ts":
/*!**********************************************!*\
  !*** ./src/app/totalfi/totalfi.component.ts ***!
  \**********************************************/
/*! exports provided: TotalfiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalfiComponent", function() { return TotalfiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_contactservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/contactservice.service */ "./src/app/service/contactservice.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// declare let window: any;
// import * as Web3 from 'web3';



var TotalfiComponent = /** @class */ (function () {
    function TotalfiComponent(get, router, spinner, fb) {
        var _this = this;
        this.get = get;
        this.router = router;
        this.spinner = spinner;
        this.fb = fb;
        this.alldetails = [];
        this.loandetails = [];
        get.getAccount().then(function (address) { return _this.address = address; });
        get.borrower_view_fi();
        this.createForm();
    }
    TotalfiComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            add: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            //fi:['', Validators.required ],
            num: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    TotalfiComponent.prototype.choosefi = function (bank_address) {
        this._address = bank_address;
    };
    TotalfiComponent.prototype.req_loan = function (a, b, c) {
        var _this = this;
        this.spinner.show();
        console.log(a, b, c);
        this.get.request_loan(a, b, c).then(function (res) {
            console.log(res);
            console.log("Hash :" + res);
            if (res === 0) {
                _this.spinner.hide();
            }
            else
                _this.get.hash(res).then(function (result) {
                    console.log("result : " + result);
                    _this.spinner.hide();
                    _this.router.navigate(['Monthlypayment']);
                });
        });
    };
    TotalfiComponent.prototype.MonthlyPayment = function (loanid, bankaddress, balanceins) {
        this.get.MonthlyPayment(loanid, bankaddress, balanceins).then(function (res) {
            console.log(res);
            alert;
        });
        alert(loanid);
        console.log(loanid, bankaddress, balanceins);
        alert;
    };
    TotalfiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.get.getAccount().then(function (address) { return _this.address = address; });
        this.get.getUserBalance().then(function (balance) { return _this.balance = balance; });
        //full fi details//
        this.get.borrower_view_fi().then(function (obj) {
            obj.forEach(function (item) {
                //  console.log(item);
                _this.get.bank_reg(item).then(function (result) {
                    //  console.log("work");   
                    var a = result[2] / 100;
                    _this.alldetails.push({ "bank_address": result[9], "bank_name": result[10], "deposit_amount": result[0], "loan_interest": a, "duration": result[1] });
                });
            });
        });
    };
    TotalfiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-totalfi',
            template: __webpack_require__(/*! ./totalfi.component.html */ "./src/app/totalfi/totalfi.component.html"),
            styles: [__webpack_require__(/*! ./totalfi.component.css */ "./src/app/totalfi/totalfi.component.css")]
        }),
        __metadata("design:paramtypes", [_service_contactservice_service__WEBPACK_IMPORTED_MODULE_2__["ContactserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], TotalfiComponent);
    return TotalfiComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ramya.0925\Desktop\LNA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map