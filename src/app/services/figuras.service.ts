import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Figuras } from '../models/figuras';

@Injectable({
  providedIn: 'root'
})
export class FigurasService {

  constructor(private firestore:AngularFirestore) { }

  async registerUnit(unidad:Figuras, escuadra:string){
    try {
      return await this.firestore.collection(escuadra).add(unidad); 
    } catch (error) {
      console.log("Error en la inserción",error)
    }
  }

  async getAllUnits(collection: string) {
    try {
      return await this.firestore.collection(collection).snapshotChanges(); 
    } catch (error) {
      console.log("Error en la consulta",error)
    }
  }

  async getById(collection: string, id: string) {
    try {
      return await this.firestore.collection(collection).doc(id).get(); 
    } catch (error) {
      console.log("Error en la consulta",error)
    }
  }

  async delete(collection: string, id: string) {
    try {
      return await this.firestore.collection(collection).doc(id).delete(); 
    } catch (error) {
      console.log("Error en la consulta",error)
    }
  }

  async update(collection: string, id: string, unidad:Figuras) {
    try {
      return await this.firestore.collection(collection).doc(id).set(unidad); 
    } catch (error) {
      console.log("Error en la consulta",error)
    }
  }
}


