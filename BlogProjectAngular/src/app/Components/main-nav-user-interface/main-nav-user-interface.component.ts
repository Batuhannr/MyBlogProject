import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryModel } from 'src/app/Models/CategoryModel';
import { ResultModel } from 'src/app/Models/ResultModel';
import { ApiService } from 'src/app/Services/apiService';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-main-nav-user-interface',
  templateUrl: './main-nav-user-interface.component.html',
  styleUrls: ['./main-nav-user-interface.component.css']
})
export class MainNavUserInterfaceComponent implements OnInit {
  category: CategoryModel[] = [];
  @Input() categories: CategoryModel[] =[];
  @Output() onClick: EventEmitter<number> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {

  }

}
