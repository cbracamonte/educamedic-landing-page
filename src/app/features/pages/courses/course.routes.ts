import { Route } from "@angular/router";

export const COURSE_ROUTES: Route[] = [
  {
    path: "courses",
    loadComponent: () =>
      import("./courses.component").then(
        (c) => c.CoursesComponent
      ),
  },
  {
    path: "courses/:id",
    loadComponent: () =>
      import(
        "./course-details/course-details.component"
      ).then((c) => c.CourseDetailsComponent),
  },
];
