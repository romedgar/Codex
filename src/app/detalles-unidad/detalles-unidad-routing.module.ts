import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesUnidadPage } from './detalles-unidad.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesUnidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesUnidadPageRoutingModule {}
