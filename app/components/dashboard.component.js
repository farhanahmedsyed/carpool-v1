"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var neighbourhood_service_1 = require('../services/neighbourhood.service');
var countries_http_service_1 = require('../services/countries.http.service');
var profile_service_1 = require('../services/profile.service');
var DashboardComponent = (function () {
    function DashboardComponent(router, neighbourhoodService, countriesService, profileService) {
        this.router = router;
        this.neighbourhoodService = neighbourhoodService;
        this.countriesService = countriesService;
        this.profileService = profileService;
        this.profileObj = { name: '', job: '', city: '', id: '' };
        this.neighbourhoods = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.neighbourhoodService.getNeighbourhoods()
            .then(function (nh) { return _this.neighbourhoods = nh; });
        this.countriesService.getCountries().subscribe(function (r) { return _this.countryList = r.json(); });
    };
    DashboardComponent.prototype.getCountryInfo = function () {
        var _this = this;
        this.countriesService.getCountryDetail(this.countryName).subscribe(function (resp) { return _this.countryObj = resp.json()[0]; });
        //console.log(this.countryObj.name);
    };
    DashboardComponent.prototype.saveProfile = function () {
        var _this = this;
        this.profileService.saveProfile().subscribe(function (r) { return _this.profileObj = r; });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dashboard',
            templateUrl: '../views/dashboard.component.html',
            styleUrls: ['../components/dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, neighbourhood_service_1.NeighbourhoodService, countries_http_service_1.CountriesService, profile_service_1.ProfileService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map