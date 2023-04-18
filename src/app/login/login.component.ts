import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  defaultSkill = 'typescript';
  myComment = 'Rien à signaler...';
  submitHandler(f) {
    console.log(f);
  }
}
