import { ApplicationConfig, isDevMode } from "@angular/core";
import {
  provideRouter,
  withInMemoryScrolling,
  withRouterConfig,
} from "@angular/router";

import { routes } from "./app.routes";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import {
  provideHttpClient,
  withInterceptors,
} from "@angular/common/http";
import { ENVIRONMENT } from "./core/tokens/environment.token";
import { environment } from "../environments/environment";
import { HttpToastInterceptor } from "./core/interceptors/http-toast.interceptor";
import { provideServiceWorker } from "@angular/service-worker";

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
    provideHttpClient(withInterceptors([HttpToastInterceptor])),
    provideServiceWorker("ngsw-worker.js", {
      enabled: isDevMode(),
      registrationStrategy: "registerWhenStable:30000",
    }), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }),
  ],
};
