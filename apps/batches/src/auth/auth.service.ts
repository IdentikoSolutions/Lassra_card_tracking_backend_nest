import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
// import { UsersService } from 'apps/auth/src/users/users.service';

export interface TokenPayload {
  email: string;
  sub: number;
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<Omit<User, 'password'> | null> {
    const user = await this.usersService.validateUser(email, password); // Pass email as a string // login
    if (user) {
      return user;
    }
    return null;
  }
  async login(user: any) {
    const payload = { email: user.email, sub: user.id }; // needs to be created in the db
    return { access_token: this.jwtService.sign(payload), user: user };
  }
}
