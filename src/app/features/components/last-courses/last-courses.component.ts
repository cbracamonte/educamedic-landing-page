import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'educamedic-last-courses',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './last-courses.component.html',
    styleUrl: './last-courses.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LastCoursesComponent { }
