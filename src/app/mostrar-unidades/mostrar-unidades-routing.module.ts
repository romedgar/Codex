import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarUnidadesPage } from './mostrar-unidades.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarUnidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarUnidadesPageRoutingModule {}
