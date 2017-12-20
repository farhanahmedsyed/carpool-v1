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
var countries_http_service_1 = require("../services/countries.http.service");
var router_1 = require("@angular/router");
var CountryComponent = /** @class */ (function () {
    function CountryComponent(router, countriesService) {
        this.router = router;
        this.countriesService = countriesService;
    }
    CountryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.countriesService.getCountries().subscribe(function (r) { return _this.countryList = r.json(); });
    };
    CountryComponent.prototype.getCountryInfo = function () {
        var _this = this;
        this.countriesService.getCountryDetail(this.countryName).subscribe(function (resp) { return _this.countryObj = resp.json()[0]; });
    };
    CountryComponent = __decorate([
        core_1.Component({
            //moduleId: module.id,
            //selector: 'country-comp',
            templateUrl: 'app/views/country.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, countries_http_service_1.CountriesService])
    ], CountryComponent);
    return CountryComponent;
}());
exports.CountryComponent = CountryComponent;
//# sourceMappingURL=country.component.js.map