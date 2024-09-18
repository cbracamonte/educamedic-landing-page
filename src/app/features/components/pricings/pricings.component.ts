import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'educamedic-pricings',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './pricings.component.html',
    styleUrl: './pricings.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingsComponent { }
