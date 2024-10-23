import { Routes } from "@angular/router";
import { LayoutComponent } from "./features/pages/layout/layout.component";
import { HomeComponent } from "./features/pages/home/home.component";
import { NotFoundComponent } from "./features/pages/notfound/notfound.component";
import { COURSE_ROUTES } from "./features/pages/courses/course.routes";

export const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
      ...COURSE_ROUTES
    ],
  },
  {
    path: "404",
    component: NotFoundComponent,
  },
  { path: "**", redirectTo: "/404", pathMatch: "full" },
];
