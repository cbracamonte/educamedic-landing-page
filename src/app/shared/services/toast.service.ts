import { Injectable, signal } from '@angular/core';

export interface ToastMessage {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toast = signal<ToastMessage | null>(null);

  showSuccess(message: string) {
    this.showToast({ type: 'success', message });
  }

  showError(message: string) {
    this.showToast({ type: 'error', message });
  }

  showWarning(message: string) {
    this.showToast({ type: 'warning', message });
  }

  showInfo(message: string) {
    this.showToast({ type: 'info', message });
  }

  private showToast(toast: ToastMessage) {
    this.toast.set(toast);
    setTimeout(() => {
      this.clearToast();
    }, 3000);
  }

  private clearToast() {
    this.toast.set(null);
  }
}
