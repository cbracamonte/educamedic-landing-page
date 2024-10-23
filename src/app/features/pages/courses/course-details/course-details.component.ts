import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'educamedic-course-details',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './course-details.component.html',
    styleUrl: './course-details.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseDetailsComponent { 
}
