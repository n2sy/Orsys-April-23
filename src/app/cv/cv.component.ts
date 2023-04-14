import { Component, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat';
import { FirstService } from '../services/first.service';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers: [FirstService],
})
export class CvComponent {
  tabCandidats: Candidat[] = [];
  selectedCand: Candidat;

  constructor(
    private firstSer: FirstService,
    private candSer: ListCandidatsService
  ) {}

  ngOnInit() {
    this.firstSer.showInfos();
    this.tabCandidats = this.candSer.getAllCandidats();
  }

  addCandidat() {
    this.candSer.addCandidat();
  }

  showFromCv() {
    console.log(this.candSer.getAllCandidats());
  }

  recupererSelectedCand(cand) {
    this.selectedCand = cand;
  }
}
