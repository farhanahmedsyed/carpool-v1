"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var dashboard_component_1 = require("../app/components/dashboard.component");
var neighbourhood_component_1 = require("../app/components/neighbourhood.component");
var userProfile_component_1 = require("../app/components/userProfile.component");
var place_component_1 = require("../app/components/place.component");
var placeDetail_component_1 = require("../app/components/placeDetail.component");
var neighbourhood_pickup_spots_component_1 = require("../app/components/neighbourhood.pickup.spots.component");
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
        component: neighbourhood_component_1.NeighbourhoodComponent,
        children: [
            {
                path: 'pickupSpot/:selectedNeighbourhood',
                component: neighbourhood_pickup_spots_component_1.PickupSpotsComponent
            }
        ]
    },
    {
        path: 'userprofile',
        component: userProfile_component_1.UserProfileComponent
    },
    {
        path: 'place',
        component: place_component_1.PlaceComponent,
        children: [
            {
                path: 'detail',
                component: placeDetail_component_1.PlaceDetailComponent
            },
        ]
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map