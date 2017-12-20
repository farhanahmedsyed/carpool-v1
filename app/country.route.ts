import { Routes,RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes= [
    {path:'country', loadChildren:'app/custom-modules/countries.modules#CountriesModule'}
];

export const CountryRoute: ModuleWithProviders = RouterModule.forRoot(routes);