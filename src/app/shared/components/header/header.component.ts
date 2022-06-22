import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

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
    public translate: TranslateService,
    private router: Router
  ) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Inicio',
        router: ['/', 'inicio']
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
