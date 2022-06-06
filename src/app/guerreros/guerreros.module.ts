import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuerrerosPageRoutingModule } from './guerreros-routing.module';

import { GuerrerosPage } from './guerreros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    GuerrerosPageRoutingModule
  ],
  declarations: [GuerrerosPage]
})
export class GuerrerosPageModule {}
