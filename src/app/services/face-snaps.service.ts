import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

// Un service n'a pas de méthode ngOnInit() car ils ne sont pas instanciés de la même manière que les components.
// Nous devons donc déclarer et initialiser le tableau dans la même Expression.

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      title: 'Ariel Franon Maes',
      description: 'Mon meilleur ami !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Los Angeles'
    },
    {
      title: 'Nicolas',
      description: 'Papa d\Ariel',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Paris'

    },
    {
      title: 'Coralie',
      description: 'Maman d\Ariel',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 0,
    }
  ]
}
