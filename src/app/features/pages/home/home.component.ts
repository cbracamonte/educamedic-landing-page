import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FeaturesComponent } from "../../components/features/features.component";
import { PricingComponent } from "../../components/pricing/pricing.component";
import { CoursesComponent } from "../courses/courses.component";
import { LastCoursesComponent } from "../../components/last-courses/last-courses.component";
import { HttpClient } from "@angular/common/http";
import { DataService } from "../../../core/services/data.service";
import { Observable } from "rxjs";
import { AppData } from "../../../core/interfaces/data.interface";
import { RouterModule } from "@angular/router";
import { InstructorsComponent } from "../../components/instructors/instructors.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: "educamedic-home",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FeaturesComponent,
    PricingComponent,
    CoursesComponent,
    LastCoursesComponent,
    InstructorsComponent,
    ContactComponent,
    FooterComponent
],
  templateUrl: "./home.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  appData$!: Observable<AppData>;
  constructor(private readonly _dataService: DataService) {}
  ngOnInit(): void {
    this.appData$ = this._dataService.getAppData();
  }
}
