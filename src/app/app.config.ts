import { ApplicationConfig, isDevMode } from "@angular/core";
import {
  NavigationError,
  provideRouter,
  withDebugTracing,
  withInMemoryScrolling,
  withNavigationErrorHandler,
  withRouterConfig,
} from "@angular/router";

import { routes } from "./app.routes";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
} from "@angular/common/http";
import { ENVIRONMENT } from "./core/tokens/environment.token";
import { environment } from "../environments/environment";
import { HttpToastInterceptor } from "./core/interceptors/http-toast.interceptor";
import { provideServiceWorker } from '@angular/service-worker';
// import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
// import { HttpInterceptorService } from 'src/interceptors/authorize.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: ENVIRONMENT,
      useValue: environment,
    },
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: "top",
      }),
      withRouterConfig({
        paramsInheritanceStrategy: "always",
        urlUpdateStrategy: "eager",
      })
    ),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([HttpToastInterceptor])), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }),
    
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
