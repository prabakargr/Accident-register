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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-hospital/add-hospital.component.css":
/*!*********************************************************!*\
  !*** ./src/app/add-hospital/add-hospital.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-select-sm {\r\n    height: calc(1.8125rem + 16px) !important;\r\n}\r\n.input_AR{\r\n    padding: 21px 8px\r\n    }\r\n.btn_Cancel{\r\n        margin-right: 1rem;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWhvc3BpdGFsL2FkZC1ob3NwaXRhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSTtJQUNBO0FBQ0E7UUFDSSxrQkFBa0I7SUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hZGQtaG9zcGl0YWwvYWRkLWhvc3BpdGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLXNlbGVjdC1zbSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMS44MTI1cmVtICsgMTZweCkgIWltcG9ydGFudDtcclxufVxyXG4uaW5wdXRfQVJ7XHJcbiAgICBwYWRkaW5nOiAyMXB4IDhweFxyXG4gICAgfVxyXG4gICAgLmJ0bl9DYW5jZWx7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/add-hospital/add-hospital.component.html":
/*!**********************************************************!*\
  !*** ./src/app/add-hospital/add-hospital.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n    <!-- Breadcrumbs-->\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        Add Hospital\n      </li>\n    </ol>\n\n    <div class=\"card  mx-auto mt-5\">\n        <div class=\"card-body\">\n          <form #createHospitalForm=\"ngForm\" (ngSubmit)='createHospital(createHospitalForm.value);createHospitalForm.reset()'>\n            <div class=\"form-group\">\n              <div class=\"form-row\">\n                <!-- <div class=\"col-lg-3 col-md-6\">\n                  <div class=\"form-group\">\n                    <label for=\"formGroupExampleInput\">Hospital ID</label>\n                    <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" readonly [(ngModel)]=\"uniqueNumber\" placeholder=\"\"\n                    name=\"hospitalId\" #hospitalId=\"ngModel\" ngModel required>\n                   <div *ngIf=\"hospitalId.errors && (hospitalId.touched|| hospitalId.dirty)\" class=\"alert text-danger\">\n                      <div [hidden]=\"!hospitalId.errors.required\">\n                          *hospital ID required\n                      </div>\n                  </div>\n                  </div>\n                </div> -->\n                <div class=\"col-lg-3 col-md-6\">\n                  <div class=\"form-group\">\n                    <label for=\"formGroupExampleInput\">Hospital Number</label>\n                    <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"\"\n                    name=\"hospitalNumber\" #hospitalNumber=\"ngModel\" ngModel required>\n                  <div *ngIf=\"hospitalNumber.errors && (hospitalNumber.touched|| hospitalNumber.dirty)\" class=\"alert text-danger\">\n                      <div [hidden]=\"!hospitalNumber.errors.required\">\n                          *hospitalNumber required\n                      </div>\n                  </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6\">\n                  <div class=\"form-group\">\n                    <label for=\"formGroupExampleInput\">Select District</label>\n                    <select name=\"district\" class=\"form-control\" #district=\"ngModel\" ngModel required> \n                      <option value=\"\" disabled>Choose ...</option>\n                      <option *ngFor=\"let district of districts\" value=\"{{district}}\">{{district}}</option>\n                      </select> \n                      <div *ngIf=\"district.errors && (district.touched|| district.dirty)\" class=\"alert text-danger\">\n                        <div [hidden]=\"!district.errors.required\">\n                            *district required\n                        </div>\n                    </div>\n                </div>\n              </div>\n              <div class=\"col-lg-3 col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"formGroupExampleInput\">Hospital Type</label>\n                  <select name=\"hospitalType\" class=\"form-control\"  #hospitalType=\"ngModel\" ngModel required>\n                    <option value=\"\" disabled>Choose ...</option>\n                    <option value=\"MCH\">MCH</option>\n                    <option value=\"DHQH\">DHQH</option>\n                    <option value=\"Taluk\">Taluk</option>\n                    <option value=\"Private\">Private</option>\n                  </select>\n                  <div *ngIf=\"hospitalType.errors && (hospitalType.touched|| hospitalType.dirty)\" class=\"alert text-danger\">\n                      <div [hidden]=\"!hospitalType.errors.required\">\n                          *hospitalType required\n                      </div>\n                  </div> \n              </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"formGroupExampleInput\">Hospital Directorate</label>\n                <select name=\"hospitalDirectorate\" id=\"select\" class=\"form-control\"  #hospitalDirectorate=\"ngModel\" ngModel required>\n                  <option value=\"\" disabled>Choose ...</option>\n                  <option value=\"DMS\">DMS</option>\n                  <option value=\"DME\">DME</option>\n                  <option value=\"Non Govt\">Non Govt</option>\n                </select>\n                <div *ngIf=\"hospitalDirectorate.errors && (hospitalDirectorate.touched|| hospitalDirectorate.dirty)\" class=\"alert text-danger\">\n                    <div [hidden]=\"!hospitalDirectorate.errors.required\">\n                        *hospitalDirectorate required\n                    </div>\n                </div> \n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput\">Hospital Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"\"\n              name=\"hospitalName\" #hospitalName=\"ngModel\" ngModel required>\n                   <div *ngIf=\"hospitalName.errors && (hospitalName.touched|| hospitalName.dirty)\" class=\"alert text-danger\">\n                      <div [hidden]=\"!hospitalName.errors.required\">\n                          *hospitalName required\n                      </div>\n                  </div>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput\">Email</label>\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"\"\n              name=\"username\" #Username=\"ngModel\" ngModel required>\n                   <div *ngIf=\"Username.errors && (Username.touched|| Username.dirty)\" class=\"alert text-danger\">\n                      <div [hidden]=\"!Username.errors.required\">\n                          *Email required\n                      </div>\n                  </div>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput\">Password</label>\n              <input type=\"password\"  id=\"formGroupExampleInput\" placeholder=\"\"\n              name=\"password\" class=\"form-control\"\n              validateEqual=\"Password\" reverse=\"true\"  #password=\"ngModel\" ngModel required>\n              <div *ngIf=\"password.errors && (password.touched|| password.dirty)\" class=\"alert text-danger\">\n                  <div [hidden]=\"!password.errors.required\">\n                      *password required\n                  </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput\">Confirm Password</label>\n              <input type=\"password\" id=\"formGroupExampleInput\" placeholder=\"\"\n               name=\"confirmPassword\"  class=\"form-control\"\n                  validateEqual=\"password\" reverse=\"false\"  #confirmPassword=\"ngModel\" ngModel required>\n                  <div [hidden]=\"confirmPassword.valid || (confirmPassword.pristine && confirmPassword.untouched)\" class=\"alert text-danger\">\n                      * Password mismatch\n                    </div>\n            </div>\n          </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\"></div>\n                <div class=\"col-md-6 text-right\">\n                  <button type=\"button\" class=\"btn btn-danger btn_Cancel\" (click)=\"resetForm(createHospitalForm.reset())\"><i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i>\n                    cancel</button>\n                  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!createHospitalForm.form.valid\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i>submit</button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n    </div>\n\n    <ngx-spinner [visible]=\"showSpinner\" [config]=\"spinnerConfig\"></ngx-spinner>\n"

/***/ }),

/***/ "./src/app/add-hospital/add-hospital.component.ts":
/*!********************************************************!*\
  !*** ./src/app/add-hospital/add-hospital.component.ts ***!
  \********************************************************/
/*! exports provided: AddHospitalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHospitalComponent", function() { return AddHospitalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hardpool_ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hardpool/ngx-spinner */ "./node_modules/@hardpool/ngx-spinner/fesm5/hardpool-ngx-spinner.js");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/network */ "./src/app/services/network.ts");







var AddHospitalComponent = /** @class */ (function () {
    function AddHospitalComponent(dataService, http) {
        this.dataService = dataService;
        this.http = http;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.districts = [
            'Test',
            'Chennai',
            'Cuddalore',
            'Kancheepuram',
            'Thiruvallur',
            'Thiruvannamalai',
            'Vellore',
            'Villuppuram',
            'Kallakurichi',
            'Dharmapuri',
            'Krishnagiri',
            'Namakkal',
            'Salem',
            'Erode',
            'Thiruppur',
            'Coimbatore',
            'Nilgiris',
            'Madurai',
            'Theni',
            'Dindigul',
            'Sivagangai',
            'Virudhunagar',
            'Ramanathapuram',
            'Thirunelveli',
            'Thoothukudi',
            'Kanyakumari',
            'Pudhukkottai',
            'Ariyalur',
            'Nagapattinam',
            'Perambalur',
            'Thanjavur',
            'Thiruchirappalli',
            'Karur',
            'Thiruvarur'
        ];
    }
    AddHospitalComponent.prototype.ngOnInit = function () {
        this.spinnerConfig = {
            placement: _hardpool_ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["SPINNER_PLACEMENT"].block_window,
            animation: _hardpool_ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["SPINNER_ANIMATIONS"].spin_3,
            size: "4rem",
            color: "#1574b3"
        };
        this.generateUniqueId();
    };
    //Generate Unique Id
    AddHospitalComponent.prototype.generateUniqueId = function () {
        this.uniqueNumber = "HP" + String(Date.now() + Math.floor(Math.random() * 10000));
    };
    AddHospitalComponent.prototype.createHospital = function (value) {
        var _this = this;
        this.showSpinner = true;
        var data = {
            isActive: true,
            role: 'hospital'
        };
        var fullDetails = Object.assign({}, value, data);
        console.log(fullDetails);
        this.dataService.postData(this.baseURL + '/api/v1/hospitals/addHospital', fullDetails)
            .subscribe(function (res) {
            _this.generateUniqueId();
            _this.showSpinner = false;
            _this.newHospital = res;
            if (_this.newHospital && _this.newHospital.code == 200) {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                    title: _this.newHospital.status,
                    icon: 'success'
                });
                setTimeout(function () {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default.a.close();
                }, 2000);
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                    title: _this.newHospital.status,
                    icon: 'success'
                });
                setTimeout(function () {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default.a.close();
                }, 3000);
            }
        });
    };
    AddHospitalComponent.prototype.resetForm = function () {
        this.generateUniqueId();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('createHospitalForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddHospitalComponent.prototype, "formHospital", void 0);
    AddHospitalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-hospital',
            template: __webpack_require__(/*! ./add-hospital.component.html */ "./src/app/add-hospital/add-hospital.component.html"),
            styles: [__webpack_require__(/*! ./add-hospital.component.css */ "./src/app/add-hospital/add-hospital.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_network__WEBPACK_IMPORTED_MODULE_6__["NetworkProvider"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AddHospitalComponent);
    return AddHospitalComponent;
}());



/***/ }),

/***/ "./src/app/add-hospital/equal-validator.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/add-hospital/equal-validator.directive.ts ***!
  \***********************************************************/
/*! exports provided: EqualValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualValidator", function() { return EqualValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
// equal-validator.directive.ts



var EqualValidator = /** @class */ (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    EqualValidator_1 = EqualValidator;
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({ validateEqual: false });
        }
        return null;
    };
    var EqualValidator_1;
    EqualValidator = EqualValidator_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return EqualValidator_1; }), multi: true }
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"])('validateEqual')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"])('reverse')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, String])
    ], EqualValidator);
    return EqualValidator;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _app_ar_dashboard_ar_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/ar-dashboard/ar-dashboard.component */ "./src/app/ar-dashboard/ar-dashboard.component.ts");
/* harmony import */ var _app_add_hospital_add_hospital_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/add-hospital/add-hospital.component */ "./src/app/add-hospital/add-hospital.component.ts");
/* harmony import */ var _app_hospital_status_hospital_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/hospital-status/hospital-status.component */ "./src/app/hospital-status/hospital-status.component.ts");
/* harmony import */ var _printpage_printpage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./printpage/printpage.component */ "./src/app/printpage/printpage.component.ts");









var routes = [
    { path: 'login', component: _app_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'printPage', component: _printpage_printpage_component__WEBPACK_IMPORTED_MODULE_8__["PrintpageComponent"] },
    { path: 'landing', component: _app_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"],
        children: [
            { path: 'dashboard', component: _app_ar_dashboard_ar_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["ARDashboardComponent"] },
            { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
            { path: 'addHospital', component: _app_add_hospital_add_hospital_component__WEBPACK_IMPORTED_MODULE_6__["AddHospitalComponent"] },
            { path: 'hospitalStatus', component: _app_hospital_status_hospital_status_component__WEBPACK_IMPORTED_MODULE_7__["HospitalStatusComponent"] },
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<router-outlet></router-outlet>\n    <ngx-spinner [visible]=\"showSpinner\" [config]=\"spinnerConfig\"></ngx-spinner>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hardpool_ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hardpool/ngx-spinner */ "./node_modules/@hardpool/ngx-spinner/fesm5/hardpool-ngx-spinner.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(route) {
        this.route = route;
        this.title = 'AR-Admin';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.checkLocal();
        this.spinnerConfig = {
            placement: _hardpool_ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["SPINNER_PLACEMENT"].block_window,
            animation: _hardpool_ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["SPINNER_ANIMATIONS"].spin_3,
            size: "4rem",
            color: "#1574b3"
        };
    };
    AppComponent.prototype.checkLocal = function () {
        this.showSpinner = true;
        var currentUserDash = JSON.parse(localStorage.getItem('currentUserDash'));
        if (currentUserDash && currentUserDash.token) {
            this.route.navigate(['/landing']);
        }
        else {
            this.route.navigate(['/login']);
        }
        this.showSpinner = false;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_hospital_equal_validator_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-hospital/equal-validator.directive */ "./src/app/add-hospital/equal-validator.directive.ts");
/* harmony import */ var _ngui_datetime_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngui/datetime-picker */ "./node_modules/@ngui/datetime-picker/dist/index.js");
/* harmony import */ var _ngui_datetime_picker__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ngui_datetime_picker__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hardpool_ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @hardpool/ngx-spinner */ "./node_modules/@hardpool/ngx-spinner/fesm5/hardpool-ngx-spinner.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _ar_dashboard_ar_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ar-dashboard/ar-dashboard.component */ "./src/app/ar-dashboard/ar-dashboard.component.ts");
/* harmony import */ var _add_hospital_add_hospital_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-hospital/add-hospital.component */ "./src/app/add-hospital/add-hospital.component.ts");
/* harmony import */ var _hospital_status_hospital_status_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hospital-status/hospital-status.component */ "./src/app/hospital-status/hospital-status.component.ts");
/* harmony import */ var _printpage_printpage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./printpage/printpage.component */ "./src/app/printpage/printpage.component.ts");
/* harmony import */ var _services_share_service_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/share-service.service */ "./src/app/services/share-service.service.ts");
/* harmony import */ var _app_services_network__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../app/services/network */ "./src/app/services/network.ts");
/* harmony import */ var _app_services_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../app/services/interceptor */ "./src/app/services/interceptor.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







 // import validator















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_12__["LandingComponent"],
                _ar_dashboard_ar_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["ARDashboardComponent"],
                _add_hospital_add_hospital_component__WEBPACK_IMPORTED_MODULE_14__["AddHospitalComponent"],
                _hospital_status_hospital_status_component__WEBPACK_IMPORTED_MODULE_15__["HospitalStatusComponent"],
                _add_hospital_equal_validator_directive__WEBPACK_IMPORTED_MODULE_6__["EqualValidator"],
                _printpage_printpage_component__WEBPACK_IMPORTED_MODULE_16__["PrintpageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _ngui_datetime_picker__WEBPACK_IMPORTED_MODULE_7__["NguiDatetimePickerModule"],
                _hardpool_ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]
            ],
            providers: [
                _services_share_service_service__WEBPACK_IMPORTED_MODULE_17__["ShareServiceService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_20__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_20__["HashLocationStrategy"] },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _app_services_interceptor__WEBPACK_IMPORTED_MODULE_19__["HttpInter"],
                    multi: true
                },
                _app_services_network__WEBPACK_IMPORTED_MODULE_18__["NetworkProvider"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/ar-dashboard/ar-dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/ar-dashboard/ar-dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .custom-select-sm {\r\n    height: calc(1.8125rem + 20px) !important;\r\n}\r\n.input_AR{\r\npadding: 24px 8px\r\n} */\r\n.countsOfTables{\r\n    padding-left: 0.7rem\r\n}\r\n.btn-View{\r\n    margin-right: 1rem;\r\n}\r\n/* testing */\r\nexample-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n.example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n.mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXItZGFzaGJvYXJkL2FyLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHO0FBQ0g7SUFDSTtBQUNKO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFHQSxZQUFZO0FBQ1o7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7RUFDYjtBQUVBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FyLWRhc2hib2FyZC9hci1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5jdXN0b20tc2VsZWN0LXNtIHtcclxuICAgIGhlaWdodDogY2FsYygxLjgxMjVyZW0gKyAyMHB4KSAhaW1wb3J0YW50O1xyXG59XHJcbi5pbnB1dF9BUntcclxucGFkZGluZzogMjRweCA4cHhcclxufSAqL1xyXG4uY291bnRzT2ZUYWJsZXN7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuN3JlbVxyXG59XHJcbi5idG4tVmlld3tcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuXHJcbi8qIHRlc3RpbmcgKi9cclxuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1oZWFkZXIge1xyXG4gICAgbWluLWhlaWdodDogNjRweDtcclxuICAgIHBhZGRpbmc6IDhweCAyNHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC10YWJsZSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/ar-dashboard/ar-dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/ar-dashboard/ar-dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <div class=\"container-fluid\" *ngIf=\"currentUserDash.role!=='hospital'\">\n\n      <!-- Breadcrumbs-->\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          Accident Register Dashboard\n        </li>\n      </ol>\n\n      <div class=\"card  mx-auto mt-5\">\n        <div class=\"card-body\">\n          <form >\n            <div class=\"form-group\">\n              <div class=\"form-row\">\n                <!-- <div class=\"col-lg-3 col-md-6\">\n                  <div class=\"form-group\">\n                    <label for=\"formGroupExampleInput\">Select Date</label>\n                    <input name=\"admissionDate\" class=\"form-control\" id=\"formGroupExampleInput\"\n                     placeholder=\"Date\" [(ngModel)]=\"detailsToFind.admissionDate\"\n                     ngui-datetime-picker date-only=\"true\" parse-format=\"YYYY-MM-DD\">\n                  </div>\n                </div> -->\n                <div class=\"col-lg-3 col-md-6\">\n                    <div class=\"form-group\">\n                      <label for=\"formGroupExampleInput\">Select District</label>\n                      <select class=\"form-control\" name=\"district\" [(ngModel)]=\"detailsToFind.district\">\n                        <option value=\"\" disabled>Choose ...</option>\n                        <option *ngFor=\"let district of districts\" value=\"{{district}}\">{{district}}</option>\n                          </select> \n                  </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6\">\n                    <div class=\"form-group\">\n                      <label for=\"formGroupExampleInput\">Hospital Directorate</label>\n                      <select class=\"form-control\" name=\"hospitalDirectorate\" [(ngModel)]=\"detailsToFind.hospitalDirectorate\" (change)=\"findHospitals()\">\n                        <option value=\"\" disabled>Choose ...</option>\n                        <option value=\"DMS\">DMS</option>\n                        <option value=\"DME\">DME</option>\n                        <option value=\"Non Govt\">Non Govt</option>\n                        </select> \n                  </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6\">\n                    <div class=\"form-group\">\n                      <label for=\"formGroupExampleInput\">Select Hospital</label>\n                      <select class=\"form-control\" name=\"hospitalName\" [(ngModel)]=\"detailsToFind.hospitalName\" [ngModelOptions]=\"{standalone: true}\">\n                          <option value=\"\" disabled >Choose</option>\n                          <option value=\"{{hospital._id}}\" *ngFor=\"let hospital of hospitals\">{{hospital.hospitalName}}</option>\n                        </select> \n                  </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6\">\n                  <div class=\"form-group\">\n                    <label for=\"formGroupExampleInput\">Select Date</label>\n                    <input name=\"admissionDate\" class=\"form-control\" id=\"formGroupExampleInput\"\n                     placeholder=\"Date\" [(ngModel)]=\"detailsToFind.admissionDate\" (ngModelChange)=\"findListsAR($event)\"\n                     ngui-datetime-picker date-only=\"true\" parse-format=\"YYYY-MM-DD\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\" *ngIf=\"ArList.length>0\">\n                 <div class=\"col-md-12\">\n                   <label for=\"formGroupExampleInput\">Number of entries :<span class=\"countsOfTables\">{{ArList.length}}</span></label>\n                 </div>\n              </div>\n              <div class=\"row\" *ngIf=\"ArList.length=='0'\">\n                <div class=\"col-md-12\">\n                  <label for=\"formGroupExampleInput\">Number of entries :<span class=\"countsOfTables\">0</span></label>\n                </div>\n             </div>\n              <div class=\"row\" *ngIf=\"ArList.length>0\">\n                <div class=\"col-md-12\">\n                  <table class=\"table table-bordered table-responsive-lg\">\n                    <thead class=\"thead-light\">\n                      <tr>\n                        <th scope=\"col\">#</th>\n                        <th scope=\"col\">AR NUMBER</th>\n                        <th scope=\"col\">NAME</th>\n                        <th scope=\"col\">DATE OF ADMISSION</th>\n                        <th scope=\"col\">STATUS</th>\n                        <th scope=\"col\">VIEW / DOWNLOAD</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let list of ArList;let i=index\">\n                        <th scope=\"row\">{{i+1}}</th>\n                        <td>{{list.ar_no}}</td>\n                        <td>{{list.name}}</td>\n                        <td>{{list.admission_date}}</td>\n                        <td>\n                          <button type=\"button\" *ngIf=\"list.completed===false\" class=\"btn btn-sm btn-danger\">Incomplete</button>\n                          <button type=\"button\"  *ngIf=\"list.completed===true\" class=\"btn btn-sm btn-success\">complete</button>\n                        </td>\n                        <td class=\"text-center\">\n                          <!-- <button type=\"button\" [disabled]=\"list.completed===false\" class=\"btn btn-primary btn-View\"><i\n                            class=\"fa fa-eye\" aria-hidden=\"true\"></i></button> -->\n                          <button type=\"button\" [disabled]=\"list.completed===false\" target=\"_blank\" (click)=\"toPrintPage(list._id)\" class=\"btn btn-success\"><i\n                            class=\"fa fa-download\"\n                            aria-hidden=\"true\"></i></button>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n              <div class=\"row\" *ngIf=\"ArList.length=='0'\">\n                <div class=\"col-md-12\">\n                  <table class=\"table table-bordered table-responsive-lg\">\n                    <thead class=\"thead-light\">\n                      <tr>\n                        <th scope=\"col\">#</th>\n                        <th scope=\"col\">AR NUMBER</th>\n                        <th scope=\"col\">NAME</th>\n                        <th scope=\"col\">DATE OF ADMISSION</th>\n                        <th scope=\"col\">STATUS</th>\n                        <th scope=\"col\">VIEW / DOWNLOAD</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <th scope=\"row\" colspan=\"6\">No records</th>                        \n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>     \n    </div>\n    <div class=\"container-fluid\" *ngIf=\"currentUserDash.role=='hospital'\">\n\n      <!-- Breadcrumbs-->\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          Accident Register Dashboard\n        </li>\n      </ol>\n\n      <div class=\"card  mx-auto mt-5\">\n        <div class=\"card-body\">\n          <form >\n            <div class=\"form-group\">\n              <div class=\"form-row\">\n                <div class=\"col-lg-3 col-md-6\">\n                  <div class=\"form-group\">\n                    <label for=\"formGroupExampleInput\">Select Date</label>\n                    <input name=\"admissionDate\" class=\"form-control\" id=\"formGroupExampleInput\"\n                     placeholder=\"Date\" [(ngModel)]=\"detailsToFind.admissionDate\" (ngModelChange)=\"findListsAR($event)\"\n                     ngui-datetime-picker date-only=\"true\" parse-format=\"YYYY-MM-DD\">\n                  </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6\">\n                    <div class=\"form-group\">\n                      <label for=\"formGroupExampleInput\">District</label>\n                      <input name=\"district\" class=\"form-control\" id=\"formGroupExampleInput\"\n                      [(ngModel)]=\"currentUserDash.district\" readonly\n                     >\n                  </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6\">\n                    <div class=\"form-group\">\n                      <label for=\"formGroupExampleInput\">Hospital Directorate</label>\n                      <input name=\"hospitalDirectorate\" class=\"form-control\" id=\"formGroupExampleInput\"\n                      [(ngModel)]=\"currentUserDash.hospitalDirectorate\" readonly\n                     >\n                  </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6\">\n                    <div class=\"form-group\">\n                      <label for=\"formGroupExampleInput\">Hospital</label>\n                      <input name=\"hospitalName\" class=\"form-control\" id=\"formGroupExampleInput\"\n                       [(ngModel)]=\"currentUserDash.hospitalName\" readonly\n                     >\n\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\" *ngIf=\"ArList.length>0\">\n                 <div class=\"col-md-12\">\n                   <label for=\"formGroupExampleInput\">Number of entries :<span class=\"countsOfTables\">{{ArList.length}}</span></label>\n                 </div>\n              </div>\n              <div class=\"row\" *ngIf=\"ArList.length=='0'\">\n                <div class=\"col-md-12\">\n                  <label for=\"formGroupExampleInput\">Number of entries :<span class=\"countsOfTables\">0</span></label>\n                </div>\n             </div>\n              <div class=\"row\" *ngIf=\"ArList.length>0\">\n                <div class=\"col-md-12\">\n                  <table class=\"table table-bordered table-responsive-lg\">\n                    <thead class=\"thead-light\">\n                      <tr>\n                        <th scope=\"col\">#</th>\n                        <th scope=\"col\">AR NUMBER</th>\n                        <th scope=\"col\">NAME</th>\n                        <th scope=\"col\">DATE OF ADMISSION</th>\n                        <th scope=\"col\">STATUS</th>\n                        <th scope=\"col\">VIEW / DOWNLOAD</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let list of ArList;let i=index\">\n                        <th scope=\"row\">{{i+1}}</th>\n                        <td>{{list.ar_no}}</td>\n                        <td>{{list.name}}</td>\n                        <td>{{list.admission_date}}</td>\n                        <td>\n                          <button type=\"button\" *ngIf=\"list.completed===false\" class=\"btn btn-sm btn-danger\">Incomplete</button>\n                          <button type=\"button\"  *ngIf=\"list.completed===true\" class=\"btn btn-sm btn-success\">complete</button>\n                        </td>\n                        <td class=\"text-center\">\n                          <!-- <button type=\"button\" [disabled]=\"list.completed===false\" class=\"btn btn-primary btn-View\"><i\n                            class=\"fa fa-eye\" aria-hidden=\"true\"></i></button> -->\n                          <button type=\"button\" [disabled]=\"list.completed===false\" target=\"_blank\" (click)=\"toPrintPage(list._id)\" class=\"btn btn-success\"><i\n                            class=\"fa fa-download\"\n                            aria-hidden=\"true\"></i></button>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n              <div class=\"row\" *ngIf=\"ArList.length=='0'\">\n                <div class=\"col-md-12\">\n                  <table class=\"table table-bordered table-responsive-lg\">\n                    <thead class=\"thead-light\">\n                      <tr>\n                        <th scope=\"col\">#</th>\n                        <th scope=\"col\">AR NUMBER</th>\n                        <th scope=\"col\">NAME</th>\n                        <th scope=\"col\">DATE OF ADMISSION</th>\n                        <th scope=\"col\">STATUS</th>\n                        <th scope=\"col\">VIEW / DOWNLOAD</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <th scope=\"row\" colspan=\"6\">No records</th>                        \n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>     \n    </div>\n    <!-- /.container-fluid -->\n\n    <ngx-spinner [visible]=\"showSpinner\" [config]=\"spinnerConfig\"></ngx-spinner>\n"

/***/ }),

/***/ "./src/app/ar-dashboard/ar-dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ar-dashboard/ar-dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: ARDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARDashboardComponent", function() { return ARDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hardpool_ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hardpool/ngx-spinner */ "./node_modules/@hardpool/ngx-spinner/fesm5/hardpool-ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_share_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/share-service.service */ "./src/app/services/share-service.service.ts");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/network */ "./src/app/services/network.ts");









var ARDashboardComponent = /** @class */ (function () {
    function ARDashboardComponent(shareServive, dataServive, http, router) {
        this.shareServive = shareServive;
        this.dataServive = dataServive;
        this.http = http;
        this.router = router;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.ArList = [];
        this.hospitals = [];
        this.arLists = [];
        this.detailsToFind = {
            admissionDate: '',
            district: '',
            hospitalDirectorate: '',
            hospitalName: ''
        };
        this.districts = [
            'Test',
            'Chennai',
            'Cuddalore',
            'Kancheepuram',
            'Thiruvallur',
            'Thiruvannamalai',
            'Vellore',
            'Villuppuram',
            'Kallakurichi',
            'Dharmapuri',
            'Krishnagiri',
            'Namakkal',
            'Salem',
            'Erode',
            'Thiruppur',
            'Coimbatore',
            'Nilgiris',
            'Madurai',
            'Theni',
            'Dindigul',
            'Sivagangai',
            'Virudhunagar',
            'Ramanathapuram',
            'Thirunelveli',
            'Thoothukudi',
            'Kanyakumari',
            'Pudhukkottai',
            'Ariyalur',
            'Nagapattinam',
            'Perambalur',
            'Thanjavur',
            'Thiruchirappalli',
            'Karur',
            'Thiruvarur'
        ];
    }
    ARDashboardComponent.prototype.ngOnInit = function () {
        this.spinnerConfig = {
            placement: _hardpool_ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["SPINNER_PLACEMENT"].block_window,
            animation: _hardpool_ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["SPINNER_ANIMATIONS"].spin_3,
            size: "4rem",
            color: "#1574b3"
        };
        this.getcurrentUserDash();
    };
    ARDashboardComponent.prototype.getcurrentUserDash = function () {
        this.currentUserDash = JSON.parse(localStorage.getItem('currentUserDash')).userDetails;
        console.log(this.currentUserDash);
    };
    // clearForm(){
    //   this.detailsToFind.hospitalDirectorate=''
    //   this.detailsToFind.district=''
    //   this.detailsToFind.hospitalName=''
    //   this.hospitals=[]
    //   this.detailsToFind.admissionDate=''
    // }
    ARDashboardComponent.prototype.findHospitals = function () {
        var _this = this;
        this.showSpinner = true;
        var data = {
            district: this.detailsToFind.district,
            hospitalDirectorate: this.detailsToFind.hospitalDirectorate
        };
        this.dataServive.postData(this.baseURL + "/api/v1/hospitals/hospitalLists", data)
            .subscribe(function (res) {
            _this.hospitals = [];
            _this.hospitals = res;
            _this.hospitals = _this.hospitals.data;
            _this.showSpinner = false;
            setTimeout(function () {
                _this.showSpinner = false;
            }, 4000);
        });
    };
    ARDashboardComponent.prototype.findListsAR = function (date) {
        var _this = this;
        this.showSpinner = true;
        var admissionDate = JSON.stringify(this.detailsToFind.admissionDate) == '' ? JSON.stringify(date) : JSON.stringify(this.detailsToFind.admissionDate);
        var admissionD = admissionDate.slice(1, 11);
        var data = {
            currentUserID: this.detailsToFind.hospitalName == '' ? this.currentUserDash._id : this.detailsToFind.hospitalName,
            admissionDate: admissionD
        };
        this.dataServive.postData(this.baseURL + "/api/v1/accidentRegisters/arLists", data)
            .subscribe(function (res) {
            _this.ArList = [];
            _this.arLists = res;
            if (_this.arLists && _this.arLists.code == 200) {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                    title: _this.arLists.status,
                    icon: 'success'
                });
                setTimeout(function () {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default.a.close();
                }, 2000);
                var arLists = _this.arLists.data;
                arLists.forEach(function (list) {
                    var data = {
                        _id: list._id,
                        ar_no: list.arNumber,
                        name: list.patientInformation.name,
                        admission_date: list.patientInformation.arrivalDate.slice(0, 10),
                        completed: list.completed
                    };
                    _this.ArList.push(data);
                });
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                    title: _this.arLists.status,
                    icon: 'error'
                });
                setTimeout(function () {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default.a.close();
                }, 2000);
            }
            _this.showSpinner = false;
            // this.clearForm();
        });
    };
    ARDashboardComponent.prototype.toPrintPage = function (v) {
        var _this = this;
        var _id = v;
        console.log(_id);
        this.arLists['data'].forEach(function (element) {
            if (element._id == _id) {
                _this.shareServive.setArData(element);
                _this.currentArDetails = element;
            }
        });
        this.showSpinner = true;
        this.dataServive.postData(this.baseURL + "/api/v1/arDownloads/download", this.currentArDetails)
            .subscribe(function (res) {
            _this.showSpinner = false;
            var bearer = 'data:application/pdf;base64,';
            var pdfInBase64 = bearer + res['data'];
            var linkSource = pdfInBase64;
            var downloadLink = document.createElement("a");
            var fileName = _this.currentArDetails.arNumber + ".pdf";
            downloadLink.href = linkSource;
            downloadLink.download = fileName;
            downloadLink.click();
        });
    };
    ARDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ar-dashboard',
            template: __webpack_require__(/*! ./ar-dashboard.component.html */ "./src/app/ar-dashboard/ar-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./ar-dashboard.component.css */ "./src/app/ar-dashboard/ar-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_share_service_service__WEBPACK_IMPORTED_MODULE_7__["ShareServiceService"],
            _services_network__WEBPACK_IMPORTED_MODULE_8__["NetworkProvider"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ARDashboardComponent);
    return ARDashboardComponent;
}());



/***/ }),

/***/ "./src/app/hospital-status/hospital-status.component.css":
/*!***************************************************************!*\
  !*** ./src/app/hospital-status/hospital-status.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 44px;\r\n    height: 24px;\r\n  }\r\n  \r\n  .switch input { \r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n  \r\n  .slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    transition: .4s;\r\n  }\r\n  \r\n  .slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 18px;\r\n    width: 18px;\r\n    left: 4px;\r\n    bottom: 3px;\r\n    background-color: white;\r\n    transition: .4s;\r\n  }\r\n  \r\n  input:checked + .slider {\r\n    background-color: #2196F3;\r\n  }\r\n  \r\n  input:focus + .slider {\r\n    box-shadow: 0 0 1px #2196F3;\r\n  }\r\n  \r\n  input:checked + .slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    transform: translateX(19px);\r\n  }\r\n  \r\n  /* Rounded sliders */\r\n  \r\n  .slider.round {\r\n    border-radius: 14px;\r\n  }\r\n  \r\n  .slider.round:before {\r\n    border-radius: 50%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9zcGl0YWwtc3RhdHVzL2hvc3BpdGFsLXN0YXR1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxzQkFBc0I7SUFFdEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLHVCQUF1QjtJQUV2QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsbUNBQW1DO0lBRW5DLDJCQUEyQjtFQUM3Qjs7RUFFQSxvQkFBb0I7O0VBQ3BCO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaG9zcGl0YWwtc3RhdHVzL2hvc3BpdGFsLXN0YXR1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXRjaCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICB9XHJcbiAgXHJcbiAgLnN3aXRjaCBpbnB1dCB7IFxyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgbGVmdDogNHB4O1xyXG4gICAgYm90dG9tOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE5cHgpO1xyXG4gIH1cclxuICBcclxuICAvKiBSb3VuZGVkIHNsaWRlcnMgKi9cclxuICAuc2xpZGVyLnJvdW5kIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/hospital-status/hospital-status.component.html":
/*!****************************************************************!*\
  !*** ./src/app/hospital-status/hospital-status.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n    <!-- Breadcrumbs-->\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\">\r\n        Active / Deactive\r\n      </li>\r\n </ol>\r\n\r\n<div class=\"card  mx-auto mt-5\">\r\n  <div class=\"card-body\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <div class=\"form-row\">\r\n            <label for=\"formGroupExampleInput\" class=\"col-lg-4 col-md-6 col-form-label mt-1\">Number of active hospitals</label>\r\n            <div class=\"col-lg-2 col-md-6\">\r\n              <input type=\"text\" readonly class=\"form-control\" value=\"{{activeHospitals.length}}\" id=\"formGroupExampleInput\" >\r\n            </div>\r\n            <label for=\"formGroupExampleInput\" class=\"col-lg-4 col-md-6 col-form-label mt-1\">Number of Deactive hospitals</label>\r\n            <div class=\"col-lg-2 col-md-6\">\r\n              <input type=\"text\" readonly value=\"{{deActiveHospitals.length}}\" class=\"form-control\" id=\"formGroupExampleInput\" >\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <table class=\"table table-bordered table-responsive-lg\">\r\n          <thead class=\"thead-light\">\r\n            <tr>\r\n              <th scope=\"col\">#</th>\r\n              <th scope=\"col\">HOSPITAL NUMBER</th>\r\n              <th scope=\"col\">HOSPITAL NAME</th>\r\n              <th scope=\"col\">STATUS</th>\r\n              <th scope=\"col\">ACTION</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let hospital of hospitals;let i=index\">\r\n              <th scope=\"row\">{{i+1}}</th>\r\n              <td>{{hospital.hospitalNumber}}</td>\r\n              <td>{{hospital.hospitalName}}</td>\r\n              <td *ngIf=\"hospital.isActive===true\">Active</td>\r\n              <td *ngIf=\"hospital.isActive===false\">DeActive</td>\r\n              <td class=\"text-center\">\r\n                <label class=\"switch\">\r\n                  <input type=\"checkbox\"  (change)=\"statusAction($event,hospital._id)\" [(ngModel)]=\"hospital.isActive\">\r\n                  <span class=\"slider round\"></span>\r\n                </label>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n </div>     \r\n\r\n <ngx-spinner [visible]=\"showSpinner\" [config]=\"spinnerConfig\"></ngx-spinner>\r\n"

/***/ }),

/***/ "./src/app/hospital-status/hospital-status.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/hospital-status/hospital-status.component.ts ***!
  \**************************************************************/
/*! exports provided: HospitalStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalStatusComponent", function() { return HospitalStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hardpool_ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hardpool/ngx-spinner */ "./node_modules/@hardpool/ngx-spinner/fesm5/hardpool-ngx-spinner.js");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/network */ "./src/app/services/network.ts");







var HospitalStatusComponent = /** @class */ (function () {
    function HospitalStatusComponent(http, dataService) {
        this.http = http;
        this.dataService = dataService;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.activeHospitals = [];
        this.deActiveHospitals = [];
        this.hospitalStatus = {
            isActive: ''
        };
    }
    HospitalStatusComponent.prototype.ngOnInit = function () {
        this.getAllHospitals();
        this.spinnerConfig = {
            placement: _hardpool_ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["SPINNER_PLACEMENT"].block_window,
            animation: _hardpool_ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["SPINNER_ANIMATIONS"].spin_3,
            size: "4rem",
            color: "#1574b3"
        };
    };
    HospitalStatusComponent.prototype.getAllHospitals = function () {
        var _this = this;
        this.showSpinner = true;
        this.dataService.getData(this.baseUrl + "/api/v1/hospitals/allHospitals")
            .subscribe(function (res) {
            _this.hospitals = res;
            _this.hospitals = _this.hospitals.result;
            _this.activeHospitals = [];
            _this.deActiveHospitals = [];
            _this.hospitals.forEach(function (hospital) {
                if (hospital.isActive === true) {
                    _this.activeHospitals.push(hospital);
                }
                else if (hospital.isActive === false) {
                    _this.deActiveHospitals.push(hospital);
                }
            });
        });
        this.showSpinner = false;
    };
    HospitalStatusComponent.prototype.statusAction = function (event, id) {
        var _this = this;
        this.showSpinner = true;
        var data = {
            isActive: event.target.checked,
            _id: id
        };
        this.dataService.postData(this.baseUrl + "/api/v1/hospitals/activateDeactivate", data)
            .subscribe(function (res) {
            _this.statusHospital = res;
            if (_this.statusHospital && _this.statusHospital.code == 200) {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                    title: _this.statusHospital.status,
                    icon: 'success'
                });
                setTimeout(function () {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default.a.close();
                }, 2000);
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                    title: 'Something went wrong',
                    icon: 'error'
                });
                setTimeout(function () {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default.a.close();
                }, 2000);
            }
            _this.getAllHospitals();
            _this.showSpinner = false;
        });
    };
    HospitalStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hospital-status',
            template: __webpack_require__(/*! ./hospital-status.component.html */ "./src/app/hospital-status/hospital-status.component.html"),
            styles: [__webpack_require__(/*! ./hospital-status.component.css */ "./src/app/hospital-status/hospital-status.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _services_network__WEBPACK_IMPORTED_MODULE_6__["NetworkProvider"]])
    ], HospitalStatusComponent);
    return HospitalStatusComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.bg-dark {\r\n    background-color: #431490 !important;\r\n}\r\n/* .fa-user-circle{\r\n    color:white\r\n} */\r\n.sidebar{\r\n    background:white;\r\n    box-shadow:1px 3px 4px 0px lightgrey\r\n}\r\n.sidebar span{\r\n    color:gray\r\n}\r\n.accountDetails{\r\n    color: white !important;\r\n}\r\na.active{\r\n    background: #8d75b3;\r\n}\r\na.active span{\r\n    color:white\r\n}\r\na.active .fas{\r\n    color:white  \r\n}\r\n.fa-fw{\r\n    color:gray\r\n}\r\n.dash_logo{\r\n    border-radius: 1.5rem;\r\n    margin-right: 1rem;\r\n}\r\n.footerPara{\r\n    margin-top: 1rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7O0dBRUc7QUFDSDtJQUNJLGdCQUFnQjtJQUNoQjtBQUNKO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJnLWRhcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzMTQ5MCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIC5mYS11c2VyLWNpcmNsZXtcclxuICAgIGNvbG9yOndoaXRlXHJcbn0gKi9cclxuLnNpZGViYXJ7XHJcbiAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgYm94LXNoYWRvdzoxcHggM3B4IDRweCAwcHggbGlnaHRncmV5XHJcbn1cclxuLnNpZGViYXIgc3BhbntcclxuICAgIGNvbG9yOmdyYXlcclxufVxyXG4uYWNjb3VudERldGFpbHN7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5hLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQ6ICM4ZDc1YjM7XHJcbn1cclxuYS5hY3RpdmUgc3BhbntcclxuICAgIGNvbG9yOndoaXRlXHJcbn1cclxuYS5hY3RpdmUgLmZhc3tcclxuICAgIGNvbG9yOndoaXRlICBcclxufVxyXG4uZmEtZnd7XHJcbiAgICBjb2xvcjpncmF5XHJcbn1cclxuLmRhc2hfbG9nb3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG4uZm9vdGVyUGFyYXtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Admin Landing -->\r\n\r\n<body id=\"page-top\" *ngIf=\"currentUserDash.role=='admin'\">\r\n\r\n  <nav class=\"navbar navbar-expand navbar-dark bg-dark static-top\" id=\"menu_top\">\r\n     \r\n    <a class=\"navbar-brand mr-1 mt-1\" href=\"index.html\"><img src=\"/dash/assets/imgs/logo4.jpg\" class=\"dash_logo\">Accident Register</a>\r\n\r\n    <button class=\"btn btn-link btn-sm text-white order-1 order-sm-0\" id=\"sidebarToggle\" (click)=\"js()\">\r\n      <i class=\"fas fa-bars\"></i>\r\n    </button>\r\n\r\n    <form class=\"d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0\">\r\n    </form>\r\n\r\n    <!-- Navbar -->\r\n    <ul class=\"navbar-nav ml-auto ml-md-0\">\r\n      <li class=\"nav-item dropdown no-arrow\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          Admin <i class=\"fas fa-user-circle fa-fw accountDetails\"></i>\r\n        </a>\r\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"userDropdown\">\r\n          <a class=\"dropdown-item\" href=\"#\">Admin</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\" data-toggle=\"modal\" (click)=\"logout()\">Logout</a>        </div>\r\n      </li>\r\n    </ul>\r\n\r\n  </nav>\r\n\r\n  <div id=\"wrapper\">\r\n\r\n    <!-- Sidebar -->\r\n    <ul class=\"sidebar navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLinkActiveOptions]=\"{exact: true}\"  routerLinkActive=\"active\" routerLink=\"/landing/dashboard\">\r\n          <i class=\"fas fa-fw fa-tachometer-alt\"></i>\r\n          <span>Dashboard</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\" >\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/landing/addHospital\">\r\n          <i class=\"fas fa-fw fa-plus-circle\"></i>\r\n          <span>Add Hospital</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\" >\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/landing/hospitalStatus\">\r\n          <i class=\"fas fa-fw fa-chart-area\"></i>\r\n          <span>Active/ Deactive</span></a>\r\n     </li>\r\n    </ul>\r\n\r\n    <div id=\"content-wrapper\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- /.content-wrapper -->\r\n   \r\n  </div>\r\n <!-- Sticky Footer -->\r\n <footer class=\"sticky-footer\">\r\n    <div class=\"container my-auto\">\r\n      <div class=\"copyright text-center my-auto\">\r\n        <span>Copyright © Your Website 2019</span>\r\n        <p class=\"footerPara\">Designed & Developed by RBG Labs, IIT Madras</p>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n\r\n</body>\r\n\r\n<!-- Polic Landing -->\r\n<body id=\"page-top\" *ngIf=\"currentUserDash.role=='police'\">\r\n\r\n  <nav class=\"navbar navbar-expand navbar-dark bg-dark static-top\" id=\"menu_top\">\r\n     \r\n    <a class=\"navbar-brand mr-1 mt-1\" href=\"index.html\"><img src=\"/dash/assets/imgs/logo4.jpg\" class=\"dash_logo\">Accident Register</a>\r\n\r\n    <button class=\"btn btn-link btn-sm text-white order-1 order-sm-0\" id=\"sidebarToggle\" (click)=\"js()\" href=\"#\">\r\n      <i class=\"fas fa-bars\"></i>\r\n    </button>\r\n\r\n    <!-- Navbar Search -->\r\n    <form class=\"d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0\">\r\n    </form>\r\n\r\n    <!-- Navbar -->\r\n    <ul class=\"navbar-nav ml-auto ml-md-0\">\r\n      <li class=\"nav-item dropdown no-arrow\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n         Police <i class=\"fas fa-user-circle fa-fw accountDetails\"></i>\r\n        </a>\r\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"userDropdown\">\r\n          <a class=\"dropdown-item\" href=\"#\">Police</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" (click)=\"logout()\">Logout</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n\r\n  </nav>\r\n\r\n  <div id=\"wrapper\">\r\n\r\n    <!-- Sidebar -->\r\n    <ul class=\"sidebar navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"  routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/landing/dashboard\">\r\n          <i class=\"fas fa-fw fa-tachometer-alt\"></i>\r\n          <span>Dashboard</span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n\r\n    <div id=\"content-wrapper\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- /.content-wrapper -->\r\n   \r\n  </div>\r\n <!-- Sticky Footer -->\r\n <footer class=\"sticky-footer\">\r\n    <div class=\"container my-auto\">\r\n      <div class=\"copyright text-center my-auto\">\r\n        <span>Copyright © Your Website 2019</span>\r\n        <p class=\"footerPara\">Designed & Developed by RBG Labs, IIT Madras</p>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n</body>\r\n\r\n<!-- Landing Hospital -->\r\n<body id=\"page-top\" *ngIf=\"currentUserDash.role=='hospital'\">\r\n\r\n  <nav class=\"navbar navbar-expand navbar-dark bg-dark static-top\" id=\"menu_top\">\r\n     \r\n    <a class=\"navbar-brand mr-1 mt-1\" href=\"index.html\"><img src=\"/dash/assets/imgs/logo4.jpg\" class=\"dash_logo\">Accident Register</a>\r\n\r\n    <button class=\"btn btn-link btn-sm text-white order-1 order-sm-0\" id=\"sidebarToggle\" (click)=\"js()\" href=\"#\">\r\n      <i class=\"fas fa-bars\"></i>\r\n    </button>\r\n\r\n    <!-- Navbar Search -->\r\n    <form class=\"d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0\">\r\n    </form>\r\n\r\n    <!-- Navbar -->\r\n    <ul class=\"navbar-nav ml-auto ml-md-0\">\r\n      <li class=\"nav-item dropdown no-arrow\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n         {{currentUserDash.hospitalName}} <i class=\"fas fa-user-circle fa-fw accountDetails\"></i>\r\n        </a>\r\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"userDropdown\">\r\n          <a class=\"dropdown-item\" href=\"#\">{{currentUserDash.hospitalName}}</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" (click)=\"logout()\">Logout</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n\r\n  </nav>\r\n\r\n  <div id=\"wrapper\">\r\n\r\n    <!-- Sidebar -->\r\n    <ul class=\"sidebar navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"  routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/landing/dashboard\">\r\n          <i class=\"fas fa-fw fa-tachometer-alt\"></i>\r\n          <span>Dashboard</span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n\r\n    <div id=\"content-wrapper\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- /.content-wrapper -->\r\n   \r\n  </div>\r\n <!-- Sticky Footer -->\r\n <footer class=\"sticky-footer\">\r\n    <div class=\"container my-auto\">\r\n      <div class=\"copyright text-center my-auto\">\r\n        <span>Copyright © Your Website 2019</span>\r\n        <p class=\"footerPara\">Designed & Developed by RBG Labs, IIT Madras</p>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n</body>\r\n\r\n<ngx-spinner [visible]=\"showSpinner\" [config]=\"spinnerConfig\"></ngx-spinner>\r\n"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hardpool_ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hardpool/ngx-spinner */ "./node_modules/@hardpool/ngx-spinner/fesm5/hardpool-ngx-spinner.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);






var LandingComponent = /** @class */ (function () {
    function LandingComponent(route) {
        this.route = route;
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.getcurrentUserDash();
        this.js();
        "use strict"; // Start of use strict
        // Toggle the side navigation
        this.js();
        this.spinnerConfig = {
            placement: _hardpool_ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["SPINNER_PLACEMENT"].block_window,
            animation: _hardpool_ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["SPINNER_ANIMATIONS"].spin_3,
            size: "4rem",
            color: "#1574b3"
        };
    };
    LandingComponent.prototype.getcurrentUserDash = function () {
        this.currentUserDash = JSON.parse(localStorage.getItem('currentUserDash')).userDetails;
        console.log(this.currentUserDash);
    };
    LandingComponent.prototype.logout = function () {
        this.showSpinner = true;
        localStorage.removeItem('currentUserDash');
        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
            title: 'Logged out',
            icon: 'success'
        });
        setTimeout(function () {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default.a.close();
        }, 2000);
        this.route.navigate(['/login']);
        this.showSpinner = false;
    };
    LandingComponent.prototype.js = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__("body").toggleClass("sidebar-toggled");
        jquery__WEBPACK_IMPORTED_MODULE_2__(".sidebar").toggleClass("toggled");
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-logo img{\r\n    border-radius: 1rem;\r\n    margin-top:2rem;\r\n}\r\n@media (max-width:1441px){\r\n    .card-login{\r\n        margin-bottom: 4rem;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1sb2dvIGltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBtYXJnaW4tdG9wOjJyZW07XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6MTQ0MXB4KXtcclxuICAgIC5jYXJkLWxvZ2lue1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row login-logo\">\r\n    <div class=\"col-md-4 offset-md-4 text-center\">\r\n      <img src=\"/dash/assets/imgs/logo3.jpg\"  width=\"120px\">\r\n    </div>\r\n  </div>\r\n  <div class=\"card card-login mx-auto mt-5\">\r\n    <div class=\"card-header\">Login</div>\r\n    <div class=\"card-body\">\r\n      <h5 class=\"alert text-danger text-center\">{{errMsg.message}}</h5>\r\n      <form #loginForm=\"ngForm\" (ngSubmit)='goToGateway(loginForm.value)'>\r\n         <div class=\"form-group\">\r\n          <div class=\"form-label-group\">\r\n            <input type=\"text\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Username\"\r\n            name=\"username\" #Username=\"ngModel\" ngModel required>\r\n            <label for=\"inputEmail\">Email address</label>\r\n            <div *ngIf=\"Username.errors && (Username.touched|| Username.dirty)\" class=\"alert text-danger\">\r\n              <div [hidden]=\"!Username.errors.required\">\r\n                  *Username required\r\n              </div>\r\n          </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"form-label-group\">\r\n            <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\"\r\n            name=\"password\" #Password=\"ngModel\" ngModel required>\r\n            <label for=\"inputPassword\">Password</label>\r\n            <div *ngIf=\"Password.errors && (Password.touched|| Password.dirty)\" class=\"alert text-danger\">\r\n              <div [hidden]=\"!Password.errors.required\">\r\n                  *Password required\r\n              </div>\r\n          </div>\r\n          </div>\r\n        </div>\r\n        <button class=\"btn btn-primary btn-block\" type=\"submit\">Login</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ngx-spinner [visible]=\"showSpinner\" [config]=\"spinnerConfig\"></ngx-spinner>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hardpool_ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hardpool/ngx-spinner */ "./node_modules/@hardpool/ngx-spinner/fesm5/hardpool-ngx-spinner.js");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/network */ "./src/app/services/network.ts");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, route, dataService) {
        this.http = http;
        this.route = route;
        this.dataService = dataService;
        this.errMsg = {
            message: ''
        };
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.spinnerConfig = {
            placement: _hardpool_ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["SPINNER_PLACEMENT"].block_window,
            animation: _hardpool_ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["SPINNER_ANIMATIONS"].spin_3,
            size: "4rem",
            color: "#1574b3"
        };
    };
    LoginComponent.prototype.goToGateway = function (v) {
        var _this = this;
        this.showSpinner = true;
        this.dataService.postData(this.baseUrl + "/api/v1/adminUsers/login", v).subscribe(function (res) {
            console.log(res);
            _this.userCridentials = res;
            if (_this.userCridentials.code === 200) {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                    title: _this.userCridentials.status,
                    icon: 'success'
                });
                setTimeout(function () {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default.a.close();
                }, 2000);
                localStorage.setItem('currentUserDash', JSON.stringify({ token: _this.userCridentials.token, userDetails: _this.userCridentials.data }));
                _this.route.navigate(["/landing"]);
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                    title: _this.userCridentials.status,
                    icon: 'error'
                });
                _this.errMsg.message = _this.userCridentials.status;
                _this.route.navigate(['/login']);
            }
            _this.showSpinner = false;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_network__WEBPACK_IMPORTED_MODULE_7__["NetworkProvider"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/printpage/printpage.component.css":
/*!***************************************************!*\
  !*** ./src/app/printpage/printpage.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header,.footer{\r\n    background-color: blueviolet;\r\n    height: 3.5rem;\r\n}\r\n.row{\r\n    padding: 0.6rem 0;\r\n}\r\n@media(max-width:768px){\r\n    table{\r\n        max-width: 700px;\r\n    }\r\n    .fullSection{\r\n        padding:0rem 2rem !important\r\n    }\r\n}\r\n@media(max-width:320px){\r\n    table{     \r\n        overflow-x: scroll\r\n    }\r\n    .fullSection{\r\n        padding:0rem 2rem !important\r\n    }\r\n}\r\n.border{\r\n    border: 2px solid black !important;\r\n}\r\n.class{\r\n    background-color: #f7f0f0 !important;\r\n    color: #6f0b82;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpbnRwYWdlL3ByaW50cGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0lBQzVCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUFDO0lBQ0c7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJO0lBQ0o7QUFDSjtBQUNBO0lBQ0k7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0FBQ0o7QUFDQTtJQUNJLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wcmludHBhZ2UvcHJpbnRwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLC5mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG4gICAgaGVpZ2h0OiAzLjVyZW07XHJcbn1cclxuLnJvd3tcclxuICAgIHBhZGRpbmc6IDAuNnJlbSAwO1xyXG59QG1lZGlhKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICB0YWJsZXtcclxuICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgfVxyXG4gICAgLmZ1bGxTZWN0aW9ue1xyXG4gICAgICAgIHBhZGRpbmc6MHJlbSAycmVtICFpbXBvcnRhbnRcclxuICAgIH1cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOjMyMHB4KXtcclxuICAgIHRhYmxleyAgICAgXHJcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsXHJcbiAgICB9XHJcbiAgICAuZnVsbFNlY3Rpb257XHJcbiAgICAgICAgcGFkZGluZzowcmVtIDJyZW0gIWltcG9ydGFudFxyXG4gICAgfVxyXG59XHJcbi5ib3JkZXJ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcbi5jbGFzc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2YwZjAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNmYwYjgyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/printpage/printpage.component.html":
/*!****************************************************!*\
  !*** ./src/app/printpage/printpage.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"bg--light\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row header\">\r\n      <div class=\"col-6\">\r\n        <button class=\"btn btn-light\" routerLink='/landing/dashboard'>Dashboard</button>\r\n      </div>\r\n      <div class=\"col-6 text-right\">\r\n        <button (click)=\"captureScreen()\" class=\"btn btn-light\"> Print</button>\r\n      </div>\r\n    </div>\r\n  \r\n\r\n    <div class=\"row\" id=\"toPrint\">\r\n      <div class=\"col-lg-2 col-md-1\">\t\r\n      </div>\r\n      <div class=\"col-lg-8 col-md-10 bg-white\" >\r\n      <table class=\"table table-responsive\">\r\n             <tr class=\"border\">\r\n                <td colspan=\"2\" class=\"class\"><b>ACCIDENT REGISTER FORM</b></td>\r\n             </tr>\r\n          <tbody class=\"border\">\r\n             <tr>\r\n                <td><b>Hospital Id : </b>{{printData.hospitalDetails.hospitalId}}</td>\r\n                <td><b>Hospital Type :</b> {{printData.hospitalDetails.hospitalType}}</td>\r\n             </tr>\r\n             <tr>\r\n                <td><b>Hospital Number :</b> {{printData.hospitalDetails.hospitalNumber}}</td>\r\n                <td><b>Hospital Directorate : </b>{{printData.hospitalDetails.hospitalDirectorate}}</td>\r\n             </tr>\r\n             <tr>\r\n                <td><b>District :</b> {{printData.hospitalDetails.district}}</td>\r\n                <td><b>Hospital Name : </b>{{printData.hospitalDetails.hospitalName}}</td>\r\n             </tr>\r\n          </tbody>\r\n          <tbody>\r\n             <tr>\r\n                <td class=\"border class\" colspan=\"2\"><b>ADMISSION DETAILS</b></td>\r\n             </tr>\r\n             <tr>\r\n                 <td class=\"border\"><b>AR Number : </b>{{printData.arNumber}}</td>\r\n            <td class=\"border\"><b>OP Number :</b> {{printData.admissionDetails.opNumber}}</td>\r\n             </tr>\r\n             <tr>\r\n                 <td class=\"border\"><b>IP Number :</b> {{printData.admissionDetails.ipNumber}}</td>\r\n            <td class=\"border\"><b>MLC Number :</b> {{printData.admissionDetails.mlcNumber}}</td>\r\n             </tr>\r\n             <tr>\r\n                 <td class=\"border\"><b>Person Brought :</b> {{printData.admissionDetails.personBrought}}</td>\r\n            <td class=\"border\"><b>Admission Date & Time:</b>{{printData.admissionDetails.admissionDate}}/{{printData.admissionDetails.admissionTime}}\r\n              </td>\r\n             </tr>\r\n             <tr>\r\n                 <td class=\"border\"><b>Informed to the Police? :</b>\r\n                {{printData.admissionDetails.isIformedToPolice}}</td>\r\n  \r\n               <td *ngIf=\"printData.admissionDetails.toWhom\"><b>To Whom:</b>{{printData.admissionDetails.toWhom}}</td>\r\n                <td *ngIf=\"!printData.admissionDetails.toWhom\"><b>To Whom:</b>No one </td>\r\n  \r\n             </tr>\r\n             <tr>\r\n              <td class=\"border\" colspan=\"2\"><b>Affidavit :</b> {{printData.admissionDetails.affidavit}}</td>\r\n\r\n             </tr>\r\n              <tr>\r\n                <td class=\"border class\" colspan=\"2\"><b>PATIENT DETAILS</b></td>\r\n             </tr>\r\n             <tr>\r\n                 <td class=\"border\"><b>Name : </b>{{printData.patientDetails.name}}</td>\r\n            <td class=\"border\"><b>Age : </b>{{printData.patientDetails.age}}</td>\r\n             </tr>\r\n             <tr>\r\n                 <td class=\"border\"><b>Gender :</b> {{printData.patientDetails.gender}}</td>\r\n            <td class=\"border\"><b>Occupation :</b> {{printData.patientDetails.occupation}}</td>\r\n             \r\n             </tr>\r\n             <tr>\r\n                <td class=\"border\"><b>Identity Mark 1 :</b> {{printData.patientDetails.identyMark1}}</td>\r\n                <td class=\"border\"><b>Location 1 :</b> {{printData.patientDetails.location1}}</td>\r\n             </tr>\r\n             <tr>\r\n                <td class=\"border\"><b>Identity Mark 2 : </b>{{printData.patientDetails.identyMark2}}</td>\r\n                <td class=\"border\"><b>Location 2 :</b> {{printData.patientDetails.location2}}</td>\r\n             </tr>\r\n             <tr>\r\n                <td class=\"border\"><b>Address : </b>{{printData.patientDetails.doorNoStreet}}</td>\r\n                <td class=\"border\"><b>City/ District :</b> {{printData.patientDetails.cityDistrict}}</td>\r\n             </tr>\r\n             <tr>\r\n                <td colspan=\"2\" class=\"border\"><b>Phone Number : </b>{{printData.patientDetails.phoneNumber}}</td>\r\n             </tr>\r\n             <tr>\r\n                <td colspan=\"2\" class=\"border class\"><b>DOCTOR DETAILS AND INITIAL EXAMINATION</b></td>\r\n             </tr>\r\n              <tr>\r\n                <td class=\"border\"><b>Doctor Name :</b> {{printData.doctorDetailsAndiInitialExamination.doctorName}}</td>\r\n                <td class=\"border\"><b>MCI Registration Number :</b>\r\n              {{printData.doctorDetailsAndiInitialExamination.doctorRegistrationNumber}}</td>\r\n             </tr>\r\n             <tr>\r\n                <td class=\"border\"><b>Pulse :</b>\r\n            {{printData.doctorDetailsAndiInitialExamination.pulse}}</td>\r\n                <td class=\"border\"><b>Blood Pressure : </b>\r\n            {{printData.doctorDetailsAndiInitialExamination.bloodPressureHigh}}/{{printData.doctorDetailsAndiInitialExamination.bloodPressureLow}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"border\"><b>Respiration Rate :</b>{{printData.doctorDetailsAndiInitialExamination.respirationRate}}</td>\r\n            <td class=\"border\"><b>Oxygen Saturation : </b>{{printData.doctorDetailsAndiInitialExamination.oxygenSaturation}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"border\"><b>Pupillary Reaction :</b> {{printData.doctorDetailsAndiInitialExamination.pupillaryReaction}}</td>\r\n            <td class=\"border\"><b>Nature of Injury :</b> {{printData.doctorDetailsAndiInitialExamination.injuryType}}\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"2\" class=\"border class\"><b>ACCIDENT DETAILS</b></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"border\"><b>Location :</b> {{printData.accidentDetails.location}}</td>\r\n            <td class=\"border\"><b>Landmark : </b>{{printData.accidentDetails.landmark}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"border\"><b>Accident Date & Time:</b>\r\n             {{printData.accidentDetails.accidentDate}}/{{printData.accidentDetails.accidentTime}}</td>\r\n            <td class=\"border\"><b>Accident Type:</b> {{printData.accidentDetails.accidentType}} </td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"2\" class=\"border\"><b>Doctor Description:</b> {{printData.doctorDetailsAndiInitialExamination.doctorDescription}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"2\" class=\"border class\"><b>RTA DETAILS</b></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"border\"><b>Patient Position : </b>{{printData.accidentDetails.patientPosition}}</td>\r\n            <td class=\"border\"> <b>Vechile Type :</b> {{printData.accidentDetails.vechileType}} </td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"2\" class=\"border\"><b>Patient Type : </b>{{printData.accidentDetails.patientType}}</td>\r\n          </tr>\r\n        </tbody>\r\n    </table>\t\r\n      </div>\r\n      <div class=\"col-lg-2 col-md-1\">\r\n        \r\n      </div>\r\n      \r\n    </div>\r\n     \r\n    <!-- <div id=\"toPrint\" style=\"padding: 2rem 17.3rem\">\r\n      <table style=\"width: 800px;border: 2px solid black; border-collapse: collapse;\">\r\n        <tbody style=\"border: 2px solid black; border-collapse: collapse; \">\r\n          <tr style=\"text-align: left; border: 2px solid black; border-collapse: collapse; \">\r\n            <td colspan=\"2\"\r\n              style=\"padding: 6px; color: #6f0b82; background-color: #f7f0f0;font-size: 17px;text-align: center\"><b>\r\n                ACCIDENT REGISTER FORM\r\n              </b></td>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"text-align: left; padding: 5px; width: 313px; \"><b>Hospital Id : </b>{{printData.hospitalDetails.hospitalId}}</td>\r\n            <td style=\"text-align: left; padding: 5px; width: 313px;\"><b>Hospital Type :</b> {{printData.hospitalDetails.hospitalType}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"text-align: left; padding: 5px; width: 313px;\"><b>Hospital Number :</b> {{printData.hospitalDetails.hospitalNumber}}</td>\r\n            <td style=\"text-align: left; padding: 5px; width: 313px;\"><b>Hospital Directorate : </b>{{printData.hospitalDetails.hospitalDirectorate}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"text-align: left; padding: 5px; width: 313px;\"><b>District :</b> {{printData.hospitalDetails.district}}</td>\r\n            <td style=\"text-align: left; padding: 5px; width: 313px; \"><b>Hospital Name : </b>{{printData.hospitalDetails.hospitalName}}</td>\r\n          </tr>\r\n          <tr style=\"text-align: left; border: 2px solid black; border-collapse: collapse; \">\r\n            <td colspan=\"2\" style=\"padding: 6px; color: #6f0b82; background-color: #f7f0f0\"><b>ADMISSION DETAILS</b></td>\r\n          </tr>\r\n          <tr style=\"border: 2px solid black; border-collapse: collapse;\">\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>AR Number : </b>{{printData.arNumber}}</td>\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>OP Number :</b> {{printData.admissionDetails.opNumber}}</td>\r\n          </tr>\r\n          <tr style=\"border: 2px solid black; border-collapse: collapse;\">\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>IP Number :</b> {{printData.admissionDetails.ipNumber}}</td>\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>MLC Number :</b> {{printData.admissionDetails.mlcNumber}}</td>\r\n          </tr>\r\n          <tr style=\"border: 2px solid black; border-collapse: collapse;\">\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>Person Brought :</b> {{printData.admissionDetails.personBrought}}\r\n            </td>\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>Admission Date & Time:</b>\r\n              {{printData.admissionDetails.admissionDate}}/{{printData.admissionDetails.admissionTime}}</td>\r\n          </tr>\r\n          <tr style=\"border: 2px solid black; border-collapse: collapse;\">\r\n                <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>:</b> 20:33</td>\r\n                <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px \"><b>:</b> Nothing</td>\r\n              </tr>\r\n          <tr style=\"border: 2px solid black; border-collapse: collapse;\">\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>Informed to the Police? :</b>\r\n              {{printData.admissionDetails.isIformedToPolice}}\r\n            </td>\r\n            <td *ngIf=\"printData.admissionDetails.toWhom\" style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>To Whom:</b>{{printData.admissionDetails.toWhom}}</td>\r\n            <td *ngIf=\"!printData.admissionDetails.toWhom\" style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>To Whom:</b>No </td>\r\n          </tr>\r\n          <tr style=\"border: 2px solid black; border-collapse: collapse;\">\r\n            <td colspan=\"2\" style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\">\r\n              <b>Affidavit :</b> {{printData.admissionDetails.affidavit}}\r\n            </td>\r\n          </tr>\r\n          <tr style=\"text-align: left; border: 2px solid black; border-collapse: collapse; \">\r\n            <td colspan=\"2\" style=\"padding: 6px; color: #6f0b82;background-color: #f7f0f0\"><b>PATIENT DETAILS</b></td>\r\n          </tr>\r\n          <tr style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\">\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>Name : </b>{{printData.patientDetails.name}}</td>\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>Age : </b>{{printData.patientDetails.age}}</td>\r\n          </tr>\r\n          <tr style=\"border: 2px solid black; border-collapse: collapse;\">\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>Gender :</b> {{printData.patientDetails.gender}}</td>\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>Occupation :</b> {{printData.patientDetails.occupation}}</td>\r\n          </tr>\r\n          <tr style=\"border: 2px solid black; border-collapse: collapse;\">\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>Identity Mark 1 :</b> {{printData.patientDetails.identyMark1}}\r\n            </td>\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>Location 1 :</b> {{printData.patientDetails.location1}}</td>\r\n          </tr>\r\n          <tr style=\"border: 2px solid black; border-collapse: collapse;\">\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>Identity Mark 2 : </b>{{printData.patientDetails.identyMark2}}</td>\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>Location 2 :</b> {{printData.patientDetails.location2}}</td>\r\n          </tr>\r\n          <tr style=\"border: 2px solid black; border-collapse: collapse;\">\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>Address : </b>{{printData.patientDetails.doorNoStreet}}</td>\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>City/ District :</b> {{printData.patientDetails.cityDistrict}}\r\n            </td>\r\n          </tr>\r\n          <tr style=\"border: 2px solid black; border-collapse: collapse;\">\r\n            <td colspan=\"2\" style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>Phone Number : </b>{{printData.patientDetails.phoneNumber}}\r\n            </td>\r\n          </tr>\r\n          <tr style=\"text-align: left; border: 2px solid black; border-collapse: collapse; \">\r\n            <td colspan=\"2\" style=\"padding: 6px; color: #6f0b82;background-color: #f7f0f0\"><b>DOCTOR DETAILS AND INITIAL\r\n                EXAMINATION</b></td>\r\n          </tr>\r\n          <tr style=\"border: 2px solid black; border-collapse: collapse;\">\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>Doctor Name :</b> {{printData.doctorDetailsAndiInitialExamination.doctorName}}</td>\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>MCI Registration Number :</b>\r\n              {{printData.doctorDetailsAndiInitialExamination.doctorRegistrationNumber}}</td>\r\n          </tr>\r\n          <tr style=\"border: 2px solid black; border-collapse: collapse;\">\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>Pulse :</b>\r\n            {{printData.doctorDetailsAndiInitialExamination.pulse}}</td>\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>Blood Pressure : </b>\r\n            {{printData.doctorDetailsAndiInitialExamination.bloodPressureHigh}}/{{printData.doctorDetailsAndiInitialExamination.bloodPressureLow}}</td>\r\n          </tr>\r\n          <tr style=\"border: 2px solid black; border-collapse: collapse;\">\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>Respiration Rate :</b>{{printData.doctorDetailsAndiInitialExamination.respirationRate}}</td>\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>Oxygen Saturation : </b>{{printData.doctorDetailsAndiInitialExamination.oxygenSaturation}}</td>\r\n          </tr>\r\n          <tr style=\"border: 2px solid black; border-collapse: collapse;\">\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>Pupillary Reaction :</b> {{printData.doctorDetailsAndiInitialExamination.pupillaryReaction}}</td>\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>Nature of Injury :</b> {{printData.doctorDetailsAndiInitialExamination.injuryType}}\r\n            </td>\r\n          </tr>\r\n          <tr style=\"text-align: left; border: 2px solid black; border-collapse: collapse; \">\r\n            <td colspan=\"2\" style=\"padding: 6px; color: #6f0b82;background-color: #f7f0f0\"><b>ACCIDENT DETAILS</b></td>\r\n          </tr>\r\n          <tr style=\"border: 2px solid black; border-collapse: collapse;\">\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>Location :</b> {{printData.accidentDetails.location}}</td>\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>Landmark : </b>{{printData.accidentDetails.landmark}}</td>\r\n          </tr>\r\n          <tr style=\"border: 2px solid black; border-collapse: collapse;\">\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>Accident Date & Time:</b>\r\n             {{printData.accidentDetails.accidentDate}}/{{printData.accidentDetails.accidentTime}}</td>\r\n            <td style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>Accident Type:</b> {{printData.accidentDetails.accidentType}} </td>\r\n          </tr>\r\n          <tr style=\"border: 2px solid black; border-collapse: collapse;\">\r\n            <td colspan=\"2\" style=\"border: 2px solid black; border-collapse: collapse; padding: 5px\"><b>Doctor\r\n                Description:</b> {{printData.doctorDetailsAndiInitialExamination.doctorDescription}}</td>\r\n          </tr>\r\n          <tr\r\n            style=\"text-align: left; border: 2px solid black; border-bottom: 1px solid black; border-collapse: collapse; \">\r\n            <td colspan=\"2\" style=\"padding: 6px; border-bottom: none; color: #6f0b82; background-color: #f7f0f0\"><b>RTA\r\n                DETAILS</b></td>\r\n          </tr>\r\n          <tr style=\"border: 2px solid black; border-collapse: collapse;\">\r\n            <td style=\"border:2px solid black; border-top: none; padding: 6px; padding: 5px; border-collapse:collapse; \">\r\n              <b>Patient Position : </b>{{printData.accidentDetails.patientPosition}}</td>\r\n            <td style=\"border:2px solid black; border-top: none; padding: 6px; padding: 5px; border-collapse:collapse;\">\r\n              <b>Vechile Type :</b> {{printData.accidentDetails.vechileType}} </td>\r\n          </tr>\r\n          <tr style=\"border: 2px solid black; border-collapse: collapse;\">\r\n            <td colspan=\"2\"\r\n              style=\"border:2px solid black; border-top:none; padding: 6px; padding: 5px; border-collapse:collapse;\">\r\n              <b>Patient Type : </b>{{printData.accidentDetails.patientType}}</td>\r\n          </tr>\r\n        </tbody>\r\n    \r\n      </table>\r\n    </div> -->\r\n\r\n    <div class=\"row footer\">\r\n      <div class=\"col-6\">\r\n        <button class=\"btn btn-light\" routerLink='/landing/dashboard'>Dashboard</button>\r\n      </div>\r\n      <div class=\"col-6 text-right\">\r\n        <button (click)=\"printPDF()\" class=\"btn btn-light\"> Print</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</body>"

/***/ }),

/***/ "./src/app/printpage/printpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/printpage/printpage.component.ts ***!
  \**************************************************/
/*! exports provided: PrintpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintpageComponent", function() { return PrintpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_share_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/share-service.service */ "./src/app/services/share-service.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hardpool_ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hardpool/ngx-spinner */ "./node_modules/@hardpool/ngx-spinner/fesm5/hardpool-ngx-spinner.js");






var PrintpageComponent = /** @class */ (function () {
    function PrintpageComponent(dataService) {
        this.dataService = dataService;
    }
    PrintpageComponent.prototype.ngOnInit = function () {
        this.getPrintData();
        this.spinnerConfig = {
            placement: _hardpool_ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["SPINNER_PLACEMENT"].block_window,
            animation: _hardpool_ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["SPINNER_ANIMATIONS"].spin_3,
            size: "4rem",
            color: "#1574b3"
        };
    };
    PrintpageComponent.prototype.getPrintData = function () {
        this.printData = this.dataService.getArData();
        console.log(this.printData);
    };
    PrintpageComponent.prototype.printPDF = function () {
        var divToPrint = document.getElementById('toPrint');
        var newWin = window.open('', 'Print-Window');
        newWin.document.open();
        newWin.document.write('<html><body onload="window.print()">' + divToPrint.innerHTML + '</body></html>');
        newWin.document.close();
        setTimeout(function () { newWin.close(); }, 10);
    };
    PrintpageComponent.prototype.captureScreen = function () {
        var _this = this;
        this.showSpinner = true;
        var data = document.getElementById('toPrint');
        html2canvas__WEBPACK_IMPORTED_MODULE_4___default()(data).then(function (canvas) {
            // Few necessary setting options  
            var imgWidth = 208;
            var pageHeight = 305;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_3__('p', 'mm', 'a4'); // A4 size page of PDF  
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save(_this.printData.arNumber + ".pdf"); // Generated PDF  
            _this.showSpinner = false;
        });
    };
    PrintpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-printpage',
            template: __webpack_require__(/*! ./printpage.component.html */ "./src/app/printpage/printpage.component.html"),
            styles: [__webpack_require__(/*! ./printpage.component.css */ "./src/app/printpage/printpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_share_service_service__WEBPACK_IMPORTED_MODULE_2__["ShareServiceService"]])
    ], PrintpageComponent);
    return PrintpageComponent;
}());



/***/ }),

/***/ "./src/app/services/interceptor.ts":
/*!*****************************************!*\
  !*** ./src/app/services/interceptor.ts ***!
  \*****************************************/
/*! exports provided: HttpInter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInter", function() { return HttpInter; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");



var HttpInter = /** @class */ (function () {
    function HttpInter() {
    }
    HttpInter.prototype.intercept = function (req, next) {
        var jwt = localStorage.getItem('currentUserDash');
        jwt ? jwt = JSON.parse(jwt).token : '';
        if (jwt) {
            req = req.clone({
                setHeaders: {
                    Authorization: "Bearer " + jwt
                }
            });
        }
        return next.handle(req);
    };
    return HttpInter;
}());



/***/ }),

/***/ "./src/app/services/network.ts":
/*!*************************************!*\
  !*** ./src/app/services/network.ts ***!
  \*************************************/
/*! exports provided: NetworkProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkProvider", function() { return NetworkProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");






/*
  Generated class for the NetworkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NetworkProvider = /** @class */ (function () {
    function NetworkProvider(http) {
        this.http = http;
    }
    NetworkProvider.prototype.getData = function (url) {
        return this.http.get(url);
    };
    NetworkProvider.prototype.postData = function (url, body) {
        return this.http.post(url, body);
    };
    NetworkProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NetworkProvider);
    return NetworkProvider;
}());



/***/ }),

/***/ "./src/app/services/share-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/share-service.service.ts ***!
  \***************************************************/
/*! exports provided: ShareServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareServiceService", function() { return ShareServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShareServiceService = /** @class */ (function () {
    function ShareServiceService() {
    }
    ShareServiceService.prototype.setArData = function (v) {
        this.arData = v;
        console.log(this.arData);
    };
    ShareServiceService.prototype.getArData = function () {
        return this.arData;
    };
    ShareServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShareServiceService);
    return ShareServiceService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    // baseUrl:"https://accident-register.herokuapp.com"
    baseUrl: "http://localhost:5000"
    // baseUrl:"http://13.234.52.55:9002"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\IIT\Angular\AR-Admin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map