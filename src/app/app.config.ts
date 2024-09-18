import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
// import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
// import { provideToastr } from 'ngx-toastr';
// import { HttpInterceptorService } from 'src/interceptors/authorize.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    // provideToastr(),
    // provideHttpClient(
    //   withInterceptorsFromDi() // If using non-functional interceptors
    //   // withInterceptors([cookieCredentialsInterceptor, authorizeInterceptor]) if using functional interceptors
    // ),
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpInterceptorService,
    //   multi: true,
    // },
  ],
};