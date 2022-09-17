import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemPageComponent } from './item-page.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from 'src/app/utilities/utilities.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ItemPageComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },
  {
    path: ':id/edit',
    component: EditComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [ItemPageComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilitiesModule,
    ReactiveFormsModule,
  ],
})
export class ItemPageModule {}
