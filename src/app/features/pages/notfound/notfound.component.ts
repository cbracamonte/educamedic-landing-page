import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Observable } from "rxjs";
import { AppData } from "../../../core/interfaces/data.interface";
import { DataService } from "../../../core/services/data.service";
import { DarkModeService } from "../../../shared/services/dark-mode.service";

@Component({
  standalone: true,
  selector: "educamedic-notfound",
  imports: [CommonModule, RouterModule],
  templateUrl: "./notfound.component.html",
})
export class NotFoundComponent {
  darkModeService: DarkModeService = inject(DarkModeService);
  appData$: Observable<AppData> = inject(DataService).getAppData();
}
