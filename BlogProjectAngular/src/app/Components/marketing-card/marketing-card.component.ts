import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'marketing-card',
  templateUrl: './marketing-card.component.html',
  styleUrls: ['./marketing-card.component.scss']
})
export class MarketingCardComponent implements OnInit {

  @Input() data: any;
  @Output() onClicked: EventEmitter<boolean> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  click() {
    this.onClicked.emit()
  }

}
