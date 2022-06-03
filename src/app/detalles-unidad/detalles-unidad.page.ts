import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import { Figuras } from 'src/app/models/figuras';
import { FigurasService } from 'src/app/services/figuras.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detalles-unidad',
  templateUrl: './detalles-unidad.page.html',
  styleUrls: ['./detalles-unidad.page.scss'],
})
export class DetallesUnidadPage implements OnInit {

  unidad: Figuras;

  constructor(private figureService:FigurasService, 
    private actroute: ActivatedRoute, 
    private router:Router, private toast:ToastController) {
      this.actroute.queryParams.subscribe( params => {
        if(params && params.special){
          this.unidad = JSON.parse(params.special) as Figuras;
          console.log(this.unidad);
        }
      });
     }

  ngOnInit() {
  }

}
