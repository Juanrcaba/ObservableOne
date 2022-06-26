import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'showProduct', loadChildren: () => import('./product-table/product-table.module').then(m => m.ProductTableModule) }, { path: 'registerProduct', loadChildren: () => import('./product-register/product-register.module').then(m => m.ProductRegisterModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
