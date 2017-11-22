import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProfileService {
    constructor(private _http: Http) {

    }

    saveProfile() {
        let _url: string = 'https://reqres.in/api/users';
        return this._http.post(_url, { name: 'Farhan', job: 'Engineer', city: 'Houston' })
            .map((r: Response) => r.json())
            .catch(this._errorHandler);
    }

    private _errorHandler(error: Response) {
        console.error(error);
        return Observable.throw(error || 'Some error Occured');
    }
}