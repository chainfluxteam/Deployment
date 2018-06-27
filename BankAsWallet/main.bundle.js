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

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loan_req_loan_req_component__ = __webpack_require__("../../../../../src/app/loan-req/loan-req.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fd_amt_req_fd_amt_req_component__ = __webpack_require__("../../../../../src/app/fd-amt-req/fd-amt-req.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fd_amt_settle_fd_amt_settle_component__ = __webpack_require__("../../../../../src/app/fd-amt-settle/fd-amt-settle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__banking_banking_component__ = __webpack_require__("../../../../../src/app/banking/banking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fix_dep_fix_dep_component__ = __webpack_require__("../../../../../src/app/fix-dep/fix-dep.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loan_due_loan_due_component__ = __webpack_require__("../../../../../src/app/loan-due/loan-due.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__loan_lending_loan_lending_component__ = __webpack_require__("../../../../../src/app/loan-lending/loan-lending.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guard_guard__ = __webpack_require__("../../../../../src/app/guard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reguser_guard__ = __webpack_require__("../../../../../src/app/reguser.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// import { MetamaskComponent } from './metamask/metamask.component'

// import {BankGuard} from './guard.guard';

var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guard_guard__["a" /* BankguardGuard */], __WEBPACK_IMPORTED_MODULE_12__reguser_guard__["a" /* ReguserGuard */]]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_1__register_register_component__["a" /* RegisterComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_12__reguser_guard__["a" /* ReguserGuard */]]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guard_guard__["a" /* BankguardGuard */]]
    },
    {
        path: 'banking',
        component: __WEBPACK_IMPORTED_MODULE_6__banking_banking_component__["a" /* BankingComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guard_guard__["a" /* BankguardGuard */]]
    },
    {
        path: 'loan-request',
        component: __WEBPACK_IMPORTED_MODULE_0__loan_req_loan_req_component__["a" /* LoanReqComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guard_guard__["a" /* BankguardGuard */]]
    },
    {
        path: 'loan-due-pay',
        component: __WEBPACK_IMPORTED_MODULE_8__loan_due_loan_due_component__["a" /* LoanDueComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guard_guard__["a" /* BankguardGuard */]] //,LoanFdGuard
    },
    {
        path: 'loan-lending-detail',
        component: __WEBPACK_IMPORTED_MODULE_9__loan_lending_loan_lending_component__["a" /* LoanLendingComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guard_guard__["a" /* BankguardGuard */]]
    },
    {
        path: 'fixed-deposit',
        component: __WEBPACK_IMPORTED_MODULE_7__fix_dep_fix_dep_component__["a" /* FixDepComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guard_guard__["a" /* BankguardGuard */]]
    },
    {
        path: 'fd-amount-request',
        component: __WEBPACK_IMPORTED_MODULE_4__fd_amt_req_fd_amt_req_component__["a" /* FdAmtReqComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guard_guard__["a" /* BankguardGuard */]]
    },
    {
        path: 'fd-amount-settlement',
        component: __WEBPACK_IMPORTED_MODULE_5__fd_amt_settle_fd_amt_settle_component__["a" /* FdAmtSettleComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guard_guard__["a" /* BankguardGuard */]]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mdb-navbar SideClass=\"navbar fixed-top navbar-expand-lg navbar-dark blue scrolling-navbar ie-nav\" [containerInside]=\"false\">\r\n  <logo>\r\n      <a class=\"logo navbar-brand\" href=\"#\" ><strong>Bank As Wallet</strong></a>\r\n  </logo>\r\n  <links>\r\n      <ul class=\"navbar-nav mr-auto\">\r\n          <!--<li class=\"nav-item active waves-light\" mdbWavesEffect>\r\n              <a class=\"nav-link\" routerLink=\"\">Home <span class=\"sr-only\">(current)</span></a>\r\n          </li>-->\r\n          <!-- <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n            <a class=\"nav-link\" routerLink=\"register\">Register</a>\r\n          </li> -->\r\n\r\n          <!-- <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n                <a class=\"nav-link\"routerLink=\"profile\">Account Profile</a>\r\n            </li> -->\r\n          \r\n          <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n                <a class=\"nav-link\"routerLink=\"banking\">Bank Process</a>\r\n            </li>\r\n            <!-- <li class=\"nav-item dropdown\" [routerLinkActive]=\"['active']\" dropdown></li> -->\r\n            <li class=\"nav-item dropdown\" dropdown>\r\n                    <a dropdownToggle mdbWavesEffect class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\r\n                     Loan Process<span class=\"caret\" ></span></a>\r\n                    <div *dropdownMenu class=\"dropdown-menu dropdown dropdown-primary\" role=\"menu\">\r\n                        <a class=\"dropdown-item waves-light\" routerLink=\"loan-request\" mdbWavesEffect href=\"#\">Loan Request</a>\r\n                        <a class=\"dropdown-item waves-light\" routerLink=\"loan-due-pay\" mdbWavesEffect href=\"#\">Loan Pay</a>\r\n                        <a class=\"dropdown-item waves-light\" routerLink=\"loan-lending-detail\"  mdbWavesEffect href=\"#\">Lending Details</a></div>\r\n                </li>\r\n                    <li class=\"nav-item dropdown\" dropdown>\r\n                            <a dropdownToggle mdbWavesEffect class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\r\n                             Fixed Deposit<span class=\"caret\"></span></a>\r\n                            <div *dropdownMenu class=\"dropdown-menu dropdown dropdown-primary\" role=\"menu\">\r\n                                    <a class=\"dropdown-item waves-light\" routerLink=\"fixed-deposit\" mdbWavesEffect href=\"#\">Fixed Deposit</a>\r\n                                <a class=\"dropdown-item waves-light\" routerLink=\"fd-amount-request\" mdbWavesEffect href=\"#\">FD Amount Request</a>\r\n                                <a class=\"dropdown-item waves-light\"routerLink=\"fd-amount-settlement\" mdbWavesEffect href=\"#\">FD Amount Owner Settlement</a>\r\n                                </div>\r\n                        </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav nav-flex-icons\">\r\n          <!-- <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n              <a class=\"nav-link\"><i class=\"fa fa-facebook\"></i></a>\r\n          </li>\r\n          <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n              <a class=\"nav-link\"><i class=\"fa fa-twitter\"></i></a>\r\n          </li>\r\n          <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n              <a class=\"nav-link\"><i class=\"fa fa-instagram\"></i></a>\r\n          </li> -->\r\n          \r\n          \r\n      </ul>\r\n  </links>\r\n</mdb-navbar>\r\n<!-- Main -->\r\n<!--<main>\r\n  <div class=\"container\" style=\"height:1300px;\">\r\n      <div class=\"row mt-5 pt-5\">\r\n          <div class=\"col text-center\">\r\n              <h2>This Navbar is fixed</h2>\r\n              <h5>It will always stay visible on the top, even when you scroll down</h5>\r\n              <br>\r\n              <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</main>\r\n<!-/.Main -->\r\n\r\n<app-home></app-home>\r\n<router-outlet></router-outlet>\r\n\r\n<ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  loadingText=\"Loading...\"\r\n  type=\"ball-scale-multiple\">\r\n</ngx-spinner>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contract_service__ = __webpack_require__("../../../../../src/app/contract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(take, router) {
        var _this = this;
        this.take = take;
        this.router = router;
        this.title = 'app';
        take.getUserBalance().then(function (balance) { return _this.balance = balance; });
        take.getAccount().then(function (address) { return _this.address = address; });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__contract_service__["a" /* ContractService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_bootstrap_md__ = __webpack_require__("../../../../angular-bootstrap-md/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contract_service__ = __webpack_require__("../../../../../src/app/contract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guard_guard__ = __webpack_require__("../../../../../src/app/guard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reguser_guard__ = __webpack_require__("../../../../../src/app/reguser.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__loan_fd_guard__ = __webpack_require__("../../../../../src/app/loan-fd.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__banking_banking_component__ = __webpack_require__("../../../../../src/app/banking/banking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__loan_req_loan_req_component__ = __webpack_require__("../../../../../src/app/loan-req/loan-req.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__loan_due_loan_due_component__ = __webpack_require__("../../../../../src/app/loan-due/loan-due.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__loan_lending_loan_lending_component__ = __webpack_require__("../../../../../src/app/loan-lending/loan-lending.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__fix_dep_fix_dep_component__ = __webpack_require__("../../../../../src/app/fix-dep/fix-dep.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__fd_amt_req_fd_amt_req_component__ = __webpack_require__("../../../../../src/app/fd-amt-req/fd-amt-req.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__fd_amt_settle_fd_amt_settle_component__ = __webpack_require__("../../../../../src/app/fd-amt-settle/fd-amt-settle.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import {BankGuard} from './guard.guard';










// const appRoutes: Routes = [
//   { path: 'register', component: ProductComponent },
//   { path: 'profile', component: ProfileComponent },
//   { path: 'bankprocess', component: WithdrawComponent },
//   { path: 'loanrequest', component: UpdateproductComponent },
//   { path: 'loanpay', component: LoanpayComponent },
//   { path: 'lendingdetail', component: LendingdetailComponent },
//   { path: 'fixeddeposit', component: FixeddepositComponent },
//   { path: 'fdamountrequest', component: ViewcusOrderComponent },
//   { path: 'fdownersettlement', component: StockproductComponent },
// ];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__banking_banking_component__["a" /* BankingComponent */],
                __WEBPACK_IMPORTED_MODULE_14__loan_req_loan_req_component__["a" /* LoanReqComponent */],
                __WEBPACK_IMPORTED_MODULE_15__loan_due_loan_due_component__["a" /* LoanDueComponent */],
                __WEBPACK_IMPORTED_MODULE_16__loan_lending_loan_lending_component__["a" /* LoanLendingComponent */],
                __WEBPACK_IMPORTED_MODULE_17__fix_dep_fix_dep_component__["a" /* FixDepComponent */],
                __WEBPACK_IMPORTED_MODULE_18__fd_amt_req_fd_amt_req_component__["a" /* FdAmtReqComponent */],
                __WEBPACK_IMPORTED_MODULE_19__fd_amt_settle_fd_amt_settle_component__["a" /* FdAmtSettleComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_spinner__["NgxSpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_2_angular_bootstrap_md__["a" /* MDBBootstrapModule */].forRoot(),
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["NO_ERRORS_SCHEMA"]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__contract_service__["a" /* ContractService */], __WEBPACK_IMPORTED_MODULE_9__guard_guard__["a" /* BankguardGuard */], __WEBPACK_IMPORTED_MODULE_10__reguser_guard__["a" /* ReguserGuard */], __WEBPACK_IMPORTED_MODULE_11__loan_fd_guard__["a" /* LoanFdGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/banking/banking.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\r\n  <div class=\"container-fluid\" style=\"margin-top: 70px; \">\r\n\r\n          <div>\r\n\r\n              <form class=\"form-horizontal\"  [formGroup]=\"angForm\" novalidate>\r\n                <div>\r\n                 <h2>Deposit Your Account</h2>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label col-sm-2\" for=\"amount\">Amount:</label>\r\n                  <div class=\"col-sm-4\">\r\n                    <input type=\"number\" class=\"form-control\" id=\"amount\" formControlName=\"amount\" placeholder=\"Enter Amount\" name=\"amount\" [(ngModel)]=\"depositamt\">\r\n                  </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"angForm.controls['amount'].valid && angForm.controls['amount'].value > 0\">\r\n                  <div class=\"form-group\">\r\n                    <div class=\"col-sm-offset-2 col-sm-10\">\r\n                      <button type=\"submit\" class=\"btn btn-default\" (click)=\"dep()\">Deposit</button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </form>\r\n              <br><br>\r\n\r\n\r\n              <form class=\"form-horizontal\"  [formGroup]=\"angForm\" novalidate>\r\n                  <div>\r\n                   <h2> Withdraw in In Your Account</h2>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label col-sm-2\" for=\"amount\">Amount:</label>\r\n                    <div class=\"col-sm-4\">\r\n                      <input type=\"number\" class=\"form-control\" id=\"amount\" name=\"withdraw\" formControlName=\"withdraw\" [(ngModel)]=\"withdraw\" placeholder=\"Enter Amount\">\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div *ngIf=\"angForm.controls['withdraw'].valid && angForm.controls['withdraw'].value > 0\">\r\n                    <div class=\"form-group\">\r\n                      <div class=\"col-sm-offset-2 col-sm-10\">\r\n                        <button type=\"submit\" class=\"btn btn-default\" (click)=\"wit()\">WithDraw</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </form>\r\n\r\n\r\n                <br><br>\r\n                <form class=\"form-horizontal\"  [formGroup]=\"angForm\" novalidate>\r\n                    <div>\r\n                     <h2> Ether In Your Token Address</h2>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label col-sm-2\" for=\"amount\">Tokken Address</label>\r\n                      <div class=\"col-sm-4\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"amount\" formControlName=\"tokenaddress\" placeholder=\"Enter Address\" name=\"tokenaddress\" [(ngModel)]=\"tokenaddress\">\r\n                      </div>\r\n                    </div>\r\n  \r\n                    <div *ngIf=\"angForm.controls['tokenaddress'].valid\">\r\n                      <div class=\"form-group\">\r\n                        <div class=\"col-sm-offset-2 col-sm-10\">\r\n                          <button type=\"submit\" class=\"btn btn-default\" (click)=\"token()\">Submit</button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </form>\r\n\r\n\r\n                  <br><br>\r\n                  <form class=\"form-horizontal\"  [formGroup]=\"angForm\" novalidate>\r\n                    <div>\r\n                     <h2> Transfer Amount</h2>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label col-sm-2\" for=\"amount\">Bank Address</label>\r\n                      <div class=\"col-sm-4\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"amount\" formControlName=\"bankaddress1\" placeholder=\"Enter Address\" name=\"bankaddress1\" [(ngModel)]=\"bank_address\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label col-sm-2\" for=\"amount\">Amount</label>\r\n                      <div class=\"col-sm-4\">\r\n                        <input type=\"number\" class=\"form-control\" id=\"b_a\" formControlName=\"amount1\" placeholder=\"Enter Amount\" name=\"amount1\" [(ngModel)]=\"amount\">\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"angForm.controls['bankaddress1'].valid\">\r\n                      <div *ngIf=\"angForm.controls['amount1'].valid && angForm.controls['amount1'].value > 0\">\r\n                        <div class=\"form-group\">\r\n                          <div class=\"col-sm-offset-2 col-sm-10\">\r\n                            <button type=\"submit\" class=\"btn btn-default\" (click)=\"trans()\">Transfer</button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </form>\r\n          </div>\r\n      </div>\r\n\r\n<ngx-spinner\r\nbdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\nloadingText=\"Loading...\"\r\ntype=\"ball-scale-multiple\">\r\n</ngx-spinner>\r\n\r\n</main>\r\n"

/***/ }),

/***/ "../../../../../src/app/banking/banking.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/banking/banking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contract_service__ = __webpack_require__("../../../../../src/app/contract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BankingComponent = /** @class */ (function () {
    function BankingComponent(de, spin, fb) {
        var _this = this;
        this.de = de;
        this.spin = spin;
        this.fb = fb;
        de.getAccount().then(function (account) { return _this.account = account; });
        this.createForm();
    }
    BankingComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            amount: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            withdraw: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            tokenaddress: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            bankaddress1: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            amount1: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
    };
    BankingComponent.prototype.ngOnInit = function () {
        this.de.basicfunctions();
    };
    BankingComponent.prototype.dep = function () {
        var _this = this;
        this.spin.show();
        var meta = this.de;
        meta.isregister().then(function (result) {
            if (result == true)
                // this.spin.show();
                meta.deposit(_this.depositamt).then(function (res) {
                    console.log("Hash :" + res);
                    if (res === 0) {
                        _this.spin.hide();
                    }
                    else
                        meta.hash(res).then(function (result) {
                            console.log("result : " + result);
                            _this.spin.hide();
                        });
                });
            else
                alert("You have not Register");
        });
    };
    BankingComponent.prototype.wit = function () {
        var _this = this;
        this.spin.show();
        var meta = this.de;
        meta.acc_bal().then(function (result) {
            if (result >= _this.withdraw)
                meta.withdraw(_this.withdraw).then(function (res) {
                    console.log("Hash :" + res);
                    if (res === 0) {
                        _this.spin.hide();
                    }
                    else
                        meta.hash(res).then(function (result) {
                            console.log("result : " + result);
                            _this.spin.hide();
                        });
                });
            else {
                console.log(result);
                alert("You have a not enough balance");
                _this.spin.hide();
            }
        });
    };
    BankingComponent.prototype.token = function () {
        var _this = this;
        this.spin.show();
        var meta = this.de;
        meta.isregister().then(function (result) {
            if (result == true)
                meta.token(_this.tokenaddress).then(function (res) {
                    console.log("Hash :" + res);
                    if (res === 0) {
                        _this.spin.hide();
                    }
                    else
                        meta.hash(res).then(function (result) {
                            console.log("result : " + result);
                            _this.spin.hide();
                        });
                });
            else
                alert("You have not Register");
        });
    };
    BankingComponent.prototype.trans = function () {
        var _this = this;
        this.spin.show();
        var meta = this.de;
        meta.acc_bal().then(function (result) {
            if (result >= _this.amount)
                meta.transfer(_this.bank_address, _this.amount).then(function (res) {
                    console.log("Hash :" + res);
                    if (res === 0) {
                        _this.spin.hide();
                    }
                    else
                        meta.hash(res).then(function (result) {
                            console.log("result : " + result);
                            _this.spin.hide();
                        });
                });
            else {
                alert("You have a not enough balance");
                _this.spin.hide();
            }
        });
    };
    BankingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-banking',
            template: __webpack_require__("../../../../../src/app/banking/banking.component.html"),
            styles: [__webpack_require__("../../../../../src/app/banking/banking.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__contract_service__["a" /* ContractService */], __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], BankingComponent);
    return BankingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contract.json":
/***/ (function(module, exports) {

module.exports = [{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"my_clients_count","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"loan","outputs":[{"name":"loan_id","type":"uint256"},{"name":"lender_address","type":"address"},{"name":"borrower_address","type":"address"},{"name":"token_address","type":"address"},{"name":"amount","type":"uint256"},{"name":"settle_count","type":"uint256"},{"name":"next_settle_time","type":"uint256"},{"name":"months","type":"uint256"},{"name":"bal_loan","type":"uint256"},{"name":"current_installment","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"loan_pro_count","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"loan_pro_id","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"fix_id","type":"uint256"},{"name":"value","type":"uint256"}],"name":"fix_amt_settlement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"bank","outputs":[{"name":"name","type":"bytes"},{"name":"bal","type":"uint256"},{"name":"status","type":"bool"},{"name":"loan_interst","type":"uint256"},{"name":"fixed_deposit_interst","type":"uint256"},{"name":"token_count","type":"uint256"},{"name":"borrow_amount","type":"uint256"},{"name":"lend_amount","type":"uint256"},{"name":"fixed_amount_bank","type":"uint256"},{"name":"fixed_amount_user","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"my_fix_acc_count","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"my_clients_dep_id","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"my_fix_dep_id","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ln_id","type":"uint256"},{"name":"due_amt","type":"uint256"}],"name":"last_loan_due","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"bytes"},{"name":"loan_interst","type":"uint256"},{"name":"fixed_deposit","type":"uint256"}],"name":"register","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"deregister","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"bank_users","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"bank_count","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"loan_get_count","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"fix_dep","outputs":[{"name":"fixed_dep_id","type":"uint256"},{"name":"bank_address","type":"address"},{"name":"user_address","type":"address"},{"name":"amount","type":"uint256"},{"name":"end_time","type":"uint256"},{"name":"year","type":"uint256"},{"name":"status","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ln_id","type":"uint256"},{"name":"due_amt","type":"uint256"}],"name":"loan_due","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"bank_addr","type":"address"},{"name":"year","type":"uint256"}],"name":"Fixed_Deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"loan_get_id","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"ad","type":"address"}],"name":"tok_count","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"token_address","type":"address"},{"name":"bank_address","type":"address"},{"name":"tokens","type":"uint256"},{"name":"year","type":"uint8"}],"name":"req_loan","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]

/***/ }),

/***/ "../../../../../src/app/contract.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_web3__ = __webpack_require__("../../../../web3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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



var tokenAbi = __webpack_require__("../../../../../src/app/contract.json");
var ContractService = /** @class */ (function () {
    function ContractService(router) {
        this.router = router;
        this._account = null;
        this._balance = 0;
        this._tokenContractAddress = "0xa47f284c75ff5254d79bbdb1e8e73e4069f5d3c1";
        if (typeof window.web3 !== 'undefined') {
            // Use Mist/MetaMask's provider
            this._web3 = new __WEBPACK_IMPORTED_MODULE_1_web3__(window.web3.currentProvider);
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
    ContractService.prototype.basicfunctions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var meta, account, accountInterval;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        return [4 /*yield*/, meta.getAccount()];
                    case 1:
                        account = _a.sent();
                        accountInterval = setInterval(function () {
                            meta._web3.eth.getAccounts(function (err, accs) {
                                if (accs[0] !== meta._account) {
                                    console.log("Met : " + accs[0] + ", acc : " + meta._account);
                                    window.location.reload();
                                }
                            });
                        }, 100);
                        //  var id1 = setInterval(function() {
                        //     if (typeof window.web3 !== 'undefined') {
                        //         meta._web3 = new Web3(window.web3.currentProvider);
                        //         if (meta._web3.eth.accounts[0] !== meta._account) {
                        //             meta._account = meta._web3.eth.accounts[0];
                        //             if (meta._web3.eth.accounts[0] === undefined) {
                        //               meta.router.navigate(['']);
                        //                 // clearInterval(this.interval);
                        //             } else
                        //             {
                        //               window.location.reload(true);
                        //             }
                        //         }
                        //     } else
                        //     {
                        //       meta.router.navigate(['']);
                        //     }
                        //     }, 200);
                        return [2 /*return*/, Promise.resolve(this._account)];
                }
            });
        });
    };
    ContractService.prototype.hash = function (a) {
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
    //getAccount details
    ContractService.prototype.getAccount = function () {
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
    //getBalance
    ContractService.prototype.getUserBalance = function () {
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
                                _this._web3.eth.getBalance(account, function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    this._balance = _web3.fromWei(result);
                                    // console.log("bal",parseFloat(_web3.fromWei(result)));
                                    resolve(parseFloat(_web3.fromWei(result)));
                                });
                            })];
                }
            });
        });
    };
    //Add Product
    ContractService.prototype.register = function (a, b, c) {
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
                                b = b.toFixed(2) * 100;
                                c = c.toFixed(2) * 100;
                                // alert(b);
                                // alert(c);
                                _this._tokenContract.register(_web3.fromAscii(a), b, c, { from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        // reject(err);
                                        console.log(err);
                                        resolve(0);
                                    }
                                    else
                                        resolve(result);
                                });
                            })];
                }
            });
        });
    };
    ContractService.prototype.deregister = function () {
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
                                var con = _this._tokenContract;
                                con.bank(account, function (err, val) {
                                    //6789
                                    if (parseInt(val[6]) != 0) {
                                        alert("You have Borrow Some Amount");
                                        resolve(0);
                                        return;
                                    }
                                    if (parseInt(val[7]) != 0) {
                                        alert("You have Lend Some Amount");
                                        resolve(0);
                                        return;
                                    }
                                    if (parseInt(val[8]) != 0) {
                                        alert("Some Bank deposit to your Bank");
                                        resolve(0);
                                        return;
                                    }
                                    if (parseInt(val[9]) != 0) {
                                        alert("You have Deposit Some Amount");
                                        resolve(0);
                                        return;
                                    }
                                    con.deregister({ from: account, gas: 600000 }, function (err, result) {
                                        if (err != null) {
                                            // reject(err);
                                            console.log(err);
                                            resolve(0);
                                        }
                                        else
                                            resolve(result);
                                    });
                                });
                            })];
                }
            });
        });
    };
    // Bank Table
    ContractService.prototype.bank_count = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account, _web3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        _web3 = this._web3;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this._tokenContract.bank_count.call(function (error, result) {
                                    var arr = [];
                                    for (var i = 0; i < result.toNumber(); i++) {
                                        // console.log("count : "+i);
                                        arr.push(i);
                                    }
                                    resolve(arr);
                                });
                            })];
                }
            });
        });
    };
    ContractService.prototype.bank_address = function (gid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var _web3 = _this._web3;
                        _this._tokenContract.bank_users.call(gid, function (error, result) {
                            if (error) {
                                reject(error);
                            }
                            // console.log("address : "+ (result));
                            resolve(result);
                        });
                    })];
            });
        });
    };
    ContractService.prototype.bank_detail = function (gid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var a = _this._tokenContract;
                        var _web3 = _this._web3;
                        _this._tokenContract.bank.call(gid, function (error, result) {
                            if (error) {
                                reject(error);
                            }
                            // console.log("detail : "+ (result[0]));
                            result[0] = _web3.toAscii(result[0]);
                            result[3] = parseInt(result[3]) / 100;
                            result[4] = parseInt(result[4]) / 100;
                            // if(result[2] == false)
                            //   result[2] = "Not Available"
                            // else
                            //   result[2] = "Available"
                            result[1] = _web3.fromWei(result[1], 'ether');
                            result[6] = _web3.fromWei(result[6], 'ether');
                            result[7] = _web3.fromWei(result[7], 'ether');
                            result[8] = _web3.fromWei(result[8], 'ether');
                            result[9] = _web3.fromWei(result[9], 'ether');
                            resolve(result);
                        });
                    })];
            });
        });
    };
    // Bank Table
    ContractService.prototype.loan_get_count = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account, _web3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        _web3 = this._web3;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this._tokenContract.loan_get_count.call(account, function (error, result) {
                                    var arr = [];
                                    for (var i = 0; i < result.toNumber(); i++) {
                                        // console.log("count : "+i);
                                        arr.push(i);
                                    }
                                    resolve(arr);
                                });
                            })];
                }
            });
        });
    };
    ContractService.prototype.loan_pro_count = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account, _web3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        _web3 = this._web3;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this._tokenContract.loan_pro_count.call(account, function (error, result) {
                                    var arr = [];
                                    for (var i = 0; i < result.toNumber(); i++) {
                                        // console.log("count : "+i);
                                        arr.push(i);
                                    }
                                    resolve(arr);
                                });
                            })];
                }
            });
        });
    };
    ContractService.prototype.get_loan_id = function (gid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account, _web3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        _web3 = this._web3;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this._tokenContract.loan_get_id.call(account, gid, function (error, result) {
                                    if (error) {
                                        reject(error);
                                    }
                                    // console.log("address : "+ (result));
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    ContractService.prototype.pro_loan_id = function (gid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account, _web3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        _web3 = this._web3;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this._tokenContract.loan_pro_id.call(account, gid, function (error, result) {
                                    if (error) {
                                        reject(error);
                                    }
                                    // console.log("address : "+ (result));
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    ContractService.prototype.loan_detail = function (gid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var a = _this._tokenContract;
                        var _web3 = _this._web3;
                        _this._tokenContract.loan.call(gid, function (error, result) {
                            if (error) {
                                reject(error);
                            }
                            var time = Math.round((new Date()).getTime() / 1000);
                            result[4] = _web3.fromWei(result[4], 'ether');
                            result[10] = result[6];
                            result[12] = result[9];
                            var myDate = new Date((result[6].toNumber()) * 1000);
                            result[6] = (myDate.toLocaleString());
                            result[8] = _web3.fromWei(result[8], 'ether');
                            result[9] = _web3.fromWei(result[9], 'ether');
                            if (time > parseInt(result[10]))
                                result[11] = parseFloat(_web3.fromWei(result[12], 'ether')) + 0.01;
                            else
                                result[11] = _web3.fromWei(result[12], 'ether');
                            resolve(result);
                        });
                    })];
            });
        });
    };
    ContractService.prototype.my_fix_acc_count = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account, _web3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        _web3 = this._web3;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this._tokenContract.my_fix_acc_count.call(account, function (error, result) {
                                    var arr = [];
                                    for (var i = 0; i < result.toNumber(); i++) {
                                        // console.log("count : "+i);
                                        arr.push(i);
                                    }
                                    resolve(arr);
                                });
                            })];
                }
            });
        });
    };
    ContractService.prototype.my_clients_count = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account, _web3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        _web3 = this._web3;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this._tokenContract.my_clients_count.call(account, function (error, result) {
                                    var arr = [];
                                    for (var i = 0; i < result.toNumber(); i++) {
                                        // console.log("count : "+i);
                                        arr.push(i);
                                    }
                                    resolve(arr);
                                });
                            })];
                }
            });
        });
    };
    ContractService.prototype.my_fix_dep_id = function (gid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account, _web3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        _web3 = this._web3;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this._tokenContract.my_fix_dep_id.call(account, gid, function (error, result) {
                                    if (error) {
                                        reject(error);
                                    }
                                    // console.log("address : "+ (result));
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    ContractService.prototype.my_clients_dep_id = function (gid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account, _web3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        _web3 = this._web3;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this._tokenContract.my_clients_dep_id.call(account, gid, function (error, result) {
                                    if (error) {
                                        reject(error);
                                    }
                                    // console.log("address : "+ (result));
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    ContractService.prototype.fix_dep_detail = function (gid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var a = _this._tokenContract;
                        var _web3 = _this._web3;
                        _this._tokenContract.fix_dep.call(gid, function (error, result) {
                            if (error) {
                                reject(error);
                            }
                            result[3] = _web3.fromWei(result[3], 'ether');
                            var myDate = new Date((result[4].toNumber()) * 1000);
                            result[4] = (myDate.toLocaleString());
                            resolve(result);
                        });
                    })];
            });
        });
    };
    // public async bank_detail(gid):Promise<object> 
    // {
    //   return new Promise((resolve, reject) => 
    //   {
    //     let a = this._tokenContract;
    //     let _web3 = this._web3;
    //     this._tokenContract.bank_users.call(gid,function (error,val) {
    //       console.log("add "+val)
    //       a.bank.call(val,function (error,result) {
    //         if(error){    
    //           reject(error); 
    //         } 
    //         result[0] = _web3.toAscii(result[0])
    //         result[1] = _web3.fromWei(result[1],'ether')
    //         result[10] = val;
    //         console.log("detail : "+ (result[0]));
    //         resolve(result);
    //       });
    //     });
    //   })as Promise<object>;
    // }
    ContractService.prototype.loan = function (a, b, c, d) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                if (b == account) {
                                    alert("Chance the bank Address");
                                    resolve(0);
                                    return;
                                }
                                if (parseInt(c) != c || parseInt(c) <= 0) {
                                    alert("Enter the Valid Token Count...");
                                    resolve(0);
                                    return;
                                }
                                if (parseInt(d) == 0) {
                                    alert("Enter the Valid number of years");
                                    resolve(0);
                                    return;
                                }
                                if (parseInt(d) != d) {
                                    alert("Change the decimal values, You have only deposit the complete number of years");
                                    resolve(0);
                                    return;
                                }
                                var _web3 = _this._web3;
                                _this._tokenContract.req_loan(a, b, c, d, { from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        // reject(err);
                                        console.log(err);
                                        resolve(0);
                                    }
                                    else
                                        resolve(result);
                                });
                            })];
                }
            });
        });
    };
    ContractService.prototype.pay_due = function (a) {
        return __awaiter(this, void 0, void 0, function () {
            var account, con, _web3, self;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        con = this._tokenContract;
                        _web3 = this._web3;
                        self = this;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                if (parseInt(a) != a) {
                                    alert("Please give the Valid ID");
                                    resolve(0);
                                    return;
                                }
                                self._tokenContract.loan(a, function (err, value) {
                                    if (value[2] != account) {
                                        alert("Invalid ID");
                                        resolve(0);
                                        return;
                                    }
                                    if ((value[5].toNumber()) >= (value[7].toNumber())) {
                                        alert("You have already settle this loan");
                                        resolve(0);
                                        return;
                                    }
                                    var time = Math.round((new Date()).getTime() / 1000);
                                    if (time < (value[6] - 60)) {
                                        alert("Due time can't come");
                                        resolve(0);
                                        return;
                                    }
                                    if (value[5].toNumber() < (value[7].toNumber() - 1)) {
                                        // if( ((loan[ln_id].next_settle_time - 1 minutes  /* 5 days */) <= now) && (now <= loan[ln_id].next_settle_time))
                                        if ((value[6].toNumber() - 60) <= time && time <= value[6].toNumber()) {
                                            // console.log("1",(value[6].toNumber()-60), time);
                                            self.acc_bal().then(function (res) {
                                                console.log("Due amt:", parseInt(value[9]), "wei,", _web3.fromWei(parseInt(value[9]), "ether"), "ether");
                                                console.log("A/c bal:", _web3.toWei(res, "ether"), "wei,", res, "ether");
                                                if (_web3.toWei(res, "ether") < parseInt(value[9])) {
                                                    alert("You have a not enough balance");
                                                    resolve(0);
                                                    return;
                                                }
                                                con.loan_due(a, parseInt(value[9]), { from: account, gas: 600000 }, function (err, result) {
                                                    if (err != null) {
                                                        // reject(err);
                                                        console.log(err);
                                                        resolve(0);
                                                    }
                                                    else
                                                        resolve(result);
                                                });
                                            });
                                        }
                                        else {
                                            // console.log("2",(value[6].toNumber()-60), time);
                                            var amt_1 = parseInt(value[9]) + parseInt(_web3.toWei(0.01, "ether"));
                                            console.log("Due amt:", amt_1, "wei,", _web3.fromWei(amt_1, "ether"), "ether");
                                            self.acc_bal().then(function (res) {
                                                console.log("A/c bal:", _web3.toWei(res, "ether"), "wei,", res, "ether");
                                                if (_web3.toWei(res, "ether") < amt_1) {
                                                    alert("You have a not enough balance");
                                                    resolve(0);
                                                    return;
                                                }
                                                con.loan_due(a, amt_1, { from: account, gas: 600000 }, function (err, result) {
                                                    if (err != null) {
                                                        // reject(err);
                                                        console.log(err);
                                                        resolve(0);
                                                    }
                                                    else
                                                        resolve(result);
                                                });
                                            });
                                        }
                                    }
                                    else if (value[5].toNumber() == (value[7].toNumber() - 1)) {
                                        if ((value[6].toNumber() - 60) <= time && time <= value[6].toNumber()) {
                                            var amt_2 = parseInt(value[9]) + (parseInt(value[8]) - (parseInt(value[4]) / parseInt(value[7])));
                                            console.log("Due amt:", amt_2, "wei,", _web3.fromWei(amt_2, "ether"), "ether");
                                            self.acc_bal().then(function (res) {
                                                console.log("A/c bal:", _web3.toWei(res, "ether"), "wei,", res, "ether");
                                                if (_web3.toWei(res, "ether") < amt_2) {
                                                    alert("You have a not enough balance");
                                                    resolve(0);
                                                    return;
                                                }
                                                con.last_loan_due(a, amt_2, { from: account, gas: 600000 }, function (err, result) {
                                                    if (err != null) {
                                                        // reject(err);
                                                        console.log(err);
                                                        resolve(0);
                                                    }
                                                    else
                                                        resolve(result);
                                                });
                                            });
                                        }
                                        else {
                                            console.log("bal : " + (parseInt(value[8]) - (parseInt(value[4]) / parseInt(value[7]))));
                                            var amt_3 = parseInt(value[9]) + parseInt(_web3.toWei(0.01, "ether")) + (parseInt(value[8]) - (parseInt(value[4]) / parseInt(value[7])));
                                            console.log("Due amt:", amt_3, "wei,", _web3.fromWei(amt_3, "ether"), "ether");
                                            self.acc_bal().then(function (res) {
                                                console.log("A/c bal:", _web3.toWei(res, "ether"), "wei,", res, "ether");
                                                if (_web3.toWei(res, "ether") < amt_3) {
                                                    alert("You have a not enough balance");
                                                    resolve(0);
                                                    return;
                                                }
                                                con.last_loan_due(a, amt_3, { from: account, gas: 600000 }, function (err, result) {
                                                    if (err != null) {
                                                        // reject(err);
                                                        console.log(err);
                                                        resolve(0);
                                                    }
                                                    else
                                                        resolve(result);
                                                });
                                            });
                                        }
                                    }
                                });
                            })];
                }
            });
        });
    };
    ContractService.prototype.deposit = function (a) {
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
                                _this._tokenContract.deposit(account, { from: account, value: _this._web3.toWei(a, "ether"), gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        // reject(err);
                                        console.log(err);
                                        resolve(0);
                                    }
                                    else
                                        resolve(result);
                                });
                            })];
                }
            });
        });
    };
    ContractService.prototype.token = function (a) {
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
                                _this._tokenContract.tok_count(a, account, { from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        // reject(err);
                                        console.log(err);
                                        resolve(0);
                                    }
                                    else
                                        resolve(result);
                                });
                            })];
                }
            });
        });
    };
    ContractService.prototype.withdraw = function (a) {
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
                                console.log(_web3.toWei(a, "ether"));
                                _this._tokenContract.withdraw(_web3.toWei(a, "ether"), { from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        // reject(err);
                                        console.log(err);
                                        resolve(0);
                                    }
                                    else
                                        resolve(result);
                                });
                            })];
                }
            });
        });
    };
    ContractService.prototype.transfer = function (a, b) {
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
                                if (a == account) {
                                    alert("Chance the bank Address");
                                    resolve(0);
                                    return;
                                }
                                _this._tokenContract.transfer(account, a, _web3.toWei(b, "ether"), { from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        // reject(err);
                                        console.log(err);
                                        resolve(0);
                                    }
                                    else
                                        resolve(result);
                                });
                            })];
                }
            });
        });
    };
    ContractService.prototype.fduser = function (fix_id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account_1, con_1, web3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account_1 = _a.sent();
                        con_1 = this._tokenContract;
                        web3 = this._web3;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                if (parseInt(fix_id) != fix_id) {
                                    alert("Please give the Valid ID");
                                    resolve(0);
                                    return;
                                }
                                _this._tokenContract.fix_dep(fix_id, function (err, value) {
                                    if (value[2] != account_1) {
                                        alert("Invalid ID");
                                        resolve(0);
                                        return;
                                    }
                                    if (value[6] == false) {
                                        alert("Already Settled");
                                        resolve(0);
                                        return;
                                    }
                                    var time = Math.round((new Date()).getTime() / 1000);
                                    var dep_amt = value[3];
                                    var dep_yr = value[5];
                                    var amt;
                                    if (value[4].toNumber() > time) {
                                        con_1.bank(value[1], function (err, val) {
                                            var bal = parseInt(val[1]);
                                            amt = parseInt(dep_amt) - (dep_amt / 100);
                                            console.log("Request Amount : " + amt);
                                            console.log("Bank Balance : " + bal);
                                            if (bal < amt) {
                                                alert("Bank have not enough balance !");
                                                resolve(0);
                                                return;
                                            }
                                            con_1.fix_amt_settlement(fix_id, amt, { from: account_1, gas: 600000 }, function (err, result) {
                                                if (err != null) {
                                                    // reject(err);
                                                    console.log(err);
                                                    resolve(0);
                                                }
                                                else
                                                    resolve(result);
                                            });
                                        });
                                    }
                                    else {
                                        con_1.bank(value[1], function (err, val) {
                                            var bal = parseInt(val[1]);
                                            var int_rete = val[4];
                                            amt = parseInt(dep_amt) + ((dep_amt * dep_yr * (int_rete / 100)) / 100);
                                            console.log("Request Amount : " + amt);
                                            console.log("Bank Balance : " + bal);
                                            if (bal < amt) {
                                                alert("Bank have not enough balance !");
                                                resolve(0);
                                                return;
                                            }
                                            con_1.fix_amt_settlement(fix_id, amt, { from: account_1, gas: 600000 }, function (err, result) {
                                                if (err != null) {
                                                    // reject(err);
                                                    console.log(err);
                                                    resolve(0);
                                                }
                                                else
                                                    resolve(result);
                                            });
                                        });
                                    }
                                });
                            })];
                }
            });
        });
    };
    ContractService.prototype.fdowner = function (fix_idowner) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account, con;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        con = this._tokenContract;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                if (parseInt(fix_idowner) != fix_idowner) {
                                    alert("Please give the Valid ID");
                                    resolve(0);
                                    return;
                                }
                                _this._tokenContract.fix_dep(fix_idowner, function (err, value) {
                                    if (value[1] != account) {
                                        alert("Invalid ID");
                                        resolve(0);
                                        return;
                                    }
                                    if (value[6] == false) {
                                        alert("Already Settled");
                                        resolve(0);
                                        return;
                                    }
                                    var time = Math.round((new Date()).getTime() / 1000);
                                    console.log(time, value[4].toNumber());
                                    if (value[4].toNumber() > time) {
                                        alert("User deposited time not expired");
                                        resolve(0);
                                        return;
                                    }
                                    var dep_amt = value[3];
                                    var dep_yr = value[5];
                                    con.bank(account, function (err, val) {
                                        var int_rete = val[4];
                                        var bal = parseInt(val[1]);
                                        var amt = parseInt(dep_amt) + ((dep_amt * dep_yr * (int_rete / 100)) / 100);
                                        console.log("Amount : " + amt);
                                        console.log("Your Balance : " + bal);
                                        if (bal < amt) {
                                            alert("You have not enough balance !");
                                            resolve(0);
                                            return;
                                        }
                                        con.fix_amt_settlement(fix_idowner, amt, { from: account, gas: 600000 }, function (err, result) {
                                            if (err != null) {
                                                // reject(err);
                                                console.log(err);
                                                resolve(0);
                                            }
                                            else
                                                resolve(result);
                                        });
                                    });
                                });
                            })];
                }
            });
        });
    };
    ContractService.prototype.fixeddeposit = function (bankaddress, depositamount, periodinyrs) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                if (bankaddress == account) {
                                    alert("Chance the bank Address");
                                    resolve(0);
                                    return;
                                }
                                if (depositamount == 0) {
                                    alert("Enter the Amount...");
                                    resolve(0);
                                    return;
                                }
                                if (parseInt(periodinyrs) != periodinyrs || parseInt(periodinyrs) == 0) {
                                    alert("Change the decimal values, You have only deposit the complete number of years");
                                    resolve(0);
                                    return;
                                }
                                var _web3 = _this._web3;
                                _this._tokenContract.Fixed_Deposit(bankaddress, periodinyrs, { from: account, value: _this._web3.toWei(depositamount, 'ether'), gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        // reject(err);
                                        console.log(err);
                                        resolve(0);
                                    }
                                    else
                                        resolve((result));
                                });
                            })];
                }
            });
        });
    };
    ContractService.prototype.isregister = function () {
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
                                _this._tokenContract.bank(account, function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    resolve(result[2]);
                                });
                            })];
                }
            });
        });
    };
    ContractService.prototype.acc_bal = function () {
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
                                _this._tokenContract.bank(account, function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    resolve(parseFloat(_web3.fromWei(result[1], "ether")));
                                });
                            })];
                }
            });
        });
    };
    ContractService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ContractService);
    return ContractService;
}());



/***/ }),

/***/ "../../../../../src/app/fd-amt-req/fd-amt-req.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\r\n  <div class=\"container-fluid\" style=\"margin-top: 70px; \">\r\n          \r\n              <form class=\"form-horizontal\" [formGroup]=\"angForm\" novalidate>\r\n                <div>\r\n                  <br>\r\n                 <h3> User Request Withdraw</h3>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                      <label class=\"control-label col-sm-2\"  for=\"fix_id\">Enter the Fixed Dep. ID</label>\r\n                      <div class=\"col-sm-4\">\r\n                        <input type=\"text\" class=\"form-control\" type=\"number\" name=\"fix_id\" formControlName=\"fix_id\" [(ngModel)]=\"fix_id\" placeholder=\"Fixed Dep. ID\">\r\n                      </div>\r\n                    </div>                     \r\n\r\n\r\n                    <div *ngIf=\"angForm.controls['fix_id'].valid && angForm.controls['fix_id'].value >= 0 \">\r\n                      <div class=\"form-group\">\r\n                        <div class=\"col-sm-offset-2 col-sm-10\">\r\n                          <button type=\"submit\" class=\"btn btn-default\" (click)=\"submit()\" >Submit</button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n              </form>\r\n          \r\n          \r\n             \r\n              \r\n          \r\n        \r\n              <br>\r\n                  <center> \r\n                    <h2>My Deposit Details</h2>\r\n                    <p><b style=\"color:red\">Note :</b> If you withdraw within time period, You will get only 99% of your Deposited Ether and Penality is 1%. </p>\r\n                  </center>\r\n\r\n<!--Table-->\r\n<div class=\"scrollable\" style=\"overflow-x:auto;overflow-y:auto;height:600px;background:white\">\r\n    <table class=\"table\">\r\n    \r\n      <!--Table head-->\r\n      <thead class=\"mdb-color darken-3\">\r\n          <tr class=\"text-white\">\r\n              \r\n              <th>Fix_Dep. ID</th>\r\n              <th>Bank Address</th>\r\n              <th>Total Amount</th>\r\n              <th>End Time</th>\r\n              <th>Year</th>\r\n              <th>Status</th>\r\n          </tr>\r\n      </thead>\r\n      <!--Table head-->\r\n    \r\n      <tbody>\r\n              <tr *ngFor=\"let bank of fix_dep; let i = index\">\r\n                <td>{{ bank.id }}</td>\r\n                <td>{{ bank.bank_add }}</td>\r\n                <td>{{ bank.amt }}</td>\r\n                <td>{{ bank.End_time }}</td>\r\n                <td>{{ bank.year }}</td>\r\n                <td>{{ bank.status }}</td>\r\n      \r\n              </tr>\r\n            </tbody>\r\n    </table>\r\n<!--Table-->\r\n\r\n  </div>\r\n</div>  \r\n\r\n<ngx-spinner\r\nbdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\nloadingText=\"Loading...\"\r\ntype=\"ball-scale-multiple\">\r\n</ngx-spinner>\r\n\r\n</main>\r\n"

/***/ }),

/***/ "../../../../../src/app/fd-amt-req/fd-amt-req.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  border: 1px solid #ddd; }\n\nth, td {\n  text-align: left;\n  padding: 8px; }\n\ntr:nth-child(even) {\n  background-color: #f2f2f2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fd-amt-req/fd-amt-req.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FdAmtReqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contract_service__ = __webpack_require__("../../../../../src/app/contract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FdAmtReqComponent = /** @class */ (function () {
    function FdAmtReqComponent(cs, spin, router, fb) {
        this.cs = cs;
        this.spin = spin;
        this.router = router;
        this.fb = fb;
        this.fix_dep = [];
        this.createForm();
    }
    FdAmtReqComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            fix_id: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
        });
    };
    FdAmtReqComponent.prototype.ngOnInit = function () {
        // // to check when user have any FD
        // let count = 0;
        // this.cs.my_fix_acc_count().then(game =>{
        //   game.forEach(item => {
        //     this.cs.my_fix_dep_id(item).then(add =>{
        //       this.cs.fix_dep_detail(add).then(obj => 
        //       {
        //         if(obj[6]){
        //           count++;
        //           console.log(count);
        //         }
        var _this = this;
        //       });
        //     })
        //   });
        // })
        // alert(count)
        // if (count == 0)
        // {
        //   alert("You have not Deposit to any bank");
        //   this.router.navigate(["profile"]);
        // }
        // // ------------------------------------------
        this.cs.basicfunctions();
        this.cs.my_fix_acc_count().then(function (game) {
            game.forEach(function (item) {
                _this.cs.my_fix_dep_id(item).then(function (add) {
                    _this.cs.fix_dep_detail(add).then(function (obj) {
                        if (obj[6])
                            _this.fix_dep.push({ "id": add, "bank_add": obj[1], "amt": obj[3] + " Ξ", "End_time": obj[4], "year": obj[5], "status": "Not Settled" });
                    });
                });
            });
        });
    };
    FdAmtReqComponent.prototype.submit = function () {
        var _this = this;
        this.spin.show();
        var meta = this.cs;
        meta.fduser(this.fix_id).then(function (res) {
            console.log("Hash :" + res);
            if (res === 0) {
                _this.spin.hide();
            }
            else
                meta.hash(res).then(function (result) {
                    console.log("result : " + result);
                    _this.spin.hide();
                });
        });
    };
    FdAmtReqComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fd-amt-req',
            template: __webpack_require__("../../../../../src/app/fd-amt-req/fd-amt-req.component.html"),
            styles: [__webpack_require__("../../../../../src/app/fd-amt-req/fd-amt-req.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__contract_service__["a" /* ContractService */], __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], FdAmtReqComponent);
    return FdAmtReqComponent;
}());



/***/ }),

/***/ "../../../../../src/app/fd-amt-settle/fd-amt-settle.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\r\n  <div class=\"container-fluid\" style=\"margin-top: 70px; \">\r\n\r\n      \r\n              <form class=\"form-horizontal\" [formGroup]=\"angForm\" novalidate>\r\n                \r\n                <div>\r\n                  <br>\r\n                 <h3> Owner Settlement</h3>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                      <label class=\"control-label col-sm-2\" for=\"fix_idowner\">Enter the Fixed Dep. ID</label>\r\n                      <div class=\"col-sm-4\">\r\n                        <input type=\"text\" class=\"form-control\" type=\"number\" name=\"fix_idowner\" formControlName=\"fix_idowner\" [(ngModel)]=\"fix_idowner\" placeholder=\"Fixed Dep. ID\">\r\n                      </div>\r\n                    </div>\r\n                       \r\n                    <div *ngIf=\"angForm.controls['fix_idowner'].valid && angForm.controls['fix_idowner'].value >= 0 \">\r\n                      <div class=\"form-group\">\r\n                        <div class=\"col-sm-offset-2 col-sm-10\">\r\n                          <button type=\"submit\" class=\"btn btn-default\" (click)=\"submit()\" >Submit</button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n              </form>\r\n          \r\n          \r\n\r\n                <br>\r\n                  <center> <h2>My Client's Details</h2></center>\r\n             \r\n\r\n<!--Table-->\r\n<div class=\"scrollable\" style=\"overflow-x:auto;overflow-y:auto;height:600px;background:white\">\r\n<table class=\"table\">\r\n\r\n  <!--Table head-->\r\n  <thead class=\"mdb-color darken-3\">\r\n      <tr class=\"text-white\">\r\n          <th>Fix_Dep. ID</th>\r\n          <th>User Address</th>\r\n          <th>Total Amount</th>\r\n          <th>End Time</th>\r\n          <th>Status</th>\r\n      </tr>\r\n  </thead>\r\n  <!--Table head-->\r\n  <tbody>\r\n      <tr *ngFor=\"let bank of fix_dep; let i = index\">\r\n        <td>{{ bank.id }}</td>\r\n        <td>{{ bank.user_add }}</td>\r\n        <td>{{ bank.amt }}</td>\r\n        <td>{{ bank.End_time }}</td>\r\n        <td>{{ bank.status }}</td>\r\n\r\n      </tr>\r\n    </tbody>\r\n  \r\n</table>\r\n</div>\r\n<!--Table-->\r\n\r\n</div>      \r\n<ngx-spinner\r\nbdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\nloadingText=\"Loading...\"\r\ntype=\"ball-scale-multiple\">\r\n</ngx-spinner>    \r\n      \r\n\r\n</main>\r\n"

/***/ }),

/***/ "../../../../../src/app/fd-amt-settle/fd-amt-settle.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  border: 1px solid #ddd; }\n\nth, td {\n  text-align: left;\n  padding: 8px; }\n\ntr:nth-child(even) {\n  background-color: #f2f2f2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fd-amt-settle/fd-amt-settle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FdAmtSettleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contract_service__ = __webpack_require__("../../../../../src/app/contract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FdAmtSettleComponent = /** @class */ (function () {
    function FdAmtSettleComponent(cs, spin, router, fb) {
        this.cs = cs;
        this.spin = spin;
        this.router = router;
        this.fb = fb;
        this.fix_dep = [];
        this.createForm();
    }
    FdAmtSettleComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            fix_idowner: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
        });
    };
    FdAmtSettleComponent.prototype.ngOnInit = function () {
        // // to check others have any FD to this bank
        // let count = 0;
        // this.cs.my_clients_count().then(game =>{
        //   game.forEach(item => {
        //     this.cs.my_clients_dep_id(item).then(add =>{
        //       this.cs.fix_dep_detail(add).then(obj => 
        //       {
        //         if(obj[6])
        //         count++;
        //       });
        //     })
        //   });
        // })
        var _this = this;
        // if (count == 0)
        // {
        //   alert("Others not Deposit to Your bank");
        //   this.router.navigate(["profile"]);
        // }
        // // ------------------------------------------
        this.cs.basicfunctions();
        this.cs.my_clients_count().then(function (game) {
            game.forEach(function (item) {
                _this.cs.my_clients_dep_id(item).then(function (add) {
                    _this.cs.fix_dep_detail(add).then(function (obj) {
                        if (obj[6])
                            _this.fix_dep.push({ "id": add, "user_add": obj[2], "amt": obj[3] + " Ξ", "End_time": obj[4], "status": "Not Settled" });
                    });
                });
            });
        });
    };
    FdAmtSettleComponent.prototype.submit = function () {
        var _this = this;
        this.spin.show();
        console.log(this.fix_idowner);
        var meta = this.cs;
        meta.fdowner(this.fix_idowner).then(function (res) {
            console.log("Hash :" + res);
            if (res === 0) {
                _this.spin.hide();
            }
            else
                meta.hash(res).then(function (result) {
                    console.log("result : " + result);
                    _this.spin.hide();
                });
        });
    };
    FdAmtSettleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fd-amt-settle',
            template: __webpack_require__("../../../../../src/app/fd-amt-settle/fd-amt-settle.component.html"),
            styles: [__webpack_require__("../../../../../src/app/fd-amt-settle/fd-amt-settle.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__contract_service__["a" /* ContractService */], __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], FdAmtSettleComponent);
    return FdAmtSettleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/fix-dep/fix-dep.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\r\n  <div class=\"container-fluid\" style=\"margin-top: 70px; \">\r\n      <form class=\"form-horizontal\" [formGroup]=\"angForm\" novalidate>\r\n              <div>\r\n                  <br>\r\n                <h3>Fixed Deposit</h3>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <label class=\"control-label col-sm-2\" for=\"bankaddress\">Bank Address</label>\r\n                <div class=\"col-sm-4\">\r\n                  <input type=\"text\" class=\"form-control\" name=\"bankaddress\" formControlName=\"bankaddress\" [(ngModel)]=\"bankaddress\" placeholder=\"Bank Address\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <label class=\"control-label col-sm-2\" for=\"depositamount\">Deposit Amount:</label>\r\n                <div class=\"col-sm-4\">\r\n                  <input type=\"number\" class=\"form-control\" name=\"depositamount\" formControlName=\"depositamount\" [(ngModel)]=\"depositamount\" placeholder=\"Deposit Amount\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <label class=\"control-label col-sm-2\" for=\"periodinyrs\">Enter Period(in yrs):</label>\r\n                  <div class=\"col-sm-4\">\r\n                    <input type=\"number\" class=\"form-control\" name=\"periodinyrs\" formControlName=\"periodinyrs\" [(ngModel)]=\"periodinyrs\" placeholder=\"Enter Period(in yrs)\">\r\n                  </div>\r\n              </div>\r\n              \r\n              <div *ngIf=\"angForm.controls['bankaddress'].valid \">\r\n                  <div *ngIf=\"angForm.controls['depositamount'].valid && angForm.controls['depositamount'].value > 0\">\r\n                    <div *ngIf=\"angForm.controls['periodinyrs'].valid && angForm.controls['periodinyrs'].value > 0\">\r\n                      <div class=\"form-group\">\r\n                        <div class=\"col-sm-offset-2 col-sm-10\">\r\n                          <button type=\"submit\" class=\"btn btn-default\" (click)='submit()'>Fixed Req</button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n            </form>\r\n\r\n\r\n      <br>\r\n      <center><h3>Bank details</h3></center>\r\n      <!--Table-->\r\n      <div class=\"scrollable\" style=\"overflow-x:auto;overflow-y:auto;height:405px;background:white\">\r\n      <table class=\"table\">\r\n\r\n          <!--Table head-->\r\n          <thead class=\"mdb-color darken-3\">\r\n              <tr class=\"text-white\">\r\n                  \r\n                  <th>Bank Address</th>\r\n                  <th>Bank Name</th>\r\n                  <th>Balance</th>\r\n                  <th>Fixed int</th>\r\n\r\n              </tr>\r\n          </thead>\r\n          <!--Table head-->\r\n\r\n          <!--Table body-->\r\n          <tbody>\r\n              <tr *ngFor=\"let bank of All_bank1; let i = index\">\r\n                  <td>{{ bank.address }}</td>\r\n                  <td>{{ bank.bank_name }}</td>\r\n                  <td>{{ bank.Bal }}</td>\r\n                  <td>{{ bank.Fix_dep_int }}</td>\r\n                  \r\n\r\n              </tr>\r\n          </tbody>\r\n          <!--Table body-->\r\n      </table>\r\n      </div>\r\n<!--Table-->\r\n\r\n  </div>\r\n  <ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  loadingText=\"Loading...\"\r\n  type=\"ball-scale-multiple\">\r\n</ngx-spinner>\r\n\r\n</main>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/fix-dep/fix-dep.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  border: 1px solid #ddd; }\n\nth, td {\n  text-align: left;\n  padding: 8px; }\n\ntr:nth-child(even) {\n  background-color: #f2f2f2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fix-dep/fix-dep.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixDepComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contract_service__ = __webpack_require__("../../../../../src/app/contract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FixDepComponent = /** @class */ (function () {
    function FixDepComponent(cs, spin, fb) {
        this.cs = cs;
        this.spin = spin;
        this.fb = fb;
        this.All_bank1 = [];
        this.createForm();
    }
    FixDepComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            bankaddress: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            depositamount: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            periodinyrs: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
    };
    FixDepComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cs.basicfunctions();
        this.cs.getAccount().then(function (address) { return _this.address = address; });
        this.cs.getUserBalance().then(function (balance) { return _this.balance = balance; });
        this.cs.bank_count().then(function (game) {
            game.forEach(function (item) {
                _this.cs.bank_address(item).then(function (add) {
                    if (add != _this.address)
                        _this.cs.bank_detail(add).then(function (obj) {
                            if (obj[2] && add != _this.address)
                                _this.All_bank1.push({ "address": add, "bank_name": obj[0], "Bal": obj[1] + " Ξ", "Fix_dep_int": obj[4] + " %" });
                        });
                });
            });
        });
    };
    FixDepComponent.prototype.submit = function () {
        var _this = this;
        this.spin.show();
        var meta = this.cs;
        meta.isregister().then(function (result) {
            if (result == true)
                meta.fixeddeposit(_this.bankaddress, _this.depositamount, _this.periodinyrs).then(function (res) {
                    console.log("Hash :" + res);
                    if (res === 0) {
                        _this.spin.hide();
                    }
                    else
                        meta.hash(res).then(function (result) {
                            console.log("result : " + result);
                            _this.spin.hide();
                        });
                });
            else
                alert("You have not Register");
        });
    };
    FixDepComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fix-dep',
            template: __webpack_require__("../../../../../src/app/fix-dep/fix-dep.component.html"),
            styles: [__webpack_require__("../../../../../src/app/fix-dep/fix-dep.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__contract_service__["a" /* ContractService */], __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], FixDepComponent);
    return FixDepComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guard.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankguardGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contract_service__ = __webpack_require__("../../../../../src/app/contract.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BankguardGuard = /** @class */ (function () {
    function BankguardGuard(cs, router) {
        this.cs = cs;
        this.router = router;
    }
    BankguardGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.cs.isregister().then(function (result) {
            if (!result) {
                // console.log("You have not Registered")      
                _this.router.navigate(["register"]);
            }
            else {
                // console.log("You have a Registered user")
                return true;
            }
        });
    };
    BankguardGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__contract_service__["a" /* ContractService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], BankguardGuard);
    return BankguardGuard;
}());

// export class BankGuard implements CanActivate {
//   constructor(private cs:ContractService,private router:Router) {}
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//       return this.cs.isregister().then(result => {      
//         if (result)
//         {
//           console.log("You have already Registered")  
//           this.router.navigate(["profile"]);
//         }
//         else
//         {
//           console.log("You have not Registered")   
//           return true;        
//         }
//       })
//   }
//  } 


/***/ }),

/***/ "../../../../../src/app/loan-due/loan-due.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\r\n  <div class=\"container-fluid\" style=\"margin-top: 70px; \">\r\n<form class=\"form-horizontal\" [formGroup]=\"angForm\" novalidate>\r\n  \r\n  <div>\r\n    <br>\r\n   <h3> Loan Due Pay</h3>\r\n  </div>\r\n  <div class=\"form-group\">\r\n          <label class=\"control-label col-sm-2\" for=\"quantity\">Loan ID</label>\r\n          <div class=\"col-sm-4\">\r\n            <input type=\"number\" class=\"form-control\" name=\"ln_id\" formControlName=\"ln_id\" [(ngModel)]=\"pay_due\" placeholder=\"Enter your Loan Id\">\r\n          </div>\r\n      </div>\r\n\r\n      \r\n        <div *ngIf=\"angForm.controls['ln_id'].valid && angForm.controls['ln_id'].value >= 0 \">\r\n          <div class=\"form-group\">\r\n            <div class=\"col-sm-offset-2 col-sm-10\">\r\n              <button type=\"submit\" class=\"btn btn-default\" (click)=\"submit()\" >Submit</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n      \r\n         \r\n</form>\r\n\r\n\r\n<br>\r\n<center>\r\n<h3>Your Borrowing Details</h3>\r\n<p><b style=\"color:red\">Note :</b> If your due time is expired, Your loan penality amount of 0.01 Ξ will be automatically added to your current installment. </p>\r\n</center>\r\n\r\n\r\n<!--Table-->\r\n<div class=\"scrollable\" style=\"overflow-x:auto;overflow-y:auto;height:600px;background:white\">\r\n<table class=\"table\">\r\n\r\n<!--Table head-->\r\n<thead class=\"mdb-color darken-3\">\r\n    <tr class=\"text-white\">\r\n        \r\n        <th>Loan ID</th>\r\n        <th>Bank Address</th>\r\n        <th>Total Amount</th>\r\n        <th>Settlement</th>\r\n        <th>Next Settlement Time</th>\r\n        <th>Months</th>\r\n        <th>Balance Loan</th>\r\n        <th>Current Installment</th>\r\n\r\n    </tr>\r\n</thead>\r\n<!--Table head-->\r\n\r\n<tbody>\r\n      <tr *ngFor=\"let bank of Loan_get; let i = index\">\r\n        <td>{{ bank.id }}</td>\r\n        <td>{{ bank.lender_add }}</td>\r\n        <td>{{ bank.amt }}</td>\r\n        <td>{{ bank.settlement }}</td>\r\n        <td>{{ bank.next_settle_time }}</td>\r\n        <td>{{ bank.month }}</td>\r\n        <td>{{ bank.bal_loan }}</td>\r\n        <td>{{ bank.current_inst }}</td>\r\n\r\n      </tr>\r\n    </tbody>\r\n</table>\r\n<!--Table-->\r\n</div>\r\n</div>\r\n\r\n<ngx-spinner\r\nbdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\nloadingText=\"Loading...\"\r\ntype=\"ball-scale-multiple\">\r\n</ngx-spinner>\r\n\r\n</main>\r\n"

/***/ }),

/***/ "../../../../../src/app/loan-due/loan-due.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  border: 1px solid #ddd; }\n\nth, td {\n  text-align: left;\n  padding: 8px; }\n\ntr:nth-child(even) {\n  background-color: #f2f2f2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loan-due/loan-due.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanDueComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contract_service__ = __webpack_require__("../../../../../src/app/contract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoanDueComponent = /** @class */ (function () {
    function LoanDueComponent(cs, spin, router, fb) {
        this.cs = cs;
        this.spin = spin;
        this.router = router;
        this.fb = fb;
        this.Loan_get = [];
        this.createForm();
    }
    LoanDueComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            ln_id: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
        });
    };
    LoanDueComponent.prototype.ngOnInit = function () {
        // // to check when user get any loan
        //   let count = 0;
        //   this.cs.loan_get_count().then(game =>{
        var _this = this;
        //     game.forEach(item => {
        //       this.cs.get_loan_id(item).then(add =>{
        //         this.cs.loan_detail(add).then(obj => 
        //         {
        //           if(parseInt(obj[5]) < parseInt(obj[7]))
        //           count++;
        //         });
        //       })
        //     });
        //   })
        //   if (count == 0)
        //   {
        //     alert("You have not borrow any loan");
        //     this.router.navigate(["profile"]);
        //   }
        this.cs.basicfunctions();
        this.cs.loan_get_count().then(function (game) {
            game.forEach(function (item) {
                _this.cs.get_loan_id(item).then(function (add) {
                    _this.cs.loan_detail(add).then(function (obj) {
                        if (parseInt(obj[5]) < parseInt(obj[7]))
                            _this.Loan_get.push({ "id": add, "lender_add": obj[1], "amt": obj[4] + " Ξ", "settlement": obj[5], "next_settle_time": obj[6], "month": obj[7], "bal_loan": obj[8] + " Ξ", "current_inst": obj[11] + " Ξ" });
                    });
                });
            });
        });
    };
    LoanDueComponent.prototype.submit = function () {
        var _this = this;
        this.spin.show();
        var meta = this.cs;
        meta.pay_due(this.pay_due).then(function (res) {
            console.log("Hash :" + res);
            if (res === 0) {
                _this.spin.hide();
            }
            else
                meta.hash(res).then(function (result) {
                    console.log("result : " + result);
                    _this.spin.hide();
                });
        });
    };
    LoanDueComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loan-due',
            template: __webpack_require__("../../../../../src/app/loan-due/loan-due.component.html"),
            styles: [__webpack_require__("../../../../../src/app/loan-due/loan-due.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__contract_service__["a" /* ContractService */], __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], LoanDueComponent);
    return LoanDueComponent;
}());



/***/ }),

/***/ "../../../../../src/app/loan-fd.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanFdGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contract_service__ = __webpack_require__("../../../../../src/app/contract.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoanFdGuard = /** @class */ (function () {
    function LoanFdGuard(cs, router) {
        this.cs = cs;
        this.router = router;
    }
    LoanFdGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        var count = 0;
        this.cs.loan_get_count().then(function (game) {
            game.forEach(function (item) {
                _this.cs.get_loan_id(item).then(function (add) {
                    _this.cs.loan_detail(add).then(function (obj) {
                        if (parseInt(obj[5]) < parseInt(obj[7]))
                            count++;
                    });
                });
            });
        });
        if (count == 0) {
            alert("You have not borrow any loan");
            this.router.navigate(["profile"]);
        }
        else {
            return true;
        }
    };
    LoanFdGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__contract_service__["a" /* ContractService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoanFdGuard);
    return LoanFdGuard;
}());



/***/ }),

/***/ "../../../../../src/app/loan-lending/loan-lending.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<main>\r\n  <div class=\"container-fluid\" style=\"margin-top: 70px; \">\r\n\r\n      \r\n\r\n\r\n          <div class=\"col-sm-12\" >\r\n              <div>\r\n                    <br>\r\n                    <center><h3>Your Lending Details</h3></center>\r\n                    \r\n                  <br>\r\n              </div>\r\n\r\n\r\n\r\n\r\n<!--Table-->\r\n<div class=\"scrollable\" style=\"overflow-x:auto;overflow-y:auto;height:80%;background:white\">\r\n<table class=\"table  \">\r\n\r\n  <!--Table head-->\r\n  <thead class=\"mdb-color darken-3\">\r\n      <tr class=\"text-white\">\r\n\r\n        <th>Id</th>\r\n        <th>Borrower Address</th>\r\n        <th>Token Address</th>\r\n        <th>Total Amount</th>\r\n        <th>Settlement Count</th>\r\n        <th>Next Settlement Time</th>\r\n        <th>Balance Loan</th>\r\n        <th>Months</th>\r\n\r\n      </tr>\r\n  </thead>\r\n  <!--Table head-->\r\n\r\n  \r\n  <tbody>\r\n      <tr *ngFor=\"let bank of Loan_pro; let i = index\">\r\n          <td>{{ bank.id }}</td>\r\n          <td>{{ bank.borrower_add }}</td>\r\n          <td>{{ bank.token_add }}</td>\r\n          <td>{{ bank.amt }}</td>\r\n          <td>{{ bank.settlement }}</td>\r\n          <td>{{ bank.next_settle_time }}</td>\r\n          <td>{{ bank.bal_loan }}</td>\r\n          <td>{{ bank.month }}</td>\r\n\r\n        </tr>\r\n        </tbody>\r\n</table>\r\n</div>\r\n<!--Table-->\r\n\r\n          </div>\r\n        </div>\r\n        <ngx-spinner\r\n        bdColor=\"rgba(51,51,51,0.8)\"\r\n        size=\"medium\"\r\n        color=\"#fff\"\r\n        loadingText=\"Loading...\"\r\n        type=\"ball-scale-multiple\">\r\n      </ngx-spinner>\r\n\r\n</main>\r\n"

/***/ }),

/***/ "../../../../../src/app/loan-lending/loan-lending.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  border: 1px solid #ddd; }\n\nth, td {\n  text-align: left;\n  padding: 8px; }\n\ntr:nth-child(even) {\n  background-color: #f2f2f2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loan-lending/loan-lending.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanLendingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contract_service__ = __webpack_require__("../../../../../src/app/contract.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoanLendingComponent = /** @class */ (function () {
    function LoanLendingComponent(cs, router) {
        this.cs = cs;
        this.router = router;
        this.Loan_pro = [];
    }
    LoanLendingComponent.prototype.ngOnInit = function () {
        // // to check when user lend any loan
        // let count = 0;
        // this.cs.loan_pro_count().then(game =>{
        var _this = this;
        //   game.forEach(item => {
        //     this.cs.pro_loan_id(item).then(add =>{
        //       this.cs.loan_detail(add).then(obj => 
        //       {
        //         if(parseInt(obj[5]) < parseInt(obj[7]))
        //         count++;
        //       });
        //     })
        //   });
        // })
        // if (count == 0)
        // {
        //   alert("You have not Lend any loan");
        //   this.router.navigate(["profile"]);
        // }
        // // ------------------------------------------
        this.cs.basicfunctions();
        this.cs.loan_pro_count().then(function (game) {
            game.forEach(function (item) {
                _this.cs.pro_loan_id(item).then(function (add) {
                    _this.cs.loan_detail(add).then(function (obj) {
                        if (parseInt(obj[5]) < parseInt(obj[7]))
                            _this.Loan_pro.push({ "id": add, "borrower_add": obj[2], "token_add": obj[3], "amt": obj[4] + " Ξ", "settlement": obj[5], "next_settle_time": obj[6], "month": obj[7], "bal_loan": obj[8] + " Ξ", "current_inst": obj[9] + " Ξ" });
                    });
                });
            });
        });
    };
    LoanLendingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loan-lending',
            template: __webpack_require__("../../../../../src/app/loan-lending/loan-lending.component.html"),
            styles: [__webpack_require__("../../../../../src/app/loan-lending/loan-lending.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__contract_service__["a" /* ContractService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoanLendingComponent);
    return LoanLendingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/loan-req/loan-req.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<main>\r\n  <div class=\"container-fluid\" style=\"margin-top: 70px; \">\r\n\r\n      <div class>\r\n          <form class=\"form-horizontal\"  [formGroup]=\"angForm\" novalidate>\r\n            <div>\r\n              <br>\r\n             <h3>Loan Request</h3>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label col-sm-2\" for=\"token_add\">Token Address:</label>\r\n              <div class=\"col-sm-4\">\r\n                <input type=\"text\" class=\"form-control\" name=\"token_add\" formControlName=\"token_add\" [(ngModel)]=\"token_address\" placeholder=\"Enter Token Address\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label col-sm-2\" for=\"bank_add\">Bank Address</label>\r\n              <div class=\"col-sm-4\">\r\n                <input type=\"text\" class=\"form-control\" name=\"bank_add\" formControlName=\"bank_add\" [(ngModel)]=\"bank_address\" placeholder=\"Enter Bank Address\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"control-label col-sm-2\" for=\"tok_count\">Token Count</label>\r\n                <div class=\"col-sm-4\">\r\n                  <input type=\"number\" class=\"form-control\" name=\"tok_count\" formControlName=\"tok_count\" [(ngModel)]=\"token_count\" placeholder=\"Enter Token Count \">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                  <label class=\"control-label col-sm-2\" for=\"loan_time\">Loan Period</label>\r\n                  <div class=\"col-sm-4\">\r\n                    <input type=\"number\" class=\"form-control\" name=\"loan_time\" formControlName=\"loan_time\" [(ngModel)]=\"time\" placeholder=\"Enter Period(in yrs)\">\r\n                  </div>\r\n              </div>\r\n    \r\n              <div *ngIf=\"angForm.controls['token_add'].valid && angForm.controls['bank_add'].valid\">\r\n                <div *ngIf=\"angForm.controls['tok_count'].valid && angForm.controls['tok_count'].value > 0\">\r\n                  <div *ngIf=\"angForm.controls['loan_time'].valid && angForm.controls['loan_time'].value > 0\">\r\n                    <div class=\"form-group\">\r\n                      <div class=\"col-sm-offset-2 col-sm-10\">\r\n                        <button type=\"submit\" class=\"btn btn-default\" (click)=\"submit()\" >Request for loan</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n          </form>\r\n      </div>\r\n  \r\n\r\n\r\n    <br>\r\n    <center><h3>Bank details</h3></center>\r\n    <!--Table-->\r\n    <div class=\"scrollable\" style=\"overflow-x:auto;overflow-y:auto;height:400px;background:white\">\r\n    <table class=\"table\">\r\n\r\n        <!--Table head-->\r\n        <thead class=\"mdb-color darken-3\">\r\n            <tr class=\"text-white\">\r\n                <th>Bank Address</th>\r\n                <th>Bank Name</th>\r\n                <th>Balance</th>\r\n                <th>Loan int</th>\r\n            </tr>\r\n        </thead>\r\n        <!--Table head-->\r\n\r\n        <!--Table body-->\r\n        <tbody>\r\n            <tr *ngFor=\"let bank of All_bank2; let i = index\">\r\n                <td>{{ bank.address }}</td>\r\n                <td>{{ bank.bank_name }}</td>\r\n                <td>{{ bank.Bal }}</td>\r\n                <td>{{ bank.Loan_int }}</td>\r\n                \r\n\r\n            </tr>\r\n        </tbody>\r\n        <!--Table body-->\r\n    </table>\r\n  </div>\r\n    <!--Table-->\r\n</div>\r\n\r\n<ngx-spinner\r\nbdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\nloadingText=\"Loading...\"\r\ntype=\"ball-scale-multiple\">\r\n</ngx-spinner>\r\n\r\n</main>\r\n"

/***/ }),

/***/ "../../../../../src/app/loan-req/loan-req.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  border: 1px solid #ddd; }\n\nth, td {\n  text-align: left;\n  padding: 8px; }\n\ntr:nth-child(even) {\n  background-color: #f2f2f2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loan-req/loan-req.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanReqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contract_service__ = __webpack_require__("../../../../../src/app/contract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoanReqComponent = /** @class */ (function () {
    function LoanReqComponent(cs, spin, fb) {
        this.cs = cs;
        this.spin = spin;
        this.fb = fb;
        this.All_bank2 = [];
        this.createForm();
    }
    LoanReqComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            token_add: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            bank_add: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            tok_count: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            loan_time: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
    };
    LoanReqComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cs.basicfunctions();
        this.cs.getAccount().then(function (address) { return _this.address = address; });
        this.cs.getUserBalance().then(function (balance) { return _this.balance = balance; });
        this.cs.bank_count().then(function (game) {
            game.forEach(function (item) {
                _this.cs.bank_address(item).then(function (add) {
                    if (add != _this.address)
                        _this.cs.bank_detail(add).then(function (obj) {
                            if (obj[2] && add != _this.address)
                                _this.All_bank2.push({ "address": add, "bank_name": obj[0], "Bal": obj[1] + " Ξ", "Loan_int": obj[3] + " %", "Fix_dep_int": obj[4] + " %" });
                        });
                });
            });
        });
    };
    LoanReqComponent.prototype.submit = function () {
        var _this = this;
        this.spin.show();
        var meta = this.cs;
        meta.isregister().then(function (result) {
            if (result == true)
                meta.loan(_this.token_address, _this.bank_address, _this.token_count, _this.time).then(function (res) {
                    console.log("Hash :" + res);
                    if (res === 0) {
                        _this.spin.hide();
                    }
                    else
                        meta.hash(res).then(function (result) {
                            console.log("result : " + result);
                            _this.spin.hide();
                        });
                });
            else
                alert("You have not Register");
        });
    };
    LoanReqComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loan-req',
            template: __webpack_require__("../../../../../src/app/loan-req/loan-req.component.html"),
            styles: [__webpack_require__("../../../../../src/app/loan-req/loan-req.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__contract_service__["a" /* ContractService */], __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], LoanReqComponent);
    return LoanReqComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\r\n  <div class=\"container-fluid\" style=\"margin-top: 70px; \">\r\n    <div>\r\n        <form class=\"form-horizontal\" >  \r\n          <div class=\"form-group\" >\r\n              <h1>Account Details</h1><br>\r\n              <label class=\"control-label col-sm-2\" for=\"address\"><h4>Account Address : </h4></label>{{address}}<br>\r\n          \r\n              <label class=\"control-label col-sm-2\" for=\"balance\"><h4>Account Balance : </h4></label>{{balance}}  Ξ <br>\r\n          \r\n              <label class=\"control-label col-sm-2\" for=\"Status\"><h4>Account Status : </h4></label>{{status}} <br>\r\n          \r\n              <label class=\"control-label col-sm-2\" for=\"pending\"><h4>Loan due Pending : </h4></label>{{temp_bending_count}}<br>\r\n              \r\n              <label class=\"control-label col-sm-2\" for=\"exp\"><h4>Loan due Expired : </h4></label>{{temp_exp_count}}<br>\r\n\r\n\r\n              \r\n            </div>\r\n          </form>\r\n\r\n        <br>\r\n\r\n        <div class=\"form-group\">\r\n          <div class=\"col-sm-offset-2 col-sm-10\">\r\n            <button type=\"submit\" class=\"btn btn-default\" (click)=\"submit()\" >De-Register Your Account </button>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- <form class=\"form-horizontal\" >\r\n          <div>\r\n            <p>Bank  Name<p>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"col-sm-4\">\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" id=\"amount\">\r\n            </div>\r\n          </div>\r\n        </form>\r\n\r\n        <form class=\"form-horizontal\" >\r\n          <div>\r\n            <p>Loan Due Pending<p>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"col-sm-4\">\r\n              <input type=\"text\" class=\"form-control\" id=\"amount\" >\r\n            </div>\r\n          </div>\r\n        </form>\r\n\r\n        <form class=\"form-horizontal\" >\r\n          <div>\r\n            <p>Loan Due Expire<p>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"col-sm-4\">\r\n              <input type=\"text\" class=\"form-control\" id=\"amount\" placeholder=\"Enter Amount\">\r\n            </div>\r\n          </div>\r\n        </form> -->\r\n    </div>\r\n    <br>\r\n\r\n    <center><h1>All Registered Bank details</h1></center>\r\n    <div class=\"scrollable\" style=\"overflow-x:auto;overflow-y:auto;height:400px;background:white\">\r\n      <!-- <div> -->\r\n    <table class=\"table\">\r\n\r\n        <!--Table head-->\r\n        <thead class=\"mdb-color darken-3\">\r\n            <tr class=\"text-white\">\r\n                \r\n              <th>Bank Address</th>\r\n              <th>Bank Name</th>\r\n              <th>Token Count</th>\r\n              <th>Balance</th>\r\n              <th>Lend Amt.</th>\r\n              <th>Borrow Amt.</th>\r\n              <th>Fixed Amt. Bank</th>\r\n              <th>Fixed Amt. user</th>\r\n              <th>Loan Int.</th>\r\n              <th>Fix_Dep Int.</th>\r\n\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let bank of My_Bank ; let i = index\" bgcolor=\"lightblue\">\r\n              <td>{{ bank.address }}</td>\r\n              <td>{{ bank.broker_name }}</td>\r\n              <td>{{ bank.token_count }}</td>\r\n              <td>{{ bank.Bal }}</td>\r\n              <td>{{ bank.lend_amt }}</td>\r\n              <td>{{ bank.borrow_amt }}</td>\r\n              <td>{{ bank.fix_amt_bank }}</td>\r\n              <td>{{ bank.fix_amt_user }}</td>\r\n              <td>{{ bank.Loan_int }}</td>\r\n              <td>{{ bank.Fix_dep_int }}</td>\r\n            </tr>\r\n\r\n          <tr *ngFor=\"let bank of All_bank; let i = index\">\r\n            <td>{{ bank.address }}</td>\r\n            <td>{{ bank.broker_name }}</td>\r\n            <td>{{ bank.token_count }}</td>\r\n            <td>{{ bank.Bal }}</td>\r\n            <td>{{ bank.lend_amt }}</td>\r\n            <td>{{ bank.borrow_amt }}</td>\r\n            <td>{{ bank.fix_amt_bank }}</td>\r\n            <td>{{ bank.fix_amt_user }}</td>\r\n            <td>{{ bank.Loan_int }}</td>\r\n            <td>{{ bank.Fix_dep_int }}</td>\r\n          </tr>\r\n\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n  </div>\r\n  <ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  loadingText=\"Loading...\"\r\n  type=\"ball-scale-multiple\">\r\n</ngx-spinner>\r\n</main>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  border: 1px solid #ddd; }\n\nth, td {\n  text-align: left;\n  padding: 8px; }\n\ntr:nth-child(even) {\n  background-color: #f2f2f2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contract_service__ = __webpack_require__("../../../../../src/app/contract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(cs, spin) {
        this.cs = cs;
        this.spin = spin;
        this.address = "Hai";
        this.All_bank = [];
        this.My_Bank = [];
        this.temp_bending_count = 0;
        this.temp_exp_count = 0;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cs.basicfunctions();
        this.cs.isregister().then(function (result) { if (result == false)
            _this.status = "Not Registered";
        else
            _this.status = "Registered"; });
        // this.cs.getAccount().then(function(add){ console.log("add "+add); this.address = add})
        this.cs.getAccount().then(function (add) { return _this.address = add; });
        this.cs.getUserBalance().then(function (bal) { return _this.balance = bal; });
        var meta = this.cs;
        var meta1 = this;
        var accountInterval = setInterval(function () {
            meta.getUserBalance().then(function (bal) {
                if (bal !== meta1.balance) {
                    meta1.balance = bal;
                }
            });
        }, 10000);
        // console.log("Address " + this.address);
        // My Bank Registered Details
        // this.cs.getAccount().then(add => {
        //   this.cs.bank_detail(add).then(obj => {
        //     console.log("Address 1 " + this.address);
        //     if (obj[2])
        //       this.My_Bank.push({ "address": this.address, "broker_name": obj[0], "Bal": obj[1] + " Ξ", "token_count": obj[5], "lend_amt": obj[7] + " Ξ", "fix_amt_bank": obj[8] + " Ξ", "fix_amt_user": obj[9] + " Ξ", "borrow_amt": obj[6] + " Ξ", "Loan_int": obj[3] + " %", "Fix_dep_int": obj[4] + " %"})
        //   });
        // })
        // Other's Registered Details
        this.cs.bank_count().then(function (game) {
            game.forEach(function (item) {
                _this.cs.bank_address(item).then(function (add) {
                    // if (add != this.address)
                    _this.cs.bank_detail(add).then(function (obj) {
                        if (obj[2])
                            if (add != _this.address)
                                _this.All_bank.push({ "address": add, "broker_name": obj[0], "Bal": obj[1] + " Ξ", "token_count": obj[5], "lend_amt": obj[7] + " Ξ", "fix_amt_bank": obj[8] + " Ξ", "fix_amt_user": obj[9] + " Ξ", "borrow_amt": obj[6] + " Ξ", "Loan_int": obj[3] + " %", "Fix_dep_int": obj[4] + " %" });
                            else
                                _this.My_Bank.push({ "address": add, "broker_name": obj[0], "Bal": obj[1] + " Ξ", "token_count": obj[5], "lend_amt": obj[7] + " Ξ", "fix_amt_bank": obj[8] + " Ξ", "fix_amt_user": obj[9] + " Ξ", "borrow_amt": obj[6] + " Ξ", "Loan_int": obj[3] + " %", "Fix_dep_int": obj[4] + " %" });
                    });
                });
            });
        });
        // function fun() {
        //   console.log(" Bank Address " + this.address);
        // }
        // fun();
        // this.cs.getAccount().then(address => this.address = address)
        // this.cs.getUserBalance().then(balance => this.balance = balance)
        // this.cs.bank_count().then(game =>{
        //   game.forEach(item => {
        //     this.cs.bank_detail(item).then(obj => {
        //       console.log("Obj "+obj);
        //       this.total_game.push({"address":obj[10],"broker_name":obj[0],"Bal":obj[1]+" Eth","Loan_int":obj[3],"Fix_dep_int":obj[4]})
        //     });
        //   });
        // })
        // this.cs.tok_bal(0xba14651a643d6c4856c66ae1271411727e42a486).then(count =>{alert("Result :"+count)})
        this.cs.loan_get_count().then(function (game) {
            game.forEach(function (item) {
                _this.cs.get_loan_id(item).then(function (add) {
                    _this.cs.loan_detail(add).then(function (obj) {
                        var time = Math.round((new Date()).getTime() / 1000);
                        if (obj[8].toNumber() == 0)
                            return;
                        if (time >= (parseInt(obj[10]) - 60)) {
                            if (((parseInt(obj[10]) - 60) <= time) && (time <= parseInt(obj[10]))) {
                                _this.temp_bending_count++;
                            }
                            else {
                                _this.temp_exp_count++;
                            }
                        }
                        // console.log("Bending : "+this.temp_bending_count);
                        // console.log("Expired : "+this.temp_exp_count);
                    });
                });
            });
        });
    };
    ProfileComponent.prototype.submit = function () {
        var _this = this;
        this.spin.show();
        var meta = this.cs;
        meta.isregister().then(function (result) {
            if (result == true)
                meta.deregister().then(function (res) {
                    console.log("Hash :" + res);
                    if (res === 0) {
                        _this.spin.hide();
                    }
                    else
                        meta.hash(res).then(function (result) {
                            console.log("result : " + result);
                            _this.spin.hide();
                        });
                });
            else
                alert("You have not registered");
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__contract_service__["a" /* ContractService */], __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__["NgxSpinnerService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<form >\r\n  <p class=\"h5 text-center mb-4\">Sign in</p>\r\n\r\n  <div class=\"md-form\">\r\n    <i class=\"fa fa-envelope prefix grey-text\"></i>\r\n    <input type=\"text\" formControlName=\"defaultFormEmail\" id=\"defaultForm-email\" class=\"form-control\" mdbInputDirective>\r\n    <label for=\"defaultForm-email\">Your email</label>\r\n  </div>\r\n\r\n  <div class=\"md-form\">\r\n    <i class=\"fa fa-lock prefix grey-text\"></i>\r\n    <input type=\"password\" formControlName=\"defaultFormPass\" id=\"defaultForm-pass\" class=\"form-control\" mdbInputDirective>\r\n    <label for=\"defaultForm-pass\">Your password</label>\r\n  </div>\r\n\r\n  <div class=\"text-center\">\r\n    <input type=\"submit\" class=\"btn btn-default waves-light\" mdbWavesEffect value=\"Login\">\r\n  </div>\r\n</form>-->\r\n<main>\r\n  <div class=\"container-fluid\" style=\"margin-top: 70px; \">\r\n\r\n          <div class>\r\n              <form class=\"form-horizontal\" [formGroup]=\"angForm\" novalidate >\r\n                <div>\r\n                 <h3>Bank Register Form</h3>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label col-sm-3\" for=\"productname\">Bank Name:</label>\r\n                  <div class=\"col-sm-4\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"_bankname\" [(ngModel)]=\"bankname\" formControlName=\"_bankname\" placeholder=\"Enter Bank Name\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label col-sm-3\" for=\"quantity\">Loan Interst (Only in 1 to 100)</label>\r\n                  <div class=\"col-sm-4\">\r\n                    <input type=\"number\" class=\"form-control\" name=\"_lnint\" [(ngModel)]=\"lnint\" formControlName=\"_lnint\" placeholder=\"Enter ln int\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label col-sm-3\" for=\"brand\">Fixed Deposit Interst (Only in 1 to 100)</label>\r\n                  <div class=\"col-sm-4\">\r\n                    <input type=\"number\" class=\"form-control\" name=\"_fdint\"  [(ngModel)]=\"fdint\" formControlName=\"_fdint\" placeholder=\"Enter Fd Interst\">\r\n                  </div>\r\n                </div>\r\n                \r\n                <div *ngIf=\"angForm.controls['_bankname'].valid \">\r\n                  <div *ngIf=\"angForm.controls['_lnint'].valid && angForm.controls['_lnint'].value > 0 && angForm.controls['_lnint'].value <= 100\">\r\n                    <div *ngIf=\"angForm.controls['_fdint'].valid && angForm.controls['_fdint'].value > 0 && angForm.controls['_fdint'].value <= 100\">\r\n                      <div class=\"form-group\">\r\n                        <div class=\"col-sm-offset-2 col-sm-10\">\r\n                          <button type=\"submit\" class=\"btn btn-default\" (click)=\"submit()\" >Submit</button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n                \r\n              </form>\r\n          </div>\r\n      </div>\r\n\r\n\r\n        <ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  loadingText=\"Loading...\"\r\n  type=\"ball-scale-multiple\">\r\n</ngx-spinner>\r\n  </main>\r\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contract_service__ = __webpack_require__("../../../../../src/app/contract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(cs, spin, fb) {
        this.cs = cs;
        this.spin = spin;
        this.fb = fb;
        this.createForm();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.cs.basicfunctions();
    };
    RegisterComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            _bankname: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            _lnint: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            _fdint: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
    };
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        this.spin.show();
        var meta = this.cs;
        meta.isregister().then(function (result) {
            if (result == false)
                meta.register(_this.bankname, _this.lnint, _this.fdint).then(function (res) {
                    console.log("Hash :" + res);
                    if (res === 0) {
                        _this.spin.hide();
                    }
                    else
                        meta.hash(res).then(function (result) {
                            console.log("result : " + result);
                            _this.spin.hide();
                        });
                });
            else
                alert("You have registered already");
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__contract_service__["a" /* ContractService */], __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reguser.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReguserGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contract_service__ = __webpack_require__("../../../../../src/app/contract.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReguserGuard = /** @class */ (function () {
    function ReguserGuard(cs, router) {
        this.cs = cs;
        this.router = router;
    }
    ReguserGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.cs.isregister().then(function (result) {
            if (result) {
                // console.log("You have already Registered")  
                _this.router.navigate(["profile"]);
            }
            else {
                // console.log("You have not Registered")   
                return true;
            }
        });
    };
    ReguserGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__contract_service__["a" /* ContractService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], ReguserGuard);
    return ReguserGuard;
}());



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