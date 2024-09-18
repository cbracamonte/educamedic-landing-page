import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'educamedic-features',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './features.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesComponent { }
