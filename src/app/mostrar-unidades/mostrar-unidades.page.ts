import { Component, OnInit } from '@angular/core';
import { Figuras } from 'src/app/models/figuras';
import { FigurasService } from 'src/app/services/figuras.service';

import { Router, NavigationExtras } from '@angular/router';

import { ModalController } from '@ionic/angular';
import { UpdateModalComponent } from '../update-modal/update-modal.component';


@Component({
  selector: 'app-mostrar-unidades',
  templateUrl: './mostrar-unidades.page.html',
  styleUrls: ['./mostrar-unidades.page.scss'],
})
export class MostrarUnidadesPage implements OnInit {
  public listaUnidades = []
  public units: Figuras[]


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

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: UpdateModalComponent
    });

    await modal.present();

  }

}
