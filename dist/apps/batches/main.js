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
    appService;
    constructor(appService) {
        this.appService = appService;
    }
};
AppController = __decorate([
    (0, swagger_1.ApiTags)('App'),
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
const retrival_module_1 = __webpack_require__(/*! ./retrival/retrival.module */ "./apps/batches/src/retrival/retrival.module.ts");
const delivery_module_1 = __webpack_require__(/*! ./delivery/delivery.module */ "./apps/batches/src/delivery/delivery.module.ts");
const backup_module_1 = __webpack_require__(/*! ./backup/backup.module */ "./apps/batches/src/backup/backup.module.ts");
const backup_service_1 = __webpack_require__(/*! ./backup/backup.service */ "./apps/batches/src/backup/backup.service.ts");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const users_module_1 = __webpack_require__(/*! ./users/users.module */ "./apps/batches/src/users/users.module.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./apps/batches/src/auth/auth.module.ts");
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
            schedule_1.ScheduleModule.forRoot(),
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
            retrival_module_1.RetrivalModule,
            delivery_module_1.DeliveryModule,
            backup_module_1.BackupModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, config_1.ConfigService, backup_service_1.BackupService],
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

/***/ "./apps/batches/src/auth/RolesGuards/admin.guard.ts":
/*!**********************************************************!*\
  !*** ./apps/batches/src/auth/RolesGuards/admin.guard.ts ***!
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const users_service_1 = __webpack_require__(/*! ../../users/users.service */ "./apps/batches/src/users/users.service.ts");
const role_enum_1 = __webpack_require__(/*! ../../enum/role.enum */ "./apps/batches/src/enum/role.enum.ts");
let AdminGuard = class AdminGuard {
    jwtService;
    usersService;
    constructor(jwtService, usersService) {
        this.jwtService = jwtService;
        this.usersService = usersService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (user.role !== role_enum_1.Role.Admin)
            throw new common_1.UnauthorizedException('Only Admins are allowed to do this operation');
        if (user && user.role === role_enum_1.Role.Admin) {
            return true;
        }
        return false;
    }
};
AdminGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _b : Object])
], AdminGuard);
exports["default"] = AdminGuard;


/***/ }),

/***/ "./apps/batches/src/auth/auth.controller.ts":
/*!**************************************************!*\
  !*** ./apps/batches/src/auth/auth.controller.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const local_auth_guard_1 = __webpack_require__(/*! ./local-auth-guard */ "./apps/batches/src/auth/local-auth-guard.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/batches/src/auth/auth.service.ts");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async login(req, data) {
        return await this.authService.login(req.user);
    }
    // forgotPassword
    // resetpassword
    async logout(req) {
        return req.logout();
    }
};
__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('logout'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ "./apps/batches/src/auth/auth.module.ts":
/*!**********************************************!*\
  !*** ./apps/batches/src/auth/auth.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/batches/src/auth/auth.service.ts");
const local_strategy_1 = __webpack_require__(/*! ./local.strategy */ "./apps/batches/src/auth/local.strategy.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const constants_1 = __webpack_require__(/*! ./constants */ "./apps/batches/src/auth/constants.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const token_service_1 = __webpack_require__(/*! ./token.service */ "./apps/batches/src/auth/token.service.ts");
const session_token_entity_1 = __webpack_require__(/*! ./session-token.entity */ "./apps/batches/src/auth/session-token.entity.ts");
const users_module_1 = __webpack_require__(/*! ../users/users.module */ "./apps/batches/src/users/users.module.ts");
const users_service_1 = __webpack_require__(/*! ../users/users.service */ "./apps/batches/src/users/users.service.ts");
const user_entity_1 = __webpack_require__(/*! ../users/entities/user.entity */ "./apps/batches/src/users/entities/user.entity.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./apps/batches/src/auth/auth.controller.ts");
const jwt_strategy_1 = __webpack_require__(/*! ./jwt.strategy */ "./apps/batches/src/auth/jwt.strategy.ts");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            jwt_1.JwtModule.register({
                global: true,
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '360s' },
            }),
            typeorm_1.TypeOrmModule.forFeature([session_token_entity_1.SessionToken, user_entity_1.User]),
            passport_1.PassportModule.register({ defaultStrategy: 'local' }), // Register Passport with the LocalStrategy
        ],
        exports: [auth_service_1.AuthService],
        providers: [
            auth_service_1.AuthService,
            users_service_1.UsersService,
            config_1.ConfigService,
            local_strategy_1.LocalStrategy,
            jwt_strategy_1.JwtStrategy,
            token_service_1.TokenService,
        ],
        controllers: [auth_controller_1.AuthController], // Provide AuthService, UsersService, and LocalStrategy
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./apps/batches/src/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./apps/batches/src/auth/auth.service.ts ***!
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const users_service_1 = __webpack_require__(/*! ../users/users.service */ "./apps/batches/src/users/users.service.ts");
let AuthService = class AuthService {
    usersService;
    jwtService;
    configService;
    constructor(usersService, jwtService, configService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async validateUser(email, password) {
        const user = await this.usersService.validateUser(email, password); // Pass email as a string // login
        if (user) {
            return user;
        }
        return null;
    }
    async login(user) {
        const payload = { email: user.email, sub: user.id }; // needs to be created in the db
        return { access_token: this.jwtService.sign(payload), user: user };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./apps/batches/src/auth/constants.ts":
/*!********************************************!*\
  !*** ./apps/batches/src/auth/constants.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.jwtConstants = void 0;
exports.jwtConstants = {
    secret: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZW1haWwuY29tIiwicGFzc3dvcmQiOiJKb2huRG9lMSIsImlhdCI6MTUxNjIzOTAyMn0.b3b-2KGJc42jdXYnGnKbizv2mOmjZkp3tk5FDxwqK_c',
};


/***/ }),

/***/ "./apps/batches/src/auth/jwt-auth.guards.ts":
/*!**************************************************!*\
  !*** ./apps/batches/src/auth/jwt-auth.guards.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
};
JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);
exports["default"] = JwtAuthGuard;


/***/ }),

/***/ "./apps/batches/src/auth/jwt.strategy.ts":
/*!***********************************************!*\
  !*** ./apps/batches/src/auth/jwt.strategy.ts ***!
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const constants_1 = __webpack_require__(/*! ./constants */ "./apps/batches/src/auth/constants.ts");
const users_service_1 = __webpack_require__(/*! ../users/users.service */ "./apps/batches/src/users/users.service.ts");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    userService;
    constructor(configService, userService) {
        const jwtSecret = configService.get('JWT_SECRET');
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: constants_1.jwtConstants.secret,
            ignoreExpiration: false,
        });
        this.userService = userService;
    }
    async validate(payload) {
        return await this.userService.findOneUserByEmail(payload.email);
    }
};
JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _b : Object])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),

/***/ "./apps/batches/src/auth/local-auth-guard.ts":
/*!***************************************************!*\
  !*** ./apps/batches/src/auth/local-auth-guard.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let LocalAuthGuard = class LocalAuthGuard extends (0, passport_1.AuthGuard)('local') {
};
LocalAuthGuard = __decorate([
    (0, common_1.Injectable)()
], LocalAuthGuard);
exports.LocalAuthGuard = LocalAuthGuard;


/***/ }),

/***/ "./apps/batches/src/auth/local.strategy.ts":
/*!*************************************************!*\
  !*** ./apps/batches/src/auth/local.strategy.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_local_1 = __webpack_require__(/*! passport-local */ "passport-local");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/batches/src/auth/auth.service.ts");
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    authService;
    constructor(authService) {
        super({ usernameField: 'email' });
        this.authService = authService;
    }
    async validate(email, password) {
        console.log(email, password, 'user....');
        const user = await this.authService.validateUser(email, password);
        console.log(user);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
};
LocalStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;


/***/ }),

/***/ "./apps/batches/src/auth/session-token.entity.ts":
/*!*******************************************************!*\
  !*** ./apps/batches/src/auth/session-token.entity.ts ***!
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionToken = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let SessionToken = class SessionToken {
    id;
    userId;
    token;
    dateTime;
    expiredAt;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SessionToken.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SessionToken.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SessionToken.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], SessionToken.prototype, "dateTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], SessionToken.prototype, "expiredAt", void 0);
SessionToken = __decorate([
    (0, typeorm_1.Entity)()
], SessionToken);
exports.SessionToken = SessionToken;


/***/ }),

/***/ "./apps/batches/src/auth/token.service.ts":
/*!************************************************!*\
  !*** ./apps/batches/src/auth/token.service.ts ***!
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
exports.TokenService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const session_token_entity_1 = __webpack_require__(/*! ./session-token.entity */ "./apps/batches/src/auth/session-token.entity.ts");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
let TokenService = class TokenService {
    sessionTokenRepository;
    constructor(sessionTokenRepository) {
        this.sessionTokenRepository = sessionTokenRepository;
    }
    async create(token) {
        try {
            const newSession = this.sessionTokenRepository.create(token);
            return await this.sessionTokenRepository.save(newSession);
        }
        catch (e) {
            throw new Error('Error creating' + e);
        }
    }
    async checkToken(token) {
        const tokenExist = await this.sessionTokenRepository.findOne({
            where: { token: token },
        });
        if (!tokenExist || tokenExist.expiredAt.getTime() < new Date().getTime()) {
            return false;
        }
        return true;
    }
    async remove(token) {
        try {
            const { id } = await this.sessionTokenRepository.findOne({
                where: { token: token },
            });
            return await this.sessionTokenRepository.delete({ id });
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
};
TokenService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(session_token_entity_1.SessionToken)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], TokenService);
exports.TokenService = TokenService;


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BackupController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const backup_service_1 = __webpack_require__(/*! ./backup.service */ "./apps/batches/src/backup/backup.service.ts");
let BackupController = class BackupController {
    backupService;
    constructor(backupService) {
        this.backupService = backupService;
    }
    async restoreBackup(backupFile) {
        if (!backupFile)
            throw new Error('provide backup file path');
        // const content = fs.readFileSync('backup.sql', 'utf8');
        // console.log(content);
        const result = await this.backupService.restoreBackup(backupFile);
        // const result = await this.backupService.restoreBackup(
        //   '../../../../backup.sql',
        // );
        return { message: 'Backup restored successfully' };
    }
    async createBackup() {
        try {
            await this.backupService.createBackup();
            return { message: 'Backup created successfully' };
        }
        catch (e) {
            console.log(e.message);
        }
    }
};
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BackupCron = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const backup_service_1 = __webpack_require__(/*! ./backup.service */ "./apps/batches/src/backup/backup.service.ts");
let BackupCron = class BackupCron {
    backupService;
    constructor(backupService) {
        this.backupService = backupService;
    }
    // @Cron('0 * * * * *') // runs every minuite for testing
    async createBackup() {
        console.log('Creating backup');
        // return;
        await this.backupService.createBackup();
    }
};
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const backup_service_1 = __webpack_require__(/*! ./backup.service */ "./apps/batches/src/backup/backup.service.ts");
const backup_controller_1 = __webpack_require__(/*! ./backup.controller */ "./apps/batches/src/backup/backup.controller.ts");
const backup_cron_1 = __webpack_require__(/*! ./backup.cron */ "./apps/batches/src/backup/backup.cron.ts");
let BackupModule = class BackupModule {
};
BackupModule = __decorate([
    (0, common_1.Module)({
        controllers: [backup_controller_1.BackupController],
        providers: [backup_service_1.BackupService, backup_cron_1.BackupCron],
    })
], BackupModule);
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BackupService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const childProcess = __importStar(__webpack_require__(/*! child_process */ "child_process"));
// import psql from 'psql';
let BackupService = class BackupService {
    configService;
    dataSource;
    constructor(configService, dataSource) {
        this.configService = configService;
        this.dataSource = dataSource;
    }
    async createBackup() {
        try {
            const username = this.configService.get('POSTGRES_USER');
            const database = this.configService.get('POSTGRES_DATABASE');
            const password = this.configService.get('POSTGRES_PASSWORD');
            const host = this.configService.get('POSTGRES_HOST');
            const port = this.configService.get('POSTGRES_PORT');
            // const command = `pg_dump -U ${username} -h ${host} -p ${port} -d ${database} > backup.sql`;
            const command = `docker exec  card_tracker-postgres-1 pg_dump -U ${username} -h ${host} -p ${port} -d ${database} > backup.sql`;
            const options = {
                env: {
                    PGPASSWORD: password,
                },
            };
            childProcess.exec(command, options, (error, stdout, stderr) => {
                if (error) {
                    throw error;
                }
                console.log('Executing backup');
                if (stdout) {
                    console.log(`pg_dump stdout: ${stdout}`);
                }
                if (stderr) {
                    console.error(`pg_dump stderr: ${stderr}`);
                }
            });
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    }
    // ...
    async restoreBackup(backupFile) {
        try {
            const username = this.configService.get('POSTGRES_USER');
            const database = this.configService.get('POSTGRES_DATABASE');
            const host = this.configService.get('POSTGRES_HOST');
            const port = this.configService.get('POSTGRES_PORT');
            const command = `psql -U ${username} -d ${database} -h ${host} -p ${port} < backup.sql`;
            const ps = childProcess.exec(command, (error, stdout, stderr) => {
                if (error) {
                    throw error;
                }
                console.log('Executing backup');
                console.log(`pg_dump stdout: ${stdout}`);
                console.error(`pg_dump stderr: ${stderr}`);
            });
            ps.stdout.on('data', (data) => {
                console.log(`psql stdout: ${data}`);
            });
            ps.stderr.on('data', (data) => {
                console.error(`psql stderr: ${data}`);
            });
            ps.on('close', (code) => {
                if (code === 0) {
                    console.log(`Backup restored from: ${backupFile}`);
                }
                else {
                    console.error(`Error restoring backup: ${code}`);
                }
            });
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    }
};
BackupService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof typeorm_1.DataSource !== "undefined" && typeorm_1.DataSource) === "function" ? _b : Object])
], BackupService);
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BatchController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const batch_service_1 = __webpack_require__(/*! ./batch.service */ "./apps/batches/src/batch/batch.service.ts");
const axios_1 = __importDefault(__webpack_require__(/*! axios */ "axios"));
const dto_1 = __webpack_require__(/*! ../dto */ "./apps/batches/src/dto/index.ts");
let BatchController = class BatchController {
    batchService;
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
            // console.log(isBatchEmpty, 'Is batch Empty');
            if (!isBatchEmpty.length) {
                throw new Error('Database already seeded');
            }
            const result = await Axios.get('/Batch/GetValidBatches');
            console.log(result, '=result');
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
                        cardLocation: {
                            lassraId: item.lasrraId,
                            currentLocation: 'Head office',
                            collectionCenter: item.contacT_LGA,
                        },
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
        try {
            return this.batchService.search(batchNo, jobNo, lassraId, page, pageSize);
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
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
// import { CardReceipt } from '../entities/cardreceipt.entity';
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
    batchRepository;
    dataSource;
    constructor(batchRepository, dataSource) {
        this.batchRepository = batchRepository;
        this.dataSource = dataSource;
    }
    //(1) create a batch receipt for a batch.
    // one batch can have multiple receipt
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
            // await queryRunner.release();
        }
    }
    async search(batchNo, jobNo, lassraId, page, pageSize) {
        try {
            const queryBuilder = this.batchRepository.createQueryBuilder('batch');
            if (batchNo) {
                queryBuilder.where('batch.batchNo = :batchNo', { batchNo });
            }
            if (jobNo) {
                queryBuilder.orWhere('batch.bankJobNo = :jobNo', { jobNo });
            }
            if (lassraId) {
                queryBuilder.orWhere('batch.cards.lassraId = :lassraId', { lassraId });
            }
            const result = await queryBuilder.getOne();
            if (result) {
                return result;
            }
            else {
                console.log('check external record');
                return;
            }
        }
        catch (err) {
            throw new Error(err);
        }
    }
    // @(2) get All receipt in a ?????
    async findAll() {
        try {
            return await this.batchRepository.find({});
        }
        catch (err) {
            throw new common_1.HttpException(err, common_1.HttpStatus.NOT_FOUND);
        }
    }
    // (3) Get a single batch by batchNo
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const card_service_1 = __webpack_require__(/*! ./card.service */ "./apps/batches/src/card/card.service.ts");
const dto_1 = __webpack_require__(/*! ../dto */ "./apps/batches/src/dto/index.ts");
const jwt_auth_guards_1 = __importDefault(__webpack_require__(/*! ../auth/jwt-auth.guards */ "./apps/batches/src/auth/jwt-auth.guards.ts"));
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let CardController = class CardController {
    cardService;
    constructor(cardService) {
        this.cardService = cardService;
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
        return this.cardService.findAll(batchNo);
    }
    getCardForRetrival(collectionCenter) {
        try {
            if (!!collectionCenter) {
                return this.cardService.getCardForRetrivalByCollectionCenter(collectionCenter);
            }
            return this.cardService.getAllCardForRetrival();
        }
        catch (err) {
            throw new Error(err);
        }
    }
    findOne(lassraId, req) {
        console.log(req.user);
        try {
            return this.cardService.findOne(lassraId);
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.EXPECTATION_FAILED);
        }
    }
    update(id, updateCardDto) {
        return this.cardService.update(+id, updateCardDto);
    }
    //this endpoint is called by external service to update card location information when a fresident request relocation.
    async relocateCard(lassraId, newLocation) {
        return await this.cardService.relocationRequest(lassraId, newLocation);
    }
    async requestDeliveryCard(lassraId) {
        return await this.cardService.requestDelivery(lassraId);
    }
};
__decorate([
    (0, common_1.Get)('count'),
    (0, swagger_1.ApiOperation)({ summary: 'Get counts of cards by status' }),
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
    (0, common_1.UseGuards)(jwt_auth_guards_1.default),
    (0, common_1.Get)('one/:lassraId'),
    __param(0, (0, common_1.Param)('lassraId')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
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
CardController = __decorate([
    (0, swagger_1.ApiTags)('card'),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, common_1.Controller)('card'),
    __metadata("design:paramtypes", [typeof (_b = typeof card_service_1.CardService !== "undefined" && card_service_1.CardService) === "function" ? _b : Object])
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
const location_entity_1 = __webpack_require__(/*! ../dispatch/entities/location.entity */ "./apps/batches/src/dispatch/entities/location.entity.ts");
let CardModule = class CardModule {
};
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
const repository_1 = __webpack_require__(/*! ../repository */ "./apps/batches/src/repository/index.ts");
const location_entity_1 = __webpack_require__(/*! ../dispatch/entities/location.entity */ "./apps/batches/src/dispatch/entities/location.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let CardService = class CardService {
    cardRepository;
    cardLocationRepository;
    constructor(cardRepository, cardLocationRepository) {
        this.cardRepository = cardRepository;
        this.cardLocationRepository = cardLocationRepository;
    }
    //get all the card or get all cards for a batch when you supply batchNo as queryParam
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
    //this method is called by external service to update card location information
    async relocationRequest(lassraId, newLocation) {
        try {
            const cardToReloc = await this.cardLocationRepository.findOne({
                where: { lassraId: lassraId },
            });
            if (!cardToReloc) {
                throw new common_1.NotFoundException('user not found');
            }
            if (cardToReloc.currentLocation === newLocation) {
                throw new Error('The card location is same as current location');
            }
            cardToReloc.requestedRelocation = true;
            cardToReloc.collectionCenter = newLocation;
            return await this.cardLocationRepository.save(cardToReloc);
        }
        catch (e) {
            throw new Error('Requested could nt be completed');
        }
    }
    async requestDelivery(lassraId) {
        try {
            const cardToDeliver = await this.cardLocationRepository.findOne({
                where: { lassraId: lassraId },
            });
            if (!cardToDeliver) {
                throw new common_1.NotFoundException('User not found');
            }
            if (cardToDeliver.requestedDelivery === true) {
                return;
            }
            cardToDeliver.requestedDelivery = true;
            return await this.cardLocationRepository.save(cardToDeliver);
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
    async getCardForRetrivalByCollectionCenter(currentLocation) {
        console.log('selecting requests', currentLocation);
        //this will get card that requested relocation and/or home delivery by collectionCenter
        const queryBuilder = this.cardLocationRepository.createQueryBuilder('cardLocation');
        queryBuilder
            .leftJoinAndSelect('cardLocation.card', 'card')
            .where('cardLocation.currentLocation= :currentLocation', {
            currentLocation,
        })
            .andWhere('(cardLocation.requestedDelivery = :requestedDelivery OR cardLocation.requestedRelocation = :requestedRelocation)', { requestedDelivery: true, requestedRelocation: true });
        return queryBuilder.getMany();
    }
    //get only the list of cards that have not been received
    // default status should be 0 and should be status of cards not received
    async getCardCountByBatchNoAndStatus(batchNo, status) {
        const queryBuilder = await this.cardRepository.createQueryBuilder('card');
        queryBuilder
            .where('card.batchNo =:batchNo', { batchNo })
            .andWhere('card.status =:status', { status });
        return await queryBuilder.getManyAndCount();
    }
    async findOne(lassraId) {
        try {
            const loc = await this.cardLocationRepository.findOne({
                where: { lassraId: lassraId },
            });
            const queryBuilder = this.cardRepository.createQueryBuilder('card');
            queryBuilder.andWhere('card.lassraId =:lassraId', { lassraId });
            const card = await queryBuilder.getOne();
            if (loc) {
                card.cardLocation = loc;
            }
            return await card;
        }
        catch (e) {
            throw new Error(e);
        }
    }
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
    async getAllCardForRetrival() {
        const queryBuilder = this.cardLocationRepository.createQueryBuilder('cardLocation');
        queryBuilder
            .leftJoinAndSelect('cardLocation.card', 'card')
            .where('(cardLocation.requestedDelivery = :requestedDelivery OR cardLocation.requestedRelocation = :requestedRelocation)', { requestedDelivery: true, requestedRelocation: true });
        // return
        const results = await queryBuilder.getMany();
        const groupedResults = {};
        results.forEach((result) => {
            if (!groupedResults[result.currentLocation]) {
                groupedResults[result.currentLocation] = [];
            }
            groupedResults[result.currentLocation].push(result);
        });
        const formattedResults = Object.keys(groupedResults).map((location) => {
            return {
                location,
                data: groupedResults[location],
            };
        });
        return formattedResults;
    }
};
CardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Card)),
    __param(1, (0, typeorm_1.InjectRepository)(location_entity_1.CardLocation)),
    __metadata("design:paramtypes", [typeof (_a = typeof repository_1.CardRepository !== "undefined" && repository_1.CardRepository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardprovisionController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cardprovision_service_1 = __webpack_require__(/*! ./cardprovision.service */ "./apps/batches/src/cardprovision/cardprovision.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
// import { CreateCardProvisionDto } from './dto/create-cardprovision.dto';
// import { UpdateCardprovisionDto } from './dto/update-cardprovision.dto';
let CardprovisionController = class CardprovisionController {
    cardprovisionService;
    constructor(cardprovisionService) {
        this.cardprovisionService = cardprovisionService;
    }
    async create(body) {
        console.log(body);
        const { lassraId, provisionId } = body;
        try {
            const result = await this.cardprovisionService.create(lassraId, +provisionId);
            console.log(result);
            return result;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    findAll(provision_id) {
        return this.cardprovisionService.findAll(provision_id);
    }
};
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
    (0, swagger_1.ApiTags)('cardprovision'),
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
            typeorm_1.TypeOrmModule.forFeature([entities_1.Receipt, entities_1.Batch, provision_entity_1.Provision, cardprovision_entity_1.CardProvision, entities_1.Card]),
            // forwardRef(() => BatchModule),
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardprovisionService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const cardprovision_entity_1 = __webpack_require__(/*! ./entities/cardprovision.entity */ "./apps/batches/src/cardprovision/entities/cardprovision.entity.ts");
const provision_entity_1 = __webpack_require__(/*! ../provision/entities/provision.entity */ "./apps/batches/src/provision/entities/provision.entity.ts");
const entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
let CardprovisionService = class CardprovisionService {
    cardProvisionRepository;
    provisionRepository;
    cardRepository;
    constructor(cardProvisionRepository, provisionRepository, cardRepository) {
        this.cardProvisionRepository = cardProvisionRepository;
        this.provisionRepository = provisionRepository;
        this.cardRepository = cardRepository;
    }
    async create(lassraId, provisionId) {
        console.log('creater cardProvisom', lassraId, provisionId);
        try {
            //find receipt
            const provision = await this.provisionRepository.findOne({
                where: { id: provisionId },
            });
            console.log(provision, 'first comnsole');
            if (provision && provision.provisionStatus === 1) {
                throw new Error('Provision receipt already completed');
            }
            //find card to update
            const cardtoUpdate = await this.cardRepository.findOne({
                where: { lassraId: lassraId },
            });
            console.log(cardtoUpdate, 'second comnsole');
            if (cardtoUpdate && cardtoUpdate.batchNo === provision.batchNo) {
                if (cardtoUpdate.status === 2) {
                    throw new Error('Card already added to the provision receipt');
                }
                cardtoUpdate.status = 2;
                const result = await this.cardRepository.save(cardtoUpdate);
                console.log(result, 'third comnsole');
            }
            else {
                throw new Error('Card not Added');
            }
            const newcardReceipt = await this.cardProvisionRepository.create({
                lassraId,
                provision,
            });
            const result2 = await this.cardProvisionRepository.save(newcardReceipt);
            console.log(result2, 'fourth comnsole');
            return `Card with lassraId: ${lassraId} added to Receipt: ${provisionId} successfully`;
        }
        catch (e) {
            throw new Error(e.message);
        }
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
};
CardprovisionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cardprovision_entity_1.CardProvision)),
    __param(1, (0, typeorm_1.InjectRepository)(provision_entity_1.Provision)),
    __param(2, (0, typeorm_1.InjectRepository)(entities_1.Card)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object])
], CardprovisionService);
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardProvision = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const entities_1 = __webpack_require__(/*! ../../entities */ "./apps/batches/src/entities/index.ts");
const provision_entity_1 = __webpack_require__(/*! ../../provision/entities/provision.entity */ "./apps/batches/src/provision/entities/provision.entity.ts");
let CardProvision = class CardProvision {
    id;
    lassraId;
    card;
    // @Column()
    provision;
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
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const dto_1 = __webpack_require__(/*! ../dto */ "./apps/batches/src/dto/index.ts");
let CardReceiptController = class CardReceiptController {
    cardReceiptService;
    constructor(cardReceiptService) {
        this.cardReceiptService = cardReceiptService;
    }
    async create(body) {
        try {
            const { lassraId, receiptId } = body;
            return await this.cardReceiptService.create(lassraId, receiptId);
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll(receipt_id) {
        return await this.cardReceiptService.findAll(receipt_id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create card receipt' }),
    (0, swagger_1.ApiBody)({ type: dto_1.CreateCardReceiptDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CardReceiptController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Fetch card receipts' }),
    __param(0, (0, common_1.Query)('receipt_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CardReceiptController.prototype, "findAll", null);
CardReceiptController = __decorate([
    (0, swagger_1.ApiTags)('card receipt'),
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
// import { Batch } from 'typeorm';
const receipt_entity_1 = __webpack_require__(/*! ../entities/receipt.entity */ "./apps/batches/src/entities/receipt.entity.ts");
const cardreceipt_entity_1 = __webpack_require__(/*! ../entities/cardreceipt.entity */ "./apps/batches/src/entities/cardreceipt.entity.ts");
const entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
// import { Card } from '../entities/card.entity';
let CardReceiptModule = class CardReceiptModule {
};
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardReceiptService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
// import { UpdateCardReceiptDto } from '../dto/update-cardreceipt.dto';
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
const repository_1 = __webpack_require__(/*! ../repository */ "./apps/batches/src/repository/index.ts");
const receipt_repository_1 = __webpack_require__(/*! ../repository/receipt.repository */ "./apps/batches/src/repository/receipt.repository.ts");
const card_repository_1 = __webpack_require__(/*! ../repository/card.repository */ "./apps/batches/src/repository/card.repository.ts");
let CardReceiptService = class CardReceiptService {
    cardReceiptRepository;
    receiptRepository;
    cardRepository;
    constructor(cardReceiptRepository, receiptRepository, cardRepository) {
        this.cardReceiptRepository = cardReceiptRepository;
        this.receiptRepository = receiptRepository;
        this.cardRepository = cardRepository;
    }
    //creates new card receipt
    async create(lassraId, receiptId) {
        try {
            //find receipt
            const receipt = await this.receiptRepository.findOne({
                where: { id: receiptId },
            });
            if (receipt && receipt.receivedStatus === 1) {
                throw new Error('Receipt already completed');
            }
            //find card to update
            const cardtoUpdate = await this.cardRepository.findOne({
                where: { lassraId: lassraId },
            });
            if (cardtoUpdate && cardtoUpdate.batchNo === receipt.batchNo) {
                if (cardtoUpdate.status === 1) {
                    throw new Error('Card already added to the receipt');
                }
                cardtoUpdate.status = 1;
                await this.cardRepository.save(cardtoUpdate);
                // await transactionManager.save(cardtoUpdate);
            }
            else {
                throw new Error('Card not Added');
            }
            const newcardReceipt = await this.cardReceiptRepository.create({
                lassraId,
                receipt,
            });
            await this.cardReceiptRepository.save(newcardReceipt);
            return `Card with lassraId: ${lassraId} added to Receipt: ${receiptId} successfully`;
        }
        catch (e) {
            throw new Error(e.message);
        }
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
        // return await this.cardReceiptRepository.find({
        //   where: {
        //     receiptId: receipt_id,
        //   },
        // });
    }
};
CardReceiptService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.CardReceipt)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.Receipt)),
    __param(2, (0, typeorm_1.InjectRepository)(entities_1.Card)),
    __metadata("design:paramtypes", [typeof (_a = typeof repository_1.CardReceiptRepository !== "undefined" && repository_1.CardReceiptRepository) === "function" ? _a : Object, typeof (_b = typeof receipt_repository_1.ReceiptRepository !== "undefined" && receipt_repository_1.ReceiptRepository) === "function" ? _b : Object, typeof (_c = typeof card_repository_1.CardRepository !== "undefined" && card_repository_1.CardRepository) === "function" ? _c : Object])
], CardReceiptService);
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeliveryController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const delivery_service_1 = __webpack_require__(/*! ./delivery.service */ "./apps/batches/src/delivery/delivery.service.ts");
const update_delivery_dto_1 = __webpack_require__(/*! ./dto/update-delivery.dto */ "./apps/batches/src/delivery/dto/update-delivery.dto.ts");
const card_service_1 = __webpack_require__(/*! ../card/card.service */ "./apps/batches/src/card/card.service.ts");
const express_1 = __webpack_require__(/*! express */ "express");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let DeliveryController = class DeliveryController {
    deliveryService;
    cardService;
    constructor(deliveryService, cardService) {
        this.deliveryService = deliveryService;
        this.cardService = cardService;
    }
    //This endpoint is used to mark the status of card as collected.
    async collectCard(body, res) {
        const result = await this.cardService.findOne(body.lassraId);
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
    }
    //This endpoint is used to filter or search for delivery others by status,start date and end date range.
    async filterDeliveryOrders(status, start, end) {
        const args = [undefined, undefined, undefined];
        if (status) {
            args[0] = parseInt(status);
        }
        if (start) {
            args[1] = new Date(start);
        }
        if (end) {
            args[2] = new Date(end);
        }
        return await this.deliveryService.findDeliveryByStatus(...args);
    }
    //request by status true/false true for delivery order created and false for not created.
    getRequest(created) {
        return this.deliveryService.getRequestForDelivery(created);
    }
    //This endpoint create a new delivery order
    create(createDeliveryDto) {
        return this.deliveryService.create(createDeliveryDto);
    }
    update(id, updateDeliveryDto) {
        return this.deliveryService.update(+id, updateDeliveryDto);
    }
    completeDelivery(id, response) {
        try {
            response.status(200);
            return this.deliveryService.completeDelivery(+id);
        }
        catch (e) {
            response.status(400).send(e.message);
        }
    }
    updateMany(updateDeliveryDto) {
        // console.log('updateMany');
        return this.deliveryService.updateMany(updateDeliveryDto);
    }
};
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
DeliveryController = __decorate([
    (0, swagger_1.ApiTags)('delivery'),
    (0, common_1.Controller)('delivery'),
    __metadata("design:paramtypes", [typeof (_d = typeof delivery_service_1.DeliveryService !== "undefined" && delivery_service_1.DeliveryService) === "function" ? _d : Object, typeof (_e = typeof card_service_1.CardService !== "undefined" && card_service_1.CardService) === "function" ? _e : Object])
], DeliveryController);
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const delivery_service_1 = __webpack_require__(/*! ./delivery.service */ "./apps/batches/src/delivery/delivery.service.ts");
const delivery_controller_1 = __webpack_require__(/*! ./delivery.controller */ "./apps/batches/src/delivery/delivery.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const location_entity_1 = __webpack_require__(/*! ../dispatch/entities/location.entity */ "./apps/batches/src/dispatch/entities/location.entity.ts");
const entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
const card_service_1 = __webpack_require__(/*! ../card/card.service */ "./apps/batches/src/card/card.service.ts");
const delivery_entity_1 = __webpack_require__(/*! ./entities/delivery.entity */ "./apps/batches/src/delivery/entities/delivery.entity.ts");
let DeliveryModule = class DeliveryModule {
};
DeliveryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([location_entity_1.CardLocation, entities_1.Card, delivery_entity_1.Delivery])],
        controllers: [delivery_controller_1.DeliveryController],
        providers: [delivery_service_1.DeliveryService, card_service_1.CardService],
    })
], DeliveryModule);
exports.DeliveryModule = DeliveryModule;


/***/ }),

/***/ "./apps/batches/src/delivery/delivery.service.ts":
/*!*******************************************************!*\
  !*** ./apps/batches/src/delivery/delivery.service.ts ***!
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
exports.DeliveryService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const location_entity_1 = __webpack_require__(/*! ../dispatch/entities/location.entity */ "./apps/batches/src/dispatch/entities/location.entity.ts");
const delivery_entity_1 = __webpack_require__(/*! ./entities/delivery.entity */ "./apps/batches/src/delivery/entities/delivery.entity.ts");
const entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
let DeliveryService = class DeliveryService {
    cardLocationRepository;
    deliveryRepository;
    cardRepository;
    entityManager;
    constructor(cardLocationRepository, deliveryRepository, cardRepository) {
        this.cardLocationRepository = cardLocationRepository;
        this.deliveryRepository = deliveryRepository;
        this.cardRepository = cardRepository;
    }
    //Can get all cards that requested delivery, all cards whose delivery other
    //has been created OR ALL CARDS whose delivery other has not been created
    async getRequestForDelivery(created) {
        if (created === undefined) {
            return this.getAllCardLocationsWithRequestedDelivery();
        }
        let create;
        if (created === 'false') {
            create = false;
        }
        else if (created === 'true') {
            create = true;
        }
        return create === true
            ? this.getAllCardLocationsRequestWithDeliveryOrder()
            : this.getAllCardLocationsWithNoDelivery();
    }
    async getAllCardLocationsWithRequestedDelivery() {
        return this.cardLocationRepository
            .createQueryBuilder('cardLocation')
            .where('cardLocation.requestedDelivery = true')
            .getMany();
    }
    async isDeliveryOrderCreated(lassraId) {
        const isdeliveryorderCreated = await this.deliveryRepository.findOne({
            where: { lassraId },
        });
        return isdeliveryorderCreated;
    }
    async getAllCardLocationsRequestWithDeliveryOrder() {
        const cards = await this.getAllCardLocationsWithRequestedDelivery();
        const result = await Promise.all(cards.map(async (card) => {
            const isOrdered = await this.isDeliveryOrderCreated(card.lassraId);
            return isOrdered ? card : null;
        }));
        return result.filter((card) => card !== null);
    }
    async getAllCardLocationsWithNoDelivery() {
        const cards = await this.getAllCardLocationsWithRequestedDelivery();
        const result = await Promise.all(cards.map(async (card) => {
            const isOrdered = await this.isDeliveryOrderCreated(card.lassraId);
            return isOrdered ? null : card;
        }));
        return result.filter((card) => card !== null);
    }
    async create(data) {
        try {
            const newOrders = await Promise.all(data.map(async (item) => {
                const location = await this.cardLocationRepository.findOne({
                    where: { lassraId: item.lassraId },
                });
                item.cardLocation = location;
                return item;
            }));
            return await this.deliveryRepository.insert(newOrders);
        }
        catch (err) {
            console.log(err);
            throw new common_1.HttpException(err.message, common_1.HttpStatus.EXPECTATION_FAILED);
        }
    }
    //Find delivery orders by status and a given range by date
    async findDeliveryByStatus(status, start, end) {
        console.log(start, end, status);
        const query = await this.deliveryRepository.createQueryBuilder('delivery');
        if (status !== undefined) {
            console.log('executed 1');
            query.where('delivery.status = :status', { status });
        }
        if (start && end) {
            console.log('executed 2');
            query.andWhere('delivery.created_at BETWEEN :start AND :end', {
                start,
                end,
            });
        }
        else if (start) {
            console.log('executed 3');
            query.andWhere('delivery.created_at >= :start', { start });
        }
        else if (end) {
            query.andWhere('delivery.created_at <= :end', { end });
        }
        // const deliveries =
        return await query.getMany();
        // return deliveries;
    }
    // findAll() {
    //   return `This action returns all delivery`;
    // }
    async update(id, updateDeliveryDto) {
        try {
            const deliveryToUpdate = await this.deliveryRepository.findOne({
                where: { id },
            });
            const newValues = { ...deliveryToUpdate, ...updateDeliveryDto };
            return await this.deliveryRepository.save(newValues);
        }
        catch (err) {
            throw new Error(err);
        }
    }
    //Update a list of cards
    async updateMany(updateList) {
        await this.deliveryRepository.manager.transaction(async (transactionManager) => {
            // Use for...of loop instead of map to handle async/await correctly
            for (const order of updateList) {
                const orderToUpdate = await this.deliveryRepository.findOne({
                    where: { lassraId: order.lassraId },
                });
                if (orderToUpdate) {
                    // Perform the update within the transac
                    orderToUpdate.status = order.status;
                    orderToUpdate.delivery_company = order.delivery_company;
                    orderToUpdate.assigned_to = order.assigned_to;
                    orderToUpdate.given_out_to = order.given_out_to;
                    await transactionManager.save(orderToUpdate);
                }
            }
            // After all updates are processed, save the entire updateList in one go
        });
    }
    async completeDelivery(id) {
        try {
            await this.deliveryRepository.manager.transaction(async (transactionManager) => {
                const orderToUpdate = await transactionManager.findOne(this.deliveryRepository.target, {
                    where: { id },
                });
                if (!orderToUpdate) {
                    throw new Error('No delivery order found');
                }
                orderToUpdate.status = 2;
                orderToUpdate.updated_at = new Date(Date.now()).toISOString();
                await transactionManager.save(this.deliveryRepository.target, orderToUpdate);
                const CardLoc = await transactionManager.findOne(this.cardLocationRepository.target, {
                    where: { lassraId: orderToUpdate.lassraId },
                });
                if (!CardLoc) {
                    throw new Error('No card location found');
                }
                CardLoc.requestedDelivery = false;
                await transactionManager.save(this.cardLocationRepository.target, CardLoc);
                const card = await transactionManager.findOne(this.cardRepository.target, { where: { lassraId: orderToUpdate.lassraId } });
                card.status = 5;
                await transactionManager.save(this.cardRepository.target, card);
            });
            //******Dispatch a message to the external service to update the card status
            return 'Card delivered and received successfully';
        }
        catch (err) {
            throw new Error(err);
        }
    }
};
DeliveryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(location_entity_1.CardLocation)),
    __param(1, (0, typeorm_1.InjectRepository)(delivery_entity_1.Delivery)),
    __param(2, (0, typeorm_1.InjectRepository)(entities_1.Card)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object])
], DeliveryService);
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateDeliveryDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const location_entity_1 = __webpack_require__(/*! ../../dispatch/entities/location.entity */ "./apps/batches/src/dispatch/entities/location.entity.ts");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class CreateDeliveryDto {
    lassraId;
    created_by;
    status; // 0: default, 1: out for delivery, 2: delivered, 3: not delivered
    delivery_company; //should be string
    assigned_to;
    given_out_to;
    cardLocation;
}
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
    (0, class_transformer_1.Type)(() => location_entity_1.CardLocation),
    __metadata("design:type", typeof (_a = typeof location_entity_1.CardLocation !== "undefined" && location_entity_1.CardLocation) === "function" ? _a : Object)
], CreateDeliveryDto.prototype, "cardLocation", void 0);
exports.CreateDeliveryDto = CreateDeliveryDto;


/***/ }),

/***/ "./apps/batches/src/delivery/dto/update-delivery.dto.ts":
/*!**************************************************************!*\
  !*** ./apps/batches/src/delivery/dto/update-delivery.dto.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateDeliveryDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const create_delivery_dto_1 = __webpack_require__(/*! ./create-delivery.dto */ "./apps/batches/src/delivery/dto/create-delivery.dto.ts");
class UpdateDeliveryDto extends (0, swagger_1.PartialType)(create_delivery_dto_1.CreateDeliveryDto) {
    id;
    name;
    description;
}
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Delivery = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const location_entity_1 = __webpack_require__(/*! ../../dispatch/entities/location.entity */ "./apps/batches/src/dispatch/entities/location.entity.ts");
let Delivery = class Delivery {
    id;
    lassraId;
    created_by;
    status; // 0: order created, 1: out for delivery, 2: delivered, 3: not delivered
    delivery_company; //should be string
    assigned_to;
    given_out_to;
    delivered_at;
    not_delivered_reason;
    created_at;
    // @Column({ nullable: true })
    updated_at;
    cardLocation;
};
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
    (0, typeorm_1.OneToOne)(() => location_entity_1.CardLocation, (cardLocation) => cardLocation),
    (0, typeorm_1.JoinColumn)({ name: 'lassraId', referencedColumnName: 'lassraId' }),
    __metadata("design:type", typeof (_b = typeof location_entity_1.CardLocation !== "undefined" && location_entity_1.CardLocation) === "function" ? _b : Object)
], Delivery.prototype, "cardLocation", void 0);
Delivery = __decorate([
    (0, typeorm_1.Entity)()
], Delivery);
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DispatchController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const dispatch_service_1 = __webpack_require__(/*! ./dispatch.service */ "./apps/batches/src/dispatch/dispatch.service.ts");
const create_dispatch_dto_1 = __webpack_require__(/*! ./dto/create-dispatch.dto */ "./apps/batches/src/dispatch/dto/create-dispatch.dto.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const location_entity_1 = __webpack_require__(/*! ./entities/location.entity */ "./apps/batches/src/dispatch/entities/location.entity.ts");
const entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let DispatchController = class DispatchController {
    dispatchService;
    cardLocationRepository;
    cardRepository;
    constructor(dispatchService, cardLocationRepository, cardRepository) {
        this.dispatchService = dispatchService;
        this.cardLocationRepository = cardLocationRepository;
        this.cardRepository = cardRepository;
    }
    create(createDispatchDto) {
        return this.dispatchService.createDispatch(createDispatchDto);
    }
    async addCardToDispatch(data) {
        const { lassraId, dispatchId } = data;
        try {
            return await this.dispatchService.addCardToDispatch(lassraId, dispatchId);
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async removeCardToDispatch(data) {
        const { id, dispatchId } = data;
        try {
            return await this.dispatchService.removeCardToDispatch(id, dispatchId);
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async seedcardLocation() {
        console.log('seeding started');
        try {
            const seed = await this.cardLocationRepository.find({});
            if (seed.length)
                throw new Error('Locations seeded');
            const cards = await this.cardRepository.find({});
            const locationsData = cards.map((card) => ({
                lassraId: card.lassraId,
                currentLocation: 'Head office',
                collectionCenter: card.contact_LGA,
                requestedDelivery: false,
                previousLocations: 'head',
                card,
            }));
            for (const x of locationsData) {
                const newLocData = this.cardLocationRepository.create(x);
                await this.cardLocationRepository.save(newLocData);
            }
            return 'seeding successful';
        }
        catch (e) {
            throw new common_1.HttpException('Database already seeded', common_1.HttpStatus.FORBIDDEN);
        }
    }
    getCardForDispatch(batchNo, lassraId, collectionCenter) {
        // console.log(batchNo, collectionCenter);
        try {
            return this.dispatchService.getCardforDispatch(batchNo, lassraId, collectionCenter);
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        return await this.dispatchService.findAll();
    }
    findOne(id) {
        try {
            return this.dispatchService.findOne(+id);
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.EXPECTATION_FAILED);
        }
    }
    async findOneCard(id, lassraId) {
        console.log(id);
        return await this.dispatchService.findOneCardDispatch(+id, lassraId);
    }
    update(id, updateDispatchDto) {
        try {
            return this.dispatchService.ackDispatch(updateDispatchDto, +id);
            // return this.dispatchService.updateDispatch(updateDispatchDto, +id);
        }
        catch (e) {
            throw new Error(e);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_dispatch_dto_1.CreateDispatchDto !== "undefined" && create_dispatch_dto_1.CreateDispatchDto) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], DispatchController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('addcard'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DispatchController.prototype, "addCardToDispatch", null);
__decorate([
    (0, common_1.Post)('remove'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DispatchController.prototype, "removeCardToDispatch", null);
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
DispatchController = __decorate([
    (0, swagger_1.ApiTags)('dispatch'),
    (0, common_1.Controller)('dispatch'),
    __param(1, (0, typeorm_1.InjectRepository)(location_entity_1.CardLocation)),
    __param(2, (0, typeorm_1.InjectRepository)(entities_1.Card)),
    __metadata("design:paramtypes", [typeof (_c = typeof dispatch_service_1.DispatchService !== "undefined" && dispatch_service_1.DispatchService) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object, typeof (_e = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _e : Object])
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
const cardDispatch_entity_1 = __webpack_require__(/*! ./entities/cardDispatch.entity */ "./apps/batches/src/dispatch/entities/cardDispatch.entity.ts");
const dispatch_entity_1 = __webpack_require__(/*! ./entities/dispatch.entity */ "./apps/batches/src/dispatch/entities/dispatch.entity.ts");
const location_entity_1 = __webpack_require__(/*! ./entities/location.entity */ "./apps/batches/src/dispatch/entities/location.entity.ts");
// import { ClientsModule, Transport } from '@nestjs/microservices';
let DispatchModule = class DispatchModule {
};
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
var DispatchService_1, _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DispatchService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const dispatch_entity_1 = __webpack_require__(/*! ./entities/dispatch.entity */ "./apps/batches/src/dispatch/entities/dispatch.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const location_entity_1 = __webpack_require__(/*! ./entities/location.entity */ "./apps/batches/src/dispatch/entities/location.entity.ts");
const cardDispatch_entity_1 = __webpack_require__(/*! ./entities/cardDispatch.entity */ "./apps/batches/src/dispatch/entities/cardDispatch.entity.ts");
const card_repository_1 = __webpack_require__(/*! ../repository/card.repository */ "./apps/batches/src/repository/card.repository.ts");
const entities_1 = __webpack_require__(/*! ../entities */ "./apps/batches/src/entities/index.ts");
const typeorm_3 = __webpack_require__(/*! typeorm */ "typeorm");
let DispatchService = DispatchService_1 = class DispatchService {
    dispatchRepository;
    cardDispatchRepository;
    cardRepository;
    cardLocationRepository;
    dataSource;
    channelWrapper;
    logger = new common_1.Logger(DispatchService_1.name);
    constructor(dispatchRepository, cardDispatchRepository, cardRepository, cardLocationRepository, dataSource) {
        this.dispatchRepository = dispatchRepository;
        this.cardDispatchRepository = cardDispatchRepository;
        this.cardRepository = cardRepository;
        this.cardLocationRepository = cardLocationRepository;
        this.dataSource = dataSource;
    }
    async UpdateCardRelocationStatus(data) {
        try {
            const reqCard = await this.cardLocationRepository.findOneBy({
                lassraId: data.lassraId,
            });
            if (reqCard) {
                reqCard.requestedRelocation = true;
                reqCard.collectionCenter = data.newCollectionCenter;
                await this.cardLocationRepository.save(reqCard);
            }
        }
        catch (e) {
            throw new Error(e);
        }
    }
    // (1)
    async getCardforDispatch(batchNo, lassraId, collectionCenter) {
        const status = 2;
        const currentLocation = 'Head office';
        if (batchNo > 0 && collectionCenter) {
            const searchresult = await this.cardLocationRepository
                .createQueryBuilder('cardLocation')
                .leftJoinAndSelect('cardLocation.card', 'card')
                .where('card.status = :status', { status })
                .andWhere('cardLocation.currentLocation = :currentLocation', {
                currentLocation,
            })
                .andWhere('cardLocation.collectionCenter = :collectionCenter', {
                collectionCenter,
            })
                .select(['cardLocation.lassraId', 'cardLocation.collectionCenter'])
                .getMany();
            return searchresult;
        }
        else if (lassraId) {
            return await this.cardLocationRepository.find({
                where: { lassraId, currentLocation },
                select: ['lassraId', 'collectionCenter'],
            });
        }
        else if (batchNo < 1 && collectionCenter) {
            const searchresult = await this.cardLocationRepository
                .createQueryBuilder('cardLocation')
                .leftJoinAndSelect('cardLocation.card', 'card')
                .where('card.status= :status', { status })
                .andWhere('cardLocation.collectionCenter = :collectionCenter', {
                collectionCenter,
            })
                .andWhere('cardLocation.currentLocation= :currentLocation', {
                currentLocation,
            })
                .select(['cardLocation.lassraId', 'cardLocation.collectionCenter'])
                .getMany();
            return searchresult;
        }
    }
    //(2)Gett all cards
    async createDispatch(createDispatchDto) {
        const DispData = {
            ...createDispatchDto,
        };
        try {
            const newDispatch = await this.dispatchRepository.create(DispData);
            return await this.dispatchRepository.save(newDispatch);
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    async addCardToDispatch(lassraId, dispatchId) {
        try {
            const dispatchOrder = await this.dispatchRepository.findOne({
                where: {
                    id: dispatchId,
                },
            });
            if (dispatchOrder.dispatchStatus !== 0) {
                throw new Error(`Cannot add card to dispatch that is prepared`);
            }
            else {
                const cardDispatch = this.cardDispatchRepository.create({
                    lassraId,
                    destination: dispatchOrder.destination,
                    dispatchStatus: 0,
                    dispatch: dispatchOrder,
                });
                const result = await this.cardDispatchRepository.save(cardDispatch);
                console.log(cardDispatch, result, 'from creat dispatch');
                return result;
            }
        }
        catch (e) {
            console.log(e);
            throw new Error(e.massage);
        }
    }
    async removeCardToDispatch(id, dispatchId) {
        console.log(id, dispatchId);
        try {
            const dispatchOrder = await this.dispatchRepository.findOneBy({
                id: dispatchId,
            });
            if (!dispatchOrder) {
                throw new Error('Dispatch order not found');
            }
            if (dispatchOrder.dispatchStatus !== 0) {
                throw new Error('Dispatched preparation completed already');
            }
            const cardDispatch = await this.cardDispatchRepository.findOneBy({ id });
            if (!cardDispatch) {
                throw new Error('Card dispatch not found');
            }
            return await this.cardDispatchRepository.remove(cardDispatch);
        }
        catch (e) {
            console.log(e);
            throw new Error(e.message);
        }
    }
    async ackDispatch(updateDispatchDto, id) {
        const dispatchToUpdate = await this.dispatchRepository.findOne({
            where: { id },
            relations: ['cardDispatch'],
        });
        if (!dispatchToUpdate) {
            throw new common_1.NotFoundException('Dispatch order  not found');
        }
        if (dispatchToUpdate.dispatchStatus === 1) {
            throw new common_1.ConflictException('Dispatch already acknowledged.');
        }
        try {
            const queryBuilder = await this.dispatchRepository.manager.transaction(async (transactionManager) => {
                dispatchToUpdate.acknowledgedAt = updateDispatchDto.acknowledgedAt;
                dispatchToUpdate.acknowledgedBy = updateDispatchDto.acknowledgedBy;
                dispatchToUpdate.dispatchStatus = 1;
                dispatchToUpdate.cardDispatch.forEach(async (cardDispatch) => {
                    const currentCard = updateDispatchDto.cardDispatch.find((card) => card.lassraId === cardDispatch.lassraId);
                    if (currentCard) {
                        cardDispatch.destination = currentCard.destination;
                        cardDispatch.dispatchStatus = 1;
                        const newLocation = await this.cardLocationRepository.findOne({
                            where: { lassraId: currentCard.lassraId },
                        });
                        if (newLocation) {
                            newLocation.currentLocation = newLocation.collectionCenter;
                            await this.cardLocationRepository.save(newLocation);
                        }
                        else {
                            throw new Error('card location detail not found');
                        }
                        return cardDispatch;
                    }
                    else {
                        return cardDispatch;
                    }
                });
                const updated = await this.dispatchRepository.save(dispatchToUpdate);
                await transactionManager.save(updated);
            });
            return 'updated successfully';
        }
        catch (e) {
            throw new Error('not ccompleted');
        }
    }
    // (4)
    async findAll() {
        try {
            return await this.dispatchRepository.find({});
        }
        catch (e) {
            throw new Error(e);
        }
    }
    // (5)
    async findOneCardDispatch(id, lassraId) {
        const dispatch = await this.dispatchRepository.find({
            where: {
                id,
            },
        });
        try {
            if (dispatch) {
                return await this.cardDispatchRepository.find({
                    where: { dispatch, lassraId: lassraId },
                });
            }
        }
        catch (e) {
            throw new Error('Error: ' + e.message);
        }
    }
    // (6)
    async findOne(id) {
        try {
            const oneDispatch = await this.dispatchRepository.find({
                where: { id },
                relations: ['cardDispatch'],
            });
            return oneDispatch[0];
        }
        catch (e) {
            throw new Error(e);
        }
    }
};
DispatchService = DispatchService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(dispatch_entity_1.Dispatch)),
    __param(1, (0, typeorm_1.InjectRepository)(cardDispatch_entity_1.CardDispatch)),
    __param(2, (0, typeorm_1.InjectRepository)(entities_1.Card)),
    __param(3, (0, typeorm_1.InjectRepository)(location_entity_1.CardLocation)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof card_repository_1.CardRepository !== "undefined" && card_repository_1.CardRepository) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object, typeof (_e = typeof typeorm_3.DataSource !== "undefined" && typeorm_3.DataSource) === "function" ? _e : Object])
], DispatchService);
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCardDispatchDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const create_dispatch_dto_1 = __webpack_require__(/*! ./create-dispatch.dto */ "./apps/batches/src/dispatch/dto/create-dispatch.dto.ts");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class CreateCardDispatchDto {
    lassraId;
    // @IsNotEmpty()
    destination;
    dispatchStatus; //0 is initial,1 is out for dispatch,2 is dispatched
    dispatch;
}
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
    (0, class_transformer_1.Type)(() => create_dispatch_dto_1.CreateDispatchDto),
    __metadata("design:type", typeof (_a = typeof create_dispatch_dto_1.CreateDispatchDto !== "undefined" && create_dispatch_dto_1.CreateDispatchDto) === "function" ? _a : Object)
], CreateCardDispatchDto.prototype, "dispatch", void 0);
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateDispatchDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const create_card_dispatch_dto_1 = __webpack_require__(/*! ./create-card-dispatch.dto */ "./apps/batches/src/dispatch/dto/create-card-dispatch.dto.ts");
class CreateDispatchDto {
    destination;
    dispatchStatus; //0 is initiated,1 =created,2= out for dispatch,3 is dispatched, 4= cancelled
    createdBy;
    createdAt;
    dispatchedAt;
    acknowledgedAt;
    acknowledgedBy;
    // @IsNotEmpty()
    dispatcher;
    cardDispatch;
}
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
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateDispatchDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CreateDispatchDto.prototype, "dispatchedAt", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
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
    (0, class_transformer_1.Type)(() => create_card_dispatch_dto_1.CreateCardDispatchDto),
    __metadata("design:type", Array)
], CreateDispatchDto.prototype, "cardDispatch", void 0);
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardDispatch = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const dispatch_entity_1 = __webpack_require__(/*! ./dispatch.entity */ "./apps/batches/src/dispatch/entities/dispatch.entity.ts");
let CardDispatch = class CardDispatch {
    id;
    lassraId;
    destination;
    dispatchStatus; //0 is initial,1 is out for dispatch,2 is dispatched
    // @Unique(['lassraId', 'dispatchId'])
    // @JoinColumn({ name: 'dispatchId' })
    dispatch;
};
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
    __metadata("design:type", Number)
], CardDispatch.prototype, "dispatchStatus", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => dispatch_entity_1.Dispatch),
    __metadata("design:type", typeof (_a = typeof dispatch_entity_1.Dispatch !== "undefined" && dispatch_entity_1.Dispatch) === "function" ? _a : Object)
], CardDispatch.prototype, "dispatch", void 0);
CardDispatch = __decorate([
    (0, typeorm_1.Entity)()
], CardDispatch);
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
const cardDispatch_entity_1 = __webpack_require__(/*! ./cardDispatch.entity */ "./apps/batches/src/dispatch/entities/cardDispatch.entity.ts");
let Dispatch = class Dispatch {
    id;
    destination;
    dispatchStatus; //0 is initial,1 is ready for dispatch,2 is out for dispatch,3 dispatched, 4 cancelled
    createdBy;
    //
    createdAt = new Date();
    //
    dispatchedAt;
    //
    acknowledgedAt;
    acknowledgedBy;
    dispatcher;
    cardDispatch;
};
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
    (0, typeorm_1.OneToMany)(() => cardDispatch_entity_1.CardDispatch, (cardDispatch) => cardDispatch.dispatch, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Dispatch.prototype, "cardDispatch", void 0);
Dispatch = __decorate([
    (0, typeorm_1.Entity)()
], Dispatch);
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
let CardLocation = class CardLocation {
    id;
    currentLocation;
    collectionCenter;
    requestedDelivery;
    requestedRelocation;
    previousLocations;
    lassraId;
    card;
};
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
    (0, typeorm_1.OneToOne)(() => entities_1.Card),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", typeof (_a = typeof entities_1.Card !== "undefined" && entities_1.Card) === "function" ? _a : Object)
], CardLocation.prototype, "card", void 0);
CardLocation = __decorate([
    (0, typeorm_1.Entity)()
], CardLocation);
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
    // @ApiProperty({
    //   example: 5,
    //   required: true,
    // })
    count;
    // @IsNumber()
    // @IsNotEmpty()
    // @Type(() => Number)
    // @ApiProperty({
    //   example: 30,
    //   required: true,
    // })
    // not_produced: number;
    // @IsNumber()
    // @IsNotEmpty()
    // @Type(() => Number)
    // @ApiProperty({
    //   example: 2470,
    //   required: true,
    // })
    // produced: number;
    // @ApiProperty({
    //   example: '32',
    //   required: true,
    // })
    batchNo;
    // @IsNotEmpty()
    // @ApiProperty({
    //   example: 'Shola',
    //   required: true,
    // })
    name;
    // @IsNotEmpty()
    // @ApiProperty({
    //   example: 'Very usique descriptions of batch',
    //   required: true,
    // })
    description;
    // @ApiProperty({
    //   example: 2500,
    //   required: true,
    // })
    noRecords;
    // @IsNotEmpty()
    // @ApiProperty({
    //   example: '5hskfkfher',
    //   required: true,
    // })
    perso;
    // @ApiProperty({
    //   example: Date.now(),
    //   required: true,
    // })
    bankDataCreatedOn;
    // @ApiProperty({
    //   example: Date.now(),
    //   required: true,
    // })
    idDataCreatedOn;
    // @IsNotEmpty()
    // @ApiProperty({
    //   example: 'You need to note down somthing',
    //   required: true,
    // })
    notes;
    // @IsNotEmpty()
    // @ApiProperty({
    //   example: 0,
    //   required: true,
    // })
    cancelledStatus;
    // @ApiProperty({
    //   example: 'Gflsjji3',
    //   required: true,
    // })
    bankJobNo;
    //numerical string
    // @IsNotEmpty()
    // @ApiProperty({
    //   example: 'Obaelegusi',
    //   required: true,
    // })
    bankJobFilename;
    // @ApiProperty({
    //   example: 5,
    //   required: true,
    // })
    expMth;
    // @IsNotEmpty()
    // @ApiProperty({
    //   example: 7,
    //   required: true,
    // })
    expYear;
    // @ApiProperty({
    //   example: 103,
    //   required: true,
    // })
    enrolLG;
    // @ApiProperty({
    //   type: () => CreateCardDto,
    //   required: true,
    // })
    cards;
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
    (0, class_validator_1.IsNotEmpty)()
    // @Type(() => Number)
    ,
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
    (0, class_validator_1.IsString)()
    // @IsNotEmpty()
    ,
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], CreateBatchDto.prototype, "enrolLG", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsArray)()
    // @IsNotEmptyObject()
    ,
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
    batchNo;
    contact_LGA;
    country_code;
    current_house_number;
    current_street;
    current_town;
    date_of_birth;
    duplicate_PAN;
    email_address;
    first_name;
    flat_number;
    lassraId;
    middle_name;
    primary_phone_no;
    registration_date;
    state_of_residence;
    status; // for now 0 is defaultstatus, 1 is produced and 2 is provisioned,3 is for missing, 4 is for damaged
    surname;
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
    (0, class_transformer_1.Type)(() => Date),
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
    (0, class_transformer_1.Type)(() => String),
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
    (0, class_transformer_1.Type)(() => String),
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
    (0, class_transformer_1.Type)(() => String),
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
    (0, class_transformer_1.Type)(() => String),
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
    (0, class_transformer_1.Type)(() => Date),
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
    (0, class_transformer_1.Type)(() => String),
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
    lassraId;
    card;
    receipt;
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
    receivedStatus;
    receivedBy;
    receivedAt;
    batchNo;
    batch;
    cardReceipt;
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
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_card_dto_1 = __webpack_require__(/*! ./create-card.dto */ "./apps/batches/src/dto/create-card.dto.ts");
class UpdateCardDto extends (0, mapped_types_1.PartialType)(create_card_dto_1.CreateCardDto) {
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
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_cardreceipt_dto_1 = __webpack_require__(/*! ./create-cardreceipt.dto */ "./apps/batches/src/dto/create-cardreceipt.dto.ts");
class UpdateCardReceiptDto extends (0, mapped_types_1.PartialType)(create_cardreceipt_dto_1.CreateCardReceiptDto) {
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
    id;
    batchNo;
    name;
    description;
    noRecords;
    // @Column()
    // not_produced: number;
    perso;
    bankDataCreatedOn;
    idDataCreatedOn;
    notes;
    cancelledStatus;
    bankJobNo;
    bankJobFilename;
    expMth;
    expYear;
    enrolLG;
    // @Column({ unique: true })
    // batchId: string;
    count;
    cards;
    // @OneToMany(() => Receipt, (receipt) => receipt.batchNo, {
    //   eager: true,
    // })
    // receipt: Receipt[];
    createdAt;
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Card = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const batch_entity_1 = __webpack_require__(/*! ./batch.entity */ "./apps/batches/src/entities/batch.entity.ts");
const location_entity_1 = __webpack_require__(/*! ../dispatch/entities/location.entity */ "./apps/batches/src/dispatch/entities/location.entity.ts");
// import { CardReceipt } from '../../cardreceipt/entities/cardreceipt.entity';
let Card = class Card {
    id;
    batchNo;
    contact_LGA;
    country_code;
    current_house_number; //shouldd v\\be string
    current_street;
    current_town;
    date_of_birth;
    duplicate_PAN;
    email_address;
    first_name;
    flat_number;
    lassraId;
    middle_name;
    primary_phone_no;
    registration_date;
    state_of_residence;
    status; // for now 0 is defaultstatus, 1 is produced and 2 is provisioned,3 missing, 4 is for damaged, 5=collected
    surname;
    // @OneToOne('CardRecceipt')
    // cardreceipt: Relation<CardReceipt>;
    batch;
    createdAt;
    cardLocation;
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
    (0, typeorm_1.ManyToOne)(() => batch_entity_1.Batch, (batch) => batch.cards, { eager: true }),
    __metadata("design:type", typeof (_c = typeof batch_entity_1.Batch !== "undefined" && batch_entity_1.Batch) === "function" ? _c : Object)
], Card.prototype, "batch", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Card.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => location_entity_1.CardLocation),
    __metadata("design:type", typeof (_e = typeof location_entity_1.CardLocation !== "undefined" && location_entity_1.CardLocation) === "function" ? _e : Object)
], Card.prototype, "cardLocation", void 0);
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
    id;
    lassraId;
    card;
    // @Column()
    receipt;
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Receipt = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const batch_entity_1 = __webpack_require__(/*! ./batch.entity */ "./apps/batches/src/entities/batch.entity.ts");
const cardreceipt_entity_1 = __webpack_require__(/*! ./cardreceipt.entity */ "./apps/batches/src/entities/cardreceipt.entity.ts");
let Receipt = class Receipt {
    id;
    batchNo;
    receivedStatus; // 0=initiated,1 created
    receivedBy;
    cardReceipt;
    receivedAt;
    batch;
    createdAt;
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

/***/ "./apps/batches/src/enum/role.enum.ts":
/*!********************************************!*\
  !*** ./apps/batches/src/enum/role.enum.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Role = void 0;
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["Staff"] = "Staff";
    Role["SuperAdmin"] = "SuperAdmin";
})(Role = exports.Role || (exports.Role = {}));


/***/ }),

/***/ "./apps/batches/src/enum/unit.enum.ts":
/*!********************************************!*\
  !*** ./apps/batches/src/enum/unit.enum.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Unit = void 0;
var Unit;
(function (Unit) {
    Unit["CProcessUnit"] = "CProcessUnit";
    Unit["CardDistribution"] = "CardDistribution";
    Unit["CardCollection"] = "CardCollection";
})(Unit = exports.Unit || (exports.Unit = {}));


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
class CreateProvisionDto {
    provisionedBy;
    receivedBy;
    provisionedAt;
    batchNo;
    batch;
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
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'Jome',
        required: true,
    }),
    __metadata("design:type", String)
], CreateProvisionDto.prototype, "receivedBy", void 0);
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
exports.CreateProvisionDto = CreateProvisionDto;


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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Provision = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const entities_1 = __webpack_require__(/*! ../../entities */ "./apps/batches/src/entities/index.ts");
const cardprovision_entity_1 = __webpack_require__(/*! ../../cardprovision/entities/cardprovision.entity */ "./apps/batches/src/cardprovision/entities/cardprovision.entity.ts");
let Provision = class Provision {
    id;
    batchNo;
    provisionedBy;
    receivedBy;
    provisionStatus; // 0=initiated,1 created
    cardProvision;
    provisionedAt;
    batch;
    createdAt; // Automatically captures the creation date of the report
    updatedAt; // Automatically updates when the report is modified
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
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Provision.prototype, "receivedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Provision.prototype, "provisionStatus", void 0);
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
    (0, typeorm_1.ManyToOne)(() => entities_1.Receipt),
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProvisionController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const provision_service_1 = __webpack_require__(/*! ./provision.service */ "./apps/batches/src/provision/provision.service.ts");
const create_provision_dto_1 = __webpack_require__(/*! ./dto/create-provision.dto */ "./apps/batches/src/provision/dto/create-provision.dto.ts");
const batch_service_1 = __webpack_require__(/*! ../batch/batch.service */ "./apps/batches/src/batch/batch.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
(0, swagger_1.ApiTags)('provision');
let ProvisionController = class ProvisionController {
    provisionService;
    batchService;
    constructor(provisionService, batchService) {
        this.provisionService = provisionService;
        this.batchService = batchService;
    }
    async create(createProvisionDto) {
        console.log(createProvisionDto, ' provisionn');
        try {
            const currentBatch = await this.batchService.findOne(createProvisionDto.batchNo);
            createProvisionDto.batch = currentBatch;
            return await this.provisionService.createProvision(createProvisionDto);
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async complete(id) {
        try {
            return await this.provisionService.complete(id);
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
};
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
ProvisionController = __decorate([
    (0, common_1.Controller)('provision'),
    __metadata("design:paramtypes", [typeof (_b = typeof provision_service_1.ProvisionService !== "undefined" && provision_service_1.ProvisionService) === "function" ? _b : Object, typeof (_c = typeof batch_service_1.BatchService !== "undefined" && batch_service_1.BatchService) === "function" ? _c : Object])
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
// import { BatchModule } from '../batch/batch.module';
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
            // forwardRef(() => BatchModule),
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
    provisionRepository;
    cardRepository;
    dataSource;
    constructor(provisionRepository, cardRepository, dataSource) {
        this.provisionRepository = provisionRepository;
        this.cardRepository = cardRepository;
        this.dataSource = dataSource;
    }
    async createProvision(createProvisionDto) {
        try {
            const newProvision = this.provisionRepository.create(createProvisionDto);
            await this.provisionRepository.save(newProvision);
            return newProvision;
        }
        catch (e) {
            throw new Error(e.message + 'Service error');
        }
    }
    async complete(id) {
        try {
            const provision = await this.provisionRepository.findOne({
                where: { id },
            });
            if (!provision) {
                throw new Error('Provision receipt not found');
            }
            provision.provisionStatus = 1;
            await this.provisionRepository.save(provision);
        }
        catch (e) {
            return e;
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
                // 'COUNT(cardReceipt) AS cardCount',
            ])
                .orderBy('provision.id', 'ASC') // Order by id in ascending order
                .addGroupBy('provision.id') // Group by receipt id
                .skip((page - 1) * pageSize)
                .take(pageSize)
                .getManyAndCount();
            return provision;
        }
        catch (e) {
            throw new Error(e.message);
        }
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReceiptController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const receipt_service_1 = __webpack_require__(/*! ./receipt.service */ "./apps/batches/src/receipt/receipt.service.ts");
const batch_service_1 = __webpack_require__(/*! ../batch/batch.service */ "./apps/batches/src/batch/batch.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let ReceiptController = class ReceiptController {
    receiptService;
    batchService;
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
    async completeRequest(id) {
        try {
            return await this.receiptService.completedReceipt(id);
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
};
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
ReceiptController = __decorate([
    (0, swagger_1.ApiTags)('receipts'),
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
    receiptRepository;
    cardRepository;
    dataSource;
    constructor(receiptRepository, cardRepository, dataSource) {
        this.receiptRepository = receiptRepository;
        this.cardRepository = cardRepository;
        this.dataSource = dataSource;
    }
    // create receipt is now modified to create request without cards . Need to create add cards method to daad cards to a reaquest and a method to complete are request.
    async createReceipt(createReceiptDto) {
        try {
            const newReceipt = await this.receiptRepository.create(createReceiptDto);
            console.log(newReceipt);
            return await this.receiptRepository.save(newReceipt);
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    async completedReceipt(id) {
        try {
            const receipt = await this.receiptRepository.findOne({
                where: { id },
            });
            if (!receipt) {
                throw new Error(`Cannot find receipt`);
            }
            if (receipt.receivedStatus === 1) {
                throw new Error('Receipt already completed');
            }
            receipt.receivedStatus = 1;
            return await this.receiptRepository.save(receipt);
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    async addCard(batchNo, lassraId) {
        //check in cardReceipt service
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
                relations: ['cardReceipt'],
            });
            console.log(receipts);
            return receipts[0];
        }
        catch (e) {
            console.log(e);
            throw new Error(e);
        }
    }
    //ind receipt by batchNo and/or jobNo and/or lassraid
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
            // 'COUNT(cardReceipt) AS cardCount',
        ])
            .orderBy('receipt.id', 'ASC') // Order by id in ascending order
            .addGroupBy('receipt.id') // Group by receipt id
            .skip((page - 1) * pageSize)
            .take(pageSize)
            .getManyAndCount();
        return receipts;
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCardRetrivalDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const create_retrival_dto_1 = __webpack_require__(/*! ./create-retrival.dto */ "./apps/batches/src/retrival/dto/create-retrival.dto.ts");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class CreateCardRetrivalDto {
    lassraId;
    status;
    retrival;
}
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
    (0, class_transformer_1.Type)(() => create_retrival_dto_1.CreateRetrivalDto),
    __metadata("design:type", typeof (_a = typeof create_retrival_dto_1.CreateRetrivalDto !== "undefined" && create_retrival_dto_1.CreateRetrivalDto) === "function" ? _a : Object)
], CreateCardRetrivalDto.prototype, "retrival", void 0);
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateRetrivalDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const create_card_retrival_dto_1 = __webpack_require__(/*! ./create-card-retrival.dto */ "./apps/batches/src/retrival/dto/create-card-retrival.dto.ts");
class CreateRetrivalDto {
    collectionCenter;
    retrivalStatus; //0 is initial,1 is out for dispatch,2 is dispatched
    createdBy;
    createdAt = new Date();
    retrivedBy;
    retrivedAt;
    acknowledgedBy;
    cardRetrival;
}
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
    (0, class_transformer_1.Type)(() => create_card_retrival_dto_1.CreateCardRetrivalDto),
    __metadata("design:type", Array)
], CreateRetrivalDto.prototype, "cardRetrival", void 0);
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardRetrival = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const retrival_entity_1 = __webpack_require__(/*! ./retrival.entity */ "./apps/batches/src/retrival/entities/retrival.entity.ts");
let CardRetrival = class CardRetrival {
    id;
    lassraId;
    status;
    retrival;
};
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
    (0, typeorm_1.ManyToOne)(() => retrival_entity_1.Retrival),
    __metadata("design:type", typeof (_a = typeof retrival_entity_1.Retrival !== "undefined" && retrival_entity_1.Retrival) === "function" ? _a : Object)
], CardRetrival.prototype, "retrival", void 0);
CardRetrival = __decorate([
    (0, typeorm_1.Entity)()
], CardRetrival);
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Retrival = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const cardRetrival_entity_1 = __webpack_require__(/*! ./cardRetrival.entity */ "./apps/batches/src/retrival/entities/cardRetrival.entity.ts");
let Retrival = class Retrival {
    id;
    collectionCenter;
    retrivalStatus; //0 is initial,1 is out for dispatch,2 is dispatched
    createdBy;
    //
    createdAt = new Date();
    //
    retrivedAt;
    //
    acknowledgedAt;
    acknowledgedBy;
    retrivedBy;
    cardRetrival;
};
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
    (0, typeorm_1.OneToMany)(() => cardRetrival_entity_1.CardRetrival, (cardRetrival) => cardRetrival.retrival, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Retrival.prototype, "cardRetrival", void 0);
Retrival = __decorate([
    (0, typeorm_1.Entity)()
], Retrival);
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RetrivalController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const retrival_service_1 = __webpack_require__(/*! ./retrival.service */ "./apps/batches/src/retrival/retrival.service.ts");
const create_retrival_dto_1 = __webpack_require__(/*! ./dto/create-retrival.dto */ "./apps/batches/src/retrival/dto/create-retrival.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let RetrivalController = class RetrivalController {
    retrivalService;
    constructor(retrivalService) {
        this.retrivalService = retrivalService;
    }
    async create(createRetrivalDto) {
        return await this.retrivalService.create(createRetrivalDto);
    }
    findAll() {
        return this.retrivalService.findAll();
    }
    findOne(id) {
        return this.retrivalService.findOne(+id);
    }
    update(id, updateRetrivalDto) {
        return this.retrivalService.update(+id, updateRetrivalDto);
    }
};
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
RetrivalController = __decorate([
    (0, swagger_1.ApiTags)('retrival'),
    (0, common_1.Controller)('retrival'),
    __metadata("design:paramtypes", [typeof (_b = typeof retrival_service_1.RetrivalService !== "undefined" && retrival_service_1.RetrivalService) === "function" ? _b : Object])
], RetrivalController);
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const retrival_service_1 = __webpack_require__(/*! ./retrival.service */ "./apps/batches/src/retrival/retrival.service.ts");
const retrival_controller_1 = __webpack_require__(/*! ./retrival.controller */ "./apps/batches/src/retrival/retrival.controller.ts");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const retrival_entity_1 = __webpack_require__(/*! ./entities/retrival.entity */ "./apps/batches/src/retrival/entities/retrival.entity.ts");
const location_entity_1 = __webpack_require__(/*! ../dispatch/entities/location.entity */ "./apps/batches/src/dispatch/entities/location.entity.ts");
const cardRetrival_entity_1 = __webpack_require__(/*! ./entities/cardRetrival.entity */ "./apps/batches/src/retrival/entities/cardRetrival.entity.ts");
// import { ClientsModule, Transport } from '@nestjs/microservices';
let RetrivalModule = class RetrivalModule {
};
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
exports.RetrivalModule = RetrivalModule;


/***/ }),

/***/ "./apps/batches/src/retrival/retrival.service.ts":
/*!*******************************************************!*\
  !*** ./apps/batches/src/retrival/retrival.service.ts ***!
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RetrivalService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const retrival_entity_1 = __webpack_require__(/*! ./entities/retrival.entity */ "./apps/batches/src/retrival/entities/retrival.entity.ts");
const location_entity_1 = __webpack_require__(/*! ../dispatch/entities/location.entity */ "./apps/batches/src/dispatch/entities/location.entity.ts");
const cardRetrival_entity_1 = __webpack_require__(/*! ./entities/cardRetrival.entity */ "./apps/batches/src/retrival/entities/cardRetrival.entity.ts");
// import { ProducerService } from '../procuder/producer.service';
// import {
//   ClientProxy,
//   ClientProxyFactory,
//   Transport,
// } from '@nestjs/microservices';
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let RetrivalService = class RetrivalService {
    retrivalRepository;
    cardRetrivalRepository;
    cardLocationRepository;
    configService;
    constructor(retrivalRepository, cardRetrivalRepository, cardLocationRepository, configService) {
        this.retrivalRepository = retrivalRepository;
        this.cardRetrivalRepository = cardRetrivalRepository;
        this.cardLocationRepository = cardLocationRepository;
        this.configService = configService;
    }
    async create(createRetrivalDto) {
        try {
            const newRetrival = this.retrivalRepository.create(createRetrivalDto);
            return await this.retrivalRepository.save(newRetrival);
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async findAll() {
        try {
            return await this.retrivalRepository.find();
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async findOne(id) {
        try {
            const retrival = await this.retrivalRepository.findOne({
                where: { id: id },
            });
            const card = await this.cardRetrivalRepository.find({
                where: { retrival: retrival },
            });
            return { ...retrival, cardRetrival: card };
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async update(id, updateRetrivalDto) {
        try {
            const retrivalToUpdate = await this.retrivalRepository.findOne({
                where: { id },
                relations: ['cardRetrival'],
            });
            if (!retrivalToUpdate)
                throw new common_1.NotFoundException('Retrival order not found');
            if (retrivalToUpdate.retrivalStatus > 0)
                throw new common_1.BadRequestException('Retrival already acknowledged.');
            await this.retrivalRepository.manager.transaction(async (transactionManager) => {
                retrivalToUpdate.acknowledgedBy = updateRetrivalDto.acknowledgedBy;
                retrivalToUpdate.retrivedBy = updateRetrivalDto.retrivedBy;
                retrivalToUpdate.acknowledgedAt = new Date();
                retrivalToUpdate.retrivedAt = updateRetrivalDto.retrivedAt;
                retrivalToUpdate.retrivalStatus = 1;
                retrivalToUpdate.cardRetrival.forEach(async (cardRetrivalItem) => {
                    const currentcard = updateRetrivalDto.cardRetrival?.find((card) => card.lassraId === cardRetrivalItem.lassraId);
                    if (currentcard) {
                        cardRetrivalItem.status = 1;
                        const locationdetail = await this.cardLocationRepository.findOne({
                            where: { lassraId: currentcard.lassraId },
                        });
                        if (locationdetail) {
                            // throw new NotFoundException('location detail not found');
                            const dup = { ...locationdetail };
                            locationdetail.currentLocation = 'Head office';
                            locationdetail.previousLocations =
                                dup.previousLocations + '->' + dup.currentLocation;
                            const cardlocation = await this.cardLocationRepository.save(locationdetail);
                        }
                        return cardRetrivalItem;
                    }
                    return cardRetrivalItem;
                });
                const updatedretrival = await this.retrivalRepository.save(retrivalToUpdate);
                await transactionManager.save(updatedretrival);
            });
            return 'acknowledgements of retrival successful';
        }
        catch (e) {
            throw new Error(e);
        }
    }
};
RetrivalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(retrival_entity_1.Retrival)),
    __param(1, (0, typeorm_2.InjectRepository)(cardRetrival_entity_1.CardRetrival)),
    __param(2, (0, typeorm_2.InjectRepository)(location_entity_1.CardLocation)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _c : Object, typeof (_d = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _d : Object])
], RetrivalService);
exports.RetrivalService = RetrivalService;


/***/ }),

/***/ "./apps/batches/src/users/dto/create-user.dto.ts":
/*!*******************************************************!*\
  !*** ./apps/batches/src/users/dto/create-user.dto.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const role_enum_1 = __webpack_require__(/*! ../../enum/role.enum */ "./apps/batches/src/enum/role.enum.ts");
class CreateUserDto {
    email;
    password;
    unit;
    role;
    active;
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'user email',
        type: String,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'user email',
        type: String,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'user email',
        type: String,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "unit", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(role_enum_1.Role),
    (0, swagger_1.ApiProperty)({
        description: 'user email',
        type: String,
    }),
    __metadata("design:type", typeof (_a = typeof role_enum_1.Role !== "undefined" && role_enum_1.Role) === "function" ? _a : Object)
], CreateUserDto.prototype, "role", void 0);
exports.CreateUserDto = CreateUserDto;


/***/ }),

/***/ "./apps/batches/src/users/dto/update-user.dto.ts":
/*!*******************************************************!*\
  !*** ./apps/batches/src/users/dto/update-user.dto.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const create_user_dto_1 = __webpack_require__(/*! ./create-user.dto */ "./apps/batches/src/users/dto/create-user.dto.ts");
class UpdateUserDto extends (0, swagger_1.PartialType)(create_user_dto_1.CreateUserDto) {
}
exports.UpdateUserDto = UpdateUserDto;


/***/ }),

/***/ "./apps/batches/src/users/entities/user.entity.ts":
/*!********************************************************!*\
  !*** ./apps/batches/src/users/entities/user.entity.ts ***!
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
exports.User = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const unit_enum_1 = __webpack_require__(/*! ../../enum/unit.enum */ "./apps/batches/src/enum/unit.enum.ts");
const role_enum_1 = __webpack_require__(/*! ../../enum/role.enum */ "./apps/batches/src/enum/role.enum.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let User = class User {
    id;
    email;
    password;
    unit;
    role;
    active;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, swagger_1.ApiProperty)({
        description: 'user registered email',
        type: String,
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        description: 'user password',
        type: String,
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: unit_enum_1.Unit.CardDistribution }),
    __metadata("design:type", String)
], User.prototype, "unit", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: role_enum_1.Role.Staff }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], User.prototype, "active", void 0);
User = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;


/***/ }),

/***/ "./apps/batches/src/users/users.controller.ts":
/*!****************************************************!*\
  !*** ./apps/batches/src/users/users.controller.ts ***!
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/batches/src/users/users.service.ts");
const create_user_dto_1 = __webpack_require__(/*! ./dto/create-user.dto */ "./apps/batches/src/users/dto/create-user.dto.ts");
const update_user_dto_1 = __webpack_require__(/*! ./dto/update-user.dto */ "./apps/batches/src/users/dto/update-user.dto.ts");
const jwt_auth_guards_1 = __importDefault(__webpack_require__(/*! ../auth/jwt-auth.guards */ "./apps/batches/src/auth/jwt-auth.guards.ts"));
const admin_guard_1 = __importDefault(__webpack_require__(/*! ../auth/RolesGuards/admin.guard */ "./apps/batches/src/auth/RolesGuards/admin.guard.ts"));
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let UsersController = class UsersController {
    usersService;
    constructor(usersService) {
        this.usersService = usersService;
    }
    addUser(createUserDto) {
        return this.usersService.create(createUserDto);
    }
    findAll() {
        return this.usersService.findAll();
    }
    findOne(id) {
        return this.usersService.findOne(+id);
    }
    update(id, updateUserDto) {
        return this.usersService.update(+id, updateUserDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_user_dto_1.CreateUserDto !== "undefined" && create_user_dto_1.CreateUserDto) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "addUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guards_1.default, admin_guard_1.default),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof update_user_dto_1.UpdateUserDto !== "undefined" && update_user_dto_1.UpdateUserDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [typeof (_c = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _c : Object])
], UsersController);
exports.UsersController = UsersController;


/***/ }),

/***/ "./apps/batches/src/users/users.module.ts":
/*!************************************************!*\
  !*** ./apps/batches/src/users/users.module.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/batches/src/users/users.service.ts");
const users_controller_1 = __webpack_require__(/*! ./users.controller */ "./apps/batches/src/users/users.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const user_entity_1 = __webpack_require__(/*! ./entities/user.entity */ "./apps/batches/src/users/entities/user.entity.ts");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService],
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./apps/batches/src/users/users.service.ts":
/*!*************************************************!*\
  !*** ./apps/batches/src/users/users.service.ts ***!
  \*************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_entity_1 = __webpack_require__(/*! ./entities/user.entity */ "./apps/batches/src/users/entities/user.entity.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const bcrypt = __importStar(__webpack_require__(/*! bcrypt */ "bcrypt"));
let UsersService = class UsersService {
    usersRepository;
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(createUserDto) {
        try {
            const pass = await bcrypt.hash(createUserDto.password, 10);
            const newuser = await this.usersRepository.create({
                ...createUserDto,
                password: pass,
            });
            return await this.usersRepository.save(newuser);
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    async findAll() {
        return await this.usersRepository.find({});
    }
    async findOne(id) {
        try {
            return await this.usersRepository.findOne({ where: { id: id } });
        }
        catch (e) { }
    }
    findOneUserByEmail(email) {
        try {
            return this.usersRepository.findOne({ where: { email } });
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
    async update(id, updateUserDto) {
        try {
            const user = await this.usersRepository.findOne({ where: { id: id } });
            if (user) {
                user.unit == updateUserDto.unit;
                user.role == updateUserDto.role;
                await this.usersRepository.save(user);
            }
        }
        catch (err) {
            throw new Error(err);
        }
    }
    async validateUser(email, password) {
        const hashpass = await bcrypt.hash(password, 10);
        const user = await this.usersRepository.findOne({ where: { email } });
        const match = await bcrypt.compare(password, hashpass);
        if (user && match) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UsersService);
exports.UsersService = UsersService;


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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
let ResponseInterceptor = class ResponseInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)((data) => {
            const code = context.switchToHttp().getResponse().statusCode;
            return {
                status: code >= 200 && code <= 300 ? 'success' : 'error',
                code: code,
                message: code >= 200 && code <= 300
                    ? 'Request was successful.'
                    : 'Request failed',
                data: data,
            };
        }));
    }
};
ResponseInterceptor = __decorate([
    (0, common_1.Injectable)()
], ResponseInterceptor);
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_config_1 = __webpack_require__(/*! ../../../../typeorm.config */ "./typeorm.config.ts");
// import { Batch } from 'apps/batches/src/entities/batch.entity';
// import { Card } from 'apps/batches/src/produced/entities/produced.entity';
// import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';
let DatabaseModule = class DatabaseModule {
};
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
const dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
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

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/mapped-types":
/*!***************************************!*\
  !*** external "@nestjs/mapped-types" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@nestjs/mapped-types");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

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

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

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

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

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
// import { SharedService } from '@app/common';
// import { RmqOptions, Transport } from '@nestjs/microservices';
const response_interceptors_1 = __webpack_require__(/*! libs/common/src/auth/interceptors/response.interceptors */ "./libs/common/src/auth/interceptors/response.interceptors.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        snapshot: true,
        cors: true,
    });
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Lasra card tracking Api')
        .setDescription('Api for the card tracking project')
        .addServer('http://localhost:4000/', 'local dev')
        .addTag('Lassra internal Card Tracking portals')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Input your jwt token',
        name: 'authorization',
        in: 'header',
    }, 'JWT')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api-docs', app, document);
    const configService = app.get(config_1.ConfigService);
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
    await app.listen(configService.get('PORT'));
}
bootstrap();

})();

/******/ })()
;