import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent implements OnInit {

  @Input() headText?: string = ''
  @Input() videobackground? : string = ''
  @Input() imagebackground? : string = ''
  @Input() horizontalAlign?: 'left' | 'right' | '' = ''
  @Input() mode: 'image' | 'video' = 'image'

  constructor() { }

  ngOnInit(): void {
  }

}
