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
        name: 'HOME',
        router: ['/']
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
