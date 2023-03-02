import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, map, filter, Observable, tap, switchMap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';

// Un service n'a pas de méthode ngOnInit() car ils ne sont pas instanciés de la même manière que les components.
// Nous devons donc déclarer et initialiser le tableau dans la même Expression.

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private http: HttpClient) { }

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);

  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
    return this.getFaceSnapById(faceSnapId).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
      })),
      switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
        `http://localhost:3000/facesnaps/${faceSnapId}`,
        updatedFaceSnap)
      )
    );
  }

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
    // console.log(formValue)
    // this.getAllFaceSnaps();
    // snapToSave!: Observable<FaceSnap[]>;

    // this.http.post<FaceSnap>(
    //   'http://localhost:3000/facesnaps',
    //   snapToSave)

    //   return this.getFaceSnapById(faceSnapId)

    return this.getAllFaceSnaps().pipe(
      map(facesnaps => [...facesnaps].sort((a: FaceSnap, b: FaceSnap) => a.id - b.id)),
      map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
      map(previousFacesnap => ({
        ...formValue,
        snaps: 0,
        createdDate: new Date(),
        id: previousFacesnap.id + 1
      })),
      switchMap(snapToSave => this.http.post<FaceSnap>(
        'http://localhost:3000/facesnaps',
        snapToSave)
      )
    )
  }
}
