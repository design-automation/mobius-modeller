"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = require("three");
var core_1 = require("@angular/core");
var SettingComponent = /** @class */ (function () {
    function SettingComponent(dataService) {
        this.dataService = dataService;
        this.scene = this.dataService.getScene();
        this.alight = [];
        this.alight = this.dataService.getalight();
        this.hue = this.dataService.hue;
        this.saturation = this.dataService.saturation;
        this.lightness = this.dataService.lightness;
    }
    SettingComponent.prototype.ngOnInit = function () {
        if (this.hue == undefined) {
            this.hue = 0;
        }
        else {
            this.hue = this.dataService.hue;
        }
        if (this.saturation == undefined) {
            this.saturation = 0;
        }
        else {
            this.saturation = this.dataService.saturation;
        }
        if (this.lightness == undefined) {
            this.lightness = 0.7;
        }
        else {
            this.lightness = this.dataService.lightness;
        }
    };
    SettingComponent.prototype.changegrid = function () {
        this.gridVisible = !this.gridVisible;
        if (this.gridVisible) {
            var gridhelper = new THREE.GridHelper(500, 500);
            gridhelper.name = "GridHelper";
            this.scene.add(gridhelper);
        }
        else {
            this.scene.remove(this.scene.getObjectByName("GridHelper"));
        }
    };
    SettingComponent.prototype.changeaxis = function () {
        this.axisVisible = !this.axisVisible;
        if (this.axisVisible) {
            var axishelper = new THREE.AxisHelper(1000);
            axishelper.name = "AxisHelper";
            this.scene.add(axishelper);
        }
        else {
            this.scene.remove(this.scene.getObjectByName("AxisHelper"));
        }
    };
    SettingComponent.prototype.changefog = function () {
        this.fogVisible = !this.fogVisible;
        if (this.fogVisible) {
            this.scene.fog = new THREE.FogExp2(0xcccccc, 0.002);
        }
        else {
            this.scene.fog = null;
        }
    };
    SettingComponent.prototype.changelight = function (_hue, _saturation, _lightness) {
        this.hue = _hue;
        this.saturation = _saturation;
        this.lightness = _lightness;
        var alight = this.alight;
        this.dataService.gethue(_hue);
        this.dataService.getsaturation(_saturation);
        this.dataService.getlightness(_lightness);
        for (var i = 0; i < alight.length; i++) {
            var ambientLight = alight[i];
            ambientLight.color.setHSL(_hue, _saturation, _lightness);
        }
    };
    SettingComponent = __decorate([
        core_1.Component({
            selector: 'app-setting',
            templateUrl: './setting.component.html',
            styleUrls: ['./setting.component.css']
        })
    ], SettingComponent);
    return SettingComponent;
}());
exports.SettingComponent = SettingComponent;
