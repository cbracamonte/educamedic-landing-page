import { Routes } from "@angular/router";
import { LayoutComponent } from "./features/pages/layout/layout.component";
import { HomeComponent } from "./features/pages/home/home.component";
import { NotFoundComponent } from "./features/pages/notfound/notfound.component";

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
  {
    path: '404',
    component: NotFoundComponent
  },
  { path: "**", redirectTo: "/404", pathMatch: "full" },

];
