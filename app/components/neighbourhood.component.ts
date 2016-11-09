import {Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import {Neighbourhood} from '../model/neighbourhood';
import {NeighbourhoodService} from '../services/neighbourhood.service';

@Component({
    moduleId:module.id,
    selector:'my-neighbourhood',
    templateUrl:'../views/neighbourhood.component.html',
    styleUrls: [ '../components/neighbourhood.component.css' ]
})

export class NeighbourhoodComponent implements OnInit{

    neighbourhoods: Neighbourhood[];
    selectedNeighbourhood: Neighbourhood;

    constructor(
        private router: Router,
        private nService:NeighbourhoodService
    ){}

    getNeighbourhoods(): void{
        this.nService.getNeighbourhoods().then(nh => this.neighbourhoods = nh)
    }

    ngOnInit():void{
        this.getNeighbourhoods();
    }

    onSelect(neighbourhood:Neighbourhood):void{
        this.selectedNeighbourhood = neighbourhood;
    }
}