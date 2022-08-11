import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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
  

  selectDiv = false;
  
  toggleDiv() {
    this.selectDiv = !this.selectDiv;
  }

  // const menu = document.getElementById('menu');
  // function toggleMenu(this: any) {
  //     this.menu.classList.toggle('hidden');
  //     this.menu.classList.toggle('w-full');
  //     this.menu.classList.toggle('h-screen');
  // }

  constructor(
    private translate: TranslateService, 
    private i18nService: I18nServiceService,
    private router: Router
    ) {
    translate.setDefaultLang('en');

    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.selectDiv = false;
      }
    });
  }

  changeLocale(locale: string) {
    this.i18nService.changeLocale(locale);   
  }

  
  ngOnInit(): void {

    this.i18nService.localeEvent.subscribe(locale => this.translate.use(locale));

    this.mainMenu.defaultOptions = [
      {
        name: 'HOME',
        router: ['/', 'home']
      },
      {
        name: 'PRODUCTS',
        router: ['/', 'products']
      },
      {
        name: 'CONTACT',
        router: ['/', 'contact']
      }
    ]
  }

}