import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  title: string = 'weekley shopping';
  note: string =
    'On Saturday, daily needs will be bought from the supermarket.';
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    // this.homeService.addNoteWithObs(this.title, this.note);
    this.homeService.fetchNotesWithObs();

    // this.homeService.addNoteWithProm(this.title, this.note);
    this.homeService.fetchNotesWithProm();

    // this.promiseExample();
    // this.observableExample();
  }

  //promise example
  promiseExample() {
    const myPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('bird');
        resolve('lion'); //doesn't work
        resolve('cat'); //doesn't work
        resolve('snake'); //doesn't work
      }, 1000);
    });

    myPromise.then((result) => {
      console.log('promise: ', result);
    });
  }

  //observable example
  observableExample() {
    const myObservable = new Observable((observer) => {
      setTimeout(() => {
        observer.next('apple');
        observer.next('banana');
        observer.next('orange');
        observer.next('kiwi');
        observer.next('avacado');
      }, 2000);
    });

    myObservable
      .pipe(filter((res) => res === 'orange')) //if I remove filter I can see all result on the console
      .subscribe((result) => {
        console.log('observable', result);
      });
    // .unsubscribe();// I also can cancel a obs object with unsubscribe() method.
  }
}
