import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ship-info',
    loadChildren: () => import('./pages/ship-info/ship-info.module').then( m => m.ShipInfoPageModule)
  },
  {
    path: 'ships',
    loadChildren: () => import('./pages/ships/ships.module').then( m => m.ShipsPageModule)
  },
  {
    path: 'livemap',
    loadChildren: () => import('./pages/livemap/livemap.module').then( m => m.LivemapPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'viewpoints',
    loadChildren: () => import('./pages/viewpoints/viewpoints.module').then( m => m.ViewpointsPageModule)
  },
  {
    path: 'todo',
    loadChildren: () => import('./pages/todo/todo.module').then( m => m.TodoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
