import {Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Neighbourhood} from '../model/neighbourhood';
import {NeighbourhoodService} from '../services/neighbourhood.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl:'../views/dashboard.component.html',
    styleUrls: [ '../components/dashboard.component.css' ]
})

export class DashboardComponent implements OnInit{
    neighbourhoods: Neighbourhood[]=[];

    constructor(private router: Router,
        private neighbourhoodService: NeighbourhoodService){}

    ngOnInit():void{
        this.neighbourhoodService.getNeighbourhoods()
        .then(nh=>this.neighbourhoods = nh);
    }
}
