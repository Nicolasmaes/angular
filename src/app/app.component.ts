import { Component, OnInit } from '@angular/core';
import { interval, map, filter, Observable, tap } from 'rxjs';
import { concatMap, mergeMap, delay, exhaustMap, switchMap, take } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  interval$?: Observable<string>;

  // redTrainsCalled = 0;
  // yellowTrainsCalled = 0;


  ngOnInit() {
    //   this.interval$ = interval(1000).pipe(
    //     filter(value => value % 3 === 0),
    //     map(value => value % 2 === 0
    //       ? `${value} pair`
    //       : `${value} impair`
    //     ),
    //     tap(text => this.logger(text))
    //   );
    //   // toutes les variables qui sont des observables ont des noms se terminant par interval$.

    //   // this.interval$.subscribe(value => console.log(value));
    //   // tant qu'on n'a pas souscrit à l'observable, il n'émet ReflectiveInjector.
    //   // A chaque fois qu'on souscrit, on génère une nouvelle instance de l'observable.
    //   // subscribe est à proscrire.
    // }

    // logger(text: string) {
    //   console.log(`essai de la fonction tap : ${text}`);
  }
}

// lightObservable$.pipe(
//   mergeMap(color => getTrainObservable$(color))
// ).subscribe();
// mergeMap assure la parallélisation des souscriptions

// lightObservable$.pipe(
//   concatMap(color => getTrainObservable$(color))
// ).subscribe();
// concatMap assure la mise en série. Nous attendons que l'observable actuelle soit complété pour lancer les suivantes, dans l'ordre dans lequel elles ont été appelées.

// lightObservable$.pipe(
//   exhaustMap(color => getTrainObservable$(color))
// ).subscribe();
// exhaustMap ignore toutes les demandes faites pendant qu'une souscription est en cours, ces demandes ne seront jamais satisfaites.

// lightObservable$.pipe(
//   switchMap(color => getTrainObservable$(color))
// ).subscribe();
// switchMap annule la première souscription si nous en faisons une AuthenticatorResponse, purement et simplement.
