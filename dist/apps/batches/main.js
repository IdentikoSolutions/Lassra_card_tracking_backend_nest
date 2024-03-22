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
var common_2 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@app/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
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
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                // DatabaseModule,
                // CorsModule.forRoot({
                //   origin: '*',
                //   methods: ['GET', 'POST', 'PUT', 'DELETE'],
                //   allowedHeaders: ['Content-Type', 'Authorization'],
                // }),
                devtools_integration_1.DevtoolsModule.register({
                    http: process.env.NODE_ENV !== 'production',
                }),
                common_2.LoggerModule,
                config_1.ConfigModule.forRoot({
                    isGlobal: true,
                }),
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
                        logging: true,
                    }); },
                    inject: [config_1.ConfigService],
                }),
                // TypeOrmModule.forRoot({
                //   type: 'postgres',
                //   host: 'localhost',
                //   port: 5432,
                //   username: 'card_tracker',
                //   password: 'card_tracker',
                //   database: 'card_tracker',
                //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
                //   synchronize: true, // In development, set to true; in production, set to false
                // }),
                typeorm_1.TypeOrmModule.forFeature([entities_1.Batch, entities_1.Card, entities_1.Receipt, entities_1.CardReceipt]),
                batch_module_1.BatchModule,
                receipt_module_1.ReceiptModule,
                card_module_1.CardModule,
                cardreceipt_module_1.CardReceiptModule,
                provision_module_1.ProvisionModule,
                cardprovision_module_1.CardprovisionModule,
                dispatch_module_1.DispatchModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService, config_1.ConfigService],
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BatchController = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var batch_service_1 = __webpack_require__(/*! ./batch.service */ "./apps/batches/src/batch/batch.service.ts");
var axios_1 = __webpack_require__(/*! axios */ "axios");
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
                        if (isBatchEmpty.length) {
                            throw new Error('Database already seeded');
                        }
                        return [4 /*yield*/, Axios_1.get('/Batch/GetValidBatches')];
                    case 2:
                        result = _b.sent();
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
                                                    status: 0, //item.status,
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
    CardController.prototype.create = function (createCardDto) {
        return this.cardService.create(createCardDto);
    };
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
    CardController.prototype.findAll = function (batchNo) {
        console.log('called');
        return this.cardService.findAll(batchNo);
    };
    CardController.prototype.findOne = function (lassraId, batchNo) {
        console.log(lassraId, batchNo);
        try {
            return this.cardService.findOne(batchNo, lassraId);
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.EXPECTATION_FAILED);
        }
    };
    CardController.prototype.update = function (id, updateCardDto) {
        return this.cardService.update(+id, updateCardDto);
    };
    CardController.prototype.remove = function (id) {
        return this.cardService.remove(+id);
    };
    var _a, _b, _c;
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof dto_1.CreateCardDto !== "undefined" && dto_1.CreateCardDto) === "function" ? _a : Object]),
        __metadata("design:returntype", void 0)
    ], CardController.prototype, "create", null);
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
        (0, common_1.Get)('one/:lassraId'),
        __param(0, (0, common_1.Param)('lassraId')),
        __param(1, (0, common_1.Query)('batchNo')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], CardController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, typeof (_b = typeof dto_1.UpdateCardDto !== "undefined" && dto_1.UpdateCardDto) === "function" ? _b : Object]),
        __metadata("design:returntype", void 0)
    ], CardController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], CardController.prototype, "remove", null);
    CardController = __decorate([
        (0, common_1.Controller)('card'),
        __metadata("design:paramtypes", [typeof (_c = typeof card_service_1.CardService !== "undefined" && card_service_1.CardService) === "function" ? _c : Object])
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
var common_2 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@app/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
var batch_entity_1 = __webpack_require__(/*! ../entities/batch.entity */ "./apps/batches/src/entities/batch.entity.ts");
var card_entity_1 = __webpack_require__(/*! ../entities/card.entity */ "./apps/batches/src/entities/card.entity.ts");
var cardreceipt_entity_1 = __webpack_require__(/*! ../entities/cardreceipt.entity */ "./apps/batches/src/entities/cardreceipt.entity.ts");
var receipt_entity_1 = __webpack_require__(/*! ../entities/receipt.entity */ "./apps/batches/src/entities/receipt.entity.ts");
var CardModule = /** @class */ (function () {
    function CardModule() {
    }
    CardModule = __decorate([
        (0, common_1.Module)({
            imports: [
                common_2.DatabaseModule,
                typeorm_1.TypeOrmModule.forFeature([batch_entity_1.Batch, card_entity_1.Card, receipt_entity_1.Receipt, cardreceipt_entity_1.CardReceipt]),
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
var CardService = /** @class */ (function () {
    function CardService(cardRepository) {
        this.cardRepository = cardRepository;
    }
    CardService.prototype.create = function (createCardDto) {
        return 'This action adds a new card';
    };
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
    CardService.prototype.findOne = function (batchNo, lassraId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryBuilder, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.cardRepository.createQueryBuilder('card')];
                    case 1:
                        queryBuilder = _a.sent();
                        queryBuilder
                            .where('card.batchNo =:batchNo', { batchNo: batchNo })
                            .andWhere('card.lassraId =:lassraId', { lassraId: lassraId });
                        console.log(queryBuilder, 'QueryBuilder');
                        return [2 /*return*/, queryBuilder.getOne()];
                    case 2:
                        e_2 = _a.sent();
                        throw new Error(e_2);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
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
    var _a;
    CardService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(entities_1.Card)),
        __metadata("design:paramtypes", [typeof (_a = typeof repository_1.CardRepository !== "undefined" && repository_1.CardRepository) === "function" ? _a : Object])
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardprovisionController = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var cardprovision_service_1 = __webpack_require__(/*! ./cardprovision.service */ "./apps/batches/src/cardprovision/cardprovision.service.ts");
var create_cardprovision_dto_1 = __webpack_require__(/*! ./dto/create-cardprovision.dto */ "./apps/batches/src/cardprovision/dto/create-cardprovision.dto.ts");
var update_cardprovision_dto_1 = __webpack_require__(/*! ./dto/update-cardprovision.dto */ "./apps/batches/src/cardprovision/dto/update-cardprovision.dto.ts");
var CardprovisionController = /** @class */ (function () {
    function CardprovisionController(cardprovisionService) {
        this.cardprovisionService = cardprovisionService;
    }
    CardprovisionController.prototype.create = function (createCardProvisionDto) {
        return this.cardprovisionService.create(createCardProvisionDto);
    };
    CardprovisionController.prototype.findAll = function (provision_id) {
        return this.cardprovisionService.findAll(provision_id);
    };
    CardprovisionController.prototype.findOne = function (id) {
        return this.cardprovisionService.findOne(+id);
    };
    CardprovisionController.prototype.update = function (id, updateCardprovisionDto) {
        return this.cardprovisionService.update(+id, updateCardprovisionDto);
    };
    CardprovisionController.prototype.remove = function (id) {
        return this.cardprovisionService.remove(+id);
    };
    var _a, _b, _c;
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof create_cardprovision_dto_1.CreateCardProvisionDto !== "undefined" && create_cardprovision_dto_1.CreateCardProvisionDto) === "function" ? _a : Object]),
        __metadata("design:returntype", void 0)
    ], CardprovisionController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(),
        __param(0, (0, common_1.Query)('provision_id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], CardprovisionController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], CardprovisionController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, typeof (_b = typeof update_cardprovision_dto_1.UpdateCardprovisionDto !== "undefined" && update_cardprovision_dto_1.UpdateCardprovisionDto) === "function" ? _b : Object]),
        __metadata("design:returntype", void 0)
    ], CardprovisionController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], CardprovisionController.prototype, "remove", null);
    CardprovisionController = __decorate([
        (0, common_1.Controller)('cardprovision'),
        __metadata("design:paramtypes", [typeof (_c = typeof cardprovision_service_1.CardprovisionService !== "undefined" && cardprovision_service_1.CardprovisionService) === "function" ? _c : Object])
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
var common_2 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@app/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
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
                typeorm_1.TypeOrmModule.forFeature([entities_1.Receipt, entities_1.Batch, provision_entity_1.Provision, cardprovision_entity_1.CardProvision]),
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
var CardprovisionService = /** @class */ (function () {
    function CardprovisionService() {
    }
    CardprovisionService.prototype.create = function (createCardProvisionDto) {
        return 'This action adds a new cardprovision';
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
    CardprovisionService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " cardprovision");
    };
    CardprovisionService.prototype.update = function (id, updateCardprovisionDto) {
        return "This action updates a #".concat(id, " cardprovision");
    };
    CardprovisionService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " cardprovision");
    };
    var _a;
    __decorate([
        (0, typeorm_1.InjectRepository)(cardprovision_entity_1.CardProvision),
        __metadata("design:type", typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object)
    ], CardprovisionService.prototype, "cardProvisionRepository", void 0);
    CardprovisionService = __decorate([
        (0, common_1.Injectable)()
    ], CardprovisionService);
    return CardprovisionService;
}());
exports.CardprovisionService = CardprovisionService;


/***/ }),

/***/ "./apps/batches/src/cardprovision/dto/create-cardprovision.dto.ts":
/*!************************************************************************!*\
  !*** ./apps/batches/src/cardprovision/dto/create-cardprovision.dto.ts ***!
  \************************************************************************/
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
exports.CreateCardProvisionDto = void 0;
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
var class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
var dto_1 = __webpack_require__(/*! ../../dto */ "./apps/batches/src/dto/index.ts");
var create_provision_dto_1 = __webpack_require__(/*! ../../provision/dto/create-provision.dto */ "./apps/batches/src/provision/dto/create-provision.dto.ts");
var CreateCardProvisionDto = /** @class */ (function () {
    function CreateCardProvisionDto() {
    }
    var _a, _b;
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], CreateCardProvisionDto.prototype, "lassraId", void 0);
    __decorate([
        (0, class_validator_1.IsDefined)(),
        (0, class_transformer_1.Type)(function () { return dto_1.CreateCardDto; }),
        __metadata("design:type", typeof (_a = typeof dto_1.CreateCardDto !== "undefined" && dto_1.CreateCardDto) === "function" ? _a : Object)
    ], CreateCardProvisionDto.prototype, "card", void 0);
    __decorate([
        (0, class_validator_1.IsDefined)(),
        (0, class_transformer_1.Type)(function () { return create_provision_dto_1.CreateProvisionDto; }),
        __metadata("design:type", typeof (_b = typeof create_provision_dto_1.CreateProvisionDto !== "undefined" && create_provision_dto_1.CreateProvisionDto) === "function" ? _b : Object)
    ], CreateCardProvisionDto.prototype, "provision", void 0);
    return CreateCardProvisionDto;
}());
exports.CreateCardProvisionDto = CreateCardProvisionDto;


/***/ }),

/***/ "./apps/batches/src/cardprovision/dto/update-cardprovision.dto.ts":
/*!************************************************************************!*\
  !*** ./apps/batches/src/cardprovision/dto/update-cardprovision.dto.ts ***!
  \************************************************************************/
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
exports.UpdateCardprovisionDto = void 0;
var swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
var create_cardprovision_dto_1 = __webpack_require__(/*! ./create-cardprovision.dto */ "./apps/batches/src/cardprovision/dto/create-cardprovision.dto.ts");
var UpdateCardprovisionDto = /** @class */ (function (_super) {
    __extends(UpdateCardprovisionDto, _super);
    function UpdateCardprovisionDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateCardprovisionDto;
}((0, swagger_1.PartialType)(create_cardprovision_dto_1.CreateCardProvisionDto)));
exports.UpdateCardprovisionDto = UpdateCardprovisionDto;


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
    // @Post()
    // create(@Body() createCardReceiptDto: CreateCardReceiptDto) {
    //   return this.cardReceiptService.create(createCardReceiptDto);
    // }
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
var common_2 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@app/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
// import { Batch } from 'typeorm';
// import { Receipt } from '../entities/receipt.entity';
var cardreceipt_entity_1 = __webpack_require__(/*! ../entities/cardreceipt.entity */ "./apps/batches/src/entities/cardreceipt.entity.ts");
// import { Card } from '../entities/card.entity';
var CardReceiptModule = /** @class */ (function () {
    function CardReceiptModule() {
    }
    CardReceiptModule = __decorate([
        (0, common_1.Module)({
            imports: [common_2.DatabaseModule, typeorm_1.TypeOrmModule.forFeature([cardreceipt_entity_1.CardReceipt])],
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
var CardReceiptService = /** @class */ (function () {
    function CardReceiptService(cardReceiptRepository) {
        this.cardReceiptRepository = cardReceiptRepository;
    }
    // create(createCardReceiptDto: CreateCardReceiptDto) {
    //   return 'This action adds a new cardreceipt';
    // }
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
    var _a;
    CardReceiptService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(entities_1.CardReceipt)),
        __metadata("design:paramtypes", [typeof (_a = typeof repository_1.CardReceiptRepository !== "undefined" && repository_1.CardReceiptRepository) === "function" ? _a : Object])
    ], CardReceiptService);
    return CardReceiptService;
}());
exports.CardReceiptService = CardReceiptService;


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DispatchController = void 0;
var common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var dispatch_service_1 = __webpack_require__(/*! ./dispatch.service */ "./apps/batches/src/dispatch/dispatch.service.ts");
var create_dispatch_dto_1 = __webpack_require__(/*! ./dto/create-dispatch.dto */ "./apps/batches/src/dispatch/dto/create-dispatch.dto.ts");
var update_dispatch_dto_1 = __webpack_require__(/*! ./dto/update-dispatch.dto */ "./apps/batches/src/dispatch/dto/update-dispatch.dto.ts");
var DispatchController = /** @class */ (function () {
    function DispatchController(dispatchService) {
        this.dispatchService = dispatchService;
    }
    DispatchController.prototype.create = function (createDispatchDto) {
        return this.dispatchService.createDispatch(createDispatchDto);
    };
    DispatchController.prototype.getCardForDispatch = function (batchNo, lassraId, collectionCenter) {
        console.log(batchNo, collectionCenter);
        try {
            return this.dispatchService.getCardforDispatch(batchNo, lassraId, collectionCenter);
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    };
    DispatchController.prototype.findAll = function () {
        return this.dispatchService.findAll();
    };
    DispatchController.prototype.findOne = function (id) {
        return this.dispatchService.findOne(+id);
    };
    DispatchController.prototype.update = function (id, updateDispatchDto) {
        return this.dispatchService.update(+id, updateDispatchDto);
    };
    DispatchController.prototype.remove = function (id) {
        return this.dispatchService.remove(+id);
    };
    var _a, _b, _c;
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof create_dispatch_dto_1.CreateDispatchDto !== "undefined" && create_dispatch_dto_1.CreateDispatchDto) === "function" ? _a : Object]),
        __metadata("design:returntype", void 0)
    ], DispatchController.prototype, "create", null);
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
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DispatchController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], DispatchController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, typeof (_b = typeof update_dispatch_dto_1.UpdateDispatchDto !== "undefined" && update_dispatch_dto_1.UpdateDispatchDto) === "function" ? _b : Object]),
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
        __metadata("design:paramtypes", [typeof (_c = typeof dispatch_service_1.DispatchService !== "undefined" && dispatch_service_1.DispatchService) === "function" ? _c : Object])
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
var common_2 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@app/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
var entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
var cardDispatch_1 = __webpack_require__(/*! ./entities/cardDispatch */ "./apps/batches/src/dispatch/entities/cardDispatch.ts");
var dispatch_entity_1 = __webpack_require__(/*! ./entities/dispatch.entity */ "./apps/batches/src/dispatch/entities/dispatch.entity.ts");
var location_entity_1 = __webpack_require__(/*! ./entities/location.entity */ "./apps/batches/src/dispatch/entities/location.entity.ts");
var DispatchModule = /** @class */ (function () {
    function DispatchModule() {
    }
    DispatchModule = __decorate([
        (0, common_1.Module)({
            imports: [
                common_2.DatabaseModule,
                typeorm_1.TypeOrmModule.forFeature([entities_1.Card, dispatch_entity_1.Dispatch, cardDispatch_1.CardDispatch, location_entity_1.CardLocation]),
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
var cardDispatch_1 = __webpack_require__(/*! ./entities/cardDispatch */ "./apps/batches/src/dispatch/entities/cardDispatch.ts");
var DispatchService = /** @class */ (function () {
    function DispatchService(dispatchRepository, cardDispatchRepository, cardLocationRepository) {
        this.dispatchRepository = dispatchRepository;
        this.cardDispatchRepository = cardDispatchRepository;
        this.cardLocationRepository = cardLocationRepository;
    }
    DispatchService.prototype.getCardforDispatch = function (batchNo, lassraId, collectionCenter) {
        return __awaiter(this, void 0, void 0, function () {
            var searchresult, searchresult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(batchNo > 0 && collectionCenter)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.cardLocationRepository
                                .createQueryBuilder('cardLocation')
                                .leftJoinAndSelect('cardLocation.card', 'card')
                                .where('card.batchNo = :batchNo', { batchNo: batchNo })
                                .andWhere('cardLocation.collectionCenter = :collectionCenter', {
                                collectionCenter: collectionCenter,
                            })
                                .select(['cardLocation.lassraId', 'cardLocation..collectionCenter'])
                                .getMany()];
                    case 1:
                        searchresult = _a.sent();
                        return [2 /*return*/, searchresult];
                    case 2:
                        if (!lassraId) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.cardLocationRepository.find({ where: { lassraId: lassraId } })];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        if (!(!batchNo && collectionCenter)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.cardLocationRepository
                                .createQueryBuilder('cardLocation')
                                .leftJoinAndSelect('cardLocation.card', 'card')
                                // .where('card.batchNo = :batchNo', { batchNo })
                                .where('cardLocation.collectionCenter = :collectionCenter', {
                                collectionCenter: collectionCenter,
                            })
                                .select(['cardLocation.lassraId', 'cardLocation..collectionCenter'])
                                .getMany()];
                    case 5:
                        searchresult = _a.sent();
                        return [2 /*return*/, searchresult];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    DispatchService.prototype.createDispatch = function (createDispatchDto) {
        return 'This action adds a new dispatch';
    };
    DispatchService.prototype.updateDispatch = function () { };
    DispatchService.prototype.findAll = function () {
        return "This action returns all dispatch";
    };
    DispatchService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " dispatch");
    };
    DispatchService.prototype.update = function (id, updateDispatchDto) {
        return "This action updates a #".concat(id, " dispatch");
    };
    DispatchService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " dispatch");
    };
    var _a, _b, _c;
    DispatchService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(dispatch_entity_1.Dispatch)),
        __param(1, (0, typeorm_1.InjectRepository)(cardDispatch_1.CardDispatch)),
        __param(2, (0, typeorm_1.InjectRepository)(location_entity_1.CardLocation)),
        __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object])
    ], DispatchService);
    return DispatchService;
}());
exports.DispatchService = DispatchService;


/***/ }),

/***/ "./apps/batches/src/dispatch/dto/create-dispatch.dto.ts":
/*!**************************************************************!*\
  !*** ./apps/batches/src/dispatch/dto/create-dispatch.dto.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateDispatchDto = void 0;
var CreateDispatchDto = /** @class */ (function () {
    function CreateDispatchDto() {
    }
    return CreateDispatchDto;
}());
exports.CreateDispatchDto = CreateDispatchDto;


/***/ }),

/***/ "./apps/batches/src/dispatch/dto/update-dispatch.dto.ts":
/*!**************************************************************!*\
  !*** ./apps/batches/src/dispatch/dto/update-dispatch.dto.ts ***!
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
exports.UpdateDispatchDto = void 0;
var swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
var create_dispatch_dto_1 = __webpack_require__(/*! ./create-dispatch.dto */ "./apps/batches/src/dispatch/dto/create-dispatch.dto.ts");
var UpdateDispatchDto = /** @class */ (function (_super) {
    __extends(UpdateDispatchDto, _super);
    function UpdateDispatchDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateDispatchDto;
}((0, swagger_1.PartialType)(create_dispatch_dto_1.CreateDispatchDto)));
exports.UpdateDispatchDto = UpdateDispatchDto;


/***/ }),

/***/ "./apps/batches/src/dispatch/entities/cardDispatch.ts":
/*!************************************************************!*\
  !*** ./apps/batches/src/dispatch/entities/cardDispatch.ts ***!
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
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], CardDispatch.prototype, "destination", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], CardDispatch.prototype, "dispatchStatus", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return dispatch_entity_1.Dispatch; }),
        __metadata("design:type", typeof (_a = typeof dispatch_entity_1.Dispatch !== "undefined" && dispatch_entity_1.Dispatch) === "function" ? _a : Object)
    ], CardDispatch.prototype, "dispatch", void 0);
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
var cardDispatch_1 = __webpack_require__(/*! ./cardDispatch */ "./apps/batches/src/dispatch/entities/cardDispatch.ts");
var Dispatch = /** @class */ (function () {
    function Dispatch() {
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
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Dispatch.prototype, "cardsCount", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Dispatch.prototype, "dispatchStatus", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Dispatch.prototype, "createdBy", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
    ], Dispatch.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
    ], Dispatch.prototype, "dispatchedAt", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
    ], Dispatch.prototype, "acknowlegdedAt", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Dispatch.prototype, "dispatcher", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return cardDispatch_1.CardDispatch; }, function (cardDispatch) { return cardDispatch.dispatch; }, {
            cascade: true,
        }),
        __metadata("design:type", Array)
    ], Dispatch.prototype, "cardDispatch", void 0);
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
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], CardLocation.prototype, "previousLocations", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], CardLocation.prototype, "lassraId", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return entities_1.Card; }),
        __metadata("design:type", typeof (_a = typeof entities_1.Card !== "undefined" && entities_1.Card) === "function" ? _a : Object)
    ], CardLocation.prototype, "card", void 0);
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
var swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
var create_card_dto_1 = __webpack_require__(/*! ./create-card.dto */ "./apps/batches/src/dto/create-card.dto.ts");
var UpdateCardDto = /** @class */ (function (_super) {
    __extends(UpdateCardDto, _super);
    function UpdateCardDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateCardDto;
}((0, swagger_1.PartialType)(create_card_dto_1.CreateCardDto)));
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
var swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
var create_cardreceipt_dto_1 = __webpack_require__(/*! ./create-cardreceipt.dto */ "./apps/batches/src/dto/create-cardreceipt.dto.ts");
var UpdateCardReceiptDto = /** @class */ (function (_super) {
    __extends(UpdateCardReceiptDto, _super);
    function UpdateCardReceiptDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateCardReceiptDto;
}((0, swagger_1.PartialType)(create_cardreceipt_dto_1.CreateCardReceiptDto)));
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
                        .addTag('Test')
                        .build();
                    document = swagger_1.SwaggerModule.createDocument(app, options);
                    swagger_1.SwaggerModule.setup('api-docs', app, document);
                    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
                    app.useLogger(app.get(nestjs_pino_1.Logger));
                    configService = app.get(config_1.ConfigService);
                    console.log(configService.get('PORT'), 'port');
                    // await app.listen(configService.get('PORT'));
                    return [4 /*yield*/, app.listen(configService.get('PORT'))];
                case 2:
                    // await app.listen(configService.get('PORT'));
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
var dto_1 = __webpack_require__(/*! ../../dto */ "./apps/batches/src/dto/index.ts");
var create_cardprovision_dto_1 = __webpack_require__(/*! ../../cardprovision/dto/create-cardprovision.dto */ "./apps/batches/src/cardprovision/dto/create-cardprovision.dto.ts");
var CreateProvisionDto = /** @class */ (function () {
    function CreateProvisionDto() {
    }
    var _a, _b;
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            example: 'Jome',
            required: true,
        }),
        __metadata("design:type", String)
    ], CreateProvisionDto.prototype, "provisionedBy", void 0);
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
    __decorate([
        (0, class_transformer_1.Type)(function () { return dto_1.CreateBatchDto; }),
        __metadata("design:type", typeof (_b = typeof dto_1.CreateBatchDto !== "undefined" && dto_1.CreateBatchDto) === "function" ? _b : Object)
    ], CreateProvisionDto.prototype, "batch", void 0);
    __decorate([
        (0, class_validator_1.IsDefined)(),
        (0, class_transformer_1.Type)(function () { return create_cardprovision_dto_1.CreateCardProvisionDto; }),
        __metadata("design:type", Array)
    ], CreateProvisionDto.prototype, "cardProvision", void 0);
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
    var _a, _b;
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
        (0, typeorm_1.ManyToOne)(function () { return entities_1.Batch; }),
        __metadata("design:type", typeof (_b = typeof entities_1.Batch !== "undefined" && entities_1.Batch) === "function" ? _b : Object)
    ], Provision.prototype, "batch", void 0);
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
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.batchService.findOne(createProvisionDto.batchNo)];
                    case 1:
                        currentBatch = _a.sent();
                        createProvisionDto.batch = currentBatch;
                        return [4 /*yield*/, this.provisionService.createProvision(createProvisionDto)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        e_1 = _a.sent();
                        throw new common_1.HttpException(e_1.message, common_1.HttpStatus.BAD_REQUEST);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProvisionController.prototype.findAll = function (batchNo) {
        return this.provisionService.findAll(batchNo);
    };
    ProvisionController.prototype.findOne = function (id) {
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
var common_2 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@app/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
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
            var e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataSource.manager.transaction(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                                var newProvision, _i, _a, card, cardtoUpdate;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            newProvision = this.provisionRepository.create(createProvisionDto);
                                            return [4 /*yield*/, transactionManager.save(newProvision)];
                                        case 1:
                                            _b.sent();
                                            _i = 0, _a = createProvisionDto.cardProvision;
                                            _b.label = 2;
                                        case 2:
                                            if (!(_i < _a.length)) return [3 /*break*/, 7];
                                            card = _a[_i];
                                            return [4 /*yield*/, this.cardRepository.findOne({
                                                    where: { lassraId: card.lassraId },
                                                })];
                                        case 3:
                                            cardtoUpdate = _b.sent();
                                            if (cardtoUpdate.status < 1) {
                                                throw new Error('Card has not been received');
                                            }
                                            if (!(cardtoUpdate && cardtoUpdate.status === 1)) return [3 /*break*/, 6];
                                            return [4 /*yield*/, cardtoUpdate];
                                        case 4:
                                            (_b.sent()).status = 2;
                                            return [4 /*yield*/, transactionManager.save(cardtoUpdate)];
                                        case 5:
                                            _b.sent();
                                            _b.label = 6;
                                        case 6:
                                            _i++;
                                            return [3 /*break*/, 2];
                                        case 7: return [2 /*return*/, newProvision];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, 'Provision created successfully'];
                    case 2:
                        e_1 = _a.sent();
                        throw new Error(e_1.message);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProvisionService.prototype.findAll = function (batchNo) {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
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
                        e_2 = _a.sent();
                        throw new Error(e_2.message);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ProvisionService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var provision, e_3;
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
                        e_3 = _a.sent();
                        throw new Error(e_3);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProvisionService.prototype.search = function (batchNo, jobNo, lassraId, page, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var provision, e_4;
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
                        e_4 = _a.sent();
                        throw new Error(e_4.message);
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
        return this.receiptService.findOne(id);
    };
    ReceiptController.prototype.update = function (id, updateReceiptDto) {
        return this.receiptService.update(+id, updateReceiptDto);
    };
    ReceiptController.prototype.remove = function (id) {
        return this.receiptService.remove(+id);
    };
    var _a, _b, _c, _d;
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof dto_1.CreateReceiptDto !== "undefined" && dto_1.CreateReceiptDto) === "function" ? _a : Object]),
        __metadata("design:returntype", Promise)
    ], ReceiptController.prototype, "createReceipt", null);
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
        __metadata("design:paramtypes", [String, typeof (_b = typeof dto_1.UpdateReceiptDto !== "undefined" && dto_1.UpdateReceiptDto) === "function" ? _b : Object]),
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
        __metadata("design:paramtypes", [typeof (_c = typeof receipt_service_1.ReceiptService !== "undefined" && receipt_service_1.ReceiptService) === "function" ? _c : Object, typeof (_d = typeof batch_service_1.BatchService !== "undefined" && batch_service_1.BatchService) === "function" ? _d : Object])
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
var common_2 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@app/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
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
    ReceiptService.prototype.createReceipt = function (createReceiptDto) {
        return __awaiter(this, void 0, void 0, function () {
            var queryBuilder, e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataSource.manager.transaction(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                                var newReceipt, _i, _a, card, cardtoUpdate;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            newReceipt = this.receiptRepository.create(createReceiptDto);
                                            return [4 /*yield*/, transactionManager.save(newReceipt)];
                                        case 1:
                                            _b.sent();
                                            _i = 0, _a = createReceiptDto.cardReceipt;
                                            _b.label = 2;
                                        case 2:
                                            if (!(_i < _a.length)) return [3 /*break*/, 7];
                                            card = _a[_i];
                                            return [4 /*yield*/, this.cardRepository.findOne({
                                                    where: { lassraId: card.lassraId },
                                                })];
                                        case 3:
                                            cardtoUpdate = _b.sent();
                                            if (!cardtoUpdate) return [3 /*break*/, 6];
                                            return [4 /*yield*/, cardtoUpdate];
                                        case 4:
                                            (_b.sent()).status = 1;
                                            return [4 /*yield*/, transactionManager.save(cardtoUpdate)];
                                        case 5:
                                            _b.sent();
                                            _b.label = 6;
                                        case 6:
                                            _i++;
                                            return [3 /*break*/, 2];
                                        case 7: return [2 /*return*/, newReceipt];
                                    }
                                });
                            }); })];
                    case 1:
                        queryBuilder = _a.sent();
                        return [2 /*return*/, 'Receipt created successfully'];
                    case 2:
                        e_1 = _a.sent();
                        throw new Error(e_1.message);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ReceiptService.prototype.findAll = function (batchNo) {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
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
                        e_2 = _a.sent();
                        throw new Error(e_2);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ReceiptService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var receipts, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.receiptRepository.find({
                                where: { id: +id },
                                relations: ['batch'],
                            })];
                    case 1:
                        receipts = _a.sent();
                        return [2 /*return*/, receipts[0]];
                    case 2:
                        e_3 = _a.sent();
                        throw new Error(e_3);
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

/***/ "nestjs-pino":
/*!******************************!*\
  !*** external "nestjs-pino" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("nestjs-pino");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

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