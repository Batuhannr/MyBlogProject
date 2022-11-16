import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryModel } from 'src/app/Models/CategoryModel';
import { EmailModel } from 'src/app/Models/EmailModel';
import { ResultModel } from 'src/app/Models/ResultModel';
import { ApiService } from 'src/app/Services/apiService';
import { MyAlertService } from 'src/app/Services/MyAlertService';
import { CategoryDialogComponent } from '../Dialogs/category-dialog/category-dialog.component';
import { ConfirmDialogComponent } from '../Dialogs/confirm-dialog/confirm-dialog.component';
import { ReadEmailComponent } from '../Dialogs/read-email/read-email.component';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  dialogRef : any = MatDialogRef<CategoryDialogComponent> ;
  confirmDialogRef: any = MatDialogRef<ConfirmDialogComponent>;
  // result: ResultModel = new ResultModel();
  email : EmailModel[] = [];
  dataSource: any;
  displayedColumns =['Id', 'NameSurname','Subject','Content','Email','operations']
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  constructor(public apiServis : ApiService,public matDialog : MatDialog, public alert : MyAlertService) { }

  ngOnInit(): void {
    this.GetEmail(); 
  }
  EmailFilter(e: any){
    var deger = e.target.value;
    this.dataSource.filter = deger.trim().toLowerCase();
    console.log(this.dataSource.filter)
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
  GetEmail() {
    this.apiServis.getEmail().
      subscribe((result: EmailModel[]) => {
        this.email = result;
        this.dataSource = new MatTableDataSource( this.email);
      this.dataSource.paginator = this.paginator;

      });
  }
  EmailRemove(data: EmailModel){
    this.confirmDialogRef = this.matDialog.open(ConfirmDialogComponent,{
      width : '500px'
    });
    this.confirmDialogRef.componentInstance.dialogMesaj=data.Email + " Removed Are You Sure ?"
    this.confirmDialogRef.afterClosed().subscribe((d:any)=>{
      if(d){
        
        this.apiServis.removeEmail(data.Id as number).subscribe((s) =>{
          this.alert.AlertUygula(s);
          if (s){
            this.GetEmail();
          }
        })
      }
    })
  }
  ReadEmail(data:EmailModel){
    this.dialogRef= this.matDialog.open(ReadEmailComponent,{
      width : '400px',
      data:{
        data:data,
        DialogHeader: data.Subject
      }
    });
  }
}