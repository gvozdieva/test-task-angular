import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardsService } from "./cards.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-task-angular';

  date: Date = new Date();

  constructor(
    private cardsSrv: CardsService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    console.log('kek');
    this.http.get('https://jsonplaceholder.typicode.com/posts/')
      .subscribe(response => {
        console.log('response!!', response);
        // this.cardsSrv.GetingCards(response);
        this.cardsSrv.updateCardsData(response);
      })
  }
}
