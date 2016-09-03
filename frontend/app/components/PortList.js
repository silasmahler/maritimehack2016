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
var backend_1 = require("../services/backend");
var PortList = (function () {
    function PortList(service) {
        this.service = service;
    }
    PortList.prototype.ngOnInit = function () {
        this.ports = this.service.getPorts();
    };
    PortList.prototype.selectShip = function (port) { this.selectedPort = port; };
    PortList = __decorate([
        core_1.Component({
            selector: 'port-list',
            templateUrl: 'app/port-list.html',
            providers: [backend_1.BackendService]
        }), 
        __metadata('design:paramtypes', [backend_1.BackendService])
    ], PortList);
    return PortList;
}());
exports.PortList = PortList;
//# sourceMappingURL=PortList.js.map