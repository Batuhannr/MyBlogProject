import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-my-aler-dialog',
  templateUrl: './my-aler-dialog.component.html',
  styleUrls: ['./my-aler-dialog.component.css']
})
export class MyAlerDialogComponent implements OnInit {
  dialogHeader: string = "";
  dialogMessage?: string[];
  dialogOperation?: boolean;
  constructor(
    public dialogRef: MatDialogRef<MyAlerDialogComponent>
  ) { }

  ngOnInit() {
  }

}
