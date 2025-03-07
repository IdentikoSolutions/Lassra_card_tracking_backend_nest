import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../users/users.service';
import { Role } from '../../enum/role.enum';

@Injectable()
export default class SuperAdminGuard implements CanActivate {
  constructor() {} // private readonly usersService: UsersService, // private readonly jwtService: JwtService,
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (user.role !== Role.SuperAdmin)
      throw new UnauthorizedException(
        'Only SuperAdmins are allowed to do this operation',
      );
    if (user && user.role === Role.SuperAdmin) {
      return true;
    }
    return false;
  }
}
