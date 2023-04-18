import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  defaultSkill = 'typescript';
  myComment = 'Rien à signaler...';
  showErrorMsg = false;
  constructor(private auth: AuthService, private router: Router) {}
  submitHandler(f: NgForm) {
    this.auth.seConnecter(f.value).subscribe({
      next: (result) => {
        console.log(result);
        localStorage.setItem('myToken', result['token']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        this.showErrorMsg = true;
        f.reset();
      },
    });
  }
}
