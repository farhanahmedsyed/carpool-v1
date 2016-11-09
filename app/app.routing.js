"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('../app/components/dashboard.component');
var neighbourhood_component_1 = require('../app/components/neighbourhood.component');
var appRoutes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'neighbourhood',
        component: neighbourhood_component_1.NeighbourhoodComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map