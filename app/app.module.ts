import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent }   from './components/app.component';
import { DashboardComponent }   from './components/dashboard.component';
import { NeighbourhoodService } from './services/neighbourhood.service';
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule,FormsModule,routing ],
  declarations: [ AppComponent,DashboardComponent ],
  providers:[NeighbourhoodService],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
