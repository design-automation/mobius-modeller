"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var THREE = require("three");
var three_orbitcontrols_ts_1 = require("three-orbitcontrols-ts");
var gs = require("gs-json");
var DataSubscriber_1 = require("../data/DataSubscriber");
var ViewerComponent = /** @class */ (function (_super) {
    __extends(ViewerComponent, _super);
    function ViewerComponent(injector, myElement) {
        var _this = _super.call(this, injector) || this;
        _this.settingVisible = false;
        _this.Visible = "rotate";
        _this.scene = new THREE.Scene();
        _this.dataService.addScene(_this.scene);
        _this.renderer = new THREE.WebGLRenderer({ antialias: true });
        _this.dataService.addRender(_this.renderer);
        _this.dataService.addAmbientLight();
        _this.geometry = new THREE.Geometry();
        _this.dataService.addGeom(_this.geometry);
        _this.mouse = new THREE.Vector2();
        _this.raycaster = new THREE.Raycaster();
        _this.selecting = [];
        _this.myElement = myElement;
        return _this;
    }
    //
    //  checks if the flowchart service has a flowchart and calls update function for the viewer
    //
    ViewerComponent.prototype.notify = function () {
        //while(this.scene.children.length > 0){ 
        //this.scene.remove(this.scene.children[0]); 
        //}
        //this.sceneViewer();
    };
    ViewerComponent.prototype.ngOnInit = function () {
        //this.sceneViewer();
        this.updateViewer();
    };
    ViewerComponent.prototype.sceneViewer = function () {
        this.scene.background = new THREE.Color(0xcccccc);
        this.container = this.myElement.nativeElement.children[0]; //document.getElementById( 'container' );
        this.width = this.container.clientWidth || 600;
        this.height = this.container.clientHeight;
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.width, this.height);
        this.container.appendChild(this.renderer.domElement);
        this.camera = new THREE.PerspectiveCamera(50, this.width / this.height, 0.01, 1000);
        this.camera.position.z = 10;
        this.camera.updateMatrixWorld();
        this.camera.lookAt(this.scene.position);
        this.light = new THREE.DirectionalLight(0xffffff, 0.5);
        this.light.castShadow = false;
        this.controls = new three_orbitcontrols_ts_1.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.mouseButtons = { ORBIT: THREE.MOUSE.LEFT };
        var self = this;
        self.light.position.copy(self.camera.position);
        self.controls.addEventListener('change', function () {
            self.light.position.copy(self.camera.position);
        });
        self.light.target.position.set(0, 0, 0);
        this.scene.add(self.light);
        this.render();
    };
    ViewerComponent.prototype.updateViewer = function () {
        this.model = this.dataService.getGsModel();
        if (this.model == undefined) {
            return this.sceneViewer();
        }
        else {
            for (var i = 0; i < this.scene.children.length; i++) {
                if (this.scene.children[i].type === "Scene") {
                    this.scene.remove(this.scene.children[i]);
                }
            }
            var scene_data = gs.genThreeModel(this.model);
            var loader = new THREE.ObjectLoader();
            var object = loader.parse(scene_data);
            for (var i = 0; i < object.children.length; i++) {
                if (object.children[i].children !== undefined) {
                    for (var j = 0; j < object.children[i].children.length; j++) {
                        if (object.children[i].children[j].type === "Mesh") {
                            object.children[i].children[j]["geometry"].computeVertexNormals();
                        }
                    }
                }
            }
            this.scene.add(object);
        }
        this.scene.background = new THREE.Color(0xcccccc);
        this.container = this.myElement.nativeElement.children[0]; //document.getElementById( 'container' );
        this.width = this.container.clientWidth || 600;
        this.height = this.container.clientHeight;
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.width, this.height);
        this.container.appendChild(this.renderer.domElement);
        this.camera = new THREE.PerspectiveCamera(50, this.width / this.height, 0.01, 1000);
        this.camera.position.z = 10;
        this.camera.updateMatrixWorld();
        this.camera.lookAt(this.scene.position);
        this.light = new THREE.DirectionalLight(0xffffff, 0.5);
        this.light.castShadow = false;
        this.controls = new three_orbitcontrols_ts_1.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.mouseButtons = { ORBIT: THREE.MOUSE.LEFT };
        var self = this;
        self.light.position.copy(self.camera.position);
        self.controls.addEventListener('change', function () {
            self.light.position.copy(self.camera.position);
        });
        self.light.target.position.set(0, 0, 0);
        self.scene.add(self.light);
        this.render();
    };
    ViewerComponent.prototype.onDocumentMouseMove = function (event) {
        event.preventDefault();
        this.mouse = new THREE.Vector2();
        this.mouse.x = (event.offsetX / this.width) * 2 - 1;
        this.mouse.y = -(event.clientY / this.height) * 2 + 1;
    };
    ViewerComponent.prototype.onDocumentMouseDown = function (event) {
        this.INTERSECTEDcolor = this.dataService.getINTERSECTEDColor();
        this.selecting = this.dataService.selecting;
        if (this.Visible == "select") {
            var scenechildren = [];
            for (var i = 0; i < this.scene.children[1].children.length; i++) {
                for (var j = 0; j < this.scene.children[1].children[i].children.length; j++) {
                    if (this.scene.children[1].children[i].children[j].type === "Mesh") {
                        var children = this.scene.children[1].children[i].children[j];
                        scenechildren.push(children);
                    }
                }
            }
            var INTERSECTED;
            this.raycaster.setFromCamera(this.mouse, this.camera);
            var intersects = this.raycaster.intersectObjects(scenechildren);
            if (intersects.length > 0) {
                if (INTERSECTED != intersects[0].object) {
                    if (INTERSECTED)
                        INTERSECTED.material.color.setHex(INTERSECTED.currentHex);
                    INTERSECTED = intersects[0].object;
                    INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
                    var flagInArr = false;
                    for (var i = 0; i < this.selecting.length; i++) {
                        if (this.selecting[i].uuid == INTERSECTED.uuid) {
                            flagInArr = true;
                            this.selecting[i].material.color.setHex(this.INTERSECTEDcolor);
                            this.selecting.splice(i, 1);
                            i = i - 1;
                        }
                    }
                    if (flagInArr == false) {
                        INTERSECTED.material.color.setHex(0x2E9AFE);
                        this.selecting.push(INTERSECTED);
                    }
                }
            }
            else {
                if (INTERSECTED)
                    INTERSECTED.material.color.setHex(INTERSECTED.currentHex);
                INTERSECTED = null;
                for (var i = 0; i < this.selecting.length; i++) {
                    this.selecting[i].material.color.setHex(this.INTERSECTEDcolor);
                }
                this.selecting = [];
            }
            this.dataService.addselecting(this.selecting);
        }
    };
    ViewerComponent.prototype.render = function () {
        var self = this;
        (function render() {
            if (self.Visible == "select") {
                var scenechildren = [];
                for (var i = 0; i < self.scene.children[1].children.length; i++) {
                    for (var j = 0; j < self.scene.children[1].children[i].children.length; j++) {
                        if (self.scene.children[1].children[i].children[j].type === "Mesh") {
                            var children = self.scene.children[1].children[i].children[j];
                            scenechildren.push(children);
                        }
                    }
                }
                self.raycaster.setFromCamera(self.mouse, self.camera);
                var intersects = self.raycaster.intersectObjects(scenechildren);
                if (intersects.length > 0) {
                    if (self.INTERSECTED != intersects[0].object) {
                        if (self.INTERSECTED)
                            self.INTERSECTED.material.color.setHex(self.INTERSECTED.currentHex);
                        self.INTERSECTED = intersects[0].object;
                        self.INTERSECTED.currentHex = self.INTERSECTED.material.color.getHex();
                        self.dataService.addINTERSECTEDColor(self.INTERSECTED.currentHex);
                        self.INTERSECTED.material.color.setHex(0xFF0000);
                    }
                }
                else {
                    if (self.INTERSECTED) {
                        if (self.INTERSECTED.currentHex != 16711680) {
                            self.INTERSECTED.material.color.setHex(self.INTERSECTED.currentHex);
                        }
                    }
                    self.INTERSECTED = null;
                }
            }
            requestAnimationFrame(render);
            self.renderer.render(self.scene, self.camera);
        }());
        this.renderer.render(this.scene, this.camera);
    };
    ViewerComponent.prototype.zoom = function (Visible) {
        document.body.style.cursor = "crosshair";
        this.controls.mouseButtons = { ZOOM: THREE.MOUSE.LEFT };
        this.controls.enabled = true;
        this.controls.enableZoom = true;
        this.Visible = "zoom";
    };
    ViewerComponent.prototype.zoomfit = function (Visible) {
        document.body.style.cursor = "crosshair";
        this.controls.mouseButtons = { ZOOM: THREE.MOUSE.LEFT };
        this.controls.enabled = true;
        this.controls.enableZoom = true;
        this.Visible = "zoomfit";
        if (this.selecting.length !== 0) {
            var axisX = 0;
            var axisY = 0;
            var axisZ = 0;
            var radius = 0;
            var centerX = 0;
            var centerY = 0;
            var centerZ = 0;
            var radius = 0;
            for (var i = 0; i < this.selecting.length; i++) {
                axisX += this.selecting[i].geometry.boundingSphere.center.x;
                ;
                axisY += this.selecting[i].geometry.boundingSphere.center.y;
                ;
                axisZ += this.selecting[i].geometry.boundingSphere.center.z;
                ;
            }
            centerX = axisX / this.scene.children[1].children.length;
            centerY = axisY / this.scene.children[1].children.length;
            centerY = axisY / this.scene.children[1].children.length;
            console.log(this.camera);
            //this.camera.position.set();
        }
    };
    ViewerComponent.prototype.pan = function (Visible) {
        document.body.style.cursor = "-webkit-grab";
        this.controls.mouseButtons = { PAN: THREE.MOUSE.LEFT };
        this.controls.enabled = true;
        this.controls.enablePan = true;
        this.Visible = "pan";
    };
    ViewerComponent.prototype.rotate = function (Visible) {
        document.body.style.cursor = " -webkit-grab";
        if (this.selecting.length === 0) {
            this.controls.target.set(0, 0, 0);
        }
        else {
            var axisX = 0;
            var axisY = 0;
            var axisZ = 0;
            var centerX = 0;
            var centerY = 0;
            var centerZ = 0;
            for (var i = 0; i < this.selecting.length; i++) {
                axisX += this.selecting[i].geometry.boundingSphere.center.x;
                ;
                axisY += this.selecting[i].geometry.boundingSphere.center.y;
                ;
                axisZ += this.selecting[i].geometry.boundingSphere.center.z;
                ;
            }
            centerX = axisX / this.scene.children[1].children.length;
            centerY = axisY / this.scene.children[1].children.length;
            centerY = axisY / this.scene.children[1].children.length;
            this.controls.target.set(centerX, centerY, centerZ);
        }
        this.controls.mouseButtons = { ORBIT: THREE.MOUSE.LEFT };
        this.controls.enabled = true;
        this.controls.enableOrbit = true;
        this.Visible = "rotate";
    };
    ViewerComponent.prototype.select = function (Visible) {
        document.body.style.cursor = "default";
        this.controls.enabled = false;
        this.controls.enableOrbit = false;
        this.Visible = "select";
    };
    ViewerComponent = __decorate([
        core_1.Component({
            selector: 'app-viewer',
            templateUrl: './viewer.component.html',
            styleUrls: ['./viewer.component.css']
        })
    ], ViewerComponent);
    return ViewerComponent;
}(DataSubscriber_1.DataSubscriber));
exports.ViewerComponent = ViewerComponent;
