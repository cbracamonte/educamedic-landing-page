import { inject, Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";
import { ENVIRONMENT } from "../../../../core/tokens/environment.token";
import { ICourseQueryParams } from "../interfaces/course-query-params.interface";
import { catchError, Observable, throwError } from "rxjs";
import { IGetCoursesDto } from "../dto/get-courses.dto";
import { ToastService } from "../../../../shared/services/toast.service";

@Injectable({
  providedIn: "root",
})
export class CoursesApiService {
  private readonly http = inject(HttpClient);
  private readonly environment = inject(ENVIRONMENT);
  private readonly toastService$ = inject(ToastService);

  getCourses(params: ICourseQueryParams): Observable<IGetCoursesDto> {
    const httpParams = this.buildHttpParams(params);
    return this.http
      .get<IGetCoursesDto>(`${this.environment.apiUrl}/courses`, {
        params: httpParams,
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.toastService$.showWarning(error.message);
          return throwError(() => error);
        })
      );
  }

  private buildHttpParams(params: ICourseQueryParams): HttpParams {
    let httpParams = new HttpParams();
    Object.keys(params).forEach((key) => {
      const value = params[key as keyof ICourseQueryParams];
      if (value !== undefined && value !== null) {
        httpParams = httpParams.set(key, value.toString());
      }
    });
    return httpParams;
  }
}
