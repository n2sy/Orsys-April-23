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
    new Candidat(4, 'Cedric', 'Le vrai', 43, 'ingénieur'),
  ];

  getAllCandidats() {
    return this.ListCandidats;
  }

  getCandidatById(id) {
    return this.ListCandidats.find((element) => element._id == id);
  }

  deleteCandidat(cand) {
    let i = this.ListCandidats.indexOf(cand);
    this.ListCandidats.splice(i, 1);
  }

  addCandidat(newCand) {
    newCand._id = this.ListCandidats[this.ListCandidats.length - 1]._id + 1;
    this.ListCandidats.push(newCand);
  }

  updateCandidat(uCand) {
    let i = this.ListCandidats.indexOf(uCand);
    this.ListCandidats[i] = uCand;
  }

  constructor() {}
}
