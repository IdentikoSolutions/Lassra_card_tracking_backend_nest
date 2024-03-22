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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/batches/src/app.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
};
AppController = __decorate([
    (0, swagger_1.ApiTags)('Batch'),
    (0, common_1.Controller)('batch'),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/batches/src/app.service.ts");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/batches/src/app.controller.ts");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const entities_1 = __webpack_require__(/*! ./entities */ "./apps/batches/src/entities/index.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const card_module_1 = __webpack_require__(/*! ./card/card.module */ "./apps/batches/src/card/card.module.ts");
const cardreceipt_module_1 = __webpack_require__(/*! ./cardreceipt/cardreceipt.module */ "./apps/batches/src/cardreceipt/cardreceipt.module.ts");
const receipt_module_1 = __webpack_require__(/*! ./receipt/receipt.module */ "./apps/batches/src/receipt/receipt.module.ts");
const batch_module_1 = __webpack_require__(/*! ./batch/batch.module */ "./apps/batches/src/batch/batch.module.ts");
const devtools_integration_1 = __webpack_require__(/*! @nestjs/devtools-integration */ "@nestjs/devtools-integration");
const provision_module_1 = __webpack_require__(/*! ./provision/provision.module */ "./apps/batches/src/provision/provision.module.ts");
const cardprovision_module_1 = __webpack_require__(/*! ./cardprovision/cardprovision.module */ "./apps/batches/src/cardprovision/cardprovision.module.ts");
const dispatch_module_1 = __webpack_require__(/*! ./dispatch/dispatch.module */ "./apps/batches/src/dispatch/dispatch.module.ts");
let AppModule = class AppModule {
};
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
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
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
                }),
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
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, config_1.ConfigService],
        exports: [config_1.ConfigService],
    })
], AppModule);
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BatchController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const batch_service_1 = __webpack_require__(/*! ./batch.service */ "./apps/batches/src/batch/batch.service.ts");
const axios_1 = __webpack_require__(/*! axios */ "axios");
const dto_1 = __webpack_require__(/*! ../dto */ "./apps/batches/src/dto/index.ts");
let BatchController = class BatchController {
    constructor(batchService) {
        this.batchService = batchService;
    }
    async createBatchReceipt(createBatchDto) {
        try {
            return this.batchService.createBatch(createBatchDto);
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async Seed() {
        try {
            const Axios = axios_1.default.create({
                baseURL: 'http://10.65.10.7/cartrackerapi/api/',
                headers: {
                    accept: 'text/plain',
                    'Content-Type': 'application/json',
                    XApikey: 'pgH7QzFHJx4w46fI~5Uzi4RvtTwlEXp',
                },
            });
            const isBatchEmpty = await this.batchService.findAll();
            if (isBatchEmpty.length) {
                throw new Error('Database already seeded');
            }
            const result = await Axios.get('/Batch/GetValidBatches');
            const resultModified = await Promise.allSettled(result.data.map(async (item) => {
                item.cards = await (await Axios.get(`/batch/getcardbybatchid?id=${item.batchNo}`)).data.cards.map((item) => {
                    const editedResident = {
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
                    };
                    return editedResident;
                });
                return item;
            }));
            for (const x of resultModified) {
                try {
                    x.status === 'fulfilled' &&
                        (await this.batchService.createBatch(x.value));
                }
                catch (e) {
                    throw new common_1.HttpException(e, common_1.HttpStatus.CONFLICT);
                }
            }
            return 'seeding successful';
        }
        catch (e) {
            throw new common_1.HttpException('Database already seeded', common_1.HttpStatus.FORBIDDEN);
        }
    }
    search(batchNo, jobNo, lassraId, page = 1, pageSize = 10) {
        return this.batchService.search(batchNo, jobNo, lassraId, page, pageSize);
    }
    findAll() {
        return this.batchService.findAll();
    }
    async findOne(id) {
        return await this.batchService.findOne(id);
    }
    remove(id) {
        return this.batchService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreateBatchDto !== "undefined" && dto_1.CreateBatchDto) === "function" ? _b : Object]),
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
    __metadata("design:paramtypes", [typeof (_a = typeof batch_service_1.BatchService !== "undefined" && batch_service_1.BatchService) === "function" ? _a : Object])
], BatchController);
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const batch_service_1 = __webpack_require__(/*! ./batch.service */ "./apps/batches/src/batch/batch.service.ts");
const batch_controller_1 = __webpack_require__(/*! ./batch.controller */ "./apps/batches/src/batch/batch.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const batch_entity_1 = __webpack_require__(/*! ../entities/batch.entity */ "./apps/batches/src/entities/batch.entity.ts");
const receipt_entity_1 = __webpack_require__(/*! ../entities/receipt.entity */ "./apps/batches/src/entities/receipt.entity.ts");
const card_entity_1 = __webpack_require__(/*! ../entities/card.entity */ "./apps/batches/src/entities/card.entity.ts");
let BatchModule = class BatchModule {
};
BatchModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([batch_entity_1.Batch, receipt_entity_1.Receipt, card_entity_1.Card])],
        controllers: [batch_controller_1.BatchController],
        providers: [batch_service_1.BatchService],
        exports: [batch_service_1.BatchService],
    })
], BatchModule);
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BatchService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const repository_1 = __webpack_require__(/*! ../repository */ "./apps/batches/src/repository/index.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
let BatchService = class BatchService {
    constructor(batchRepository, dataSource) {
        this.batchRepository = batchRepository;
        this.dataSource = dataSource;
    }
    async createBatch(createBatchDto) {
        try {
            const newBatch = this.batchRepository.create(createBatchDto);
            const newBatchItem = await this.batchRepository.save(newBatch);
            return newBatchItem;
        }
        catch (e) {
            throw new Error(e + ' from Batch');
        }
        finally {
        }
    }
    async search(batchNo, jobNo, lassraId, page, pageSize) {
        console.log(batchNo, jobNo, lassraId, page, pageSize);
        const queryBuilder = this.batchRepository.createQueryBuilder('batch');
        if (!batchNo && !jobNo && !lassraId)
            throw new common_1.HttpException('supply your query params', common_1.HttpStatus.BAD_REQUEST);
        if (batchNo) {
            queryBuilder.where('batch.batchNo = :batchNo', { batchNo });
        }
        if (jobNo) {
            queryBuilder.orWhere('batch.bankJobNo = :jobNo', { jobNo });
        }
        if (lassraId) {
            queryBuilder.orWhere('batch.cards.lassraId = :lassraId', { lassraId });
        }
        return await queryBuilder
            .getOne();
    }
    async findAll() {
        try {
            return await this.batchRepository.find({});
        }
        catch (err) {
            throw new common_1.HttpException(err, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async findOne(id) {
        const batches = await this.batchRepository.find({
            where: { batchNo: id },
        });
        if (batches.length) {
            return batches[0];
        }
    }
    async remove(_id) {
        const idtoDelete = Number(_id);
        const batch = await this.batchRepository.findOneBy({ id: idtoDelete });
        if (!batch) {
            throw new common_1.NotFoundException(`Batch with ID ${_id} not found`);
        }
        else {
            await this.batchRepository.remove(batch);
            return 'Deleted successfully';
        }
    }
};
BatchService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Batch)),
    __metadata("design:paramtypes", [typeof (_a = typeof repository_1.BatchRepository !== "undefined" && repository_1.BatchRepository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _b : Object])
], BatchService);
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const card_service_1 = __webpack_require__(/*! ./card.service */ "./apps/batches/src/card/card.service.ts");
const dto_1 = __webpack_require__(/*! ../dto */ "./apps/batches/src/dto/index.ts");
let CardController = class CardController {
    constructor(cardService) {
        this.cardService = cardService;
    }
    create(createCardDto) {
        return this.cardService.create(createCardDto);
    }
    async getCardsStatusCount(batchNo, status) {
        try {
            return await this.cardService.getCardCountByBatchNoAndStatus(batchNo, status);
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.EXPECTATION_FAILED);
        }
    }
    findAll(batchNo) {
        console.log('called');
        return this.cardService.findAll(batchNo);
    }
    findOne(lassraId, batchNo) {
        console.log(lassraId, batchNo);
        try {
            return this.cardService.findOne(batchNo, lassraId);
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.EXPECTATION_FAILED);
        }
    }
    update(id, updateCardDto) {
        return this.cardService.update(+id, updateCardDto);
    }
    remove(id) {
        return this.cardService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreateCardDto !== "undefined" && dto_1.CreateCardDto) === "function" ? _b : Object]),
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
    __metadata("design:paramtypes", [String, typeof (_c = typeof dto_1.UpdateCardDto !== "undefined" && dto_1.UpdateCardDto) === "function" ? _c : Object]),
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
    __metadata("design:paramtypes", [typeof (_a = typeof card_service_1.CardService !== "undefined" && card_service_1.CardService) === "function" ? _a : Object])
], CardController);
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const card_service_1 = __webpack_require__(/*! ./card.service */ "./apps/batches/src/card/card.service.ts");
const card_controller_1 = __webpack_require__(/*! ./card.controller */ "./apps/batches/src/card/card.controller.ts");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const batch_entity_1 = __webpack_require__(/*! ../entities/batch.entity */ "./apps/batches/src/entities/batch.entity.ts");
const card_entity_1 = __webpack_require__(/*! ../entities/card.entity */ "./apps/batches/src/entities/card.entity.ts");
const cardreceipt_entity_1 = __webpack_require__(/*! ../entities/cardreceipt.entity */ "./apps/batches/src/entities/cardreceipt.entity.ts");
const receipt_entity_1 = __webpack_require__(/*! ../entities/receipt.entity */ "./apps/batches/src/entities/receipt.entity.ts");
let CardModule = class CardModule {
};
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
const repository_1 = __webpack_require__(/*! ../repository */ "./apps/batches/src/repository/index.ts");
let CardService = class CardService {
    constructor(cardRepository) {
        this.cardRepository = cardRepository;
    }
    create(createCardDto) {
        return 'This action adds a new card';
    }
    async findAll(batchNo) {
        try {
            if (!batchNo) {
                return await this.cardRepository.find({});
            }
            else {
                return await this.cardRepository.find({
                    where: {
                        batchNo,
                    },
                });
            }
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async getCardCountByBatchNoAndStatus(batchNo, status) {
        const queryBuilder = await this.cardRepository.createQueryBuilder('card');
        queryBuilder
            .where('card.batchNo =:batchNo', { batchNo })
            .andWhere('card.status =:status', { status });
        return await queryBuilder.getManyAndCount();
    }
    async findOne(batchNo, lassraId) {
        try {
            const queryBuilder = await this.cardRepository.createQueryBuilder('card');
            queryBuilder
                .where('card.batchNo =:batchNo', { batchNo })
                .andWhere('card.lassraId =:lassraId', { lassraId });
            console.log(queryBuilder, 'QueryBuilder');
            return queryBuilder.getOne();
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async update(id, updateCardDto) {
        const cardToUpdate = await this.cardRepository.findOne({
            where: { id: id },
        });
        if (!cardToUpdate) {
            throw new common_1.NotFoundException('Card Not found.');
        }
        const updated = Object.assign(cardToUpdate, updateCardDto);
        return await this.cardRepository.save(updated);
    }
    remove(id) {
        return `This action removes a #${id} card`;
    }
};
CardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Card)),
    __metadata("design:paramtypes", [typeof (_a = typeof repository_1.CardRepository !== "undefined" && repository_1.CardRepository) === "function" ? _a : Object])
], CardService);
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardprovisionController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cardprovision_service_1 = __webpack_require__(/*! ./cardprovision.service */ "./apps/batches/src/cardprovision/cardprovision.service.ts");
const create_cardprovision_dto_1 = __webpack_require__(/*! ./dto/create-cardprovision.dto */ "./apps/batches/src/cardprovision/dto/create-cardprovision.dto.ts");
const update_cardprovision_dto_1 = __webpack_require__(/*! ./dto/update-cardprovision.dto */ "./apps/batches/src/cardprovision/dto/update-cardprovision.dto.ts");
let CardprovisionController = class CardprovisionController {
    constructor(cardprovisionService) {
        this.cardprovisionService = cardprovisionService;
    }
    create(createCardProvisionDto) {
        return this.cardprovisionService.create(createCardProvisionDto);
    }
    findAll(provision_id) {
        return this.cardprovisionService.findAll(provision_id);
    }
    findOne(id) {
        return this.cardprovisionService.findOne(+id);
    }
    update(id, updateCardprovisionDto) {
        return this.cardprovisionService.update(+id, updateCardprovisionDto);
    }
    remove(id) {
        return this.cardprovisionService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_cardprovision_dto_1.CreateCardProvisionDto !== "undefined" && create_cardprovision_dto_1.CreateCardProvisionDto) === "function" ? _b : Object]),
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
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_cardprovision_dto_1.UpdateCardprovisionDto !== "undefined" && update_cardprovision_dto_1.UpdateCardprovisionDto) === "function" ? _c : Object]),
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
    __metadata("design:paramtypes", [typeof (_a = typeof cardprovision_service_1.CardprovisionService !== "undefined" && cardprovision_service_1.CardprovisionService) === "function" ? _a : Object])
], CardprovisionController);
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cardprovision_service_1 = __webpack_require__(/*! ./cardprovision.service */ "./apps/batches/src/cardprovision/cardprovision.service.ts");
const cardprovision_controller_1 = __webpack_require__(/*! ./cardprovision.controller */ "./apps/batches/src/cardprovision/cardprovision.controller.ts");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
const provision_entity_1 = __webpack_require__(/*! ../provision/entities/provision.entity */ "./apps/batches/src/provision/entities/provision.entity.ts");
const cardprovision_entity_1 = __webpack_require__(/*! ./entities/cardprovision.entity */ "./apps/batches/src/cardprovision/entities/cardprovision.entity.ts");
let CardprovisionModule = class CardprovisionModule {
};
CardprovisionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            common_2.DatabaseModule,
            typeorm_1.TypeOrmModule.forFeature([entities_1.Receipt, entities_1.Batch, provision_entity_1.Provision, cardprovision_entity_1.CardProvision]),
        ],
        controllers: [cardprovision_controller_1.CardprovisionController],
        providers: [cardprovision_service_1.CardprovisionService],
    })
], CardprovisionModule);
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardprovisionService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const cardprovision_entity_1 = __webpack_require__(/*! ./entities/cardprovision.entity */ "./apps/batches/src/cardprovision/entities/cardprovision.entity.ts");
let CardprovisionService = class CardprovisionService {
    create(createCardProvisionDto) {
        return 'This action adds a new cardprovision';
    }
    async findAll(provision_id) {
        if (!provision_id) {
            return await this.cardProvisionRepository.find({});
        }
        const cards = await this.cardProvisionRepository
            .createQueryBuilder('cardProvision')
            .where('cardProvision.provisionId =:provision_id', { provision_id })
            .getManyAndCount();
        return cards;
    }
    findOne(id) {
        return `This action returns a #${id} cardprovision`;
    }
    update(id, updateCardprovisionDto) {
        return `This action updates a #${id} cardprovision`;
    }
    remove(id) {
        return `This action removes a #${id} cardprovision`;
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(cardprovision_entity_1.CardProvision),
    __metadata("design:type", typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object)
], CardprovisionService.prototype, "cardProvisionRepository", void 0);
CardprovisionService = __decorate([
    (0, common_1.Injectable)()
], CardprovisionService);
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCardProvisionDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const dto_1 = __webpack_require__(/*! ../../dto */ "./apps/batches/src/dto/index.ts");
const create_provision_dto_1 = __webpack_require__(/*! ../../provision/dto/create-provision.dto */ "./apps/batches/src/provision/dto/create-provision.dto.ts");
class CreateCardProvisionDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCardProvisionDto.prototype, "lassraId", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Type)(() => dto_1.CreateCardDto),
    __metadata("design:type", typeof (_a = typeof dto_1.CreateCardDto !== "undefined" && dto_1.CreateCardDto) === "function" ? _a : Object)
], CreateCardProvisionDto.prototype, "card", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Type)(() => create_provision_dto_1.CreateProvisionDto),
    __metadata("design:type", typeof (_b = typeof create_provision_dto_1.CreateProvisionDto !== "undefined" && create_provision_dto_1.CreateProvisionDto) === "function" ? _b : Object)
], CreateCardProvisionDto.prototype, "provision", void 0);
exports.CreateCardProvisionDto = CreateCardProvisionDto;


/***/ }),

/***/ "./apps/batches/src/cardprovision/dto/update-cardprovision.dto.ts":
/*!************************************************************************!*\
  !*** ./apps/batches/src/cardprovision/dto/update-cardprovision.dto.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCardprovisionDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const create_cardprovision_dto_1 = __webpack_require__(/*! ./create-cardprovision.dto */ "./apps/batches/src/cardprovision/dto/create-cardprovision.dto.ts");
class UpdateCardprovisionDto extends (0, swagger_1.PartialType)(create_cardprovision_dto_1.CreateCardProvisionDto) {
}
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardProvision = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const entities_1 = __webpack_require__(/*! ../../entities */ "./apps/batches/src/entities/index.ts");
const provision_entity_1 = __webpack_require__(/*! ../../provision/entities/provision.entity */ "./apps/batches/src/provision/entities/provision.entity.ts");
let CardProvision = class CardProvision {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CardProvision.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], CardProvision.prototype, "lassraId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => entities_1.Card),
    __metadata("design:type", typeof (_a = typeof entities_1.Card !== "undefined" && entities_1.Card) === "function" ? _a : Object)
], CardProvision.prototype, "card", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => provision_entity_1.Provision, (provision) => provision.cardProvision),
    __metadata("design:type", typeof (_b = typeof provision_entity_1.Provision !== "undefined" && provision_entity_1.Provision) === "function" ? _b : Object)
], CardProvision.prototype, "provision", void 0);
CardProvision = __decorate([
    (0, typeorm_1.Entity)()
], CardProvision);
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardReceiptController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cardreceipt_service_1 = __webpack_require__(/*! ./cardreceipt.service */ "./apps/batches/src/cardreceipt/cardreceipt.service.ts");
let CardReceiptController = class CardReceiptController {
    constructor(cardReceiptService) {
        this.cardReceiptService = cardReceiptService;
    }
    async findAll(receipt_id) {
        return await this.cardReceiptService.findAll(receipt_id);
    }
};
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cardreceipt_service_1 = __webpack_require__(/*! ./cardreceipt.service */ "./apps/batches/src/cardreceipt/cardreceipt.service.ts");
const cardreceipt_controller_1 = __webpack_require__(/*! ./cardreceipt.controller */ "./apps/batches/src/cardreceipt/cardreceipt.controller.ts");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const cardreceipt_entity_1 = __webpack_require__(/*! ../entities/cardreceipt.entity */ "./apps/batches/src/entities/cardreceipt.entity.ts");
let CardReceiptModule = class CardReceiptModule {
};
CardReceiptModule = __decorate([
    (0, common_1.Module)({
        imports: [common_2.DatabaseModule, typeorm_1.TypeOrmModule.forFeature([cardreceipt_entity_1.CardReceipt])],
        controllers: [cardreceipt_controller_1.CardReceiptController],
        providers: [cardreceipt_service_1.CardReceiptService],
    })
], CardReceiptModule);
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardReceiptService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
const repository_1 = __webpack_require__(/*! ../repository */ "./apps/batches/src/repository/index.ts");
let CardReceiptService = class CardReceiptService {
    constructor(cardReceiptRepository) {
        this.cardReceiptRepository = cardReceiptRepository;
    }
    async findAll(receipt_id) {
        if (!receipt_id) {
            return await this.cardReceiptRepository.find({});
        }
        const cards = await this.cardReceiptRepository
            .createQueryBuilder('cardReceipt')
            .where('cardReceipt.receiptId =:receipt_id', { receipt_id })
            .getManyAndCount();
        return cards;
    }
};
CardReceiptService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.CardReceipt)),
    __metadata("design:paramtypes", [typeof (_a = typeof repository_1.CardReceiptRepository !== "undefined" && repository_1.CardReceiptRepository) === "function" ? _a : Object])
], CardReceiptService);
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DispatchController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const dispatch_service_1 = __webpack_require__(/*! ./dispatch.service */ "./apps/batches/src/dispatch/dispatch.service.ts");
const create_dispatch_dto_1 = __webpack_require__(/*! ./dto/create-dispatch.dto */ "./apps/batches/src/dispatch/dto/create-dispatch.dto.ts");
const update_dispatch_dto_1 = __webpack_require__(/*! ./dto/update-dispatch.dto */ "./apps/batches/src/dispatch/dto/update-dispatch.dto.ts");
let DispatchController = class DispatchController {
    constructor(dispatchService) {
        this.dispatchService = dispatchService;
    }
    create(createDispatchDto) {
        return this.dispatchService.createDispatch(createDispatchDto);
    }
    getCardForDispatch(batchNo, lassraId, collectionCenter) {
        console.log(batchNo, collectionCenter);
        try {
            return this.dispatchService.getCardforDispatch(batchNo, lassraId, collectionCenter);
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    findAll() {
        return this.dispatchService.findAll();
    }
    findOne(id) {
        return this.dispatchService.findOne(+id);
    }
    update(id, updateDispatchDto) {
        return this.dispatchService.update(+id, updateDispatchDto);
    }
    remove(id) {
        return this.dispatchService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_dispatch_dto_1.CreateDispatchDto !== "undefined" && create_dispatch_dto_1.CreateDispatchDto) === "function" ? _b : Object]),
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
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_dispatch_dto_1.UpdateDispatchDto !== "undefined" && update_dispatch_dto_1.UpdateDispatchDto) === "function" ? _c : Object]),
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
    __metadata("design:paramtypes", [typeof (_a = typeof dispatch_service_1.DispatchService !== "undefined" && dispatch_service_1.DispatchService) === "function" ? _a : Object])
], DispatchController);
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const dispatch_service_1 = __webpack_require__(/*! ./dispatch.service */ "./apps/batches/src/dispatch/dispatch.service.ts");
const dispatch_controller_1 = __webpack_require__(/*! ./dispatch.controller */ "./apps/batches/src/dispatch/dispatch.controller.ts");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
const cardDispatch_1 = __webpack_require__(/*! ./entities/cardDispatch */ "./apps/batches/src/dispatch/entities/cardDispatch.ts");
const dispatch_entity_1 = __webpack_require__(/*! ./entities/dispatch.entity */ "./apps/batches/src/dispatch/entities/dispatch.entity.ts");
const location_entity_1 = __webpack_require__(/*! ./entities/location.entity */ "./apps/batches/src/dispatch/entities/location.entity.ts");
let DispatchModule = class DispatchModule {
};
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DispatchService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const dispatch_entity_1 = __webpack_require__(/*! ./entities/dispatch.entity */ "./apps/batches/src/dispatch/entities/dispatch.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const location_entity_1 = __webpack_require__(/*! ./entities/location.entity */ "./apps/batches/src/dispatch/entities/location.entity.ts");
const cardDispatch_1 = __webpack_require__(/*! ./entities/cardDispatch */ "./apps/batches/src/dispatch/entities/cardDispatch.ts");
let DispatchService = class DispatchService {
    constructor(dispatchRepository, cardDispatchRepository, cardLocationRepository) {
        this.dispatchRepository = dispatchRepository;
        this.cardDispatchRepository = cardDispatchRepository;
        this.cardLocationRepository = cardLocationRepository;
    }
    async getCardforDispatch(batchNo, lassraId, collectionCenter) {
        if (batchNo > 0 && collectionCenter) {
            const searchresult = await this.cardLocationRepository
                .createQueryBuilder('cardLocation')
                .leftJoinAndSelect('cardLocation.card', 'card')
                .where('card.batchNo = :batchNo', { batchNo })
                .andWhere('cardLocation.collectionCenter = :collectionCenter', {
                collectionCenter,
            })
                .select(['cardLocation.lassraId', 'cardLocation..collectionCenter'])
                .getMany();
            return searchresult;
        }
        else if (lassraId) {
            return await this.cardLocationRepository.find({ where: { lassraId } });
        }
        else if (!batchNo && collectionCenter) {
            const searchresult = await this.cardLocationRepository
                .createQueryBuilder('cardLocation')
                .leftJoinAndSelect('cardLocation.card', 'card')
                .where('cardLocation.collectionCenter = :collectionCenter', {
                collectionCenter,
            })
                .select(['cardLocation.lassraId', 'cardLocation..collectionCenter'])
                .getMany();
            return searchresult;
        }
    }
    createDispatch(createDispatchDto) {
        return 'This action adds a new dispatch';
    }
    updateDispatch() { }
    findAll() {
        return `This action returns all dispatch`;
    }
    findOne(id) {
        return `This action returns a #${id} dispatch`;
    }
    update(id, updateDispatchDto) {
        return `This action updates a #${id} dispatch`;
    }
    remove(id) {
        return `This action removes a #${id} dispatch`;
    }
};
DispatchService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(dispatch_entity_1.Dispatch)),
    __param(1, (0, typeorm_1.InjectRepository)(cardDispatch_1.CardDispatch)),
    __param(2, (0, typeorm_1.InjectRepository)(location_entity_1.CardLocation)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object])
], DispatchService);
exports.DispatchService = DispatchService;


/***/ }),

/***/ "./apps/batches/src/dispatch/dto/create-dispatch.dto.ts":
/*!**************************************************************!*\
  !*** ./apps/batches/src/dispatch/dto/create-dispatch.dto.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateDispatchDto = void 0;
class CreateDispatchDto {
}
exports.CreateDispatchDto = CreateDispatchDto;


/***/ }),

/***/ "./apps/batches/src/dispatch/dto/update-dispatch.dto.ts":
/*!**************************************************************!*\
  !*** ./apps/batches/src/dispatch/dto/update-dispatch.dto.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateDispatchDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const create_dispatch_dto_1 = __webpack_require__(/*! ./create-dispatch.dto */ "./apps/batches/src/dispatch/dto/create-dispatch.dto.ts");
class UpdateDispatchDto extends (0, swagger_1.PartialType)(create_dispatch_dto_1.CreateDispatchDto) {
}
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardDispatch = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const dispatch_entity_1 = __webpack_require__(/*! ./dispatch.entity */ "./apps/batches/src/dispatch/entities/dispatch.entity.ts");
class CardDispatch {
}
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
    (0, typeorm_1.ManyToOne)(() => dispatch_entity_1.Dispatch),
    __metadata("design:type", typeof (_a = typeof dispatch_entity_1.Dispatch !== "undefined" && dispatch_entity_1.Dispatch) === "function" ? _a : Object)
], CardDispatch.prototype, "dispatch", void 0);
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Dispatch = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const cardDispatch_1 = __webpack_require__(/*! ./cardDispatch */ "./apps/batches/src/dispatch/entities/cardDispatch.ts");
class Dispatch {
}
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
    (0, typeorm_1.ManyToMany)(() => cardDispatch_1.CardDispatch, (cardDispatch) => cardDispatch.dispatch, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Dispatch.prototype, "cardDispatch", void 0);
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardLocation = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const entities_1 = __webpack_require__(/*! ../../entities */ "./apps/batches/src/entities/index.ts");
class CardLocation {
}
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
    (0, typeorm_1.OneToOne)(() => entities_1.Card),
    __metadata("design:type", typeof (_a = typeof entities_1.Card !== "undefined" && entities_1.Card) === "function" ? _a : Object)
], CardLocation.prototype, "card", void 0);
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateBatchDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const create_card_dto_1 = __webpack_require__(/*! ./create-card.dto */ "./apps/batches/src/dto/create-card.dto.ts");
class CreateBatchDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Number),
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
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateBatchDto.prototype, "bankDataCreatedOn", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Date),
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
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => String),
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
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], CreateBatchDto.prototype, "enrolLG", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_card_dto_1.CreateCardDto),
    __metadata("design:type", Array)
], CreateBatchDto.prototype, "cards", void 0);
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCardDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateCardDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: '26',
        required: true,
    }),
    __metadata("design:type", String)
], CreateCardDto.prototype, "batchNo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'Isolo',
        required: true,
    }),
    __metadata("design:type", String)
], CreateCardDto.prototype, "contact_LGA", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'NGN',
        required: true,
    }),
    __metadata("design:type", String)
], CreateCardDto.prototype, "country_code", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: '19',
        required: true,
    }),
    __metadata("design:type", String)
], CreateCardDto.prototype, "current_house_number", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'Oyemomi',
        required: true,
    }),
    __metadata("design:type", String)
], CreateCardDto.prototype, "current_street", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'Ogba',
        required: true,
    }),
    __metadata("design:type", String)
], CreateCardDto.prototype, "current_town", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: '26',
        required: true,
    }),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateCardDto.prototype, "date_of_birth", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)({
        example: false,
        required: true,
    }),
    __metadata("design:type", Boolean)
], CreateCardDto.prototype, "duplicate_PAN", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({
        example: 'lassra@identiko.dev',
        required: true,
    }),
    __metadata("design:type", String)
], CreateCardDto.prototype, "email_address", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'John',
        required: true,
    }),
    __metadata("design:type", String)
], CreateCardDto.prototype, "first_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: '26',
        required: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], CreateCardDto.prototype, "flat_number", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'LAEXAMPLE2',
        required: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], CreateCardDto.prototype, "lassraId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'Oluwa',
        required: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], CreateCardDto.prototype, "middle_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: '+2345679020',
        required: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], CreateCardDto.prototype, "primary_phone_no", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: Date.now(),
        required: true,
    }),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CreateCardDto.prototype, "registration_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'Lagos',
        required: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], CreateCardDto.prototype, "state_of_residence", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        example: 0,
        required: true,
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateCardDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: 'Doe',
        required: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], CreateCardDto.prototype, "surname", void 0);
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCardReceiptDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const create_card_dto_1 = __webpack_require__(/*! ./create-card.dto */ "./apps/batches/src/dto/create-card.dto.ts");
const create_receipt_dto_1 = __webpack_require__(/*! ./create-receipt.dto */ "./apps/batches/src/dto/create-receipt.dto.ts");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class CreateCardReceiptDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCardReceiptDto.prototype, "lassraId", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Type)(() => create_card_dto_1.CreateCardDto),
    __metadata("design:type", typeof (_a = typeof create_card_dto_1.CreateCardDto !== "undefined" && create_card_dto_1.CreateCardDto) === "function" ? _a : Object)
], CreateCardReceiptDto.prototype, "card", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Type)(() => create_receipt_dto_1.CreateReceiptDto),
    __metadata("design:type", typeof (_b = typeof create_receipt_dto_1.CreateReceiptDto !== "undefined" && create_receipt_dto_1.CreateReceiptDto) === "function" ? _b : Object)
], CreateCardReceiptDto.prototype, "receipt", void 0);
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateReceiptDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const create_batch_dto_1 = __webpack_require__(/*! ./create-batch.dto */ "./apps/batches/src/dto/create-batch.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const create_cardreceipt_dto_1 = __webpack_require__(/*! ./create-cardreceipt.dto */ "./apps/batches/src/dto/create-cardreceipt.dto.ts");
class CreateReceiptDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
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
    (0, class_transformer_1.Type)(() => Date),
    (0, swagger_1.ApiProperty)({
        example: Date.now(),
        required: true,
    }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateReceiptDto.prototype, "receivedAt", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => String),
    (0, swagger_1.ApiProperty)({
        example: '32',
        required: true,
    }),
    __metadata("design:type", String)
], CreateReceiptDto.prototype, "batchNo", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => create_batch_dto_1.CreateBatchDto),
    __metadata("design:type", typeof (_b = typeof create_batch_dto_1.CreateBatchDto !== "undefined" && create_batch_dto_1.CreateBatchDto) === "function" ? _b : Object)
], CreateReceiptDto.prototype, "batch", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Type)(() => create_cardreceipt_dto_1.CreateCardReceiptDto),
    __metadata("design:type", Array)
], CreateReceiptDto.prototype, "cardReceipt", void 0);
exports.CreateReceiptDto = CreateReceiptDto;


/***/ }),

/***/ "./apps/batches/src/dto/index.ts":
/*!***************************************!*\
  !*** ./apps/batches/src/dto/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateBatchDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_batch_dto_1 = __webpack_require__(/*! ./create-batch.dto */ "./apps/batches/src/dto/create-batch.dto.ts");
class UpdateBatchDto extends (0, mapped_types_1.PartialType)(create_batch_dto_1.CreateBatchDto) {
}
exports.UpdateBatchDto = UpdateBatchDto;


/***/ }),

/***/ "./apps/batches/src/dto/update-card.dto.ts":
/*!*************************************************!*\
  !*** ./apps/batches/src/dto/update-card.dto.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCardDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const create_card_dto_1 = __webpack_require__(/*! ./create-card.dto */ "./apps/batches/src/dto/create-card.dto.ts");
class UpdateCardDto extends (0, swagger_1.PartialType)(create_card_dto_1.CreateCardDto) {
}
exports.UpdateCardDto = UpdateCardDto;


/***/ }),

/***/ "./apps/batches/src/dto/update-cardreceipt.dto.ts":
/*!********************************************************!*\
  !*** ./apps/batches/src/dto/update-cardreceipt.dto.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCardReceiptDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const create_cardreceipt_dto_1 = __webpack_require__(/*! ./create-cardreceipt.dto */ "./apps/batches/src/dto/create-cardreceipt.dto.ts");
class UpdateCardReceiptDto extends (0, swagger_1.PartialType)(create_cardreceipt_dto_1.CreateCardReceiptDto) {
}
exports.UpdateCardReceiptDto = UpdateCardReceiptDto;


/***/ }),

/***/ "./apps/batches/src/dto/update-receipt.dto.ts":
/*!****************************************************!*\
  !*** ./apps/batches/src/dto/update-receipt.dto.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateReceiptDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_receipt_dto_1 = __webpack_require__(/*! ./create-receipt.dto */ "./apps/batches/src/dto/create-receipt.dto.ts");
class UpdateReceiptDto extends (0, mapped_types_1.PartialType)(create_receipt_dto_1.CreateReceiptDto) {
}
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Batch = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const card_entity_1 = __webpack_require__(/*! ./card.entity */ "./apps/batches/src/entities/card.entity.ts");
let Batch = class Batch {
};
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
    (0, typeorm_1.OneToMany)(() => card_entity_1.Card, (card) => card.batchNo, { cascade: true }),
    __metadata("design:type", Array)
], Batch.prototype, "cards", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Batch.prototype, "createdAt", void 0);
Batch = __decorate([
    (0, typeorm_1.Entity)('batches')
], Batch);
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Card = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const batch_entity_1 = __webpack_require__(/*! ./batch.entity */ "./apps/batches/src/entities/batch.entity.ts");
let Card = class Card extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({}),
    __metadata("design:type", Number)
], Card.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Card.prototype, "batchNo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
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
    (0, typeorm_1.ManyToOne)(() => batch_entity_1.Batch, (batch) => batch.cards, { eager: true }),
    __metadata("design:type", typeof (_c = typeof batch_entity_1.Batch !== "undefined" && batch_entity_1.Batch) === "function" ? _c : Object)
], Card.prototype, "batch", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Card.prototype, "createdAt", void 0);
Card = __decorate([
    (0, typeorm_1.Entity)('cards')
], Card);
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardReceipt = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const card_entity_1 = __webpack_require__(/*! ./card.entity */ "./apps/batches/src/entities/card.entity.ts");
const receipt_entity_1 = __webpack_require__(/*! ./receipt.entity */ "./apps/batches/src/entities/receipt.entity.ts");
let CardReceipt = class CardReceipt {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CardReceipt.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], CardReceipt.prototype, "lassraId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => card_entity_1.Card),
    __metadata("design:type", typeof (_a = typeof card_entity_1.Card !== "undefined" && card_entity_1.Card) === "function" ? _a : Object)
], CardReceipt.prototype, "card", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => receipt_entity_1.Receipt, (receipt) => receipt.cardReceipt),
    __metadata("design:type", typeof (_b = typeof receipt_entity_1.Receipt !== "undefined" && receipt_entity_1.Receipt) === "function" ? _b : Object)
], CardReceipt.prototype, "receipt", void 0);
CardReceipt = __decorate([
    (0, typeorm_1.Entity)()
], CardReceipt);
exports.CardReceipt = CardReceipt;


/***/ }),

/***/ "./apps/batches/src/entities/index.ts":
/*!********************************************!*\
  !*** ./apps/batches/src/entities/index.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Receipt = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const batch_entity_1 = __webpack_require__(/*! ./batch.entity */ "./apps/batches/src/entities/batch.entity.ts");
const cardreceipt_entity_1 = __webpack_require__(/*! ./cardreceipt.entity */ "./apps/batches/src/entities/cardreceipt.entity.ts");
let Receipt = class Receipt extends typeorm_1.BaseEntity {
};
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
    (0, typeorm_1.OneToMany)(() => cardreceipt_entity_1.CardReceipt, (cardReceipt) => cardReceipt.receipt, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Receipt.prototype, "cardReceipt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Receipt.prototype, "receivedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => batch_entity_1.Batch),
    __metadata("design:type", typeof (_b = typeof batch_entity_1.Batch !== "undefined" && batch_entity_1.Batch) === "function" ? _b : Object)
], Receipt.prototype, "batch", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Receipt.prototype, "createdAt", void 0);
Receipt = __decorate([
    (0, typeorm_1.Entity)('receipts')
], Receipt);
exports.Receipt = Receipt;


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateProvisionDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const dto_1 = __webpack_require__(/*! ../../dto */ "./apps/batches/src/dto/index.ts");
const create_cardprovision_dto_1 = __webpack_require__(/*! ../../cardprovision/dto/create-cardprovision.dto */ "./apps/batches/src/cardprovision/dto/create-cardprovision.dto.ts");
class CreateProvisionDto {
}
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
    (0, class_transformer_1.Type)(() => Date),
    (0, swagger_1.ApiProperty)({
        example: Date.now(),
        required: true,
    }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateProvisionDto.prototype, "provisionedAt", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => String),
    (0, swagger_1.ApiProperty)({
        example: '32',
        required: true,
    }),
    __metadata("design:type", String)
], CreateProvisionDto.prototype, "batchNo", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => dto_1.CreateBatchDto),
    __metadata("design:type", typeof (_b = typeof dto_1.CreateBatchDto !== "undefined" && dto_1.CreateBatchDto) === "function" ? _b : Object)
], CreateProvisionDto.prototype, "batch", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Type)(() => create_cardprovision_dto_1.CreateCardProvisionDto),
    __metadata("design:type", Array)
], CreateProvisionDto.prototype, "cardProvision", void 0);
exports.CreateProvisionDto = CreateProvisionDto;


/***/ }),

/***/ "./apps/batches/src/provision/dto/update-provision.dto.ts":
/*!****************************************************************!*\
  !*** ./apps/batches/src/provision/dto/update-provision.dto.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateProvisionDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const create_provision_dto_1 = __webpack_require__(/*! ./create-provision.dto */ "./apps/batches/src/provision/dto/create-provision.dto.ts");
class UpdateProvisionDto extends (0, swagger_1.PartialType)(create_provision_dto_1.CreateProvisionDto) {
}
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Provision = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const entities_1 = __webpack_require__(/*! ../../entities */ "./apps/batches/src/entities/index.ts");
const cardprovision_entity_1 = __webpack_require__(/*! ../../cardprovision/entities/cardprovision.entity */ "./apps/batches/src/cardprovision/entities/cardprovision.entity.ts");
let Provision = class Provision {
};
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
    (0, typeorm_1.OneToMany)(() => cardprovision_entity_1.CardProvision, (cardProvision) => cardProvision.provision, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Provision.prototype, "cardProvision", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Provision.prototype, "provisionedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.Batch),
    __metadata("design:type", typeof (_b = typeof entities_1.Batch !== "undefined" && entities_1.Batch) === "function" ? _b : Object)
], Provision.prototype, "batch", void 0);
Provision = __decorate([
    (0, typeorm_1.Entity)('provision')
], Provision);
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProvisionController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const provision_service_1 = __webpack_require__(/*! ./provision.service */ "./apps/batches/src/provision/provision.service.ts");
const create_provision_dto_1 = __webpack_require__(/*! ./dto/create-provision.dto */ "./apps/batches/src/provision/dto/create-provision.dto.ts");
const update_provision_dto_1 = __webpack_require__(/*! ./dto/update-provision.dto */ "./apps/batches/src/provision/dto/update-provision.dto.ts");
const batch_service_1 = __webpack_require__(/*! ../batch/batch.service */ "./apps/batches/src/batch/batch.service.ts");
let ProvisionController = class ProvisionController {
    constructor(provisionService, batchService) {
        this.provisionService = provisionService;
        this.batchService = batchService;
    }
    async create(createProvisionDto) {
        try {
            const currentBatch = await this.batchService.findOne(createProvisionDto.batchNo);
            createProvisionDto.batch = currentBatch;
            return await this.provisionService.createProvision(createProvisionDto);
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    findAll(batchNo) {
        return this.provisionService.findAll(batchNo);
    }
    findOne(id) {
        return this.provisionService.findOne(+id);
    }
    search(batchNo, jobNo, lassraId, page = 1, pageSize = 10) {
        if (!batchNo && !jobNo && !lassraId)
            throw new common_1.HttpException('Provide bathcNo, JobNo or lassraId', common_1.HttpStatus.BAD_REQUEST);
        return this.provisionService.search(batchNo, jobNo, lassraId, page, pageSize);
    }
    update(id, updateProvisionDto) {
        return this.provisionService.update(+id, updateProvisionDto);
    }
    remove(id) {
        return this.provisionService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof create_provision_dto_1.CreateProvisionDto !== "undefined" && create_provision_dto_1.CreateProvisionDto) === "function" ? _c : Object]),
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
    __metadata("design:paramtypes", [String, typeof (_d = typeof update_provision_dto_1.UpdateProvisionDto !== "undefined" && update_provision_dto_1.UpdateProvisionDto) === "function" ? _d : Object]),
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
    __metadata("design:paramtypes", [typeof (_a = typeof provision_service_1.ProvisionService !== "undefined" && provision_service_1.ProvisionService) === "function" ? _a : Object, typeof (_b = typeof batch_service_1.BatchService !== "undefined" && batch_service_1.BatchService) === "function" ? _b : Object])
], ProvisionController);
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const provision_service_1 = __webpack_require__(/*! ./provision.service */ "./apps/batches/src/provision/provision.service.ts");
const provision_controller_1 = __webpack_require__(/*! ./provision.controller */ "./apps/batches/src/provision/provision.controller.ts");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
const provision_entity_1 = __webpack_require__(/*! ./entities/provision.entity */ "./apps/batches/src/provision/entities/provision.entity.ts");
const cardprovision_entity_1 = __webpack_require__(/*! ../cardprovision/entities/cardprovision.entity */ "./apps/batches/src/cardprovision/entities/cardprovision.entity.ts");
const batch_service_1 = __webpack_require__(/*! ../batch/batch.service */ "./apps/batches/src/batch/batch.service.ts");
let ProvisionModule = class ProvisionModule {
};
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
        ],
        controllers: [provision_controller_1.ProvisionController],
        providers: [provision_service_1.ProvisionService, batch_service_1.BatchService],
    })
], ProvisionModule);
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProvisionService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const provision_entity_1 = __webpack_require__(/*! ./entities/provision.entity */ "./apps/batches/src/provision/entities/provision.entity.ts");
const entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
let ProvisionService = class ProvisionService {
    constructor(provisionRepository, cardRepository, dataSource) {
        this.provisionRepository = provisionRepository;
        this.cardRepository = cardRepository;
        this.dataSource = dataSource;
    }
    async createProvision(createProvisionDto) {
        try {
            await this.dataSource.manager.transaction(async (transactionManager) => {
                const newProvision = this.provisionRepository.create(createProvisionDto);
                await transactionManager.save(newProvision);
                for (const card of createProvisionDto.cardProvision) {
                    const cardtoUpdate = await this.cardRepository.findOne({
                        where: { lassraId: card.lassraId },
                    });
                    if (cardtoUpdate.status < 1) {
                        throw new Error('Card has not been received');
                    }
                    if (cardtoUpdate && cardtoUpdate.status === 1) {
                        (await cardtoUpdate).status = 2;
                        await transactionManager.save(cardtoUpdate);
                    }
                }
                return newProvision;
            });
            return 'Provision created successfully';
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    async findAll(batchNo) {
        try {
            if (batchNo) {
                return await this.provisionRepository.find({
                    where: { batchNo },
                });
            }
            else {
                return await this.provisionRepository.find({});
            }
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    async findOne(id) {
        try {
            const provision = await this.provisionRepository.find({
                where: { id: +id },
                relations: ['batch'],
            });
            return provision[0];
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async search(batchNo, jobNo, lassraId, page, pageSize) {
        try {
            const provision = await this.provisionRepository
                .createQueryBuilder('provision')
                .leftJoinAndSelect('provision.batch', 'batch')
                .leftJoinAndSelect('provision.cardProvision', 'cardProvision')
                .where('provision.batchNo = :batchNo', { batchNo })
                .orWhere('batch.bankJobNo LIKE :jobNo', { jobNo: `%${jobNo}%` })
                .orWhere('cardProvision.lassraId = :lassraId', {
                lassraId,
            })
                .select([
                'provision.provisionedBy',
                'provision.provisionedAt',
                'provision.batchNo',
                'provision.id',
                'provision.createdAt',
                'provision.cardProvision',
            ])
                .orderBy('provision.id', 'ASC')
                .addGroupBy('provision.id')
                .skip((page - 1) * pageSize)
                .take(pageSize)
                .getManyAndCount();
            return provision;
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    update(id, updateProvisionDto) {
        return `This action updates a #${id} provision`;
    }
    remove(id) {
        return `This action removes a #${id} provision`;
    }
};
ProvisionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(provision_entity_1.Provision)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.Card)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _c : Object])
], ProvisionService);
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReceiptController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const receipt_service_1 = __webpack_require__(/*! ./receipt.service */ "./apps/batches/src/receipt/receipt.service.ts");
const batch_service_1 = __webpack_require__(/*! ../batch/batch.service */ "./apps/batches/src/batch/batch.service.ts");
const dto_1 = __webpack_require__(/*! ../dto */ "./apps/batches/src/dto/index.ts");
let ReceiptController = class ReceiptController {
    constructor(receiptService, batchService) {
        this.receiptService = receiptService;
        this.batchService = batchService;
    }
    async createReceipt(createReceiptDto) {
        try {
            const currentBatch = await this.batchService.findOne(createReceiptDto.batchNo);
            createReceiptDto.batch = currentBatch;
            return await this.receiptService.createReceipt(createReceiptDto);
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    findAll(batchNo) {
        return this.receiptService.findAll(batchNo);
    }
    search(batchNo, jobNo, lassraId, page = 1, pageSize = 10) {
        if (!batchNo && !jobNo && !lassraId)
            throw new common_1.HttpException('Provide bathcNo, JobNo or lassraId', common_1.HttpStatus.BAD_REQUEST);
        return this.receiptService.search(batchNo, jobNo, lassraId, page, pageSize);
    }
    findOne(id) {
        return this.receiptService.findOne(id);
    }
    update(id, updateReceiptDto) {
        return this.receiptService.update(+id, updateReceiptDto);
    }
    remove(id) {
        return this.receiptService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.CreateReceiptDto !== "undefined" && dto_1.CreateReceiptDto) === "function" ? _c : Object]),
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
    __metadata("design:paramtypes", [String, typeof (_d = typeof dto_1.UpdateReceiptDto !== "undefined" && dto_1.UpdateReceiptDto) === "function" ? _d : Object]),
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
    __metadata("design:paramtypes", [typeof (_a = typeof receipt_service_1.ReceiptService !== "undefined" && receipt_service_1.ReceiptService) === "function" ? _a : Object, typeof (_b = typeof batch_service_1.BatchService !== "undefined" && batch_service_1.BatchService) === "function" ? _b : Object])
], ReceiptController);
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const receipt_service_1 = __webpack_require__(/*! ./receipt.service */ "./apps/batches/src/receipt/receipt.service.ts");
const receipt_controller_1 = __webpack_require__(/*! ./receipt.controller */ "./apps/batches/src/receipt/receipt.controller.ts");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const cardreceipt_entity_1 = __webpack_require__(/*! ../entities/cardreceipt.entity */ "./apps/batches/src/entities/cardreceipt.entity.ts");
const batch_service_1 = __webpack_require__(/*! ../batch/batch.service */ "./apps/batches/src/batch/batch.service.ts");
const batch_module_1 = __webpack_require__(/*! ../batch/batch.module */ "./apps/batches/src/batch/batch.module.ts");
const entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
let ReceiptModule = class ReceiptModule {
};
ReceiptModule = __decorate([
    (0, common_1.Module)({
        imports: [
            common_2.DatabaseModule,
            typeorm_1.TypeOrmModule.forFeature([entities_1.Receipt, entities_1.Batch, entities_1.Card, cardreceipt_entity_1.CardReceipt]),
            (0, common_1.forwardRef)(() => batch_module_1.BatchModule),
        ],
        controllers: [receipt_controller_1.ReceiptController],
        providers: [receipt_service_1.ReceiptService, batch_service_1.BatchService],
    })
], ReceiptModule);
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReceiptService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
const repository_1 = __webpack_require__(/*! ../repository */ "./apps/batches/src/repository/index.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let ReceiptService = class ReceiptService {
    constructor(receiptRepository, cardRepository, dataSource) {
        this.receiptRepository = receiptRepository;
        this.cardRepository = cardRepository;
        this.dataSource = dataSource;
    }
    async createReceipt(createReceiptDto) {
        try {
            const queryBuilder = await this.dataSource.manager.transaction(async (transactionManager) => {
                const newReceipt = this.receiptRepository.create(createReceiptDto);
                await transactionManager.save(newReceipt);
                for (const card of createReceiptDto.cardReceipt) {
                    const cardtoUpdate = await this.cardRepository.findOne({
                        where: { lassraId: card.lassraId },
                    });
                    if (cardtoUpdate) {
                        (await cardtoUpdate).status = 1;
                        await transactionManager.save(cardtoUpdate);
                    }
                }
                return newReceipt;
            });
            return 'Receipt created successfully';
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    async findAll(batchNo) {
        try {
            if (batchNo) {
                return await this.receiptRepository.find({
                    where: { batchNo },
                });
            }
            else {
                return await this.receiptRepository.find({});
            }
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async findOne(id) {
        try {
            const receipts = await this.receiptRepository.find({
                where: { id: +id },
                relations: ['batch'],
            });
            return receipts[0];
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async search(batchNo, jobNo, lassraId, page, pageSize) {
        const receipts = await this.receiptRepository
            .createQueryBuilder('receipt')
            .leftJoinAndSelect('receipt.batch', 'batch')
            .leftJoinAndSelect('receipt.cardReceipt', 'cardReceipt')
            .where('receipt.batchNo = :batchNo', { batchNo })
            .orWhere('batch.bankJobNo LIKE :jobNo', { jobNo: `%${jobNo}%` })
            .orWhere('cardReceipt.lassraId = :lassraId', {
            lassraId,
        })
            .select([
            'receipt.receivedBy',
            'receipt.receivedAt',
            'receipt.batchNo',
            'receipt.id',
            'receipt.receivedStatus',
            'receipt.createdAt',
            'receipt.cardReceipt',
        ])
            .orderBy('receipt.id', 'ASC')
            .addGroupBy('receipt.id')
            .skip((page - 1) * pageSize)
            .take(pageSize)
            .getManyAndCount();
        return receipts;
    }
    update(id, updateReceiptDto) {
        return `This action updates a #${id} card`;
    }
    remove(id) {
        return `This action removes a #${id} card`;
    }
};
ReceiptService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Receipt)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.Card)),
    __metadata("design:paramtypes", [typeof (_a = typeof repository_1.ReceiptRepository !== "undefined" && repository_1.ReceiptRepository) === "function" ? _a : Object, typeof (_b = typeof repository_1.CardRepository !== "undefined" && repository_1.CardRepository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _c : Object])
], ReceiptService);
exports.ReceiptService = ReceiptService;


/***/ }),

/***/ "./apps/batches/src/repository/batch.repository.ts":
/*!*********************************************************!*\
  !*** ./apps/batches/src/repository/batch.repository.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BatchRepository = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let BatchRepository = class BatchRepository extends typeorm_1.Repository {
};
BatchRepository = __decorate([
    (0, common_1.Injectable)()
], BatchRepository);
exports.BatchRepository = BatchRepository;


/***/ }),

/***/ "./apps/batches/src/repository/card.repository.ts":
/*!********************************************************!*\
  !*** ./apps/batches/src/repository/card.repository.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardRepository = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let CardRepository = class CardRepository extends typeorm_1.Repository {
};
CardRepository = __decorate([
    (0, common_1.Injectable)()
], CardRepository);
exports.CardRepository = CardRepository;


/***/ }),

/***/ "./apps/batches/src/repository/cardReceipt.repository.ts":
/*!***************************************************************!*\
  !*** ./apps/batches/src/repository/cardReceipt.repository.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardReceiptRepository = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let CardReceiptRepository = class CardReceiptRepository extends typeorm_1.Repository {
};
CardReceiptRepository = __decorate([
    (0, common_1.Injectable)()
], CardReceiptRepository);
exports.CardReceiptRepository = CardReceiptRepository;


/***/ }),

/***/ "./apps/batches/src/repository/index.ts":
/*!**********************************************!*\
  !*** ./apps/batches/src/repository/index.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReceiptRepository = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let ReceiptRepository = class ReceiptRepository extends typeorm_1.Repository {
};
ReceiptRepository = __decorate([
    (0, common_1.Injectable)()
], ReceiptRepository);
exports.ReceiptRepository = ReceiptRepository;


/***/ }),

/***/ "./libs/common/src/auth/index.ts":
/*!***************************************!*\
  !*** ./libs/common/src/auth/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./jwt-auth.guard */ "./libs/common/src/auth/jwt-auth.guard.ts"), exports);


/***/ }),

/***/ "./libs/common/src/auth/jwt-auth.guard.ts":
/*!************************************************!*\
  !*** ./libs/common/src/auth/jwt-auth.guard.ts ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let JwtAuthGuard = class JwtAuthGuard {
    constructor(authClient) {
        this.authClient = authClient;
    }
    canActivate(context) {
        var _a;
        const jwt = (_a = context.switchToHttp().getRequest().cookies) === null || _a === void 0 ? void 0 : _a.Authentication;
        if (!jwt) {
            return false;
        }
    }
};
JwtAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('AUTH_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;


/***/ }),

/***/ "./libs/common/src/database/abstract.repository.ts":
/*!*********************************************************!*\
  !*** ./libs/common/src/database/abstract.repository.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractRepository = void 0;
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
class AbstractRepository {
    constructor(model) {
        this.model = model;
    }
    async create(document) {
        const createDocument = new this.model(Object.assign(Object.assign({}, document), { _id: new mongoose_1.Types.ObjectId() }));
        return (await createDocument.save()).toJSON();
    }
    async findOne(filterQuery) {
        const document = await this.model.findOne(filterQuery, {}, { lean: true });
        if (!document) {
            this.logger.warn('Document not found with filterQuery', filterQuery);
            throw new common_1.NotFoundException('Document not found');
        }
        return document;
    }
    async findOneAndUpdate(filterQuery, update) {
        const document = await this.model.findOneAndUpdate(filterQuery, update, {
            lean: true,
            new: true,
        });
        if (!document) {
            this.logger.warn('Document not found with filterQuery', filterQuery);
            throw new common_1.NotFoundException('DOcument not found');
        }
        return document;
    }
    async find(filterQuery) {
        return this.model.find(filterQuery, {}, { lean: true });
    }
    async findOneAndDelete(filterQuery) {
        const document = await this.model.findOneAndDelete(filterQuery, {
            lean: true,
        });
        if (!document) {
            this.logger.warn('Document not found with filterQuery', filterQuery);
            throw new common_1.NotFoundException('Document not found ');
        }
        return document;
    }
}
exports.AbstractRepository = AbstractRepository;


/***/ }),

/***/ "./libs/common/src/database/abstract.schema.ts":
/*!*****************************************************!*\
  !*** ./libs/common/src/database/abstract.schema.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractDocument = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let AbstractDocument = class AbstractDocument {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId }),
    __metadata("design:type", typeof (_a = typeof mongoose_2.Types !== "undefined" && mongoose_2.Types.ObjectId) === "function" ? _a : Object)
], AbstractDocument.prototype, "_id", void 0);
AbstractDocument = __decorate([
    (0, mongoose_1.Schema)()
], AbstractDocument);
exports.AbstractDocument = AbstractDocument;


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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cache_module_definition_1 = __webpack_require__(/*! @nestjs/common/cache/cache.module-definition */ "@nestjs/common/cache/cache.module-definition");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_config_1 = __webpack_require__(/*! ../../../../typeorm.config */ "./typeorm.config.ts");
let DatabaseModule = class DatabaseModule extends cache_module_definition_1.ConfigurableModuleClass {
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.dataSourceOptions),
        ],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;


/***/ }),

/***/ "./libs/common/src/database/index.ts":
/*!*******************************************!*\
  !*** ./libs/common/src/database/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./database.module */ "./libs/common/src/database/database.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./abstract.repository */ "./libs/common/src/database/abstract.repository.ts"), exports);
__exportStar(__webpack_require__(/*! ./abstract.schema */ "./libs/common/src/database/abstract.schema.ts"), exports);


/***/ }),

/***/ "./libs/common/src/index.ts":
/*!**********************************!*\
  !*** ./libs/common/src/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
__exportStar(__webpack_require__(/*! ./auth */ "./libs/common/src/auth/index.ts"), exports);


/***/ }),

/***/ "./libs/common/src/logger/index.ts":
/*!*****************************************!*\
  !*** ./libs/common/src/logger/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const nestjs_pino_1 = __webpack_require__(/*! nestjs-pino */ "nestjs-pino");
let LoggerModule = class LoggerModule {
};
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
exports.LoggerModule = LoggerModule;


/***/ }),

/***/ "./typeorm.config.ts":
/*!***************************!*\
  !*** ./typeorm.config.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dataSourceOptions = void 0;
const dotenv_1 = __webpack_require__(/*! dotenv */ "dotenv");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
(0, dotenv_1.config)();
const configService = new config_1.ConfigService();
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
const dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports["default"] = dataSource;


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/common/cache/cache.module-definition":
/*!***************************************************************!*\
  !*** external "@nestjs/common/cache/cache.module-definition" ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = require("@nestjs/common/cache/cache.module-definition");

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

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

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

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************************!*\
  !*** ./apps/batches/src/main.ts ***!
  \**********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const nestjs_pino_1 = __webpack_require__(/*! nestjs-pino */ "nestjs-pino");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./apps/batches/src/app.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        snapshot: true,
        cors: true,
    });
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Lasra card tracking Api')
        .setDescription('Api for the card tracking project')
        .addServer('http://localhost:4000/', 'local dev')
        .addTag('Test')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api-docs', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    app.useLogger(app.get(nestjs_pino_1.Logger));
    const configService = app.get(config_1.ConfigService);
    console.log(configService.get('PORT'), 'port');
    await app.listen(configService.get('PORT'));
}
bootstrap();

})();

/******/ })()
;