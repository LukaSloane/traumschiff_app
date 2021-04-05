import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('./home.module').then( m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'info',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/info/info.module').then( m => m.InfoPageModule)
          }
        ]
      },
      {
        path: 'ship-info',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/ship-info/ship-info.module').then( m => m.ShipInfoPageModule)
          }
        ]
      },
      {
        path: 'ships',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/ships/ships.module').then( m => m.ShipsPageModule)
          }
        ]
      },
      {
        path: 'livemap',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/livemap/livemap.module').then( m => m.LivemapPageModule)
          }
        ]
      },
      {
        path: 'viewpoints',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/viewpoints/viewpoints.module').then( m => m.ViewpointsPageModule)
          }
        ]
      },
      {
        path: 'todos',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/todo/todo.module').then( m => m.TodoPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs‚/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
