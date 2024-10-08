import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasinfoPageRoutingModule } from './masinfo-routing.module';

import { MasinfoPage } from './masinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    MasinfoPageRoutingModule
  ],
  declarations: [MasinfoPage]
})
export class MasinfoPageModule {}
