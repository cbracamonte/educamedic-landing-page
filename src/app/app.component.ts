import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { initFlowbite } from "flowbite";
import { SHARED_COMPONENTS } from "./shared/shared";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, ...SHARED_COMPONENTS],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
}
