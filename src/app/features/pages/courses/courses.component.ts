import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "educamedic-courses",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./courses.component.html",
  styleUrl: "./courses.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent {}
