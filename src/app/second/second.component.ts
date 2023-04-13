import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent {
  @Input() txtColor = 'blue';
  @Output() msgToParent = new EventEmitter();

  sendMsg() {
    this.msgToParent.emit('Message envoyé par Second Component');
  }
}
