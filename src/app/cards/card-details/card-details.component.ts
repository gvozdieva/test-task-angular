import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CardsService} from "../../cards.service";
import {HttpClient} from "@angular/common/http";
import {delay, forkJoin, of} from "rxjs";

@Component({
  selector: 'card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  public card: any;
  // @ts-ignore
  public cardId: number;
  public cardDetailsRequest: any;
  public cardCommentsRequest: any;
  public cardComments: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private CardSrv: CardsService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.cardId = +params['id'];

      forkJoin({
        sourceOne: of(this.http.get(`https://jsonplaceholder.typicode.com/posts/${this.cardId}`)
          .subscribe(response => {
            console.log('cardLoadedData!!!!', response);
            this.card = response;
          })
        ),
        sourceTwo: of(this.http.get(`https://jsonplaceholder.typicode.com/posts/${this.cardId}/comments`)
          .subscribe(response => {
            console.log('CardCommentsData!!!', response);
            this.cardComments = response;
          }))
      })
    })
  }

  public onDelete() {
    this.CardSrv.deleteCard(this.cardId);
    this.router.navigate(['/cards-list']);
  }
}
