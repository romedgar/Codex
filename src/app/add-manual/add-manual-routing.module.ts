import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddManualPage } from './add-manual.page';

const routes: Routes = [
  {
    path: '',
    component: AddManualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddManualPageRoutingModule {}
