"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mock_neighbourhoods_1 = require("../mock-neighbourhoods");
var core_1 = require("@angular/core");
var NeighbourhoodService = /** @class */ (function () {
    function NeighbourhoodService() {
    }
    NeighbourhoodService.prototype.getNeighbourhoods = function () {
        return Promise.resolve(mock_neighbourhoods_1.NEIGHBOURHOODS);
    };
    NeighbourhoodService.prototype.getNeighbourhoodsSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return setTimeout(resolve, 2000);
        }) // delay 2 seconds
            .then(function () { return _this.getNeighbourhoods(); });
    };
    NeighbourhoodService = __decorate([
        core_1.Injectable()
    ], NeighbourhoodService);
    return NeighbourhoodService;
}());
exports.NeighbourhoodService = NeighbourhoodService;
//# sourceMappingURL=neighbourhood.service.js.map