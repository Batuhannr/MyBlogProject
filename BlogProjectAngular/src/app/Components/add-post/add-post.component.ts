import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { finalize, Observable, Subscriber } from 'rxjs';
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
  title = "cloudsSorage";
  selectedFile?: File;
  fb : any;
  downloadURL?: Observable<string>;
  headerImageUrl: string= "";

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor(
    public apiServis: ApiService,
    private sanitizer: DomSanitizer,
    private fileUploadService: FileUploadService,
    private formBuilder: FormBuilder,
    private httpClient : HttpClient,
    private storage: AngularFireStorage
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
  btnImageSaveClick(){
    var n = Date.now();
    const filePath = `PostHeaderImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`PostHeaderImages/${n}`, this.selectedFile);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
              this.headerImageUrl = url;
            }
            // console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
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
    this.post.PostHeaderImage = this.headerImageUrl;
    this.apiServis.addPost(this.post).subscribe((s: ResultModel) => {
      alert(s);
    })
    


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
  onFileSelected(event:any) {
    this.selectedFile = event.target.files[0];
  }
  
}
