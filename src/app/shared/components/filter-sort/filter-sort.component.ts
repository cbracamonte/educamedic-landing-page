import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'educamedic-filter-sort',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './filter-sort.component.html',
    styleUrl: './filter-sort.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterSortComponent { }
