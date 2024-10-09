import { inject, Injectable, signal } from "@angular/core";
import { IGetCoursesDto } from "../dto/get-courses.dto";
import { ICourseQueryParams } from "../interfaces/course-query-params.interface";
import { CoursesApiService } from "./courses-api.service";
import { ToastService } from "../../../../shared/services/toast.service";

@Injectable({
  providedIn: "root",
})
export class CoursesService {
  private readonly coursesApiService$ = inject(CoursesApiService);
  private readonly toastService$ = inject(ToastService);
  private readonly coursesSignal = signal<IGetCoursesDto | null>(null);


  getCoursesSignal() {
    return this.coursesSignal.asReadonly();
  }

  getCourses(params: ICourseQueryParams) {
    this.coursesApiService$.getCourses(params).subscribe({
      next: (data) => this.coursesSignal.set(data),
      error: (error) => {
        this.toastService$.showWarning(error.message);
        this.coursesSignal.set(null);
      },
    });
  }
}
