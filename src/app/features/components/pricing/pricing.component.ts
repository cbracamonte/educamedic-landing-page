import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Pricing } from '../../../core/interfaces/data.interface';

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
export class PricingComponent { 
    @Input() data!: Pricing;
}