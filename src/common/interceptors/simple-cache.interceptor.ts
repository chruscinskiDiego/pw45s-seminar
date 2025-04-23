import {CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { tap } from "rxjs";

export class SimpleCacheInterceptor implements NestInterceptor {

    private readonly cache = new Map();

    intercept(context: ExecutionContext, next: CallHandler) {

        console.log('Simple Cache Interceptor');

        const request = context.switchToHttp().getRequest();
        const url = request.url;

        if(this.cache.has(url)){
            console.log('CAAACHE: ' + url);
            return this.cache.get(url);
        }

        return next.handle().pipe(
            tap((data) => {
                this.cache.set(url, data);
                console.log('armazenando no cache: ' + url);
            }),
        );

    }
}