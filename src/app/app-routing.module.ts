import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./ui/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./ui/pages/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./ui/pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./ui/pages/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
