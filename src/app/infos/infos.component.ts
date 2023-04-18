import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListCandidatsService } from '../services/list-candidats.service';
import { Candidat } from '../models/candidat';
import { AuthService } from '../services/auth.service';

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
    private candSer: ListCandidatsService,
    public authSer: AuthService
  ) {}

  ngOnInit() {
    // V1 avec params
    //this.id = this.activatedRoute.snapshot.params['myid'];

    // V1 avec paramMap
    // this.id = this.activatedRoute.snapshot.paramMap.get('myid');

    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.candSer.getCandidatByIdAPI(p.get('myid')).subscribe({
          next: (response: Candidat) => {
            this.candidatInfos = response;
          },
          error: (err) => {
            console.log(err.error['message'], err['status']);
            this.router.navigateByUrl('/not-found');
          },
        });
        //if (!this.candidatInfos) this.router.navigateByUrl('/not-found');

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
      this.candSer.deleteCandidatAPI(this.candidatInfos).subscribe({
        next: (response) => {
          console.log(response);
          alert(response['message']);
          this.router.navigateByUrl('/cv');
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
