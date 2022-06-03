import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarUnidadesPageRoutingModule } from './mostrar-unidades-routing.module';

import { MostrarUnidadesPage } from './mostrar-unidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarUnidadesPageRoutingModule
  ],
  declarations: [MostrarUnidadesPage]
})
export class MostrarUnidadesPageModule {}
