import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject, take, takeUntil, tap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  private destroy$!: Subject<boolean>;

  faceSnaps!: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit() {
    this.destroy$ = new Subject<boolean>();

    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
    interval(1000).pipe(
      take(3),
      tap(console.log),
    ).subscribe();
    // Cette méthode permet de mettre fin à l'observable une fois qu'on a reçu le nombre de valeurs que l'on souhaitait (ici 3 console.log()).

    interval(1000).pipe(
      tap(console.log),
      takeUntil(this.destroy$)
    ).subscribe();
    //      // Cette méthode permet de mettre fin à l'observable une fois que this.destroy$ est à true (cette variable est mise à true dans ngOnDestroy(), quand le composant est détruit.)
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
