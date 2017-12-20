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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var neighbourhood_service_1 = require("../services/neighbourhood.service");
var profile_service_1 = require("../services/profile.service");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, neighbourhoodService, profileService) {
        this.router = router;
        this.neighbourhoodService = neighbourhoodService;
        this.profileService = profileService;
        //public countryObj:any;
        //public countryList:any;
        //public countryName:string;
        this.profileObj = { name: '', job: '', city: '', id: '' };
        this.neighbourhoods = [];
        this.isHidden = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.neighbourhoodService.getNeighbourhoods()
            .then(function (nh) { return _this.neighbourhoods = nh; });
        //this.countriesService.getCountries().subscribe(r=>this.countryList=r.json());
    };
    /*public getCountryInfo(){
        this.countriesService.getCountryDetail(this.countryName).subscribe(resp => this.countryObj=resp.json()[0]);
    }*/
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
        __metadata("design:paramtypes", [router_1.Router,
            neighbourhood_service_1.NeighbourhoodService,
            profile_service_1.ProfileService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map