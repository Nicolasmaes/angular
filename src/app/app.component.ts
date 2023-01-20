import { Component, OnInit } from '@angular/core';
import { interval, map, filter, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  interval$?: Observable<string>;

  ngOnInit() {
    this.interval$ = interval(1000).pipe(
      filter(value => value % 3 === 0),
      map(value => value % 2 === 0
        ? `${value} pair`
        : `${value} impair`
      ),
      tap(text => this.logger(text))
    );
    // toutes les variables qui sont des observables ont des noms se terminant par interval$.

    // this.interval$.subscribe(value => console.log(value));
    // tant qu'on n'a pas souscrit à l'observable, il n'émet ReflectiveInjector.
    // A chaque fois qu'on souscrit, on génère une nouvelle instance de l'observable.
    // subscribe est à proscrire.
  }

  logger(text: string) {
    console.log(`Log : ${text}`);
  }
}
