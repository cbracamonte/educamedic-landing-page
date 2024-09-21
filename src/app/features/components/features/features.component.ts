import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Features } from "../../../core/interfaces/data.interface";

@Component({
  selector: "educamedic-features",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./features.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesComponent {
  @Input() data!: Features;
}
