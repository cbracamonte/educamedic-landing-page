import { CommonModule, NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RouterModule } from "@angular/router";

import { DarkModeComponent } from "../dark-mode/dark-mode.component";
import { DarkModeService } from "../../services/dark-mode.service";
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: "educamedic-navbar",
  standalone: true,
  imports: [CommonModule, DarkModeComponent, MenuComponent],
  templateUrl: "./navbar.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  readonly darkModeService$: DarkModeService = inject(DarkModeService);
  
}
