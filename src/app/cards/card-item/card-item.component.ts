import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() public id?: number;
  @Input() public title?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
