import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';
import { SelModalComponent } from '../sel-modal/sel-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdminPageRoutingModule
  ],
  declarations: [AdminPage, SelModalComponent],
  entryComponents: [SelModalComponent]
})
export class AdminPageModule {}
