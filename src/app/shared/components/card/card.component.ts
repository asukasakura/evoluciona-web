import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from '@core/models/card.model';
import { TranslateService } from '@ngx-translate/core';
import { I18nServiceService } from 'src/app/i18n-service/i18n-service.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() cardImg? : any = ''
  @Input() cardTitle? : string = ''
  @Input() cardText? : string = ''
  
  @Input() cards: CardModel = { _id: 0, title: '', image: '', paragraph: '' };

  constructor(
    private translate: TranslateService, 
    private i18nService: I18nServiceService
    ) {
    translate.setDefaultLang('en');
    translate.use('en');
   }

  ngOnInit(): void {
    this.i18nService.localeEvent.subscribe(locale => this.translate.use(locale)); 
  }

}
