import {Injectable} from '@angular/core';
import{Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService{
    constructor(private _http:Http){

    }

    public saveProfile(){
        let _url:string = 'https://reqres.in/api/users';
        return this._http.post(_url,{name:'Farhan',job:'Engineer',city:'Houston'}).map((r:Response)=>r.json());
    }

}