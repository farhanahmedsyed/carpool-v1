import {Component} from '@angular/core';

@Component({
 
  selector:'my-place',
  templateUrl:'app/views/place.component.html',
  styles:[`
    [name=city].ng-invalid {
       border-left: 7px solid red; 
    }  
    input.ng-valid {
      border-left: 7px solid green; 
   }  
  `]  
})

export class PlaceComponent{

  public formSubmit(data: any):void{
    console.log('Data', data);
  }

}

