import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nServiceService } from 'src/app/i18n-service/i18n-service.service';

@Component({
  selector: 'app-init-page',
  templateUrl: './init-page.component.html',
  styleUrls: ['./init-page.component.sass']
})
export class InitPageComponent implements OnInit {
  
  cardTitle_1!: string;
  cardTitle_2!: string;
  cardTitle_3!: string;
  cardTitle_4!: string;
  cardParagraph_1!: string;
  cardParagraph_2!: string;
  cardParagraph_3!: string;
  cardParagraph_4!: string;
  
  nCards = 'grid-cols-1 md:grid-cols-4'
  gridCols = 'grid-cols-1 md:grid-cols-6'
  spanCol1 = 'md:col-span-2'
  spanCol2 = 'md:col-span-4'
  startCol2 = 'md:col-start-3'
  
  @Input() dataCards: Array<any> = [
    {
      title: 'ELECTRONIC_TOLL',
      image: './assets/images/icons/tmfeAutopistaIcons.svg',
      paragraph: 'ELECTRONIC_TOLL_TEXT'
    },
    {
      title: 'CENTRAL_TOLL_SYSTEMS_MONITORING_BACK_OFFICE',
      image: './assets/images/icons/tmfeEstacionamientoIcons.svg',
      paragraph: 'CENTRAL_TOLL_SYSTEMS_MONITORING_BACK_OFFICE_TEXT'
    },
    {
      title: 'OPERATIONAL_CONTROL_ITS_BACK_OFFICE',
      image: './assets/images/icons/tmfTorniqueteIcons.svg',
      paragraph: 'OPERATIONAL_CONTROL_ITS_BACK_OFFICE_TEXT'
    },
    {
      title: 'ADVICE_ON_PROJECTS',
      image: './assets/images/icons/tmfeAdviceIcon.svg',
      paragraph: 'ADVICE_ON_PROJECTS_TEXT'
    }
  ]


  constructor(
    private translate: TranslateService, 
    private i18nService: I18nServiceService
    ) {
    translate.setDefaultLang('en');

    // translate.stream('CARDS.ELECTRONIC_TOLL').subscribe(res => { 
      // console.log(res)
    //   this.cardTitle_1 = res['CARDS.ELECTRONIC_TOLL']
    // });
    // console.log(this.cardTitle_1)
    // translate.get([
    //   'CARDS.ELECTRONIC_TOLL'
    // ])
    //   .subscribe(translations => {
    //     this.cardTitle_1 = translations['CARDS.ELECTRONIC_TOLL'];
    //   });
  }

  ngOnInit(): void {
    this.i18nService.localeEvent.subscribe(locale => this.translate.use(locale)); 
    
  }
}
