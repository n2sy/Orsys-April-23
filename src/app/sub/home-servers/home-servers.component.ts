import { Component } from '@angular/core';
import { ListServersService } from '../list-servers.service';

@Component({
  selector: 'app-home-servers',
  templateUrl: './home-servers.component.html',
  styleUrls: ['./home-servers.component.css'],
})
export class HomeServersComponent {
  tabServers;
  constructor(private listServ: ListServersService) {}

  ngOnInit() {
    this.tabServers = this.listServ.getAllServers();
  }
}
