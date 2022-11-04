import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryModel } from 'src/app/Models/CategoryModel';
import { ResultModel } from 'src/app/Models/ResultModel';
import { ApiService } from 'src/app/Services/apiService';
import { MyAlertService } from 'src/app/Services/MyAlertService';
import { CategoryDialogComponent } from '../Dialogs/category-dialog/category-dialog.component';
import { ConfirmDialogComponent } from '../Dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  dialogRef : any = MatDialogRef<CategoryDialogComponent> ;
  confirmDialogRef: any = MatDialogRef<ConfirmDialogComponent>;
  // result: ResultModel = new ResultModel();
  category : CategoryModel[] = [];
  dataSource: any;
  displayedColumns =['Id', 'Title','Description','IsPublished','CreatedOn','LastModifiedOn','PublishedOn','operations']
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  constructor(public apiServis : ApiService,public matDialog : MatDialog, public alert : MyAlertService) { }

  ngOnInit(): void {
    this.GetCategory(); 
  }
  CategoryFilter(e: any){
    var deger = e.target.value;
    this.dataSource.filter = deger.trim().toLowerCase();
    console.log(this.dataSource.filter)
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
  GetCategory() {
    this.apiServis.getCategory().
      subscribe((result: ResultModel) => {
        this.category = result.ResultObject as CategoryModel[];
        this.dataSource = new MatTableDataSource( this.category);
      this.dataSource.paginator = this.paginator;

      });
  }
  CategoryAdd(){
    var newData : CategoryModel = new CategoryModel();
    this.dialogRef = this.matDialog.open(CategoryDialogComponent,{
      width: '300px',
      data:{
        data:newData,
        operation: 'add'
      }
    });
    this.dialogRef.afterClosed().subscribe((d:any)=>{
      if (d) {
        this.apiServis.addCategory(d).subscribe((s:ResultModel)=>{
          this.GetCategory();
        })
      }
    })
  }

  CategoryUpdate(data:CategoryModel){
    this.dialogRef= this.matDialog.open(CategoryDialogComponent,{
      width : '400px',
      data:{
        data:data,
        DialogHeader: 'update'
      }
    });
    this.dialogRef.afterClosed().subscribe((d : any)=>{
      if(d){

         data.IsPublished = d.IsPublished;
         data.Title = d.Title;
         data.Description = d.Description;
         

        this.apiServis.CategoryUpdate(data,d.Id).subscribe((s:ResultModel)=>{
          this.alert.AlertUygula(s);
          if (s.Result){
            this.GetCategory();
          }
        });
      }
    })

  }
  CategoryRemove(data: CategoryModel){
    this.confirmDialogRef = this.matDialog.open(ConfirmDialogComponent,{
      width : '500px'
    });
    this.confirmDialogRef.componentInstance.dialogMesaj=data.Title + " Removed Are You Sure ?"
    this.confirmDialogRef.afterClosed().subscribe((d:any)=>{
      if(d){
        
        this.apiServis.CategoryRemove(data.Id as number).subscribe((s:ResultModel) =>{
          this.alert.AlertUygula(s);
          if (s.Result){
            this.GetCategory();
          }
        })
      }
    })
  }
}
