import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from '@core/models/card.model';

@Component({
  selector: 'app-wrap-description',
  templateUrl: './wrap-description.component.html',
  styleUrls: ['./wrap-description.component.sass']
})
export class WrapDescriptionComponent implements OnInit {

  @Input() descriptionTitle? : string = ''
  @Input() descriptionText? : string = ''
  @Input() dataCards : Array<CardModel> = []

  constructor() { }

  ngOnInit(): void {
  }

}
