webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"app-container\">\r\n\r\n  <app-menu></app-menu>\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"wrapper\">\r\n      <split  direction=\"horizontal\" \r\n              [gutterSize]=\"7\" \r\n              [useTransition]=\"action.useTransition\"\r\n              (dragEnd)=\"action.a1s=$event.sizes[0]; action.a2s=$event.sizes[1]; \r\n              action.a3s=$event.sizes[2];\">\r\n          \r\n            <split-area [visible]=\"action.a1v\" [size]=\"action.a1s\" order=\"1\">\r\n                <app-viewer-container></app-viewer-container>        \r\n            </split-area>\r\n\r\n            <split-area [visible]=\"action.a3v\" [size]=\"action.a3s\" order=\"2\">\r\n                <app-flowchart-viewer class=\"view-wrapper\"></app-flowchart-viewer>\r\n            </split-area>\r\n\r\n            <split-area [visible]=\"action.a2v\" [size]=\"action.a2s\" order=\"3\">\r\n                <app-editor></app-editor> \r\n            </split-area>\r\n            \r\n      </split>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .default {\n    font-size: 14px;\n    color: gray;\n    line-height: 150px;\n    text-align: center; }\n\n#app-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  padding: 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  #app-container .container {\n    position: relative;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    border-top: 1px solid gray;\n    background-color: #D8D8D8; }\n    #app-container .container .wrapper {\n      position: absolute;\n      width: 100%;\n      height: 100%; }\n      #app-container .container .wrapper .split {\n        height: 100%;\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1; }\n      #app-container .container .wrapper .split-area {\n        overflow: hidden; }\n        #app-container .container .wrapper .split-area .view-wrapper {\n          position: absolute;\n          height: 100%;\n          width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_layout_service__ = __webpack_require__("../../../../../src/app/global-services/layout.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*import { gs_json as gs } from "gs-json"; */
let AppComponent = class AppComponent {
    constructor(layoutService) {
        this.layoutService = layoutService;
        this.isVisible = {
            geometry: true,
            code: false
        };
        this.action = layoutService.getAssets();
    }
    toggle(viewer_name) {
        if (viewer_name == "geometry") {
            this.isVisible.geometry = true;
            this.isVisible.code = false;
        }
        else if (viewer_name) {
            this.isVisible.geometry = false;
            this.isVisible.code = true;
        }
        else {
            throw Error("Unknown Viewer");
        }
    }
    showEditor() {
        this.layoutService.showEditor();
    }
    hideEditor() {
        this.layoutService.hideEditor();
    }
    log($event) {
        console.log($event);
    }
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__global_services_layout_service__["a" /* LayoutService */]])
], AppComponent);



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__custom_angular_modules_CustomMaterialModule__ = __webpack_require__("../../../../../src/app/custom-angular-modules/CustomMaterialModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_split__ = __webpack_require__("../../../../angular-split/esm2015/angular-split.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_ace_editor__ = __webpack_require__("../../../../ng2-ace-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__global_services_flowchart_service__ = __webpack_require__("../../../../../src/app/global-services/flowchart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__global_services_layout_service__ = __webpack_require__("../../../../../src/app/global-services/layout.service.ts");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ui_components_editors_editor_editor_component__ = __webpack_require__("../../../../../src/app/ui-components/editors/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ui_components_viewers_viewer_container_viewer_container_component__ = __webpack_require__("../../../../../src/app/ui-components/viewers/viewer-container/viewer-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











/*import { ModuleService } from './global-services/module.service';
*/












let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
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
            __WEBPACK_IMPORTED_MODULE_21__ui_components_editors_editor_editor_component__["a" /* EditorComponent */],
            __WEBPACK_IMPORTED_MODULE_22__ui_components_viewers_viewer_container_viewer_container_component__["a" /* ViewerContainerComponent */]
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
        providers: [__WEBPACK_IMPORTED_MODULE_9__global_services_flowchart_service__["a" /* FlowchartService */], __WEBPACK_IMPORTED_MODULE_10__global_services_layout_service__["a" /* LayoutService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);



/***/ }),

/***/ "../../../../../src/app/base-classes/code/CodeFactory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generators_javascript_generator__ = __webpack_require__("../../../../../src/app/base-classes/code/generators/javascript_generator.ts");

class CodeFactory {
    static getCodeGenerator(language) {
        if (language == "js") {
            return new __WEBPACK_IMPORTED_MODULE_0__generators_javascript_generator__["a" /* CodeGeneratorJS */]();
        }
        else
            throw Error("Unknown language");
    }
    ;
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CodeFactory;



/***/ }),

/***/ "../../../../../src/app/base-classes/code/CodeGenerator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class CodeGenerator {
    constructor(language) {
        this._language = language;
    }
    ;
    setModules(modules) {
        this._modules = modules;
    }
    getLanguage() {
        return this._language;
    }
    // takes a flowchart and generates some code string 
    getDisplayCode(flowchart) {
        throw Error("Not implemented");
    }
    ;
    executeNode(node, params) {
        throw Error("Not implemented");
    }
    ;
    getFunctionCall(node, params) {
        throw Error("Not implemented");
    }
    ;
    getDefinition(node) {
        throw Error("Not implemented");
    }
    ;
    getNodeCode(node) {
        throw Error("Not implemented");
    }
    ;
    getNodeOutputCode(node, output_idx) {
        throw Error("Not implemented");
    }
    ;
    generateConnectionLine(destination_node, destination_port, source_node, source_port) {
        throw Error("Not implemented");
    }
    ;
    generateProcedureCode(procedure) {
        throw Error("Not implemented");
    }
    ;
    generateInputPortCode(port) {
        throw Error("Not implemented");
    }
    ;
    generateOutputPortCode(port) {
        throw Error("Not implemented");
    }
    ;
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CodeGenerator;



/***/ }),

/***/ "../../../../../src/app/base-classes/code/CodeModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generators_javascript_generator__ = __webpack_require__("../../../../../src/app/base-classes/code/generators/javascript_generator.ts");
/* unused harmony reexport CodeGeneratorJS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CodeFactory__ = __webpack_require__("../../../../../src/app/base-classes/code/CodeFactory.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__CodeFactory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__computation_modules_ModuleUtils__ = __webpack_require__("../../../../../src/app/base-classes/code/computation-modules/ModuleUtils.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__computation_modules_ModuleUtils__["a"]; });
/*export {CodeGeneratorPY} from './generators/python_generator';*/





/***/ }),

/***/ "../../../../../src/app/base-classes/code/computation-modules/ModuleUtils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ModuleUtils {
    static getName(mod) {
        return mod["_name"];
    }
    static getAuthor(mod) {
        return mod["_author"];
    }
    static getVersion(mod) {
        return mod["_version"];
    }
    static isValid(mod) {
        return !!(this.getName(mod) && this.getVersion(mod) && this.getAuthor(mod));
    }
    static isCompatible(mod1, mod2) {
        let _nameCheck = this.getName(mod1) == this.getName(mod2);
        let _versionCheck = this.getVersion(mod1) == this.getVersion(mod2);
        let _authorCheck = this.getAuthor(mod1) == this.getAuthor(mod2);
        return _nameCheck && _versionCheck && _authorCheck;
    }
    static getParams(func) {
        let fnStr = func.toString().replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, '');
        let result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(/([^\s,]+)/g);
        if (result === null)
            result = [];
        let final_result = result.map(function (r) { return { type: r, value: undefined }; });
        return final_result;
    }
    static getFunctions(mod) {
        // default names to exclude
        let fn = [];
        let module_name = this.getName(mod);
        let fns = Object.getOwnPropertyNames(mod).filter(function (prop) {
            return ["length", "prototype", "name", "_name", "_author", "_version"].indexOf(prop) == -1;
        });
        for (let f = 0; f < fns.length; f++) {
            if (mod.hasOwnProperty(fns[f])) {
                let obj = { name: fns[f],
                    module: module_name,
                    params: this.getParams(mod[fns[f]]),
                    def: mod[fns[f]],
                };
                fn.push(obj);
            }
            else {
                continue;
            }
        }
        return fn;
    }
    ;
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ModuleUtils;



/***/ }),

/***/ "../../../../../src/app/base-classes/code/generators/javascript_generator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CodeGenerator__ = __webpack_require__("../../../../../src/app/base-classes/code/CodeGenerator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureModule.ts");


class CodeGeneratorJS extends __WEBPACK_IMPORTED_MODULE_0__CodeGenerator__["a" /* CodeGenerator */] {
    constructor() { super("js"); }
    //
    //	gets the display code for the flowchart
    //
    getDisplayCode(flow) {
        let fn_calls = [];
        let code_defs = [];
        let connector_lines = [];
        let code_block = "";
        let nodeOrder = flow.getNodeOrder();
        let all_nodes = flow.getNodes();
        let all_edges = flow.getEdges();
        // connector lines
        for (let c = 0; c < all_edges.length; c++) {
            let edge = all_edges[c];
            let input_node = flow.getNodeByIndex(edge.input_address[0]);
            let output_node = flow.getNodeByIndex(edge.output_address[0]);
            // create line assigning values
            let code = this.generateConnectionLine(input_node, edge.input_address[1], output_node, edge.output_address[1]);
            if (connector_lines[edge.input_address[0]] == undefined) {
                connector_lines[edge.input_address[0]] = [];
            }
            connector_lines[edge.input_address[0]].push(code);
        }
        // get all the codes of the different functions and the function calls 
        for (let c = 0; c < nodeOrder.length; c++) {
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
    }
    //
    //
    //
    getFunctionCall(node, params) {
        let fn_call = "";
        let param_values = [];
        let inputs = node.getInputs();
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].isConnected() == true) {
                let input_name = inputs[i].getName();
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
    }
    getDefinition(node) {
        let fn_def = "";
        let params = [];
        let inputs = node.getInputs();
        for (let i = 0; i < inputs.length; i++) {
            params.push(inputs[i].getName());
        }
        // make function
        fn_def += "function " + node.getName() + node.getVersion() + "( " + params.join(", ") + " )() \n";
        return fn_def;
    }
    getNodeCode(node) {
        let nodeVars = [];
        let fn_code = "";
        // add initializations
        // get params
        let params = [];
        let initializations = [];
        let inputs = node.getInputs();
        for (let i = 0; i < inputs.length; i++) {
            let inp = inputs[i];
            nodeVars.push(inp.getName());
            if (inp.isConnected() == true) {
                params.push(inp.getName());
            }
            let input_port_code = this.generateInputPortCode(inp);
            if (input_port_code !== "") {
                initializations.push(input_port_code);
            }
        }
        // make function
        fn_code += "function " + node.getName() + node.getVersion() + "( " + params.join(", ") + " ) { \n";
        fn_code += (initializations.length > 0 ? initializations.join(";\n") + ";\n" : "");
        // add outputs 
        let results = [], opInits = [];
        let outputs = node.getOutputs();
        for (let o = 0; o < outputs.length; o++) {
            let oname = outputs[o].getName();
            nodeVars.push(oname);
            results.push(oname + " : " + oname);
            opInits.push(this.generateOutputPortCode(outputs[o]));
        }
        // add initialization for outputs
        fn_code += (opInits.length > 0 ? "\n" + opInits.join(";\n") + ";\n" : "");
        // add procedure
        for (let line = 0; line < node.getProcedure().length; line++) {
            let procedure = node.getProcedure()[line];
            fn_code += "\n" + this.generateProcedureCode(procedure, nodeVars, undefined);
        }
        // add return object
        fn_code += "\n" + "return " + " { " + results.join(", ") + " } " + ";";
        // ending
        fn_code += "\n }\n";
        return fn_code;
    }
    getNodeOutputCode(node, output_idx) {
        return node.getName() + "." + node.getOutputByIndex(output_idx).getName();
    }
    generateConnectionLine(destination_node, destination_port, source_node, source_port) {
        let code = "let " + destination_node.getInputByIndex(destination_port).getName() + "=" + this.getNodeOutputCode(source_node, source_port) + "\n";
        return code;
    }
    generateProcedureCode(procedure, nodeVars = [], prodFn) {
        // change based on type
        let code;
        let prod_type = procedure.getType();
        if (prodFn == undefined) {
            prodFn = this.generateProcedureCode;
        }
        if (prod_type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].Data) {
            let init;
            if (nodeVars.indexOf(procedure.getLeftComponent().expression) == -1) {
                init = "let ";
            }
            else {
                init = "";
            }
            code = init + procedure.getLeftComponent().expression + " = " + procedure.getRightComponent().expression + ";";
        }
        else if (prod_type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].Action) {
            let paramList = [];
            let params = procedure.getRightComponent().params;
            for (let p = 0; p < params.length; p++) {
                let param = params[p];
                if (param.value !== undefined)
                    paramList.push(param.value);
                else
                    paramList.push(param.type);
            }
            let right = procedure.getRightComponent();
            let init;
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
            let codeArr = [];
            // add statement
            let statement = "";
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
            codeArr.push(statement);
            // add children
            procedure.getChildren().map(function (child) {
                codeArr.push(prodFn(child, nodeVars, prodFn));
            });
            // add ending
            if (prod_type !== __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].IfElseControl)
                codeArr.push("}\n");
            code = codeArr.join("\n");
        }
        return code;
    }
    //
    //	required for code generation
    //
    generateInputPortCode(port) {
        if (port.isConnected() == true)
            return "";
        return "let " + port.getName() + " = " + port.getValue();
    }
    generateOutputPortCode(port) {
        return "let " + port.getName() + " = " + port.getDefaultValue();
    }
    executeNode(node, params) {
        //let gis = this._modules["gis"];
        let str = "(function(){ \
						" + this.getNodeCode(node) + "\n" + this.getFunctionCall(node, params) + "\n" + "return " + node.getName() + ";" + "})(); \
						";
        console.log(str);
        let result = eval(str);
        return result; //result;// return result of the node
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CodeGeneratorJS;

;


/***/ }),

/***/ "../../../../../src/app/base-classes/flowchart/Flowchart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//	Flowchart class 
//  Implement IFlowchart
//	
//
//
class Flowchart {
    //
    //	constructor needs 2 arguments  - username and icodegenerator
    //
    constructor(username) {
        this._nodes = [];
        this._edges = [];
        this._author = username;
    }
    ;
    //	gets author of the flowchart
    getAuthor() {
        return this._author;
    }
    //	Summary of flowchart
    getSummary() {
        return "This is a flowchart, with " + this._nodes.length + " nodes, written by " + this._author;
    }
    //
    //	Maintains the node order for execution
    //
    addNode(node) {
        if (node == undefined) {
            //todo: create new node
        }
        // a new node will have no dependencies - hence push index to end of _nodeTree
        this._nodes.push(node);
        return this._nodes.length;
    }
    ;
    addEdge(outputAddress, inputAddress) {
        if (outputAddress.length !== 2 || inputAddress.length !== 2) {
            console.log("inputAddress", inputAddress);
            console.log("outputAddress", outputAddress);
            throw Error("Invalid arguments for edge");
        }
        let edge = { output_address: outputAddress, input_address: inputAddress };
        // todo: check for valid input/output addresses and port address
        this._edges.push(edge);
        return this._edges.length;
    }
    ;
    deleteNode(nodeIndex) {
        // todo: check for valid node index
        this._nodes.splice(nodeIndex, 1);
        return this._nodes.length;
    }
    deleteEdge(edgeIndex) {
        // todo: check for valid edge index
        this._edges.splice(edgeIndex, 1);
        return this._edges.length;
    }
    getNodes() {
        return this._nodes;
    }
    getEdges() {
        return this._edges;
    }
    //
    //	Get node by index in flowchart
    //	todo: fix
    //
    getNodeByIndex(index) {
        return this._nodes[index];
    }
    getEdgeByIndex(index) {
        return this._edges[index];
    }
    //todo: provide a more efficient sort
    getNodeOrder() {
        let rankedNodeOrder = [];
        let incoming = [];
        this._nodes.map(function (node, index) {
            incoming[index] = { count: 0, id: index };
        });
        for (let c = 0; c < this._edges.length; c++) {
            let edge = this._edges[c];
            let in_nodeIndex = edge.input_address[0];
            let out_nodeIndex = edge.output_address[0];
            incoming[in_nodeIndex].count++;
            incoming[out_nodeIndex].count--;
        }
        let an = this._nodes;
        rankedNodeOrder = incoming.sort(function (a, b) {
            return a.count - b.count;
        }).map(function (obj) {
            return obj.id;
        });
        return rankedNodeOrder;
    }
    //
    //	clears all the cached results
    //
    reset() {
        for (let n = 0; n < this._nodes.length; n++) {
            this._nodes[n].reset();
        }
    }
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
    updateDependentInputs(node, originalRank) {
        let selectedEdges = this.getEdges().filter(function (edge) {
            return edge.output_address[0] == originalRank;
        });
        for (let e = 0; e < selectedEdges.length; e++) {
            let edge = selectedEdges[e];
            let inputNode = this.getNodeByIndex(edge.input_address[0]);
            // set computed value of port
            // should this be from within the node?
            let outputPort = node.getOutputByIndex(edge.output_address[1]);
            let inputPort = inputNode.getInputByIndex(edge.input_address[1]);
            inputPort.setComputedValue(outputPort.getValue());
        }
    }
    //
    //	executes the flowchart
    //
    execute(code_generator) {
        // set all nodes to status not executed
        // future: cache results and set status based on changes
        this.reset();
        // sort nodes 
        let all_nodes = this.getNodes();
        let sortOrder = this.getNodeOrder();
        // execute each node
        // provide input to next 
        let timeStarted = (new Date()).getTime();
        for (let nc = 0; nc < sortOrder.length; nc++) {
            let originalRank = sortOrder[nc];
            let node = all_nodes[originalRank];
            // check status of the node; don't rerun
            if (node.hasExecuted() == true) {
                continue;
            }
            node.execute(code_generator);
            console.log(node.getName(), node.getResult());
            this.updateDependentInputs(node, originalRank);
            //todo: print time taken
        }
        return true;
    }
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
    save() {
        throw Error("Not implemented");
        /*this.reset();
        //todo:
        console.log(CircularJSON.stringify(this));
        return CircularJSON.stringify(this);*/
    }
    readFromJSON(filename) {
        // todo:
        // read the nodes and edges and add to the flowchart
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Flowchart;



/***/ }),

/***/ "../../../../../src/app/base-classes/flowchart/FlowchartModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Flowchart__ = __webpack_require__("../../../../../src/app/base-classes/flowchart/Flowchart.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Flowchart__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FlowchartReader__ = __webpack_require__("../../../../../src/app/base-classes/flowchart/FlowchartReader.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__FlowchartReader__["a"]; });




/***/ }),

/***/ "../../../../../src/app/base-classes/flowchart/FlowchartReader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Flowchart__ = __webpack_require__("../../../../../src/app/base-classes/flowchart/Flowchart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_NodeModule__ = __webpack_require__("../../../../../src/app/base-classes/node/NodeModule.ts");


class FlowchartReader {
    static readFlowchartFromData(data) {
        // recreate the flowchart from data
        let fc = new __WEBPACK_IMPORTED_MODULE_0__Flowchart__["a" /* Flowchart */](data["author"]);
        let nodes = data["_nodes"];
        let edges = data["_edges"];
        // add nodes
        for (let index in nodes) {
            let n_data = nodes[index];
            let node = new __WEBPACK_IMPORTED_MODULE_1__node_NodeModule__["a" /* GraphNode */](n_data["name"], n_data["type"]);
            node.update(n_data);
            fc.addNode(node);
        }
        // add edges
        for (let index in edges) {
            let e_data = edges[index];
            fc.addEdge(e_data.output_address, e_data.input_address);
        }
        return fc;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FlowchartReader;



/***/ }),

/***/ "../../../../../src/app/base-classes/misc/GUID.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class IdGenerator {
    static s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    static getId() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IdGenerator;



/***/ }),

/***/ "../../../../../src/app/base-classes/node/GraphNode.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_GUID__ = __webpack_require__("../../../../../src/app/base-classes/misc/GUID.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__port_PortModule__ = __webpack_require__("../../../../../src/app/base-classes/port/PortModule.ts");



class GraphNode {
    constructor(name, type) {
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
        this._type == type;
    }
    //	
    //
    //
    getName() {
        return this._name;
    }
    ;
    setName(name) {
        this._name = name;
    }
    getId() {
        return this._id;
    }
    ;
    getVersion() {
        return this._version;
    }
    getType() {
        return this._type;
    }
    overwrite(node) {
        this._inputs = node.getInputs();
        this._outputs = node.getOutputs();
        this._procedure = node.getProcedure();
        return this._version++;
    }
    update(nodeData) {
        if (nodeData["lib"] == undefined) {
            this._id = nodeData["_id"];
            this.position = nodeData["position"];
            this._name = nodeData["_name"];
            console.log("not from library");
        }
        else {
            this.position = [0, 0];
            console.log("from library", nodeData["position"]);
        }
        // map direct properties
        this.portCounter = nodeData["portCounter"];
        this._isDisabled = nodeData["_isDisabled"];
        // add inputs
        let inputs = nodeData["_inputs"];
        for (let input_index in inputs) {
            let inp_data = inputs[input_index];
            let input = new __WEBPACK_IMPORTED_MODULE_2__port_PortModule__["a" /* InputPort */](inp_data["_name"]);
            input.update(inp_data);
            this._inputs.push(input);
        }
        // add outputs
        let outputs = nodeData["_outputs"];
        for (let output_index in outputs) {
            let output_data = outputs[output_index];
            let output = new __WEBPACK_IMPORTED_MODULE_2__port_PortModule__["b" /* OutputPort */](output_data["_name"]);
            output.update(output_data);
            this._outputs.push(output);
        }
        // add procedure
        let procedureArr = nodeData["_procedure"];
        for (let prodIndex in procedureArr) {
            let procedure = __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["a" /* ProcedureFactory */].getProcedureFromData(procedureArr[prodIndex], undefined);
            this._procedure.push(procedure);
        }
    }
    //
    //
    //
    addInput(name) {
        let default_name = this._name + "_in" + this.portCounter;
        if (name !== undefined) {
            default_name = name;
        }
        let inp = new __WEBPACK_IMPORTED_MODULE_2__port_PortModule__["a" /* InputPort */](default_name);
        this._inputs.push(inp);
        this.portCounter++;
        return this._inputs.length;
    }
    addOutput(name) {
        let default_name = this._name + "_out" + this.portCounter;
        if (name !== undefined) {
            default_name = name;
        }
        let oup = new __WEBPACK_IMPORTED_MODULE_2__port_PortModule__["b" /* OutputPort */](default_name);
        this._outputs.push(oup);
        this.portCounter++;
        return this._outputs.length;
    }
    deleteInput(input_port_index) {
        this._inputs.splice(input_port_index, 1);
        return this._inputs.length;
    }
    deleteOutput(output_port_index) {
        this._outputs.splice(output_port_index, 1);
        return this._inputs.length;
    }
    getInputs() {
        return this._inputs;
    }
    getOutputs() {
        return this._outputs;
    }
    getInputByIndex(input_port_index) {
        return this._inputs[input_port_index];
    }
    getOutputByIndex(output_port_index) {
        return this._outputs[output_port_index];
    }
    getProcedure() {
        return this._procedure;
    }
    addProcedure(prod) {
        this._procedure.push(prod);
    }
    addProcedureAtPosition(prod, index) {
        this._procedure.splice(index, 0, prod);
    }
    deleteProcedure(prod) {
        this._procedure = this._procedure.filter(function (child) {
            if (child === prod) {
                return false;
            }
            else {
                return true;
            }
        });
    }
    deleteProcedureAtPosition(index) {
        this._procedure.splice(index, 1);
    }
    //
    //
    //
    isDisabled() {
        return this._isDisabled;
    }
    enable() {
        this._isDisabled = false;
    }
    disable() {
        this._isDisabled = true;
    }
    hasExecuted() {
        return this._hasExecuted;
    }
    reset() {
        this._hasExecuted = false;
        this._hasError = false;
        return (this._hasExecuted == false);
    }
    hasError() {
        return this._hasError;
    }
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
    execute(code_generator) {
        let params = [];
        console.log(params);
        this.getInputs().map(function (i) { params[i.getName()] = i.getValue(); });
        console.log(params);
        // use code generator to execute code
        let result = code_generator.executeNode(this, params);
        // add results to this node
        for (let n = 0; n < this._outputs.length; n++) {
            let output_port = this._outputs[n];
            output_port.setComputedValue(result[output_port.getName()]);
        }
        this._hasExecuted = true;
    }
    getResult() {
        let final_values = {};
        for (let o = 0; o < this._outputs.length; o++) {
            let output = this._outputs[o];
            final_values[output.getName()] = output.getValue();
        }
        return final_values;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GraphNode;



/***/ }),

/***/ "../../../../../src/app/base-classes/node/NodeModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GraphNode__ = __webpack_require__("../../../../../src/app/base-classes/node/GraphNode.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__GraphNode__["a"]; });



/***/ }),

/***/ "../../../../../src/app/base-classes/port/InputPort.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Port__ = __webpack_require__("../../../../../src/app/base-classes/port/Port.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PortTypes__ = __webpack_require__("../../../../../src/app/base-classes/port/PortTypes.ts");


class InputPort extends __WEBPACK_IMPORTED_MODULE_0__Port__["a" /* Port */] {
    constructor(name, type) {
        super(name);
        // input type 
        // slider
        // input
        // color
        // file
        this._inputType = __WEBPACK_IMPORTED_MODULE_1__PortTypes__["a" /* PortTypes */].Default;
        if (type !== undefined) {
            this._inputType = type.name;
            this.setDefaultValue(type.value);
        }
    }
    getType() {
        return this._inputType;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InputPort;



/***/ }),

/***/ "../../../../../src/app/base-classes/port/OutputPort.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Port__ = __webpack_require__("../../../../../src/app/base-classes/port/Port.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PortTypes__ = __webpack_require__("../../../../../src/app/base-classes/port/PortTypes.ts");


class OutputPort extends __WEBPACK_IMPORTED_MODULE_0__Port__["a" /* Port */] {
    constructor(name) {
        super(name);
    }
    getType() {
        return __WEBPACK_IMPORTED_MODULE_1__PortTypes__["a" /* PortTypes */].Output;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = OutputPort;



/***/ }),

/***/ "../../../../../src/app/base-classes/port/Port.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_GUID__ = __webpack_require__("../../../../../src/app/base-classes/misc/GUID.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PortTypes__ = __webpack_require__("../../../../../src/app/base-classes/port/PortTypes.ts");


class Port {
    constructor(name) {
        this._selected = false;
        this._disabled = false;
        this._connected = false;
        // values
        this._default = undefined;
        this._computed = undefined;
        this._id = __WEBPACK_IMPORTED_MODULE_0__misc_GUID__["a" /* IdGenerator */].getId();
        this._name = name;
    }
    getId() {
        return this._id;
    }
    getType() {
        return __WEBPACK_IMPORTED_MODULE_1__PortTypes__["a" /* PortTypes */].Default;
    }
    setType(type) {
        this._type = type;
    }
    isSelected() {
        return this._selected;
    }
    isDisabled() {
        return this._disabled;
    }
    disable() {
        this._disabled = true;
    }
    enable() {
        this._disabled = false;
    }
    //
    //
    //
    update(portData) {
        this._id = portData["_id"];
        this._type = portData["_type"];
        this._selected = portData["_selected"];
        this._disabled = portData["_disabled"];
        this._connected = portData["_connected"];
        this._default = portData["_default"];
        // todo: assign computed also??
    }
    //
    //
    //
    getName() {
        return this._name;
    }
    setName(name) {
        this._name = name;
    }
    //
    //
    //
    isConnected() {
        return this._connected;
    }
    connect() {
        this._connected = true;
    }
    disconnect() {
        this._connected = false;
    }
    setDefaultValue(value) {
        this._default = value;
    }
    setComputedValue(value) {
        this._computed = value;
    }
    getDefaultValue() {
        return this._default;
    }
    getValue() {
        if (this._computed !== undefined)
            return this._computed;
        else
            return this._default;
    }
    //
    //
    //
    reset() {
        this._computed = undefined;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Port;



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


/***/ }),

/***/ "../../../../../src/app/base-classes/procedure/ActionProcedure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Procedure__ = __webpack_require__("../../../../../src/app/base-classes/procedure/Procedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureTypes.ts");


class ActionProcedure extends __WEBPACK_IMPORTED_MODULE_0__Procedure__["a" /* Procedure */] {
    constructor(data) {
        super(__WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].Action, false);
        if (data == undefined) {
            data = { result: undefined, module: undefined, function: undefined, params: [] };
        }
        let left = { expression: data.result,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        let right = { expression: data.module + "::" + data.function,
            isAction: true,
            module: data.module,
            category: undefined,
            fn_name: data.function,
            params: data.params
        };
        if (data.result !== undefined) {
            super.setLeftComponent(left);
        }
        super.setRightComponent(right);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ActionProcedure;



/***/ }),

/***/ "../../../../../src/app/base-classes/procedure/DataProcedure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Procedure__ = __webpack_require__("../../../../../src/app/base-classes/procedure/Procedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureTypes.ts");


class DataProcedure extends __WEBPACK_IMPORTED_MODULE_0__Procedure__["a" /* Procedure */] {
    constructor(data) {
        super(__WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].Data, false);
        if (data == undefined) {
            data = { result: undefined, value: undefined };
        }
        let left = { expression: data.result,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        let right = { expression: data.value,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        super.setLeftComponent(left);
        super.setRightComponent(right);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DataProcedure;



/***/ }),

/***/ "../../../../../src/app/base-classes/procedure/ForLoopControlProcedure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureTypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Procedure__ = __webpack_require__("../../../../../src/app/base-classes/procedure/Procedure.ts");


class ForLoopControlProcedure extends __WEBPACK_IMPORTED_MODULE_1__Procedure__["a" /* Procedure */] {
    constructor(data) {
        super(__WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].ForLoopControl, true);
        if (data == undefined) {
            data = { variable: undefined, array_name: undefined };
        }
        let left = { expression: data.variable,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        let right = { expression: data.array_name,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        super.setLeftComponent(left);
        super.setRightComponent(right);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ForLoopControlProcedure;



/***/ }),

/***/ "../../../../../src/app/base-classes/procedure/IfElseControlProcedure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Procedure__ = __webpack_require__("../../../../../src/app/base-classes/procedure/Procedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureTypes.ts");


class IfElseControlProcedure extends __WEBPACK_IMPORTED_MODULE_0__Procedure__["a" /* Procedure */] {
    constructor(title, data) {
        super(title, true);
        if (title == __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].IfElseControl) {
            let if_control = new IfElseControlProcedure(__WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].IfControl, data);
            let else_control = new IfElseControlProcedure(__WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].ElseControl, data);
            super.addChild(if_control);
            super.addChild(else_control);
        }
        else {
            if (title == __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].IfControl) {
                if (data == undefined) {
                    data = { if_condition: undefined, el_condition: undefined };
                }
                let left = {
                    expression: data.if_condition,
                    isAction: false,
                    module: undefined,
                    category: undefined,
                    fn_name: undefined,
                    params: undefined
                };
                this.setLeftComponent(left);
            }
            else if (title == __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].ElseControl) {
            }
        }
    }
    addChild(prod) {
        if (this.getType() == __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].IfElseControl) {
            alert("Cannot add child to this");
        }
        else {
            super.addChild(prod);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IfElseControlProcedure;



/***/ }),

/***/ "../../../../../src/app/base-classes/procedure/Procedure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Procedure {
    constructor(type, hasChildren) {
        this._disabled = false;
        this._children = [];
        this._type = type;
        this._hasChildren = hasChildren;
    }
    update(prodData, parent) {
        this._hasChildren = prodData._hasChildren;
        this._disabled = prodData._disabled;
        this._leftComponent = prodData._leftComponent;
        this._rightComponent = prodData._rightComponent;
        this._parent = parent;
        this._children = [];
    }
    getType() {
        return this._type;
    }
    isSelected() {
        return this._selected;
    }
    select() {
        this._selected = true;
    }
    unselect() {
        this._selected = false;
    }
    isDisabled() {
        return this._disabled;
    }
    enable() {
        this._disabled = false;
    }
    disable() {
        this._disabled = true;
    }
    hasParent() {
        if (this._parent == undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    getParent() {
        return this._parent;
    }
    setParent(parent) {
        this._parent = parent;
    }
    hasChildren() {
        return this._hasChildren;
    }
    getChildren() {
        if (this._hasChildren == false) {
            throw Error("This Procedure Type is not a container");
        }
        else {
            return this._children;
        }
    }
    addChild(child) {
        if (this._hasChildren) {
            this._children.push(child);
        }
        else {
            throw Error("Cannot add child to this procedure");
        }
    }
    addChildFromData(child) {
        if (this._hasChildren) {
            this._children.push(child);
        }
        else {
            throw Error("Cannot add child to this procedure");
        }
    }
    addChildAtPosition(child, index) {
        this._children.splice(index, 0, child);
    }
    deleteChild(procedure) {
        this._children = this._children.filter(function (child) {
            if (child === procedure) {
                return false;
            }
            else {
                return true;
            }
        });
    }
    getLeftComponent() {
        return this._leftComponent;
    }
    setLeftComponent(component) {
        this._leftComponent = component;
    }
    getRightComponent() {
        return this._rightComponent;
    }
    setRightComponent(component) {
        this._rightComponent = component;
    }
    getCodeString(code_generator) {
        return code_generator.generateProcedureCode(this);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Procedure;



/***/ }),

/***/ "../../../../../src/app/base-classes/procedure/ProcedureFactory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureTypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DataProcedure__ = __webpack_require__("../../../../../src/app/base-classes/procedure/DataProcedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ActionProcedure__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ActionProcedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IfElseControlProcedure__ = __webpack_require__("../../../../../src/app/base-classes/procedure/IfElseControlProcedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ForLoopControlProcedure__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ForLoopControlProcedure.ts");





class ProcedureFactory {
    static getProcedure(type, data) {
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
    }
    static getProcedureFromData(procedureData, parent) {
        let procedure;
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
            for (let child = 0; child < procedureData._children.length; child++) {
                let childProd = procedureData._children[child];
                procedure.addChildFromData(ProcedureFactory.getProcedureFromData(childProd, procedure));
            }
        }
        return procedure;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProcedureFactory;



/***/ }),

/***/ "../../../../../src/app/base-classes/procedure/ProcedureModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProcedureFactory__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureFactory.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ProcedureFactory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureTypes.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a"]; });




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


/***/ }),

/***/ "../../../../../src/app/base-classes/viz/Viewer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_services_flowchart_service__ = __webpack_require__("../../../../../src/app/global-services/flowchart.service.ts");

class Viewer {
    constructor(injector, name, description, author) {
        this.panelOpenState = true;
        this._name = name;
        this._description = description;
        this._author = author;
        this.flowchartService = injector.get(__WEBPACK_IMPORTED_MODULE_0__global_services_flowchart_service__["a" /* FlowchartService */]);
        this._subscription = this.flowchartService.getMessage().subscribe(message => {
            this._message = message;
            this.notify();
        });
    }
    //
    //	checks if the flowchart service has a flowchart and calls update function for the viewer
    //
    notify() {
        if (this.flowchartService.hasFlowchart() && this.flowchartService.getNodes().length > 0) {
            this.update();
        }
        else {
            this.reset();
        }
    }
    //
    //	gets flowchart service
    //
    getService() {
        return this.flowchartService;
    }
    ngOnInit() { this.notify(); }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this._subscription.unsubscribe();
    }
    reset() {
        console.log(this._name + " has not implemented the reset function!");
    }
    // 
    //	update function to be overriden by each viewer
    //
    update() {
        console.log(this._name + " has not implemented the update function!");
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Viewer;



/***/ }),

/***/ "../../../../../src/app/custom-angular-modules/CustomMaterialModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm2015/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm2015/material.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/*
 * This module imports all thre required components from Angular Material
 */
let CustomMaterialModule = class CustomMaterialModule {
};
CustomMaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonToggleModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatListModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonToggleModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatListModule */]]
    })
], CustomMaterialModule);



/***/ }),

/***/ "../../../../../src/app/geometry-modules/Module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Module {
    constructor(name, author) {
        this.name = name;
        this.author = author;
    }
    getName() {
        return this.name;
    }
    getAuthor() {
        return this.author;
    }
    getAllMethodNames() {
        let obj = this;
        let methods = new Set();
        while (obj = Reflect.getPrototypeOf(obj)) {
            let keys = Reflect.ownKeys(obj);
            keys.forEach((k) => methods.add(k));
        }
        return methods;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Module;



/***/ }),

/***/ "../../../../../src/app/geometry-modules/gis_module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Module__ = __webpack_require__("../../../../../src/app/geometry-modules/Module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("../../../../three/build/three.module.js");


//
//		Mobius Classes
//
class Point {
}
class Polyline {
    isPlanar() {
        return true;
    }
}
class Polygon {
    isPlanar() {
        return false;
    }
}
class Frame {
}
class gis_module extends __WEBPACK_IMPORTED_MODULE_0__Module__["a" /* Module */] {
    constructor() {
        // name of module, author of module
        super("gis", "akm");
    }
    getPoint() {
        let pnt = new Point();
        return pnt;
    }
    getPlane() {
        let pln = new Polyline();
        return pln;
    }
    isPlanar(entity) {
        return entity.isPlanar();
    }
    byXYPoints() {
        return new Frame();
    }
    makeCube(size) {
        return new __WEBPACK_IMPORTED_MODULE_1_three__["b" /* Mesh */](new __WEBPACK_IMPORTED_MODULE_1_three__["a" /* BoxGeometry */](size, size, size));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = gis_module;



/***/ }),

/***/ "../../../../../src/app/global-services/flowchart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowchartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm2015/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_classes_flowchart_FlowchartModule__ = __webpack_require__("../../../../../src/app/base-classes/flowchart/FlowchartModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_classes_node_NodeModule__ = __webpack_require__("../../../../../src/app/base-classes/node/NodeModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_classes_code_CodeModule__ = __webpack_require__("../../../../../src/app/base-classes/code/CodeModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_circular_json__ = __webpack_require__("../../../../circular-json/build/circular-json.node.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_circular_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_circular_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_modules_AllModules__ = __webpack_require__("../../../../../src/assets/modules/AllModules.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let FlowchartService = class FlowchartService {
    constructor() {
        /*private _ffactory = new FlowchartFactory();
        private _fc = new FlowchartConverter();*/
        this._user = "AKM";
        this.code_generator = __WEBPACK_IMPORTED_MODULE_4__base_classes_code_CodeModule__["a" /* CodeFactory */].getCodeGenerator("js");
        this._selectedNode = 0;
        this._selectedPort = 0;
        this._savedNodes = [];
        // 
        // message handling between components
        // 
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.newFile();
        this.checkSavedNodes();
    }
    check() {
        return this._flowchart != undefined;
    }
    ;
    checkSavedNodes() {
        this._savedNodes = [];
        let myStorage = window.localStorage;
        let property = "MOBIUS_NODES";
        let storageString = myStorage.getItem(property);
        let nodesStorage = JSON.parse(storageString == null ? JSON.stringify({ n: [] }) : storageString);
        let nodeData = nodesStorage.n;
        for (let n = 0; n < nodeData.length; n++) {
            let n_data = nodeData[n];
            this._savedNodes.push(n_data);
        }
    }
    sendMessage(message) {
        this.subject.next({ text: message });
    }
    clearMessage() {
        this.subject.next();
    }
    getMessage() {
        return this.subject.asObservable();
    }
    //
    //  message to all viewers that flowchart updated
    //
    update() {
        this.sendMessage("Updated");
    }
    readTextFile(file) {
    }
    loadFile(fileString) {
        let _this = this;
        let jsonData;
        try {
            let data = __WEBPACK_IMPORTED_MODULE_5_circular_json__["parse"](fileString);
            // load the required modules
            /* _this.modules.loadModules(data["module"]); */
            // load the required code generator
            if (_this.code_generator.getLanguage() != data["language"] && data["language"] !== undefined) {
                _this.code_generator = __WEBPACK_IMPORTED_MODULE_4__base_classes_code_CodeModule__["a" /* CodeFactory */].getCodeGenerator(data["language"]);
            }
            // read the flowchart
            _this._flowchart = __WEBPACK_IMPORTED_MODULE_2__base_classes_flowchart_FlowchartModule__["b" /* FlowchartReader */].readFlowchartFromData(data["flowchart"]);
            _this.update();
        }
        catch (err) {
            alert("Error loading file");
        }
    }
    loadModules(modules) {
        this._moduleSet = [];
        let moduleSet = this._moduleSet;
        modules.map(function (mod) {
            let name = __WEBPACK_IMPORTED_MODULE_4__base_classes_code_CodeModule__["b" /* ModuleUtils */].getName(mod);
            let version = __WEBPACK_IMPORTED_MODULE_4__base_classes_code_CodeModule__["b" /* ModuleUtils */].getVersion(mod);
            let author = __WEBPACK_IMPORTED_MODULE_4__base_classes_code_CodeModule__["b" /* ModuleUtils */].getAuthor(mod);
            // select the required module from the global module set - that has all the functions
            let modClass = __WEBPACK_IMPORTED_MODULE_6__assets_modules_AllModules__[name];
            if (__WEBPACK_IMPORTED_MODULE_4__base_classes_code_CodeModule__["b" /* ModuleUtils */].isCompatible(mod, modClass)) {
                moduleSet.push(modClass);
            }
            else {
                throw Error("Module not compatible. Please check version / author");
            }
        });
    }
    getModules() {
        return this._moduleSet;
    }
    //
    // gets the textual representation of the actual flowchart
    //
    getChartData() {
        return JSON.stringify(this._flowchart); //this._fc.flowchartToData(this._flowchart);
    }
    //
    //  check if flowchart is there
    //
    hasFlowchart() {
        return this._flowchart != undefined;
    }
    //
    //
    //
    newFile() {
        this._flowchart = new __WEBPACK_IMPORTED_MODULE_2__base_classes_flowchart_FlowchartModule__["a" /* Flowchart */](this._user);
        this._selectedNode = 0;
        this._selectedPort = 0;
        this.update();
        this.loadModules([{ _name: "SimpleMath", _version: 1, _author: "AKM" },
            { _name: "ComplexMath", _version: 1, _author: "AKM" }]);
        return this._flowchart;
    }
    //
    //  returns the flowchart
    //
    getFlowchart() {
        //console.warn("Flowchart shouldnot be modified outside of this service");
        return this._flowchart;
    }
    getNodes() {
        return this._flowchart.getNodes();
    }
    getEdges() {
        return this._flowchart.getEdges();
    }
    getSavedNodes() {
        return this._savedNodes;
    }
    saveNode(node) {
        // todo: check if overwrite
        if (node.getType() !== undefined) {
            console.log(this._savedNodes[node.getType()]);
        }
        else {
            let nav = navigator;
            let myStorage = window.localStorage;
            let property = "MOBIUS_NODES";
            let storageString = myStorage.getItem(property);
            let nodesStorage = JSON.parse(storageString == null ? JSON.stringify({ n: [] }) : storageString);
            // add the node
            nodesStorage.n.push(node);
            myStorage.setItem(property, JSON.stringify(nodesStorage));
            console.log(JSON.parse(myStorage.getItem(property)).n.length + " nodes in the library");
            /*if (nav.storage && nav.storage.persist)
              nav.storage.persist().then(granted => {
                if (granted){
      
                  alert("Storage will not be cleared except by explicit user action");
                }
                else{
                  alert("Storage may be cleared by the UA under storage pressure.");
                }
              });*/
            this.checkSavedNodes();
            this.update();
        }
    }
    //
    //    add node
    //
    addNode(type) {
        let new_node = undefined;
        let n_data = undefined;
        if (type !== undefined) {
            n_data = this._savedNodes[type];
        }
        if (n_data == undefined) {
            let default_node_name = "hello" + (this._flowchart.getNodes().length + 1);
            new_node = new __WEBPACK_IMPORTED_MODULE_3__base_classes_node_NodeModule__["a" /* GraphNode */](default_node_name, undefined);
        }
        else {
            let default_node_name = n_data["_name"] + (this._flowchart.getNodes().length + 1);
            new_node = new __WEBPACK_IMPORTED_MODULE_3__base_classes_node_NodeModule__["a" /* GraphNode */](default_node_name, n_data["_id"]);
            n_data["lib"] = true;
            new_node.update(n_data);
        }
        this._flowchart.addNode(new_node);
        this.update();
    }
    addEdge(outputAddress, inputAddress) {
        this._flowchart.addEdge(outputAddress, inputAddress);
        let output = this._flowchart.getNodeByIndex(outputAddress[0]).getOutputByIndex(outputAddress[1]);
        output.connect();
        let input = this._flowchart.getNodeByIndex(inputAddress[0]).getInputByIndex(inputAddress[1]);
        input.connect();
        input.setComputedValue({ port: outputAddress });
        this._flowchart.getNodeByIndex(inputAddress[0]).getInputByIndex(inputAddress[1]);
        this.update();
    }
    deleteNode(node_index) {
        this._selectedNode = undefined;
        this.update();
        // this._flowchart.deleteNode(node_index);
        // this.update();
    }
    deleteEdge() {
    }
    //
    //  select node
    //
    selectNode(nodeIndex) {
        this._selectedNode = nodeIndex;
        this._selectedPort = undefined;
        this.update();
    }
    selectPort(outputportIndex) {
        this._selectedPort = outputportIndex;
        this.update();
    }
    getSelectedNode() {
        if (this._selectedNode == undefined)
            return undefined;
        return this._flowchart.getNodeByIndex(this._selectedNode);
    }
    getSelectedPort() {
        // todo: where is this used?
        return this.getSelectedNode().getOutputByIndex(this._selectedPort);
    }
    //
    //  
    //
    isSelected(node) {
        return this._flowchart.getNodeByIndex(this._selectedNode).getId() == node.getId();
    }
    // 
    //  run this flowchart
    //
    execute() {
        this._flowchart.execute(this.code_generator);
        this.update();
    }
    //
    // get execution code    
    //
    getCode() {
        return this.code_generator.getDisplayCode(this._flowchart);
    }
    saveFile() {
        let file = {};
        let fileString;
        file["language"] = "js";
        file["modules"] = [];
        file["flowchart"] = this._flowchart;
        fileString = __WEBPACK_IMPORTED_MODULE_5_circular_json__["stringify"](file);
        this.downloadContent({
            type: 'text/plain;charset=utf-8',
            filename: 'Scene' + (new Date()).getTime() + ".mob",
            content: fileString
        });
    }
    downloadContent(options) {
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
    }
};
FlowchartService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], FlowchartService);



/***/ }),

/***/ "../../../../../src/app/global-services/layout.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let LayoutService = class LayoutService {
    constructor() {
        this.action = {
            a1s: 30,
            a2s: 40,
            a3s: 30,
            a1v: true,
            a2v: false,
            a3v: true,
            useTransition: true,
        };
    }
    getAssets() {
        return this.action;
    }
    setAssets(obj) {
        this.action = obj;
    }
    showEditor() {
        this.action.a2v = true;
    }
    hideEditor() {
        this.action.a2v = false;
    }
};
LayoutService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LayoutService);



/***/ }),

/***/ "../../../../../src/app/global-services/module.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
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


let ModuleService = class ModuleService {
    constructor() {
        this._modules = [];
        let gis = new __WEBPACK_IMPORTED_MODULE_1__geometry_modules_gis_module__["a" /* gis_module */]();
        this._modules["gis"] = gis;
    }
    loadModules(module) {
        let file = "../assets/modules/" + module.name + ".js" + '?hash_id=' + Math.random();
        let gis = new __WEBPACK_IMPORTED_MODULE_1__geometry_modules_gis_module__["a" /* gis_module */]();
        this._modules["gis"] = gis;
    }
    getModule(module) {
        return this._modules[module];
    }
};
ModuleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ModuleService);



/***/ }),

/***/ "../../../../../src/app/ui-components/controls/flowchart-controls/flowchart-controls.component.html":
/***/ (function(module, exports) {

module.exports = "<!--- Not in use -->\n<div class=\"viewer\">\n\t\n\t<div class=\"header\">\n\t\t\n\t\t<div class=\"title\">Flowchart Controls</div>\n\t\t<div class=\"buttons\">\n\t\t\t<button (click)=\"newfile()\">New File</button>\n\t\t\t<button type=\"submit\" (click)=\"loadFile()\">Load File</button>\n\t\t\t<button (click)=\"execute()\">Run Code</button>\n\t\t\t<button (click)=\"save()\">Save Flowchart</button>\n\t\t</div>\n\n\t</div>\n\n\t<div class=\"container\">\n\t\t\n\t</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/controls/flowchart-controls/flowchart-controls.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .default {\n    font-size: 14px;\n    color: gray;\n    line-height: 150px;\n    text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/controls/flowchart-controls/flowchart-controls.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowchartControlsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_module_service__ = __webpack_require__("../../../../../src/app/global-services/module.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let FlowchartControlsComponent = class FlowchartControlsComponent extends __WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__["a" /* Viewer */] {
    // doesn't really need to extend viewer 
    constructor(injector, modules) {
        super(injector, "flowchart-controls");
        this.modules = modules;
    }
    ngOnInit() {
        this.newfile();
    }
    newfile() {
        this.flowchartService.newFile();
    }
    execute() {
        this.flowchartService.execute();
    }
    loadFile(url) {
        this.flowchartService.loadFile(url);
    }
    save() {
        this.flowchartService.saveFile();
    }
};
FlowchartControlsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-flowchart-controls',
        template: __webpack_require__("../../../../../src/app/ui-components/controls/flowchart-controls/flowchart-controls.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/controls/flowchart-controls/flowchart-controls.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */], __WEBPACK_IMPORTED_MODULE_1__global_services_module_service__["a" /* ModuleService */]])
], FlowchartControlsComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/controls/main-menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar style=\"min-height: 45px;\">\n  <mat-toolbar-row class=\"menu-bar\">\n    <div class='section'>\n\t\t<ul class='menu'>\n\t\t\t<li class='menu-item' [matMenuTriggerFor]=\"file_menu\">\n\t\t\t\tFile\n\t\t\t</li>\n\t\t\t\n\t\t\t<li class='menu-item'>Node</li>\n\t\t\t<li class='menu-item'>Code</li>\n\t\t\t<li class='menu-item'>Help</li>\n\t\t</ul>\n\t</div>\n\t<div class='section'>\n\t\t<span id='branding'>Mobius v2.0</span>\n\t</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<mat-menu class=\"menu\" #file_menu=\"matMenu\" yPosition=\"above\" [overlapTrigger]=\"false\">\n  <span mat-menu-item (click)=\"newfile()\">New File</span>\n  <span mat-menu-item (click)=\"save()\">Save File</span>\n  <span mat-menu-item (click)=\"openPicker()\">\n  \t\t<input #fileInput style=\"display: none;\"\n  \t\ttype=\"file\" (change)=\"loadFile()\"/>\n  \t\tLoad File\n  </span>\n  <span mat-menu-item (click)=\"execute()\">Run File</span>\n</mat-menu>\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/controls/main-menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset, .menu-bar ul.menu {\n  margin: 0px;\n  padding: 0px; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .default {\n    font-size: 14px;\n    color: gray;\n    line-height: 150px;\n    text-align: center; }\n\n.menu-bar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background-color: #F7F7F7;\n  height: 45px;\n  line-height: 45px;\n  padding: 5px 15px; }\n  .menu-bar .section {\n    width: auto;\n    display: inline-block; }\n  .menu-bar #branding {\n    font-weight: bolder;\n    cursor: pointer;\n    font-size: 14px; }\n  .menu-bar ul.menu {\n    list-style: none; }\n    .menu-bar ul.menu .menu {\n      margin-left: 10px;\n      width: 200px; }\n    .menu-bar ul.menu li {\n      display: inline;\n      font-size: 16px;\n      margin-right: 10px; }\n      .menu-bar ul.menu li:hover {\n        color: #5D5959;\n        cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/controls/main-menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
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


let MenuComponent = class MenuComponent {
    constructor(flowchartService) {
        this.flowchartService = flowchartService;
    }
    ngOnInit() {
        this.newfile();
    }
    newfile() {
        this.flowchartService.newFile();
    }
    execute() {
        this.flowchartService.execute();
    }
    openPicker() {
        let el = this.fileInput.nativeElement;
        el.click();
    }
    loadFile() {
        let file = this.fileInput.nativeElement.files[0];
        if (file) {
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            let fs = this.flowchartService;
            reader.onload = function (evt) {
                let fileString = evt.target["result"];
                fs.loadFile(fileString);
            };
            reader.onerror = function (evt) {
                console.log("Error reading file");
            };
        }
    }
    save() {
        this.flowchartService.saveFile();
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('fileInput'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
], MenuComponent.prototype, "fileInput", void 0);
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/ui-components/controls/main-menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/controls/main-menu/menu.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__global_services_flowchart_service__["a" /* FlowchartService */]])
], MenuComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/controls/modulebox/modulebox.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  modulebox works!\n</p>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ModuleboxComponent = class ModuleboxComponent {
    constructor() { }
    ngOnInit() {
    }
};
ModuleboxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-modulebox',
        template: __webpack_require__("../../../../../src/app/ui-components/controls/modulebox/modulebox.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/controls/modulebox/modulebox.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ModuleboxComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/editors/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"editor\" *ngIf=\"_selectedNode !== undefined\">\n\n\t<button mat-button color=\"primary\" (click)=\"close()\">Close Editor</button>\n\n\t<form class=\"node-header\">\n\t  <mat-form-field class=\"full-width\">\n\t    <input  matInput placeholder=\"Node Name\" value=\"{{_selectedNode.getName()}}\"\n\t    (change)=\"updateNodeName($event, _selectedNode)\">\n\t  </mat-form-field>\n\t</form>\n\n\t<mat-tab-group class=\"tabs\">\n\n\t  <mat-tab class=\"tab-container\" label=\"Parameters\">\n\t  \t\t<app-parameter-viewer class=\"row\"></app-parameter-viewer>\n\t  </mat-tab>\n\n\t  <mat-tab class=\"tab-container\" label=\"Input/Output\">\n\t\t\t<app-parameter-editor class=\"row\"></app-parameter-editor>\n\t  </mat-tab>\n\n\t  <mat-tab class=\"tab-container\" label=\"Procedure\">\n\t  \t\t<app-procedure-editor></app-procedure-editor>\n\t  </mat-tab>\n\t</mat-tab-group>\n\n\t\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/editor/editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".editor {\n  padding: 15px;\n  background-color: mintcream;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 98%;\n  overflow: hidden; }\n  .editor .node-header {\n    padding: 15px 0px 15px 0px;\n    font-size: 18px;\n    line-height: 24px;\n    border-bottom: 1px solid white; }\n  .editor .tabs {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    margin-top: 30px; }\n    .editor .tabs .tab-container {\n      padding: 5px 0px 15px 0px; }\n  .editor .full-width {\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_layout_service__ = __webpack_require__("../../../../../src/app/global-services/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let EditorComponent = class EditorComponent extends __WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__["a" /* Viewer */] {
    constructor(injector, layoutService) {
        super(injector, "FlowchartViewer");
        this.layoutService = layoutService;
    }
    update() {
        this._selectedNode = this.flowchartService.getSelectedNode();
    }
    updateNodeName($event, node) {
        let name = $event.srcElement.value;
        if (name.trim().length > 0) {
            node.setName(name);
            this.flowchartService.update();
        }
    }
    saveNode(node) {
        this.flowchartService.saveNode(node);
    }
    close() {
        this.layoutService.hideEditor();
    }
};
EditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-editor',
        template: __webpack_require__("../../../../../src/app/ui-components/editors/editor/editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/editors/editor/editor.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */], __WEBPACK_IMPORTED_MODULE_1__global_services_layout_service__["a" /* LayoutService */]])
], EditorComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <mat-expansion-panel class='viewer' \r\n\t\t[expanded]=\"panelOpenState\">\r\n  \t<mat-expansion-panel-header>\r\n\t    <mat-panel-title class='header'> -->\r\n\r\n<div class=\"viewer\">\r\n\t<div class='container'>\r\n\t\t\t\r\n\t\t\t<!-- svg canvas to draw the edges -->\r\n\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" \r\n\t\t\t\tclass=\"graph-container\" \r\n\t\t\t\tid=\"graph-edges\" \r\n\t\t\t\t[style.zoom]=\"zoom\">\r\n\r\n\t\t\t\t<g *ngFor=\"let edge of _edges\" >\r\n\t\t\t\t\t\t\t\t\t<path \r\n\t\t\t\t\t\t\t\t\t  [attr.d]=\"edge.path\" \r\n\t\t\t\t\t\t\t\t\t  stroke=\"blue\"\r\n\t\t\t\t\t\t\t\t\t  stroke-width=\"3\" fill=\"none\" />\r\n\t\t\t\t\t\t\t\t</g>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t<!-- dragging path -->\r\n\t\t\t\t<g id=\"temporary-edge\" [class.hidden]=\"!_linkMode\" >\r\n\t\t\t\t\t<path \r\n\t\t\t\t\t[attr.d]=\"edgeString(mouse_pos.start, mouse_pos.current)\" stroke=\"blue\"\r\n \t\t\t\t \tstroke-width=\"5\" fill=\"none\" stroke-dasharray=\"5, 5\"/>\r\n \t\t\t\t\t<circle id=\"pointC\" [attr.cx]=\"mouse_pos.current.x\" [attr.cy]=\"mouse_pos.current.y\" r=\"5\" />\r\n \t\t\t\t</g>\r\n\r\n\t\t\t</svg>\r\n\r\n\t\t\t<!-- div container for the nodes -->\r\n\t\t\t<div class=\"graph-container\" \r\n\t\t\t\tid=\"graph-nodes\" ondragover=\"return false\" [style.zoom]=\"zoom\" >\r\n\t\t\t\t\r\n\t\t\t\t<!-- all nodes -->\r\n\t\t\t\t<div class=\"node-container\">\r\n\r\n\t\t\t\t\t<!-- one node -->\r\n\t\t\t\t\t<div  class=\"node\"\r\n\t\t\t\t\t\t\t*ngFor=\"let node of _nodes; let node_index = index\" \r\n\t\t\t\t\t\t\t[style.left.px]=\"node.position[0]\" \r\n\t\t\t\t\t\t\t[style.top.px]=\"node.position[1]\" >\r\n\r\n\t\t\t\t\t\t<div class=\"btn-container\" *ngIf=\"isSelected(node)\" >\r\n\t\t\t\t\t\t\t<div class=\"btn-group port-btns\">\r\n\t\t\t\t\t\t\t\t<div class=\"action-button\" (click)=\"editNode()\">Edit</div>\r\n\t\t\t\t\t\t\t\t<div class=\"action-button\" (click)=\"deleteNode(node_index)\">Delete</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"btn-group node-btns\">\r\n\t\t\t\t\t\t\t\t<div class=\"action-button\" (click)=\"addPort(node_index, 'in')\">\r\n\t\t\t\t\t\t\t\t\t<span> inp+ </span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"action-button\" (click)=\"addPort(node_index, 'out')\">\r\n\t\t\t\t\t\t\t\t\t<span> out+ </span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"node-wrapper\">\r\n\t\t\t\t\t\t\t<!--inputs-->\r\n\t\t\t\t\t\t\t<div class=\"port-container input\">\r\n\t\t\t\t\t\t\t\t<div class=\"port\" \r\n\t\t\t\t\t\t\t\t\t[class.connected]=\"port.isConnected()\" \r\n\t\t\t\t\t\t\t\t\t*ngFor=\"let port of node.getInputs(); let pi=index\"  \r\n\t\t\t\t\t\t\t\t\tid=\"n{{node_index}}pi{{pi}}\"\r\n\t\t\t\t\t\t\t\t\tdraggable=true\r\n\t\t\t\t\t\t\t\t\t(dragstart)=\"portDragStart($event, port, [node_index, pi])\" \r\n\t\t\t\t\t\t\t\t\t(drag)=\"portDragging($event, port)\" \r\n\t\t\t\t\t\t\t\t\t(dragend)=\"portDragEnd($event, port)\"\r\n\t\t\t\t\t\t\t\t\t(drop)=\"portDrop($event, port, [node_index, pi])\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!--  -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!-- node body -->\r\n\t\t\t\t\t\t\t<div class=\"node-body\" \r\n\t\t\t\t\t\t\t\t[class.selected]=\"isSelected(node)\" \r\n\t\t\t\t\t\t\t\t(click)=\"clickNode($event, node_index)\"\r\n\t\t\t\t\t\t\t\tdraggable=true  \r\n\t\t\t\t\t\t\t\t(dragstart)=\"nodeDragStart($event, node)\" \r\n\t\t\t\t\t\t\t\t(drag)=\"nodeDragging($event, node)\" \r\n\t\t\t\t\t\t\t\t(dragend)=\"nodeDragEnd($event, node)\">\r\n\t\t\t\t\t\t\t\t<div class=\"node-name\">{{node.getName()}}</div>\r\n\t\t\t\t\t\t\t\t<!-- <div class=\"settings\" [matMenuTriggerFor]=\"settingsMenu\">More\r\n\t\t\t\t\t\t\t\t<mat-menu #settingsMenu=\"matMenu\">\r\n\t\t\t\t\t\t\t\t  <button mat-menu-item>Shut down</button>\r\n\t\t\t\t\t\t\t\t  <button mat-menu-item>Restart</button>\r\n\t\t\t\t\t\t\t\t  <button mat-menu-item>Hibernate</button>\r\n\t\t\t\t\t\t\t\t</mat-menu> \r\n\t\t\t\t\t\t\t\t</div>-->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!-- outputs -->\r\n\t\t\t\t\t\t\t<div class=\"port-container output\">\r\n\t\t\t\t\t\t\t\t<div class=\"port\"\r\n\t\t\t\t\t\t\t\t\t[class.connected]=\"port.isConnected()\" \r\n\t\t\t\t\t\t\t\t\t*ngFor=\"let port of node.getOutputs(); let po=index\"\r\n\t\t\t\t\t\t\t\t\tid=\"n{{node_index}}po{{po}}\"\r\n\t\t\t\t\t\t\t\t\tdraggable=true\r\n\t\t\t\t\t\t\t\t\t(dragstart)=\"portDragStart($event, port, [node_index, po])\" \r\n\t\t\t\t\t\t\t\t\t(drag)=\"portDragging($event, port)\" \r\n\t\t\t\t\t\t\t\t\t(dragend)=\"portDragEnd($event, port)\"\r\n\t\t\t\t\t\t\t\t\t(drop)=\"portDrop($event, port, [node_index, po])\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!-- <div class=\"btn-sm output\" ></div> -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"btn-group\">\r\n\t                <button class=\"btn\" (click)=\"addNode($event)\"><i class=\"fa fa-plus\"></i></button>\r\n\t\t\t\t\t<button class=\"btn\" (click)=\"executeFlowchart($event)\"><i class=\"fa fa-play-circle\"></i></button>\r\n\t\t\t\t\t<div style=\"height: 2px; width: 45px; background-color: gray;\"></div>\r\n\t\t\t\t\t<div class=\"btn\" style=\"font-size: 12px;\"\r\n\t\t\t\t\t\t*ngFor=\"let n of _savedNodes; let i=index\"\r\n\t\t\t\t\t    (click)=\"addNode($event, i)\">\r\n\t\t\t\t\t\t{{n._name}}\r\n\t\t\t\t\t</div>\r\n\t           \t</div>\r\n\r\n\t           \r\n\t\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- </mat-expansion-panel> -->\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .default {\n    font-size: 14px;\n    color: gray;\n    line-height: 150px;\n    text-align: center; }\n\n.viewer {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .viewer .container {\n    position: relative;\n    height: 100%;\n    overflow: hidden; }\n    .viewer .container .wrapper {\n      position: absolute;\n      cursor: move;\n      background-color: blue;\n      z-index: 1; }\n    .viewer .container .btn-group {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: start;\n      height: 100%;\n      width: 45px;\n      background-color: #E7E7E7; }\n      .viewer .container .btn-group .btn {\n        margin: 7.5px;\n        height: 30px;\n        width: 30px;\n        font-size: 18px;\n        line-height: 30px;\n        text-align: center;\n        display: inline-block;\n        border: 1px solid gray; }\n  .viewer .graph-container {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    height: 100%;\n    width: 100%; }\n    .viewer .graph-container #graph-edges {\n      background-color: transparent; }\n      .viewer .graph-container #graph-edges #temporary-edge .hidden {\n        display: none; }\n    .viewer .graph-container #graph-nodes {\n      background-color: transparent;\n      overflow: hidden; }\n  .viewer .node-container {\n    position: relative; }\n    .viewer .node-container .node {\n      position: absolute;\n      z-index: 3;\n      margin: 0px; }\n      .viewer .node-container .node .btn-container {\n        position: absolute;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        width: 100%;\n        height: 110px; }\n        .viewer .node-container .node .btn-container .btn-group {\n          position: relative;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          width: 50%;\n          height: 100%; }\n          .viewer .node-container .node .btn-container .btn-group .action-button {\n            position: relative;\n            width: 100%;\n            height: 50%;\n            border: 1px solid gray;\n            margin: 3px;\n            background-color: #bbb; }\n      .viewer .node-container .node .node-wrapper {\n        position: relative;\n        margin: 20px;\n        min-width: 70px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center; }\n        .viewer .node-container .node .node-wrapper .node-body {\n          position: relative;\n          height: 60px;\n          width: 100%;\n          border: 3px solid black;\n          border-radius: 10px;\n          background-color: white;\n          text-align: center;\n          cursor: move; }\n          .viewer .node-container .node .node-wrapper .node-body.selected {\n            background-color: #A4EAA4; }\n          .viewer .node-container .node .node-wrapper .node-body .node-name {\n            font-family: sans-serif;\n            font-size: 14px;\n            line-height: 60px; }\n          .viewer .node-container .node .node-wrapper .node-body .edit {\n            cursor: pointer;\n            color: blue;\n            font-size: 12px; }\n        .viewer .node-container .node .node-wrapper .port-container {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -ms-flex-pack: distribute;\n              justify-content: space-around;\n          position: relative;\n          height: 10px;\n          width: 100%;\n          z-index: 1;\n          margin-top: -2px; }\n          .viewer .node-container .node .node-wrapper .port-container.input .port {\n            border-top-right-radius: 15px;\n            border-top-left-radius: 15px; }\n          .viewer .node-container .node .node-wrapper .port-container.output .port {\n            border-bottom-right-radius: 15px;\n            border-bottom-left-radius: 15px; }\n          .viewer .node-container .node .node-wrapper .port-container .port {\n            height: 7.5px;\n            width: 15px;\n            border: 2px solid black;\n            border-radius: 50%;\n            display: inline-block;\n            background-color: black;\n            margin: 0px 2px;\n            z-index: 3; }\n            .viewer .node-container .node .node-wrapper .port-container .port:hover {\n              background-color: orange;\n              cursor: pointer; }\n            .viewer .node-container .node .node-wrapper .port-container .port.connected {\n              background-color: green; }\n          .viewer .node-container .node .node-wrapper .port-container .btn-sm {\n            position: absolute;\n            right: -15px;\n            border: 2px solid gray;\n            color: gray;\n            height: 15px;\n            width: 15px;\n            font-size: 10px;\n            line-height: 15px;\n            cursor: pointer;\n            background: url(" + __webpack_require__("../../../../../src/assets/img/plus.png") + ");\n            background-size: cover; }\n            .viewer .node-container .node .node-wrapper .port-container .btn-sm.input {\n              top: -5px; }\n            .viewer .node-container .node .node-wrapper .port-container .btn-sm.output {\n              bottom: 0px;\n              left: -15px; }\n      .viewer .node-container .node:active {\n        cursor: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowchartViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__ = __webpack_require__("../../../../../src/app/base-classes/port/PortModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_services_layout_service__ = __webpack_require__("../../../../../src/app/global-services/layout.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let FlowchartViewerComponent = class FlowchartViewerComponent extends __WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__["a" /* Viewer */] {
    constructor(injector, layoutService) {
        super(injector, "FlowchartViewer");
        this.layoutService = layoutService;
        this.pan_mode = false;
        this.left = 0;
        this.top = 0;
        this.zoom = 1;
        this._portWidth = 15;
        this._margin = 10;
        this._nodes = [];
        this._edges = [];
        this._savedNodes = [];
        this.showDialog = { status: false, position: [0, 0] };
        //
        //  node dragging
        //
        this.dragStart = { x: 0, y: 0 };
        this._linkMode = false;
        this.mouse_pos = {
            start: { x: 0, y: 0 },
            current: { x: 0, y: 0 }
        };
        this._savedNodes = this.flowchartService.getSavedNodes();
    }
    editNode() {
        this.layoutService.showEditor();
    }
    deleteNode(node_index) {
        this._selectedNode = undefined;
        this.layoutService.hideEditor();
        this.flowchartService.deleteNode(node_index);
    }
    //
    //
    //  Viewer Related Functions
    //
    //
    resetViewer() {
        this.zoom = 1;
        this.left = 0;
        this.top = 0;
        this.pan_mode = false;
    }
    scale($event) {
        let scaleFactor = 0.1;
        this.zoom = this.zoom + (Math.sign($event.wheelDelta)) * scaleFactor;
    }
    startPan($event) {
        this.pan_mode = true;
        this.pan_init = [$event.layerX, $event.layerY];
    }
    panning($event) {
        if (this.pan_mode == true) {
            let relX = $event.layerX - this.pan_init[0];
            let relY = $event.layerY - this.pan_init[1];
            let factor = 1;
            this.left += relX;
            this.top += relY;
            this.pan_init = [$event.layerX, $event.layerY];
        }
    }
    stopPan($event) {
        this.pan_mode = false;
        this.pan_init = undefined;
    }
    //
    //
    //  Data Related Functions
    //
    //
    updateEdges() {
        for (let e = 0; e < this._edges.length; e++) {
            let edge = this._edges[e];
            edge["path"] = this.getEdgePath(edge);
        }
    }
    update() {
        this._nodes = this.flowchartService.getNodes();
        this._edges = this.flowchartService.getEdges();
        this._savedNodes = this.flowchartService.getSavedNodes();
        let m = this._margin;
        let pw = this._portWidth;
        this._nodes.map(function (node) {
            let inputs = node.getInputs().length;
            let outputs = node.getOutputs().length;
            let max = inputs > outputs ? inputs : outputs;
            let width = m * (max + 1) + (max) * pw;
            node["width"] = width;
        });
        this.updateEdges();
        this._selectedNode = this.flowchartService.getSelectedNode();
    }
    resetData() {
        this._selectedNode = undefined;
        this._nodes = [];
        this._edges = [];
    }
    //
    //
    //
    isSelected(node) {
        return this.flowchartService.isSelected(node);
    }
    //
    // Add node and edges
    //
    addNode($event, type) {
        $event.stopPropagation();
        if (type == undefined) {
            this.flowchartService.addNode();
        }
        else {
            this.flowchartService.addNode(type);
        }
        this.update();
    }
    addEdge(outputPortAddress, inputPortAddress) {
        this.flowchartService.addEdge(outputPortAddress, inputPortAddress);
    }
    //
    //
    //  Events
    //
    //
    clickNode($event, nodeIndex) {
        // select the node
        this.flowchartService.selectNode(nodeIndex);
    }
    addPort(nodeIndex, type) {
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
    }
    nodeDragStart($event, node) {
        $event.dataTransfer.setDragImage(new Image(), 0, 0);
        // todo : find more elegant solution
        this.dragStart = { x: $event.pageX, y: $event.pageY };
        this.pan_mode = false;
    }
    nodeDragging($event, node) {
        this.pan_mode = false;
        let relX = $event.pageX - this.dragStart.x;
        let relY = $event.pageY - this.dragStart.y;
        node.position[0] += relX / this.zoom;
        node.position[1] += relY / this.zoom;
        this.dragStart = { x: $event.pageX, y: $event.pageY };
        this.updateEdges();
    }
    nodeDragEnd($event, node) {
        this.pan_mode = false;
        let relX = $event.pageX - this.dragStart.x;
        let relY = $event.pageY - this.dragStart.y;
        node.position[0] += relX;
        node.position[1] += relY;
        this.dragStart = { x: 0, y: 0 };
        this.updateEdges();
    }
    portDragStart($event, port, address) {
        $event.dataTransfer.setDragImage(new Image(), 0, 0);
        this._startPort = port;
        this._startPort['address'] = address;
        this._linkMode = true;
        let type;
        if (port instanceof __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["a" /* InputPort */]) {
            type = "pi";
        }
        else if (port instanceof __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* OutputPort */]) {
            type = "po";
        }
        let port_position = this.getPortPosition(address[0], address[1], type);
        this.mouse_pos.start = { x: port_position.x, y: port_position.y };
        this.mouse_pos.current = { x: port_position.x, y: port_position.y };
        this.dragStart = { x: $event.layerX, y: $event.layerY };
    }
    portDragging($event, port) {
        // todo: compute total offset of this div dynamically
        // urgent!
        let relX = $event.layerX - this.dragStart.x;
        let relY = $event.layerY - this.dragStart.y;
        this.mouse_pos.current.x += relX / this.zoom;
        this.mouse_pos.current.y += relY / this.zoom;
        this.dragStart = { x: $event.layerX, y: $event.layerY };
    }
    portDragEnd($event, port) {
        let relX = $event.layerX - this.dragStart.x;
        let relY = $event.layerY - this.dragStart.y;
        this.mouse_pos.current.x += relX / this.zoom;
        this.mouse_pos.current.y += relY / this.zoom;
        this.dragStart = { x: 0, y: 0 };
        this._startPort = undefined;
        this._endPort = undefined;
        this._linkMode = false;
    }
    portDrop($event, port, address) {
        this._endPort = port;
        this._endPort["address"] = address;
        if (this._startPort !== undefined && this._endPort !== undefined) {
            let inputPort;
            let outputPort;
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
    }
    getPortPosition(nodeIndex, portIndex, type) {
        let x;
        let y;
        let name = "n" + nodeIndex + type + portIndex;
        let el = document.getElementById(name);
        if (el == null) {
            return { x: 0, y: 0 };
        }
        let node_pos = this._nodes[nodeIndex].position;
        let port_container_height = 10;
        let node_height = 60;
        let port_width = 9.5;
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
    }
    //
    // Edge drawing functions
    //
    getEdgePath(edge) {
        return this.edgeString(this.getPortPosition(edge.output_address[0], edge.output_address[1], "po"), this.getPortPosition(edge.input_address[0], edge.input_address[1], "pi"));
    }
    //
    //  todo: Balu
    //
    //
    edgeString(output_port_position, input_port_position) {
        if (output_port_position == undefined || input_port_position == undefined)
            return "";
        // add margin to output port in downward direction
        //output_port_position.y += 30; 
        // add margin to input port in upward direction
        //input_port_position.y -= 30;
        //
        let path;
        let move = "M";
        let line = " L";
        let control = " Q";
        // add the start point from output
        let startPoint = output_port_position.x + " " + output_port_position.y;
        let endPoint = input_port_position.x + " " + input_port_position.y;
        // move downwards/upwards in straight line
        let translate = 50;
        let shifted_startPoint = output_port_position.x + " " + (output_port_position.y + translate);
        let shifted_endPoint = input_port_position.x + " " + (input_port_position.y - translate);
        // compute curvy line
        var x0 = output_port_position.x;
        var y0 = output_port_position.y + translate;
        var x3 = input_port_position.x;
        var y3 = input_port_position.y - translate;
        var mx1 = 0.75 * x0 + 0.25 * x3;
        var mx2 = 0.25 * x0 + 0.75 * x3;
        var my1 = 0.75 * y0 + 0.25 * y3;
        var my2 = 0.25 * y0 + 0.75 * y3;
        var distance = 0.25 * Math.round(Math.sqrt(Math.pow((x3 - x0), 2) + Math.pow((y3 - y0), 2)));
        var pSlope = (x0 - x3) / (y3 - y0);
        var multi = Math.round(Math.sqrt(distance * distance / (1 + (pSlope * pSlope))));
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
        //path="M"+x0+" "+y0+" C"+x1+" "+y1+" "+x2+" "+y2+" "+x3+" "+y3;*/
        path = move + startPoint
            + line + shifted_startPoint
            + "C" + x1 + " " + y1 + " " + x2 + " " + y2 + " " + x3 + " " + y3
            + line + endPoint;
        return path;
    }
    edgeClicked() {
        alert("Edge clicked");
    }
    updateNodeName($event, node) {
        let name = $event.srcElement.innerText;
        if (name.trim().length > 0) {
            node.setName(name);
            this.flowchartService.update();
        }
    }
    saveNode(node) {
        this.flowchartService.saveNode(node);
    }
    //
    //
    //
    executeFlowchart($event) {
        $event.stopPropagation();
        this.flowchartService.execute();
    }
};
FlowchartViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-flowchart-viewer',
        template: __webpack_require__("../../../../../src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */], __WEBPACK_IMPORTED_MODULE_3__global_services_layout_service__["a" /* LayoutService */]])
], FlowchartViewerComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/editors/parameter-editor/parameter-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer\">\r\n\r\n\t<div class=\"container\">\r\n\r\n\t\t<div class=\"section\">\r\n\r\n\t\t\t<h4 class=\"port-heading\">Inputs</h4>\r\n\r\n\t\t\t<div class=\"default\" *ngIf='_inputs.length == 0'>This node has no inputs</div>\r\n\r\n\t\t\t<div class='port input' *ngFor=\"let inp of _inputs; let i=index\">\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t<div class='row'>\r\n\t\t\t\t\t\t<span class='label'>Name</span>\r\n\t\t\t\t\t\t<span class='content' contenteditable=\"true\" (blur)=\"updatePortName($event, inp)\">\r\n\t\t\t\t\t\t\t{{ inp.getName() || \"undefined\" }}\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class='row'>\r\n\t\t\t\t\t\t<span class='label'>Type</span>\r\n\t\t\t\t\t\t<span class='content'>\r\n\t\t\t\t\t\t\t<select (change)=\"updateInputType($event.target.value, inp)\">\r\n\t\t\t\t\t\t\t\t         \t    <option *ngFor=\"let x of portOpts\" [value]=\"x\" [selected]=\"inp.getType() == x\">{{getTypeName(x)}}</option>\r\n\t\t\t\t\t\t\t\t            </select>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class='row'>\r\n\t\t\t\t\t\t<span class='label'>Default</span>\r\n\t\t\t\t\t\t<span class='content' contenteditable=\"true\" (blur)=\"updateDefaultValue($event, inp)\">\r\n\t\t\t\t\t\t\t{{inp.getDefaultValue() || \"undefined\"}}\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"controls\">\r\n\t\t\t\t\t<span class='btn btn-small' (click)='deletePort($event, \"input\", i)'>Delete</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"section\">\r\n\t\t\t\r\n\t\t\t<h4 class=\"port-heading\">Outputs</h4>\r\n\r\n\t\t\t<div class=\"default\" \r\n\t\t\t*ngIf='_outputs.length == 0'>This node has no outputs</div>\r\n\r\n\r\n\t\t\t<div class='port output' *ngFor=\"let output of _outputs; let o=index\">\r\n\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t<div class='row'>\r\n\t\t\t\t\t\t<span class='label'>Name</span>\r\n\t\t\t\t\t\t<span class='content' contenteditable=\"true\" (blur)=\"updatePortName($event, output)\">\r\n\t\t\t\t\t\t\t{{ output.getName() || \"undefined\" }}\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- <div class='row'>\r\n\t\t\t\t\t\t<span class='label'>Default</span>\r\n\t\t\t\t\t\t<span class='content' contenteditable=\"true\" (blur)=\"updateDefaultValue($event, output)\">\r\n\t\t\t\t\t\t\t{{ output.getDefaultValue() || \"undefined\"}}\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"controls\">\r\n\t\t\t\t\t<span class='btn btn-small' (click)='deletePort($event, \"output\", o)'>Delete</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/parameter-editor/parameter-editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .default {\n    font-size: 14px;\n    color: gray;\n    line-height: 150px;\n    text-align: center; }\n\n.viewer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .viewer .port-heading {\n    font-size: 18px;\n    line-height: 36px;\n    padding: 0px 4px;\n    text-align: center; }\n  .viewer .port {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    margin: 10px;\n    border-bottom: 1px dashed gray;\n    border-top: 1px dashed gray;\n    background-color: #ddd; }\n    .viewer .port .content {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      font-size: 14px;\n      line-height: 20px; }\n      .viewer .port .content .row {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row; }\n        .viewer .port .content .row .label {\n          display: inline-block;\n          text-transform: uppercase;\n          font-size: 10px;\n          color: gray;\n          width: 100px; }\n        .viewer .port .content .row .content {\n          min-width: 50px; }\n          .viewer .port .content .row .content.undefined {\n            border-bottom: 1px dashed blue; }\n    .viewer .port .controls .btn:hover {\n      cursor: pointer;\n      border-bottom: 1px dashed blue; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/parameter-editor/parameter-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParameterEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__ = __webpack_require__("../../../../../src/app/base-classes/port/PortModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ParameterEditorComponent = class ParameterEditorComponent extends __WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__["a" /* Viewer */] {
    constructor(injector) {
        super(injector, "parameter-editor");
        this.isVisible = false;
        // shift to iport
        this.portOpts = [
            __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["c" /* PortTypes */].Default,
            __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["c" /* PortTypes */].Input,
            __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["c" /* PortTypes */].ColorPicker,
            __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["c" /* PortTypes */].FilePicker,
            __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["c" /* PortTypes */].Dropdown
        ];
    }
    reset() {
        this._node = undefined;
        this._inputs = undefined;
        this._outputs = undefined;
    }
    //
    //
    //
    addPort(event, type) {
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
    }
    deletePort(event, type, portIndex) {
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
    }
    updatePortName($event, port) {
        let name = $event.srcElement.innerText;
        if (name.trim().length > 0) {
            // put a timeout on this update or something similar to solve jumpiness
            port.setName(name);
            this.flowchartService.update();
        }
    }
    updateInputType(type, input) {
        input.setType(type);
    }
    updateDefaultValue($event, port) {
        let value = $event.srcElement.innerText;
        if (value.trim().length > 0) {
            port.setDefaultValue(value);
            // put a timeout on this update or something similar to solve jumpiness
            this.flowchartService.update();
        }
    }
    getTypeName(type) {
        if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["c" /* PortTypes */].ColorPicker) {
            return "Color";
        }
        if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["c" /* PortTypes */].Default) {
            return "Simple Input";
        }
        if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["c" /* PortTypes */].Dropdown) {
            return "Dropdown";
        }
        if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["c" /* PortTypes */].FilePicker) {
            return "File";
        }
    }
    //
    //	this update runs when there is a message from other viewers that something changed; 
    //  beware of updating flowchart here - it will go into an unending loop :/
    //
    update() {
        this._node = this.flowchartService.getSelectedNode();
        if (this._node !== undefined) {
            this._inputs = this._node.getInputs();
            this._outputs = this._node.getOutputs();
            this.isVisible = true;
        }
    }
};
ParameterEditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-parameter-editor',
        template: __webpack_require__("../../../../../src/app/ui-components/editors/parameter-editor/parameter-editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/editors/parameter-editor/parameter-editor.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
], ParameterEditorComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/editors/procedure-editor/procedure-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer\">\r\n\r\n\t<div class=\"container\">\r\n\r\n\t\t<split  direction=\"horizontal\" \r\n              [gutterSize]=\"7\" \r\n              [useTransition]=\"true\">\r\n          \r\n            <split-area [visible]=\"true\" [size]=\"75\" order=\"1\">\r\n\r\n\r\n\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t<button mat-raised-button *ngFor=\"let type of procedureTypes\"\r\n\t\t\t \t\t(click)=\"addProcedure($event, type)\">\r\n\t\t\t \t\t\t{{getImageForType(type)}}\r\n\t\t\t \t\t</button>\r\n\t\t\t\t</div>\r\n\r\n    \t\t\t\r\n    \t\t\t<div class=\"tree\">          \r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"default\" *ngIf='_tree==undefined || _tree.length == 0'> This node has no procedure </div>\r\n\r\n\r\n\t                <tree-root #tree [nodes]='_tree' [options]='_tree_options'  (moveNode)=\"onMoveNode($event)\">\r\n\t\t\t\t\t\t  \r\n\t\t\t\t\t\t  <ng-template #treeNodeTemplate let-prod let-index=\"index\" class=\"tree-node-wrapper\">\r\n\r\n\t\t\t\t\t\t\t\t<!-- template for data -->\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"prod.data.name == 'Data'\"> \r\n\t\t\t\t\t\t\t\t\t<div class='procedure-item'>\r\n\t\t\t\t\t\t\t\t\t\t<input matInput class=\"tree-input\" \r\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"prod.data.leftExpression\" #ctrl=\"ngModel\" required\r\n\t\t\t\t\t\t\t\t\t\t(change)=\"updateProcedure($event, prod, 'left')\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<!-- <input class=\"tree-input\" [(ngModel)]=\"prod.data.leftExpression\" #ctrl=\"ngModel\" required\r\n\t\t\t\t\t\t\t\t\t\t(change)=\"updateProcedure($event, prod, 'left')\"> -->\r\n\t\t\t\t\t\t\t\t\t\t=\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<input  matInput class=\"tree-input\" \r\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"prod.data.rightExpression\" #ctrl=\"ngModel\" required\r\n\t\t\t\t\t\t\t\t\t\t(change)=\"updateProcedure($event, prod, 'right')\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<!-- <input class=\"tree-input\" [(ngModel)]=\"prod.data.rightExpression\" #ctrl=\"ngModel\" required\r\n\t\t\t\t\t\t\t\t\t\t(change)=\"updateProcedure($event, prod, 'right')\"> -->\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"prod.data.name == 'IfElse'\">\r\n\t\t\t\t\t\t\t\t\t<div class='procedure-item'>\r\n\t\t\t\t\t\t\t\t\t\tIf-Else\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"prod.data.name == 'If'\">\r\n\t\t\t\t\t\t\t\t\t<div class='procedure-item'>\r\n\t\t\t\t\t\t\t\t\t If ( <input matInput class=\"tree-input\"  [(ngModel)]=\"prod.data.leftExpression\" #ctrl=\"ngModel\" required\r\n\t\t\t\t\t\t\t\t\t\t(change)=\"updateProcedure($event, prod, 'left')\"> )\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t<!-- <div *ngIf=\"prod.data.name == 'If'\">\r\n\t\t\t\t\t\t\t\t\t<div class='procedure-item'>\r\n\t\t\t\t\t\t\t\t\t If ( <input class=\"tree-input\" [(ngModel)]=\"prod.data.leftExpression\" #ctrl=\"ngModel\" required\r\n\t\t\t\t\t\t\t\t\t\t(change)=\"updateProcedure($event, prod, 'left')\"> )\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div> -->\r\n\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"prod.data.name == 'Else'\">\r\n\t\t\t\t\t\t\t\t\t<div class='procedure-item'>\r\n\t\t\t\t\t\t\t\t\t Else \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"prod.data.name == 'For Loop'\">\r\n\t\t\t\t\t\t\t\t\t<div class='procedure-item'>\r\n\t\t\t\t\t\t\t\t\t for (  \r\n\t\t\t\t\t\t\t\t\t  <input matInput class=\"tree-input\"  [(ngModel)]=\"prod.data.leftExpression\" #ctrl=\"ngModel\" required (change)=\"updateProcedure($event, prod, 'left')\">\r\n\t\t\t\t\t\t\t\t\t in  \r\n\t\t\t\t\t\t\t\t\t  <input matInput class=\"tree-input\" [(ngModel)]=\"prod.data.rightExpression\" #ctrl=\"ngModel\" required (change)=\"updateProcedure($event, prod, 'right')\"> \r\n\t\t\t\t\t\t\t\t\t  )\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<!-- <div *ngIf=\"prod.data.name == 'For Loop'\">\r\n\t\t\t\t\t\t\t\t\t<div class='procedure-item'>\r\n\t\t\t\t\t\t\t\t\t for (  \r\n\t\t\t\t\t\t\t\t\t  <input class=\"tree-input\" [(ngModel)]=\"prod.data.leftExpression\" #ctrl=\"ngModel\" required (change)=\"updateProcedure($event, prod, 'left')\">\r\n\t\t\t\t\t\t\t\t\t in  \r\n\t\t\t\t\t\t\t\t\t  <input class=\"tree-input\" [(ngModel)]=\"prod.data.rightExpression\" #ctrl=\"ngModel\" required (change)=\"updateProcedure($event, prod, 'right')\"> \r\n\t\t\t\t\t\t\t\t\t  )\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div> -->\r\n\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"prod.data.name == 'Action'\">\r\n\t\t\t\t\t\t\t\t\t<div class='procedure-item'>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<input matInput class=\"tree-input\" [(ngModel)]=\"prod.data.leftExpression\" #ctrl=\"ngModel\" required\r\n\t\t\t\t\t\t\t\t\t\t(change)=\"updateProcedure($event, prod, 'left')\">\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t= {{prod.data.rightExpression}} ( \r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"param-container\" \r\n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let p of prod.data.params; let i=index\">\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t<input matInput class=\"tree-input\" \r\n\t\t\t\t\t\t\t\t\t\t\t placeholder={{prod.data.params[i].type}}\r\n\t\t\t\t\t\t\t\t\t\t\t [(ngModel)]=\"prod.data.params[i].value\"\r\n\t\t\t\t\t\t\t\t\t\t\t #ctrl=\"ngModel\" \r\n\t\t\t\t\t\t\t\t\t\t\t required\r\n\t\t\t\t\t\t\t\t\t\t\t (ngModelChange)=\"updateProcedure($event, prod, 'right')\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf='i<prod.data.params.length-1'>,</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <input class=\"tree-input\" [(ngModel)]=\"p\" \r\n\t\t\t\t\t\t\t\t\t\t\t placeholder=\"Input something here\" \r\n\t\t\t\t\t\t\t\t\t\t\t #ctrl=\"ngModel\" required \r\n\t\t\t\t\t\t\t\t\t\t\t (change)=\"updateProcedure($event, prod, 'right')\"> --> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t) \r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t    <!-- <div class='btn-group'>\r\n\t\t\t\t\t\t\t    \t\t\t\t\t    <button (click)=\"deleteProcedure(prod)\">Delete</button>\r\n\t\t\t\t\t\t\t    \t\t\t\t\t    <button (click)=\"disableProcedure(prod, $event)\">Disable</button>\r\n\t\t\t\t\t\t\t    \t\t\t\t\t    <button (click)=\"go($event)\">Copy</button>\r\n\t\t\t\t\t\t\t    \t\t\t\t\t</div> -->\r\n\r\n\t\t\t\t\t\t  </ng-template>\r\n\t\t\t\t\t</tree-root>     \r\n\r\n\t\t\t\t</div>\r\n\r\n\r\n\r\n            </split-area>\r\n\r\n            <split-area [visible]=\"_showToolbox\" [size]=\"25\" order=\"2\">\r\n               \t\r\n               \t<div class=\"toolbox\">\r\n               \t\t<mat-list condensed>\r\n\t\t\t\t\t \t<mat-list-item *ngFor=\"let fn of _moduleList\" (click)=\"addActionProcedure(fn); _showToolbox=false;\"> \r\n\t\t\t\t\t \t{{ fn.module }}::{{ fn.name }} \r\n\t\t\t\t\t \t</mat-list-item>\r\n\t\t\t\t\t</mat-list>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<button mat-raised-button (click)=\"_showToolbox=false;\">Close</button>\r\n            </split-area>\r\n            \r\n      </split>\r\n\r\n\t</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/procedure-editor/procedure-editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .default {\n    font-size: 14px;\n    color: gray;\n    line-height: 150px;\n    text-align: center; }\n\n.viewer {\n  /* \t.container{\r\n\tposition: relative;\r\n\r\n\t.procedure{\r\n\r\n\t\tpadding: 4px; \r\n\t\twidth: 100%;\r\n\r\n\t\t[contenteditable=\"true\"]:active,\r\n\t\t[contenteditable=\"true\"]:focus{\r\n\t\tborder:none;\r\n\t\toutline:none;\r\n\t\t}\r\n\r\n\t\t[contenteditable=\"true\"]{\r\n\t\t\tcolor: blue;\r\n\t\t\tborder-bottom: 1px dashed blue;\r\n\t\t}\r\n\r\n\r\n\t\t&.disabled{\r\n\t\t\tbackground-color: red;\r\n\t\t}\r\n\r\n\t}\r\n\r\n\t.btn-container{\r\n\t\tposition: absolute;\r\n\t\tbottom: 0px; \r\n\t\tleft: 30%;\r\n\r\n\t\tbutton{\r\n\t\t\theight: 30px; \r\n\t\t\twidth: 30px;\r\n\t\t}\r\n\t}\r\n\r\n}\r\n\r\ninput.tree-input{\r\n\tbackground-color: transparent;\r\n\twidth: auto;\r\n\tborder: 0px; \r\n\theight: 18px; \r\n\tfont-size: 14px;\r\n\tpadding: 5px; \r\n\tdisplay: inline;\r\n\tfont-family: sans-serif;\r\n\tline-height: 18px;\r\n\ttext-align: center;\r\n\tvertical-align: middle;\r\n\tborder-bottom: 1px dashed blue;\r\n} */ }\n  .viewer .container {\n    position: relative;\n    padding: 15px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    overflow: hidden; }\n    .viewer .container .tree {\n      margin-top: 20px;\n      min-height: 150px;\n      height: 100%;\n      width: 100%;\n      overflow-x: hidden;\n      max-height: 600px; }\n      .viewer .container .tree input.tree-input {\n        width: auto;\n        display: inline-block;\n        border-bottom: 1px dashed blue;\n        text-align: center; }\n      .viewer .container .tree .param-container {\n        display: inline-block; }\n      .viewer .container .tree .procedure-item {\n        margin: 3px;\n        padding: 3px;\n        font-size: 14px;\n        line-height: 18px;\n        width: 100%;\n        cursor: move; }\n        .viewer .container .tree .procedure-item:hover {\n          background-color: #ddd; }\n    .viewer .container .btn-group {\n      margin: 15px 0px;\n      text-align: center; }\n    .viewer .container .toolbox {\n      font-size: 12px;\n      background-color: #ccc; }\n\n/* .dialog{\r\n\tposition: absolute;\r\n\ttop: 100px;\r\n\tleft: 0px;\r\n\tborder: 1px solid black;\r\n\tpadding: 10px;\r\n\tbackground-color: white;\r\n\tz-index: 14;\r\n\tfont-size: 12px;\r\n\r\n\t.close{\r\n\t\tcursor: pointer;\r\n\t}\r\n\r\n\t.toolbox{\r\n\t\t.fn_container{\r\n\t\t\t.fn_name{\r\n\t\t\t\t\r\n\t\t\t\tcursor: pointer;\r\n\t\t\t\t\r\n\t\t\t\t&:hover{\r\n\t\t\t\t\tbackground-color: gray;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/procedure-editor/procedure-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcedureEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_classes_code_CodeModule__ = __webpack_require__("../../../../../src/app/base-classes/code/CodeModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm2015/material.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let ProcedureEditorComponent = class ProcedureEditorComponent extends __WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__["a" /* Viewer */] {
    constructor(injector, dialog) {
        super(injector, "procedure-editor");
        this.dialog = dialog;
        this.isVisible = false;
        this._procedureArr = [];
        this._showToolbox = false;
        this._moduleList = [];
        this.procedureTypes = [
            __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Data,
            __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Action,
            __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].ForLoopControl,
            __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].IfElseControl
        ];
        this._tree = [];
        this._tree_options = {
            allowDrag: function (element) {
                if (element.data.name == __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].IfControl || element.data.name == __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].ElseControl) {
                    return false;
                }
                else {
                    return true;
                }
            },
            allowDrop: (element, { parent, index }) => {
                // return true / false based on element, to.parent, to.index. e.g.
                return (parent.data.name !== this.getString(__WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].IfElseControl) &&
                    parent.data.name !== this.getString(__WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Data) && parent.data.name !== this.getString(__WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Action)); /*(parent.data.name == this.getString(ProcedureTypes.IfControl)
                || parent.data.name == this.getString(ProcedureTypes.ElseControl
                || parent.data.name == this.getString(ProcedureTypes.ForLoopControl));*/
            }
        };
        this._moduleList = [];
        let modules = this.flowchartService.getModules();
        for (let mod = 0; mod < modules.length; mod++) {
            let user_module = modules[mod];
            this._moduleList = this._moduleList.concat(__WEBPACK_IMPORTED_MODULE_3__base_classes_code_CodeModule__["b" /* ModuleUtils */].getFunctions(user_module));
        }
    }
    reset() {
        this._procedureArr = [];
        this._node = undefined;
        this._tree = [];
    }
    update() {
        this._node = this.flowchartService.getSelectedNode();
        this._procedureArr = this._node.getProcedure();
        this.updateProcedureTree();
        this.isVisible = true;
    }
    getImageForType(type) {
        let value = "";
        if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Data) {
            value = "assignment";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Action) {
            value = "function";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].IfElseControl) {
            value = "if-else";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].ForLoopControl) {
            value = "for-loop";
        }
        return value;
    }
    getString(type) {
        return type.toString();
    }
    //
    //
    //
    onMoveNode($event) {
        // get previous parent
        let moved_procedure = $event.node.model;
        let to_procedure = $event.to.parent.model;
        let moved_position = $event.to.index;
        let parent = moved_procedure.getParent();
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
    }
    updateProcedureTree() {
        // converts the procedure into a tree item
        let getTreeItem = function (prod, index) {
            let procedure_type = prod.getType();
            let treeItem = {
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
                treeItem["leftExpression"] = prod.getLeftComponent().expression;
                treeItem["rightExpression"] = prod.getRightComponent().expression;
                treeItem["params"] = prod.getRightComponent().params;
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
    }
    //
    //
    //
    addActionProcedure(fn) {
        let prod_data = { result: "__", module: fn.module, function: fn.name, params: fn.params };
        let prod = __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["a" /* ProcedureFactory */].getProcedure(__WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Action, prod_data);
        this._node.addProcedure(prod);
        this.flowchartService.update();
    }
    addProcedure($event, type) {
        $event.stopPropagation();
        if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Data) {
            let default_variable_name = "var" + this._procedureArr.length;
            let prod_data = { result: default_variable_name, value: "undefined" };
            let prod = __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["a" /* ProcedureFactory */].getProcedure(__WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Data, prod_data);
            this._node.addProcedure(prod);
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].IfElseControl) {
            let prod_data = { if_condition: "undefined", el_condition: "undefined" };
            let prod = __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["a" /* ProcedureFactory */].getProcedure(__WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].IfElseControl, prod_data);
            this._node.addProcedure(prod);
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].ForLoopControl) {
            let prod_data = { variable: "i", array_name: "[]" };
            let prod = __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["a" /* ProcedureFactory */].getProcedure(__WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].ForLoopControl, prod_data);
            this._node.addProcedure(prod);
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Action) {
            // todo: Add dialog
            this._showToolbox = true;
        }
        else {
            throw Error("Procedure Type invalid");
        }
        this.flowchartService.update();
    }
    updateProcedure($event, prod, property) {
        let procedure = prod.data.model;
        if (property == "left") {
            let comp = procedure.getLeftComponent();
            comp.expression = prod.data.leftExpression;
            procedure.setLeftComponent(comp);
        }
        else if (property == "right") {
            let comp = procedure.getRightComponent();
            comp.expression = prod.data.rightExpression;
            comp.params = prod.data.params;
            procedure.setRightComponent(comp);
        }
        else {
            throw Error("Invalid procedure update");
        }
        this.flowchartService.update();
    }
    // todo:
    disableProcedure(prod) {
        prod.disable();
        this.update();
    }
    deleteProcedure(prod) {
        // remove child from parent, if any
        this._node.deleteProcedure(prod);
        this.flowchartService.update();
    }
};
ProcedureEditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-procedure-editor',
        template: __webpack_require__("../../../../../src/app/ui-components/editors/procedure-editor/procedure-editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/editors/procedure-editor/procedure-editor.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialog */]])
], ProcedureEditorComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/code-viewer/code-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer\">\n\t<div class=\"ace-editor\" ace-editor [(text)]=\"code\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/code-viewer/code-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .default {\n    font-size: 14px;\n    color: gray;\n    line-height: 150px;\n    text-align: center; }\n\n.viewer {\n  position: absolute;\n  height: 100%;\n  width: 100%; }\n  .viewer .ace-editor {\n    height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/code-viewer/code-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_beautify__ = __webpack_require__("../../../../js-beautify/js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_beautify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_js_beautify__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let CodeViewerComponent = class CodeViewerComponent extends __WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__["a" /* Viewer */] {
    constructor(injector) {
        super(injector, "Code viewer", "Displays the code associated with flowchart");
        this.panelOpenState = false;
    }
    update() {
        this.code = __WEBPACK_IMPORTED_MODULE_2_js_beautify__["js_beautify"](this.flowchartService.getCode());
    }
    reset() {
        this.code = "";
    }
};
CodeViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-code-viewer',
        template: __webpack_require__("../../../../../src/app/ui-components/viewers/code-viewer/code-viewer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/viewers/code-viewer/code-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
], CodeViewerComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/geometry-viewer/geometry-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer\">\r\n\t<div class=\"container\">\r\n\t\t<ul>\r\n\t    \t<li *ngFor=\"let node of _nodes\">\r\n\t    \t\t<!-- {{  getGeometry(node) }} -->\r\n\t    \t\t{{node.getName()}}\r\n\t    \t\t<ul>\r\n\t    \t\t\t<li  *ngFor=\"let output of node.getOutputs()\">\r\n\t    \t\t\t\t{{ output.getValue() }}\r\n\t    \t\t\t</li>\r\n\t    \t\t</ul>\r\n\t   \t\t</li>\r\n\t  \t</ul>\r\n\t\t<div id=\"app-geometry-viewer\"></div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/geometry-viewer/geometry-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .default {\n    font-size: 14px;\n    color: gray;\n    line-height: 150px;\n    text-align: center; }\n\n.viewer {\n  overflow: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/geometry-viewer/geometry-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeometryViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("../../../../three/build/three.module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let GeometryViewerComponent = class GeometryViewerComponent extends __WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__["a" /* Viewer */] {
    constructor(injector) {
        super(injector, "Geometry Viewer", "Displayed geometry with each node;");
        this.isVisible = false;
        this.scene = new __WEBPACK_IMPORTED_MODULE_2_three__["d" /* Scene */]();
    }
    reset() {
        this._nodes = [];
        let scene = this.scene;
        while (scene.children.length > 0) {
            scene.remove(scene.children[0]);
        }
    }
    ngOnInit() {
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
    }
    update() {
        this._nodes = this.flowchartService.getNodes();
        this.isVisible = this._nodes.length > 0 ? true : false;
    }
    getGeometry(node) {
        let valueTypes = [];
        let valueObject = node.getResult();
        for (let key in valueObject) {
            valueTypes.push(valueObject[key]);
        }
        return valueTypes;
    }
};
GeometryViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-geometry-viewer',
        template: __webpack_require__("../../../../../src/app/ui-components/viewers/geometry-viewer/geometry-viewer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/viewers/geometry-viewer/geometry-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
], GeometryViewerComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/module-viewer/module-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel class='viewer'>\n  \t<mat-expansion-panel-header>\n\t    <mat-panel-title class='header'>\n\t      <div class='header'>Modules</div>\n\t    </mat-panel-title>\n  \t</mat-expansion-panel-header>\n\t<div class='container'>\n\t\t<div *ngFor=\"let fn of functions\">\n\t\t\t<div class='function'>{{fn}}</div>\n\t\t</div>\n\t</div>\n</mat-expansion-panel>"

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/module-viewer/module-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .default {\n    font-size: 14px;\n    color: gray;\n    line-height: 150px;\n    text-align: center; }\n\n.viewer .function {\n  border-bottom: 1px solid gray;\n  padding: 5px;\n  margin: 0px 5px 0px 5px; }\n  .viewer .function:hover {\n    background-color: #BDBABA;\n    cursor: move; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/module-viewer/module-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
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


let ModuleViewerComponent = class ModuleViewerComponent {
    constructor(injector) {
        this.functions = [];
        this.module_service = injector.get(__WEBPACK_IMPORTED_MODULE_1__global_services_module_service__["a" /* ModuleService */]);
        let modules = this.module_service.getModule("gis");
        let fn_names = Object.keys(Object.getPrototypeOf(modules)).filter(function (t) { return (t != "constructor"); });
        this.functions = this.functions.concat(fn_names);
    }
    ;
};
ModuleViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-module-viewer',
        template: __webpack_require__("../../../../../src/app/ui-components/viewers/module-viewer/module-viewer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/viewers/module-viewer/module-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
], ModuleViewerComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/parameter-viewer/parameter-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer\">\r\n\r\n\t<div class=\"default\" *ngIf='_inputs == undefined || _inputs.length == 0'>\r\n\t\tThis node has no inputs\r\n\t</div>\r\n\t\r\n\t<div class=\"container\">\r\n\r\n\t\t<div class='paramater-container' *ngFor=\"let inp of _inputs\">\r\n\r\n\t\t\t<div class=\"info\">\r\n\t\t\t\t<div class='param'>\r\n\t\t\t\t\t<span class='label'>Name</span>\r\n\t\t\t\t\t<span class='content'>{{ inp.getName() }}</span>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class='param'>\r\n\t\t\t\t\t<span class='label'>Connected</span>\r\n\t\t\t\t\t<span class='content'>{{ inp.isConnected() }}</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\r\n\r\n\t\t\t<div class=\"value\">\r\n\t\t\t\t<form  class='content'>\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t    <input  matInput \r\n\t\t\t\t    placeholder=\"Value\" value=\"{{ getValue(inp) }}\"\r\n\t\t\t\t    (change)=\"updateComputedValue($event, inp)\"/>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<!-- todo: disable if port is connected -->\r\n\t\t\t<!-- ui options based on type -->\r\n\t\t\t<!-- todo: -->\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/parameter-viewer/parameter-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .default {\n    font-size: 14px;\n    color: gray;\n    line-height: 150px;\n    text-align: center; }\n\n.viewer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  /* \t.input{\r\n\tpadding: 0px 15px;\r\n\tborder-bottom: 1px solid gray;\r\n\r\n\t.row{\r\n\t\twidth: 100%; \r\n\r\n\t\t.label{\r\n\t\t\tdisplay: inline-block;\r\n\t\t\ttext-transform: uppercase;\r\n\t\t\tfont-size: 10px; \r\n\t\t\tcolor: gray; \r\n\t\t\twidth: 10%; \r\n\t\t\tmin-width: 50px;\r\n\t\t}\r\n\r\n\t\t.content{\r\n\t\t\twidth: 90%;\r\n\t\t\tmin-width: 50px;\r\n\r\n\r\n\t\t\t&.undefined{\r\n\t\t\t\tborder-bottom: 1px dashed blue;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .viewer .container .paramater-container {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      font-size: 14px;\n      line-height: 18px;\n      padding: 5px 0px 0px 0px;\n      margin: 15px;\n      background-color: #E1DDCE;\n      border-top: 1px dashed gray;\n      border-bottom: 1px dashed gray; }\n      .viewer .container .paramater-container .param {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        margin: 5px 0px; }\n        .viewer .container .paramater-container .param .label {\n          width: 80px;\n          text-transform: uppercase;\n          font-size: 10px;\n          color: #222; }\n        .viewer .container .paramater-container .param .content {\n          -webkit-box-flex: 1;\n              -ms-flex-positive: 1;\n                  flex-grow: 1;\n          font-size: 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/parameter-viewer/parameter-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParameterViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ParameterViewerComponent = class ParameterViewerComponent extends __WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__["a" /* Viewer */] {
    constructor(injector) {
        super(injector, "parameter-viewer");
        this.isVisible = false;
    }
    ngOnInit() {
    }
    reset() {
        this._node = undefined;
        this._inputs = [];
    }
    addInput() {
        this._node.addInput();
        this.flowchartService.update();
    }
    updateInputName($event, input) {
        let name = $event.srcElement.innerText;
        input.setName(name);
        // put a timeout on this update or something similar to solve jumpiness
        this.flowchartService.update();
    }
    updateInputType(type) {
        alert(type);
    }
    updateComputedValue($event, input) {
        let value = $event.srcElement.innerText;
        if (value.trim().length > 0) {
            input.setComputedValue(value);
            // put a timeout on this update or something similar to solve jumpiness
            this.flowchartService.update();
        }
    }
    getValue(port) {
        if (port.isConnected()) {
            let address = port.getValue().port;
            let otp = this.flowchartService.getFlowchart().getNodeByIndex(address[0]).getOutputByIndex(address[1]);
            return otp.getValue();
        }
        else {
            return (port.getValue() || "undefined");
        }
    }
    //
    //	this update runs when there is a message from other viewers that something changed; 
    //  beware of updating flowchart here - it will go into an unending loop :/
    //
    update() {
        this._node = this.flowchartService.getSelectedNode();
        this._inputs = this._node.getInputs();
        if (this._node != undefined)
            this.isVisible = true;
        else
            this.isVisible = false;
    }
};
ParameterViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-parameter-viewer',
        template: __webpack_require__("../../../../../src/app/ui-components/viewers/parameter-viewer/parameter-viewer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/viewers/parameter-viewer/parameter-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
], ParameterViewerComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/viewer-container/viewer-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer-container\">             \n\t<mat-button-toggle-group class=\"viewer-toggle\" #group=\"matButtonToggleGroup\">\n\t\t<mat-button-toggle value=\"1\">\n\t\t  <mat-icon>3d_rotation</mat-icon>\n\t\t</mat-button-toggle>\n\t\t<mat-button-toggle value=\"2\">\n\t\t  <mat-icon>code</mat-icon>\n\t\t</mat-button-toggle>\n\t\t<mat-button-toggle value=\"3\" disabled>\n\t\t  <mat-icon>text_format</mat-icon>\n\t\t</mat-button-toggle>\n\t\t<mat-button-toggle value=\"4\" disabled>\n\t\t  <mat-icon>info_outline</mat-icon>\n\t\t</mat-button-toggle>\n\t</mat-button-toggle-group>\n\n\t<app-geometry-viewer *ngIf=\"group.value == 1 || group.value == undefined\"></app-geometry-viewer>\n\t<app-code-viewer *ngIf=\"group.value == 2\"></app-code-viewer>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/viewer-container/viewer-container.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".viewer-toggle {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 20; }\n\n.viewer-container {\n  position: relative;\n  height: 100%;\n  padding: 0px;\n  margin: 0px;\n  overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/viewer-container/viewer-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ViewerContainerComponent = class ViewerContainerComponent {
    constructor() { }
    ngOnInit() {
    }
};
ViewerContainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-viewer-container',
        template: __webpack_require__("../../../../../src/app/ui-components/viewers/viewer-container/viewer-container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/viewers/viewer-container/viewer-container.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ViewerContainerComponent);



/***/ }),

/***/ "../../../../../src/assets/img/plus.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAABkZGTNzc0PDw+bm5vx8fGUlJRXV1fq6urU1NQSEhL5+flxcXGmpqagoKC1tbV+fn5ra2ssLCyLi4tCQkIhISEyMjLGxsbc3NxHR0d7e3vi4uJfX19QUFAYGBi6urpAbQeBAAACd0lEQVR4nO3di07iUBSF4bZoEUVquVYHHN7/KWecSzIziUPXbsJeh/zfC7D+oECkp1YVAAAAAAAAAADAL7P5+vTwiVOzHdrsgROt9vUFd/0ye+QEx8Olvh/O2TvDZqP6vltlLw16HRtYauJyM76wfsxeG7EVAutd9tqApRJY10P2Xt2LVrjO3qtrtMI6e6/u4lv9PxbZg2VPYmF5r6Z3YuEse7CMQgr9UUihPwop9Echhf4opNAfhRT6o5BCfxRS6I9CCv1RSKE/Cin0RyGF/iik0B+FFPqjkEJ/FFLoj8LyC8u5zrudrbr7APU57AOP0nXD5Ev8h5M49Op2qynnFxcP2fvHOMR/hR+zt48VPdwnnB/MFktsv2bvFoR+UJ+zVys2gZebgn5GP3R6YZ+9WRM4hKqerssmv/WLh1zzvaiFxbwX/navFo6+W4CLOYUU2qOQQn8UUuiPQgr9UUihPwop9Echhf4opNCfXHj7f/Nusxer9K+BsxerXuXCor4Cruu9/iXwkL1Zs5UDq+ote7Qkcm1UUV/kxy43Ee8EnOk5FFhVq+zhY0UDi3m1kT/O/GG5VS8Tvb7mOCHwo3HYrpsIdeh75EHW/TnvHtLlXCMcdfvXeVNIoT8KKfRHIYX+KKTQH4UU+qOQQn8UUuiPQgr9UUihPwop9Echhf4opNAfhRT6o5BCfxRS6I9CCv1RWH7h7V/nrd5ZcuKZggTvYmH2Xl2nBb5l79UttEL55pwG1krgPntthPQknrPXhgjnF79kbw0afX6xyV4aNvJZ7LN3TrAY8a8VNuV9XvvLcb77z93rnw594X0/tZ/KXgYAAAAAAIBr+QaTTEgB/LfgfwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../../../../src/assets/modules/AllModules.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SimpleMath__ = __webpack_require__("../../../../../src/assets/modules/SimpleMath.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleMath", function() { return __WEBPACK_IMPORTED_MODULE_0__SimpleMath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ComplexMath__ = __webpack_require__("../../../../../src/assets/modules/ComplexMath.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ComplexMath", function() { return __WEBPACK_IMPORTED_MODULE_1__ComplexMath__["a"]; });




/***/ }),

/***/ "../../../../../src/assets/modules/ComplexMath.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ComplexMath {
    static square(a) {
        return a * a;
    }
    static cube(a) {
        return a * a * a;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ComplexMath;

ComplexMath._name = "ComplexMath";
ComplexMath._author = "AKM";
ComplexMath._version = 1;


/***/ }),

/***/ "../../../../../src/assets/modules/SimpleMath.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class SimpleMath {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SimpleMath;

SimpleMath._name = "SimpleMath";
SimpleMath._author = "AKM";
SimpleMath._version = 1;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map