import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ListServersService } from '../list-servers.service';

@Component({
  selector: 'app-info-server',
  templateUrl: './info-server.component.html',
  styleUrls: ['./info-server.component.css'],
})
export class InfoServerComponent {
  oneServer;
  showBtn;
  constructor(
    private actRoute: ActivatedRoute,
    private listServers: ListServersService
  ) {}
  ngOnInit() {
    // Probléme avec Snapshot
    // this.oneServer = this.listServers.getServerById(
    //   this.actRoute.snapshot.paramMap.get('id')
    // );

    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.oneServer = this.listServers.getServerById(p.get('id'));
      },
    });

    this.actRoute.queryParamMap.subscribe({
      next: (q: ParamMap) => {
        this.showBtn = q.get('allowEdit') == '1' ? false : true;

        // Version avec If/Else
        // if (q.get('allowEdit') == '1') this.showBtn = false;
        // else this.showBtn = true;
      },
    });
  }
}
