import { effect, Injectable, signal } from "@angular/core";

enum DarkMode {
  DARK = "dark",
  LIGHT = "light",
}

@Injectable({
  providedIn: "root",
})
export class DarkModeService {
  darkModeSignal = signal<string>(
    JSON.parse(window.localStorage.getItem("mode") ?? "null")
  );

  constructor() {
      effect(() => {
        window.localStorage.setItem("mode", JSON.stringify(this.darkModeSignal()));
      });
    }

  updateDarkMode(): void {
    this.darkModeSignal.update((value: string) =>
      value === DarkMode.DARK ? DarkMode.LIGHT : DarkMode.DARK
    );
  }
}
