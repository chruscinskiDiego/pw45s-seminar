import { ArgumentsHost, Catch, ExceptionFilter, NotFoundException } from "@nestjs/common";

@Catch(NotFoundException)
export class NotFoundItemException<T extends NotFoundException> implements ExceptionFilter {

    catch (exception: T, host: ArgumentsHost) {

        const context = host.switchToHttp();
        const response = context.getResponse();
        const request = context.getRequest();

        const statusCode = exception.getStatus();

        const exceptionResponse = exception.getResponse();

        const error = typeof response === 'string' ? { message: exceptionResponse } : (exceptionResponse as { message: string });

        response.status(statusCode).json({
            ...error,
            date: new Date().toISOString(),
            path: request.url,
        })

    }

}