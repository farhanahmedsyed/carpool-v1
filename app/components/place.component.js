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
var PlaceComponent = (function () {
    function PlaceComponent() {
    }
    PlaceComponent = __decorate([
        core_1.Component({
            template: "<div style=\"width:350px;hight:200px;background-color:#00ff00\">\n                <h1>Create Places</h1>\n               </div>\n              <a [routerLink]=\"['place/placeDetail']\">PlaceDetail</a>\n              <div>                \n                <router-outlet></router-outlet>\n              </div>\n              "
        }), 
        __metadata('design:paramtypes', [])
    ], PlaceComponent);
    return PlaceComponent;
}());
exports.PlaceComponent = PlaceComponent;
//# sourceMappingURL=place.component.js.map