import { Component } from '@angular/core';

@Component({
  selector: 'app-home-accounts',
  templateUrl: './home-accounts.component.html',
  styleUrls: ['./home-accounts.component.css'],
})
export class HomeAccountsComponent {
  tabAccounts = [
    {
      nom: 'Nidhal Account',
      statut: 'online',
    },
  ];

  addNewAccount(newAcc) {
    this.tabAccounts.push(newAcc);
  }
}
