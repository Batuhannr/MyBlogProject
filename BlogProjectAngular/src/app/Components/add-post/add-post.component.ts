import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, Subscriber } from 'rxjs';
import { CategoryModel } from 'src/app/Models/CategoryModel';
import { PostCategory } from 'src/app/Models/PostCategory';
import { PostModel } from 'src/app/Models/PostModel';
import { PostTagModel } from 'src/app/Models/PostTag';
import { ResultModel } from 'src/app/Models/ResultModel';
import { TagModel } from 'src/app/Models/TagModel';
import { ApiService } from 'src/app/Services/apiService';
import { FileUploadService } from 'src/app/Services/file-upload.service';

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
  imageSource?: string;
  myImage?: Observable<any>;
  baseImageString?: string;
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file!: File;
  uploadForm!: FormGroup;

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor(
    public apiServis: ApiService,
    private sanitizer: DomSanitizer,
    private fileUploadService: FileUploadService,
    private formBuilder: FormBuilder,
    private httpClient : HttpClient
  ) { }

  ngOnInit(): void {
    this.GetTag();
    this.GetCategory();
    this.uploadForm  = this.formBuilder.group({
      profile: ['']
    });
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

  btnSaveClick(title: string, summary: string, contents: string, published: boolean, tags: number[], categories: number[]) {
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
      const newCategory: PostCategory = new PostCategory();
      newCategory.CategoryId = element;
      this.newCategories.push(newCategory);
    });
    this.post.PostTags = this.newTags;
    this.post.PostCategories = this.newCategories;
    this.post.PostHeaderImage = this.baseImageString;
    this.apiServis.addPost(this.post).subscribe((s: ResultModel) => {
      alert(s);
    })


  }
  onChanged($event: any) {
    const file = $event.target.files[0];
    this.file = $event.target.files[0];
    this.convertToBase64(file);
    // this.onUpload();
    if ($event.target.files.length > 0) {
      const file = $event.target.files[0];
      this.uploadForm.get('profile')?.setValue(file);
    }
    const formData = new FormData();
    formData.append('image', this.file, this.file.name);
    const req =new HttpRequest('POST', `http://localhost:8080/upload`, formData, {
      reportProgress: true,
      responseType: 'json',
    });
    console.log(req)
    // this.httpClient.post<any>("http://localhost:8080/upload/image/", formData).subscribe(
    //   (res) => console.log(res),
    //   (err) => console.log(err)
    // );

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
  onUpload() {
    console.log("girdi")
    this.fileUploadService.upload(this.file).subscribe(
      (event: any) => {
        console.log("girdi2");

        if (typeof (event) === 'object') {
          // Short link via api response
          this.shortLink = event.link;
          console.log("girdi3");

          console.log(this.shortLink);
          this.loading = false; // Flag variable 
        }
      }
    );
  }
}
