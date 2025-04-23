import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { tap } from "rxjs";

export class TimingConnectionInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler) {

        const initialTime = Date.now();

        return next.handle().pipe(
            tap(() => {

                const finalTime = Date.now();
                const elapsed = finalTime - initialTime;

                console.log(`Request took ${elapsed} milliseconds`);
            })
        );
       
    }
}