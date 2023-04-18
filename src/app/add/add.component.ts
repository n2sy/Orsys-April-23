import { Component } from '@angular/core';
import { ListCandidatsService } from '../services/list-candidats.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  constructor(private CandSer: ListCandidatsService, private router: Router) {}

  onSubmit(newC) {
    console.log(newC);

    this.CandSer.addCandidatAPI(newC).subscribe({
      next: (response) => {
        alert(response['message']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
