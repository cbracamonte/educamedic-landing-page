import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { initFlowbite } from "flowbite";
import { SHARED_COMPONENTS, SHARED_PIPES } from "./shared/shared";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, ...SHARED_COMPONENTS],
  providers: [...SHARED_PIPES],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
}
