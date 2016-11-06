import {Neighbourhood} from '../model/neighbourhood';
import {NEIGHBOURHOODS} from '../mock-neighbourhoods';
import {Injectable} from '@angular/core';

@Injectable()
export class NeighbourhoodService{

    getNeighbourhoods(): Promise<Neighbourhood[]>{
        return Promise.resolve(NEIGHBOURHOODS);
    }
    
    getNeighbourhoodsSlowly(): Promise<Neighbourhood[]> {
    return new Promise<Neighbourhood[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getNeighbourhoods());
  }
}
