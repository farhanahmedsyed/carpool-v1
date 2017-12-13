import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent }   from './components/app.component';
import { DashboardComponent }   from './components/dashboard.component';
import { NeighbourhoodComponent } from './components/neighbourhood.component';
import { UserProfileComponent } from './components/userProfile.component';
import { PlaceComponent } from './components/place.component';
import { PlaceDetailComponent } from './components/placeDetail.component';
import { PickupSpotsComponent } from '../app/components/neighbourhood.pickup.spots.component';

import { MyAttributeDirective } from './custom-directives/hover-directive';
import { MyStructuralDirctive } from './custom-directives/my-structural-directive';

import { NeighbourhoodService } from './services/neighbourhood.service';
import { CountriesService } from './services/countries.http.service';
import { ProfileService } from './services/profile.service'

import { routing } from './app.routing';
import { HttpModule} from '@angular/http';


@NgModule({
  imports:      [ BrowserModule,FormsModule,routing,HttpModule ],
  declarations: [ AppComponent,DashboardComponent,NeighbourhoodComponent,UserProfileComponent,PlaceComponent,
                PlaceDetailComponent,PickupSpotsComponent,MyAttributeDirective,MyStructuralDirctive], 
  providers:    [NeighbourhoodService,CountriesService,ProfileService],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
