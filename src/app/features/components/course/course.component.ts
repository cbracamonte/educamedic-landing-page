import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICourse } from '../../services/courses/dto/course.dto';

@Component({
    selector: 'educamedic-course',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './course.component.html',
    styleUrl: './course.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent { 
    @Input({required: true}) course!: ICourse;
}
