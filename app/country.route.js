"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var routes = [
    { path: 'country', loadChildren: 'app/custom-modules/countries.modules#CountriesModule' }
];
exports.CountryRoute = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=country.route.js.map