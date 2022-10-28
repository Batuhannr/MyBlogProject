import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryModel } from 'src/app/Models/CategoryModel';
import { ApiService } from 'src/app/Services/apiService';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.css']
})
export class CategoryDialogComponent implements OnInit {

  DialogHeader: string = "";
  newData : CategoryModel = new CategoryModel();
  operation : string = "";
  frm !: FormGroup ;
  constructor(
    public dialogRef : MatDialogRef<CategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public frmBuild : FormBuilder,
    public apiService: ApiService,
  ) {

    this.operation = data.operation;
    this.newData = data.data;
    if (this.operation == 'add') {
      this.DialogHeader = 'Add new Category'
    }
    else if (this.operation == 'update'){
      this.DialogHeader ='Update Category' 
    }
    this.frm = this.FormCreate();
   } 

  ngOnInit(): void {
  }

  FormCreate(){
    return this.frmBuild.group({
      Id : [this.newData.Id],
      IsPublished: [this.newData.IsPublished],
      Title: [this.newData.Title],
      Description: [this.newData.Description],
      CreatedOn: [this.newData.CreatedOn],
      PublishedOn: [this.newData.PublishedOn],
      LastModifiedOn: [this.newData.LastModifiedOn],

    })
  }
}
