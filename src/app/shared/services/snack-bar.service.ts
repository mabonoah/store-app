import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
declare type SnackBarType = 'success' | 'failure';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _snackBar: MatSnackBar) { }

  /**
    Opens a success snackbar with a message and an optional action.
    @param message — The message to show in the snackbar.
    @param action — The label for the snackbar action.
   */
  openSuccessSnackBar(message: string, action?: string): void {
    this.openSnackBar(message, 'success', action);
  }

  /**
    Opens a failure snackbar with a message and an optional action.
    @param message — The message to show in the snackbar.
    @param action — The label for the snackbar action.
   */
  openFailureSnackBar(message: string, action?: string): void {
    this.openSnackBar(message, 'failure', action);
  }

  private openSnackBar(message: string, type: SnackBarType, action?: string): void {
    const config: MatSnackBarConfig = this.getConfig(type);
    this._snackBar.open(message, action, config);
  }

  private getConfig(type: SnackBarType): MatSnackBarConfig {
    return {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: [`${type}-snackbar`]
    }
  }

}
