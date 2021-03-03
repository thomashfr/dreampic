export class Toast {
  constructor(
    public readonly toastType: ToastType,
    public readonly message: string,
  ) {}
}

export enum ToastType {
  SUCCESS,
  WARNING,
  DANGER,
  INFO,
}
