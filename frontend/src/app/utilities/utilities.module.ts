import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
import { ScreenLayoutComponent } from './screen-layout/screen-layout.component';
import { MainBtnComponent } from './main-btn/main-btn.component';

@NgModule({
  declarations: [DatatableComponent, ScreenLayoutComponent, MainBtnComponent],
  imports: [CommonModule],
  exports: [DatatableComponent, ScreenLayoutComponent, MainBtnComponent],
})
export class UtilitiesModule {}
