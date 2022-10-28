import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CategoryModel } from 'src/app/Models/CategoryModel';
import { ResultModel } from 'src/app/Models/ResultModel';
import { ApiService } from 'src/app/Services/apiService';
import { CategoryDialogComponent } from '../Dialogs/category-dialog/category-dialog.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  dialogRef : any = MatDialogRef<CategoryDialogComponent> ;
  // result: ResultModel = new ResultModel();
  category : CategoryModel[] = [];
  dataSource: any;
  displayedColumns =['Id', 'Title','Description','IsPublished','CreatedOn','LastModifiedOn','PublishedOn','operations']
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  constructor(public apiServis : ApiService,public matDialog : MatDialog) { }

  ngOnInit(): void {
    this.GetCategory();


     
  }
  GetCategory() {
    this.apiServis.getCategory().
      subscribe((result: ResultModel) => {
        this.category = result.ResultObject as CategoryModel[];
        this.dataSource = this.category;
        this.dataSource.sort = this.sort;
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

}
