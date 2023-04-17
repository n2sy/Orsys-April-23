import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent {
  id;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // V1 avec params
    //this.id = this.activatedRoute.snapshot.params['myid'];

    // V1 avec paramMap
    // this.id = this.activatedRoute.snapshot.paramMap.get('myid');

    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.id = p.get('myid');
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
}
