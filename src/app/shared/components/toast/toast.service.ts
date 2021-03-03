import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Toast, ToastType } from './toast';

@Injectable({ providedIn: 'root' })
export class ToastSevice {
  toastSubject: Subject<Toast> = new Subject<Toast>();
  keepAfterRouteChange = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          this.keepAfterRouteChange = false;
        } else {
          this.clear();
        }
      }
    });
  }

  success(message: string, keepAfterRouteChange: boolean = false) {
    this.toast(ToastType.SUCCESS, message, keepAfterRouteChange);
  }

  warning(message: string, keepAfterRouteChange: boolean = false) {
    this.toast(ToastType.WARNING, message, keepAfterRouteChange);
  }

  danger(message: string, keepAfterRouteChange: boolean = false) {
    this.toast(ToastType.DANGER, message, keepAfterRouteChange);
  }
  info(message: string, keepAfterRouteChange: boolean = false) {
    this.toast(ToastType.INFO, message, keepAfterRouteChange);
  }

  private toast(
    toastType: ToastType,
    message: string,
    keepAfterRouteChange: boolean = false,
  ) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.toastSubject.next(new Toast(toastType, message));
  }

  getToast() {
    return this.toastSubject.asObservable();
  }

  clear() {
    this.toastSubject.next(null);
  }
}
