import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemPageComponent } from './item-page.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    ItemPageComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ItemPageModule { }
