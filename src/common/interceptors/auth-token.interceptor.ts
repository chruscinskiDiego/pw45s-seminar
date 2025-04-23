import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";

export class AuthTokenInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        
        const request = context.switchToHttp().getRequest();

        const authToken = request.headers.authorization?.split(' ')[1];
    
        console.log('Auth Token:', authToken);
        
        return next.handle();
    }
    
}