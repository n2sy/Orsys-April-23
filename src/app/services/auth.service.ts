import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  link = 'http://localhost:3000/auth';
  constructor(private http: HttpClient, private router: Router) {}

  seConnecter(identifiants) {
    return this.http.post(`${this.link}/login`, identifiants);
  }

  inscription(identifiants) {}

  estConnecte() {
    let myToken = localStorage.getItem('myToken');
    if (myToken) return true;
    return false;
  }

  seDeconnecter() {
    localStorage.removeItem('myToken');
    this.router.navigateByUrl('/login');
  }
}
