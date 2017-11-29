import {Directive,ElementRef,HostListener,Input} from '@angular/core';
//import { Input } from '@angular/core/src/metadata/directives';

@Directive({
    selector: '[customHover]'
})

export class MyAttributeDirective{
    @Input() hoverColor:string;
    constructor(private el:ElementRef){
        //el.nativeElement.style.backgroundColor = 'orange';
    }


    @HostListener('mouseenter') onMouseEnter(){
        this.highlightColor(this.hoverColor);
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.highlightColor('yellow');
    }

    public highlightColor(color){
        this.el.nativeElement.style.backgroundColor = color;
    }
}