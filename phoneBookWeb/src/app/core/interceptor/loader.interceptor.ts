
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpEvent } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { AlertService } from 'src/app/shared/services/alert.service';
// import { AppControllerService } from '../app-controller.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    private totalRequests = 0;

    // constructor(private readonly _appControllerService: AppControllerService) { }
    constructor(
        private readonly loaderService: LoaderService,
        private readonly alertService: AlertService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (!request.headers.get('skip-loader')) {
            this.totalRequests++;
            // this._appControllerService.loading = true;
            this.loaderService.show();
        }



        return next.handle(request).pipe(
            tap(res => {
                if (res instanceof HttpResponse && this.totalRequests !== 0) {
                    this.decreaseRequests();
                }
            }),
            catchError(err => {
                console.log('err', err);
                if (err.error !== undefined && err.error.message !== undefined && err.error.message !== '') {
                    this.alertService.error(err.error.message);
                } else {
                    this.alertService.error('Error occurred while loading data. Please try again');
                }

                this.decreaseRequests();
                throw err;
            })
        );
    }

    private decreaseRequests(): void {
        this.totalRequests--;
        if (this.totalRequests === 0) {
            this.loaderService.hide();
            // this._appControllerService.loading = false;
        }
    }
}