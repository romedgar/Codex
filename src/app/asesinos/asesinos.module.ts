import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsesinosPageRoutingModule } from './asesinos-routing.module';

import { AsesinosPage } from './asesinos.page';
import { SelModalComponent } from '../sel-modal/sel-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AsesinosPageRoutingModule
  ],
  declarations: [AsesinosPage, SelModalComponent],
  entryComponents: [SelModalComponent]
})
export class AsesinosPageModule {}
