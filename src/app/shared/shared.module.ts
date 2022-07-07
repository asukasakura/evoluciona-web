import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { WrapHeroComponent } from './components/wrap-hero/wrap-hero.component';
import { DescriptionComponent } from './components/description/description.component';
import { WrapDescriptionComponent } from './components/wrap-description/wrap-description.component';
import { WrapCardsComponent } from './components/wrap-cards/wrap-cards.component';
import { CardComponent } from './components/card/card.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    WrapHeroComponent,
    DescriptionComponent,
    WrapDescriptionComponent,
    WrapCardsComponent,
    CardComponent,
    CallToActionComponent
  ],
  imports: [
    RouterModule,
    MaterialModule,
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true,
    }),
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    WrapHeroComponent,
    HeroComponent,
    DescriptionComponent,
    WrapDescriptionComponent,
    WrapCardsComponent,
    CardComponent,
    CallToActionComponent
  ]
})
export class SharedModule { }
