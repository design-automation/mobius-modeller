webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"app-container\">\r\n  \r\n  <div class=\"header\">\r\n      <app-menu></app-menu>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"subcontainer viewer-container\" [class.expand]=\"isExpanded.viewer\">\r\n        <div class=\"toggle-btn right\" (click)=\"toggleViewer()\"></div>\r\n        <app-geometry-viewer class=\"view\"></app-geometry-viewer>\r\n        <app-code-viewer class=\"view\"></app-code-viewer>\r\n    </div>\r\n\r\n    <div class=\"subcontainer flowchart-container\">\r\n        <app-flowchart-viewer class=\"view\" style=\"flex-grow: 2\"></app-flowchart-viewer>\r\n        <app-parameter-viewer class=\"view\" style=\"flex-grow: 1\"></app-parameter-viewer>\r\n    </div>\r\n    \r\n    <div class=\"subcontainer editor-container\" [class.expand]=\"isExpanded.editor\">\r\n        <div class=\"toggle-btn left\" (click)=\"toggleEditor()\"></div>\r\n        <app-procedure-editor class=\"view\"></app-procedure-editor>\r\n        <app-parameter-editor class=\"view\"></app-parameter-editor>\r\n    </div>\r\n    <!-- <app-flowchart-viewer></app-flowchart-viewer>\r\n    <app-procedure-editor></app-procedure-editor>\r\n    <app-parameter-editor></app-parameter-editor>\r\n    <app-parameter-viewer></app-parameter-viewer>\r\n     -->\r\n  </div>\r\n\t\t<!-- <split direction=\"horizontal\" \r\n                       disabled=\"false\"\r\n                       [visibleTransition]=\"action.useTransition\">\r\n                    <split-area [size]=\"10\" order=\"1\">\r\n                       <app-geometry-viewer></app-geometry-viewer>\r\n                       <app-code-viewer></app-code-viewer>\r\n                    </split-area>\r\n                    <split-area [size]=\"action.a2s\" order=\"2\">\r\n                       \r\n                       \r\n                    </split-area>\r\n                    <split-area [size]=\"10\" order=\"3\">\r\n                        \r\n                        \r\n                    </split-area>\r\n            </split> -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null,null],\"sourceMap\":false}!../../../material/prebuilt-themes/deeppurple-amber.css"), "");

// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.viewer {\n  height: auto;\n  width: 100%;\n  overflow: auto;\n  padding: 0px;\n  margin: 0px; }\n  .viewer .header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    position: relative;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 30px;\n    text-transform: uppercase;\n    padding: 10px;\n    letter-spacing: 1.5px;\n    height: 30px; }\n    .viewer .header .btn-group {\n      height: 30px; }\n      .viewer .header .btn-group button {\n        width: 27px;\n        height: 27px;\n        margin: 0px;\n        border: 1px solid #B4B1B1;\n        box-shadow: none; }\n  .viewer .container {\n    min-height: 300px; }\n  .viewer button {\n    background: white;\n    border: 1px solid #B4B1B1;\n    box-shadow: none; }\n\n#app-container {\n  border: 1px solid red;\n  margin: 0px;\n  padding: 0px;\n  /* .container{\r\n\t\theight: 100%;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row; \r\n\t\tflex-wrap: wrap;\r\n\t\tjustify-content: space-between;\r\n\t} */ }\n  #app-container .header {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    height: 45px;\n    width: 100%;\n    overflow: hidden; }\n  #app-container .container {\n    position: absolute;\n    top: 45px;\n    left: 0px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    height: calc(100% - 45px);\n    width: 100%;\n    overflow: hidden; }\n    #app-container .container .subcontainer {\n      position: relative;\n      height: 100%;\n      border-right: 2px solid gray;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start; }\n      #app-container .container .subcontainer.viewer-container {\n        -webkit-box-flex: 0.2;\n            -ms-flex-positive: 0.2;\n                flex-grow: 0.2; }\n      #app-container .container .subcontainer.flowchart-container {\n        -webkit-box-flex: 3;\n            -ms-flex-positive: 3;\n                flex-grow: 3; }\n      #app-container .container .subcontainer.editor-container {\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1; }\n      #app-container .container .subcontainer.expand {\n        -webkit-box-flex: 2;\n            -ms-flex-positive: 2;\n                flex-grow: 2; }\n      #app-container .container .subcontainer .toggle-btn {\n        position: absolute;\n        bottom: calc(50%);\n        height: 15px;\n        width: 15px;\n        background-color: white;\n        border: 1px solid black;\n        z-index: 10;\n        cursor: pointer; }\n        #app-container .container .subcontainer .toggle-btn.right {\n          right: 0px;\n          margin-right: -18px; }\n        #app-container .container .subcontainer .toggle-btn.left {\n          left: 0px;\n          margin-left: -18px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isExpanded = {
            editor: false,
            viewer: false
        };
    }
    AppComponent.prototype.toggleEditor = function () {
        this.isExpanded.editor = !this.isExpanded.editor;
    };
    AppComponent.prototype.toggleViewer = function () {
        this.isExpanded.viewer = !this.isExpanded.viewer;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__custom_angular_modules_CustomMaterialModule__ = __webpack_require__("../../../../../src/app/custom-angular-modules/CustomMaterialModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_split__ = __webpack_require__("../../../../angular-split/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_ace_editor__ = __webpack_require__("../../../../ng2-ace-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__global_services_flowchart_service__ = __webpack_require__("../../../../../src/app/global-services/flowchart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__global_services_module_service__ = __webpack_require__("../../../../../src/app/global-services/module.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ui_components_controls_flowchart_controls_flowchart_controls_component__ = __webpack_require__("../../../../../src/app/ui-components/controls/flowchart-controls/flowchart-controls.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ui_components_controls_main_menu_menu_component__ = __webpack_require__("../../../../../src/app/ui-components/controls/main-menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ui_components_editors_procedure_editor_procedure_editor_component__ = __webpack_require__("../../../../../src/app/ui-components/editors/procedure-editor/procedure-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ui_components_editors_parameter_editor_parameter_editor_component__ = __webpack_require__("../../../../../src/app/ui-components/editors/parameter-editor/parameter-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ui_components_editors_flowchart_viewer_flowchart_viewer_component__ = __webpack_require__("../../../../../src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ui_components_viewers_code_viewer_code_viewer_component__ = __webpack_require__("../../../../../src/app/ui-components/viewers/code-viewer/code-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ui_components_viewers_geometry_viewer_geometry_viewer_component__ = __webpack_require__("../../../../../src/app/ui-components/viewers/geometry-viewer/geometry-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ui_components_viewers_module_viewer_module_viewer_component__ = __webpack_require__("../../../../../src/app/ui-components/viewers/module-viewer/module-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ui_components_viewers_parameter_viewer_parameter_viewer_component__ = __webpack_require__("../../../../../src/app/ui-components/viewers/parameter-viewer/parameter-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ui_components_controls_modulebox_modulebox_component__ = __webpack_require__("../../../../../src/app/ui-components/controls/modulebox/modulebox.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









/*import {ResizeEvent} from 'angular-resizable-element';
import { ClickStopPropogationDirective } from './click-stop-propogation.directive';*/












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__ui_components_controls_main_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_15__ui_components_editors_flowchart_viewer_flowchart_viewer_component__["a" /* FlowchartViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_16__ui_components_viewers_code_viewer_code_viewer_component__["a" /* CodeViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_17__ui_components_viewers_geometry_viewer_geometry_viewer_component__["a" /* GeometryViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_11__ui_components_controls_flowchart_controls_flowchart_controls_component__["a" /* FlowchartControlsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__ui_components_viewers_module_viewer_module_viewer_component__["a" /* ModuleViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_13__ui_components_editors_procedure_editor_procedure_editor_component__["a" /* ProcedureEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_19__ui_components_viewers_parameter_viewer_parameter_viewer_component__["a" /* ParameterViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_14__ui_components_editors_parameter_editor_parameter_editor_component__["a" /* ParameterEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_20__ui_components_controls_modulebox_modulebox_component__["a" /* ModuleboxComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_20__ui_components_controls_modulebox_modulebox_component__["a" /* ModuleboxComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_ace_editor__["a" /* AceEditorModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular_split__["a" /* AngularSplitModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular_tree_component__["a" /* TreeModule */],
                __WEBPACK_IMPORTED_MODULE_5__custom_angular_modules_CustomMaterialModule__["a" /* CustomMaterialModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__global_services_flowchart_service__["a" /* FlowchartService */], __WEBPACK_IMPORTED_MODULE_10__global_services_module_service__["a" /* ModuleService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/code/CodeFactory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generators_javascript_generator__ = __webpack_require__("../../../../../src/app/base-classes/code/generators/javascript_generator.ts");

var CodeFactory = /** @class */ (function () {
    function CodeFactory() {
    }
    CodeFactory.getCodeGenerator = function (language) {
        if (language == "js") {
            return new __WEBPACK_IMPORTED_MODULE_0__generators_javascript_generator__["a" /* CodeGeneratorJS */]();
        }
        else
            throw Error("Unknown language");
    };
    ;
    return CodeFactory;
}());

//# sourceMappingURL=CodeFactory.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/code/CodeGenerator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeGenerator; });
var CodeGenerator = /** @class */ (function () {
    function CodeGenerator(language) {
        this._language = language;
    }
    ;
    CodeGenerator.prototype.setModules = function (modules) {
        this._modules = modules;
    };
    CodeGenerator.prototype.getLanguage = function () {
        return this._language;
    };
    // takes a flowchart and generates some code string 
    CodeGenerator.prototype.getDisplayCode = function (flowchart) {
        throw Error("Not implemented");
    };
    ;
    CodeGenerator.prototype.executeNode = function (node, params) {
        throw Error("Not implemented");
    };
    ;
    CodeGenerator.prototype.getFunctionCall = function (node, params) {
        throw Error("Not implemented");
    };
    ;
    CodeGenerator.prototype.getDefinition = function (node) {
        throw Error("Not implemented");
    };
    ;
    CodeGenerator.prototype.getNodeCode = function (node) {
        throw Error("Not implemented");
    };
    ;
    CodeGenerator.prototype.getNodeOutputCode = function (node, output_idx) {
        throw Error("Not implemented");
    };
    ;
    CodeGenerator.prototype.generateConnectionLine = function (destination_node, destination_port, source_node, source_port) {
        throw Error("Not implemented");
    };
    ;
    CodeGenerator.prototype.generateProcedureCode = function (procedure) {
        throw Error("Not implemented");
    };
    ;
    CodeGenerator.prototype.generateInputPortCode = function (port) {
        throw Error("Not implemented");
    };
    ;
    CodeGenerator.prototype.generateOutputPortCode = function (port) {
        throw Error("Not implemented");
    };
    ;
    return CodeGenerator;
}());

//# sourceMappingURL=CodeGenerator.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/code/CodeModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ICodeGenerator__ = __webpack_require__("../../../../../src/app/base-classes/code/ICodeGenerator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ICodeGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ICodeGenerator__);
/* unused harmony reexport ICodeGenerator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__generators_javascript_generator__ = __webpack_require__("../../../../../src/app/base-classes/code/generators/javascript_generator.ts");
/* unused harmony reexport CodeGeneratorJS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CodeFactory__ = __webpack_require__("../../../../../src/app/base-classes/code/CodeFactory.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__CodeFactory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__computation_modules_Module__ = __webpack_require__("../../../../../src/app/base-classes/code/computation-modules/Module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__computation_modules_Module__["a"]; });

/*export {CodeGeneratorPY} from './generators/python_generator';*/



//# sourceMappingURL=CodeModule.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/code/ICodeGenerator.ts":
/***/ (function(module, exports) {

;
//# sourceMappingURL=ICodeGenerator.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/code/computation-modules/Module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Module; });
var Module = /** @class */ (function () {
    function Module() {
    }
    Module.prototype.getFunctions = function () {
        return [];
        /*let obj = this;
        let props = [];

        do {
            props = props.concat(Object.getOwnPropertyNames(obj));
        } while (obj = Object.getPrototypeOf(obj));

        return props.sort().filter(function(e, i, arr) {
           if (e!=arr[i+1] && typeof obj[e] == 'function') return true;
        });*/
    };
    ;
    return Module;
}());

//# sourceMappingURL=Module.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/code/generators/javascript_generator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeGeneratorJS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CodeGenerator__ = __webpack_require__("../../../../../src/app/base-classes/code/CodeGenerator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureModule.ts");
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


var CodeGeneratorJS = /** @class */ (function (_super) {
    __extends(CodeGeneratorJS, _super);
    function CodeGeneratorJS() {
        return _super.call(this, "js") || this;
    }
    //
    //	gets the display code for the flowchart
    //
    CodeGeneratorJS.prototype.getDisplayCode = function (flow) {
        var fn_calls = [];
        var code_defs = [];
        var connector_lines = [];
        var code_block = "";
        var nodeOrder = flow.getNodeOrder();
        var all_nodes = flow.getNodes();
        var all_edges = flow.getEdges();
        // connector lines
        for (var c = 0; c < all_edges.length; c++) {
            var edge = all_edges[c];
            var input_node = flow.getNodeByIndex(edge.input_address[0]);
            var output_node = flow.getNodeByIndex(edge.output_address[0]);
            // create line assigning values
            var code = this.generateConnectionLine(input_node, edge.input_address[1], output_node, edge.output_address[1]);
            if (connector_lines[edge.input_address[0]] == undefined) {
                connector_lines[edge.input_address[0]] = [];
            }
            connector_lines[edge.input_address[0]].push(code);
        }
        // get all the codes of the different functions and the function calls 
        for (var c = 0; c < nodeOrder.length; c++) {
            // check inputs connected to outputs
            var nodeIndex = nodeOrder[c];
            var node = all_nodes[nodeIndex];
            code_defs.push(this.getNodeCode(node));
            if (connector_lines[nodeIndex] !== undefined) {
                fn_calls.push(connector_lines[nodeIndex].join(";\n"));
            }
            fn_calls.push(this.getFunctionCall(node));
        }
        code_block = code_defs.join(";\n\n") + "\n" + fn_calls.join(";\n") + ";";
        // check if code works by uncommenting this line
        // eval(code_block);
        return code_block;
    };
    //
    //
    //
    CodeGeneratorJS.prototype.getFunctionCall = function (node, params) {
        var fn_call = "";
        var param_values = [];
        var inputs = node.getInputs();
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].isConnected() == true) {
                var input_name = inputs[i].getName();
                if (params) {
                    param_values.push(params[input_name]);
                }
                else {
                    param_values.push(input_name);
                }
            }
        }
        // make function call and assign to variable of same name
        fn_call = "let " + node.getName() + "=" + node.getName() + node.getVersion() + "( " + param_values.join(", ") + " )";
        return fn_call;
    };
    CodeGeneratorJS.prototype.getDefinition = function (node) {
        var fn_def = "";
        var params = [];
        var inputs = node.getInputs();
        for (var i = 0; i < inputs.length; i++) {
            params.push(inputs[i].getName());
        }
        // make function
        fn_def += "function " + node.getName() + node.getVersion() + "( " + params.join(", ") + " )() \n";
        return fn_def;
    };
    CodeGeneratorJS.prototype.getNodeCode = function (node) {
        var nodeVars = [];
        var fn_code = "";
        // add initializations
        // get params
        var params = [];
        var initializations = [];
        var inputs = node.getInputs();
        for (var i = 0; i < inputs.length; i++) {
            var inp = inputs[i];
            nodeVars.push(inp.getName());
            if (inp.isConnected() == true) {
                params.push(inp.getName());
            }
            initializations.push(this.generateInputPortCode(inp));
        }
        // make function
        fn_code += "function " + node.getName() + node.getVersion() + "( " + params.join(", ") + " ) { \n";
        fn_code += (initializations.length > 0 ? initializations.join(";\n") + ";\n" : "");
        // add outputs 
        var results = [], opInits = [];
        var outputs = node.getOutputs();
        for (var o = 0; o < outputs.length; o++) {
            var oname = outputs[o].getName();
            nodeVars.push(oname);
            results.push(oname + " : " + oname);
            opInits.push(this.generateOutputPortCode(outputs[o]));
        }
        // add initialization for outputs
        fn_code += (opInits.length > 0 ? "\n" + opInits.join(";\n") + ";\n" : "");
        // add procedure
        for (var line = 0; line < node.getProcedure().length; line++) {
            var procedure = node.getProcedure()[line];
            fn_code += "\n" + this.generateProcedureCode(procedure, nodeVars, undefined);
        }
        // add return object
        fn_code += "\n" + "return " + " { " + results.join(", ") + " } " + ";";
        // ending
        fn_code += "\n }\n";
        return fn_code;
    };
    CodeGeneratorJS.prototype.getNodeOutputCode = function (node, output_idx) {
        return node.getName() + "." + node.getOutputByIndex(output_idx).getName();
    };
    CodeGeneratorJS.prototype.generateConnectionLine = function (destination_node, destination_port, source_node, source_port) {
        var code = "let " + destination_node.getInputByIndex(destination_port).getName() + "=" + this.getNodeOutputCode(source_node, source_port) + "\n";
        return code;
    };
    CodeGeneratorJS.prototype.generateProcedureCode = function (procedure, nodeVars, prodFn) {
        if (nodeVars === void 0) { nodeVars = []; }
        // change based on type
        var code;
        var prod_type = procedure.getType();
        if (prodFn == undefined) {
            prodFn = this.generateProcedureCode;
        }
        if (prod_type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].Data) {
            var init = void 0;
            if (nodeVars.indexOf(procedure.getLeftComponent().expression) == -1) {
                init = "let ";
            }
            else {
                init = "";
            }
            code = init + procedure.getLeftComponent().expression + " = " + procedure.getRightComponent().expression + ";";
        }
        else if (prod_type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].Action) {
            var paramList = [];
            var params = procedure.getRightComponent().params;
            for (var p = 0; p < params.length; p++) {
                var param = params[p];
                if (param.value !== undefined)
                    paramList.push(param.value);
                else
                    paramList.push(param.type);
            }
            var right = procedure.getRightComponent();
            var init = void 0;
            if (nodeVars.indexOf(procedure.getLeftComponent().expression) == -1) {
                init = "let ";
            }
            else {
                init = "";
            }
            code = init = procedure.getLeftComponent().expression
                + " = " + right.module.trim()
                + "." + right.fn_name + "( " + paramList.join(",") + " );\n";
        }
        else if (procedure.hasChildren()) {
            var codeArr_1 = [];
            // add statement
            var statement = "";
            if (prod_type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].IfElseControl) {
                statement = "// if-else";
            }
            else if (prod_type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].IfControl) {
                statement = "if (" + procedure.getLeftComponent().expression + "){";
            }
            else if (prod_type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].ElseControl) {
                statement = "else{";
            }
            else if (prod_type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].ForLoopControl) {
                statement = "for ( let " + procedure.getLeftComponent().expression + " in " + procedure.getRightComponent().expression + "){";
            }
            codeArr_1.push(statement);
            // add children
            procedure.getChildren().map(function (child) {
                codeArr_1.push(prodFn(child, nodeVars, prodFn));
            });
            // add ending
            if (prod_type !== __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].IfElseControl)
                codeArr_1.push("}\n");
            code = codeArr_1.join("\n");
        }
        return code;
    };
    //
    //	required for code generation
    //
    CodeGeneratorJS.prototype.generateInputPortCode = function (port) {
        if (port.isConnected() == true)
            return "";
        return "let " + port.getName() + " = " + port.getValue();
    };
    CodeGeneratorJS.prototype.generateOutputPortCode = function (port) {
        return "let " + port.getName() + " = " + port.getDefaultValue();
    };
    CodeGeneratorJS.prototype.executeNode = function (node, params) {
        //let gis = this._modules["gis"];
        var str = "(function(){ \
						" + this.getNodeCode(node) + "\n" + this.getFunctionCall(node, params) + "\n" + "return " + node.getName() + ";" + "})(); \
						";
        console.log(str);
        var result = eval(str);
        return result; //result;// return result of the node
    };
    return CodeGeneratorJS;
}(__WEBPACK_IMPORTED_MODULE_0__CodeGenerator__["a" /* CodeGenerator */]));

;
//# sourceMappingURL=javascript_generator.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/flowchart/Flowchart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Flowchart; });
//
//	Flowchart class 
//  Implement IFlowchart
//	
//
//
var Flowchart = /** @class */ (function () {
    //
    //	constructor needs 2 arguments  - username and icodegenerator
    //
    function Flowchart(username) {
        this._nodes = [];
        this._edges = [];
        this._author = username;
    }
    ;
    //	gets author of the flowchart
    Flowchart.prototype.getAuthor = function () {
        return this._author;
    };
    //	Summary of flowchart
    Flowchart.prototype.getSummary = function () {
        return "This is a flowchart, with " + this._nodes.length + " nodes, written by " + this._author;
    };
    //
    //	Maintains the node order for execution
    //
    Flowchart.prototype.addNode = function (node) {
        if (node == undefined) {
            //todo: create new node
        }
        // a new node will have no dependencies - hence push index to end of _nodeTree
        this._nodes.push(node);
        return this._nodes.length;
    };
    ;
    Flowchart.prototype.addEdge = function (outputAddress, inputAddress) {
        if (outputAddress.length !== 2 || inputAddress.length !== 2) {
            console.log("inputAddress", inputAddress);
            console.log("outputAddress", outputAddress);
            throw Error("Invalid arguments for edge");
        }
        var edge = { output_address: outputAddress, input_address: inputAddress };
        // todo: check for valid input/output addresses and port address
        this._edges.push(edge);
        return this._edges.length;
    };
    ;
    Flowchart.prototype.deleteNode = function (nodeIndex) {
        // todo: check for valid node index
        this._nodes.splice(nodeIndex, 1);
        return this._nodes.length;
    };
    Flowchart.prototype.deleteEdge = function (edgeIndex) {
        // todo: check for valid edge index
        this._edges.splice(edgeIndex, 1);
        return this._edges.length;
    };
    Flowchart.prototype.getNodes = function () {
        return this._nodes;
    };
    Flowchart.prototype.getEdges = function () {
        return this._edges;
    };
    //
    //	Get node by index in flowchart
    //	todo: fix
    //
    Flowchart.prototype.getNodeByIndex = function (index) {
        return this._nodes[index];
    };
    Flowchart.prototype.getEdgeByIndex = function (index) {
        return this._edges[index];
    };
    //todo: provide a more efficient sort
    Flowchart.prototype.getNodeOrder = function () {
        var rankedNodeOrder = [];
        var incoming = [];
        this._nodes.map(function (node, index) {
            incoming[index] = { count: 0, id: index };
        });
        for (var c = 0; c < this._edges.length; c++) {
            var edge = this._edges[c];
            var in_nodeIndex = edge.input_address[0];
            var out_nodeIndex = edge.output_address[0];
            incoming[in_nodeIndex].count++;
            incoming[out_nodeIndex].count--;
            console.log(incoming);
        }
        var an = this._nodes;
        rankedNodeOrder = incoming.sort(function (a, b) {
            return a.count - b.count;
        }).map(function (obj) {
            return obj.id;
        });
        return rankedNodeOrder;
    };
    //
    //	clears all the cached results
    //
    Flowchart.prototype.reset = function () {
        for (var n = 0; n < this._nodes.length; n++) {
            this._nodes[n].reset();
        }
    };
    //
    // todo: should this happen realtime?
    //
    /*private sortNodesByRank(nodes: IGraphNode[]): IGraphNode[]{

        let ranked: any[] = [];
        let sorted: IGraphNode[] = [];

        for(let i=0; i < nodes.length; i++){

            let node :IGraphNode = nodes[i];
            let rank :number = node.rank();
            console.log(node.getName(), rank)

            if( ranked[rank] == undefined){
                ranked[rank] = [];
            }
            ranked[rank].push(node);
        }

        let all_ranks = Object.keys(ranked).map(function(num){ return parseInt(num); }).sort();
        for( let r=0; r < all_ranks.length; r++){
            let rank = all_ranks[r];
            let nodes_with_rank = ranked[rank];
            sorted = sorted.concat(nodes_with_rank);
        }

        return sorted;
    }*/
    //
    //	executes the flowchart
    //
    Flowchart.prototype.execute = function (code_generator) {
        // set all nodes to status not executed
        // future: cache results and set status based on changes
        this.reset();
        // sort nodes 
        var all_nodes = this._nodes;
        var sorted_nodes = this.getNodeOrder().map(function (index) {
            return all_nodes[index];
        });
        // execute each node
        // provide input to next 
        var timeStarted = (new Date()).getTime();
        for (var nc = 0; nc < sorted_nodes.length; nc++) {
            var node = sorted_nodes[nc];
            // check status of the node; don't rerun
            if (node.hasExecuted() == true) {
                console.log("is this needed?");
                continue;
            }
            node.execute(code_generator);
            console.log(node.getName(), node.getResult());
            //todo: print time taken
        }
        return true;
    };
    /*executeNode(node: IGraphNode){

        console.log("Executing ", node.getName());
        
        let params :any = null;

        if( node.isIndependent() == false ){
            params = {};
            let dependencies :any = node.getDependencies();

            for(let d=0; d < dependencies.length; d++){
                // dependencies are stored as an array of arrays - [ [], [], [] ]
                // the 0th index stores the node, the 1st index stores the port number
                let parent_node = this.getNode(dependencies[d][0]);
                if(parent_node.getStatus() == 1){
                    let source_port = parent_node.getOutputByIndex(dependencies[d][1]);
                    let my_port = node.getInputByIndex(dependencies[d][2]);
                    params[my_port.getName()]  = source_port.getValue();
                    my_port.setValue(source_port.getValue());
                }
            }
        }
        
        node.executeNode(this.code_generator, params);

    }*/
    Flowchart.prototype.save = function () {
        throw Error("Not implemented");
        /*this.reset();
        //todo:
        console.log(CircularJSON.stringify(this));
        return CircularJSON.stringify(this);*/
    };
    Flowchart.prototype.readFromJSON = function (filename) {
        // todo:
        // read the nodes and edges and add to the flowchart
    };
    return Flowchart;
}());

//# sourceMappingURL=Flowchart.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/flowchart/FlowchartModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IFlowchart__ = __webpack_require__("../../../../../src/app/base-classes/flowchart/IFlowchart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IFlowchart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__IFlowchart__);
/* unused harmony reexport IFlowchart */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Flowchart__ = __webpack_require__("../../../../../src/app/base-classes/flowchart/Flowchart.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Flowchart__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FlowchartReader__ = __webpack_require__("../../../../../src/app/base-classes/flowchart/FlowchartReader.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__FlowchartReader__["a"]; });



//# sourceMappingURL=FlowchartModule.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/flowchart/FlowchartReader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowchartReader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Flowchart__ = __webpack_require__("../../../../../src/app/base-classes/flowchart/Flowchart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_NodeModule__ = __webpack_require__("../../../../../src/app/base-classes/node/NodeModule.ts");


var FlowchartReader = /** @class */ (function () {
    function FlowchartReader() {
    }
    FlowchartReader.readFlowchartFromData = function (data) {
        // recreate the flowchart from data
        var fc = new __WEBPACK_IMPORTED_MODULE_0__Flowchart__["a" /* Flowchart */](data["author"]);
        var nodes = data["_nodes"];
        var edges = data["_edges"];
        // add nodes
        for (var index in nodes) {
            var n_data = nodes[index];
            var node = new __WEBPACK_IMPORTED_MODULE_1__node_NodeModule__["a" /* GraphNode */](n_data["name"], n_data["type"]);
            node.update(n_data);
            fc.addNode(node);
        }
        // add edges
        for (var index in edges) {
            var e_data = edges[index];
            fc.addEdge(e_data.output_address, e_data.input_address);
        }
        return fc;
    };
    return FlowchartReader;
}());

//# sourceMappingURL=FlowchartReader.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/flowchart/IFlowchart.ts":
/***/ (function(module, exports) {

;
//# sourceMappingURL=IFlowchart.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/misc/GUID.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdGenerator; });
var IdGenerator = /** @class */ (function () {
    function IdGenerator() {
    }
    IdGenerator.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    IdGenerator.getId = function () {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
    };
    return IdGenerator;
}());

//# sourceMappingURL=GUID.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/node/GraphNode.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphNode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_GUID__ = __webpack_require__("../../../../../src/app/base-classes/misc/GUID.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__port_PortModule__ = __webpack_require__("../../../../../src/app/base-classes/port/PortModule.ts");



var GraphNode = /** @class */ (function () {
    function GraphNode(name, type) {
        this.portCounter = 0;
        this._version = 1;
        this._type = undefined;
        this._inputs = [];
        this._outputs = [];
        this._procedure = [];
        this._hasExecuted = false;
        this._isDisabled = false;
        this._hasError = false;
        this._dependencies = [];
        this._dependencyNodes = [];
        this.position = [0, 0];
        this._id = __WEBPACK_IMPORTED_MODULE_0__misc_GUID__["a" /* IdGenerator */].getId();
        this._name = name;
        if (type !== undefined) {
            // find in library and copy properties
        }
    }
    //	
    //
    //
    GraphNode.prototype.getName = function () {
        return this._name;
    };
    ;
    GraphNode.prototype.getId = function () {
        return this._id;
    };
    ;
    GraphNode.prototype.getVersion = function () {
        return this._version;
    };
    GraphNode.prototype.getType = function () {
        return this._type;
    };
    GraphNode.prototype.overwrite = function (node) {
        this._inputs = node.getInputs();
        this._outputs = node.getOutputs();
        this._procedure = node.getProcedure();
        return this._version++;
    };
    GraphNode.prototype.update = function (nodeData) {
        this._id = nodeData["_id"];
        // map direct properties
        this.portCounter = nodeData["portCounter"];
        this.position = nodeData["position"];
        this._isDisabled = nodeData["_isDisabled"];
        // add inputs
        var inputs = nodeData["_inputs"];
        for (var input_index in inputs) {
            var inp_data = inputs[input_index];
            var input = new __WEBPACK_IMPORTED_MODULE_2__port_PortModule__["a" /* InputPort */](inp_data["_name"]);
            input.update(inp_data);
            this._inputs.push(input);
        }
        // add outputs
        var outputs = nodeData["_outputs"];
        for (var output_index in outputs) {
            var output_data = outputs[output_index];
            var output = new __WEBPACK_IMPORTED_MODULE_2__port_PortModule__["b" /* OutputPort */](output_data["_name"]);
            output.update(output_data);
            this._outputs.push(output);
        }
        // add procedure
        var procedureArr = nodeData["_procedure"];
        for (var prodIndex in procedureArr) {
            var procedure = __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["a" /* ProcedureFactory */].getProcedureFromData(procedureArr[prodIndex], undefined);
            this._procedure.push(procedure);
        }
    };
    //
    //
    //
    GraphNode.prototype.addInput = function (name) {
        var default_name = this._name + "_in" + this.portCounter;
        if (name !== undefined) {
            default_name = name;
        }
        var inp = new __WEBPACK_IMPORTED_MODULE_2__port_PortModule__["a" /* InputPort */](default_name);
        this._inputs.push(inp);
        this.portCounter++;
        return this._inputs.length;
    };
    GraphNode.prototype.addOutput = function (name) {
        var default_name = this._name + "_out" + this.portCounter;
        if (name !== undefined) {
            default_name = name;
        }
        var oup = new __WEBPACK_IMPORTED_MODULE_2__port_PortModule__["b" /* OutputPort */](default_name);
        this._outputs.push(oup);
        this.portCounter++;
        return this._outputs.length;
    };
    GraphNode.prototype.deleteInput = function (input_port_index) {
        this._inputs.splice(input_port_index, 1);
        return this._inputs.length;
    };
    GraphNode.prototype.deleteOutput = function (output_port_index) {
        this._outputs.splice(output_port_index, 1);
        return this._inputs.length;
    };
    GraphNode.prototype.getInputs = function () {
        return this._inputs;
    };
    GraphNode.prototype.getOutputs = function () {
        return this._outputs;
    };
    GraphNode.prototype.getInputByIndex = function (input_port_index) {
        return this._inputs[input_port_index];
    };
    GraphNode.prototype.getOutputByIndex = function (output_port_index) {
        return this._outputs[output_port_index];
    };
    GraphNode.prototype.getProcedure = function () {
        return this._procedure;
    };
    GraphNode.prototype.addProcedure = function (prod) {
        this._procedure.push(prod);
    };
    GraphNode.prototype.addProcedureAtPosition = function (prod, index) {
        this._procedure.splice(index, 0, prod);
    };
    GraphNode.prototype.deleteProcedure = function (prod) {
        this._procedure = this._procedure.filter(function (child) {
            if (child === prod) {
                return false;
            }
            else {
                return true;
            }
        });
    };
    GraphNode.prototype.deleteProcedureAtPosition = function (index) {
        this._procedure.splice(index, 1);
    };
    //
    //
    //
    GraphNode.prototype.isDisabled = function () {
        return this._isDisabled;
    };
    GraphNode.prototype.enable = function () {
        this._isDisabled = false;
    };
    GraphNode.prototype.disable = function () {
        this._isDisabled = true;
    };
    GraphNode.prototype.hasExecuted = function () {
        return this._hasExecuted;
    };
    GraphNode.prototype.reset = function () {
        this._hasExecuted = false;
        this._hasError = false;
        return (this._hasExecuted == false);
    };
    GraphNode.prototype.hasError = function () {
        return this._hasError;
    };
    //
    //
    //
    /*isIndependent(): boolean{
        if(this._dependencies.length > 0)
            return false;
        return true;
    }

    addDependency(node_port_input_idx : number[]){

        if( this._dependencyNodes.indexOf( node_port_input_idx[0] ) == -1){
            this._dependencyNodes.push(node_port_input_idx[0]);
        }

        this._dependencies.push(node_port_input_idx);
    }
    
    removeDependency(node_port_idx: number[]){
        
    }

    getDependencies(): number[][]{
        return this._dependencies;
    }

    
    getDependencyNodes(): number[]{
        return this._dependencyNodes
    };
    
    rank(): number{
        return this._dependencyNodes.length
    };*/
    //
    //
    //
    GraphNode.prototype.execute = function (code_generator, params) {
        // use code generator to execute code
        var result = code_generator.executeNode(this, params);
        // add results to this node
        for (var n = 0; n < this._outputs.length; n++) {
            var output_port = this._outputs[n];
            output_port.setComputedValue(result[output_port.getName()]);
        }
        this._hasExecuted = true;
    };
    GraphNode.prototype.getResult = function () {
        var final_values = {};
        for (var o = 0; o < this._outputs.length; o++) {
            var output = this._outputs[o];
            final_values[output.getName()] = output.getValue();
        }
        return final_values;
    };
    return GraphNode;
}());

//# sourceMappingURL=GraphNode.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/node/IEdge.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=IEdge.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/node/IGraphNode.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=IGraphNode.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/node/NodeModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IGraphNode__ = __webpack_require__("../../../../../src/app/base-classes/node/IGraphNode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IGraphNode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__IGraphNode__);
/* unused harmony reexport IGraphNode */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GraphNode__ = __webpack_require__("../../../../../src/app/base-classes/node/GraphNode.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__GraphNode__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IEdge__ = __webpack_require__("../../../../../src/app/base-classes/node/IEdge.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IEdge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__IEdge__);
/* unused harmony reexport IEdge */



//# sourceMappingURL=NodeModule.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/port/InputPort.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputPort; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Port__ = __webpack_require__("../../../../../src/app/base-classes/port/Port.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PortTypes__ = __webpack_require__("../../../../../src/app/base-classes/port/PortTypes.ts");
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


var InputPort = /** @class */ (function (_super) {
    __extends(InputPort, _super);
    function InputPort(name, type) {
        var _this = _super.call(this, name) || this;
        // input type 
        // slider
        // input
        // color
        // file
        _this._inputType = __WEBPACK_IMPORTED_MODULE_1__PortTypes__["a" /* PortTypes */].Default;
        if (type !== undefined) {
            _this._inputType = type.name;
            _this.setDefaultValue(type.value);
        }
        return _this;
    }
    InputPort.prototype.getType = function () {
        return this._inputType;
    };
    return InputPort;
}(__WEBPACK_IMPORTED_MODULE_0__Port__["a" /* Port */]));

//# sourceMappingURL=InputPort.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/port/OutputPort.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutputPort; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Port__ = __webpack_require__("../../../../../src/app/base-classes/port/Port.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PortTypes__ = __webpack_require__("../../../../../src/app/base-classes/port/PortTypes.ts");
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


var OutputPort = /** @class */ (function (_super) {
    __extends(OutputPort, _super);
    function OutputPort(name) {
        return _super.call(this, name) || this;
    }
    OutputPort.prototype.getType = function () {
        return __WEBPACK_IMPORTED_MODULE_1__PortTypes__["a" /* PortTypes */].Output;
    };
    return OutputPort;
}(__WEBPACK_IMPORTED_MODULE_0__Port__["a" /* Port */]));

//# sourceMappingURL=OutputPort.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/port/Port.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Port; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_GUID__ = __webpack_require__("../../../../../src/app/base-classes/misc/GUID.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PortTypes__ = __webpack_require__("../../../../../src/app/base-classes/port/PortTypes.ts");


var Port = /** @class */ (function () {
    function Port(name) {
        this._selected = false;
        this._disabled = false;
        this._connected = false;
        // values
        this._default = undefined;
        this._computed = undefined;
        this._id = __WEBPACK_IMPORTED_MODULE_0__misc_GUID__["a" /* IdGenerator */].getId();
        this._name = name;
    }
    Port.prototype.getId = function () {
        return this._id;
    };
    Port.prototype.getType = function () {
        return __WEBPACK_IMPORTED_MODULE_1__PortTypes__["a" /* PortTypes */].Default;
    };
    Port.prototype.setType = function (type) {
        this._type = type;
    };
    Port.prototype.isSelected = function () {
        return this._selected;
    };
    Port.prototype.isDisabled = function () {
        return this._disabled;
    };
    Port.prototype.disable = function () {
        this._disabled = true;
    };
    Port.prototype.enable = function () {
        this._disabled = false;
    };
    //
    //
    //
    Port.prototype.update = function (portData) {
        this._id = portData["_id"];
        this._type = portData["_type"];
        this._selected = portData["_selected"];
        this._disabled = portData["_disabled"];
        this._connected = portData["_connected"];
        this._default = portData["_default"];
        // todo: assign computed also??
    };
    //
    //
    //
    Port.prototype.getName = function () {
        return this._name;
    };
    Port.prototype.setName = function (name) {
        this._name = name;
    };
    //
    //
    //
    Port.prototype.isConnected = function () {
        return this._connected;
    };
    Port.prototype.connect = function () {
        this._connected = true;
    };
    Port.prototype.disconnect = function () {
        this._connected = false;
    };
    Port.prototype.setDefaultValue = function (value) {
        this._default = value;
    };
    Port.prototype.setComputedValue = function (value) {
        this._computed = value;
    };
    Port.prototype.getDefaultValue = function () {
        return this._default;
    };
    Port.prototype.getValue = function () {
        if (this._computed !== undefined)
            return this._computed;
        else
            return this._default;
    };
    //
    //
    //
    Port.prototype.reset = function () {
        this._computed = undefined;
    };
    return Port;
}());

//# sourceMappingURL=Port.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/port/PortModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__InputPort__ = __webpack_require__("../../../../../src/app/base-classes/port/InputPort.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__InputPort__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__OutputPort__ = __webpack_require__("../../../../../src/app/base-classes/port/OutputPort.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__OutputPort__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PortTypes__ = __webpack_require__("../../../../../src/app/base-classes/port/PortTypes.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__PortTypes__["a"]; });



//# sourceMappingURL=PortModule.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/port/PortTypes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortTypes; });
var PortTypes;
(function (PortTypes) {
    PortTypes[PortTypes["Default"] = 0] = "Default";
    PortTypes[PortTypes["Input"] = 1] = "Input";
    PortTypes[PortTypes["ColorPicker"] = 2] = "ColorPicker";
    PortTypes[PortTypes["Dropdown"] = 3] = "Dropdown";
    PortTypes[PortTypes["FilePicker"] = 4] = "FilePicker";
    PortTypes[PortTypes["Output"] = 5] = "Output";
})(PortTypes || (PortTypes = {}));
//# sourceMappingURL=PortTypes.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/procedure/ActionProcedure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionProcedure; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Procedure__ = __webpack_require__("../../../../../src/app/base-classes/procedure/Procedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureTypes.ts");
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


var ActionProcedure = /** @class */ (function (_super) {
    __extends(ActionProcedure, _super);
    function ActionProcedure(data) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].Action, false) || this;
        var left = { expression: data.result,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        var right = { expression: data.module + "." + data.category + "::" + data.function,
            isAction: true,
            module: data.module,
            category: data.category,
            fn_name: data.function,
            params: data.params
        };
        if (data.result !== undefined) {
            _super.prototype.setLeftComponent.call(_this, left);
        }
        _super.prototype.setRightComponent.call(_this, right);
        return _this;
    }
    return ActionProcedure;
}(__WEBPACK_IMPORTED_MODULE_0__Procedure__["a" /* Procedure */]));

//# sourceMappingURL=ActionProcedure.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/procedure/DataProcedure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProcedure; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Procedure__ = __webpack_require__("../../../../../src/app/base-classes/procedure/Procedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureTypes.ts");
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


var DataProcedure = /** @class */ (function (_super) {
    __extends(DataProcedure, _super);
    function DataProcedure(data) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].Data, false) || this;
        if (data == undefined) {
            data = { result: undefined, value: undefined };
        }
        var left = { expression: data.result,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        var right = { expression: data.value,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        _super.prototype.setLeftComponent.call(_this, left);
        _super.prototype.setRightComponent.call(_this, right);
        return _this;
    }
    return DataProcedure;
}(__WEBPACK_IMPORTED_MODULE_0__Procedure__["a" /* Procedure */]));

//# sourceMappingURL=DataProcedure.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/procedure/ForLoopControlProcedure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForLoopControlProcedure; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureTypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Procedure__ = __webpack_require__("../../../../../src/app/base-classes/procedure/Procedure.ts");
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


var ForLoopControlProcedure = /** @class */ (function (_super) {
    __extends(ForLoopControlProcedure, _super);
    function ForLoopControlProcedure(data) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].ForLoopControl, true) || this;
        if (data == undefined) {
            data = { variable: undefined, array_name: undefined };
        }
        var left = { expression: data.variable,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        var right = { expression: data.array_name,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        _super.prototype.setLeftComponent.call(_this, left);
        _super.prototype.setRightComponent.call(_this, right);
        return _this;
    }
    return ForLoopControlProcedure;
}(__WEBPACK_IMPORTED_MODULE_1__Procedure__["a" /* Procedure */]));

//# sourceMappingURL=ForLoopControlProcedure.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/procedure/IComponent.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=IComponent.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/procedure/IProcedure.ts":
/***/ (function(module, exports) {

/*enum ControlTypes{
    FOR = "for each",
    IF = "if else"
}*/
//# sourceMappingURL=IProcedure.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/procedure/IfElseControlProcedure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IfElseControlProcedure; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Procedure__ = __webpack_require__("../../../../../src/app/base-classes/procedure/Procedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureTypes.ts");
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


var IfElseControlProcedure = /** @class */ (function (_super) {
    __extends(IfElseControlProcedure, _super);
    function IfElseControlProcedure(title, data) {
        var _this = _super.call(this, title, true) || this;
        if (title == __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].IfElseControl) {
            var if_control = new IfElseControlProcedure(__WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].IfControl, data);
            var else_control = new IfElseControlProcedure(__WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].ElseControl, data);
            _super.prototype.addChild.call(_this, if_control);
            _super.prototype.addChild.call(_this, else_control);
        }
        else {
            if (title == __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].IfControl) {
                if (data == undefined) {
                    data = { if_condition: undefined, el_condition: undefined };
                }
                var left = {
                    expression: data.if_condition,
                    isAction: false,
                    module: undefined,
                    category: undefined,
                    fn_name: undefined,
                    params: undefined
                };
                _this.setLeftComponent(left);
            }
            else if (title == __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].ElseControl) {
            }
        }
        return _this;
    }
    IfElseControlProcedure.prototype.addChild = function (prod) {
        if (this.getType() == __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].IfElseControl) {
            alert("Cannot add child to this");
        }
        else {
            _super.prototype.addChild.call(this, prod);
        }
    };
    return IfElseControlProcedure;
}(__WEBPACK_IMPORTED_MODULE_0__Procedure__["a" /* Procedure */]));

//# sourceMappingURL=IfElseControlProcedure.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/procedure/Procedure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Procedure; });
var Procedure = /** @class */ (function () {
    function Procedure(type, hasChildren) {
        this._disabled = false;
        this._children = [];
        this._type = type;
        this._hasChildren = hasChildren;
    }
    Procedure.prototype.update = function (prodData, parent) {
        this._hasChildren = prodData._hasChildren;
        this._disabled = prodData._disabled;
        this._leftComponent = prodData._leftComponent;
        this._rightComponent = prodData._rightComponent;
        this._parent = parent;
        this._children = [];
    };
    Procedure.prototype.getType = function () {
        return this._type;
    };
    Procedure.prototype.isSelected = function () {
        return this._selected;
    };
    Procedure.prototype.select = function () {
        this._selected = true;
    };
    Procedure.prototype.unselect = function () {
        this._selected = false;
    };
    Procedure.prototype.isDisabled = function () {
        return this._disabled;
    };
    Procedure.prototype.enable = function () {
        this._disabled = false;
    };
    Procedure.prototype.disable = function () {
        this._disabled = true;
    };
    Procedure.prototype.hasParent = function () {
        if (this._parent == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    Procedure.prototype.getParent = function () {
        return this._parent;
    };
    Procedure.prototype.setParent = function (parent) {
        this._parent = parent;
    };
    Procedure.prototype.hasChildren = function () {
        return this._hasChildren;
    };
    Procedure.prototype.getChildren = function () {
        if (this._hasChildren == false) {
            throw Error("This Procedure Type is not a container");
        }
        else {
            return this._children;
        }
    };
    Procedure.prototype.addChild = function (child) {
        if (this._hasChildren) {
            this._children.push(child);
        }
        else {
            throw Error("Cannot add child to this procedure");
        }
    };
    Procedure.prototype.addChildFromData = function (child) {
        if (this._hasChildren) {
            this._children.push(child);
        }
        else {
            throw Error("Cannot add child to this procedure");
        }
    };
    Procedure.prototype.addChildAtPosition = function (child, index) {
        this._children.splice(index, 0, child);
    };
    Procedure.prototype.deleteChild = function (procedure) {
        this._children = this._children.filter(function (child) {
            if (child === procedure) {
                return false;
            }
            else {
                return true;
            }
        });
    };
    Procedure.prototype.getLeftComponent = function () {
        return this._leftComponent;
    };
    Procedure.prototype.setLeftComponent = function (component) {
        this._leftComponent = component;
    };
    Procedure.prototype.getRightComponent = function () {
        return this._rightComponent;
    };
    Procedure.prototype.setRightComponent = function (component) {
        this._rightComponent = component;
    };
    Procedure.prototype.getCodeString = function (code_generator) {
        return code_generator.generateProcedureCode(this);
    };
    return Procedure;
}());

//# sourceMappingURL=Procedure.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/procedure/ProcedureFactory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcedureFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureTypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DataProcedure__ = __webpack_require__("../../../../../src/app/base-classes/procedure/DataProcedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ActionProcedure__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ActionProcedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IfElseControlProcedure__ = __webpack_require__("../../../../../src/app/base-classes/procedure/IfElseControlProcedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ForLoopControlProcedure__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ForLoopControlProcedure.ts");





var ProcedureFactory = /** @class */ (function () {
    function ProcedureFactory() {
    }
    ProcedureFactory.getProcedure = function (type, data) {
        if (type == __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].Data) {
            return new __WEBPACK_IMPORTED_MODULE_1__DataProcedure__["a" /* DataProcedure */](data);
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].Action) {
            return new __WEBPACK_IMPORTED_MODULE_2__ActionProcedure__["a" /* ActionProcedure */](data);
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].IfElseControl) {
            return new __WEBPACK_IMPORTED_MODULE_3__IfElseControlProcedure__["a" /* IfElseControlProcedure */](__WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].IfElseControl, data);
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].ForLoopControl) {
            return new __WEBPACK_IMPORTED_MODULE_4__ForLoopControlProcedure__["a" /* ForLoopControlProcedure */](data);
        }
        else {
            throw Error("Invalid control");
        }
    };
    ProcedureFactory.getProcedureFromData = function (procedureData, parent) {
        var procedure;
        if (procedureData["_type"] == __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].IfControl) {
            procedure = new __WEBPACK_IMPORTED_MODULE_3__IfElseControlProcedure__["a" /* IfElseControlProcedure */](__WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].IfControl);
        }
        else if (procedureData["_type"] == __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].ElseControl) {
            procedure = new __WEBPACK_IMPORTED_MODULE_3__IfElseControlProcedure__["a" /* IfElseControlProcedure */](__WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].ElseControl);
        }
        else {
            procedure = ProcedureFactory.getProcedure(procedureData["_type"]);
        }
        procedure.update(procedureData, undefined);
        if (procedureData._children !== undefined) {
            for (var child = 0; child < procedureData._children.length; child++) {
                var childProd = procedureData._children[child];
                procedure.addChildFromData(ProcedureFactory.getProcedureFromData(childProd, procedure));
            }
        }
        return procedure;
    };
    return ProcedureFactory;
}());

//# sourceMappingURL=ProcedureFactory.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/procedure/ProcedureModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProcedureFactory__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureFactory.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ProcedureFactory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IProcedure__ = __webpack_require__("../../../../../src/app/base-classes/procedure/IProcedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IProcedure___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__IProcedure__);
/* unused harmony reexport IProcedure */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ProcedureTypes__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureTypes.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__ProcedureTypes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IComponent__ = __webpack_require__("../../../../../src/app/base-classes/procedure/IComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__IComponent__);
/* unused harmony reexport IComponent */




//# sourceMappingURL=ProcedureModule.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/procedure/ProcedureTypes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcedureTypes; });
var ProcedureTypes;
(function (ProcedureTypes) {
    ProcedureTypes["Data"] = "Data";
    ProcedureTypes["Action"] = "Action";
    ProcedureTypes["IfElseControl"] = "IfElse";
    ProcedureTypes["IfControl"] = "If";
    ProcedureTypes["ElseControl"] = "Else";
    ProcedureTypes["ForLoopControl"] = "For Loop";
})(ProcedureTypes || (ProcedureTypes = {}));
//# sourceMappingURL=ProcedureTypes.js.map

/***/ }),

/***/ "../../../../../src/app/base-classes/viz/Viewer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Viewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_services_flowchart_service__ = __webpack_require__("../../../../../src/app/global-services/flowchart.service.ts");

var Viewer = /** @class */ (function () {
    function Viewer(injector, name, description, author) {
        var _this = this;
        this.panelOpenState = true;
        this._name = name;
        this._description = description;
        this._author = author;
        this.flowchartService = injector.get(__WEBPACK_IMPORTED_MODULE_0__global_services_flowchart_service__["a" /* FlowchartService */]);
        this._subscription = this.flowchartService.getMessage().subscribe(function (message) {
            _this._message = message;
            _this.notify();
        });
    }
    //
    //	checks if the flowchart service has a flowchart and calls update function for the viewer
    //
    Viewer.prototype.notify = function () {
        if (this.flowchartService.hasFlowchart() && this.flowchartService.getNodes().length > 0) {
            this.update();
        }
        else {
            this.reset();
        }
    };
    //
    //	gets flowchart service
    //
    Viewer.prototype.getService = function () {
        return this.flowchartService;
    };
    Viewer.prototype.ngOnInit = function () { this.notify(); };
    Viewer.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this._subscription.unsubscribe();
    };
    Viewer.prototype.reset = function () {
        console.log(this._name + " has not implemented the reset function!");
    };
    // 
    //	update function to be overriden by each viewer
    //
    Viewer.prototype.update = function () {
        console.log(this._name + " has not implemented the update function!");
    };
    return Viewer;
}());

//# sourceMappingURL=Viewer.js.map

/***/ }),

/***/ "../../../../../src/app/custom-angular-modules/CustomMaterialModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/*
 * This module imports all thre required components from Angular Material
 */
var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialogModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialogModule */]]
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());

//# sourceMappingURL=CustomMaterialModule.js.map

/***/ }),

/***/ "../../../../../src/app/geometry-modules/Module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Module; });
var Module = /** @class */ (function () {
    function Module(name, author) {
        this.name = name;
        this.author = author;
    }
    Module.prototype.getName = function () {
        return this.name;
    };
    Module.prototype.getAuthor = function () {
        return this.author;
    };
    Module.prototype.getAllMethodNames = function () {
        var obj = this;
        var methods = new Set();
        while (obj = Reflect.getPrototypeOf(obj)) {
            var keys = Reflect.ownKeys(obj);
            keys.forEach(function (k) { return methods.add(k); });
        }
        return methods;
    };
    return Module;
}());

//# sourceMappingURL=Module.js.map

/***/ }),

/***/ "../../../../../src/app/geometry-modules/gis_module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gis_module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Module__ = __webpack_require__("../../../../../src/app/geometry-modules/Module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("../../../../three/build/three.module.js");
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


//
//		Mobius Classes
//
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var Polyline = /** @class */ (function () {
    function Polyline() {
    }
    Polyline.prototype.isPlanar = function () {
        return true;
    };
    return Polyline;
}());
var Polygon = /** @class */ (function () {
    function Polygon() {
    }
    Polygon.prototype.isPlanar = function () {
        return false;
    };
    return Polygon;
}());
var Frame = /** @class */ (function () {
    function Frame() {
    }
    return Frame;
}());
var gis_module = /** @class */ (function (_super) {
    __extends(gis_module, _super);
    function gis_module() {
        // name of module, author of module
        return _super.call(this, "gis", "akm") || this;
    }
    gis_module.prototype.getPoint = function () {
        var pnt = new Point();
        return pnt;
    };
    gis_module.prototype.getPlane = function () {
        var pln = new Polyline();
        return pln;
    };
    gis_module.prototype.isPlanar = function (entity) {
        return entity.isPlanar();
    };
    gis_module.prototype.byXYPoints = function () {
        return new Frame();
    };
    gis_module.prototype.makeCube = function (size) {
        return new __WEBPACK_IMPORTED_MODULE_1_three__["b" /* Mesh */](new __WEBPACK_IMPORTED_MODULE_1_three__["a" /* BoxGeometry */](size, size, size));
    };
    return gis_module;
}(__WEBPACK_IMPORTED_MODULE_0__Module__["a" /* Module */]));

//# sourceMappingURL=gis_module.js.map

/***/ }),

/***/ "../../../../../src/app/global-services/flowchart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowchartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_classes_flowchart_FlowchartModule__ = __webpack_require__("../../../../../src/app/base-classes/flowchart/FlowchartModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_classes_node_NodeModule__ = __webpack_require__("../../../../../src/app/base-classes/node/NodeModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_classes_code_CodeModule__ = __webpack_require__("../../../../../src/app/base-classes/code/CodeModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_circular_json__ = __webpack_require__("../../../../circular-json/build/circular-json.node.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_circular_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_circular_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_modules_AllModules__ = __webpack_require__("../../../../../src/assets/modules/AllModules.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FlowchartService = /** @class */ (function () {
    function FlowchartService(http) {
        this.http = http;
        /*private _ffactory = new FlowchartFactory();
        private _fc = new FlowchartConverter();*/
        this._user = "AKM";
        this.code_generator = __WEBPACK_IMPORTED_MODULE_5__base_classes_code_CodeModule__["a" /* CodeFactory */].getCodeGenerator("js");
        this._selectedNode = 0;
        this._selectedPort = 0;
        // 
        // message handling between components
        // 
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.newFile();
    }
    FlowchartService.prototype.check = function () {
        return this._flowchart != undefined;
    };
    ;
    FlowchartService.prototype.sendMessage = function (message) {
        this.subject.next({ text: message });
    };
    FlowchartService.prototype.clearMessage = function () {
        this.subject.next();
    };
    FlowchartService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    //
    //  message to all viewers that flowchart updated
    //
    FlowchartService.prototype.update = function () {
        this.sendMessage("Updated");
    };
    FlowchartService.prototype.readTextFile = function (file) {
    };
    FlowchartService.prototype.loadFile = function (fileString) {
        var _this = this;
        var jsonData;
        try {
            var data = __WEBPACK_IMPORTED_MODULE_6_circular_json__["parse"](fileString);
            // load the required modules
            /* _this.modules.loadModules(data["module"]); */
            // load the required code generator
            if (_this.code_generator.getLanguage() != data["language"] && data["language"] !== undefined) {
                _this.code_generator = __WEBPACK_IMPORTED_MODULE_5__base_classes_code_CodeModule__["a" /* CodeFactory */].getCodeGenerator(data["language"]);
            }
            // read the flowchart
            _this._flowchart = __WEBPACK_IMPORTED_MODULE_3__base_classes_flowchart_FlowchartModule__["b" /* FlowchartReader */].readFlowchartFromData(data["flowchart"]);
            console.log(_this._flowchart);
            _this.update();
        }
        catch (err) {
            alert("Error loading file");
        }
    };
    FlowchartService.prototype.loadModules = function (modules) {
        this._moduleSet = [];
        var moduleSet = this._moduleSet;
        modules.map(function (module) {
            var modClass = __WEBPACK_IMPORTED_MODULE_7__assets_modules_AllModules__[module["name"]];
            if (modClass.version == module["version"] && modClass.author == module["author"]) {
                moduleSet.push(new modClass());
            }
            else {
                throw Error("Module not compatible. Please check version / author");
            }
        });
    };
    FlowchartService.prototype.getModules = function () {
        return this._moduleSet;
    };
    //
    // gets the textual representation of the actual flowchart
    //
    FlowchartService.prototype.getChartData = function () {
        return JSON.stringify(this._flowchart); //this._fc.flowchartToData(this._flowchart);
    };
    //
    //  check if flowchart is there
    //
    FlowchartService.prototype.hasFlowchart = function () {
        return this._flowchart != undefined;
    };
    //
    //
    //
    FlowchartService.prototype.newFile = function () {
        this._flowchart = new __WEBPACK_IMPORTED_MODULE_3__base_classes_flowchart_FlowchartModule__["a" /* Flowchart */](this._user);
        this._selectedNode = 0;
        this._selectedPort = 0;
        this.update();
        this.loadModules([{ name: "Math", version: 1, author: "AKM" }]);
        return this._flowchart;
    };
    //
    //  returns the flowchart
    //
    FlowchartService.prototype.getFlowchart = function () {
        console.warn("Flowchart shouldnot be modified outside of this service");
        return this._flowchart;
    };
    FlowchartService.prototype.getNodes = function () {
        return this._flowchart.getNodes();
    };
    FlowchartService.prototype.getEdges = function () {
        return this._flowchart.getEdges();
    };
    //
    //    add node
    //
    FlowchartService.prototype.addNode = function (type) {
        var default_node_name = "hello" + (this._flowchart.getNodes().length + 1);
        var node = new __WEBPACK_IMPORTED_MODULE_4__base_classes_node_NodeModule__["a" /* GraphNode */](default_node_name, type);
        this._flowchart.addNode(node);
        this.update();
    };
    FlowchartService.prototype.addEdge = function (outputAddress, inputAddress) {
        this._flowchart.addEdge(outputAddress, inputAddress);
        this._flowchart.getNodeByIndex(outputAddress[0]).getOutputByIndex(outputAddress[1]).connect();
        this._flowchart.getNodeByIndex(inputAddress[0]).getInputByIndex(inputAddress[1]).connect();
        this.update();
    };
    //
    //  select node
    //
    FlowchartService.prototype.selectNode = function (nodeIndex) {
        this._selectedNode = nodeIndex;
        this._selectedPort = undefined;
        this.update();
    };
    FlowchartService.prototype.selectPort = function (outputportIndex) {
        this._selectedPort = outputportIndex;
        this.update();
    };
    FlowchartService.prototype.getSelectedNode = function () {
        return this._flowchart.getNodeByIndex(this._selectedNode);
    };
    FlowchartService.prototype.getSelectedPort = function () {
        // todo: where is this used?
        return this.getSelectedNode().getOutputByIndex(this._selectedPort);
    };
    //
    //  
    //
    FlowchartService.prototype.isSelected = function (node) {
        return this._flowchart.getNodeByIndex(this._selectedNode).getId() == node.getId();
    };
    // 
    //  run this flowchart
    //
    FlowchartService.prototype.execute = function () {
        this._flowchart.execute(this.code_generator);
        this.update();
    };
    //
    // get execution code    
    //
    FlowchartService.prototype.getCode = function () {
        return this.code_generator.getDisplayCode(this._flowchart);
    };
    FlowchartService.prototype.saveFile = function () {
        var file = {};
        var fileString;
        file["language"] = "js";
        file["modules"] = [];
        file["flowchart"] = this._flowchart;
        fileString = __WEBPACK_IMPORTED_MODULE_6_circular_json__["stringify"](file);
        this.downloadContent({
            type: 'text/plain;charset=utf-8',
            filename: 'Scene' + (new Date()).getTime() + ".mob",
            content: fileString
        });
    };
    FlowchartService.prototype.downloadContent = function (options) {
        if (!options || !options.content) {
            throw 'You have at least to provide content to download';
        }
        options.filename = options.filename || 'scene.mob';
        options.type = options.type || 'text/plain;charset=utf-8';
        options.bom = options.bom || decodeURIComponent('%ef%bb%bf');
        if (window.navigator.msSaveBlob) {
            var blob = new Blob([options.bom + options.content], { type: options.type });
            window.navigator.msSaveBlob(blob, options.filename);
        }
        else {
            var link = document.createElement('a');
            var content = options.bom + options.content;
            var uriScheme = ['data:', options.type, ','].join('');
            link.href = uriScheme + content;
            link.download = options.filename;
            //FF requires the link in actual DOM
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };
    FlowchartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], FlowchartService);
    return FlowchartService;
    var _a;
}());

//# sourceMappingURL=flowchart.service.js.map

/***/ }),

/***/ "../../../../../src/app/global-services/module.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__geometry_modules_gis_module__ = __webpack_require__("../../../../../src/app/geometry-modules/gis_module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModuleService = /** @class */ (function () {
    function ModuleService() {
        this._modules = [];
        var gis = new __WEBPACK_IMPORTED_MODULE_1__geometry_modules_gis_module__["a" /* gis_module */]();
        this._modules["gis"] = gis;
    }
    ModuleService.prototype.loadModules = function (module) {
        var file = "../assets/modules/" + module.name + ".js" + '?hash_id=' + Math.random();
        var gis = new __WEBPACK_IMPORTED_MODULE_1__geometry_modules_gis_module__["a" /* gis_module */]();
        this._modules["gis"] = gis;
    };
    ModuleService.prototype.getModule = function (module) {
        return this._modules[module];
    };
    ModuleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ModuleService);
    return ModuleService;
}());

//# sourceMappingURL=module.service.js.map

/***/ }),

/***/ "../../../../../src/app/ui-components/controls/flowchart-controls/flowchart-controls.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel class='viewer' \r\n\t\t(opened)=\"panelOpenState = true\" \r\n\t\t(closed)=\"panelOpenState = false\"\r\n\t\t[expanded]=\"panelOpenState\">\r\n  \t<mat-expansion-panel-header>\r\n\t    <mat-panel-title class='header'>\r\n\t      <div class='header'>Flowchart Controls</div>\r\n\t    </mat-panel-title>\r\n  \t</mat-expansion-panel-header>\r\n\t<div class='container'>\r\n\t\t<button (click)=\"newfile()\">New File</button>\r\n\t\t<button type=\"submit\" (click)=\"loadFile()\">Load File</button>\r\n\t\t<button (click)=\"execute()\">Run Code</button>\r\n\t\t<button (click)=\"save()\">Save Flowchart</button>\r\n\t</div>\r\n</mat-expansion-panel>"

/***/ }),

/***/ "../../../../../src/app/ui-components/controls/flowchart-controls/flowchart-controls.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.viewer {\n  height: auto;\n  width: 100%;\n  overflow: auto;\n  padding: 0px;\n  margin: 0px; }\n  .viewer .header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    position: relative;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 30px;\n    text-transform: uppercase;\n    padding: 10px;\n    letter-spacing: 1.5px;\n    height: 30px; }\n    .viewer .header .btn-group {\n      height: 30px; }\n      .viewer .header .btn-group button {\n        width: 27px;\n        height: 27px;\n        margin: 0px;\n        border: 1px solid #B4B1B1;\n        box-shadow: none; }\n  .viewer .container {\n    min-height: 300px; }\n  .viewer button {\n    background: white;\n    border: 1px solid #B4B1B1;\n    box-shadow: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/controls/flowchart-controls/flowchart-controls.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowchartControlsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_module_service__ = __webpack_require__("../../../../../src/app/global-services/module.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlowchartControlsComponent = /** @class */ (function (_super) {
    __extends(FlowchartControlsComponent, _super);
    // doesn't really need to extend viewer 
    function FlowchartControlsComponent(injector, modules) {
        var _this = _super.call(this, injector, "flowchart-controls") || this;
        _this.modules = modules;
        return _this;
    }
    FlowchartControlsComponent.prototype.ngOnInit = function () {
        this.newfile();
    };
    FlowchartControlsComponent.prototype.newfile = function () {
        this.flowchartService.newFile();
    };
    FlowchartControlsComponent.prototype.execute = function () {
        this.flowchartService.execute();
    };
    FlowchartControlsComponent.prototype.loadFile = function (url) {
        this.flowchartService.loadFile(url);
    };
    FlowchartControlsComponent.prototype.save = function () {
        this.flowchartService.saveFile();
    };
    FlowchartControlsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-flowchart-controls',
            template: __webpack_require__("../../../../../src/app/ui-components/controls/flowchart-controls/flowchart-controls.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui-components/controls/flowchart-controls/flowchart-controls.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__global_services_module_service__["a" /* ModuleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_services_module_service__["a" /* ModuleService */]) === "function" && _b || Object])
    ], FlowchartControlsComponent);
    return FlowchartControlsComponent;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__["a" /* Viewer */]));

//# sourceMappingURL=flowchart-controls.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui-components/controls/main-menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-bar\">\r\n\t<div class='section'>\r\n\t\t<ul class='menu'>\r\n\t\t\t<li class='menu-item' [matMenuTriggerFor]=\"file_menu\">\r\n\t\t\t\tFile\r\n\t\t\t</li>\r\n\t\t\t\r\n\t\t\t<li class='menu-item'>Node</li>\r\n\t\t\t<li class='menu-item'>Code</li>\r\n\t\t\t<li class='menu-item'>Help</li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<div class='section'>\r\n\t\t<span id='branding'>Mobius v2.0</span>\r\n\t</div>\r\n</div>\r\n\r\n<mat-menu class=\"menu\" #file_menu=\"matMenu\" yPosition=\"above\" [overlapTrigger]=\"false\">\r\n  <span mat-menu-item (click)=\"newfile()\">New File</span>\r\n  <span mat-menu-item (click)=\"save()\">Save File</span>\r\n  <span mat-menu-item (click)=\"openPicker()\">\r\n  \t\t<input #fileInput style=\"display: none;\"\r\n  \t\ttype=\"file\" (change)=\"loadFile()\"/>\r\n  \t\tLoad File\r\n  </span>\r\n  <span mat-menu-item (click)=\"execute()\">Run File</span>\r\n</mat-menu>"

/***/ }),

/***/ "../../../../../src/app/ui-components/controls/main-menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset, .menu-bar ul.menu {\n  margin: 0px;\n  padding: 0px; }\n\n.viewer {\n  height: auto;\n  width: 100%;\n  overflow: auto;\n  padding: 0px;\n  margin: 0px; }\n  .viewer .header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    position: relative;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 30px;\n    text-transform: uppercase;\n    padding: 10px;\n    letter-spacing: 1.5px;\n    height: 30px; }\n    .viewer .header .btn-group {\n      height: 30px; }\n      .viewer .header .btn-group button {\n        width: 27px;\n        height: 27px;\n        margin: 0px;\n        border: 1px solid #B4B1B1;\n        box-shadow: none; }\n  .viewer .container {\n    min-height: 300px; }\n  .viewer button {\n    background: white;\n    border: 1px solid #B4B1B1;\n    box-shadow: none; }\n\n.menu-bar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border-bottom: 1px solid gray;\n  background-color: #ADADAD;\n  height: 30px;\n  line-height: 30px;\n  padding: 5px 5px; }\n  .menu-bar .section {\n    width: auto;\n    display: inline-block; }\n  .menu-bar #branding {\n    font-weight: bolder;\n    cursor: pointer;\n    font-size: 14px; }\n  .menu-bar ul.menu {\n    list-style: none; }\n    .menu-bar ul.menu .menu {\n      margin-left: 10px;\n      width: 200px; }\n    .menu-bar ul.menu li {\n      display: inline;\n      font-size: 16px;\n      margin-right: 10px; }\n      .menu-bar ul.menu li:hover {\n        color: #5D5959;\n        cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/controls/main-menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_flowchart_service__ = __webpack_require__("../../../../../src/app/global-services/flowchart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(flowchartService) {
        this.flowchartService = flowchartService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.newfile();
    };
    MenuComponent.prototype.newfile = function () {
        this.flowchartService.newFile();
    };
    MenuComponent.prototype.execute = function () {
        this.flowchartService.execute();
    };
    MenuComponent.prototype.openPicker = function () {
        var el = this.fileInput.nativeElement;
        el.click();
    };
    MenuComponent.prototype.loadFile = function () {
        var file = this.fileInput.nativeElement.files[0];
        if (file) {
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            var fs_1 = this.flowchartService;
            reader.onload = function (evt) {
                var fileString = evt.target["result"];
                fs_1.loadFile(fileString);
            };
            reader.onerror = function (evt) {
                console.log("Error reading file");
            };
        }
    };
    MenuComponent.prototype.save = function () {
        this.flowchartService.saveFile();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('fileInput'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
    ], MenuComponent.prototype, "fileInput", void 0);
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/ui-components/controls/main-menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui-components/controls/main-menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__global_services_flowchart_service__["a" /* FlowchartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_services_flowchart_service__["a" /* FlowchartService */]) === "function" && _b || Object])
    ], MenuComponent);
    return MenuComponent;
    var _a, _b;
}());

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui-components/controls/modulebox/modulebox.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  modulebox works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/controls/modulebox/modulebox.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/controls/modulebox/modulebox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ModuleboxComponent = /** @class */ (function () {
    function ModuleboxComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ModuleboxComponent.prototype.ngOnInit = function () {
    };
    ModuleboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modulebox',
            template: __webpack_require__("../../../../../src/app/ui-components/controls/modulebox/modulebox.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui-components/controls/modulebox/modulebox.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */]) === "function" && _a || Object, Object])
    ], ModuleboxComponent);
    return ModuleboxComponent;
    var _a;
}());

//# sourceMappingURL=modulebox.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel class='viewer' \r\n\t\t[expanded]=\"panelOpenState\">\r\n  \t<mat-expansion-panel-header>\r\n\t    <mat-panel-title class='header'>\r\n\t      <div class='header'>Flowchart Viewer</div>\r\n\t      <div class='btn-group' click-stop-propagation>\r\n\t\t\t<!-- <button (click)=\"resetViewer()\">R</button> -->\r\n\t\t\t<button id=\"addNode\" (click)=\"addNode($event)\"></button>\r\n\t\t\t<button id=\"play\" (click)=\"executeFlowchart($event)\"></button>\r\n\t\t  </div>\r\n\t    </mat-panel-title>\r\n  \t</mat-expansion-panel-header>\r\n\t<div class='container'>\r\n\t\t\t\r\n\t\t\t<!-- svg canvas to draw the edges -->\r\n\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" \r\n\t\t\t\tclass=\"graph-container\" \r\n\t\t\t\tid=\"graph-edges\" \r\n\t\t\t\t[style.zoom]=\"zoom\">\r\n\r\n\t\t\t\t<g *ngFor=\"let edge of _edges\">\r\n\t\t\t\t\t<path \r\n\t\t\t\t\t  [attr.d]=\"getEdgePath(edge)\" \r\n\t\t\t\t\t  (click)=\"edgeClicked()\"\r\n\t\t\t\t\t  stroke=\"blue\"\r\n\t\t\t\t\t  stroke-width=\"3\" fill=\"none\" />\r\n\t\t\t\t</g>\r\n\t\t\t\t\r\n\t\t\t\t<!-- dragging path -->\r\n\t\t\t\t<g id=\"temporary-edge\" [class.hidden]=\"!_linkMode\" >\r\n\t\t\t\t\t<path \r\n\t\t\t\t\t[attr.d]=\"edgeString(mouse_pos.start, mouse_pos.current)\" stroke=\"blue\"\r\n \t\t\t\t \tstroke-width=\"5\" fill=\"none\" stroke-dasharray=\"5, 5\"/>\r\n \t\t\t\t\t<circle id=\"pointC\" [attr.cx]=\"mouse_pos.current.x\" [attr.cy]=\"mouse_pos.current.y\" r=\"5\" />\r\n \t\t\t\t</g>\r\n\r\n\t\t\t</svg>\r\n\r\n\t\t\t<!-- div container for the nodes -->\r\n\t\t\t<div class=\"graph-container\" \r\n\t\t\t\tid=\"graph-nodes\" ondragover=\"return false\" [style.zoom]=\"zoom\" >\r\n\t\t\t\t\r\n\t\t\t\t<!-- all nodes -->\r\n\t\t\t\t<div class=\"node-container\">\r\n\r\n\t\t\t\t\t<!-- one node -->\r\n\t\t\t\t\t<div  class=\"node\" \r\n\t\t\t\t\t\t\t*ngFor=\"let node of _nodes; let node_index = index\" \r\n\t\t\t\t\t\t\t[style.left.px]=\"node.position[0]\" \r\n\t\t\t\t\t\t\t[style.top.px]=\"node.position[1]\" >\r\n\r\n\t\t\t\t\t\t<!--inputs-->\r\n\t\t\t\t\t\t<div class=\"port-container input\">\r\n\t\t\t\t\t\t\t<div class=\"port\" \r\n\t\t\t\t\t\t\t\t[class.connected]=\"port.isConnected()\" \r\n\t\t\t\t\t\t\t\t*ngFor=\"let port of node.getInputs(); let pi=index\"  \r\n\t\t\t\t\t\t\t\tid=\"n{{node_index}}pi{{pi}}\"\r\n\t\t\t\t\t\t\t\tdraggable=true\r\n\t\t\t\t\t\t\t\t(dragstart)=\"portDragStart($event, port, [node_index, pi])\" \r\n\t\t\t\t\t\t\t\t(drag)=\"portDragging($event, port)\" \r\n\t\t\t\t\t\t\t\t(dragend)=\"portDragEnd($event, port)\"\r\n\t\t\t\t\t\t\t\t(drop)=\"portDrop($event, port, [node_index, pi])\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"btn-sm input\" (click)=\"addPort(node_index, 'in')\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<!-- node body -->\r\n\t\t\t\t\t\t<div class=\"node-body\" \r\n\t\t\t\t\t\t\t[class.selected]=\"isSelected(node)\" \r\n\t\t\t\t\t\t\t(click)=\"clickNode($event, node_index)\"\r\n\t\t\t\t\t\t\tdraggable=true  \r\n\t\t\t\t\t\t\t(dragstart)=\"nodeDragStart($event, node)\" \r\n\t\t\t\t\t\t\t(drag)=\"nodeDragging($event, node)\" \r\n\t\t\t\t\t\t\t(dragend)=\"nodeDragEnd($event, node)\">\r\n\t\t\t\t\t\t\t<div class=\"node-name\">{{node.getName()}}</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t\t\t<!-- outputs -->\r\n\t\t\t\t\t\t<div class=\"port-container output\">\r\n\t\t\t\t\t\t\t<div class=\"port\"\r\n\t\t\t\t\t\t\t\t[class.connected]=\"port.isConnected()\" \r\n\t\t\t\t\t\t\t\t*ngFor=\"let port of node.getOutputs(); let po=index\"\r\n\t\t\t\t\t\t\t\tid=\"n{{node_index}}po{{po}}\"\r\n\t\t\t\t\t\t\t\tdraggable=true\r\n\t\t\t\t\t\t\t\t(dragstart)=\"portDragStart($event, port, [node_index, po])\" \r\n\t\t\t\t\t\t\t\t(drag)=\"portDragging($event, port)\" \r\n\t\t\t\t\t\t\t\t(dragend)=\"portDragEnd($event, port)\"\r\n\t\t\t\t\t\t\t\t(drop)=\"portDrop($event, port, [node_index, po])\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"btn-sm output\" (click)=\"addPort(node_index, 'out')\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t</div>\r\n</mat-expansion-panel>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.viewer {\n  height: auto;\n  width: 100%;\n  overflow: auto;\n  padding: 0px;\n  margin: 0px; }\n  .viewer .header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    position: relative;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 30px;\n    text-transform: uppercase;\n    padding: 10px;\n    letter-spacing: 1.5px;\n    height: 30px; }\n    .viewer .header .btn-group {\n      height: 30px; }\n      .viewer .header .btn-group button {\n        width: 27px;\n        height: 27px;\n        margin: 0px;\n        border: 1px solid #B4B1B1;\n        box-shadow: none; }\n  .viewer .container {\n    min-height: 300px; }\n  .viewer button {\n    background: white;\n    border: 1px solid #B4B1B1;\n    box-shadow: none; }\n\n.viewer {\n  position: relative;\n  overflow: hidden; }\n  .viewer #addNode {\n    background: url(" + __webpack_require__("../../../../../src/assets/img/plus.png") + ");\n    background-size: cover; }\n  .viewer #play {\n    background: url(" + __webpack_require__("../../../../../src/assets/img/play.png") + ");\n    background-size: cover; }\n  .viewer .container {\n    position: relative;\n    height: 100%;\n    overflow: hidden; }\n    .viewer .container .wrapper {\n      position: absolute;\n      cursor: move;\n      background-color: blue;\n      z-index: 1; }\n  .viewer .graph-container {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    height: 100%;\n    width: 100%; }\n    .viewer .graph-container #graph-edges {\n      background-color: transparent; }\n      .viewer .graph-container #graph-edges #temporary-edge .hidden {\n        display: none; }\n    .viewer .graph-container #graph-nodes {\n      background-color: transparent;\n      overflow: hidden; }\n  .viewer .node-container {\n    position: relative; }\n    .viewer .node-container .node {\n      position: absolute;\n      z-index: 3;\n      margin: 0px;\n      min-width: 70px; }\n      .viewer .node-container .node .node-body {\n        position: relative;\n        height: 60px;\n        border: 3px solid black;\n        border-radius: 10px;\n        background-color: white;\n        text-align: center;\n        cursor: move; }\n        .viewer .node-container .node .node-body.selected {\n          background-color: #A4EAA4; }\n        .viewer .node-container .node .node-body .node-name {\n          font-family: sans-serif;\n          font-size: 14px;\n          line-height: 16px; }\n      .viewer .node-container .node .port-container {\n        position: relative;\n        height: 10px;\n        width: 100%;\n        text-align: center;\n        z-index: 1; }\n        .viewer .node-container .node .port-container.input {\n          margin-top: -2px; }\n        .viewer .node-container .node .port-container.output {\n          -webkit-transform: rotate(180deg);\n                  transform: rotate(180deg); }\n        .viewer .node-container .node .port-container .port {\n          height: 7.5px;\n          width: 15px;\n          border: 2px solid black;\n          border-radius: 50%;\n          display: inline-block;\n          background-color: black;\n          margin: 0px 2px;\n          border-top-right-radius: 15px;\n          border-top-left-radius: 15px;\n          z-index: 3; }\n          .viewer .node-container .node .port-container .port:hover {\n            background-color: orange;\n            cursor: pointer; }\n          .viewer .node-container .node .port-container .port.connected {\n            background-color: green; }\n        .viewer .node-container .node .port-container .btn-sm {\n          position: absolute;\n          right: -15px;\n          border: 2px solid gray;\n          color: gray;\n          height: 15px;\n          width: 15px;\n          font-size: 10px;\n          line-height: 15px;\n          cursor: pointer;\n          background: url(" + __webpack_require__("../../../../../src/assets/img/plus.png") + ");\n          background-size: cover; }\n          .viewer .node-container .node .port-container .btn-sm.input {\n            top: -5px; }\n          .viewer .node-container .node .port-container .btn-sm.output {\n            bottom: 0px;\n            left: -15px; }\n      .viewer .node-container .node:active {\n        cursor: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowchartViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__ = __webpack_require__("../../../../../src/app/base-classes/port/PortModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlowchartViewerComponent = /** @class */ (function (_super) {
    __extends(FlowchartViewerComponent, _super);
    function FlowchartViewerComponent(injector) {
        var _this = _super.call(this, injector, "FlowchartViewer") || this;
        _this.pan_mode = false;
        _this.left = 0;
        _this.top = 0;
        _this.zoom = 1;
        _this._portWidth = 15;
        _this._margin = 10;
        _this._selectedNode = 0;
        _this._nodes = [];
        _this._edges = [];
        _this._linkMode = false;
        _this.mouse_pos = {
            start: { x: 0, y: 0 },
            current: { x: 0, y: 0 }
        };
        return _this;
    }
    //
    //
    //  Viewer Related Functions
    //
    //
    FlowchartViewerComponent.prototype.resetViewer = function () {
        this.zoom = 1;
        this.left = 0;
        this.top = 0;
        this.pan_mode = false;
    };
    FlowchartViewerComponent.prototype.scale = function ($event) {
        var scaleFactor = 0.1;
        this.zoom = this.zoom + (Math.sign($event.wheelDelta)) * scaleFactor;
    };
    FlowchartViewerComponent.prototype.startPan = function ($event) {
        this.pan_mode = true;
        this.pan_init = [$event.layerX, $event.layerY];
    };
    FlowchartViewerComponent.prototype.panning = function ($event) {
        if (this.pan_mode == true) {
            var relX = $event.layerX - this.pan_init[0];
            var relY = $event.layerY - this.pan_init[1];
            var factor = 1;
            this.left += relX;
            this.top += relY;
            this.pan_init = [$event.layerX, $event.layerY];
        }
    };
    FlowchartViewerComponent.prototype.stopPan = function ($event) {
        this.pan_mode = false;
        this.pan_init = undefined;
    };
    //
    //
    //  Data Related Functions
    //
    //
    FlowchartViewerComponent.prototype.update = function () {
        this._nodes = this.flowchartService.getNodes();
        this._edges = this.flowchartService.getEdges();
        var m = this._margin;
        var pw = this._portWidth;
        this._nodes.map(function (node) {
            var inputs = node.getInputs().length;
            var outputs = node.getOutputs().length;
            var max = inputs > outputs ? inputs : outputs;
            var width = m * (max + 1) + (max) * pw;
            node["width"] = width;
        });
    };
    FlowchartViewerComponent.prototype.resetData = function () {
        this._selectedNode = 0;
        this._nodes = [];
        this._edges = [];
    };
    //
    //
    //
    FlowchartViewerComponent.prototype.isSelected = function (node) {
        return this.flowchartService.isSelected(node);
    };
    //
    // Add node and edges
    //
    FlowchartViewerComponent.prototype.addNode = function ($event) {
        $event.stopPropagation();
        this.flowchartService.addNode();
        this.flowchartService.selectNode(this._nodes.length - 1);
    };
    FlowchartViewerComponent.prototype.addEdge = function (outputPortAddress, inputPortAddress) {
        this.flowchartService.addEdge(outputPortAddress, inputPortAddress);
    };
    //
    //
    //  Events
    //
    //
    FlowchartViewerComponent.prototype.clickNode = function ($event, nodeIndex) {
        // select the node
        this.flowchartService.selectNode(nodeIndex);
    };
    FlowchartViewerComponent.prototype.addPort = function (nodeIndex, type) {
        // select the node
        this.clickNode(null, nodeIndex);
        // add port 
        if (type == "in") {
            this._nodes[nodeIndex].addInput();
        }
        else if (type == "out") {
            this._nodes[nodeIndex].addOutput();
        }
        this.flowchartService.update();
    };
    //
    //  node dragging
    //
    FlowchartViewerComponent.prototype.nodeDragStart = function ($event, node) {
        $event.dataTransfer.setDragImage(new Image(), 0, 0);
        // todo : find more elegant solution
        node.dragStart = { x: $event.pageX, y: $event.pageY };
        this.pan_mode = false;
    };
    FlowchartViewerComponent.prototype.nodeDragging = function ($event, node) {
        this.pan_mode = false;
        var relX = $event.pageX - node.dragStart.x;
        var relY = $event.pageY - node.dragStart.y;
        node.position[0] += relX / this.zoom;
        node.position[1] += relY / this.zoom;
        node.dragStart = { x: $event.pageX, y: $event.pageY };
    };
    FlowchartViewerComponent.prototype.nodeDragEnd = function ($event, node) {
        this.pan_mode = false;
        var relX = $event.pageX - node.dragStart.x;
        var relY = $event.pageY - node.dragStart.y;
        node.position[0] += relX;
        node.position[1] += relY;
    };
    FlowchartViewerComponent.prototype.getPortPosition = function (nodeIndex, portIndex, type) {
        var x;
        var y;
        var name = "n" + nodeIndex + type + portIndex;
        var el = document.getElementById(name);
        if (el == null) {
            return { x: 0, y: 0 };
        }
        var node_pos = this._nodes[nodeIndex].position;
        var port_container_height = 10;
        var node_height = 60;
        var port_width = 9.5;
        if (type == "pi") {
            x = node_pos[0] + port_width / 2 + el.offsetLeft;
            y = node_pos[1] + port_container_height / 2;
        }
        else if (type == "po") {
            x = node_pos[0] + port_width / 2 + el.offsetLeft;
            y = node_pos[1] + 3 * port_container_height / 2 + node_height;
        }
        else {
            throw Error("Unknown port type");
        }
        return { x: x, y: y };
    };
    FlowchartViewerComponent.prototype.portDragStart = function ($event, port, address) {
        $event.dataTransfer.setDragImage(new Image(), 0, 0);
        this._startPort = port;
        this._startPort['address'] = address;
        this._linkMode = true;
        var type;
        if (port instanceof __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["a" /* InputPort */]) {
            type = "pi";
        }
        else if (port instanceof __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* OutputPort */]) {
            type = "po";
        }
        this.mouse_pos.start = this.getPortPosition(address[0], address[1], type);
        /*{x: $event.pageX - (24+181),
          y: $event.pageY - (64+41)};*/
    };
    FlowchartViewerComponent.prototype.portDragging = function ($event, port) {
        // todo: compute total offset of this div dynamically
        // urgent!
        //nodes.parentElement.parentElement.parentElement.parentElement.offsetLeft
        this.mouse_pos.current = { x: $event.pageX - (24 + 181),
            y: $event.pageY - (64 + 41) };
        // draw dashed edge on canvas 
    };
    FlowchartViewerComponent.prototype.portDragEnd = function ($event, port) {
        this._startPort = undefined;
        this._endPort = undefined;
        this._linkMode = false;
    };
    FlowchartViewerComponent.prototype.portDrop = function ($event, port, address) {
        this._endPort = port;
        this._endPort["address"] = address;
        if (this._startPort !== undefined && this._endPort !== undefined) {
            var inputPort = void 0;
            var outputPort = void 0;
            if (this._startPort instanceof __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["a" /* InputPort */]) {
                inputPort = this._startPort["address"];
            }
            if (this._startPort instanceof __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* OutputPort */]) {
                outputPort = this._startPort["address"];
            }
            if (this._endPort instanceof __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["a" /* InputPort */]) {
                inputPort = this._endPort["address"];
            }
            if (this._endPort instanceof __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* OutputPort */]) {
                outputPort = this._startPort["address"];
            }
            if (inputPort !== undefined && outputPort !== undefined) {
                this.addEdge(outputPort, inputPort);
            }
            else {
                alert("Invalid connection");
            }
            // clear the variables
            this._startPort = undefined;
            this._endPort = undefined;
        }
    };
    //
    // Edge drawing functions
    //
    FlowchartViewerComponent.prototype.getEdgePath = function (edge) {
        return this.edgeString(this.getPortPosition(edge.output_address[0], edge.output_address[1], "po"), this.getPortPosition(edge.input_address[0], edge.input_address[1], "pi"));
    };
    FlowchartViewerComponent.prototype.edgeString = function (startPoint, endPoint) {
        /*let pointA: {x: number, y:number} = startPoint;
        let pointB: {x: number, y:number} = endPoint;
    
        // AB Midpoint
        let pointC: {x: number, y:number} = {x:  (startPoint.x + endPoint.x)/2,
                                              y:  (startPoint.y + endPoint.y)/2}
    
        // AC Midpoint
        let pointD: {x: number, y:number} = {x:  (startPoint.x + pointC.x)/2,
                                              y:  (startPoint.y + pointC.y)/2}
        // slope of AC
        // adjust this to the right
    
        // CB Midpoint
        let pointE: {x: number, y:number} = {x:  (endPoint.x + pointC.x)/2,
                                              y:  (endPoint.y + pointC.y)/2}*/
        // adjust this to the left
        var deltaY = 15;
        if (y0 < y1) {
            // do nothing
        }
        else {
            deltaY = -1 * deltaY;
        }
        var x0 = startPoint.x;
        var y0 = startPoint.y;
        var x3 = endPoint.x;
        var y3 = endPoint.y;
        var mx1 = 0.75 * x0 + 0.25 * x3;
        var mx2 = 0.25 * x0 + 0.75 * x3;
        var my1 = 0.75 * y0 + 0.25 * y3;
        var my2 = 0.25 * y0 + 0.75 * y3;
        var distance = 0.25 * Math.sqrt(Math.pow((x3 - x0), 2) + Math.pow((y3 - y0), 2));
        var pSlope = (x0 - x3) / (y3 - y0);
        var multi = Math.sqrt(distance * distance / (1 + (pSlope * pSlope)));
        var x1, y1, x2, y2 = 0;
        x1 = mx1 + multi;
        x2 = mx2 - multi;
        if (y0 == y3) {
            y1 = y0 + distance;
            y2 = y0 - distance;
        }
        else {
            y1 = my1 + (pSlope * multi);
            y2 = my2 - (pSlope * multi);
        }
        var path = "M" + x0 + " " + y0 + " C" + x1 + " " + y1 + " " + x2 + " " + y2 + " " + x3 + " " + y3;
        return path;
    };
    FlowchartViewerComponent.prototype.edgeClicked = function () {
        alert("Edge clicked");
    };
    //
    //
    //
    FlowchartViewerComponent.prototype.executeFlowchart = function () {
        this.flowchartService.execute();
    };
    FlowchartViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-flowchart-viewer',
            template: __webpack_require__("../../../../../src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]) === "function" && _a || Object])
    ], FlowchartViewerComponent);
    return FlowchartViewerComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__["a" /* Viewer */]));

//# sourceMappingURL=flowchart-viewer.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/parameter-editor/parameter-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel class='viewer'  [class.hidden]=\"!isVisible\" [expanded]=\"true\">\r\n  \t<mat-expansion-panel-header>\r\n\t    <mat-panel-title class='header'>\r\n\t     \t Node Designer\t\r\n\t\t\t\t\t<!-- <div class='btn-group'>\r\n\t\t\t\t\t\t<button (click)=\"addPort($event, 'input')\">I</button>\r\n\t\t\t\t\t\t<button (click)=\"addPort($event, 'output')\">O</button>\r\n\t\t\t\t\t</div> -->\r\n\t    </mat-panel-title>\r\n  \t</mat-expansion-panel-header>\r\n\t<div class='container'>\r\n\r\n\t\t<h4 class=\"port-heading\">Inputs</h4>\r\n\t\t<div class='port input' *ngFor=\"let inp of _inputs; let i=index\">\r\n\t\t\t\r\n\t\t\t<div class=\"content\">\r\n\t\t\t\t<div class='row'>\r\n\t\t\t\t\t<span class='label'>Name</span>\r\n\t\t\t\t\t<span class='content' contenteditable=\"true\" (blur)=\"updatePortName($event, inp)\">\r\n\t\t\t\t\t\t{{ inp.getName() || \"undefined\" }}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='row'>\r\n\t\t\t\t\t<span class='label'>Type</span>\r\n\t\t\t\t\t<span class='content'>\r\n\t\t\t\t\t\t<select (change)=\"updateInputType($event.target.value, inp)\">\r\n\t\t\t\t\t\t\t         \t    <option *ngFor=\"let x of portOpts\" [value]=\"x\" [selected]=\"inp.getType() == x\">{{x}}</option>\r\n\t\t\t\t\t\t\t            </select>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='row'>\r\n\t\t\t\t\t<span class='label'>Default</span>\r\n\t\t\t\t\t<span class='content' contenteditable=\"true\" (blur)=\"updateDefaultValue($event, inp)\">\r\n\t\t\t\t\t\t{{inp.getDefaultValue() || \"undefined\"}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"controls\">\r\n\t\t\t\t<span class='btn btn-small' (click)='deletePort($event, \"input\", i)'>Delete</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t<h4 class=\"port-heading\">Outputs</h4>\r\n\t\t<div class='port output' *ngFor=\"let output of _outputs; let o=index\">\r\n\t\t\t<div class=\"content\">\r\n\t\t\t\t<div class='row'>\r\n\t\t\t\t\t<span class='label'>Name</span>\r\n\t\t\t\t\t<span class='content' contenteditable=\"true\" (blur)=\"updatePortName($event, output)\">\r\n\t\t\t\t\t\t{{ output.getName() || \"undefined\" }}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='row'>\r\n\t\t\t\t\t<span class='label'>Default</span>\r\n\t\t\t\t\t<span class='content' contenteditable=\"true\" (blur)=\"updateDefaultValue($event, output)\">\r\n\t\t\t\t\t\t{{ output.getDefaultValue() || \"undefined\"}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"controls\">\r\n\t\t\t\t<span class='btn btn-small' (click)='deletePort($event, \"output\", o)'>Delete</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</mat-expansion-panel>"

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/parameter-editor/parameter-editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.viewer {\n  height: auto;\n  width: 100%;\n  overflow: auto;\n  padding: 0px;\n  margin: 0px; }\n  .viewer .header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    position: relative;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 30px;\n    text-transform: uppercase;\n    padding: 10px;\n    letter-spacing: 1.5px;\n    height: 30px; }\n    .viewer .header .btn-group {\n      height: 30px; }\n      .viewer .header .btn-group button {\n        width: 27px;\n        height: 27px;\n        margin: 0px;\n        border: 1px solid #B4B1B1;\n        box-shadow: none; }\n  .viewer .container {\n    min-height: 300px; }\n  .viewer button {\n    background: white;\n    border: 1px solid #B4B1B1;\n    box-shadow: none; }\n\n.viewer .port-heading {\n  display: inline-block;\n  margin: 10px;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 0px 4px;\n  border: 1px solid #777; }\n\n.viewer .port {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 10px;\n  border-bottom: 1px dashed gray;\n  border-top: 1px dashed gray;\n  background-color: #ddd; }\n  .viewer .port .content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    font-size: 14px;\n    line-height: 20px; }\n    .viewer .port .content .row {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .viewer .port .content .row .label {\n        display: inline-block;\n        text-transform: uppercase;\n        font-size: 10px;\n        color: gray;\n        min-width: 50px; }\n      .viewer .port .content .row .content {\n        min-width: 50px; }\n        .viewer .port .content .row .content.undefined {\n          border-bottom: 1px dashed blue; }\n  .viewer .port .controls .btn:hover {\n    cursor: pointer;\n    border-bottom: 1px dashed blue; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/parameter-editor/parameter-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParameterEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__ = __webpack_require__("../../../../../src/app/base-classes/port/PortModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParameterEditorComponent = /** @class */ (function (_super) {
    __extends(ParameterEditorComponent, _super);
    function ParameterEditorComponent(injector) {
        var _this = _super.call(this, injector, "parameter-editor") || this;
        _this.isVisible = false;
        // shift to iport
        _this.portOpts = [
            __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["c" /* PortTypes */].Default,
            __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["c" /* PortTypes */].Input,
            __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["c" /* PortTypes */].ColorPicker,
            __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["c" /* PortTypes */].FilePicker,
            __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["c" /* PortTypes */].Dropdown
        ];
        return _this;
    }
    ParameterEditorComponent.prototype.reset = function () {
        this._node = undefined;
        this._inputs = undefined;
        this._outputs = undefined;
    };
    //
    //
    //
    ParameterEditorComponent.prototype.addPort = function (event, type) {
        event.stopPropagation();
        if (type == "input") {
            this._node.addInput();
        }
        else if (type == "output") {
            this._node.addOutput();
        }
        else {
            throw Error("Unknown Port Type");
        }
    };
    ParameterEditorComponent.prototype.deletePort = function (event, type, portIndex) {
        event.stopPropagation();
        if (type == "input") {
            this._node.deleteInput(portIndex);
        }
        else if (type == "output") {
            this._node.deleteOutput(portIndex);
        }
        else {
            throw Error("Unknown port type");
        }
    };
    ParameterEditorComponent.prototype.updatePortName = function ($event, port) {
        var name = $event.srcElement.innerText;
        if (name.trim().length > 0) {
            // put a timeout on this update or something similar to solve jumpiness
            port.setName(name);
            this.flowchartService.update();
        }
    };
    ParameterEditorComponent.prototype.updateInputType = function (type, input) {
        input.setType(type);
    };
    ParameterEditorComponent.prototype.updateDefaultValue = function ($event, port) {
        var value = $event.srcElement.innerText;
        if (value.trim().length > 0) {
            port.setDefaultValue(value);
            // put a timeout on this update or something similar to solve jumpiness
            this.flowchartService.update();
        }
    };
    //
    //	this update runs when there is a message from other viewers that something changed; 
    //  beware of updating flowchart here - it will go into an unending loop :/
    //
    ParameterEditorComponent.prototype.update = function () {
        this._node = this.flowchartService.getSelectedNode();
        if (this._node !== undefined) {
            this._inputs = this._node.getInputs();
            this._outputs = this._node.getOutputs();
            this.isVisible = true;
        }
    };
    ParameterEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-parameter-editor',
            template: __webpack_require__("../../../../../src/app/ui-components/editors/parameter-editor/parameter-editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui-components/editors/parameter-editor/parameter-editor.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]) === "function" && _a || Object])
    ], ParameterEditorComponent);
    return ParameterEditorComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__["a" /* Viewer */]));

//# sourceMappingURL=parameter-editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/procedure-editor/procedure-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel class='viewer'  [class.hidden]=\"!isVisible\"\r\n\t[expanded]=\"true\">\r\n  \t<mat-expansion-panel-header>\r\n\t    <mat-panel-title class='header'>\r\n\t     Procedure\r\n\t    </mat-panel-title>\r\n  \t</mat-expansion-panel-header>\r\n\t<div class='container'>\r\n\t\t<tree-root #tree [nodes]='_tree' [options]='_tree_options'  (moveNode)=\"onMoveNode($event)\">\r\n\t\t\t  <ng-template #treeNodeTemplate let-prod let-index=\"index\">\r\n\r\n\t\t\t\t\t<!-- template for data -->\r\n\t\t\t\t\t<div *ngIf=\"prod.data.name == 'Data'\"> \r\n\t\t\t\t\t\t<div class='data-node-template procedure'>\r\n\t\t\t\t\t\t\t<input class=\"tree-input\" [(ngModel)]=\"prod.data.leftExpression\" #ctrl=\"ngModel\" required\r\n\t\t\t\t\t\t\t(change)=\"updateProcedure($event, prod, 'left')\">\r\n\t\t\t\t\t\t\t=\r\n\t\t\t\t\t\t\t<input class=\"tree-input\" [(ngModel)]=\"prod.data.rightExpression\" #ctrl=\"ngModel\" required\r\n\t\t\t\t\t\t\t(change)=\"updateProcedure($event, prod, 'right')\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div *ngIf=\"prod.data.name == 'IfElse'\">\r\n\t\t\t\t\t\t<div class='data-node-template procedure'>\r\n\t\t\t\t\t\t\tIf-Else\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div *ngIf=\"prod.data.name == 'If'\">\r\n\t\t\t\t\t\t<div class='data-node-template procedure'>\r\n\t\t\t\t\t\t If ( <input class=\"tree-input\" [(ngModel)]=\"prod.data.leftExpression\" #ctrl=\"ngModel\" required\r\n\t\t\t\t\t\t\t(change)=\"updateProcedure($event, prod, 'left')\"> )\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div *ngIf=\"prod.data.name == 'Else'\">\r\n\t\t\t\t\t\t<div class='data-node-template procedure'>\r\n\t\t\t\t\t\t Else \r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div *ngIf=\"prod.data.name == 'For Loop'\">\r\n\t\t\t\t\t\t<div class='data-node-template procedure'>\r\n\t\t\t\t\t\t for (  \r\n\t\t\t\t\t\t  <input class=\"tree-input\" [(ngModel)]=\"prod.data.leftExpression\" #ctrl=\"ngModel\" required (change)=\"updateProcedure($event, prod, 'left')\">\r\n\t\t\t\t\t\t in  \r\n\t\t\t\t\t\t  <input class=\"tree-input\" [(ngModel)]=\"prod.data.rightExpression\" #ctrl=\"ngModel\" required (change)=\"updateProcedure($event, prod, 'right')\"> \r\n\t\t\t\t\t\t  )\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t    <!-- <div class='btn-group'>\r\n\t\t\t\t    \t\t\t\t\t    <button (click)=\"deleteProcedure(prod)\">Delete</button>\r\n\t\t\t\t    \t\t\t\t\t    <button (click)=\"disableProcedure(prod, $event)\">Disable</button>\r\n\t\t\t\t    \t\t\t\t\t    <button (click)=\"go($event)\">Copy</button>\r\n\t\t\t\t    \t\t\t\t\t</div> -->\r\n\r\n\t\t\t  </ng-template>\r\n\t\t</tree-root>\r\n\r\n\t\t<div class=\"btn-container\">\r\n\t\t\t<button *ngFor=\"let type of procedureTypes\"\r\n\t\t\t (click)=\"addProcedure($event, type)\">{{getImageForType(type)}}</button>\r\n\t\t</div>\r\n\t</div>\r\n</mat-expansion-panel>"

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/procedure-editor/procedure-editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.viewer {\n  height: auto;\n  width: 100%;\n  overflow: auto;\n  padding: 0px;\n  margin: 0px; }\n  .viewer .header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    position: relative;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 30px;\n    text-transform: uppercase;\n    padding: 10px;\n    letter-spacing: 1.5px;\n    height: 30px; }\n    .viewer .header .btn-group {\n      height: 30px; }\n      .viewer .header .btn-group button {\n        width: 27px;\n        height: 27px;\n        margin: 0px;\n        border: 1px solid #B4B1B1;\n        box-shadow: none; }\n  .viewer .container {\n    min-height: 300px; }\n  .viewer button {\n    background: white;\n    border: 1px solid #B4B1B1;\n    box-shadow: none; }\n\n.viewer .container {\n  position: relative; }\n  .viewer .container .procedure {\n    padding: 4px;\n    width: 100%; }\n    .viewer .container .procedure [contenteditable=\"true\"]:active, .viewer .container .procedure [contenteditable=\"true\"]:focus {\n      border: none;\n      outline: none; }\n    .viewer .container .procedure [contenteditable=\"true\"] {\n      color: blue;\n      border-bottom: 1px dashed blue; }\n    .viewer .container .procedure.disabled {\n      background-color: red; }\n  .viewer .container .btn-container {\n    position: absolute;\n    bottom: 0px;\n    left: 30%; }\n    .viewer .container .btn-container button {\n      height: 30px;\n      width: 30px; }\n\n.viewer input.tree-input {\n  background-color: transparent;\n  width: auto;\n  border: 0px;\n  height: 18px;\n  font-size: 14px;\n  padding: 5px;\n  display: inline;\n  font-family: sans-serif;\n  line-height: 18px;\n  text-align: center;\n  vertical-align: middle;\n  border-bottom: 1px dashed blue; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/procedure-editor/procedure-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcedureEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProcedureEditorComponent = /** @class */ (function (_super) {
    __extends(ProcedureEditorComponent, _super);
    function ProcedureEditorComponent(injector, dialog) {
        var _this = _super.call(this, injector, "procedure-editor") || this;
        _this.dialog = dialog;
        _this.isVisible = false;
        _this._procedureArr = [];
        _this.procedureTypes = [
            __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Data,
            __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Action,
            __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].ForLoopControl,
            __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].IfElseControl
        ];
        _this._tree = [];
        _this._tree_options = {
            allowDrag: function (element) {
                if (element.data.name == __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].IfControl || element.data.name == __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].ElseControl) {
                    return false;
                }
                else {
                    return true;
                }
            },
            allowDrop: function (element, _a) {
                var parent = _a.parent, index = _a.index;
                // return true / false based on element, to.parent, to.index. e.g.
                return (parent.data.name !== _this.getString(__WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].IfElseControl) &&
                    parent.data.name !== _this.getString(__WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Data) && parent.data.name !== _this.getString(__WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Action)); /*(parent.data.name == this.getString(ProcedureTypes.IfControl)
                || parent.data.name == this.getString(ProcedureTypes.ElseControl
                || parent.data.name == this.getString(ProcedureTypes.ForLoopControl));*/
            }
        };
        return _this;
    }
    ProcedureEditorComponent.prototype.reset = function () {
        this._procedureArr = [];
        this._node = undefined;
        this._tree = [];
    };
    ProcedureEditorComponent.prototype.update = function () {
        this._node = this.flowchartService.getSelectedNode();
        this._procedureArr = this._node.getProcedure();
        this.updateProcedureTree();
        this.isVisible = true;
    };
    ProcedureEditorComponent.prototype.getImageForType = function (type) {
        return this.getString(type)[0];
    };
    ProcedureEditorComponent.prototype.getString = function (type) {
        return type.toString();
    };
    //
    //
    //
    ProcedureEditorComponent.prototype.onMoveNode = function ($event) {
        // get previous parent
        var moved_procedure = $event.node.model;
        var to_procedure = $event.to.parent.model;
        var moved_position = $event.to.index;
        var parent = moved_procedure.getParent();
        // case: no parent and parent added
        // case: no parent and no parent
        // case: parent and different parent
        // case: parent and same parent
        // case: parent and no parent
        if (moved_procedure.getParent() === to_procedure) {
            if (parent === undefined) {
                this._node.deleteProcedure(moved_procedure);
                this._node.addProcedureAtPosition(moved_procedure, moved_position);
            }
            else {
                to_procedure.deleteChild(moved_procedure);
                to_procedure.addChildAtPosition(moved_procedure, moved_position);
            }
        }
        else {
            if (parent === undefined) {
                this._node.deleteProcedure(moved_procedure);
            }
            else {
                parent.deleteChild(moved_procedure);
            }
            if (to_procedure === undefined) {
                this._node.addProcedureAtPosition(moved_procedure, moved_position);
            }
            else {
                to_procedure.addChildAtPosition(moved_procedure, moved_position);
            }
        }
        moved_procedure.setParent(to_procedure);
        this.flowchartService.update();
    };
    ProcedureEditorComponent.prototype.updateProcedureTree = function () {
        // converts the procedure into a tree item
        var getTreeItem = function (prod, index) {
            var procedure_type = prod.getType();
            var treeItem = {
                index: index,
                name: procedure_type,
                children: [],
                leftExpression: "undefined",
                rightExpression: "undefined",
                model: prod
            };
            //let dataObj = { id: Math.random() , name: data.getTitle(), type: procedure_type, model: data } ; 
            // ProcedureType.Data
            if (procedure_type === __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Data) {
                treeItem["leftExpression"] = prod.getLeftComponent().expression;
                treeItem["rightExpression"] = prod.getRightComponent().expression;
            }
            else if (procedure_type === __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Action) {
                // todo
            }
            else if (prod.hasChildren() == true) {
                treeItem["children"] = prod.getChildren().map(function (node, id) {
                    return getTreeItem(node, id);
                });
                if (procedure_type == __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].ForLoopControl) {
                    treeItem["leftExpression"] = prod.getLeftComponent().expression;
                    treeItem["rightExpression"] = prod.getRightComponent().expression;
                }
                else if (procedure_type == __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].IfControl) {
                    treeItem["leftExpression"] = prod.getLeftComponent().expression;
                }
            }
            else {
                throw Error("unknown procedure type");
            }
            return treeItem;
        };
        this._tree = this._procedureArr.map(function (prod, index) {
            return getTreeItem(prod, index);
        });
    };
    //
    //
    //
    ProcedureEditorComponent.prototype.addProcedure = function ($event, type) {
        $event.stopPropagation();
        if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Data) {
            var default_variable_name = "var" + this._procedureArr.length;
            var prod_data = { result: default_variable_name, value: "undefined" };
            var prod = __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["a" /* ProcedureFactory */].getProcedure(__WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Data, prod_data);
            this._node.addProcedure(prod);
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].IfElseControl) {
            var prod_data = { if_condition: "undefined", el_condition: "undefined" };
            var prod = __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["a" /* ProcedureFactory */].getProcedure(__WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].IfElseControl, prod_data);
            this._node.addProcedure(prod);
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].ForLoopControl) {
            var prod_data = { variable: "i", array_name: "[]" };
            var prod = __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["a" /* ProcedureFactory */].getProcedure(__WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].ForLoopControl, prod_data);
            this._node.addProcedure(prod);
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Action) {
            /*let dialogRef = this.dialog.open(ModuleboxComponent, {
              height: '400px',
              width: '600px',
            });

            dialogRef.afterClosed().subscribe(result => {
              console.log(`Dialog result: ${result}`); // Pizza!
            });

            dialogRef.close('Pizza!');*/
        }
        else {
            throw Error("Procedure Type invalid");
        }
        this.flowchartService.update();
    };
    ProcedureEditorComponent.prototype.updateProcedure = function ($event, prod, property) {
        var procedure = prod.data.model;
        if (property == "left") {
            var comp = procedure.getLeftComponent();
            comp.expression = prod.data.leftExpression;
            procedure.setLeftComponent(comp);
        }
        else if (property == "right") {
            var comp = procedure.getRightComponent();
            comp.expression = prod.data.rightExpression;
            procedure.setRightComponent(comp);
        }
        else {
            throw Error("Invalid procedure update");
        }
        this.flowchartService.update();
    };
    // todo:
    ProcedureEditorComponent.prototype.disableProcedure = function (prod) {
        prod.disable();
        this.update();
    };
    ProcedureEditorComponent.prototype.deleteProcedure = function (prod) {
        // remove child from parent, if any
        this._node.deleteProcedure(prod);
        this.flowchartService.update();
    };
    ProcedureEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-procedure-editor',
            template: __webpack_require__("../../../../../src/app/ui-components/editors/procedure-editor/procedure-editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui-components/editors/procedure-editor/procedure-editor.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialog */]) === "function" && _b || Object])
    ], ProcedureEditorComponent);
    return ProcedureEditorComponent;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__["a" /* Viewer */]));

//# sourceMappingURL=procedure-editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/code-viewer/code-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel class='viewer' \r\n\t\t(opened)=\"panelOpenState = true\" \r\n\t\t(closed)=\"panelOpenState = false\"\r\n\t\t[expanded]=\"panelOpenState\">\r\n  \t<mat-expansion-panel-header>\r\n\t    <mat-panel-title class='header'>\r\n\t      <div class='header'>Code Viewer</div>\r\n\t    </mat-panel-title>\r\n  \t</mat-expansion-panel-header>\r\n\t<div class='container'>\r\n\t\t<div ace-editor [(text)]=\"code\" style='min-height: 300px;'></div>\r\n\t</div>\r\n</mat-expansion-panel>"

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/code-viewer/code-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.viewer {\n  height: auto;\n  width: 100%;\n  overflow: auto;\n  padding: 0px;\n  margin: 0px; }\n  .viewer .header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    position: relative;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 30px;\n    text-transform: uppercase;\n    padding: 10px;\n    letter-spacing: 1.5px;\n    height: 30px; }\n    .viewer .header .btn-group {\n      height: 30px; }\n      .viewer .header .btn-group button {\n        width: 27px;\n        height: 27px;\n        margin: 0px;\n        border: 1px solid #B4B1B1;\n        box-shadow: none; }\n  .viewer .container {\n    min-height: 300px; }\n  .viewer button {\n    background: white;\n    border: 1px solid #B4B1B1;\n    box-shadow: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/code-viewer/code-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_beautify__ = __webpack_require__("../../../../js-beautify/js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_beautify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_js_beautify__);
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CodeViewerComponent = /** @class */ (function (_super) {
    __extends(CodeViewerComponent, _super);
    function CodeViewerComponent(injector) {
        var _this = _super.call(this, injector, "Code viewer", "Displays the code associated with flowchart") || this;
        _this.panelOpenState = false;
        return _this;
    }
    CodeViewerComponent.prototype.update = function () {
        this.code = __WEBPACK_IMPORTED_MODULE_2_js_beautify__["js_beautify"](this.flowchartService.getCode());
    };
    CodeViewerComponent.prototype.reset = function () {
        this.code = "";
    };
    CodeViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-code-viewer',
            template: __webpack_require__("../../../../../src/app/ui-components/viewers/code-viewer/code-viewer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui-components/viewers/code-viewer/code-viewer.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]) === "function" && _a || Object])
    ], CodeViewerComponent);
    return CodeViewerComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__["a" /* Viewer */]));

//# sourceMappingURL=code-viewer.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/geometry-viewer/geometry-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel class='viewer' [class.hidden]=\"false\">\r\n  \t<mat-expansion-panel-header>\r\n\t    <mat-panel-title class='header'>\r\n\t      <div class='header'>Geometry Viewer</div>\r\n\t    </mat-panel-title>\r\n  \t</mat-expansion-panel-header>\r\n\t<div class='container'>\r\n\t\t<ul>\r\n\t    \t<li *ngFor=\"let node of _nodes\">\r\n\t    \t\t<!-- {{  getGeometry(node) }} -->\r\n\t    \t\t{{node.getName()}}\r\n\t    \t\t<ul>\r\n\t    \t\t\t<li  *ngFor=\"let output of node.getOutputs()\">\r\n\t    \t\t\t\t{{ output.getValue() }}\r\n\t    \t\t\t</li>\r\n\t    \t\t</ul>\r\n\t   \t\t</li>\r\n\t  \t</ul>\r\n\t\t<div id=\"app-geometry-viewer\"></div>\r\n\t</div>\r\n</mat-expansion-panel>"

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/geometry-viewer/geometry-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.viewer {\n  height: auto;\n  width: 100%;\n  overflow: auto;\n  padding: 0px;\n  margin: 0px; }\n  .viewer .header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    position: relative;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 30px;\n    text-transform: uppercase;\n    padding: 10px;\n    letter-spacing: 1.5px;\n    height: 30px; }\n    .viewer .header .btn-group {\n      height: 30px; }\n      .viewer .header .btn-group button {\n        width: 27px;\n        height: 27px;\n        margin: 0px;\n        border: 1px solid #B4B1B1;\n        box-shadow: none; }\n  .viewer .container {\n    min-height: 300px; }\n  .viewer button {\n    background: white;\n    border: 1px solid #B4B1B1;\n    box-shadow: none; }\n\n.viewer {\n  overflow: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/geometry-viewer/geometry-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeometryViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("../../../../three/build/three.module.js");
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeometryViewerComponent = /** @class */ (function (_super) {
    __extends(GeometryViewerComponent, _super);
    function GeometryViewerComponent(injector) {
        var _this = _super.call(this, injector, "Geometry Viewer", "Displayed geometry with each node;") || this;
        _this.isVisible = false;
        _this.scene = new __WEBPACK_IMPORTED_MODULE_2_three__["d" /* Scene */]();
        return _this;
    }
    GeometryViewerComponent.prototype.reset = function () {
        this._nodes = [];
        var scene = this.scene;
        while (scene.children.length > 0) {
            scene.remove(scene.children[0]);
        }
    };
    GeometryViewerComponent.prototype.ngOnInit = function () {
        var scene = this.scene;
        var camera = new __WEBPACK_IMPORTED_MODULE_2_three__["c" /* PerspectiveCamera */](75, window.innerWidth / window.innerHeight, 0.1, 1000);
        var renderer = new __WEBPACK_IMPORTED_MODULE_2_three__["e" /* WebGLRenderer */]();
        renderer.setSize(300, 300);
        document.getElementById("app-geometry-viewer").appendChild(renderer.domElement);
        camera.position.z = 5;
        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();
    };
    GeometryViewerComponent.prototype.update = function () {
        this._nodes = this.flowchartService.getNodes();
        this.isVisible = this._nodes.length > 0 ? true : false;
    };
    GeometryViewerComponent.prototype.getGeometry = function (node) {
        var valueTypes = [];
        var valueObject = node.getResult();
        for (var key in valueObject) {
            valueTypes.push(valueObject[key]);
        }
        return valueTypes;
    };
    GeometryViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-geometry-viewer',
            template: __webpack_require__("../../../../../src/app/ui-components/viewers/geometry-viewer/geometry-viewer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui-components/viewers/geometry-viewer/geometry-viewer.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]) === "function" && _a || Object])
    ], GeometryViewerComponent);
    return GeometryViewerComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__["a" /* Viewer */]));

//# sourceMappingURL=geometry-viewer.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/module-viewer/module-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel class='viewer'>\r\n  \t<mat-expansion-panel-header>\r\n\t    <mat-panel-title class='header'>\r\n\t      <div class='header'>Modules</div>\r\n\t    </mat-panel-title>\r\n  \t</mat-expansion-panel-header>\r\n\t<div class='container'>\r\n\t\t<div *ngFor=\"let fn of functions\">\r\n\t\t\t<div class='function'>{{fn}}</div>\r\n\t\t</div>\r\n\t</div>\r\n</mat-expansion-panel>"

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/module-viewer/module-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.viewer {\n  height: auto;\n  width: 100%;\n  overflow: auto;\n  padding: 0px;\n  margin: 0px; }\n  .viewer .header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    position: relative;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 30px;\n    text-transform: uppercase;\n    padding: 10px;\n    letter-spacing: 1.5px;\n    height: 30px; }\n    .viewer .header .btn-group {\n      height: 30px; }\n      .viewer .header .btn-group button {\n        width: 27px;\n        height: 27px;\n        margin: 0px;\n        border: 1px solid #B4B1B1;\n        box-shadow: none; }\n  .viewer .container {\n    min-height: 300px; }\n  .viewer button {\n    background: white;\n    border: 1px solid #B4B1B1;\n    box-shadow: none; }\n\n.viewer .function {\n  border-bottom: 1px solid gray;\n  padding: 5px;\n  margin: 0px 5px 0px 5px; }\n  .viewer .function:hover {\n    background-color: #BDBABA;\n    cursor: move; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/module-viewer/module-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_module_service__ = __webpack_require__("../../../../../src/app/global-services/module.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModuleViewerComponent = /** @class */ (function () {
    function ModuleViewerComponent(injector) {
        this.functions = [];
        this.module_service = injector.get(__WEBPACK_IMPORTED_MODULE_1__global_services_module_service__["a" /* ModuleService */]);
        var modules = this.module_service.getModule("gis");
        var fn_names = Object.keys(Object.getPrototypeOf(modules)).filter(function (t) { return (t != "constructor"); });
        this.functions = this.functions.concat(fn_names);
    }
    ;
    ModuleViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-module-viewer',
            template: __webpack_require__("../../../../../src/app/ui-components/viewers/module-viewer/module-viewer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui-components/viewers/module-viewer/module-viewer.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]) === "function" && _a || Object])
    ], ModuleViewerComponent);
    return ModuleViewerComponent;
    var _a;
}());

//# sourceMappingURL=module-viewer.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/parameter-viewer/parameter-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel class='viewer' [class.hidden]=\"false\">\r\n  \t<mat-expansion-panel-header>\r\n\t    <mat-panel-title class='header'>\r\n\t      <div class='header'>Parameter Viewer</div>\r\n\t    </mat-panel-title>\r\n  \t</mat-expansion-panel-header>\r\n\t<div class='container'>\r\n\t\t<div class='input' *ngFor=\"let inp of _inputs\">\r\n\t\t\t<div class='row'>\r\n\t\t\t\t<span class='label'>Name</span>\r\n\t\t\t\t<span class='content'>{{ inp.getName() }}</span>\r\n\t\t\t</div>\r\n\t\t\t<!-- todo: disable if port is connected -->\r\n\t\t\t<div class='row'>\r\n\t\t\t\t<span class='label'>Value</span>\r\n\t\t\t\t<span class='content' contenteditable=\"true\" \r\n\t\t\t\t\t(blur)=\"updateComputedValue($event, inp)\">\r\n\t\t\t\t\t\t{{ inp.getValue() || \"undefined\" }}\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<!-- ui options based on type -->\r\n\t\t\t<!-- todo: -->\r\n\t\t</div>\r\n\t</div>\r\n</mat-expansion-panel>"

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/parameter-viewer/parameter-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.viewer {\n  height: auto;\n  width: 100%;\n  overflow: auto;\n  padding: 0px;\n  margin: 0px; }\n  .viewer .header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    position: relative;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 30px;\n    text-transform: uppercase;\n    padding: 10px;\n    letter-spacing: 1.5px;\n    height: 30px; }\n    .viewer .header .btn-group {\n      height: 30px; }\n      .viewer .header .btn-group button {\n        width: 27px;\n        height: 27px;\n        margin: 0px;\n        border: 1px solid #B4B1B1;\n        box-shadow: none; }\n  .viewer .container {\n    min-height: 300px; }\n  .viewer button {\n    background: white;\n    border: 1px solid #B4B1B1;\n    box-shadow: none; }\n\n.viewer .input {\n  padding: 0px 15px;\n  border-bottom: 1px solid gray; }\n  .viewer .input .row {\n    width: 100%; }\n    .viewer .input .row .label {\n      display: inline-block;\n      text-transform: uppercase;\n      font-size: 10px;\n      color: gray;\n      width: 10%;\n      min-width: 50px; }\n    .viewer .input .row .content {\n      width: 90%;\n      min-width: 50px; }\n      .viewer .input .row .content.undefined {\n        border-bottom: 1px dashed blue; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/parameter-viewer/parameter-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParameterViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParameterViewerComponent = /** @class */ (function (_super) {
    __extends(ParameterViewerComponent, _super);
    function ParameterViewerComponent(injector) {
        var _this = _super.call(this, injector, "parameter-viewer") || this;
        _this.isVisible = false;
        return _this;
    }
    ParameterViewerComponent.prototype.ngOnInit = function () {
    };
    ParameterViewerComponent.prototype.reset = function () {
        this._node = undefined;
        this._inputs = [];
    };
    ParameterViewerComponent.prototype.addInput = function () {
        this._node.addInput();
        this.flowchartService.update();
    };
    ParameterViewerComponent.prototype.updateInputName = function ($event, input) {
        var name = $event.srcElement.innerText;
        input.setName(name);
        // put a timeout on this update or something similar to solve jumpiness
        this.flowchartService.update();
    };
    ParameterViewerComponent.prototype.updateInputType = function (type) {
        alert(type);
    };
    ParameterViewerComponent.prototype.updateComputedValue = function ($event, input) {
        var value = $event.srcElement.innerText;
        if (value.trim().length > 0) {
            input.setComputedValue(value);
            // put a timeout on this update or something similar to solve jumpiness
            this.flowchartService.update();
        }
    };
    //
    //	this update runs when there is a message from other viewers that something changed; 
    //  beware of updating flowchart here - it will go into an unending loop :/
    //
    ParameterViewerComponent.prototype.update = function () {
        this._node = this.flowchartService.getSelectedNode();
        this._inputs = this._node.getInputs();
        this.isVisible = true;
    };
    ParameterViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-parameter-viewer',
            template: __webpack_require__("../../../../../src/app/ui-components/viewers/parameter-viewer/parameter-viewer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui-components/viewers/parameter-viewer/parameter-viewer.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]) === "function" && _a || Object])
    ], ParameterViewerComponent);
    return ParameterViewerComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__["a" /* Viewer */]));

//# sourceMappingURL=parameter-viewer.component.js.map

/***/ }),

/***/ "../../../../../src/assets/img/play.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "play.591813a4b8a6f89773c2.png";

/***/ }),

/***/ "../../../../../src/assets/img/plus.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAABkZGTNzc0PDw+bm5vx8fGUlJRXV1fq6urU1NQSEhL5+flxcXGmpqagoKC1tbV+fn5ra2ssLCyLi4tCQkIhISEyMjLGxsbc3NxHR0d7e3vi4uJfX19QUFAYGBi6urpAbQeBAAACd0lEQVR4nO3di07iUBSF4bZoEUVquVYHHN7/KWecSzIziUPXbsJeh/zfC7D+oECkp1YVAAAAAAAAAADAL7P5+vTwiVOzHdrsgROt9vUFd/0ye+QEx8Olvh/O2TvDZqP6vltlLw16HRtYauJyM76wfsxeG7EVAutd9tqApRJY10P2Xt2LVrjO3qtrtMI6e6/u4lv9PxbZg2VPYmF5r6Z3YuEse7CMQgr9UUihPwop9Echhf4opNAfhRT6o5BCfxRS6I9CCv1RSKE/Cin0RyGF/iik0B+FFPqjkEJ/FFLoj8LyC8u5zrudrbr7APU57AOP0nXD5Ev8h5M49Op2qynnFxcP2fvHOMR/hR+zt48VPdwnnB/MFktsv2bvFoR+UJ+zVys2gZebgn5GP3R6YZ+9WRM4hKqerssmv/WLh1zzvaiFxbwX/navFo6+W4CLOYUU2qOQQn8UUuiPQgr9UUihPwop9Echhf4opNCfXHj7f/Nusxer9K+BsxerXuXCor4Cruu9/iXwkL1Zs5UDq+ote7Qkcm1UUV/kxy43Ee8EnOk5FFhVq+zhY0UDi3m1kT/O/GG5VS8Tvb7mOCHwo3HYrpsIdeh75EHW/TnvHtLlXCMcdfvXeVNIoT8KKfRHIYX+KKTQH4UU+qOQQn8UUuiPQgr9UUihPwop9Echhf4opNAfhRT6o5BCfxRS6I9CCv1RWH7h7V/nrd5ZcuKZggTvYmH2Xl2nBb5l79UttEL55pwG1krgPntthPQknrPXhgjnF79kbw0afX6xyV4aNvJZ7LN3TrAY8a8VNuV9XvvLcb77z93rnw594X0/tZ/KXgYAAAAAAIBr+QaTTEgB/LfgfwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../../../../src/assets/modules/AllModules.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Math__ = __webpack_require__("../../../../../src/assets/modules/Math.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Math", function() { return __WEBPACK_IMPORTED_MODULE_0__Math__["a"]; });

//# sourceMappingURL=AllModules.js.map

/***/ }),

/***/ "../../../../../src/assets/modules/Math.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Math; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__ = __webpack_require__("../../../../../src/app/base-classes/code/CodeModule.ts");
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

var Math = /** @class */ (function (_super) {
    __extends(Math, _super);
    function Math() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // define a category
        _this.SimpleMath = {
            add: function (a, b) {
                return a + b;
            },
            subtract: function (a, b) {
                return a - b;
            },
            multiply: function (a, b) {
                return a * b;
            }
        };
        // another category
        _this.ComplexMath = {
            square: function (a) {
                return a * a;
            },
            cube: function (a) {
                return a * a * a;
            }
        };
        return _this;
    }
    Math._name = "Math";
    Math.author = "AKM";
    Math.version = 1;
    return Math;
}(__WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* Module */]));

//# sourceMappingURL=Math.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map