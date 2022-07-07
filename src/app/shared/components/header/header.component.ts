import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { I18nServiceService } from 'src/app/i18n-service/i18n-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  mainMenu: { 
    defaultOptions: Array<any>, accessLink: Array<any> }
     = { defaultOptions: [], accessLink: [] 
  }

  constructor(
    private translate: TranslateService, 
    private i18nService: I18nServiceService
    ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  changeLocale(locale: string) {
    this.i18nService.changeLocale(locale);   
  }
  
  ngOnInit(): void {

    this.i18nService.localeEvent.subscribe(locale => this.translate.use(locale));

    this.mainMenu.defaultOptions = [
      {
        name: 'Inicio',
        router: ['/', 'home']
      },
      {
        name: 'Productos',
        router: ['/', 'products']
      },
      {
        name: 'Nosotros',
        router: ['/', 'us']
      },
      {
        name: 'Contacto',
        router: ['/', 'contact']
      }
    ]
  }

}
