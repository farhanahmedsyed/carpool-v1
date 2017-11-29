import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent }   from './components/app.component';
import { DashboardComponent }   from './components/dashboard.component';
import {NeighbourhoodComponent} from './components/neighbourhood.component';

import { NeighbourhoodService } from './services/neighbourhood.service';
import {CountriesService} from './services/countries.http.service';
import {ProfileService} from './services/profile.service'
import { routing } from './app.routing';
import { HttpModule} from '@angular/http';
import {MyAttributeDirective} from './custom-directives/hover-directive';
import {MyStructuralDirctive} from './custom-directives/my-structural-directive';

@NgModule({
  imports:      [ BrowserModule,FormsModule,routing,HttpModule ],
  declarations: [ AppComponent,DashboardComponent,NeighbourhoodComponent,MyAttributeDirective,MyStructuralDirctive], 
  providers:[NeighbourhoodService,CountriesService,ProfileService],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
