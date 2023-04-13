import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  nom: string = 'Aurore';
  formation = 'Angular';
  color = 'pink';
  hd = false;

  changerNom() {
    //this.nom = 'Mathieu';
    alert("J'ai été cliqué");
  }

  traitement(msg) {
    this.formation = msg;
  }
}
