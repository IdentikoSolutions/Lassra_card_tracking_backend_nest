import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { ConfigService } from '@nestjs/config';
import { TokenService } from './token.service';
import { SessionToken } from './session-token.entity';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '360s' },
    }),
    TypeOrmModule.forFeature([SessionToken, User]),
    PassportModule.register({ defaultStrategy: 'local' }), // Register Passport with the LocalStrategy
  ],
  exports: [AuthService],
  providers: [
    AuthService,
    UsersService,
    ConfigService,
    LocalStrategy,
    JwtStrategy,
    TokenService,
  ],
  controllers: [AuthController], // Provide AuthService, UsersService, and LocalStrategy
})
export class AuthModule {}
