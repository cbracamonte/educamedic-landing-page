import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { AppData } from "../interfaces/data.interface";
import { APP_DATA } from "../constant/app-data.constant";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private readonly _http: HttpClient) {}

  getAppData(): Observable<AppData> {
    return of<AppData>(APP_DATA)
  }
}
