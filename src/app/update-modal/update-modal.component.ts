import { Component, OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { Figuras } from 'src/app/models/figuras';
import { FigurasService } from 'src/app/services/figuras.service';

import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.scss'],
})
export class UpdateModalComponent{
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
  
  onUpdate(){
    this.unidad = {
      nombre: this.myForm.controls.nombre.value,
      movimiento: this.myForm.controls.movimiento.value,
      habilidad_combate: this.myForm.controls.habilidad_combate.value,
      habilidad_disparo: this.myForm.controls.habilidad_disparo.value,
      fuerza: this.myForm.controls.fuerza.value,
      dureza: this.myForm.controls.dureza.value,
      heridas: this.myForm.controls.heridas.value,
      ataques: this.myForm.controls.ataques.value,
      liderazgo: this.myForm.controls.liderazgo.value,
      salva: this.myForm.controls.salva.value
    }
    this.id = this.figureService.getSelectedUnit()
    this.figureService.update("Prueba",this.id,this.unidad)
  }

  eliminar(){
    this.id = this.figureService.getSelectedUnit()
    this.figureService.delete("Prueba",this.id)
  }

  ngOnInit() {

    
  }

}
