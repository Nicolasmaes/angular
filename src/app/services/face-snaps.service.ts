import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';

// Un service n'a pas de méthode ngOnInit() car ils ne sont pas instanciés de la même manière que les components.
// Nous devons donc déclarer et initialiser le tableau dans la même Expression.

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private http: HttpClient) { }


  faceSnaps: FaceSnap[] = [];

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);

  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    // const faceSnap = this.getFaceSnapById(faceSnapId);
    // snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
    const faceSnap: FaceSnap = {
      ...formValue,
      snaps: 0,
      createdDate: new Date(),
      id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
    };
    this.faceSnaps.push(faceSnap);
  }
}
