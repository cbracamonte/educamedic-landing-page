import { Routes } from "@angular/router";
import { LayoutComponent } from "./features/pages/layout/layout.component";
import { HomeComponent } from "./features/pages/home/home.component";

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'courses',
        loadComponent: () => import('./features/pages/courses/courses.component').then(c => c.CoursesComponent)
      }
    ]
  },
  { path: "**", redirectTo: "/404", pathMatch: "full" },

];
