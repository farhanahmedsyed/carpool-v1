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
var PickupSpotsComponent = /** @class */ (function () {
    function PickupSpotsComponent(route) {
        //this.selectedIDE = route.snapshot.params['selectedNeighbourhood']; //constant once used route not work
        this.route = route;
    }
    PickupSpotsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //multiple routes use observable
        this.observerRef = this.route.params.subscribe(function (params) {
            _this.selectedNH = params['selectedNeighbourhood'];
        });
    };
    PickupSpotsComponent.prototype.ngOnDestroy = function () {
        this.observerRef.unsubscribe();
    };
    PickupSpotsComponent = __decorate([
        core_1.Component({
            template: "<h1>Spots</h1>\n            Selected: {{selectedNH}}\n    "
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], PickupSpotsComponent);
    return PickupSpotsComponent;
}());
exports.PickupSpotsComponent = PickupSpotsComponent;
//# sourceMappingURL=neighbourhood.pickup.spots.component.js.map