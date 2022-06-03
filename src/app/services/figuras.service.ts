import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Figuras } from '../models/figuras';

@Injectable({
  providedIn: 'root'
})
export class FigurasService {

  constructor(private firestore:AngularFirestore) { }

  async registerUnit(unidad:Figuras, escuadra:string){
    return await this.firestore.collection(escuadra).add(unidad);
  }

  getUnits() {
    return this.firestore.collection('Unidades_WH').snapshotChanges();
  }
}
