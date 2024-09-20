import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'educamedic-pricing',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './pricing.component.html',
    styleUrl: './pricing.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingComponent { }
