import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  showSimpleAlert(message: string, action: 'Done' | 'Undo'): void {
    this.snackBar.open(message, action, {
      duration: 3000
    });
  }
}
