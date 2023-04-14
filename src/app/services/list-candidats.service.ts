import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  private ListCandidats: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 23, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 50, 'chef de projet', 'homer.jpg'),
    new Candidat(3, 'marge', 'simpson', 43, 'directrice', 'marge.jpeg'),
  ];

  getAllCandidats() {
    return this.ListCandidats;
  }

  addCandidat() {
    this.ListCandidats.push(
      new Candidat(1, 'NEW', 'CANDIDAT', 23, 'ingénieur', 'bart.jpeg')
    );
  }

  constructor() {}
}
