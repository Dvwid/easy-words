import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {ToastComponent} from "./toast.component";

@Injectable()
export class ToastService {

  constructor(private _toastBar: MatSnackBar) {
  }

  openToastBar(data: string, durationInSeconds: number, success: boolean) {
    this._toastBar.openFromComponent(ToastComponent,  {
      duration: durationInSeconds * 1000,
      panelClass: success ? 'success-snackbar' : 'fail-snackbar',
      horizontalPosition: 'left',
      verticalPosition: 'top',
      data: `${data}`,
    });
  }
}
