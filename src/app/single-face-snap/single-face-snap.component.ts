import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {

  faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    // la ligne ci-dessus permet de transformer une string en number avec le '+'.
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  // Cette fonction  n'autorise qu'un seul like par photo
  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!'
    }
  }

  // Fonction pour tester le ngClass qui change la couleur du texte selon le nombre de like
  // onSnap() {
  //   this.faceSnap.snaps = this.faceSnap.snaps + 20;
  // }
}
