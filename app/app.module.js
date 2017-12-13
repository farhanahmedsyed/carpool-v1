"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./components/app.component");
var dashboard_component_1 = require("./components/dashboard.component");
var neighbourhood_component_1 = require("./components/neighbourhood.component");
var userProfile_component_1 = require("./components/userProfile.component");
var place_component_1 = require("./components/place.component");
var placeDetail_component_1 = require("./components/placeDetail.component");
var neighbourhood_pickup_spots_component_1 = require("../app/components/neighbourhood.pickup.spots.component");
var hover_directive_1 = require("./custom-directives/hover-directive");
var my_structural_directive_1 = require("./custom-directives/my-structural-directive");
var neighbourhood_service_1 = require("./services/neighbourhood.service");
var countries_http_service_1 = require("./services/countries.http.service");
var profile_service_1 = require("./services/profile.service");
var app_routing_1 = require("./app.routing");
var http_1 = require("@angular/http");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.routing, http_1.HttpModule],
            declarations: [app_component_1.AppComponent, dashboard_component_1.DashboardComponent, neighbourhood_component_1.NeighbourhoodComponent, userProfile_component_1.UserProfileComponent, place_component_1.PlaceComponent,
                placeDetail_component_1.PlaceDetailComponent, neighbourhood_pickup_spots_component_1.PickupSpotsComponent, hover_directive_1.MyAttributeDirective, my_structural_directive_1.MyStructuralDirctive],
            providers: [neighbourhood_service_1.NeighbourhoodService, countries_http_service_1.CountriesService, profile_service_1.ProfileService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map