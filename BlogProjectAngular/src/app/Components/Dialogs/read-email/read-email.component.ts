import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryModel } from 'src/app/Models/CategoryModel';
import { EmailModel } from 'src/app/Models/EmailModel';
import { ApiService } from 'src/app/Services/apiService';
import { CategoryDialogComponent } from '../category-dialog/category-dialog.component';

@Component({
  selector: 'app-read-email',
  templateUrl: './read-email.component.html',
  styleUrls: ['./read-email.component.css']
})
export class ReadEmailComponent implements OnInit {

  DialogHeader: string = "";
  newData : EmailModel = new EmailModel();
  operation : string = "";
  frm !: FormGroup ;
  constructor(
    public dialogRef : MatDialogRef<ReadEmailComponent>,
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
      NameSurname: [this.newData.NameSurname],
      Subject: [this.newData.Subject],
      Content: [this.newData.Content],
      Email: [this.newData.Email],
    })
  }
}
