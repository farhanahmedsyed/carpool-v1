import {Component,OnInit,OnDestroy} from '@angular/core';
import{ActivatedRoute} from '@angular/router';

@Component({
    template:`<h1>Spots</h1>
            Selected: {{selectedNH}}
    `
})

export class PickupSpotsComponent{
    public selectedNH: string;
    private observerRef: any;


    constructor(private route:ActivatedRoute){
        //this.selectedIDE = route.snapshot.params['selectedNeighbourhood']; //constant once used route not work

        
    }

    ngOnInit(){
        //multiple routes use observable
        this.observerRef = this.route.params.subscribe(params=>{
            this.selectedNH=params['selectedNeighbourhood'];
        });
    }
    ngOnDestroy(){
        this.observerRef.unsubscribe();
    }
}