import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CardsService} from "../../cards.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  public card: any;
  // @ts-ignore
  public cardId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private CardSrv: CardsService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.cardId = +params['id'];
      this.http.get(`https://jsonplaceholder.typicode.com/posts/${this.cardId}`)
        .subscribe(response => {
          console.log('response!!', response);
          this.card = response;
        })
    })
  }

  public onDelete() {
    this.CardSrv.deleteCard(this.cardId);
    this.router.navigate(['/cards-list']);
  }

}
