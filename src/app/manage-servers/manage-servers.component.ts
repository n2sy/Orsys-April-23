import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrls: ['./manage-servers.component.css'],
})
export class ManageServersComponent {
  listServers = [
    {
      nom: 'Production Server',
      type: 'small',
      date_d: new Date(2020, 3, 4),
      statut: 'critical',
    },
    {
      nom: 'Development Test Server',
      type: 'small',
      date_d: new Date(2021, 3, 4),
      statut: 'stable',
    },
    {
      nom: 'Testing Development Server',
      type: 'small',
      date_d: new Date(2020, 3, 4),
      statut: 'offline',
    },
    {
      nom: 'Nidhal Server',
      type: 'small',
      date_d: new Date(2020, 3, 4),
      statut: 'stable',
    },
  ];

  affecterClass(st) {
    return {
      'list-group-item-success': st == 'stable' ? true : false,
      'list-group-item-danger': st == 'critical',
      'list-group-item-warning': st == 'offline',
    };
  }
}
