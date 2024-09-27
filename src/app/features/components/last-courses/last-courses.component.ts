import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Courses } from '../../../core/interfaces/data.interface';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'educamedic-last-courses',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
    ],
    templateUrl: './last-courses.component.html',
    styleUrl: './last-courses.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LastCoursesComponent { 
    @Input() data!: Courses;
}
