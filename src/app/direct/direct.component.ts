import { Component } from '@angular/core';
import { FirstService } from '../services/first.service';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css'],
})
export class DirectComponent {
  bgColor = 'red';
  txtColor = 'green';

  class1 = true;
  class2 = false;
  class3 = false;

  switchClass() {
    if (this.class1) {
      this.class1 = false;
      this.class2 = true;
    } else if (this.class2) {
      this.class2 = false;
      this.class3 = true;
    } else {
      this.class3 = false;
      this.class1 = true;
    }
  }

  constructor(private firstSer: FirstService) {}

  ngOnInit() {
    console.log('Dans DirectComponent');

    this.firstSer.showInfos();
  }
}
