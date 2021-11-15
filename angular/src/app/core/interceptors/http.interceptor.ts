import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { DataLoadService } from './../services';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor(private dataLoadService: DataLoadService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const apiReq: HttpRequest<any> = req.clone();

        this.dataLoadService.increment();
        return next.handle(apiReq).pipe(finalize(() => this.dataLoadService.decrement()));
    }
}

@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiInterceptor,
            multi: true,
        },
    ],
})
export class HttpInterceptorModule {}
