import { Component, Input, OnInit } from '@angular/core';
import { IAction } from 'src/app/interfaces';

@Component({
  selector: 'datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent implements OnInit {
  @Input() header: string[] = [];
  @Input() keys: string[] = [];
  @Input() data: any[] = [];
  @Input() actions: IAction[] = [];
  constructor() {}

  ngOnInit(): void {}
}
