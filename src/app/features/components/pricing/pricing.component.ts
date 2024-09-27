import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Pricing } from '../../../core/interfaces/data.interface';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'educamedic-pricing',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule
    ],
    templateUrl: './pricing.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingComponent { 
    @Input() data!: Pricing;
}
