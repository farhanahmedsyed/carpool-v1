
import {Component,OnInit } from '@angular/core';
import {CountriesService} from '../services/countries.http.service';
import { Router } from '@angular/router';

@Component({
    //moduleId: module.id,
    //selector: 'country-comp',
    templateUrl:'app/views/country.component.html'
})

export class CountryComponent implements OnInit{

    public countryObj:any;
    public countryList:any;
    public countryName:string;

    constructor(private router: Router, private countriesService: CountriesService){}

    ngOnInit():void{
        this.countriesService.getCountries().subscribe(r=>this.countryList=r.json());
    }

    public getCountryInfo(){
        this.countriesService.getCountryDetail(this.countryName).subscribe(resp => this.countryObj=resp.json()[0]);
    }
    
}