import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, Subscriber } from 'rxjs';
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
  imageSource ?:string;
  myImage?: Observable<any>;
  baseImageString?: string;

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor(
    public apiServis : ApiService,
    private sanitizer: DomSanitizer,
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
    this.post.PostHeaderImage = this.baseImageString;
    this.apiServis.addPost(this.post).subscribe((s:ResultModel)=>{
      alert(s);
    })
    
    
  }
  onChanged($event: any) {
    const file = $event.target.files[0];
    this.convertToBase64(file);
  }

  convertToBase64(file: File) {
    this.myImage = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      subscriber.next(fileReader.result);
      subscriber.complete();
      this.baseImageString = fileReader.result as string
    };


    fileReader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }

}
