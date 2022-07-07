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
  
  @Input() dataCards: Array<any> = [
    {
      _id: 1,
      title: 'ELECTRONIC TOLL',
      paragraph: 'Evoluciona has experience in managing electronic toll implementation projects with Multi Lane Free Flow technology.',
      image: './assets/images/icons/tmfeAutopistaIcons.svg'
    },
    {
      _id: 2,
      title: 'CENTRAL TOLL SYSTEMS, MONITORING, BACK OFFICE',
      paragraph: 'Evolve has staff experienced in the design of central toll systems including monitoring, operational back office and commercial back office.',
      image: './assets/images/icons/tmfeEstacionamientoIcons.svg'
    },
    {
      _id: 3,
      title: 'OPERATIONAL CONTROL ITS BACK OFFICE',
      paragraph: 'Los profesionales de evoluciona cuentan con experiencia en la especificación, ingeniería y dirección de proyectos de automatización ITS incluyendo entre los más comunes, gestión de tráfico, SCADA, CCTV, postes SOS y Gestión de Incidentes.',
      image: './assets/images/icons/tmfTorniqueteIcons.svg'
    },
    {
      _id: 4,
      title: 'ADVICE ON PROJECTS',
      paragraph: 'We evaluate different solutions in technological projects, considering technical aspects, support capacity, experience and the service model that suits each case.',
      image: './assets/images/icons/tmfeAdviceIcon.svg'
    },
  ]


  constructor(
    private translate: TranslateService, 
    private i18nService: I18nServiceService
    ) {
    translate.setDefaultLang('en');
    translate.use('en');

    translate.stream('CARDS.ELECTRONIC_TOLL').subscribe(res => { 
      console.log(res)
      this.cardTitle_1 = res['CARDS.ELECTRONIC_TOLL']
    });
    console.log(this.cardTitle_1)
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
