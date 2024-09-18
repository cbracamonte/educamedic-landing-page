import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'educamedic-course',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './course.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent { }
