import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PostModel } from 'src/app/Models/PostModel';
import { ResultModel } from 'src/app/Models/ResultModel';
import { ApiService } from 'src/app/Services/apiService';

@Component({
  selector: 'app-read-post',
  templateUrl: './read-post.component.html',
  styleUrls: ['./read-post.component.css']
})
export class ReadPostComponent implements OnInit {
  post : PostModel = new PostModel();
  tenPost: PostModel[] = [];
  constructor(public apiServis : ApiService,private sanitizer: DomSanitizer) { }
  data!: string;
  safeHtml!: SafeHtml;
  ngOnInit(): void {
    this.GetPost();
    this.loadhtml();
    this.load10Post();

  }
  GetPost() {
    this.apiServis.getPostById(2049).
      subscribe((result: ResultModel) => {
        this.post = result.ResultObject as PostModel;
        this.safeHtml = this.sanitizer.bypassSecurityTrustHtml((result.ResultObject as PostModel).PostContents)

      });

  }
  loadhtml(){
    this.data = this.post.PostContents;
    console.log(this.data)
  }
  load10Post(){
    this.apiServis.getlastCountPost(5).
      subscribe((result: PostModel[]) => {
        this.tenPost = result;
        console.log(result);
      });
  }
}
