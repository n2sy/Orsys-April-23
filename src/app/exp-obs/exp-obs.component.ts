import { Component } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-exp-obs',
  templateUrl: './exp-obs.component.html',
  styleUrls: ['./exp-obs.component.css'],
})
export class ExpObsComponent {
  myObservable: Observable<number>;
  inscription: Subscription;

  ngOnInit() {
    // this.myObservable = new Observable((observer: Observer<string>) => {
    //   setTimeout(() => {
    //     observer.next('First Package');
    //   }, 2000);
    //   setTimeout(() => {
    //     observer.next('Second Package');
    //   }, 4000);
    //   setTimeout(() => {
    //     let error = new Error('An error was occured');
    //     observer.error(error);
    //   }, 6000);
    //   setTimeout(() => {
    //     observer.complete();
    //   }, 8000);
    //   setTimeout(() => {
    //     observer.next('Third Package');
    //   }, 10000);
    // });

    this.myObservable = new Observable((observer: Observer<number>) => {
      let count = 0;
      setInterval(() => {
        count++;
        observer.next(count);
      }, 1000);
    });

    this.inscription = this.myObservable.subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Flux Terminé');
      },
    });
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();
  }
}
