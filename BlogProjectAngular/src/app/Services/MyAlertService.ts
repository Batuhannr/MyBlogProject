import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MyAlerDialogComponent } from '../Components/Dialogs/my-aler-dialog/my-aler-dialog.component';
import { ResultModel } from '../Models/ResultModel';


@Injectable({
  providedIn: 'root'
})
export class MyAlertService {
  private alertDialogRef?: MatDialogRef<MyAlerDialogComponent>;
  constructor(
    private matDialog: MatDialog
  ) { }

  AlertUygula(s: ResultModel) {
    var header = "";
    if (s.Result) {
        header = "Success";
    } else {
        header = "Error";
    }

    this.alertDialogRef = this.matDialog.open(MyAlerDialogComponent, {
      width: '300px'
    });
    this.alertDialogRef.componentInstance.dialogHeader = header;
    this.alertDialogRef.componentInstance.dialogMessage = s.ResultMessages;
    this.alertDialogRef.componentInstance.dialogOperation = s.Result;

    this.alertDialogRef.afterClosed().subscribe(d => {
      this.alertDialogRef != null;
    });
  }

}