import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryComponent } from '../Components/category/category.component';
import { CategoryModel } from '../Models/CategoryModel';
import { ResultModel } from '../Models/ResultModel';
import { TagModel } from '../Models/TagModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url = "https://localhost:44300/api/";

  constructor(
    private http: HttpClient
  ) { }
  
  
  
public getCategory() : Observable<ResultModel>{
  return this.http.get<ResultModel>(this.url+ "category/get");
}
public addCategory(cate : CategoryModel) : Observable<ResultModel>{
  return this.http.post<ResultModel>(this.url+ "category/addCategory", cate);
  
}
public CategoryUpdate(category : CategoryModel,categoryId : number){
  return this.http.put(this.url+"category/updatecategory/" + categoryId,category);
}
public CategoryRemove(categoryId: number){
  return this.http.delete(this.url + "category/removecategory/"+ categoryId);
}
public getTag() : Observable<ResultModel>{
  return this.http.get<ResultModel>(this.url+ "tag/get");
}
public addTag(tag : TagModel) : Observable<ResultModel>{
  return this.http.post<ResultModel>(this.url+ "tag/addTag", tag);
  
}
public TagUpdate(tag : TagModel,categoryId : number){
  return this.http.put(this.url+"tag/updateTag/" + categoryId,tag);
}
public TagRemove(categoryId: number){
  return this.http.delete(this.url + "tag/removeTag/"+ categoryId);
}
  
}