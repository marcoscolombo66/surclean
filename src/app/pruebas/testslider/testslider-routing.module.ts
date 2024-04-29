import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestsliderPage } from './testslider.page';

const routes: Routes = [
  {
    path: '',
    component: TestsliderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestsliderPageRoutingModule {}
