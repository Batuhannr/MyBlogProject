import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TagModel } from 'src/app/Models/TagModel';
import { ApiService } from 'src/app/Services/apiService';

@Component({
  selector: 'app-tag-dialog',
  templateUrl: './tag-dialog.component.html',
  styleUrls: ['./tag-dialog.component.css']
})
export class TagDialogComponent implements OnInit {

  DialogHeader: string = "";
  newData : TagModel = new TagModel();
  operation : string = "";
  frm !: FormGroup ;
  constructor(
    public dialogRef : MatDialogRef<TagDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public frmBuild : FormBuilder,
    public apiService: ApiService,
  ) {

    this.operation = data.operation;
    this.newData = data.data;
    if (this.operation == 'add') {
      this.DialogHeader = 'Add new Tag'
    }
    else if (this.operation == 'update'){
      this.DialogHeader ='Update Tag' 
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
