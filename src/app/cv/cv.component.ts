import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  tabCandidats: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 23, 'ingénieur', 'bart.jpeg'),
    new Candidat(1, 'homer', 'simpson', 50, 'chef de projet', 'homer.jpg'),
    new Candidat(1, 'marge', 'simpson', 43, 'directrice', 'marge.jpeg'),
  ];
  selectedCand: Candidat;

  recupererSelectedCand(cand) {
    this.selectedCand = cand;
  }
}
