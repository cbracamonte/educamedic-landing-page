import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { DarkModeService } from "../../services/dark-mode.service";

@Component({
  selector: "educamedic-dark-mode",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./dark-mode.component.html",
  styleUrl: "./dark-mode.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarkModeComponent {
  readonly darkModeService$: DarkModeService = inject(DarkModeService);

  toggleDarkMode(): void {
    this.darkModeService$.updateDarkMode();
  }
}
