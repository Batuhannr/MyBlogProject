import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryModel } from '../Models/CategoryModel';
import { ResultModel } from '../Models/ResultModel';
import { ApiService } from './apiService';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public url = environment.publicUrl;
    categoryList: CategoryModel[] = []
    $category: BehaviorSubject<CategoryModel[]> = new BehaviorSubject(this.categoryList =this.getCategory())

    constructor(public apiServis: ApiService) { }
    getCategory() : CategoryModel[]{
        let categories : CategoryModel[] = [];
        this.apiServis.getCategory().
            subscribe((result: ResultModel) => {
                categories = result.ResultObject as CategoryModel[];
            })
            return categories;
    }
}
