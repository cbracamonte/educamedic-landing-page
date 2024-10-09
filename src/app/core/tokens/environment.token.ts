import { InjectionToken } from "@angular/core";
import { IEnvironment } from "../interfaces/environment.interface";

export const ENVIRONMENT = new InjectionToken<IEnvironment>('ENVIRONMENT');