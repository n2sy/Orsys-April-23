import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent {
  name = 'nidhal';
  year = 2023;
  constructor(private router: Router) {}
  goToAccounts() {
    this.router.navigateByUrl('/accounts');
  }

  goToCv() {
    // localhost/orsys/:name/annee/:year
    // this.router.navigate(['orsys', this.name, 'annee', this.year]);
    this.router.navigate(['cv']);
  }
}
