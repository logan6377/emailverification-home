webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".link{\r\n      text-decoration: none;\r\n      color: #3991e3;\r\n     \r\n}\r\n.ctagroup{\r\n      position: absolute;\r\n      top: 2%;\r\n      right: 2%;\r\n      color: #3991e3;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container-fluid\">   \n      <router-outlet></router-outlet> \n</div>\n  \n<!-- <br>\n<br>\n<br>\n<app-everify-list *ngIf=\"showElist\"></app-everify-list> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emailcheck_service__ = __webpack_require__("./src/app/emailcheck.service.ts");
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
    function AppComponent(db, eservice) {
        this.db = db;
        this.eservice = eservice;
    }
    AppComponent.prototype.onSubmit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__emailcheck_service__["a" /* EmailcheckService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__emailcheck_service__ = __webpack_require__("./src/app/emailcheck.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__everify_everify_component__ = __webpack_require__("./src/app/everify/everify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__everify_list_everify_list_component__ = __webpack_require__("./src/app/everify-list/everify-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__verified_list_verified_list_component__ = __webpack_require__("./src/app/verified-list/verified-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__emailtest_emailtest_component__ = __webpack_require__("./src/app/emailtest/emailtest.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__verified_list_verified_list_component__["a" /* VerifiedListComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__everify_everify_component__["a" /* EverifyComponent */],
                __WEBPACK_IMPORTED_MODULE_12__everify_list_everify_list_component__["a" /* EverifyListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__verified_list_verified_list_component__["a" /* VerifiedListComponent */],
                __WEBPACK_IMPORTED_MODULE_14__emailtest_emailtest_component__["a" /* EmailtestComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__emailcheck_service__["a" /* EmailcheckService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/emailcheck.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailcheckService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated'; 
var EmailcheckService = /** @class */ (function () {
    function EmailcheckService(http /* ,public db: AngularFireDatabase */) {
        //this.clients = this.db.list('/Data') as FirebaseListObservable<any[]>;
        this.http = http; /* ,public db: AngularFireDatabase */
        this.api = 'https://app.verify-email.org/api/v1/jjZodIbEGuz4Mk88b8WLLdntzCflkWx2qZ88WMUMNiC9g9C8zr/verify/';
        this.showList = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.showListStatus = this.showList.asObservable();
        this.inputValue = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.inputValueChange = this.inputValue.asObservable();
    }
    EmailcheckService.prototype.verifyEmail = function (email) {
        console.log(this.api + email);
        return this.http.get(this.api + email, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    EmailcheckService.prototype.changeMessage = function (showhide) {
        this.showList.next(showhide);
    };
    EmailcheckService.prototype.changeValue = function (value) {
        this.inputValue.next(value);
    };
    EmailcheckService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] /* ,public db: AngularFireDatabase */])
    ], EmailcheckService);
    return EmailcheckService;
}());



/***/ }),

/***/ "./src/app/emailtest/emailtest.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/emailtest/emailtest.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n   \n<app-everify></app-everify> \n\n\n<br>\n<br>\n<br>\n<app-everify-list *ngIf=\"showElist\"></app-everify-list>"

/***/ }),

/***/ "./src/app/emailtest/emailtest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailtestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emailcheck_service__ = __webpack_require__("./src/app/emailcheck.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailtestComponent = /** @class */ (function () {
    function EmailtestComponent(db, eservice) {
        var _this = this;
        this.db = db;
        this.eservice = eservice;
        this.itemValue = '';
        this.showElist = false;
        this.items = db.list('items').valueChanges();
        this.eservice.showListStatus.subscribe(function (res) { return _this.showElist = res; });
    }
    EmailtestComponent.prototype.onSubmit = function () {
        this.db.list('/items').push({ content: this.itemValue });
        this.itemValue = '';
    };
    EmailtestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-emailtest',
            template: __webpack_require__("./src/app/emailtest/emailtest.component.html"),
            styles: [__webpack_require__("./src/app/emailtest/emailtest.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__emailcheck_service__["a" /* EmailcheckService */]])
    ], EmailtestComponent);
    return EmailtestComponent;
}());



/***/ }),

/***/ "./src/app/everify-list/everify-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/everify-list/everify-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n      <!-- <h2>Content from Firebase</h2>\n      <div class=\"col-md-3\">\n            <pre *ngFor=\"let item of items | async\">{{item.email}}</pre>\n      </div>  -->\n\n      <table class=\"table table-bordered\">\n            <thead>\n                  <tr>\n                        <th width=\"2%\">No.</th>\n                        <th>Email Id</th>\n                        <th>status value</th> \n                        <th>smtp_code</th> \n                        <th>smtp_log</th> \n                        <th>Status</th> \n                  </tr>\n            </thead>\n            <tbody>\n                  <tr *ngFor=\"let value of items | async; let i = index\">\n                        <td>{{i}}</td>\n                        <td>{{value.email.email}}</td>\n                        <td>{{value.email.status}}</td>                        \n                        <td>{{value.email.smtp_code}}</td>\n                        <td>{{value.email.smtp_log}}</td>\n                        <td [ngClass]=\"{'active':value.email.status==1}\">{{value.email.status_description}}</td>\n                  </tr> \n            </tbody>\n      </table> \n</div>\n"

/***/ }),

/***/ "./src/app/everify-list/everify-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EverifyListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emailcheck_service__ = __webpack_require__("./src/app/emailcheck.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EverifyListComponent = /** @class */ (function () {
    function EverifyListComponent(db, eservice) {
        var _this = this;
        this.db = db;
        this.eservice = eservice;
        this.itemValue = '';
        this.eservice.inputValueChange.subscribe(function (res) { return _this.inputValue = res; });
        this.items = db.list(this.inputValue).valueChanges();
        console.log('aaaaaa', this.items);
    }
    EverifyListComponent.prototype.ngOnInit = function () {
    };
    EverifyListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-everify-list',
            template: __webpack_require__("./src/app/everify-list/everify-list.component.html"),
            styles: [__webpack_require__("./src/app/everify-list/everify-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__emailcheck_service__["a" /* EmailcheckService */]])
    ], EverifyListComponent);
    return EverifyListComponent;
}());



/***/ }),

/***/ "./src/app/everify/everify.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/everify/everify.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"jumbotron jumbotron-fluid\">\n            <div class=\"container\">\n                  <h1 class=\"display-4\">Email Verification</h1>\n                  <p class=\"lead\">Add .CSV URL and Verifiy </p>\n            </div>\n      </div>\n\n      <div class=\"row text-center\">\n            <div class=\"col-3\">\n                  <div class=\"input-group mb-3\">  \n                        <input type=\"text\" class=\"form-control\" placeholder=\"Email List Name\" \n                        (input)=\"checkText($event.target.value)\" \n                        (keypress)=\"omit_special_char($event)\"\n                        (keydown.space)=\"$event.preventDefault()\" \n                        [(ngModel)]=\"textValue\"\n                        >  \n                  </div>\n            </div>\n            <div class=\"col-3\">  \n                  <div class=\"input-group mb-3\">\n                        <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">Upload</span>\n                        </div>\n                        <div class=\"custom-file\">\n                              <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\" (change)=\"handleFileInput($event.target.files)\">\n                              <label class=\"custom-file-label\" for=\"inputGroupFile01\">Choose file</label>\n                        </div>\n                  </div>\n                   \n            </div> \n\n            <div class=\"col-1\">\n                  <button class=\"btn btn1 btn2\" (click)=\"checkData()\" [disabled]=\"fetchCta\">\n                        Fetch Data\n                  </button>\n            </div>\n            <div class=\"col-1\">\n                  <button class=\"btn btn1 btn2 btn-success\" (click)=\"jsonToExcel()\" [disabled]=\"loadData\">\n                        Export Result\n                  </button>\n            </div>\n      </div> \n\n      \n \n\t<!-- <div style=\"width: 300px;\">\n\t\t<form (ngSubmit)=\"onSubmit()\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"item\">Item</label> <input type=\"text\"\n\t\t\t\t\tclass=\"form-control\" placeholder=\"Enter content...\" id=\"item\"\n\t\t\t\t\trequired [(ngModel)]=\"itemValue\" name=\"item\">\n\t\t\t</div>\n \n\t\t\t<div class=\"btn-group\">\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">Submit</button>\n\t\t\t</div>\n\t\t</form>\n\t</div> -->\n \n\t\n\n</div>\n"

/***/ }),

/***/ "./src/app/everify/everify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EverifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_csv_Angular2_csv__ = __webpack_require__("./node_modules/angular2-csv/Angular2-csv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_csv_Angular2_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_csv_Angular2_csv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__emailcheck_service__ = __webpack_require__("./src/app/emailcheck.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_timer__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/timer.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EverifyComponent = /** @class */ (function () {
    function EverifyComponent(db, eservice) {
        this.db = db;
        this.eservice = eservice;
        this.title = 'JavaSampleApproach';
        this.description = 'Angular5-Firebase Demo';
        this.textValue = "";
        this.itemValue = '';
        this.csvData = [];
        this.csvDataAll = [];
        this.fetchCta = true;
        this.alive = true;
        this.loadData = true;
    }
    EverifyComponent.prototype.onSubmit = function () {
        this.db.list('/items').push({ content: this.itemValue });
        this.itemValue = '';
    };
    EverifyComponent.prototype.ngOnInit = function () {
    };
    EverifyComponent.prototype.handleFileInput = function (files) {
        var _this = this;
        console.log(files);
        if (files && files.length > 0) {
            var file = files.item(0);
            var reader_1 = new FileReader();
            reader_1.readAsText(file);
            reader_1.onload = function (e) {
                _this.uploadedData = reader_1.result;
                //console.log(this.uploadedData);  
            };
        }
    };
    EverifyComponent.prototype.checkData = function (res) {
        var _this = this;
        this.eservice.changeMessage(true);
        this.eservice.changeValue(this.textValue);
        var allTextLines = this.uploadedData.split(/\r\n|\n/);
        allTextLines = allTextLines.filter(function (e) { return e.replace(/(\r\n|\n|\r)/gm, ""); });
        var headers = allTextLines[0].split(',');
        var lines = [];
        for (var i = 0; i < allTextLines.length; i++) {
            var data = allTextLines[i].split(',')[1];
            lines.push(data);
        }
        this.csvData = lines;
        this.db.list('/dropdown').push({ detail: {
                'dd': this.textValue,
                'total': this.csvData.length
            } });
        var a = 0;
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].timer(0, 1000)
            .takeWhile(function () { return _this.alive; })
            .subscribe(function () {
            _this.eservice.verifyEmail(_this.csvData[a]).subscribe(function (data) {
                console.log(status);
                _this.db.list('/' + _this.textValue).push({ email: data });
                _this.csvDataAll.push(data);
            });
            a++;
            if (a == _this.csvData.length) {
                _this.alive = false;
                _this.loadData = false;
            }
        });
    };
    EverifyComponent.prototype.jsonToExcel = function () {
        //this.wholeDate = this.eservice.getClients()
        //console.log(this.wholeDate)
        new __WEBPACK_IMPORTED_MODULE_3_angular2_csv_Angular2_csv__["Angular2Csv"](this.csvDataAll, 'Verified_List', { headers: Object.keys(this.csvData[0]) });
    };
    EverifyComponent.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return errMsg;
    };
    EverifyComponent.prototype.omit_special_char = function (event) {
        var k;
        k = event.charCode; //         k = event.keyCode;  (Both can be used)
        return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
    };
    EverifyComponent.prototype.checkText = function (value) {
        if (value != "") {
            this.fetchCta = false;
        }
        else {
            this.fetchCta = true;
        }
    };
    EverifyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-everify',
            template: __webpack_require__("./src/app/everify/everify.component.html"),
            styles: [__webpack_require__("./src/app/everify/everify.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__emailcheck_service__["a" /* EmailcheckService */]])
    ], EverifyComponent);
    return EverifyComponent;
}());



/***/ }),

/***/ "./src/app/verified-list/verified-list.component.css":
/***/ (function(module, exports) {

module.exports = ".logtext{\r\n      font-size: 10px\r\n}\r\ntd.active{\r\n      \r\n}\r\n.table-bordered td.active{\r\n      background: #e76761 !important\r\n}"

/***/ }),

/***/ "./src/app/verified-list/verified-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"jumbotron jumbotron-fluid\">\n            <div class=\"container\">\n                  <h1 class=\"display-4\">Verify All Emails</h1>\n                  <p class=\"lead\">Check previously verified Emails</p>\n            </div>\n      </div>\n\n      <div class=\"row mb-5\">\n            <div class=\"col-3\">\n                  <div class=\"form-group mb-2\"> \n\n                        <select (change)=\"filterForeCasts($event.target.value)\" class=\"form-control\">\n                              <option value=\"0\">--Verified List--</option>\n                              <option *ngFor=\"let summary of summaries; let i = index\" value={{i}}>\n                                    {{summary}}\n                              </option>\n                        </select>\n                  </div> \n            </div>\n            <div class=\"col-2\" *ngIf=\"showCount\">\n                  Total Email List : {{countShow}}\n            </div>\n            <div class=\"col-2\">\n                  <button class=\"btn btn1 btn2 btn-success\" (click)=\"jsonToExcel()\" [disabled]=\"loadData\">\n                        Export Result\n                  </button>\n            </div>\n      </div>\n\n      <table class=\"table table-bordered\" *ngIf=\"showTable\">\n            <thead>\n                  <tr>\n                        <th width=\"2%\">No.</th>\n                        <th>Email Id</th>\n                        <th>status value</th> \n                        <th>smtp_code</th> \n                        <th width=\"30%\">smtp_log</th> \n                        <th>Status</th> \n                  </tr>\n            </thead>\n            <tbody>\n                  <tr *ngFor=\"let value of items; let i = index\">\n                        <td>{{i}}</td>\n                        <td>{{value.email.email}}</td>\n                        <td>{{value.email.status}}</td>                        \n                        <td>{{value.email.smtp_code}}</td>\n                        <td class=\"logtext\">{{value.email.smtp_log}}</td>\n                        <td [ngClass]=\"{'active':value.email.status!=1}\">{{value.email.status_description}}</td> <!--  -->\n                  </tr> \n            </tbody>\n      </table> \n\n</div> \n\n"

/***/ }),

/***/ "./src/app/verified-list/verified-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifiedListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emailcheck_service__ = __webpack_require__("./src/app/emailcheck.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_csv_Angular2_csv__ = __webpack_require__("./node_modules/angular2-csv/Angular2-csv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_csv_Angular2_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_csv_Angular2_csv__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerifiedListComponent = /** @class */ (function () {
    function VerifiedListComponent(db, eservice) {
        var _this = this;
        this.db = db;
        this.eservice = eservice;
        this.summaries = [];
        this.count = [];
        this.showCount = false;
        this.showTable = false;
        this.finalList = [];
        this.alldata = [];
        this.db.list('/dropdown')
            .valueChanges()
            .subscribe(function (data) {
            _this.alldata.push(data);
            for (var i = 0; i < _this.alldata[0].length; i++) {
                _this.summaries.push(_this.alldata[0][i].detail.dd);
                _this.count.push(_this.alldata[0][i].detail.total);
            }
        });
    }
    VerifiedListComponent.prototype.filterForeCasts = function (value) {
        var _this = this;
        this.showTable = false;
        this.selection = this.summaries[value];
        this.showCount = true;
        this.countShow = this.count[value];
        console.log(this.count);
        this.db.list(this.selection)
            .valueChanges()
            .subscribe(function (data) {
            console.log(data);
            _this.showTable = true;
            _this.items = data;
            _this.csvDataAll = data;
        });
    };
    VerifiedListComponent.prototype.jsonToExcel = function () {
        //this.wholeDate = this.eservice.getClients()
        console.log(this.csvDataAll);
        for (var i = 0; i < this.csvDataAll.length; i++) {
            this.finalList.push(this.csvDataAll[i].email);
        }
        var options = {
            headers: ['Email Id', 'status value', 'smtp_code', 'smtp_log', 'status_description']
        };
        new __WEBPACK_IMPORTED_MODULE_3_angular2_csv_Angular2_csv__["Angular2Csv"](this.finalList, 'Verified_List', options);
    };
    VerifiedListComponent.prototype.ngOnInit = function () {
    };
    VerifiedListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-verified-list',
            template: __webpack_require__("./src/app/verified-list/verified-list.component.html"),
            styles: [__webpack_require__("./src/app/verified-list/verified-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__emailcheck_service__["a" /* EmailcheckService */]])
    ], VerifiedListComponent);
    return VerifiedListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBjnY2PGr5B6bC7Vm4Thwp74S4P4XlCI8M",
        authDomain: "emailverify-5838d.firebaseapp.com",
        databaseURL: "https://emailverify-5838d.firebaseio.com",
        projectId: "emailverify-5838d",
        storageBucket: "emailverify-5838d.appspot.com",
        messagingSenderId: "272150387950"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map