import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from '@core/models/card.model';

@Component({
  selector: 'app-wrap-cards',
  templateUrl: './wrap-cards.component.html',
  styleUrls: ['./wrap-cards.component.sass']
})
export class WrapCardsComponent implements OnInit {
  
  @Input() cardImg? : any = ''
  @Input() cardTitle? : string = ''
  @Input() cardText? : string = ''
  
  @Input() dataCards: Array<CardModel> = []


  // @Input() cards = [
  //   { 
  //     title: this.cardTitle,
  //     image: this.cardImg,
  //     text: this.cardText
  //   }
  // ];


  // cities = [
  //   { name: "aaa", algo: "result" },
  //   { name: "bbb", algo: "result" },
  //   { name: "ccc", algo: "result" },
  //   { name: "ddd", algo: "result" }
  // ];

  constructor() { }
 
  ngOnInit(): void {
  }

}
