import { Component, OnInit } from '@angular/core';

import { Figuras } from 'src/app/models/figuras';
import { FigurasService } from 'src/app/services/figuras.service';

import { FormGroup, FormBuilder } from '@angular/forms';

import { Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UpdateModalComponent } from '../update-modal/update-modal.component';
import { AddpreModalComponent } from '../addpre-modal/addpre-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public listaUnidades = []
  public units: Figuras[]
  public unitById : Figuras


  constructor(private figureService:FigurasService, private router:Router, private modalCtrl: ModalController) {
    this.figureService.getAllUnits("Prueba").then(res => {
      res.subscribe(listaFigurasRef =>{
        this.units = listaFigurasRef.map(unidadRef =>{
          let unidad=unidadRef.payload.doc.data();
          unidad["id"] = unidadRef.payload.doc.id;
          return unidad as Figuras;
        })
      })
    })
  }

  detail(unit:Figuras){
    let navext: NavigationExtras = {
      queryParams:{
        special: JSON.stringify(unit)
      }
    };
    this.router.navigate(['/detail'],navext)
  }

  ngOnInit() {

  }

  

  nuevaUnidad(){
    this.router.navigate(['/add-manual']);
  }

  async nuevaUnidadPre(){
    const modal = await this.modalCtrl.create({
      component: AddpreModalComponent
    });

    await modal.present();
  }

  async openModal(id: string){
     this.figureService.setSelectedUnit(id)

    await this.figureService.getById("Prueba",id).then(res => {
      res.subscribe(FiguraRef =>{
           this.unitById = FiguraRef.data() as Figuras;
        })
      })
      console.log(this.unitById)
     this.figureService.setSelectedUnitData(this.unitById)

    const modal = await this.modalCtrl.create({
      component: UpdateModalComponent
    });

    await modal.present();

  }

}
