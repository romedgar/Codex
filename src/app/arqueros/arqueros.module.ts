import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArquerosPageRoutingModule } from './arqueros-routing.module';

import { ArquerosPage } from './arqueros.page';
import { SelModalComponent } from '../sel-modal/sel-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ArquerosPageRoutingModule
  ],
  declarations: [ArquerosPage, SelModalComponent],
  entryComponents: [SelModalComponent]

})
export class ArquerosPageModule {}
