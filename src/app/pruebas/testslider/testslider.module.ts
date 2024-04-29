import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestsliderPageRoutingModule } from './testslider-routing.module';

import { TestsliderPage } from './testslider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestsliderPageRoutingModule
  ],
  declarations: [TestsliderPage]
})
export class TestsliderPageModule {}
