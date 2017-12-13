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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { Input } from '@angular/core/src/metadata/directives';
var MyAttributeDirective = /** @class */ (function () {
    function MyAttributeDirective(el) {
        this.el = el;
        //el.nativeElement.style.backgroundColor = 'orange';
    }
    MyAttributeDirective.prototype.onMouseEnter = function () {
        this.highlightColor(this.hoverColor);
    };
    MyAttributeDirective.prototype.onMouseLeave = function () {
        this.highlightColor('yellow');
    };
    MyAttributeDirective.prototype.highlightColor = function (color) {
        this.el.nativeElement.style.backgroundColor = color;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MyAttributeDirective.prototype, "hoverColor", void 0);
    __decorate([
        core_1.HostListener('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MyAttributeDirective.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MyAttributeDirective.prototype, "onMouseLeave", null);
    MyAttributeDirective = __decorate([
        core_1.Directive({
            selector: '[customHover]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], MyAttributeDirective);
    return MyAttributeDirective;
}());
exports.MyAttributeDirective = MyAttributeDirective;
//# sourceMappingURL=hover-directive.js.map