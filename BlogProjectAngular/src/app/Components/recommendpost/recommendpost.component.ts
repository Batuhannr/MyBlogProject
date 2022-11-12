import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PostModel } from 'src/app/Models/PostModel';

@Component({
  selector: 'app-recommendpost',
  templateUrl: './recommendpost.component.html',
  styleUrls: ['./recommendpost.component.css']
})
export class RecommendpostComponent implements OnInit {
  @Input() post: PostModel =new PostModel();
  @Input() index: number =0;
  @Input() headerText: string= "";
  @Output() onClick: EventEmitter<number> = new EventEmitter()
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  choosePost(Id: number){
    this.onClick.emit(Id)
  }
}
