import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent {
  @Input() allCandidats: Candidat[];
  @Output() candToCv = new EventEmitter();

  sendCandToCv(cand) {
    this.candToCv.emit(cand);
  }
}
