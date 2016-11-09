import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from '../app/components/dashboard.component';
import {NeighbourhoodComponent} from '../app/components/neighbourhood.component'

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path:'neighbourhood',
    component:NeighbourhoodComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
