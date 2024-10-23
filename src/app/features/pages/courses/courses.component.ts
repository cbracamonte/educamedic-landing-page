import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { BreadcrumbComponent } from "../../../shared/components/breadcrumb/breadcrumb.component";
import { FilterSortComponent } from "../../../shared/components/filter-sort/filter-sort.component";
import { CourseComponent } from "../../components/course/course.component";
import { CoursesService } from "../../services/courses/services/courses.service";
import { ICourseQueryParams } from "../../services/courses/interfaces/course-query-params.interface";
import { RouterModule } from "@angular/router";

@Component({
  selector: "educamedic-courses",
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbComponent,
    FilterSortComponent,
    CourseComponent,
    RouterModule,
  ],
  templateUrl: "./courses.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent implements OnInit {
  private readonly coursesService$ = inject(CoursesService);
  readonly coursesSignal$ = this.coursesService$.getCoursesSignal();
  constructor() {}

  ngOnInit(): void {
    const params: ICourseQueryParams = {
      limit: 10,             
      page: 1                  
    };
    this.coursesService$.getCourses(params);
  }
}
