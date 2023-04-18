import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/candidat';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent {
  allCandidats: Candidat[];
  @Output() candToCv = new EventEmitter();

  constructor(private candSer: ListCandidatsService) {}

  ngOnInit() {
    this.candSer.getAllCandidatsAPI().subscribe({
      next: (result: Candidat[]) => {
        this.allCandidats = result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  showFromList() {
    console.log(this.candSer.getAllCandidats());
  }

  sendCandToCv(cand) {
    this.candToCv.emit(cand);
  }
}
