import {Directive,Input,TemplateRef,ViewContainerRef} from '@angular/core';


@Directive({
    selector:'[hideThisElement]'
})
export class MyStructuralDirctive{

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef){}
  
    @Input() set hideThisElement(isHidden: boolean){
        if(!isHidden){
            this.viewContainer.createEmbeddedView(this.templateRef);
        }else if(isHidden){
            this.viewContainer.clear();
        }
    }

} 