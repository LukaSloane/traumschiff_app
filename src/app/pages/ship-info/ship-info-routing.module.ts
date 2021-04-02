import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShipInfoPage } from './ship-info.page';

const routes: Routes = [
  {
    path: '',
    component: ShipInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShipInfoPageRoutingModule {}
