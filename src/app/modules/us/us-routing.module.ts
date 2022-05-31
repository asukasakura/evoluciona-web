import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsPageComponent } from './us-page/us-page.component';

const routes: Routes = [
  {
    path: '',
    component: UsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsRoutingModule { }
