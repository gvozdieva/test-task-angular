import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CardsService {

  public cardsList: any = [];
  public cardsDataSubject = new BehaviorSubject<any>([]);
  public dataLoaded = new BehaviorSubject<any>(false);

  public card: any;

  public GetingCards(cardsList: any) {
    this.cardsList = cardsList;
  }

  public getById(id: number) {
    this.cardsList.find((card: any) => {
      if (card.id === id) {
        this.card = card;
      }
    });
  }

  public deleteCard(id: number) {
    for (let i = 0; i < this.cardsList.length; i++) {
      if (this.cardsList[i].id === id) {
        this.cardsList.splice(i, 1);
      }
    }
  }

  public updateCardsData(data?: any) {
    // const cardsData = this.cardsDataSubject.getValue();
    this.cardsList = data;
    this.dataLoaded.next(true);
  }
}
