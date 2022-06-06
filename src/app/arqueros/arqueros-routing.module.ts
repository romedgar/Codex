import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArquerosPage } from './arqueros.page';

const routes: Routes = [
  {
    path: '',
    component: ArquerosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArquerosPageRoutingModule {}
