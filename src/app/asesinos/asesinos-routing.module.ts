import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsesinosPage } from './asesinos.page';

const routes: Routes = [
  {
    path: '',
    component: AsesinosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsesinosPageRoutingModule {}
