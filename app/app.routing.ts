import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from '../app/components/dashboard.component';
import {NeighbourhoodComponent} from '../app/components/neighbourhood.component';
import {UserProfileComponent} from '../app/components/userProfile.component';
import {PlaceComponent} from '../app/components/place.component';
import {PlaceDetailComponent} from '../app/components/placeDetail.component';


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
  },
  {
    path:'userprofile',
    component:UserProfileComponent
  },
  {
    path:'place',
    component:PlaceComponent,
    children:[
      {path:'place/placeDetail',component:PlaceDetailComponent}
     ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
