import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionPageComponent } from './transaction-page.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from 'src/app/utilities/utilities.module';

const routes: Routes = [
  {
    path: '',
    component: TransactionPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [TransactionPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class TransactionPageModule {}
