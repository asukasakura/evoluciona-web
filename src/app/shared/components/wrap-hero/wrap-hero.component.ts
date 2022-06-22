import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrap-hero',
  templateUrl: './wrap-hero.component.html',
  styleUrls: ['./wrap-hero.component.sass']
})
export class WrapHeroComponent implements OnInit {
  @Input() headText?: string = ''
  @Input() videobackground?: string = ''
  @Input() imagebackground?: string = ''
  @Input() horizontalAlign?: 'left' | 'right' | '' = ''
  @Input() mode: 'image' | 'video' = 'image'

  constructor() { }

  ngOnInit(): void {
  }

}
