import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { InitRoutingModule } from './init-routing.module';
import { InitPageComponent } from './pages/init-page/init-page.component';
import { SharedModule } from '@shared/shared.module';

export function homeHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/home/', '.json');
}

@NgModule({
  declarations: [
    InitPageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    InitRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: homeHttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true,
    }),
  ]
})
export class InitModule { }
