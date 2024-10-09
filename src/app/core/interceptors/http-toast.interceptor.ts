import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { ToastService } from "../../shared/services/toast.service";
import { tap } from "rxjs/operators";
import { HttpErrorResponse } from "@angular/common/http";

export const HttpToastInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService = inject(ToastService);

  return next(req).pipe(
    tap({
      error: (error: HttpErrorResponse) => {
        toastService.showError(`Error: ${error.message}`);
      },
    })
  );
};