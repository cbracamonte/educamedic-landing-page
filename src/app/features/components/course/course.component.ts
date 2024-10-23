import { CommonModule, NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ICourse } from "../../services/courses/dto/course.dto";
import { RouterModule } from "@angular/router";
import { ToArrayPipe } from "../../../shared/pipes/to-array.pipe";

@Component({
  selector: "educamedic-course",
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage, ToArrayPipe],
  templateUrl: "./course.component.html",
  styleUrl: "./course.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent {
  @Input({ required: true }) course!: ICourse;
}
