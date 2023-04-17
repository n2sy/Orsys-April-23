import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListServersService {
  private allServers = [
    {
      id: 1,
      nom: "Serveur d'Aurore",
      statut: 'online',
    },
    {
      id: 2,
      nom: "Serveur d'Alex",
      statut: 'offline',
    },
    {
      id: 3,
      nom: 'Serveur de Cedric',
      statut: 'online',
    },
  ];

  getAllServers() {
    return this.allServers;
  }

  getServerById(id) {
    return this.allServers.find((serv) => serv.id == id);
  }

  constructor() {}
}
