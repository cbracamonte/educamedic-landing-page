import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Contact } from '../../../core/interfaces/data.interface';

@Component({
    selector: 'educamedic-contact',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
    @Input() data!: Contact;
}
