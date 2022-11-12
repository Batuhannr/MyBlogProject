import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentModel } from 'src/app/Models/CommentModel';
import { PostModel } from 'src/app/Models/PostModel';
import { ResultModel } from 'src/app/Models/ResultModel';
import { ApiService } from 'src/app/Services/apiService';

@Component({
  selector: 'app-read-post',
  templateUrl: './read-post.component.html',
  styleUrls: ['./read-post.component.css']
})
export class ReadPostComponent implements OnInit {
  post: PostModel = new PostModel();
  tenPost: PostModel[] = [];
  mostPost: PostModel[] = [];
  baseComment: CommentModel[] = [];
  constructor(public apiServis: ApiService, private sanitizer: DomSanitizer, private router: Router, private route: ActivatedRoute) { }
  data!: string;
  safeHtml!: SafeHtml;
  visible: boolean = false;
  id!: number;
  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.id = this.route.snapshot.params['id'];
    this.GetPost(this.id);
    this.loadhtml();
    this.load5Post();
    this.mostPosts();
  }
  GetPost(id: number) {
    this.apiServis.getPostById(id).
      subscribe((result: ResultModel) => {
        this.post = result.ResultObject as PostModel;
        this.safeHtml = this.sanitizer.bypassSecurityTrustHtml((result.ResultObject as PostModel).PostContents)
        console.log(this.post.Comments)
      });
  }
  loadhtml() {
    this.data = this.post.PostContents;
    console.log(this.data)
  }
  navigateToPost(Id: number) {
    this.router.navigate([`readpost/${Id}`])
  }

  load5Post() {
    this.apiServis.getlastCountPostNull(5).
      subscribe((result: PostModel[]) => {
        this.tenPost = result;
        console.log(result);
      });
  }
  mostPosts() {
    this.apiServis.getMostPopularPost(5).
      subscribe((result: PostModel[]) => {
        this.mostPost = result;
        console.log(result);
      });
  }
  addComment(content: string, postedBy: string) {
    const newComment: CommentModel = new CommentModel();
    newComment.PostedBy = postedBy;
    newComment.CommentContents = content;
    newComment.PostId = this.id;
    this.apiServis.addComment(newComment).subscribe((s) => {
      if (s.Result) {
        this.ngOnInit();

      }
      else {
        alert("Hata Oluştu");
      }
    })
  }
  visibleChange(divId: number) {
    var div = document.getElementById("cevap" + divId);
    div?.style.removeProperty("display");
  }
  addCevap(divId: number, commentId: number, content: string, postby: string) {
    const newComment: CommentModel = new CommentModel();
    newComment.PostedBy = postby;
    newComment.CommentContents = content;
    newComment.PostId = this.id;
    newComment.ParentId = commentId;
    this.apiServis.addComment(newComment).subscribe((s) => {
      if (s.Result) {
        alert("Yorum Eklendi");
        var div = document.getElementById("cevap" + divId);
        div!.style.display = 'none';
        this.ngOnInit();

      }
      else {
        alert("Hata Oluştu");
      }
    })
  }
  vazgec(divId: number,) {
    var div = document.getElementById("cevap" + divId);
    div!.style.display = 'none';
  }
}
