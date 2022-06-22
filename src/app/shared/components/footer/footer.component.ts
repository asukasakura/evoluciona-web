import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  mainMenu: { 
    defaultOptions: Array<any>, accessLink: Array<any> }
     = { defaultOptions: [], accessLink: [] 
  }
  
  constructor() { }
  
  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Inicio',
        router: ['/']
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
