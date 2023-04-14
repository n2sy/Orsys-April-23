import { Component } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css'],
})
export class MsWordComponent {
  listFonts = ['', 'Garamond', 'Phosphate', 'Arial'];
  bg;
  cl;
  sz;
  font;

  changeSize(newInput) {
    console.log(newInput.value);
    this.sz = newInput.value + 'px';
  }
}
