import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { MyAttributeDirective } from '../custom-directives/hover-directive';
import { MyStructuralDirctive } from '../custom-directives/my-structural-directive';
import { CountryComponent } from '../components/country.component';

import {Routes,RouterModule} from '@angular/router'

const countriesRoutes: Routes = [
    {path: '', redirectTo: 'country', pathMatch: 'full'},
    {path:'country', component: CountryComponent}
];

@NgModule({
    declarations: [MyAttributeDirective,MyStructuralDirctive,CountryComponent],
    imports: [CommonModule,FormsModule,
        RouterModule.forChild(countriesRoutes)
    ],
    providers: [],
    exports: [MyAttributeDirective,CountryComponent]
})

export class CountriesModule{}