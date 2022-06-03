import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddUnidadesPageRoutingModule } from './add-unidades-routing.module';

import { AddUnidadesPage } from './add-unidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddUnidadesPageRoutingModule
  ],
  declarations: [AddUnidadesPage]
})
export class AddUnidadesPageModule {}
