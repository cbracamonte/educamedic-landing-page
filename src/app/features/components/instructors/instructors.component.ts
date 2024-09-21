import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Instructors } from '../../../core/interfaces/data.interface';

@Component({
    selector: 'educamedic-instructors',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
    ],
    templateUrl: './instructors.component.html',
    styleUrl: './instructors.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstructorsComponent { 
    @Input({
        required: true,
    }) data!: Instructors;
}
