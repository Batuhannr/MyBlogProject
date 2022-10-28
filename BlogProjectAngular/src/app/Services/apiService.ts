import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryComponent } from '../Components/category/category.component';
import { ResultModel } from '../Models/ResultModel';

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
public addCategory(cate : CategoryComponent) : Observable<ResultModel>{
  return this.http.post<ResultModel>(this.url+ "category/addCategory", cate);

}
  
}