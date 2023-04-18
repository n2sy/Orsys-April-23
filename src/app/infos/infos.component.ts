import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListCandidatsService } from '../services/list-candidats.service';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent {
  id;
  candidatInfos: Candidat;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private candSer: ListCandidatsService
  ) {}

  ngOnInit() {
    // V1 avec params
    //this.id = this.activatedRoute.snapshot.params['myid'];

    // V1 avec paramMap
    // this.id = this.activatedRoute.snapshot.paramMap.get('myid');

    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.candidatInfos = this.candSer.getCandidatById(p.get('myid'));
        if (!this.candidatInfos) this.router.navigateByUrl('/not-found');

        //this.id = p.get('myid');
      },
      // error: () => {},
      // complete: () => {},
    });

    // Deprecated
    // this.activatedRoute.paramMap.subscribe(
    //   () => {},
    //   () => {},
    //   () => {}
    // );
  }

  deleteHandler() {
    if (confirm('Etes-vous sur de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidat(this.candidatInfos);
      this.router.navigateByUrl('/cv');
    }
  }
}
