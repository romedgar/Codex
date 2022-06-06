import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Figuras } from 'src/app/models/figuras';
import { FigurasService } from 'src/app/services/figuras.service';

@Component({
  selector: 'app-addpre-modal',
  templateUrl: './addpre-modal.component.html',
  styleUrls: ['./addpre-modal.component.scss'],
})
export class AddpreModalComponent implements OnInit {
  public listaUnidades = []
  public magos: Figuras[]
  public categorySelected:any
  public categoria:string

  constructor(private modalCtrl: ModalController,private figureService:FigurasService,private router:Router) {
    this.figureService.getAllUnits("mago").then(res => {
      res.subscribe(listaFigurasRef =>{
        this.magos = listaFigurasRef.map(unidadRef =>{
          let unidad=unidadRef.payload.doc.data();
          unidad["id"] = unidadRef.payload.doc.id;
          return unidad as Figuras;
        })
      })
    })
   }

   dismissModal() {
    this.modalCtrl.dismiss();
  }

  setValue(){
    //this.categoria = this.categorySelected
  }

  cargarMagos(){
      this.router.navigate(['/admin']);
      this.modalCtrl.dismiss();
  }
  cargarGuerreros(){
    this.router.navigate(['/guerreros']);
    this.modalCtrl.dismiss();
  }
  cargarSoporte(){
  this.router.navigate(['/soporte']);
  this.modalCtrl.dismiss();
  }
  cargarArqueros(){
  this.router.navigate(['/arqueros']);
  this.modalCtrl.dismiss();
  }
  cargarAsesinos(){
  this.router.navigate(['/asesinos']);
  this.modalCtrl.dismiss();
  }

  ngOnInit() {}

  

}
