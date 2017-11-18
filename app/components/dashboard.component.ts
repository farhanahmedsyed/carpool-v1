import {Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Neighbourhood} from '../model/neighbourhood';
import {NeighbourhoodService} from '../services/neighbourhood.service';
import {CountriesService} from '../services/countries.http.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl:'../views/dashboard.component.html',
    styleUrls: [ '../components/dashboard.component.css' ]
    ,providers: [CountriesService]
})

export class DashboardComponent implements OnInit{
    public countryObj:any;
    public countryList:any;
    public countryName:string;

    neighbourhoods: Neighbourhood[]=[];

    constructor(private router: Router,
        private neighbourhoodService: NeighbourhoodService
        ,private countriesService: CountriesService){}
//,private countriesService: CountriesService
    ngOnInit():void{
        this.neighbourhoodService.getNeighbourhoods()
        .then(nh=>this.neighbourhoods = nh);

        this.countriesService.getCountries().subscribe(r=>this.countryList=r.json());
    }

    public getCountryInfo(){
        this.countriesService.getCountryDetail(this.countryName).subscribe(resp => this.countryObj=resp.json()[0]);

        //console.log(this.countryObj.name);
    }
}
