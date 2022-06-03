import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Figuras } from '../models/figuras';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.scss'],
})
export class UpdateModalComponent {
  newUnit  = new FormControl("",Validators.required)

  constructor(private modalCtrl: ModalController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
  
  onUpdate() {

  }
}
