import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeaturesComponent } from "../../components/features/features.component";
import { PricingComponent } from '../../components/pricing/pricing.component';
import { CoursesComponent } from "../courses/courses.component";
import { LastCoursesComponent } from "../../components/last-courses/last-courses.component";

@Component({
    selector: 'educamedic-home',
    standalone: true,
    imports: [
    CommonModule,
    FeaturesComponent,
    PricingComponent,
    CoursesComponent,
    LastCoursesComponent
],
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent { }
