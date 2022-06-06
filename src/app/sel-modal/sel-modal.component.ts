import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { Figuras } from 'src/app/models/figuras';
import { FigurasService } from 'src/app/services/figuras.service';

import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sel-modal',
  templateUrl: './sel-modal.component.html',
  styleUrls: ['./sel-modal.component.scss'],
})
export class SelModalComponent implements OnInit {
  public myForm:FormGroup;
  public unidad: Figuras;
  public unidadAnterior:Figuras;
  public id: string


  constructor(private modalCtrl: ModalController,private figureService:FigurasService, private fb:FormBuilder) { 
    this.unidadAnterior = this.figureService.getSelectedUnitData()

    this.myForm = this.fb.group({
      nombre: this.unidadAnterior.nombre,
      movimiento: this.unidadAnterior.movimiento,
      habilidad_combate: this.unidadAnterior.habilidad_combate,
      habilidad_disparo: this.unidadAnterior.habilidad_disparo,
      fuerza: this.unidadAnterior.fuerza,
      dureza: this.unidadAnterior.dureza,
      heridas: this.unidadAnterior.heridas,
      ataques: this.unidadAnterior.ataques,
      liderazgo: this.unidadAnterior.liderazgo,
      salva: this.unidadAnterior.salva
    });
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
  
  agregar(){
    this.unidad = this.figureService.getSelectedUnitData()
    this.id = this.figureService.getSelectedUnit()
    this.figureService.registerUnit(this.unidad,"Prueba")
  }


  ngOnInit() {

    
  }

}
