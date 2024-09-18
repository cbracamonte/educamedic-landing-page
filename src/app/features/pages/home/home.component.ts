import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeaturesComponent } from "../../components/features/features.component";
import { PricingsComponent } from '../../components/pricings/pricings.component';

@Component({
    selector: 'educamedic-home',
    standalone: true,
    imports: [
    CommonModule,
    FeaturesComponent,
    PricingsComponent
],
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent { }
