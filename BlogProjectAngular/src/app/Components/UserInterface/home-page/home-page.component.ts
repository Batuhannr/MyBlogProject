import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/Models/PostModel';
import { ApiService } from 'src/app/Services/apiService';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  posts : PostModel[] =[];
  
  constructor(public apiService : ApiService) { }
  
  ngOnInit(): void {
    this.apiService.getlastCountPost(5).
      subscribe((result: PostModel[]) => {
        this.posts = result;
        console.log(result);
      });
  }
}
