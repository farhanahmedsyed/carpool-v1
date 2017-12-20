"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var hover_directive_1 = require("../custom-directives/hover-directive");
var my_structural_directive_1 = require("../custom-directives/my-structural-directive");
var country_component_1 = require("../components/country.component");
var router_1 = require("@angular/router");
var countriesRoutes = [
    { path: '', redirectTo: 'country', pathMatch: 'full' },
    { path: 'country', component: country_component_1.CountryComponent }
];
var CountriesModule = /** @class */ (function () {
    function CountriesModule() {
    }
    CountriesModule = __decorate([
        core_1.NgModule({
            declarations: [hover_directive_1.MyAttributeDirective, my_structural_directive_1.MyStructuralDirctive, country_component_1.CountryComponent],
            imports: [common_1.CommonModule, forms_1.FormsModule,
                router_1.RouterModule.forChild(countriesRoutes)
            ],
            providers: [],
            exports: [hover_directive_1.MyAttributeDirective, country_component_1.CountryComponent]
        })
    ], CountriesModule);
    return CountriesModule;
}());
exports.CountriesModule = CountriesModule;
//# sourceMappingURL=countries.modules.js.map