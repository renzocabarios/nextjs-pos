import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'main-btn',
  templateUrl: './main-btn.component.html',
  styleUrls: ['./main-btn.component.scss'],
})
export class MainBtnComponent implements OnInit {
  @Input() title: string = 'No Title';
  @Output() onClick = new EventEmitter<any>();

  onPress(event: any) {
    this.onClick.emit(event);
  }

  constructor() {}

  ngOnInit(): void {}
}
