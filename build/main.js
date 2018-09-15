webpackJsonp([17],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_customer_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var CustomerPage = /** @class */ (function () {
    function CustomerPage(navCtrl, navParams, customer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customer = customer;
        // this.customer.
    }
    CustomerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerPage');
    };
    CustomerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-customer',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/customer/customer.html"*/'<!--\n  Generated template for the CustomerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>客户列表</ion-title>\n    </ion-navbar>\n    <ion-buttons end>\n        <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n        <ion-item>\n\n            <h2>张三</h2>\n            <p>\n                电话 15172480645</p>\n\n        </ion-item>\n        <ion-item>\n\n            <h2>张三</h2>\n            <p>\n                电话 15172480645</p>\n\n        </ion-item>\n    </ion-list>\n    <div class="Letter">\n        <span>A</span>\n        <span>B</span>\n        <span>C</span>\n        <span>D</span>\n        <span>E</span>\n        <span>F</span>\n\n        <span>G</span>\n        <span>H</span>\n        <span>I</span>\n        <span>J</span>\n        <span>K</span>\n        <span>L</span>\n        <span>M</span>\n        <span>N</span>\n        <span>O</span>\n        <span>P</span>\n        <span>Q</span>\n        <span>R</span>\n        <span>S</span>\n        <span>T</span>\n        <span>U</span>\n        <span>V</span>\n        <span>W</span>\n        <span>X</span>\n        <span>Y</span>\n        <span>Z</span>\n        <span>#</span>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/customer/customer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_customer_service__["a" /* appCustomerService */]])
    ], CustomerPage);
    return CustomerPage;
}());

//# sourceMappingURL=customer.js.map

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
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



// import { HttpErrorResponse } from "@angular/common/http";


var MyHttpService = /** @class */ (function () {
    function MyHttpService(http, appConfig, stroge, alertCtrl) {
        this.http = http;
        this.appConfig = appConfig;
        this.stroge = stroge;
        this.alertCtrl = alertCtrl;
        this.httpTimeout = 3000;
        this.isMock = false;
        this.isDev = true;
    }
    Object.defineProperty(MyHttpService.prototype, "ip", {
        get: function () {
            return this.appConfig.ip;
        },
        enumerable: true,
        configurable: true
    });
    MyHttpService.prototype.Get = function (url, options, authHeader) {
        var _this = this;
        if (authHeader === void 0) { authHeader = true; }
        if (this.isMock) {
            return this.mockGet(url);
        }
        if (!options)
            options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.stroge.token }) };
        else
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.stroge.token });
        return this.http
            .get("" + this.ip + url, options)
            .toPromise()
            .then(function (rtn) {
            var result = rtn.json();
            if (rtn.status > 400 && rtn.status < 500) {
                return result = { ok: false, msg: '资源访问错误:' + rtn.json().message, status: rtn.status };
            }
            else if (rtn.status >= 500) {
                return result = { ok: false, msg: _this.appConfig.debug ? rtn.json().msg : '服务器内部错误:', status: rtn.status };
            }
            if (!result.ok) {
                return _this.createMessage("error", result.data) && false;
            }
            return result.data;
        }).catch(function (e) {
            _this.handleError(e);
        });
    };
    MyHttpService.prototype.Post = function (url, body, options) {
        var _this = this;
        if (this.isMock) {
            return this.mockGet(url);
        }
        if (!options)
            options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.stroge.token }) };
        else
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.stroge.token });
        return this.http
            .post("" + this.ip + url, body, options)
            .toPromise()
            .then(function (rtn) {
            var result = rtn.json();
            ;
            if (rtn.status > 400 && rtn.status < 500) {
                result = { ok: false, data: '资源访问错误:' + rtn.json().message, status: rtn.status };
            }
            else if (rtn.status >= 500) {
                result = { ok: false, data: _this.appConfig.debug ? rtn.json().msg : '服务器内部错误:', status: rtn.status };
            }
            if (!result.ok) {
                _this.createMessage("error", result.msg);
                return false;
            }
            else {
                return result.data;
            }
        }).catch(function (e) { return _this.handleError(e); });
        /**超过timeout 时间就会执行以下代码,返回错误信息 */
    };
    MyHttpService.prototype.Delete = function (url, options) {
        var _this = this;
        url = url.startsWith("http") ? url : "" + this.ip + url;
        options = options ? options : {};
        return this.http
            .delete("" + this.ip + url)
            .toPromise()
            .then(function (rtn) {
            var result = rtn;
            return result.ok
                ? result.data
                : _this.createMessage("error", result.data);
        });
    };
    MyHttpService.prototype.Put = function (url, body, options) {
        var _this = this;
        url = url.startsWith("http") ? url : "" + this.ip + url;
        options = options ? options : {};
        // options.withCredentials = true;
        return this.http
            .put("" + this.ip + url, body)
            .toPromise()
            .then(function (rtn) {
            var result = rtn;
            return result.ok
                ? result.data
                : _this.createMessage("error", result.data);
        });
    };
    MyHttpService.prototype.handleError = function (res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, body;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = res.status;
                        switch (_a) {
                            case 404: return [3 /*break*/, 1];
                            case 500: return [3 /*break*/, 2];
                        }
                        return [3 /*break*/, 4];
                    case 1:
                        this.createMessage('error', '404请求的资源不存在');
                        return [3 /*break*/, 5];
                    case 2: return [4 /*yield*/, res.json()];
                    case 3:
                        body = _b.sent();
                        this.createMessage('error', this.appConfig.debug ? body.msg : '服务器内部错误');
                        return [3 /*break*/, 5];
                    case 4:
                        this.createMessage('error', res.status + '尚未捕获的请求异常');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, false];
                }
            });
        });
    };
    MyHttpService.prototype.localGet = function (url) {
        return this.http.get(url).toPromise();
    };
    MyHttpService.prototype.localGetJSON = function (url) {
        return this.http
            .get(url)
            .toPromise()
            .then(function (rtn) { return rtn.json(); });
    };
    MyHttpService.prototype.mockGet = function (url) {
        return this.http
            .get("/assets/mock" + url + ".json")
            .toPromise()
            .then(function (rtn) { return rtn.json(); })
            .then(function (rtn) { return rtn.data; });
    };
    MyHttpService.prototype.createMessage = function (type, text) {
        var alert = this.alertCtrl.create({
            subTitle: type == 'error' ? '请求异常' : "提示",
            title: text,
            buttons: ['确定']
        });
        alert.present();
    };
    MyHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */],
            __WEBPACK_IMPORTED_MODULE_3__storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["AlertController"]])
    ], MyHttpService);
    return MyHttpService;
}());

//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 1302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appSellOnCreditService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__(9);
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



var appSellOnCreditService = /** @class */ (function () {
    function appSellOnCreditService(http, sto) {
        this.http = http;
        this.sto = sto;
        this.api = {
            /*** 查询赊销记录列表 post queryParameter */
            accountDebtList: "/app/sellOnCredit/accountDebtList",
            /**查询还款记录列表 post queryParameter  */
            accountRepayList: "/app/sellOnCredit/accountRepayList",
            /**get id flag */
            confirmRepay: "/app/sellOnCredit/confirmRepay",
            /**post accountRepayRq  */
            offlineRepayApply: "/app/sellOnCredit/offlineRepayApply",
            /**get payPassword id  */
            offlineRepayConfire: "/app/sellOnCredit/offlineRepayConfire",
            /**post accountRepayRq  */
            onlineRepay: "/app/sellOnCredit/onlineRepay",
            /**赊销订单支付 post orderPayRq  */
            orderPay: "/app/sellOnCredit/orderPay",
            /**
             *  查询买家信用
             */
            qryBuyerCredit: '/app/sellOnCredit/qryBuyerCredit',
        };
    }
    appSellOnCreditService.prototype.accountDebtList = function (queryParameter) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Post(this.api.accountDebtList, queryParameter)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appSellOnCreditService.prototype.accountRepayList = function (queryParameter) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Post(this.api.accountRepayList, queryParameter)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appSellOnCreditService.prototype.confirmRepay = function (id, flag) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.confirmRepay, { params: { id: id, flag: flag } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appSellOnCreditService.prototype.offlineRepayApply = function (accountRepayRq) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Post(this.api.offlineRepayApply, accountRepayRq)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appSellOnCreditService.prototype.offlineRepayConfire = function (id, payPassword) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Post(this.api.offlineRepayConfire, { params: { id: id, payPassword: payPassword } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appSellOnCreditService.prototype.onlineRepay = function (accountRepayRq) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Post(this.api.onlineRepay, accountRepayRq)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**赊销订单支付 */
    appSellOnCreditService.prototype.orderPay = function (orderPayRq) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Post(this.api.orderPay, orderPayRq)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**查询买家信息 */
    appSellOnCreditService.prototype.qryBuyerCredit = function (orderNo) {
        return __awaiter(this, void 0, void 0, function () {
            var mktId, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mktId = this.sto.market.mktId;
                        return [4 /*yield*/, this.http.Get(this.api.qryBuyerCredit, { params: { orderNo: orderNo, mktId: mktId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appSellOnCreditService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* MyHttpService */], __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]])
    ], appSellOnCreditService);
    return appSellOnCreditService;
}());

//# sourceMappingURL=app_sellOnCredit.js.map

/***/ }),

/***/ 1320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic3_jpush__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_mktlist_mktlist__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_notification_notification__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_ble__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__share_service_common_service__ = __webpack_require__(41);
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










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, jpush, event, alert, modelC, ble, common) {
        var _this = this;
        this.jpush = jpush;
        this.event = event;
        this.alert = alert;
        this.modelC = modelC;
        this.ble = ble;
        this.common = common;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_mktlist_mktlist__["a" /* MktlistPage */];
        this.devices = [];
        this.sequence = 0;
        this.weight = 0; //蓝牙秤重量
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            // platform.backButton.
        });
        // this.modelC.create(NotificationPage, { userId: 8675309 }).present();
        //点击通知进入应用程序时会触发的事件，点击通知进入程序
        this.jpush.openNotification().subscribe(function (msg) {
            _this.modelC.create(__WEBPACK_IMPORTED_MODULE_6__pages_notification_notification__["a" /* NotificationPage */], msg).present();
        });
        //收到通知时会触发该事件，收到通知
        this.jpush.receiveNotification().subscribe(function (msg) {
            _this.alertCtrl(msg);
        });
        //监听自定义消息通知
        this.jpush.receiveMessage().subscribe(function (msg) {
            _this.alertCtrl(msg);
        });
        this.init();
        //蓝牙监听
        this.event.subscribe('', function (device) {
            var status;
            _this.ble.isConnected(device.id).then(function () {
                status = setInterval(function () {
                    _this.ble.startNotification(device.id, '0000ffe0-0000-1000-8000-00805f9b34fb', '0000ffe1-0000-1000-8000-00805f9b34fb').subscribe(function (buffer) {
                        _this.blueData = String.fromCharCode.apply(null, new Uint8Array(buffer)).split('').reverse().join('').replace('=', '');
                    });
                }, 1000);
            }),
                function () {
                    _this.blueData = '未连接';
                    clearInterval(status);
                };
        });
    }
    MyApp.prototype.init = function () {
        this.jpush.init(); //初始化 开启极光推送
        //提醒开启极光推送
        this.jpush.getUserNotificationSettings().then(function (res) {
            if (res == 0) {
                // 系统设置中已关闭应用推送。
            }
            else if (res > 0) {
                // 系统设置中打开了应用推送。
            }
        });
    };
    MyApp.prototype.alertCtrl = function (msg) {
        this.alert.create({
            title: "推送内容",
            message: JSON.stringify(msg),
            buttons: [
                {
                    text: '取消',
                    handler: function () {
                    }
                },
                {
                    text: '确认',
                    handler: function () {
                    }
                }
            ]
        }).present();
    };
    MyApp.prototype.getRegId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.jpush.getRegistrationID()];
                    case 1:
                        _a.regId = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4_ionic3_jpush__["a" /* JPush */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_ble__["a" /* BLE */],
            __WEBPACK_IMPORTED_MODULE_8__share_service_common_service__["a" /* CommonService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 1321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootBarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_home_home_home__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__person_info_person_info__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__opening_wallet1_opening_wallet1__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FootBarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var FootBarPage = /** @class */ (function () {
    function FootBarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__main_home_home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__opening_wallet1_opening_wallet1__["a" /* OpeningWallet1Page */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__person_info_person_info__["a" /* PersonInfoPage */];
    }
    FootBarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FootBarPage');
    };
    FootBarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-foot-bar',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/foot-bar/foot-bar.html"*/'<!--\n  Generated template for the FootBarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-tabs>\n    <ion-tab [root]="tab1Root" tabIcon="home" tabTitle="首页"></ion-tab>\n    <ion-tab [root]="tab2Root" tabIcon="bookmarks" tabTitle="钱包"></ion-tab>\n    <ion-tab [root]="tab3Root" tabIcon="contact" tabTitle="我的"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/foot-bar/foot-bar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], FootBarPage);
    return FootBarPage;
}());

//# sourceMappingURL=foot-bar.js.map

/***/ }),

/***/ 1322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CreditDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var CreditDetailPage = /** @class */ (function () {
    function CreditDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CreditDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreditDetailPage');
    };
    CreditDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-credit-detail',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/credit-detail/credit-detail.html"*/'<!--\n  Generated template for the CreditDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Credit-detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/credit-detail/credit-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], CreditDetailPage);
    return CreditDetailPage;
}());

//# sourceMappingURL=credit-detail.js.map

/***/ }),

/***/ 1323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditSumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CreditSumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var CreditSumPage = /** @class */ (function () {
    function CreditSumPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CreditSumPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreditSumPage');
    };
    CreditSumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-credit-sum',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/credit-sum/credit-sum.html"*/'<!--\n  Generated template for the CreditSumPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>credit-sum</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/credit-sum/credit-sum.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], CreditSumPage);
    return CreditSumPage;
}());

//# sourceMappingURL=credit-sum.js.map

/***/ }),

/***/ 1324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditDetail2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CreditDetail2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var CreditDetail2Page = /** @class */ (function () {
    function CreditDetail2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CreditDetail2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreditDetail2Page');
    };
    CreditDetail2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-credit-detail2',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/credit-detail2/credit-detail2.html"*/'<!--\n  Generated template for the CreditDetail2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Credit-detail2</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/credit-detail2/credit-detail2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], CreditDetail2Page);
    return CreditDetail2Page;
}());

//# sourceMappingURL=credit-detail2.js.map

/***/ }),

/***/ 1325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrearsDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ArrearsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var ArrearsDetailPage = /** @class */ (function () {
    function ArrearsDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ArrearsDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArrearsDetailPage');
    };
    ArrearsDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-arrears-detail',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/arrears-detail/arrears-detail.html"*/'<!--\n  Generated template for the ArrearsDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Arrears-detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/arrears-detail/arrears-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ArrearsDetailPage);
    return ArrearsDetailPage;
}());

//# sourceMappingURL=arrears-detail.js.map

/***/ }),

/***/ 1326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnPayDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UnPayDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var UnPayDetailPage = /** @class */ (function () {
    function UnPayDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UnPayDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UnPayDetailPage');
    };
    UnPayDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-un-pay-detail',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/un-pay-detail/un-pay-detail.html"*/'<!--\n  Generated template for the UnPayDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>un-pay-detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/un-pay-detail/un-pay-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], UnPayDetailPage);
    return UnPayDetailPage;
}());

//# sourceMappingURL=un-pay-detail.js.map

/***/ }),

/***/ 1327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appAnalysisService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(11);
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


var appAnalysisService = /** @class */ (function () {
    function appAnalysisService(http) {
        this.http = http;
        this.api = {
            /**
            * get
            * ?mktId&memberId
            */
            todayInfo: '/app/analysis/todayInfo',
        };
    }
    appAnalysisService.prototype.todayInfo = function (mktId, memberId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.Get(this.api.todayInfo, { params: { mktId: mktId, memberId: memberId } })];
            });
        });
    };
    appAnalysisService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* MyHttpService */]])
    ], appAnalysisService);
    return appAnalysisService;
}());

//# sourceMappingURL=app_analysis.service.js.map

/***/ }),

/***/ 1328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectMoneyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_share_service_common_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CollectMoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var CollectMoneyPage = /** @class */ (function () {
    function CollectMoneyPage(navCtrl, navParams, events, comm) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.comm = comm;
    }
    CollectMoneyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-collect-money',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/collect-money/collect-money.html"*/'<!--\n  Generated template for the CollectMoneyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title mode="ios">收钱</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/collect-money/collect-money.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_2__app_share_service_common_service__["a" /* CommonService */]])
    ], CollectMoneyPage);
    return CollectMoneyPage;
}());

//# sourceMappingURL=collect-money.js.map

/***/ }),

/***/ 1329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberInvitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_platform_market_entity__ = __webpack_require__(1330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_common_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_app_team_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_share_service_http_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_share_service_storage_service__ = __webpack_require__(9);
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







/**
 * Generated class for the Register1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var MemberInvitePage = /** @class */ (function () {
    function MemberInvitePage(navCtrl, navParams, comm, teamSeivice, http, sto, app, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.comm = comm;
        this.teamSeivice = teamSeivice;
        this.http = http;
        this.sto = sto;
        this.app = app;
        this.events = events;
        this.viewRoleType = __WEBPACK_IMPORTED_MODULE_3__app_share_service_common_service__["b" /* roleType */];
        this.myTeams = [];
        this.user();
    }
    MemberInvitePage.prototype.ionViewDidLoad = function () {
    };
    MemberInvitePage.prototype.user = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.comm.getRole()];
                    case 1:
                        _a.userRole = _b.sent();
                        console.log(this.userRole);
                        debugger;
                        return [2 /*return*/];
                }
            });
        });
    };
    MemberInvitePage.prototype.deleteInv = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.teamSeivice.disabledInvite(this.selectInv.id)];
                    case 1:
                        _a.sent();
                        this.http.createMessage("success", "删除成功");
                        this.navCtrl.pop();
                        return [2 /*return*/];
                }
            });
        });
    };
    MemberInvitePage.prototype.agreeInvit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        debugger;
                        return [4 /*yield*/, this.teamSeivice.acceptInvite(this.selectInv.id)];
                    case 1:
                        _b.sent();
                        this.http.createMessage("success", "已同意邀请");
                        return [4 /*yield*/, this.comm.updateSto()];
                    case 2:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.teamSeivice.teamList()];
                    case 3:
                        _a.myTeams = _b.sent();
                        this.navCtrl.pop().then(function () {
                            _this.events.publish("data", _this.myTeams);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MemberInvitePage.prototype.refuseInvit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.teamSeivice.refuseInvite(this.selectInv.id)];
                    case 1:
                        _a.sent();
                        this.http.createMessage("success", "已拒绝邀请");
                        this.navCtrl.pop();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__share_platform_market_entity__["a" /* MemberInvite */])
    ], MemberInvitePage.prototype, "selectInv", void 0);
    MemberInvitePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-memberInvite',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/share/memberInvite.html"*/'<ion-content padding *ngIf="selectInv">\n\n    <div *ngIf="viewRoleType.memType==userRole">\n\n\n\n        <p>邀请人手机号：{{selectInv.recvMobi}}</p>\n\n\n\n        <p>邀请商户姓名:{{selectInv.sendCusName}}</p>\n\n\n\n        <p>操作员类型：</p>\n\n\n\n        <p>邀请时间：{{selectInv.createTime}}</p>\n\n\n\n        <p>邀请原因：{{selectInv.content}}</p>\n\n\n\n        <p>邀请状态：{{selectInv.status}}</p>\n\n\n\n        <button ion-button color="red" block (click)="deleteInv()">删除</button>\n\n    </div>\n\n    <div *ngIf="viewRoleType.cusType==userRole">\n\n\n\n        <p>邀请人手机号：{{selectInv.recvMobi}}</p>\n\n\n\n        <p>邀请商户姓名:{{selectInv.sendCusName}}</p>\n\n\n\n        <p>操作员类型：</p>\n\n\n\n        <p>邀请时间：{{selectInv.createTime}}</p>\n\n\n\n        <p>邀请原因：{{selectInv.content}}</p>\n\n\n\n        <p>邀请状态：{{selectInv.status}}</p>\n\n\n\n        <button ion-button color="red" (click)="agreeInvit()">同意</button>\n\n\n\n        <button ion-button color="red" (click)="refuseInvit()">拒绝</button>\n\n    </div>\n\n\n\n    <div *ngIf="viewRoleType.empType==userRole">\n\n\n\n        <p>邀请人手机号：{{selectInv.recvMobi}}</p>\n\n\n\n        <p>邀请商户姓名:{{selectInv.sendCusName}}</p>\n\n\n\n        <p>操作员类型：</p>\n\n\n\n        <p>邀请时间：{{selectInv.createTime}}</p>\n\n\n\n        <p>邀请原因：{{selectInv.content}}</p>\n\n\n\n        <p>邀请状态：{{selectInv.status}}</p>\n\n\n\n\n\n\n\n    </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/share/memberInvite.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_app_team_service__["a" /* appTeamService */],
            __WEBPACK_IMPORTED_MODULE_5__app_share_service_http_service__["a" /* MyHttpService */],
            __WEBPACK_IMPORTED_MODULE_6__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], MemberInvitePage);
    return MemberInvitePage;
}());

//# sourceMappingURL=memberInvite.js.map

/***/ }),

/***/ 1330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Account */
/* unused harmony export AccountDebt */
/* unused harmony export AccountRepay */
/* unused harmony export AccRecvPay */
/* unused harmony export AppMsgNotify */
/* unused harmony export OrderNo */
/* unused harmony export OssFile */
/* unused harmony export ProdCatalog */
/* unused harmony export Product */
/* unused harmony export RecPaySubject */
/* unused harmony export SMSLog */
/* unused harmony export CustCard */
/* unused harmony export Customer */
/* unused harmony export Member */
/* unused harmony export MemberAccount */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberInvite; });
/* unused harmony export Feelist */
/* unused harmony export PayFeeList */
/* unused harmony export PayFeeRecord */
/* unused harmony export TransArea */
/* unused harmony export Order */
/* unused harmony export OrderDetail */
/* unused harmony export RechargeWithDraw */
/* unused harmony export Device */
/* unused harmony export ContactInvite */
/* unused harmony export orderPayRq */
var Account = /** @class */ (function () {
    function Account() {
    }
    return Account;
}());

var AccountDebt = /** @class */ (function () {
    function AccountDebt() {
    }
    return AccountDebt;
}());

var AccountRepay = /** @class */ (function () {
    function AccountRepay() {
    }
    return AccountRepay;
}());

var AccRecvPay = /** @class */ (function () {
    function AccRecvPay() {
    }
    return AccRecvPay;
}());

var AppMsgNotify = /** @class */ (function () {
    function AppMsgNotify() {
    }
    return AppMsgNotify;
}());

var OrderNo = /** @class */ (function () {
    function OrderNo() {
    }
    return OrderNo;
}());

var OssFile = /** @class */ (function () {
    function OssFile() {
    }
    return OssFile;
}());

var ProdCatalog = /** @class */ (function () {
    function ProdCatalog() {
    }
    return ProdCatalog;
}());

var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());

var RecPaySubject = /** @class */ (function () {
    function RecPaySubject() {
    }
    return RecPaySubject;
}());

var SMSLog = /** @class */ (function () {
    function SMSLog() {
    }
    return SMSLog;
}());

var CustCard = /** @class */ (function () {
    function CustCard() {
    }
    return CustCard;
}());

var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());

var Member = /** @class */ (function () {
    function Member() {
    }
    return Member;
}());

var MemberAccount = /** @class */ (function () {
    function MemberAccount() {
    }
    return MemberAccount;
}());

var MemberInvite = /** @class */ (function () {
    function MemberInvite() {
    }
    return MemberInvite;
}());

var Feelist = /** @class */ (function () {
    function Feelist() {
    }
    return Feelist;
}());

var PayFeeList = /** @class */ (function () {
    function PayFeeList() {
    }
    return PayFeeList;
}());

var PayFeeRecord = /** @class */ (function () {
    function PayFeeRecord() {
    }
    return PayFeeRecord;
}());

var TransArea = /** @class */ (function () {
    function TransArea() {
    }
    return TransArea;
}());

var Order = /** @class */ (function () {
    function Order() {
    }
    return Order;
}());

var OrderDetail = /** @class */ (function () {
    function OrderDetail() {
    }
    return OrderDetail;
}());

var RechargeWithDraw = /** @class */ (function () {
    function RechargeWithDraw() {
    }
    return RechargeWithDraw;
}());

var Device = /** @class */ (function () {
    function Device() {
    }
    return Device;
}());

/**好友邀请 */
var ContactInvite = /** @class */ (function () {
    function ContactInvite() {
    }
    return ContactInvite;
}());

var orderPayRq = /** @class */ (function () {
    function orderPayRq() {
    }
    return orderPayRq;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExponentialStrengthPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_platform_market_enum__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
var ExponentialStrengthPipe = /** @class */ (function () {
    function ExponentialStrengthPipe() {
    }
    ExponentialStrengthPipe.prototype.transform = function (value, exponent) {
        if (value == __WEBPACK_IMPORTED_MODULE_1__share_platform_market_enum__["i" /* PriceUnitEnum */].JIN) {
            return "公斤";
        }
        else {
            return "斤";
        }
    };
    ExponentialStrengthPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'priceUnitpipe' })
    ], ExponentialStrengthPipe);
    return ExponentialStrengthPipe;
}());

//# sourceMappingURL=priceUnit.js.map

/***/ }),

/***/ 1332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceWayPipePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_platform_market_enum__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
var PriceWayPipePipe = /** @class */ (function () {
    function PriceWayPipePipe() {
    }
    PriceWayPipePipe.prototype.transform = function (value, exponent) {
        if (value == __WEBPACK_IMPORTED_MODULE_1__share_platform_market_enum__["j" /* PriceWayEnum */].Piece) {
            return "计件";
        }
        else {
            return "计重";
        }
    };
    PriceWayPipePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'priceWayPipePipe' })
    ], PriceWayPipePipe);
    return PriceWayPipePipe;
}());

//# sourceMappingURL=priceWay.js.map

/***/ }),

/***/ 1333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPayReciveEndPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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


// import { AppCustomerService } from '../../app/share/service/appCustomer.service';
/**
 * Generated class for the ProductCPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var OrderPayReciveEndPage = /** @class */ (function () {
    // categoryB: ICategory;
    // page: number = 1
    // pageSize: number = 10
    // categorys: ICategory[]
    // categoryC: ICategory
    function OrderPayReciveEndPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        // this.categoryB = this.navParams.get("parent")
    }
    OrderPayReciveEndPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    OrderPayReciveEndPage.prototype.selectCate = function (categoryC) {
        var _this = this;
        this.navCtrl.pop().then(function () {
            _this.events.publish("data3", categoryC);
        });
    };
    OrderPayReciveEndPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-order-pay-recive-end',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/order-pay-recive-end/order-pay-recive-end.html"*/'<!--\n  Generated template for the ProductCPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>收款详情</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n    <div style="display: flex;flex-direction: column;align-items: center;    background: #fff;\n    padding: 30px 0;">\n        <img style="width: 25%;" src="./../../assets/imgs/logo.png" alt="">\n        <p style="    color: #f85851;\n        font-size: 20px;">交易成功</p>\n        <h2 style="font-size: 30px;">赊销:25.00元</h2>\n    </div>\n    <div style="width:100%;padding:0 2rem 0 2rem;  margin-top: 30px;">\n        <button ion-button color="red" block>确定</button>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/order-pay-recive-end/order-pay-recive-end.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], OrderPayReciveEndPage);
    return OrderPayReciveEndPage;
}());

//# sourceMappingURL=order-pay-recive-end.js.map

/***/ }),

/***/ 1357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InviPipePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_platform_market_enum__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
var InviPipePipe = /** @class */ (function () {
    function InviPipePipe() {
    }
    InviPipePipe.prototype.transform = function (value, exponent) {
        if (value == __WEBPACK_IMPORTED_MODULE_1__share_platform_market_enum__["c" /* MemberInviteStatus */].Active) {
            return "待处理";
        }
        if (value == __WEBPACK_IMPORTED_MODULE_1__share_platform_market_enum__["c" /* MemberInviteStatus */].Agree) {
            return "已同意";
        }
        if (value == __WEBPACK_IMPORTED_MODULE_1__share_platform_market_enum__["c" /* MemberInviteStatus */].Del) {
            return "已取消";
        }
        if (value == __WEBPACK_IMPORTED_MODULE_1__share_platform_market_enum__["c" /* MemberInviteStatus */].Refuse) {
            return "拒绝";
        }
        // switch (value) {
        //     case MemberInviteStatus.Active:
        //         "待处理";
        //         break;
        //     case MemberInviteStatus.Refuse:
        //         "已拒绝";
        //         break;
        //     case MemberInviteStatus.Agree:
        //         "已同意"
        //         break;
        //     default:
        //         "已删除"
        // }
    };
    InviPipePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'inviPipePipe' })
    ], InviPipePipe);
    return InviPipePipe;
}());

//# sourceMappingURL=invitype.js.map

/***/ }),

/***/ 1358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsgPipePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_platform_market_enum__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
var MsgPipePipe = /** @class */ (function () {
    function MsgPipePipe() {
    }
    MsgPipePipe.prototype.transform = function (value, exponent) {
        // if (value == MsgTypeEnum.TOBE_PAY) {
        //     return "待付款"
        // }
        switch (value) {
            case __WEBPACK_IMPORTED_MODULE_1__share_platform_market_enum__["e" /* MsgTypeEnum */].ACC_AMT:
                "账户变动";
                break;
            case __WEBPACK_IMPORTED_MODULE_1__share_platform_market_enum__["e" /* MsgTypeEnum */].ACTOR_CHANGE:
                "操作员变动";
                break;
            case __WEBPACK_IMPORTED_MODULE_1__share_platform_market_enum__["e" /* MsgTypeEnum */].CUST_INVITE:
                "邀请信息";
                break;
            case __WEBPACK_IMPORTED_MODULE_1__share_platform_market_enum__["e" /* MsgTypeEnum */].REPAY_APPLY:
                "现金还款通知";
                break;
            case __WEBPACK_IMPORTED_MODULE_1__share_platform_market_enum__["e" /* MsgTypeEnum */].REPAY_CONFIRM:
                "现金还款确认";
                break;
            default:
                "待付款";
        }
    };
    MsgPipePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'msgPipePipe' })
    ], MsgPipePipe);
    return MsgPipePipe;
}());

//# sourceMappingURL=megType.js.map

/***/ }),

/***/ 1359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderTypePipePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_platform_market_enum__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
var OrderTypePipePipe = /** @class */ (function () {
    function OrderTypePipePipe() {
    }
    OrderTypePipePipe.prototype.transform = function (value, exponent) {
        if (value == __WEBPACK_IMPORTED_MODULE_1__share_platform_market_enum__["g" /* OrderTypeEnum */].TRANS) {
            return "交易";
        }
        if (value == __WEBPACK_IMPORTED_MODULE_1__share_platform_market_enum__["g" /* OrderTypeEnum */].RENTS) {
            return "租金";
        }
    };
    OrderTypePipePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'orderTypePipePipe' })
    ], OrderTypePipePipe);
    return OrderTypePipePipe;
}());

//# sourceMappingURL=orderType.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MktlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_sign_in_sign_in__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_common_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_home_customer_main_customer_main__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__share_platform_market_enum__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_share_service_common_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__share_platform_framework_enum__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_share_service_http_service__ = __webpack_require__(11);
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










/**
 * Generated class for the MktlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MktlistPage = /** @class */ (function () {
    function MktlistPage(navCtrl, navParams, comm, sto, comSer, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.comm = comm;
        this.sto = sto;
        this.comSer = comSer;
        this.http = http;
        this.priceW = __WEBPACK_IMPORTED_MODULE_6__share_platform_market_enum__["i" /* PriceUnitEnum */];
        this.b_mkt = __WEBPACK_IMPORTED_MODULE_8__share_platform_framework_enum__["a" /* EntityEnum */].Market;
        this.keyWord = "";
        this.indx = 1;
    }
    MktlistPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.sto.customer) return [3 /*break*/, 1];
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__main_home_customer_main_customer_main__["a" /* CustomerMainPage */]);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.comSer.singleTableQuery(this.b_mkt, {}, { pageIndex: 0, pageSize: 5 })];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            this.markets = result.rows;
                        }
                        else {
                            this.http.createMessage("warning", "");
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MktlistPage.prototype.serchKeyWord = function ($event) {
        return __awaiter(this, void 0, void 0, function () {
            var key_code, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        key_code = window.event ? $event.keyCode : $event.which;
                        if (!(key_code == 13)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.comSer.singleTableQuery(this.b_mkt, { mktName: { $like: this.keyWord } })];
                    case 1:
                        result = _a.sent();
                        this.markets = result.rows;
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MktlistPage.prototype.select = function (market) {
        this.selsetMkt = market;
    };
    MktlistPage.prototype.goSignIn = function () {
        this.sto.market = this.selsetMkt;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signin_sign_in_sign_in__["a" /* SignInPage */], this.selsetMkt);
        if (!this.sto.priceW) {
            this.sto.priceW = this.priceW.JIN;
        }
    };
    MktlistPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            // this.markets = ['市场1', '市场2', '市场3', '市场1', '市场2', '市场3', '市场1', '市场2', '市场3', '市场1', '市场2', '市场3'];
            refresher.complete();
        }, 2000);
    };
    MktlistPage.prototype.doInfinite = function (infiniteScroll) {
        console.log('Begin async operation');
        setTimeout(function () {
            for (var i = 0; i < 10; i++) {
                // this.markets.push('市场n');
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    MktlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mktlist',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/mktlist/mktlist.html"*/'<!--\n  Generated template for the MktlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n\n\n\n<ion-header>\n\n    <ion-navbar color="red">\n\n        <ion-title mode="ios">市场</ion-title>\n        <!-- <ion-searchbar [cancelButtonText]="\'取消\'" placeholder="搜索市场" (keypress)="serchKeyWord($event)" [(ngModel)]="keyWord" showCancelButton="true"></ion-searchbar> -->\n    </ion-navbar>\n\n</ion-header>\n\n<!-- <ion-header>\n    <ion-navbar>\n        <ion-title mode="ios">市场</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-menu [content]="mycontent" side="right">\n    <ion-content>\n        <ion-list>\n            <p>some menu content, could be list items</p>\n        </ion-list>\n    </ion-content>\n\n</ion-menu>\n\n<ion-nav #mycontent>\n\n\n\n</ion-nav>\n<ion-content>\n\n\n    <p>hahahhadddddddddddddddddddddddddddddddddddddddd</p>\n</ion-content> -->\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <ion-card *ngFor=\'let market of markets;\' (click)=\'goSignIn()\'>\n        <ion-card-content (click)="select(market)">\n            {{market.mktName}}\n        </ion-card-content>\n    </ion-card>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/mktlist/mktlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_common_service__["a" /* appCommonService */],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_7__app_share_service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_9__app_share_service_http_service__["a" /* MyHttpService */]])
    ], MktlistPage);
    return MktlistPage;
}());

//# sourceMappingURL=mktlist.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletTransferDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_member_account_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_http_service__ = __webpack_require__(11);
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





/**
 * Generated class for the WalletTransferDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var View;
(function (View) {
    View[View["Deful"] = 0] = "Deful";
    View[View["Detail"] = 1] = "Detail";
})(View || (View = {}));
var WalletTransferDetailPage = /** @class */ (function () {
    function WalletTransferDetailPage(navCtrl, navParams, memSer, sto, http, events, ref) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.memSer = memSer;
        this.sto = sto;
        this.http = http;
        this.events = events;
        this.ref = ref;
        this.View = View;
        this.accRecvPay = {
            accountId: this.sto.member.id,
            accountName: this.sto.member.name,
            mktId: this.sto.member.mktId,
        };
        this.isShow = false;
        this.x = "*";
        this.kong = " ";
        this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        this.passwordString = '';
    }
    WalletTransferDetailPage.prototype.ionViewCanEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.reciMember = this.navParams.data;
                return [2 /*return*/];
            });
        });
    };
    WalletTransferDetailPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.reciMember;
                        return [4 /*yield*/, this.memSer.accountDetail()];
                    case 1:
                        data = _a.sent();
                        this.defulAccount = data.account;
                        return [2 /*return*/];
                }
            });
        });
    };
    WalletTransferDetailPage.prototype.goNext = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.collectmoney > 0) {
                    if (this.collectmoney > this.defulAccount.availAmt) {
                        this.http.createMessage("warning", "转账金额超出可用余额");
                    }
                    else {
                        this.isShow = true;
                    }
                }
                else {
                    this.http.createMessage("warning", "转账金额应大于0元");
                }
                return [2 /*return*/];
            });
        });
    };
    // showModel() {
    //   this.isShow = true
    // }
    WalletTransferDetailPage.prototype.fn = function (ps) {
        return ps = this.passwordString;
    };
    WalletTransferDetailPage.prototype.addString = function (i) {
        return __awaiter(this, void 0, void 0, function () {
            var result, result_1, data, memAccount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(i);
                        if (!(this.passwordString.length <= 6)) return [3 /*break*/, 7];
                        this.ref.markForCheck();
                        this.ref.detectChanges();
                        this.passwordString = this.passwordString + i;
                        if (!(this.passwordString.length == 6)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.memSer.confirePayPassword(this.sto.member.id, this.passwordString)];
                    case 1:
                        result = _a.sent();
                        if (!result) return [3 /*break*/, 6];
                        debugger;
                        return [4 /*yield*/, this.memSer.transferAccount(this.sto.member.id, this.reciMember.id, this.collectmoney)];
                    case 2:
                        result_1 = _a.sent();
                        if (!result_1) return [3 /*break*/, 4];
                        this.http.createMessage("success", "转账成功");
                        return [4 /*yield*/, this.memSer.accountDetail()];
                    case 3:
                        data = _a.sent();
                        memAccount = data.account;
                        this.events.publish("memAccount", memAccount);
                        this.navCtrl.popToRoot();
                        return [3 /*break*/, 5];
                    case 4:
                        this.http.createMessage("error", "转账成功");
                        this.state = View.Deful;
                        this.reciMembers = [];
                        this.keyWord = "";
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        this.passwordString = "";
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    WalletTransferDetailPage.prototype.keyD = function () {
        this.isShow = !this.isShow;
    };
    WalletTransferDetailPage.prototype.delect = function () {
        this.passwordString = this.passwordString.substring(0, this.passwordString.length - 1);
        this.ref.markForCheck();
        this.ref.detectChanges();
    };
    WalletTransferDetailPage.prototype.deleteAll = function () {
        this.passwordString = "";
    };
    WalletTransferDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wallet-transfer-detail',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/wallet-transfer-detail/wallet-transfer-detail.html"*/'<!--\n  Generated template for the WalletTransferDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title mode="ios">转账给用户</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n\n    <div style=" display: flex;flex-direction: column;align-content: center;align-items: center;padding-bottom: 20px;margin: 10px;align-items: center;padding: 20px;">\n        <img src="/assets/imgs/awiater.png" alt="">\n        <p>{{reciMember?.name}}</p>\n\n        <p>转账金额</p>\n        <div style="    border-bottom: 1px solid #ddd9d9;height: 50px;width: 100%;display: flex">\n            <p style="font-size: 20px;">￥</p>\n            <ion-input type="number" [(ngModel)]="collectmoney" style="    width: 100%;border: none;font-size: 30px;margin-left: 10px;">\n            </ion-input>\n\n        </div>\n        <button style="background: #f85851;width: 100%;padding: 10px 0;color: #fff; margin-top: 25px;" (click)="goNext()">下一步</button>\n    </div>\n    <div class="model" *ngIf="isShow">\n        <div style="background: #fff;\n            height: 60vh;\n            position: absolute;\n            width: 100vw;\n            bottom: 0;">\n            <div>\n\n                <h5 style="    text-align: center">\n                    <ion-icon ios="ios-close" md="md-close" style="    position: relative;\n                        left: -30%;" (click)="isShow=false"></ion-icon>请输入支付密码</h5>\n            </div>\n            <div class="div_input" (click)="keyD();">\n\n                <p>{{fn(passwordString).substring(0,1)?x:kong}}</p>\n                <p>{{fn(passwordString).substring(1,2)?x:kong}}</p>\n                <p>{{fn(passwordString).substring(2,3)?x:kong}}</p>\n                <p>{{fn(passwordString).substring(3,4)?x:kong}}</p>\n                <p>{{fn(passwordString).substring(4,5)?x:kong}}</p>\n                <p style="border-right: 1px solid #7c7a7a">{{fn(passwordString).substring(5,6)?x:kong}}</p>\n\n            </div>\n            <p style="    text-align: right;\n                margin-right: 60px;">忘记密码</p>\n            <div class="calc" *ngIf="isShow">\n                <button ion-button *ngFor="let number of numbers;" (click)="addString(number)">{{number}}</button>\n\n                <p (click)="delect()">删除</p>\n                <p (click)="deleteAll()">清空</p>\n            </div>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/wallet-transfer-detail/wallet-transfer-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_member_account_service__["a" /* appMemberAccountService */],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_http_service__["a" /* MyHttpService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], WalletTransferDetailPage);
    return WalletTransferDetailPage;
}());

//# sourceMappingURL=wallet-transfer-detail.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forget_password1_forget_password1__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register1_register1__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_home_customer_main_customer_main__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_share_service_app_common_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_share_service_app_customer_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_share_service_app_member_account_service__ = __webpack_require__(30);
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




// import { HomePage } from "../home/home"






/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var SignInPage = /** @class */ (function () {
    function SignInPage(navCtrl, navParams, customerService, storage, nativePageTransitions, alert, comm, meService, cusService, keyboard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customerService = customerService;
        this.storage = storage;
        this.nativePageTransitions = nativePageTransitions;
        this.alert = alert;
        this.comm = comm;
        this.meService = meService;
        this.cusService = cusService;
        this.keyboard = keyboard;
        //是否记住密码
        this.remember = false;
        this.mktId = 1;
        this.mobi = '15172480645';
        this.password = '123456';
        this.marketList = [];
        this.redPassword = false;
        this.redPhone = true;
        this.market = this.storage.market;
        this.mktId = this.market.mktId;
        console.log(this.market.mktId);
        var local = JSON.parse(localStorage.getItem('user'));
        if (!!local) {
            if (local.mktId == this.mktId) {
                this.mobi = local.mobi;
                this.password = local.password;
            }
        }
        console.log(this.mktId);
    }
    SignInPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // this.marketList = await this.comm.marketList();
                console.log('ionViewDidLoad SignInPage---');
                return [2 /*return*/];
            });
        });
    };
    SignInPage.prototype.ionViewWillLeave = function () {
        var options = {
            direction: 'right',
            duration: 500,
            slowdownfactor: 3,
        };
        this.nativePageTransitions.flip(options);
    };
    SignInPage.prototype.fogotPassword = function () {
        //   this.navCtrl.push(ForgetPassword1Page, null, { animation: 'wp-transition' });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__forget_password1_forget_password1__["a" /* ForgetPassword1Page */]);
    };
    SignInPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register1_register1__["a" /* Register1Page */]);
    };
    SignInPage.prototype.signIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log(this.mktId, this.mobi, this.password);
                        if (!this.mobi || !this.mktId) {
                            return [2 /*return*/, this.customerService.http.createMessage('error', '信息不完善')];
                        }
                        return [4 /*yield*/, this.customerService.login(this.mobi, this.password, this.mktId)];
                    case 1:
                        result = _b.sent();
                        if (!result) return [3 /*break*/, 4];
                        this.customer = result.customer;
                        this.storage.customer = this.customer;
                        this.storage.token = result.token;
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__main_home_customer_main_customer_main__["a" /* CustomerMainPage */]);
                        this.storage.customer = this.customer;
                        if (!this.customer.memberId) return [3 /*break*/, 3];
                        _a = this.storage;
                        return [4 /*yield*/, this.meService.memberDetail()];
                    case 2:
                        _a.member = _b.sent();
                        _b.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4: 
                    // this.navCtrl.push(CustomerMainPage); 
                    return [2 /*return*/, this.customerService.http.createMessage('error', '账户或密码错误')];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SignInPage.prototype.fous = function () {
        this.keyboard.hideFormAccessoryBar(true);
        this.keyboard.didShow;
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sign-in',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/signin/sign-in/sign-in.html"*/'<ion-header no-border>\n    <ion-navbar mode="ios">\n        <ion-title mode=\'ios\'>登录</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content no-bounce style="background:#fff;">\n\n    <ion-list inset>\n\n        <ion-item [class.red]="redPhone">\n            <ion-label>\n                <i class="iconfont icon-yidiandiantubiao08"></i>\n            </ion-label>\n            <ion-input type="number" (focus)="redPhone=true" (blur)="redPhone=false" [(ngModel)]="mobi" placeholder="请输入手机号"></ion-input>\n        </ion-item>\n\n        <ion-item [class.red]="redPassword" style="border: none;" style="border-bottom: 1px solid #c8c7cc;">\n            <ion-label>\n                <i class="iconfont icon-password"></i>\n            </ion-label>\n            <ion-input (focus)="redPassword=true" (blur)="redPassword=false" type="password" [(ngModel)]="password" placeholder="请输入密码"></ion-input>\n        </ion-item>\n\n    </ion-list>\n\n    <div style="width:100%;display:flex;align-items: center;padding-right:2rem;flex-direction: row-reverse">\n        <ion-toggle color="red" [(ngModel)]="remember"></ion-toggle>\n        <span style="margin-right: 1rem">记住账号密码</span>\n    </div>\n\n    <div class="forget-password" style="display: flex;justify-content: space-between;font-size: 15px;padding:2rem 2rem 0 2rem">\n        <p full (click)="fogotPassword()">忘记密码</p>\n\n        <p (click)="register()">\n            没有账户，免费注册\n        </p>\n\n    </div>\n    <div style="width:100%;padding:0 2rem 0 2rem">\n        <button ion-button color="red" block (click)="signIn()">登录</button>\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/signin/sign-in/sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_8__app_share_service_app_customer_service__["a" /* appCustomerService */],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_7__app_share_service_app_common_service__["a" /* appCommonService */],
            __WEBPACK_IMPORTED_MODULE_9__app_share_service_app_member_account_service__["a" /* appMemberAccountService */],
            __WEBPACK_IMPORTED_MODULE_8__app_share_service_app_customer_service__["a" /* appCustomerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Keyboard"]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerMainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__person_info_person_info__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wallet_wallet__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic3_jpush__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_share_service_app_ProductOrder_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_share_service_app_customer_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_share_service_app_member_account_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__opening_wallet1_opening_wallet1__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__share_platform_market_enum__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_share_service_http_service__ = __webpack_require__(11);
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



// import { OpenBillPage } from '../open-bill/open-bill';










/**
 * Generated class for the CustomerMainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var CustomerMainPage = /** @class */ (function () {
    function CustomerMainPage(navCtrl, navParams, jpush, alert, customerService, proService, memService, stor, http, app, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.jpush = jpush;
        this.alert = alert;
        this.customerService = customerService;
        this.proService = proService;
        this.memService = memService;
        this.stor = stor;
        this.http = http;
        this.app = app;
        this.events = events;
        this.homePage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.personInfo = __WEBPACK_IMPORTED_MODULE_3__person_info_person_info__["a" /* PersonInfoPage */];
        this.memStatus = __WEBPACK_IMPORTED_MODULE_11__share_platform_market_enum__["a" /* AccountStatusEnum */];
        this.tab2 = this.stor.customer.memberId ? __WEBPACK_IMPORTED_MODULE_4__wallet_wallet__["a" /* WalletPage */] : __WEBPACK_IMPORTED_MODULE_10__opening_wallet1_opening_wallet1__["a" /* OpeningWallet1Page */];
        this.jpush.getRegistrationID().then(function (id) {
            if (!!id) {
                _this.customerService.updateRegistrationId(id);
                _this.alertCtrl(id);
            }
            else {
                _this.alertCtrl('推送功能打开失败');
            }
        });
        this.events.subscribe('data', function (res) {
            _this.member = res;
            _this.events.unsubscribe('data');
        });
    }
    CustomerMainPage.prototype.ionViewCanEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.stor.customer.id) {
                    this.cus = this.stor.customer;
                    if (this.stor.member) {
                        this.member = this.stor.member;
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    CustomerMainPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    CustomerMainPage.prototype.change = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.cus = this.stor.customer;
                        if (!this.cus.memberId) return [3 /*break*/, 2];
                        this.tab2 = __WEBPACK_IMPORTED_MODULE_4__wallet_wallet__["a" /* WalletPage */];
                        _a = this;
                        return [4 /*yield*/, this.memService.memberDetail()];
                    case 1:
                        _a.member = _b.sent();
                        if (this.member.status == this.memStatus.FROZEN) {
                            this.http.createMessage("warning", "账户冻结，请联系管理员");
                        }
                        else if (this.member.status == this.memStatus.DISABLE) {
                            this.http.createMessage("warning", "账户禁用，请联系管理员");
                        }
                        else if (this.member.status == this.memStatus.ENABLE) {
                            this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__wallet_wallet__["a" /* WalletPage */]);
                        }
                        else if (this.member.status == this.memStatus.CANCEL) {
                            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__opening_wallet1_opening_wallet1__["a" /* OpeningWallet1Page */]);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        this.tab2 = __WEBPACK_IMPORTED_MODULE_10__opening_wallet1_opening_wallet1__["a" /* OpeningWallet1Page */];
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CustomerMainPage.prototype.alertCtrl = function (msg) {
        this.alert.create({
            title: "推送内容",
            message: JSON.stringify(msg),
            buttons: [
                {
                    text: '取消',
                    handler: function () {
                    }
                },
                {
                    text: '确认',
                    handler: function () {
                    }
                }
            ]
        }).present();
    };
    CustomerMainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-customer-main',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/main-home/customer-main/customer-main.html"*/'<ion-tabs>\n    <ion-tab [tabTitle]="\'首页\'" [tabIcon]="\'home\'" [root]="homePage"></ion-tab>\n    <!-- (ionSelect)="change()" -->\n    <ion-tab [tabTitle]="\'钱包\'" [tabIcon]="\'logo-usd\'" [root]="tab2"></ion-tab>\n    <ion-tab [tabTitle]="\'我的\'" [tabIcon]="\'person\'" [root]="personInfo"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/main-home/customer-main/customer-main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_5_ionic3_jpush__["a" /* JPush */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_7__app_share_service_app_customer_service__["a" /* appCustomerService */],
            __WEBPACK_IMPORTED_MODULE_6__app_share_service_app_ProductOrder_service__["a" /* appProductOrderService */],
            __WEBPACK_IMPORTED_MODULE_8__app_share_service_app_member_account_service__["a" /* appMemberAccountService */],
            __WEBPACK_IMPORTED_MODULE_9__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_12__app_share_service_http_service__["a" /* MyHttpService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], CustomerMainPage);
    return CustomerMainPage;
}());

//# sourceMappingURL=customer-main.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_wait_message_wait__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_set_message_set__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modify_password_modify_password__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_team_my_team__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modify_phone_modify_phone__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__help_help__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_setup_app_setup__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_share_service_storage_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// import {StorageService} from "./../storage.service.ts"
/**
 * Generated class for the PersonInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var PersonInfoPage = /** @class */ (function () {
    function PersonInfoPage(navCtrl, navParams, stro) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.stro = stro;
    }
    PersonInfoPage.prototype.ionViewDidLoad = function () {
        //   this.customer=this.stro.customer
        this.customer = this.stro.customer;
        this.market = this.stro.market;
        console.log('ionViewDidLoad PersonInfoPage');
    };
    PersonInfoPage.prototype.messageWait = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__message_wait_message_wait__["a" /* MessageWaitPage */]);
    };
    PersonInfoPage.prototype.messageSet = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__message_set_message_set__["a" /* MessageSetPage */]);
    };
    PersonInfoPage.prototype.modifyPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__modify_password_modify_password__["a" /* ModifyPasswordPage */]);
    };
    PersonInfoPage.prototype.myTeam = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__my_team_my_team__["a" /* MyTeamPage */]);
    };
    PersonInfoPage.prototype.modifyPhone = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__modify_phone_modify_phone__["a" /* ModifyPhonePage */]);
    };
    PersonInfoPage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__help_help__["a" /* HelpPage */]);
    };
    PersonInfoPage.prototype.appSetup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__app_setup_app_setup__["a" /* AppSetupPage */]);
    };
    PersonInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-person-info',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/person-info/person-info.html"*/'<!--\n  Generated template for the PersonInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n  -->\n\n\n\n\n\n\n<ion-content>\n    <div class="info" *ngIf="customer">\n        <img src="assets/imgs/awiater.png" alt="">\n        <div>\n            <h3>商户姓名：{{customer?.name}}</h3>\n            <p>手机号：{{customer?.mobi}}</p>\n            <p>操作员：李四</p>\n            <p>身份：掌柜</p>\n            <p>所在批发市场：{{market?.mktName}}</p>\n        </div>\n    </div>\n    <div style="height: 10px;background: #f7f4f4;"></div>\n\n    <ion-item (click)="messageWait()">\n        <ion-label>待处理消息</ion-label>\n    </ion-item>\n    <ion-item (click)="messageSet()">\n        <ion-label>消息管理</ion-label>\n    </ion-item>\n    <ion-item (click)="modifyPassword()">\n        <ion-label>修改密码</ion-label>\n    </ion-item>\n    <ion-item (click)="myTeam()">\n        <ion-label>成员管理</ion-label>\n    </ion-item>\n    <ion-item (click)="modifyPhone()">\n        <ion-label>修改手机</ion-label>\n    </ion-item>\n    <ion-item (click)="help()">\n        <ion-label>帮助</ion-label>\n    </ion-item>\n    <ion-item (click)="appSetup()">\n        <ion-label>设置</ion-label>\n    </ion-item>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/person-info/person-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_9__app_share_service_storage_service__["a" /* StorageService */]])
    ], PersonInfoPage);
    return PersonInfoPage;
}());

//# sourceMappingURL=person-info.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletFriendDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_member_account_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_platform_market_enum__ = __webpack_require__(26);
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





/**
 * Generated class for the WalletFriendDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WalletFriendDetailPage = /** @class */ (function () {
    function WalletFriendDetailPage(navCtrl, navParams, memS, sto) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.memS = memS;
        this.sto = sto;
        this.agreeOrRefus = __WEBPACK_IMPORTED_MODULE_4__share_platform_market_enum__["c" /* MemberInviteStatus */];
        this.memInvi = this.navParams.data;
        debugger;
    }
    WalletFriendDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalletFriendDetailPage');
    };
    WalletFriendDetailPage.prototype.agreeInvit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.memInvi.status = this.agreeOrRefus.Agree;
                        return [4 /*yield*/, this.memS.Inviprocess(this.memInvi)];
                    case 1:
                        _a.sent();
                        this.navCtrl.pop();
                        return [2 /*return*/];
                }
            });
        });
    };
    WalletFriendDetailPage.prototype.refuseInvit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.memInvi.status = this.agreeOrRefus.Refuse;
                        return [4 /*yield*/, this.memS.Inviprocess(this.memInvi)];
                    case 1:
                        _a.sent();
                        this.navCtrl.pop();
                        return [2 /*return*/];
                }
            });
        });
    };
    WalletFriendDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wallet-friend-detail',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/wallet-friend-detail/wallet-friend-detail.html"*/'<!--\n  Generated template for the WalletFriendDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>邀请详情</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div>\n\n        <p>邀请人姓名：{{memInvi.memberName}}</p>\n        <p>受邀人姓名：{{memInvi.friendinvitemName}}</p>\n        <p>验证信息：{{memInvi.content}}</p>\n\n        <p>状态：{{memInvi.status|inviPipePipe}}</p>\n\n        <button *ngIf="memInvi.status==agreeOrRefus.Active" ion-button color="red" (click)="agreeInvit()">同意</button>\n\n        <button *ngIf="memInvi.status==agreeOrRefus.Active" ion-button color="red" (click)="refuseInvit()">拒绝</button>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/wallet-friend-detail/wallet-friend-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_member_account_service__["a" /* appMemberAccountService */],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__["a" /* StorageService */]])
    ], WalletFriendDetailPage);
    return WalletFriendDetailPage;
}());

//# sourceMappingURL=wallet-friend-detail.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletExpendDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the WalletExpendDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WalletExpendDetailPage = /** @class */ (function () {
    function WalletExpendDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.expendDetail = this.navParams.data;
        debugger;
    }
    WalletExpendDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalletExpendDetailPage');
    };
    WalletExpendDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wallet-expend-detail',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/wallet-expend-detail/wallet-expend-detail.html"*/'<!--\n  Generated template for the WalletExpendDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>记录详情</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div style="    padding: 15px;">\n\n\n        <p>类型<span style="float: right">{{ this.expendDetail.orderType|orderTypePipePipe}}</span></p>\n        <p>转账金额<span style="float: right">{{ this.expendDetail.amount}}元</span></p>\n        <p>余额<span style="float: right"> {{ this.expendDetail.availAmt}}元 </span></p>\n        <p>时间 <span style="float: right">{{ this.expendDetail.createTime}}</span></p>\n        <p>收款方<span style="float: right">  {{this.expendDetail.no}}</span></p>\n        <p>收款方名称<span style="float: right">  {{this.expendDetail.toAccountName}}</span></p>\n        <p>对方手机号<span style="float: right">  {{this.expendDetail.phone}}</span></p>\n        <p>转账单号<span style="float: right"> {{this.expendDetail.orderNo}}</span></p>\n        <p>转账支付方式：<span style="float: right"> 钱包</span></p>\n        <p>付款方手续费合计<span style="float: right"> 0</span></p>\n        <p>订单类型<span style="float: right"> {{ this.expendDetail.orderType|orderTypePipePipe}}</span></p>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/wallet-expend-detail/wallet-expend-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], WalletExpendDetailPage);
    return WalletExpendDetailPage;
}());

//# sourceMappingURL=wallet-expend-detail.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPayPassword3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_share_service_http_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_common_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_share_service_app_member_account_service__ = __webpack_require__(30);
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






/**
 * Generated class for the ResetPayPassword3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewState;
(function (ViewState) {
    ViewState[ViewState["firstPassWord"] = 0] = "firstPassWord";
    ViewState[ViewState["endPass"] = 1] = "endPass";
})(ViewState || (ViewState = {}));
var ResetPayPassword3Page = /** @class */ (function () {
    function ResetPayPassword3Page(navCtrl, navParams, customer, storage, app, http, sto, comm, ref, events, memSer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customer = customer;
        this.storage = storage;
        this.app = app;
        this.http = http;
        this.sto = sto;
        this.comm = comm;
        this.ref = ref;
        this.events = events;
        this.memSer = memSer;
        this.ViewState = ViewState;
        this.state = ViewState.firstPassWord;
        this.password = '';
        this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        this.passwordString = '';
        this.endPassWord = "";
        this.isShow = false;
        this.x = "*";
        this.empty = " ";
        this.payPassword = "";
        this.member = this.storage.member;
    }
    //键盘测试
    ResetPayPassword3Page.prototype.fn = function (ps) {
        return this.passwordString = ps;
    };
    ResetPayPassword3Page.prototype.fn2 = function (ps) {
        return this.endPassWord = ps;
    };
    ResetPayPassword3Page.prototype.addString = function (i) {
        if (this.passwordString.length <= 6) {
            this.ref.markForCheck();
            this.ref.detectChanges();
            this.passwordString = this.passwordString + i;
            if (this.passwordString.length == 6) {
                this.http.createMessage("success", "请再次确认");
                this.state = ViewState.endPass;
                this.payPassword = this.passwordString;
            }
        }
    };
    ResetPayPassword3Page.prototype.checkPassword = function (i) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.endPassWord.length <= 6)) return [3 /*break*/, 3];
                        this.ref.markForCheck();
                        this.ref.detectChanges();
                        this.endPassWord = this.endPassWord + i;
                        if (!(this.endPassWord.length == 6)) return [3 /*break*/, 3];
                        if (!(this.endPassWord == this.payPassword)) return [3 /*break*/, 2];
                        this.member.payPassword = this.endPassWord;
                        return [4 /*yield*/, this.memSer.modifyPayPassword(this.sto.member.id, this.endPassWord)];
                    case 1:
                        result = _a.sent();
                        if (result.member) {
                            this.http.createMessage("success", "修改成功");
                            this.navCtrl.popToRoot();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        this.http.createMessage("error", "两次密码不一致，请重新输入");
                        this.state = ViewState.firstPassWord;
                        this.endPassWord = "",
                            this.passwordString = "";
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ResetPayPassword3Page.prototype.keyD = function () {
        this.isShow = !this.isShow;
    };
    ResetPayPassword3Page.prototype.delect = function () {
        this.passwordString = this.passwordString.substring(0, this.passwordString.length - 1);
        this.endPassWord = this.endPassWord.substring(0, this.endPassWord.length - 1);
        this.ref.markForCheck();
        this.ref.detectChanges();
    };
    ResetPayPassword3Page.prototype.deleteAll = function () {
        this.passwordString = "";
        this.endPassWord = "";
    };
    // 键盘结束
    ResetPayPassword3Page.prototype.ionViewCanEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ResetPayPassword3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reset-pay-password3',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/reset-pay-password3/reset-pay-password3.html"*/'<!--\n  Generated template for the ResetPayPassword3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title *ngIf="state==ViewState.firstPassWord">输入新密码</ion-title>\n        <ion-title *ngIf="state==ViewState.endPass">确认支付密码</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div *ngIf="state==ViewState.firstPassWord">\n        <div class="div_input" (click)="keyD();">\n            <p>{{fn(passwordString).substring(0,1)?x:empty}}</p>\n            <p>{{fn(passwordString).substring(1,2)?x:empty}}</p>\n            <p>{{fn(passwordString).substring(2,3)?x:empty}}</p>\n            <p>{{fn(passwordString).substring(3,4)?x:empty}}</p>\n            <p>{{fn(passwordString).substring(4,5)?x:empty}}</p>\n            <p style="border-right: 1px solid #7c7a7a">{{fn(passwordString).substring(5,6)?x:empty}}</p>\n\n        </div>\n\n\n        <div class="calc" *ngIf="isShow">\n            <button ion-button *ngFor="let number of numbers;" (click)="addString(number)">{{number}}</button>\n\n            <p (click)="delect()">删除</p>\n            <p (click)="deleteAll()">清空</p>\n        </div>\n    </div>\n    <div *ngIf="state==ViewState.endPass">\n        <div class="div_input" (click)="keyD();">\n            <p>{{fn2(endPassWord).substring(0,1)?x:empty}}</p>\n            <p>{{fn2(endPassWord).substring(1,2)?x:empty}}</p>\n            <p>{{fn2(endPassWord).substring(2,3)?x:empty}}</p>\n            <p>{{fn2(endPassWord).substring(3,4)?x:empty}}</p>\n            <p>{{fn2(endPassWord).substring(4,5)?x:empty}}</p>\n            <p style="border-right: 1px solid #7c7a7a">{{fn(endPassWord).substring(5,6)?x:empty}}</p>\n\n        </div>\n\n\n        <div class="calc" *ngIf="isShow">\n            <button ion-button *ngFor="let number of numbers;" (click)="checkPassword(number)">{{number}}</button>\n\n            <p (click)="delect()">删除</p>\n            <p (click)="deleteAll()">清空</p>\n        </div>\n\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/reset-pay-password3/reset-pay-password3.html"*/,
        })
        /**
         * Generated class for the OpeningWallet3Page page.
         *
         * See https://ionicframework.com/docs/components/#navigation for more info on
         * Ionic pages and navigation.
         */
        // @IonicPage()
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_5__app_share_service_app_member_account_service__["a" /* appMemberAccountService */],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_2__app_share_service_http_service__["a" /* MyHttpService */],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_5__app_share_service_app_member_account_service__["a" /* appMemberAccountService */]])
    ], ResetPayPassword3Page);
    return ResetPayPassword3Page;
}());

//# sourceMappingURL=reset-pay-password3.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__market_market__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__open_bill_open_bill__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_transaction_my_transaction__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__statisticals_statisticals__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__credit_credit__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_list_product_list__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__come_out_come_out__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__arrears_sum_arrears_sum__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__un_pay_un_pay__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__barcode_scanner_barcode_scanner__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_share_service_http_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_share_service_app_ProductOrder_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__repayment_list_repayment_list__ = __webpack_require__(296);
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




 //我的交易
 //统计分析
 //赊销记录
 //商品管理列表
 //出厂申请
 //欠款汇总
 //我的待付款





var View;
(function (View) {
    View[View["Detail"] = 0] = "Detail";
    View[View["selectTxnList"] = 1] = "selectTxnList";
})(View || (View = {}));
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, sto, http, orderService) {
        this.navCtrl = navCtrl;
        this.sto = sto;
        this.http = http;
        this.orderService = orderService;
        this.View = View;
        this.state = View.Detail;
        this.txns = [];
        this.userStatus = this.sto.customer.memberId;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        console.log("b");
        this.customer = this.sto.customer;
        if (this.customer.memberId) {
            this.member = this.sto.member;
        }
    };
    HomePage.prototype.ionViewCanEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.ionViewCanLeave = function () {
        if (!this.sto.customer.memberId) {
            if (this.currentStatus) {
                this.currentStatus = false;
                return true;
            }
            else {
                this.http.createMessage("warning", "暂无权限");
                return false;
            }
        }
        else {
            return true;
        }
    };
    HomePage.prototype.goMarket = function () {
        this.currentStatus = true;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__market_market__["a" /* MarketPage */]);
    };
    HomePage.prototype.barcodeScanner = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__barcode_scanner_barcode_scanner__["a" /* BarcodeScannerPage */]);
    };
    HomePage.prototype.OpenBill = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //this.http.createMessage("warning", "请选择您的交易区")
                //await this.allTxn()
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__open_bill_open_bill__["a" /* OpenBillPage */]);
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.goMyTransactionPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__my_transaction_my_transaction__["a" /* MyTransactionPage */]);
    };
    HomePage.prototype.goStatisticalsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__statisticals_statisticals__["a" /* StatisticalsPage */]);
    };
    HomePage.prototype.goCreditPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__credit_credit__["a" /* CreditPage */]);
    };
    HomePage.prototype.goRepaymentPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__repayment_list_repayment_list__["a" /* RepaymentListPage */]);
    };
    HomePage.prototype.goProductListPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__product_list_product_list__["a" /* ProductListPage */]);
    };
    HomePage.prototype.goComeOutPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__come_out_come_out__["a" /* ComeOutPage */]);
    };
    HomePage.prototype.goArrearsSumPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__arrears_sum_arrears_sum__["a" /* ArrearsSumPage */]);
    };
    HomePage.prototype.goUnPayPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__un_pay_un_pay__["a" /* UnPayPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/main-home/home/home.html"*/'<ion-header>\n\n</ion-header>\n\n<ion-content *ngIf="state==View.Detail">\n    <div style="height: 145px;">\n        <ion-slides>\n\n            <ion-slide>\n                <img src="./assets/imgs/banner.png" alt="">\n            </ion-slide>\n\n            <ion-slide>\n                <img src="./assets/imgs/banner.png" alt="">\n            </ion-slide>\n\n            <ion-slide>\n                <img src="./assets/imgs/banner.png" alt="">\n            </ion-slide>\n\n        </ion-slides>\n    </div>\n    <ion-grid style="padding-bottom: 10vh;">\n        <ion-row>\n            <ion-col style="border-right: 1px solid #ebebeb">\n\n                <img src="./assets/imgs/icon.png" alt=""> 新闻资讯\n\n            </ion-col>\n            <ion-col (click)="goMarket()">\n\n                <img src="./assets/imgs/icon.png" alt=""> 市场公告\n\n            </ion-col>\n        </ion-row>\n        <div style="height: 2px;background: #ebebeb;width: 100%;"></div>\n\n        <!-- <div style="    position: relative;">\n            <button ion-item (click)=" allTxn()" style="padding-left: 0;\n            margin-left: 0px;text-indent: 15px;">\n                选择交易区<span style="float: right">{{selectTxn?.txnName}} </span>\n            </button>\n\n        </div> -->\n        <div>\n            <ion-row>\n                <p style="text-indent: 20px;\n                    border-left: 10px solid #00c7ae;\n                    margin: 5px 0 10px 20px;\n                    font-size: 18px;\n                    font-weight: 600;\n                    padding: 0;">我是卖家</p>\n            </ion-row>\n            <ion-row style="border-bottom: 1px solid #ebebeb" class="today">\n                <ion-col style="    writing-mode: tb-rl;\n                    max-width: 63px;\n                    font-weight: 600;\n                    position: relative;\n                    ">今日</ion-col>\n                <ion-col>0\n                    <i>交易量（斤）</i>\n                </ion-col>\n                <ion-col>0.00\n                    <i>交易金额（元）</i>\n                </ion-col>\n                <ion-col>0\n                    <i>交易笔数</i>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col style="border-right: 1px solid #ebebeb" (click)="OpenBill()">\n                    <img src="./assets/imgs/icon.png" alt="">交易开单</ion-col>\n                <ion-col (click)="goMyTransactionPage()">\n                    <img src="./assets/imgs/icon.png" alt="">我的交易</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col style="border-right: 1px solid #ebebeb" (click)="goStatisticalsPage()">\n                    <img src="./assets/imgs/icon.png" alt="">统计分析</ion-col>\n                <ion-col (click)="goCreditPage()">\n                    <img src="./assets/imgs/icon.png" alt="">赊销记录</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col style="border-right: 1px solid #ebebeb" (click)="goRepaymentPage()">\n                    <img src="./assets/imgs/icon.png" alt="">还款记录</ion-col>\n                <ion-col (click)="goProductListPage()">\n                    <img src="./assets/imgs/icon.png" alt="">商品管理</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col style="border-right: 1px solid #ebebeb" (click)="goComeOutPage()">\n                    <img src="./assets/imgs/icon.png" alt="">出厂申请</ion-col>\n                <ion-col> </ion-col>\n            </ion-row>\n        </div>\n        <div>\n            <ion-row>\n                <p style="text-indent: 20px;\n                    border-left: 10px solid #00c7ae;\n                    margin: 5px 0 10px 20px;\n                    font-size: 18px;\n                    font-weight: 600;\n                    padding: 0;">我是买家</p>\n            </ion-row>\n            <ion-row class="today">\n                <ion-col style="    writing-mode: tb-rl;\n                    max-width: 63px;\n                    font-weight: 600;\n                    position: relative;\n                    ">今日</ion-col>\n                <ion-col style="display: flex;">0\n                    <i>交易量（斤）</i>\n                </ion-col>\n                <ion-col>0.00\n                    <i>交易金额（元）</i>\n                </ion-col>\n                <ion-col>0\n                    <i>交易笔数</i>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col (click)="barcodeScanner()" style="border-right: 1px solid #ebebeb">\n                    <img src="./assets/imgs/icon.png" alt="">我要付款</ion-col>\n                <ion-col (click)="goMyTransactionPage()">\n                    <img src="./assets/imgs/icon.png" alt="">我的交易</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col style="border-right: 1px solid #ebebeb" (click)="goStatisticalsPage()">\n                    <img src="./assets/imgs/icon.png" alt="">统计分析</ion-col>\n                <ion-col (click)="goArrearsSumPage()">\n                    <img src="./assets/imgs/icon.png" alt="">欠款记录</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col style="border-right: 1px solid #ebebeb" (click)="goRepaymentPage()">\n                    <img src="./assets/imgs/icon.png" alt="">我的还款</ion-col>\n                <ion-col (click)="goUnPayPage()">\n                    <img src="./assets/imgs/icon.png" alt="">我的待付</ion-col>\n            </ion-row>\n        </div>\n    </ion-grid>\n\n\n\n\n</ion-content>\n<!-- <ion-content *ngIf="state==View.selectTxnList">\n\n    <div class="layer" style="    position: fixed;\nheight: 100vh;\nwidth: 100vw;\nbackground: #4747470f;\nz-index: 334;">\n        <div>\n\n            <ion-list style="padding: 10px;\n            background: #f53d3d;\n            color: #fff;\n            text-align: center;\n            font-size: 20px;">\n\n                请选择交易区\n\n            </ion-list>\n            <ion-list *ngFor="let txn of txns">\n                <button ion-item (click)="selectOk(txn) ">\n         {{txn.txnName}}\n    </button>\n            </ion-list>\n        </div>\n    </div>\n</ion-content> -->\n<!-- <page-txnlist [txn]="selectTxn"></page-txnlist> -->'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/main-home/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_12__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_13__app_share_service_http_service__["a" /* MyHttpService */],
            __WEBPACK_IMPORTED_MODULE_14__app_share_service_app_ProductOrder_service__["a" /* appProductOrderService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_ProductOrder_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_platform_market_enum__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_share_service_http_service__ = __webpack_require__(11);
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






var View;
(function (View) {
    View[View["classDetail"] = 0] = "classDetail";
    View[View["selectClass"] = 1] = "selectClass";
    View[View["selectTxnList"] = 2] = "selectTxnList";
})(View || (View = {}));
/**
 * Generated class for the ProductAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var ProductAddPage = /** @class */ (function () {
    function ProductAddPage(navCtrl, navParams, events, prod, orderService, stro, http) {
        // this.events.subscribe("data", (categoryA) => {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.prod = prod;
        this.orderService = orderService;
        this.stro = stro;
        this.http = http;
        this.View = View;
        this.state = View.classDetail;
        this.mapProducts = [];
        this.newProduct = {
            name: "",
        };
        this.txns = [];
        this.priceType = __WEBPACK_IMPORTED_MODULE_3__share_platform_market_enum__["j" /* PriceWayEnum */];
        this.prodCatalogs3 = [];
        //   this.categoryA = categoryA
        //   this.events.unsubscribe('data');
        // })
    }
    ProductAddPage.prototype.selectOk = function (txn) {
        this.selectTxn = txn;
        this.state = View.classDetail;
    };
    ProductAddPage.prototype.categoryList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.mapProducts = [];
                        if (!this.selectTxn) return [3 /*break*/, 2];
                        this.state = View.selectClass;
                        return [4 /*yield*/, this.prod.productCatList(this.selectTxn.txnId)];
                    case 1:
                        result = _a.sent();
                        this.prodCatalogs = result;
                        this.mapProducts.push(result);
                        console.log(this.mapProducts);
                        return [3 /*break*/, 3];
                    case 2:
                        this.http.createMessage("warning", "请先选择交易区");
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductAddPage.prototype.ionViewDidLoad = function () {
    };
    ProductAddPage.prototype.allTxn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.orderService.txnList()];
                    case 1:
                        _a.txns = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductAddPage.prototype.addProduct = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.newProduct.custId = this.stro.customer.id;
                        this.newProduct.memberId = this.stro.customer.memberId;
                        this.newProduct.prodCatId = this.selectProCate.id;
                        this.newProduct.priceWay = this.selectProductValuationType;
                        this.selectpriceUnit = this.stro.priceW;
                        this.newProduct.priceUnit = this.selectpriceUnit;
                        debugger;
                        return [4 /*yield*/, this.prod.productCreate(this.newProduct)];
                    case 1:
                        _a.sent();
                        this.http.createMessage("success", "创建商品成功");
                        this.selectTxn = {};
                        this.selectProductValuationType = {};
                        this.newProduct.price = 0;
                        this.selectProCate = {};
                        this.newProduct.name = "";
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductAddPage.prototype.selectChild = function (data, arrIndex, prodIndex) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (arrIndex != this.mapProducts.length - 1) {
                            this.mapProducts.splice(arrIndex + 1);
                        }
                        _a = this;
                        return [4 /*yield*/, this.prod.productCatList(this.selectTxn.txnId, data.id)];
                    case 1:
                        _a.childProducts = _b.sent();
                        if (this.childProducts.length > 0) {
                            this.mapProducts.push(JSON.parse(JSON.stringify(this.childProducts)));
                            this.isShow = false;
                        }
                        else {
                            this.isShow = true;
                        }
                        this.selectProCate = data;
                        this.mapProducts[arrIndex].forEach(function (product) { return product.checked = false; });
                        this.selectProCate.checked = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductAddPage.prototype.cancel = function () {
        this.selectProCate = {};
    };
    ProductAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-product-add',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/product-add/product-add.html"*/'<!--\n  Generated template for the ProductAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>添加商品</ion-title>\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="addProduct()">\n                <span  >保存</span>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n\n<ion-content>\n\n\n    <ion-item mode="android">\n        <button ion-item (click)=" state=View.selectTxnList; allTxn()">\n            选择交易区<span style="float: right">{{selectTxn?.txnName}} </span>\n        </button>\n    </ion-item>\n\n\n\n\n\n    <ion-item mode="android">\n        <button ion-item (click)=" categoryList()">\n            商品分类<span style="float: right"*ngIf="selectProCate">{{selectProCate.catName}}  </span>\n        </button>\n    </ion-item>\n\n    <ion-item mode="android">\n\n        <ion-label color="primary" style="    margin-left: 20px;">计价方式</ion-label>\n        <ion-select [(ngModel)]="selectProductValuationType" okText="确认" cancelText="取消">\n\n            <ion-option value="{{priceType.Piece}}">计件</ion-option>\n            <ion-option value="{{priceType.Weight}}">计重</ion-option>\n\n        </ion-select>\n    </ion-item>\n\n\n    <ion-item *ngIf="selectProductValuationType==priceType.Piece" mode="android">\n        <ion-label color="primary" style="    margin-left: 20px;">件重</ion-label>\n        <ion-input placeholder="" style="text-align: right;" [(ngModel)]="newProduct!.pcsWgt"></ion-input>\n    </ion-item>\n\n\n\n\n\n\n\n    <ion-item mode="android">\n        <ion-label color="primary" style="    margin-left: 20px;">价格：</ion-label>\n        <ion-input placeholder="" style="text-align: right;" [(ngModel)]="newProduct!.price"></ion-input>\n    </ion-item>\n    <ion-item mode="android">\n        <ion-label color="primary" style="    margin-left: 20px;">商品名称：</ion-label>\n        <ion-input placeholder="" style="text-align: right;" [(ngModel)]="newProduct!.name"></ion-input>\n    </ion-item>\n\n</ion-content>\n<ion-content *ngIf="state==View.selectClass">\n    <div class="layer">\n        <div style="    position: relative;\n        background: #fff;\n        top: 20vh;height: 80vh;">\n            <div class="ok">\n                <span (click)="state=View.classDetail;cancel()">取消</span>\n                <span (click)="state=View.classDetail" *ngIf="isShow">确认</span>\n\n            </div>\n            <div style="   \n            background: #f3f3f3;\n            padding: 10px;">\n                <span style="margin-bottom: 10px;">已选分类:   <div style="display: inline-block">\n                        <span *ngIf="selectProCate">{{selectProCate.catName}}</span>\n            </div>\n            </span>\n        </div>\n        <div class="Level">\n            <ng-container *ngFor="let products of mapProducts;let arrIndex =index;">\n                <div>\n                    <span [class.active]="data.checked" *ngFor="let data of products;let prodIndex=index" (click)="selectChild(data,arrIndex,prodIndex)">\n\n                    {{data.catName}}\n\n                </span>\n\n                </div>\n            </ng-container>\n        </div>\n    </div>\n    </div>\n\n\n\n\n</ion-content>\n\n<ion-content *ngIf="state==View.selectTxnList">\n\n    <div class="layer">\n        <div style="    position: relative;\n        background: #fff;\n        top: 20vh;height: 80vh;">\n            <ion-list no-lines *ngFor="let txn of txns">\n                <button ion-item (click)="selectOk(txn) ">\n             {{txn.txnName}}\n        </button>\n            </ion-list>\n        </div>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/product-add/product-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_ProductOrder_service__["a" /* appProductOrderService */],
            __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_ProductOrder_service__["a" /* appProductOrderService */],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_5__app_share_service_http_service__["a" /* MyHttpService */]])
    ], ProductAddPage);
    return ProductAddPage;
}());

//# sourceMappingURL=product-add.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeighSetupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_blue_list_blue_list__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_platform_market_enum__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_ble__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the WeighSetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var WeighSetupPage = /** @class */ (function () {
    function WeighSetupPage(navCtrl, navParams, platform, actionsheetCtrl, ble, event, 
        // public alert: AlertController,
        sto) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
        this.ble = ble;
        this.event = event;
        this.sto = sto;
        this.selectPriceW = __WEBPACK_IMPORTED_MODULE_3__share_platform_market_enum__["i" /* PriceUnitEnum */].JIN;
        this.priceUnit = __WEBPACK_IMPORTED_MODULE_3__share_platform_market_enum__["i" /* PriceUnitEnum */];
    }
    WeighSetupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WeighSetupPage');
        if (!this.sto.priceW) {
            this.sto.priceW = this.priceUnit.JIN;
        }
    };
    //选择蓝牙设备
    WeighSetupPage.prototype.ok = function () {
        this.navCtrl.pop();
    };
    WeighSetupPage.prototype.changePriceW = function () {
        this.sto.priceW = "";
        this.sto.priceW = this.selectPriceW;
    };
    WeighSetupPage.prototype.blueList = function () {
        var device = 'scales';
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_blue_list_blue_list__["a" /* BlueListPage */], { device: device });
    };
    WeighSetupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-weigh-setup',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/weigh-setup/weigh-setup.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>蓝牙秤设置</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n        <button ion-item (click)="blueList()">\n            蓝牙秤：\n        </button>\n        {{device | json}}\n    </ion-list>\n\n    <ion-item>\n\n        <ion-label>称量单位：</ion-label>\n        <ion-select [(ngModel)]="selectPriceW" (ionChange)="changePriceW()">\n\n            <ion-option value="{{priceUnit.KG}}">公斤</ion-option>\n            <ion-option value="{{priceUnit.JIN}}">斤</ion-option>\n\n        </ion-select>\n    </ion-item>\n    <button ion-button style="width: 80%;\n    margin: 15px auto;\n    display: block;" (click)="ok()">确定</button>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/weigh-setup/weigh-setup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_ble__["a" /* BLE */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_storage_service__["a" /* StorageService */]])
    ], WeighSetupPage);
    return WeighSetupPage;
}());

//# sourceMappingURL=weigh-setup.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlueListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the BlueListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BlueListPage = /** @class */ (function () {
    function BlueListPage(ble, alertCtrl, navParams, event) {
        var _this = this;
        this.ble = ble;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.event = event;
        this.devices = [];
        this.scan = true;
        this.loop = true;
        this.data = [];
        this.paramsDevice = this.navParams.get('device');
        this.ble.enable();
        this.gettingDevices = true;
        this.ble.scan([], 20).subscribe(function (device) {
            _this.devices.push(device);
            _this.gettingDevices = false;
        });
    }
    BlueListPage.prototype.selectDevice = function (device) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '连接',
            message: '确定连接?',
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: '连接',
                    handler: function () {
                        if (_this.paramsDevice == 'printer') {
                            _this.ble.connect(device.id).subscribe(function () {
                                _this.alert('连接成功');
                                _this.event.publish('printer', device);
                            });
                        }
                        else if (_this.paramsDevice == 'scales') {
                            _this.ble.connect(device.id).subscribe(function () {
                                _this.alert('连接成功');
                                _this.event.publish('scales', device);
                            });
                        }
                    }
                },
            ]
        });
        alert.present();
    };
    BlueListPage.prototype.stopScan = function (address) {
        var _this = this;
        this.scan = !this.scan;
        var alert = this.alertCtrl.create({
            title: '停止扫描?',
            message: '确定停止扫描吗？',
            buttons: [
                {
                    text: '取消',
                    handler: function () {
                    }
                },
                {
                    text: '停止扫描',
                    handler: function () {
                        _this.ble.stopScan().then(function (success) {
                            _this.gettingDevices = false;
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    BlueListPage.prototype.alert = function (data) {
        var alert = this.alertCtrl.create({
            title: data,
            message: data,
            buttons: [
                {
                    text: '确定',
                    role: '确定',
                },
            ]
        });
        alert.present();
    };
    BlueListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-blue-list',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/blue-list/blue-list.html"*/'<!--\n  Generated template for the BlueListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>blueList</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- \n  {{list | json}}\n  <ion-list *ngFor="let item of list;let i = index">\n    <ion-item (click)="save(item)">\n      {{item.name}}\n    </ion-item>\n  </ion-list>\n\n  <div *ngIf="status">搜索中..... </div>\n  <span>哈哈</span>\n  {{a}} -->\n\n\n  <ion-list padding>\n    <ion-list-header>\n      配对设备 {{data | json}}\n    </ion-list-header>\n\n    <ion-list-header>\n      可配对设备\n    </ion-list-header>\n\n    {{devices | json}}\n    <ion-item *ngFor=\'let device of devices\'>\n      <span (click)="selectDevice(device)">\n        {{device.name}}\n      </span>\n    </ion-item>\n    <ion-spinner name="crescent" *ngIf="gettingDevices"></ion-spinner>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/blue-list/blue-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__["a" /* BLE */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], BlueListPage);
    return BlueListPage;
}());

//# sourceMappingURL=blue-list.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_customer__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_ProductOrder_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_platform_market_enum__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_share_service_http_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_RxJS_Rx__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_RxJS_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_RxJS_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_ble__ = __webpack_require__(62);
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









/**
 * Generated class for the QrCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var QrCodePage = /** @class */ (function () {
    function QrCodePage(navCtrl, navParams, productOrderService, modelCtrl, http, event, ble) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productOrderService = productOrderService;
        this.modelCtrl = modelCtrl;
        this.http = http;
        this.event = event;
        this.ble = ble;
        this.createdCode = null;
        this.orderNo = '';
        this.show = false;
        this.pageView = true;
        var data = this.navParams.get('data');
        console.log(data);
        this.payType = this.navParams.get('payType');
        this.createdCode = data.qCodeBase64Str;
        this.orderNo = data.orderNo;
        console.log(data);
        //
        if (this.payType == __WEBPACK_IMPORTED_MODULE_4__share_platform_market_enum__["h" /* PayTypeEnum */].FS_CREDIT) {
            //rx 轮询订阅  买家信用
            this.qryBuyerCreditStatus = __WEBPACK_IMPORTED_MODULE_6_RxJS_Rx__["Observable"].interval(5000).startWith(1) //消除延时
                .mergeMap(function () { return _this.productOrderService.qryBuyerCredit(_this.orderNo); })
                .subscribe(function (next) {
                if (next.memberName != null) {
                    _this.show = true; //打开模态框
                    _this.credit = next;
                    _this.qryBuyerCreditStatus.unsubscribe(); //取消订阅 来停止轮询
                }
                if (_this.pageView == false) {
                    _this.qryBuyerCreditStatus.unsubscribe();
                }
            });
        }
        else if (this.payType == __WEBPACK_IMPORTED_MODULE_4__share_platform_market_enum__["h" /* PayTypeEnum */].FS_C2B) {
            this.queryOrderStatus = __WEBPACK_IMPORTED_MODULE_6_RxJS_Rx__["Observable"].interval(5000).startWith(1) //消除延时
                .mergeMap(function () { return _this.productOrderService.querOrderStatus(_this.orderNo); })
                .subscribe(function (next) {
                console.log(next.status);
                if (next.status == __WEBPACK_IMPORTED_MODULE_4__share_platform_market_enum__["f" /* OrderStatusEnum */].PAID) {
                    console.log('交易成功');
                    _this.show = false; //关闭模态框
                    _this.http.createMessage('success', '交易成功');
                    _this.queryOrderStatus.unsubscribe(); //取消订阅 来停止轮询
                    _this.printer();
                }
                else if (next.qcodeBizType == __WEBPACK_IMPORTED_MODULE_4__share_platform_market_enum__["f" /* OrderStatusEnum */].CLOSED) {
                    _this.http.createMessage('warning', '交易关闭');
                }
                if (_this.pageView == false) {
                    _this.qryBuyerCreditStatus.unsubscribe();
                }
            });
        }
    }
    QrCodePage.prototype.agree = function (status) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        status = (status == 'SELLER_AGREE') ? __WEBPACK_IMPORTED_MODULE_4__share_platform_market_enum__["m" /* queryOrderStatus */].SELLER_AGREE : __WEBPACK_IMPORTED_MODULE_4__share_platform_market_enum__["m" /* queryOrderStatus */].CLOSED;
                        return [4 /*yield*/, this.productOrderService.changeStatus(this.orderNo, status)];
                    case 1:
                        res = _a.sent();
                        if (res && status == 'SELLER_AGREE') {
                            this.show = false;
                            //轮询 订阅订单状态
                            this.queryOrderStatus = __WEBPACK_IMPORTED_MODULE_6_RxJS_Rx__["Observable"].interval(1000).startWith(1) //消除延时
                                .mergeMap(function () { return _this.productOrderService.querOrderStatus(_this.orderNo); })
                                .subscribe(function (next) {
                                if (next.status == __WEBPACK_IMPORTED_MODULE_4__share_platform_market_enum__["f" /* OrderStatusEnum */].PAID) {
                                    _this.queryOrderStatus.unsubscribe(); //取消订阅 来停止轮询
                                    _this.show = false;
                                    _this.http.createMessage('success', '交易成功');
                                    _this.printer();
                                }
                                if (_this.pageView == false) {
                                    _this.queryOrderStatus.unsubscribe();
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    QrCodePage.prototype.ionViewDidLeave = function () {
        this.pageView = false;
    };
    //打印机
    QrCodePage.prototype.printer = function () {
        var _this = this;
        this.event.subscribe('printer', function (device) {
            _this.ble.isConnected(device.id).then(function () {
                alert('开始打印');
                // let buffer = this.productOrderService.xxx()
                // this.ble.write(device.id, 'FF10', 'FF11', [hellow])
            });
        });
    };
    QrCodePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QrCodePage');
    };
    QrCodePage.prototype.customerList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__customer_customer__["a" /* CustomerPage */]);
    };
    QrCodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-qr-code',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/qr-code/qr-code.html"*/'<!--\n  Generated template for the QrCodePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>二维码</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="info">\n        <h3>交易单</h3>\n        <div style="    position: relative;\n        left: -22%;\n        margin: 20px 0;">\n            <p>商户名：张三</p>\n            <p>2018-01-22 19:43:51</p>\n        </div>\n        <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n\n    </div>\n    <button ion-button class="width:80%" color="red" block (click)="customerList()">微信分享给好友</button>\n\n\n    <div class="model" *ngIf="show">\n        <ion-card>\n\n            <ion-card-header>\n                待处理\n            </ion-card-header>\n\n            <ion-card-content>\n                <ion-list>\n                    <ion-item>\n                        买家姓名:{{credit.memberName}}\n                    </ion-item>\n\n                    <ion-item>\n                        买家欠账:{{credit.amount}}\n                    </ion-item>\n                </ion-list>\n                <button ion-button (click)="agree(\'SELLER_AGREE\')">同意</button>\n                <button ion-button (click)="agree(\'CLOSED\')">拒绝</button>\n            </ion-card-content>\n\n        </ion-card>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/qr-code/qr-code.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_ProductOrder_service__["a" /* appProductOrderService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_5__app_share_service_http_service__["a" /* MyHttpService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_ble__["a" /* BLE */]])
    ], QrCodePage);
    return QrCodePage;
}());

//# sourceMappingURL=qr-code.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTransactionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qr_code_qr_code__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MyTransactionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var MyTransactionDetailPage = /** @class */ (function () {
    function MyTransactionDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyTransactionDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyTransactionDetailPage');
    };
    MyTransactionDetailPage.prototype.goQrCode = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__qr_code_qr_code__["a" /* QrCodePage */]);
    };
    MyTransactionDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-transaction-detail',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/my-transaction-detail/my-transaction-detail.html"*/'<!--\n  Generated template for the MyTransactionDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>交易详情</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list class="success">\n        <ion-item>\n\n            <h2>订单号 <span> 42389387048</span></h2>\n            <h2>订单状态 <span> 成功</span></h2>\n            <h3>商品明细单击商品可进行退货</h3>\n            <h2>商品名称 <span> 小红小豆</span></h2>\n            <p>单价<span>0.10</span></p>\n            <p>金额（元）<span>0.20</span></p>\n            <p>计价方式 <span>计重</span></p>\n            <p>重量<span>2斤</span></p>\n\n        </ion-item>\n\n\n    </ion-list>\n    <div class="butt_div">\n        <p (click)="goQrCode()">二维码</p>\n        <p>打印</p>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/my-transaction-detail/my-transaction-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], MyTransactionDetailPage);
    return MyTransactionDetailPage;
}());

//# sourceMappingURL=my-transaction-detail.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountStatusEnum; });
/* unused harmony export AccountTypeEnum */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CreateWayEnum; });
/* unused harmony export CustCardStatusEnum */
/* unused harmony export CustomerStatusEnum */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MemberStatusEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MsgTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return OrderStatusEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return OrderTypeEnum; });
/* unused harmony export ParamsTypeEnum */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return PayTypeEnum; });
/* unused harmony export CertificateWayEnum */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return PriceUnitEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return PriceWayEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ProductStatusEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MemberInviteStatus; });
/* unused harmony export QcodeBizType */
/* unused harmony export payStatus */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return friendMsgType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return queryOrderStatus; });
var AccountStatusEnum;
(function (AccountStatusEnum) {
    /**可用*/
    AccountStatusEnum["ENABLE"] = "\u53EF\u7528";
    /**停用*/
    AccountStatusEnum["DISABLE"] = "\u505C\u7528";
    /**冻结*/
    AccountStatusEnum["FROZEN"] = "FROZEN";
    /** 注销*/
    AccountStatusEnum["CANCEL"] = "CANCEL";
})(AccountStatusEnum || (AccountStatusEnum = {}));
var AccountTypeEnum;
(function (AccountTypeEnum) {
    AccountTypeEnum["MARKET_MSG"] = "\u5E02\u573A\u77ED\u4FE1\u8D26\u6237";
    AccountTypeEnum["MARKET_FEE"] = "\u5E02\u573A\u624B\u7EED\u8D39\u8D26\u6237";
    AccountTypeEnum["MEMBER_CASH"] = "\u4F1A\u5458\u73B0\u91D1\u8D26\u6237";
    AccountTypeEnum["MEMBER_SCORE"] = "\u4F1A\u5458\u79EF\u5206\u8D26\u6237";
    AccountTypeEnum["USER_CASH"] = "\u5458\u5DE5\u73B0\u91D1\u8D26\u6237";
})(AccountTypeEnum || (AccountTypeEnum = {}));
var CreateWayEnum;
(function (CreateWayEnum) {
    CreateWayEnum["APP"] = "APP";
    CreateWayEnum["WEB"] = "WEB";
    CreateWayEnum["POS"] = "POS";
})(CreateWayEnum || (CreateWayEnum = {}));
var CustCardStatusEnum;
(function (CustCardStatusEnum) {
    CustCardStatusEnum["ENABLE"] = "";
    CustCardStatusEnum["DISABLE"] = "";
    CustCardStatusEnum["CANCEL"] = "";
    CustCardStatusEnum["ACTIVE"] = "";
})(CustCardStatusEnum || (CustCardStatusEnum = {}));
var CustomerStatusEnum;
(function (CustomerStatusEnum) {
    /**可用 */
    CustomerStatusEnum["ENABLE"] = "ENABLE";
    /**停用 */
    CustomerStatusEnum["DISABLE"] = "DISABLE";
    /** 冻结*/
    CustomerStatusEnum["FROZEN"] = "FROZEN";
    /**注销 */
    CustomerStatusEnum["CANCEL"] = "CANCEL";
})(CustomerStatusEnum || (CustomerStatusEnum = {}));
var MemberStatusEnum;
(function (MemberStatusEnum) {
    /**可用 */
    MemberStatusEnum["ENABLE"] = "ENABLE";
    /*停用*/
    MemberStatusEnum["DISABLE"] = "DISABLE";
    /** 冻结*/
    MemberStatusEnum["FROZEN"] = "FROZEN";
    /** 注销*/
    MemberStatusEnum["CANCEL"] = "CANCEL";
})(MemberStatusEnum || (MemberStatusEnum = {}));
var MsgTypeEnum;
(function (MsgTypeEnum) {
    MsgTypeEnum["All"] = "All";
    /**账户变动 */
    MsgTypeEnum["ACC_AMT"] = "ACC_AMT";
    /**邀请信息 */
    MsgTypeEnum["CUST_INVITE"] = "CUST_INVITE";
    MsgTypeEnum["MEM_INVITE"] = "MEM_INVITE";
    /**操作员变动信息 */
    MsgTypeEnum["ACTOR_CHANGE"] = "ACTOR_CHANGE";
    /** 现金还款通知*/
    MsgTypeEnum["REPAY_APPLY"] = "REPAY_APPLY";
    /** 现金还款确认*/
    MsgTypeEnum["REPAY_CONFIRM"] = "REPAY_CONFIRM ";
    /** 待付款*/
    MsgTypeEnum["TOBE_PAY"] = "TOBE_PAY";
})(MsgTypeEnum || (MsgTypeEnum = {}));
var OrderStatusEnum;
(function (OrderStatusEnum) {
    OrderStatusEnum["TEMP"] = "TEMP";
    OrderStatusEnum["TOBE_PAY"] = "TOBE_PAY";
    OrderStatusEnum["CLOSED"] = "CLOSED";
    OrderStatusEnum["PAID"] = "PAID";
    OrderStatusEnum["RETURNED"] = "RETURNED";
    OrderStatusEnum["SELLER_AGREE"] = "SELLER_AGREE";
    OrderStatusEnum["PAY_FAIL"] = "PAY_FAIL";
})(OrderStatusEnum || (OrderStatusEnum = {}));
var OrderTypeEnum;
(function (OrderTypeEnum) {
    OrderTypeEnum["TRANS"] = "TRANS";
    OrderTypeEnum["RENTS"] = "RENTS";
})(OrderTypeEnum || (OrderTypeEnum = {}));
var ParamsTypeEnum;
(function (ParamsTypeEnum) {
    ParamsTypeEnum[ParamsTypeEnum["TEXT"] = 0] = "TEXT";
    ParamsTypeEnum[ParamsTypeEnum["IMAGE"] = 1] = "IMAGE";
    ParamsTypeEnum[ParamsTypeEnum["SELECT"] = 2] = "SELECT";
    ParamsTypeEnum[ParamsTypeEnum["SWITCH"] = 3] = "SWITCH";
})(ParamsTypeEnum || (ParamsTypeEnum = {}));
var PayTypeEnum;
(function (PayTypeEnum) {
    /**微信 主扫*/
    PayTypeEnum["WX_C2B"] = " WX_C2B";
    /**支付宝 主扫*/
    PayTypeEnum["ALI_C2B"] = "ALI_C2B";
    /**微信 被扫*/
    PayTypeEnum["WX_B2C"] = "WX_B2C";
    /**支付宝 被扫*/
    PayTypeEnum["ALI_B2C"] = "ALI_B2C";
    PayTypeEnum["POS_PAY"] = "POS_PAY";
    /**钱包 主扫*/
    PayTypeEnum["FS_C2B"] = "FS_C2B";
    /**钱包 被扫*/
    PayTypeEnum["FS_B2C"] = "FS_B2C";
    /**刷卡*/
    PayTypeEnum["FS_IC"] = "FS_IC";
    /**信用卡 主扫*/
    PayTypeEnum["FS_CREDIT"] = "FS_CREDIT";
    /**现金*/
    PayTypeEnum["CASH"] = "CASH";
})(PayTypeEnum || (PayTypeEnum = {}));
var CertificateWayEnum;
(function (CertificateWayEnum) {
})(CertificateWayEnum || (CertificateWayEnum = {}));
var PriceUnitEnum;
(function (PriceUnitEnum) {
    PriceUnitEnum["JIN"] = "JIN";
    PriceUnitEnum["KG"] = "KG";
})(PriceUnitEnum || (PriceUnitEnum = {}));
/**计价方式*/
var PriceWayEnum;
(function (PriceWayEnum) {
    PriceWayEnum["Weight"] = "WEIGHT";
    PriceWayEnum["Piece"] = "PIECE";
})(PriceWayEnum || (PriceWayEnum = {}));
var ProductStatusEnum;
(function (ProductStatusEnum) {
    ProductStatusEnum["Active"] = "Active";
    ProductStatusEnum["Disabled"] = "Disabled";
    ProductStatusEnum["Del"] = "Del";
})(ProductStatusEnum || (ProductStatusEnum = {}));
/**邀请信息状态*/
var MemberInviteStatus;
(function (MemberInviteStatus) {
    MemberInviteStatus["Active"] = "Active";
    MemberInviteStatus["Del"] = "Del";
    MemberInviteStatus["Agree"] = "Agree";
    MemberInviteStatus["Refuse"] = "Refuse";
})(MemberInviteStatus || (MemberInviteStatus = {}));
var QcodeBizType;
(function (QcodeBizType) {
    /**成员信息*/
    QcodeBizType["MEMBER"] = "MEMBER";
    /**交易支付*/
    QcodeBizType["TRANS_PAY"] = "TRANS_PAY";
    /**转账收款*/
    QcodeBizType["TRANS_ACC"] = "TRANS_ACC";
})(QcodeBizType || (QcodeBizType = {}));
var payStatus;
(function (payStatus) {
    payStatus["CreditSale"] = "CreditSale";
    payStatus["pay"] = "pay";
})(payStatus || (payStatus = {}));
var friendMsgType;
(function (friendMsgType) {
    /**收到 */
    friendMsgType["Receive"] = "Receive";
    /**发送 */
    friendMsgType["Send"] = "send";
})(friendMsgType || (friendMsgType = {}));
var queryOrderStatus;
(function (queryOrderStatus) {
    /**暂存*/
    queryOrderStatus["TEMP"] = "TEMP";
    /**下单*/
    queryOrderStatus["SUBMIT"] = "SUBMIT";
    /**卖家同意*/
    queryOrderStatus["SELLER_AGREE"] = "SELLER_AGREE";
    /**待付*/
    queryOrderStatus["TOBE_PAY"] = "TOBE_PAY";
    /**关闭*/
    queryOrderStatus["CLOSED"] = "CLOSED";
    /**待确定*/
    queryOrderStatus["TOBE_CONFIRM"] = "TOBE_CONFIRM";
    /**已付*/
    queryOrderStatus["PAID"] = "PAID";
    /**支付失败*/
    queryOrderStatus["PAY_FAIL"] = "PAY_FAIL";
    /**退货*/
    queryOrderStatus["REFUNDED"] = "REFUNDED";
})(queryOrderStatus || (queryOrderStatus = {}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeScannerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_ProductOrder_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_platform_market_enum__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_order_pay_order_pay__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_RxJS_Rx__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_RxJS_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_RxJS_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_share_service_http_service__ = __webpack_require__(11);
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





 //扫码支付详情--确认支付


/**
 * Generated class for the BarcodeScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BarcodeScannerPage = /** @class */ (function () {
    function BarcodeScannerPage(navCtrl, navParams, qrScanner, modelCtrl, order, http, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qrScanner = qrScanner;
        this.modelCtrl = modelCtrl;
        this.order = order;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.isShow = false; //控制显示背景，避免切换页面卡顿
        this.model = false;
        this.getting = true;
        this.viewPage = true;
        this.show = false;
        this.httpRes('TTAwMDEwMDMyOSxUUkFOU19QQVk=');
        //默认为false
        this.light = false;
        this.frontCamera = false;
    }
    BarcodeScannerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // 开始扫描
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    _this.httpRes(text);
                    _this.qrScanner.hide(); //假的关闭 不能用
                    scanSub_1.unsubscribe(); // 停止扫描
                    // this.navCtrl.pop();  //跳转页面
                });
                // 相机可见
                _this.qrScanner.show();
            }
            else if (status.denied) {
            }
            else {
            }
        })
            .catch(function (e) { return console.log('Error is', e); });
    };
    BarcodeScannerPage.prototype.ionViewDidEnter = function () {
        //页面可见时才执行
        this.showCamera();
        this.isShow = true; //显示背景
    };
    BarcodeScannerPage.prototype.httpRes = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert(text);
                        return [4 /*yield*/, this.order.exeQCode(text)];
                    case 1:
                        res = _a.sent();
                        if (res) {
                            this.qcodeBizType = res['qcodeBizType'];
                            this.orderNo = res['params']['orderNo'];
                            this.payType = res['params']['payType'];
                            console.log('1' + this.qcodeBizType, this.orderNo, this.payType);
                        }
                        else {
                            this.http.createMessage('warning', '请求失败');
                        }
                        if (this.qcodeBizType == 'TRANS_PAY') {
                            if (this.payType == __WEBPACK_IMPORTED_MODULE_4__share_platform_market_enum__["h" /* PayTypeEnum */].FS_C2B) {
                                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_order_pay_order_pay__["a" /* OrderPayPage */], { res: this.orderNo });
                            }
                            else if (this.payType == __WEBPACK_IMPORTED_MODULE_4__share_platform_market_enum__["h" /* PayTypeEnum */].FS_CREDIT) {
                                //第一步扫码轮询卖家是不是同意了
                                this.show = true;
                                this.querOrderStatus = __WEBPACK_IMPORTED_MODULE_6_RxJS_Rx__["Observable"].interval(5000).startWith(1) //消除延时
                                    .mergeMap(function () { return _this.order.querOrderStatus(_this.orderNo); })
                                    .subscribe(function (rtn) {
                                    if (rtn.status == __WEBPACK_IMPORTED_MODULE_4__share_platform_market_enum__["f" /* OrderStatusEnum */].SELLER_AGREE) {
                                        _this.show = false;
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_order_pay_order_pay__["a" /* OrderPayPage */], { res: _this.orderNo });
                                        _this.querOrderStatus.unsubscribe(); //取消订阅 来停止轮询
                                    }
                                    else if (rtn.status == __WEBPACK_IMPORTED_MODULE_4__share_platform_market_enum__["f" /* OrderStatusEnum */].CLOSED) {
                                        _this.http.createMessage('warning', '卖家拒绝交易');
                                        _this.querOrderStatus.unsubscribe(); //取消订阅 来停止轮询
                                    }
                                    if (_this.viewPage == false) {
                                        _this.querOrderStatus.unsubscribe();
                                    }
                                });
                            }
                        }
                        else {
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 闪光灯控制，默认关闭
     */
    BarcodeScannerPage.prototype.toggleLight = function () {
        if (this.light) {
            this.qrScanner.disableLight();
        }
        else {
            this.qrScanner.enableLight();
        }
        this.light = !this.light;
    };
    /**
     * 前后摄像头互换
     */
    BarcodeScannerPage.prototype.toggleCamera = function () {
        if (this.frontCamera) {
            this.qrScanner.useBackCamera();
        }
        else {
            this.qrScanner.useFrontCamera();
        }
        this.frontCamera = !this.frontCamera;
    };
    BarcodeScannerPage.prototype.showCamera = function () {
        window.document.querySelector('ion-app').classList.add('cameraView');
    };
    BarcodeScannerPage.prototype.hideCamera = function () {
        window.document.querySelector('ion-app').classList.remove('cameraView');
        this.qrScanner.hide(); //需要关闭扫描，否则相机一直开着
    };
    BarcodeScannerPage.prototype.ionViewDidLeave = function () {
        this.viewPage = false;
        this.querOrderStatus.unsubscribe;
        this.hideCamera();
        this.qrScanner.destroy(); //销毁相机
    };
    BarcodeScannerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-barcode-scanner',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/barcode-scanner/barcode-scanner.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>扫描中……</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-scroll [ngClass]="{\'qrscanner\':isShow}">\n  <div [ngClass]="{\'qrscanner-area\':isShow}">\n  </div>\n  <div [ngClass]="{\'through-line\':isShow}"></div>\n  <div class="button-bottom">\n    <button (click)="toggleLight()" ion-fab class="icon-camera" margin-right>\n      <ion-icon name="flash"></ion-icon>\n    </button>\n    <button (click)="toggleCamera()" ion-fab class="icon-camera">\n      <ion-icon name="reverse-camera"></ion-icon>\n    </button>\n  </div>\n\n  <div class="model" *ngIf="show">\n    <ion-card>\n      <ion-card-header>\n        等待卖方同意\n      </ion-card-header>\n      <ion-card-content>\n        <ion-spinner name="crescent" *ngIf="getting"></ion-spinner>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/barcode-scanner/barcode-scanner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_ProductOrder_service__["a" /* appProductOrderService */],
            __WEBPACK_IMPORTED_MODULE_7__app_share_service_http_service__["a" /* MyHttpService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], BarcodeScannerPage);
    return BarcodeScannerPage;
}());

//# sourceMappingURL=barcode-scanner.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appMessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__(9);
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



var appMessageService = /** @class */ (function () {
    function appMessageService(http, stroge) {
        this.http = http;
        this.stroge = stroge;
        this.api = {
            /**
            * get
            * 该接口可以暂时不要
            */
            settingList: '/app/customer/message/setting-list',
            /**
             * 设置自己的消息
             * post
             * body: {newMsgSetting&customerId}
             */
            msgManage: '/app/customer/message/manage',
            /**
             * get
             * ?customerId&messageTypes
             */
            msgQuery: '/app/customer/message/query',
            msgChecked: '/app/customer/message/checked',
        };
    }
    appMessageService.prototype.msgChecked = function (messageId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.msgChecked, { params: { messageId: messageId, customerId: this.stroge.customer.id } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appMessageService.prototype.msgManage = function (newMsgSetting) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Post(this.api.msgManage, { newMsgSetting: newMsgSetting }, { params: { customerId: this.stroge.customer.id } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appMessageService.prototype.msgQuery = function (messageTypes) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.msgQuery, { params: { customerId: this.stroge.customer.id, messageTypes: messageTypes } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.msgs];
                }
            });
        });
    };
    appMessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* MyHttpService */], __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]])
    ], appMessageService);
    return appMessageService;
}());

//# sourceMappingURL=app_message.service.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpeningWallet1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opening_wallet2_opening_wallet2__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_app_member_account_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the OpeningWallet1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
//  @ViewChild(Navbar) navbar: Navbar;
var OpeningWallet1Page = /** @class */ (function () {
    function OpeningWallet1Page(navCtrl, navParams, customer, storage, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customer = customer;
        this.storage = storage;
        this.app = app;
    }
    OpeningWallet1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpeningWallet1Page');
    };
    OpeningWallet1Page.prototype.ok = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__opening_wallet2_opening_wallet2__["a" /* OpeningWallet2Page */]);
    };
    OpeningWallet1Page.prototype.aa = function () {
        console.log("aa");
    };
    OpeningWallet1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-opening-wallet1',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/opening-wallet1/opening-wallet1.html"*/'<!--\n  Generated template for the OpeningWallet1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n\n\n        <ion-title>新发地钱包支付用户服务协议</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div style="line-height: 25px;\n    text-indent: 30px;\n    font-size: 18px;\n    margin-bottom: 50px;">\n        新发地钱包支付用户服务协议新发地钱包支付用户服务协议新发地钱包支付用户服务协议新发地钱包支付用户服务协议新发地钱包支付用户服务协议新发地钱包支付用户服务协议\n    </div>\n    <button ion-button color="xfd" block (click)="ok()">同意</button>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/opening-wallet1/opening-wallet1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_app_member_account_service__["a" /* appMemberAccountService */],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"]])
    ], OpeningWallet1Page);
    return OpeningWallet1Page;
}());

//# sourceMappingURL=opening-wallet1.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepaymentListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repayment_repayment__ = __webpack_require__(573);
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



/**
 * Generated class for the RepaymentListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RepaymentListPage = /** @class */ (function () {
    function RepaymentListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RepaymentListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RepaymentListPage');
    };
    RepaymentListPage.prototype.goList = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__repayment_repayment__["a" /* RepaymentPage */]);
                return [2 /*return*/];
            });
        });
    };
    RepaymentListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-repayment-list',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/repayment-list/repayment-list.html"*/'<!--\n  Generated template for the RepaymentListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n  Generated template for the RepaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>欠款汇总</ion-title>\n\n        <ion-buttons end>\n            <span (click)="goList()">还款记录</span>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="all">\n        <i class="iconfont icon-suosou"></i>\n        <!-- <ion-datetime style="    color: #00c7ae;" displayFormat="YYYY/MM/DD" pickerFormat="YYYY MM DD" [(ngModel)]="startDt"></ion-datetime> -->\n        <p>到</p>\n        <!-- <ion-datetime style="    color: #00c7ae;" displayFormat="YYYY/MM/DD" pickerFormat="YYYY MM DD" [(ngModel)]="endDt"></ion-datetime> -->\n\n        <i class="iconfont icon-kalendar"></i>\n\n    </div>\n    <!-- <p style="    padding: 0 10px;position: relative;\nz-index: 5555;" (click)="goCustomerPage()">交易客户\n      <ion-icon name="arrow-forward" style="float: right;"></ion-icon>\n  </p> -->\n    <div class="table">\n\n        <p>客户姓名</p>\n        <p>手机号</p>\n        <p>欠款</p>\n        <p>操作</p>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/repayment-list/repayment-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], RepaymentListPage);
    return RepaymentListPage;
}());

//# sourceMappingURL=repayment-list.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPayPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset_pay_password1_reset_pay_password1__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reset_pay_password2_reset_pay_password2__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ResetPayPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetPayPasswordPage = /** @class */ (function () {
    function ResetPayPasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ResetPayPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetPayPasswordPage');
    };
    ResetPayPasswordPage.prototype.forget = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__reset_pay_password2_reset_pay_password2__["a" /* ResetPayPassword2Page */]);
    };
    ResetPayPasswordPage.prototype.remember = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reset_pay_password1_reset_pay_password1__["a" /* ResetPayPassword1Page */]);
    };
    ResetPayPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reset-pay-password',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/reset-pay-password/reset-pay-password.html"*/'<!--\n  Generated template for the ResetPayPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>重置支付密码</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div style="    padding: 20px;">\n        您是否记得当前使用的支付密码\n    </div>\n    <div style="    display: flex;justify-content: space-around;align-items: center;">\n\n        <button ion-button style="width: 30%" (click)="forget()">不记得</button>\n        <button ion-button color="red" (click)="remember()" style="width: 30%">记得</button>\n\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/reset-pay-password/reset-pay-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ResetPayPasswordPage);
    return ResetPayPasswordPage;
}());

//# sourceMappingURL=reset-pay-password.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPayPassword2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_common_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_platform_framework_enum__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reset_pay_password3_reset_pay_password3__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_share_service_http_service__ = __webpack_require__(11);
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







/**
 * Generated class for the ResetPayPassword2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetPayPassword2Page = /** @class */ (function () {
    function ResetPayPassword2Page(navCtrl, navParams, comm, sto, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.comm = comm;
        this.sto = sto;
        this.http = http;
        this.sendBool = true;
        this.looptime = 0;
        this.phone = '';
        this.v = __WEBPACK_IMPORTED_MODULE_3__share_platform_framework_enum__["b" /* VerifyType */].wallet;
    }
    ResetPayPassword2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetPayPassword2Page');
    };
    ResetPayPassword2Page.prototype.sendAuthcode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var phoneReg, result, timmer_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        phoneReg = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;
                        if (!!this.phone) return [3 /*break*/, 1];
                        this.http.createMessage("warning", "请输入手机号");
                        return [3 /*break*/, 4];
                    case 1:
                        if (!!(phoneReg.test(this.phone))) return [3 /*break*/, 2];
                        this.http.createMessage("error", "请输入正确手机号");
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.comm.authcode(this.sto.customer.mktId, this.phone, this.v)];
                    case 3:
                        result = _a.sent();
                        if (result) {
                            this.looptime = 60;
                            timmer_1 = setInterval(function () {
                                _this.looptime -= 1;
                                if (_this.looptime <= 0) {
                                    _this.sendBool = true;
                                    clearInterval(timmer_1);
                                }
                            }, 1000);
                        }
                        else {
                            this.sendBool = true;
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ResetPayPassword2Page.prototype.goNext = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__reset_pay_password3_reset_pay_password3__["a" /* ResetPayPassword3Page */]);
                return [2 /*return*/];
            });
        });
    };
    ResetPayPassword2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reset-pay-password2',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/reset-pay-password2/reset-pay-password2.html"*/'<!--\n  Generated template for the ResetPayPassword2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>验证手机</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div class="justify-content" style="border: 1px solid #f5efef;\n    background: #fff;\n    height: 50px;\n    padding: 5px;margin-bottom: 10px;">\n        <ion-input placeholder="请输入您的手机号" style="width: 70%;" [(ngModel)]="phone"></ion-input>\n        <button color="red" *ngIf="sendBool" ion-button style="width: 34%;  \n        padding: 5px; \n        height: 30px; \n        border: 1px solid #f85851;\n        background: transparent !important;\n        color: #f85851;" (click)="sendAuthcode();sendBool=!sendBool">获取验证码</button>\n\n        <button *ngIf="!sendBool" ion-button style="width: 34%;\n        padding: 5px;\n        height: 30px;\n        border: 1px solid #f85851;\n        background: transparent !important;\n        color: #f85851;">{{looptime}}</button>\n    </div>\n    <div class="justify-content" style="align-items: center;">\n        <ion-input style="width: 70%;" style="    width: 10%;\n        background: #fff;\n        border: 1px solid #f5efef;padding-left: 5px;" [(ngModel)]="authcode" placeholder="验证码"></ion-input>\n        <p style="font-size: 13px;\n        width: 90%;\n        /* padding: 0 5px; */\n        margin-left: 8px;font-size: 14px;\n        width: 66%;    margin-left: 16px;" (click)="sendAuthcode()">验证码默认通过短信形式发送给您，请注意查收</p>\n\n    </div>\n\n\n\n\n    <button color="red" ion-button (click)="goNext()" style="width: 100%; \n    margin-top: 30px;\n    ">下一步</button>\n\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/reset-pay-password2/reset-pay-password2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_common_service__["a" /* appCommonService */],
            __WEBPACK_IMPORTED_MODULE_5__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_6__app_share_service_http_service__["a" /* MyHttpService */]])
    ], ResetPayPassword2Page);
    return ResetPayPassword2Page;
}());

//# sourceMappingURL=reset-pay-password2.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_member_account_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_http_service__ = __webpack_require__(11);
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





/**
 * Generated class for the WalletCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewState;
(function (ViewState) {
    ViewState[ViewState["Open"] = 0] = "Open";
    ViewState[ViewState["Untied"] = 1] = "Untied";
})(ViewState || (ViewState = {}));
var WalletCardPage = /** @class */ (function () {
    function WalletCardPage(navCtrl, navParams, sto, memSer, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sto = sto;
        this.memSer = memSer;
        this.http = http;
        this.card = {};
        this.ViewState = ViewState;
        this.cus = this.sto.customer;
    }
    WalletCardPage.prototype.ionViewDidLoad = function () {
    };
    WalletCardPage.prototype.ionViewCanEnter = function () {
        if (this.sto.card.id) {
            this.cardSto = this.sto.card;
            this.state = ViewState.Untied;
        }
        else {
            this.state = ViewState.Open;
        }
    };
    WalletCardPage.prototype.goNext = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.cus.card = this.card;
                        return [4 /*yield*/, this.memSer.relationCard(this.cus)];
                    case 1:
                        result = _a.sent();
                        this.sto.card = {};
                        this.sto.card = result.customerDB.card;
                        this.http.createMessage("success", "创建成功");
                        this.state = ViewState.Untied;
                        return [2 /*return*/];
                }
            });
        });
    };
    //解绑会员卡
    WalletCardPage.prototype.unTied = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.memSer.relieveCard(this.sto.card.no)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.http.createMessage("success", "解绑成功");
                            this.sto.card = {};
                            this.state = ViewState.Open;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WalletCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wallet-card',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/wallet-card/wallet-card.html"*/'<!--\n  Generated template for the WalletCardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title *ngIf="state==ViewState.Open">绑定会员卡</ion-title>\n        <ion-title *ngIf="state==ViewState.Untied">解绑会员卡</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div *ngIf="state==ViewState.Open">\n        <ion-list>\n            <ion-item style="margin-bottom: 10px;\n        border-bottom:0.55px solid #f5efef;">\n                <ion-label color="primary">会员卡号：</ion-label>\n                <ion-input placeholder="" [(ngModel)]="card.no" style="text-align: right;"></ion-input>\n            </ion-item>\n\n        </ion-list>\n        <button ion-button color="red" (click)="goNext()" style="width: 85%;\n        margin-top: 30px;\n        display: block;\n        margin: 0 auto;\n        margin-top: 30px;\n     ">确定</button>\n    </div>\n    <div *ngIf="state==ViewState.Untied">\n\n\n        <ion-list>\n            <ion-item style="margin-bottom: 10px;\n        border-bottom:0.55px solid #f5efef;">\n                <ion-label color="primary">会员卡号：{{sto.card.no}}</ion-label>\n                <!-- <ion-input placeholder="" [(ngModel)]="cardSto.no" style="text-align: right;" aria-disabled="true"></ion-input> -->\n            </ion-item>\n\n        </ion-list>\n        <button ion-button color="red" (click)="unTied()" style="width: 85%;\n        margin-top: 30px;\n        display: block;\n        margin: 0 auto;\n        margin-top: 30px;\n     ">解绑</button></div>\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/wallet-card/wallet-card.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_member_account_service__["a" /* appMemberAccountService */],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_http_service__["a" /* MyHttpService */]])
    ], WalletCardPage);
    return WalletCardPage;
}());

//# sourceMappingURL=wallet-card.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appMemberAccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
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



var appMemberAccountService = /** @class */ (function () {
    function appMemberAccountService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.api = {
            /**
        * 提交会员实名认证信息
        *   post
        * body:MemberRealnameAuth
        */
            memberRealnameAuthCreate: '/app/member/memberRealnameAuth/create',
            /**
             * get
             * ?customerId&mktId
             * return {customer,status:}
             */
            memberDetail: '/app/member/memberDetail',
            /**
             * get
             * ?memberId&mktId
             * return {account}
             */
            accountDetail: '/app/member/accountDetail',
            /**
             * 转账
           * post
           * body:AccoPayRec
           */
            transferAccount: '/app/member/transferAccount',
            /**
             * 获取收钱信息
             * 1. 链接转为二维码形式等待对方扫
             * 2. 扫后返回对应的api返回收钱参数,如accountName,金额
             *
             * get
             * ?mktId&accountId&amt
             * return {account,amt}
             */
            recvMoneyInfo: '/app/member/order/recive-money-info',
            /**
             * 此时用户扫了收钱二维码,将recvMoneyInfo返回的参数作为请求参数参数
             *
             * post
             * body:AccPayRecv
             *
             */
            payMoneyInfo: '/app/member/order/pay-money',
            /**实名认证*/
            memberRealnameAuth: '/app/member/memberRealnameAuth/create',
            /**会员绑卡 */
            relationCard: '/app/customer/relationCard',
            /**会员支付密码验证  get memberId payPassword*/
            confirePayPassword: '/app/member/confirePayPassword',
            /**会员更改支付密码  get memberId oldPayPassword  newPayPasswoord */
            modifyPayPassword: "/app/member/modifyPayPassword",
            /**解绑会员卡  get cardNo*/
            relieveCard: "/app/customer/relieveCard",
            /**转账---根据手机号或姓名搜索老板  get keyWord */
            searchMember: "/app/member/searchMember",
            /**好友 邀请别人成为我的好友  get memberId friendId  content*/
            memberFriendInvi: "/app/member/friendInvi",
            /**好友 同意邀请 拒绝  get memberId status*/
            Inviprocess: "/app/member/Inviprocess",
            /**好友 发出的邀请  收到的邀请 get memberId type */
            memberInviList: "/app/member/InviList",
            /**好友  好友列表 get  memberId*/
            memberFriends: '/app/member/friendLists',
            /**收支列表 get memberId */
            recvpayListBymemberId: "/app/member/recvpayListBymemberId",
        };
    }
    appMemberAccountService.prototype.recvpayListBymemberId = function (memberId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.recvpayListBymemberId, { params: { memberId: memberId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appMemberAccountService.prototype.memberInviList = function (memberId, type) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.memberInviList, { params: { memberId: memberId, type: type } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appMemberAccountService.prototype.Inviprocess = function (memInvi) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Post(this.api.Inviprocess, memInvi)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appMemberAccountService.prototype.memberFriendInvi = function (memberId, friendId, content) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.memberFriendInvi, { params: { memberId: memberId, friendId: friendId, content: content } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appMemberAccountService.prototype.searchMember = function (keyWord) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.searchMember, { params: { keyWord: keyWord } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appMemberAccountService.prototype.relieveCard = function (cardNo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.relieveCard, { params: { cardNo: cardNo } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appMemberAccountService.prototype.modifyPayPassword = function (memberId, newPayPasswoord) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.modifyPayPassword, { params: { memberId: memberId, newPayPasswoord: newPayPasswoord } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appMemberAccountService.prototype.confirePayPassword = function (memberId, payPassword) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.confirePayPassword, { params: { memberId: memberId, payPassword: payPassword } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appMemberAccountService.prototype.relationCard = function (cus) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Post(this.api.relationCard, cus)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appMemberAccountService.prototype.memberRealnameAuthCreate = function (member) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        member.mktId = this.storage.customer.mktId;
                        return [4 /*yield*/, this.http.Post(this.api.memberRealnameAuthCreate, member)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.member];
                }
            });
        });
    };
    appMemberAccountService.prototype.accountDetail = function (memberId, mktId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mktId = this.storage.customer.mktId;
                        memberId = this.storage.customer.memberId;
                        return [4 /*yield*/, this.http.Get(this.api.accountDetail, { params: { memberId: memberId, mktId: mktId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appMemberAccountService.prototype.memberFriends = function (memberId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.memberFriends, { params: { memberId: memberId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.member];
                }
            });
        });
    };
    appMemberAccountService.prototype.transferAccount = function (memberId, tomemberId, transferAmount) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.transferAccount, {
                            params: {
                                memberId: memberId, tomemberId: tomemberId, transferAmount: transferAmount
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appMemberAccountService.prototype.recvMoneyInfo = function (mktId, accountId, amt) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.recvMoneyInfo, { params: { mktId: mktId, accountId: accountId, amt: amt } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appMemberAccountService.prototype.payMoneyInfo = function (accPayRecv) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Post(this.api.payMoneyInfo, accPayRecv)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    // async memberRealnameAuth(memberRealnameAuth:MemberRealnameAuth , authcode: string) {
    //     memberRealnameAuth.mktId = this.storage.customer.mktId;
    //     let res = await this.http.Post(this.api.memberRealnameAuth, memberRealnameAuth, { params: { authcode } });
    //     return res;
    // }
    appMemberAccountService.prototype.memberDetail = function (memberId, mktId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mktId = this.storage.customer.mktId;
                        memberId = this.storage.customer.memberId;
                        return [4 /*yield*/, this.http.Get(this.api.memberDetail, { params: { memberId: memberId, mktId: mktId } })];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            return [2 /*return*/, result.member];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    appMemberAccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__http_service__["a" /* MyHttpService */], __WEBPACK_IMPORTED_MODULE_1__storage_service__["a" /* StorageService */]])
    ], appMemberAccountService);
    return appMemberAccountService;
}());

//# sourceMappingURL=app_member_account.service.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletTransferListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet_transfer_detail_wallet_transfer_detail__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_member_account_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wallet_transfer_serch_wallet_transfer_serch__ = __webpack_require__(301);
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






/**
 * Generated class for the WalletTransferListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WalletTransferListPage = /** @class */ (function () {
    function WalletTransferListPage(navCtrl, navParams, memSer, sto) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.memSer = memSer;
        this.sto = sto;
    }
    WalletTransferListPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.memSer.memberFriends(this.sto.member.id)];
                    case 1:
                        result = _a.sent();
                        this.friends = result;
                        return [2 /*return*/];
                }
            });
        });
    };
    WalletTransferListPage.prototype.addTransfer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__wallet_transfer_serch_wallet_transfer_serch__["a" /* WalletTransferSerchPage */]);
    };
    WalletTransferListPage.prototype.transMoney = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__wallet_transfer_detail_wallet_transfer_detail__["a" /* WalletTransferDetailPage */], data);
    };
    WalletTransferListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wallet-transfer-list',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/wallet-transfer-list/wallet-transfer-list.html"*/'<!--\n  Generated template for the WalletTransferListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title mode="ios">转账</ion-title>\n        <ion-buttons end (click)="addTransfer()">\n            <button ion-button icon-only>\n                <ion-icon ios="ios-add" md="md-add"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list *ngFor="let data of friends" class="listPage">\n        <ion-item (click)="transMoney(data)">\n            {{data.name}}\n            <button ion-button outline item-end icon-start>\n           \n            转账\n          </button>\n        </ion-item>\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/wallet-transfer-list/wallet-transfer-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_member_account_service__["a" /* appMemberAccountService */],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_storage_service__["a" /* StorageService */]])
    ], WalletTransferListPage);
    return WalletTransferListPage;
}());

//# sourceMappingURL=wallet-transfer-list.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletTransferSerchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_member_account_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wallet_transfer_detail_wallet_transfer_detail__ = __webpack_require__(145);
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




/**
 * Generated class for the WalletTransferSerchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WalletTransferSerchPage = /** @class */ (function () {
    function WalletTransferSerchPage(navCtrl, navParams, memSer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.memSer = memSer;
    }
    /** 关键字搜索*/
    WalletTransferSerchPage.prototype.serchKeyWord = function ($event) {
        return __awaiter(this, void 0, void 0, function () {
            var key_code;
            return __generator(this, function (_a) {
                key_code = window.event ? $event.keyCode : $event.which;
                if (key_code == 13) {
                    this.serch();
                }
                return [2 /*return*/];
            });
        });
    };
    WalletTransferSerchPage.prototype.serch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.memSer.searchMember(this.keyWord)];
                    case 1:
                        result = _a.sent();
                        this.reciMembers = result.member;
                        return [2 /*return*/];
                }
            });
        });
    };
    WalletTransferSerchPage.prototype.toTrans = function (reciMember) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.reciMember = reciMember;
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__wallet_transfer_detail_wallet_transfer_detail__["a" /* WalletTransferDetailPage */], this.reciMember);
                return [2 /*return*/];
            });
        });
    };
    WalletTransferSerchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalletTransferSerchPage');
    };
    WalletTransferSerchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wallet-transfer-serch',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/wallet-transfer-serch/wallet-transfer-serch.html"*/'<!--\n  Generated template for the WalletTransferSerchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-searchbar placeholder="请输入手机号或商户名" (keypress)="serchKeyWord($event)" [(ngModel)]="keyWord" showCancelButton="false"></ion-searchbar>\n        <ion-buttons end> <button ion-button icon-only (click)="serch()">搜索</button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-list *ngFor="let reciMember of reciMembers">\n        <ion-item (click)="toTrans(reciMember)">\n            {{reciMember.name}}\n            <button ion-button outline item-end icon-start>\n              转账\n            </button>\n        </ion-item>\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/wallet-transfer-serch/wallet-transfer-serch.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_member_account_service__["a" /* appMemberAccountService */]])
    ], WalletTransferSerchPage);
    return WalletTransferSerchPage;
}());

//# sourceMappingURL=wallet-transfer-serch.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletFriendListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet_friend_wallet_friend__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wallet_friend_add_wallet_friend_add__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_share_service_app_member_account_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wallet_transfer_detail_wallet_transfer_detail__ = __webpack_require__(145);
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







/**
 * Generated class for the WalletFriendListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WalletFriendListPage = /** @class */ (function () {
    function WalletFriendListPage(navCtrl, navParams, sto, memS) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sto = sto;
        this.memS = memS;
        this.friends = [];
    }
    WalletFriendListPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.memS.memberFriends(this.sto.member.id)];
                    case 1:
                        result = _a.sent();
                        this.friends = result;
                        return [2 /*return*/];
                }
            });
        });
    };
    WalletFriendListPage.prototype.toTrans = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__wallet_transfer_detail_wallet_transfer_detail__["a" /* WalletTransferDetailPage */], data);
    };
    WalletFriendListPage.prototype.friendMess = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__wallet_friend_wallet_friend__["a" /* WalletFriendPage */]);
    };
    WalletFriendListPage.prototype.friendAdd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__wallet_friend_add_wallet_friend_add__["a" /* WalletFriendAddPage */]);
    };
    WalletFriendListPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    WalletFriendListPage.prototype.doInfinite = function (infiniteScroll) {
        console.log('Begin async operation');
        setTimeout(function () {
            for (var i = 0; i < 10; i++) {
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    WalletFriendListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wallet-friend-list',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/wallet-friend-list/wallet-friend-list.html"*/'<!--\n  Generated template for the WalletFriendListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <!-- <ion-title mode="ios"> 我的好友</ion-title>\n        <ion-buttons end style="    color: #fff;">\n            <button ion-button icon-only>    <ion-icon (click)="friendAdd()"  name="md-add"    style="font-size: 25px;\n                position: absolute;\n                right: 3%;"></ion-icon></button>\n        </ion-buttons>\n        <ion-buttons end (click)="friendMess()" style="    color: #fff;">\n            <button ion-button icon-only>  邀请信息</button>\n        </ion-buttons> -->\n\n\n\n        <ion-title>\n            <span>我的好友</span>\n\n            <span (click)="friendMess()" style="margin-right: 20px;\n                position: absolute; right: 6%;">邀请信息</span>\n\n\n\n\n\n\n            <ion-icon name="md-add" (click)="friendAdd()" style="font-size: 25px;\n                position: absolute;\n                right: 3%;"></ion-icon>\n        </ion-title>\n\n\n\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <ion-list *ngFor="let data of friends">\n        <ion-item (click)="toTrans(data)">\n            {{data.name}}\n            <button ion-button outline item-end icon-start>\n                      转账\n                    </button>\n        </ion-item>\n    </ion-list>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/wallet-friend-list/wallet-friend-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_5__app_share_service_app_member_account_service__["a" /* appMemberAccountService */]])
    ], WalletFriendListPage);
    return WalletFriendListPage;
}());

//# sourceMappingURL=wallet-friend-list.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletFriendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_member_account_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_platform_market_enum__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wallet_friend_detail_wallet_friend_detail__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_share_service_http_service__ = __webpack_require__(11);
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







/**
 * Generated class for the WalletFriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WalletFriendPage = /** @class */ (function () {
    function WalletFriendPage(navCtrl, navParams, memS, sto, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.memS = memS;
        this.sto = sto;
        this.http = http;
        this.isAndroid = false;
        this.msgType = __WEBPACK_IMPORTED_MODULE_3__share_platform_market_enum__["l" /* friendMsgType */];
        this.selectType = "send";
        this.defulStatus = __WEBPACK_IMPORTED_MODULE_3__share_platform_market_enum__["c" /* MemberInviteStatus */];
    }
    WalletFriendPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendList()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**发出的邀请 */
    WalletFriendPage.prototype.sendList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.memS.memberInviList(this.sto.member.id, this.msgType.Send)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.InviLists = result.contactInvite;
                        }
                        else {
                            this.http.createMessage("warning", "暂无数据");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**收到的邀请 */
    WalletFriendPage.prototype.reciveList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.memS.memberInviList(this.sto.member.id, this.msgType.Receive)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.reciveLists = result.contactInvite;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**详情  同意或拒绝*/
    WalletFriendPage.prototype.goDetail = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__wallet_friend_detail_wallet_friend_detail__["a" /* WalletFriendDetailPage */], data);
                return [2 /*return*/];
            });
        });
    };
    WalletFriendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wallet-friend',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/wallet-friend/wallet-friend.html"*/'<!--\n  Generated template for the WalletFriendPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title mode="ios">邀请信息</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="defulTool">\n        <ion-toolbar no-border-top>\n            <ion-segment [(ngModel)]="selectType">\n\n                <ion-segment-button value="send" (ionSelect)="sendList()">\n                    发出的邀请\n                </ion-segment-button>\n                <ion-segment-button value="recived" (ionSelect)="reciveList()">\n                    收到的邀请\n                </ion-segment-button>\n\n            </ion-segment>\n        </ion-toolbar>\n    </div>\n\n    <div [ngSwitch]="selectType">\n        <ion-list *ngSwitchCase="\'send\'">\n            <ion-list *ngFor="let data of InviLists" style="    text-indent: 16px;">\n                <ion-item>\n                    {{data?.friendinvitemName}}\n                    <button *ngIf="data.status==defulStatus.Active" ion-button outline item-end icon-start>\n            等待对方同意  \n                    </button>\n                    <span (click)="goDetail(data)" *ngIf="data.status==defulStatus.Agree">\n                            已同意\n                    </span>\n                    <span (click)="goDetail(data)" *ngIf="data.status==defulStatus.Refuse">\n                            已拒绝\n                    </span>\n                </ion-item>\n            </ion-list>\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'recived\'">\n            <ion-list *ngFor="let data of reciveLists" style="    text-indent: 16px;">\n                <ion-item>\n                    {{data?.friendinvitemName}}\n                    <button (click)="goDetail(data)" *ngIf="data.status==defulStatus.Active" ion-button outline item-end icon-start>\n                            待处理  \n                            </button>\n                    <span (click)="goDetail(data)" *ngIf="data.status==defulStatus.Agree">\n                                    已同意\n                            </span>\n                    <span (click)="goDetail(data)" *ngIf="data.status==defulStatus.Refuse">\n                                    已拒绝\n                            </span>\n                </ion-item>\n            </ion-list>\n        </ion-list>\n\n\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/wallet-friend/wallet-friend.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_member_account_service__["a" /* appMemberAccountService */],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_6__app_share_service_http_service__["a" /* MyHttpService */]])
    ], WalletFriendPage);
    return WalletFriendPage;
}());

//# sourceMappingURL=wallet-friend.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletFriendAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_member_account_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_http_service__ = __webpack_require__(11);
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





/**
 * Generated class for the WalletFriendAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var View;
(function (View) {
    View[View["List"] = 0] = "List";
    View[View["Add"] = 1] = "Add";
})(View || (View = {}));
var WalletFriendAddPage = /** @class */ (function () {
    function WalletFriendAddPage(navCtrl, navParams, memSer, sto, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.memSer = memSer;
        this.sto = sto;
        this.http = http;
        this.View = View;
        this.newInvi = {
            content: ""
        };
    }
    WalletFriendAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalletFriendAddPage');
    };
    WalletFriendAddPage.prototype.serchKeyWord = function ($event) {
        return __awaiter(this, void 0, void 0, function () {
            var key_code;
            return __generator(this, function (_a) {
                key_code = window.event ? $event.keyCode : $event.which;
                if (key_code == 13) {
                    this.serch();
                }
                return [2 /*return*/];
            });
        });
    };
    WalletFriendAddPage.prototype.serch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.memSer.searchMember(this.keyWord)];
                    case 1:
                        result = _a.sent();
                        if (result.member == []) {
                            this.http.createMessage("warning", "暂无数据");
                        }
                        else {
                            this.reciMembers = result.member;
                            this.state = View.List;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WalletFriendAddPage.prototype.toAdd = function (reciMember) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.reciMember = reciMember;
                this.state = View.Add;
                return [2 /*return*/];
            });
        });
    };
    WalletFriendAddPage.prototype.ok = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.memSer.memberFriendInvi(this.sto.member.id, this.reciMember.id, this.newInvi.content)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.http.createMessage("success", "邀请已发送，等待对方同意");
                            this.navCtrl.pop();
                        }
                        else {
                            this.state = View.List;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WalletFriendAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wallet-friend-add',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/wallet-friend-add/wallet-friend-add.html"*/'<!--\n  Generated template for the WalletFriendAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-searchbar placeholder="请输入手机号或商户名" (keypress)="serchKeyWord($event)" [(ngModel)]="keyWord" showCancelButton="false"></ion-searchbar>\n        <ion-buttons end> <button ion-button icon-only (click)="serch()">搜索</button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div *ngIf="state==View.List">\n\n\n        <ion-list *ngFor="let reciMember of reciMembers" style="    text-indent: 16px;">\n            <ion-item (click)="toAdd(reciMember)">\n                {{reciMember.name}}\n                <button ion-button outline item-end icon-start>\n          添加\n        </button>\n            </ion-item>\n        </ion-list>\n\n    </div>\n    <div *ngIf="state==View.Add">\n        <ion-list inset>\n\n            <ion-item>\n                <ion-label>\n                    姓名:{{reciMember.name}}\n                </ion-label>\n\n            </ion-item>\n\n            <ion-item style="border: none;border-bottom: 1px solid #c8c7cc;height: 100px;">\n                <ion-label>\n                    邀请留言\n                </ion-label>\n                <ion-textarea [(ngModel)]="newInvi.content">\n\n                </ion-textarea>\n\n            </ion-item>\n\n        </ion-list>\n\n\n        <div style="width:100%;padding:0 2rem 0 2rem">\n            <button ion-button color="red" block (click)="ok()">确定</button>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/wallet-friend-add/wallet-friend-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_member_account_service__["a" /* appMemberAccountService */],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_http_service__["a" /* MyHttpService */]])
    ], WalletFriendAddPage);
    return WalletFriendAddPage;
}());

//# sourceMappingURL=wallet-friend-add.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletExpendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet_expend_detail_wallet_expend_detail__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_member_account_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_storage_service__ = __webpack_require__(9);
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





/**
 * Generated class for the WalletExpendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WalletExpendPage = /** @class */ (function () {
    function WalletExpendPage(navCtrl, navParams, memS, sto) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.memS = memS;
        this.sto = sto;
        this.startDt = new Date().toISOString();
        this.endDt = new Date().toISOString();
        this.add = 1;
        this.reduc = -1;
        this.event = {
            month: '1990-02-19',
            timeStarts: '1990-02-19',
            timeEnds: '1990-02-20'
        };
        this.curDate = new Date();
        this.date = new Date();
    }
    WalletExpendPage.prototype.goDetail = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__wallet_expend_detail_wallet_expend_detail__["a" /* WalletExpendDetailPage */], data);
    };
    WalletExpendPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.startDt);
                        return [4 /*yield*/, this.memS.recvpayListBymemberId(this.sto.member.id)];
                    case 1:
                        result = _a.sent();
                        this.exList = result.accRecvPayList;
                        return [2 /*return*/];
                }
            });
        });
    };
    WalletExpendPage.prototype.today = function () {
        this.startDt = new Date().toISOString();
        this.endDt = new Date().toISOString();
    };
    WalletExpendPage.prototype.yesterday = function () {
        var result = new Date(this.curDate.getTime() - 24 * 60 * 60 * 1000);
        this.startDt = new Date(result).toISOString();
        this.endDt = new Date().toISOString();
        console.log(this.startDt);
    };
    WalletExpendPage.prototype.threeDay = function () {
        var result = new Date(this.curDate.getTime() - 24 * 3 * 60 * 60 * 1000);
        this.startDt = new Date(result).toISOString();
        this.endDt = new Date().toISOString();
        console.log(this.startDt);
    };
    WalletExpendPage.prototype.monthOne = function () {
        var result = new Date(this.date.getFullYear(), this.date.getMonth(), 2);
        var lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1);
        this.startDt = new Date(result).toISOString();
        this.endDt = new Date(lastDay).toISOString();
    };
    WalletExpendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wallet-expend',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/wallet-expend/wallet-expend.html"*/'<!--\n  Generated template for the WalletExpendPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>收支记录</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="all" style="display: flex;justify-content: space-between">\n        <i class="iconfont icon-kalendar"></i>\n        <div>\n\n\n            <ion-datetime [cancelText]="\'取消\'" [doneText]="\'确认\'" displayFormat="YYYY/MM/DD" pickerFormat="YYYY/MM/DD" [(ngModel)]="startDt" style="    color: #00c7ae;">\n            </ion-datetime>\n        </div>\n        <p>到</p>\n        <div>\n            <ion-datetime [cancelText]="\'取消\'" [doneText]="\'确认\'" style="    color: #00c7ae;" displayFormat="YYYY/MM/DD" pickerFormat="YYYY/MM/DD" [(ngModel)]="endDt"></ion-datetime>\n        </div>\n        <i class="iconfont icon-suosou"></i>\n\n    </div>\n\n    <div *ngFor="let data of exList" (click)="goDetail(data)" style="border: 1px solid #e8e5e5;\n    border-left: none;\n    border-right: none;\n    padding: 0 15px;  \n      /* position: relative;\n    z-index: 999; */\n    \n    ">\n\n        <p>\n            <span *ngIf="data.io==add">收入</span>\n            <span *ngIf="data.io==reduc">支出</span> <span style="    float: right;\n        font-weight: 500;">\n        <span *ngIf="data.io==add">+</span>\n            <span *ngIf="data.io==reduc">-</span> {{data.amount}}\n            </span>\n        </p>\n        <span style="margin-bottom: 10px;\n        display:block;">{{data.createTime|date:"yyyy-MM-dd"}}</span>\n    </div>\n    <div class="tab">\n        <p (click)="today()">今日</p>\n        <p (click)="yesterday()">昨日</p>\n        <p (click)="threeDay()">三日内</p>\n        <p (click)="monthOne()">本月</p>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/wallet-expend/wallet-expend.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_member_account_service__["a" /* appMemberAccountService */],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_storage_service__["a" /* StorageService */]])
    ], WalletExpendPage);
    return WalletExpendPage;
}());

//# sourceMappingURL=wallet-expend.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl, navParams, veiwC) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.veiwC = veiwC;
        this.data = this.navParams.data;
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
    };
    NotificationPage.prototype.dismiss = function () {
        this.veiwC.dismiss();
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notification',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/notification/notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>notification</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  {{data | json}}\n\n  <button ion-button (click)="dismiss()">dismiss</button>\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/notification/notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 317:
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
webpackEmptyAsyncContext.id = 317;

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/mktlist/mktlist.module": [
		1360,
		16
	],
	"../pages/notification/notification.module": [
		1361,
		15
	],
	"../pages/repayment-list/repayment-list.module": [
		1362,
		14
	],
	"../pages/reset-pay-password/reset-pay-password.module": [
		1363,
		13
	],
	"../pages/reset-pay-password2/reset-pay-password2.module": [
		1364,
		12
	],
	"../pages/reset-pay-password3/reset-pay-password3.module": [
		1365,
		11
	],
	"../pages/wallet-card/wallet-card.module": [
		1366,
		10
	],
	"../pages/wallet-expend-detail/wallet-expend-detail.module": [
		1367,
		9
	],
	"../pages/wallet-expend/wallet-expend.module": [
		1368,
		8
	],
	"../pages/wallet-friend-add/wallet-friend-add.module": [
		1369,
		7
	],
	"../pages/wallet-friend-detail/wallet-friend-detail.module": [
		1370,
		6
	],
	"../pages/wallet-friend-list/wallet-friend-list.module": [
		1371,
		5
	],
	"../pages/wallet-friend/wallet-friend.module": [
		1372,
		4
	],
	"../pages/wallet-transfer-detail/wallet-transfer-detail.module": [
		1373,
		3
	],
	"../pages/wallet-transfer-list/wallet-transfer-list.module": [
		1374,
		2
	],
	"../pages/wallet-transfer-serch/wallet-transfer-serch.module": [
		1375,
		1
	],
	"../pages/wallet-transfer/wallet-transfer.module": [
		1376,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 359;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPassword1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forget_password2_forget_password2__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_customer_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_app_common_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__share_platform_framework_enum__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_share_service_http_service__ = __webpack_require__(11);
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








/**
 * Generated class for the ForgetPassword1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var ForgetPassword1Page = /** @class */ (function () {
    function ForgetPassword1Page(navCtrl, navParams, customer, comm, sto, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customer = customer;
        this.comm = comm;
        this.sto = sto;
        this.http = http;
        this.sendBool = true;
        this.looptime = 60;
        this.marketList = [];
        this.phone = '';
        this.verifyType = __WEBPACK_IMPORTED_MODULE_5__share_platform_framework_enum__["b" /* VerifyType */].reg;
    }
    ForgetPassword1Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ForgetPassword1Page');
        this.comm.marketList().then(function (list) { return _this.marketList = list; });
    };
    ForgetPassword1Page.prototype.sendAuthcode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result, timmer_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.phone) return [3 /*break*/, 1];
                        this.http.createMessage("error", "请输入手机号");
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.comm.authcode(this.sto.market.mktId, this.phone, this.verifyType)];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            this.looptime = 60;
                            timmer_1 = setInterval(function () {
                                _this.looptime -= 1;
                                if (_this.looptime <= 0) {
                                    _this.sendBool = true;
                                    clearInterval(timmer_1);
                                }
                            }, 1000);
                        }
                        else {
                            this.sendBool = true;
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ForgetPassword1Page.prototype.goNext = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.authcode && this.phone)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.comm.checkAuthcode(this.phone, this.authcode, this.sto.market.mktId, this.verifyType)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__forget_password2_forget_password2__["a" /* ForgetPassword2Page */], { authcode: this.authcode, phone: this.phone, });
                        }
                        else {
                            this.customer.http.createMessage('error', '参数不全');
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ForgetPassword1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forget-password1',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/signin/forget-password1/forget-password1.html"*/'<ion-header>\n\n    <ion-navbar color="red">\n        <ion-title>验证手机</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="justify-content" style="border: 1px solid #f5efef;\n    background: #fff;\n    height: 50px;\n    padding: 5px;margin-bottom: 10px;">\n        <ion-input placeholder="请输入您的手机号" [(ngModel)]="phone" style="width: 70%;"></ion-input>\n        <button color="red" *ngIf="sendBool" ion-button style="width: 34%;  \n           padding: 5px; \n           height: 30px;\n           border: 1px solid #f85851;\n           background: transparent !important;\n           color: #f85851;" (click)="sendAuthcode();sendBool=!sendBool">获取验证码</button>\n\n        <button *ngIf="!sendBool" ion-button style="width: 34%;\n           padding: 5px;\n           height: 30px;\n           border: 1px solid #f85851;\n           background: transparent !important;\n           color: #f85851;">{{looptime}}</button>\n\n\n\n    </div>\n    <div class="justify-content" style="align-items: center;">\n        <ion-input style="width: 70%;" style="    width: 10%;\n        background: #fff;\n        border: 1px solid #f5efef;    padding-left: 5px;" [(ngModel)]="authcode" placeholder="请输入验证码"></ion-input>\n        <p style="font-size: 13px;\n        width: 90%;\n        /* padding: 0 5px; */\n        margin-left: 8px;font-size: 14px;\n        width: 66%;    margin-left: 16px;">验证码默认通过短信形式发送给您，请注意查收</p>\n    </div>\n\n\n\n\n\n    <button color="red" ion-button (click)="goNext()" style="width: 100%; \n    margin-top: 30px;\n    ">下一步</button>\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/signin/forget-password1/forget-password1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_customer_service__["a" /* appCustomerService */],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_app_common_service__["a" /* appCommonService */],
            __WEBPACK_IMPORTED_MODULE_6__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_7__app_share_service_http_service__["a" /* MyHttpService */]])
    ], ForgetPassword1Page);
    return ForgetPassword1Page;
}());

//# sourceMappingURL=forget-password1.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPassword2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_customer_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_share_service_http_service__ = __webpack_require__(11);
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






/**
 * Generated class for the ForgetPassword2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var ForgetPassword2Page = /** @class */ (function () {
    function ForgetPassword2Page(navCtrl, navParams, customer, sto, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customer = customer;
        this.sto = sto;
        this.http = http;
        this.modifyCustomer = {
            mobi: '',
            password: ""
        };
        this.repeatPassword = '';
        this.authcode = "";
        this.modifyCustomer.mobi = this.navParams.data.phone;
        this.modifyCustomer.mktId = this.navParams.data.mktId;
        this.authcode = this.navParams.data.authcode;
    }
    ForgetPassword2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgetPassword2Page');
    };
    ForgetPassword2Page.prototype.goNext = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.modifyCustomer.password == this.repeatPassword)) return [3 /*break*/, 2];
                        this.modifyCustomer.mktId = this.sto.market.mktId;
                        return [4 /*yield*/, this.customer.forgotPassword(this.modifyCustomer, this.authcode)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.http.createMessage("success", "修改成功");
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in__["a" /* SignInPage */]);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        this.customer.http.createMessage('error', '密码不一致');
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ForgetPassword2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forget-password2',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/signin/forget-password2/forget-password2.html"*/'<!--\n  Generated template for the ForgetPassword2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="red">\n        <ion-title>忘记密码</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item style="margin-bottom: 10px;\n        border-bottom:0.55px solid #f5efef;">\n            <ion-label color="primary">密码</ion-label>\n            <ion-input [(ngModel)]="modifyCustomer.password" type="password" placeholder="请输入密码" style="text-align: right;"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label color="primary">确认密码</ion-label>\n            <ion-input placeholder="请确认密码" type="password" [(ngModel)]="repeatPassword" style="text-align: right;"></ion-input>\n        </ion-item>\n    </ion-list>\n\n\n    <button ion-button color="red" (click)="goNext()" style="width: 100%;\n      margin-top: 30px;\n     ">确定</button>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/signin/forget-password2/forget-password2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_customer_service__["a" /* appCustomerService */],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_5__app_share_service_http_service__["a" /* MyHttpService */]])
    ], ForgetPassword2Page);
    return ForgetPassword2Page;
}());

//# sourceMappingURL=forget-password2.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppConfig = /** @class */ (function () {
    function AppConfig() {
        // ip: string = 'http://localhost:9090';
        // ip: string = "http://192.168.3.104:9090"
        // ip: string = "http://192.168.3.154:9090"
        this.ip = "http://localhost:9090";
        this.debug = true;
    }
    AppConfig = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__["Injectable"])()
    ], AppConfig);
    return AppConfig;
}());

//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_detail_register_detail__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_common_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_platform_framework_enum__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_share_service_http_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_share_service_common_service__ = __webpack_require__(41);
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








/**
 * Generated class for the Register1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var Register1Page = /** @class */ (function () {
    function Register1Page(navCtrl, navParams, customer, sto, http, comm) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customer = customer;
        this.sto = sto;
        this.http = http;
        this.comm = comm;
        this.looptime = 60;
        this.marketList = [];
        this.phone = "";
        this.authcode = "";
        this.sendBool = true;
        this.verifyType = __WEBPACK_IMPORTED_MODULE_4__share_platform_framework_enum__["b" /* VerifyType */].reg;
        this.market = this.sto.market;
        this.mktId = this.market.mktId;
    }
    Register1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Register1Page');
        // this.customer.marketList().then(list => this.marketList = list);
    };
    Register1Page.prototype.goNext = function () {
        this.checkAuthcode();
    };
    Register1Page.prototype.sendAuthcode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var phoneReg, result, timmer_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        phoneReg = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;
                        if (!!this.phone) return [3 /*break*/, 1];
                        this.http.createMessage("warning", "请输入手机号");
                        return [3 /*break*/, 4];
                    case 1:
                        if (!!(phoneReg.test(this.phone))) return [3 /*break*/, 2];
                        this.customer.http.createMessage("error", "请输入正确手机号");
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.customer.authcode(this.mktId, this.phone, this.verifyType)];
                    case 3:
                        result = _a.sent();
                        if (result) {
                            this.looptime = 60;
                            timmer_1 = setInterval(function () {
                                _this.looptime -= 1;
                                if (_this.looptime <= 0) {
                                    _this.sendBool = true;
                                    clearInterval(timmer_1);
                                }
                            }, 1000);
                        }
                        else {
                            this.sendBool = true;
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Register1Page.prototype.checkAuthcode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!this.authcode || !this.phone)) return [3 /*break*/, 1];
                        this.http.createMessage("warning", "请完善信息");
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.customer.checkAuthcode(this.phone, this.authcode, this.mktId, this.verifyType)];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_detail_register_detail__["a" /* RegisterDetailPage */], { authcode: this.authcode, phone: this.phone, mktId: this.mktId });
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Register1Page.prototype.getMemberDetail = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Register1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register1',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/signin/register1/register1.html"*/'<ion-header>\n\n    <ion-navbar color="red">\n        <ion-title>验证手机</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div style=" \n \npadding: 5px;margin-bottom: 10px;">\n\n        所属市场： {{market.mktName}}\n\n\n    </div>\n    <div class="justify-content" style="border: 1px solid #f5efef;\n    background: #fff;\n    height: 50px;\n    padding: 5px;margin-bottom: 10px;position: relative;">\n        <ion-input placeholder="请输入您的手机号" [(ngModel)]="phone" style="width: 70%;"></ion-input>\n        <button color="red" *ngIf="sendBool" ion-button style="width: 34%;  \n        padding: 5px; \n        height: 30px;\n        border: 1px solid #f85851;\n        background: transparent !important;\n        color: #f85851;    position: absolute;\n    right: 6px;\n    top: 2px;" (click)="sendAuthcode();sendBool=!sendBool">获取验证码</button>\n\n        <button *ngIf="!sendBool" ion-button style="width: 34%;\n        padding: 5px;\n        height: 30px;\n        border: 1px solid #f85851;\n        background: transparent !important;\n        color: #f85851;">{{looptime}}</button>\n    </div>\n    <div class="justify-content" style="align-items: center;width: 100%;display: flex;\n    justify-content: space-between;">\n        <ion-input style="width: 70%;" style="    width: 10%;\n        background: #fff;\n        border: 1px solid #f5efef;    padding-left: 5px;" [(ngModel)]="authcode" placeholder="请输入验证码"></ion-input>\n        <p style="font-size: 13px;\n        width: 90%;\n        /* padding: 0 5px; */\n        margin-left: 8px;font-size: 14px;\n        width: 66%;    margin-left: 16px;">验证码默认通过短信形式发送给您，请注意查收</p>\n    </div>\n\n\n\n    <button ion-button (click)="goNext()" color="red" style="width: 100%;\n    margin-top: 30px;\n ">下一步</button>\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/signin/register1/register1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_common_service__["a" /* appCommonService */],
            __WEBPACK_IMPORTED_MODULE_5__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_6__app_share_service_http_service__["a" /* MyHttpService */],
            __WEBPACK_IMPORTED_MODULE_7__app_share_service_common_service__["a" /* CommonService */]])
    ], Register1Page);
    return Register1Page;
}());

//# sourceMappingURL=register1.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_customer_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_platform_market_enum__ = __webpack_require__(26);
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





/**
 * Generated class for the RegisterDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var RegisterDetailPage = /** @class */ (function () {
    function RegisterDetailPage(navCtrl, navParams, customer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customer = customer;
        this.authcode = "";
        this.newCustomer = {
            createWay: __WEBPACK_IMPORTED_MODULE_4__share_platform_market_enum__["b" /* CreateWayEnum */].APP,
            password: '',
            mobi: '',
        };
        this.newCustomer.mobi = this.navParams.data.phone;
        this.newCustomer.mktId = this.navParams.data.mktId;
        this.authcode = this.navParams.data.authcode;
    }
    RegisterDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterDetailPage');
    };
    RegisterDetailPage.prototype.goNext = function () {
        return __awaiter(this, void 0, void 0, function () {
            var passwordRex, customer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.newCustomer.mobi && this.newCustomer.name && this.newCustomer.password)) return [3 /*break*/, 5];
                        passwordRex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
                        if (!!(passwordRex.test(this.newCustomer.password))) return [3 /*break*/, 1];
                        this.customer.http.createMessage("error", "密码至少八个字符，至少一个字母和一个数字");
                        return [3 /*break*/, 4];
                    case 1:
                        if (!(this.newCustomer.password == this.repeatPassword)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.customer.signup(this.newCustomer, this.authcode)];
                    case 2:
                        customer = _a.sent();
                        if (customer) {
                            this.customer.http.createMessage('success', "注册成功");
                            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in__["a" /* SignInPage */]);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        this.customer.http.createMessage('error', '密码不一致');
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.customer.http.createMessage('error', '信息不完善');
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    RegisterDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register-detail',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/signin/register-detail/register-detail.html"*/'<!--\n  Generated template for the ForgetPassword2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="red">\n        <ion-title>注册</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item style="margin-bottom: 10px;\n        border-bottom:0.55px solid #f5efef;">\n            <ion-label color="primary">手机号</ion-label>\n            <ion-input placeholder="" [(ngModel)]="newCustomer.mobi" style="text-align: right;"></ion-input>\n        </ion-item>\n        <ion-item style="margin-bottom: 10px;\n        border-bottom:0.55px solid #f5efef;">\n            <ion-label color="primary">姓名</ion-label>\n            <ion-input placeholder="请输入姓名" [(ngModel)]="newCustomer.name" style="text-align: right;"></ion-input>\n        </ion-item>\n        <ion-item style="margin-bottom: 10px;\n        border-bottom:0.55px solid #f5efef;">\n            <ion-label color="primary">登录密码</ion-label>\n            <ion-input placeholder="请输入密码" [(ngModel)]="newCustomer.password" type="password" style="text-align: right;"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label color="primary">确认密码</ion-label>\n            <ion-input [(ngModel)]="repeatPassword" placeholder="请再次输入登录密码" type="password" style="text-align: right;"></ion-input>\n        </ion-item>\n    </ion-list>\n    <button ion-button color="red" (click)="goNext()" style="width: 100%;\n      margin-top: 30px;\n     ">提交注册信息</button>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/signin/register-detail/register-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_customer_service__["a" /* appCustomerService */]])
    ], RegisterDetailPage);
    return RegisterDetailPage;
}());

//# sourceMappingURL=register-detail.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MarketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var MarketPage = /** @class */ (function () {
    function MarketPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.startDt = new Date().toISOString();
        this.endDt = new Date().toISOString();
        this.event = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: '1990-02-20'
        };
    }
    MarketPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MarketPage');
    };
    MarketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-market',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/market/market.html"*/'<!--\n  Generated template for the MarketPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>市场公告</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="all">\n        <i class="iconfont icon-suosou"></i>\n        <ion-datetime style="    color: #00c7ae;" displayFormat="YYYY/MM/DD" pickerFormat="YYYY MM DD" [(ngModel)]="startDt"></ion-datetime>\n        <p>到</p>\n        <ion-datetime style="    color: #00c7ae;" displayFormat="YYYY/MM/DD" pickerFormat="YYYY MM DD" [(ngModel)]="endDt"></ion-datetime>\n\n        <i class="iconfont icon-kalendar"></i>\n\n    </div>\n    <p style="text-align: center;">加载完成</p>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/market/market.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], MarketPage);
    return MarketPage;
}());

//# sourceMappingURL=market.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenBillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_detail_product_detail__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selset_product_selset_product__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_weigh_setup_weigh_setup__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_share_service_app_ProductOrder_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__qr_code_qr_code__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_ble__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__share_platform_market_enum__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_share_service_http_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_media__ = __webpack_require__(477);
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







// import { Media, MediaObject } from '@ionic-native/media';
// import { File } from '@ionic-native/file';








/**
 * Generated class for the OpenBillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var status;
(function (status) {
    status[status["commodity"] = 1] = "commodity";
    status[status["uPrice"] = 2] = "uPrice";
    status[status["number"] = 3] = "number";
})(status || (status = {}));
var Company;
(function (Company) {
    Company["jin"] = "JIN";
    Company["kg"] = "KG";
    Company["pcs"] = "PCS";
})(Company || (Company = {}));
var OpenBillPage = /** @class */ (function () {
    function OpenBillPage(navCtrl, navParams, popoverCtrl, str, events, alert, ble, productOrderService, stroage, changeDetectorRef, menu, app, http, file, media) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.str = str;
        this.events = events;
        this.alert = alert;
        this.ble = ble;
        this.productOrderService = productOrderService;
        this.stroage = stroage;
        this.changeDetectorRef = changeDetectorRef;
        this.menu = menu;
        this.app = app;
        this.http = http;
        this.file = file;
        this.media = media;
        // rootPage = MenuPage;
        this.isShow = false;
        this.num = 1;
        this.show = false;
        this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0];
        this.weight = 0;
        this.tare = 0; //皮重
        this.totalWeight = 0;
        /**总价 */
        this.apAmt = 0;
        this.blueStatus = '未连接';
        this.blueData = 0;
        this.currentProduct = {
            amount: 0,
            grossWgt: this.blueData,
            pcsWgt: 0,
            price: 0,
            priceUnit: this.stroage.priceW == 'JIN' ? __WEBPACK_IMPORTED_MODULE_9__share_platform_market_enum__["i" /* PriceUnitEnum */].JIN : __WEBPACK_IMPORTED_MODULE_9__share_platform_market_enum__["i" /* PriceUnitEnum */].KG,
            priceWay: this.stroage.priceW == 'PSC' ? __WEBPACK_IMPORTED_MODULE_9__share_platform_market_enum__["j" /* PriceWayEnum */].Piece : __WEBPACK_IMPORTED_MODULE_9__share_platform_market_enum__["j" /* PriceWayEnum */].Weight,
            prodCatId: 0,
            productId: 0,
            productName: '',
            /**件数 */
            qty: 0,
            /**毛重 */
            tareWgt: this.tare,
            /**净重 */
            weight: 0,
        };
        this.devices = [];
        this.product = {}; //拿出来的产品
        this.productList = [];
        this.hotkeys = []; //热键
        this.orderAreaList = [];
        this.area = JSON.parse(localStorage.getItem('area'));
        if (!!this.area) {
            this.title = this.area.txnName;
            this.transArea = this.area.txnId;
            debugger;
        }
        //取出计价单位为斤
        this.salesUnit = this.stroage.priceW;
        this.company = Company;
        //设置15个按键 
        for (var i = 0; i < 15; i++) {
            this.hotkeys.push(this.product);
        }
        this.status = status;
        // 如果本地有数据则从本地取  
        this.hotkeys = JSON.parse(localStorage.getItem('hotkey')) || this.hotkeys;
        // let product = localStorage.getItem('productList') || [];
        // console.log(product);
        //本地拉用户的订单列表
        this.productList = JSON.parse(localStorage.getItem('productList')) || [];
        for (var _i = 0, _a = this.productList; _i < _a.length; _i++) {
            var pdt = _a[_i];
            this.conversion(pdt);
        }
        console.log(this.productList);
        this.events.subscribe('hotkey', function (data, index) {
            _this.conversion(data);
            if (index == undefined) {
                _this.product = data;
                _this.currentProduct.price = _this.product.price;
                _this.currentProduct.priceUnit = _this.product.priceUnit;
                _this.currentProduct.productName = _this.product.name;
                if (_this.product.priceUnit = _this.company.jian) {
                    _this.currentProduct.pcsWgt = _this.product.pcsWgt;
                }
                console.log(_this.product);
            }
            else {
                _this.conversion(data);
                _this.hotkeys[index] = data;
                localStorage.setItem('hotkey', JSON.stringify(_this.hotkeys));
            }
        });
        console.log(this.product);
        this.events.subscribe('commodity', function (data) {
            _this.productList = data;
        });
        //蓝牙数据
        this.events.subscribe('blueData', function (data) {
            _this.blueData = data;
            _this.changeDetectorRef.markForCheck();
            _this.changeDetectorRef.detectChanges();
        });
        //拿到交易区
    }
    //下载订单
    OpenBillPage.prototype.downloadProductList = function (orderNo) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isShow = false;
                        return [4 /*yield*/, this.productOrderService.download(orderNo)];
                    case 1:
                        res = _a.sent();
                        if (res) {
                            this.productList = res.order.orderDetails;
                            localStorage.setItem('productList', JSON.stringify(this.productList));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    OpenBillPage.prototype.select = function (area) {
        this.transArea = area.txnId;
        localStorage.setItem('area', JSON.stringify(area));
        this.title = area['txnName'];
        this.menu.toggle();
    };
    OpenBillPage.prototype.openMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log(this.area);
                        _a = this;
                        return [4 /*yield*/, this.productOrderService.list()];
                    case 1:
                        _a.area = _b.sent();
                        if (this.area) {
                            this.tradingArea = this.area['areas'];
                        }
                        this.menu.toggle();
                        return [2 /*return*/];
                }
            });
        });
    };
    //拉取交易区列表
    OpenBillPage.prototype.openList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.productOrderService.list()];
                    case 1:
                        _a.area = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 下载订单列表
    OpenBillPage.prototype.openAreaList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.show = false;
                        this.isShow = !this.isShow;
                        return [4 /*yield*/, this.productOrderService.downloadList()];
                    case 1:
                        res = _a.sent();
                        if (res) {
                            this.orderAreaList = res.tempOrderSimpleRqs;
                            console.log(this.orderAreaList);
                        }
                        this.menu.toggle();
                        return [2 /*return*/];
                }
            });
        });
    };
    //上传订单
    OpenBillPage.prototype.upload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var order, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.transArea);
                        if (!(this.transArea !== null)) return [3 /*break*/, 2];
                        order = {
                            apAmt: this.apAmt,
                            createWay: __WEBPACK_IMPORTED_MODULE_9__share_platform_market_enum__["b" /* CreateWayEnum */].APP,
                            mktId: this.stroage.market.mktId,
                            orderDetails: this.productList,
                            payType: __WEBPACK_IMPORTED_MODULE_9__share_platform_market_enum__["h" /* PayTypeEnum */].FS_C2B,
                            sellerCustId: this.stroage.customer.id,
                            sellerMemId: this.stroage.member.id,
                            sellerMemNo: this.stroage.member.no,
                            totalWeight: this.totalWeight,
                            transAreaId: this.transArea,
                        };
                        return [4 /*yield*/, this.productOrderService.upload(order)];
                    case 1:
                        res = _a.sent();
                        if (res) {
                            this.http.createMessage('success', '上传成功');
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        this.http.createMessage('warning', '请先选择交易区');
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /** 换算*/
    OpenBillPage.prototype.conversion = function (data) {
        if (this.salesUnit == 'JIN' && data.priceUnit == 'KG') {
            data.priceUnit = 'JIN';
            data.price = data.price / 2;
        }
        if (this.salesUnit == 'KG' && data.priceUnit == 'JIN') {
            data.priceUnit = 'KG';
            data.price = data.price * 2;
        }
    };
    OpenBillPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpenBillPage');
    };
    OpenBillPage.prototype.productDetail = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__product_detail_product_detail__["a" /* ProductDetailPage */], { index: i });
    };
    OpenBillPage.prototype.keyDown = function (num) {
        this.currentProduct.price = parseFloat("" + this.currentProduct.price + num);
    };
    OpenBillPage.prototype.key = function (num) {
        this.currentProduct.qty = parseFloat("" + this.currentProduct.qty + num);
    };
    OpenBillPage.prototype.del1 = function () {
        if (("" + this.currentProduct.price).length > 1) {
            this.currentProduct.price = parseFloat(("" + this.currentProduct.price).substring(0, ("" + this.currentProduct.price).length - 1));
        }
        else {
            this.currentProduct.price = 0;
        }
    };
    OpenBillPage.prototype.del2 = function () {
        if (("" + this.currentProduct.qty).length > 1) {
            this.currentProduct.qty = parseFloat(("" + this.currentProduct.qty).substring(0, ("" + this.currentProduct.qty).length - 1));
        }
        else {
            this.currentProduct.qty = 0;
        }
    };
    OpenBillPage.prototype.delectAll = function () {
        var _this = this;
        this.alert.create({
            title: "提示",
            message: "是否清除全部信息",
            buttons: [
                {
                    text: '取消',
                    handler: function () {
                        console.log('这是取消');
                    }
                },
                {
                    text: '确认',
                    handler: function () {
                        _this.productList = [];
                        localStorage.setItem('productList', JSON.stringify([]));
                    }
                }
            ]
        }).present();
    };
    //购买数量
    OpenBillPage.prototype.numberFn = function () {
        var number = 0;
        for (var _i = 0, _a = this.productList; _i < _a.length; _i++) {
            var product = _a[_i];
            number = number + 1;
        }
        return "" + number || '0';
    };
    //一共多少斤
    OpenBillPage.prototype.priceUnitFn = function () {
        var number = 0;
        for (var _i = 0, _a = this.productList; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.priceUnit.Piece == this.company.pcs) {
                number = number + (product.qty * product.pscWgt);
            }
            else {
                number = number + product.qty;
            }
        }
        this.totalWeight = number;
        return "" + number || '0';
    };
    OpenBillPage.prototype.sumFn = function (a, b) {
        return "" + parseFloat(a) * parseFloat(b);
    };
    OpenBillPage.prototype.TotalPrince = function () {
        var total = 0;
        for (var _i = 0, _a = this.productList; _i < _a.length; _i++) {
            var product = _a[_i];
            total = product.price * product.qty + total;
        }
        this.apAmt = total;
        return "" + total || '0';
    };
    OpenBillPage.prototype.binName = function (product) {
        this.currentProduct.price = product.price || [];
        this.currentProduct.productName = product.name || [];
        this.currentProduct.priceUnit = product.priceUnit || [];
        console.log(product);
    };
    OpenBillPage.prototype.jump = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__selset_product_selset_product__["a" /* SelsetProductPage */], {
            productIndex: i,
        });
    };
    //弹出模态框
    OpenBillPage.prototype.alertCtrl = function (msg) {
        this.alert.create({
            subTitle: msg,
            buttons: ['好的']
        }).present();
    };
    //点击完成
    OpenBillPage.prototype.complete = function () {
        var product = this.currentProduct;
        var msg = '请选择商品';
        var msg2 = "请输入数量";
        var msg3 = "请输入价格";
        if (this.currentProduct.productName !== '') {
            var bool = true;
            for (var _i = 0, _a = this.productList; _i < _a.length; _i++) {
                var pdt = _a[_i];
                if (pdt.productName == product.productName && pdt.price == product.price && pdt.priceUnit == product.priceUnit) {
                    pdt.qty = product.qty + pdt.qty;
                    bool = false;
                    break;
                }
                else {
                    bool = true;
                }
            }
            if (bool) {
                product.id = null;
                this.productList.push(product);
            }
            var empty = {
                amount: 0,
                grossWgt: this.blueData,
                pcsWgt: 0,
                price: 0,
                priceUnit: this.stroage.priceW == 'JIN' ? __WEBPACK_IMPORTED_MODULE_9__share_platform_market_enum__["i" /* PriceUnitEnum */].JIN : __WEBPACK_IMPORTED_MODULE_9__share_platform_market_enum__["i" /* PriceUnitEnum */].KG,
                priceWay: this.stroage.priceW == 'PSC' ? __WEBPACK_IMPORTED_MODULE_9__share_platform_market_enum__["j" /* PriceWayEnum */].Piece : __WEBPACK_IMPORTED_MODULE_9__share_platform_market_enum__["j" /* PriceWayEnum */].Weight,
                prodCatId: 0,
                productId: 0,
                productName: '',
                /**件数 */
                qty: 0,
                /**毛重 */
                tareWgt: this.tare,
                /**净重 */
                weight: 0,
            };
            this.currentProduct = empty;
            localStorage.setItem('productList', JSON.stringify(this.productList));
        }
        else {
            this.alertCtrl(msg);
        }
    };
    OpenBillPage.prototype.delete = function (i) {
        var _this = this;
        this.alert.create({
            title: "提示",
            message: "是否清除当前信息",
            buttons: [
                {
                    text: '取消',
                    handler: function () {
                        console.log('这是取消');
                    }
                },
                {
                    text: '确认',
                    handler: function () {
                        debugger;
                        _this.productList = _this.productList.filter(function (value, index, arr) { return index !== i; });
                        localStorage.setItem('productList', JSON.stringify(_this.productList));
                    }
                }
            ]
        }).present();
    };
    OpenBillPage.prototype.connection = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_weigh_setup_weigh_setup__["a" /* WeighSetupPage */]);
    };
    //打印
    OpenBillPage.prototype.console = function () {
        console.log('1');
    };
    OpenBillPage.prototype.commodity = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__selset_product_selset_product__["a" /* SelsetProductPage */]);
    };
    OpenBillPage.prototype.video = function () {
        // this.filePath = this.file.externalDataDirectory + "Record.mp3";
        // this.recordData = this.media.create(this.filePath);
        // this.recordData.startRecord();
    };
    // 赊销
    OpenBillPage.prototype.creditSale = function () {
        return __awaiter(this, void 0, void 0, function () {
            var order, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        order = {
                            apAmt: this.apAmt,
                            createWay: __WEBPACK_IMPORTED_MODULE_9__share_platform_market_enum__["b" /* CreateWayEnum */].APP,
                            mktId: this.stroage.market.mktId,
                            orderDetails: this.productList,
                            payType: __WEBPACK_IMPORTED_MODULE_9__share_platform_market_enum__["h" /* PayTypeEnum */].FS_CREDIT,
                            sellerCustId: this.stroage.customer.id,
                            sellerMemId: this.stroage.member.id,
                            sellerMemNo: this.stroage.member.no,
                            totalWeight: this.totalWeight,
                            transAreaId: this.transArea,
                        };
                        if (!(order.transAreaId == null)) return [3 /*break*/, 1];
                        this.http.createMessage('warning', '请选择交易区');
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.productOrderService.orderCreate(order)];
                    case 2:
                        data = _a.sent();
                        console.log(data);
                        if (data) {
                            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__qr_code_qr_code__["a" /* QrCodePage */], {
                                data: data,
                                payType: __WEBPACK_IMPORTED_MODULE_9__share_platform_market_enum__["h" /* PayTypeEnum */].FS_CREDIT,
                            });
                        }
                        else {
                            this.http.createMessage('warning', '交易区不能为空');
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //钱包支付
    OpenBillPage.prototype.pay = function () {
        return __awaiter(this, void 0, void 0, function () {
            var order, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        order = {
                            apAmt: this.apAmt,
                            createWay: __WEBPACK_IMPORTED_MODULE_9__share_platform_market_enum__["b" /* CreateWayEnum */].APP,
                            mktId: this.stroage.market.mktId,
                            orderDetails: this.productList,
                            payType: __WEBPACK_IMPORTED_MODULE_9__share_platform_market_enum__["h" /* PayTypeEnum */].FS_C2B,
                            sellerCustId: this.stroage.customer.id,
                            sellerMemId: this.stroage.member.id,
                            sellerMemNo: this.stroage.member.no,
                            totalWeight: this.totalWeight,
                            transAreaId: this.transArea,
                        };
                        return [4 /*yield*/, this.productOrderService.orderCreate(order)];
                    case 1:
                        data = _a.sent();
                        if (this.transArea !== null) {
                            debugger;
                            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__qr_code_qr_code__["a" /* QrCodePage */], {
                                data: data,
                                payType: __WEBPACK_IMPORTED_MODULE_9__share_platform_market_enum__["h" /* PayTypeEnum */].FS_C2B
                            });
                        }
                        else {
                            this.http.createMessage('warning', '请选择交易区');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //皮重 取皮 
    OpenBillPage.prototype.addTare = function () {
        //tare 单位是kg 
        if (this.salesUnit == 'JIN') {
            this.currentProduct.qty = this.weight * 2;
        }
        else if (this.salesUnit == 'KG') {
            this.currentProduct.qty = this.weight;
        }
    };
    // 去皮
    OpenBillPage.prototype.rmTare = function () {
        if (this.weight - this.tare < 0) {
            this.alert.create({
                title: "提示",
                message: "皮重不能大于净重",
                buttons: [
                    {
                        text: '取消',
                    },
                    {
                        text: '确认',
                    }
                ]
            }).present();
        }
        else {
            if (this.salesUnit == 'JIN') {
                this.currentProduct.qty = (this.weight - this.tare) * 2;
            }
            else if (this.salesUnit == 'KG') {
                this.currentProduct.qty = this.weight - this.tare;
            }
        }
    };
    OpenBillPage.prototype.setTare = function () {
        var _this = this;
        var alert = this.alert.create({
            title: '设置皮重',
            inputs: [
                {
                    name: "tare",
                    placeholder: '这里设置皮重',
                    type: 'number'
                }
            ],
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                },
                {
                    text: '确定',
                    handler: function (data) {
                        _this.tare = data.tare;
                    }
                }
            ]
        });
        alert.present();
    };
    OpenBillPage.prototype.startReocrd = function () {
        //文件URL，文件存放在拓展内存卡中文件夹下，命名为Record.mp3
        this.filePath = this.file.externalDataDirectory + "Record.mp3";
        //创建media对象，参数文件名字，上面的filePath也指定了文件存放位置和文件名字
        this.recordData = this.media.create(this.filePath);
        //开始录音
        this.recordData.startRecord();
    };
    OpenBillPage.prototype.pauseRecord = function () {
        return __awaiter(this, void 0, void 0, function () {
            var base64;
            return __generator(this, function (_a) {
                //暂停录音
                this.recordData.pauseRecord();
                base64 = this.file.readAsDataURL(this.file.externalDataDirectory, "Record.mp3");
                alert(base64);
                if (base64 != null) {
                    // let res = await this.productOrderService.xxx();
                    // if (res) {
                    //   this.orderDetail = res;
                    // }
                }
                return [2 /*return*/];
            });
        });
    };
    OpenBillPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-open-bill',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/open-bill/open-bill.html"*/'<!--\n  Generated template for the OpenBillPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            {{title}}\n        </ion-title>\n        <ion-buttons end (click)="openMenu()">\n            <button ion-button icon-only>\n                <ion-icon name=\'menu\'></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-menu [content]="mycontent" side="right">\n    <ion-content>\n        <ion-list>\n            <button ion-item *ngFor="let area of tradingArea;let i = index" (click)="select(area)">\n                {{area!.txnName}}\n            </button>\n        </ion-list>\n\n        <button ion-button (click)="upload()">\n            上传订单\n        </button>\n        <button ion-button (click)="openAreaList()">\n            下载订单\n        </button>\n    </ion-content>\n\n</ion-menu>\n\n<ion-nav #mycontent>\n\n\n\n</ion-nav>\n\n\n\n\n\n\n<ion-content>\n\n    <div class="model" *ngIf="isShow">\n        <ion-card>\n            <ion-card-header>\n                订单列表\n            </ion-card-header>\n\n            <ion-card-content style="height:20rem;overflow: scroll">\n                <ion-list *ngFor="let item of orderAreaList">\n                    <ion-item (click)="downloadProductList(item.orderNo)">\n                        <p> 操作员：{{item.name}}</p>\n                        <p> 手机号：{{item.phoneNo}}</p>\n                        <p> 订单号：{{item.orderNo}}</p>\n                        <p> 时间：{{item.createTime}}</p>\n                    </ion-item>\n                </ion-list>\n            </ion-card-content>\n        </ion-card>\n    </div>\n    <ul class="title" style="background: #ff6566;color: #fff;">\n        <!-- <li>\n            No\n        </li> -->\n        <li>商品</li>\n        <li *ngIf="company.pcs == salesUnit">数量</li>\n        <li *ngIf="company.pcs !== salesUnit">重量</li>\n        <li>单价</li>\n        <li>金额</li>\n        <li (click)="delectAll()">\n            <i class="iconfont icon-delete"></i>\n        </li>\n    </ul>\n    <ul class="title" *ngFor="let product of productList;let i=index">\n        <li>\n            {{i+1}}\n        </li>\n        <li style="text-decoration: underline; " (click)="productDetail(i)">{{product!.productName}}</li>\n        <li>{{product!.qty}}\n            <span *ngIf="company.jin==salesUnit">斤</span>\n            <span *ngIf="company.pcs==salesUnit">件</span>\n            <span *ngIf="company.kg==salesUnit">公斤</span>\n        </li>\n        <li>{{product!.price}}\n            <span *ngIf="company.jin==salesUnit">元/斤</span>\n            <span *ngIf="company.pcs==salesUnit">元/件</span>\n            <span *ngIf="company.kg==salesUnit">元/公斤</span>\n        </li>\n        <li>{{sumFn(product!.qty,product!.price)}}元</li>\n        <li (click)="delete(i)">\n            <i class="iconfont icon-delete"></i>\n        </li>\n    </ul>\n\n\n\n    <div class="footer">\n        <div class="keyboard">\n            <div>\n                <!-- 这里是下面的两个键盘 -->\n                <i class="iconfont icon-jianpan" (click)="show=!show"></i>\n                <i class="iconfont icon-icon--" (mousedown)="startReocrd()" (mouseup)="pauseRecord()"></i>\n            </div>\n            <div>合计&nbsp;&nbsp;\n                <span>{{numberFn()}}笔</span>\n                <span>{{priceUnitFn()}}斤</span>\n                <span>{{TotalPrince()}}元</span>\n            </div>\n        </div>\n        <div class="pay">\n            <span>\n                <i class="iconfont icon-weixin"></i>微信</span>\n            <span>\n                <i class="iconfont icon-zhifubao"></i>支付宝</span>\n            <span (click)="pay()">\n                <i class="iconfont icon-qianbao"></i>钱包</span>\n            <span (click)="creditSale()">\n                <i class="iconfont icon-qianfei"></i>赊销</span>\n        </div>\n\n        <div *ngIf="show" [ngSwitch]="num" style="position: fixed;\n                    bottom: 90px;\n                    right: 0;\n                    width: 100%; \n                    background: #fff;">\n            <div class="fit">\n                <p (click)="setTare()">皮重 :{{ tare}}kg</p>\n                <p style="font-size: 23px;\n      color: #ff0000;\n      font-weight: 600; \n      margin: auto;">{{blueData}}</p>\n                <p style="background: #00b7a0;\n                          color: #fff;\n                          font-size: 19px;\n                          border-radius: 10px;\n                          padding: 5px;"\n                    (click)="connection()">链接磅秤</p>\n            </div>\n            <div class="product" [class.bg]="num==status.commodity" (press)="commodity()" (click)="num=1">\n                <span>商品</span>\n                <span>{{ currentProduct.productName}}</span>\n            </div>\n            <div class="num">\n                <div [class.bg]="num==status.uPrice" (click)="num =2">\n                    <label>单价</label>\n                    <p>{{currentProduct.price}}</p>\n                    <label *ngIf="salesUnit == company.jin">元/斤</label>\n                    <label *ngIf="salesUnit == company.pcs">元/件</label>\n                    <label *ngIf="salesUnit == company.kg">元/公斤</label>\n                </div>\n\n                <div [class.bg]="num==status.number" (click)="num =3">\n                    <label *ngIf="salesUnit == company.pcs">数量</label>\n                    <label *ngIf="salesUnit !== company.pcs">重量</label>\n                    <p>{{ currentProduct.qty}}</p>\n                    <label *ngIf="salesUnit == company.jin">斤</label>\n                    <label *ngIf="salesUnit == company.pcs">件</label>\n                    <label *ngIf="salesUnit == company.kg">公斤</label>\n                </div>\n            </div>\n            <div>\n                <div class="grids hotKey" *ngSwitchDefault>\n                    <p *ngFor="let hotKey of hotkeys;let i=index" (press)="jump(i)" (click)="binName(hotKey)">{{hotKey!.name}}</p>\n\n                    <p style="background: #060606;color:#fff" (click)="commodity()">全部商品</p>\n                </div>\n\n                <div class="grids price" *ngSwitchCase="status!.uPrice">\n                    <div class="calc left">\n                        <p *ngFor="let number of numbers" (click)="keyDown(number)">{{number}}</p>\n                        <p (click)="del1()">删除</p>\n                    </div>\n                    <div class="clac key">\n                        <p>指导价</p>\n                        <p (click)="num = 3">下一步</p>\n                    </div>\n                </div>\n\n                <div class="grids price" *ngSwitchCase="status!.number">\n                    <div class="calc left">\n                        <p *ngFor="let number of numbers" (click)="key(number)">{{number}}</p>\n                        <p (click)=\'del2()\'>删除</p>\n                    </div>\n                    <div class="clac key">\n                        <p class="keyH" (click)="addTare()">取重</p>\n                        <p class="keyH" (click)="rmTare()">去皮</p>\n                        <p (click)="complete()">完成</p>\n                    </div>\n                </div>\n            </div>\n\n\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/open-bill/open-bill.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_ble__["a" /* BLE */],
            __WEBPACK_IMPORTED_MODULE_6__app_share_service_app_ProductOrder_service__["a" /* appProductOrderService */],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_10__app_share_service_http_service__["a" /* MyHttpService */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_media__["a" /* Media */]])
    ], OpenBillPage);
    return OpenBillPage;
}());

//# sourceMappingURL=open-bill.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_ProductOrder_service__ = __webpack_require__(46);
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



/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 *
 * Ionic pages and navigation.
 */
// @IonicPage()
var ProductDetailPage = /** @class */ (function () {
    function ProductDetailPage(navCtrl, navParams, event, proService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = event;
        this.proService = proService;
        this.index = this.navParams.get('index');
        this.products = JSON.parse(localStorage.getItem('productList'));
        this.product = this.products[this.index];
    }
    ProductDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductDetailPage');
    };
    ProductDetailPage.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.proService.productUpdate(this.product)
                        // let product = { name: this.product.name, number: this.product.number, price: this.product.price, sum: ~~this.product.number * ~~this.product.price }
                        // this.products[this.index] = this.product
                        // localStorage.setItem('productList', JSON.stringify(this.products))
                    ];
                    case 1:
                        _a.sent();
                        // let product = { name: this.product.name, number: this.product.number, price: this.product.price, sum: ~~this.product.number * ~~this.product.price }
                        // this.products[this.index] = this.product
                        // localStorage.setItem('productList', JSON.stringify(this.products))
                        this.navCtrl.pop().then(function () {
                            return _this.event.publish('commodity', _this.products);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-product-detail',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/product-detail/product-detail.html"*/'<!--\n  Generated template for the ProductDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>修改商品</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="save()">\n                保存\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div *ngIf="product">\n        <ion-item style="margin-top:20px;">\n            <ion-label color="primary">商品名称</ion-label>\n            <ion-input placeholder="小红小豆" style="text-align: right;" [(ngModel)]="product.name"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary">毛重量（斤）</ion-label>\n            <ion-input placeholder="2" style="text-align: right;"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary">净重量（斤）</ion-label>\n            <ion-input placeholder="2" style="text-align: right;" [(ngModel)]="product.pcsWgt"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary">单价（元）</ion-label>\n            <ion-input placeholder="2.00" style="text-align: right;" [(ngModel)]="product.price"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary">金额</ion-label>\n            <ion-input placeholder="4.00" style="text-align: right;" [(ngModel)]="product.price"></ion-input>\n        </ion-item>\n\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/product-detail/product-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_ProductOrder_service__["a" /* appProductOrderService */]])
    ], ProductDetailPage);
    return ProductDetailPage;
}());

//# sourceMappingURL=product-detail.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelsetProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_add_product_add__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_app_ProductOrder_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_share_service_pinyinOrder_service__ = __webpack_require__(371);
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






/**
 * Generated class for the SelsetProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var SelsetProductPage = /** @class */ (function () {
    function SelsetProductPage(navCtrl, navParams, str, events, product, pinyin) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.str = str;
        this.events = events;
        this.product = product;
        this.pinyin = pinyin;
        this.products = [];
        this.productlist = [];
        this.productList = [];
        this.porductIndex = this.navParams.get('productIndex');
    }
    SelsetProductPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, product, _i, _b, productName, product;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.product.productList()];
                    case 1:
                        _a.products = _c.sent();
                        console.log(this.products);
                        for (product in this.products) {
                            this.productlist.push("" + this.products[product].prodCat.catName);
                        }
                        this.productlist = this.productlist.filter(function (element, index, array) {
                            return array.indexOf(element) === index;
                        });
                        this.productlist = this.pinyin.sort(this.productlist);
                        for (_i = 0, _b = this.productlist; _i < _b.length; _i++) {
                            productName = _b[_i];
                            this.producted = { title: '', data: [] };
                            this.producted.title = productName;
                            for (product in this.products) {
                                if ("" + this.products[product].prodCat.catName == "" + productName) {
                                    this.producted.data.push(this.products[product]);
                                    console.log(this.producted);
                                }
                            }
                            this.productList.push(this.producted);
                            console.log(this.productList);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SelsetProductPage.prototype.goBack = function (str) {
        var _this = this;
        this.navCtrl.pop().then(function () {
            if (_this.porductIndex == undefined) {
                _this.events.publish('hotkey', str);
            }
            else {
                _this.events.publish('hotkey', str, _this.porductIndex);
            }
        });
    };
    SelsetProductPage.prototype.addProduct = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__product_add_product_add__["a" /* ProductAddPage */]);
    };
    SelsetProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-selset-product',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/selset-product/selset-product.html"*/'<!--\n  Generated template for the SelsetProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>商品列表</ion-title>\n\n\n        <ion-buttons end>\n            <button ion-button icon-end solid color="secondary" (click)="addProduct()">\n                <i class="iconfont icon-refresh"></i>\n            </button>\n        </ion-buttons>\n\n        <ion-buttons end>\n            <button ion-button icon-end solid color="secondary" (click)="addProduct()">\n                <i class="iconfont icon-add"></i>\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n\n        <ion-item *ngFor=\'let products of productList\' style="margin-bottom: 20px;">\n            <h2>{{products.title}}</h2>\n            <div style="display: flex;flex-wrap: wrap;">\n                <div *ngFor="let product of products.data" style="width: 33%;\n                margin-bottom: 10px;" (click)="goBack(product)">\n                    {{product.name}}\n                </div>\n            </div>\n        </ion-item>\n    </ion-list>\n    <div class="Letter ">\n        <span>A</span>\n        <span>B</span>\n        <span>C</span>\n        <span>D</span>\n        <span>E</span>\n        <span>F</span>\n\n        <span>G</span>\n        <span>H</span>\n        <span>I</span>\n        <span>J</span>\n        <span>K</span>\n        <span>L</span>\n        <span>M</span>\n        <span>N</span>\n        <span>O</span>\n        <span>P</span>\n        <span>Q</span>\n        <span>R</span>\n        <span>S</span>\n        <span>T</span>\n        <span>U</span>\n        <span>V</span>\n        <span>W</span>\n        <span>X</span>\n        <span>Y</span>\n        <span>Z</span>\n        <span>#</span>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/selset-product/selset-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_app_ProductOrder_service__["a" /* appProductOrderService */],
            __WEBPACK_IMPORTED_MODULE_5__app_share_service_pinyinOrder_service__["a" /* pinyinOrderService */]])
    ], SelsetProductPage);
    return SelsetProductPage;
}());

//# sourceMappingURL=selset-product.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pinyinOrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var pinyinOrderService = /** @class */ (function () {
    function pinyinOrderService() {
        this.dic = {
            "a": "啊阿吖嗄哎哀唉埃挨锿捱皑癌嗳矮蔼霭艾爱砹隘嗌嫒碍暧瑷僾薆安桉氨庵谙腤鹌鞍鮟盫啽垵俺唵埯铵揞犴岸按案胺暗黯肮昂枊盎醠凹坳垇爊敖嗷嶅廒獒遨熬璈翱聱螯謷鳌鏖芺袄媪岙傲奡奥骜澳懊鏊",
            "b": "八巴叭扒朳吧夿岜芭疤捌笆粑豝鲃拔茇胈菝跋魃把靶坝弝爸罢鲅霸灞掰白百佰柏栢捭摆呗败拜稗扳攽班般颁斑搬斒瘢癍阪坂板版钣舨蝂魬办半伴扮姅拌绊瓣邦帮梆浜绑榜膀蚌傍棒谤塝稖蒡磅镑勹包孢苞胞煲龅褒雹宝饱保鸨堡葆褓报抱豹趵菢鲍暴虣爆陂卑杯悲碑鹎北贝狈邶备背钡倍悖被偝惫焙辈碚蓓褙骳糒鞴鐾奔贲倴锛本苯畚坌笨伻崩绷嘣甭菶琫泵迸甏镚蹦屄逼鲾柲荸鼻匕比佊吡妣沘彼秕俾笔舭鄙币必毕闭庇诐邲畀哔毖珌荜陛毙狴铋婢庳敝梐萆堛弼愊愎皕筚赑滗煏痹腷蓖裨跸閟弊碧箅蔽馝駜髲壁嬖篦薜觱避鮅濞臂髀奰璧饆襞襣躄鷩边砭笾编煸箯蝙鳊鞭贬扁窆匾惼碥稨褊藊卞弁忭抃汳汴苄便变昪揙缏遍艑辨辩辫彪标飑猋幖滮骠熛膘瘭镖飙飚瀌镳表婊裱褾檦俵鳔憋鳖别蹩瘪邠宾彬傧斌滨缤槟镔濒豳蠙摈殡膑髌鬓冰兵栟丙邴秉柄炳饼蛃禀并幷病摒拨波玻剥袯钵饽啵脖菠嶓播伯孛驳帛泊瓝勃亳浡钹铂舶博渤葧鹁搏馎鲌僰箔膊踣镈薄襮礴跛簸擘檗峬庯逋钸晡餔醭卜卟补哺捕不布步怖钚部埠瓿蔀篰簿玢夯疒瀑",
            "c": "嚓擦礤猜才材财裁采彩睬綵踩菜蔡縩参骖餐残蚕惭惨憯黪黲灿粲璨仓伧沧苍舱藏鑶操糙曹嘈漕槽艚螬草册侧厕恻测敇策箣岑梣涔噌层蹭叉杈臿嗏插馇锸艖垞查茬茶嵖搽猹槎察碴檫衩镲汊岔侘诧姹差拆钗侪柴豺虿瘥觇掺搀幨婵谗孱禅馋缠蝉鋋廛潺镡瀍蟾巉躔镵产刬浐谄铲阐蒇冁繟忏颤羼韂伥昌娼猖菖阊琩鲳肠苌尝偿常徜嫦鲿厂场昶惝敞氅鋹怅玚畅倡鬯唱暢韔抄弨怊钞焯超晁巢朝嘲潮吵炒眧麨耖车砗唓扯彻坼掣撤澈抻郴琛嗔尘臣忱沉辰陈宸晨谌趻碜墋踸闯衬疢称龀趁榇谶柽偁蛏铛牚琤赪撑瞠丞成呈承枨诚郕城宬乘埕脭铖惩程裎塍酲澄橙逞骋秤吃哧蚩鸱瓻眵笞嗤媸摛痴螭魑弛池驰迟茌持墀踟篪尺侈齿耻豉褫彳叱斥赤饬抶炽翅敕啻傺憏瘛充冲忡茺翀舂憃憧艟虫崇宠铳抽瘳篘犨仇俦帱惆绸畴愁稠筹酬踌懤雠丑瞅臭殠出初摴樗刍除厨滁锄蜍雏橱幮躇蹰杵础储楮楚褚齼亍处怵绌琡搐触憷歜黜矗搋膗揣啜嘬踹巛川氚穿传舡船遄椽歂舛荈喘僢串钏囱疮窗摐床噇创怆吹炊垂陲捶菙棰槌锤春堾椿蝽鰆纯唇莼淳鹑漘醇踳蠢踔戳辵娖绰逴辍龊歠呲玼疵词祠茈茨瓷慈辞磁雌鹚糍此佌次佽刺赐从匆苁枞葱骢璁聪丛淙琮凑楱腠辏粗徂殂促猝蔟醋簇蹙蹴汆撺镩蹿窜篡爨崔催摧榱璀脆啐悴淬萃毳瘁粹翠村皴存忖寸搓磋撮蹉嵯痤矬鹾脞厝挫措锉错刹畜曾膪澶骣粢",
            "d": "襜裯篅錞哒耷搭嗒褡达妲怛笪答瘩靼鞑打大呆歹傣代岱甙绐迨带待怠殆玳贷埭袋逮戴黛丹单担眈耽郸聃殚瘅箪儋胆疸紞掸旦但诞啖弹惮淡萏蛋氮澹当裆挡党谠凼宕砀荡档菪刀叨忉氘导岛倒捣祷蹈到悼盗道稻纛得锝德的灯登噔簦蹬等戥邓凳嶝瞪磴镫低羝堤嘀滴镝鞮狄籴迪敌涤荻笛觌嫡氐诋邸坻底抵柢砥骶地弟玓帝娣递第谛棣睇缔蒂碲嗲掂滇颠巅癫典点碘踮电佃甸阽坫店垫玷钿惦淀奠殿癜簟刁叼凋貂碉雕鲷吊钓掉铞爹跌迭垤瓞谍堞揲耋叠牒碟蝶蹀鲽丁仃叮玎疔盯钉耵酊顶鼎订定啶腚碇锭丢铥东冬咚岽鸫董懂蕫动冻侗垌峒恫栋洞胨胴硐都兜蔸篼斗抖陡蚪豆郖逗痘窦嘟督毒读渎椟牍犊黩髑独笃堵赌睹芏妒杜肚度渡镀蠹端短段断缎椴煅锻簖堆队对兑祋怼碓憝镦吨惇敦墩礅蹲盹趸沌炖盾砘钝顿遁多咄哆裰夺铎掇敚踱朵哚垛缍躲剁沲堕舵惰跺赕铫町铤",
            "e": "砵妸屙讹俄娥峨莪锇鹅蛾额婀厄阨呃扼苊轭垩恶饿谔鄂阏愕萼遏腭锷鹗颚噩諤鳄恩蒽摁儿而鸸鲕尔耳迩洱饵珥铒二佴贰唔诶",
            "f": "祊偪发乏伐垡罚阀筏法砝珐帆番幡翻藩凡矾钒烦樊蕃燔璠繁蹯瀿蘩鐇反返氾犯汎泛饭范贩畈梵方邡坊芳枋钫防妨房肪鲂仿访纺昉舫放飞妃非啡婓绯菲扉蜚霏鲱肥淝腓匪诽悱斐榧翡篚吠废沸狒肺费痱镄分吩纷芬氛酚坟汾棼焚鼢粉份奋忿偾愤粪鲼瀵丰风沣沨枫封疯砜峰烽葑锋蜂酆冯逢缝讽唪凤奉俸缶否夫呋肤趺麸稃跗孵敷弗伏凫孚扶芙芾怫拂服绂绋苻俘枹氟祓罘茯郛浮砩莩蚨匐桴涪琈符艴菔袱幅福辐幞蝠黻抚甫府拊斧俯釜辅腑滏腐黼父讣付妇负附咐阜驸复赴副傅富赋缚腹鲋赙蝜蝮鳆覆馥",
            "g": "旮伽钆尜嘎噶尕尬该陔垓赅改丐钙盖溉戤概干甘迀杆肝坩泔苷柑竿疳酐尴秆赶敢感澉橄擀旰矸绀淦幹赣冈刚岗纲肛缸钢罡港杠筻戆皋羔高睾膏篙糕杲搞缟槁稿镐藁告诰郜锆戈圪纥疙哥胳袼鸽割搁歌阁革格鬲葛隔嗝塥搿膈镉骼哿舸个各虼硌铬箇根跟哏亘艮茛更庚耕赓羹郠哽埂绠耿梗鲠工弓公功攻供肱宫恭蚣躬龚觥巩汞拱珙共贡勾佝沟钩缑緱篝鞲岣狗苟枸玽笱构诟购垢够媾彀遘觏估咕姑孤沽轱鸪菇菰蛄觚辜酤毂箍鹘古汩诂谷股牯骨罟钴蛊鼓嘏穀臌瞽固故顾崮梏牿雇痼锢鲴瓜刮胍鸹呱剐寡卦诖挂褂乖拐怪关观官冠倌棺鳏馆管贯惯掼涫盥灌瓘鹳罐光咣桄胱广犷逛归圭妫龟规皈闺硅瑰鲑宄轨庋匦诡癸鬼晷簋刽刿柜炅贵桂跪鳜衮绲辊滚磙鲧棍呙埚郭崞聒锅蝈囯国帼掴虢馘果猓椁蜾裹过桧咯莞呷",
            "h": "餲侅蛤鹄铪哈嗨孩骸海胲醢亥骇害氦顸蚶酣憨鼾邗含邯函浛晗涵焓寒韩罕喊汉汗旱悍捍焊琀菡傼颔撖憾撼翰瀚杭绗航颃沆蒿嚆薅蚝毫嗥豪嚎壕濠好郝号昊浩耗淏皓颢灏灝诃呵喝嗬禾合何劾和河曷阂核盍荷涸盒菏訸颌阖翮佫贺褐赫鹤壑黑嘿痕很狠恨亨哼恒桁珩横衡蘅轰哄訇烘薨弘红宏闳泓洪荭虹鸿蕻黉讧侯喉猴瘊篌糇骺吼后郈厚逅候堠鲎乎呼忽烀轷唿惚滹囫弧狐胡壶斛湖猢葫煳瑚鹕槲糊蝴醐觳虎浒唬琥互户冱护沪岵怙戽祜笏扈瓠鄠鹱花华哗骅铧滑猾化划画话桦怀徊淮槐踝坏欢獾还环洹桓萑锾寰缳鬟缓幻奂宦唤换浣涣患焕逭痪豢漶鲩擐肓荒慌皇凰隍黄徨惶湟遑煌潢璜篁蝗癀磺簧蟥鳇恍晃晄谎幌滉灰诙咴恢挥虺晖珲辉麾徽隳回洄茴蛔悔卉汇会讳哕浍绘荟诲恚烩贿彗晦秽喙惠缋毁慧蕙蟪昏荤婚阍浑馄魂诨混溷耠锪劐豁攉活火伙钬夥或货获祸惑霍镬嚯瀖藿蠖行砉圜",
            "i": "",
            "j": "皀筴伡諔丌讥击叽饥乩圾机玑肌芨矶鸡咭迹剞唧姬屐积笄基绩嵇犄缉赍畸跻箕畿稽齑墼激羁及吉岌汲级即极亟佶姞急笈疾戢棘殛集嫉楫蒺辑瘠蕺籍几己虮挤脊掎戟嵴麂计记伎纪妓忌技芰际剂季哜既洎济继觊偈寂寄悸祭蓟暨跽霁鲚稷鲫冀髻骥加夹佳迦枷浃珈家痂笳袈葭跏嘉镓岬郏荚恝戛铗蛱颊甲胛贾钾瘕价驾架假嫁稼戋奸尖幵坚歼间肩艰兼监笺菅湔犍缄搛煎缣蒹鲣鹣篯瀐鞯囝拣枧俭柬茧捡笕减剪检趼睑硷裥锏简谫戬碱翦謇蹇见件建饯剑牮荐贱健涧舰渐谏楗毽溅腱践鉴键僭箭踺江姜将茳浆豇僵缰礓疆讲奖桨蒋耩匠降洚绛酱犟糨艽交郊姣娇浇茭骄胶椒焦蛟跤僬鲛蕉礁鹪鐎角佼挢狡绞饺皎矫脚铰搅剿敫徼缴叫轿较教窖酵噍醮阶疖皆接秸喈嗟揭街孑节讦劫杰诘拮洁结桀婕捷颉睫截碣竭鲒羯姐解介戒芥届界疥诫借蚧骱藉巾今斤金津矜衿琎筋襟仅卺紧堇谨锦廑馑槿瑾尽劲妗近进荩晋浸烬赆缙禁靳觐噤京泾经茎荆惊旌菁晶腈睛粳兢精鲸井阱刭肼颈景儆憬警净弪径迳胫痉竞婧竟敬靖境獍静镜扃迥炯窘纠究鸠赳阄啾揪鬏九久灸玖韭酒旧臼咎疚柩桕厩救就舅僦鹫居拘狙苴驹疽掬椐琚锔裾雎鞠鞫局桔菊橘咀沮举矩莒榉榘龃踽句巨讵姖拒苣具炬钜俱倨剧惧据距犋飓锯窭聚屦踞遽醵娟捐涓鹃镌蠲卷锩倦桊狷绢隽眷鄄噘撅孓决诀抉玦珏绝觉倔崛掘桷觖厥劂谲獗蕨橛爵镢蹶嚼矍爝攫军君均钧皲菌筠麇俊郡峻捃浚骏珺竣挟",
            "k": "蚵槛咔咖喀卡佧胩开揩锎凯剀垲恺铠慨蒈楷锴忾刊勘龛堪戡坎侃砍莰看阚瞰康慷糠鱇扛亢伉邟囥抗闶炕钪尻考拷栲烤铐犒靠坷苛柯珂科轲疴钶棵颏稞窠颗瞌磕蝌髁壳咳可岢渴克刻客恪课氪骒缂嗑溘锞肯垦恳啃裉吭坑铿空倥崆箜孔恐控抠芤眍口叩扣寇筘蔻刳枯哭堀窟骷苦库绔喾裤酷夸侉垮挎胯跨蒯块快侩郐哙狯脍筷宽髋梡款匡诓哐筐狂诳夼邝圹纩况旷矿贶框眶亏岿悝盔窥奎逵馗喹揆葵暌魁睽蝰夔傀跬匮喟愦愧溃蒉馈匱篑聩坤昆焜琨锟髡醌鲲悃捆阃壸梱困扩括栝蛞阔廓",
            "l": "鄜靓摎樛垃拉啦翋邋旯砬喇剌腊瘌蜡辣来崃徕涞莱铼赉睐赖濑癞籁兰岚拦栏婪阑蓝谰澜褴斓篮镧览揽缆榄漤罱懒烂滥啷郎狼莨廊琅榔稂锒螂朗阆浪蒗捞劳牢唠崂痨铹醪老佬姥栳铑潦涝烙耢酪嫪仂乐叻玏泐勒鳓雷嫘缧檑镭羸耒诔垒傫磊蕾儡肋泪类累酹擂嘞塄棱楞冷愣厘梨狸离莉骊犁喱犂鹂漓缡蓠蜊嫠璃鲡黎篱罹藜黧蠡礼李里俚哩娌逦理锂鲤澧醴鳢力历厉立吏丽利励呖坜沥苈例戾枥疠隶俐俪栎疬荔轹郦栗猁珕砺砾莅唳笠粒粝蛎傈痢詈跞雳溧篥俩奁连帘怜涟莲联裢廉鲢濂臁镰蠊敛琏脸裣蔹练娈炼恋殓链楝潋良凉梁涼椋粮粱墚踉两魉亮谅辆晾量辽疗聊僚寥廖嘹寮撩獠缭燎镣鹩钌蓼了尥料撂咧列劣冽洌埒烈捩猎裂趔躐鬣邻林临啉淋琳粼嶙遴辚霖瞵磷鏻鳞驎麟凛廪懔檩吝赁蔺膦躏拎伶灵囹岭泠苓柃玲瓴凌铃陵棂淩琌绫羚翎聆菱蛉零龄鲮酃领令另呤溜熘刘浏流留琉硫旒遛馏骝榴瘤镏鎏柳绺锍六鹨龙咙泷茏栊珑胧砻笼聋隆癃窿陇垄垅拢娄偻喽蒌楼耧蝼髅嵝搂篓陋漏瘘镂露噜撸卢庐芦垆泸炉栌胪轳鸬舻颅鲈瓐卤虏掳鲁橹镥甪陆侓坴录赂辂渌逯鹿琭禄碌路漉戮辘潞璐簏鹭麓鏴氇驴闾吕侣旅缕履律虑率绿孪峦挛栾鸾脔滦銮卵乱掠略锊抡仑伦囵沦纶轮论捋罗猡脶萝逻椤锣箩骡镙螺倮裸瘰蠃泺洛络荦骆珞落摞漯雒",
            "m": "苾貉妈嬷麻蟆马犸玛码蚂杩祃骂唛傌鬕吗嘛埋霾买荬劢迈麦卖脉颟蛮馒樠瞒鞔鳗满螨曼谩墁幔慢漫缦蔓熳镘邙忙芒盲茫硭莽漭蟒猫毛矛牦茅旄蛑锚髦蝥蟊卯峁泖茆昴铆茂冒贸耄袤帽鄚瑁瞀貌懋么没枚玫眉莓梅媒嵋湄猸楣煤酶镅鹛霉每美浼渼镁妹昧媚寐魅门扪钔闷焖懑们氓虻萌盟甍瞢朦檬礞艨勐猛蒙锰艋蜢懵蠓孟梦咪弥祢迷猕谜醚糜縻麋靡蘼米芈弭洣敉脒眯糸汨宓泌觅秘密幂谧嘧蜜芇眠绵棉免沔黾勉眄娩冕湎缅腼面喵苗描瞄鹋杪眇秒淼渺缈藐邈妙庙咩灭蔑篾蠛民岷旻玟苠珉缗皿闵抿泯闽悯敏湣愍鳘名明鸣茗冥铭鄍溟暝瞑螟酩命谬缪摸谟嫫馍摹模膜麽摩磨蘑魔抹末殁沫茉陌秣莫寞漠蓦貊墨瘼镆默貘耱哞牟侔眸谋鍪某母毪亩牡姆拇木仫目沐坶牧苜钼募墓幕睦慕暮穆渑",
            "n": "拗耏乜拿镎哪内那纳肭娜衲钠捺乃奶艿氖奈柰耐萘鼐囡男侽南难喃遖楠赧揇湳腩蝻婻囔囊馕曩攮孬呶挠猱蛲垴恼脑瑙闹婥淖讷呐呢馁嫩能妮尼坭怩泥倪铌猊霓鲵伲你拟旎昵逆匿溺睨腻拈年鲇鲶黏捻辇撵碾廿念埝娘酿鸟茑袅嬲尿脲捏陧涅聂臬啮嗫镊镍颞蹑孽蘖您宁咛拧狞柠聍凝佞泞甯妞牛忸扭狃纽杻钮农侬哝浓脓弄槈耨奴孥驽努弩胬怒女钕恧衄疟虐暖挪傩诺喏搦锘懦糯恁蔫",
            "o": "噢哦讴欧殴瓯鸥呕偶耦藕怄沤",
            "p": "湴棓琲絣鎞辟鞞萹拚徧骉麃藨穮摽馞鵏吥彷脯尨妑趴啪葩杷爬耙琶筢帕怕拍俳徘排牌箄哌派湃蒎眅潘攀爿柈盘磐蹒蟠坢判泮叛盼畔袢襻乓滂庞逄旁螃耪胖抛脬刨咆庖狍炮袍匏跑泡疱呸胚醅陪培赔锫裴沛佩帔旆珮配辔霈喷盆湓怦抨砰烹嘭芃朋倗堋彭棚傰搒硼蓬鹏澎篷膨蟛捧剻碰丕伾批邳坯披砒铍劈霹皮芘枇毗疲蚍郫陴啤埤椑琵脾罴蜱貔鼙匹仳圮痞癖屁媲睥僻譬片偏犏篇翩骈胼蹁谝骗剽漂缥飘螵瓢殍瞟票嘌嫖氕撇瞥苤姘拼贫嫔频颦品榀牝娉聘乒俜平评凭坪苹郱屏枰洴玶瓶萍鲆钋坡泼颇婆鄱皤叵钷笸迫珀哱破粕魄剖掊裒仆攴扑铺噗鯆匍莆菩葡蒲璞濮镤朴圃埔浦普溥谱氆镨蹼曝",
            "q": "儭琯袷彊湫峤趄瞿七沏妻柒凄栖桤戚萋期欺嘁槭漆蹊亓祁齐圻岐芪其奇歧祈耆脐颀崎淇畦萁骐骑棋琦琪祺蛴旗綦蜞蕲鳍麒乞企屺岂芑启杞起绮綮气讫汔迄弃汽泣契砌荠葺碛器憩掐葜恰洽髂千仟阡扦芊迁佥岍钎牵悭铅谦愆签骞搴褰前钤虔钱钳乾掮箝潜黔浅肷慊遣谴缱欠芡茜倩堑嵌椠歉呛羌戕戗枪跄腔蜣锖锵镪强墙嫱蔷樯抢羟襁炝悄硗跷鄡劁敲锹橇缲蹻乔侨荞桥谯憔鞒樵瞧巧愀俏诮峭窍翘撬鞘切茄且妾怯窃挈惬箧锲亲侵钦衾嵚芩芹秦琴禽勤嗪溱噙擒檎螓锓寝吣沁揿青氢轻倾卿圊清蜻鲭情晴氰擎檠黥苘顷请謦庆箐磬罄跫銎邛穷穹茕筇琼蛩丘邱秋蚯萩楸鳅囚犰求虬泅俅酋逎逑球赇巯遒裘蝤鼽糗区曲岖诎驱屈祛蛆躯蛐趋麯麴黢劬朐鸲渠蕖磲璩蘧氍癯衢蠼取娶龋去阒觑趣悛圈鐉全权诠泉荃拳辁痊铨筌蜷醛鬈颧犬畎绻劝券炔缺瘸却悫雀确阕阙鹊榷逡裙群郄",
            "r": "蚺然髯燃冉苒染瀼禳瓤穰嚷壤攘让荛饶桡扰娆绕惹热人仁壬忍荏稔刃认仞讱任纫妊轫韧饪衽扔仍礽日戎肜狨绒茸荣容嵘溶蓉榕熔蝾镕融瀜冗柔揉糅蹂鞣肉如茹铷儒嚅孺濡薷襦蠕颥汝乳辱鄏入洳溽缛蓐褥阮朊软蕤蕊芮枘蚋锐瑞睿闰润若偌弱鄀婼渃箬",
            "s": "杓偲穇懆摻綝匙輴鏸葚仨撒洒卅飒脎萨塞腮噻鳃赛三叁毵伞散糁馓桑嗓搡磉颡丧搔骚缫臊鳋扫嫂埽瘙色涩啬铯琗瑟穑森僧杀沙纱砂莎铩痧裟鲨傻唼啥歃煞霎筛晒山彡删杉芟姗衫钐埏珊舢跚煽潸膻闪陕讪汕疝苫扇善骟鄯缮嬗擅膳赡蟮鳝伤殇商觞墒熵裳垧晌赏上尚绱捎梢烧稍筲艄蛸勺芍韶少劭卲邵绍哨潲奢猞赊畲舌佘蛇舍厍设社射涉赦慑摄滠麝申伸身侁呻绅诜珅娠砷深神沈审哂矧谂婶渖肾甚胂渗慎椹蜃升生声牲胜笙甥绳省眚圣晟盛剩嵊尸失师诗邿施狮湿酾十什石时识实拾蚀食史矢使始驶士氏世仕市示式事侍势视试饰室是柿适轼逝谥释筮誓奭收手守首艏寿受狩兽售授绶瘦书殳抒纾叔枢陎姝倏殊梳淑菽鄃疏舒摅毹输蔬秫孰赎塾熟璹暑黍署鼠蜀薯曙术戍束沭述树竖恕庶数腧墅漱澍刷唰耍衰摔甩帅蟀闩拴栓涮双霜孀爽谁水税睡吮顺舜瞬说妁烁朔铄硕嗍搠蒴嗽槊厶丝司私咝思鸶斯缌蛳锶嘶撕澌死巳四寺汜伺似佀兕姒祀泗饲驷俟笥耜嗣肆騃忪松娀凇崧淞菘嵩怂悚耸竦讼宋诵送颂嗖搜溲馊飕锼艘螋叟嗾瞍擞薮苏酥稣俗玊夙诉肃涑素速粟谡嗉塑愫溯僳蔌觫璛簌狻酸蒜算虽荽眭葰睢濉绥隋随髓岁祟谇遂碎隧燧穗邃孙狲荪飧损笋隼榫唆娑挲桫梭睃嗦羧蓑缩所唢索琐锁厦莘疋栅属",
            "t": "俶沓呔焘调钭囤她苕他它趿铊塌溻塔獭鳎挞闼遢榻踏蹋骀胎台邰抬苔炱跆鲐薹太汰态肽钛泰酞坍贪摊滩瘫坛昙谈郯覃痰锬谭潭檀忐坦袒钽毯叹炭探碳汤铴羰镗饧唐堂棠塘搪溏瑭樘膛糖螗螳醣帑倘淌傥耥躺烫趟弢涛绦掏慆滔韬饕洮逃桃陶啕梼淘萄檮鼗讨套忑忒特铽慝疼腾誊滕藤剔梯锑踢绨珶啼提缇鹈漽题蹄醍体屉剃倜悌涕逖惕替裼嚏天添田恬畋甜填阗忝殄淟琠腆舔掭佻挑祧条迢笤龆蜩髫鲦窕眺粜跳贴萜铁帖餮厅汀听烃廷亭庭莛停婷葶蜓霆挺梃珽艇通嗵仝同佟彤茼桐砼铜童酮僮潼瞳统捅桶筒恸痛偷头投骰透凸秃突图凃徒涂荼途屠酴土吐钍兔堍菟湍团抟疃彖推颓腿退煺蜕褪吞暾屯饨豚臀氽乇托拖脱驮佗陀坨沱驼柁砣鸵跎酡橐鼍妥庹椭拓柝唾箨",
            "u": "",
            "v": "",
            "w": "哇娃挖洼娲蛙瓦佤袜腽歪崴外弯剜湾蜿豌丸纨芄完玩顽烷宛挽晚婉惋绾脘菀琬皖畹碗万腕汪亡王网往枉罔惘辋魍妄忘旺望危威偎逶隈葳微煨薇巍为韦围帏沩违闱桅涠唯帷惟维嵬湋潍伟伪尾纬苇委炜玮洧娓诿萎隗猥蒍痿艉韪鲔卫未位味畏胃軎尉谓喂渭猬蔚慰魏温瘟文纹闻蚊阌雯刎吻紊稳问汶璺翁嗡蓊瓮蕹挝倭涡莴喔窝蜗我沃肟卧偓幄握渥硪斡龌乌圬污邬呜巫屋诬钨无毋吴吾芜梧浯蜈鼯五午仵伍坞妩庑忤怃迕武侮捂牾珷鹉舞兀勿务戊阢扤杌芴物误悟晤焐婺痦骛雾寤鹜鋈",
            "x": "扱滀滈觟郇叚徦噱釐棲荨繻姺宿潚圩夕兮汐西吸希昔析矽穸郗唏奚娭息晞浠牺悉惜欷淅烯硒菥傒晰犀稀粞翕舾溪皙锡僖熄熙蜥嘻嬉膝樨歙熹羲螅燨蟋谿雟醯曦鼷习席袭觋媳隰檄洗玺徙铣喜葸屣蓰禧鱚戏系饩细郤阋舄隙禊虾瞎匣侠狎峡柙狭硖遐暇瑕辖霞黠下吓夏罅仙先纤氙祆籼莶掀跹酰锨鲜暹伭闲弦贤咸涎娴舷衔痫鹇嫌冼显险猃蚬筅跣藓燹县岘苋现线限宪陷馅缐羡献腺線霰乡芗相香厢湘缃葙箱襄骧镶详庠祥翔享响饷飨想鲞向巷项象像橡蟓枭削哓枵骁宵消绡逍萧硝销潇箫霄魈嚣崤淆小晓筱孝肖哮效校笑啸些楔歇蝎协邪胁偕斜谐携勰撷缬鞋写泄泻绁卸屑偰械亵渫谢榍榭廨懈獬薤邂燮瀣蟹躞心邤忻芯辛昕欣锌新歆薪馨鑫囟信衅兴星惺猩腥刑邢形陉型硎醒擤杏姓幸性荇婞悻涬凶兄匈芎讻汹胸訩雄熊休修咻庥羞鸺貅馐髹朽秀岫绣袖琇锈溴戌盱胥须訏顼虚欻嘘需墟俆徐许诩栩珝糈旭序叙恤洫勖绪续酗婿溆絮嗅煦蓄蓿轩宣谖喧揎萱暄煊睻儇玄玹痃悬旋漩璇选烜癣泫炫绚眩铉琄渲楦碹镟靴薛穴学泶踅雪鳕血谑勋埙熏窨獯薰曛醺寻巡旬驯询峋恂洵浔紃荀珣循鄩鲟训讯汛迅徇逊殉巽蕈吁",
            "y": "叆媕闇晻墺訑侥俓妜鐍剡涒涴琟郚丫压呀押鸦桠鸭牙伢岈芽厓琊蚜崖涯睚衙哑痖雅亚讶迓垭娅砑氩揠咽恹烟胭崦淹焉菸阉湮腌傿鄢嫣延闫严妍芫言岩沿炎研盐阎筵蜒颜檐兖奄俨匽衍偃厣掩眼琰罨演魇鼹厌彦砚唁宴晏艳验谚堰焰焱雁滟酽谳燕赝嬿央泱殃秧鸯鞅扬羊阳旸杨炀佯疡徉洋烊崵蛘暘卬仰养氧痒怏恙样漾幺夭吆妖腰邀爻尧肴姚轺珧窑傜谣徭摇遥瑶繇鳐杳咬窈舀崾药要鹞曜耀椰噎爷耶揶铘也冶野业叶曳页邺夜晔烨液谒腋靥一伊衣医依祎咿猗铱壹揖欹漪噫黟仪圯夷沂诒宜怡迤饴咦姨荑贻眙胰酏痍移詒遗颐疑嶷彝乙已以钇佁矣苡舣蚁倚椅旖义亿弋刈忆艺仡议亦屹异佚呓役抑译邑佾峄怿易绎诣驿奕弈疫羿轶悒挹益谊埸翊翌逸意溢缢肄裔瘗蜴毅熠镒劓殪燚薏翳翼臆癔镱繶瀷懿因阴姻洇茵荫音殷氤铟喑堙吟垠狺珢寅淫银鄞夤龈霪尹引吲饮蚓隐瘾印茚胤应英莺婴渶瑛嘤撄缨罂樱璎鹦膺鹰迎茔盈荥荧莹萤营萦楹滢蓥潆蝇嬴赢瀛郢颍颖影瘿映硬媵哟唷佣拥痈邕庸鄘雍墉慵壅臃鳙饔喁永甬咏泳俑勇涌恿蛹踊用优忧攸呦幽悠尢尤由犹邮油柚疣莜莸铀蚰游鱿猷蝣友有卣酉羑莠铕牖黝又右幼佑侑囿宥祐诱蚴釉鼬纡迂淤渝瘀于予邘余妤欤玙於盂臾鱼俞禺竽舁娱狳谀馀渔萸隅雩嵛愉揄腴逾愚榆瑜虞觎窬舆蝓与伛宇屿羽雨俣禹语圄圉庾鄅萭瘐窳龉玉驭聿芋妪饫育郁彧昱狱峪浴钰预域欲淯谕阈喻寓御琙裕遇鹆愈煜蓣誉毓蜮豫燠鹬鬻鸢冤眢鸳渊箢元员园沅垣爰原圆袁援缘鼋塬源猿辕橼螈远苑怨院媛瑗愿曰约月刖礿岳钥悦钺阅跃粤越樾龠瀹黦云匀妘沄纭芸昀郧耘氲允狁陨殒孕运郓恽晕酝愠缊韫韵熨蕴",
            "z": "嶒蹅茝僝长鼌胵絺紬搊偢骴薋泚跐酢欑亶喋篸剸匝咂拶杂砸灾甾哉栽菑宰载崽再在糌簪咱昝攒儹趱暂赞錾瓉瓒赃臧驵奘脏葬遭糟凿早枣蚤澡藻灶皂唣造噪燥躁则择泽责迮啧帻笮舴箦赜仄昃贼怎谮增憎缯罾锃甑赠吒咋哳喳揸渣楂齄齇扎札轧闸铡眨砟乍诈咤炸痄蚱榨斋摘宅翟窄债砦寨瘵沾毡旃粘詹谵瞻鳣斩展盏崭搌辗占佔战栈站绽湛蘸张章鄣嫜彰漳獐樟璋蟑仉涨掌丈仗帐杖胀账障嶂幛瘴钊招昭啁找沼召兆诏赵笊棹照罩肇肈蜇遮折哲辄蛰谪摺磔辙者锗赭褶这柘浙蔗鹧贞针侦浈珍桢真砧祯斟甄蓁榛箴臻鍼诊枕胗轸畛疹缜稹圳阵鸩振朕赈镇震争姃征怔峥挣狰钲睁铮筝蒸徵拯整正证诤郑帧政症之支卮汁芝吱枝知织肢栀祗胝脂臸蜘执侄直值埴职植殖絷跖摭踯止只旨址沚纸芷祉咫指枳轵趾黹酯至志忮豸制帙帜治炙质郅峙栉陟挚晊桎秩致贽轾掷痔窒鸷彘智滞痣蛭骘稚置雉膣觯踬瓆中妐忠终盅钟舯衷锺螽肿种冢踵仲众重州舟诌周洲郮粥妯轴碡肘帚纣咒宙绉昼胄荮皱酎骤籀朱侏诛邾洙茱株珠诸猪铢蛛槠潴橥竹竺烛逐舳瘃躅主拄罜渚煮嘱麈瞩伫住助苎杼注贮驻柱炷祝疰著蛀筑註铸箸翥抓爪拽专砖颛转啭赚撰篆馔妆庄桩装壮状幢撞戅隹追骓椎锥坠缀惴缒赘肫窀谆准卓拙倬捉桌棁涿琸灼茁斫浊浞诼酌啄着琢禚擢濯镯灂仔孜兹咨姿茲赀资淄缁谘孳嵫滋辎觜趑锱龇髭鲻籽子姊秭耔笫梓紫滓訾字自恣渍眦宗综棕腙踪鬃总偬纵粽邹驺诹郰陬鄹鲰走奏揍租菹足卒族傶镞诅阻组俎珇祖躜缵纂钻攥嘴最罪蕞醉尊遵樽鐏鳟僔撙昨左佐作坐阼怍柞祚胙唑座做"
        };
    }
    pinyinOrderService.prototype._compareCharactor = function (charactor1, charactor2) {
        if (charactor1 === charactor2) {
            return 0;
        }
        else {
            return charactor1 < charactor2 ? -1 : 1;
        }
    };
    /**
     * a,b是数组下标
     * 将array[a]与array[b]交换
     */
    pinyinOrderService.prototype._exchange = function (array, a, b) {
        var c = array[a];
        array[a] = array[b];
        array[b] = c;
    };
    /**
     * 将一个string倒转
     * hello->olleh
     */
    pinyinOrderService.prototype._reverse = function (string) {
        var arr = string.split("");
        arr.reverse();
        return arr.join("");
    };
    /**
     * 比较两个word的第一个字的unicode
     */
    pinyinOrderService.prototype._compareCharCode = function (a, b) {
        if (a.charCodeAt(0) > b.charCodeAt(0)) {
            return 1;
        }
        else if (a.charCodeAt(0) < b.charCodeAt(0)) {
            return -1;
        }
        else {
            return 0;
        }
    };
    pinyinOrderService.prototype.sort = function (array) {
        /**
         * 将给定的数组进行元素排序
         * 注意：不会产生新的数组，会在原数组上排序
         * @returns sortedArray
         */
        for (var i = 0; i < array.length; i++) {
            var k = i;
            for (var j = i; j < array.length; j++) {
                if (this.compareWord(array[j], array[k]) < 0) {
                    k = j;
                }
            }
            this._exchange(array, i, k);
        }
        return array;
    };
    pinyinOrderService.prototype.compareWord = function (word1, word2) {
        /**
        * @description
        * 根据拼音排序，比较两个单词，与compareInPinYin不同的是，本方法比较的是整个单词
        * 把单词的每一个字的首字母拿出来进行比对，同音的情况，两个字的小于三个字
        * @returns
        * 如果word1排在word12前面，返回-1，反之返回1，相等返回0
        * @example
        * 曹山===曹珊===曹水（都是C,S）
        * 曹山<曹山山（两个字的小于三个字的）
        */
        if (!word1) {
            return 1;
        }
        if (!word2) {
            return -1;
        }
        if (!word1 && !word2) {
            return 0;
        }
        var weightMagicNumber = 100; //权重值
        var weightOfWord1 = 1; //第一个词的初始权重值
        var weightOfWord2 = 1; //第二个词的初始权重值
        //传入的两个字符串长度不同，将i设置为最长的那个数字
        var i = word1.length > word2.length ? word1.length : word2.length;
        var returnValueBetweenFirstCharactor = this.compareInPinYin(word1[0], word2[0]);
        if (returnValueBetweenFirstCharactor != 0) {
            //如果第一个字不相等，则直接返回结果
            return returnValueBetweenFirstCharactor;
        }
        for (var j = 0; j < i; j++) {
            if (!word1[j]) {
                weightOfWord2 += weightOfWord2 + Math.pow(weightMagicNumber, (i - j));
                break;
            }
            if (!word2[j]) {
                weightOfWord1 += weightOfWord1 + Math.pow(weightMagicNumber, (i - j));
                break;
            }
            if (this.compareInPinYin(word1[j], word2[j]) > 0) {
                weightOfWord1 += weightOfWord1 + Math.pow(weightMagicNumber, (i - j));
            }
            else if (this.compareInPinYin(word1[j], word2[j]) < 0) {
                weightOfWord2 += weightOfWord2 + Math.pow(weightMagicNumber, (i - j));
            }
        }
        if (weightOfWord1 > weightOfWord2) {
            return 1;
        }
        else if (weightOfWord1 < weightOfWord2) {
            return -1;
        }
        else {
            return 0;
        }
    };
    pinyinOrderService.prototype.compareInPinYin = function (charactor1, charactor2) {
        /**
         * @description
         * 根据拼音排序，比较两个字符串或者字符，如果是字符串，只比较第一个字符；
         * 英文字符排在汉字前面,
         * 特殊字符排在最后
         * 数字<英文<汉字<特殊字符
         * @returns
         * 如果charactor1排在charactor2前面，返回-1，反之返回1，相等返回0
         */
        var sourceCharactorPinyin = this.getCharactorFirstPinYinWord(charactor1);
        var targetCharactorPinyin = this.getCharactorFirstPinYinWord(charactor2);
        if (sourceCharactorPinyin && targetCharactorPinyin) {
            var pinyinCompareResult = this._compareCharactor(sourceCharactorPinyin, targetCharactorPinyin);
            if (pinyinCompareResult == 0) {
                return this._compareCharCode(charactor1, charactor2);
            }
            return pinyinCompareResult;
        }
        else if (!sourceCharactorPinyin && targetCharactorPinyin) {
            return 1;
        }
        else if (sourceCharactorPinyin && !targetCharactorPinyin) {
            return -1;
        }
        else {
            return 0;
        }
    };
    pinyinOrderService.prototype.getCharactorFirstPinYinWord = function (charactor) {
        /**@description
         * 得到一个字符的拼音首字母
         * @param 字符串或者字
         * @returns
         * 如果是汉字，返回拼音首字母，
         * 如果是英文，返回首字母的大写，
         * 如果是特殊字符，返回false
         */
        for (var key in this.dic) {
            if (this.dic[key].indexOf(charactor[0]) >= 0) {
                return key;
            }
        }
        if (("A" <= charactor[0] && charactor[0] <= "Z") || ("a" <= charactor[0] && charactor[0] <= "z") || "0" <= charactor[0] && charactor[0] <= "9") {
            return charactor[0].toUpperCase();
        }
        return false;
    };
    /**
     * checkCharactorIsChinese
     * @description
     * 输入一个参数，返回这个参数的第一个字符是不是汉字
     *
     * 注意：只判断第一个字符。
     * “I am 超级玛丽”，返回false，第一个字符为“I”
     * “超级玛丽 is me”，返回true，第一个字符为“超”
     */
    pinyinOrderService.prototype.checkCharactorIsChinese = function (word) {
        //在unicode编码中，汉字的第一个字符位置是0x4e00，转换为十进制是19968
        //最后一个汉字位置是0x9fff，转换为十进制是40959
        //由于操作系统字库的原因，其实从19968到40959之间有很多字是显示不出来的，会显示为一个方块
        var charactor = word.toString();
        return 19968 <= charactor.charCodeAt(0) && charactor.charCodeAt(0) <= 40959;
    };
    pinyinOrderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], pinyinOrderService);
    return pinyinOrderService;
}());

//# sourceMappingURL=pinyinOrder.service.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appCustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
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



var appCustomerService = /** @class */ (function () {
    function appCustomerService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.api = {
            /**
             * 登陆
             * post:
             * body:{phone,password,mktId}
             * return {customer,token}
             */
            login: "/customer/login",
            /**
             * 忘记密码
             * post:
             * body:customer
             */
            forgotPassword: '/app/customer/forgot-password',
            /**
             * get
             * ?mktId&phone
             */
            findbyMobi: "/findbyMobi",
            /**
             * get
             * ?mktId&customerId
             *
             */
            customerDetail: '/app/customer/detail',
            /**
             * 验证customer密码是否正确
             * post
             * body:customer
             */
            authPassword: '/app/customer/auth-password',
            /**
             * 修改手机
             * get
             * ?newPone&authcode&mktId&customerId
             */
            modifyPhone: '/app/customer/modify-phone',
            /**
             * post
             * body:Customer,
             * ?mktId
             */
            signup: '/customer/signup',
            /**修改登录密码 */
            modifyPassword: '/app/customer/modifyPassword',
            /**
            * 刷新用户设备id get: ?registrationId&customerId&mktId
            */
            updateRegistrationId: "/app/customer/update-registrationId",
        };
    }
    appCustomerService.prototype.updateRegistrationId = function (registrationId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.updateRegistrationId, { params: { registrationId: registrationId, customerId: this.storage.customer.id } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appCustomerService.prototype.findbyMobi = function (mktId, phone) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.findbyMobi, { params: { mktId: mktId, phone: phone } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appCustomerService.prototype.modifyPhone = function (oldPhone, newPhone, authCode, mktId, customerId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.modifyPhone, { params: { oldPhone: oldPhone, newPhone: newPhone, authCode: authCode, mktId: mktId, customerId: customerId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appCustomerService.prototype.authPassword = function (customer) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Post(this.api.authPassword, customer)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appCustomerService.prototype.customerDetail = function (customerId, mktId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mktId = this.storage.customer.mktId;
                        return [4 /*yield*/, this.http.Get(this.api.customerDetail, { params: { customerId: customerId, mktId: mktId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.customer];
                }
            });
        });
    };
    appCustomerService.prototype.modifyPassword = function (oldPassword, newPassword) {
        var customerId = this.storage.customer.id;
        this.http.Get(this.api.modifyPassword, { params: { oldPassword: oldPassword, newPassword: newPassword, customerId: customerId } });
    };
    appCustomerService.prototype.signup = function (newCustomer, authcode) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Post(this.api.signup, newCustomer, { params: { authcode: authcode } })];
                    case 1:
                        result = _a.sent();
                        if (result.customer) {
                            return [2 /*return*/, result.customer];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    appCustomerService.prototype.forgotPassword = function (modifyCustomer, authcode) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.Post(this.api.forgotPassword, modifyCustomer, { params: { authcode: authcode } })];
            });
        });
    };
    appCustomerService.prototype.login = function (userName, password, mktId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Post(this.api.login, { userName: userName, password: password, mktId: mktId })];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            return [2 /*return*/, result];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    appCustomerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__http_service__["a" /* MyHttpService */], __WEBPACK_IMPORTED_MODULE_1__storage_service__["a" /* StorageService */]])
    ], appCustomerService);
    return appCustomerService;
}());

//# sourceMappingURL=app_customer.service.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return roleType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_platform_framework_entity__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_customer_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_member_account_service__ = __webpack_require__(30);
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






var roleType;
(function (roleType) {
    roleType[roleType["cusType"] = 0] = "cusType";
    roleType[roleType["empType"] = 1] = "empType";
    roleType[roleType["memType"] = 2] = "memType";
})(roleType || (roleType = {}));
var CommonService = /** @class */ (function () {
    function CommonService(http, storage, cusService, memService) {
        this.http = http;
        this.storage = storage;
        this.cusService = cusService;
        this.memService = memService;
        this.phoneReg = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;
        /**密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符*/
        this.passWordReg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
        this.defaultUserAvatar = "/assets/images/123.jpg";
        this.commonApi = {
            getQrcode: "/common/qrcode",
            uploadImage: "/common/upload-image",
            uploadFile: "/common/upload/file",
            localCityJson: '/assets/city.json',
            singleTableQuery: "/app/stq/entity/query"
        };
        /**获取用户身份 */
        this.member = this.storage.member;
        this.customer = this.storage.customer;
    }
    /**
    .get("/common/qrcode", common.getQrcode)
    .post("/common/qrcode", common.getQrcode)
    .get("/wechat/ticket", common.getTicket)
    .get("/common/wechat/ticket", common.getTicket)
    .post("/common/upload/image", common.uploadBase64Test)
    .get("/common/send-auth-code", common.sendAuthCode);
   */
    /**单表查询 */
    CommonService.prototype.singleTableQuery = function (className, queryObject, pageParameter) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameter, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParameter = this.getQueryParameter(queryObject);
                        queryParameter.pageParameter = pageParameter;
                        return [4 /*yield*/, this.http.Post(this.commonApi.singleTableQuery, queryParameter, { params: { className: className } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.result];
                }
            });
        });
    };
    CommonService.prototype.getQueryParameter = function (queryObject, pageParameter) {
        var conditions = [];
        if (Array.isArray(queryObject)) {
            conditions = __WEBPACK_IMPORTED_MODULE_3__share_platform_framework_entity__["b" /* QueryObject */].Or(queryObject);
        }
        else {
            conditions = __WEBPACK_IMPORTED_MODULE_3__share_platform_framework_entity__["b" /* QueryObject */].toQueryContions(Object.assign(queryObject, new __WEBPACK_IMPORTED_MODULE_3__share_platform_framework_entity__["b" /* QueryObject */]()));
        }
        console.log(conditions);
        return { pageParameter: pageParameter ? pageParameter : new __WEBPACK_IMPORTED_MODULE_3__share_platform_framework_entity__["a" /* PageParameter */](), queryAttributes: [] };
    };
    CommonService.prototype.checkPhone = function (phone) {
        return this.phoneReg.test(phone);
    };
    CommonService.prototype.checkPassword = function (password) {
        return this.passWordReg.test(password);
    };
    CommonService.prototype.localCityJson = function () {
        return this.http.localGetJSON(this.commonApi.localCityJson);
    };
    CommonService.prototype.getQrcode = function (url) {
        return this.http.Get(this.commonApi.getQrcode, { params: { url: url } });
    };
    CommonService.prototype.uploadImage = function (base64) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Post(this.commonApi.uploadImage, { base64: base64 })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.result];
                }
            });
        });
    };
    /**
     *
     * @param url   file
     *
     * @param outputFormat string
     *
     * 将文件转成base64
     */
    CommonService.prototype.compressBase64 = function (base64, maxsize, outputFormat) {
        if (maxsize === void 0) { maxsize = 40000; }
        if (outputFormat === void 0) { outputFormat = "image/png"; }
        return new Promise(function (resolve, reject) {
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");
            var img = new Image();
            img.crossOrigin = "Anonymous";
            img.onload = function () {
                var width = img.width;
                var height = img.height;
                var compress = 1;
                var rate = 1;
                if (width * height > maxsize) {
                    rate = Math.ceil(width * height / 40000);
                }
                compress = 1 / rate;
                canvas.width = width * compress;
                canvas.height = height * compress;
                ctx.drawImage(img, 0, 0, width, height, 0, 0, width * compress, height * compress);
                var compressData = canvas.toDataURL(outputFormat);
                resolve(compressData);
            };
            img.src = base64;
        });
    };
    CommonService.prototype.convertFileToBase64 = function (file) {
        var reader = new FileReader();
        return new Promise(function (resolve, reject) {
            reader.onload = function (e) {
                var base64 = e.target["result"];
                resolve(base64);
            };
            reader.readAsDataURL(file);
        });
    };
    // 自动化创建文件文本框,并选择读取base64,可以自定义压缩
    CommonService.prototype.selectFile = function () {
        return new Promise(function (resolve) {
            var fileInputEle = document.createElement("input");
            fileInputEle.type = "file";
            var reader = new FileReader();
            reader.onload = function (event) {
                var base64 = event.target["result"];
                resolve(base64);
            };
            fileInputEle.onchange = function (event) {
                reader.readAsDataURL(fileInputEle.files[0]);
            };
            fileInputEle.click();
        });
    };
    CommonService.prototype.getMenuTree = function (menus) {
        var treeMenus = [];
        /** 扫出顶级菜单,若存在下级菜单递归扫下级菜单 */
        if (menus.some(function (menu) { return menu.parentId == 0 || !menu.parentId; })) {
            treeMenus = menus.filter(function (menu) { return menu.parentId == 0 || !menu.parentId; });
            for (var _i = 0, treeMenus_1 = treeMenus; _i < treeMenus_1.length; _i++) {
                var menu = treeMenus_1[_i];
                menu.children = this.getMenuChildren(menu, menus);
            }
            return treeMenus;
        }
    };
    CommonService.prototype.getMenuChildren = function (parentMenu, menus) {
        var children = menus.filter(function (menu) { return menu.parentId == parentMenu.menuId; });
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var submenu = children_1[_i];
            submenu.children = this.getMenuChildren(submenu, menus);
        }
        return children;
    };
    CommonService.prototype.getModuleGroup = function (modules) {
        var groups = [];
        modules.forEach(function (modu) {
            var isChild = modules.find(function (mcurrent) { return mcurrent.menuId == modu.menuId && modu.menuId != 0; });
            /**
             * 属于子模块并且子模块已存在分组中
             * 此时
             *
             */
            var existGroup = groups.find(function (group) { return group.menuId == modu.parentId; });
            groups.find(function (group) {
                // console.log(group.id, modu.id);
                return group.menuId == modu.menuId;
            });
            // ), groups)};
            if (isChild && existGroup) {
                // console.log(`pushc child`);
                existGroup.children.push({
                    text: modu.text,
                    label: modu.text,
                    menuId: modu.menuId,
                    link: modu.link,
                    checked: !!modu.checked,
                    icon: modu.icon
                });
            }
            else {
                groups.push({
                    text: modu.text,
                    menuId: modu.menuId,
                    checked: !!modu.checked,
                    icon: modu.icon,
                    checkdAll: false,
                    children: []
                });
                console.log(groups);
            }
        });
        return groups;
    };
    CommonService.prototype.getCheckedMenuIds = function (groups) {
        console.log(groups);
        var gcMenuIds = [];
        groups.forEach(function (group) {
            if (group.checked || group.indeterminate) {
                gcMenuIds.push(group.menuId);
                if (group.children) {
                    group.children.forEach(function (menu) {
                        menu.checked ? gcMenuIds.push(menu.menuId) : '';
                    });
                }
            }
        });
        return gcMenuIds;
    };
    CommonService.prototype.menuIdsToMenus = function (menuIds, menus) {
        return menuIds.filter(function (id) { return id; }).map(function (id) { return menus.find(function (menu) { return menu.menuId == id; }); });
    };
    CommonService.prototype.getRole = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.member) {
                    if (this.member.customerId == this.customer.id) {
                        return [2 /*return*/, roleType.memType];
                    }
                    else {
                        return [2 /*return*/, roleType.empType];
                    }
                }
                else {
                    return [2 /*return*/, roleType.cusType];
                }
                return [2 /*return*/];
            });
        });
    };
    /**跟新缓存 */
    CommonService.prototype.updateSto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.storage.customer) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.cusService.customerDetail(this.storage.customer.id)];
                    case 1:
                        result = _b.sent();
                        this.storage.customer = result;
                        _b.label = 2;
                    case 2:
                        if (!this.storage.customer.memberId) return [3 /*break*/, 4];
                        _a = this.storage;
                        return [4 /*yield*/, this.memService.memberDetail()];
                    case 3:
                        _a.member = _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        this.storage.member = {};
                        _b.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* MyHttpService */], __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_4__app_customer_service__["a" /* appCustomerService */],
            __WEBPACK_IMPORTED_MODULE_5__app_member_account_service__["a" /* appMemberAccountService */]])
    ], CommonService);
    return CommonService;
}());

//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appProductOrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(369);
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




var appProductOrderService = /** @class */ (function () {
    function appProductOrderService(http, sto, httpClient) {
        this.http = http;
        this.sto = sto;
        this.httpClient = httpClient;
        this.api = {
            /**
             * 创建订单
             * post
             * body:order
             */
            orderCreate: '/app/order/orderCreate',
            /**
             * post
             * body:TempOrder
             */
            orderUpload: '/app/order/upload',
            orderDowload: '/app/order/download',
            /**
             * 在线支付订单
             * get
             * ?orderId&memberId&mktId
             */
            onlinePayOrder: '/app/order/online-pay-order',
            /**
             * get
             * 推送订单给指定好友
             * ?orderId&memberId&fromMemberId
             */
            sendOrderToMember: '/app/order/send-order-to-member',
            /**
             * 订单作废
             * get
             * ?orderId&memberId&mktId
             */
            orderDisabled: '/app/order/disabled',
            /**
             * 订单详情
             *
             * ?orderId&mktId
             * return {order}
             */
            orderDetail: '/app/order/detail',
            /**
             * get
             * ?mktId&memberId
             */
            productList: '/app/order/list',
            /**
             * 列出所有市场分类指定parentId的分类
             * get
             * ?mktId&parentId
             */
            productCatList: '/app/order/productCat/list',
            /**
             * 赊销申请
             * get
             * ?orderId&fromMemberId&toMebmerId
             */
            debtRequest: '/app/order/debt-request',
            /**
             * 赊账同意
             * get
             * ?orderId&memberId&mktId
             *
             */
            debtAgree: '/app/order/debt-agree',
            /**
             * 拒绝赊账
             * ?orderId&memberId&mktId
             */
            debtRefuse: '/app/order/debt-refuse',
            /**
                    * 创建产品 post body:Product
                    */
            productCreate: "/app/order/product/create",
            /**
             * 更新产品 post body:Product
             */
            productUpdate: "/app/order/product/update",
            /**
             * 删除产品 get ?mktId&productId
             */
            productDel: "/app/order/product/del",
            /**
                     * 交易区列表 get ?mktId
                     */
            txnList: "/app/order/txn/list",
            /**
                     * get ?mktId&memberId&status  根据不同状态刷新列表  使用中 停用
                     */
            productListByStatus: "/app/order/product/list-by-status",
            /**
            * get ?mktId&memberId&keyword  根据关键字搜索
            */
            productListByKeyword: "/app/order/product/list-by-keyword",
            /**
             *
             */
            writeBuyerInfo: "/app/order/writeBuyerInfo",
            /**
            * 交易分区
            */
            list: "/app/order/txn/list",
            /**
             * 上传订单
             */
            upload: "/app/order/upload",
            /**
            * 订单下载列表
            */
            downloadList: '/app/order/download/list',
            /**
             * 订单下载列表
             */
            download: '/app/order/tempOrderQuery',
            /**
              *  查询买家信用
              */
            qryBuyerCredit: '/app/sellOnCredit/qryBuyerCredit',
            /**
              *  是否同意赊销
              */
            changeStatus: '/app/order/changeStatus',
            /**
             * 查询订单状态
             */
            queryOrderStatus: '/app/order/queryOrderStatus',
            /**
             * 买家拿订单类型
             */
            exeQCode: '/app/order/exeQCode',
            /**
             * 查询订单详情
             */
            getOrderDetail: '/app/order/getOrderDetail',
            /**
             * 支付
             */
            orderPay: '/app/order/orderPay',
            /**
              * 赊销
              */
            sellOnCredit: '/app/sellOnCredit/orderPay'
        };
    }
    appProductOrderService.prototype.sellOnCredit = function (orderPayRq) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Post(this.api.sellOnCredit, orderPayRq)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appProductOrderService.prototype.orderPay = function (orderPayRq) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Post(this.api.orderPay, orderPayRq)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appProductOrderService.prototype.getOrderDetail = function (orderNo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.getOrderDetail, { params: { orderNo: orderNo } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    // getOrderDetail(orderNo: string) {
    //     return this.httpClient.get(this.api.getOrderDetail, { params: { orderNo } }).subscribe(rtn => { return rtn })
    // }
    /**
      *  查询买家信用
      */
    appProductOrderService.prototype.exeQCode = function (base64Str) {
        return __awaiter(this, void 0, void 0, function () {
            var customerId, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        customerId = this.sto.customer.id;
                        return [4 /*yield*/, this.http.Get(this.api.exeQCode, { params: { base64Str: base64Str, customerId: customerId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appProductOrderService.prototype.qryBuyerCredit = function (orderNo) {
        return __awaiter(this, void 0, void 0, function () {
            var mktId, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mktId = this.sto.market.mktId;
                        return [4 /*yield*/, this.http.Get(this.api.qryBuyerCredit, { params: { orderNo: orderNo, mktId: mktId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
      * 查询订单状态
      */
    appProductOrderService.prototype.querOrderStatus = function (orderNo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.queryOrderStatus, { params: { orderNo: orderNo } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
      *  是否同意赊销
      */
    appProductOrderService.prototype.changeStatus = function (orderNo, status) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.changeStatus, { params: { orderNo: orderNo, status: status } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appProductOrderService.prototype.download = function (orderNo) {
        return __awaiter(this, void 0, void 0, function () {
            var mktId, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mktId = this.sto.market.mktId;
                        return [4 /*yield*/, this.http.Get(this.api.downloadList, { params: { mktId: mktId, orderNo: orderNo } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appProductOrderService.prototype.downloadList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mktId, memberId, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mktId = this.sto.market.mktId;
                        memberId = this.sto.member.id;
                        return [4 /*yield*/, this.http.Get(this.api.download, { params: { mktId: mktId, memberId: memberId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appProductOrderService.prototype.upload = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Post(this.api.upload, order)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appProductOrderService.prototype.list = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mktId, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mktId = this.sto.market.mktId;
                        return [4 /*yield*/, this.http.Get(this.api.list, { params: { mktId: mktId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appProductOrderService.prototype.writeBuyerInfo = function (orderNo, businessType, memberId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        memberId = this.sto.customer.memberId;
                        return [4 /*yield*/, this.http.Get(this.api.writeBuyerInfo, { params: { businessType: businessType, memberId: memberId, orderNo: orderNo } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appProductOrderService.prototype.productListByKeyword = function (keyword, mktId, memberId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mktId = this.sto.customer.mktId;
                        memberId = this.sto.customer.memberId;
                        return [4 /*yield*/, this.http.Get(this.api.productListByKeyword, { params: { keyword: keyword, mktId: mktId, memberId: memberId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.products];
                }
            });
        });
    };
    appProductOrderService.prototype.productListByStatus = function (status, mktId, memberId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mktId = this.sto.customer.mktId;
                        memberId = this.sto.customer.memberId;
                        return [4 /*yield*/, this.http.Get(this.api.productListByStatus, { params: { status: status, mktId: mktId, memberId: memberId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.products];
                }
            });
        });
    };
    appProductOrderService.prototype.txnList = function (mktId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mktId = this.sto.customer.mktId;
                        return [4 /*yield*/, this.http.Get(this.api.txnList, { params: { mktId: mktId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.areas];
                }
            });
        });
    };
    appProductOrderService.prototype.productDel = function (productId, mktId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mktId = this.sto.customer.mktId;
                        return [4 /*yield*/, this.http.Get(this.api.productDel, { params: { productId: productId, mktId: mktId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appProductOrderService.prototype.productUpdate = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Post(this.api.productUpdate, product)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appProductOrderService.prototype.productCreate = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        product.mktId = this.sto.customer.mktId;
                        return [4 /*yield*/, this.http.Post(this.api.productCreate, product)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appProductOrderService.prototype.orderCreate = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Post(this.api.orderCreate, order)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appProductOrderService.prototype.orderUpload = function (tempOrder) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Post(this.api.orderUpload, tempOrder)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appProductOrderService.prototype.orderDowload = function (tempOrder) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Post(this.api.orderDowload, tempOrder)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appProductOrderService.prototype.onlinePayOrder = function (orderId, memberId, mktId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.onlinePayOrder, { params: { orderId: orderId, memberId: memberId, mktId: mktId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appProductOrderService.prototype.sendOrderToMember = function (orderId, memberId, fromMemberId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.sendOrderToMember, { params: { orderId: orderId, memberId: memberId, fromMemberId: fromMemberId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appProductOrderService.prototype.orderDisabled = function (orderId, memberId, mktId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.orderDisabled, { params: { orderId: orderId, memberId: memberId, mktId: mktId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appProductOrderService.prototype.orderDetail = function (orderId, mktId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.orderDetail, { params: { orderId: orderId, mktId: mktId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.order];
                }
            });
        });
    };
    appProductOrderService.prototype.productList = function (mktId, memberId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mktId = this.sto.customer.mktId,
                            memberId = this.sto.customer.memberId;
                        return [4 /*yield*/, this.http.Get(this.api.productList, { params: { mktId: mktId, memberId: memberId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.products];
                }
            });
        });
    };
    appProductOrderService.prototype.productCatList = function (txnId, parentId, mktId) {
        return __awaiter(this, void 0, void 0, function () {
            var result, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mktId = this.sto.customer.mktId;
                        if (!!parentId) return [3 /*break*/, 2];
                        parentId = 0;
                        return [4 /*yield*/, this.http.Get(this.api.productCatList, { params: { txnId: txnId, parentId: parentId, mktId: mktId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.productCatas];
                    case 2: return [4 /*yield*/, this.http.Get(this.api.productCatList, { params: { txnId: txnId, parentId: parentId, mktId: mktId } })];
                    case 3:
                        result = _a.sent();
                        return [2 /*return*/, result.productCatas];
                }
            });
        });
    };
    appProductOrderService.prototype.debtRequest = function (orderId, fromMemberId, toMebmerId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.debtRequest, { params: { orderId: orderId, fromMemberId: fromMemberId, toMebmerId: toMebmerId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appProductOrderService.prototype.debtAgree = function (orderId, memberId, mktId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.debtAgree, { params: { orderId: orderId, memberId: memberId, mktId: mktId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appProductOrderService.prototype.debtRefuse = function (orderId, memberId, mktId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.debtRefuse, { params: { orderId: orderId, memberId: memberId, mktId: mktId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appProductOrderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* MyHttpService */], __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], appProductOrderService);
    return appProductOrderService;
}());

//# sourceMappingURL=app_ProductOrder.service.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_transaction_detail_my_transaction_detail__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_common_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_platform_framework_enum__ = __webpack_require__(61);
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





/**
 * Generated class for the MyTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var MyTransactionPage = /** @class */ (function () {
    function MyTransactionPage(navCtrl, navParams, common) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.common = common;
        this.startDt = new Date().toISOString();
        this.endDt = new Date().toISOString();
        this.loadingCompleted = false;
        this.orderList = [];
        this.index = 1;
        this.event = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: '1990-02-20'
        };
    }
    MyTransactionPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.common.singleTableQuery(__WEBPACK_IMPORTED_MODULE_4__share_platform_framework_enum__["a" /* EntityEnum */].Order, { createTime: { $gt: this.startDt, $lt: this.endDt }, pageIndex: 0, pageSize: 5 })];
                    case 1:
                        res = _a.sent();
                        this.orderList = res['rows'];
                        return [2 /*return*/];
                }
            });
        });
    };
    MyTransactionPage.prototype.goDetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__my_transaction_detail_my_transaction_detail__["a" /* MyTransactionDetailPage */]);
    };
    MyTransactionPage.prototype.doRefresh = function (refresher) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('Begin async operation', refresher);
                setTimeout(function () {
                    _this.orderList = [];
                    var res = _this.common.singleTableQuery(__WEBPACK_IMPORTED_MODULE_4__share_platform_framework_enum__["a" /* EntityEnum */].Order, { createTime: { $gt: _this.startDt, $lt: _this.endDt }, pageIndex: 0, pageSize: 5 });
                    _this.orderList = res['rows'];
                    _this.index = 1;
                    refresher.complete();
                }, 2000);
                return [2 /*return*/];
            });
        });
    };
    MyTransactionPage.prototype.doInfinite = function (infiniteScroll) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('Begin async operation');
                setTimeout(function () {
                    var res = _this.common.singleTableQuery(__WEBPACK_IMPORTED_MODULE_4__share_platform_framework_enum__["a" /* EntityEnum */].Order, { createTime: { $gt: _this.startDt, $lt: _this.endDt }, pageIndex: (_this.index * 5), pageSize: 5 });
                    if (res['rows'] = []) {
                        _this.loadingCompleted = true;
                    }
                    else {
                        _this.orderList = _this.orderList.concat(res['rows']);
                        _this.index = _this.index + 1;
                        console.log('Async operation has ended');
                    }
                    infiniteScroll.complete();
                }, 500);
                return [2 /*return*/];
            });
        });
    };
    MyTransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-transaction',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/my-transaction/my-transaction.html"*/'<!--\n  Generated template for the MyTransactionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n  -->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>成功交易</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    {{startDt}}\n    {{endDt}}\n    {{orderList | json}}\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <div class="all">\n        <i class="iconfont icon-suosou"></i>\n        <ion-datetime style="color: #00c7ae;" displayFormat="YYYY/MM/DD" pickerFormat="YYYY MM DD" [(ngModel)]="startDt"></ion-datetime>\n        <p>到</p>\n        <ion-datetime style="color: #00c7ae;" displayFormat="YYYY/MM/DD" pickerFormat="YYYY MM DD" [(ngModel)]="endDt"></ion-datetime>\n\n        <i class="iconfont icon-kalendar"></i>\n\n    </div>\n\n    <ion-list class="success" *ngFor=\'let order of orderList\'>\n        <ion-item (click)="goDetail()">\n            <h2>货款金额 <span> {{order.payAmt}}元</span></h2>\n            <p>交易时间<span>{{order.createTime | date:\'yyyy-MM-dd HH:mm:ss\'}}</span></p>\n            <p>付款方：<span>{{order.buyerInfo}}</span></p>\n            <p>付款方手机号<span>{{order.phone}}<ion-icon name="arrow-forward"></ion-icon></span></p>\n            <p>操作员 <span></span></p>\n            <p>支付方式<span>{{order.payType}}</span></p>\n            <p>订单类型<span></span></p>\n        </ion-item>\n    </ion-list>\n\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n    <div *ngIf=\'loadingCompleted\'>\n        <p>全部加载完成</p>\n    </div>\n\n    <!-- <div class="tab">\n        <p>今日</p>\n        <p>昨日</p>\n        <p>三日内</p>\n        <p>本月</p>\n    </div> -->\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/my-transaction/my-transaction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_common_service__["a" /* CommonService */]])
    ], MyTransactionPage);
    return MyTransactionPage;
}());

//# sourceMappingURL=my-transaction.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticalsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__statistical_customer_statistical_customer__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__statistical_product_statistical_product__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__statistical_receivables_statistical_receivables__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__statistical_money_statistical_money__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__statistical_summary_statistical_summary__ = __webpack_require__(562);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //交易客户统计
 //交易商品统计
 //交易收款统计
 //交易金额走势
 //统计分析-交易金额汇总
/**
 * Generated class for the StatisticalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var StatisticalsPage = /** @class */ (function () {
    function StatisticalsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StatisticalsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StatisticalsPage');
    };
    StatisticalsPage.prototype.goStatisticalCustomerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__statistical_customer_statistical_customer__["a" /* StatisticalCustomerPage */]);
    };
    StatisticalsPage.prototype.goStatisticalProductPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__statistical_product_statistical_product__["a" /* StatisticalProductPage */]);
    };
    StatisticalsPage.prototype.goStatisticalReceivablesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__statistical_receivables_statistical_receivables__["a" /* StatisticalReceivablesPage */]);
    };
    StatisticalsPage.prototype.goStatisticalMoneyPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__statistical_money_statistical_money__["a" /* StatisticalMoneyPage */]);
    };
    StatisticalsPage.prototype.goStatisticalSummaryPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__statistical_summary_statistical_summary__["a" /* StatisticalSummaryPage */]);
    };
    StatisticalsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-statisticals',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/statisticals/statisticals.html"*/'<!--\n  Generated template for the StatisticalsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>统计分析</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-item (click)="goStatisticalCustomerPage()">\n        <ion-label>交易客户统计</ion-label>\n    </ion-item>\n    <ion-item (click)="goStatisticalProductPage()">\n        <ion-label>交易商品统计</ion-label>\n    </ion-item>\n    <ion-item (click)="goStatisticalReceivablesPage()">\n        <ion-label>交易收款统计</ion-label>\n    </ion-item>\n    <ion-item (click)="goStatisticalMoneyPage()">\n        <ion-label>交易金额走势</ion-label>\n    </ion-item>\n    <ion-item (click)="goStatisticalSummaryPage()">\n        <ion-label>交易日汇总</ion-label>\n    </ion-item>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/statisticals/statisticals.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], StatisticalsPage);
    return StatisticalsPage;
}());

//# sourceMappingURL=statisticals.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticalCustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StatisticalCustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var StatisticalCustomerPage = /** @class */ (function () {
    function StatisticalCustomerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.startDt = new Date().toISOString();
        this.endDt = new Date().toISOString();
        this.event = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: '1990-02-20'
        };
    }
    StatisticalCustomerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StatisticalCustomerPage');
    };
    StatisticalCustomerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-statistical-customer',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/statistical-customer/statistical-customer.html"*/'<!--\n  Generated template for the StatisticalCustomerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>交易客户统计</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="all">\n        <i class="iconfont icon-suosou"></i>\n        <ion-datetime style="    color: #00c7ae;" displayFormat="YYYY/MM/DD" pickerFormat="YYYY MM DD" [(ngModel)]="startDt"></ion-datetime>\n        <p>到</p>\n        <ion-datetime style="    color: #00c7ae;" displayFormat="YYYY/MM/DD" pickerFormat="YYYY MM DD" [(ngModel)]="endDt"></ion-datetime>\n\n        <i class="iconfont icon-kalendar"></i>\n\n    </div>\n\n    <div class="table">\n        <p>客户</p>\n        <p>总额</p>\n        <p>副卡</p>\n        <p>刷卡</p>\n        <p>欠款</p>\n        <p>还款</p>\n        <p>手续费(卖)</p>\n        <p>其他</p>\n    </div>\n    <div class="tab">\n        <p>今日</p>\n        <p>昨日</p>\n        <p>三日内</p>\n        <p>本月</p>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/statistical-customer/statistical-customer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], StatisticalCustomerPage);
    return StatisticalCustomerPage;
}());

//# sourceMappingURL=statistical-customer.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticalProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_customer__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_common_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_platform_framework_enum__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_share_service_storage_service__ = __webpack_require__(9);
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






/**
 * Generated class for the StatisticalProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var StatisticalProductPage = /** @class */ (function () {
    function StatisticalProductPage(navCtrl, navParams, commS, sto) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commS = commS;
        this.sto = sto;
        this.startDt = new Date().toISOString();
        this.endDt = new Date().toISOString();
        this.event = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: '1990-02-20'
        };
    }
    StatisticalProductPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        debugger;
                        return [4 /*yield*/, this.commS.singleTableQuery(__WEBPACK_IMPORTED_MODULE_4__share_platform_framework_enum__["a" /* EntityEnum */].Product, { memberId: this.sto.member.id }, { pageIndex: 1, pageSize: 10 })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    StatisticalProductPage.prototype.goCustomerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__customer_customer__["a" /* CustomerPage */]);
    };
    StatisticalProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-statistical-product',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/statistical-product/statistical-product.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>交易商品统计</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="all">\n        <i class="iconfont icon-suosou"></i>\n        <ion-datetime style="    color: #00c7ae;" displayFormat="YYYY/MM/DD" pickerFormat="YYYY MM DD" [(ngModel)]="startDt"></ion-datetime>\n        <p>到</p>\n        <ion-datetime style="    color: #00c7ae;" displayFormat="YYYY/MM/DD" pickerFormat="YYYY MM DD" [(ngModel)]="endDt"></ion-datetime>\n\n        <i class="iconfont icon-kalendar"></i>\n\n    </div>\n    <p style="    padding: 0 10px;position: relative;\n    z-index: 5555;" (click)="goCustomerPage()">交易客户\n        <ion-icon name="arrow-forward" style="float: right;"></ion-icon>\n    </p>\n    <div class="table">\n        <p>商品</p>\n        <p>数量</p>\n        <p>金额</p>\n        <p>均价</p>\n\n    </div>\n    <div class="tab">\n        <p>今日</p>\n        <p>昨日</p>\n        <p>三日内</p>\n        <p>本月</p>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/statistical-product/statistical-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_5__app_share_service_storage_service__["a" /* StorageService */]])
    ], StatisticalProductPage);
    return StatisticalProductPage;
}());

//# sourceMappingURL=statistical-product.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticalReceivablesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StatisticalReceivablesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var StatisticalReceivablesPage = /** @class */ (function () {
    function StatisticalReceivablesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.startDt = new Date().toISOString();
        this.endDt = new Date().toISOString();
        this.event = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: '1990-02-20'
        };
    }
    StatisticalReceivablesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StatisticalReceivablesPage');
    };
    StatisticalReceivablesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-statistical-receivables',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/statistical-receivables/statistical-receivables.html"*/'<!--\n  Generated template for the StatisticalReceivablesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>交易收款统计</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="all">\n        <i class="iconfont icon-suosou"></i>\n        <ion-datetime style="    color: #00c7ae;" displayFormat="YYYY/MM/DD" pickerFormat="YYYY MM DD" [(ngModel)]="startDt"></ion-datetime>\n        <p>到</p>\n        <ion-datetime style="    color: #00c7ae;" displayFormat="YYYY/MM/DD" pickerFormat="YYYY MM DD" [(ngModel)]="endDt"></ion-datetime>\n\n        <i class="iconfont icon-kalendar"></i>\n\n    </div>\n\n    <div class="table">\n        <p>操作员</p>\n        <p>总额</p>\n        <p>刷卡</p>\n        <p>钱包</p>\n        <p>欠款</p>\n    </div>\n    <div class="tab">\n        <p>今日</p>\n        <p>昨日</p>\n        <p>三日内</p>\n        <p>本月</p>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/statistical-receivables/statistical-receivables.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], StatisticalReceivablesPage);
    return StatisticalReceivablesPage;
}());

//# sourceMappingURL=statistical-receivables.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticalMoneyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_echarts__ = __webpack_require__(1003);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_echarts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the StatisticalMoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var StatisticalMoneyPage = /** @class */ (function () {
    function StatisticalMoneyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.width = '80%';
        this.height = '400px'; //ElementRef
    }
    StatisticalMoneyPage.prototype.ionViewDidLoad = function () {
        // 指定图表的配置项和数据
        var option = {
            title: {
                text: ''
            },
            tooltip: {},
            legend: {
                data: ['交易金额走势/元']
            },
            xAxis: {
                data: [75, 49, 45, 27, 26, 21, 19]
            },
            yAxis: {},
            series: [{
                    name: '交易金额走势/元',
                    type: 'line',
                    data: [75, 49, 45, 27, 26, 21, 19]
                }]
        };
        // 基于准备好的dom，初始化echarts实例.init(this.chart.nativeElement);
        var myChart = __WEBPACK_IMPORTED_MODULE_2_echarts__["init"](this.chart.nativeElement);
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    };
    StatisticalMoneyPage.prototype.getEchartsStyles = function () {
        return {
            width: this.width,
            height: this.height
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], StatisticalMoneyPage.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], StatisticalMoneyPage.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], StatisticalMoneyPage.prototype, "chart", void 0);
    StatisticalMoneyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-statistical-money',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/statistical-money/statistical-money.html"*/'<!--\n  Generated template for the StatisticalMoneyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>交易金额走势</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <!-- <md-card> -->\n    <!-- <md-card-title>Echarts</md-card-title> -->\n    <!-- <md-card-content> -->\n    <!--<div class="echarts" [ngStyle]="getEchartsStyles()" #chart></div>-->\n    <div class="echarts" #chart style="height:400px;margin: 0 auto"></div>\n\n    <!-- </md-card-content>\n    </md-card> -->\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/statistical-money/statistical-money.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], StatisticalMoneyPage);
    return StatisticalMoneyPage;
}());

//# sourceMappingURL=statistical-money.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticalSummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StatisticalSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var StatisticalSummaryPage = /** @class */ (function () {
    function StatisticalSummaryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.startDt = new Date().toISOString();
        this.event = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: '1990-02-20'
        };
    }
    StatisticalSummaryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StatisticalSummaryPage');
    };
    StatisticalSummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-statistical-summary',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/statistical-summary/statistical-summary.html"*/'<!--\n  Generated template for the StatisticalReceivablesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>交易日汇总</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="all">\n        <i class="iconfont icon-suosou"></i>\n        <ion-datetime style="    color: #00c7ae;" displayFormat="YYYY/MM/DD" pickerFormat="YYYY MM DD" [(ngModel)]="startDt"></ion-datetime>\n\n\n        <i class="iconfont icon-kalendar"></i>\n\n    </div>\n\n    <div class="table">\n        <p>商品</p>\n        <p>交易量</p>\n        <p>交易额</p>\n        <p>均价</p>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/statistical-summary/statistical-summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], StatisticalSummaryPage);
    return StatisticalSummaryPage;
}());

//# sourceMappingURL=statistical-summary.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_customer__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CreditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var CreditPage = /** @class */ (function () {
    function CreditPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.startDt = new Date().toISOString();
        this.endDt = new Date().toISOString();
        this.event = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: '1990-02-20'
        };
    }
    CreditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreditPage');
    };
    CreditPage.prototype.goCustomerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__customer_customer__["a" /* CustomerPage */]);
    };
    CreditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-credit',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/credit/credit.html"*/'<!--\n  Generated template for the CreditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>未结清赊销记录</ion-title>\n        <ion-buttons end>\n            <span>赊销汇总</span>\n\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="all">\n        <i class="iconfont icon-suosou"></i>\n        <ion-datetime style="    color: #00c7ae;" displayFormat="YYYY/MM/DD" pickerFormat="YYYY MM DD" [(ngModel)]="startDt"></ion-datetime>\n        <p>到</p>\n        <ion-datetime style="    color: #00c7ae;" displayFormat="YYYY/MM/DD" pickerFormat="YYYY MM DD" [(ngModel)]="endDt"></ion-datetime>\n\n        <i class="iconfont icon-kalendar"></i>\n\n    </div>\n    <p style="    padding: 0 10px;position: relative;\nz-index: 5555;" (click)="goCustomerPage()">交易客户\n        <ion-icon name="arrow-forward" style="float: right;"></ion-icon>\n    </p>\n    <div class="table">\n        <p>名称</p>\n        <p>金额</p>\n        <p>时间</p>\n        <p>方式</p>\n        <p>状态</p>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/credit/credit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], CreditPage);
    return CreditPage;
}());

//# sourceMappingURL=credit.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_edit_product_edit__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_add_product_add__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_app_ProductOrder_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__share_platform_market_enum__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_share_service_http_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_share_service_common_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__share_platform_framework_enum__ = __webpack_require__(61);
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









/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var View;
(function (View) {
    View[View["serchPro"] = 0] = "serchPro";
    View[View["defulPro"] = 1] = "defulPro";
})(View || (View = {}));
var ProductListPage = /** @class */ (function () {
    function ProductListPage(navCtrl, navParams, prod, http, comSer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.prod = prod;
        this.http = http;
        this.comSer = comSer;
        this.View = View;
        this.state = View.defulPro;
        this.startDt = new Date().toISOString();
        this.endDt = new Date().toISOString();
        this.proW = __WEBPACK_IMPORTED_MODULE_5__share_platform_market_enum__["i" /* PriceUnitEnum */];
        this.productStatus = __WEBPACK_IMPORTED_MODULE_5__share_platform_market_enum__["k" /* ProductStatusEnum */];
        this.selectPriceWay = __WEBPACK_IMPORTED_MODULE_5__share_platform_market_enum__["j" /* PriceWayEnum */];
        this.b_proList = __WEBPACK_IMPORTED_MODULE_8__share_platform_framework_enum__["a" /* EntityEnum */].Product;
        this.event = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: '1990-02-20'
        };
    }
    ProductListPage.prototype.ionViewCanEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.selsctStatus) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.prod.productListByStatus(this.selsctStatus)];
                    case 1:
                        _a.products = _c.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        _b = this;
                        return [4 /*yield*/, this.prod.productList()];
                    case 3:
                        _b.products = _c.sent();
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductListPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ProductListPage.prototype.changeList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        debugger;
                        if (!this.selsctStatus) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.prod.productListByStatus(this.selsctStatus)];
                    case 1:
                        _a.products = _c.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        _b = this;
                        return [4 /*yield*/, this.prod.productList()];
                    case 3:
                        _b.products = _c.sent();
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**更新 查看详情 */
    ProductListPage.prototype.goDetail = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__product_edit_product_edit__["a" /* ProductEditPage */], product);
    };
    /**添加*/
    ProductListPage.prototype.addProduct = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_add_product_add__["a" /* ProductAddPage */]);
    };
    ProductListPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    /**禁用商品*/
    ProductListPage.prototype.deleteProd = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.prod.productDel(product.id)];
                    case 1:
                        _c.sent();
                        this.http.createMessage("success", "删除成功");
                        if (!this.selsctStatus) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, this.prod.productListByStatus(this.selsctStatus)];
                    case 2:
                        _a.products = _c.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        _b = this;
                        return [4 /*yield*/, this.prod.productList()];
                    case 4:
                        _b.products = _c.sent();
                        _c.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /** 关键字搜索*/
    ProductListPage.prototype.serchKeyWord = function ($event) {
        return __awaiter(this, void 0, void 0, function () {
            var key_code, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        key_code = window.event ? $event.keyCode : $event.which;
                        if (!(key_code == 13)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.comSer.singleTableQuery(this.b_proList, { name: { $like: this.keyWord } })];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.products = result.rows;
                            this.state = View.defulPro;
                        }
                        else {
                            this.http.createMessage("error", "暂无相关商品");
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ProductListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-product-list',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/product-list/product-list.html"*/'<!--\n  Generated template for the ProductListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar *ngIf="state==View.defulPro" [hideBackButton]="true">\n        <ion-buttons start>\n            <button ion-button icon-only (click)="back()">\n                      <ion-icon name="arrow-back"></ion-icon>\n                    </button>\n        </ion-buttons>\n        <ion-title>商品管理</ion-title>\n        <ion-buttons end>\n\n\n            <button ion-button icon-only (click)="state=View.serchPro">\n                        <ion-icon name="search"></ion-icon>\n                      </button>\n\n            <button ion-button icon-only (click)="addProduct()">\n        <ion-icon name="add"></ion-icon>\n</button>\n        </ion-buttons>\n    </ion-navbar>\n\n    <ion-navbar *ngIf="state==View.serchPro">\n        <ion-searchbar [cancelButtonText]="\'取消\'" placeholder="搜索" (keypress)="serchKeyWord($event)" [(ngModel)]="keyWord" showCancelButton="true" (ionCancel)="state=View.defulPro"></ion-searchbar>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-item mode="android">\n        <ion-label>全部商品</ion-label>\n        <ion-select [(ngModel)]="selsctStatus" placeholder="全部" (ionChange)="changeList()" cancelText="取消" okText="确定">\n            <ion-option value="">全部</ion-option>\n            <ion-option value="{{productStatus.Active}}">正在使用</ion-option>\n            <ion-option value="{{productStatus.Del}} ">已停用</ion-option>\n\n        </ion-select>\n    </ion-item>\n\n    <ion-list class="success" *ngIf="products" mode="android">\n        <ion-item-sliding *ngFor="let product of products">\n            <ion-item (click)="goDetail(product)">\n\n                <h2>{{product.name}} <span (click)="deleteProd(product)"> </span></h2>\n                <p>编码<span>{{product.prodCat.catCode}}</span></p>\n                <p>品类<span>{{product.prodCat.catName}}</span></p>\n\n                <p>计价<span>{{product.priceWay | priceWayPipePipe}}</span></p>\n                <p>单价 <span>{{product.price}}元</span></p>\n                <p *ngIf="product.priceWay==selectPriceWay.Piece">件种 <span>{{product?.pcsWgt}}元</span></p>\n\n            </ion-item>\n            <ion-item-options side="right">\n                <button ion-button color="primary" (click)="deleteProd(product)">\n                 \n                  <i class="iconfont icon-delete"></i>\n                </button>\n            </ion-item-options>\n        </ion-item-sliding>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/product-list/product-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_app_ProductOrder_service__["a" /* appProductOrderService */],
            __WEBPACK_IMPORTED_MODULE_6__app_share_service_http_service__["a" /* MyHttpService */],
            __WEBPACK_IMPORTED_MODULE_7__app_share_service_common_service__["a" /* CommonService */]])
    ], ProductListPage);
    return ProductListPage;
}());

//# sourceMappingURL=product-list.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_ProductOrder_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_platform_market_enum__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_http_service__ = __webpack_require__(11);
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





var View;
(function (View) {
    View[View["classDetail"] = 0] = "classDetail";
    View[View["selectClass"] = 1] = "selectClass";
    View[View["selectTxnList"] = 2] = "selectTxnList";
})(View || (View = {}));
/**
 * Generated class for the ProductAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var ProductEditPage = /** @class */ (function () {
    function ProductEditPage(navCtrl, navParams, prod, orderService, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.prod = prod;
        this.orderService = orderService;
        this.http = http;
        this.View = View;
        this.state = View.classDetail;
        this.newProduct = {
            name: "",
        };
        this.txns = [];
        /**选择的计价方式 计件 计重 */
        this.priceType = __WEBPACK_IMPORTED_MODULE_3__share_platform_market_enum__["j" /* PriceWayEnum */];
        this.mapProducts = [];
    }
    ProductEditPage.prototype.ionViewCanEnter = function () {
        this.product = this.navParams.data;
        this.selectProductValuationType = this.product.priceWay;
        this.selectProCate = this.product.prodCat;
        this.selectTxn = this.product.prodCat.txn;
    };
    ProductEditPage.prototype.selectOk = function (txn) {
        this.selectTxn = txn;
        this.state = View.classDetail;
    };
    ProductEditPage.prototype.cancel = function () {
        this.selectProCate = {};
    };
    ProductEditPage.prototype.categoryList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.mapProducts = [];
                        if (!this.selectTxn) return [3 /*break*/, 2];
                        this.state = View.selectClass;
                        return [4 /*yield*/, this.prod.productCatList(this.selectTxn.txnId)];
                    case 1:
                        result = _a.sent();
                        this.prodCatalogs = result;
                        this.mapProducts.push(result);
                        console.log(this.mapProducts);
                        return [3 /*break*/, 3];
                    case 2:
                        this.http.createMessage("warning", "请先选择交易区");
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductEditPage.prototype.selectChild = function (data, arrIndex, prodIndex) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (arrIndex != this.mapProducts.length - 1) {
                            this.mapProducts.splice(arrIndex + 1);
                        }
                        _a = this;
                        return [4 /*yield*/, this.prod.productCatList(this.selectTxn.txnId, data.id)];
                    case 1:
                        _a.childProducts = _b.sent();
                        if (this.childProducts.length > 0) {
                            this.mapProducts.push(JSON.parse(JSON.stringify(this.childProducts)));
                            this.isShow = false;
                        }
                        else {
                            this.isShow = true;
                        }
                        this.selectProCate = data;
                        this.mapProducts[arrIndex].forEach(function (product) { return product.checked = false; });
                        this.selectProCate.checked = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductEditPage.prototype.ionViewDidLoad = function () {
    };
    ProductEditPage.prototype.allTxn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.orderService.txnList()];
                    case 1:
                        _a.txns = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductEditPage.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.product.priceWay = this.selectProductValuationType;
                        this.product.prodCat = this.selectProCate;
                        return [4 /*yield*/, this.prod.productUpdate(this.product)];
                    case 1:
                        _a.sent();
                        this.http.createMessage("success", "更新成功");
                        this.navCtrl.pop();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-product-edit',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/product-edit/product-edit.html"*/'<!--\n  Generated template for the ProductAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>编辑商品</ion-title>\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="save()">\n                    <span  >保存</span>\n                </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n\n<ion-content>\n    <ion-item>\n        <button ion-item (click)=" state=View.selectTxnList; allTxn()">\n                选择交易区<span style="float: right">{{selectTxn?.txnName}} </span>\n            </button>\n    </ion-item>\n    <ion-item>\n        <button ion-item (click)=" state=View.selectClass;categoryList() ">\n                商品分类<span style="float: right" *ngIf="selectProCate">{{selectProCate.catName}} </span>\n            </button>\n    </ion-item>\n\n\n\n    <ion-item>\n        <ion-label>计价方式</ion-label>\n        <ion-select [(ngModel)]="selectProductValuationType">\n            <ion-option value="{{priceType.Piece}}">计件</ion-option>\n            <ion-option value="{{priceType.Weight}}">计重</ion-option>\n\n        </ion-select>\n    </ion-item>\n    <ion-item *ngIf="selectProductValuationType==priceType.Piece">\n        <ion-label color="primary">件重</ion-label>\n        <ion-input placeholder="" style="text-align: right;" [(ngModel)]="product!.pcsWgt"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label color="primary">价格：</ion-label>\n        <ion-input placeholder="" style="text-align: right;" [(ngModel)]="product!.price"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label color="primary">商品名称：</ion-label>\n        <ion-input placeholder="" style="text-align: right;" [(ngModel)]="product!.name"></ion-input>\n    </ion-item>\n\n</ion-content>\n<ion-content *ngIf="state==View.selectClass">\n    <div class="layer">\n        <div style="    position: relative;\n        background: #fff;\n        top: 20vh;">\n            <div class="ok">\n                <span (click)="state=View.classDetail;cancel()">取消</span>\n                <span (click)="state=View.classDetail" *ngIf="isShow">确认</span>\n\n            </div>\n            <div style="   \n            background: #f3f3f3;\n            padding: 10px;">\n                <span style="margin-bottom: 10px;">已选分类:   <div style="display: inline-block">\n                        <span *ngIf="selectProCate">{{selectProCate.catName}}</span>\n            </div>\n            </span>\n        </div>\n        <div class="Level">\n            <ng-container *ngFor="let products of mapProducts;let arrIndex =index;">\n                <div>\n                    <span [class.active]="data.checked" *ngFor="let data of products;let prodIndex=index" (click)="selectChild(data,arrIndex,prodIndex)">\n\n                    {{data.catName}}\n\n                </span>\n\n                </div>\n            </ng-container>\n        </div>\n    </div>\n    </div>\n\n\n</ion-content>\n\n<ion-content *ngIf="state==View.selectTxnList">\n\n    <div class="layer">\n        <div style="    position: relative;\n            background: #fff;\n            top: 20vh;">\n            <ion-list no-lines *ngFor="let txn of txns">\n                <button ion-item (click)="selectOk(txn) ">\n                 {{txn.txnName}}\n            </button>\n            </ion-list>\n        </div>\n    </div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/product-edit/product-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_ProductOrder_service__["a" /* appProductOrderService */],
            __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_ProductOrder_service__["a" /* appProductOrderService */],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_http_service__["a" /* MyHttpService */]])
    ], ProductEditPage);
    return ProductEditPage;
}());

//# sourceMappingURL=product-edit.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComeOutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__come_out_list_come_out_list__ = __webpack_require__(567);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ComeOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var ComeOutPage = /** @class */ (function () {
    function ComeOutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ComeOutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComeOutPage');
    };
    ComeOutPage.prototype.goNext = function () {
        this.navCtrl.pop();
    };
    ComeOutPage.prototype.comeOutList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__come_out_list_come_out_list__["a" /* ComeOutListPage */]);
    };
    ComeOutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-come-out',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/come-out/come-out.html"*/'<!--\n  Generated template for the ComeOutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>出厂开单</ion-title>\n        <ion-buttons end>\n\n\n            <button ion-button icon-only (click)="comeOutList()">\n                申请记录\n                      </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-item>\n        <ion-label color="primary">商品数量(斤)</ion-label>\n        <ion-input placeholder=""></ion-input>\n    </ion-item>\n    <button ion-button (click)="goNext()" style="width: 100%;\nmargin-top: 30px;\n">申请出厂</button>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/come-out/come-out.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ComeOutPage);
    return ComeOutPage;
}());

//# sourceMappingURL=come-out.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComeOutListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ComeOutListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var ComeOutListPage = /** @class */ (function () {
    function ComeOutListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ComeOutListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComeOutListPage');
    };
    ComeOutListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-come-out-list',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/come-out-list/come-out-list.html"*/'<!--\n  Generated template for the ComeOutListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>出场记录</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list class="success">\n        <ion-item>\n\n            <h2>出场重量 <span> 1斤</span></h2>\n            <p>开单时间<span>2018-03-04 01：23：67</span></p>\n            <p>订单号<span>53647289</span></p>\n            <p>状态<span>否</span></p>\n            <p>操作员 <span>张三</span></p>\n            <div>\n                <p>打印</p>\n                <p>二维码</p>\n            </div>\n        </ion-item>\n\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/come-out-list/come-out-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ComeOutListPage);
    return ComeOutListPage;
}());

//# sourceMappingURL=come-out-list.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrearsSumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_customer__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_sellOnCredit__ = __webpack_require__(1302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ArrearsSumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var ArrearsSumPage = /** @class */ (function () {
    // AccountDebt: AccountDebt
    function ArrearsSumPage(navCtrl, navParams, sellS) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sellS = sellS;
        this.startDt = new Date().toISOString();
        this.endDt = new Date().toISOString();
        // async  ionViewDidLoad() {
        //    await this.sellS.accountDebtList()
        //   }
        this.event = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: '1990-02-20'
        };
    }
    ArrearsSumPage.prototype.goCustomerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__customer_customer__["a" /* CustomerPage */]);
    };
    ArrearsSumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-arrears-sum',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/arrears-sum/arrears-sum.html"*/'<!--\n  Generated template for the ArrearsSumPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>未结清欠款记录</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="all">\n        <i class="iconfont icon-suosou"></i>\n        <ion-datetime style="    color: #00c7ae;" displayFormat="YYYY/MM/DD" pickerFormat="YYYY MM DD" [(ngModel)]="startDt"></ion-datetime>\n        <p>到</p>\n        <ion-datetime style="    color: #00c7ae;" displayFormat="YYYY/MM/DD" pickerFormat="YYYY MM DD" [(ngModel)]="endDt"></ion-datetime>\n\n        <i class="iconfont icon-kalendar"></i>\n\n    </div>\n    <p style="    padding: 0 10px;position: relative;\nz-index: 5555;" (click)="goCustomerPage()">交易客户\n        <ion-icon name="arrow-forward" style="float: right;"></ion-icon>\n    </p>\n    <div class="table">\n        <p>名称</p>\n        <p>总额</p>\n        <p>已还</p>\n        <p>时间 <i class="iconfont icon-arrLeft-fill"></i></p>\n        <p>还清</p>\n    </div>\n    <p style="text-align: center;">加载完成</p>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/arrears-sum/arrears-sum.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_sellOnCredit__["a" /* appSellOnCreditService */]])
    ], ArrearsSumPage);
    return ArrearsSumPage;
}());

//# sourceMappingURL=arrears-sum.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnPayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_transaction_detail_my_transaction_detail__ = __webpack_require__(244);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UnPayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var UnPayPage = /** @class */ (function () {
    function UnPayPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.startDt = new Date().toISOString();
        this.endDt = new Date().toISOString();
        this.event = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: '1990-02-20'
        };
    }
    UnPayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UnPayPage');
    };
    UnPayPage.prototype.goDetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__my_transaction_detail_my_transaction_detail__["a" /* MyTransactionDetailPage */]);
    };
    UnPayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-un-pay',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/un-pay/un-pay.html"*/'<!--\n  Generated template for the UnPayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>我的等待</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list class="success">\n        <ion-item (click)="goDetail()">\n\n            <h2>货款金额 <span> 0.10元</span></h2>\n            <p>交易时间<span>20180122 19:44:28</span></p>\n            <p>付款方：<span>李四</span></p>\n            <p>付款方手机号<span>15172480645<ion-icon name="arrow-forward"></ion-icon></span></p>\n            <p>操作员 <span>李四</span></p>\n            <p>支付方式<span>钱包</span></p>\n            <p>订单类型<span>消费</span></p>\n        </ion-item>\n        <ion-item (click)="goDetail()">\n\n            <h2>货款金额 <span> 0.10元</span></h2>\n            <p>交易时间<span>20180122 19:44:28</span></p>\n            <p>付款方：<span>李四</span></p>\n            <p>付款方手机号<span>15172480645<ion-icon name="arrow-forward"></ion-icon></span></p>\n            <p>操作员 <span>李四</span></p>\n            <p>支付方式<span>钱包</span></p>\n            <p>订单类型<span>消费</span></p>\n        </ion-item>\n        <ion-item (click)="goDetail()">\n\n            <h2>货款金额 <span> 0.10元</span></h2>\n            <p>交易时间<span>20180122 19:44:28</span></p>\n            <p>付款方：<span>李四</span></p>\n            <p>付款方手机号<span>15172480645<ion-icon name="arrow-forward"></ion-icon></span></p>\n            <p>操作员 <span>李四</span></p>\n            <p>支付方式<span>钱包</span></p>\n            <p>订单类型<span>消费</span></p>\n        </ion-item>\n    </ion-list>\n    <p style="text-align: center;">加载完成</p>\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/un-pay/un-pay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], UnPayPage);
    return UnPayPage;
}());

//# sourceMappingURL=un-pay.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_customer_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_http_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__share_platform_market_enum__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_share_service_app_member_account_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_pay_end_order_pay_end__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_share_service_app_ProductOrder_service__ = __webpack_require__(46);
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









/**
 * Generated class for the OpeningWallet4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var OrderPayPage = /** @class */ (function () {
    function OrderPayPage(navCtrl, navParams, customer, storage, member, app, http, sto, ref, order) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customer = customer;
        this.storage = storage;
        this.member = member;
        this.app = app;
        this.http = http;
        this.sto = sto;
        this.ref = ref;
        this.order = order;
        this.payTypeString = '';
        this.payType = '';
        this.password = '';
        this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        this.passwordString = '';
        this.isShow = false;
        this.x = "*";
        this.kong = " ";
        this.payAmt = 0;
        this.memberName = '';
        this.apAmt = 0;
        this.orderNo = this.navParams.get('res');
        debugger;
    }
    OrderPayPage.prototype.showModel = function () {
        this.isShow = true;
    };
    OrderPayPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.order.getOrderDetail(this.orderNo)];
                    case 1:
                        _a.data = _b.sent();
                        if (this.data) {
                            debugger;
                            this.Order = this.data['order'];
                            this.memberName = this.data['memberName'];
                            debugger;
                            this.payType = this.Order['payType'];
                            this.orderNo = this.Order['orderNo'];
                            this.payAmt = this.Order['payAmt'];
                            this.apAmt = this.Order['apAmt'];
                            debugger;
                        }
                        if (this.payType == __WEBPACK_IMPORTED_MODULE_5__share_platform_market_enum__["h" /* PayTypeEnum */].FS_C2B) {
                            this.payTypeString = '钱包支付';
                        }
                        else if (this.payType == __WEBPACK_IMPORTED_MODULE_5__share_platform_market_enum__["h" /* PayTypeEnum */].FS_CREDIT) {
                            this.payTypeString = '赊销';
                        }
                        debugger;
                        return [2 /*return*/];
                }
            });
        });
    };
    OrderPayPage.prototype.fn = function (ps) {
        return ps = this.passwordString;
    };
    OrderPayPage.prototype.addString = function (i) {
        return __awaiter(this, void 0, void 0, function () {
            var orderPayRq_1, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log(i);
                        if (!(this.passwordString.length <= 6)) return [3 /*break*/, 5];
                        this.ref.markForCheck();
                        this.ref.detectChanges();
                        this.passwordString = this.passwordString + i;
                        if (!(this.passwordString.length == 6)) return [3 /*break*/, 5];
                        this.payTypeString;
                        debugger;
                        orderPayRq_1 = {
                            orderNo: this.orderNo,
                            payAmt: this.payAmt,
                            payPassword: this.passwordString,
                            payType: this.payType
                        };
                        if (!(this.payType == __WEBPACK_IMPORTED_MODULE_5__share_platform_market_enum__["h" /* PayTypeEnum */].FS_C2B)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.order.orderPay(orderPayRq_1)];
                    case 1:
                        _a.res = _c.sent();
                        debugger;
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(this.payType == __WEBPACK_IMPORTED_MODULE_5__share_platform_market_enum__["h" /* PayTypeEnum */].FS_CREDIT)) return [3 /*break*/, 4];
                        _b = this;
                        return [4 /*yield*/, this.order.sellOnCredit(orderPayRq_1)];
                    case 3:
                        _b.res = _c.sent();
                        debugger;
                        _c.label = 4;
                    case 4:
                        if (this.res) {
                            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__order_pay_end_order_pay_end__["a" /* OrderPayEndPage */], { res: this.res });
                        }
                        _c.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    OrderPayPage.prototype.keyD = function () {
        this.isShow = !this.isShow;
    };
    OrderPayPage.prototype.delect = function () {
        this.passwordString = this.passwordString.substring(0, this.passwordString.length - 1);
        this.ref.markForCheck();
        this.ref.detectChanges();
    };
    OrderPayPage.prototype.deleteAll = function () {
        this.passwordString = "";
    };
    // 键盘结束
    OrderPayPage.prototype.ionViewCanEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    OrderPayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-order-pay',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/order-pay/order-pay.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>确认支付</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    {{data | json}}\n    <div style="    display:flex;flex-direction: column;align-content: center;align-items: center;">\n\n\n        <p>欠款交易</p>\n        <p style="font-size: 23px; font-weight: 600;margin: 0;">支付:￥{{payAmt}}</p>\n        <p style="    font-size: 18px;font-weight: 500;">欠款:￥{{apAmt}}</p>\n    </div>\n    <div style="margin-top: 40px;   border:1px solid #e6e5e5;border-left: none;border-right: none;padding: 10px 0;">\n        <p style="    margin: 10px;"> 收款方 <span style="float: right">{{memberName}}</span> </p>\n\n        <p style="    margin: 10px;"> 交易类型 <span style="float: right">{{payTypeString}}</span></p>\n    </div>\n    <div style="width:100%;padding:0 2rem 0 2rem;  margin-top: 30px;">\n        <button ion-button color="red" block (click)="showModel()">立即支付</button>\n    </div>\n    <div class="model" *ngIf="isShow">\n        <div style="background: #fff;\n        height: 55vh;\n        position: absolute;\n        width: 100vw;\n        bottom: 0;">\n            <div>\n\n                <h5 style="text-align: center">\n                    <ion-icon ios="ios-close" md="md-close" style="    position: relative;\n                    left: -30%;"\n                        (click)="isShow=false"></ion-icon>请输入支付密码\n                </h5>\n            </div>\n            <div class="div_input" (click)="keyD();">\n\n                <p>{{fn(passwordString).substring(0,1)?x:kong}}</p>\n                <p>{{fn(passwordString).substring(1,2)?x:kong}}</p>\n                <p>{{fn(passwordString).substring(2,3)?x:kong}}</p>\n                <p>{{fn(passwordString).substring(3,4)?x:kong}}</p>\n                <p>{{fn(passwordString).substring(4,5)?x:kong}}</p>\n                <p style="border-right: 1px solid #7c7a7a">{{fn(passwordString).substring(5,6)?x:kong}}</p>\n\n            </div>\n            <p style="    text-align: right;\n            margin-right: 60px;">忘记密码</p>\n            <div class="calc" *ngIf="isShow">\n                <button ion-button *ngFor="let number of numbers;" (click)="addString(number)">{{number}}</button>\n\n                <p (click)="delect()">删除</p>\n                <p (click)="deleteAll()">清空</p>\n            </div>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/order-pay/order-pay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_customer_service__["a" /* appCustomerService */],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_6__app_share_service_app_member_account_service__["a" /* appMemberAccountService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_http_service__["a" /* MyHttpService */],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_8__app_share_service_app_ProductOrder_service__["a" /* appProductOrderService */]])
    ], OrderPayPage);
    return OrderPayPage;
}());

//# sourceMappingURL=order-pay.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPayEndPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__ = __webpack_require__(62);
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



// import { AppCustomerService } from '../../app/share/service/appCustomer.service';
/**
 * Generated class for the ProductBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var OrderPayEndPage = /** @class */ (function () {
    function OrderPayEndPage(navCtrl, navParams, event, ble) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = event;
        this.ble = ble;
        // this.categoryA = this.navParams.get("parent")
        this.data = this.navParams.data;
        //开始打印票据
    }
    OrderPayEndPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    OrderPayEndPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-order-pay-end',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/order-pay-end/order-pay-end.html"*/'<!--\n  Generated template for the ProductBPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>付款详情</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n    <div style="display: flex;flex-direction: column;align-items: center;    background: #fff;padding: 30px 0;">\n        <img style="width: 25%;" src="./../../assets/imgs/logo.png" alt="">\n        <p style="color: #f85851;\n        font-size: 20px;">交易成功</p>\n        <h2 *ngIf="data.accountDebt.payType== \'FS_CREDIT\'" style="font-size: 30px;">支付:{{data!.accountDebt.payAmt}}元</h2>\n        <h3 *ngIf="data.accountDebt.payType== \'FS_CREDIT\'">欠款:{{data!.accountDebt.apAmt}}元</h3>\n\n        <h2 *ngIf="data.accountDebt.payType== \'PayType.FS_C2B\'" style="font-size: 30px;">支付:{{data!.accountDebt.payAmt}}元</h2>\n        <h3 *ngIf="data.accountDebt.payType== \'FS_C2B\'">欠款:{{data!.accountDebt.apAmt}}元</h3>\n    </div>\n\n\n\n    <div style="width:100%;padding:0 2rem 0 2rem;  margin-top: 30px;">\n        <button ion-button color="red" block>确定</button>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/order-pay-end/order-pay-end.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__["a" /* BLE */]])
    ], OrderPayEndPage);
    return OrderPayEndPage;
}());

//# sourceMappingURL=order-pay-end.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_customer__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RepaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var RepaymentPage = /** @class */ (function () {
    function RepaymentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.startDt = new Date().toISOString();
        this.endDt = new Date().toISOString();
        this.event = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: '1990-02-20'
        };
    }
    RepaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RepaymentPage');
    };
    RepaymentPage.prototype.goCustomerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__customer_customer__["a" /* CustomerPage */]);
    };
    RepaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-repayment',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/repayment/repayment.html"*/'<!--\n  Generated template for the RepaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>未确认还款记录</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="all">\n        <i class="iconfont icon-suosou"></i>\n        <ion-datetime style="    color: #00c7ae;" displayFormat="YYYY/MM/DD" pickerFormat="YYYY MM DD" [(ngModel)]="startDt"></ion-datetime>\n        <p>到</p>\n        <ion-datetime style="    color: #00c7ae;" displayFormat="YYYY/MM/DD" pickerFormat="YYYY MM DD" [(ngModel)]="endDt"></ion-datetime>\n\n        <i class="iconfont icon-kalendar"></i>\n\n    </div>\n    <p style="    padding: 0 10px;position: relative;\nz-index: 5555;" (click)="goCustomerPage()">交易客户\n        <ion-icon name="arrow-forward" style="float: right;"></ion-icon>\n    </p>\n    <div class="table">\n        <p>名称</p>\n        <p>金额</p>\n        <p>时间</p>\n        <p>方式</p>\n        <p>状态</p>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/repayment/repayment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], RepaymentPage);
    return RepaymentPage;
}());

//# sourceMappingURL=repayment.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageWaitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_platform_market_enum__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_message_service__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wallet_friend_detail_wallet_friend_detail__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wallet_expend_detail_wallet_expend_detail__ = __webpack_require__(192);
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






/**
 * Generated class for the MessageWaitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var MessageWaitPage = /** @class */ (function () {
    function MessageWaitPage(navCtrl, navParams, msg, event) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.msg = msg;
        this.event = event;
        this.typed = '';
        this.type = '';
        this.msgList = [];
        this.simpleColumns = [
            {
                name: 'col1',
                options: [
                    { text: '全部', value: __WEBPACK_IMPORTED_MODULE_2__share_platform_market_enum__["e" /* MsgTypeEnum */].All },
                    { text: '账户变动信息', value: __WEBPACK_IMPORTED_MODULE_2__share_platform_market_enum__["e" /* MsgTypeEnum */].ACC_AMT },
                    { text: '邀请信息', value: __WEBPACK_IMPORTED_MODULE_2__share_platform_market_enum__["e" /* MsgTypeEnum */].CUST_INVITE },
                    { text: '操作员变动信息', value: __WEBPACK_IMPORTED_MODULE_2__share_platform_market_enum__["e" /* MsgTypeEnum */].ACTOR_CHANGE },
                    { text: '待付款', value: __WEBPACK_IMPORTED_MODULE_2__share_platform_market_enum__["e" /* MsgTypeEnum */].TOBE_PAY },
                    { text: '现金还款通知', value: __WEBPACK_IMPORTED_MODULE_2__share_platform_market_enum__["e" /* MsgTypeEnum */].REPAY_APPLY },
                    { text: '现金还款确认', value: __WEBPACK_IMPORTED_MODULE_2__share_platform_market_enum__["e" /* MsgTypeEnum */].REPAY_CONFIRM },
                ]
            }
        ];
    }
    MessageWaitPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.msg.msgQuery(__WEBPACK_IMPORTED_MODULE_2__share_platform_market_enum__["e" /* MsgTypeEnum */].All)];
                    case 1:
                        result = _a.sent();
                        debugger;
                        this.msgList = result;
                        return [2 /*return*/];
                }
            });
        });
    };
    MessageWaitPage.prototype.list = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(type != this.typed)) return [3 /*break*/, 2];
                        this.typed = type;
                        return [4 /*yield*/, this.msg.msgQuery(type)];
                    case 1:
                        result = _a.sent();
                        debugger;
                        this.msgList = result;
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MessageWaitPage.prototype.goDetail = function (msg) {
        this.cusMsg = msg;
        if (this.cusMsg.msgType == __WEBPACK_IMPORTED_MODULE_2__share_platform_market_enum__["e" /* MsgTypeEnum */].ACC_AMT) {
            // 账户变动
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__wallet_expend_detail_wallet_expend_detail__["a" /* WalletExpendDetailPage */], JSON.parse(this.cusMsg.addition));
        }
        if (this.cusMsg.msgType == __WEBPACK_IMPORTED_MODULE_2__share_platform_market_enum__["e" /* MsgTypeEnum */].ACTOR_CHANGE) {
            // 操作员变动
        }
        if (this.cusMsg.msgType == __WEBPACK_IMPORTED_MODULE_2__share_platform_market_enum__["e" /* MsgTypeEnum */].CUST_INVITE) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__wallet_friend_detail_wallet_friend_detail__["a" /* WalletFriendDetailPage */], this.cusMsg);
            debugger;
        }
        if (this.cusMsg.msgType == __WEBPACK_IMPORTED_MODULE_2__share_platform_market_enum__["e" /* MsgTypeEnum */].REPAY_APPLY) {
            // 现金还款
        }
        if (this.cusMsg.msgType == __WEBPACK_IMPORTED_MODULE_2__share_platform_market_enum__["e" /* MsgTypeEnum */].REPAY_CONFIRM) {
            // 现金还款确认
        }
        if (this.cusMsg.msgType == __WEBPACK_IMPORTED_MODULE_2__share_platform_market_enum__["e" /* MsgTypeEnum */].TOBE_PAY) {
            // 待付款
        }
    };
    MessageWaitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-message-wait',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/message-wait/message-wait.html"*/'<!--\n  Generated template for the MessageWaitPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>待处理消息</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n        <ion-item>\n            <ion-label>消息类型</ion-label>\n            <ion-multi-picker cancelText=\'取消\' placeholder="全部" doneText=\'确定\' item-content [multiPickerColumns]="simpleColumns" [(ngModel)]="type"></ion-multi-picker>\n        </ion-item>\n    </ion-list>\n\n    <div [hidden]="true">\n        {{list(type)}}\n    </div>\n\n    <div *ngIf="msgList">\n\n\n        <ion-list *ngFor="let msg of msgList">\n            <ng-container *ngIf="msg.title">\n                <ion-card (click)="goDetail(msg)">\n                    <ion-card-header>\n                        {{msg!.title}} <span style="float: right">{{msg.createTime |date:"yyyy-MM-dd"}}</span>\n                    </ion-card-header>\n                    <ion-card-content>\n                        {{msg!.content}}\n                    </ion-card-content>\n                </ion-card>\n            </ng-container>\n        </ion-list>\n    </div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/message-wait/message-wait.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_message_service__["a" /* appMessageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], MessageWaitPage);
    return MessageWaitPage;
}());

//# sourceMappingURL=message-wait.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageSetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_message_service__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__ = __webpack_require__(9);
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




/**
 * Generated class for the MessageSetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var MessageSetPage = /** @class */ (function () {
    function MessageSetPage(navCtrl, navParams, Msg, storge) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Msg = Msg;
        this.storge = storge;
        this.nofitication = [];
        this.nofiticationS = '';
        this.msgs = {
            ACC_AMT: true,
            CUST_INVITE: true,
            ACTOR_CHANGE: true,
            REPAY_APPLY: true,
            REPAY_CONFIRM: true,
            TOBE_PAY: true
        };
        this.nofitication = this.storge.disabledMsgTypes || [];
        this.nofitication.forEach(function (value, index, arr) {
            for (var msg in _this.msgs) {
                if ("" + msg == value) {
                    _this.msgs[msg] = false;
                }
            }
        });
    }
    MessageSetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessageSetPage');
    };
    MessageSetPage.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var msg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        for (msg in this.msgs) {
                            if (this.msgs[msg] == false) {
                                this.nofiticationS = this.nofitication + ',' + msg;
                            }
                        }
                        console.log(this.nofiticationS);
                        return [4 /*yield*/, this.Msg.msgManage(this.nofiticationS)];
                    case 1:
                        _a.sent();
                        this.navCtrl.pop();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessageSetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-message-set',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/message-set/message-set.html"*/'<!--\n  Generated template for the MessageSetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>消息管理</ion-title>\n    </ion-navbar>\n\n    <button ion-button end (click)="save()">保存</button>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-item>\n        <ion-label>账户变动</ion-label>\n        <ion-toggle color="secondary" [(ngModel)]="msgs.ACC_AMT"></ion-toggle>\n    </ion-item>\n    <ion-item>\n        <ion-label>邀请信息</ion-label>\n        <ion-toggle color="secondary" [(ngModel)]="msgs.CUST_INVITE"></ion-toggle>\n    </ion-item>\n    <ion-item>\n        <ion-label>操作员变动</ion-label>\n        <ion-toggle color="secondary" [(ngModel)]="msgs.ACTOR_CHANGE"></ion-toggle>\n    </ion-item>\n    <ion-item>\n        <ion-label>现金还款通知</ion-label>\n        <ion-toggle color="secondary" [(ngModel)]="msgs.REPAY_APPLY"></ion-toggle>\n    </ion-item>\n    <ion-item>\n        <ion-label>现金还款确认</ion-label>\n        <ion-toggle color="secondary" [(ngModel)]="msgs.REPAY_CONFIRM "></ion-toggle>\n    </ion-item>\n    <ion-item>\n        <ion-label>待付款</ion-label>\n        <ion-toggle color="secondary" [(ngModel)]="msgs.TOBE_PAY"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n\n        {{msgs.REPAY_CONFIRM}}\n    </ion-item>\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/message-set/message-set.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_message_service__["a" /* appMessageService */], __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__["a" /* StorageService */]])
    ], MessageSetPage);
    return MessageSetPage;
}());

//# sourceMappingURL=message-set.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifyPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_info_person_info__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_app_customer_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_share_service_http_service__ = __webpack_require__(11);
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






/**
 * Generated class for the ModifyPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var ModifyPasswordPage = /** @class */ (function () {
    function ModifyPasswordPage(navCtrl, navParams, fb, customer, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.customer = customer;
        this.http = http;
        // this.modifyPassworForm = this.fb.group({
        //   oldPassword: ['', Validators.compose([Validators.required])],
        //   newPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
        //   confirmPassword: ['', [this.confirmValidator]]
        // });
        // this.oldPassword = this.modifyPassworForm.controls['oldPassword'];
        // this.newPassword = this.modifyPassworForm.controls['newPassword'];
        // this.confirmPassword = this.modifyPassworForm.controls['confirmPassword'];
    }
    ModifyPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModifyPasswordPage');
    };
    // confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    //   if (!control.value) {
    //     return { required: true };
    //   } else if (control.value !== this.modifyPassworForm.controls.newPassword.value) {
    //     return { confirm: true, error: true };
    //   }
    // };
    ModifyPasswordPage.prototype.modifyPassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            var passwordRex, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        passwordRex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
                        if (!(!(passwordRex.test(this.oldPassword)) || !(passwordRex.test(this.newPassword)) || !(passwordRex.test(this.confirmPassword)))) return [3 /*break*/, 1];
                        this.customer.http.createMessage("error", "密码至少八个字符，至少一个字母和一个数字");
                        return [3 /*break*/, 4];
                    case 1:
                        if (!(this.newPassword !== this.confirmPassword)) return [3 /*break*/, 2];
                        this.http.createMessage("warning", "两次密码不一致，请重新输入");
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.customer.modifyPassword(this.oldPassword, this.newPassword)];
                    case 3:
                        result = _a.sent();
                        if (result) {
                            this.http.createMessage("success", "修改成功");
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__person_info_person_info__["a" /* PersonInfoPage */]);
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ModifyPasswordPage.prototype.goNext = function () {
    };
    ModifyPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modify-password',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/modify-password/modify-password.html"*/'<!--\n  Generated template for the ModifyPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="red">\n        <ion-title>修改登录密码</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-item>\n        <ion-label color="primary">原密码</ion-label>\n\n        <ion-input type="password" placeholder="请输入原始密码" style="text-align: right;" [(ngModel)]="oldPassword"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label color="primary">新密码</ion-label>\n        <ion-input type="password" placeholder="请输入新密码" style="text-align: right;" [(ngModel)]="newPassword"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label color="primary">确认密码</ion-label>\n        <ion-input type="password" placeholder="请再次输入新密码" style="text-align: right;" [(ngModel)]="confirmPassword"></ion-input>\n    </ion-item>\n    <!--  -->\n    <button color=\'red\' [disabled]="!newPassword&&!confirmPassword" ion-button style="width: 100%;margin-top: 30px;" (click)="modifyPassword()">确定</button>\n\n    <!-- <form [formGroup]="modifyPassworForm" (ngSubmit)="modifyPassword(modifyPassworForm.value)" novalidate>\n        <ion-item>\n            <ion-label color="primary">原密码</ion-label>\n\n            <ion-input type="password" placeholder="请输入原始密码" style="text-align: right;" [formControl]="oldPassword"></ion-input>\n        </ion-item>\n        <div *ngIf="oldPassword.hasError(\'required\') && oldPassword.touched" class="error-message">* 请输入密码</div>\n        <ion-item>\n            <ion-label color="primary">新密码</ion-label>\n            <ion-input type="password" placeholder="请输入新密码" style="text-align: right;" [formControl]="newPassword"></ion-input>\n        </ion-item>\n        <div *ngIf="newPassword.hasError(\'required\') && newPassword.touched" class="error-message">* 请输入新密码</div>\n        <div *ngIf="newPassword.hasError(\'minlength\') && newPassword.touched" class="error-message">* 密码长度最少为六位</div>\n        <ion-item>\n            <ion-label color="primary">确认密码</ion-label>\n            <ion-input type="password" placeholder="请再次输入新密码" style="text-align: right;" [formControl]="confirmPassword"></ion-input>\n        </ion-item>\n        <div *ngIf="confirmPassword.hasError(\'required\') && confirmPassword.touched" class="error-message">* 请确认新密码</div>\n        <div *ngIf="confirmPassword.hasError(\'confirm\') && confirmPassword.touched" class="error-message">* 两次输入密码不一样</div>\n        <button color=\'red\' ion-button type="submit" style="width: 100%;margin-top: 30px;" [disabled]="!modifyPassworForm.valid">确定</button>\n\n    </form> -->\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/modify-password/modify-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_app_customer_service__["a" /* appCustomerService */],
            __WEBPACK_IMPORTED_MODULE_5__app_share_service_http_service__["a" /* MyHttpService */]])
    ], ModifyPasswordPage);
    return ModifyPasswordPage;
}());

//# sourceMappingURL=modify-password.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invitation_invitation__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_teamer_add_teamer__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_share_service_app_team_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_share_service_http_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_share_service_common_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__share_nickName__ = __webpack_require__(581);
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









/**
 * Generated class for the MyTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyTeamPage = /** @class */ (function () {
    function MyTeamPage(navCtrl, navParams, sto, myTeamService, http, comm, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sto = sto;
        this.myTeamService = myTeamService;
        this.http = http;
        this.comm = comm;
        this.events = events;
        this.customers = [];
        this.myTeams = [];
        this.events.subscribe("data", function (myTeams) {
            _this.myTeams = myTeams;
            _this.events.unsubscribe("data");
        });
    }
    MyTeamPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.customer = this.sto.customer;
                        if (!this.sto.customer.memberId) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.myTeamService.teamList()];
                    case 1:
                        _a.myTeams = _b.sent();
                        if (this.sto.member) {
                            this.member = this.sto.member;
                        }
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MyTeamPage.prototype.outTeam = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.myTeamService.exitTeam(this.customer.id)];
                    case 1:
                        _a.sent();
                        this.http.createMessage("success", "退出团队成功");
                        this.comm.updateSto();
                        this.navCtrl.pop();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyTeamPage.prototype.editNickname = function (customer) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.member.customerId == this.customer.id) {
                    this.selectCustomer = customer;
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__share_nickName__["a" /* NickNamePage */], this.selectCustomer);
                }
                else {
                    this.http.createMessage("error", "暂无权限，请联系掌柜");
                }
                return [2 /*return*/];
            });
        });
    };
    MyTeamPage.prototype.goInvita = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__invitation_invitation__["a" /* InvitationPage */], { title: "收到的邀请" });
    };
    MyTeamPage.prototype.goRevice = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__invitation_invitation__["a" /* InvitationPage */], { title: "发出的邀请" });
    };
    MyTeamPage.prototype.addPeople = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_teamer_add_teamer__["a" /* AddTeamerPage */]);
    };
    MyTeamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-team',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/my-team/my-team.html"*/'<!--\n  Generated template for the MyTeamPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>\n            <span>我的团队</span>\n\n            <span *ngIf="member?.customerId==customer?.id" style="    margin-right: 20px;" (click)="goRevice()" style="margin-right: 20px;\n            position: absolute; right: 6%;">发出的邀请</span>\n\n\n            <span *ngIf="!(member?.customerId==customer?.id)" style="    margin-right: 20px;" (click)="goInvita()" style="margin-right: 20px;\nposition: absolute; right: 6%;">收到的邀请</span>\n\n\n\n            <ion-icon *ngIf="member?.customerId==customer?.id" name="md-add" style="font-size: 25px;" (click)="addPeople()" style="font-size: 25px;\n            position: absolute;\n            right: 3%;"></ion-icon>\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div *ngIf="myTeams.length>0">\n        <div class="title_shop">\n            <p><span>商户名</span><span>{{member?.name}}</span></p>\n            <p><span>团队人数</span><span>{{myTeams.length}}</span> </p>\n        </div>\n        <ion-list>\n            <ion-item *ngFor="let customer of myTeams" (click)="editNickname(customer)">\n\n                <h2>姓名：{{customer!.name}} 昵称： {{customer!.teamComment || customer!.name}}</h2>\n                <p>\n                    <ion-icon name="ios-call-outline"></ion-icon>{{customer!.mobi}}</p>\n\n            </ion-item>\n        </ion-list>\n        <button ion-button color="red" (click)="outTeam()" *ngIf="!(member?.customerId==customer?.id)">退出团队</button>\n    </div>\n\n    <div *ngIf="myTeams.length<=0">暂无数据</div>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/my-team/my-team.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_5__app_share_service_app_team_service__["a" /* appTeamService */],
            __WEBPACK_IMPORTED_MODULE_6__app_share_service_http_service__["a" /* MyHttpService */],
            __WEBPACK_IMPORTED_MODULE_7__app_share_service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], MyTeamPage);
    return MyTeamPage;
}());

//# sourceMappingURL=my-team.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_team_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_common_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__share_platform_market_enum__ = __webpack_require__(26);
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






/**
 * Generated class for the InvitationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var InvitationPage = /** @class */ (function () {
    function InvitationPage(navCtrl, navParams, teamService, sto, comm) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teamService = teamService;
        this.sto = sto;
        this.comm = comm;
        this.selectType = __WEBPACK_IMPORTED_MODULE_5__share_platform_market_enum__["c" /* MemberInviteStatus */];
        this.title = this.navParams.data.title;
    }
    InvitationPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.customer = this.sto.customer;
                        if (!this.customer.memberId) return [3 /*break*/, 3];
                        this.member = this.sto.member;
                        if (!(this.member.id == this.customer.memberId)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.teamService.invitelogList()];
                    case 1:
                        _a.invitelogs = _c.sent();
                        _c.label = 2;
                    case 2: return [3 /*break*/, 5];
                    case 3:
                        _b = this;
                        return [4 /*yield*/, this.teamService.recvInvite()];
                    case 4:
                        _b.receLogs = _c.sent();
                        _c.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    InvitationPage.prototype.selectInv = function (invitelog) {
        if (invitelog.status == this.selectType.Active) {
            this.selecttLog = invitelog;
            this.invitelogs = [];
        }
    };
    InvitationPage.prototype.empSelectInv = function (data) {
        if (data.status == this.selectType.Active) {
            this.selecttLog = data;
            this.receLogs = [];
        }
    };
    InvitationPage.prototype.deleteInvi = function (invitelog) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.invitelog = invitelog;
                        return [4 /*yield*/, this.teamService.disabledInvite(this.invitelog.id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    InvitationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-invitation',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/invitation/invitation.html"*/'<!--\n  Generated template for the InvitationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <!-- 已发送的邀请---邀请人列表 -->\n    <ion-list *ngIf="invitelogs">\n        <ion-item-sliding *ngFor="let invitelog of invitelogs" style="border-bottom: 1px solid #e4dede;">\n            <ion-item (click)="selectInv(invitelog)">\n\n                <p>发送人姓名：{{invitelog?.sendCusName}}</p>\n                <p>邀请人姓名：{{invitelog.recvCusName}}</p>\n                <p>操作员类型：</p>\n                <p>邀请时间：{{invitelog.createTime}}</p>\n                <p>邀请原因：{{invitelog.content}} </p>\n                <p>状态：{{invitelog.status}}</p>\n            </ion-item>\n\n\n        </ion-item-sliding>\n    </ion-list>\n    <!-- 已收到的邀请---受邀请人的列表 -->\n    <ion-list *ngIf="receLogs">\n        <ion-item-sliding *ngFor="let data of receLogs" style="border-bottom: 1px solid #e4dede;">\n            <ion-item (click)="empSelectInv(data)">\n\n                <p>发送人姓名：{{data?.sendCusName}}</p>\n                <p>邀请人姓名：{{data.recvCusName}}</p>\n                <p>操作员类型：</p>\n                <p>邀请时间：{{data.createTime}}</p>\n                <p>邀请原因：{{data.content}} </p>\n                <p>状态：{{data.status}}</p>\n            </ion-item>\n\n\n        </ion-item-sliding>\n    </ion-list>\n\n    <page-memberInvite [selectInv]="selecttLog" *ngIf="selecttLog"> </page-memberInvite>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/invitation/invitation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_team_service__["a" /* appTeamService */],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_common_service__["a" /* CommonService */]])
    ], InvitationPage);
    return InvitationPage;
}());

//# sourceMappingURL=invitation.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTeamerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_team_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__team_add_detail_team_add_detail__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_http_service__ = __webpack_require__(11);
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





/**
 * Generated class for the AddTeamerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var AddTeamerPage = /** @class */ (function () {
    function AddTeamerPage(navCtrl, navParams, teamService, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teamService = teamService;
        this.http = http;
        this.hasCus = false;
    }
    AddTeamerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddTeamerPage');
    };
    AddTeamerPage.prototype.serch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.newCus = {};
                        return [4 /*yield*/, this.teamService.searchCustomerByPhone(this.serchPhone)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            if (result.memberId) {
                                this.http.createMessage("warning", "已加入团队，请更换其他用户");
                            }
                            this.newCus = result;
                            this.hasCus = true;
                        }
                        else {
                            this.http.createMessage("warning", "暂无数据");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AddTeamerPage.prototype.add = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.hasCus) {
                    debugger;
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__team_add_detail_team_add_detail__["a" /* TeamAddDetailPage */], this.newCus);
                }
                return [2 /*return*/];
            });
        });
    };
    AddTeamerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-teamer',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/add-teamer/add-teamer.html"*/'<!--\n  Generated template for the AddTeamerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>搜索用户</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-item style="    margin-top: 10px;">\n        <ion-label color="primary">手机号</ion-label>\n        <ion-input placeholder="" [(ngModel)]="serchPhone"></ion-input>\n    </ion-item>\n    <button ion-button style="    width: 80%;\n    margin: 15px auto;\n    display: block;" (click)="serch()">搜索</button>\n    <ion-list class="list">\n        <ion-item *ngIf="hasCus">\n\n            <h2>用户姓名：{{newCus.name}}</h2>\n            <p>\n                联系方式：{{newCus.mobi}}</p>\n            <p (click)="add()" *ngIf="!newCus.memberId">添加</p>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/add-teamer/add-teamer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_team_service__["a" /* appTeamService */],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_http_service__["a" /* MyHttpService */]])
    ], AddTeamerPage);
    return AddTeamerPage;
}());

//# sourceMappingURL=add-teamer.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamAddDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_team_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_app_customer_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_share_service_http_service__ = __webpack_require__(11);
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






/**
 * Generated class for the TeamAddDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var TeamAddDetailPage = /** @class */ (function () {
    function TeamAddDetailPage(navCtrl, navParams, teamService, sto, cusService, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teamService = teamService;
        this.sto = sto;
        this.cusService = cusService;
        this.http = http;
        this.newMemberInvite = {};
        this.newCus = this.navParams.data;
    }
    TeamAddDetailPage.prototype.ionViewDidLoad = function () {
    };
    TeamAddDetailPage.prototype.ok = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.newMemberInvite.mktId = this.sto.member.mktId;
                        this.newMemberInvite.sendCustId = this.sto.member.customerId;
                        this.newMemberInvite.recvMobi = this.newCus.mobi;
                        this.newMemberInvite.recvCustId = this.newCus.id;
                        this.newMemberInvite.sendCusName = this.sto.member.name;
                        this.newMemberInvite.recvCusName = this.newCus.name;
                        return [4 /*yield*/, this.teamService.inviteCustomer(this.newMemberInvite)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.http.createMessage("success", "邀请已发送");
                            this.navCtrl.pop();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TeamAddDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-team-add-detail',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/team-add-detail/team-add-detail.html"*/'<!--\n  Generated template for the TeamAddDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>邀请信息</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list inset>\n\n        <ion-item>\n            <ion-label>\n                手机号\n            </ion-label>\n            <ion-input type="text" [(ngModel)]="newCus.mobi"></ion-input>\n        </ion-item>\n\n        <ion-item style="border: none;" style="border-bottom: 1px solid #c8c7cc;">\n            <ion-label>\n                邀请留言\n            </ion-label>\n            <ion-input [(ngModel)]="newMemberInvite.content"></ion-input>\n        </ion-item>\n\n    </ion-list>\n\n\n    <div style="width:100%;padding:0 2rem 0 2rem">\n        <button ion-button color="red" block (click)="ok()">确定</button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/team-add-detail/team-add-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_team_service__["a" /* appTeamService */],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_app_customer_service__["a" /* appCustomerService */],
            __WEBPACK_IMPORTED_MODULE_5__app_share_service_http_service__["a" /* MyHttpService */]])
    ], TeamAddDetailPage);
    return TeamAddDetailPage;
}());

//# sourceMappingURL=team-add-detail.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NickNamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_team_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_http_service__ = __webpack_require__(11);
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




/**
 * Generated class for the Register1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var NickNamePage = /** @class */ (function () {
    function NickNamePage(navCtrl, navParams, teamServvice, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teamServvice = teamServvice;
        this.http = http;
        this.customer = this.navParams.data;
    }
    NickNamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Register1Page');
        // this.customer.marketList().then(list => this.marketList = list);
    };
    NickNamePage.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.teamServvice.commmentCustomer(this.customer.id, this.customer.teamComment, this.customer.memberId)];
                    case 1:
                        _a.sent();
                        this.http.createMessage("success", "修改成功");
                        this.navCtrl.pop();
                        return [2 /*return*/];
                }
            });
        });
    };
    NickNamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-nickName',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/share/nickName.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <span>修改昵称</span>\n\n\n\n\n\n        </ion-title>\n\n\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n    <ion-list inset *ngIf="customer">\n\n\n\n        <ion-item>\n\n            <ion-label>\n\n                用户名\n\n            </ion-label>\n\n            <ion-input type="text" [(ngModel)]="customer.name"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item style="border-bottom: 1px solid #c8c7cc;">\n\n            <ion-label>\n\n                手机号\n\n            </ion-label>\n\n            <ion-input [(ngModel)]="customer.mobi"></ion-input>\n\n        </ion-item>\n\n        <ion-item style="border-bottom: 1px solid #c8c7cc;">\n\n            <ion-label>\n\n                昵称\n\n            </ion-label>\n\n            <ion-input [(ngModel)]="customer.teamComment"></ion-input>\n\n        </ion-item>\n\n        <button ion-button color="red" block (click)="save()">保存</button>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/share/nickName.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_team_service__["a" /* appTeamService */],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_http_service__["a" /* MyHttpService */]])
    ], NickNamePage);
    return NickNamePage;
}());

//# sourceMappingURL=nickName.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifyPhonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_customer_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_http_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modify_new_phone_modify_new_phone__ = __webpack_require__(583);
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






/**
 * Generated class for the ModifyPhonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var ModifyPhonePage = /** @class */ (function () {
    function ModifyPhonePage(navCtrl, navParams, cusSer, sto, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cusSer = cusSer;
        this.sto = sto;
        this.http = http;
    }
    ModifyPhonePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModifyPhonePage');
    };
    ModifyPhonePage.prototype.goNext = function () {
        return __awaiter(this, void 0, void 0, function () {
            var passwordRex, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        passwordRex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
                        if (!!(passwordRex.test(this.password))) return [3 /*break*/, 1];
                        this.http.createMessage("error", "密码至少八个字符，至少一个字母和一个数字");
                        return [3 /*break*/, 3];
                    case 1:
                        this.cus = this.sto.customer;
                        this.cus.password = this.password;
                        return [4 /*yield*/, this.cusSer.authPassword(this.cus)];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            debugger;
                            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__modify_new_phone_modify_new_phone__["a" /* ModifyNewPhonePage */]);
                            debugger;
                        }
                        else {
                            this.http.createMessage("warning", "密码不正确，请重新输入");
                            this.password = "";
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ModifyPhonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modify-phone',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/modify-phone/modify-phone.html"*/'<!--\n  Generated template for the ModifyPhonePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>验证登录密码</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="justify-content" style="align-items: center; display: flex;\n    justify-content: space-between;    margin: 20px;">\n        <p style="font-size: 13px;\n        font-size: 14px;\n     \n       \n        margin-right: 5px;">登录密码:</p>\n        <input type="password" style="  width: 78%;\nbackground: #fff;\nborder: 1px solid #f5efef;    padding-left: 5px;    padding: 10px;" [(ngModel)]="password" placeholder="请输入登录密码">\n\n        <!-- <ion-input style="    width: 10%;\n        background: #fff;\n    border: 1px solid #f5efef;    padding-left: 5px;" [(ngModel)]="password" placeholder="请输入登录密码"></ion-input> -->\n\n    </div>\n\n\n\n    <button ion-button (click)="goNext()" color="red" style="width: 90%;\n    margin-top: 30px;\n    margin: 0 auto;\n    display: block;">下一步</button>\n\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/modify-phone/modify-phone.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_customer_service__["a" /* appCustomerService */],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_http_service__["a" /* MyHttpService */]])
    ], ModifyPhonePage);
    return ModifyPhonePage;
}());

//# sourceMappingURL=modify-phone.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifyNewPhonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_platform_framework_enum__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_http_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_app_common_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_share_service_app_customer_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mktlist_mktlist__ = __webpack_require__(144);
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








/**
 * Generated class for the ProductDPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var ModifyNewPhonePage = /** @class */ (function () {
    function ModifyNewPhonePage(navCtrl, navParams, http, comm, sto, cus, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.comm = comm;
        this.sto = sto;
        this.cus = cus;
        this.app = app;
        this.looptime = 60;
        this.marketList = [];
        this.phone = "";
        this.authcode = "";
        this.sendBool = true;
        this.verifyType = __WEBPACK_IMPORTED_MODULE_2__share_platform_framework_enum__["b" /* VerifyType */].reg;
        this.mktId = this.sto.customer.mktId;
    }
    ModifyNewPhonePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductDPage');
    };
    ModifyNewPhonePage.prototype.goNext = function () {
        this.checkAuthcode();
    };
    ModifyNewPhonePage.prototype.sendAuthcode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var phoneReg, result, timmer_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        phoneReg = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;
                        if (!!this.phone) return [3 /*break*/, 1];
                        this.http.createMessage("warning", "请输入手机号");
                        return [3 /*break*/, 4];
                    case 1:
                        if (!!(phoneReg.test(this.phone))) return [3 /*break*/, 2];
                        this.http.createMessage("error", "请输入正确手机号");
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.comm.authcode(this.mktId, this.phone, this.verifyType)];
                    case 3:
                        result = _a.sent();
                        if (result) {
                            this.looptime = 60;
                            timmer_1 = setInterval(function () {
                                _this.looptime -= 1;
                                if (_this.looptime <= 0) {
                                    _this.sendBool = true;
                                    clearInterval(timmer_1);
                                }
                            }, 1000);
                        }
                        else {
                            this.sendBool = true;
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ModifyNewPhonePage.prototype.checkAuthcode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, result_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!this.authcode || !this.phone)) return [3 /*break*/, 1];
                        this.http.createMessage("warning", "请完善信息");
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, this.comm.checkAuthcode(this.phone, this.authcode, this.mktId, this.verifyType)];
                    case 2:
                        result = _a.sent();
                        if (!result) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.cus.modifyPhone(this.sto.customer.mobi, this.phone, this.authcode, this.sto.customer.mktId, this.sto.customer.id)];
                    case 3:
                        result_1 = _a.sent();
                        if (result_1) {
                            this.http.createMessage("success", "修改成功，请重新登录");
                            localStorage.clear();
                            this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_7__mktlist_mktlist__["a" /* MktlistPage */]);
                        }
                        else {
                            this.http.createMessage("warning", "请更换手机号");
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ModifyNewPhonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modify-new-phone',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/modify-new-phone/modify-new-phone.html"*/'<!--\n  Generated template for the ProductDPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>验证手机</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <div class="justify-content" style="border: 1px solid #f5efef;\n    background: #fff;\n    height: 50px;\n    padding: 5px;margin-bottom: 10px;position: relative;">\n        <ion-input placeholder="请输入您的新手机号" [(ngModel)]="phone" style="width: 70%;"></ion-input>\n        <button color="red" *ngIf="sendBool" ion-button style="width: 34%;  \n        padding: 5px; \n        height: 30px;\n        border: 1px solid #f85851;\n        background: transparent !important;\n        color: #f85851;    position: absolute;\n    right: 6px;\n    top: 2px;" (click)="sendAuthcode();sendBool=!sendBool">获取验证码</button>\n\n        <button *ngIf="!sendBool" ion-button style="width: 34%;\n        padding: 5px;\n        height: 30px;\n        border: 1px solid #f85851;\n        background: transparent !important;\n        color: #f85851;">{{looptime}}</button>\n    </div>\n    <div class="justify-content" style="align-items: center;width: 100%;display: flex;\n    justify-content: space-between;">\n        <ion-input style="width: 70%;" style="    width: 10%;\n        background: #fff;\n        border: 1px solid #f5efef;    padding-left: 5px;" [(ngModel)]="authcode" placeholder="请输入验证码"></ion-input>\n        <p style="font-size: 13px;\n        width: 90%;\n        /* padding: 0 5px; */\n        margin-left: 8px;font-size: 14px;\n        width: 66%;    margin-left: 16px;">验证码默认通过短信形式发送给您，请注意查收</p>\n    </div>\n\n\n\n    <button ion-button (click)="goNext()" color="red" style="width: 100%;\n    margin-top: 30px;\n ">下一步</button>\n\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/modify-new-phone/modify-new-phone.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_http_service__["a" /* MyHttpService */],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_app_common_service__["a" /* appCommonService */],
            __WEBPACK_IMPORTED_MODULE_5__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_6__app_share_service_app_customer_service__["a" /* appCustomerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"]])
    ], ModifyNewPhonePage);
    return ModifyNewPhonePage;
}());

//# sourceMappingURL=modify-new-phone.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hot_iss_hot_iss__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operation_manual_operation_manual__ = __webpack_require__(587);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    HelpPage.prototype.hotIss = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__hot_iss_hot_iss__["a" /* HotIssPage */]);
    };
    HelpPage.prototype.operationManual = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__operation_manual_operation_manual__["a" /* OperationManualPage */]);
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-help',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/help/help.html"*/'<!--\n  Generated template for the HelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>帮助</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ul>\n        <li (click)="hotIss()">\n            热点问题\n        </li>\n        <li (click)="operationManual()">\n            操作手册\n        </li>\n    </ul>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/help/help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotIssPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__iss_detail_iss_detail__ = __webpack_require__(586);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the HotIssPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var HotIssPage = /** @class */ (function () {
    function HotIssPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HotIssPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HotIssPage');
    };
    HotIssPage.prototype.issDetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__iss_detail_iss_detail__["a" /* IssDetailPage */]);
    };
    HotIssPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hot-iss',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/hot-iss/hot-iss.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>热点问题</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ul>\n        <p>注册、登录</p>\n        <li (click)="issDetail()">账号忘了怎么办？</li>\n        <li (click)="issDetail()">登录时忘记密码怎么办？</li>\n        <li (click)="issDetail()">为什么要使用手机号作为账号？</li>\n        <li (click)="issDetail()">为什么不能使用邮箱作为账号？</li>\n        <li (click)="issDetail()">手机号码被占用，怎么办？</li>\n    </ul>\n    <ul>\n        <p>注册、登录</p>\n        <li (click)="issDetail()">账号忘了怎么办？</li>\n        <li (click)="issDetail()">登录时忘记密码怎么办？</li>\n        <li (click)="issDetail()">为什么要使用手机号作为账号？</li>\n        <li (click)="issDetail()">为什么不能使用邮箱作为账号？</li>\n        <li (click)="issDetail()">手机号码被占用，怎么办？</li>\n    </ul>\n    <ul>\n        <p>注册、登录</p>\n        <li (click)="issDetail()">账号忘了怎么办？</li>\n        <li (click)="issDetail()">登录时忘记密码怎么办？</li>\n        <li (click)="issDetail()">为什么要使用手机号作为账号？</li>\n        <li (click)="issDetail()">为什么不能使用邮箱作为账号？</li>\n        <li (click)="issDetail()">手机号码被占用，怎么办？</li>\n    </ul>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/hot-iss/hot-iss.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], HotIssPage);
    return HotIssPage;
}());

//# sourceMappingURL=hot-iss.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the IssDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var IssDetailPage = /** @class */ (function () {
    function IssDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IssDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IssDetailPage');
    };
    IssDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-iss-detail',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/iss-detail/iss-detail.html"*/'<!--\n  Generated template for the IssDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title> </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <h4>账号忘了怎么办</h4>\n    <div class="detail">\n        注册为注册时的手机号，您可以试试您最近使用的手机号码。\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/iss-detail/iss-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], IssDetailPage);
    return IssDetailPage;
}());

//# sourceMappingURL=iss-detail.js.map

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationManualPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operation_manual_detail_operation_manual_detail__ = __webpack_require__(588);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the OperationManualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var OperationManualPage = /** @class */ (function () {
    function OperationManualPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OperationManualPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OperationManualPage');
    };
    OperationManualPage.prototype.opDetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__operation_manual_detail_operation_manual_detail__["a" /* OperationManualDetailPage */]);
    };
    OperationManualPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-operation-manual',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/operation-manual/operation-manual.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title> </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ul>\n        <p>注册、登录</p>\n        <li (click)="opDetail()">登录</li>\n        <li (click)="opDetail()">注册</li>\n\n    </ul>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/operation-manual/operation-manual.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], OperationManualPage);
    return OperationManualPage;
}());

//# sourceMappingURL=operation-manual.js.map

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationManualDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OperationManualDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var OperationManualDetailPage = /** @class */ (function () {
    function OperationManualDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OperationManualDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OperationManualDetailPage');
    };
    OperationManualDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-operation-manual-detail',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/operation-manual-detail/operation-manual-detail.html"*/'<!--\n  Generated template for the OperationManualDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title> </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <h4>注册</h4>\n    <div class="detail">\n        这里是注册页的详细教程\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/operation-manual-detail/operation-manual-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], OperationManualDetailPage);
    return OperationManualDetailPage;
}());

//# sourceMappingURL=operation-manual-detail.js.map

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSetupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__weigh_setup_weigh_setup__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__printing_setup_printing_setup__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__voice_setup_voice_setup__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_us_about_us__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mktlist_mktlist__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_ble__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the AppSetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var AppSetupPage = /** @class */ (function () {
    function AppSetupPage(navCtrl, navParams, stor, ble, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.stor = stor;
        this.ble = ble;
        this.app = app;
        this.market = {};
        this.member = {};
        this.customer = {};
    }
    AppSetupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppSetupPage');
    };
    AppSetupPage.prototype.weightSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__weigh_setup_weigh_setup__["a" /* WeighSetupPage */]);
    };
    AppSetupPage.prototype.printSet = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__printing_setup_printing_setup__["a" /* PrintingSetupPage */]);
    };
    AppSetupPage.prototype.voiceSetup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__voice_setup_voice_setup__["a" /* VoiceSetupPage */]);
    };
    AppSetupPage.prototype.goAbout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__about_us_about_us__["a" /* AboutUsPage */]);
    };
    AppSetupPage.prototype.breakApp = function () {
        localStorage.clear();
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__mktlist_mktlist__["a" /* MktlistPage */]);
    };
    AppSetupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-app-setup',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/app-setup/app-setup.html"*/'<!--\n  Generated template for the AppSetupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title></ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n        <button ion-item (click)="weightSignup()">\n            称重设置\n        </button>\n    </ion-list>\n    <ion-list>\n        <button ion-item (click)=" printSet()">\n            打印设置\n        </button>\n    </ion-list>\n    <ion-list>\n        <button ion-item (click)="voiceSetup()">\n            语音设置\n        </button>\n    </ion-list>\n    <ion-list>\n        <button ion-item (click)="goAbout()">\n            关于我们\n        </button>\n    </ion-list>\n    <button ion-button style="    width: 80%;\n    margin: 15px auto;\n    display: block;" (click)="breakApp()">退出登录</button>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/app-setup/app-setup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_7__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_ble__["a" /* BLE */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"]])
    ], AppSetupPage);
    return AppSetupPage;
}());

//# sourceMappingURL=app-setup.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintingSetupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blue_list_blue_list__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PrintingSetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var PrintingSetupPage = /** @class */ (function () {
    function PrintingSetupPage(navCtrl, navParams, ble) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ble = ble;
    }
    PrintingSetupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrintingSetupPage');
    };
    PrintingSetupPage.prototype.ok = function () {
        this.navCtrl.pop();
    };
    PrintingSetupPage.prototype.print = function () {
        var device = 'print';
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__blue_list_blue_list__["a" /* BlueListPage */], { divice: device });
    };
    PrintingSetupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-printing-setup',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/printing-setup/printing-setup.html"*/'<!--\n  Generated template for the PrintingSetupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>打印机设置</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n        <button ion-item (click)="print()">\n            打印机：\n        </button>\n    </ion-list>\n    <ion-list>\n        <button ion-item>\n            修改打印机密码：\n        </button>\n    </ion-list>\n    <button ion-button style="width: 80%;\nmargin: 15px auto;\ndisplay: block;" (click)="ok()">确定</button>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/printing-setup/printing-setup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__["a" /* BLE */]])
    ], PrintingSetupPage);
    return PrintingSetupPage;
}());

//# sourceMappingURL=printing-setup.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoiceSetupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the VoiceSetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PromptType;
(function (PromptType) {
    PromptType["FullTimeout"] = "\u5168\u6BB5\u8D85\u65F6";
    PromptType["FrontTimeout"] = "\u524D\u7AEF\u8D85\u65F6";
    PromptType["BackendTimeout"] = "\u540E\u7AEF\u8D85\u65F6";
})(PromptType || (PromptType = {}));
// @IonicPage()
var VoiceSetupPage = /** @class */ (function () {
    function VoiceSetupPage(alertCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.PromptType = PromptType;
        this.prompt = PromptType.FullTimeout;
    }
    VoiceSetupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VoiceSetupPage');
    };
    VoiceSetupPage.prototype.doPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: '请输入时间（0-5000）ms',
            message: "时间",
            inputs: [
                {
                    name: '时间',
                    placeholder: ''
                },
            ],
            buttons: [
                {
                    text: '取消',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function (data) {
                        switch (_this.prompt) {
                            case PromptType.FullTimeout:
                                //...
                                break;
                            case PromptType.FrontTimeout:
                                //...
                                break;
                            case PromptType.BackendTimeout:
                                //
                                break;
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    VoiceSetupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-voice-setup',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/voice-setup/voice-setup.html"*/'<!--\n  Generated template for the VoiceSetupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>语音设置</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n\n    <ion-list>\n        <ion-item>\n            <ion-label>语音设置：\n                <p>默认设置普通话</p>\n            </ion-label>\n            <ion-select>\n                <ion-option value="nes">普通话</ion-option>\n                <ion-option value="n64">粤语</ion-option>\n                <ion-option value="ps">河南话</ion-option>\n                <ion-option value="genesis">英语</ion-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n\n\n\n\n    <ion-list (click)="prompt=PromptType.FullTimeout;doPrompt()">\n        <button ion-item> \n整段超时：<p>默认设置15000</p>\n</button>\n    </ion-list>\n    <ion-list (click)="prompt=PromptType.FrontTimeout;doPrompt()">\n        <button ion-item>\n前端点超时<p>默认设置6000</p>\n</button>\n\n    </ion-list>\n    <ion-list (click)="prompt=PromptType.BackendTimeout;doPrompt()">\n        <button ion-item>\n后端点超时：<p>默认设置1500</p>\n</button>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/voice-setup/voice-setup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], VoiceSetupPage);
    return VoiceSetupPage;
}());

//# sourceMappingURL=voice-setup.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var AboutUsPage = /** @class */ (function () {
    function AboutUsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutUsPage');
    };
    AboutUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about-us',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/about-us/about-us.html"*/'<!--\n  Generated template for the AboutUsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n  -->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>关于我们</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div style="display: flex;flex-direction: column;\nalign-items: center;justify-content: space-between; height: 100%;">\n        <div class="tip" style="display: flex;\n    justify-content: center;\n    align-items: center;   ">\n            <img src="assets/imgs/wel-small.png" alt="">\n            <p>版本号：新发地1.4</p>\n        </div>\n        <div class="tip">\n            面对批发市场大户的一款APP应用，买卖双方能够便捷的完成交易信息录取，称重数据采集，并支持买房采用多种支付方式（现金，记账，支付宝等）进行结算，帮助商户精细化管理生意，提升经营管理水平！\n        </div>\n        <div class="tip footer">\n            <p>联系电话：010-61772365</p>\n            <p>电子邮箱：contact@farmingpays.com</p>\n\n            <p>北京农依侬信息科技有限公司</p>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/about-us/about-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], AboutUsPage);
    return AboutUsPage;
}());

//# sourceMappingURL=about-us.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_customer_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_app_member_account_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__set_money_set_money__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__share_platform_market_enum__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authentication_authentication__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reset_pay_password_reset_pay_password__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wallet_card_wallet_card__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__wallet_transfer_list_wallet_transfer_list__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__wallet_friend_list_wallet_friend_list__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_share_service_http_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__barcode_scanner_barcode_scanner__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__wallet_expend_wallet_expend__ = __webpack_require__(305);
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















/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var WalletPage = /** @class */ (function () {
    function WalletPage(navCtrl, navParams, popoverCtrl, cus, mem, sto, events, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.cus = cus;
        this.mem = mem;
        this.sto = sto;
        this.events = events;
        this.http = http;
        this.isShowPop = false;
        this.memStatus = __WEBPACK_IMPORTED_MODULE_6__share_platform_market_enum__["d" /* MemberStatusEnum */];
        this.events.subscribe('memAccount', function (memAccount) {
            _this.account = memAccount;
            _this.events.unsubscribe('memAccount');
        });
    }
    WalletPage.prototype.info = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__authentication_authentication__["a" /* AuthenticationPage */]);
    };
    WalletPage.prototype.resetPay = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__reset_pay_password_reset_pay_password__["a" /* ResetPayPasswordPage */]);
    };
    WalletPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.customer = this.sto.customer;
                        if (!this.customer.memberId) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, this.mem.memberDetail(this.customer.id)];
                    case 1:
                        _a.member = _b.sent();
                        return [4 /*yield*/, this.mem.accountDetail()];
                    case 2:
                        result = _b.sent();
                        this.account = result.account;
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**转账*/
    WalletPage.prototype.TransAccounts = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.account.availAmt > 0) {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__wallet_transfer_list_wallet_transfer_list__["a" /* WalletTransferListPage */]);
                }
                else {
                    this.http.createMessage("warning", "余额不足，请充值");
                }
                return [2 /*return*/];
            });
        });
    };
    /**收款 */
    WalletPage.prototype.receivables = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__set_money_set_money__["a" /* SetMoneyPage */]);
                return [2 /*return*/];
            });
        });
    };
    WalletPage.prototype.payment = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__barcode_scanner_barcode_scanner__["a" /* BarcodeScannerPage */]);
                return [2 /*return*/];
            });
        });
    };
    WalletPage.prototype.presentPopover = function () {
        this.isShowPop = !this.isShowPop;
    };
    WalletPage.prototype.bandCard = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__wallet_card_wallet_card__["a" /* WalletCardPage */]);
                return [2 /*return*/];
            });
        });
    };
    WalletPage.prototype.ionViewCanLeave = function () {
        this.isShowPop = false;
    };
    WalletPage.prototype.myFriend = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__wallet_friend_list_wallet_friend_list__["a" /* WalletFriendListPage */]);
                return [2 /*return*/];
            });
        });
    };
    // 交易记录
    WalletPage.prototype.expendOrSend = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__wallet_expend_wallet_expend__["a" /* WalletExpendPage */]);
                return [2 /*return*/];
            });
        });
    };
    WalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wallet',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/wallet/wallet.html"*/'<!--\n  Generated template for the WalletPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n\n<ion-header no-border>\n    <ion-navbar [hideBackButton]="true">\n\n        <ion-title style="text-align: center!important;">钱包</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="presentPopover()">\n            <ion-icon name="more"></ion-icon>\n          </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n\n    <div *ngIf="isShowPop" style="    position: fixed;top: 57px;right: 0;    z-index: 9999;">\n        <p style="padding:30px 10px;background:#fff;    padding: 10px 60px;\n                background: #fff;margin:0; " (click)="resetPay()">重置支付密码</p>\n        <p style="padding:30px 10px;background:#fff;    padding: 10px 60px;\n                background: #fff;margin:0;">注销钱包</p>\n        <p style="padding:30px 10px;background:#fff;    padding: 10px 60px;\n                background: #fff;margin:0;" (click)="info()">已认证</p>\n        <p style="padding:30px 10px;background:#fff;    padding: 10px 60px;\n                  background: #fff;margin:0;" (click)="bandCard()">会员卡</p>\n    </div>\n    <div class="mywallet">\n\n        <h3>余额(元)</h3>\n        <h2 *ngIf="account">{{account?.availAmt}}</h2>\n        <h2 *ngIf="!account">0</h2>\n\n    </div>\n\n    <ion-row>\n        <ion-col (click)="receivables()">\n            <img src="/assets/imgs/icon.png" alt="">收款</ion-col>\n        <ion-col (click)="payment()">\n            <img src="/assets/imgs/icon.png" alt="">付款</ion-col>\n\n        <ion-col style="border-right:none;" (click)="TransAccounts()">\n            <img src="/assets/imgs/icon.png" alt="">转账</ion-col>\n    </ion-row>\n\n    <!-- <ion-row>\n        <ion-col>\n            <img src="/assets/imgs/icon.png" alt="">圈存</ion-col>\n        <ion-col>\n            <img src="/assets/imgs/icon.png" alt="">圈提</ion-col>\n\n        <ion-col style="border-right:none;">\n            <img src="/assets/imgs/icon.png" alt="">添加银行卡</ion-col>\n    </ion-row> -->\n    <ion-row>\n        <ion-col (click)="expendOrSend()"><img src="/assets/imgs/icon.png" alt="">收支记录</ion-col>\n        <ion-col (click)="myFriend()">\n\n            <img src="/assets/imgs/icon.png" alt="">我的好友</ion-col>\n        <ion-col>\n        </ion-col>\n    </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/wallet/wallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_2__app_share_service_app_customer_service__["a" /* appCustomerService */],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_app_member_account_service__["a" /* appMemberAccountService */],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_12__app_share_service_http_service__["a" /* MyHttpService */]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetMoneyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_share_service_storage_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var View;
(function (View) {
    View[View["default"] = 0] = "default";
    View[View["editMoey"] = 1] = "editMoey";
    View[View["collMoney"] = 2] = "collMoney";
    View[View["qrcodepage"] = 3] = "qrcodepage";
})(View || (View = {}));
var SetMoneyPage = /** @class */ (function () {
    // qrcode_c
    function SetMoneyPage(navCtrl, navParams, sto, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sto = sto;
        this.events = events;
        this.authCode = '';
        this.View = View;
        this.state = View.default;
    }
    SetMoneyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpeningWallet4Page');
    };
    SetMoneyPage.prototype.next = function () {
        this.state = View.qrcodepage;
        // this.navCtrl.push(CollectMoneyPage, this.collectmoney)
    };
    SetMoneyPage.prototype.createCode = function () {
        this.createdCode = this.collectmoney;
        console.log(this.collectmoney);
    };
    SetMoneyPage.prototype.clearMoney = function () {
        this.collectmoney = 0;
        this.state = View.default;
    };
    SetMoneyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'set-money',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/set-money/set-money.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>收钱</ion-title>\n    </ion-navbar>\n\n</ion-header>\n<ion-content *ngIf="state==View.default">\n    <div style="    margin: 10px;background: #fff;    border: 1px solid #f6f6f6;border-top: none;padding-bottom: 20px;">\n        <p style="background: #f6f6f6;padding: 10px 0;color: #f85851;text-indent: 20px;font-size: 16px;"><i class="iconfont icon-qiandai"></i>我要收款</p>\n        <div style="display: flex;flex-direction: column;align-content: center;align-items: center;">\n            <p>请先设置金额</p>\n            <img src="/assets/imgs/qqqq.png" alt="" style="margin: 20px;">\n            <button (click)="state=View.editMoey" style="    background: none;border: 1px solid #f85851;padding: 15px 20px;border-radius: 40px;">设置金额</button>\n        </div>\n    </div>\n</ion-content>\n<ion-content *ngIf="state==View.editMoey">\n    <div style="padding-top: 67px;padding-bottom: 20px;">\n\n\n        <div style=" display: flex;flex-direction: column;align-content: center;align-items: center;border: 1px solid #f6f6f6;padding-bottom: 20px;margin: 10px;align-items: start;padding: 20px;">\n            <p>收款金额</p>\n            <div style="    border-bottom: 1px solid #ddd9d9;height: 50px;width: 100%;display: flex">\n                <p style="font-size: 20px;">￥</p>\n                <ion-input type="number" [(ngModel)]="collectmoney" style="    width: 100%;border: none;font-size: 30px;margin-left: 10px;">\n                </ion-input>\n\n            </div>\n            <button style="background: #f85851;width: 100%;padding: 10px 0;color: #fff; margin-top: 25px;" (click)="state=View.qrcodepage;createCode()">下一步</button>\n        </div>\n    </div>\n</ion-content>\n<ion-content *ngIf="state==View.qrcodepage">\n    <div style="    margin: 10px;background: #fff;    border: 1px solid #f6f6f6;border-top: none;padding-bottom: 20px;">\n        <p style="background: #f6f6f6;padding: 10px 0;color: #f85851;text-indent: 20px;font-size: 16px;"><i class="iconfont icon-qiandai"></i>我要收款</p>\n        <div style="display: flex;flex-direction: column;align-content: center;align-items: center;">\n            <h1><span>￥</span> {{collectmoney}}</h1>\n            <p>扫描二维码像我付钱</p>\n            <ion-card>\n\n                <ngx-qrcode [qrc-value]="collectmoney"></ngx-qrcode>\n            </ion-card>\n\n            <a (click)="clearMoney()" style="color:  #f85851;    margin-top: 30px">清除金额</a>\n\n        </div>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/set-money/set-money.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], SetMoneyPage);
    return SetMoneyPage;
}());

//# sourceMappingURL=set-money.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_share_service_storage_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AuthenticationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var AuthenticationPage = /** @class */ (function () {
    function AuthenticationPage(navCtrl, navParams, sto) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sto = sto;
        this.member = this.sto.member;
    }
    AuthenticationPage.prototype.ionViewDidLoad = function () {
    };
    AuthenticationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-authentication',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/authentication/authentication.html"*/'<!--\n  Generated template for the AuthenticationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>认证中心</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <p style="    margin-left: 20px;">已认证信息</p>\n    <ion-list style="    margin-top: 10px;" *ngIf="member">\n\n        <ion-item>\n            <ion-label color="primary">姓名</ion-label>\n            <ion-input placeholder="{{member?.name}}" style="text-align: right;"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary">证件类型</ion-label>\n            <ion-input placeholder="身份证" style="text-align: right;"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary">证件号</ion-label>\n            <ion-input placeholder="{{member?.idCardNo}}" style="text-align: right;"></ion-input>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/authentication/authentication.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__app_share_service_storage_service__["a" /* StorageService */]])
    ], AuthenticationPage);
    return AuthenticationPage;
}());

//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPayPassword1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_customer_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_common_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_share_service_http_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reset_pay_password3_reset_pay_password3__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_share_service_app_member_account_service__ = __webpack_require__(30);
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








/**
 * Generated class for the ResetPayPassword1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var ResetPayPassword1Page = /** @class */ (function () {
    function ResetPayPassword1Page(navCtrl, navParams, sto, customer, comm, http, app, ref, memService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sto = sto;
        this.customer = customer;
        this.comm = comm;
        this.http = http;
        this.app = app;
        this.ref = ref;
        this.memService = memService;
        this.password = '';
        this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        this.passwordString = '';
        this.isShow = false;
        this.x = "*";
        this.empty = " ";
        this.payPassword = "";
        this.member = this.sto.member;
    }
    //键盘测试
    ResetPayPassword1Page.prototype.fn = function (ps) {
        return this.passwordString = ps;
    };
    ResetPayPassword1Page.prototype.addString = function (i) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.passwordString.length <= 6)) return [3 /*break*/, 2];
                        this.ref.markForCheck();
                        this.ref.detectChanges();
                        this.passwordString = this.passwordString + i;
                        if (!(this.passwordString.length == 6)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.memService.confirePayPassword(this.sto.member.id, this.passwordString)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.http.createMessage("success", "验证成功");
                            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__reset_pay_password3_reset_pay_password3__["a" /* ResetPayPassword3Page */]);
                        }
                        else {
                            this.http.createMessage("error", "密码错误，请重新输入");
                            this.passwordString = "";
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ResetPayPassword1Page.prototype.keyD = function () {
        this.isShow = !this.isShow;
    };
    ResetPayPassword1Page.prototype.delect = function () {
        this.passwordString = this.passwordString.substring(0, this.passwordString.length - 1);
        this.ref.markForCheck();
        this.ref.detectChanges();
    };
    ResetPayPassword1Page.prototype.deleteAll = function () {
        this.passwordString = "";
    };
    ResetPayPassword1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reset-pay-password1',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/reset-pay-password1/reset-pay-password1.html"*/'<!--\n  Generated template for the ResetPayPassword1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>验证密码</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n\n    <div class="div_input" (click)="keyD();">\n        <p>{{fn(passwordString).substring(0,1)?x:empty}}</p>\n        <p>{{fn(passwordString).substring(1,2)?x:empty}}</p>\n        <p>{{fn(passwordString).substring(2,3)?x:empty}}</p>\n        <p>{{fn(passwordString).substring(3,4)?x:empty}}</p>\n        <p>{{fn(passwordString).substring(4,5)?x:empty}}</p>\n        <p style="border-right: 1px solid #7c7a7a">{{fn(passwordString).substring(5,6)?x:empty}}</p>\n\n    </div>\n\n\n    <div class="calc" *ngIf="isShow">\n        <button ion-button *ngFor="let number of numbers;" (click)="addString(number)">{{number}}</button>\n\n        <p (click)="delect()">删除</p>\n        <p (click)="deleteAll()">清空</p>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/reset-pay-password1/reset-pay-password1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_customer_service__["a" /* appCustomerService */],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_5__app_share_service_http_service__["a" /* MyHttpService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_7__app_share_service_app_member_account_service__["a" /* appMemberAccountService */]])
    ], ResetPayPassword1Page);
    return ResetPayPassword1Page;
}());

//# sourceMappingURL=reset-pay-password1.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpeningWallet2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opening_wallet3_opening_wallet3__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_common_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_share_service_app_common_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__share_platform_framework_enum__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_share_service_http_service__ = __webpack_require__(11);
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








/**
 * Generated class for the OpeningWallet2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var OpeningWallet2Page = /** @class */ (function () {
    function OpeningWallet2Page(navCtrl, navParams, customer, storage, common, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customer = customer;
        this.storage = storage;
        this.common = common;
        this.http = http;
        this.newMemberRealnameAuth = {
            name: '',
        };
        this.url = '';
        this.looptime = 60;
        this.wait = true;
        this.verifyType = __WEBPACK_IMPORTED_MODULE_6__share_platform_framework_enum__["b" /* VerifyType */].wallet;
    }
    OpeningWallet2Page.prototype.sendAuthcode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, timmer_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.customer.authcode(this.storage.customer.mktId, this.newMemberRealnameAuth.mobi, this.verifyType)];
                    case 1:
                        _a.resCode = _b.sent();
                        if (this.resCode) {
                            timmer_1 = setInterval(function () {
                                _this.looptime -= 1;
                                if (_this.looptime <= 0) {
                                    _this.wait = true;
                                    _this.looptime = 60;
                                    clearInterval(timmer_1);
                                }
                            }, 1000);
                        }
                        else {
                            this.wait = true;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    OpeningWallet2Page.prototype.upLoadImg = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.common.selectFile()];
                    case 1:
                        _a.url = _b.sent();
                        return [4 /*yield*/, this.common.uploadImage(this.url)];
                    case 2:
                        result = _b.sent();
                        this.newMemberRealnameAuth.idcardImgUrl = result.fileUrl;
                        return [2 /*return*/];
                }
            });
        });
    };
    OpeningWallet2Page.prototype.ionViewDidLoad = function () {
        if (this.storage.newMember) {
            this.newMemberRealnameAuth = this.storage.newMember;
        }
    };
    OpeningWallet2Page.prototype.checkAuthcode = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.customer.checkAuthcode(this.newMemberRealnameAuth.mobi, this.authcode, this.storage.customer.mktId, this.verifyType)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OpeningWallet2Page.prototype.goNext = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.url != '')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.checkAuthcode()];
                    case 1:
                        _a.sent();
                        this.newMemberRealnameAuth.customerId = this.storage.customer.id;
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__opening_wallet3_opening_wallet3__["a" /* OpeningWallet3Page */], { newMemberRealnameAuth: this.newMemberRealnameAuth });
                        this.storage.newMember = this.newMemberRealnameAuth;
                        return [3 /*break*/, 3];
                    case 2:
                        this.http.createMessage("error", "请补信息");
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OpeningWallet2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-opening-wallet2',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/opening-wallet2/opening-wallet2.html"*/'<!--\n  Generated template for the OpeningWallet2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>开通钱包</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list style="    margin-top: 10px;">\n\n        <!-- <ion-item style="margin-top: 17px;\n        border-top: none;">\n            <ion-label color="primary">实名类型</ion-label>\n            <div>\n\n\n                <ion-checkbox radio-color="balanced" toggle-class="toggle-dark" ng-value="item">\n                    个人\n\n                </ion-checkbox>\n                <ion-checkbox radio-color="balanced" toggle-class="toggle-dark" ng-value="item">\n                    企业\n\n                </ion-checkbox>\n            </div>\n        </ion-item> -->\n        <div class="justify-content" style="border: 1px solid #f5efef;\n        background: #fff;\n        height: 50px;\n        padding: 5px;margin-bottom: 10px;margin: 5px;">\n            <ion-input placeholder="请输入您的手机号" style="width: 70%;" [(ngModel)]="newMemberRealnameAuth.mobi"></ion-input>\n            <button ion-button style="width: 34%;\n            padding: 5px;\n            height: 30px;\n            border: 1px solid #00c7ae;\n            background: transparent !important;\n            color: #00c7ae;" *ngIf="wait" (click)="sendAuthcode();wait=!wait">获取验证码</button>\n\n\n            <button ion-button style="width: 34%;\n            padding: 5px;\n            height: 30px;\n            border: 1px solid #00c7ae;\n            background: transparent !important;\n            color: #00c7ae;" *ngIf="!wait">{{looptime}}</button>\n\n        </div>\n        <div class="justify-content" style="align-items: center;margin: 5px;">\n            <ion-input style="width: 70%;" style="width: 10%;\n            background: #fff;\n            border: 1px solid #f5efef;padding-left: 5px;" placeholder="验证码" [(ngModel)]="authcode"></ion-input>\n            <p style="font-size: 13px;\n            width: 90%;\n            /* padding: 0 5px; */\n            margin-left: 8px;font-size: 14px;\n            width: 66%;    margin-left: 16px;">验证码默认通过短信形式发送给您，请注意查收</p>\n        </div>\n        <ion-item>\n            <ion-label color="primary">姓名</ion-label>\n            <ion-input placeholder="" [(ngModel)]="newMemberRealnameAuth.name"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label color="primary">身份证号</ion-label>\n            <ion-input placeholder="" [(ngModel)]="newMemberRealnameAuth.idCardNo"></ion-input>\n        </ion-item>\n        <!-- <p style="    text-indent: 20px;\n        font-size: 17px;">此银行卡仅供提现</p>\n        <ion-item>\n            <ion-label color="primary">银行卡号</ion-label>\n            <ion-input placeholder="提现银行卡号" [(ngModel)]="newMemberRealnameAuth.bankcard"></ion-input>\n        </ion-item> -->\n    </ion-list>\n\n    <ion-list>\n        <ion-item>\n            <p color="primary" (click)="upLoadImg()">点击上传图片</p>\n            <img [src]="url" alt="">\n        </ion-item>\n    </ion-list>\n\n\n\n\n\n    <button ion-button color="xfd" block (click)="goNext()" style="width: 80%;\n    margin: 0 auto;\n    display: block;\n    margin-top: 43px;">确定</button>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/opening-wallet2/opening-wallet2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_5__app_share_service_app_common_service__["a" /* appCommonService */],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_7__app_share_service_http_service__["a" /* MyHttpService */]])
    ], OpeningWallet2Page);
    return OpeningWallet2Page;
}());

//# sourceMappingURL=opening-wallet2.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpeningWallet3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_member_account_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_share_service_http_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_home_customer_main_customer_main__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_share_service_common_service__ = __webpack_require__(41);
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







var ViewState;
(function (ViewState) {
    ViewState[ViewState["firstPassWord"] = 0] = "firstPassWord";
    ViewState[ViewState["endPass"] = 1] = "endPass";
})(ViewState || (ViewState = {}));
/**
 * Generated class for the OpeningWallet3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var OpeningWallet3Page = /** @class */ (function () {
    function OpeningWallet3Page(navCtrl, navParams, customer, storage, app, http, sto, comm, ref, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customer = customer;
        this.storage = storage;
        this.app = app;
        this.http = http;
        this.sto = sto;
        this.comm = comm;
        this.ref = ref;
        this.events = events;
        this.ViewState = ViewState;
        this.state = ViewState.firstPassWord;
        this.password = '';
        this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        this.passwordString = '';
        this.endPassWord = '';
        this.isShow = false;
        this.x = "*";
        this.empty = "";
        this.payPassword = "";
        this.newMemberRealnameAuth = this.navParams.data.newMemberRealnameAuth;
    }
    //键盘测试
    OpeningWallet3Page.prototype.fn = function (ps) {
        return this.passwordString = ps;
    };
    OpeningWallet3Page.prototype.fn2 = function (ps) {
        return this.endPassWord = ps;
    };
    OpeningWallet3Page.prototype.addString = function (i) {
        if (this.passwordString.length <= 6) {
            this.ref.markForCheck();
            this.ref.detectChanges();
            this.passwordString = this.passwordString + i;
            if (this.passwordString.length == 6) {
                this.http.createMessage("success", "请再次确认");
                this.state = ViewState.endPass;
                this.payPassword = this.passwordString;
            }
        }
        this.payPassword = this.passwordString;
    };
    OpeningWallet3Page.prototype.checkPassword = function (i) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.endPassWord.length <= 6)) return [3 /*break*/, 5];
                        this.ref.markForCheck();
                        this.ref.detectChanges();
                        this.endPassWord = this.endPassWord + i;
                        if (!(this.endPassWord.length == 6)) return [3 /*break*/, 5];
                        alert(this.endPassWord);
                        if (!(this.endPassWord == this.payPassword)) return [3 /*break*/, 4];
                        this.newMemberRealnameAuth.payPassword = this.endPassWord;
                        return [4 /*yield*/, this.customer.memberRealnameAuthCreate(this.newMemberRealnameAuth)];
                    case 1:
                        res = _a.sent();
                        if (!res) return [3 /*break*/, 3];
                        this.sto.member = res;
                        return [4 /*yield*/, this.comm.updateSto()];
                    case 2:
                        _a.sent();
                        this.events.publish("data", res);
                        this.http.createMessage("success", "开通钱包成功");
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__main_home_customer_main_customer_main__["a" /* CustomerMainPage */]);
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        this.http.createMessage("error", "两次密码不一致，请重新输入");
                        this.state = ViewState.firstPassWord;
                        this.endPassWord = "",
                            this.passwordString = "";
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    OpeningWallet3Page.prototype.keyD = function () {
        this.isShow = !this.isShow;
    };
    OpeningWallet3Page.prototype.delect = function () {
        this.passwordString = this.passwordString.substring(0, this.passwordString.length - 1);
        this.endPassWord = this.endPassWord.substring(0, this.endPassWord.length - 1);
        this.ref.markForCheck();
        this.ref.detectChanges();
    };
    OpeningWallet3Page.prototype.deleteAll = function () {
        this.passwordString = "";
        this.endPassWord = "";
    };
    // 键盘结束
    OpeningWallet3Page.prototype.ionViewCanEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    OpeningWallet3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-opening-wallet3',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/opening-wallet3/opening-wallet3.html"*/'<!--\n  Generated template for the OpeningWallet3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title *ngIf="state==ViewState.firstPassWord">输入密码</ion-title>\n        <ion-title *ngIf="state==ViewState.endPass">确认支付密码</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div *ngIf="state==ViewState.firstPassWord">\n        <div class="div_input" (click)="keyD();">\n            <p>{{fn(passwordString).substring(0,1)?x:empty}}</p>\n            <p>{{fn(passwordString).substring(1,2)?x:empty}}</p>\n            <p>{{fn(passwordString).substring(2,3)?x:empty}}</p>\n            <p>{{fn(passwordString).substring(3,4)?x:empty}}</p>\n            <p>{{fn(passwordString).substring(4,5)?x:empty}}</p>\n            <p style="border-right: 1px solid #7c7a7a">{{fn(passwordString).substring(5,6)?x:empty}}</p>\n\n        </div>\n\n\n        <div class="calc" *ngIf="isShow">\n            <button ion-button *ngFor="let number of numbers;" (click)="addString(number)">{{number}}</button>\n\n            <p (click)="delect()">删除</p>\n            <p (click)="deleteAll()">清空</p>\n        </div>\n    </div>\n    <div *ngIf="state==ViewState.endPass">\n        <div class="div_input" (click)="keyD();">\n            <p>{{fn2(endPassWord).substring(0,1)?x:empty}}</p>\n            <p>{{fn2(endPassWord).substring(1,2)?x:empty}}</p>\n            <p>{{fn2(endPassWord).substring(2,3)?x:empty}}</p>\n            <p>{{fn2(endPassWord).substring(3,4)?x:empty}}</p>\n            <p>{{fn2(endPassWord).substring(4,5)?x:empty}}</p>\n            <p style="border-right: 1px solid #7c7a7a">{{fn(endPassWord).substring(5,6)?x:empty}}</p>\n\n        </div>\n\n\n        <div class="calc" *ngIf="isShow">\n            <button ion-button *ngFor="let number of numbers;" (click)="checkPassword(number)">{{number}}</button>\n\n            <p (click)="delect()">删除</p>\n            <p (click)="deleteAll()">清空</p>\n        </div>\n\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/opening-wallet3/opening-wallet3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__app_share_service_app_member_account_service__["a" /* appMemberAccountService */],
            __WEBPACK_IMPORTED_MODULE_2__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_4__app_share_service_http_service__["a" /* MyHttpService */],
            __WEBPACK_IMPORTED_MODULE_2__app_share_service_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_6__app_share_service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], OpeningWallet3Page);
    return OpeningWallet3Page;
}());

//# sourceMappingURL=opening-wallet3.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserStatusEnum */
/* unused harmony export MarketStatusEnum */
/* unused harmony export ParamsTypeEnum */
/* unused harmony export ParamsIsLocalEnum */
/* unused harmony export UserLogTypeEnum */
/* unused harmony export PayFeeRecordEnum */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VerifyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityEnum; });
var UserStatusEnum;
(function (UserStatusEnum) {
    UserStatusEnum["Active"] = "active";
    UserStatusEnum["Disabled"] = "disabled";
    UserStatusEnum["Frozen"] = "frozen";
})(UserStatusEnum || (UserStatusEnum = {}));
var MarketStatusEnum;
(function (MarketStatusEnum) {
    MarketStatusEnum["Active"] = "active";
    MarketStatusEnum["Disabled"] = "disabled";
    /** 冻结*/
    MarketStatusEnum["Frozen"] = "frozen"; //冻结
})(MarketStatusEnum || (MarketStatusEnum = {}));
var ParamsTypeEnum;
(function (ParamsTypeEnum) {
    ParamsTypeEnum["Text"] = "text";
    ParamsTypeEnum["Input"] = "input";
})(ParamsTypeEnum || (ParamsTypeEnum = {}));
var ParamsIsLocalEnum;
(function (ParamsIsLocalEnum) {
    /**全局 */
    ParamsIsLocalEnum["Gloab"] = "gloab";
    /**本都 */
    ParamsIsLocalEnum["Local"] = "local";
})(ParamsIsLocalEnum || (ParamsIsLocalEnum = {}));
/**日志类型 */
var UserLogTypeEnum;
(function (UserLogTypeEnum) {
})(UserLogTypeEnum || (UserLogTypeEnum = {}));
var PayFeeRecordEnum;
(function (PayFeeRecordEnum) {
    PayFeeRecordEnum["Active"] = "active";
    /**延期 */
    PayFeeRecordEnum["Delay"] = "delay";
    PayFeeRecordEnum["Unactive"] = "unactive";
    PayFeeRecordEnum["Undisable"] = "undisable";
})(PayFeeRecordEnum || (PayFeeRecordEnum = {}));
var VerifyType;
(function (VerifyType) {
    VerifyType["login"] = "login";
    VerifyType["reg"] = "reg";
    VerifyType["wallet"] = "wallet";
})(VerifyType || (VerifyType = {}));
var EntityEnum;
(function (EntityEnum) {
    EntityEnum["Market"] = "com.fastsun.framework.entity.rbac.Market";
    EntityEnum["Product"] = "com.fastsun.framework.entity.rbac.Product";
    EntityEnum["MetaField"] = "com.fastsun.framework.entity.rbac.MetaField";
    EntityEnum["MetaObject"] = "com.fastsun.framework.entity.rbac.MetaObject";
    EntityEnum["Developer"] = "com.fastsun.framework.entity.rbac.Developer";
    EntityEnum["Menu"] = "com.fastsun.framework.entity.rbac.Menu";
    EntityEnum["Org"] = "com.fastsun.framework.entity.rbac.Org";
    EntityEnum["Role"] = "com.fastsun.framework.entity.rbac.Role";
    EntityEnum["User"] = "com.fastsun.framework.entity.rbac.User";
    EntityEnum["Params"] = "com.fastsun.framework.entity.rbac.Params";
    EntityEnum["UserLog"] = "com.fastsun.framework.entity.rbac.UserLog";
    EntityEnum["UserNotify"] = "com.fastsun.framework.entity.rbac.UserNotify";
    EntityEnum["Account"] = "com.fastsun.framework.entity.rbac.Account";
    EntityEnum["AccountDebt"] = "com.fastsun.framework.entity.rbac.AccountDebt";
    EntityEnum["AccountRepay"] = "com.fastsun.framework.entity.rbac.AccountRepay";
    EntityEnum["AccRecvPay"] = "com.fastsun.framework.entity.rbac.AccRecvPay";
    EntityEnum["AppMsgNotify"] = "com.fastsun.framework.entity.rbac.AppMsgNotify";
    EntityEnum["OrderNo"] = "com.fastsun.framework.entity.rbac.OrderNo";
    EntityEnum["OssFile"] = "com.fastsun.framework.entity.rbac.OssFile";
    EntityEnum["ProdCatalog"] = "com.fastsun.framework.entity.rbac.ProdCatalog";
    EntityEnum["RecvPaySubject"] = "com.fastsun.framework.entity.rbac.RecvPaySubject";
    EntityEnum["SMSLog"] = "com.fastsun.framework.entity.rbac.SMSLog";
    EntityEnum["TransArea"] = "com.fastsun.framework.entity.rbac.TransArea";
    EntityEnum["TransFeeRule"] = "com.fastsun.framework.entity.rbac.TransFeeRule";
    EntityEnum["CustCard"] = "com.fastsun.framework.entity.rbac.CustCard";
    EntityEnum["Customer"] = "com.fastsun.framework.entity.rbac.Customer";
    EntityEnum["Member"] = "com.fastsun.framework.entity.rbac.Member";
    EntityEnum["MemberAccount"] = "com.fastsun.framework.entity.rbac.MemberAccount";
    EntityEnum["MemberInvite"] = "com.fastsun.framework.entity.rbac.MemberInvite";
    EntityEnum["RechargeWithDraw"] = "com.fastsun.framework.entity.rbac.RechargeWithDraw";
    EntityEnum["FeeList"] = "com.fastsun.framework.entity.rbac.FeeList";
    EntityEnum["PayFee"] = "com.fastsun.framework.entity.rbac.PayFee";
    EntityEnum["PayFeeDetail"] = "com.fastsun.framework.entity.rbac.PayFeeDetail";
    EntityEnum["Order"] = "com.fastsun.market.entity.TransOrder.Order";
    EntityEnum["OrderDetail"] = "com.fastsun.framework.entity.rbac.OrderDetail";
})(EntityEnum || (EntityEnum = {}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletTransferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the WalletTransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WalletTransferPage = /** @class */ (function () {
    function WalletTransferPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WalletTransferPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalletTransferPage');
    };
    WalletTransferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wallet-transfer',template:/*ion-inline-start:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/wallet-transfer/wallet-transfer.html"*/'<!--\n  Generated template for the WalletTransferPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title mode="ios">转账</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n        <ion-item>\n            张三\n            <button ion-button outline item-end icon-start>\n            <ion-icon name="star"></ion-icon>\n            转账\n          </button>\n        </ion-item>\n    </ion-list>\n    <ion-list>\n        <ion-item>\n            张三\n            <button ion-button outline item-end icon-start>\n            <ion-icon name="star"></ion-icon>\n            转账\n          </button>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/yangjie/Documents/workspace/company/Sources/app/src/pages/wallet-transfer/wallet-transfer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], WalletTransferPage);
    return WalletTransferPage;
}());

//# sourceMappingURL=wallet-transfer.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(669);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic3_jpush__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(1320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_main_home_home_home__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signin_sign_in_sign_in__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signin_forget_password1_forget_password1__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signin_forget_password2_forget_password2__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signin_register1_register1__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signin_register_detail_register_detail__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_foot_bar_foot_bar__ = __webpack_require__(1321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_person_info_person_info__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_wallet_wallet__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_message_wait_message_wait__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_message_set_message_set__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_modify_password_modify_password__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_my_team_my_team__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_modify_phone_modify_phone__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_help_help__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_app_setup_app_setup__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_weigh_setup_weigh_setup__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_printing_setup_printing_setup__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_voice_setup_voice_setup__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_about_us_about_us__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_invitation_invitation__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_add_teamer_add_teamer__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_hot_iss_hot_iss__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_operation_manual_operation_manual__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_iss_detail_iss_detail__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_operation_manual_detail_operation_manual_detail__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_market_market__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_open_bill_open_bill__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_product_detail_product_detail__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_my_transaction_my_transaction__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_my_transaction_detail_my_transaction_detail__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_qr_code_qr_code__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_statisticals_statisticals__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_statistical_customer_statistical_customer__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_statistical_product_statistical_product__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_statistical_receivables_statistical_receivables__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_statistical_money_statistical_money__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_statistical_summary_statistical_summary__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_credit_credit__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_credit_detail_credit_detail__ = __webpack_require__(1322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_customer_customer__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_credit_sum_credit_sum__ = __webpack_require__(1323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_credit_detail2_credit_detail2__ = __webpack_require__(1324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_product_list_product_list__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_product_add_product_add__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_come_out_come_out__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_come_out_list_come_out_list__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_arrears_sum_arrears_sum__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_arrears_detail_arrears_detail__ = __webpack_require__(1325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_un_pay_un_pay__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_un_pay_detail_un_pay_detail__ = __webpack_require__(1326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_opening_wallet1_opening_wallet1__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_opening_wallet2_opening_wallet2__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_opening_wallet3_opening_wallet3__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_authentication_authentication__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_repayment_repayment__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_selset_product_selset_product__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_product_edit_product_edit__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_modify_new_phone_modify_new_phone__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_barcode_scanner_barcode_scanner__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_notification_notification__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__share_service_http_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__share_service_storage_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__app_config__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__angular_http__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_main_home_customer_main_customer_main__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__share_service_common_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__angular_forms__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__ionic_native_native_page_transitions__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__pages_mktlist_mktlist__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__pages_blue_list_blue_list__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__share_service_app_analysis_service__ = __webpack_require__(1327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__share_service_app_common_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__share_service_app_customer_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__share_service_app_member_account_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__share_service_app_message_service__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__share_service_app_ProductOrder_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__share_service_app_team_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__share_service_pinyinOrder_service__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__pages_set_money_set_money__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__pages_collect_money_collect_money__ = __webpack_require__(1328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__pages_reset_pay_password_reset_pay_password__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__pages_reset_pay_password1_reset_pay_password1__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__pages_reset_pay_password2_reset_pay_password2__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__pages_reset_pay_password3_reset_pay_password3__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__pages_team_add_detail_team_add_detail__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__pages_share_memberInvite__ = __webpack_require__(1329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__pages_share_nickName__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__app_share_pipe_priceUnit__ = __webpack_require__(1331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__share_pipe_priceWay__ = __webpack_require__(1332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__pages_order_pay_order_pay__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__pages_order_pay_end_order_pay_end__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__pages_order_pay_recive_end_order_pay_recive_end__ = __webpack_require__(1333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__pages_wallet_card_wallet_card__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101__pages_wallet_transfer_wallet_transfer__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102__pages_wallet_transfer_list_wallet_transfer_list__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103__pages_wallet_transfer_detail_wallet_transfer_detail__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104__pages_wallet_friend_wallet_friend__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_105__pages_wallet_transfer_serch_wallet_transfer_serch__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_106__pages_wallet_friend_list_wallet_friend_list__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_107__pages_wallet_friend_add_wallet_friend_add__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_108__pages_wallet_friend_detail_wallet_friend_detail__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_109__pages_wallet_expend_wallet_expend__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_110_ion_multi_picker__ = __webpack_require__(1334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_110_ion_multi_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_110_ion_multi_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_111__ionic_native_qr_scanner__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_112__ionic_native_file__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_113_ngx_qrcode2__ = __webpack_require__(1337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_114__ionic_native_ble__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_115__angular_common_http__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_116__share_pipe_invitype__ = __webpack_require__(1357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_117__share_pipe_megType__ = __webpack_require__(1358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_118__pages_wallet_expend_detail_wallet_expend_detail__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_119__share_pipe_orderType__ = __webpack_require__(1359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_120__ionic_native_media__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_121__pages_repayment_list_repayment_list__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// https://github.com/lh4111/ionic-jpush
 //ionic3 JPush;


 //登录
 //忘记密码页，手机验证
 //忘记密码页，重置密码
 //注册手机验证页
 //注册详情页



 //我的-待处理消息
 //我的-消息设置
 //我的-修改密码
 //我的-成员管理
 //我的=修改手机
 //我的-帮助
 //我的-设置
 //我的-设置-称重设置
 //我的-设置-打印设置
 //我的-设置-语音设置
 //我的-设置-关于我们
 //我的-团队-发出的邀请
 //我的-团队-添加成员
 //我的-帮助-热点问题
 //我的-帮助-操作手册
 //问题详情页

 //首页-市场公告
 //交易开单
 //商品详情页
 //我的交易
 //我的 交易详情
 //交易二维码
 //统计分析
 //交易客户统计
 //交易商品统计
 //交易收款统计
 //交易金额走势
 //统计分析-交易金额汇总
 //赊销记录
 //赊销详情
 //客列表
 //赊销汇总
 //赊销记录详情2-只有订单号
 //商品管理列表
 //添加商品
 //出厂申请
 //出厂申请记录
 //欠款汇总
 //欠款明细
 //我的待付款
 //支付详情
 //开通钱包1-用户协议
 //开通钱包-填写银行卡
 //开通钱包-设置支付密码
 //钱包-认证中心
 //还款记录
//交易开单弹出的pop层
 //选择商品（交易开单-全部商品-商品列表）
 //1类商品




















//拼音排序


 //我的钱包-收钱码
 //我的钱包-重置支付密码
 //我的钱包-修改支付密码-记得密码
 //我的钱包-修改支付密码-忘记密码
 //我的钱包-修改支付密码-输入新的支付密码
 //邀请--输入邀请内容




 //扫码支付详情--确认支付
 //扫码支付详情--支付完成--付款详情
 //扫码支付详情--支付完成--收款详情
 //钱包--绑定会员卡（实体卡）
 //钱包--转账--搜索页
 //钱包--转账列表
 //钱包--转账--详情
 //钱包--我的好友消息列表
 //钱包--搜索
 //钱包--我的好友列表
 //钱包--我的好友添加
 //钱包--我的好友添加详情
 //钱包--收支记录
//选择器插件
/**
 * [插件地址](https://github.com/raychenfj/ion-multi-picker)
 */

//扫描二维码

//设备平台
// import { Device } from '@ionic-native/device';
//

//录音插件
//文件路径

// 二维码生成 
//https://ionicacademy.com/ionic-qr-code-generator-reader/

//蓝牙4.0




 //收支记录详情


 //欠款汇总
var pipeList = [__WEBPACK_IMPORTED_MODULE_95__app_share_pipe_priceUnit__["a" /* ExponentialStrengthPipe */], __WEBPACK_IMPORTED_MODULE_96__share_pipe_priceWay__["a" /* PriceWayPipePipe */], __WEBPACK_IMPORTED_MODULE_116__share_pipe_invitype__["a" /* InviPipePipe */], __WEBPACK_IMPORTED_MODULE_117__share_pipe_megType__["a" /* MsgPipePipe */], __WEBPACK_IMPORTED_MODULE_119__share_pipe_orderType__["a" /* OrderTypePipePipe */]];
var pageList = [
    __WEBPACK_IMPORTED_MODULE_121__pages_repayment_list_repayment_list__["a" /* RepaymentListPage */],
    __WEBPACK_IMPORTED_MODULE_118__pages_wallet_expend_detail_wallet_expend_detail__["a" /* WalletExpendDetailPage */],
    __WEBPACK_IMPORTED_MODULE_109__pages_wallet_expend_wallet_expend__["a" /* WalletExpendPage */],
    __WEBPACK_IMPORTED_MODULE_108__pages_wallet_friend_detail_wallet_friend_detail__["a" /* WalletFriendDetailPage */],
    __WEBPACK_IMPORTED_MODULE_107__pages_wallet_friend_add_wallet_friend_add__["a" /* WalletFriendAddPage */],
    __WEBPACK_IMPORTED_MODULE_105__pages_wallet_transfer_serch_wallet_transfer_serch__["a" /* WalletTransferSerchPage */],
    __WEBPACK_IMPORTED_MODULE_106__pages_wallet_friend_list_wallet_friend_list__["a" /* WalletFriendListPage */],
    __WEBPACK_IMPORTED_MODULE_104__pages_wallet_friend_wallet_friend__["a" /* WalletFriendPage */],
    __WEBPACK_IMPORTED_MODULE_102__pages_wallet_transfer_list_wallet_transfer_list__["a" /* WalletTransferListPage */],
    __WEBPACK_IMPORTED_MODULE_101__pages_wallet_transfer_wallet_transfer__["a" /* WalletTransferPage */],
    __WEBPACK_IMPORTED_MODULE_103__pages_wallet_transfer_detail_wallet_transfer_detail__["a" /* WalletTransferDetailPage */],
    __WEBPACK_IMPORTED_MODULE_100__pages_wallet_card_wallet_card__["a" /* WalletCardPage */],
    __WEBPACK_IMPORTED_MODULE_67__pages_notification_notification__["a" /* NotificationPage */],
    __WEBPACK_IMPORTED_MODULE_97__pages_order_pay_order_pay__["a" /* OrderPayPage */],
    __WEBPACK_IMPORTED_MODULE_98__pages_order_pay_end_order_pay_end__["a" /* OrderPayEndPage */],
    __WEBPACK_IMPORTED_MODULE_99__pages_order_pay_recive_end_order_pay_recive_end__["a" /* OrderPayReciveEndPage */],
    __WEBPACK_IMPORTED_MODULE_91__pages_reset_pay_password3_reset_pay_password3__["a" /* ResetPayPassword3Page */],
    __WEBPACK_IMPORTED_MODULE_90__pages_reset_pay_password2_reset_pay_password2__["a" /* ResetPayPassword2Page */],
    __WEBPACK_IMPORTED_MODULE_89__pages_reset_pay_password1_reset_pay_password1__["a" /* ResetPayPassword1Page */],
    __WEBPACK_IMPORTED_MODULE_88__pages_reset_pay_password_reset_pay_password__["a" /* ResetPayPasswordPage */],
    __WEBPACK_IMPORTED_MODULE_66__pages_barcode_scanner_barcode_scanner__["a" /* BarcodeScannerPage */],
    // MemberRecivePage,
    __WEBPACK_IMPORTED_MODULE_94__pages_share_nickName__["a" /* NickNamePage */],
    __WEBPACK_IMPORTED_MODULE_93__pages_share_memberInvite__["a" /* MemberInvitePage */],
    __WEBPACK_IMPORTED_MODULE_92__pages_team_add_detail_team_add_detail__["a" /* TeamAddDetailPage */],
    __WEBPACK_IMPORTED_MODULE_87__pages_collect_money_collect_money__["a" /* CollectMoneyPage */],
    __WEBPACK_IMPORTED_MODULE_77__pages_blue_list_blue_list__["a" /* BlueListPage */],
    __WEBPACK_IMPORTED_MODULE_76__pages_mktlist_mktlist__["a" /* MktlistPage */],
    __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
    __WEBPACK_IMPORTED_MODULE_7__pages_main_home_home_home__["a" /* HomePage */],
    __WEBPACK_IMPORTED_MODULE_8__pages_signin_sign_in_sign_in__["a" /* SignInPage */],
    __WEBPACK_IMPORTED_MODULE_9__pages_signin_forget_password1_forget_password1__["a" /* ForgetPassword1Page */],
    __WEBPACK_IMPORTED_MODULE_10__pages_signin_forget_password2_forget_password2__["a" /* ForgetPassword2Page */],
    __WEBPACK_IMPORTED_MODULE_11__pages_signin_register1_register1__["a" /* Register1Page */],
    __WEBPACK_IMPORTED_MODULE_12__pages_signin_register_detail_register_detail__["a" /* RegisterDetailPage */],
    __WEBPACK_IMPORTED_MODULE_13__pages_foot_bar_foot_bar__["a" /* FootBarPage */],
    __WEBPACK_IMPORTED_MODULE_14__pages_person_info_person_info__["a" /* PersonInfoPage */],
    __WEBPACK_IMPORTED_MODULE_15__pages_wallet_wallet__["a" /* WalletPage */],
    __WEBPACK_IMPORTED_MODULE_86__pages_set_money_set_money__["a" /* SetMoneyPage */],
    __WEBPACK_IMPORTED_MODULE_16__pages_message_wait_message_wait__["a" /* MessageWaitPage */],
    __WEBPACK_IMPORTED_MODULE_18__pages_modify_password_modify_password__["a" /* ModifyPasswordPage */],
    __WEBPACK_IMPORTED_MODULE_19__pages_my_team_my_team__["a" /* MyTeamPage */],
    __WEBPACK_IMPORTED_MODULE_20__pages_modify_phone_modify_phone__["a" /* ModifyPhonePage */],
    __WEBPACK_IMPORTED_MODULE_17__pages_message_set_message_set__["a" /* MessageSetPage */],
    __WEBPACK_IMPORTED_MODULE_21__pages_help_help__["a" /* HelpPage */],
    __WEBPACK_IMPORTED_MODULE_22__pages_app_setup_app_setup__["a" /* AppSetupPage */],
    __WEBPACK_IMPORTED_MODULE_23__pages_weigh_setup_weigh_setup__["a" /* WeighSetupPage */],
    __WEBPACK_IMPORTED_MODULE_24__pages_printing_setup_printing_setup__["a" /* PrintingSetupPage */],
    __WEBPACK_IMPORTED_MODULE_25__pages_voice_setup_voice_setup__["a" /* VoiceSetupPage */],
    __WEBPACK_IMPORTED_MODULE_26__pages_about_us_about_us__["a" /* AboutUsPage */],
    __WEBPACK_IMPORTED_MODULE_27__pages_invitation_invitation__["a" /* InvitationPage */],
    __WEBPACK_IMPORTED_MODULE_28__pages_add_teamer_add_teamer__["a" /* AddTeamerPage */],
    __WEBPACK_IMPORTED_MODULE_29__pages_hot_iss_hot_iss__["a" /* HotIssPage */],
    __WEBPACK_IMPORTED_MODULE_30__pages_operation_manual_operation_manual__["a" /* OperationManualPage */],
    __WEBPACK_IMPORTED_MODULE_31__pages_iss_detail_iss_detail__["a" /* IssDetailPage */],
    __WEBPACK_IMPORTED_MODULE_32__pages_operation_manual_detail_operation_manual_detail__["a" /* OperationManualDetailPage */],
    __WEBPACK_IMPORTED_MODULE_33__pages_market_market__["a" /* MarketPage */],
    __WEBPACK_IMPORTED_MODULE_34__pages_open_bill_open_bill__["a" /* OpenBillPage */],
    __WEBPACK_IMPORTED_MODULE_35__pages_product_detail_product_detail__["a" /* ProductDetailPage */],
    __WEBPACK_IMPORTED_MODULE_36__pages_my_transaction_my_transaction__["a" /* MyTransactionPage */],
    __WEBPACK_IMPORTED_MODULE_37__pages_my_transaction_detail_my_transaction_detail__["a" /* MyTransactionDetailPage */],
    __WEBPACK_IMPORTED_MODULE_38__pages_qr_code_qr_code__["a" /* QrCodePage */],
    __WEBPACK_IMPORTED_MODULE_39__pages_statisticals_statisticals__["a" /* StatisticalsPage */],
    __WEBPACK_IMPORTED_MODULE_40__pages_statistical_customer_statistical_customer__["a" /* StatisticalCustomerPage */],
    __WEBPACK_IMPORTED_MODULE_41__pages_statistical_product_statistical_product__["a" /* StatisticalProductPage */],
    __WEBPACK_IMPORTED_MODULE_42__pages_statistical_receivables_statistical_receivables__["a" /* StatisticalReceivablesPage */],
    __WEBPACK_IMPORTED_MODULE_43__pages_statistical_money_statistical_money__["a" /* StatisticalMoneyPage */],
    __WEBPACK_IMPORTED_MODULE_44__pages_statistical_summary_statistical_summary__["a" /* StatisticalSummaryPage */],
    __WEBPACK_IMPORTED_MODULE_45__pages_credit_credit__["a" /* CreditPage */],
    __WEBPACK_IMPORTED_MODULE_46__pages_credit_detail_credit_detail__["a" /* CreditDetailPage */],
    __WEBPACK_IMPORTED_MODULE_47__pages_customer_customer__["a" /* CustomerPage */],
    __WEBPACK_IMPORTED_MODULE_48__pages_credit_sum_credit_sum__["a" /* CreditSumPage */],
    __WEBPACK_IMPORTED_MODULE_49__pages_credit_detail2_credit_detail2__["a" /* CreditDetail2Page */],
    __WEBPACK_IMPORTED_MODULE_50__pages_product_list_product_list__["a" /* ProductListPage */],
    __WEBPACK_IMPORTED_MODULE_51__pages_product_add_product_add__["a" /* ProductAddPage */],
    __WEBPACK_IMPORTED_MODULE_52__pages_come_out_come_out__["a" /* ComeOutPage */],
    __WEBPACK_IMPORTED_MODULE_53__pages_come_out_list_come_out_list__["a" /* ComeOutListPage */],
    __WEBPACK_IMPORTED_MODULE_54__pages_arrears_sum_arrears_sum__["a" /* ArrearsSumPage */],
    __WEBPACK_IMPORTED_MODULE_55__pages_arrears_detail_arrears_detail__["a" /* ArrearsDetailPage */],
    __WEBPACK_IMPORTED_MODULE_56__pages_un_pay_un_pay__["a" /* UnPayPage */],
    __WEBPACK_IMPORTED_MODULE_57__pages_un_pay_detail_un_pay_detail__["a" /* UnPayDetailPage */],
    __WEBPACK_IMPORTED_MODULE_58__pages_opening_wallet1_opening_wallet1__["a" /* OpeningWallet1Page */],
    __WEBPACK_IMPORTED_MODULE_59__pages_opening_wallet2_opening_wallet2__["a" /* OpeningWallet2Page */],
    __WEBPACK_IMPORTED_MODULE_60__pages_opening_wallet3_opening_wallet3__["a" /* OpeningWallet3Page */],
    __WEBPACK_IMPORTED_MODULE_61__pages_authentication_authentication__["a" /* AuthenticationPage */],
    __WEBPACK_IMPORTED_MODULE_62__pages_repayment_repayment__["a" /* RepaymentPage */],
    __WEBPACK_IMPORTED_MODULE_63__pages_selset_product_selset_product__["a" /* SelsetProductPage */],
    __WEBPACK_IMPORTED_MODULE_64__pages_product_edit_product_edit__["a" /* ProductEditPage */],
    __WEBPACK_IMPORTED_MODULE_65__pages_modify_new_phone_modify_new_phone__["a" /* ModifyNewPhonePage */],
    __WEBPACK_IMPORTED_MODULE_72__pages_main_home_customer_main_customer_main__["a" /* CustomerMainPage */],
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [pageList, pipeList],
            imports: [
                __WEBPACK_IMPORTED_MODULE_115__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_113_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_71__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_74__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_74__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_110_ion_multi_picker__["MultiPickerModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                // ShareModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    backButtonIcon: 'ios-arrow-back',
                    backButtonText: '',
                    tabsHideOnSubPages: 'true',
                    iconMode: 'ios',
                    modalEnter: 'modal-slide-in',
                    modalLeave: 'modal-slide-out',
                    tabsPlacement: 'bottom',
                    pageTransition: 'ios-transition',
                }, {
                    links: [
                        { loadChildren: '../pages/mktlist/mktlist.module#MktlistPageModule', name: 'MktlistPage', segment: 'mktlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/repayment-list/repayment-list.module#RepaymentListPageModule', name: 'RepaymentListPage', segment: 'repayment-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-pay-password/reset-pay-password.module#ResetPayPasswordPageModule', name: 'ResetPayPasswordPage', segment: 'reset-pay-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-pay-password2/reset-pay-password2.module#ResetPayPassword2PageModule', name: 'ResetPayPassword2Page', segment: 'reset-pay-password2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-pay-password3/reset-pay-password3.module#ResetPayPassword3PageModule', name: 'ResetPayPassword3Page', segment: 'reset-pay-password3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet-card/wallet-card.module#WalletCardPageModule', name: 'WalletCardPage', segment: 'wallet-card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet-expend-detail/wallet-expend-detail.module#WalletExpendDetailPageModule', name: 'WalletExpendDetailPage', segment: 'wallet-expend-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet-expend/wallet-expend.module#WalletExpendPageModule', name: 'WalletExpendPage', segment: 'wallet-expend', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet-friend-add/wallet-friend-add.module#WalletFriendAddPageModule', name: 'WalletFriendAddPage', segment: 'wallet-friend-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet-friend-detail/wallet-friend-detail.module#WalletFriendDetailPageModule', name: 'WalletFriendDetailPage', segment: 'wallet-friend-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet-friend-list/wallet-friend-list.module#WalletFriendListPageModule', name: 'WalletFriendListPage', segment: 'wallet-friend-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet-friend/wallet-friend.module#WalletFriendPageModule', name: 'WalletFriendPage', segment: 'wallet-friend', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet-transfer-detail/wallet-transfer-detail.module#WalletTransferDetailPageModule', name: 'WalletTransferDetailPage', segment: 'wallet-transfer-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet-transfer-list/wallet-transfer-list.module#WalletTransferListPageModule', name: 'WalletTransferListPage', segment: 'wallet-transfer-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet-transfer-serch/wallet-transfer-serch.module#WalletTransferSerchPageModule', name: 'WalletTransferSerchPage', segment: 'wallet-transfer-serch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet-transfer/wallet-transfer.module#WalletTransferPageModule', name: 'WalletTransferPage', segment: 'wallet-transfer', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: pageList,
            providers: [
                __WEBPACK_IMPORTED_MODULE_120__ionic_native_media__["a" /* Media */],
                __WEBPACK_IMPORTED_MODULE_112__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_111__ionic_native_qr_scanner__["a" /* QRScanner */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"],
                __WEBPACK_IMPORTED_MODULE_5_ionic3_jpush__["a" /* JPush */],
                // Device,
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_114__ionic_native_ble__["a" /* BLE */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_78__share_service_app_analysis_service__["a" /* appAnalysisService */],
                __WEBPACK_IMPORTED_MODULE_79__share_service_app_common_service__["a" /* appCommonService */],
                __WEBPACK_IMPORTED_MODULE_80__share_service_app_customer_service__["a" /* appCustomerService */],
                __WEBPACK_IMPORTED_MODULE_81__share_service_app_member_account_service__["a" /* appMemberAccountService */],
                __WEBPACK_IMPORTED_MODULE_82__share_service_app_message_service__["a" /* appMessageService */],
                __WEBPACK_IMPORTED_MODULE_83__share_service_app_ProductOrder_service__["a" /* appProductOrderService */],
                __WEBPACK_IMPORTED_MODULE_84__share_service_app_team_service__["a" /* appTeamService */],
                __WEBPACK_IMPORTED_MODULE_68__share_service_http_service__["a" /* MyHttpService */],
                __WEBPACK_IMPORTED_MODULE_69__share_service_storage_service__["a" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_73__share_service_common_service__["a" /* CommonService */],
                __WEBPACK_IMPORTED_MODULE_85__share_service_pinyinOrder_service__["a" /* pinyinOrderService */],
                __WEBPACK_IMPORTED_MODULE_75__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
                { useClass: __WEBPACK_IMPORTED_MODULE_70__app_config__["a" /* AppConfig */], provide: __WEBPACK_IMPORTED_MODULE_70__app_config__["a" /* AppConfig */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DefaultMarketGolbalParam */
/* unused harmony export MetaField */
/* unused harmony export MetaObject */
/* unused harmony export Developer */
/* unused harmony export Market */
/* unused harmony export Menu */
/* unused harmony export Org */
/* unused harmony export Role */
/* unused harmony export User */
/* unused harmony export Params */
/* unused harmony export UserLog */
/* unused harmony export UserNotify */
/* unused harmony export Group */
/* unused harmony export QueryAttributeType */
/* unused harmony export QueryAttribute */
/* unused harmony export QueryParameter */
/* unused harmony export QueryCondition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageParameter; });
/* unused harmony export QueryField */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QueryObject; });
/**
 * 默认市场的全局参数
 */
var DefaultMarketGolbalParam = /** @class */ (function () {
    function DefaultMarketGolbalParam() {
    }
    return DefaultMarketGolbalParam;
}());

/**
 * queryTemplate
 * 元数据
 */
var MetaField = /** @class */ (function () {
    function MetaField() {
    }
    return MetaField;
}());

var MetaObject = /** @class */ (function () {
    function MetaObject() {
    }
    return MetaObject;
}());

/**
 * rbac
 *
 * 开发者
 */
var Developer = /** @class */ (function () {
    function Developer() {
    }
    return Developer;
}());

/**
 * Market市场
 */
var Market = /** @class */ (function () {
    function Market() {
    }
    return Market;
}());

/**
 * Menu 菜单
 */
var Menu = /** @class */ (function () {
    function Menu() {
    }
    return Menu;
}());

/**
 * 组织
 *
 */
var Org = /** @class */ (function () {
    function Org() {
    }
    return Org;
}());

var Role = /** @class */ (function () {
    function Role() {
    }
    return Role;
}());

/**
 * 员工表
 */
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var Params = /** @class */ (function () {
    function Params() {
    }
    return Params;
}());

var UserLog = /** @class */ (function () {
    function UserLog() {
    }
    return UserLog;
}());

var UserNotify = /** @class */ (function () {
    function UserNotify() {
    }
    return UserNotify;
}());

//节点树
var Group = /** @class */ (function () {
    function Group() {
    }
    return Group;
}());

var QueryAttributeType;
(function (QueryAttributeType) {
    QueryAttributeType["Date"] = "Date";
    QueryAttributeType["String"] = "String";
    QueryAttributeType["Number"] = "Number";
    QueryAttributeType["Boolean"] = "Boolean";
})(QueryAttributeType || (QueryAttributeType = {}));
var QueryAttribute = /** @class */ (function () {
    function QueryAttribute() {
    }
    return QueryAttribute;
}());

var QueryParameter = /** @class */ (function () {
    function QueryParameter() {
        this.queryAttributes = [];
    }
    return QueryParameter;
}());

var QueryCondition = /** @class */ (function () {
    function QueryCondition(field, compare, value, andOr) {
        this.field = field;
        this.compare = compare;
        this.value = value;
        this.andOr = andOr;
    }
    return QueryCondition;
}());

var PageParameter = /** @class */ (function () {
    function PageParameter(pageIndex, pageSize, sortField, sortByAsc) {
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 0; }
        this.pageIndex = pageIndex;
        this.pageSize = pageSize;
        this.sortField = sortField;
        this.sortByAsc = sortByAsc;
    }
    return PageParameter;
}());

var QueryField = /** @class */ (function () {
    function QueryField() {
    }
    return QueryField;
}());

var QueryObject = /** @class */ (function () {
    function QueryObject() {
    }
    /** or 并联查询 */
    QueryObject.Or = function (queryObjects) {
        var conditions = [];
        for (var _i = 0, queryObjects_1 = queryObjects; _i < queryObjects_1.length; _i++) {
            var obj = queryObjects_1[_i];
            var queryConditions = QueryObject.toQueryContions(Object.assign(obj, new QueryObject()));
            queryConditions[queryConditions.length - 1].andOr = "or";
            conditions.push.apply(conditions, queryConditions);
        }
        return conditions;
    };
    QueryObject.toQueryContions = function (queryObject) {
        var conditions = [];
        for (var key in queryObject) {
            if (key != "toQueryParameter") {
                var value = queryObject[key];
                var type = void 0;
                if (typeof value == "string") {
                    type = "string";
                }
                if (typeof value == "number") {
                    type = "number";
                }
                if (Array.isArray(value)) {
                    throw new Error("不支持数组");
                }
                if (typeof value == "object") {
                    type = "object";
                }
                if (value instanceof Date) {
                    type = "date";
                }
                switch (type) {
                    case "string":
                    case "number":
                    case "date":
                        conditions.push(new QueryCondition(key, "=", value, "and"));
                        break;
                    default:
                        for (var op in value) {
                            var field = value[op];
                            switch (op) {
                                case "$lt":
                                    conditions.push(new QueryCondition(key, "<", field, "and"));
                                    break;
                                case "$gt":
                                    conditions.push(new QueryCondition(key, ">", field, "and"));
                                    break;
                                case "$notEq":
                                    conditions.push(new QueryCondition(key, "!=", field, "and"));
                                    break;
                                case "$like":
                                    conditions.push(new QueryCondition(key, ":", field, "and"));
                                    break;
                                case "$likeStart":
                                    conditions.push(new QueryCondition(key, "l:", field, "and"));
                                    break;
                                case "$likeEnd":
                                    conditions.push(new QueryCondition(key, ":l", field, "and"));
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                }
            }
        }
        return conditions;
    };
    return QueryObject;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appCommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
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


var appCommonService = /** @class */ (function () {
    function appCommonService(http) {
        this.http = http;
        this.api = {
            marketList: '/app/common/market-list',
            /**
             * get
             * ?phone&authcode&verifyType&mktId
             */
            checkAuthcode: '/app/common/check-authcode',
            /**
             * get
             * ?phone&verifyType&mktId
             */
            sendAuthcode: '/app/common/send-authcode'
        };
    }
    appCommonService.prototype.authcode = function (mktId, phone, verifyType) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.sendAuthcode, { params: { phone: phone, mktId: mktId, verifyType: verifyType } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appCommonService.prototype.marketList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.marketList)];
                    case 1:
                        result = _a.sent();
                        if (result.markets) {
                            return [2 /*return*/, result.markets];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    appCommonService.prototype.checkAuthcode = function (phone, authcode, mktId, verifyType) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.Get(this.api.checkAuthcode, { params: { phone: phone, authcode: authcode, mktId: mktId, verifyType: verifyType } })];
            });
        });
    };
    appCommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__http_service__["a" /* MyHttpService */]])
    ], appCommonService);
    return appCommonService;
}());

//# sourceMappingURL=app_common.service.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StorageService = /** @class */ (function () {
    //读写
    function StorageService() {
    }
    Object.defineProperty(StorageService.prototype, "customer", {
        get: function () {
            return JSON.parse(localStorage.getItem('customer'));
        },
        set: function (customer) {
            localStorage.setItem('customer', JSON.stringify(customer));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageService.prototype, "disabledMsgTypes", {
        get: function () {
            return this.customer.disabledMsgTypes ? this.customer.disabledMsgTypes.split(",") : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageService.prototype, "token", {
        get: function () {
            return localStorage.getItem('token');
        },
        set: function (token) {
            localStorage.setItem('token', token);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageService.prototype, "market", {
        get: function () {
            return JSON.parse(localStorage.getItem("market"));
        },
        set: function (market) {
            localStorage.setItem("market", JSON.stringify(market));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageService.prototype, "member", {
        get: function () {
            return JSON.parse(localStorage.getItem("member"));
        },
        set: function (member) {
            localStorage.setItem("member", JSON.stringify(member));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageService.prototype, "priceW", {
        get: function () {
            return JSON.parse(localStorage.getItem("priceW"));
        },
        set: function (priceW) {
            localStorage.setItem("priceW", JSON.stringify(priceW));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageService.prototype, "txn", {
        get: function () {
            return JSON.parse(localStorage.getItem("txn"));
        },
        set: function (txn) {
            localStorage.setItem("txn", JSON.stringify(txn));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageService.prototype, "newMember", {
        get: function () {
            return JSON.parse(localStorage.getItem("newMember"));
        },
        set: function (newMember) {
            localStorage.setItem("newMember", JSON.stringify(newMember));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageService.prototype, "card", {
        get: function () {
            return JSON.parse(localStorage.getItem("card"));
        },
        set: function (card) {
            localStorage.setItem("card", JSON.stringify(card));
        },
        enumerable: true,
        configurable: true
    });
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appTeamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__(9);
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



var appTeamService = /** @class */ (function () {
    function appTeamService(http, sto) {
        this.http = http;
        this.sto = sto;
        this.api = {
            /**
             * 根据customerId列出team成员
             * get
             * ?memberId&teamId
             */
            teamList: "/app/team/list",
            /**
             * POST
             * body:InviteLog
             */
            inviteCustomer: "/app/team/invite-customer",
            /**
             * 接受加入团队邀请
            GET
            ?inviteLogId&mktId&customerId
             */
            acceptInvite: "/app/team/accept-invite",
            /**
             * 拒绝加入团队邀请
                GET
                ?mktId&inviteLogId&customerId
             */
            refuseInvite: "/app/team/refuse-invite",
            /**
            *
            * get
            * ?mktId&memberId
            *
             */
            invitelogList: "/app/team/invitelog-list",
            /**
             * 根据手机号查找用户
            *get
            *列出发出去的邀请,时间倒叙排序
             **/
            searchCustomerByPhone: "/app/team/search-customer-by-phone",
            /**
             * get
             * ?mktId&customerId
            */
            findFreeCustomer: "/app/team/find-free-customer",
            /**
             * exitTeam
             */
            exitTeam: '/app/team/exit',
            /**
             * get ?customerId&commentName&fromMemberId   备注成员昵称
             */
            commmentCustomer: "/app/team/comment-customer",
            /**
             * get ?mktId&customerId 收到的邀请
             */
            recvInvite: "/app/team/recv-invite",
            /**
             * 废弃邀请记录 get ?mktId&customerId&inviteLogId
             *
             */
            disabledInvite: "/app/team/disabled-invite",
        };
    }
    appTeamService.prototype.disabledInvite = function (inviteLogId, mktId, customerId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mktId = this.sto.member.mktId;
                        customerId = this.sto.customer.id;
                        return [4 /*yield*/, this.http.Get(this.api.disabledInvite, { params: { inviteLogId: inviteLogId, mktId: mktId, customerId: customerId, } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appTeamService.prototype.recvInvite = function (mktId, customerId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mktId = this.sto.customer.mktId;
                        customerId = this.sto.customer.id;
                        return [4 /*yield*/, this.http.Get(this.api.recvInvite, { params: { mktId: mktId, customerId: customerId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.memberInvites];
                }
            });
        });
    };
    appTeamService.prototype.commmentCustomer = function (customerId, commentName, fromMemberId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.commmentCustomer, { params: { customerId: customerId, commentName: commentName, fromMemberId: fromMemberId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appTeamService.prototype.exitTeam = function (customerId, mktId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mktId = this.sto.customer.mktId;
                        return [4 /*yield*/, this.http.Get(this.api.exitTeam, { params: { customerId: customerId, mktId: mktId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appTeamService.prototype.findFreeCustomer = function (mktId, customerId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Get(this.api.findFreeCustomer, { params: { mktId: mktId, customerId: customerId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appTeamService.prototype.searchCustomerByPhone = function (phone, mktId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mktId = this.sto.customer.mktId;
                        return [4 /*yield*/, this.http.Get(this.api.searchCustomerByPhone, { params: { phone: phone, mktId: mktId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.customer];
                }
            });
        });
    };
    appTeamService.prototype.invitelogList = function (mktId, memberId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mktId = this.sto.customer.mktId;
                        memberId = this.sto.customer.memberId;
                        return [4 /*yield*/, this.http.Get(this.api.invitelogList, { params: { mktId: mktId, memberId: memberId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.memberInvites];
                }
            });
        });
    };
    appTeamService.prototype.refuseInvite = function (inviteLogId, mktId, customerId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mktId = this.sto.customer.mktId;
                        customerId = this.sto.customer.id;
                        return [4 /*yield*/, this.http.Get(this.api.refuseInvite, { params: { inviteLogId: inviteLogId, mktId: mktId, customerId: customerId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appTeamService.prototype.acceptInvite = function (inviteLogId, mktId, customerId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mktId = this.sto.customer.mktId;
                        customerId = this.sto.customer.id;
                        return [4 /*yield*/, this.http.Get(this.api.acceptInvite, { params: { inviteLogId: inviteLogId, mktId: mktId, customerId: customerId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appTeamService.prototype.inviteCustomer = function (inviteLog) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.Post(this.api.inviteCustomer, inviteLog)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    appTeamService.prototype.teamList = function (memberId, mktId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mktId = this.sto.customer.mktId;
                        memberId = this.sto.customer.memberId;
                        return [4 /*yield*/, this.http.Get(this.api.teamList, { params: { memberId: memberId, mktId: mktId } })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.customers];
                }
            });
        });
    };
    appTeamService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* MyHttpService */], __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]])
    ], appTeamService);
    return appTeamService;
}());

//# sourceMappingURL=app_team.service.js.map

/***/ })

},[648]);
//# sourceMappingURL=main.js.map