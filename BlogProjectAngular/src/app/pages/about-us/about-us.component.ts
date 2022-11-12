import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/Models/CategoryModel';
import { PostModel } from 'src/app/Models/PostModel';
import { ResultModel } from 'src/app/Models/ResultModel';
import { ApiService } from 'src/app/Services/apiService';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./style.css','./aos.css','./aos-animation.css','./roadmap.css']
})
export class AboutUsComponent implements OnInit {
  posts: PostModel[] = [];
  category: CategoryModel[] = [];

  constructor(private router: Router,public apiService: ApiService) { }

  ngOnInit(): void {
    this.GetCategory();
    this.apiService.getlastCountPost(5).
      subscribe((result: PostModel[]) => {
        this.posts = result;
        console.log(result);
      });
  }

  navigateToPost(Id: number) {
    this.router.navigate([`readpost/${Id}`])
  }
  GetCategory() {
    this.apiService.getCategory().
      subscribe((result: ResultModel) => {
        this.category = result.ResultObject as CategoryModel[];
      });
  }
}
