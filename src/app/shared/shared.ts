import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { DarkModeComponent } from "./components/dark-mode/dark-mode.component";
import { MenuComponent } from "./components/menu/menu.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ToastComponent } from "./components/toast/toast.component";
import { DarkModeService } from "./services/dark-mode.service";
import { ToastService } from "./services/toast.service";

export const SHARED_COMPONENTS = [
    NavbarComponent,
    DarkModeComponent,
    MenuComponent,
    ToastComponent,
    BreadcrumbComponent
];
export const SHARED_SERVICES = [
    DarkModeService,
    ToastService
];
export const SHARED_PIPES = [];
export const SHARED_DIRECTIVES = [];
