import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesUnidadPageRoutingModule } from './detalles-unidad-routing.module';

import { DetallesUnidadPage } from './detalles-unidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesUnidadPageRoutingModule
  ],
  declarations: [DetallesUnidadPage]
})
export class DetallesUnidadPageModule {}
