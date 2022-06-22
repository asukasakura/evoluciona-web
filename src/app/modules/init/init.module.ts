import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitRoutingModule } from './init-routing.module';
import { InitPageComponent } from './pages/init-page/init-page.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    InitPageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    InitRoutingModule
  ]
})
export class InitModule { }
