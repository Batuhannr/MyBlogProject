import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PostModel } from 'src/app/Models/PostModel';
import { ResultModel } from 'src/app/Models/ResultModel';
import { ApiService } from 'src/app/Services/apiService';
import { MyAlertService } from 'src/app/Services/MyAlertService';
import { PostDialogComponent } from '../Dialogs/post-dialog/post-dialog.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  dialogRef : any = MatDialogRef<PostDialogComponent> ;
  confirmDialogRef: any = MatDialogRef<PostDialogComponent>;
  // result: ResultModel = new ResultModel();
  posts : PostModel[] = [];
  dataSource: any;
  displayedColumns =['Id', 'Title','PostContents','IsPublished','CreatedOn','LastModifiedOn','PublishedOn','Summary','operations']
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  constructor(public apiServis : ApiService,public matDialog : MatDialog, public alert : MyAlertService) { }

  ngOnInit(): void {
    this.GetPost(); 
  }
  PostFilter(e: any){
    var deger = e.target.value;
    this.dataSource.filter = deger.trim().toLowerCase();
    console.log(this.dataSource.filter)
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
    
  }
  GetPost() {
    this.apiServis.getPostImageNull().
      subscribe((result: ResultModel) => {
        this.posts = result.ResultObject as PostModel[];
        this.dataSource = new MatTableDataSource( this.posts);
      this.dataSource.paginator = this.paginator;
      console.log(this.posts)
      });
  }
  PostAdd(){
    var newData : PostModel = new PostModel();
    this.dialogRef = this.matDialog.open(PostDialogComponent,{
      width: '300px',
      data:{
        data:newData,
        operation: 'add'
      }
    });
    this.dialogRef.afterClosed().subscribe((d:any)=>{
      if (d) {
        this.apiServis.addPost(d).subscribe((s:ResultModel)=>{
          this.GetPost();
        })
      }
    })
  }

  PostUpdate(data:PostModel){
    this.dialogRef= this.matDialog.open(PostDialogComponent,{
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
         data.PostContents = d.PostContents;
        this.apiServis.PostUpdate(data,d.Id).subscribe((s:ResultModel)=>{
          this.alert.AlertUygula(s);
          if (s.Result){
            this.GetPost();
          }
        });
      }
    })

  }
  PostRemove(data: PostModel){
    this.confirmDialogRef = this.matDialog.open(PostDialogComponent,{
      width : '500px'
    });
    this.confirmDialogRef.componentInstance.dialogMesaj=data.Title + " Removed Are You Sure ?"
    this.confirmDialogRef.afterClosed().subscribe((d:any)=>{
      if(d){
        
        this.apiServis.PostRemove(data.Id as number).subscribe((s:ResultModel) =>{
          this.alert.AlertUygula(s);
          if (s.Result){
            this.GetPost();
          }
        })
      }
    })
  }
}
