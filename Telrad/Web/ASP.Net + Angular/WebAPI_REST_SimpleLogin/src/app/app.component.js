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
var core_1 = require("@angular/core");
var auth_service_1 = require("./auth/auth-service");
var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    AppComponent.prototype.Login = function () {
        this.auth.Login(this.email, this.password);
    };
    AppComponent.prototype.Register = function () {
        this.auth.Register(this.email, this.password, "no one");
    };
    AppComponent.prototype.Logoff = function () {
        this.auth.LogOff();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <comp1 *ngIf=\"auth.IsAuthenticated()\"></comp1>\n    <comp2 *ngIf=\"!auth.IsAuthenticated()\"></comp2>\n    Email : <input type=\"text\"  [(ngModel)]=\"email\"/><br>\n    Password : <input type=\"text\"  [(ngModel)]=\"password\"/><br>\n    <button (click)=\"Login()\">Login</button>\n    <button (click)=\"Register()\">Register</button>\n    <button (click)=\"Logoff()\">Logoff</button>\n  "
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map