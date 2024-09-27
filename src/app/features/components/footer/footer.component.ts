import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DarkModeService } from '../../../shared/services/dark-mode.service';

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
 }
