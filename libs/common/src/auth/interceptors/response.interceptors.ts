import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        const code = context.switchToHttp().getResponse().statusCode;

        return {
          status: code >= 200 && code <= 300 ? 'success' : 'error',
          code: code,
          message:
            code >= 200 && code <= 300
              ? 'Request was successful.'
              : 'Request failed',
          data: data,
        };
      }),
    );
  }
}
