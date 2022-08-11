import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrap-cards',
  templateUrl: './wrap-cards.component.html',
  styleUrls: ['./wrap-cards.component.sass']
})
export class WrapCardsComponent implements OnInit {

  @Input() nCards : string = 'grid-cols-4'
  
  @Input() dataCards: Array<any> = []
  param = {value: 'world'};

  constructor() { }
 
  ngOnInit(): void {
  }

}
