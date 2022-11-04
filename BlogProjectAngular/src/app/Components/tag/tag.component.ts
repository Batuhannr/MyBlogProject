import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TagModel } from 'src/app/Models/TagModel';
import { ResultModel } from 'src/app/Models/ResultModel';
import { ApiService } from 'src/app/Services/apiService';
import { MyAlertService } from 'src/app/Services/MyAlertService';
import { ConfirmDialogComponent } from '../Dialogs/confirm-dialog/confirm-dialog.component';
import {TagDialogComponent} from '../Dialogs/tag-dialog/tag-dialog.component';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  dialogRef : any = MatDialogRef<TagDialogComponent> ;
  confirmDialogRef: any = MatDialogRef<ConfirmDialogComponent>;
  // result: ResultModel = new ResultModel();
  tag : TagModel[] = [];
  dataSource: any;
  displayedColumns =['Id', 'Title','Description','IsPublished','CreatedOn','LastModifiedOn','PublishedOn','operations']
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  constructor(public apiServis : ApiService,public matDialog : MatDialog, public alert : MyAlertService) { }

  ngOnInit(): void {
    this.GetTag(); 
  }
  TagFilter(e: any){
    var deger = e.target.value;
    this.dataSource.filter = deger.trim().toLowerCase();
    console.log(this.dataSource.filter)
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
  GetTag() {
    this.apiServis.getTag().
      subscribe((result: ResultModel) => {
        this.tag = result.ResultObject as TagModel[];
        this.dataSource = new MatTableDataSource( this.tag);
      this.dataSource.paginator = this.paginator;

      });
  }
  TagAdd(){
    var newData : TagModel = new TagModel();
    this.dialogRef = this.matDialog.open(TagDialogComponent,{
      width: '300px',
      data:{
        data:newData,
        operation: 'add'
      }
    });
    this.dialogRef.afterClosed().subscribe((d:any)=>{
      if (d) {
        this.apiServis.addTag(d).subscribe((s:ResultModel)=>{
          this.GetTag();
        })
      }
    })
  }

  TagUpdate(data:TagModel){
    this.dialogRef= this.matDialog.open(TagDialogComponent,{
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
         

        this.apiServis.TagUpdate(data,d.Id).subscribe((s:ResultModel)=>{
          this.alert.AlertUygula(s);
          if (s.Result){
            this.GetTag();
          }
        });
      }
    })

  }
  TagRemove(data: TagModel){
    this.confirmDialogRef = this.matDialog.open(ConfirmDialogComponent,{
      width : '500px'
    });
    this.confirmDialogRef.componentInstance.dialogMesaj=data.Title + " Removed Are You Sure ?"
    this.confirmDialogRef.afterClosed().subscribe((d:any)=>{
      if(d){
        
        this.apiServis.TagRemove(data.Id as number).subscribe((s:ResultModel) =>{
          this.alert.AlertUygula(s);
          if (s.Result){
            this.GetTag();
          }
        })
      }
    })
  }
}
