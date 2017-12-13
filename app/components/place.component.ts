import {Component} from '@angular/core';

@Component({
    template:`<h1>Create Places</h1>              
                <a [routerLink]="['detail']" routerLinkActive="active">AddEditPlaceDetail</a>          
              <div>                
                <router-outlet></router-outlet>
              </div>
              `
})

export class PlaceComponent{}

