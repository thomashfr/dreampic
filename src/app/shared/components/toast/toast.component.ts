import { Component, Input } from '@angular/core';
import { Toast, ToastType } from './toast';
import { ToastSevice } from './toast.service';

@Component({
  selector: 'ap-toast',
  templateUrl: './toast.component.html',
})
export class ToastComponent {
  @Input() timeout = 3000;
  toasts: Toast[] = [];
  constructor(private toastService: ToastSevice) {
    this.toastService.getToast().subscribe(toast => {
      if (!toast) {
        this.toasts = [];
        return;
      }
      this.toasts.push(toast);
      setTimeout(() => this.removeToast(toast), this.timeout);
    });
  }
  removeToast(toastToRemove: Toast) {
    this.toasts = this.toasts.filter(toast => toast !== toastToRemove);
  }

  getToastClass(toast: Toast) {
    if (!toast) return '';
    switch (toast.toastType) {
      case ToastType.DANGER:
        return 'alert alert-danger';
      case ToastType.INFO:
        return 'alert alert-info';
      case ToastType.SUCCESS:
        return 'alert alert-success';
      case ToastType.WARNING:
        return 'alert alert-warning';
    }
  }
}
