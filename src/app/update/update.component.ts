import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent {
  candToUpdate;
  constructor(
    private actRoute: ActivatedRoute,
    private candSer: ListCandidatsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.candToUpdate = this.candSer.getCandidatById(
      this.actRoute.snapshot.paramMap.get('id')
    );
  }

  onUpdate() {
    this.candSer.updateCandidat(this.candToUpdate);
    this.router.navigateByUrl('/cv');
  }
}
