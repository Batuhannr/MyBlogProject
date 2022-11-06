import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PostModel } from 'src/app/Models/PostModel';
import { ResultModel } from 'src/app/Models/ResultModel';
import { ApiService } from 'src/app/Services/apiService';
import { ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-post-priview-component',
  templateUrl: './post-priview-component.component.html',
  styleUrls: ['./post-priview-component.component.css'],
  encapsulation: ViewEncapsulation.None ,
})
export class PostPriviewComponentComponent implements OnInit {

  post: PostModel = new PostModel();
  constructor(public apiServis: ApiService,private sanitizer: DomSanitizer) { }
  data!: string;
  safeHtml!: SafeHtml;

  ngOnInit(): void {
    this.getpostId();
    this.loadhtml();

  }
  getpostId(){
    this.apiServis.getPostById(1041).
      subscribe((result: ResultModel) => {
        this.post = result.ResultObject as PostModel;
        this.safeHtml = this.sanitizer.bypassSecurityTrustHtml((result.ResultObject as PostModel).PostContents)
      });
    }
  loadhtml(){
    this.data = this.post.PostContents;
    console.log(this.data);
  }
}
