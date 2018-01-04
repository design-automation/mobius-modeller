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
        this.updateViewer();
    };
    ViewerComponent.prototype.ngOnInit = function () {
        this.updateViewer();
    };
    ViewerComponent.prototype.updateViewer = function () {
        this.boxes = this.dataService.getGsModel();
        this.model = new gs.Model(this.boxes);
        this.scene.background = new THREE.Color(0xcccccc);
        this.container = this.myElement.nativeElement.children[0]; //document.getElementById( 'container' );
        this.width = this.container.clientWidth || 600;
        this.height = this.container.clientHeight;
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.width, this.height);
        this.container.appendChild(this.renderer.domElement);
        var self = this;
        // window.addEventListener( 'resize', function() {
        //   self.width=self.container.clientWidth;
        //   self.height=self.container.clientHeight;
        //   self.renderer.setPixelRatio( window.devicePixelRatio );
        //   self.camera.aspect = self.width / self.height;
        //   self.camera.updateProjectionMatrix();
        //   self.renderer.setSize( self.width, self.height );
        //   self.render();
        // }, false );
        this.camera = new THREE.PerspectiveCamera(60, this.width / this.height, 1, 1000);
        this.camera.position.z = 10;
        this.camera.updateMatrixWorld();
        this.camera.lookAt(this.scene.position);
        self.light = new THREE.DirectionalLight(0xffffff, 0.5);
        this.controls = new three_orbitcontrols_ts_1.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enabled = true;
        this.controls.addEventListener('change', function () {
            self.light.position.copy(self.camera.position);
        });
        this.scene.add(self.light);
        this.geometry = this.pushGSGeometry();
        for (var i = 0; i < 50; i++) {
            var material = new THREE.MeshPhongMaterial({ color: 0xffffff, side: THREE.DoubleSide });
            var mesh = new THREE.Mesh(this.geometry, material);
            mesh.position.x = (Math.random() - 0.5) * 50;
            mesh.position.y = (Math.random() - 0.5) * 50;
            mesh.position.z = (Math.random() - 0.5) * 50;
            mesh.updateMatrix();
            mesh.matrixAutoUpdate = false;
            this.scene.add(mesh);
        }
        this.render();
    };
    ViewerComponent.prototype.pushGSGeometry = function () {
        var geom = new THREE.Geometry();
        var material = new THREE.MeshPhongMaterial({ color: 0xffffff, side: THREE.DoubleSide });
        for (var _i = 0, _a = this.model.getGeom().getPoints(); _i < _a.length; _i++) {
            var p = _a[_i];
            var xyz = p.getPosition();
            geom.vertices.push(new THREE.Vector3(xyz[0], xyz[1], xyz[2]));
        }
        for (var _b = 0, _c = this.model.getGeom().getObjs(200 /* polymesh */); _b < _c.length; _b++) {
            var polymesh = _c[_b];
            var faces = polymesh.getFaces();
            for (var _d = 0, faces_1 = faces; _d < faces_1.length; _d++) {
                var face = faces_1[_d];
                var point_IDs = face.getVertices().map(function (v, i) { return v.getPoint().getID(); });
                geom.faces.push(new THREE.Face3(point_IDs[0], point_IDs[1], point_IDs[2]));
                geom.faces.push(new THREE.Face3(point_IDs[0], point_IDs[2], point_IDs[3]));
            }
        }
        return geom;
    };
    ViewerComponent.prototype.onDocumentMouseMove = function (event) {
        event.preventDefault();
        this.mouse = new THREE.Vector2();
        this.mouse.x = (event.offsetX / this.container.clientWidth) * 2 - 1;
        this.mouse.y = -(event.offsetY / this.container.clientHeight) * 2 + 1;
    };
    ViewerComponent.prototype.onDocumentMouseDown = function (event) {
        this.INTERSECTEDcolor = this.dataService.getINTERSECTEDColor();
        var INTERSECTED;
        this.raycaster.setFromCamera(this.mouse, this.camera);
        var intersects = this.raycaster.intersectObjects(this.scene.children);
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
    };
    ViewerComponent.prototype.render = function () {
        var self = this;
        (function render() {
            self.raycaster.setFromCamera(self.mouse, self.camera);
            var intersects = self.raycaster.intersectObjects(self.scene.children);
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
            requestAnimationFrame(render);
            self.renderer.render(self.scene, self.camera);
        }());
        this.renderer.render(this.scene, this.camera);
    };
    ViewerComponent.prototype.zoom = function (Visible) {
        /*document.body.style.cursor = "crosshair";
        this.controls.mouseButtons={ZOOM:THREE.MOUSE.LEFT};
        this.controls.enabled=true;
        this.controls.enableZoom=true;*/
        this.Visible = "zoom";
    };
    ViewerComponent.prototype.zoomfit = function (Visible) {
        /*document.body.style.cursor = "crosshair";
        this.controls.mouseButtons={ZOOM:THREE.MOUSE.LEFT};
        this.controls.enabled=true;
        this.controls.enableZoom=true;*/
        this.Visible = "zoomfit";
    };
    ViewerComponent.prototype.pan = function (Visible) {
        /*document.body.style.cursor = "-webkit-grab";
        this.controls.mouseButtons={PAN:THREE.MOUSE.LEFT};
        this.controls.enabled=true;
        this.controls.enablePan=true;*/
        this.Visible = "pan";
    };
    ViewerComponent.prototype.rotate = function (Visible) {
        /*document.body.style.cursor = " -webkit-grab";
        this.controls.mouseButtons={ORBIT:THREE.MOUSE.LEFT};
        this.controls.enabled=true;
        this.controls.enableOrbit=true;*/
        this.Visible = "rotate";
    };
    ViewerComponent.prototype.select = function (Visible) {
        /*document.body.style.cursor = " default";
        this.controls.enabled=false;
        this.controls.enableOrbit=false;*/
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
