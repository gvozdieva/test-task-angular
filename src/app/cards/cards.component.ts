import {Component, OnInit} from '@angular/core';
import {CardsService} from "../cards.service";

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(
    private cardsSrv: CardsService
  ) {}

  public cardsList: any;

  ngOnInit() {
    console.log('cardsIdList');
    this.cardsSrv.dataLoaded.subscribe((status) => {
      if (status) {
        this.cardsList = this.cardsSrv.cardsList;
      }
    })
  }

}
