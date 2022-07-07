import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nServiceService } from 'src/app/i18n-service/i18n-service.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent implements OnInit {

  @Input() headText?: any = ''
  @Input() videobackground? : string = ''
  @Input() imagebackground? : string = ''
  @Input() horizontalAlign?: 'left' | 'right' | '' = ''
  @Input() mode: 'image' | 'video' = 'image'

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
