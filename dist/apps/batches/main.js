/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/batches/src/app.controller.ts":
/*!********************************************!*\
  !*** ./apps/batches/src/app.controller.ts ***!
  \********************************************/
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
exports.AppController = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/batches/src/app.service.ts");
var swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
var AppController = /** @class */ (function () {
    function AppController(appService) {
        this.appService = appService;
    }
    var _a;
    AppController = __decorate([
        (0, swagger_1.ApiTags)('Batch'),
        (0, common_1.Controller)('batch'),
        __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
    ], AppController);
    return AppController;
}());
exports.AppController = AppController;


/***/ }),

/***/ "./apps/batches/src/app.module.ts":
/*!****************************************!*\
  !*** ./apps/batches/src/app.module.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/batches/src/app.service.ts");
var app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/batches/src/app.controller.ts");
var common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
var typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
var entities_1 = __webpack_require__(/*! ./entities */ "./apps/batches/src/entities/index.ts");
var config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
var card_module_1 = __webpack_require__(/*! ./card/card.module */ "./apps/batches/src/card/card.module.ts");
var cardreceipt_module_1 = __webpack_require__(/*! ./cardreceipt/cardreceipt.module */ "./apps/batches/src/cardreceipt/cardreceipt.module.ts");
var receipt_module_1 = __webpack_require__(/*! ./receipt/receipt.module */ "./apps/batches/src/receipt/receipt.module.ts");
var batch_module_1 = __webpack_require__(/*! ./batch/batch.module */ "./apps/batches/src/batch/batch.module.ts");
var devtools_integration_1 = __webpack_require__(/*! @nestjs/devtools-integration */ "@nestjs/devtools-integration");
// import { CorsModule } from '@nestjs/platform-express';
var provision_module_1 = __webpack_require__(/*! ./provision/provision.module */ "./apps/batches/src/provision/provision.module.ts");
var cardprovision_module_1 = __webpack_require__(/*! ./cardprovision/cardprovision.module */ "./apps/batches/src/cardprovision/cardprovision.module.ts");
var dispatch_module_1 = __webpack_require__(/*! ./dispatch/dispatch.module */ "./apps/batches/src/dispatch/dispatch.module.ts");
var retrival_module_1 = __webpack_require__(/*! ./retrival/retrival.module */ "./apps/batches/src/retrival/retrival.module.ts");
var delivery_module_1 = __webpack_require__(/*! ./delivery/delivery.module */ "./apps/batches/src/delivery/delivery.module.ts");
var backup_module_1 = __webpack_require__(/*! ./backup/backup.module */ "./apps/batches/src/backup/backup.module.ts");
var backup_service_1 = __webpack_require__(/*! ./backup/backup.service */ "./apps/batches/src/backup/backup.service.ts");
var schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                devtools_integration_1.DevtoolsModule.register({
                    http: process.env.NODE_ENV !== 'production',
                }),
                common_2.LoggerModule,
                config_1.ConfigModule.forRoot({
                    isGlobal: true,
                }),
                schedule_1.ScheduleModule.forRoot(),
                typeorm_1.TypeOrmModule.forRootAsync({
                    imports: [config_1.ConfigModule],
                    useFactory: function (configService) { return ({
                        type: 'postgres',
                        host: configService.get('POSTGRES_HOST'),
                        port: parseInt(configService.get('POSTGRES_PORT')),
                        username: configService.get('POSTGRES_USER'),
                        password: configService.get('POSTGRES_PASSWORD'),
                        database: configService.get('POSTGRES_DATABASE'),
                        entities: [__dirname + '/**/*.entity{.ts,.js}'],
                        autoLoadEntities: true,
                        synchronize: true,
                    }); },
                    inject: [config_1.ConfigService],
                }),
                typeorm_1.TypeOrmModule.forFeature([entities_1.Batch, entities_1.Card, entities_1.Receipt, entities_1.CardReceipt]),
                batch_module_1.BatchModule,
                receipt_module_1.ReceiptModule,
                card_module_1.CardModule,
                cardreceipt_module_1.CardReceiptModule,
                provision_module_1.ProvisionModule,
                cardprovision_module_1.CardprovisionModule,
                dispatch_module_1.DispatchModule,
                retrival_module_1.RetrivalModule,
                delivery_module_1.DeliveryModule,
                backup_module_1.BackupModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [
                app_service_1.AppService,
                config_1.ConfigService,
                // BackupCron,
                backup_service_1.BackupService,
                // RmqService,
                // { provide: 'WEBHOOK_SERVICE', useValue: RmqService },
                // {
                //   provide: APP_FILTER,
                //   useClass: HttpExceptionFilter,
                // },
            ],
            exports: [config_1.ConfigService],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/batches/src/app.service.ts":
/*!*****************************************!*\
  !*** ./apps/batches/src/app.service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var AppService = /** @class */ (function () {
    function AppService() {
    }
    AppService = __decorate([
        (0, common_1.Injectable)()
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;


/***/ }),

/***/ "./apps/batches/src/backup/backup.controller.ts":
/*!******************************************************!*\
  !*** ./apps/batches/src/backup/backup.controller.ts ***!
  \******************************************************/
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
exports.BackupController = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var backup_service_1 = __webpack_require__(/*! ./backup.service */ "./apps/batches/src/backup/backup.service.ts");
var BackupController = /** @class */ (function () {
    function BackupController(backupService) {
        this.backupService = backupService;
    }
    BackupController.prototype.restoreBackup = function (backupFile) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!backupFile)
                            throw new Error('provide backup file path');
                        return [4 /*yield*/, this.backupService.restoreBackup(backupFile)];
                    case 1:
                        result = _a.sent();
                        // const result = await this.backupService.restoreBackup(
                        //   '../../../../backup.sql',
                        // );
                        return [2 /*return*/, { message: 'Backup restored successfully' }];
                }
            });
        });
    };
    BackupController.prototype.createBackup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.backupService.createBackup()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, { message: 'Backup created successfully' }];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    var _a;
    __decorate([
        (0, common_1.Post)('restore'),
        __param(0, (0, common_1.Body)('backupFile')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], BackupController.prototype, "restoreBackup", null);
    __decorate([
        (0, common_1.Post)('create'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], BackupController.prototype, "createBackup", null);
    BackupController = __decorate([
        (0, common_1.Controller)('backup'),
        __metadata("design:paramtypes", [typeof (_a = typeof backup_service_1.BackupService !== "undefined" && backup_service_1.BackupService) === "function" ? _a : Object])
    ], BackupController);
    return BackupController;
}());
exports.BackupController = BackupController;


/***/ }),

/***/ "./apps/batches/src/backup/backup.cron.ts":
/*!************************************************!*\
  !*** ./apps/batches/src/backup/backup.cron.ts ***!
  \************************************************/
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
exports.BackupCron = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
var backup_service_1 = __webpack_require__(/*! ./backup.service */ "./apps/batches/src/backup/backup.service.ts");
var BackupCron = /** @class */ (function () {
    function BackupCron(backupService) {
        this.backupService = backupService;
    }
    BackupCron.prototype.createBackup = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Creating backup');
                        // return;
                        return [4 /*yield*/, this.backupService.createBackup()];
                    case 1:
                        // return;
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    var _a;
    __decorate([
        (0, schedule_1.Cron)('0 0 12 * * *') // runs every day at 12:00 PM
        ,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], BackupCron.prototype, "createBackup", null);
    BackupCron = __decorate([
        (0, common_1.Injectable)(),
        __metadata("design:paramtypes", [typeof (_a = typeof backup_service_1.BackupService !== "undefined" && backup_service_1.BackupService) === "function" ? _a : Object])
    ], BackupCron);
    return BackupCron;
}());
exports.BackupCron = BackupCron;


/***/ }),

/***/ "./apps/batches/src/backup/backup.module.ts":
/*!**************************************************!*\
  !*** ./apps/batches/src/backup/backup.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BackupModule = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var backup_service_1 = __webpack_require__(/*! ./backup.service */ "./apps/batches/src/backup/backup.service.ts");
var backup_controller_1 = __webpack_require__(/*! ./backup.controller */ "./apps/batches/src/backup/backup.controller.ts");
var backup_cron_1 = __webpack_require__(/*! ./backup.cron */ "./apps/batches/src/backup/backup.cron.ts");
var BackupModule = /** @class */ (function () {
    function BackupModule() {
    }
    BackupModule = __decorate([
        (0, common_1.Module)({
            controllers: [backup_controller_1.BackupController],
            providers: [backup_service_1.BackupService, backup_cron_1.BackupCron],
        })
    ], BackupModule);
    return BackupModule;
}());
exports.BackupModule = BackupModule;


/***/ }),

/***/ "./apps/batches/src/backup/backup.service.ts":
/*!***************************************************!*\
  !*** ./apps/batches/src/backup/backup.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
exports.BackupService = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var childProcess = __importStar(__webpack_require__(/*! child_process */ "child_process"));
// import psql from 'psql';
var BackupService = /** @class */ (function () {
    function BackupService(configService, dataSource) {
        this.configService = configService;
        this.dataSource = dataSource;
    }
    BackupService.prototype.createBackup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var username, database, password, host, port, command, options;
            return __generator(this, function (_a) {
                try {
                    username = this.configService.get('POSTGRES_USER');
                    database = this.configService.get('POSTGRES_DATABASE');
                    password = this.configService.get('POSTGRES_PASSWORD');
                    host = this.configService.get('POSTGRES_HOST');
                    port = this.configService.get('POSTGRES_PORT');
                    command = "docker exec  card_tracker-postgres-1 pg_dump -U ".concat(username, " -h ").concat(host, " -p ").concat(port, " -d ").concat(database, " > backup.sql");
                    options = {
                        env: {
                            PGPASSWORD: password,
                        },
                    };
                    childProcess.exec(command, options, function (error, stdout, stderr) {
                        if (error) {
                            throw error;
                        }
                        console.log('Executing backup');
                        if (stdout) {
                            console.log("pg_dump stdout: ".concat(stdout));
                        }
                        if (stderr) {
                            console.error("pg_dump stderr: ".concat(stderr));
                        }
                    });
                }
                catch (err) {
                    console.error(err);
                    throw err;
                }
                return [2 /*return*/];
            });
        });
    };
    // ...
    BackupService.prototype.restoreBackup = function (backupFile) {
        return __awaiter(this, void 0, void 0, function () {
            var username, database, host, port, command, ps;
            return __generator(this, function (_a) {
                try {
                    username = this.configService.get('POSTGRES_USER');
                    database = this.configService.get('POSTGRES_DATABASE');
                    host = this.configService.get('POSTGRES_HOST');
                    port = this.configService.get('POSTGRES_PORT');
                    command = "psql -U ".concat(username, " -d ").concat(database, " -h ").concat(host, " -p ").concat(port, " < backup.sql");
                    ps = childProcess.exec(command, function (error, stdout, stderr) {
                        if (error) {
                            throw error;
                        }
                        console.log('Executing backup');
                        console.log("pg_dump stdout: ".concat(stdout));
                        console.error("pg_dump stderr: ".concat(stderr));
                    });
                    ps.stdout.on('data', function (data) {
                        console.log("psql stdout: ".concat(data));
                    });
                    ps.stderr.on('data', function (data) {
                        console.error("psql stderr: ".concat(data));
                    });
                    ps.on('close', function (code) {
                        if (code === 0) {
                            console.log("Backup restored from: ".concat(backupFile));
                        }
                        else {
                            console.error("Error restoring backup: ".concat(code));
                        }
                    });
                }
                catch (err) {
                    console.error(err);
                    throw err;
                }
                return [2 /*return*/];
            });
        });
    };
    var _a, _b;
    BackupService = __decorate([
        (0, common_1.Injectable)(),
        __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof typeorm_1.DataSource !== "undefined" && typeorm_1.DataSource) === "function" ? _b : Object])
    ], BackupService);
    return BackupService;
}());
exports.BackupService = BackupService;


/***/ }),

/***/ "./apps/batches/src/batch/batch.controller.ts":
/*!****************************************************!*\
  !*** ./apps/batches/src/batch/batch.controller.ts ***!
  \****************************************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BatchController = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var batch_service_1 = __webpack_require__(/*! ./batch.service */ "./apps/batches/src/batch/batch.service.ts");
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "axios"));
var dto_1 = __webpack_require__(/*! ../dto */ "./apps/batches/src/dto/index.ts");
var BatchController = /** @class */ (function () {
    function BatchController(batchService) {
        this.batchService = batchService;
    }
    BatchController.prototype.createBatchReceipt = function (createBatchDto) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, this.batchService.createBatch(createBatchDto)];
                }
                catch (e) {
                    throw new Error(e);
                }
                return [2 /*return*/];
            });
        });
    };
    BatchController.prototype.Seed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var Axios_1, isBatchEmpty, result, resultModified, _i, resultModified_1, x, _a, e_1, e_2;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 11, , 12]);
                        Axios_1 = axios_1.default.create({
                            baseURL: 'http://10.65.10.7/cartrackerapi/api/',
                            headers: {
                                accept: 'text/plain',
                                'Content-Type': 'application/json',
                                XApikey: 'pgH7QzFHJx4w46fI~5Uzi4RvtTwlEXp',
                            },
                        });
                        return [4 /*yield*/, this.batchService.findAll()];
                    case 1:
                        isBatchEmpty = _b.sent();
                        // console.log(isBatchEmpty, 'Is batch Empty');
                        if (!isBatchEmpty.length) {
                            throw new Error('Database already seeded');
                        }
                        return [4 /*yield*/, Axios_1.get('/Batch/GetValidBatches')];
                    case 2:
                        result = _b.sent();
                        console.log(result, '=result');
                        return [4 /*yield*/, Promise.allSettled(result.data.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            _a = item;
                                            return [4 /*yield*/, Axios_1.get("/batch/getcardbybatchid?id=".concat(item.batchNo))];
                                        case 1: return [4 /*yield*/, (_b.sent()).data.cards.map(function (item) {
                                                var editedResident = {
                                                    id: item.id,
                                                    batchNo: item.batch,
                                                    contact_LGA: item.contacT_LGA,
                                                    country_code: item.countrY_CODE,
                                                    current_house_number: item.currenT_HOUSE_NUMBER,
                                                    current_street: item.currenT_STREET,
                                                    current_town: item.currenT_TOWN,
                                                    date_of_birth: item.datE_BIRTH,
                                                    duplicate_PAN: item.duplicatePAN,
                                                    email_address: item.emaiL_ADDRESS,
                                                    first_name: item.firstname,
                                                    flat_number: item.flaT_NUMBER,
                                                    lassraId: item.lasrraId,
                                                    middle_name: item.middlename,
                                                    primary_phone_no: item.primarY_PHONE_NO,
                                                    registration_date: item.registratioN_DATE,
                                                    state_of_residence: item.statE_OF_RESIDENCE,
                                                    surname: item.surname,
                                                    status: 0,
                                                    cardLocation: {
                                                        lassraId: item.lasrraId,
                                                        currentLocation: 'Head office',
                                                        collectionCenter: item.contacT_LGA,
                                                    },
                                                    //item.status,
                                                };
                                                return editedResident;
                                            })];
                                        case 2:
                                            _a.cards = _b.sent();
                                            // console.log(item, ' ITEM');
                                            return [2 /*return*/, item];
                                    }
                                });
                            }); }))];
                    case 3:
                        resultModified = _b.sent();
                        _i = 0, resultModified_1 = resultModified;
                        _b.label = 4;
                    case 4:
                        if (!(_i < resultModified_1.length)) return [3 /*break*/, 10];
                        x = resultModified_1[_i];
                        _b.label = 5;
                    case 5:
                        _b.trys.push([5, 8, , 9]);
                        _a = x.status === 'fulfilled';
                        if (!_a) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.batchService.createBatch(x.value)];
                    case 6:
                        _a = (_b.sent());
                        _b.label = 7;
                    case 7:
                        _a;
                        return [3 /*break*/, 9];
                    case 8:
                        e_1 = _b.sent();
                        throw new common_1.HttpException(e_1, common_1.HttpStatus.CONFLICT);
                    case 9:
                        _i++;
                        return [3 /*break*/, 4];
                    case 10: 
                    // const create = await this.batchService.createBatch(resultModified[0]);
                    // console.log(create, 'create');
                    return [2 /*return*/, 'seeding successful'];
                    case 11:
                        e_2 = _b.sent();
                        throw new common_1.HttpException('Database already seeded', common_1.HttpStatus.FORBIDDEN);
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    BatchController.prototype.search = function (batchNo, jobNo, lassraId, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // if (!batchNo && !jobNo && !lassraId)
        //   throw new HttpException(
        //     'Provide bathcNo, JobNo or lassraId',
        //     HttpStatus.BAD_REQUEST,
        //   );
        return this.batchService.search(batchNo, jobNo, lassraId, page, pageSize);
    };
    BatchController.prototype.findAll = function () {
        return this.batchService.findAll();
    };
    // @Post('card')
    // createCard(@Body() createCardDto: CreateCardDto) {
    //   return this.batchService.createCard(createCardDto);
    // }
    BatchController.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.batchService.findOne(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // @Put(':id')
    // async updateCardReceiptStatus(
    //   @Param() id: number,
    //   @Query('lassraid') lassraid: string,
    // ) {
    //   console.log(id, lassraid, 'param and query');
    //   return this.batchService.updateCard(id, lassraid);
    // }
    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateBatchDto: UpdateBatchDto) {
    //   return this.batchService.update(id, updateBatchDto);
    // }
    BatchController.prototype.remove = function (id) {
        return this.batchService.remove(id);
    };
    var _a, _b;
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof dto_1.CreateBatchDto !== "undefined" && dto_1.CreateBatchDto) === "function" ? _a : Object]),
        __metadata("design:returntype", Promise)
    ], BatchController.prototype, "createBatchReceipt", null);
    __decorate([
        (0, common_1.Get)('seed'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], BatchController.prototype, "Seed", null);
    __decorate([
        (0, common_1.Get)('search'),
        __param(0, (0, common_1.Query)('batchNo')),
        __param(1, (0, common_1.Query)('jobNo')),
        __param(2, (0, common_1.Query)('lassraId')),
        __param(3, (0, common_1.Query)('page')),
        __param(4, (0, common_1.Query)('pageSize')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, Number, Number]),
        __metadata("design:returntype", void 0)
    ], BatchController.prototype, "search", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BatchController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], BatchController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], BatchController.prototype, "remove", null);
    BatchController = __decorate([
        (0, common_1.Controller)('batch'),
        __metadata("design:paramtypes", [typeof (_b = typeof batch_service_1.BatchService !== "undefined" && batch_service_1.BatchService) === "function" ? _b : Object])
    ], BatchController);
    return BatchController;
}());
exports.BatchController = BatchController;


/***/ }),

/***/ "./apps/batches/src/batch/batch.module.ts":
/*!************************************************!*\
  !*** ./apps/batches/src/batch/batch.module.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BatchModule = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var batch_service_1 = __webpack_require__(/*! ./batch.service */ "./apps/batches/src/batch/batch.service.ts");
var batch_controller_1 = __webpack_require__(/*! ./batch.controller */ "./apps/batches/src/batch/batch.controller.ts");
var typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
var batch_entity_1 = __webpack_require__(/*! ../entities/batch.entity */ "./apps/batches/src/entities/batch.entity.ts");
var receipt_entity_1 = __webpack_require__(/*! ../entities/receipt.entity */ "./apps/batches/src/entities/receipt.entity.ts");
var card_entity_1 = __webpack_require__(/*! ../entities/card.entity */ "./apps/batches/src/entities/card.entity.ts");
// import { CardReceipt } from '../entities/cardreceipt.entity';
var BatchModule = /** @class */ (function () {
    function BatchModule() {
    }
    BatchModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([batch_entity_1.Batch, receipt_entity_1.Receipt, card_entity_1.Card])],
            controllers: [batch_controller_1.BatchController],
            providers: [batch_service_1.BatchService],
            exports: [batch_service_1.BatchService],
        })
    ], BatchModule);
    return BatchModule;
}());
exports.BatchModule = BatchModule;


/***/ }),

/***/ "./apps/batches/src/batch/batch.service.ts":
/*!*************************************************!*\
  !*** ./apps/batches/src/batch/batch.service.ts ***!
  \*************************************************/
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
exports.BatchService = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
var repository_1 = __webpack_require__(/*! ../repository */ "./apps/batches/src/repository/index.ts");
var typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
var entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
var BatchService = /** @class */ (function () {
    function BatchService(batchRepository, dataSource) {
        this.batchRepository = batchRepository;
        this.dataSource = dataSource;
    }
    //(1) create a batch receipt for a batch.
    // one batch can have multiple receipt
    BatchService.prototype.createBatch = function (createBatchDto) {
        return __awaiter(this, void 0, void 0, function () {
            var newBatch, newBatchItem, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        newBatch = this.batchRepository.create(createBatchDto);
                        return [4 /*yield*/, this.batchRepository.save(newBatch)];
                    case 1:
                        newBatchItem = _a.sent();
                        return [2 /*return*/, newBatchItem];
                    case 2:
                        e_1 = _a.sent();
                        throw new Error(e_1 + ' from Batch');
                    case 3: return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    BatchService.prototype.search = function (batchNo, jobNo, lassraId, page, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var queryBuilder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(batchNo, jobNo, lassraId, page, pageSize);
                        queryBuilder = this.batchRepository.createQueryBuilder('batch');
                        if (!batchNo && !jobNo && !lassraId)
                            throw new common_1.HttpException('supply your query params', common_1.HttpStatus.BAD_REQUEST);
                        if (batchNo) {
                            queryBuilder.where('batch.batchNo = :batchNo', { batchNo: batchNo });
                        }
                        if (jobNo) {
                            queryBuilder.orWhere('batch.bankJobNo = :jobNo', { jobNo: jobNo });
                        }
                        if (lassraId) {
                            queryBuilder.orWhere('batch.cards.lassraId = :lassraId', { lassraId: lassraId });
                        }
                        return [4 /*yield*/, queryBuilder
                                // .leftJoinAndSelect('batch.cards', 'cards')
                                .getOne()];
                    case 1: 
                    // Execute the query and return the results
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // @(2) get All receipt in a ?????
    BatchService.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.batchRepository.find({})];
                    case 1: 
                    // return this.batchRepository
                    //   .createQueryBuilder('batch')
                    //   .leftJoinAndSelect('batch.cards', 'card')
                    //   .getMany();
                    return [2 /*return*/, _a.sent()];
                    case 2:
                        err_1 = _a.sent();
                        throw new common_1.HttpException(err_1, common_1.HttpStatus.NOT_FOUND);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // async findNotReceivedCards(batchNo){
    //   await this.batchRepository.find({batchNo,{
    //   }})
    // }
    // (3) Get a single batch by batchNo
    BatchService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var batches;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.batchRepository.find({
                            where: { batchNo: id },
                        })];
                    case 1:
                        batches = _a.sent();
                        if (batches.length) {
                            return [2 /*return*/, batches[0]];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BatchService.prototype.remove = function (_id) {
        return __awaiter(this, void 0, void 0, function () {
            var idtoDelete, batch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        idtoDelete = Number(_id);
                        return [4 /*yield*/, this.batchRepository.findOneBy({ id: idtoDelete })];
                    case 1:
                        batch = _a.sent();
                        if (!!batch) return [3 /*break*/, 2];
                        throw new common_1.NotFoundException("Batch with ID ".concat(_id, " not found"));
                    case 2: 
                    // Delete the batch entity and its related entities
                    return [4 /*yield*/, this.batchRepository.remove(batch)];
                    case 3:
                        // Delete the batch entity and its related entities
                        _a.sent();
                        return [2 /*return*/, 'Deleted successfully'];
                }
            });
        });
    };
    var _a, _b;
    BatchService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(entities_1.Batch)),
        __metadata("design:paramtypes", [typeof (_a = typeof repository_1.BatchRepository !== "undefined" && repository_1.BatchRepository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _b : Object])
    ], BatchService);
    return BatchService;
}());
exports.BatchService = BatchService;


/***/ }),

/***/ "./apps/batches/src/card/card.controller.ts":
/*!**************************************************!*\
  !*** ./apps/batches/src/card/card.controller.ts ***!
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
exports.CardController = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var card_service_1 = __webpack_require__(/*! ./card.service */ "./apps/batches/src/card/card.service.ts");
var dto_1 = __webpack_require__(/*! ../dto */ "./apps/batches/src/dto/index.ts");
var CardController = /** @class */ (function () {
    function CardController(cardService) {
        this.cardService = cardService;
    }
    // @Post()
    // create(@Body() createCardDto: CreateCardDto) {
    //   return this.cardService.create(createCardDto);
    // }
    CardController.prototype.getCardsStatusCount = function (batchNo, status) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.cardService.getCardCountByBatchNoAndStatus(batchNo, status)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_1 = _a.sent();
                        throw new common_1.HttpException(e_1, common_1.HttpStatus.EXPECTATION_FAILED);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // @EventPattern('card_created')
    // async CreateCard(@Payload() data: CreateCardDto) {
    //   console.log('This will create a card');
    // }
    CardController.prototype.findAll = function (batchNo) {
        console.log('called');
        return this.cardService.findAll(batchNo);
    };
    CardController.prototype.getCardForRetrival = function (collectionCenter) {
        try {
            if (!!collectionCenter) {
                return this.cardService.getCardForRetrivalByCollectionCenter(collectionCenter);
            }
            return this.cardService.getAllCardForRetrival();
        }
        catch (err) {
            throw new Error(err);
        }
    };
    CardController.prototype.findOne = function (lassraId) {
        try {
            return this.cardService.findOne(lassraId);
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.EXPECTATION_FAILED);
        }
    };
    CardController.prototype.update = function (id, updateCardDto) {
        return this.cardService.update(+id, updateCardDto);
    };
    //this endpoint is called by external service to update card location information when a fresident request relocation.
    CardController.prototype.relocateCard = function (lassraId, newLocation) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cardService.relocationRequest(lassraId, newLocation)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CardController.prototype.requestDeliveryCard = function (lassraId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cardService.requestDelivery(lassraId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CardController.prototype.remove = function (id) {
        return this.cardService.remove(+id);
    };
    var _a, _b;
    __decorate([
        (0, common_1.Get)('count'),
        __param(0, (0, common_1.Query)('batchNo')),
        __param(1, (0, common_1.Query)('status')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Number]),
        __metadata("design:returntype", Promise)
    ], CardController.prototype, "getCardsStatusCount", null);
    __decorate([
        (0, common_1.Get)(),
        __param(0, (0, common_1.Query)('batchNo')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], CardController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)('retrival'),
        __param(0, (0, common_1.Query)('collectionCenter')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], CardController.prototype, "getCardForRetrival", null);
    __decorate([
        (0, common_1.Get)('one/:lassraId'),
        __param(0, (0, common_1.Param)('lassraId')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], CardController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, typeof (_a = typeof dto_1.UpdateCardDto !== "undefined" && dto_1.UpdateCardDto) === "function" ? _a : Object]),
        __metadata("design:returntype", void 0)
    ], CardController.prototype, "update", null);
    __decorate([
        (0, common_1.Post)('relocation'),
        __param(0, (0, common_1.Query)('lassraId')),
        __param(1, (0, common_1.Query)('newLocation')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], CardController.prototype, "relocateCard", null);
    __decorate([
        (0, common_1.Post)('request_delivery'),
        __param(0, (0, common_1.Query)('lassraId')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], CardController.prototype, "requestDeliveryCard", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], CardController.prototype, "remove", null);
    CardController = __decorate([
        (0, common_1.Controller)('card'),
        __metadata("design:paramtypes", [typeof (_b = typeof card_service_1.CardService !== "undefined" && card_service_1.CardService) === "function" ? _b : Object])
    ], CardController);
    return CardController;
}());
exports.CardController = CardController;


/***/ }),

/***/ "./apps/batches/src/card/card.module.ts":
/*!**********************************************!*\
  !*** ./apps/batches/src/card/card.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardModule = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var card_service_1 = __webpack_require__(/*! ./card.service */ "./apps/batches/src/card/card.service.ts");
var card_controller_1 = __webpack_require__(/*! ./card.controller */ "./apps/batches/src/card/card.controller.ts");
var common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
var typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
var batch_entity_1 = __webpack_require__(/*! ../entities/batch.entity */ "./apps/batches/src/entities/batch.entity.ts");
var card_entity_1 = __webpack_require__(/*! ../entities/card.entity */ "./apps/batches/src/entities/card.entity.ts");
var cardreceipt_entity_1 = __webpack_require__(/*! ../entities/cardreceipt.entity */ "./apps/batches/src/entities/cardreceipt.entity.ts");
var receipt_entity_1 = __webpack_require__(/*! ../entities/receipt.entity */ "./apps/batches/src/entities/receipt.entity.ts");
var location_entity_1 = __webpack_require__(/*! ../dispatch/entities/location.entity */ "./apps/batches/src/dispatch/entities/location.entity.ts");
var CardModule = /** @class */ (function () {
    function CardModule() {
    }
    CardModule = __decorate([
        (0, common_1.Module)({
            imports: [
                common_2.DatabaseModule,
                typeorm_1.TypeOrmModule.forFeature([batch_entity_1.Batch, card_entity_1.Card, receipt_entity_1.Receipt, cardreceipt_entity_1.CardReceipt, location_entity_1.CardLocation]),
            ],
            controllers: [card_controller_1.CardController],
            providers: [card_service_1.CardService],
        })
    ], CardModule);
    return CardModule;
}());
exports.CardModule = CardModule;


/***/ }),

/***/ "./apps/batches/src/card/card.service.ts":
/*!***********************************************!*\
  !*** ./apps/batches/src/card/card.service.ts ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.CardService = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
var entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
var repository_1 = __webpack_require__(/*! ../repository */ "./apps/batches/src/repository/index.ts");
var location_entity_1 = __webpack_require__(/*! ../dispatch/entities/location.entity */ "./apps/batches/src/dispatch/entities/location.entity.ts");
var typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
var CardService = /** @class */ (function () {
    function CardService(cardRepository, cardLocationRepository) {
        this.cardRepository = cardRepository;
        this.cardLocationRepository = cardLocationRepository;
    }
    //get all the card or get all cards for a batch when you supply batchNo as queryParam
    CardService.prototype.findAll = function (batchNo) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!!batchNo) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.cardRepository.find({})];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.cardRepository.find({
                            where: {
                                batchNo: batchNo,
                            },
                        })];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        throw new Error(e_1);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    //this method is called by external service to update card location information
    CardService.prototype.relocationRequest = function (lassraId, newLocation) {
        return __awaiter(this, void 0, void 0, function () {
            var cardToReloc, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.cardLocationRepository.findOne({
                                where: { lassraId: lassraId },
                            })];
                    case 1:
                        cardToReloc = _a.sent();
                        if (!cardToReloc) {
                            throw new common_1.NotFoundException('user not found');
                        }
                        if (cardToReloc.currentLocation === newLocation) {
                            throw new Error('The card location is same as current location');
                        }
                        cardToReloc.requestedRelocation = true;
                        cardToReloc.collectionCenter = newLocation;
                        return [4 /*yield*/, this.cardLocationRepository.save(cardToReloc)];
                    case 2: 
                    // console.log('Here 3', cardToReloc);
                    return [2 /*return*/, _a.sent()];
                    case 3:
                        e_2 = _a.sent();
                        // console.log('Catcg error', e);
                        throw new Error('Requested could nt be completed');
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CardService.prototype.requestDelivery = function (lassraId) {
        return __awaiter(this, void 0, void 0, function () {
            var cardToDeliver, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.cardLocationRepository.findOne({
                                where: { lassraId: lassraId },
                            })];
                    case 1:
                        cardToDeliver = _a.sent();
                        if (!cardToDeliver) {
                            throw new common_1.NotFoundException('User not found');
                        }
                        if (cardToDeliver.requestedDelivery === true) {
                            return [2 /*return*/];
                        }
                        cardToDeliver.requestedDelivery = true;
                        return [4 /*yield*/, this.cardLocationRepository.save(cardToDeliver)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_1 = _a.sent();
                        throw new Error(err_1.message);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CardService.prototype.getCardForRetrivalByCollectionCenter = function (currentLocation) {
        return __awaiter(this, void 0, void 0, function () {
            var queryBuilder;
            return __generator(this, function (_a) {
                console.log('selecting requests', currentLocation);
                queryBuilder = this.cardLocationRepository.createQueryBuilder('cardLocation');
                queryBuilder
                    .leftJoinAndSelect('cardLocation.card', 'card')
                    .where('cardLocation.currentLocation= :currentLocation', {
                    currentLocation: currentLocation,
                })
                    .andWhere('(cardLocation.requestedDelivery = :requestedDelivery OR cardLocation.requestedRelocation = :requestedRelocation)', { requestedDelivery: true, requestedRelocation: true });
                return [2 /*return*/, queryBuilder.getMany()];
            });
        });
    };
    //get only the list of cards that have not been received
    // default status should be 0 and should be status of cards not received
    CardService.prototype.getCardCountByBatchNoAndStatus = function (batchNo, status) {
        return __awaiter(this, void 0, Promise, function () {
            var queryBuilder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cardRepository.createQueryBuilder('card')];
                    case 1:
                        queryBuilder = _a.sent();
                        queryBuilder
                            .where('card.batchNo =:batchNo', { batchNo: batchNo })
                            .andWhere('card.status =:status', { status: status });
                        return [4 /*yield*/, queryBuilder.getManyAndCount()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CardService.prototype.findOne = function (lassraId) {
        return __awaiter(this, void 0, void 0, function () {
            var loc, queryBuilder, card, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.cardLocationRepository.findOne({
                                where: { lassraId: lassraId },
                            })];
                    case 1:
                        loc = _a.sent();
                        queryBuilder = this.cardRepository.createQueryBuilder('card');
                        queryBuilder.andWhere('card.lassraId =:lassraId', { lassraId: lassraId });
                        return [4 /*yield*/, queryBuilder.getOne()];
                    case 2:
                        card = _a.sent();
                        if (loc) {
                            card.cardLocation = loc;
                        }
                        return [4 /*yield*/, card];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        e_3 = _a.sent();
                        throw new Error(e_3);
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    // async collectCard(lassraId: string, collectionCenter: string) {
    //   try {
    //     const result = await this.findOne(lassraId);
    //     //   where: { lassraId },
    //     //   relations: ['card'],
    //     // });
    //     console.log(result);
    //   } catch (e) {
    //     throw new NotFoundException(e.message);
    //   }
    // }
    CardService.prototype.update = function (id, updateCardDto) {
        return __awaiter(this, void 0, void 0, function () {
            var cardToUpdate, updated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cardRepository.findOne({
                            where: { id: id },
                        })];
                    case 1:
                        cardToUpdate = _a.sent();
                        if (!cardToUpdate) {
                            throw new common_1.NotFoundException('Card Not found.');
                        }
                        updated = Object.assign(cardToUpdate, updateCardDto);
                        return [4 /*yield*/, this.cardRepository.save(updated)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CardService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " card");
    };
    CardService.prototype.getAllCardForRetrival = function () {
        return __awaiter(this, void 0, void 0, function () {
            var queryBuilder, results, groupedResults, formattedResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryBuilder = this.cardLocationRepository.createQueryBuilder('cardLocation');
                        queryBuilder
                            .leftJoinAndSelect('cardLocation.card', 'card')
                            .where('(cardLocation.requestedDelivery = :requestedDelivery OR cardLocation.requestedRelocation = :requestedRelocation)', { requestedDelivery: true, requestedRelocation: true });
                        return [4 /*yield*/, queryBuilder.getMany()];
                    case 1:
                        results = _a.sent();
                        groupedResults = {};
                        results.forEach(function (result) {
                            if (!groupedResults[result.currentLocation]) {
                                groupedResults[result.currentLocation] = [];
                            }
                            groupedResults[result.currentLocation].push(result);
                        });
                        formattedResults = Object.keys(groupedResults).map(function (location) {
                            return {
                                location: location,
                                data: groupedResults[location],
                            };
                        });
                        return [2 /*return*/, formattedResults];
                }
            });
        });
    };
    var _a, _b;
    CardService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(entities_1.Card)),
        __param(1, (0, typeorm_1.InjectRepository)(location_entity_1.CardLocation)),
        __metadata("design:paramtypes", [typeof (_a = typeof repository_1.CardRepository !== "undefined" && repository_1.CardRepository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
    ], CardService);
    return CardService;
}());
exports.CardService = CardService;


/***/ }),

/***/ "./apps/batches/src/cardprovision/cardprovision.controller.ts":
/*!********************************************************************!*\
  !*** ./apps/batches/src/cardprovision/cardprovision.controller.ts ***!
  \********************************************************************/
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
exports.CardprovisionController = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var cardprovision_service_1 = __webpack_require__(/*! ./cardprovision.service */ "./apps/batches/src/cardprovision/cardprovision.service.ts");
// import { CreateCardProvisionDto } from './dto/create-cardprovision.dto';
// import { UpdateCardprovisionDto } from './dto/update-cardprovision.dto';
var CardprovisionController = /** @class */ (function () {
    function CardprovisionController(cardprovisionService) {
        this.cardprovisionService = cardprovisionService;
    }
    CardprovisionController.prototype.create = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var lassraId, provisionId, result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(body);
                        lassraId = body.lassraId, provisionId = body.provisionId;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.cardprovisionService.create(lassraId, +provisionId)];
                    case 2:
                        result = _a.sent();
                        console.log(result);
                        return [2 /*return*/, result];
                    case 3:
                        e_1 = _a.sent();
                        throw new common_1.HttpException(e_1.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CardprovisionController.prototype.findAll = function (provision_id) {
        return this.cardprovisionService.findAll(provision_id);
    };
    var _a;
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], CardprovisionController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(),
        __param(0, (0, common_1.Query)('provision_id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], CardprovisionController.prototype, "findAll", null);
    CardprovisionController = __decorate([
        (0, common_1.Controller)('cardprovision'),
        __metadata("design:paramtypes", [typeof (_a = typeof cardprovision_service_1.CardprovisionService !== "undefined" && cardprovision_service_1.CardprovisionService) === "function" ? _a : Object])
    ], CardprovisionController);
    return CardprovisionController;
}());
exports.CardprovisionController = CardprovisionController;


/***/ }),

/***/ "./apps/batches/src/cardprovision/cardprovision.module.ts":
/*!****************************************************************!*\
  !*** ./apps/batches/src/cardprovision/cardprovision.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardprovisionModule = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var cardprovision_service_1 = __webpack_require__(/*! ./cardprovision.service */ "./apps/batches/src/cardprovision/cardprovision.service.ts");
var cardprovision_controller_1 = __webpack_require__(/*! ./cardprovision.controller */ "./apps/batches/src/cardprovision/cardprovision.controller.ts");
var common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
var typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
var entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
var provision_entity_1 = __webpack_require__(/*! ../provision/entities/provision.entity */ "./apps/batches/src/provision/entities/provision.entity.ts");
var cardprovision_entity_1 = __webpack_require__(/*! ./entities/cardprovision.entity */ "./apps/batches/src/cardprovision/entities/cardprovision.entity.ts");
var CardprovisionModule = /** @class */ (function () {
    function CardprovisionModule() {
    }
    CardprovisionModule = __decorate([
        (0, common_1.Module)({
            imports: [
                common_2.DatabaseModule,
                typeorm_1.TypeOrmModule.forFeature([entities_1.Receipt, entities_1.Batch, provision_entity_1.Provision, cardprovision_entity_1.CardProvision, entities_1.Card]),
                // forwardRef(() => BatchModule),
            ],
            controllers: [cardprovision_controller_1.CardprovisionController],
            providers: [cardprovision_service_1.CardprovisionService],
        })
    ], CardprovisionModule);
    return CardprovisionModule;
}());
exports.CardprovisionModule = CardprovisionModule;


/***/ }),

/***/ "./apps/batches/src/cardprovision/cardprovision.service.ts":
/*!*****************************************************************!*\
  !*** ./apps/batches/src/cardprovision/cardprovision.service.ts ***!
  \*****************************************************************/
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
exports.CardprovisionService = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
var typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
var cardprovision_entity_1 = __webpack_require__(/*! ./entities/cardprovision.entity */ "./apps/batches/src/cardprovision/entities/cardprovision.entity.ts");
var provision_entity_1 = __webpack_require__(/*! ../provision/entities/provision.entity */ "./apps/batches/src/provision/entities/provision.entity.ts");
var entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
var CardprovisionService = /** @class */ (function () {
    function CardprovisionService(cardProvisionRepository, provisionRepository, cardRepository) {
        this.cardProvisionRepository = cardProvisionRepository;
        this.provisionRepository = provisionRepository;
        this.cardRepository = cardRepository;
    }
    CardprovisionService.prototype.create = function (lassraId, provisionId) {
        return __awaiter(this, void 0, void 0, function () {
            var provision, cardtoUpdate, result, newcardReceipt, result2, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('creater cardProvisom', lassraId, provisionId);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 9, , 10]);
                        return [4 /*yield*/, this.provisionRepository.findOne({
                                where: { id: provisionId },
                            })];
                    case 2:
                        provision = _a.sent();
                        console.log(provision, 'first comnsole');
                        if (provision && provision.provisionStatus === 1) {
                            throw new Error('Provision receipt already completed');
                        }
                        return [4 /*yield*/, this.cardRepository.findOne({
                                where: { lassraId: lassraId },
                            })];
                    case 3:
                        cardtoUpdate = _a.sent();
                        console.log(cardtoUpdate, 'second comnsole');
                        if (!(cardtoUpdate && cardtoUpdate.batchNo === provision.batchNo)) return [3 /*break*/, 5];
                        if (cardtoUpdate.status === 2) {
                            throw new Error('Card already added to the provision receipt');
                        }
                        cardtoUpdate.status = 2;
                        return [4 /*yield*/, this.cardRepository.save(cardtoUpdate)];
                    case 4:
                        result = _a.sent();
                        console.log(result, 'third comnsole');
                        return [3 /*break*/, 6];
                    case 5: throw new Error('Card not Added');
                    case 6: return [4 /*yield*/, this.cardProvisionRepository.create({
                            lassraId: lassraId,
                            provision: provision,
                        })];
                    case 7:
                        newcardReceipt = _a.sent();
                        return [4 /*yield*/, this.cardProvisionRepository.save(newcardReceipt)];
                    case 8:
                        result2 = _a.sent();
                        console.log(result2, 'fourth comnsole');
                        return [2 /*return*/, "Card with lassraId: ".concat(lassraId, " added to Receipt: ").concat(provisionId, " successfully")];
                    case 9:
                        e_1 = _a.sent();
                        throw new Error(e_1.message);
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    CardprovisionService.prototype.findAll = function (provision_id) {
        return __awaiter(this, void 0, void 0, function () {
            var cards;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!provision_id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.cardProvisionRepository.find({})];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.cardProvisionRepository
                            .createQueryBuilder('cardProvision')
                            .where('cardProvision.provisionId =:provision_id', { provision_id: provision_id })
                            .getManyAndCount()];
                    case 3:
                        cards = _a.sent();
                        return [2 /*return*/, cards];
                }
            });
        });
    };
    var _a, _b, _c;
    CardprovisionService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(cardprovision_entity_1.CardProvision)),
        __param(1, (0, typeorm_1.InjectRepository)(provision_entity_1.Provision)),
        __param(2, (0, typeorm_1.InjectRepository)(entities_1.Card)),
        __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object])
    ], CardprovisionService);
    return CardprovisionService;
}());
exports.CardprovisionService = CardprovisionService;


/***/ }),

/***/ "./apps/batches/src/cardprovision/entities/cardprovision.entity.ts":
/*!*************************************************************************!*\
  !*** ./apps/batches/src/cardprovision/entities/cardprovision.entity.ts ***!
  \*************************************************************************/
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
exports.CardProvision = void 0;
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var entities_1 = __webpack_require__(/*! ../../entities */ "./apps/batches/src/entities/index.ts");
var provision_entity_1 = __webpack_require__(/*! ../../provision/entities/provision.entity */ "./apps/batches/src/provision/entities/provision.entity.ts");
var CardProvision = /** @class */ (function () {
    function CardProvision() {
    }
    var _a, _b;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], CardProvision.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ unique: true }),
        __metadata("design:type", String)
    ], CardProvision.prototype, "lassraId", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return entities_1.Card; }),
        __metadata("design:type", typeof (_a = typeof entities_1.Card !== "undefined" && entities_1.Card) === "function" ? _a : Object)
    ], CardProvision.prototype, "card", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return provision_entity_1.Provision; }, function (provision) { return provision.cardProvision; }),
        __metadata("design:type", typeof (_b = typeof provision_entity_1.Provision !== "undefined" && provision_entity_1.Provision) === "function" ? _b : Object)
    ], CardProvision.prototype, "provision", void 0);
    CardProvision = __decorate([
        (0, typeorm_1.Entity)()
    ], CardProvision);
    return CardProvision;
}());
exports.CardProvision = CardProvision;


/***/ }),

/***/ "./apps/batches/src/cardreceipt/cardreceipt.controller.ts":
/*!****************************************************************!*\
  !*** ./apps/batches/src/cardreceipt/cardreceipt.controller.ts ***!
  \****************************************************************/
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
exports.CardReceiptController = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var cardreceipt_service_1 = __webpack_require__(/*! ./cardreceipt.service */ "./apps/batches/src/cardreceipt/cardreceipt.service.ts");
// import { CreateCardReceiptDto } from '../dto/create-cardreceipt.dto';
// import { UpdateCardReceiptDto } from '../dto/update-cardreceipt.dto';
var CardReceiptController = /** @class */ (function () {
    function CardReceiptController(cardReceiptService) {
        this.cardReceiptService = cardReceiptService;
    }
    CardReceiptController.prototype.create = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var lassraId, receiptId, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        lassraId = body.lassraId, receiptId = body.receiptId;
                        return [4 /*yield*/, this.cardReceiptService.create(lassraId, receiptId)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_1 = _a.sent();
                        throw new common_1.HttpException(e_1.message, common_1.HttpStatus.BAD_REQUEST);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CardReceiptController.prototype.findAll = function (receipt_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cardReceiptService.findAll(receipt_id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var _a;
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], CardReceiptController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(),
        __param(0, (0, common_1.Query)('receipt_id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], CardReceiptController.prototype, "findAll", null);
    CardReceiptController = __decorate([
        (0, common_1.Controller)('cardreceipt'),
        __metadata("design:paramtypes", [typeof (_a = typeof cardreceipt_service_1.CardReceiptService !== "undefined" && cardreceipt_service_1.CardReceiptService) === "function" ? _a : Object])
    ], CardReceiptController);
    return CardReceiptController;
}());
exports.CardReceiptController = CardReceiptController;


/***/ }),

/***/ "./apps/batches/src/cardreceipt/cardreceipt.module.ts":
/*!************************************************************!*\
  !*** ./apps/batches/src/cardreceipt/cardreceipt.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardReceiptModule = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var cardreceipt_service_1 = __webpack_require__(/*! ./cardreceipt.service */ "./apps/batches/src/cardreceipt/cardreceipt.service.ts");
var cardreceipt_controller_1 = __webpack_require__(/*! ./cardreceipt.controller */ "./apps/batches/src/cardreceipt/cardreceipt.controller.ts");
var common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
var typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
// import { Batch } from 'typeorm';
var receipt_entity_1 = __webpack_require__(/*! ../entities/receipt.entity */ "./apps/batches/src/entities/receipt.entity.ts");
var cardreceipt_entity_1 = __webpack_require__(/*! ../entities/cardreceipt.entity */ "./apps/batches/src/entities/cardreceipt.entity.ts");
var entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
// import { Card } from '../entities/card.entity';
var CardReceiptModule = /** @class */ (function () {
    function CardReceiptModule() {
    }
    CardReceiptModule = __decorate([
        (0, common_1.Module)({
            imports: [
                common_2.DatabaseModule,
                typeorm_1.TypeOrmModule.forFeature([cardreceipt_entity_1.CardReceipt, receipt_entity_1.Receipt, entities_1.Card]),
            ],
            controllers: [cardreceipt_controller_1.CardReceiptController],
            providers: [cardreceipt_service_1.CardReceiptService],
        })
    ], CardReceiptModule);
    return CardReceiptModule;
}());
exports.CardReceiptModule = CardReceiptModule;


/***/ }),

/***/ "./apps/batches/src/cardreceipt/cardreceipt.service.ts":
/*!*************************************************************!*\
  !*** ./apps/batches/src/cardreceipt/cardreceipt.service.ts ***!
  \*************************************************************/
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
exports.CardReceiptService = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
// import { UpdateCardReceiptDto } from '../dto/update-cardreceipt.dto';
var typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
var entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
var repository_1 = __webpack_require__(/*! ../repository */ "./apps/batches/src/repository/index.ts");
var receipt_repository_1 = __webpack_require__(/*! ../repository/receipt.repository */ "./apps/batches/src/repository/receipt.repository.ts");
var card_repository_1 = __webpack_require__(/*! ../repository/card.repository */ "./apps/batches/src/repository/card.repository.ts");
var CardReceiptService = /** @class */ (function () {
    function CardReceiptService(cardReceiptRepository, receiptRepository, cardRepository) {
        this.cardReceiptRepository = cardReceiptRepository;
        this.receiptRepository = receiptRepository;
        this.cardRepository = cardRepository;
    }
    //creates new card receipt
    CardReceiptService.prototype.create = function (lassraId, receiptId) {
        return __awaiter(this, void 0, void 0, function () {
            var receipt, cardtoUpdate, newcardReceipt, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 8, , 9]);
                        return [4 /*yield*/, this.receiptRepository.findOne({
                                where: { id: receiptId },
                            })];
                    case 1:
                        receipt = _a.sent();
                        if (receipt && receipt.receivedStatus === 1) {
                            throw new Error('Receipt already completed');
                        }
                        return [4 /*yield*/, this.cardRepository.findOne({
                                where: { lassraId: lassraId },
                            })];
                    case 2:
                        cardtoUpdate = _a.sent();
                        if (!(cardtoUpdate && cardtoUpdate.batchNo === receipt.batchNo)) return [3 /*break*/, 4];
                        if (cardtoUpdate.status === 1) {
                            throw new Error('Card already added to the receipt');
                        }
                        cardtoUpdate.status = 1;
                        return [4 /*yield*/, this.cardRepository.save(cardtoUpdate)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4: throw new Error('Card not Added');
                    case 5: return [4 /*yield*/, this.cardReceiptRepository.create({
                            lassraId: lassraId,
                            receipt: receipt,
                        })];
                    case 6:
                        newcardReceipt = _a.sent();
                        return [4 /*yield*/, this.cardReceiptRepository.save(newcardReceipt)];
                    case 7:
                        _a.sent();
                        return [2 /*return*/, "Card with lassraId: ".concat(lassraId, " added to Receipt: ").concat(receiptId, " successfully")];
                    case 8:
                        e_1 = _a.sent();
                        throw new Error(e_1.message);
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    CardReceiptService.prototype.findAll = function (receipt_id) {
        return __awaiter(this, void 0, void 0, function () {
            var cards;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!receipt_id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.cardReceiptRepository.find({})];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.cardReceiptRepository
                            .createQueryBuilder('cardReceipt')
                            .where('cardReceipt.receiptId =:receipt_id', { receipt_id: receipt_id })
                            .getManyAndCount()];
                    case 3:
                        cards = _a.sent();
                        return [2 /*return*/, cards];
                }
            });
        });
    };
    var _a, _b, _c;
    CardReceiptService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(entities_1.CardReceipt)),
        __param(1, (0, typeorm_1.InjectRepository)(entities_1.Receipt)),
        __param(2, (0, typeorm_1.InjectRepository)(entities_1.Card)),
        __metadata("design:paramtypes", [typeof (_a = typeof repository_1.CardReceiptRepository !== "undefined" && repository_1.CardReceiptRepository) === "function" ? _a : Object, typeof (_b = typeof receipt_repository_1.ReceiptRepository !== "undefined" && receipt_repository_1.ReceiptRepository) === "function" ? _b : Object, typeof (_c = typeof card_repository_1.CardRepository !== "undefined" && card_repository_1.CardRepository) === "function" ? _c : Object])
    ], CardReceiptService);
    return CardReceiptService;
}());
exports.CardReceiptService = CardReceiptService;


/***/ }),

/***/ "./apps/batches/src/delivery/delivery.controller.ts":
/*!**********************************************************!*\
  !*** ./apps/batches/src/delivery/delivery.controller.ts ***!
  \**********************************************************/
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
exports.DeliveryController = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var delivery_service_1 = __webpack_require__(/*! ./delivery.service */ "./apps/batches/src/delivery/delivery.service.ts");
var update_delivery_dto_1 = __webpack_require__(/*! ./dto/update-delivery.dto */ "./apps/batches/src/delivery/dto/update-delivery.dto.ts");
var card_service_1 = __webpack_require__(/*! ../card/card.service */ "./apps/batches/src/card/card.service.ts");
var express_1 = __webpack_require__(/*! express */ "express");
var DeliveryController = /** @class */ (function () {
    function DeliveryController(deliveryService, cardService) {
        this.deliveryService = deliveryService;
        this.cardService = cardService;
    }
    DeliveryController.prototype.collectCard = function (body, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cardService.findOne(body.lassraId)];
                    case 1:
                        result = _a.sent();
                        if (!result) {
                            throw new common_1.NotFoundException('Card not found');
                        }
                        if (result.status < 2) {
                            throw new common_1.HttpException('Card not ready for collection', common_1.HttpStatus.BAD_REQUEST);
                        }
                        if (result.status === 3 || result.status === 4) {
                            throw new common_1.HttpException('Card is damaged and needs reprinting', common_1.HttpStatus.BAD_REQUEST);
                        }
                        if (result.status === 5) {
                            throw new common_1.HttpException('Card is already collected', common_1.HttpStatus.BAD_REQUEST);
                        }
                        this.cardService.update(result.id, { status: 5 });
                        res.status(200).send('Card collection updated successfully');
                        return [2 /*return*/];
                }
            });
        });
    };
    DeliveryController.prototype.filterDeliveryOrders = function (status, start, end) {
        return __awaiter(this, void 0, void 0, function () {
            var args;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        args = [undefined, undefined, undefined];
                        if (status) {
                            args[0] = parseInt(status);
                        }
                        if (start) {
                            args[1] = new Date(start);
                        }
                        if (end) {
                            args[2] = new Date(end);
                        }
                        return [4 /*yield*/, (_a = this.deliveryService).findDeliveryByStatus.apply(_a, args)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    //request by status true/false true for delivery order created and false for not created.
    DeliveryController.prototype.getRequest = function (created) {
        return this.deliveryService.getRequestForDelivery(created);
    };
    //This endpoint create a new delivery order
    DeliveryController.prototype.create = function (createDeliveryDto) {
        return this.deliveryService.create(createDeliveryDto);
    };
    // @Get()
    // findAll() {
    //   return this.deliveryService.findAll();
    // }
    DeliveryController.prototype.findOne = function (id) {
        return this.deliveryService.findOne(+id);
    };
    DeliveryController.prototype.update = function (id, updateDeliveryDto) {
        return this.deliveryService.update(+id, updateDeliveryDto);
    };
    DeliveryController.prototype.completeDelivery = function (id, response) {
        try {
            response.status(200);
            return this.deliveryService.completeDelivery(+id);
        }
        catch (e) {
            response.status(400).send(e.message);
        }
    };
    DeliveryController.prototype.updateMany = function (updateDeliveryDto) {
        // console.log('updateMany');
        return this.deliveryService.updateMany(updateDeliveryDto);
    };
    DeliveryController.prototype.remove = function (id) {
        return this.deliveryService.remove(+id);
    };
    var _a, _b, _c, _d, _e;
    __decorate([
        (0, common_1.Post)('collect'),
        __param(0, (0, common_1.Body)()),
        __param(1, (0, common_1.Res)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
        __metadata("design:returntype", Promise)
    ], DeliveryController.prototype, "collectCard", null);
    __decorate([
        (0, common_1.Get)('filter'),
        __param(0, (0, common_1.Query)('status')),
        __param(1, (0, common_1.Query)('start')),
        __param(2, (0, common_1.Query)('end')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String]),
        __metadata("design:returntype", Promise)
    ], DeliveryController.prototype, "filterDeliveryOrders", null);
    __decorate([
        (0, common_1.Get)() // get delivery all delivery request. if a query 'created' is added it get 
        ,
        __param(0, (0, common_1.Query)('created')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], DeliveryController.prototype, "getRequest", null);
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], DeliveryController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], DeliveryController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Patch)('update/:id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, typeof (_b = typeof update_delivery_dto_1.UpdateDeliveryDto !== "undefined" && update_delivery_dto_1.UpdateDeliveryDto) === "function" ? _b : Object]),
        __metadata("design:returntype", void 0)
    ], DeliveryController.prototype, "update", null);
    __decorate([
        (0, common_1.Post)('update/:id/complete'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Res)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, typeof (_c = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _c : Object]),
        __metadata("design:returntype", void 0)
    ], DeliveryController.prototype, "completeDelivery", null);
    __decorate([
        (0, common_1.Patch)('batch-update'),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], DeliveryController.prototype, "updateMany", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], DeliveryController.prototype, "remove", null);
    DeliveryController = __decorate([
        (0, common_1.Controller)('delivery'),
        __metadata("design:paramtypes", [typeof (_d = typeof delivery_service_1.DeliveryService !== "undefined" && delivery_service_1.DeliveryService) === "function" ? _d : Object, typeof (_e = typeof card_service_1.CardService !== "undefined" && card_service_1.CardService) === "function" ? _e : Object])
    ], DeliveryController);
    return DeliveryController;
}());
exports.DeliveryController = DeliveryController;


/***/ }),

/***/ "./apps/batches/src/delivery/delivery.module.ts":
/*!******************************************************!*\
  !*** ./apps/batches/src/delivery/delivery.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeliveryModule = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var delivery_service_1 = __webpack_require__(/*! ./delivery.service */ "./apps/batches/src/delivery/delivery.service.ts");
var delivery_controller_1 = __webpack_require__(/*! ./delivery.controller */ "./apps/batches/src/delivery/delivery.controller.ts");
var typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
var location_entity_1 = __webpack_require__(/*! ../dispatch/entities/location.entity */ "./apps/batches/src/dispatch/entities/location.entity.ts");
var entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
var card_service_1 = __webpack_require__(/*! ../card/card.service */ "./apps/batches/src/card/card.service.ts");
var delivery_entity_1 = __webpack_require__(/*! ./entities/delivery.entity */ "./apps/batches/src/delivery/entities/delivery.entity.ts");
var DeliveryModule = /** @class */ (function () {
    function DeliveryModule() {
    }
    DeliveryModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([location_entity_1.CardLocation, entities_1.Card, delivery_entity_1.Delivery])],
            controllers: [delivery_controller_1.DeliveryController],
            providers: [delivery_service_1.DeliveryService, card_service_1.CardService],
        })
    ], DeliveryModule);
    return DeliveryModule;
}());
exports.DeliveryModule = DeliveryModule;


/***/ }),

/***/ "./apps/batches/src/delivery/delivery.service.ts":
/*!*******************************************************!*\
  !*** ./apps/batches/src/delivery/delivery.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.DeliveryService = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
var typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
var location_entity_1 = __webpack_require__(/*! ../dispatch/entities/location.entity */ "./apps/batches/src/dispatch/entities/location.entity.ts");
var delivery_entity_1 = __webpack_require__(/*! ./entities/delivery.entity */ "./apps/batches/src/delivery/entities/delivery.entity.ts");
var entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
var DeliveryService = /** @class */ (function () {
    function DeliveryService(cardLocationRepository, deliveryRepository, cardRepository) {
        this.cardLocationRepository = cardLocationRepository;
        this.deliveryRepository = deliveryRepository;
        this.cardRepository = cardRepository;
    }
    //Can get all cards that requested delivery, all cards whose delivery other
    //has been created OR ALL CARDS whose delivery other has not been created
    DeliveryService.prototype.getRequestForDelivery = function (created) {
        return __awaiter(this, void 0, Promise, function () {
            var create;
            return __generator(this, function (_a) {
                if (created === undefined) {
                    return [2 /*return*/, this.getAllCardLocationsWithRequestedDelivery()];
                }
                if (created === 'false') {
                    create = false;
                }
                else if (created === 'true') {
                    create = true;
                }
                return [2 /*return*/, create === true
                        ? this.getAllCardLocationsRequestWithDeliveryOrder()
                        : this.getAllCardLocationsWithNoDelivery()];
            });
        });
    };
    DeliveryService.prototype.getAllCardLocationsWithRequestedDelivery = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.cardLocationRepository
                        .createQueryBuilder('cardLocation')
                        .where('cardLocation.requestedDelivery = true')
                        .getMany()];
            });
        });
    };
    DeliveryService.prototype.isDeliveryOrderCreated = function (lassraId) {
        return __awaiter(this, void 0, void 0, function () {
            var isdeliveryorderCreated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deliveryRepository.findOne({
                            where: { lassraId: lassraId },
                        })];
                    case 1:
                        isdeliveryorderCreated = _a.sent();
                        return [2 /*return*/, isdeliveryorderCreated];
                }
            });
        });
    };
    DeliveryService.prototype.getAllCardLocationsRequestWithDeliveryOrder = function () {
        return __awaiter(this, void 0, Promise, function () {
            var cards, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllCardLocationsWithRequestedDelivery()];
                    case 1:
                        cards = _a.sent();
                        return [4 /*yield*/, Promise.all(cards.map(function (card) { return __awaiter(_this, void 0, void 0, function () {
                                var isOrdered;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.isDeliveryOrderCreated(card.lassraId)];
                                        case 1:
                                            isOrdered = _a.sent();
                                            return [2 /*return*/, isOrdered ? card : null];
                                    }
                                });
                            }); }))];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result.filter(function (card) { return card !== null; })];
                }
            });
        });
    };
    DeliveryService.prototype.getAllCardLocationsWithNoDelivery = function () {
        return __awaiter(this, void 0, Promise, function () {
            var cards, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllCardLocationsWithRequestedDelivery()];
                    case 1:
                        cards = _a.sent();
                        return [4 /*yield*/, Promise.all(cards.map(function (card) { return __awaiter(_this, void 0, void 0, function () {
                                var isOrdered;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.isDeliveryOrderCreated(card.lassraId)];
                                        case 1:
                                            isOrdered = _a.sent();
                                            return [2 /*return*/, isOrdered ? null : card];
                                    }
                                });
                            }); }))];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result.filter(function (card) { return card !== null; })];
                }
            });
        });
    };
    DeliveryService.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var newOrders, err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, Promise.all(data.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                var location;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.cardLocationRepository.findOne({
                                                where: { lassraId: item.lassraId },
                                            })];
                                        case 1:
                                            location = _a.sent();
                                            item.cardLocation = location;
                                            return [2 /*return*/, item];
                                    }
                                });
                            }); }))];
                    case 1:
                        newOrders = _a.sent();
                        return [4 /*yield*/, this.deliveryRepository.insert(newOrders)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_1 = _a.sent();
                        console.log(err_1);
                        throw new common_1.HttpException(err_1.message, common_1.HttpStatus.EXPECTATION_FAILED);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //Find delivery orders by status and a given range by date
    DeliveryService.prototype.findDeliveryByStatus = function (status, start, end) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(start, end, status);
                        return [4 /*yield*/, this.deliveryRepository.createQueryBuilder('delivery')];
                    case 1:
                        query = _a.sent();
                        if (status !== undefined) {
                            console.log('executed 1');
                            query.where('delivery.status = :status', { status: status });
                        }
                        if (start && end) {
                            console.log('executed 2');
                            query.andWhere('delivery.created_at BETWEEN :start AND :end', {
                                start: start,
                                end: end,
                            });
                        }
                        else if (start) {
                            console.log('executed 3');
                            query.andWhere('delivery.created_at >= :start', { start: start });
                        }
                        else if (end) {
                            query.andWhere('delivery.created_at <= :end', { end: end });
                        }
                        return [4 /*yield*/, query.getMany()];
                    case 2: 
                    // const deliveries =
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // findAll() {
    //   return `This action returns all delivery`;
    // }
    DeliveryService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " delivery");
    };
    DeliveryService.prototype.update = function (id, updateDeliveryDto) {
        return __awaiter(this, void 0, void 0, function () {
            var deliveryToUpdate, newValues, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.deliveryRepository.findOne({
                                where: { id: id },
                            })];
                    case 1:
                        deliveryToUpdate = _a.sent();
                        newValues = __assign(__assign({}, deliveryToUpdate), updateDeliveryDto);
                        return [4 /*yield*/, this.deliveryRepository.save(newValues)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_2 = _a.sent();
                        throw new Error(err_2);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //Update a list of cards
    DeliveryService.prototype.updateMany = function (updateList) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deliveryRepository.manager.transaction(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var _i, updateList_1, order, orderToUpdate;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _i = 0, updateList_1 = updateList;
                                        _a.label = 1;
                                    case 1:
                                        if (!(_i < updateList_1.length)) return [3 /*break*/, 5];
                                        order = updateList_1[_i];
                                        return [4 /*yield*/, this.deliveryRepository.findOne({
                                                where: { lassraId: order.lassraId },
                                            })];
                                    case 2:
                                        orderToUpdate = _a.sent();
                                        if (!orderToUpdate) return [3 /*break*/, 4];
                                        // Perform the update within the transac
                                        orderToUpdate.status = order.status;
                                        orderToUpdate.delivery_company = order.delivery_company;
                                        orderToUpdate.assigned_to = order.assigned_to;
                                        orderToUpdate.given_out_to = order.given_out_to;
                                        return [4 /*yield*/, transactionManager.save(orderToUpdate)];
                                    case 3:
                                        _a.sent();
                                        _a.label = 4;
                                    case 4:
                                        _i++;
                                        return [3 /*break*/, 1];
                                    case 5: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeliveryService.prototype.completeDelivery = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var err_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.deliveryRepository.manager.transaction(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                                var orderToUpdate, CardLoc, card;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, transactionManager.findOne(this.deliveryRepository.target, {
                                                where: { id: id },
                                            })];
                                        case 1:
                                            orderToUpdate = _a.sent();
                                            if (!orderToUpdate) {
                                                throw new Error('No delivery order found');
                                            }
                                            orderToUpdate.status = 2;
                                            orderToUpdate.updated_at = new Date(Date.now()).toISOString();
                                            return [4 /*yield*/, transactionManager.save(this.deliveryRepository.target, orderToUpdate)];
                                        case 2:
                                            _a.sent();
                                            return [4 /*yield*/, transactionManager.findOne(this.cardLocationRepository.target, {
                                                    where: { lassraId: orderToUpdate.lassraId },
                                                })];
                                        case 3:
                                            CardLoc = _a.sent();
                                            if (!CardLoc) {
                                                throw new Error('No card location found');
                                            }
                                            CardLoc.requestedDelivery = false;
                                            return [4 /*yield*/, transactionManager.save(this.cardLocationRepository.target, CardLoc)];
                                        case 4:
                                            _a.sent();
                                            return [4 /*yield*/, transactionManager.findOne(this.cardRepository.target, { where: { lassraId: orderToUpdate.lassraId } })];
                                        case 5:
                                            card = _a.sent();
                                            card.status = 5;
                                            return [4 /*yield*/, transactionManager.save(this.cardRepository.target, card)];
                                        case 6:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        //******Dispatch a message to the external service to update the card status
                        return [2 /*return*/, 'Card delivered and received successfully'];
                    case 2:
                        err_3 = _a.sent();
                        throw new Error(err_3);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DeliveryService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " delivery");
    };
    var _a, _b, _c;
    DeliveryService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(location_entity_1.CardLocation)),
        __param(1, (0, typeorm_1.InjectRepository)(delivery_entity_1.Delivery)),
        __param(2, (0, typeorm_1.InjectRepository)(entities_1.Card)),
        __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object])
    ], DeliveryService);
    return DeliveryService;
}());
exports.DeliveryService = DeliveryService;


/***/ }),

/***/ "./apps/batches/src/delivery/dto/create-delivery.dto.ts":
/*!**************************************************************!*\
  !*** ./apps/batches/src/delivery/dto/create-delivery.dto.ts ***!
  \**************************************************************/
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
exports.CreateDeliveryDto = void 0;
var class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
var location_entity_1 = __webpack_require__(/*! ../../dispatch/entities/location.entity */ "./apps/batches/src/dispatch/entities/location.entity.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
var CreateDeliveryDto = /** @class */ (function () {
    function CreateDeliveryDto() {
    }
    var _a;
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CreateDeliveryDto.prototype, "lassraId", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CreateDeliveryDto.prototype, "created_by", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], CreateDeliveryDto.prototype, "status", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CreateDeliveryDto.prototype, "delivery_company", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CreateDeliveryDto.prototype, "assigned_to", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CreateDeliveryDto.prototype, "given_out_to", void 0);
    __decorate([
        (0, class_transformer_1.Type)(function () { return location_entity_1.CardLocation; }),
        __metadata("design:type", typeof (_a = typeof location_entity_1.CardLocation !== "undefined" && location_entity_1.CardLocation) === "function" ? _a : Object)
    ], CreateDeliveryDto.prototype, "cardLocation", void 0);
    return CreateDeliveryDto;
}());
exports.CreateDeliveryDto = CreateDeliveryDto;


/***/ }),

/***/ "./apps/batches/src/delivery/dto/update-delivery.dto.ts":
/*!**************************************************************!*\
  !*** ./apps/batches/src/delivery/dto/update-delivery.dto.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateDeliveryDto = void 0;
var swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
var create_delivery_dto_1 = __webpack_require__(/*! ./create-delivery.dto */ "./apps/batches/src/delivery/dto/create-delivery.dto.ts");
var UpdateDeliveryDto = /** @class */ (function (_super) {
    __extends(UpdateDeliveryDto, _super);
    function UpdateDeliveryDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateDeliveryDto;
}((0, swagger_1.PartialType)(create_delivery_dto_1.CreateDeliveryDto)));
exports.UpdateDeliveryDto = UpdateDeliveryDto;


/***/ }),

/***/ "./apps/batches/src/delivery/entities/delivery.entity.ts":
/*!***************************************************************!*\
  !*** ./apps/batches/src/delivery/entities/delivery.entity.ts ***!
  \***************************************************************/
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
exports.Delivery = void 0;
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var location_entity_1 = __webpack_require__(/*! ../../dispatch/entities/location.entity */ "./apps/batches/src/dispatch/entities/location.entity.ts");
var Delivery = /** @class */ (function () {
    function Delivery() {
    }
    var _a, _b;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Delivery.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Delivery.prototype, "lassraId", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Delivery.prototype, "created_by", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: 0 }),
        __metadata("design:type", Number)
    ], Delivery.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Delivery.prototype, "delivery_company", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Delivery.prototype, "assigned_to", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Delivery.prototype, "given_out_to", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
    ], Delivery.prototype, "delivered_at", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], Delivery.prototype, "not_delivered_reason", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", String)
    ], Delivery.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", String)
    ], Delivery.prototype, "updated_at", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return location_entity_1.CardLocation; }, function (cardLocation) { return cardLocation; }),
        (0, typeorm_1.JoinColumn)({ name: 'lassraId', referencedColumnName: 'lassraId' }),
        __metadata("design:type", typeof (_b = typeof location_entity_1.CardLocation !== "undefined" && location_entity_1.CardLocation) === "function" ? _b : Object)
    ], Delivery.prototype, "cardLocation", void 0);
    Delivery = __decorate([
        (0, typeorm_1.Entity)()
    ], Delivery);
    return Delivery;
}());
exports.Delivery = Delivery;


/***/ }),

/***/ "./apps/batches/src/dispatch/dispatch.controller.ts":
/*!**********************************************************!*\
  !*** ./apps/batches/src/dispatch/dispatch.controller.ts ***!
  \**********************************************************/
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
exports.DispatchController = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var dispatch_service_1 = __webpack_require__(/*! ./dispatch.service */ "./apps/batches/src/dispatch/dispatch.service.ts");
var create_dispatch_dto_1 = __webpack_require__(/*! ./dto/create-dispatch.dto */ "./apps/batches/src/dispatch/dto/create-dispatch.dto.ts");
var typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
var typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
var location_entity_1 = __webpack_require__(/*! ./entities/location.entity */ "./apps/batches/src/dispatch/entities/location.entity.ts");
var entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
// import {
//   Ctx,
//   EventPattern,
//   MessagePattern,
//   Payload,
//   RmqContext,
// } from '@nestjs/microservices';
var DispatchController = /** @class */ (function () {
    function DispatchController(dispatchService, cardLocationRepository, cardRepository) {
        this.dispatchService = dispatchService;
        this.cardLocationRepository = cardLocationRepository;
        this.cardRepository = cardRepository;
    }
    //Eventsaa
    // @EventPattern({ cmd: 'relocation_request' })
    // async UpdateCardRelocationStatus(
    //   @Payload() data: any,
    //   @Ctx() context: RmqContext,
    // ) {
    //   const channel = context.getChannelRef();
    //   const originalMsg = context.getMessage();
    //   console.log(originalMsg, 'eventPattern');
    //   try {
    //     await this.dispatchService.UpdateCardRelocationStatus(data);
    //     console.log('Executeed here');
    //     // channel.ack(originalMsg);
    //     console.log('Executeed here 3');
    //     return;
    //   } catch (e) {
    //     console.log(e, 'errrrrrrooooo');
    //     // channel.nack(originalMsg, false, true);
    //   }
    //   //implement logic for updating relocation request
    // }
    DispatchController.prototype.create = function (createDispatchDto) {
        return this.dispatchService.createDispatch(createDispatchDto);
    };
    DispatchController.prototype.seedcardLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var seed, cards, locationsData, _i, locationsData_1, x, newLocData, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('seeding started');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 8, , 9]);
                        return [4 /*yield*/, this.cardLocationRepository.find({})];
                    case 2:
                        seed = _a.sent();
                        if (seed.length)
                            throw new Error('Locations seeded');
                        return [4 /*yield*/, this.cardRepository.find({})];
                    case 3:
                        cards = _a.sent();
                        locationsData = cards.map(function (card) { return ({
                            lassraId: card.lassraId,
                            currentLocation: 'Head office',
                            collectionCenter: card.contact_LGA,
                            requestedDelivery: false,
                            previousLocations: 'head',
                            card: card,
                        }); });
                        _i = 0, locationsData_1 = locationsData;
                        _a.label = 4;
                    case 4:
                        if (!(_i < locationsData_1.length)) return [3 /*break*/, 7];
                        x = locationsData_1[_i];
                        newLocData = this.cardLocationRepository.create(x);
                        return [4 /*yield*/, this.cardLocationRepository.save(newLocData)];
                    case 5:
                        _a.sent();
                        console.log(newLocData);
                        _a.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 4];
                    case 7: return [2 /*return*/, 'seeding successful'];
                    case 8:
                        e_1 = _a.sent();
                        throw new common_1.HttpException('Database already seeded', common_1.HttpStatus.FORBIDDEN);
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    DispatchController.prototype.getCardForDispatch = function (batchNo, lassraId, collectionCenter) {
        // console.log(batchNo, collectionCenter);
        try {
            return this.dispatchService.getCardforDispatch(batchNo, lassraId, collectionCenter);
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    };
    DispatchController.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('COmtrollers');
                        return [4 /*yield*/, this.dispatchService.findAll()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DispatchController.prototype.findOne = function (id) {
        try {
            return this.dispatchService.findOne(+id);
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.EXPECTATION_FAILED);
        }
    };
    DispatchController.prototype.findOneCard = function (id, lassraId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(id);
                        return [4 /*yield*/, this.dispatchService.findOneCardDispatch(+id, lassraId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DispatchController.prototype.update = function (id, updateDispatchDto) {
        try {
            return this.dispatchService.ackDispatch(updateDispatchDto, +id);
            // return this.dispatchService.updateDispatch(updateDispatchDto, +id);
        }
        catch (e) {
            throw new Error(e);
        }
    };
    DispatchController.prototype.remove = function (id) {
        // return this.dispatchService.remove(+id);
    };
    var _a, _b, _c, _d, _e;
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof create_dispatch_dto_1.CreateDispatchDto !== "undefined" && create_dispatch_dto_1.CreateDispatchDto) === "function" ? _a : Object]),
        __metadata("design:returntype", void 0)
    ], DispatchController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)('seed'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], DispatchController.prototype, "seedcardLocation", null);
    __decorate([
        (0, common_1.Get)(),
        __param(0, (0, common_1.Query)('batchNo')),
        __param(1, (0, common_1.Query)('lassraId')),
        __param(2, (0, common_1.Query)('collectionCenter')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String, String]),
        __metadata("design:returntype", void 0)
    ], DispatchController.prototype, "getCardForDispatch", null);
    __decorate([
        (0, common_1.Get)('orders'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], DispatchController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], DispatchController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Get)('onecarddispatch'),
        __param(0, (0, common_1.Query)('id')),
        __param(1, (0, common_1.Query)('lassraId')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], DispatchController.prototype, "findOneCard", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, typeof (_b = typeof Partial !== "undefined" && Partial) === "function" ? _b : Object]),
        __metadata("design:returntype", void 0)
    ], DispatchController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], DispatchController.prototype, "remove", null);
    DispatchController = __decorate([
        (0, common_1.Controller)('dispatch'),
        __param(1, (0, typeorm_1.InjectRepository)(location_entity_1.CardLocation)),
        __param(2, (0, typeorm_1.InjectRepository)(entities_1.Card)),
        __metadata("design:paramtypes", [typeof (_c = typeof dispatch_service_1.DispatchService !== "undefined" && dispatch_service_1.DispatchService) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object, typeof (_e = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _e : Object])
    ], DispatchController);
    return DispatchController;
}());
exports.DispatchController = DispatchController;


/***/ }),

/***/ "./apps/batches/src/dispatch/dispatch.module.ts":
/*!******************************************************!*\
  !*** ./apps/batches/src/dispatch/dispatch.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DispatchModule = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var dispatch_service_1 = __webpack_require__(/*! ./dispatch.service */ "./apps/batches/src/dispatch/dispatch.service.ts");
var dispatch_controller_1 = __webpack_require__(/*! ./dispatch.controller */ "./apps/batches/src/dispatch/dispatch.controller.ts");
var common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
var typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
var entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
var cardDispatch_entity_1 = __webpack_require__(/*! ./entities/cardDispatch.entity */ "./apps/batches/src/dispatch/entities/cardDispatch.entity.ts");
var dispatch_entity_1 = __webpack_require__(/*! ./entities/dispatch.entity */ "./apps/batches/src/dispatch/entities/dispatch.entity.ts");
var location_entity_1 = __webpack_require__(/*! ./entities/location.entity */ "./apps/batches/src/dispatch/entities/location.entity.ts");
// import { ClientsModule, Transport } from '@nestjs/microservices';
var DispatchModule = /** @class */ (function () {
    function DispatchModule() {
    }
    DispatchModule = __decorate([
        (0, common_1.Module)({
            imports: [
                common_2.DatabaseModule,
                typeorm_1.TypeOrmModule.forFeature([entities_1.Card, dispatch_entity_1.Dispatch, cardDispatch_entity_1.CardDispatch, location_entity_1.CardLocation]),
                // ClientsModule.register([
                //   {
                //     name: 'WEBHOOK_SERVICE',
                //     transport: Transport.RMQ,
                //     options: {
                //       urls: [process.env.RABBIT_MQ_URI],
                //       queue: 'webhook',
                //       noAck: false,
                //       queueOptions: {
                //         durable: true, // queue survives broker restart
                //         arguments: {
                //           'x-message-ttl': 30 * 24 * 60 * 60 * 1000, // 30 days TTL
                //           'x-dead-letter-exchange': '', // Default exchange
                //           'x-dead-letter-routing-key': 'dead_letter_queue', // DLQ routing key
                //         },
                //         // deadLetterExchange: 'dlx',
                //         // messageTtl: 60 * 60 * 1000,
                //       },
                //     },
                //   },
                // ]),
            ],
            controllers: [dispatch_controller_1.DispatchController],
            providers: [dispatch_service_1.DispatchService],
        })
    ], DispatchModule);
    return DispatchModule;
}());
exports.DispatchModule = DispatchModule;


/***/ }),

/***/ "./apps/batches/src/dispatch/dispatch.service.ts":
/*!*******************************************************!*\
  !*** ./apps/batches/src/dispatch/dispatch.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.DispatchService = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
var dispatch_entity_1 = __webpack_require__(/*! ./entities/dispatch.entity */ "./apps/batches/src/dispatch/entities/dispatch.entity.ts");
var typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
var location_entity_1 = __webpack_require__(/*! ./entities/location.entity */ "./apps/batches/src/dispatch/entities/location.entity.ts");
var cardDispatch_entity_1 = __webpack_require__(/*! ./entities/cardDispatch.entity */ "./apps/batches/src/dispatch/entities/cardDispatch.entity.ts");
var card_repository_1 = __webpack_require__(/*! ../repository/card.repository */ "./apps/batches/src/repository/card.repository.ts");
var entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
var typeorm_3 = __webpack_require__(/*! typeorm */ "typeorm");
// import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
var DispatchService = /** @class */ (function () {
    function DispatchService(dispatchRepository, cardDispatchRepository, cardRepository, cardLocationRepository, dataSource) {
        this.dispatchRepository = dispatchRepository;
        this.cardDispatchRepository = cardDispatchRepository;
        this.cardRepository = cardRepository;
        this.cardLocationRepository = cardLocationRepository;
        this.dataSource = dataSource;
        this.logger = new common_1.Logger(DispatchService_1.name);
    }
    DispatchService_1 = DispatchService;
    DispatchService.prototype.UpdateCardRelocationStatus = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var reqCard, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.cardLocationRepository.findOneBy({
                                lassraId: data.lassraId,
                            })];
                    case 1:
                        reqCard = _a.sent();
                        if (!reqCard) return [3 /*break*/, 3];
                        reqCard.requestedRelocation = true;
                        reqCard.collectionCenter = data.newCollectionCenter;
                        return [4 /*yield*/, this.cardLocationRepository.save(reqCard)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        throw new Error(e_1);
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    // (1)
    DispatchService.prototype.getCardforDispatch = function (batchNo, lassraId, collectionCenter) {
        return __awaiter(this, void 0, void 0, function () {
            var status, currentLocation, searchresult, searchresult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        status = 2;
                        currentLocation = 'Head office';
                        if (!(batchNo > 0 && collectionCenter)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.cardLocationRepository
                                .createQueryBuilder('cardLocation')
                                .leftJoinAndSelect('cardLocation.card', 'card')
                                .where('card.batchNo = :batchNo', { batchNo: batchNo })
                                .andWhere('card.status = :status', { status: status })
                                .andWhere('cardLocation.currentLocation = :currentLocation', {
                                currentLocation: currentLocation,
                            })
                                .andWhere('cardLocation.collectionCenter = :collectionCenter', {
                                collectionCenter: collectionCenter,
                            })
                                .select(['cardLocation.lassraId', 'cardLocation.collectionCenter'])
                                .getMany()];
                    case 1:
                        searchresult = _a.sent();
                        return [2 /*return*/, searchresult];
                    case 2:
                        if (!lassraId) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.cardLocationRepository.find({
                                where: { lassraId: lassraId, currentLocation: currentLocation },
                                select: ['lassraId', 'collectionCenter'],
                            })];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        if (!(batchNo < 1 && collectionCenter)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.cardLocationRepository
                                .createQueryBuilder('cardLocation')
                                .leftJoinAndSelect('cardLocation.card', 'card')
                                .where('card.status= :status', { status: status })
                                .andWhere('cardLocation.collectionCenter = :collectionCenter', {
                                collectionCenter: collectionCenter,
                            })
                                .andWhere('cardLocation.currentLocation= :currentLocation', {
                                currentLocation: currentLocation,
                            })
                                .select(['cardLocation.lassraId', 'cardLocation.collectionCenter'])
                                .getMany()];
                    case 5:
                        searchresult = _a.sent();
                        return [2 /*return*/, searchresult];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    //(2)Gett all cards
    DispatchService.prototype.createDispatch = function (createDispatchDto) {
        return __awaiter(this, void 0, void 0, function () {
            var cardData, DispData, newDispatch, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cardData = createDispatchDto.cardDispatch.map(function (item) { return (__assign(__assign({}, item), { dispatchStatus: 0 })); });
                        DispData = __assign(__assign({}, createDispatchDto), { cardDispatch: cardData });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.dispatchRepository.create(DispData)];
                    case 2:
                        newDispatch = _a.sent();
                        return [4 /*yield*/, this.dispatchRepository.save(newDispatch)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        e_2 = _a.sent();
                        throw new Error(e_2.message);
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    DispatchService.prototype.ackDispatch = function (updateDispatchDto, id) {
        return __awaiter(this, void 0, void 0, function () {
            var dispatchToUpdate, queryBuilder, e_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dispatchRepository.findOne({
                            where: { id: id },
                            relations: ['cardDispatch'],
                        })];
                    case 1:
                        dispatchToUpdate = _a.sent();
                        // console.log(dispatchToUpdate, 'updateCardSDisppappe');
                        if (!dispatchToUpdate) {
                            throw new common_1.NotFoundException('Dispatch order  not found');
                        }
                        if (dispatchToUpdate.dispatchStatus === 1) {
                            throw new common_1.ConflictException('Dispatch already acknowledged.');
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.dispatchRepository.manager.transaction(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                                var updated;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            dispatchToUpdate.acknowledgedAt = updateDispatchDto.acknowledgedAt;
                                            dispatchToUpdate.acknowledgedBy = updateDispatchDto.acknowledgedBy;
                                            dispatchToUpdate.dispatchStatus = 1;
                                            dispatchToUpdate.cardDispatch.forEach(function (cardDispatch) { return __awaiter(_this, void 0, void 0, function () {
                                                var currentCard, newLocation;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            currentCard = updateDispatchDto.cardDispatch.find(function (card) { return card.lassraId === cardDispatch.lassraId; });
                                                            if (!currentCard) return [3 /*break*/, 5];
                                                            cardDispatch.destination = currentCard.destination;
                                                            cardDispatch.dispatchStatus = 1;
                                                            return [4 /*yield*/, this.cardLocationRepository.findOne({
                                                                    where: { lassraId: currentCard.lassraId },
                                                                })];
                                                        case 1:
                                                            newLocation = _a.sent();
                                                            if (!newLocation) return [3 /*break*/, 3];
                                                            newLocation.currentLocation = newLocation.collectionCenter;
                                                            return [4 /*yield*/, this.cardLocationRepository.save(newLocation)];
                                                        case 2:
                                                            _a.sent();
                                                            return [3 /*break*/, 4];
                                                        case 3: throw new Error('card location detail not found');
                                                        case 4: return [2 /*return*/, cardDispatch];
                                                        case 5: return [2 /*return*/, cardDispatch];
                                                    }
                                                });
                                            }); });
                                            return [4 /*yield*/, this.dispatchRepository.save(dispatchToUpdate)];
                                        case 1:
                                            updated = _a.sent();
                                            // console.log(updated);
                                            return [4 /*yield*/, transactionManager.save(updated)];
                                        case 2:
                                            // console.log(updated);
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 3:
                        queryBuilder = _a.sent();
                        return [2 /*return*/, 'updated successfully'];
                    case 4:
                        e_3 = _a.sent();
                        throw new Error('not ccompleted');
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    // (4)
    DispatchService.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dispatchRepository.find({})];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_4 = _a.sent();
                        throw new Error(e_4);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // (5)
    DispatchService.prototype.findOneCardDispatch = function (id, lassraId) {
        return __awaiter(this, void 0, void 0, function () {
            var dispatch, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dispatchRepository.find({
                            where: {
                                id: id,
                            },
                        })];
                    case 1:
                        dispatch = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 6]);
                        if (!dispatch) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.cardDispatchRepository.find({
                                where: { dispatch: dispatch, lassraId: lassraId },
                            })];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_5 = _a.sent();
                        throw new Error('Error: ' + e_5.message);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    // (6)
    DispatchService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var oneDispatch, e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dispatchRepository.find({
                                where: { id: id },
                                relations: ['cardDispatch'],
                            })];
                    case 1:
                        oneDispatch = _a.sent();
                        return [2 /*return*/, oneDispatch[0]];
                    case 2:
                        e_6 = _a.sent();
                        throw new Error(e_6);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // (7)
    // update(id: number, updateDispatchDto: UpdateDispatchDto) {
    //   return `This action updates a #${id} dispatch`;
    // }
    // (8)
    DispatchService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " dispatch");
    };
    var DispatchService_1, _a, _b, _c, _d, _e;
    DispatchService = DispatchService_1 = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(dispatch_entity_1.Dispatch)),
        __param(1, (0, typeorm_1.InjectRepository)(cardDispatch_entity_1.CardDispatch)),
        __param(2, (0, typeorm_1.InjectRepository)(entities_1.Card)),
        __param(3, (0, typeorm_1.InjectRepository)(location_entity_1.CardLocation)),
        __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof card_repository_1.CardRepository !== "undefined" && card_repository_1.CardRepository) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object, typeof (_e = typeof typeorm_3.DataSource !== "undefined" && typeorm_3.DataSource) === "function" ? _e : Object])
    ], DispatchService);
    return DispatchService;
}());
exports.DispatchService = DispatchService;


/***/ }),

/***/ "./apps/batches/src/dispatch/dto/create-card-dispatch.dto.ts":
/*!*******************************************************************!*\
  !*** ./apps/batches/src/dispatch/dto/create-card-dispatch.dto.ts ***!
  \*******************************************************************/
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
exports.CreateCardDispatchDto = void 0;
var class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
var create_dispatch_dto_1 = __webpack_require__(/*! ./create-dispatch.dto */ "./apps/batches/src/dispatch/dto/create-dispatch.dto.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
var CreateCardDispatchDto = /** @class */ (function () {
    function CreateCardDispatchDto() {
    }
    var _a;
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], CreateCardDispatchDto.prototype, "lassraId", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CreateCardDispatchDto.prototype, "destination", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", Number)
    ], CreateCardDispatchDto.prototype, "dispatchStatus", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_transformer_1.Type)(function () { return create_dispatch_dto_1.CreateDispatchDto; }),
        __metadata("design:type", typeof (_a = typeof create_dispatch_dto_1.CreateDispatchDto !== "undefined" && create_dispatch_dto_1.CreateDispatchDto) === "function" ? _a : Object)
    ], CreateCardDispatchDto.prototype, "dispatch", void 0);
    return CreateCardDispatchDto;
}());
exports.CreateCardDispatchDto = CreateCardDispatchDto;


/***/ }),

/***/ "./apps/batches/src/dispatch/dto/create-dispatch.dto.ts":
/*!**************************************************************!*\
  !*** ./apps/batches/src/dispatch/dto/create-dispatch.dto.ts ***!
  \**************************************************************/
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
exports.CreateDispatchDto = void 0;
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
var class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
var create_card_dispatch_dto_1 = __webpack_require__(/*! ./create-card-dispatch.dto */ "./apps/batches/src/dispatch/dto/create-card-dispatch.dto.ts");
var CreateDispatchDto = /** @class */ (function () {
    function CreateDispatchDto() {
    }
    var _a, _b, _c;
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], CreateDispatchDto.prototype, "destination", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], CreateDispatchDto.prototype, "dispatchStatus", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CreateDispatchDto.prototype, "createdBy", void 0);
    __decorate([
        (0, class_validator_1.IsDate)(),
        (0, class_transformer_1.Type)(function () { return Date; }),
        __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
    ], CreateDispatchDto.prototype, "createdAt", void 0);
    __decorate([
        (0, class_validator_1.IsDate)(),
        (0, class_transformer_1.Type)(function () { return Date; }),
        __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
    ], CreateDispatchDto.prototype, "dispatchedAt", void 0);
    __decorate([
        (0, class_validator_1.IsDate)(),
        (0, class_transformer_1.Type)(function () { return Date; }),
        __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
    ], CreateDispatchDto.prototype, "acknowledgedAt", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CreateDispatchDto.prototype, "acknowledgedBy", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CreateDispatchDto.prototype, "dispatcher", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_transformer_1.Type)(function () { return create_card_dispatch_dto_1.CreateCardDispatchDto; }),
        __metadata("design:type", Array)
    ], CreateDispatchDto.prototype, "cardDispatch", void 0);
    return CreateDispatchDto;
}());
exports.CreateDispatchDto = CreateDispatchDto;


/***/ }),

/***/ "./apps/batches/src/dispatch/entities/cardDispatch.entity.ts":
/*!*******************************************************************!*\
  !*** ./apps/batches/src/dispatch/entities/cardDispatch.entity.ts ***!
  \*******************************************************************/
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
exports.CardDispatch = void 0;
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var dispatch_entity_1 = __webpack_require__(/*! ./dispatch.entity */ "./apps/batches/src/dispatch/entities/dispatch.entity.ts");
var CardDispatch = /** @class */ (function () {
    function CardDispatch() {
    }
    var _a;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], CardDispatch.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], CardDispatch.prototype, "lassraId", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], CardDispatch.prototype, "destination", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Number)
    ], CardDispatch.prototype, "dispatchStatus", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return dispatch_entity_1.Dispatch; }),
        __metadata("design:type", typeof (_a = typeof dispatch_entity_1.Dispatch !== "undefined" && dispatch_entity_1.Dispatch) === "function" ? _a : Object)
    ], CardDispatch.prototype, "dispatch", void 0);
    CardDispatch = __decorate([
        (0, typeorm_1.Entity)()
    ], CardDispatch);
    return CardDispatch;
}());
exports.CardDispatch = CardDispatch;


/***/ }),

/***/ "./apps/batches/src/dispatch/entities/dispatch.entity.ts":
/*!***************************************************************!*\
  !*** ./apps/batches/src/dispatch/entities/dispatch.entity.ts ***!
  \***************************************************************/
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
exports.Dispatch = void 0;
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var cardDispatch_entity_1 = __webpack_require__(/*! ./cardDispatch.entity */ "./apps/batches/src/dispatch/entities/cardDispatch.entity.ts");
var Dispatch = /** @class */ (function () {
    function Dispatch() {
        //
        this.createdAt = new Date();
    }
    var _a, _b, _c;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Dispatch.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Dispatch.prototype, "destination", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: 0 }),
        __metadata("design:type", Number)
    ], Dispatch.prototype, "dispatchStatus", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Dispatch.prototype, "createdBy", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
    ], Dispatch.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
    ], Dispatch.prototype, "dispatchedAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
    ], Dispatch.prototype, "acknowledgedAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Dispatch.prototype, "acknowledgedBy", void 0);
    __decorate([
        (0, typeorm_1.Column)({}),
        __metadata("design:type", String)
    ], Dispatch.prototype, "dispatcher", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return cardDispatch_entity_1.CardDispatch; }, function (cardDispatch) { return cardDispatch.dispatch; }, {
            cascade: true,
        }),
        __metadata("design:type", Array)
    ], Dispatch.prototype, "cardDispatch", void 0);
    Dispatch = __decorate([
        (0, typeorm_1.Entity)()
    ], Dispatch);
    return Dispatch;
}());
exports.Dispatch = Dispatch;


/***/ }),

/***/ "./apps/batches/src/dispatch/entities/location.entity.ts":
/*!***************************************************************!*\
  !*** ./apps/batches/src/dispatch/entities/location.entity.ts ***!
  \***************************************************************/
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
exports.CardLocation = void 0;
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var entities_1 = __webpack_require__(/*! ../../entities */ "./apps/batches/src/entities/index.ts");
var CardLocation = /** @class */ (function () {
    function CardLocation() {
    }
    var _a;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], CardLocation.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], CardLocation.prototype, "currentLocation", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], CardLocation.prototype, "collectionCenter", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean)
    ], CardLocation.prototype, "requestedDelivery", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: false }),
        __metadata("design:type", Boolean)
    ], CardLocation.prototype, "requestedRelocation", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], CardLocation.prototype, "previousLocations", void 0);
    __decorate([
        (0, typeorm_1.Column)({ unique: true }),
        __metadata("design:type", String)
    ], CardLocation.prototype, "lassraId", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return entities_1.Card; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", typeof (_a = typeof entities_1.Card !== "undefined" && entities_1.Card) === "function" ? _a : Object)
    ], CardLocation.prototype, "card", void 0);
    CardLocation = __decorate([
        (0, typeorm_1.Entity)()
    ], CardLocation);
    return CardLocation;
}());
exports.CardLocation = CardLocation;


/***/ }),

/***/ "./apps/batches/src/dto/create-batch.dto.ts":
/*!**************************************************!*\
  !*** ./apps/batches/src/dto/create-batch.dto.ts ***!
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateBatchDto = void 0;
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
var class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
var create_card_dto_1 = __webpack_require__(/*! ./create-card.dto */ "./apps/batches/src/dto/create-card.dto.ts");
var CreateBatchDto = /** @class */ (function () {
    function CreateBatchDto() {
    }
    var _a, _b;
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Number)
    ], CreateBatchDto.prototype, "count", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], CreateBatchDto.prototype, "batchNo", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CreateBatchDto.prototype, "name", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CreateBatchDto.prototype, "description", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", Number)
    ], CreateBatchDto.prototype, "noRecords", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CreateBatchDto.prototype, "perso", void 0);
    __decorate([
        (0, class_validator_1.IsDate)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_transformer_1.Type)(function () { return Date; }),
        __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
    ], CreateBatchDto.prototype, "bankDataCreatedOn", void 0);
    __decorate([
        (0, class_validator_1.IsDate)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_transformer_1.Type)(function () { return Date; }),
        __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
    ], CreateBatchDto.prototype, "idDataCreatedOn", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CreateBatchDto.prototype, "notes", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], CreateBatchDto.prototype, "cancelledStatus", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)()
        // @Type(() => Number)
        ,
        (0, class_transformer_1.Type)(function () { return String; }),
        __metadata("design:type", String)
    ], CreateBatchDto.prototype, "bankJobNo", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CreateBatchDto.prototype, "bankJobFilename", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", Number)
    ], CreateBatchDto.prototype, "expMth", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], CreateBatchDto.prototype, "expYear", void 0);
    __decorate([
        (0, class_validator_1.IsString)()
        // @IsNotEmpty()
        ,
        (0, class_transformer_1.Type)(function () { return String; }),
        __metadata("design:type", String)
    ], CreateBatchDto.prototype, "enrolLG", void 0);
    __decorate([
        (0, class_validator_1.IsDefined)(),
        (0, class_validator_1.IsArray)()
        // @IsNotEmptyObject()
        ,
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return create_card_dto_1.CreateCardDto; }),
        __metadata("design:type", Array)
    ], CreateBatchDto.prototype, "cards", void 0);
    return CreateBatchDto;
}());
exports.CreateBatchDto = CreateBatchDto;


/***/ }),

/***/ "./apps/batches/src/dto/create-card.dto.ts":
/*!*************************************************!*\
  !*** ./apps/batches/src/dto/create-card.dto.ts ***!
  \*************************************************/
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
exports.CreateCardDto = void 0;
var swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
var class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
var CreateCardDto = /** @class */ (function () {
    function CreateCardDto() {
    }
    var _a, _b;
    __decorate([
        (0, class_validator_1.IsString)()
        // @IsNotEmpty()
        ,
        (0, swagger_1.ApiProperty)({
            example: '26',
            required: true,
        }),
        __metadata("design:type", String)
    ], CreateCardDto.prototype, "batchNo", void 0);
    __decorate([
        (0, class_validator_1.IsString)()
        // @IsNotEmpty()
        ,
        (0, swagger_1.ApiProperty)({
            example: 'Isolo',
            required: true,
        }),
        __metadata("design:type", String)
    ], CreateCardDto.prototype, "contact_LGA", void 0);
    __decorate([
        (0, class_validator_1.IsString)()
        // @IsNotEmpty()
        ,
        (0, swagger_1.ApiProperty)({
            example: 'NGN',
            required: true,
        }),
        __metadata("design:type", String)
    ], CreateCardDto.prototype, "country_code", void 0);
    __decorate([
        (0, class_validator_1.IsString)()
        // @IsNotEmpty()
        ,
        (0, swagger_1.ApiProperty)({
            example: '19',
            required: true,
        }),
        __metadata("design:type", String)
    ], CreateCardDto.prototype, "current_house_number", void 0);
    __decorate([
        (0, class_validator_1.IsString)()
        // @IsNotEmpty()
        ,
        (0, swagger_1.ApiProperty)({
            example: 'Oyemomi',
            required: true,
        }),
        __metadata("design:type", String)
    ], CreateCardDto.prototype, "current_street", void 0);
    __decorate([
        (0, class_validator_1.IsString)()
        // @IsNotEmpty()
        ,
        (0, swagger_1.ApiProperty)({
            example: 'Ogba',
            required: true,
        }),
        __metadata("design:type", String)
    ], CreateCardDto.prototype, "current_town", void 0);
    __decorate([
        (0, class_validator_1.IsString)()
        // @IsNotEmpty()
        ,
        (0, swagger_1.ApiProperty)({
            example: '26',
            required: true,
        }),
        (0, class_transformer_1.Type)(function () { return Date; }),
        __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
    ], CreateCardDto.prototype, "date_of_birth", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)()
        // @IsNotEmpty()
        ,
        (0, swagger_1.ApiProperty)({
            example: false,
            required: true,
        }),
        __metadata("design:type", Boolean)
    ], CreateCardDto.prototype, "duplicate_PAN", void 0);
    __decorate([
        (0, class_validator_1.IsEmail)()
        // @IsNotEmpty()
        ,
        (0, swagger_1.ApiProperty)({
            example: 'lassra@identiko.dev',
            required: true,
        }),
        __metadata("design:type", String)
    ], CreateCardDto.prototype, "email_address", void 0);
    __decorate([
        (0, class_validator_1.IsString)()
        // @IsNotEmpty()
        ,
        (0, swagger_1.ApiProperty)({
            example: 'John',
            required: true,
        }),
        __metadata("design:type", String)
    ], CreateCardDto.prototype, "first_name", void 0);
    __decorate([
        (0, class_validator_1.IsString)()
        // @IsNotEmpty()
        ,
        (0, swagger_1.ApiProperty)({
            example: '26',
            required: true,
        }),
        (0, class_transformer_1.Type)(function () { return String; }),
        __metadata("design:type", String)
    ], CreateCardDto.prototype, "flat_number", void 0);
    __decorate([
        (0, class_validator_1.IsString)()
        // @IsNotEmpty()
        ,
        (0, swagger_1.ApiProperty)({
            example: 'LAEXAMPLE2',
            required: true,
        }),
        (0, class_transformer_1.Type)(function () { return String; }),
        __metadata("design:type", String)
    ], CreateCardDto.prototype, "lassraId", void 0);
    __decorate([
        (0, class_validator_1.IsString)()
        // @IsNotEmpty()
        ,
        (0, swagger_1.ApiProperty)({
            example: 'Oluwa',
            required: true,
        }),
        (0, class_transformer_1.Type)(function () { return String; }),
        __metadata("design:type", String)
    ], CreateCardDto.prototype, "middle_name", void 0);
    __decorate([
        (0, class_validator_1.IsString)()
        // @IsNotEmpty()
        ,
        (0, swagger_1.ApiProperty)({
            example: '+2345679020',
            required: true,
        }),
        (0, class_transformer_1.Type)(function () { return String; }),
        __metadata("design:type", String)
    ], CreateCardDto.prototype, "primary_phone_no", void 0);
    __decorate([
        (0, class_validator_1.IsString)()
        // @IsNotEmpty()
        ,
        (0, swagger_1.ApiProperty)({
            example: Date.now(),
            required: true,
        }),
        (0, class_transformer_1.Type)(function () { return Date; }),
        __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
    ], CreateCardDto.prototype, "registration_date", void 0);
    __decorate([
        (0, class_validator_1.IsString)()
        // @IsNotEmpty()
        ,
        (0, swagger_1.ApiProperty)({
            example: 'Lagos',
            required: true,
        }),
        (0, class_transformer_1.Type)(function () { return String; }),
        __metadata("design:type", String)
    ], CreateCardDto.prototype, "state_of_residence", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)()
        // @IsNotEmpty()
        ,
        (0, swagger_1.ApiProperty)({
            example: 0,
            required: true,
        }),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Number)
    ], CreateCardDto.prototype, "status", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, swagger_1.ApiProperty)({
            example: 'Doe',
            required: true,
        }),
        (0, class_transformer_1.Type)(function () { return String; }),
        __metadata("design:type", String)
    ], CreateCardDto.prototype, "surname", void 0);
    return CreateCardDto;
}());
exports.CreateCardDto = CreateCardDto;


/***/ }),

/***/ "./apps/batches/src/dto/create-cardreceipt.dto.ts":
/*!********************************************************!*\
  !*** ./apps/batches/src/dto/create-cardreceipt.dto.ts ***!
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
exports.CreateCardReceiptDto = void 0;
var class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
var create_card_dto_1 = __webpack_require__(/*! ./create-card.dto */ "./apps/batches/src/dto/create-card.dto.ts");
var create_receipt_dto_1 = __webpack_require__(/*! ./create-receipt.dto */ "./apps/batches/src/dto/create-receipt.dto.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
var CreateCardReceiptDto = /** @class */ (function () {
    function CreateCardReceiptDto() {
    }
    var _a, _b;
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], CreateCardReceiptDto.prototype, "lassraId", void 0);
    __decorate([
        (0, class_validator_1.IsDefined)(),
        (0, class_transformer_1.Type)(function () { return create_card_dto_1.CreateCardDto; }),
        __metadata("design:type", typeof (_a = typeof create_card_dto_1.CreateCardDto !== "undefined" && create_card_dto_1.CreateCardDto) === "function" ? _a : Object)
    ], CreateCardReceiptDto.prototype, "card", void 0);
    __decorate([
        (0, class_validator_1.IsDefined)(),
        (0, class_transformer_1.Type)(function () { return create_receipt_dto_1.CreateReceiptDto; }),
        __metadata("design:type", typeof (_b = typeof create_receipt_dto_1.CreateReceiptDto !== "undefined" && create_receipt_dto_1.CreateReceiptDto) === "function" ? _b : Object)
    ], CreateCardReceiptDto.prototype, "receipt", void 0);
    return CreateCardReceiptDto;
}());
exports.CreateCardReceiptDto = CreateCardReceiptDto;


/***/ }),

/***/ "./apps/batches/src/dto/create-receipt.dto.ts":
/*!****************************************************!*\
  !*** ./apps/batches/src/dto/create-receipt.dto.ts ***!
  \****************************************************/
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
exports.CreateReceiptDto = void 0;
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
var class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
var create_batch_dto_1 = __webpack_require__(/*! ./create-batch.dto */ "./apps/batches/src/dto/create-batch.dto.ts");
var swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
var create_cardreceipt_dto_1 = __webpack_require__(/*! ./create-cardreceipt.dto */ "./apps/batches/src/dto/create-cardreceipt.dto.ts");
var CreateReceiptDto = /** @class */ (function () {
    function CreateReceiptDto() {
    }
    var _a, _b;
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        (0, swagger_1.ApiProperty)({
            example: 1,
            required: true,
        }),
        __metadata("design:type", Number)
    ], CreateReceiptDto.prototype, "receivedStatus", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            example: 'Jome',
            required: true,
        }),
        __metadata("design:type", String)
    ], CreateReceiptDto.prototype, "receivedBy", void 0);
    __decorate([
        (0, class_validator_1.IsDate)(),
        (0, class_transformer_1.Type)(function () { return Date; }),
        (0, swagger_1.ApiProperty)({
            example: Date.now(),
            required: true,
        }),
        __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
    ], CreateReceiptDto.prototype, "receivedAt", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_transformer_1.Type)(function () { return String; }),
        (0, swagger_1.ApiProperty)({
            example: '32',
            required: true,
        }),
        __metadata("design:type", String)
    ], CreateReceiptDto.prototype, "batchNo", void 0);
    __decorate([
        (0, class_transformer_1.Type)(function () { return create_batch_dto_1.CreateBatchDto; }),
        __metadata("design:type", typeof (_b = typeof create_batch_dto_1.CreateBatchDto !== "undefined" && create_batch_dto_1.CreateBatchDto) === "function" ? _b : Object)
    ], CreateReceiptDto.prototype, "batch", void 0);
    __decorate([
        (0, class_validator_1.IsDefined)(),
        (0, class_transformer_1.Type)(function () { return create_cardreceipt_dto_1.CreateCardReceiptDto; }),
        __metadata("design:type", Array)
    ], CreateReceiptDto.prototype, "cardReceipt", void 0);
    return CreateReceiptDto;
}());
exports.CreateReceiptDto = CreateReceiptDto;


/***/ }),

/***/ "./apps/batches/src/dto/index.ts":
/*!***************************************!*\
  !*** ./apps/batches/src/dto/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-batch.dto */ "./apps/batches/src/dto/create-batch.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-card.dto */ "./apps/batches/src/dto/create-card.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-receipt.dto */ "./apps/batches/src/dto/create-receipt.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-cardreceipt.dto */ "./apps/batches/src/dto/create-cardreceipt.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-card.dto */ "./apps/batches/src/dto/update-card.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-batch.dto */ "./apps/batches/src/dto/update-batch.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-cardreceipt.dto */ "./apps/batches/src/dto/update-cardreceipt.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-receipt.dto */ "./apps/batches/src/dto/update-receipt.dto.ts"), exports);


/***/ }),

/***/ "./apps/batches/src/dto/update-batch.dto.ts":
/*!**************************************************!*\
  !*** ./apps/batches/src/dto/update-batch.dto.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateBatchDto = void 0;
var mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
var create_batch_dto_1 = __webpack_require__(/*! ./create-batch.dto */ "./apps/batches/src/dto/create-batch.dto.ts");
var UpdateBatchDto = /** @class */ (function (_super) {
    __extends(UpdateBatchDto, _super);
    function UpdateBatchDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateBatchDto;
}((0, mapped_types_1.PartialType)(create_batch_dto_1.CreateBatchDto)));
exports.UpdateBatchDto = UpdateBatchDto;


/***/ }),

/***/ "./apps/batches/src/dto/update-card.dto.ts":
/*!*************************************************!*\
  !*** ./apps/batches/src/dto/update-card.dto.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCardDto = void 0;
var mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
var create_card_dto_1 = __webpack_require__(/*! ./create-card.dto */ "./apps/batches/src/dto/create-card.dto.ts");
var UpdateCardDto = /** @class */ (function (_super) {
    __extends(UpdateCardDto, _super);
    function UpdateCardDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateCardDto;
}((0, mapped_types_1.PartialType)(create_card_dto_1.CreateCardDto)));
exports.UpdateCardDto = UpdateCardDto;


/***/ }),

/***/ "./apps/batches/src/dto/update-cardreceipt.dto.ts":
/*!********************************************************!*\
  !*** ./apps/batches/src/dto/update-cardreceipt.dto.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCardReceiptDto = void 0;
var mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
var create_cardreceipt_dto_1 = __webpack_require__(/*! ./create-cardreceipt.dto */ "./apps/batches/src/dto/create-cardreceipt.dto.ts");
var UpdateCardReceiptDto = /** @class */ (function (_super) {
    __extends(UpdateCardReceiptDto, _super);
    function UpdateCardReceiptDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateCardReceiptDto;
}((0, mapped_types_1.PartialType)(create_cardreceipt_dto_1.CreateCardReceiptDto)));
exports.UpdateCardReceiptDto = UpdateCardReceiptDto;


/***/ }),

/***/ "./apps/batches/src/dto/update-receipt.dto.ts":
/*!****************************************************!*\
  !*** ./apps/batches/src/dto/update-receipt.dto.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateReceiptDto = void 0;
var mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
var create_receipt_dto_1 = __webpack_require__(/*! ./create-receipt.dto */ "./apps/batches/src/dto/create-receipt.dto.ts");
var UpdateReceiptDto = /** @class */ (function (_super) {
    __extends(UpdateReceiptDto, _super);
    function UpdateReceiptDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateReceiptDto;
}((0, mapped_types_1.PartialType)(create_receipt_dto_1.CreateReceiptDto)));
exports.UpdateReceiptDto = UpdateReceiptDto;


/***/ }),

/***/ "./apps/batches/src/entities/batch.entity.ts":
/*!***************************************************!*\
  !*** ./apps/batches/src/entities/batch.entity.ts ***!
  \***************************************************/
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
exports.Batch = void 0;
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var card_entity_1 = __webpack_require__(/*! ./card.entity */ "./apps/batches/src/entities/card.entity.ts");
var Batch = /** @class */ (function () {
    function Batch() {
    }
    var _a, _b, _c;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({}),
        __metadata("design:type", Number)
    ], Batch.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ unique: true }),
        __metadata("design:type", String)
    ], Batch.prototype, "batchNo", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Batch.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Batch.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Batch.prototype, "noRecords", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Batch.prototype, "perso", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
    ], Batch.prototype, "bankDataCreatedOn", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
    ], Batch.prototype, "idDataCreatedOn", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Batch.prototype, "notes", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Batch.prototype, "cancelledStatus", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Batch.prototype, "bankJobNo", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Batch.prototype, "bankJobFilename", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Batch.prototype, "expMth", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Batch.prototype, "expYear", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Batch.prototype, "enrolLG", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Number)
    ], Batch.prototype, "count", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return card_entity_1.Card; }, function (card) { return card.batchNo; }, { cascade: true }),
        __metadata("design:type", Array)
    ], Batch.prototype, "cards", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'timestamp', default: function () { return 'CURRENT_TIMESTAMP'; } }),
        __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
    ], Batch.prototype, "createdAt", void 0);
    Batch = __decorate([
        (0, typeorm_1.Entity)('batches')
    ], Batch);
    return Batch;
}());
exports.Batch = Batch;


/***/ }),

/***/ "./apps/batches/src/entities/card.entity.ts":
/*!**************************************************!*\
  !*** ./apps/batches/src/entities/card.entity.ts ***!
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Card = void 0;
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var batch_entity_1 = __webpack_require__(/*! ./batch.entity */ "./apps/batches/src/entities/batch.entity.ts");
var location_entity_1 = __webpack_require__(/*! ../dispatch/entities/location.entity */ "./apps/batches/src/dispatch/entities/location.entity.ts");
// import { CardReceipt } from '../../cardreceipt/entities/cardreceipt.entity';
var Card = /** @class */ (function () {
    function Card() {
    }
    var _a, _b, _c, _d, _e;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({}),
        __metadata("design:type", Number)
    ], Card.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({}),
        __metadata("design:type", String)
    ], Card.prototype, "batchNo", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: false }),
        __metadata("design:type", String)
    ], Card.prototype, "contact_LGA", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Card.prototype, "country_code", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Card.prototype, "current_house_number", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Card.prototype, "current_street", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Card.prototype, "current_town", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
    ], Card.prototype, "date_of_birth", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], Card.prototype, "duplicate_PAN", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Card.prototype, "email_address", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Card.prototype, "first_name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Card.prototype, "flat_number", void 0);
    __decorate([
        (0, typeorm_1.Column)({ unique: true }),
        __metadata("design:type", String)
    ], Card.prototype, "lassraId", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Card.prototype, "middle_name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Card.prototype, "primary_phone_no", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
    ], Card.prototype, "registration_date", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Card.prototype, "state_of_residence", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: 0 }),
        __metadata("design:type", Number)
    ], Card.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Card.prototype, "surname", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return batch_entity_1.Batch; }, function (batch) { return batch.cards; }, { eager: true }),
        __metadata("design:type", typeof (_c = typeof batch_entity_1.Batch !== "undefined" && batch_entity_1.Batch) === "function" ? _c : Object)
    ], Card.prototype, "batch", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'timestamp', default: function () { return 'CURRENT_TIMESTAMP'; } }),
        __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
    ], Card.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return location_entity_1.CardLocation; }),
        __metadata("design:type", typeof (_e = typeof location_entity_1.CardLocation !== "undefined" && location_entity_1.CardLocation) === "function" ? _e : Object)
    ], Card.prototype, "cardLocation", void 0);
    Card = __decorate([
        (0, typeorm_1.Entity)('cards')
    ], Card);
    return Card;
}());
exports.Card = Card;


/***/ }),

/***/ "./apps/batches/src/entities/cardreceipt.entity.ts":
/*!*********************************************************!*\
  !*** ./apps/batches/src/entities/cardreceipt.entity.ts ***!
  \*********************************************************/
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
exports.CardReceipt = void 0;
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var card_entity_1 = __webpack_require__(/*! ./card.entity */ "./apps/batches/src/entities/card.entity.ts");
var receipt_entity_1 = __webpack_require__(/*! ./receipt.entity */ "./apps/batches/src/entities/receipt.entity.ts");
var CardReceipt = /** @class */ (function () {
    function CardReceipt() {
    }
    var _a, _b;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], CardReceipt.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ unique: true }),
        __metadata("design:type", String)
    ], CardReceipt.prototype, "lassraId", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return card_entity_1.Card; }),
        __metadata("design:type", typeof (_a = typeof card_entity_1.Card !== "undefined" && card_entity_1.Card) === "function" ? _a : Object)
    ], CardReceipt.prototype, "card", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return receipt_entity_1.Receipt; }, function (receipt) { return receipt.cardReceipt; }),
        __metadata("design:type", typeof (_b = typeof receipt_entity_1.Receipt !== "undefined" && receipt_entity_1.Receipt) === "function" ? _b : Object)
    ], CardReceipt.prototype, "receipt", void 0);
    CardReceipt = __decorate([
        (0, typeorm_1.Entity)()
    ], CardReceipt);
    return CardReceipt;
}());
exports.CardReceipt = CardReceipt;


/***/ }),

/***/ "./apps/batches/src/entities/index.ts":
/*!********************************************!*\
  !*** ./apps/batches/src/entities/index.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./batch.entity */ "./apps/batches/src/entities/batch.entity.ts"), exports);
__exportStar(__webpack_require__(/*! ./card.entity */ "./apps/batches/src/entities/card.entity.ts"), exports);
__exportStar(__webpack_require__(/*! ./cardreceipt.entity */ "./apps/batches/src/entities/cardreceipt.entity.ts"), exports);
__exportStar(__webpack_require__(/*! ./receipt.entity */ "./apps/batches/src/entities/receipt.entity.ts"), exports);


/***/ }),

/***/ "./apps/batches/src/entities/receipt.entity.ts":
/*!*****************************************************!*\
  !*** ./apps/batches/src/entities/receipt.entity.ts ***!
  \*****************************************************/
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
exports.Receipt = void 0;
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var batch_entity_1 = __webpack_require__(/*! ./batch.entity */ "./apps/batches/src/entities/batch.entity.ts");
var cardreceipt_entity_1 = __webpack_require__(/*! ./cardreceipt.entity */ "./apps/batches/src/entities/cardreceipt.entity.ts");
var Receipt = /** @class */ (function () {
    function Receipt() {
    }
    var _a, _b, _c;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Receipt.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Receipt.prototype, "batchNo", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: 0 }),
        __metadata("design:type", Number)
    ], Receipt.prototype, "receivedStatus", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Receipt.prototype, "receivedBy", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return cardreceipt_entity_1.CardReceipt; }, function (cardReceipt) { return cardReceipt.receipt; }, {
            cascade: true,
        }),
        __metadata("design:type", Array)
    ], Receipt.prototype, "cardReceipt", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'timestamp', default: function () { return 'CURRENT_TIMESTAMP'; } }),
        __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
    ], Receipt.prototype, "receivedAt", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return batch_entity_1.Batch; }),
        __metadata("design:type", typeof (_b = typeof batch_entity_1.Batch !== "undefined" && batch_entity_1.Batch) === "function" ? _b : Object)
    ], Receipt.prototype, "batch", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'timestamp', default: function () { return 'CURRENT_TIMESTAMP'; } }),
        __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
    ], Receipt.prototype, "createdAt", void 0);
    Receipt = __decorate([
        (0, typeorm_1.Entity)('receipts')
    ], Receipt);
    return Receipt;
}());
exports.Receipt = Receipt;


/***/ }),

/***/ "./apps/batches/src/main.ts":
/*!**********************************!*\
  !*** ./apps/batches/src/main.ts ***!
  \**********************************/
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
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var nestjs_pino_1 = __webpack_require__(/*! nestjs-pino */ "nestjs-pino");
var config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
var swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
var app_module_1 = __webpack_require__(/*! ./app.module */ "./apps/batches/src/app.module.ts");
// import { SharedService } from '@app/common';
// import { RmqOptions, Transport } from '@nestjs/microservices';
var response_interceptors_1 = __webpack_require__(/*! libs/common/src/auth/interceptors/response.interceptors */ "./libs/common/src/auth/interceptors/response.interceptors.ts");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function () {
        var app, options, document, configService;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, core_1.NestFactory.create(app_module_1.AppModule, {
                        snapshot: true,
                        cors: true,
                    })];
                case 1:
                    app = _a.sent();
                    options = new swagger_1.DocumentBuilder()
                        .setTitle('Lasra card tracking Api')
                        .setDescription('Api for the card tracking project')
                        .addServer('http://localhost:4000/', 'local dev')
                        .addTag('Lassra internal Card Tracking portals')
                        .build();
                    document = swagger_1.SwaggerModule.createDocument(app, options);
                    swagger_1.SwaggerModule.setup('api-docs', app, document);
                    configService = app.get(config_1.ConfigService);
                    // const sharedService = new SharedService()
                    // app.get(SharedService);
                    // console.log(sharedService)
                    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
                    app.useGlobalInterceptors(new response_interceptors_1.ResponseInterceptor());
                    app.useLogger(app.get(nestjs_pino_1.Logger));
                    // const queue = configService.get('RABBIT_MQ_WEBHOOK_QUEUE');
                    // // app.connectMicroservice(sharedService.getRmqOptions(queue));
                    // app.connectMicroservice({
                    //   name: 'WEBHOOK_SERVICE',
                    //   transport: Transport.RMQ,
                    //   options: {
                    //     urls: [process.env.RABBIT_MQ_URI],
                    //     queue: 'webhook',
                    //     noAck: false,
                    //     queueOptions: {
                    //       durable: true, // queue survives broker restart
                    //       arguments: {
                    //         'x-message-ttl': 30 * 24 * 60 * 60 * 1000, // 30 days TTL
                    //         'x-dead-letter-exchange': '', // Default exchange
                    //         'x-dead-letter-routing-key': 'dead_letter_queue', // DLQ routing key
                    //       },
                    //     },
                    //   },
                    // });
                    // await app.startAllMicroservices();
                    return [4 /*yield*/, app.listen(configService.get('PORT'))];
                case 2:
                    // const queue = configService.get('RABBIT_MQ_WEBHOOK_QUEUE');
                    // // app.connectMicroservice(sharedService.getRmqOptions(queue));
                    // app.connectMicroservice({
                    //   name: 'WEBHOOK_SERVICE',
                    //   transport: Transport.RMQ,
                    //   options: {
                    //     urls: [process.env.RABBIT_MQ_URI],
                    //     queue: 'webhook',
                    //     noAck: false,
                    //     queueOptions: {
                    //       durable: true, // queue survives broker restart
                    //       arguments: {
                    //         'x-message-ttl': 30 * 24 * 60 * 60 * 1000, // 30 days TTL
                    //         'x-dead-letter-exchange': '', // Default exchange
                    //         'x-dead-letter-routing-key': 'dead_letter_queue', // DLQ routing key
                    //       },
                    //     },
                    //   },
                    // });
                    // await app.startAllMicroservices();
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
bootstrap();


/***/ }),

/***/ "./apps/batches/src/provision/dto/create-provision.dto.ts":
/*!****************************************************************!*\
  !*** ./apps/batches/src/provision/dto/create-provision.dto.ts ***!
  \****************************************************************/
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
exports.CreateProvisionDto = void 0;
var swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
var class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
var CreateProvisionDto = /** @class */ (function () {
    function CreateProvisionDto() {
    }
    var _a;
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            example: 'Jome',
            required: true,
        }),
        __metadata("design:type", String)
    ], CreateProvisionDto.prototype, "provisionedBy", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            example: 'Jome',
            required: true,
        }),
        __metadata("design:type", String)
    ], CreateProvisionDto.prototype, "receivedBy", void 0);
    __decorate([
        (0, class_validator_1.IsDate)(),
        (0, class_transformer_1.Type)(function () { return Date; }),
        (0, swagger_1.ApiProperty)({
            example: Date.now(),
            required: true,
        }),
        __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
    ], CreateProvisionDto.prototype, "provisionedAt", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_transformer_1.Type)(function () { return String; }),
        (0, swagger_1.ApiProperty)({
            example: '32',
            required: true,
        }),
        __metadata("design:type", String)
    ], CreateProvisionDto.prototype, "batchNo", void 0);
    return CreateProvisionDto;
}());
exports.CreateProvisionDto = CreateProvisionDto;


/***/ }),

/***/ "./apps/batches/src/provision/dto/update-provision.dto.ts":
/*!****************************************************************!*\
  !*** ./apps/batches/src/provision/dto/update-provision.dto.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateProvisionDto = void 0;
var swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
var create_provision_dto_1 = __webpack_require__(/*! ./create-provision.dto */ "./apps/batches/src/provision/dto/create-provision.dto.ts");
var UpdateProvisionDto = /** @class */ (function (_super) {
    __extends(UpdateProvisionDto, _super);
    function UpdateProvisionDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateProvisionDto;
}((0, swagger_1.PartialType)(create_provision_dto_1.CreateProvisionDto)));
exports.UpdateProvisionDto = UpdateProvisionDto;


/***/ }),

/***/ "./apps/batches/src/provision/entities/provision.entity.ts":
/*!*****************************************************************!*\
  !*** ./apps/batches/src/provision/entities/provision.entity.ts ***!
  \*****************************************************************/
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
exports.Provision = void 0;
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var entities_1 = __webpack_require__(/*! ../../entities */ "./apps/batches/src/entities/index.ts");
var cardprovision_entity_1 = __webpack_require__(/*! ../../cardprovision/entities/cardprovision.entity */ "./apps/batches/src/cardprovision/entities/cardprovision.entity.ts");
var Provision = /** @class */ (function () {
    function Provision() {
    }
    var _a, _b, _c, _d;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Provision.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Provision.prototype, "batchNo", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Provision.prototype, "provisionedBy", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Provision.prototype, "receivedBy", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: 0 }),
        __metadata("design:type", Number)
    ], Provision.prototype, "provisionStatus", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return cardprovision_entity_1.CardProvision; }, function (cardProvision) { return cardProvision.provision; }, {
            cascade: true,
        }),
        __metadata("design:type", Array)
    ], Provision.prototype, "cardProvision", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'timestamp', default: function () { return 'CURRENT_TIMESTAMP'; } }),
        __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
    ], Provision.prototype, "provisionedAt", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return entities_1.Receipt; }),
        __metadata("design:type", typeof (_b = typeof entities_1.Batch !== "undefined" && entities_1.Batch) === "function" ? _b : Object)
    ], Provision.prototype, "batch", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
    ], Provision.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
    ], Provision.prototype, "updatedAt", void 0);
    Provision = __decorate([
        (0, typeorm_1.Entity)('provision')
    ], Provision);
    return Provision;
}());
exports.Provision = Provision;


/***/ }),

/***/ "./apps/batches/src/provision/provision.controller.ts":
/*!************************************************************!*\
  !*** ./apps/batches/src/provision/provision.controller.ts ***!
  \************************************************************/
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
exports.ProvisionController = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var provision_service_1 = __webpack_require__(/*! ./provision.service */ "./apps/batches/src/provision/provision.service.ts");
var create_provision_dto_1 = __webpack_require__(/*! ./dto/create-provision.dto */ "./apps/batches/src/provision/dto/create-provision.dto.ts");
var update_provision_dto_1 = __webpack_require__(/*! ./dto/update-provision.dto */ "./apps/batches/src/provision/dto/update-provision.dto.ts");
var batch_service_1 = __webpack_require__(/*! ../batch/batch.service */ "./apps/batches/src/batch/batch.service.ts");
var swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
(0, swagger_1.ApiTags)('provision');
var ProvisionController = /** @class */ (function () {
    function ProvisionController(provisionService, batchService) {
        this.provisionService = provisionService;
        this.batchService = batchService;
    }
    ProvisionController.prototype.create = function (createProvisionDto) {
        return __awaiter(this, void 0, void 0, function () {
            var currentBatch, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(createProvisionDto, ' provisionn');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.batchService.findOne(createProvisionDto.batchNo)];
                    case 2:
                        currentBatch = _a.sent();
                        createProvisionDto.batch = currentBatch;
                        return [4 /*yield*/, this.provisionService.createProvision(createProvisionDto)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        e_1 = _a.sent();
                        // console.log(e);
                        throw new common_1.HttpException(e_1.message, common_1.HttpStatus.BAD_REQUEST);
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ProvisionController.prototype.complete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.provisionService.complete(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_2 = _a.sent();
                        // console.log(e);
                        throw new common_1.HttpException(e_2.message, common_1.HttpStatus.BAD_REQUEST);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProvisionController.prototype.findAll = function (batchNo) {
        return this.provisionService.findAll(batchNo);
    };
    ProvisionController.prototype.findOne = function (id) {
        // console.log("prq1:findOne")
        return this.provisionService.findOne(+id);
    };
    ProvisionController.prototype.search = function (batchNo, jobNo, lassraId, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        if (!batchNo && !jobNo && !lassraId)
            throw new common_1.HttpException('Provide bathcNo, JobNo or lassraId', common_1.HttpStatus.BAD_REQUEST);
        return this.provisionService.search(batchNo, jobNo, lassraId, page, pageSize);
    };
    ProvisionController.prototype.update = function (id, updateProvisionDto) {
        return this.provisionService.update(+id, updateProvisionDto);
    };
    ProvisionController.prototype.remove = function (id) {
        return this.provisionService.remove(+id);
    };
    var _a, _b, _c, _d;
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof create_provision_dto_1.CreateProvisionDto !== "undefined" && create_provision_dto_1.CreateProvisionDto) === "function" ? _a : Object]),
        __metadata("design:returntype", Promise)
    ], ProvisionController.prototype, "create", null);
    __decorate([
        (0, common_1.Patch)('complete/:id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], ProvisionController.prototype, "complete", null);
    __decorate([
        (0, common_1.Get)(),
        __param(0, (0, common_1.Query)('batchNo')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ProvisionController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ProvisionController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Get)('search'),
        __param(0, (0, common_1.Query)('batchNo')),
        __param(1, (0, common_1.Query)('jobNo')),
        __param(2, (0, common_1.Query)('lassraId')),
        __param(3, (0, common_1.Query)('page')),
        __param(4, (0, common_1.Query)('pageSize')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, Number, Number]),
        __metadata("design:returntype", void 0)
    ], ProvisionController.prototype, "search", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, typeof (_b = typeof update_provision_dto_1.UpdateProvisionDto !== "undefined" && update_provision_dto_1.UpdateProvisionDto) === "function" ? _b : Object]),
        __metadata("design:returntype", void 0)
    ], ProvisionController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ProvisionController.prototype, "remove", null);
    ProvisionController = __decorate([
        (0, common_1.Controller)('provision'),
        __metadata("design:paramtypes", [typeof (_c = typeof provision_service_1.ProvisionService !== "undefined" && provision_service_1.ProvisionService) === "function" ? _c : Object, typeof (_d = typeof batch_service_1.BatchService !== "undefined" && batch_service_1.BatchService) === "function" ? _d : Object])
    ], ProvisionController);
    return ProvisionController;
}());
exports.ProvisionController = ProvisionController;


/***/ }),

/***/ "./apps/batches/src/provision/provision.module.ts":
/*!********************************************************!*\
  !*** ./apps/batches/src/provision/provision.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProvisionModule = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var provision_service_1 = __webpack_require__(/*! ./provision.service */ "./apps/batches/src/provision/provision.service.ts");
var provision_controller_1 = __webpack_require__(/*! ./provision.controller */ "./apps/batches/src/provision/provision.controller.ts");
var common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
var typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
var entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
var provision_entity_1 = __webpack_require__(/*! ./entities/provision.entity */ "./apps/batches/src/provision/entities/provision.entity.ts");
var cardprovision_entity_1 = __webpack_require__(/*! ../cardprovision/entities/cardprovision.entity */ "./apps/batches/src/cardprovision/entities/cardprovision.entity.ts");
// import { BatchModule } from '../batch/batch.module';
var batch_service_1 = __webpack_require__(/*! ../batch/batch.service */ "./apps/batches/src/batch/batch.service.ts");
var ProvisionModule = /** @class */ (function () {
    function ProvisionModule() {
    }
    ProvisionModule = __decorate([
        (0, common_1.Module)({
            imports: [
                common_2.DatabaseModule,
                typeorm_1.TypeOrmModule.forFeature([
                    entities_1.Receipt,
                    entities_1.Batch,
                    entities_1.Card,
                    entities_1.CardReceipt,
                    provision_entity_1.Provision,
                    cardprovision_entity_1.CardProvision,
                ]),
                // forwardRef(() => BatchModule),
            ],
            controllers: [provision_controller_1.ProvisionController],
            providers: [provision_service_1.ProvisionService, batch_service_1.BatchService],
        })
    ], ProvisionModule);
    return ProvisionModule;
}());
exports.ProvisionModule = ProvisionModule;


/***/ }),

/***/ "./apps/batches/src/provision/provision.service.ts":
/*!*********************************************************!*\
  !*** ./apps/batches/src/provision/provision.service.ts ***!
  \*********************************************************/
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
exports.ProvisionService = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
var typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
var provision_entity_1 = __webpack_require__(/*! ./entities/provision.entity */ "./apps/batches/src/provision/entities/provision.entity.ts");
var entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
var ProvisionService = /** @class */ (function () {
    function ProvisionService(provisionRepository, cardRepository, dataSource) {
        this.provisionRepository = provisionRepository;
        this.cardRepository = cardRepository;
        this.dataSource = dataSource;
    }
    ProvisionService.prototype.createProvision = function (createProvisionDto) {
        return __awaiter(this, void 0, void 0, function () {
            var newProvision, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(createProvisionDto, 'createProvision');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        newProvision = this.provisionRepository.create(createProvisionDto);
                        return [4 /*yield*/, this.provisionRepository.save(newProvision)];
                    case 2:
                        _a.sent();
                        // for (const card of createProvisionDto.cardProvision) {
                        //   const cardtoUpdate = await this.cardRepository.findOne({
                        //     where: { lassraId: card.lassraId },
                        //   });
                        //   if (cardtoUpdate.status < 1) {
                        //     throw new Error('Card has not been received');
                        //   }
                        //   if (cardtoUpdate && cardtoUpdate.status === 1) {
                        //     (await cardtoUpdate).status = 2;
                        //     await transactionManager.save(cardtoUpdate);
                        //   }
                        // }
                        console.log(newProvision);
                        return [2 /*return*/, newProvision];
                    case 3:
                        e_1 = _a.sent();
                        throw new Error(e_1.message + 'Service error');
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProvisionService.prototype.complete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var provision, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.provisionRepository.findOne({
                                where: { id: id },
                            })];
                    case 1:
                        provision = _a.sent();
                        if (!provision) {
                            throw new Error('Provision receipt not found');
                        }
                        provision.provisionStatus = 1;
                        return [4 /*yield*/, this.provisionRepository.save(provision)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        return [2 /*return*/, e_2];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProvisionService.prototype.findAll = function (batchNo) {
        return __awaiter(this, void 0, void 0, function () {
            var e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!batchNo) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.provisionRepository.find({
                                where: { batchNo: batchNo },
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.provisionRepository.find({})];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_3 = _a.sent();
                        throw new Error(e_3.message);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ProvisionService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var provision, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.provisionRepository.find({
                                where: { id: +id },
                                relations: ['batch'],
                            })];
                    case 1:
                        provision = _a.sent();
                        return [2 /*return*/, provision[0]];
                    case 2:
                        e_4 = _a.sent();
                        throw new Error(e_4);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProvisionService.prototype.search = function (batchNo, jobNo, lassraId, page, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var provision, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.provisionRepository
                                .createQueryBuilder('provision')
                                .leftJoinAndSelect('provision.batch', 'batch')
                                .leftJoinAndSelect('provision.cardProvision', 'cardProvision')
                                .where('provision.batchNo = :batchNo', { batchNo: batchNo })
                                .orWhere('batch.bankJobNo LIKE :jobNo', { jobNo: "%".concat(jobNo, "%") })
                                .orWhere('cardProvision.lassraId = :lassraId', {
                                lassraId: lassraId,
                            })
                                .select([
                                'provision.provisionedBy',
                                'provision.provisionedAt',
                                'provision.batchNo',
                                'provision.id',
                                'provision.createdAt',
                                'provision.cardProvision',
                                // 'COUNT(cardReceipt) AS cardCount',
                            ])
                                .orderBy('provision.id', 'ASC') // Order by id in ascending order
                                .addGroupBy('provision.id') // Group by receipt id
                                .skip((page - 1) * pageSize)
                                .take(pageSize)
                                .getManyAndCount()];
                    case 1:
                        provision = _a.sent();
                        return [2 /*return*/, provision];
                    case 2:
                        e_5 = _a.sent();
                        throw new Error(e_5.message);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProvisionService.prototype.update = function (id, updateProvisionDto) {
        return "This action updates a #".concat(id, " provision");
    };
    ProvisionService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " provision");
    };
    var _a, _b, _c;
    ProvisionService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(provision_entity_1.Provision)),
        __param(1, (0, typeorm_1.InjectRepository)(entities_1.Card)),
        __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _c : Object])
    ], ProvisionService);
    return ProvisionService;
}());
exports.ProvisionService = ProvisionService;


/***/ }),

/***/ "./apps/batches/src/receipt/receipt.controller.ts":
/*!********************************************************!*\
  !*** ./apps/batches/src/receipt/receipt.controller.ts ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.ReceiptController = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var receipt_service_1 = __webpack_require__(/*! ./receipt.service */ "./apps/batches/src/receipt/receipt.service.ts");
var batch_service_1 = __webpack_require__(/*! ../batch/batch.service */ "./apps/batches/src/batch/batch.service.ts");
var dto_1 = __webpack_require__(/*! ../dto */ "./apps/batches/src/dto/index.ts");
var ReceiptController = /** @class */ (function () {
    function ReceiptController(receiptService, batchService) {
        this.receiptService = receiptService;
        this.batchService = batchService;
    }
    ReceiptController.prototype.createReceipt = function (createReceiptDto) {
        return __awaiter(this, void 0, void 0, function () {
            var currentBatch, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.batchService.findOne(createReceiptDto.batchNo)];
                    case 1:
                        currentBatch = _a.sent();
                        // console.log(currentBatch, 'current batch');
                        createReceiptDto.batch = currentBatch;
                        return [4 /*yield*/, this.receiptService.createReceipt(createReceiptDto)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        e_1 = _a.sent();
                        throw new common_1.HttpException(e_1.message, common_1.HttpStatus.BAD_REQUEST);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ReceiptController.prototype.completeRequest = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.receiptService.completedReceipt(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_2 = _a.sent();
                        throw new common_1.HttpException(e_2.message, common_1.HttpStatus.BAD_REQUEST);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ReceiptController.prototype.findAll = function (batchNo) {
        return this.receiptService.findAll(batchNo);
    };
    ReceiptController.prototype.search = function (batchNo, jobNo, lassraId, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        if (!batchNo && !jobNo && !lassraId)
            throw new common_1.HttpException('Provide bathcNo, JobNo or lassraId', common_1.HttpStatus.BAD_REQUEST);
        return this.receiptService.search(batchNo, jobNo, lassraId, page, pageSize);
    };
    ReceiptController.prototype.findOne = function (id) {
        // console.log('findOnehere')
        return this.receiptService.findOne(id);
    };
    ReceiptController.prototype.update = function (id, updateReceiptDto) {
        return this.receiptService.update(+id, updateReceiptDto);
    };
    ReceiptController.prototype.remove = function (id) {
        return this.receiptService.remove(+id);
    };
    var _a, _b, _c;
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], ReceiptController.prototype, "createReceipt", null);
    __decorate([
        (0, common_1.Patch)('complete/:id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], ReceiptController.prototype, "completeRequest", null);
    __decorate([
        (0, common_1.Get)(),
        __param(0, (0, common_1.Query)('batchNo')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ReceiptController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)('search'),
        __param(0, (0, common_1.Query)('batchNo')),
        __param(1, (0, common_1.Query)('jobNo')),
        __param(2, (0, common_1.Query)('lassraId')),
        __param(3, (0, common_1.Query)('page')),
        __param(4, (0, common_1.Query)('pageSize')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, Number, Number]),
        __metadata("design:returntype", void 0)
    ], ReceiptController.prototype, "search", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ReceiptController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, typeof (_a = typeof dto_1.UpdateReceiptDto !== "undefined" && dto_1.UpdateReceiptDto) === "function" ? _a : Object]),
        __metadata("design:returntype", void 0)
    ], ReceiptController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ReceiptController.prototype, "remove", null);
    ReceiptController = __decorate([
        (0, common_1.Controller)('receipt'),
        __metadata("design:paramtypes", [typeof (_b = typeof receipt_service_1.ReceiptService !== "undefined" && receipt_service_1.ReceiptService) === "function" ? _b : Object, typeof (_c = typeof batch_service_1.BatchService !== "undefined" && batch_service_1.BatchService) === "function" ? _c : Object])
    ], ReceiptController);
    return ReceiptController;
}());
exports.ReceiptController = ReceiptController;


/***/ }),

/***/ "./apps/batches/src/receipt/receipt.module.ts":
/*!****************************************************!*\
  !*** ./apps/batches/src/receipt/receipt.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReceiptModule = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var receipt_service_1 = __webpack_require__(/*! ./receipt.service */ "./apps/batches/src/receipt/receipt.service.ts");
var receipt_controller_1 = __webpack_require__(/*! ./receipt.controller */ "./apps/batches/src/receipt/receipt.controller.ts");
var common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
var typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
var cardreceipt_entity_1 = __webpack_require__(/*! ../entities/cardreceipt.entity */ "./apps/batches/src/entities/cardreceipt.entity.ts");
var batch_service_1 = __webpack_require__(/*! ../batch/batch.service */ "./apps/batches/src/batch/batch.service.ts");
var batch_module_1 = __webpack_require__(/*! ../batch/batch.module */ "./apps/batches/src/batch/batch.module.ts");
var entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
var ReceiptModule = /** @class */ (function () {
    function ReceiptModule() {
    }
    ReceiptModule = __decorate([
        (0, common_1.Module)({
            imports: [
                common_2.DatabaseModule,
                typeorm_1.TypeOrmModule.forFeature([entities_1.Receipt, entities_1.Batch, entities_1.Card, cardreceipt_entity_1.CardReceipt]),
                (0, common_1.forwardRef)(function () { return batch_module_1.BatchModule; }),
            ],
            controllers: [receipt_controller_1.ReceiptController],
            providers: [receipt_service_1.ReceiptService, batch_service_1.BatchService],
        })
    ], ReceiptModule);
    return ReceiptModule;
}());
exports.ReceiptModule = ReceiptModule;


/***/ }),

/***/ "./apps/batches/src/receipt/receipt.service.ts":
/*!*****************************************************!*\
  !*** ./apps/batches/src/receipt/receipt.service.ts ***!
  \*****************************************************/
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
exports.ReceiptService = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
var entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
var repository_1 = __webpack_require__(/*! ../repository */ "./apps/batches/src/repository/index.ts");
var typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
var ReceiptService = /** @class */ (function () {
    function ReceiptService(receiptRepository, cardRepository, dataSource) {
        this.receiptRepository = receiptRepository;
        this.cardRepository = cardRepository;
        this.dataSource = dataSource;
    }
    // create receipt is now modified to create request without cards . Need to create add cards method to daad cards to a reaquest and a method to complete are request.
    ReceiptService.prototype.createReceipt = function (createReceiptDto) {
        return __awaiter(this, void 0, void 0, function () {
            var newReceipt, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.receiptRepository.create(createReceiptDto)];
                    case 1:
                        newReceipt = _a.sent();
                        console.log(newReceipt);
                        return [4 /*yield*/, this.receiptRepository.save(newReceipt)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        e_1 = _a.sent();
                        throw new Error(e_1.message);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ReceiptService.prototype.completedReceipt = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var receipt, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.receiptRepository.findOne({
                                where: { id: id },
                            })];
                    case 1:
                        receipt = _a.sent();
                        if (!receipt) {
                            throw new Error("Cannot find receipt");
                        }
                        if (receipt.receivedStatus === 1) {
                            throw new Error('Receipt already completed');
                        }
                        receipt.receivedStatus = 1;
                        return [4 /*yield*/, this.receiptRepository.save(receipt)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        e_2 = _a.sent();
                        throw new Error(e_2.message);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ReceiptService.prototype.addCard = function (batchNo, lassraId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ReceiptService.prototype.findAll = function (batchNo) {
        return __awaiter(this, void 0, void 0, function () {
            var e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!batchNo) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.receiptRepository.find({
                                where: { batchNo: batchNo },
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.receiptRepository.find({})];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_3 = _a.sent();
                        throw new Error(e_3);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ReceiptService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var receipts, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.receiptRepository.find({
                                where: { id: +id },
                                relations: ['cardReceipt'],
                            })];
                    case 1:
                        receipts = _a.sent();
                        console.log(receipts);
                        return [2 /*return*/, receipts[0]];
                    case 2:
                        e_4 = _a.sent();
                        console.log(e_4);
                        throw new Error(e_4);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //ind receipt by batchNo and/or jobNo and/or lassraid
    ReceiptService.prototype.search = function (batchNo, jobNo, lassraId, page, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var receipts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.receiptRepository
                            .createQueryBuilder('receipt')
                            .leftJoinAndSelect('receipt.batch', 'batch')
                            .leftJoinAndSelect('receipt.cardReceipt', 'cardReceipt')
                            .where('receipt.batchNo = :batchNo', { batchNo: batchNo })
                            .orWhere('batch.bankJobNo LIKE :jobNo', { jobNo: "%".concat(jobNo, "%") })
                            .orWhere('cardReceipt.lassraId = :lassraId', {
                            lassraId: lassraId,
                        })
                            .select([
                            'receipt.receivedBy',
                            'receipt.receivedAt',
                            'receipt.batchNo',
                            'receipt.id',
                            'receipt.receivedStatus',
                            'receipt.createdAt',
                            'receipt.cardReceipt',
                            // 'COUNT(cardReceipt) AS cardCount',
                        ])
                            .orderBy('receipt.id', 'ASC') // Order by id in ascending order
                            .addGroupBy('receipt.id') // Group by receipt id
                            .skip((page - 1) * pageSize)
                            .take(pageSize)
                            .getManyAndCount()];
                    case 1:
                        receipts = _a.sent();
                        return [2 /*return*/, receipts];
                }
            });
        });
    };
    ReceiptService.prototype.update = function (id, updateReceiptDto) {
        return "This action updates a #".concat(id, " card");
    };
    ReceiptService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " card");
    };
    var _a, _b, _c;
    ReceiptService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(entities_1.Receipt)),
        __param(1, (0, typeorm_1.InjectRepository)(entities_1.Card)),
        __metadata("design:paramtypes", [typeof (_a = typeof repository_1.ReceiptRepository !== "undefined" && repository_1.ReceiptRepository) === "function" ? _a : Object, typeof (_b = typeof repository_1.CardRepository !== "undefined" && repository_1.CardRepository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _c : Object])
    ], ReceiptService);
    return ReceiptService;
}());
exports.ReceiptService = ReceiptService;


/***/ }),

/***/ "./apps/batches/src/repository/batch.repository.ts":
/*!*********************************************************!*\
  !*** ./apps/batches/src/repository/batch.repository.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BatchRepository = void 0;
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var BatchRepository = /** @class */ (function (_super) {
    __extends(BatchRepository, _super);
    function BatchRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BatchRepository = __decorate([
        (0, common_1.Injectable)()
    ], BatchRepository);
    return BatchRepository;
}(typeorm_1.Repository));
exports.BatchRepository = BatchRepository;


/***/ }),

/***/ "./apps/batches/src/repository/card.repository.ts":
/*!********************************************************!*\
  !*** ./apps/batches/src/repository/card.repository.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardRepository = void 0;
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var CardRepository = /** @class */ (function (_super) {
    __extends(CardRepository, _super);
    function CardRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardRepository = __decorate([
        (0, common_1.Injectable)()
    ], CardRepository);
    return CardRepository;
}(typeorm_1.Repository));
exports.CardRepository = CardRepository;


/***/ }),

/***/ "./apps/batches/src/repository/cardReceipt.repository.ts":
/*!***************************************************************!*\
  !*** ./apps/batches/src/repository/cardReceipt.repository.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardReceiptRepository = void 0;
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var CardReceiptRepository = /** @class */ (function (_super) {
    __extends(CardReceiptRepository, _super);
    function CardReceiptRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardReceiptRepository = __decorate([
        (0, common_1.Injectable)()
    ], CardReceiptRepository);
    return CardReceiptRepository;
}(typeorm_1.Repository));
exports.CardReceiptRepository = CardReceiptRepository;


/***/ }),

/***/ "./apps/batches/src/repository/index.ts":
/*!**********************************************!*\
  !*** ./apps/batches/src/repository/index.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./batch.repository */ "./apps/batches/src/repository/batch.repository.ts"), exports);
__exportStar(__webpack_require__(/*! ./card.repository */ "./apps/batches/src/repository/card.repository.ts"), exports);
__exportStar(__webpack_require__(/*! ./cardReceipt.repository */ "./apps/batches/src/repository/cardReceipt.repository.ts"), exports);
__exportStar(__webpack_require__(/*! ./receipt.repository */ "./apps/batches/src/repository/receipt.repository.ts"), exports);


/***/ }),

/***/ "./apps/batches/src/repository/receipt.repository.ts":
/*!***********************************************************!*\
  !*** ./apps/batches/src/repository/receipt.repository.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReceiptRepository = void 0;
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var ReceiptRepository = /** @class */ (function (_super) {
    __extends(ReceiptRepository, _super);
    function ReceiptRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReceiptRepository = __decorate([
        (0, common_1.Injectable)()
    ], ReceiptRepository);
    return ReceiptRepository;
}(typeorm_1.Repository));
exports.ReceiptRepository = ReceiptRepository;


/***/ }),

/***/ "./apps/batches/src/retrival/dto/create-card-retrival.dto.ts":
/*!*******************************************************************!*\
  !*** ./apps/batches/src/retrival/dto/create-card-retrival.dto.ts ***!
  \*******************************************************************/
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
exports.CreateCardRetrivalDto = void 0;
var class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
var create_retrival_dto_1 = __webpack_require__(/*! ./create-retrival.dto */ "./apps/batches/src/retrival/dto/create-retrival.dto.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
var CreateCardRetrivalDto = /** @class */ (function () {
    function CreateCardRetrivalDto() {
    }
    var _a;
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], CreateCardRetrivalDto.prototype, "lassraId", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", Number)
    ], CreateCardRetrivalDto.prototype, "status", void 0);
    __decorate([
        (0, class_transformer_1.Type)(function () { return create_retrival_dto_1.CreateRetrivalDto; }),
        __metadata("design:type", typeof (_a = typeof create_retrival_dto_1.CreateRetrivalDto !== "undefined" && create_retrival_dto_1.CreateRetrivalDto) === "function" ? _a : Object)
    ], CreateCardRetrivalDto.prototype, "retrival", void 0);
    return CreateCardRetrivalDto;
}());
exports.CreateCardRetrivalDto = CreateCardRetrivalDto;


/***/ }),

/***/ "./apps/batches/src/retrival/dto/create-retrival.dto.ts":
/*!**************************************************************!*\
  !*** ./apps/batches/src/retrival/dto/create-retrival.dto.ts ***!
  \**************************************************************/
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
exports.CreateRetrivalDto = void 0;
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
var class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
var create_card_retrival_dto_1 = __webpack_require__(/*! ./create-card-retrival.dto */ "./apps/batches/src/retrival/dto/create-card-retrival.dto.ts");
var CreateRetrivalDto = /** @class */ (function () {
    function CreateRetrivalDto() {
        this.createdAt = new Date();
    }
    var _a, _b;
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], CreateRetrivalDto.prototype, "collectionCenter", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", Number)
    ], CreateRetrivalDto.prototype, "retrivalStatus", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CreateRetrivalDto.prototype, "createdBy", void 0);
    __decorate([
        (0, class_validator_1.IsDateString)(),
        __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
    ], CreateRetrivalDto.prototype, "createdAt", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CreateRetrivalDto.prototype, "retrivedBy", void 0);
    __decorate([
        (0, class_validator_1.IsDateString)(),
        __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
    ], CreateRetrivalDto.prototype, "retrivedAt", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CreateRetrivalDto.prototype, "acknowledgedBy", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_transformer_1.Type)(function () { return create_card_retrival_dto_1.CreateCardRetrivalDto; }),
        __metadata("design:type", Array)
    ], CreateRetrivalDto.prototype, "cardRetrival", void 0);
    return CreateRetrivalDto;
}());
exports.CreateRetrivalDto = CreateRetrivalDto;


/***/ }),

/***/ "./apps/batches/src/retrival/entities/cardRetrival.entity.ts":
/*!*******************************************************************!*\
  !*** ./apps/batches/src/retrival/entities/cardRetrival.entity.ts ***!
  \*******************************************************************/
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
exports.CardRetrival = void 0;
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var retrival_entity_1 = __webpack_require__(/*! ./retrival.entity */ "./apps/batches/src/retrival/entities/retrival.entity.ts");
var CardRetrival = /** @class */ (function () {
    function CardRetrival() {
    }
    var _a;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], CardRetrival.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], CardRetrival.prototype, "lassraId", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], CardRetrival.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return retrival_entity_1.Retrival; }),
        __metadata("design:type", typeof (_a = typeof retrival_entity_1.Retrival !== "undefined" && retrival_entity_1.Retrival) === "function" ? _a : Object)
    ], CardRetrival.prototype, "retrival", void 0);
    CardRetrival = __decorate([
        (0, typeorm_1.Entity)()
    ], CardRetrival);
    return CardRetrival;
}());
exports.CardRetrival = CardRetrival;


/***/ }),

/***/ "./apps/batches/src/retrival/entities/retrival.entity.ts":
/*!***************************************************************!*\
  !*** ./apps/batches/src/retrival/entities/retrival.entity.ts ***!
  \***************************************************************/
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
exports.Retrival = void 0;
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var cardRetrival_entity_1 = __webpack_require__(/*! ./cardRetrival.entity */ "./apps/batches/src/retrival/entities/cardRetrival.entity.ts");
var Retrival = /** @class */ (function () {
    function Retrival() {
        //
        this.createdAt = new Date();
    }
    var _a, _b, _c;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Retrival.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Retrival.prototype, "collectionCenter", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: 0 }),
        __metadata("design:type", Number)
    ], Retrival.prototype, "retrivalStatus", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Retrival.prototype, "createdBy", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
    ], Retrival.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
    ], Retrival.prototype, "retrivedAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
    ], Retrival.prototype, "acknowledgedAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Retrival.prototype, "acknowledgedBy", void 0);
    __decorate([
        (0, typeorm_1.Column)({}),
        __metadata("design:type", String)
    ], Retrival.prototype, "retrivedBy", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return cardRetrival_entity_1.CardRetrival; }, function (cardRetrival) { return cardRetrival.retrival; }, {
            cascade: true,
        }),
        __metadata("design:type", Array)
    ], Retrival.prototype, "cardRetrival", void 0);
    Retrival = __decorate([
        (0, typeorm_1.Entity)()
    ], Retrival);
    return Retrival;
}());
exports.Retrival = Retrival;


/***/ }),

/***/ "./apps/batches/src/retrival/retrival.controller.ts":
/*!**********************************************************!*\
  !*** ./apps/batches/src/retrival/retrival.controller.ts ***!
  \**********************************************************/
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
exports.RetrivalController = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var retrival_service_1 = __webpack_require__(/*! ./retrival.service */ "./apps/batches/src/retrival/retrival.service.ts");
var create_retrival_dto_1 = __webpack_require__(/*! ./dto/create-retrival.dto */ "./apps/batches/src/retrival/dto/create-retrival.dto.ts");
var RetrivalController = /** @class */ (function () {
    function RetrivalController(retrivalService) {
        this.retrivalService = retrivalService;
    }
    RetrivalController.prototype.create = function (createRetrivalDto) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.retrivalService.create(createRetrivalDto)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // @Post('delivery')
    // async requestDelivery(@Body() createRetrivalDto: any) {
    //   console.log(createRetrivalDto, 'retrival controller');
    //   return await this.retrivalService.requestDelivery(createRetrivalDto);
    // }
    RetrivalController.prototype.findAll = function () {
        return this.retrivalService.findAll();
    };
    RetrivalController.prototype.findOne = function (id) {
        return this.retrivalService.findOne(+id);
    };
    RetrivalController.prototype.update = function (id, updateRetrivalDto) {
        return this.retrivalService.update(+id, updateRetrivalDto);
    };
    RetrivalController.prototype.remove = function (id) {
        return this.retrivalService.remove(+id);
    };
    var _a, _b;
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof create_retrival_dto_1.CreateRetrivalDto !== "undefined" && create_retrival_dto_1.CreateRetrivalDto) === "function" ? _a : Object]),
        __metadata("design:returntype", Promise)
    ], RetrivalController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RetrivalController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], RetrivalController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", void 0)
    ], RetrivalController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], RetrivalController.prototype, "remove", null);
    RetrivalController = __decorate([
        (0, common_1.Controller)('retrival'),
        __metadata("design:paramtypes", [typeof (_b = typeof retrival_service_1.RetrivalService !== "undefined" && retrival_service_1.RetrivalService) === "function" ? _b : Object])
    ], RetrivalController);
    return RetrivalController;
}());
exports.RetrivalController = RetrivalController;


/***/ }),

/***/ "./apps/batches/src/retrival/retrival.module.ts":
/*!******************************************************!*\
  !*** ./apps/batches/src/retrival/retrival.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RetrivalModule = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var retrival_service_1 = __webpack_require__(/*! ./retrival.service */ "./apps/batches/src/retrival/retrival.service.ts");
var retrival_controller_1 = __webpack_require__(/*! ./retrival.controller */ "./apps/batches/src/retrival/retrival.controller.ts");
var common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
var typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
var retrival_entity_1 = __webpack_require__(/*! ./entities/retrival.entity */ "./apps/batches/src/retrival/entities/retrival.entity.ts");
var location_entity_1 = __webpack_require__(/*! ../dispatch/entities/location.entity */ "./apps/batches/src/dispatch/entities/location.entity.ts");
var cardRetrival_entity_1 = __webpack_require__(/*! ./entities/cardRetrival.entity */ "./apps/batches/src/retrival/entities/cardRetrival.entity.ts");
// import { ClientsModule, Transport } from '@nestjs/microservices';
var RetrivalModule = /** @class */ (function () {
    function RetrivalModule() {
    }
    RetrivalModule = __decorate([
        (0, common_1.Module)({
            imports: [
                common_2.DatabaseModule,
                typeorm_1.TypeOrmModule.forFeature([retrival_entity_1.Retrival, cardRetrival_entity_1.CardRetrival, location_entity_1.CardLocation]),
                // ClientsModule.register([
                //   {
                //     name: 'WEBHOOK_SERVICE',
                //     transport: Transport.RMQ,
                //     options: {
                //       urls: [process.env.RABBIT_MQ_URI],
                //       queue: 'webhook',
                //       noAck: false,
                //       queueOptions: {
                //         durable: true, // queue survives broker restart
                //         arguments: {
                //           'x-message-ttl': 30 * 24 * 60 * 60 * 1000, // 30 days TTL
                //           'x-dead-letter-exchange': '', // Default exchange
                //           'x-dead-letter-routing-key': 'dead_letter_queue', // DLQ routing key
                //         },
                //       },
                //     },
                //   },
                // ]),
                // SharedModule.registerRmq(
                //   'WEBHOOK_SERVICE',
                //   process.env.RABBIT_MQ_WEBHOOK_QUEUE,
                // ),
            ],
            controllers: [retrival_controller_1.RetrivalController],
            providers: [
                retrival_service_1.RetrivalService,
                // { provide: 'WEBHOOK_SERVICE', useValue: SharedService },
            ],
        })
    ], RetrivalModule);
    return RetrivalModule;
}());
exports.RetrivalModule = RetrivalModule;


/***/ }),

/***/ "./apps/batches/src/retrival/retrival.service.ts":
/*!*******************************************************!*\
  !*** ./apps/batches/src/retrival/retrival.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.RetrivalService = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
var retrival_entity_1 = __webpack_require__(/*! ./entities/retrival.entity */ "./apps/batches/src/retrival/entities/retrival.entity.ts");
var location_entity_1 = __webpack_require__(/*! ../dispatch/entities/location.entity */ "./apps/batches/src/dispatch/entities/location.entity.ts");
var cardRetrival_entity_1 = __webpack_require__(/*! ./entities/cardRetrival.entity */ "./apps/batches/src/retrival/entities/cardRetrival.entity.ts");
// import { ProducerService } from '../procuder/producer.service';
// import {
//   ClientProxy,
//   ClientProxyFactory,
//   Transport,
// } from '@nestjs/microservices';
var config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
var RetrivalService = /** @class */ (function () {
    // private webhookClient: ClientProxy;
    function RetrivalService(retrivalRepository, cardRetrivalRepository, cardLocationRepository, configService) {
        this.retrivalRepository = retrivalRepository;
        this.cardRetrivalRepository = cardRetrivalRepository;
        this.cardLocationRepository = cardLocationRepository;
        this.configService = configService;
        // this.webhookClient = ClientProxyFactory.create({
        //   transport: Transport.RMQ,
        //   options: {
        //     urls: [
        //       configService.get('RABBIT_MQ_URI'),
        //       // 'amqps://jzzeeyil:7KLJorTAsikZBbvXSt9eJ8xizBcYouuK@lionfish.rmq.cloudamqp.com/jzzeeyil',
        //     ],
        //     queue: 'webhook',
        //     noAck: false,
        //     queueOptions: {
        //       durable: true,
        //       arguments: {
        //         'x-message-ttl': 30 * 24 * 60 * 60 * 1000, // 30 days TTL
        //         'x-dead-letter-exchange': '', // Default exchange
        //         'x-dead-letter-routing-key': 'dead_letter_queue', // DLQ routing key
        //       },
        //     },
        //   },
        // });
    }
    // async requestDelivery(data: any) {
    //   console.log(data, 'retrival service');
    //   try {
    //     this.webhookClient.emit({ cmd: 'relocation_request' }, data);
    //   } catch (e) {
    //     throw new Error(e);
    //   }
    // }
    RetrivalService.prototype.create = function (createRetrivalDto) {
        return __awaiter(this, void 0, void 0, function () {
            var newRetrival, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        newRetrival = this.retrivalRepository.create(createRetrivalDto);
                        console.log(newRetrival);
                        return [4 /*yield*/, this.retrivalRepository.save(newRetrival)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_1 = _a.sent();
                        throw new Error(e_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RetrivalService.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.retrivalRepository.find()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_2 = _a.sent();
                        throw new Error(e_2);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RetrivalService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var retrival, card, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.retrivalRepository.findOne({
                                where: { id: id },
                            })];
                    case 1:
                        retrival = _a.sent();
                        return [4 /*yield*/, this.cardRetrivalRepository.find({
                                where: { retrival: retrival },
                            })];
                    case 2:
                        card = _a.sent();
                        return [2 /*return*/, __assign(__assign({}, retrival), { cardRetrival: card })];
                    case 3:
                        e_3 = _a.sent();
                        throw new Error(e_3);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RetrivalService.prototype.update = function (id, updateRetrivalDto) {
        return __awaiter(this, void 0, void 0, function () {
            var retrivalToUpdate_1, e_4;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.retrivalRepository.findOne({
                                where: { id: id },
                                relations: ['cardRetrival'],
                            })];
                    case 1:
                        retrivalToUpdate_1 = _a.sent();
                        if (!retrivalToUpdate_1)
                            throw new common_1.NotFoundException('Retrival order not found');
                        if (retrivalToUpdate_1.retrivalStatus > 0)
                            throw new common_1.BadRequestException('Retrival already acknowledged.');
                        return [4 /*yield*/, this.retrivalRepository.manager.transaction(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                                var updatedretrival;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            retrivalToUpdate_1.acknowledgedBy = updateRetrivalDto.acknowledgedBy;
                                            retrivalToUpdate_1.retrivedBy = updateRetrivalDto.retrivedBy;
                                            retrivalToUpdate_1.acknowledgedAt = new Date();
                                            retrivalToUpdate_1.retrivedAt = updateRetrivalDto.retrivedAt;
                                            retrivalToUpdate_1.retrivalStatus = 1;
                                            retrivalToUpdate_1.cardRetrival.forEach(function (cardRetrivalItem) { return __awaiter(_this, void 0, void 0, function () {
                                                var currentcard, locationdetail, dup, cardlocation;
                                                var _a;
                                                return __generator(this, function (_b) {
                                                    switch (_b.label) {
                                                        case 0:
                                                            currentcard = (_a = updateRetrivalDto.cardRetrival) === null || _a === void 0 ? void 0 : _a.find(function (card) { return card.lassraId === cardRetrivalItem.lassraId; });
                                                            if (!currentcard) return [3 /*break*/, 4];
                                                            cardRetrivalItem.status = 1;
                                                            return [4 /*yield*/, this.cardLocationRepository.findOne({
                                                                    where: { lassraId: currentcard.lassraId },
                                                                })];
                                                        case 1:
                                                            locationdetail = _b.sent();
                                                            if (!locationdetail) return [3 /*break*/, 3];
                                                            dup = __assign({}, locationdetail);
                                                            locationdetail.currentLocation = 'Head office';
                                                            locationdetail.previousLocations =
                                                                dup.previousLocations + '->' + dup.currentLocation;
                                                            return [4 /*yield*/, this.cardLocationRepository.save(locationdetail)];
                                                        case 2:
                                                            cardlocation = _b.sent();
                                                            _b.label = 3;
                                                        case 3: 
                                                        // this.webhookClient.emit(
                                                        //   { cmd: 'card_relocated' },
                                                        //   cardRetrivalItem,
                                                        // );
                                                        return [2 /*return*/, cardRetrivalItem];
                                                        case 4: return [2 /*return*/, cardRetrivalItem];
                                                    }
                                                });
                                            }); });
                                            return [4 /*yield*/, this.retrivalRepository.save(retrivalToUpdate_1)];
                                        case 1:
                                            updatedretrival = _a.sent();
                                            return [4 /*yield*/, transactionManager.save(updatedretrival)];
                                        case 2:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, 'acknowledgements of retrival successful'];
                    case 3:
                        e_4 = _a.sent();
                        throw new Error(e_4);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RetrivalService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " retrival");
    };
    var _a, _b, _c, _d;
    RetrivalService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_2.InjectRepository)(retrival_entity_1.Retrival)),
        __param(1, (0, typeorm_2.InjectRepository)(cardRetrival_entity_1.CardRetrival)),
        __param(2, (0, typeorm_2.InjectRepository)(location_entity_1.CardLocation)),
        __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _c : Object, typeof (_d = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _d : Object])
    ], RetrivalService);
    return RetrivalService;
}());
exports.RetrivalService = RetrivalService;


/***/ }),

/***/ "./libs/common/src/auth/interceptors/response.interceptors.ts":
/*!********************************************************************!*\
  !*** ./libs/common/src/auth/interceptors/response.interceptors.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResponseInterceptor = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var ResponseInterceptor = /** @class */ (function () {
    function ResponseInterceptor() {
    }
    ResponseInterceptor.prototype.intercept = function (context, next) {
        return next.handle().pipe((0, operators_1.map)(function (data) {
            var code = context.switchToHttp().getResponse().statusCode;
            return {
                status: code >= 200 && code <= 300 ? 'success' : 'error',
                code: code,
                message: code >= 200 && code <= 300
                    ? 'Request was successful.'
                    : 'Request failed',
                data: data,
            };
        }));
    };
    ResponseInterceptor = __decorate([
        (0, common_1.Injectable)()
    ], ResponseInterceptor);
    return ResponseInterceptor;
}());
exports.ResponseInterceptor = ResponseInterceptor;


/***/ }),

/***/ "./libs/common/src/database/database.module.ts":
/*!*****************************************************!*\
  !*** ./libs/common/src/database/database.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
var typeorm_config_1 = __webpack_require__(/*! ../../../../typeorm.config */ "./typeorm.config.ts");
// import { Batch } from 'apps/batches/src/entities/batch.entity';
// import { Card } from 'apps/batches/src/produced/entities/produced.entity';
// import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';
var DatabaseModule = /** @class */ (function () {
    function DatabaseModule() {
    }
    DatabaseModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.dataSourceOptions),
                // TypeOrmModule.forRootAsync({
                //   useFactory: (configService: ConfigService) => ({
                //     type: 'postgres',
                //     host: configService.get('POSTGRES_HOST'), //'localhost' || 'postgres', // You can use environment variables if needed
                //     port: configService.get('POSTGRES_PORT'),
                //     username: configService.get('POSTGRES_USER'),
                //     password: configService.get('POSTGRES_PASSWORD'),
                //     database: configService.get('POSTGRES_DATABASE'),
                //     entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                //     // migrations: ['/../**/migrations/*.js'],
                //     // cli: {
                //     //   migrationsDir: '/libs/commom/src/database/migrations',
                //     // },
                //     // migrations: ['dist/batches/migrations/*.js'],
                //     // migrationsTableName: 'task_migrations',
                //     autoLoadEntities: true,
                //     // synchronize: true,
                //     logging: true,
                //   }),
                //   inject: [ConfigService],
                // }),
            ],
        })
    ], DatabaseModule);
    return DatabaseModule;
}());
exports.DatabaseModule = DatabaseModule;


/***/ }),

/***/ "./libs/common/src/database/index.ts":
/*!*******************************************!*\
  !*** ./libs/common/src/database/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./database.module */ "./libs/common/src/database/database.module.ts"), exports);
// export * from './abstract.repository';
// export * from './abstract.schema';


/***/ }),

/***/ "./libs/common/src/index.ts":
/*!**********************************!*\
  !*** ./libs/common/src/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./database */ "./libs/common/src/database/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./logger */ "./libs/common/src/logger/index.ts"), exports);
// export * from './auth';
// export * from './Rmq';


/***/ }),

/***/ "./libs/common/src/logger/index.ts":
/*!*****************************************!*\
  !*** ./libs/common/src/logger/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./logger.module */ "./libs/common/src/logger/logger.module.ts"), exports);


/***/ }),

/***/ "./libs/common/src/logger/logger.module.ts":
/*!*************************************************!*\
  !*** ./libs/common/src/logger/logger.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerModule = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var nestjs_pino_1 = __webpack_require__(/*! nestjs-pino */ "nestjs-pino");
var LoggerModule = /** @class */ (function () {
    function LoggerModule() {
    }
    LoggerModule = __decorate([
        (0, common_1.Module)({
            imports: [
                nestjs_pino_1.LoggerModule.forRoot({
                    pinoHttp: {
                        transport: {
                            target: 'pino-pretty',
                            options: {
                                singleLine: true,
                            },
                        },
                    },
                }),
            ],
        })
    ], LoggerModule);
    return LoggerModule;
}());
exports.LoggerModule = LoggerModule;


/***/ }),

/***/ "./typeorm.config.ts":
/*!***************************!*\
  !*** ./typeorm.config.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dataSourceOptions = void 0;
var dotenv_1 = __webpack_require__(/*! dotenv */ "dotenv");
var config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
(0, dotenv_1.config)();
var configService = new config_1.ConfigService();
exports.dataSourceOptions = {
    type: 'postgres',
    host: configService.getOrThrow('POSTGRES_HOST'),
    port: configService.getOrThrow('POSTGRES_PORT'),
    database: configService.getOrThrow('POSTGRES_DATABASE'),
    username: configService.getOrThrow('POSTGRES_USER'),
    password: configService.getOrThrow('POSTGRES_PASSWORD'),
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations: ['migrations/**'],
};
//   type: 'postgres',
//   host: 'localhost', //configService.get('POSTGRES_HOST'), //'localhost' || 'postgres', // You can use environment variables if needed
//   port: 5432, //configService.get('POSTGRES_PORT'),
//   username: 'card_tracker', // configService.get('POSTGRES_USER'),
//   password: 'card_tracker', //configService.get('POSTGRES_PASSWORD'),
//   database: 'card_tracker', // configService.get('POSTGRES_DATABASE'),
//   entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//   //   migrations: ['/../**/migrations/*.js'],
//   // cli: {
//   //   migrationsDir: '/libs/commom/src/database/migrations',
//   // },
//   migrations: ['db/migrations/*{.js,.ts}'],
//   // migrationsTableName: 'task_migrations',
// //   autoLoadEntities: true,
// //   synchronize: false,
//   logging: true,
// };
var dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports["default"] = dataSource;
// const dataSource = new DataSource({
//   type: 'postgres',
//   host: configService.getOrThrow('POSTGRES_HOST'),
//   port: configService.getOrThrow('POSTGRES_PORT'),
//   database: configService.getOrThrow('POSTGRES_DATABASE'),
//   username: configService.getOrThrow('POSTGRES_USER'),
//   password: configService.getOrThrow('POSTGRES_PASSWORD'),
//   entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//   migrations: ['migrations/**'],
// });
// export default dataSource;


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/devtools-integration":
/*!***********************************************!*\
  !*** external "@nestjs/devtools-integration" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@nestjs/devtools-integration");

/***/ }),

/***/ "@nestjs/mapped-types":
/*!***************************************!*\
  !*** external "@nestjs/mapped-types" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@nestjs/mapped-types");

/***/ }),

/***/ "@nestjs/schedule":
/*!***********************************!*\
  !*** external "@nestjs/schedule" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "nestjs-pino":
/*!******************************!*\
  !*** external "nestjs-pino" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("nestjs-pino");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./apps/batches/src/main.ts");
/******/ 	
/******/ })()
;