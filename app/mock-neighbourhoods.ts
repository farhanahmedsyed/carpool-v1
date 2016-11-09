import {Neighbourhood} from '../app/model/neighbourhood';
import {PickupLocation} from '../app/model/pickupLocation';

export const NEIGHBOURHOODS: Neighbourhood[]=[
    {id:1,name:'Cinco Ranch'},
    {id:2,name:'Pinemill Ranch'},
    {id:3,name:'Silver Ranch'}
];


export const PICKUPLOCATION: PickupLocation[]=[
    {id:1,neighbourhoodid:1,name:'HEB',street:'Fry Rd',city:'Katy',zipcode:77494}
];