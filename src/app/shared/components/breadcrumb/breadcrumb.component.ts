import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'educamedic-breadcrumb',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './breadcrumb.component.html',
    styleUrl: './breadcrumb.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent { }
