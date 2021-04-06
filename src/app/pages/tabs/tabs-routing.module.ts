import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'ships',
        loadChildren: () => import('../ships/ships.module').then( m => m.ShipsPageModule)
      },
      {
        path: 'viewpoints',
        loadChildren: () => import('../viewpoints/viewpoints.module').then( m => m.ViewpointsPageModule)
      },
      {
        path: 'info',
        loadChildren: () => import('../info/info.module').then( m => m.InfoPageModule)
      },

    ]
  },
  {
    path: '',
    redirectTo: '/tabs/ships',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
