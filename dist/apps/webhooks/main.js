/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/webhooks/src/dto/create-relocation.dto.ts":
/*!********************************************************!*\
  !*** ./apps/webhooks/src/dto/create-relocation.dto.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateRelocationDto = void 0;
var class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
var CreateRelocationDto = /** @class */ (function () {
    function CreateRelocationDto() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CreateRelocationDto.prototype, "lassraId", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CreateRelocationDto.prototype, "newCOllectionCenter", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CreateRelocationDto.prototype, "currentLocation", void 0);
    return CreateRelocationDto;
}());
exports.CreateRelocationDto = CreateRelocationDto;


/***/ }),

/***/ "./apps/webhooks/src/main.ts":
/*!***********************************!*\
  !*** ./apps/webhooks/src/main.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
var webhooks_module_1 = __webpack_require__(/*! ./webhooks.module */ "./apps/webhooks/src/webhooks.module.ts");
var microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function () {
        var app;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, core_1.NestFactory.createMicroservice(webhooks_module_1.WebhooksModule, {
                        transport: microservices_1.Transport.RMQ,
                        options: {
                            urls: [
                                'amqps://jzzeeyil:7KLJorTAsikZBbvXSt9eJ8xizBcYouuK@lionfish.rmq.cloudamqp.com/jzzeeyil',
                            ],
                            queue: 'webhook_queue',
                            queueOptions: { durable: false },
                        },
                    })];
                case 1:
                    app = _a.sent();
                    console.log('Microservice starting');
                    return [4 /*yield*/, app.listen()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
bootstrap();


/***/ }),

/***/ "./apps/webhooks/src/webhooks.controller.ts":
/*!**************************************************!*\
  !*** ./apps/webhooks/src/webhooks.controller.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebhooksController = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var webhooks_service_1 = __webpack_require__(/*! ./webhooks.service */ "./apps/webhooks/src/webhooks.service.ts");
var microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
var create_relocation_dto_1 = __webpack_require__(/*! ./dto/create-relocation.dto */ "./apps/webhooks/src/dto/create-relocation.dto.ts");
var WebhooksController = /** @class */ (function () {
    function WebhooksController(webhooksService) {
        this.webhooksService = webhooksService;
    }
    WebhooksController.prototype.createRelocation = function (data, context) {
        console.log(context.getMessage());
        return this.webhooksService.createRelocation();
    };
    var _a, _b, _c;
    __decorate([
        (0, microservices_1.EventPattern)('create-relocation'),
        __param(0, (0, microservices_1.Payload)()),
        __param(1, (0, microservices_1.Ctx)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof create_relocation_dto_1.CreateRelocationDto !== "undefined" && create_relocation_dto_1.CreateRelocationDto) === "function" ? _a : Object, typeof (_b = typeof microservices_1.RmqContext !== "undefined" && microservices_1.RmqContext) === "function" ? _b : Object]),
        __metadata("design:returntype", void 0)
    ], WebhooksController.prototype, "createRelocation", null);
    WebhooksController = __decorate([
        (0, common_1.Controller)(),
        __metadata("design:paramtypes", [typeof (_c = typeof webhooks_service_1.WebhooksService !== "undefined" && webhooks_service_1.WebhooksService) === "function" ? _c : Object])
    ], WebhooksController);
    return WebhooksController;
}());
exports.WebhooksController = WebhooksController;


/***/ }),

/***/ "./apps/webhooks/src/webhooks.module.ts":
/*!**********************************************!*\
  !*** ./apps/webhooks/src/webhooks.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebhooksModule = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var webhooks_controller_1 = __webpack_require__(/*! ./webhooks.controller */ "./apps/webhooks/src/webhooks.controller.ts");
var webhooks_service_1 = __webpack_require__(/*! ./webhooks.service */ "./apps/webhooks/src/webhooks.service.ts");
var microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
var WebhooksModule = /** @class */ (function () {
    function WebhooksModule() {
    }
    WebhooksModule = __decorate([
        (0, common_1.Module)({
            imports: [
                microservices_1.ClientsModule.register([
                    {
                        name: 'WEBHOOK_SERVICE',
                        transport: microservices_1.Transport.RMQ,
                        options: {
                            urls: ['amqp://localhost:5672'],
                            queue: 'webhook_queue',
                            noAck: false,
                            queueOptions: {
                                durable: false,
                            },
                        },
                    },
                ]),
            ],
            controllers: [webhooks_controller_1.WebhooksController],
            providers: [webhooks_service_1.WebhooksService],
        })
    ], WebhooksModule);
    return WebhooksModule;
}());
exports.WebhooksModule = WebhooksModule;


/***/ }),

/***/ "./apps/webhooks/src/webhooks.service.ts":
/*!***********************************************!*\
  !*** ./apps/webhooks/src/webhooks.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebhooksService = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
var WebhooksService = /** @class */ (function () {
    function WebhooksService() {
    }
    WebhooksService.prototype.createRelocation = function () {
        this.client.emit('creat-relocation', 'relocation emmitted');
        return 'Hello World!';
    };
    var _a;
    __decorate([
        (0, common_1.Inject)('WEBHOOK_SERVICE'),
        __metadata("design:type", typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object)
    ], WebhooksService.prototype, "client", void 0);
    WebhooksService = __decorate([
        (0, common_1.Injectable)(),
        __metadata("design:paramtypes", [])
    ], WebhooksService);
    return WebhooksService;
}());
exports.WebhooksService = WebhooksService;


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./apps/webhooks/src/main.ts");
/******/ 	
/******/ })()
;