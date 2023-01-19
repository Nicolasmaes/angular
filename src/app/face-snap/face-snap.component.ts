import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  ngOnInit() {
    this.buttonText = 'Oh Snap!'
  }

  // Cette fonction  n'autorise qu'un seul like par photo
  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!'
    }
  }

  // Fonction pour tester le ngClass qui change la couleur du texte selon le nombre de like
  // onSnap() {
  //   this.faceSnap.snaps = this.faceSnap.snaps + 20;
  // }
}
