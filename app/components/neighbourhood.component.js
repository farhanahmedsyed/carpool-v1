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
var NeighbourhoodComponent = /** @class */ (function () {
    function NeighbourhoodComponent(router, nService) {
        this.router = router;
        this.nService = nService;
    }
    NeighbourhoodComponent.prototype.getNeighbourhoods = function () {
        var _this = this;
        this.nService.getNeighbourhoods().then(function (nh) { return _this.neighbourhoods = nh; });
    };
    NeighbourhoodComponent.prototype.ngOnInit = function () {
        this.getNeighbourhoods();
    };
    NeighbourhoodComponent.prototype.onSelect = function (neighbourhood) {
        this.selectedNeighbourhood = neighbourhood;
    };
    NeighbourhoodComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-neighbourhood',
            templateUrl: '../views/neighbourhood.component.html',
            styleUrls: ['../components/neighbourhood.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            neighbourhood_service_1.NeighbourhoodService])
    ], NeighbourhoodComponent);
    return NeighbourhoodComponent;
}());
exports.NeighbourhoodComponent = NeighbourhoodComponent;
//# sourceMappingURL=neighbourhood.component.js.map