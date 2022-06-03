import { Component, OnInit } from '@angular/core';
import { Figuras } from 'src/app/models/figuras';

import { FigurasService } from 'src/app/services/figuras.service';

@Component({
  selector: 'app-add-units',
  templateUrl: './add-units.page.html',
  styleUrls: ['./add-units.page.scss'],
})
export class AddUnitsPage implements OnInit {

  public units: any = [{
    id:"",
    data:{} as Figuras
  }]

  

  constructor(private figureService:FigurasService) {
      this.read();
   }

  ngOnInit() {
  }

  read(){
    this.figureService.getUnits().subscribe(data=>{
      this.units = [];
      data.forEach(e=>{
        this.units.push({
          id: e.payload.doc.id,
          data: e.payload.doc.data()
        });
      });
    });
  }

}