import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lastfivepost',
  templateUrl: './lastfivepost.component.html',
  styleUrls: ['./lastfivepost.component.css']
})
export class LastfivepostComponent implements OnInit {
@Input() post: any;
@Input() index: any;
@Output() onClick: EventEmitter<number> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  choosePost(Id: number){
    this.onClick.emit(Id)
  }

}
