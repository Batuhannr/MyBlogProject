import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CategoryModel } from 'src/app/Models/CategoryModel';
import { ResultModel } from 'src/app/Models/ResultModel';
import { ApiService } from 'src/app/Services/apiService';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  // result: ResultModel = new ResultModel();
  category : CategoryModel[] = [];
  dataSource: any;
  displayedColumns =['Id', 'Title','Description','IsPublished','CreatedOn','LastModifiedOn','PublishedOn','islemler']
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  constructor(public apiServis : ApiService) { }

  ngOnInit(): void {
    this.apiServis.getCategory().
    subscribe((result : ResultModel)=> {
      this.category = result.ResultObject as CategoryModel[];
    })

  }

}
