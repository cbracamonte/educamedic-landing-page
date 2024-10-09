import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ToastService } from "../../services/toast.service";
import { IToastMessage } from "../../interfaces/toast.interface";
import { TToastClasses } from "../../types/toast-classes.type";
import { DarkModeService } from "../../services/dark-mode.service";

@Component({
  selector: "educamedic-toast",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./toast.component.html",
  styleUrl: "./toast.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  readonly toastClassMap: Record<IToastMessage["type"], TToastClasses> =
    {
      success: {
        bg: "bg-green-100",
        text: "text-green-500",
      },
      error: {
        bg: "bg-red-100",
        text: "text-red-500",
      },
      warning: {
        bg: "bg-orange-100",
        text: "text-orange-500",
      },
      info: {
        bg: "bg-blue-100",
        text: "text-blue-500",
      },
    };
  readonly toastService$: ToastService = inject(ToastService);
  readonly darkModeService$: DarkModeService = inject(DarkModeService);

  getToastClass(type: IToastMessage['type']) {
    const classes = this.toastClassMap[type];
    return `${classes.bg} ${classes.text}`;
  }
  
  getIconClass(type: IToastMessage['type']) {
    const classes = this.toastClassMap[type];
    return `${classes.bg} ${classes.text}`;
  }

  closeToast() {
    this.toastService$.toast.set(null);
  }
}
