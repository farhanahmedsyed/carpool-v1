import {Component} from '@angular/core';

@Component({
    template:`<div style="width:350px;hight:200px;background-color:#00ff00">
                <h1>Create Places</h1>
               </div>
              <a [routerLink]="['place/placeDetail']">PlaceDetail</a>
              <div>                
                <router-outlet></router-outlet>
              </div>
              `
})

export class PlaceComponent{}