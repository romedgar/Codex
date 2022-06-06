import { Component, OnInit } from '@angular/core';

import { Figuras } from 'src/app/models/figuras';
import { FigurasService } from 'src/app/services/figuras.service';

import { FormGroup, FormBuilder } from '@angular/forms';

import { Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SelModalComponent } from '../sel-modal/sel-modal.component';

@Component({
  selector: 'app-arqueros',
  templateUrl: './arqueros.page.html',
  styleUrls: ['./arqueros.page.scss'],
})
export class ArquerosPage implements OnInit {
  public listaUnidades = []
  public units: Figuras[]
  public unitById : Figuras
  public cat: string

  constructor(private figureService:FigurasService, private router:Router, private modalCtrl: ModalController) {
    this.cat = figureService.getSelectedCategory()
    this.figureService.getAllUnits("arquero").then(res => {
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

  

  regresar(){
    this.router.navigate(['/home']);
  }


  async openModal(id: string){
     this.figureService.setSelectedUnit(id)
     console.log(id)

    await this.figureService.getById("arquero",id).then(res => {
      res.subscribe(FiguraRef =>{
           this.unitById = FiguraRef.data() as Figuras;
        })
      })

     this.figureService.setSelectedUnitData(this.unitById)
     console.log(this.unitById)
     
    const modal = await this.modalCtrl.create({
      component: SelModalComponent
    });

    await modal.present();

  }

}
