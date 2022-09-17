import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'item',
    loadChildren: () =>
      import('./pages/item-page/item-page.module').then(
        (m) => m.ItemPageModule
      ),
  },
  {
    path: 'transact',
    loadChildren: () =>
      import('./pages/transaction-page/transaction-page.module').then(
        (m) => m.TransactionPageModule
      ),
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
