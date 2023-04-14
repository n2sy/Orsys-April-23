import { Injectable } from '@angular/core';
import { SecondService } from './second.service';

@Injectable()
export class FirstService {
  constructor(private second: SecondService) {}

  showInfos() {
    console.log('Je suis le First Service !');
    this.second.afficher();
  }
}
