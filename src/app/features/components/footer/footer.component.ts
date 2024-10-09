import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

@Component({
    selector: 'educamedic-footer',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './footer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
    currentYear: number = new Date().getFullYear();
 }
