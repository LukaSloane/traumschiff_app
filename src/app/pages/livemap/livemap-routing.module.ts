import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivemapPage } from './livemap.page';

const routes: Routes = [
  {
    path: '',
    component: LivemapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivemapPageRoutingModule {}
