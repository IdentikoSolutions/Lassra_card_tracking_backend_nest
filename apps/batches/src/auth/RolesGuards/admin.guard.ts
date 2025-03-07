import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { UsersService } from '../../users/users.service';
import { Role } from '../../enum/role.enum';

@Injectable()
export default class AdminGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (user.role !== Role.Admin)
      throw new UnauthorizedException(
        'Only Admins are allowed to do this operation',
      );
    if (user && user.role === Role.Admin) {
      return true;
    }
    return false;
  }
}
