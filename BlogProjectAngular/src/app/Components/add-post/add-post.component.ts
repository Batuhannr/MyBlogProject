import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CategoryModel } from 'src/app/Models/CategoryModel';
import { PostCategory } from 'src/app/Models/PostCategory';
import { PostModel } from 'src/app/Models/PostModel';
import { PostTagModel } from 'src/app/Models/PostTag';
import { ResultModel } from 'src/app/Models/ResultModel';
import { TagModel } from 'src/app/Models/TagModel';
import { ApiService } from 'src/app/Services/apiService';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  labelPosition: 'before' | 'after' = 'before';
  html = '';
  post: PostModel = new PostModel();
  tag: TagModel[] = [];
  newTags: TagModel[] = [];
  category: CategoryModel[] = [];
  newCategories: CategoryModel[] = [];
  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor(
    public apiServis : ApiService,
  ) { }

  ngOnInit(): void {
    this.GetTag();
    this.GetCategory();
  }
  ckeditorContent = "Hello";
  GetTag() {
    this.apiServis.getTag().
      subscribe((result: ResultModel) => {
        this.tag = result.ResultObject as TagModel[];
      });
  }
  GetCategory() {
    this.apiServis.getCategory().
      subscribe((result: ResultModel) => {
        this.category = result.ResultObject as CategoryModel[];
      });
  }
  btnSaveClick(title: string, summary : string ,contents: string,published : boolean,tags: number[],categories :number[] ){
    this.newTags = [];
    this.newCategories = [];
    this.post.Title = title;
    this.post.Summary = summary;
    this.post.PostContents = contents;
    this.post.IsPublished = published;
    tags.forEach(element => {
      const newTag: PostTagModel = new PostTagModel();
      newTag.TagId = element;
      this.newTags.push(newTag);
    });
    categories.forEach(element => {
    const newCategory: PostCategory= new PostCategory();
    newCategory.CategoryId = element;
    this.newCategories.push(newCategory);
    });
    this.post.PostTags = this.newTags;
    this.post.PostCategories = this.newCategories;
    this.apiServis.addPost(this.post).subscribe((s:ResultModel)=>{
      alert(s);
    })
    
  }

}
