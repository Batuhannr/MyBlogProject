import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryComponent } from '../Components/category/category.component';
import { CategoryModel } from '../Models/CategoryModel';
import { CommentModel } from '../Models/CommentModel';
import { PostModel } from '../Models/PostModel';
import { ResultModel } from '../Models/ResultModel';
import { TagModel } from '../Models/TagModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url = environment.publicUrl;

  constructor(
    private http: HttpClient
  ) { }

  public getCategory(): Observable<ResultModel> {
    return this.http.get<ResultModel>(this.url + "category/get");
  }
  public addCategory(cate: CategoryModel): Observable<ResultModel> {
    return this.http.post<ResultModel>(this.url + "category/addCategory", cate);

  }
  public CategoryUpdate(category: CategoryModel, categoryId: number) {
    return this.http.put(this.url + "category/updatecategory/" + categoryId, category);
  }
  public CategoryRemove(categoryId: number) {
    return this.http.delete(this.url + "category/removecategory/" + categoryId);
  }
  public getTag(): Observable<ResultModel> {
    return this.http.get<ResultModel>(this.url + "tag/get");
  }
  public addTag(tag: TagModel): Observable<ResultModel> {
    return this.http.post<ResultModel>(this.url + "tag/addTag", tag);

  }
  public TagUpdate(tag: TagModel, categoryId: number) {
    return this.http.put(this.url + "tag/updateTag/" + categoryId, tag);
  }
  public TagRemove(categoryId: number) {
    return this.http.delete(this.url + "tag/removeTag/" + categoryId);
  }


  public getPost(): Observable<ResultModel> {
    return this.http.get<ResultModel>(this.url + "post/get");
  }
  public getPostImageNull(): Observable<ResultModel> {
    return this.http.get<ResultModel>(this.url + "post/getnull");
  }
  public getPostById(postId: number): Observable<ResultModel> {
    return this.http.get<ResultModel>(this.url + "post/get/" + postId);
  }
  public addPost(post: PostModel): Observable<ResultModel> {
    return this.http.post<ResultModel>(this.url + "post/addPost", post);

  }
  public PostUpdate(post: PostModel, postId: number) {
    return this.http.put(this.url + "post/updatePost/" + postId, post);
  }
  public PostRemove(postId: number) {
    return this.http.delete(this.url + "post/removePost/" + postId);
  }

  public getlastCountPost(count: number): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.url + "userinterface/getlastposts/" + count);
  }
  public getlastCountPostNull(count: number): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.url + "userinterface/getlastpostsnull/" + count);
  }
  public getMostPopularPost(count: number): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.url + "userinterface/getmostposts/" + count);
  }
  public addComment(comment: CommentModel): Observable<ResultModel> {
    return this.http.post<ResultModel>(this.url + "comment/addComment", comment);
  }
  getToken(kullaniciadi: string,parola:string) : Observable<any>{
    var data="username=" + kullaniciadi + "&password=" + parola + "&grant_type=password";
    var reqHeader = new HttpHeaders({"Content-Type": "application/x-www-form-urlencoded"});
    return this.http.post("https://localhost:44300/api/token",data,{headers: reqHeader});
  }
  AuthControl(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}