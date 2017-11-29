"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MyStructuralDirctive = (function () {
    function MyStructuralDirctive(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(MyStructuralDirctive.prototype, "hideThisElement", {
        set: function (isHidden) {
            if (!isHidden) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else if (isHidden) {
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], MyStructuralDirctive.prototype, "hideThisElement", null);
    MyStructuralDirctive = __decorate([
        core_1.Directive({
            selector: '[hideThisElement]'
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef])
    ], MyStructuralDirctive);
    return MyStructuralDirctive;
}());
exports.MyStructuralDirctive = MyStructuralDirctive;
//# sourceMappingURL=my-structural-directive.js.map