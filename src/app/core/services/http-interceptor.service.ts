import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(
    private auth: AuthService,
    private spinner: SpinnerService,
    private snackBar: SnackBarService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth token from the service.
    const authToken = this.auth.getAuthorizationToken();

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });
    
    this.spinner.show();

    return next
      .handle(authReq)
      .pipe(
        tap({
          next: (event: HttpEvent<any>) => {
            if (event instanceof HttpResponse)
              this.spinner.hide();
          },
          error: (err: HttpErrorResponse) => {
            this.spinner.hide();
            this.snackBar.openFailureSnackBar(err.message, err.name);
          }
        })
      );
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];