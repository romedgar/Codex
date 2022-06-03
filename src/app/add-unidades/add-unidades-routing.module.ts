import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUnidadesPage } from './add-unidades.page';

const routes: Routes = [
  {
    path: '',
    component: AddUnidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddUnidadesPageRoutingModule {}
