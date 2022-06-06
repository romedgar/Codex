import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuerrerosPage } from './guerreros.page';

const routes: Routes = [
  {
    path: '',
    component: GuerrerosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuerrerosPageRoutingModule {}
