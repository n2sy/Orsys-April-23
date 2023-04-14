import { Component, Input } from '@angular/core';
import { Candidat } from '../models/candidat';
import { ListRecruesService } from '../services/list-recrues.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  @Input() candSelected: Candidat;
  constructor(private recService: ListRecruesService) {}

  onRecruter() {
    this.recService.addRecrue(this.candSelected);
  }
}
