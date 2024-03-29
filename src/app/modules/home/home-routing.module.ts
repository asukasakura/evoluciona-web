import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import(`@modules/init/init.module`).then(m => m.InitModule)
  },
  {
    path: 'products',
    loadChildren: () => import(`@modules/products/products.module`).then(m => m.ProductsModule)
  },
  {
    path: 'contact',
    loadChildren: () => import(`@modules/contact/contact.module`).then(m => m.ContactModule)
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
