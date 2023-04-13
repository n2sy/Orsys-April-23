import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css'],
})
export class AddAccountComponent {
  nameAccount = '';
  statutAccount = '';
  @Output() accountToHome = new EventEmitter();

  addAccount() {
    this.accountToHome.emit({
      nom: this.nameAccount,
      statut: this.statutAccount,
    });
    this.nameAccount = '';
    this.statutAccount = '';
  }
}
