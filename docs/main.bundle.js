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

module.exports = "<div id=\"app-container\" *ngIf=\"supported\">\r\n\r\n  <!-- <app-menu></app-menu> -->\r\n <!--  <button id=\"setting\" mat-button color=\"secondary\" \r\n   (click)=\"showMenu = !showMenu\">\r\n   <mat-icon>settings</mat-icon>\r\n </button> -->\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"wrapper\">\r\n\r\n      <split  direction=\"horizontal\" \r\n              gutterColor=\"#8AA8C0\"\r\n              [gutterSize]=\"layout.gutter\" \r\n              [useTransition]=\"layout.useTransition\">\r\n\r\n            <!-- main pane -->\r\n            <split-area \r\n              [size]=\"layout.size.main\" order=\"1\">\r\n              <app-panel panel_id=\"main\"></app-panel>\r\n            </split-area>\r\n\r\n            <!-- secondary split pane -->\r\n            <split-area \r\n              [size]=\"layout.size.side\"  order=\"2\">\r\n\r\n                <split  direction=\"vertical\"\r\n                        gutterColor=\"#8AA8C0\"\r\n                        [gutterSize]=\"layout.gutter\" \r\n                        [useTransition]=\"layout.useTransition\">\r\n\r\n                    <split-area [size]=\"layout.size.top\" order=\"1\">\r\n                      <app-panel panel_id=\"top\"></app-panel>\r\n                    </split-area>\r\n\r\n                    <split-area [size]=\"layout.size.middle\" order=\"2\">\r\n                      <app-panel panel_id=\"middle\"></app-panel>\r\n                    </split-area>\r\n\r\n                    <!-- fixed -->\r\n                    <split-area [size]=\"layout.size.bottom\" order=\"3\">\r\n                      <app-panel panel_id=\"bottom\"></app-panel>\r\n                    </split-area>\r\n\r\n                </split>\r\n\r\n            </split-area>\r\n            \r\n      </split>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n#app-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  padding: 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  /* Webkit */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* IE 10  */\n  /* Currently not supported in Opera but will be soon */\n  -o-user-select: none;\n  user-select: none; }\n  #app-container #setting {\n    position: absolute;\n    left: 30px;\n    bottom: 30px; }\n  #app-container .container {\n    position: relative;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    background-color: white; }\n    #app-container .container .wrapper {\n      position: absolute;\n      width: 100%;\n      height: 100%; }\n      #app-container .container .wrapper .split {\n        height: 100%;\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1; }\n      #app-container .container .wrapper .split-area {\n        overflow: hidden; }\n        #app-container .container .wrapper .split-area .view-wrapper {\n          position: absolute;\n          height: 100%;\n          width: 100%; }\n", ""]);

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
        this.supported = false;
        let browser = this.checkBrowser();
        if (browser == "Chrome") {
            this.layout = layoutService.getAssets();
            this.supported = true;
        }
        else {
            alert("Oops... You seem to be using a browser not supported by Mobius. Please use Chrome.");
            this.supported = false;
        }
    }
    checkBrowser() {
        let brw = "";
        if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
            brw = 'Opera';
        }
        else if (navigator.userAgent.indexOf("Chrome") != -1) {
            brw = 'Chrome';
        }
        else if (navigator.userAgent.indexOf("Safari") != -1) {
            brw = 'Safari';
        }
        else if (navigator.userAgent.indexOf("Firefox") != -1) {
            brw = 'Firefox';
        }
        else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document["documentMode"] == true)) {
            brw = 'IE';
        }
        else if (window.navigator.userAgent.indexOf("Edge") > -1) {
            brw = 'Edge';
        }
        else {
            brw = 'unknown';
        }
        return brw;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ui_components_editors_parameter_editor_parameter_settings_dialog_component__ = __webpack_require__("../../../../../src/app/ui-components/editors/parameter-editor/parameter-settings-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ui_components_editors_flowchart_viewer_flowchart_viewer_component__ = __webpack_require__("../../../../../src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ui_components_viewers_code_viewer_code_viewer_component__ = __webpack_require__("../../../../../src/app/ui-components/viewers/code-viewer/code-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ui_components_viewers_geometry_viewer_geometry_viewer_component__ = __webpack_require__("../../../../../src/app/ui-components/viewers/geometry-viewer/geometry-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ui_components_viewers_module_viewer_module_viewer_component__ = __webpack_require__("../../../../../src/app/ui-components/viewers/module-viewer/module-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ui_components_viewers_parameter_viewer_parameter_viewer_component__ = __webpack_require__("../../../../../src/app/ui-components/viewers/parameter-viewer/parameter-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ui_components_controls_modulebox_modulebox_component__ = __webpack_require__("../../../../../src/app/ui-components/controls/modulebox/modulebox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ui_components_editors_editor_editor_component__ = __webpack_require__("../../../../../src/app/ui-components/editors/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ui_components_viewers_viewer_container_viewer_container_component__ = __webpack_require__("../../../../../src/app/ui-components/viewers/viewer-container/viewer-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ui_components_viewers_text_viewer_text_viewer_component__ = __webpack_require__("../../../../../src/app/ui-components/viewers/text-viewer/text-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ui_components_viewers_node_library_node_library_component__ = __webpack_require__("../../../../../src/app/ui-components/viewers/node-library/node-library.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ui_components_layout_panel_panel_component__ = __webpack_require__("../../../../../src/app/ui-components/layout/panel/panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ui_components_console_console_component__ = __webpack_require__("../../../../../src/app/ui-components/console/console.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ui_components_help_info_viewer_info_viewer_component__ = __webpack_require__("../../../../../src/app/ui-components/help/info-viewer/info-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ui_components_help_help_viewer_help_viewer_component__ = __webpack_require__("../../../../../src/app/ui-components/help/help-viewer/help-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ui_components_help_info_viewer_help_template__ = __webpack_require__("../../../../../src/app/ui-components/help/info-viewer/help.template.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__gs_viewer_gs_viewer_module__ = __webpack_require__("../../../../../src/app/gs-viewer/gs-viewer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__global_services_console_service__ = __webpack_require__("../../../../../src/app/global-services/console.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ui_components_dialogs_file_load_dialog_component__ = __webpack_require__("../../../../../src/app/ui-components/dialogs/file-load-dialog.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_16__ui_components_editors_flowchart_viewer_flowchart_viewer_component__["a" /* FlowchartViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_17__ui_components_viewers_code_viewer_code_viewer_component__["a" /* CodeViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_18__ui_components_viewers_geometry_viewer_geometry_viewer_component__["a" /* GeometryViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_11__ui_components_controls_flowchart_controls_flowchart_controls_component__["a" /* FlowchartControlsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__ui_components_viewers_module_viewer_module_viewer_component__["a" /* ModuleViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_13__ui_components_editors_procedure_editor_procedure_editor_component__["a" /* ProcedureEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_20__ui_components_viewers_parameter_viewer_parameter_viewer_component__["a" /* ParameterViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_14__ui_components_editors_parameter_editor_parameter_editor_component__["a" /* ParameterEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_21__ui_components_controls_modulebox_modulebox_component__["a" /* ModuleboxComponent */],
            __WEBPACK_IMPORTED_MODULE_22__ui_components_editors_editor_editor_component__["a" /* EditorComponent */],
            __WEBPACK_IMPORTED_MODULE_23__ui_components_viewers_viewer_container_viewer_container_component__["a" /* ViewerContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_24__ui_components_viewers_text_viewer_text_viewer_component__["a" /* TextViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_25__ui_components_viewers_node_library_node_library_component__["a" /* NodeLibraryComponent */],
            __WEBPACK_IMPORTED_MODULE_26__ui_components_layout_panel_panel_component__["a" /* PanelComponent */],
            __WEBPACK_IMPORTED_MODULE_27__ui_components_console_console_component__["a" /* ConsoleComponent */],
            __WEBPACK_IMPORTED_MODULE_15__ui_components_editors_parameter_editor_parameter_settings_dialog_component__["a" /* ParameterSettingsDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_29__ui_components_help_help_viewer_help_viewer_component__["a" /* HelpViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_28__ui_components_help_info_viewer_info_viewer_component__["a" /* InfoViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_30__ui_components_help_info_viewer_help_template__["b" /* MobiusAbout */],
            __WEBPACK_IMPORTED_MODULE_30__ui_components_help_info_viewer_help_template__["a" /* HelpFundamentals */],
            __WEBPACK_IMPORTED_MODULE_33__ui_components_dialogs_file_load_dialog_component__["a" /* FileLoadDialogComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_21__ui_components_controls_modulebox_modulebox_component__["a" /* ModuleboxComponent */],
            __WEBPACK_IMPORTED_MODULE_15__ui_components_editors_parameter_editor_parameter_settings_dialog_component__["a" /* ParameterSettingsDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_33__ui_components_dialogs_file_load_dialog_component__["a" /* FileLoadDialogComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_ace_editor__["a" /* AceEditorModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular_split__["a" /* AngularSplitModule */],
            __WEBPACK_IMPORTED_MODULE_8_angular_tree_component__["a" /* TreeModule */],
            __WEBPACK_IMPORTED_MODULE_5__custom_angular_modules_CustomMaterialModule__["a" /* CustomMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_31__gs_viewer_gs_viewer_module__["a" /* GSViewer */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__global_services_flowchart_service__["a" /* FlowchartService */], __WEBPACK_IMPORTED_MODULE_10__global_services_layout_service__["a" /* LayoutService */], __WEBPACK_IMPORTED_MODULE_32__global_services_console_service__["a" /* ConsoleService */]],
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
    executeNode(node, params, Modules, print) {
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
    static createModule(name, fn_list) {
        let obj = {
            _name: name,
            _version: 0.1,
            _author: "Patrick"
        };
        for (let prop in fn_list) {
            obj[prop] = fn_list[prop];
        }
        return obj;
    }
    static getModuleFromSet(ModuleSet, name) {
        let imod;
        for (let key in ModuleSet) {
            let mod = ModuleSet[key];
            if (key !== name) {
                for (let prop in mod) {
                    let submod = mod[prop];
                    ;
                    if (typeof (submod) == "function") {
                        break;
                    }
                    if (prop == name && typeof (submod) == "object") {
                        imod = this.createModule(prop, submod);
                    }
                }
            }
            else {
                imod = this.createModule(key, mod);
            }
        }
        return imod;
    }
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
        if (mod == undefined)
            return undefined;
        return !!(this.getName(mod) && this.getVersion(mod) && this.getAuthor(mod));
    }
    static isCompatible(mod1, mod2) {
        if (mod1 == undefined || mod2 == undefined)
            return false;
        let _nameCheck = this.getName(mod1) == this.getName(mod2);
        let _versionCheck = this.getVersion(mod1) == this.getVersion(mod2);
        let _authorCheck = this.getAuthor(mod1) == this.getAuthor(mod2);
        return _nameCheck && _versionCheck && _authorCheck;
    }
    static getParams(func) {
        let fnStr = func.toString().replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, '');
        let result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).split(","); //.match( /([^\s,]+)/g);
        if (result === null || result[0] == "") {
            result = [];
        }
        let final_result = result.map(function (r) {
            r = r.trim();
            let r_value = r.split("=");
            if (r_value.length == 1) {
                return { type: r_value[0].trim(), value: r_value[0].trim() };
            }
            else {
                return { type: r_value[0].trim(), value: r_value[1].trim() };
            }
        });
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
            let function_name = fns[f];
            // todo: why!?
            let func = mod[function_name];
            if (mod.hasOwnProperty(function_name)) {
                let obj = { name: function_name,
                    module: module_name,
                    params: this.getParams(func),
                    def: func
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
    getFunctionCall(node, params, executionCode) {
        let fn_call = "";
        let param_values = [];
        let inputs = node.getInputs();
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].isConnected() == true) {
                let input_name = inputs[i].getName();
                if (params) {
                    if (executionCode == true) {
                        param_values.push("params." + input_name);
                    }
                    else {
                        let p = params[input_name];
                        param_values.push(p);
                    }
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
            // if procedure is disabled - skip
            if (procedure.isDisabled()) {
                continue;
            }
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
    static existsInNodeVars(nodeVars, name) {
        let var_name = name;
        // check if name might be an array index
        let reg = new RegExp(/(\w*)(\[\w*\])/g);
        let result = reg.exec(name);
        if (result) {
            var_name = result[1];
            console.log(var_name, nodeVars);
        }
        else {
            // do nothing
        }
        return (nodeVars.indexOf(var_name) > -1);
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
            if (CodeGeneratorJS.existsInNodeVars(nodeVars, procedure.getLeftComponent().expression) == false) {
                init = "let ";
                nodeVars.push(procedure.getLeftComponent().expression);
            }
            else {
                init = "";
            }
            code = init + procedure.getLeftComponent().expression + " = " + procedure.getRightComponent().expression + ";";
            if (procedure.printToConsole()) {
                code = code + "\n" + "print(" + "\'" + procedure.getLeftComponent().expression + ":\' +" + procedure.getLeftComponent().expression + ");\n";
            }
        }
        else if (prod_type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].Action) {
            let paramList = [];
            let params = procedure.getRightComponent().params;
            for (let p = 0; p < params.length; p++) {
                let param = params[p];
                if (param.value !== undefined) {
                    paramList.push(param.value);
                }
                else {
                    paramList.push(param.type);
                }
            }
            let right = procedure.getRightComponent();
            let init;
            if (CodeGeneratorJS.existsInNodeVars(nodeVars, procedure.getLeftComponent().expression) == false) {
                init = "let ";
                nodeVars.push(procedure.getLeftComponent().expression);
            }
            else {
                init = "";
            }
            code = init + procedure.getLeftComponent().expression
                + " = "
                + "Modules."
                + right.module.trim()
                + "." + right.fn_name + "( " + paramList.join(",") + " );\n";
            if (procedure.printToConsole()) {
                code = code + "\n" + "print(" + "\'" + procedure.getLeftComponent().expression + ":\' +" + procedure.getLeftComponent().expression + ");\n";
            }
        }
        else if (procedure.hasChildren) {
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
                statement = "for ( let " + procedure.getLeftComponent().expression + " of " + procedure.getRightComponent().expression + "){";
                if (CodeGeneratorJS.existsInNodeVars(nodeVars, procedure.getLeftComponent().expression) == false) {
                    nodeVars.push(procedure.getLeftComponent().expression);
                }
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
    executeNode(node, params, Modules, print) {
        //let gis = this._modules["gis"];
        let str = "(function(){ \
						" + this.getNodeCode(node) + "\n" +
            this.getFunctionCall(node, [], true) + "\n" +
            "return " + node.getName() + ";" + "})(); \
						";
        let result;
        try {
            result = eval(str);
        }
        catch (ex) {
            node.hasError();
            throw Error(ex);
        }
        return result; //result;// return result of the node
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CodeGeneratorJS;

;


/***/ }),

/***/ "../../../../../src/app/base-classes/flowchart/Flowchart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gs_json__ = __webpack_require__("../../../../gs-json/dist2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gs_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_gs_json__);
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
    setSavedTime(date) {
        this._lastSaved = date;
    }
    getSavedTime() {
        return this._lastSaved;
    }
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
        this.getNodeByIndex(outputAddress[0]).getOutputByIndex(outputAddress[1]).connect();
        this.getNodeByIndex(inputAddress[0]).getInputByIndex(inputAddress[1]).connect();
        // todo: check for valid input/output addresses and port address
        this._edges.push(edge);
        return this._edges.length;
    }
    ;
    disconnectEdgesWithNode(node_index) {
        let splicedEdges = [];
        let edges = this.getEdges();
        for (let e = 0; e < edges.length; e++) {
            let edge = edges[e];
            if (edge.output_address[0] == node_index) {
                let port = this.getNodeByIndex(edge.input_address[0]).getInputByIndex(edge.input_address[1]);
                port.disconnect();
                port.setComputedValue(undefined);
                splicedEdges.push(e);
            }
            else if (edge.input_address[0] == node_index) {
                let port = this.getNodeByIndex(edge.output_address[0]).getOutputByIndex(edge.output_address[1]);
                port.disconnect();
                port.setComputedValue(undefined);
                splicedEdges.push(e);
            }
        }
        return splicedEdges;
    }
    deleteNode(nodeIndex) {
        this.deleteEdges(this.disconnectEdgesWithNode(nodeIndex));
        // todo: check for valid node index
        this._nodes.splice(nodeIndex, 1);
        return this._nodes.length;
    }
    deleteEdge(edgeIndex) {
        // todo: check for valid edge index
        this._edges.splice(edgeIndex, 1);
        return this._edges.length;
    }
    deleteEdges(edgeArr) {
        this._edges = this._edges.filter(function (edge, index) {
            return (edgeArr.indexOf(index) == -1);
        });
    }
    disconnectEdgesWithPortIndex(nodeIndex, portIndex, type) {
        let splicedEdges = [];
        let edges = this.getEdges();
        for (let e = 0; e < edges.length; e++) {
            let edge = edges[e];
            // if type == "input"
            if (type == "input" && edge.input_address[0] == nodeIndex && edge.input_address[1] == portIndex) {
                let port = this.getNodeByIndex(edge.output_address[0]).getOutputByIndex(edge.output_address[1]);
                port.disconnect();
                port.setComputedValue(undefined);
                splicedEdges.push(e);
            }
            else if (type == "output" && edge.output_address[0] == nodeIndex && edge.output_address[1] == portIndex) {
                let port = this.getNodeByIndex(edge.input_address[0]).getInputByIndex(edge.input_address[1]);
                port.disconnect();
                port.setComputedValue(undefined);
                splicedEdges.push(e);
            }
        }
        return splicedEdges;
    }
    disconnectNode(nodeIndex) {
        let _node = this.getNodeByIndex(nodeIndex);
        this.deleteEdges(this.disconnectEdgesWithNode(nodeIndex));
        _node.getInputs().map(function (input) {
            input.disconnect();
            input.setComputedValue(undefined);
        });
        _node.getOutputs().map(function (output) {
            output.disconnect();
            output.setComputedValue(undefined);
        });
        // for(let i=0; i < _node.getInputs().length; i++){
        // 	this.disconnectPort("input", i, nodeIndex)
        // }	
        // for(let i=0; i < _node.getOutputs().length; i++){
        // 	this.disconnectPort("output", i, nodeIndex)
        // }
    }
    disconnectPort(type, portIndex, nodeIndex) {
        let edges = this._edges;
        /// disconnect the edges related to this port
        let edgesArr = this.disconnectEdgesWithPortIndex(nodeIndex, portIndex, type);
        this.deleteEdges(edgesArr);
        /// update indices of edges
        /// delete port
        for (let e = 0; e < edges.length; e++) {
            let input_node = edges[e].input_address[0];
            let input_port = edges[e].input_address[1];
            if (type == "input") {
                let input_node = edges[e].input_address[0];
                let input_port = edges[e].input_address[1];
                if (input_node == nodeIndex && input_port >= portIndex) {
                    edges[e].input_address[1] = edges[e].input_address[1] - 1;
                }
            }
            else if (type == "output") {
                let output_node = edges[e].output_address[0];
                let output_port = edges[e].output_address[1];
                if (output_node == nodeIndex && output_port >= portIndex) {
                    edges[e].output_address[1] = edges[e].output_address[1] - 1;
                }
            }
            else {
                console.warn("reached 358");
            }
        }
    }
    deletePort(type, portIndex, nodeIndex) {
        this.disconnectPort(type, portIndex, nodeIndex);
        let _node = this.getNodeByIndex(nodeIndex);
        if (type == "input") {
            _node.deleteInput(portIndex);
        }
        else if (type == "output") {
            _node.deleteOutput(portIndex);
        }
        else {
            throw Error("Unknown port type");
        }
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
    //	Returns an ordering of the node IDs in order or execution
    //
    getNodeOrder() {
        let n_map = [];
        n_map = this._nodes.map(function (node, index) {
            return { prevArr: [], nextArr: [], id: index };
        });
        for (let c = 0; c < this._edges.length; c++) {
            let edge = this._edges[c];
            let out_nodeIndex = edge.output_address[0];
            let in_nodeIndex = edge.input_address[0];
            if (n_map[out_nodeIndex].nextArr.indexOf(in_nodeIndex) == -1) {
                n_map[out_nodeIndex].nextArr.push(in_nodeIndex);
            }
            if (n_map[in_nodeIndex].prevArr.indexOf(out_nodeIndex) == -1) {
                n_map[in_nodeIndex].prevArr.push(out_nodeIndex);
            }
        }
        let sortO = n_map[0].prevArr.concat([n_map[0].id]).concat(n_map[0].nextArr);
        for (let i = 1; i < n_map.length; i++) {
            let o = n_map[i];
            if (sortO.indexOf(o.id) == -1) {
                sortO.push(o.id);
            }
            let el_pos = sortO.indexOf(o.id);
            if (o.prevArr.length == 0 && el_pos !== 0) {
                sortO.splice(el_pos, 1);
                sortO.unshift(o.id);
            }
            o.prevArr.map(function (r) {
                let index = sortO.indexOf(r);
                if (index == -1) {
                    sortO.splice(el_pos - 1, 1, r);
                }
                else {
                    if (index > el_pos) {
                        sortO.splice(index, 1);
                        sortO.splice(el_pos - 1, 1, r);
                    }
                    else {
                        // do nothing
                    }
                }
            });
        }
        return sortO;
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
            let outVal = outputPort.getValue();
            if (outVal && outVal.constructor.name == "Model") {
                let modelData = outVal.toJSON();
                let model = new __WEBPACK_IMPORTED_MODULE_0_gs_json__["Model"](JSON.parse(modelData));
                // todo: change in kernel
                //model["_kernel"]._objs = JSON.parse(JSON.stringify(outVal["_kernel"]._objs));
                //model["_kernel"]._points = JSON.parse(JSON.stringify(outVal["_kernel"]._points));
                // console.log( JSON.stringify(model["_kernel"]["_objs"]) );
                inputPort.setComputedValue(model);
            }
            // let value = outputPort.getValue();
            // if( value["_kernel"] && value["_id"] ){
            // 	console.log(value);
            // 	let obj: gs.Model = outputPort.getValue().getModel();
            // 	let objStr: string = obj.toJSON();
            // 	let entity = value.constructor;
            // 	let new_obj = new entity();
            // 	new_obj["_id"] = value["_id"];
            // 	let new_model = new gs.Model(JSON.parse(objStr));
            // 	inputPort.setComputedValue(new_obj);
            // }
            // else{
            // 	inputPort.setComputedValue(value);
            // }
            // create a new object
            //let entity = obj.constructor;
            // let kernelCons = obj["_kernel"].constructor;
            // let new_obj = new entity();
            // new_obj["_id"] = obj["_id"];
            // new_obj["_kernel"] = new kernelCons();
            // new_obj["_kernel"]["_model"]  = new kernelCons();
            // ["_attribs", "_groups", "_metadata", "_objs", "_points", "_topos_trees"].map(function(prop: string){
            // 	new_obj["_kernel"]["_model"][prop] = obj["_kernel"][prop];
            // })
            // console.log(new_obj);
        }
    }
    //
    //	executes the flowchart
    //
    execute(code_generator, modules, print) {
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
            if (node.hasExecuted() == true || node.isDisabled()) {
                continue;
            }
            node.execute(code_generator, modules, print);
            //console.log(node.getName(), node.getResult());
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
        for (let index = 0; index < nodes.length; index++) {
            let n_data = nodes[index];
            let node = new __WEBPACK_IMPORTED_MODULE_1__node_NodeModule__["a" /* GraphNode */](n_data["name"], n_data["type"]);
            node.update(n_data);
            console.log("updated node");
            fc.addNode(node);
        }
        // add edges
        for (let index in edges) {
            let e_data = edges[index];
            let in_node = e_data.input_address[0];
            let out_node = e_data.output_address[0];
            let valid_input = (in_node >= 0 && in_node < nodes.length);
            let valid_output = (out_node >= 0 && out_node < nodes.length);
            if (valid_input && valid_output) {
                fc.addEdge(e_data.output_address, e_data.input_address);
            }
            else {
            }
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
        this.inputPortCounter = 0;
        this.outputPortCounter = 0;
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
        this._type = type;
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
    saved() {
        this._type = this._id;
    }
    update(nodeData) {
        if (nodeData["lib"] == undefined) {
            // loading from file
            this._id = nodeData["_id"];
            this.position = nodeData["position"];
            this._name = nodeData["_name"];
        }
        else {
            // creating from library
            this.position = [0, 0];
        }
        // map direct properties
        this.portCounter = nodeData["portCounter"];
        this._isDisabled = nodeData["_isDisabled"];
        // add inputs
        let inputs = nodeData["_inputs"];
        for (let input_index in inputs) {
            let inp_data = inputs[input_index];
            let input = new __WEBPACK_IMPORTED_MODULE_2__port_PortModule__["a" /* InputPort */](inp_data["_name"]);
            input.update(inp_data, "inp");
            this._inputs.push(input);
        }
        // add outputs
        let outputs = nodeData["_outputs"];
        for (let output_index in outputs) {
            let output_data = outputs[output_index];
            let output = new __WEBPACK_IMPORTED_MODULE_2__port_PortModule__["c" /* OutputPort */](output_data["_name"]);
            output.update(output_data, "out");
            this._outputs.push(output);
        }
        // add procedure
        let procedureArr = nodeData["_procedure"];
        for (let prodIndex in procedureArr) {
            let procedure = __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["a" /* ProcedureFactory */].getProcedureFromData(procedureArr[prodIndex], undefined);
            this._procedure.push(procedure);
        }
    }
    removeType() {
        this._type = undefined;
    }
    //
    //
    //
    addInput(name) {
        let default_name = "in" + this.inputPortCounter;
        if (name !== undefined) {
            default_name = name;
        }
        let inp = new __WEBPACK_IMPORTED_MODULE_2__port_PortModule__["a" /* InputPort */](default_name);
        this._inputs.push(inp);
        this.portCounter++;
        this.inputPortCounter++;
        this.removeType();
        return this._inputs.length;
    }
    addOutput(name) {
        let default_name = "out" + this.outputPortCounter;
        if (name !== undefined) {
            default_name = name;
        }
        let oup = new __WEBPACK_IMPORTED_MODULE_2__port_PortModule__["c" /* OutputPort */](default_name);
        this._outputs.push(oup);
        this.portCounter++;
        this.outputPortCounter++;
        this.removeType();
        return this._outputs.length;
    }
    deleteInput(input_port_index) {
        this._inputs.splice(input_port_index, 1);
        this.removeType();
        //delete this._inputs[input_port_index];
        return this._inputs.length;
    }
    deleteOutput(output_port_index) {
        this._outputs.splice(output_port_index, 1);
        this.removeType();
        //delete this._outputs[output_port_index];
        return this._outputs.length;
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
        this.removeType();
        this._procedure.push(prod);
    }
    addProcedureAtPosition(prod, index) {
        this.removeType();
        this._procedure.splice(index, 0, prod);
    }
    deleteProcedure(prod) {
        this.removeType();
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
        this.removeType();
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
        this._outputs.map(function (output) {
            output.reset();
        });
        return (this._hasExecuted == false);
    }
    hasError() {
        this._hasError = true;
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
    execute(code_generator, modules, print) {
        let params = [];
        this.getInputs().map(function (i) { params[i.getName()] = i.getValue(); });
        // use code generator to execute code
        let result = code_generator.executeNode(this, params, modules, print);
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
    getVariableList() {
        let varList = [];
        //push undefined
        varList.push("undefined");
        //push names of inputs and outputs
        this._inputs.map(function (inp) {
            varList.push(inp.getName());
        });
        this._outputs.map(function (out) {
            varList.push(out.getName());
        });
        // push names of left components in procedure
        this._procedure.map(function (prod) {
            let type = prod.getType();
            if (type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].Data || type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].ForLoopControl ||
                type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].Action) {
                let var_name = prod.getLeftComponent().expression;
                if (var_name.length > 0) {
                    varList.push(var_name);
                }
                ;
            }
        });
        return varList;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__InputPortTypes__ = __webpack_require__("../../../../../src/app/base-classes/port/InputPortTypes.ts");


class InputPort extends __WEBPACK_IMPORTED_MODULE_0__Port__["a" /* Port */] {
    // input type 
    // slider
    // input
    // color
    // file
    constructor(name, type) {
        super(name);
        if (type !== undefined) {
            this._type = type.name;
            this.setDefaultValue(type.value);
        }
        else {
            this._type = __WEBPACK_IMPORTED_MODULE_1__InputPortTypes__["a" /* InputPortTypes */].Input;
        }
    }
    setOpts(opts) {
        this.opts = opts;
        //todo: check if options valid for type
    }
    getOpts() {
        return this.opts;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InputPort;



/***/ }),

/***/ "../../../../../src/app/base-classes/port/InputPortTypes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputPortTypes; });
var InputPortTypes;
(function (InputPortTypes) {
    InputPortTypes["Input"] = "Input";
    InputPortTypes["ColorPicker"] = "ColorPicker";
    InputPortTypes["Dropdown"] = "Dropdown";
    InputPortTypes["FilePicker"] = "Filepicker";
    InputPortTypes["Slider"] = "Slider";
})(InputPortTypes || (InputPortTypes = {}));


/***/ }),

/***/ "../../../../../src/app/base-classes/port/OutputPort.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Port__ = __webpack_require__("../../../../../src/app/base-classes/port/Port.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__OutputPortTypes__ = __webpack_require__("../../../../../src/app/base-classes/port/OutputPortTypes.ts");


class OutputPort extends __WEBPACK_IMPORTED_MODULE_0__Port__["a" /* Port */] {
    constructor(name, type) {
        super(name);
        if (type !== undefined) {
            this._type = type;
        }
        else {
            this._type = __WEBPACK_IMPORTED_MODULE_1__OutputPortTypes__["a" /* OutputPortTypes */].Text;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = OutputPort;



/***/ }),

/***/ "../../../../../src/app/base-classes/port/OutputPortTypes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutputPortTypes; });
var OutputPortTypes;
(function (OutputPortTypes) {
    OutputPortTypes[OutputPortTypes["Three"] = 0] = "Three";
    OutputPortTypes[OutputPortTypes["Code"] = 1] = "Code";
    OutputPortTypes[OutputPortTypes["Text"] = 2] = "Text";
    OutputPortTypes[OutputPortTypes["Console"] = 3] = "Console";
})(OutputPortTypes || (OutputPortTypes = {}));


/***/ }),

/***/ "../../../../../src/app/base-classes/port/Port.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_GUID__ = __webpack_require__("../../../../../src/app/base-classes/misc/GUID.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__InputPortTypes__ = __webpack_require__("../../../../../src/app/base-classes/port/InputPortTypes.ts");


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
        return this._type;
    }
    setType(type) {
        this._type = type;
    }
    setOpts(opts) {
    }
    getOpts() {
        throw Error("not defined");
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
    update(portData, type) {
        this._id = portData["_id"];
        this._type = portData["_type"];
        if (typeof (this._type) == "number" && type == "inp") {
            //this._type = (InputPortTypes)this._type; 
            this._type = Object.keys(__WEBPACK_IMPORTED_MODULE_1__InputPortTypes__["a" /* InputPortTypes */])[this._type];
        }
        else if (typeof (this._type) == "number" && type == "out") {
            //this._type = <OutputPortTypes>Object.keys(OutputPortTypes)[this._type]
        }
        this._selected = false;
        this._connected = false;
        this._disabled = portData["_disabled"];
        this._default = portData["_default"];
        this.opts = portData["opts"];
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
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__OutputPort__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__InputPortTypes__ = __webpack_require__("../../../../../src/app/base-classes/port/InputPortTypes.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__InputPortTypes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__OutputPortTypes__ = __webpack_require__("../../../../../src/app/base-classes/port/OutputPortTypes.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__OutputPortTypes__["a"]; });






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
        let right = { expression: data.module + /*"." + data.category +*/ "." + data.function,
            isAction: true,
            module: data.module,
            category: undefined,
            fn_name: data.function,
            params: data.params.map(function (p) { return { type: p.type, value: p.value }; })
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
            this["virtual"] = true;
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
        this._printToConsole = false;
        this.children = [];
        this._type = type;
        this._level = 0;
        this.hasChildren = hasChildren;
        this.hasChildren = this.hasChildren;
        this.children = this.children;
    }
    update(prodData, parent) {
        this._disabled = prodData._disabled;
        this._leftComponent = prodData._leftComponent;
        this._rightComponent = JSON.parse(JSON.stringify(prodData._rightComponent));
        this._parent = parent;
        this._level = prodData._level;
        this.hasChildren = prodData.hasChildren;
        this.children = [];
    }
    getLevel() {
        return this._level;
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
        if (this.children.length) {
            for (let i = 0; i < this.children.length; i++) {
                this.children[i].enable();
            }
        }
    }
    disable() {
        this._disabled = true;
        if (this.children.length) {
            for (let i = 0; i < this.children.length; i++) {
                this.children[i].disable();
            }
        }
    }
    printToConsole() {
        return this._printToConsole;
    }
    enablePrint() {
        this._printToConsole = true;
    }
    disablePrint() {
        this._printToConsole = false;
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
        console.log(parent["_level"]);
        if (parent && (parent["_level"] !== undefined)) {
            this._level = parent["_level"] + 1;
        }
        else {
            this._level = 0;
        }
        this._parent = parent;
    }
    getChildren() {
        if (this.hasChildren == false) {
            throw Error("This Procedure Type is not a container");
        }
        else {
            return this.children;
        }
    }
    addChild(child) {
        if (this.hasChildren) {
            this.children.push(child);
            child.setParent(this);
        }
        else {
            throw Error("Cannot add child to this procedure");
        }
    }
    addChildFromData(child) {
        if (this.hasChildren) {
            this.children.push(child);
            child.setParent(this);
        }
        else {
            throw Error("Cannot add child to this procedure");
        }
    }
    addChildAtPosition(child, index) {
        this.children.splice(index, 0, child);
        child.setParent(this);
    }
    deleteChild(procedure) {
        this.children = this.children.filter(function (child) {
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
        if (procedureData.children !== undefined) {
            for (let child = 0; child < procedureData.children.length; child++) {
                let childProd = procedureData.children[child];
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
            this.notify(message.text);
        });
    }
    ngDoCheck() {
    }
    //
    //	checks if the flowchart service has a flowchart and calls update function for the viewer
    //
    notify(message) {
        if (this.flowchartService.hasFlowchart() && this.flowchartService.getNodes().length > 0
            && this.flowchartService.getSelectedNode()) {
            this.update(message);
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
    update(message) {
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
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonToggleModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatSliderModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonToggleModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatSliderModule */]]
    })
], CustomMaterialModule);



/***/ }),

/***/ "../../../../../src/app/global-services/console.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm2015/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ConsoleService = class ConsoleService {
    constructor() {
        // 
        // message handling between components
        // 
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this._messages = [];
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
    addMessage(message) {
        let obj = {};
        obj["time"] = new Date();
        obj["message"] = message;
        this._messages.push(obj);
        this.sendMessage();
    }
    ;
    getContent() {
        return this._messages;
    }
    clearConsole() {
        this._messages = [];
        this.sendMessage();
    }
};
ConsoleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ConsoleService);



/***/ }),

/***/ "../../../../../src/app/global-services/flowchart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowchartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm2015/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_classes_flowchart_FlowchartModule__ = __webpack_require__("../../../../../src/app/base-classes/flowchart/FlowchartModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_classes_node_NodeModule__ = __webpack_require__("../../../../../src/app/base-classes/node/NodeModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_classes_code_CodeModule__ = __webpack_require__("../../../../../src/app/base-classes/code/CodeModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_circular_json__ = __webpack_require__("../../../../circular-json/build/circular-json.node.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_circular_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_circular_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_modules_AllModules__ = __webpack_require__("../../../../../src/assets/modules/AllModules.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__console_service__ = __webpack_require__("../../../../../src/app/global-services/console.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__layout_service__ = __webpack_require__("../../../../../src/app/global-services/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mobius_constants__ = __webpack_require__("../../../../../src/app/global-services/mobius.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__("../../../material/esm2015/material.js");
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
    constructor(consoleService, layoutService, dialog) {
        this.consoleService = consoleService;
        this.layoutService = layoutService;
        this.dialog = dialog;
        /*private _ffactory = new FlowchartFactory();
        private _fc = new FlowchartConverter();*/
        this._user = "AKM";
        this.code_generator = __WEBPACK_IMPORTED_MODULE_5__base_classes_code_CodeModule__["a" /* CodeFactory */].getCodeGenerator("js");
        this._savedNodes = [];
        // 
        // message handling between components
        // 
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.newFile();
        this.checkSavedNodes();
        //this.checkSavedFile();
        this.autoSave(60 * 5);
    }
    check() {
        return this._flowchart != undefined;
    }
    ;
    autoSave(time_in_seconds) {
        __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].interval(1000 * time_in_seconds).subscribe(x => {
            // console.log("saving file");
            this.saveFile(true);
        });
    }
    checkSavedFile() {
        this.openFileLoadDialog();
    }
    openFileLoadDialog() {
        let myStorage = window.localStorage;
        let property = __WEBPACK_IMPORTED_MODULE_10__mobius_constants__["a" /* MOBIUS */].PROPERTY.FLOWCHART;
        let storageString = myStorage.getItem(property);
        let message;
        if (storageString) {
            let fc = __WEBPACK_IMPORTED_MODULE_6_circular_json__["parse"](storageString)["flowchart"]["_lastSaved"];
            message = "Hey there! We found a file saved on " + (new Date(fc)).toDateString() + " at "
                + (new Date(fc)).toTimeString() + ". Would you like to reload?";
        }
        if (message) {
            if (confirm(message)) {
                this.loadFile(storageString);
            }
            else {
                this.newFile();
            }
        }
        else {
            alert("Oops... We couldn't find a file in memory.");
        }
        //let dialogRef = this.dialog.open(FileLoadDialogComponent, {
        //     height: '400px',
        //     width: '600px'
        // });
        // dialogRef.afterClosed().subscribe(result => {
        //     if(result == 'load'){
        //       console.log();
        //     }
        //     else if(result == 'new'){
        //       this.newFile()
        //     }
        //     else{
        //       this.newFile();
        //     }
        // });
    }
    checkSavedNodes() {
        this._savedNodes = [];
        let myStorage = window.localStorage;
        let property = __WEBPACK_IMPORTED_MODULE_10__mobius_constants__["a" /* MOBIUS */].PROPERTY.NODE;
        let storageString = myStorage.getItem(property);
        let nodesStorage = __WEBPACK_IMPORTED_MODULE_6_circular_json__["parse"](storageString == null ? __WEBPACK_IMPORTED_MODULE_6_circular_json__["stringify"]({ n: [] }) : storageString);
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
    update(message) {
        this.sendMessage(message || "Updated");
    }
    readTextFile(file) {
    }
    loadFile(fileString) {
        let _this = this;
        let jsonData;
        try {
            this.newFile();
            let data = __WEBPACK_IMPORTED_MODULE_6_circular_json__["parse"](fileString);
            // load the required modules
            /* _this.modules.loadModules(data["module"]); */
            // load the required code generator
            if (_this.code_generator.getLanguage() != data["language"] && data["language"] !== undefined) {
                _this.code_generator = __WEBPACK_IMPORTED_MODULE_5__base_classes_code_CodeModule__["a" /* CodeFactory */].getCodeGenerator(data["language"]);
            }
            // read the flowchart
            _this._flowchart = __WEBPACK_IMPORTED_MODULE_3__base_classes_flowchart_FlowchartModule__["b" /* FlowchartReader */].readFlowchartFromData(data["flowchart"]);
            _this.update();
            this.consoleService.addMessage("File loaded successfully");
            this.layoutService.showConsole();
        }
        catch (err) {
            this.newFile();
            this.consoleService.addMessage("Error loading file: " + err);
            this.layoutService.showConsole();
        }
    }
    loadModules(modules) {
        this._moduleSet = [];
        this._moduleMap = [];
        let moduleSet = this._moduleSet;
        let moduleMap = this._moduleMap;
        /*let mod: IModule = { name: "gs-modeling", version: "0.1", author: "AKM"};
        for(let prop in ModuleSet){
          mod[prop] = ModuleSet[prop];
        }
    
        moduleSet.push(mod);
        moduleMap["gs-modeling"] = mod;
    
        */
        modules.map(function (mod) {
            let name = __WEBPACK_IMPORTED_MODULE_5__base_classes_code_CodeModule__["b" /* ModuleUtils */].getName(mod);
            let version = __WEBPACK_IMPORTED_MODULE_5__base_classes_code_CodeModule__["b" /* ModuleUtils */].getVersion(mod);
            let author = __WEBPACK_IMPORTED_MODULE_5__base_classes_code_CodeModule__["b" /* ModuleUtils */].getAuthor(mod);
            // select the required module from the global module set - that has all the functions
            let modClass = __WEBPACK_IMPORTED_MODULE_7__assets_modules_AllModules__[name]; //ModuleUtils.getModuleFromSet(ModuleSet, name);
            if (__WEBPACK_IMPORTED_MODULE_5__base_classes_code_CodeModule__["b" /* ModuleUtils */].isCompatible(mod, modClass)) {
                moduleSet.push(modClass);
                moduleMap[name] = modClass;
            }
            else {
                console.warn(moduleMap[name] + " module not compatible. Please check version / author");
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
        this._flowchart = new __WEBPACK_IMPORTED_MODULE_3__base_classes_flowchart_FlowchartModule__["a" /* Flowchart */](this._user);
        this._selectedNode = 0;
        this._selectedPort = 0;
        this.update();
        this.loadModules([
            { _name: "String", _version: 0.1, _author: "Patrick" },
            { _name: "List", _version: 0.1, _author: "Patrick" },
            { _name: "Math", _version: 0.1, _author: "Patrick" },
            { _name: "Model", _version: 0.1, _author: "Patrick" },
            { _name: "Point", _version: 0.1, _author: "Patrick" },
            { _name: "Pline", _version: 0.1, _author: "Patrick" },
            { _name: "PMesh", _version: 0.1, _author: "Patrick" },
            { _name: "Circle", _version: 0.1, _author: "Patrick" },
            { _name: "Plane", _version: 0.1, _author: "Patrick" },
            { _name: "Split", _version: 0.1, _author: "Patrick" },
            { _name: "Intersect", _version: 0.1, _author: "Patrick" },
            { _name: "Calc", _version: 0.1, _author: "Patrick" },
            { _name: "Obj", _version: 0.1, _author: "Patrick" }
            //{_name: "Calc", _version: 0.1, _author: "Patrick"}
        ]);
        // print message to console
        this.consoleService.addMessage("New file created.");
        this.update();
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
        if (typeof node == "number") {
            node = this._flowchart.getNodeByIndex(node);
        }
        // todo: check if overwrite
        if (node.getType() !== undefined) {
            console.error("This node was already in the library and shouldn't have invoked this function.");
        }
        else {
            let message;
            let nav = navigator;
            let myStorage = window.localStorage;
            let property = __WEBPACK_IMPORTED_MODULE_10__mobius_constants__["a" /* MOBIUS */].PROPERTY.NODE;
            let storageString = myStorage.getItem(property);
            // initialize node storage by reading from localStorage or reading an empty array
            let nodesStorage = __WEBPACK_IMPORTED_MODULE_6_circular_json__["parse"](storageString == null ? __WEBPACK_IMPORTED_MODULE_6_circular_json__["stringify"]({ n: [] }) : storageString);
            // array of nodes
            let nodes = nodesStorage.n;
            // check is another node exists with same name
            for (let i = 0; i < nodes.length; i++) {
                let node_in_lib = nodes[i];
                if (node_in_lib["_name"] === node.getName()) {
                    message = "Node with this name already exists in the library. Either delete existing\
            node from the library or rename your node and try again.";
                    this.consoleService.addMessage(message);
                    this.layoutService.showConsole();
                    return;
                }
            }
            // no node with common name was found
            try {
                nodesStorage.n.push(node);
                myStorage.setItem(property, __WEBPACK_IMPORTED_MODULE_6_circular_json__["stringify"](nodesStorage));
                message = "Bravo! Node saved. Now you have " + (nodes.length) + " node(s) in the library!";
                node.saved();
                this.consoleService.addMessage(message);
                this.layoutService.showConsole();
                this.checkSavedNodes();
                this.update();
            }
            catch (ex) {
                this.consoleService.addMessage("Oops. Something went wrong while saving this node.\
                                        Post the error message to the dev team on our Slack channel.");
                this.consoleService.addMessage(ex);
                this.layoutService.showConsole();
            }
        }
    }
    clearLibrary() {
        let nav = navigator;
        let myStorage = window.localStorage;
        let property = "MOBIUS_NODES";
        let storageString = myStorage.removeItem(property);
        // print message to console
        this.consoleService.addMessage("Node Library was cleared");
        this.checkSavedNodes();
        this.update();
    }
    //
    //    add node
    //
    addNode(type) {
        let new_node = undefined;
        let n_data = undefined;
        if (type !== undefined) {
            n_data = this._savedNodes[type];
            let default_node_name = n_data["_name"] + (this._flowchart.getNodes().length + 1);
            new_node = new __WEBPACK_IMPORTED_MODULE_4__base_classes_node_NodeModule__["a" /* GraphNode */](default_node_name, n_data["_id"]);
            n_data["lib"] = true;
            new_node.update(n_data);
        }
        else {
            let default_node_name = "node" + (this._flowchart.getNodes().length + 1);
            new_node = new __WEBPACK_IMPORTED_MODULE_4__base_classes_node_NodeModule__["a" /* GraphNode */](default_node_name, undefined);
            new_node.addInput();
            new_node.addOutput();
        }
        this._flowchart.addNode(new_node);
        this.selectNode(this._flowchart.getNodes().length - 1);
        // print message to console
        this.consoleService.addMessage("New Node was added");
    }
    addEdge(outputAddress, inputAddress) {
        if (outputAddress[0] == inputAddress[0]) {
            return;
        }
        // dont remove previous edges for outputs
        let output = this._flowchart.getNodeByIndex(outputAddress[0]).getOutputByIndex(outputAddress[1]);
        // if (output.isConnected()){
        //   this._flowchart.deleteEdges(this._flowchart.disconnectEdgesWithPortIndex(outputAddress[0], outputAddress[1], "output"));
        // }
        // remove previous edges for inputs
        let input = this._flowchart.getNodeByIndex(inputAddress[0]).getInputByIndex(inputAddress[1]);
        if (input.isConnected()) {
            this._flowchart.deleteEdges(this._flowchart.disconnectEdgesWithPortIndex(inputAddress[0], inputAddress[1], "input"));
        }
        //
        this._flowchart.addEdge(outputAddress, inputAddress);
        input.setComputedValue({ port: outputAddress });
        output.connect();
        input.connect();
        // print message to console
        this.consoleService.addMessage("New Edge was added");
        this.update();
    }
    addProcedure(prod) {
        let node = this.getSelectedNode();
        let selectedProcedure = this._selectedProcedure;
        this.checkProcedure(prod);
        if (selectedProcedure) {
            if (selectedProcedure.hasChildren) {
                selectedProcedure.addChild(prod);
            }
            else {
                if (selectedProcedure.getParent() && !selectedProcedure.getParent()["virtual"]) {
                    let parent = selectedProcedure.getParent();
                    let index = 0;
                    let allChildren = parent.getChildren();
                    for (let i = 0; i < allChildren.length; i++) {
                        if (allChildren[i] === selectedProcedure) {
                            index = i;
                            break;
                        }
                    }
                    parent.addChildAtPosition(prod, index + 1);
                }
                else {
                    let parent = node;
                    let index = 0;
                    let allChildren = node.getProcedure();
                    for (let i = 0; i < allChildren.length; i++) {
                        if (allChildren[i] === selectedProcedure) {
                            index = i;
                            break;
                        }
                    }
                    node.addProcedureAtPosition(prod, index + 1);
                }
            }
        }
        else {
            node.addProcedure(prod);
        }
        if (prod.getType() == "IfElse") {
            this.selectProcedure(prod.getChildren()[0]);
        }
        else {
            this.selectProcedure(prod);
        }
        this.update("procedure");
    }
    checkProcedure(prod) {
        // validate procedure
        let codeString = prod.getCodeString(this.code_generator);
    }
    disconnectPort(type, portIndex, nodeIndex) {
        this._flowchart.disconnectPort(type, portIndex, nodeIndex);
    }
    disconnectNode(nodeIndex) {
        this._flowchart.disconnectNode(nodeIndex);
        this.update();
    }
    //
    //  update indices in edges on port deleted
    //
    deletePort(type, portIndex) {
        this._flowchart.deletePort(type, portIndex, this._selectedNode);
        this.update();
    }
    deleteNode(node_index) {
        this._selectedNode = undefined;
        this._selectedPort = undefined;
        this._selectedProcedure = undefined;
        //this.disconnectNode(node_index);
        this._flowchart.deleteNode(node_index);
        // print message to console
        this.consoleService.addMessage("Node was deleted");
        this.update();
    }
    deleteEdge(edgeIndex) {
        this._flowchart.deleteEdge(edgeIndex);
        // print message to console
        this.consoleService.addMessage("Edge was deleted");
    }
    //
    //  select node
    //
    selectNode(nodeIndex, portIndex) {
        this._selectedNode = nodeIndex;
        this._selectedPort = portIndex || 0;
        this.update();
    }
    selectProcedure(prod) {
        this._selectedProcedure = prod;
    }
    getSelectedNode() {
        if (this._selectedNode == undefined)
            return undefined;
        return this._flowchart.getNodeByIndex(this._selectedNode);
    }
    getSelectedNodeIndex() {
        return this._selectedNode;
    }
    getSelectedPort() {
        if (this._selectedNode == undefined) {
            return undefined;
        }
        // todo: where is this used?
        return this.getSelectedNode().getOutputByIndex(this._selectedPort);
    }
    getSelectedPortIndex() {
        return this._selectedPort;
    }
    getSelectedProcedure() {
        return this._selectedProcedure;
    }
    //
    //  
    //
    isSelected(node) {
        if (this._selectedNode == undefined) {
            return false;
        }
        return this._flowchart.getNodeByIndex(this._selectedNode).getId() == node.getId();
    }
    //
    //
    //
    printConsole(consoleStrings) {
        if (consoleStrings.length > 0) {
            let consoleHTML = "<div>\
          <div class='console-heading'>Console Messages:</div>";
            for (let i = 0; i < consoleStrings.length; i++) {
                let split = consoleStrings[i].split(":");
                consoleHTML += "<div class='console-line'>" +
                    "<span class='var-name'>Value of " + split[0] + ": " +
                    "<span class='var-value'>" + split[1] +
                    "</div>";
            }
            consoleHTML += "</div>";
            this.consoleService.addMessage(consoleHTML);
        }
    }
    // 
    //  run this flowchart
    //
    execute() {
        let consoleStrings = [];
        function printFunction(message) {
            consoleStrings.push(message);
        }
        try {
            this._flowchart.execute(this.code_generator, this._moduleMap, printFunction);
            this.printConsole(consoleStrings);
            this.consoleService.addMessage("Flowchart was executed.");
        }
        catch (ex) {
            this.printConsole(consoleStrings);
            let errorMessage = "<div class='error'>" + ex + "</div>";
            this.consoleService.addMessage(errorMessage);
            this.layoutService.showConsole();
        }
        this.update();
    }
    //
    // get execution code    
    //
    getCode() {
        return this.code_generator.getDisplayCode(this._flowchart);
    }
    saveFile(local) {
        let file = {};
        let fileString;
        this._flowchart.setSavedTime(new Date());
        file["language"] = "js";
        file["modules"] = [];
        file["flowchart"] = this._flowchart;
        fileString = __WEBPACK_IMPORTED_MODULE_6_circular_json__["stringify"](file);
        if (local == true) {
            // add file string to local storage
            let myStorage = window.localStorage;
            let property = __WEBPACK_IMPORTED_MODULE_10__mobius_constants__["a" /* MOBIUS */].PROPERTY.FLOWCHART;
            myStorage.setItem(property, fileString);
            this.consoleService.addMessage("Autosaved flowchart.");
        }
        else {
            this.downloadContent({
                type: 'text/plain;charset=utf-8',
                filename: 'Scene' + (new Date()).getTime() + ".mob",
                content: fileString
            });
            this.consoleService.addMessage("File saved successfully");
        }
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__console_service__["a" /* ConsoleService */],
        __WEBPACK_IMPORTED_MODULE_9__layout_service__["a" /* LayoutService */],
        __WEBPACK_IMPORTED_MODULE_11__angular_material__["e" /* MatDialog */]])
], FlowchartService);



/***/ }),

/***/ "../../../../../src/app/global-services/layout.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm2015/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_components_viewers_EViewer__ = __webpack_require__("../../../../../src/app/ui-components/viewers/EViewer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {OutputPortTypes} from '../../../base-classes/Port/PortModule';

let LayoutService = class LayoutService {
    constructor() {
        this.layout = {
            useTransition: true,
            gutter: 7,
            size: {
                main: 70,
                side: 30,
                top: 33,
                middle: 33,
                bottom: 33
            },
            content: {
                main: __WEBPACK_IMPORTED_MODULE_2__ui_components_viewers_EViewer__["a" /* EViewer */].Viewer,
                side: {
                    top: __WEBPACK_IMPORTED_MODULE_2__ui_components_viewers_EViewer__["a" /* EViewer */].Flowchart,
                    middle: __WEBPACK_IMPORTED_MODULE_2__ui_components_viewers_EViewer__["a" /* EViewer */].Editor,
                    bottom: __WEBPACK_IMPORTED_MODULE_2__ui_components_viewers_EViewer__["a" /* EViewer */].Parameter
                }
            }
        };
        this.viewContainerIndex = 5;
        this._url = "index";
        // handing subscriptions
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
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
    showHelp(fn) {
        this._url = "modules/" + "_" + fn.module.toLowerCase() + "_";
        this._fnObj = fn;
        this.sendMessage("Module: " + fn.module);
    }
    showConsole() {
        this.sendMessage("console");
    }
    getViewContainer() {
        return this.viewContainerIndex;
    }
    setViewContainer(index) {
        this.viewContainerIndex = index;
    }
    getUrl() {
        return this._url;
    }
    getObj() {
        return this._fnObj;
    }
    setObj() {
        this._url = undefined;
    }
    // other functionality
    getAssets() {
        return this.layout;
    }
    maximize(panel_id) {
        if (panel_id == "main") {
            return;
        }
        // get the panel_id passed and the corresponding component
        // interchange values
        let max_item = this.layout.content.side[panel_id];
        if (max_item) {
            let current_main = this.layout.content.main;
            this.layout.content.main = max_item;
            this.layout.content.side[panel_id] = current_main;
        }
        this.sendMessage("Layout Changed");
    }
    minimize(panel_id) {
        alert("To be implemented");
    }
    restore(panel_id) {
        alert("To be implemented");
    }
};
LayoutService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LayoutService);



/***/ }),

/***/ "../../../../../src/app/global-services/mobius.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const MOBIUS = {
    PROPERTY: {
        NODE: "MOBIUS_NODES",
        FLOWCHART: "MOBIUS_FC"
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = MOBIUS;



/***/ }),

/***/ "../../../../../src/app/global-services/module.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleService; });
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

let ModuleService = class ModuleService {
    constructor() {
        this._modules = [];
    }
};
ModuleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ModuleService);



/***/ }),

/***/ "../../../../../src/app/gs-viewer/data/DataSubscriber.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("../../../../../src/app/gs-viewer/data/data.service.ts");

class DataSubscriber {
    constructor(injector) {
        this.dataService = injector.get(__WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]);
        this._subscription = this.dataService.getMessage().subscribe(message => {
            this._message = message;
            this.notify(message.text);
        });
    }
    notify(message) {
        console.warn("Notify function not Implemented");
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DataSubscriber;



/***/ }),

/***/ "../../../../../src/app/gs-viewer/data/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm2015/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gs_json__ = __webpack_require__("../../../../gs-json/dist2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gs_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_gs_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three_orbit_controls__ = __webpack_require__("../../../../three-orbit-controls/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three_orbit_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_three_orbit_controls__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let DataService = class DataService {
    constructor() {
        // intializations
        // this only runs once
        this.selecting = [];
        this.grid = true;
        this.sprite = [];
        this.selectedFaces = [];
        this.scenechildren = [];
        this.textlabels = [];
        // ---- 
        // Subscription Handling
        // 
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        let default_width = 1510, default_height = 720;
        // scene
        let scene = new __WEBPACK_IMPORTED_MODULE_2_three__["Scene"]();
        scene.background = new __WEBPACK_IMPORTED_MODULE_2_three__["Color"](0xcccccc);
        // renderer
        let renderer = new __WEBPACK_IMPORTED_MODULE_2_three__["WebGLRenderer"]({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        // camera settings
        let aspect_ratio = this._width / this._height;
        let camera = new __WEBPACK_IMPORTED_MODULE_2_three__["PerspectiveCamera"](50, aspect_ratio, 0.01, 1000);
        camera.position.y = 10;
        camera.up.set(0, 0, 1);
        camera.lookAt(scene.position);
        camera.updateProjectionMatrix();
        // orbit controls
        let _OC = __WEBPACK_IMPORTED_MODULE_4_three_orbit_controls__(__WEBPACK_IMPORTED_MODULE_2_three__);
        let controls = new _OC(camera, renderer.domElement);
        controls.enableKeys = false;
        // default directional lighting
        let directional_light = new __WEBPACK_IMPORTED_MODULE_2_three__["DirectionalLight"](0xffffff, 0.5);
        directional_light.castShadow = false;
        directional_light.position.copy(camera.position);
        controls.addEventListener('change', function () {
            directional_light.position.copy(camera.position);
        });
        directional_light.target.position.set(0, 0, 0);
        scene.add(directional_light);
        // default ambient lighting
        let default_hue = 160;
        let default_saturation = 0;
        let default_lightness = 0.47;
        var hemi_light = new __WEBPACK_IMPORTED_MODULE_2_three__["HemisphereLight"](0xffffff, 0.5);
        hemi_light.color.setHSL(default_hue, default_saturation, default_saturation);
        scene.add(hemi_light);
        this._scene = scene;
        this._renderer = renderer;
        this._camera = camera;
        this._orbitControls = controls;
        this._hueValue = default_hue;
        this._saturationValue = default_saturation;
        this._lightnessValue = default_lightness;
        // add it to alight - what does alight do?
        this._alight = [];
        this._alight.push(hemi_light);
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
    //  Getter and Setting for gs-model
    //
    getGsModel() {
        return this._gsModel;
    }
    setGsModel(model) {
        this._gsModel = model;
        if (this._gsModel !== undefined) {
            this.updateModel();
        }
        else {
            // remove all children from the scene
            for (var i = 0; i < this._scene.children.length; i++) {
                if (this._scene.children[i].type === "Scene") {
                    this._scene.remove(this._scene.children[i]);
                }
            }
        }
        this.sendMessage("model_update");
    }
    updateModel() {
        var scene_and_maps = __WEBPACK_IMPORTED_MODULE_3_gs_json__["genThreeOptModelAndMaps"](this._gsModel);
        this.scenemaps = scene_and_maps;
    }
    getscememaps() {
        return this.scenemaps;
    }
    getScene(width, height) {
        if (width && height) {
            this._width = width;
            this._height = height;
        }
        return this._scene;
    }
    getRenderer() {
        this._camera.aspect = this._width / this._height;
        this._camera.updateProjectionMatrix();
        this._renderer.setSize(this._width, this._height);
        return this._renderer;
    }
    getCamera() {
        return this._camera;
    }
    getControls() {
        return this._orbitControls;
    }
    //
    //
    //
    getalight() {
        return this._alight;
    }
    addlightvalue(hue, saturation, lightness) {
        this._hueValue = hue;
        this._saturationValue = saturation;
        this._lightnessValue = lightness;
    }
    gethue(_hue) {
        this.hue = _hue;
    }
    getsaturation(_saturation) {
        this.saturation = _saturation;
    }
    getlightness(_lightness) {
        this.lightness = _lightness;
    }
    getopacity(_opacity) {
        this.opacity = _opacity;
    }
    addbackvalue(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
    getred(red) {
        this.red = red;
    }
    getgreen(green) {
        this.green = green;
    }
    getblue(blue) {
        this.blue = blue;
    }
    addGeom(Geom) {
        this._Geom = Geom;
    }
    getGeom() {
        return this._Geom;
    }
    addscenechange(scenechange) {
        this.scenechange = scenechange;
    }
    getscenechange() {
        return this.scenechange;
    }
    addINTERSECTEDColor(INTERSECTEDColor) {
        if (this.INTERSECTEDColor == null) {
            this.INTERSECTEDColor = INTERSECTEDColor;
        }
    }
    getINTERSECTEDColor() {
        return this.INTERSECTEDColor;
    }
    addselecting(selecting) {
        if (selecting[selecting.length - 1] == undefined) {
            this.selecting = [];
        }
        this.sendMessage();
    }
    pushselecting(selecting) {
        this.selecting.push(selecting);
        this.sendMessage();
    }
    spliceselecting(index, number) {
        this.selecting.splice(index, number);
        this.sendMessage();
    }
    getselecting() {
        return this.selecting;
    }
    addattrvertix(attributevertix) {
        this.attributevertix = attributevertix;
    }
    getattrvertix() {
        return this.attributevertix;
    }
    addgrid(grid) {
        this.grid = grid;
    }
    addaxis(axis) {
        this.axis = axis;
    }
    addshadow(shadow) {
        this.shadow = shadow;
    }
    addframe(frame) {
        this.frame = frame;
    }
    addselect(select) {
        this.selectcheck = select;
    }
    getSelectingIndex(uuid) {
        for (var i = 0; i < this.selecting.length; i++) {
            if (this.selecting[i].uuid == uuid) {
                return i;
            }
        }
        return -1;
    }
    getFaceIndex(name) {
        for (var i = 0; i < this.selectedFaces.length; i++) {
            if (this.selectedFaces[i].name == name) {
                return i;
            }
        }
        return -1;
    }
    addsprite(sprite) {
        this.sprite.push(sprite);
        this.sendMessage();
    }
    pushsprite(sprite) {
        this.sprite = sprite;
    }
    addscenechild(scenechildren) {
        this.scenechildren = scenechildren;
        this.sendMessage();
    }
    getscenechild() {
        this.sendMessage();
        return this.scenechildren;
    }
};
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DataService);



/***/ }),

/***/ "../../../../../src/app/gs-viewer/gs-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"appdiv\">\r\n\t<split direction=\"vertical\">\r\n\t\t<split-area [size]=\"90\" id=\"splitcontainer\">\r\n\t\t  <div style=\"height: 100%\">\r\n\t\t    <split direction=\"horizontal\">\r\n\t\t      <split-area [size]=\"0.5\" id=\"splitgroups\">\r\n\t\t        <app-groups></app-groups>\r\n\t\t      </split-area>\r\n\t\t      <split-area [size]=\"99.5\" id=\"splitviewer\">\r\n\t\t        <app-viewer></app-viewer>\r\n\t\t      </split-area>\r\n\t\t    </split>\r\n\t\t  </div>\r\n\t\t</split-area>\r\n\t\t<split-area [size]=\"10\" id=\"splittoolwindow\">\r\n\t\t\t<app-toolwindow></app-toolwindow>\r\n\t\t</split-area>\r\n\t</split>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/gs-viewer/gs-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);", ""]);

// module
exports.push([module.i, "@font-face {\n  font-family: \"FontAwesome\"; }\n\n.font-awesome-hand {\n  font-family: FontAwesome; }\n\n.font-awesome-hand::after {\n  font-family: FontAwesome; }\n\nhtml, body {\n  font-family: 'Open Sans', sans-serif;\n  text-align: justify;\n  margin: 0px;\n  padding: 0px; }\n\n#appdiv {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  overflow: hidden; }\n\na {\n  text-decoration: none;\n  color: #fff;\n  text-transform: uppercase; }\n\n.toolbar {\n  background-color: #333; }\n\n.toolbar ul {\n  list-style: none;\n  overflow: hidden;\n  margin-bottom: 0px;\n  z-index: 1; }\n\n.toolbar div > ul > li {\n  display: inline-block;\n  float: left; }\n\n.toolbar div > ul > li:hover {\n  background-color: #fff; }\n\n.toolbar div > ul > li:hover a {\n  color: #333; }\n\n.toolbar div > ul > li > a {\n  font-size: 12px;\n  line-height: 20px;\n  display: block;\n  float: left;\n  padding: 0 16px; }\n\n/**\r\n * Carets\r\n */\n.toolbar div ul li i.icon-sort {\n  display: none; }\n\n.toolbar div ul li:hover i.icon-sort {\n  display: inline; }\n\n.toolbar div ul li:hover i.icon-caret-down {\n  display: none; }\n\n.toolbar .dropdown i {\n  margin: 0px; }\n\n.toolbar div > ul > li > a:hover {\n  background-color: #fff;\n  color: #333; }\n\n.dropdown {\n  float: left; }\n\n/**\r\n * Sub navigaton\r\n **/\n.sub {\n  min-width: 180px;\n  margin: 20px;\n  display: none;\n  position: absolute;\n  border-left: 1px solid #ebebeb;\n  border-right: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb; }\n\n.sub li a {\n  display: block;\n  background-color: #fff;\n  color: #333 !important;\n  border-left: 4px solid #fff;\n  padding: 4px 12px;\n  font-size: 12px;\n  line-height: 26px; }\n\n.sub li a:hover {\n  border-left: 4px solid #ff0000;\n  float: top; }\n\n.toolbar div > ul > li:hover .sub {\n  display: block; }\n\n.sub li a {\n  transition: all .5s linear;\n  overflow: hidden; }\n\n#toolwindow {\n  position: relative;\n  background-color: slategrey; }\n\n.sidebar {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  height: 100%; }\n\n.tool-form {\n  padding-top: 10px;\n  padding-left: 10px;\n  color: white; }\n\n.tool-form-heading {\n  border-bottom: 2px solid #ddd;\n  margin: 0px;\n  padding-bottom: 3px; }\n\n.tool-form label {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 13px;\n  color: black;\n  display: block;\n  margin: 0px 0px 15px 0px; }\n\n.tool-form label > span {\n  width: 150px;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 13px;\n  float: left;\n  padding-top: 4px;\n  padding-right: 5px; }\n\n.tool-form span.required {\n  color: red; }\n\n.tool-form .tel-number-field {\n  width: 30px;\n  text-align: center; }\n\n.tool-form input.input-field {\n  width: 30px; }\n\n.tool-form input.file-input-field {\n  border: 1px solid #ccc;\n  height: 20px;\n  display: inline-block;\n  padding: 6px 6px;\n  cursor: pointer;\n  background-color: #888888; }\n\n.tool-form input.input-field,\n.tool-form .tel-number-field,\n.tool-form .textarea-field,\n.tool-form .select-field {\n  height: 20px;\n  overflow: hidden;\n  width: 240px;\n  background-color: #888888;\n  border-radius: 5px;\n  color: #ffffff; }\n\n.tool-form .input-field:focus,\n.tool-form .tel-number-field:focus,\n.tool-form .textarea-field:focus,\n.tool-form .select-field:focus {\n  border: 1px solid #0C0; }\n\n.tool-form .textarea-field {\n  height: 100px;\n  width: 55%; }\n\n.tool-form input[type=submit],\n.tool-form input[type=button] {\n  height: 25px;\n  border: none;\n  padding: 2px 8px 2px 8px;\n  background: #444466;\n  color: #fff;\n  box-shadow: 1px 1px 4px #DADADA;\n  -moz-box-shadow: 1px 1px 4px #DADADA;\n  -webkit-box-shadow: 1px 1px 4px #DADADA;\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  color: #ffffff; }\n\n.tool-form input[type=submit]:hover,\n.tool-form input[type=button]:hover {\n  background: #333377;\n  color: #fff; }\n\n.rightstyle {\n  width: 30px;\n  height: 100%;\n  float: right;\n  background: #FFFFFF;\n  background-repeat: repeat;\n  background-attachment: scroll;\n  overflow: auto; }\n\n.leftstyle {\n  background: #e6e6e6;\n  height: 100%; }\n\n.slider {\n  width: 0;\n  height: 0;\n  border-top: 30px solid transparent;\n  border-right: 10px solid black;\n  border-bottom: 30px solid transparent; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gs-viewer/gs-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GSViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_service__ = __webpack_require__("../../../../../src/app/gs-viewer/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gs_json__ = __webpack_require__("../../../../gs-json/dist2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gs_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_gs_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let GSViewerComponent = class GSViewerComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ;
    ngOnInit() {
        this.dataService.setGsModel(this.data);
    }
    ngDoCheck() {
        if (this.dataService.getGsModel() !== this.data) {
            this.dataService.setGsModel(this.data);
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
    __metadata("design:type", Object)
], GSViewerComponent.prototype, "data", void 0);
GSViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'gs-viewer',
        template: __webpack_require__("../../../../../src/app/gs-viewer/gs-viewer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gs-viewer/gs-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_data_service__["a" /* DataService */]])
], GSViewerComponent);



/***/ }),

/***/ "../../../../../src/app/gs-viewer/gs-viewer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GSViewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_split__ = __webpack_require__("../../../../angular-split/esm2015/angular-split.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_slider__ = __webpack_require__("../../../material/esm2015/slider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gs_viewer_component__ = __webpack_require__("../../../../../src/app/gs-viewer/gs-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewer_viewer_component__ = __webpack_require__("../../../../../src/app/gs-viewer/viewer/viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__setting_setting_component__ = __webpack_require__("../../../../../src/app/gs-viewer/setting/setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toolwindow_toolwindow_component__ = __webpack_require__("../../../../../src/app/gs-viewer/toolwindow/toolwindow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_data_service__ = __webpack_require__("../../../../../src/app/gs-viewer/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toolwindow_groups_component__ = __webpack_require__("../../../../../src/app/gs-viewer/toolwindow/groups.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let GSViewer = GSViewer_1 = class GSViewer {
    static forRoot() {
        return {
            ngModule: GSViewer_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__data_data_service__["a" /* DataService */]
            ]
        };
    }
};
GSViewer = GSViewer_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2_angular_split__["a" /* AngularSplitModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material_slider__["a" /* MatSliderModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_4__gs_viewer_component__["a" /* GSViewerComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__gs_viewer_component__["a" /* GSViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_5__viewer_viewer_component__["a" /* ViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_6__setting_setting_component__["a" /* SettingComponent */],
            __WEBPACK_IMPORTED_MODULE_7__toolwindow_toolwindow_component__["a" /* ToolwindowComponent */],
            __WEBPACK_IMPORTED_MODULE_9__toolwindow_groups_component__["a" /* GroupsComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_8__data_data_service__["a" /* DataService */]],
    })
], GSViewer);

var GSViewer_1;


/***/ }),

/***/ "../../../../../src/app/gs-viewer/setting/setting.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#settingview{\r\n  position:absolute;\r\n  background-color: white;\r\n  top:0px;\r\n  right:30px;\r\n  color:#395d73;\r\n  width:400px;\r\n  height:430px;\r\n}\r\n#grid{\r\n  margin-left: 20px;\r\n  font-family:sans-serif;\r\n}\r\n#axis{\r\n  margin-left: 30px;\r\n  font-family:sans-serif;\r\n}\r\n#shadow{\r\n  margin-left: 30px;\r\n  font-family:sans-serif;\r\n}\r\n#frame{\r\n  margin-left: 30px;\r\n  font-family:sans-serif;\r\n}\r\n#huerange{\r\n  margin-left: 41px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n#satrange{\r\n  margin-left: 18px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n#lirange{\r\n  margin-left: 20px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n#oprange{\r\n  margin-left: 20px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n\r\n#name{\r\n  font-family:sans-serif;\r\n}\r\n#redrange{\r\n  margin-left: 60px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n#greenrange{\r\n  margin-left: 60px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n#bluerange{\r\n  margin-left: 60px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n\r\n::ng-deep .mat-accent .mat-slider-thumb {\r\n    background-color: #395d73;\r\n    font-family:sans-serif;\r\n} \r\n::ng-deep .mat-accent .mat-slider-thumb-label {\r\n    background-color: #395d73;\r\n    font-family:sans-serif;\r\n} \r\n::ng-deep .mat-accent .mat-slider-track-fill {\r\n    background-color: #395d73;\r\n    font-family:sans-serif;\r\n} ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gs-viewer/setting/setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"settingview\" (click)=\"setting($event)\">\r\n  <input id=\"grid\" #grid type=\"checkbox\" [checked]=\"gridVisible\" (click)=\"changegrid()\"> <label id=\"name\" value=\"gridVisible\">grid</label>\r\n  <input id=\"axis\"  type=\"checkbox\" [checked]=\"axisVisible\" (click)=\"changeaxis()\"> <label id=\"name\" value=\"axisVisible\">axis</label>\r\n  <input id=\"shadow\"  type=\"checkbox\" [checked]=\"shadowVisible\" (click)=\"changeshadow()\"> <label id=\"name\" value=\"shadowVisible\">shadow</label>\r\n  <input id=\"frame\"  type=\"checkbox\" [checked]=\"frameVisible\" (click)=\"changeframe()\"> <label id=\"name\" value=\"frameVisible\">frame</label><br/><hr/>&nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >Hemisphere Light</label>&nbsp;&nbsp;<br/>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >hue</label>\r\n  <mat-slider class=\"slider\" name=\"range\" id=\"huerange\" min=0 max=360 step=1  value={{hue}} #slider (change)=\"changelight(slider.value,slider1.value,slider2.value)\" ></mat-slider><label id=\"name\" >{{slider.value.toPrecision(2)}}</label><br/>\r\n  &nbsp;&nbsp;&nbsp;<label id=\"name\" >saturation</label>\r\n  <mat-slider name=\"range\" id=\"satrange\" min=0 max=1 step=0.01 value={{saturation}} #slider1 (change)=\"changelight(slider.value,slider1.value,slider2.value)\" ></mat-slider><label id=\"name\" >{{slider1.value.toPrecision(2)}}</label><br/>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >lightness</label>\r\n  <mat-slider name=\"range\" id=\"lirange\" min=0 max=1 step=0.01 value={{lightness}} #slider2 (change)=\"changelight(slider.value,slider1.value,slider2.value)\" ></mat-slider><label id=\"name\" >{{slider2.value.toPrecision(2)}}</label><br/>\r\n  <!-- &nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >opacity</label>&nbsp;&nbsp;&nbsp;\r\n  <mat-slider name=\"range\" id=\"oprange\" min=0 max=1 step=0.01 value={{opacity}} #slider3 (change)=\"changeopa(slider3.value)\" ></mat-slider><label id=\"name\" >{{slider3.value.toPrecision(2)}}</label><br/> -->\r\n  <hr/>&nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >Backeground Color</label>&nbsp;&nbsp;<br/>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >R</label>\r\n  <mat-slider  name=\"range\" id=\"redrange\" min=0 max=1 step=0.01  value={{red}} #slider4 (change)=\"changeback(slider4.value,slider5.value,slider6.value)\" ></mat-slider><label id=\"name\" >{{slider4.value.toPrecision(2)}}</label><br/>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >G</label>\r\n  <mat-slider name=\"range\" id=\"greenrange\" min=0 max=1 step=0.01 value={{green}} #slider5 (change)=\"changeback(slider4.value,slider5.value,slider6.value)\" ></mat-slider><label id=\"name\" >{{slider5.value.toPrecision(2)}}</label><br/>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >B</label>\r\n  <mat-slider name=\"range\" id=\"bluerange\" min=0 max=1 step=0.01 value={{blue}} #slider6 (change)=\"changeback(slider4.value,slider5.value,slider6.value)\" ></mat-slider><label id=\"name\" >{{slider6.value.toPrecision(2)}}</label><br/>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/gs-viewer/setting/setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_service__ = __webpack_require__("../../../../../src/app/gs-viewer/data/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SettingComponent = class SettingComponent {
    constructor(dataService) {
        this.dataService = dataService;
        // avoid manipulating the scene here
        // shift to dataservice
        this.scene = this.dataService.getScene();
        this.alight = [];
        this.alight = this.dataService.getalight();
        this.hue = this.dataService.hue;
        this.saturation = this.dataService.saturation;
        this.lightness = this.dataService.lightness;
        this.opacity = this.dataService.opacity;
        this.red = this.dataService.red;
        this.green = this.dataService.green;
        this.blue = this.dataService.blue;
    }
    ngOnInit() {
        if (this.hue == undefined) {
            this.hue = 160;
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
            this.lightness = 0.47;
        }
        else {
            this.lightness = this.dataService.lightness;
        }
        if (this.opacity == undefined) {
            this.opacity = 1;
        }
        else {
            this.opacity = this.dataService.opacity;
        }
        this.gridVisible = this.dataService.grid;
        this.axisVisible = this.dataService.axis;
        this.shadowVisible = this.dataService.shadow;
        this.frameVisible = this.dataService.frame;
        if (this.red == undefined) {
            this.red = 0.8;
        }
        else {
            this.red = this.dataService.red;
        }
        if (this.green == undefined) {
            this.green = 0.8;
        }
        else {
            this.green = this.dataService.green;
        }
        if (this.blue == undefined) {
            this.blue = 0.8;
        }
        else {
            this.blue = this.dataService.blue;
        }
    }
    changegrid() {
        this.gridVisible = !this.gridVisible;
        var max = 8;
        var center = new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](0, 0, 0);
        var radius = 0;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].type === "Scene") {
                for (var j = 0; j < this.scene.children[i].children.length; j++) {
                    if (this.scene.children[i].children[j]["geometry"].boundingSphere.radius > radius) {
                        center = this.scene.children[i].children[j]["geometry"].boundingSphere.center;
                        radius = this.scene.children[i].children[j]["geometry"].boundingSphere.radius;
                        max = Math.ceil(radius + Math.max(Math.abs(center.x), Math.abs(center.y), Math.abs(center.z))) * 2;
                        break;
                    }
                }
            }
        }
        if (this.gridVisible) {
            var gridhelper = new __WEBPACK_IMPORTED_MODULE_0_three__["GridHelper"](max, max);
            gridhelper.name = "GridHelper";
            var vector = new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](0, 1, 0);
            gridhelper.lookAt(vector);
            gridhelper.position.set(center.x, center.y, 0);
            this.scene.add(gridhelper);
        }
        else {
            this.scene.remove(this.scene.getObjectByName("GridHelper"));
        }
        this.dataService.addgrid(this.gridVisible);
    }
    changeaxis() {
        this.axisVisible = !this.axisVisible;
        var max = 8;
        var center = new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](0, 0, 0);
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].type === "Scene") {
                for (var j = 0; j < this.scene.children[i].children.length; j++) {
                    if (this.scene.children[i].children[j]["geometry"].boundingSphere.radius !== 0) {
                        center = this.scene.children[i].children[j]["geometry"].boundingSphere.center;
                        var radius = this.scene.children[i].children[j]["geometry"].boundingSphere.radius;
                        max = radius;
                        break;
                    }
                }
            }
        }
        if (this.axisVisible) {
            var axishelper = new __WEBPACK_IMPORTED_MODULE_0_three__["AxisHelper"](max);
            axishelper.name = "AxisHelper";
            this.scene.add(axishelper);
        }
        else {
            this.scene.remove(this.scene.getObjectByName("AxisHelper"));
        }
        this.dataService.addaxis(this.axisVisible);
    }
    changeshadow() {
        this.shadowVisible = !this.shadowVisible;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].type === "DirectionalLight") {
                if (this.shadowVisible) {
                    this.scene.children[i].castShadow = true;
                }
                else {
                    this.scene.children[i].castShadow = false;
                }
            }
        }
        this.dataService.addshadow(this.shadowVisible);
    }
    changelight(_hue, _saturation, _lightness) {
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
    }
    changeframe() {
        this.frameVisible = !this.frameVisible;
        if (this.frameVisible) {
            for (var i = 0; i < this.scene.children.length; i++) {
                if (this.scene.children[i].type === "Scene") {
                    if (this.scene.children[i].children[0].type === "Mesh") {
                        this.scene.children[i].children[0].visible = false;
                    }
                }
            }
        }
        else {
            for (var i = 0; i < this.scene.children.length; i++) {
                if (this.scene.children[i].type === "Scene") {
                    if (this.scene.children[i].children[0].type === "Mesh") {
                        this.scene.children[i].children[0].visible = true;
                    }
                }
            }
        }
        this.dataService.addframe(this.frameVisible);
    }
    changeopa(_opacity) {
        this.opacity = _opacity;
        this.dataService.getopacity(_opacity);
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].type === "Scene") {
                if (this.scene.children[i].children[0].type === "Mesh") {
                    this.scene.children[i].children[0]["material"].opacity = _opacity;
                }
            }
        }
    }
    changeback(_red, _green, _blue) {
        this.red = _red;
        this.green = _green;
        this.blue = _blue;
        this.dataService.getred(_red);
        this.dataService.getgreen(_green);
        this.dataService.getblue(_blue);
        this.scene.background = new __WEBPACK_IMPORTED_MODULE_0_three__["Color"](_red, _green, _blue);
    }
    setting(event) {
        event.stopPropagation();
    }
};
SettingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
        selector: 'app-setting',
        template: __webpack_require__("../../../../../src/app/gs-viewer/setting/setting.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gs-viewer/setting/setting.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_data_service__["a" /* DataService */]])
], SettingComponent);



/***/ }),

/***/ "../../../../../src/app/gs-viewer/toolwindow/groups.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#groupsview{\r\n  color:black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gs-viewer/toolwindow/groups.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"groupsview\">\r\n\tGroupview\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/gs-viewer/toolwindow/groups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let GroupsComponent = class GroupsComponent {
    ngOnInit() {
    }
};
GroupsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-groups',
        template: __webpack_require__("../../../../../src/app/gs-viewer/toolwindow/groups.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gs-viewer/toolwindow/groups.component.css")]
    })
], GroupsComponent);



/***/ }),

/***/ "../../../../../src/app/gs-viewer/toolwindow/toolwindow.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#toolwindow{\r\n  background-color:white;\r\n}\r\n#toolbar{\r\n  background-color: #E6E6E6;\r\n  height: 28px;\r\n}\r\n#point{\r\n  margin-left:25px;\r\n  font-size:20px;\r\n  background:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#vertice{\r\n  font-size:22px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#edge{\r\n  font-size:22px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#wire{\r\n  font-size:22px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#face{\r\n  font-size:22px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#object{\r\n  font-size:20px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#selected{\r\n  margin-left:30px;\r\n}\r\n.visible{\r\n  background-color: white !important;\r\n  color:#395d73;\r\n}\r\n.selectvisible{\r\n  background-color:  white !important;\r\n  color:#395d73;\r\n}\r\n#table{\r\n  width:100% ;\r\n  height: 15px;\r\n}\r\n#tablename{\r\n  width:100% ;\r\n  height: 15px;\r\n  color:grey;\r\n}\r\n#numberbutton{\r\n  width:100%;\r\n  border:0;\r\n}\r\n/*.selectid{\r\n  background-color:#66CCFF;\r\n}*/\r\n#select{\r\n  position: relative;\r\n  float:right;\r\n  margin-right: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gs-viewer/toolwindow/toolwindow.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"toolwindow\">\r\n  <div id=\"toolbar\">\r\n    <button id=\"point\" [class.visible]=\"Visible === 'Points'\" (click)=\"point(Visible)\">P</button>\r\n    <button id=\"vertice\" [class.visible]=\"Visible === 'Vertices'\" (click)=\"vertice(Visible)\">V</button>\r\n    <button id=\"edge\" [class.visible]=\"Visible === 'Edges'\" (click)=\"edge(Visible)\">E</button>\r\n    <button id=\"wire\" [class.visible]=\"Visible === 'Wires'\" (click)=\"wire(Visible)\">W</button>\r\n    <button id=\"face\" [class.visible]=\"Visible === 'Faces'\" (click)=\"face(Visible)\">F</button>\r\n    <button id=\"object\" [class.visible]=\"Visible === 'Objs'\" (click)=\"object(Visible)\">O</button>\r\n    <input id=\"selected\" type=\"checkbox\" (click)=\"changeselected()\">\r\n    <label id=\"selectedname\" value=\"selected\">Show selected only</label>\r\n    <!-- <div id=\"select\">\r\n      <button id=\"vertice\" [class.selectvisible]=\"SelectVisible === 'Vertices'\" (click)=\"verticeselect(SelectVisible)\">V</button>\r\n      <button id=\"edge\" [class.selectvisible]=\"SelectVisible === 'Edges'\" (click)=\"edgeselect(SelectVisible)\">E</button>\r\n      <button id=\"wire\" [class.selectvisible]=\"SelectVisible === 'Wires'\" (click)=\"wireselect(SelectVisible)\">W</button>\r\n      <button id=\"face\" [class.selectvisible]=\"SelectVisible === 'Faces'\" (click)=\"faceselect(SelectVisible)\">F</button>\r\n      <button id=\"object\" [class.selectvisible]=\"SelectVisible === 'Objs'\" (click)=\"objectselect(SelectVisible)\"><i class=\"fa fa-map\"></i></button>\r\n    </div> -->\r\n  </div>\r\n  <div id=\"toolview\">\r\n    <div *ngIf=\"Visible === 'Points'\">\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" id=\"table\" name=\"table\" bordercolor=\"#d0d0d0\">\r\n        <tr>\r\n          <td name=\"Number\" align=center width=\"40%\" align=center>ID</td>\r\n          <td width=\"20%\" align=center>X</td>\r\n          <td width=\"20%\" align=center>Y</td>\r\n          <td width=\"20%\" align=center>Z</td>\r\n        </tr>\r\n      </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" id=\"tablename\" name=\"table\" bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute; \">\r\n        <tr>\r\n          <button id=\"numberbutton\">{{datascale.id}}</button>\r\n          <td width=\"20%\" align=center>{{datascale.x}}</td>\r\n          <td width=\"20%\" align=center>{{datascale.y}}</td>\r\n          <td width=\"20%\" align=center>{{datascale.z}}</td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"Visible === 'Vertices'\">\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" width=\"50%\">\r\n        <tr>\r\n          <td  align=center width=\"25%\">Vertices Label</td>\r\n          <td  align=center width=\"25%\">Points ID</td>\r\n        </tr>\r\n      </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute\" width=\"50%\">\r\n        <tr>\r\n          <!-- <button id=\"numberbutton\" [class.selectid]=\"ID == datascale.id\" (click)=clicktoshow(datascale.id)>{{datascale.vertixlabel}}</button> -->\r\n          <button id=\"numberbutton\">{{datascale.vertixlabel}}</button>\r\n          <td  align=center  width=\"50%\">{{datascale.pointid}}</td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"Visible === 'Edges'\">\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" width=\"40%\">\r\n        <tr>\r\n          <td  align=center>Edge ID</td>\r\n        </tr>\r\n      </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute\" width=\"40%\">\r\n        <tr>\r\n          <!-- <button id=\"numberbutton\"[class.selectid]=\"ID == datascale.id\" (click)=clicktoshow(datascale.id) >{{datascale.id}}</button> -->\r\n          <button id=\"numberbutton\">{{datascale}}</button>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"Visible === 'Wires'\">\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" width=\"40%\">\r\n        <tr>\r\n          <td  align=center>Wire ID</td>\r\n        </tr>\r\n      </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute\" width=\"40%\">\r\n        <tr>\r\n          <button id=\"numberbutton\" >{{datascale}}</button>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"Visible === 'Faces'\">\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" width=\"40%\">\r\n        <tr>\r\n          <td  align=center>Face ID</td>\r\n        </tr>\r\n      </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute\" width=\"40%\">\r\n        <tr>\r\n          <button id=\"numberbutton\" >{{datascale}}</button>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"Visible === 'Objs'\">\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" width=\"40%\">\r\n        <tr>\r\n          <td name=\"Number\" align=center  align=center>Object ID</td>\r\n        </tr>\r\n      </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute \" width=\"40%\">\r\n        <tr>\r\n          <button  id=\"numberbutton\"  >{{datascale}}</button>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/gs-viewer/toolwindow/toolwindow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolwindowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__ = __webpack_require__("../../../../../src/app/gs-viewer/data/DataSubscriber.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ToolwindowComponent = class ToolwindowComponent extends __WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__["a" /* DataSubscriber */] {
    constructor(injector, myElement) {
        super(injector);
        this.Visible = "Objs";
        this.scene = this.dataService.getScene();
        this.selectedVisible = false;
        this.attribute = [];
        this.num = [];
        this.collection = [];
        this.selectObj = [];
        this.myElement = myElement;
    }
    ngOnInit() {
        this.model = this.dataService.getGsModel();
        this.Visible = this.dataService.visible;
        if (this.model !== undefined) {
            this.scene_and_maps = this.dataService.getscememaps();
        }
        else {
            return undefined;
        }
        this.object(this.Visible);
        //this.objectselect(this.SelectVisible);
        this.getvertices();
    }
    notify() {
        this.selectObj = [];
        for (var i = 0; i < this.dataService.selecting.length; i++) {
            for (var n = 0; n < this.scene.children.length; n++) {
                if (this.scene.children[n].type === "Scene") {
                    if (this.dataService.selecting[i].uuid === this.scene.children[n].children[0].uuid) {
                        this.selectObj.push(this.scene.children[n].children[0].parent);
                    }
                }
            }
        }
        if (this.selectedVisible == true) {
            if (this.Visible === "Objs")
                this.objectcheck();
            if (this.Visible === "Faces")
                this.facecheck();
            if (this.Visible === "Wires")
                this.wirecheck();
            if (this.Visible === "Edges")
                this.edgecheck();
            if (this.Visible === "Vertices")
                this.verticecheck();
            if (this.Visible === "Points")
                this.pointcheck();
        }
        this.dataService.visible = this.Visible;
    }
    getvertices() {
        var attributevertix = [];
        var points = this.getpoints();
        for (var i = 0; i < this.scene_and_maps.vertices_map.size; i++) {
            const path = this.scene_and_maps.vertices_map.get(i);
            const vertices = this.model.getGeom().getTopo(path);
            const label = vertices.getLabel();
            const verts_xyz = vertices.getLabelCentroid();
            var attributes = [];
            for (var j = 0; j < points.length; j++) {
                if (points[j].x === verts_xyz[0] && points[j].y === verts_xyz[1] && points[j].z === verts_xyz[2]) {
                    attributes.pointid = points[j].id;
                }
            }
            attributes.vertixlabel = label;
            attributevertix.push(attributes);
        }
        this.dataService.addattrvertix(attributevertix);
        return attributevertix;
    }
    getedges() {
        var attributeedge = [];
        for (var i = 0; i < this.scene_and_maps.edges_map.size; i++) {
            const path = this.scene_and_maps.edges_map.get(i);
            const edge = this.model.getGeom().getTopo(path);
            const label = edge.getLabel();
            attributeedge.push(label);
        }
        return attributeedge;
    }
    getwires() {
        var attributewire = [];
        for (var i = 0; i < this.scene_and_maps.wires_map.size; i++) {
            const path = this.scene_and_maps.wires_map.get(i);
            const wire = this.model.getGeom().getTopo(path);
            const label = wire.getLabel();
            if (attributewire.indexOf(label) === -1)
                attributewire.push(label);
        }
        return attributewire;
    }
    getfaces() {
        var attributeface = [];
        for (var i = 0; i < this.scene_and_maps.faces_map.size; i++) {
            const path = this.scene_and_maps.faces_map.get(i);
            const face = this.model.getGeom().getTopo(path);
            const label = face.getLabel();
            attributeface.push(label);
        }
        return attributeface;
    }
    getoject() {
        var attributeobject = [];
        for (var i = 0; i < this.scene_and_maps.faces_map.size; i++) {
            const path = this.scene_and_maps.faces_map.get(i);
            if (i === 0 || path.id !== this.scene_and_maps.faces_map.get(i - 1).id) {
                const label = "o" + path.id;
                attributeobject.push(label);
            }
        }
        return attributeobject;
    }
    getchildren() {
        var children;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].name == "Scene") {
                children = this.scene.children[i].children;
                break;
            }
            if (i == this.scene.children.length - 1) {
                return [];
            }
        }
        return children;
    }
    getscenechildren() {
        var scenechildren = [];
        for (var n = 0; n < this.scene.children.length; n++) {
            if (this.scene.children[n].type === "Scene") {
                for (var i = 0; i < this.scene.children[n].children.length; i++) {
                    scenechildren.push(this.scene.children[n].children[i]);
                }
            }
        }
        return scenechildren;
    }
    clearsprite() {
        this.dataService.visible = this.Visible;
        for (var i = 0; i < this.dataService.sprite.length; i++) {
            this.dataService.sprite[i].visible = false;
        }
        var sprite = [];
        this.dataService.pushsprite(sprite);
    }
    getpoints() {
        var attrubtepoints = [];
        //console.log(this.model.getGeom().getAllPoints());
        for (var i = 0; i < this.model.getGeom().getAllPoints().length; i++) {
            var attributepoint = [];
            attributepoint.id = this.model.getGeom().getAllPoints()[i].getLabel();
            attributepoint.x = this.model.getGeom().getAllPoints()[i].getPosition()[0];
            attributepoint.y = this.model.getGeom().getAllPoints()[i].getPosition()[1];
            attributepoint.z = this.model.getGeom().getAllPoints()[i].getPosition()[2];
            attrubtepoints.push(attributepoint);
        }
        return attrubtepoints;
    }
    point(Visible) {
        this.Visible = "Points";
        this.attribute = this.getpoints();
        if (this.selectedVisible == true) {
            this.pointcheck();
        }
        this.dataService.visible = this.Visible;
        this.clearsprite();
    }
    pointcheck() {
        this.attribute = [];
        var selecting = this.dataService.getselecting();
        for (var i = 0; i < selecting.length; i++) {
            var attributepoint = [];
            attributepoint.id = this.model.getGeom().getAllPoints()[selecting[i].index].getLabel();
            attributepoint.x = this.model.getGeom().getAllPoints()[selecting[i].index].getPosition()[0];
            attributepoint.y = this.model.getGeom().getAllPoints()[selecting[i].index].getPosition()[1];
            attributepoint.z = this.model.getGeom().getAllPoints()[selecting[i].index].getPosition()[2];
            this.attribute.push(attributepoint);
        }
    }
    pointtovertix() {
        /*var attributevertix=[];
        var selecting=this.dataService.getselecting();
        var points=this.getpoints();
        for(var i =0;i<selecting.length;i++){
          var path=selecting[i].path;
          const vertices: gs.IVertex = this.model.getGeom().getTopo(path) as gs.IVertex;
          const label: string = vertices.getLabel();
          const verts_xyz: gs.XYZ = vertices.getLabelCentroid();
          var attributes:any=[];
          for(var j=0;j<points.length;j++){
            if(points[j].x===verts_xyz[0]&&points[j].y===verts_xyz[1]&&points[j].z===verts_xyz[2]){
               attributes.pointid=points[j].id;
            }
          }
          attributes.vertixlabel=label;
          attributevertix.push(attributes);
        }
        this.dataService.addattrvertix(attributevertix);
        return attributevertix;*/
        var attributes = [];
        var vertices = this.getvertices();
        var selecting = this.dataService.getselecting();
        var char;
        var labels = [];
        if (selecting.length !== 0) {
            for (var i = 0; i < selecting.length; i++) {
                for (var j = 0; j < vertices.length; j++) {
                    if (selecting[i]["id"] === vertices[j].pointid) {
                        attributes.push(vertices[j]);
                    }
                    if (selecting[i]["id"].indexOf("e") > -1) {
                        const path = this.scene_and_maps.edges_map.get(selecting[i]["index"]);
                        const edge = this.model.getGeom().getTopo(path);
                        const verts = edge.getVertices();
                        for (var n = 0; n < verts.length; n++) {
                            var label = verts[n].getLabel();
                            if (label === vertices[j].vertixlabel && attributes.indexOf(vertices[j]) == -1) {
                                attributes.push(vertices[j]);
                            }
                        }
                    }
                    if (selecting[i]["id"].length < 8 && selecting[i]["id"].indexOf("w") > -1) {
                        const path = this.scene_and_maps.wires_map.get(selecting[i]["index"]);
                        const wire = this.model.getGeom().getTopo(path);
                        const verts = wire.getVertices();
                        for (var n = 0; n < verts.length; n++) {
                            var label = verts[n].getLabel();
                            if (label === vertices[j].vertixlabel && attributes.indexOf(vertices[j]) == -1) {
                                attributes.push(vertices[j]);
                            }
                        }
                    }
                    if (selecting[i]["id"].length < 8 && selecting[i]["id"].indexOf("f") > -1) {
                        const path = this.scene_and_maps.faces_map.get(selecting[i]["index"]);
                        const face = this.model.getGeom().getTopo(path);
                        const verts = face.getVertices();
                        for (var n = 0; n < verts.length; n++) {
                            var label = verts[n].getLabel();
                            if (label === vertices[j].vertixlabel && attributes.indexOf(vertices[j]) == -1) {
                                attributes.push(vertices[j]);
                            }
                        }
                    }
                    if (selecting[i]["id"].length < 5 && selecting[i]["id"].indexOf("p") == -1) {
                        const path = this.scene_and_maps.faces_map.get(selecting[i]["index"]);
                        const face = this.model.getGeom().getTopo(path);
                        const faces = face.getObj().getFaces();
                        for (var f = 0; f < faces.length; f++) {
                            const verts = faces[f].getVertices();
                            for (var n = 0; n < verts.length; n++) {
                                var label = verts[n].getLabel();
                                if (label === vertices[j].vertixlabel && this.attribute.indexOf(vertices[j]) == -1) {
                                    attributes.push(vertices[j]);
                                }
                            }
                        }
                    }
                }
            }
        }
        return attributes;
    }
    vertice(Visible) {
        this.Visible = "Vertices";
        this.attribute = this.getvertices();
        if (this.selectedVisible == true) {
            this.verticecheck();
        }
        this.dataService.visible = this.Visible;
        this.clearsprite();
    }
    verticecheck() {
        this.attribute = this.pointtovertix();
        /*this.attribute=[];
        var points=this.getpoints();
        var vertices=this.getvertices();
        var selecting=this.dataService.selecting;
    
        for(var i =0;i<selecting.length;i++){
          //const path: gs.ITopoPathData = this.scene_and_maps.vertices_map.get(i);
          const label:string=this.model.getGeom().getAllPoints()[selecting[i].index].getLabel();
          for(var j=0;j<vertices.length;j++){
    
          }
          const vertices: gs.IVertex = this.model.getGeom().getTopo(selecting[i].index) as gs.IVertex;
          //const label: string = vertices.getLabel();
          const verts_xyz: gs.XYZ = this.model.getGeom().getAllPoints()[selecting[i].index].getPosition();
          console.log(verts_xyz);
          //const verts_xyz: gs.XYZ = vertices.getLabelCentroid();
          var attributes:any=[];
          for(var j=0;j<points.length;j++){
            if(points[j].x===verts_xyz[0]&&points[j].y===verts_xyz[1]&&points[j].z===verts_xyz[2]){
               attributes.pointid=points[j].id;
            }
          }
          attributes.vertixlabel=label;
          this.attribute.push(attributes);
        }
        //this.dataService.addattrvertix(this.attribute);*/
    }
    edge(Visible) {
        this.Visible = "Edges";
        this.attribute = [];
        this.attribute = this.getedges();
        if (this.selectedVisible == true) {
            this.edgecheck();
        }
        this.dataService.visible = this.Visible;
        this.clearsprite();
    }
    edgecheck() {
        this.attribute = [];
        var edges = this.getedges();
        var selecting = this.dataService.getselecting();
        if (selecting.length !== 0) {
            for (var i = 0; i < selecting.length; i++) {
                for (var j = 0; j < edges.length; j++) {
                    if (selecting[i]["id"] === edges[j]) {
                        this.attribute.push(edges[j]);
                    }
                    if (selecting[i]["id"].length < 8 && selecting[i]["id"].indexOf("f") > -1) {
                        const path = this.scene_and_maps.faces_map.get(selecting[i]["index"]);
                        const face = this.model.getGeom().getTopo(path);
                        const verts = face.getEdges();
                        for (var n = 0; n < verts.length; n++) {
                            var label = verts[n].getLabel();
                            if (label === edges[j] && this.attribute.indexOf(edges[j]) == -1) {
                                this.attribute.push(edges[j]);
                            }
                        }
                    }
                    if (selecting[i]["id"].length < 5 && selecting[i]["id"].indexOf("p") == -1) {
                        const path = this.scene_and_maps.faces_map.get(selecting[i]["index"]);
                        const face = this.model.getGeom().getTopo(path);
                        const faces = face.getObj().getFaces();
                        for (var f = 0; f < faces.length; f++) {
                            const verts = faces[f].getEdges();
                            for (var n = 0; n < verts.length; n++) {
                                var label = verts[n].getLabel();
                                if (label === edges[j] && this.attribute.indexOf(edges[j]) == -1) {
                                    this.attribute.push(edges[j]);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    wire(Visible) {
        this.Visible = "Wires";
        this.attribute = [];
        this.attribute = this.getwires();
        if (this.selectedVisible == true) {
            this.wirecheck();
        }
        this.dataService.visible = this.Visible;
        this.clearsprite();
    }
    wirecheck() {
        this.attribute = [];
        var wires = this.getwires();
        var selecting = this.dataService.getselecting();
        if (selecting.length !== 0) {
            for (var i = 0; i < selecting.length; i++) {
                for (var j = 0; j < wires.length; j++) {
                    if (selecting[i]["id"] === wires[j]) {
                        this.attribute.push(wires[j]);
                    }
                    if (selecting[i]["id"].length < 5 && selecting[i]["id"].indexOf("p") == -1) {
                        const path = this.scene_and_maps.faces_map.get(selecting[i]["index"]);
                        const face = this.model.getGeom().getTopo(path);
                        const wireses = face.getObj().getWires();
                        for (var w = 0; w < wireses.length; w++) {
                            var label = wireses[w].getLabel();
                            if (label === wires[j] && this.attribute.indexOf(wires[j]) == -1) {
                                this.attribute.push(wires[j]);
                            }
                        }
                    }
                }
            }
        }
    }
    face(Visible) {
        this.Visible = "Faces";
        this.attribute = [];
        this.attribute = this.getfaces();
        if (this.selectedVisible == true) {
            this.facecheck();
        }
        this.clearsprite();
    }
    clicktoshow(id) {
        this.ID = id;
        for (var i = 0; i < this.scenechildren.length; i++) {
            if (this.scenechildren[i].name === this.Visible) {
                if (this.selectObj.length !== 0) {
                    for (var j = 0; j < this.scenechildren[i].children.length; j++) {
                        if (this.scenechildren[i].children[j].name === id) {
                            this.scenechildren[i].children[j].visible = true;
                            this.dataService.addsprite(this.scenechildren[i].children[j]);
                        }
                    }
                }
            }
        }
    }
    facecheck() {
        this.attribute = [];
        var faces = this.getfaces();
        var selecting = this.dataService.getselecting();
        if (selecting.length !== 0) {
            for (var i = 0; i < selecting.length; i++) {
                for (var j = 0; j < faces.length; j++) {
                    if (selecting[i]["id"] === faces[j]) {
                        this.attribute.push(faces[j]);
                    }
                    if (selecting[i]["id"].length < 5 && selecting[i]["id"].indexOf("p") == -1) {
                        const path = this.scene_and_maps.faces_map.get(selecting[i]["index"]);
                        const face = this.model.getGeom().getTopo(path);
                        const faceses = face.getObj().getFaces();
                        for (var f = 0; f < faceses.length; f++) {
                            var label = faceses[f].getLabel();
                            if (label === faces[j] && this.attribute.indexOf(faces[j]) == -1) {
                                this.attribute.push(faces[j]);
                            }
                        }
                    }
                }
            }
        }
    }
    object(Visible) {
        this.Visible = "Objs";
        this.attribute = [];
        this.attribute = this.getoject();
        if (this.selectedVisible == true) {
            this.objectcheck();
        }
        this.dataService.visible = this.Visible;
        this.clearsprite();
    }
    objectcheck() {
        this.attribute = [];
        var object = this.getoject();
        var selecting = this.dataService.getselecting();
        if (selecting.length !== 0) {
            for (var i = 0; i < selecting.length; i++) {
                for (var j = 0; j < object.length; j++) {
                    if (selecting[i]["id"] === object[j]) {
                        this.attribute.push(object[j]);
                    }
                }
            }
        }
        /*this.attribute=[];
        for(var i=0;i<this.selectObj.length;i++){
          for(var j=0;j<this.selectObj[i].children.length;j++){
            if(this.selectObj[i].children[j].name==="Objs"){
              for(var n=0;n<this.selectObj[i].children[j].children.length;n++){
                var attributeface:any=[];
                attributeface.id=this.selectObj[i].children[j].children[n].name;
                this.attribute.push(attributeface);
              }
            }
          }
        }*/
    }
    changeselected() {
        this.selectedVisible = !this.selectedVisible;
        if (this.selectedVisible) {
            if (this.Visible === "Points")
                this.pointcheck();
            if (this.Visible === "Vertices")
                this.verticecheck();
            if (this.Visible === "Edges")
                this.edgecheck();
            if (this.Visible === "Wires")
                this.wirecheck();
            if (this.Visible === "Faces")
                this.facecheck();
            if (this.Visible === "Objs")
                this.objectcheck();
        }
        else {
            if (this.Visible === "Points")
                this.point(this.Visible);
            if (this.Visible === "Vertices")
                this.vertice(this.Visible);
            if (this.Visible === "Edges")
                this.edge(this.Visible);
            if (this.Visible === "Wires")
                this.wire(this.Visible);
            if (this.Visible === "Faces")
                this.face(this.Visible);
            if (this.Visible === "Objs")
                this.object(this.Visible);
        }
    }
    Onselect(i) {
        var select;
        for (var n = 0; n < this.scene.children.length; n++) {
            if (this.scene.children[n].type === "Scene") {
                for (var m = 0; m < this.scene.children[n].children.length; m++) {
                    var sprite = this.scene.children[n].children[m].children[this.scene.children[n].children[m].children.length - 1].children;
                    for (var j = 0; j < sprite.length; j++) {
                        if (sprite[j].name === i) {
                        }
                    }
                }
            }
        }
    }
};
ToolwindowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-toolwindow',
        template: __webpack_require__("../../../../../src/app/gs-viewer/toolwindow/toolwindow.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gs-viewer/toolwindow/toolwindow.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
], ToolwindowComponent);



/***/ }),

/***/ "../../../../../src/app/gs-viewer/viewer/viewer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container {\r\n  position: relative;\r\n  height:100%;\r\n  width: 100%;\r\n  margin:0px;\r\n  overflow: hidden;\r\n  color: white;\r\n}\r\n#container-top-right-resize { top: 0px; right: 0px; }\r\n\r\n/*#rotating{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:15px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  top: 0px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n\r\n#paning{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:15px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  top: 25px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n\r\n#zooming{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:15px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 50px;\r\n  background-color:transparent;\r\n  border:0;\r\n}*/\r\n\r\n#zoomingfit{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:15px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 30px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n\r\n#selecting{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:15px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 50px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n\r\n#points{\r\n  width: 30px;\r\n  height: 25px;\r\n  font:20px bolder;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 80px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#vertices{\r\n  width: 30px;\r\n  height: 25px;\r\n  font:20px bolder;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 100px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#edges{\r\n  width: 30px;\r\n  height: 25px;\r\n  font:20px bolder;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 120px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#wires{\r\n  width: 30px;\r\n  height: 25px;\r\n  font:20px bolder;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 140px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#faces{\r\n  width: 30px;\r\n  height: 25px;\r\n  font:20px bolder;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 160px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#objects{\r\n  width: 30px;\r\n  height: 25px;\r\n  font:20px bolder;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 180px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n\r\n#setting{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:15px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  top: 10px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n\r\n\r\n.selected{\r\n  color: grey;\r\n\r\n}\r\n.visible{\r\n  color: grey;\r\n}\r\n\r\n.cursor {\r\n\r\n}\r\n\r\n.selectvisible{\r\n  background-color:  white !important;\r\n  color:#395d73;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gs-viewer/viewer/viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\"  \r\n    (mousemove)=\"onDocumentMouseMove($event)\" \r\n    (mousedown)=\"mousedown($event)\"\r\n    (mouseup)=\"mouseup($event)\"\r\n\t\t(click)=\"onDocumentMouseDown($event)\"\r\n    (window:resize)=\"onResize($event)\">\r\n\r\n\t\r\n  \t\t<!-- <button id=\"rotating\" \r\n  \t\t\t[class.visible]=\"Visible === 'rotate'\" \r\n  \t\t\t(click)=\"rotate()\">\r\n  \t\t\t<i class=\"fa fa-refresh\"></i>\r\n  \t\t</button>\r\n\r\n  \t\t<button id=\"paning\"  \r\n  \t\t\t[class.visible]=\"Visible === 'pan'\" \r\n  \t\t\t(click)=\"pan()\">\r\n  \t\t\t<i class=\"fa fa-hand-paper-o\"></i>\r\n  \t\t</button>\r\n\r\n  \t\t<button id=\"zooming\"  \r\n  \t\t\t[class.visible]=\"Visible === 'zoom'\" \r\n  \t\t\t(click)=\"Visible='zoom'\">\r\n  \t\t\t<i class=\"fa fa-search\"></i>\r\n  \t\t</button>-->\r\n  \t\t\r\n  \t\t<button id=\"zoomingfit\"  \r\n  \t\t\t[class.visible]=\"Visible === 'zoomfit'\" \r\n  \t\t\t(click)=\"zoomfit()\">\r\n  \t\t\t<i class=\"fa fa-arrows-alt\"></i>\r\n  \t\t</button> \r\n  \t\t\r\n  \t\t<!-- <button id=\"selecting\" [class.visible]=\"Visible === 'select'\" (click)= \"select($event, Visible)\" ><i class=\"fa fa-mouse-pointer\"></i></button> -->\r\n  \t\t\r\n  \t\t<button id=\"setting\" [class.selected]=\"settingVisible\" (click)= \"settingVisible = !settingVisible\"><i class=\"fa fa-cog\"></i></button>\r\n\r\n      <button id=\"selecting\" [class.selected]=\"seVisible\" (click)= \"select(seVisible)\" ><i class=\"fa fa-mouse-pointer\"></i></button>\r\n\r\n      \t\r\n      \t<!--setting-->\r\n      \t\r\n \t\t<app-setting *ngIf=\"settingVisible == true\"></app-setting>\r\n    <div *ngIf=\"seVisible == true\">\r\n        <button id=\"points\" [class.selectvisible]=\"SelectVisible === 'Points'\" (click)=\"pointselect(SelectVisible)\">P</button>\r\n        <button id=\"vertices\" [class.selectvisible]=\"SelectVisible === 'Vertices'\" (click)=\"verticeselect(SelectVisible)\">V</button>\r\n        <button id=\"edges\" [class.selectvisible]=\"SelectVisible === 'Edges'\" (click)=\"edgeselect(SelectVisible)\">E</button>\r\n        <button id=\"wires\" [class.selectvisible]=\"SelectVisible === 'Wires'\" (click)=\"wireselect(SelectVisible)\">W</button>\r\n        <button id=\"faces\" [class.selectvisible]=\"SelectVisible === 'Faces'\" (click)=\"faceselect(SelectVisible)\">F</button>\r\n        <button id=\"objects\" [class.selectvisible]=\"SelectVisible === 'Objs'\" (click)=\"objectselect(SelectVisible)\">O</button>\r\n      </div>\r\n</div>\r\n\r\n\r\n\t\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/gs-viewer/viewer/viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_DataSubscriber__ = __webpack_require__("../../../../../src/app/gs-viewer/data/DataSubscriber.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { ResizedEvent } from 'angular-resize-event';
let ViewerComponent = class ViewerComponent extends __WEBPACK_IMPORTED_MODULE_2__data_DataSubscriber__["a" /* DataSubscriber */] {
    constructor(injector, myElement) {
        super(injector);
        this.Visible = "Objs";
        this.mySprites = [];
        this.textlabels = [];
        this.starsGeometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
        this.seVisible = false;
        this.SelectVisible = 'Objs';
        this.myElement = myElement;
    }
    ngOnInit() {
        let container = this.myElement.nativeElement.children.namedItem("container");
        /// check for container
        if (!container) {
            console.error("No container in Three Viewer");
            return;
        }
        ///
        let width = container.clientWidth;
        let height = container.clientHeight;
        let scene = this.dataService.getScene(width, height);
        let renderer = this.dataService.getRenderer();
        let camera = this.dataService.getCamera();
        let controls = this.dataService.getControls();
        container.appendChild(renderer.domElement);
        this.scene = scene;
        this.renderer = renderer;
        this.camera = camera;
        this.controls = controls;
        this.width = width;
        this.height = height;
        this.updateModel();
        // todo: check and refactor what is required?
        this.selecting = this.dataService.getselecting(); // todo: should this be in the data service??
        this.mouse = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"]();
        this.raycaster = new __WEBPACK_IMPORTED_MODULE_1_three__["Raycaster"]();
        this.scenechildren = this.dataService.getscenechild();
        this.scenechild = new __WEBPACK_IMPORTED_MODULE_1_three__["Scene"]();
        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["SphereGeometry"](0.3);
        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x00ff00 });
        this.sphere = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometry, material);
        this.sphere.visible = false;
        this.sphere.name = "sphereInter";
        this.scene.add(this.sphere);
        // render loop
        let self = this;
        function animate() {
            self.raycaster.setFromCamera(self.mouse, self.camera);
            //self.raycaster.linePrecision=0.05;
            self.raycaster.linePrecision = 0.5;
            //self.raycaster.params.Points.threshold=0.05;
            self.raycaster.params.Points.threshold = 0.2;
            self.scenechildren = self.dataService.getscenechild();
            var intersects = self.raycaster.intersectObjects(self.scenechildren);
            for (var i = 0; i < self.scenechildren.length; i++) {
                var currObj = self.scenechildren[i];
                if (self.dataService.getSelectingIndex(currObj.uuid) < 0) {
                    if (intersects[0] != undefined && intersects[0].object.uuid == currObj.uuid) {
                        if (self.seVisible === true) {
                            self.sphere.visible = true;
                            self.sphere.position.copy(intersects[0].point);
                        }
                    }
                    else {
                        self.sphere.visible = false;
                    }
                }
            }
            for (var i = 0; i < self.textlabels.length; i++) {
                self.textlabels[i].updatePosition();
            }
            if (self.dataService.selecting.length != 0) {
                self.updateview();
            }
            requestAnimationFrame(animate);
            self.renderer.render(self.scene, self.camera);
        }
        ;
        animate();
        for (var i = 0; i < this.getchildren().length; i++) {
            this.getchildren()[i]["material"].transparent = false;
        }
        //this.addgrid();
    }
    //
    //  checks if the flowchart service has a flowchart and calls update function for the viewer
    //
    notify(message) {
        if (message == "model_update" && this.scene) {
            this.updateModel();
        }
    }
    /// clears all children from the scene
    clearScene() {
        /// remove children from scene
        console.log(this.scene);
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].type === "Scene") {
                this.scene.remove(this.scene.children[i]);
                console.log("remove child");
            }
        }
    }
    onResize(event) {
        this.width = event.target.innerWidth; //event.ClientWidth;
        this.height = event.target.innerHeight; //event.ClientHeight;
        this.renderer.setSize(this.width, this.height);
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
    }
    //
    // update mode
    // todo: optimize
    // 
    updateModel() {
        this._model = this.dataService.getGsModel();
        if (!this._model || !this.scene) {
            console.warn("Model or Scene not defined.");
            return;
        }
        try {
            //this.scene_and_maps= gs.genThreeOptModelAndMaps( this._model );
            this.scene_and_maps = this.dataService.getscememaps();
            const scene_data = this.scene_and_maps.scene;
            //[three_mode, egde_map, tri_map] = genThreeModelandMaps()
            //[three_mode, label_data] = gs.getThreeWire(labels)
            //gs.getThreeFace(label)
            //gs.getThreeObj
            this.clearScene();
            let loader = new __WEBPACK_IMPORTED_MODULE_1_three__["ObjectLoader"]();
            let objectData = loader.parse(scene_data);
            if (objectData.children !== undefined) {
                var radius = 0;
                for (var i = 0; i < objectData.children.length; i++) {
                    let chd = objectData.children[i];
                    chd["material"].needsUpdate = true;
                    chd["material"].transparent = true;
                    chd["material"].blending = 1;
                    if (chd.name === "All faces" || chd.name === "All wires" || chd.name === "All edges" || chd.name === "All vertices" ||
                        chd.name === "Other lines" || chd.name === "All points") {
                        chd["geometry"].computeVertexNormals();
                        chd["geometry"].computeBoundingBox();
                        chd["geometry"].computeBoundingSphere();
                        if (chd.name === "All edges" || chd.name === "Other lines") {
                            this.basicMat = chd["material"].color;
                        }
                    }
                    if (chd["geometry"].boundingSphere.radius > radius) {
                        radius = chd["geometry"].boundingSphere.radius;
                        this.center = chd["geometry"].boundingSphere.center;
                    }
                }
            }
            this.controls.target.set(this.center.x, this.center.y, this.center.z);
            this.controls.update();
            this.scene.add(objectData);
            this.addgrid();
        }
        catch (ex) {
            console.error("Error displaying model:", ex);
        }
    }
    getMaterial(name) {
        var canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        var context = canvas.getContext('2d');
        context.textAlign = "center";
        context.fillText(name, canvas.width / 2, canvas.height / 2);
        context.font = "Bold  100px sans-serif";
        var texture = new __WEBPACK_IMPORTED_MODULE_1_three__["Texture"](canvas);
        texture.needsUpdate = true;
        var spriteMaterial = new __WEBPACK_IMPORTED_MODULE_1_three__["SpriteMaterial"]({ map: texture, color: 0xffffff });
        return spriteMaterial;
    }
    getchildren() {
        var children;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].name == "Scene") {
                children = this.scene.children[i].children;
                break;
            }
            if (i == this.scene.children.length - 1) {
                return [];
            }
        }
        return children;
    }
    select(seVisible) {
        event.stopPropagation();
        this.seVisible = !this.seVisible;
        if (this.seVisible) {
            if (this.SelectVisible === "Objs") {
                this.objectselect(this.SelectVisible);
            }
            for (var i = 0; i < this.getchildren().length; i++) {
                this.getchildren()[i]["material"].transparent = true;
            }
        }
        else {
            for (var i = 0; i < this.getchildren().length; i++) {
                this.getchildren()[i]["material"].transparent = false;
                if (this.getchildren()[i].name == "All edges" || this.getchildren()[i].name == "Other edges") {
                    this.getchildren()[i]["material"].color = this.basicMat;
                }
            }
        }
    }
    objectselect(SelectVisible) {
        event.stopPropagation();
        this.SelectVisible = "Objs";
        this.dataService.visible = "Objs";
        document.getElementById("object").style.color = null;
        document.getElementById("face").style.color = null;
        document.getElementById("wire").style.color = null;
        document.getElementById("edge").style.color = null;
        document.getElementById("vertice").style.color = null;
        var scenechildren = [];
        var children = this.getchildren();
        for (var i = 0; i < children.length; i++) {
            if (children[i].name === "All wires")
                children[i]["material"].opacity = 0;
            if (children[i].name === "All edges" || children[i].name === "Other lines") {
                children[i]["material"].opacity = 0;
                children[i]["material"].color = this.basicMat;
            }
            if (children[i].name === "All vertices")
                children[i]["material"].opacity = 0;
            if (children[i].name === "All objs" || children[i].name === "All faces") {
                children[i]["material"].opacity = 0.8;
                children[i].name = "All objs";
                scenechildren.push(children[i]);
            }
        }
        this.dataService.addscenechild(scenechildren);
    }
    faceselect(SelectVisible) {
        event.stopPropagation();
        this.SelectVisible = "Faces";
        this.dataService.visible = "Faces";
        document.getElementById("object").style.color = "grey";
        document.getElementById("face").style.color = null;
        document.getElementById("wire").style.color = null;
        document.getElementById("edge").style.color = null;
        document.getElementById("vertice").style.color = null;
        var scenechildren = [];
        var children = this.getchildren();
        for (var i = 0; i < children.length; i++) {
            if (children[i].name === "All wires")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All edges" || children[i].name === "Other lines") {
                children[i]["material"].opacity = 0.1;
                children[i]["material"].color = this.basicMat;
            }
            if (children[i].name === "All vertices")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All objs" || children[i].name === "All faces") {
                children[i]["material"].opacity = 0.8;
                children[i].name = "All faces";
                scenechildren.push(children[i]);
            }
        }
        this.dataService.addscenechild(scenechildren);
    }
    wireselect(SelectVisible) {
        event.stopPropagation();
        this.SelectVisible = "Wires";
        document.getElementById("object").style.color = "grey";
        document.getElementById("face").style.color = "grey";
        document.getElementById("wire").style.color = null;
        document.getElementById("edge").style.color = null;
        document.getElementById("vertice").style.color = null;
        var scenechildren = [];
        var children = this.getchildren();
        for (var i = 0; i < children.length; i++) {
            if (children[i].name === "All objs" || children[i].name === "All faces")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All edges" || children[i].name === "Other lines") {
                children[i]["material"].opacity = 0.1;
                children[i]["material"].color = this.basicMat;
            }
            if (children[i].name === "All vertices")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All wires") {
                children[i]["material"].opacity = 0.6;
                scenechildren.push(children[i]);
            }
        }
        this.dataService.addscenechild(scenechildren);
    }
    edgeselect(SelectVisible) {
        event.stopPropagation();
        this.SelectVisible = "Edges";
        document.getElementById("object").style.color = "grey";
        document.getElementById("face").style.color = "grey";
        document.getElementById("wire").style.color = "grey";
        document.getElementById("edge").style.color = null;
        document.getElementById("vertice").style.color = null;
        var scenechildren = [];
        var children = this.getchildren();
        for (var i = 0; i < children.length; i++) {
            children[i]["material"].transparent = true;
            if (children[i].name === "All objs" || children[i].name === "All faces")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All wires")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All vertices")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All edges" || children[i].name === "Other lines") {
                children[i]["material"].opacity = 0.5;
                children[i]["material"].color = new __WEBPACK_IMPORTED_MODULE_1_three__["Color"](255, 255, 0);
                scenechildren.push(children[i]);
            }
        }
        this.dataService.addscenechild(scenechildren);
    }
    verticeselect(SelectVisible) {
        event.stopPropagation();
        this.SelectVisible = "Vertices";
        document.getElementById("object").style.color = "grey";
        document.getElementById("face").style.color = "grey";
        document.getElementById("wire").style.color = "grey";
        document.getElementById("edge").style.color = "grey";
        document.getElementById("vertice").style.color = null;
        var scenechildren = [];
        var children = this.getchildren();
        for (var i = 0; i < children.length; i++) {
            if (children[i].name === "All objs" || children[i].name === "All faces")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All wires")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All edges" || children[i].name === "Other lines") {
                children[i]["material"].opacity = 0.1;
                children[i]["material"].color = this.basicMat;
            }
            if (children[i].name === "All vertices") {
                children[i]["material"].opacity = 1;
                //scenechildren.push(children[i]);
            }
            if (children[i].name === "All points") {
                scenechildren.push(children[i]);
            }
        }
        this.dataService.addscenechild(scenechildren);
    }
    pointselect(SelectVisible) {
        event.stopPropagation();
        this.verticeselect("Vertices");
        this.SelectVisible = "Points";
    }
    //
    //  events
    //
    mousedown($event) {
        this.mDownTime = (new Date()).getTime();
    }
    mouseup($event) {
        this.mUpTime = (new Date()).getTime();
    }
    onDocumentMouseMove(event) {
        this.mouse.x = (event.offsetX / this.width) * 2 - 1;
        this.mouse.y = -(event.offsetY / this.height) * 2 + 1;
    }
    addgrid() {
        var max = 8;
        var center = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0);
        var radius = 0;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].type === "Scene") {
                for (var j = 0; j < this.scene.children[i].children.length; j++) {
                    if (this.scene.children[i].children[j]["geometry"].boundingSphere.radius > radius) {
                        center = this.scene.children[i].children[j]["geometry"].boundingSphere.center;
                        radius = this.scene.children[i].children[j]["geometry"].boundingSphere.radius;
                        max = Math.ceil(radius + Math.max(Math.abs(center.x), Math.abs(center.y), Math.abs(center.z))) * 2;
                        break;
                    }
                }
            }
            if (this.scene.children[i].name === "GridHelper") {
                this.scene.remove(this.scene.children[i]);
                i = i - 1;
            }
        }
        if (this.dataService.grid) {
            var gridhelper = new __WEBPACK_IMPORTED_MODULE_1_three__["GridHelper"](max, max);
            gridhelper.name = "GridHelper";
            var vector = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 1, 0);
            gridhelper.lookAt(vector);
            gridhelper.position.set(center.x, center.y, 0);
            this.scene.add(gridhelper);
        }
    }
    /// selects object from three.js scene
    onDocumentMouseDown(event) {
        //if(this.seVisible===true) console.log(event);
        //console.log(this.scene_and_maps);
        var threshold;
        if (this.seVisible === true) {
            threshold = 100;
        }
        else {
            threshold = 0.1;
        }
        if (Math.abs(this.mDownTime - this.mUpTime) > threshold) {
            this.mDownTime = 0;
            this.mUpTime = 0;
            return;
        }
        var selectedObj, intersects;
        var select = false;
        this.scenechildren = this.dataService.getscenechild();
        this.raycaster.setFromCamera(this.mouse, this.camera);
        //this.raycaster.linePrecision = 0.05;
        this.raycaster.linePrecision = 0.5;
        //this.raycaster.params.Points.threshold=0.05;
        this.raycaster.params.Points.threshold = 0.2;
        intersects = this.raycaster.intersectObjects(this.scenechildren);
        if (intersects.length > 0) {
            selectedObj = intersects[0].object;
            if (this.scenechildren[0].name === "All objs") {
                const index = Math.floor(intersects[0].faceIndex / 2);
                const path = this.scene_and_maps.faces_map.get(index);
                const face = this._model.getGeom().getTopo(path);
                const label = "o" + path.id;
                const label_xyz = face.getLabelCentroid();
                const faces = face.getObj().getFaces();
                if (this.textlabels.length === 0) {
                    for (var n = 0; n < faces.length; n++) {
                        var verts = faces[n].getVertices();
                        var verts_xyz = verts.map((v) => v.getPoint().getPosition());
                        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                        for (var i = 0; i < verts_xyz.length; i++) {
                            geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                        }
                        geometry.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](0, 2, 1));
                        geometry.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](0, 3, 2));
                        var mesh = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometry, new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] }));
                        mesh["geometry"].computeVertexNormals();
                        mesh.userData.id = label;
                        mesh.name = "selects";
                        this.scene.add(mesh);
                    }
                    this.addTextLabel(label, label_xyz, label, index, path);
                }
                else {
                    for (var j = 0; j < this.scene.children.length; j++) {
                        if (label === this.scene.children[j].userData.id) {
                            select = true;
                            this.scene.remove(this.scene.children[j]);
                            j = j - 1;
                        }
                    }
                    for (var j = 0; j < this.textlabels.length; j++) {
                        if (label === this.textlabels[j]["id"]) {
                            select = true;
                            this.removeTextLabel(this.textlabels[j]["id"]);
                            j = j - 1;
                        }
                    }
                    if (select == false) {
                        for (var n = 0; n < faces.length; n++) {
                            var verts = faces[n].getVertices();
                            var verts_xyz = verts.map((v) => v.getPoint().getPosition());
                            var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                            for (var i = 0; i < verts_xyz.length; i++) {
                                geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                            }
                            geometry.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](0, 2, 1));
                            geometry.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](0, 3, 2));
                            var mesh = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometry, new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] }));
                            mesh.userData.id = label;
                            mesh["geometry"].computeVertexNormals();
                            mesh.name = "selects";
                            this.scene.add(mesh);
                        }
                        this.addTextLabel(label, label_xyz, label, index, path);
                    }
                }
            }
            if (this.scenechildren[0].name === "All faces") {
                const index = Math.floor(intersects[0].faceIndex / 2);
                const path = this.scene_and_maps.faces_map.get(index);
                const face = this._model.getGeom().getTopo(path);
                const label = face.getLabel();
                const label_xyz = face.getLabelCentroid();
                const verts = face.getVertices();
                const verts_xyz = verts.map((v) => v.getPoint().getPosition());
                if (this.textlabels.length === 0) {
                    var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                    for (var i = 0; i < verts_xyz.length; i++) {
                        geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                    }
                    geometry.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](0, 2, 1));
                    geometry.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](0, 3, 2));
                    var mesh = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometry, new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] }));
                    mesh.userData.id = label;
                    mesh["geometry"].computeVertexNormals();
                    mesh.name = "selects";
                    this.scene.add(mesh);
                    this.addTextLabel(label, label_xyz, label, index, path);
                }
                else {
                    for (var j = 0; j < this.scene.children.length; j++) {
                        if (label === this.scene.children[j].userData.id) {
                            select = true;
                            this.scene.remove(this.scene.children[j]);
                        }
                    }
                    for (var j = 0; j < this.textlabels.length; j++) {
                        if (label === this.textlabels[j]["id"]) {
                            select = true;
                            this.removeTextLabel(this.textlabels[j]["id"]);
                        }
                    }
                    if (select == false) {
                        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                        for (var i = 0; i < verts_xyz.length; i++) {
                            geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                        }
                        geometry.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](0, 2, 1));
                        geometry.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](0, 3, 2));
                        var mesh = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometry, new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] }));
                        mesh.userData.id = label;
                        mesh["geometry"].computeVertexNormals();
                        mesh.name = "selects";
                        this.scene.add(mesh);
                        this.addTextLabel(label, label_xyz, label, index, path);
                    }
                }
            }
            if (this.scenechildren[0].name == "All wires") {
                const index = Math.floor(intersects[0].index / 2);
                /*console.log(index);
                console.log(this.scene_and_maps.wires_map);*/
                const path = this.scene_and_maps.wires_map.get(index);
                const wire = this._model.getGeom().getTopo(path);
                const label = wire.getLabel();
                const label_xyz = wire.getLabelCentroid();
                const verts = wire.getVertices();
                const verts_xyz = verts.map((v) => v.getPoint().getPosition());
                if (wire.isClosed()) {
                    verts_xyz.push(verts_xyz[0]);
                }
                if (this.textlabels.length === 0) {
                    var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                    for (var i = 0; i < verts_xyz.length; i++) {
                        geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                    }
                    var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                    const line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                    line.userData.id = label;
                    line["material"].needsUpdate = true;
                    line.name = "selects";
                    this.scene.add(line);
                    this.addTextLabel(label, label_xyz, label, index, path);
                }
                else {
                    for (var j = 0; j < this.scene.children.length; j++) {
                        if (label === this.scene.children[j].userData.id) {
                            select = true;
                            this.scene.remove(this.scene.children[j]);
                        }
                    }
                    for (var j = 0; j < this.textlabels.length; j++) {
                        if (label === this.textlabels[j]["id"]) {
                            select = true;
                            this.removeTextLabel(this.textlabels[j]["id"]);
                        }
                    }
                    if (select == false) {
                        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                        for (var i = 0; i < verts_xyz.length; i++) {
                            geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                        }
                        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                        const line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                        line.userData.id = label;
                        line["material"].needsUpdate = true;
                        line.name = "selects";
                        this.scene.add(line);
                        this.addTextLabel(label, label_xyz, label, index, path);
                    }
                }
            }
            if (this.scenechildren[0].name == "All edges" || this.scenechildren[0].name == "Other lines") {
                const index = Math.floor(intersects[0].index / 2);
                const path = this.scene_and_maps.edges_map.get(index);
                const edge = this._model.getGeom().getTopo(path);
                const label = edge.getLabel();
                const label_xyz = edge.getLabelCentroid();
                const verts = edge.getVertices();
                const verts_xyz = verts.map((v) => v.getPoint().getPosition());
                if (this.textlabels.length === 0) {
                    var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                    for (var i = 0; i < verts_xyz.length; i++) {
                        geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                    }
                    var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                    const line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                    line.userData.id = label;
                    line["material"].needsUpdate = true;
                    line.name = "selects";
                    this.scene.add(line);
                    this.addTextLabel(label, label_xyz, label, index, path);
                }
                else {
                    for (var j = 0; j < this.scene.children.length; j++) {
                        if (label === this.scene.children[j].userData.id) {
                            select = true;
                            this.scene.remove(this.scene.children[j]);
                        }
                    }
                    for (var j = 0; j < this.textlabels.length; j++) {
                        if (label === this.textlabels[j]["id"]) {
                            select = true;
                            this.removeTextLabel(this.textlabels[j]["id"]);
                        }
                    }
                    if (select == false) {
                        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                        for (var i = 0; i < verts_xyz.length; i++) {
                            geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                        }
                        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                        const line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                        line.userData.id = label;
                        line.name = "selects";
                        this.scene.add(line);
                        this.addTextLabel(label, label_xyz, label, index, path);
                    }
                }
            }
            /*if(this.scenechildren[0].name=="Other lines"){
      
            }*/
            if (this.scenechildren[0].name === "All points") {
                //for(var n=0;n<intersects.length;n++){
                //console.log(intersects);
                var index = intersects[0].index;
                var attributevertix = this.dataService.getattrvertix();
                var id = this._model.getGeom().getAllPoints()[index].getLabel();
                //console.log(id);
                var label = "";
                if (this.SelectVisible == "Points") {
                    if (label === "")
                        label = id;
                    else
                        label = label + "<br/>" + id;
                }
                else {
                    for (var i = 0; i < attributevertix.length; i++) {
                        if (id === attributevertix[i].pointid) {
                            var str = attributevertix[i].vertixlabel;
                            if (label === "")
                                label = str;
                            else
                                label = label + "<br/>" + str;
                        }
                    }
                    //}
                }
                const verts_xyz = this._model.getGeom().getAllPoints()[index].getPosition(); //vertices.getPoint().getPosition();
                if (this.textlabels.length === 0) {
                    var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                    geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz[0], verts_xyz[1], verts_xyz[2]));
                    var pointsmaterial = new __WEBPACK_IMPORTED_MODULE_1_three__["PointsMaterial"]({ color: 0x00ff00, size: 1 });
                    const points = new __WEBPACK_IMPORTED_MODULE_1_three__["Points"](geometry, pointsmaterial);
                    points.userData.id = id;
                    points["material"].needsUpdate = true;
                    points.name = "selects";
                    this.scene.add(points);
                    this.addTextLabel(label, verts_xyz, id, index, id);
                }
                else {
                    for (var j = 0; j < this.scene.children.length; j++) {
                        if (id === this.scene.children[j].userData.id) {
                            select = true;
                            this.scene.remove(this.scene.children[j]);
                        }
                    }
                    for (var j = 0; j < this.textlabels.length; j++) {
                        if (id === this.textlabels[j]["id"]) {
                            select = true;
                            this.removeTextLabel(this.textlabels[j]["id"]);
                        }
                    }
                    if (select == false) {
                        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                        geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz[0], verts_xyz[1], verts_xyz[2]));
                        var pointsmaterial = new __WEBPACK_IMPORTED_MODULE_1_three__["PointsMaterial"]({ color: 0x00ff00, size: 1 });
                        const points = new __WEBPACK_IMPORTED_MODULE_1_three__["Points"](geometry, pointsmaterial);
                        points.userData.id = id;
                        points["material"].needsUpdate = true;
                        points.name = "selects";
                        this.scene.add(points);
                        this.addTextLabel(label, verts_xyz, id, index, id);
                    }
                }
            }
        }
        else {
            for (var i = 0; i < this.dataService.sprite.length; i++) {
                this.dataService.sprite[i].visible = false;
            }
            for (var i = 0; i < this.scene.children.length; i++) {
                if (this.scene.children[i].name == "selects") {
                    this.scene.remove(this.scene.children[i]);
                    i = i - 1;
                }
            }
            for (var i = 0; i < this.textlabels.length; i++) {
                this.removeTextLabel(this.textlabels[i]["id"]);
                i = i - 1;
            }
        }
        //}
    }
    updateview() {
        this.Visible = this.dataService.visible;
        var intersects = this.raycaster.intersectObjects(this.scenechildren);
        if (intersects.length > 0) {
            if (this.dataService.selecting.length != 0) {
                for (var i = 0; i < this.mySprites.length; i++) {
                    if (this.mySprites[i].parent.name === this.Visible) {
                        let spr = this.mySprites[i];
                        if (Math.abs(intersects[0].point.x - this.mySprites[i].position.x) < 0.05
                            && Math.abs(intersects[0].point.y - this.mySprites[i].position.y) < 0.05
                            && Math.abs(intersects[0].point.z - this.mySprites[i].position.z) < 0.05) {
                            //let spr: THREE.Sprite =this.mySprites[i];
                            spr.visible = true;
                        }
                        else {
                            //let spr: THREE.Sprite =this.mySprites[i];
                            spr.visible = false;
                        }
                    }
                }
            }
        } /*else{
          this.Visible=this.dataService.visible;
          for(var i=0;i<this.mySprites.length;i++){
            if(this.mySprites[i].parent.name===this.Visible){
              let spr: THREE.Sprite =this.mySprites[i];
              spr.visible = false;
            }
          }
        }*/
        for (var i = 0; i < this.dataService.sprite.length; i++) {
            let spr = this.dataService.sprite[i];
            spr.visible = true;
        }
    }
    //To add text labels just provide label text, label position[x,y,z] and its id
    addTextLabel(label, label_xyz, id, index, path) {
        let container = this.myElement.nativeElement.children.namedItem("container");
        let star = this.creatStarGeometry(label_xyz);
        let textLabel = this.createTextLabel(label, star, id, index, path);
        this.starsGeometry.vertices.push(star);
        this.textlabels.push(textLabel);
        this.dataService.pushselecting(textLabel);
        container.appendChild(textLabel.element);
    }
    //To remove text labels just provide its id
    removeTextLabel(id) {
        let i = 0;
        for (i = 0; i < this.textlabels.length; i++) {
            if (this.textlabels[i].id == id) {
                let container = this.myElement.nativeElement.children.namedItem("container");
                container.removeChild(this.textlabels[i].element);
                let index = this.starsGeometry.vertices.indexOf(this.textlabels[i].parent);
                if (index !== -1) {
                    this.starsGeometry.vertices.splice(index, 1);
                }
                break;
            }
        }
        if (i < this.textlabels.length) {
            this.textlabels.splice(i, 1);
            this.dataService.spliceselecting(i, 1);
        }
    }
    creatStarGeometry(label_xyz) {
        let star = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"]();
        star.x = label_xyz[0];
        star.y = label_xyz[1];
        star.z = label_xyz[2];
        return star;
    }
    createTextLabel(label, star, id, index, path) {
        let div = this.createLabelDiv();
        var self = this;
        let textLabel = {
            id: id,
            index: index,
            path: path,
            element: div,
            parent: false,
            position: new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0),
            setHTML: function (html) {
                this.element.innerHTML = html;
            },
            setParent: function (threejsobj) {
                this.parent = threejsobj;
            },
            updatePosition: function () {
                if (parent) {
                    this.position.copy(this.parent);
                }
                var coords2d = this.get2DCoords(this.position, self.camera);
                this.element.style.left = coords2d.x + 'px';
                this.element.style.top = coords2d.y + 'px';
            },
            get2DCoords: function (position, camera) {
                var vector = position.project(camera);
                vector.x = (vector.x + 1) / 2 * self.width;
                vector.y = -(vector.y - 1) / 2 * self.height;
                return vector;
            }
        };
        textLabel.setHTML(label);
        textLabel.setParent(star);
        return textLabel;
    }
    createLabelDiv() {
        var div = document.createElement("div");
        div.style.color = '#00f';
        div.style.fontFamily = '"Fira Mono", Monaco, "Andale Mono", "Lucida Console", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace';
        div.style.margin = '-5px 0 0 15px';
        div.style.pointerEvents = 'none';
        div.style.position = 'absolute';
        div.style.width = '100';
        div.style.height = '100';
        div.style.top = '-1000';
        div.style.left = '-1000';
        div.style.textShadow = "0px 0px 3px white";
        div.style.color = "black";
        return div;
    }
    zoomfit() {
        event.preventDefault();
        if (this.selecting.length === 0) {
            const obj = new __WEBPACK_IMPORTED_MODULE_1_three__["Object3D"]();
            for (var i = 0; i < this.scene.children.length; i++) {
                if (this.scene.children[i].name !== "GridHelper") {
                    obj.children.push(this.scene.children[i]);
                }
            }
            var boxHelper = new __WEBPACK_IMPORTED_MODULE_1_three__["BoxHelper"](obj);
            boxHelper["geometry"].computeBoundingBox();
            boxHelper["geometry"].computeBoundingSphere();
            var boundingSphere = boxHelper["geometry"].boundingSphere;
            var center = boundingSphere.center;
            var radius = boundingSphere.radius;
            var fov = this.camera.fov * (Math.PI / 180);
            var vec_centre_to_pos = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"]();
            vec_centre_to_pos.subVectors(this.camera.position, center);
            var tmp_vec = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](center.x + Math.abs(radius / Math.sin(fov / 2)), center.y + Math.abs(radius / Math.sin(fov / 2)), center.z + Math.abs(radius / Math.sin(fov / 2)));
            vec_centre_to_pos.setLength(tmp_vec.length());
            var perspectiveNewPos = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"]();
            perspectiveNewPos.addVectors(center, vec_centre_to_pos);
            var newLookAt = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](center.x, center.y, center.z);
            this.camera.position.copy(perspectiveNewPos);
            this.camera.lookAt(newLookAt);
            this.camera.updateProjectionMatrix();
            this.controls.target.set(newLookAt.x, newLookAt.y, newLookAt.z);
        }
        else {
            var axisX, axisY, axisZ, centerX, centerY, centerZ = 0;
            var radius = 0;
            for (var i = 0; i < this.selecting.length; i++) {
                axisX += this.selecting[i].geometry.boundingSphere.center.x;
                axisY += this.selecting[i].geometry.boundingSphere.center.y;
                axisZ += this.selecting[i].geometry.boundingSphere.center.z;
                radius = Math.max(this.selecting[i].geometry.boundingSphere.radius, radius);
            }
            centerX = axisX / this.scene.children[1].children.length;
            centerY = axisY / this.scene.children[1].children.length;
            centerY = axisY / this.scene.children[1].children.length;
            var center = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](centerX, centerY, centerZ);
            var fov = this.camera.fov * (Math.PI / 180);
            var vec_centre_to_pos = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"]();
            vec_centre_to_pos.subVectors(this.camera.position, center);
            var tmp_vec = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](center.x + Math.abs(radius / Math.sin(fov / 2)), center.y + Math.abs(radius / Math.sin(fov / 2)), center.z + Math.abs(radius / Math.sin(fov / 2)));
            vec_centre_to_pos.setLength(tmp_vec.length());
            var perspectiveNewPos = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"]();
            perspectiveNewPos.addVectors(center, vec_centre_to_pos);
            var newLookAt = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](center.x, center.y, center.z);
            this.camera.position.copy(perspectiveNewPos);
            this.camera.lookAt(newLookAt);
            this.camera.updateProjectionMatrix();
            this.controls.target.set(newLookAt.x, newLookAt.y, newLookAt.z);
        }
    }
};
ViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-viewer',
        template: __webpack_require__("../../../../../src/app/gs-viewer/viewer/viewer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gs-viewer/viewer/viewer.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
], ViewerComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/console/console.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"btn-container\">\r\n\t\t<button mat-button (click)=\"clearConsole()\"><i class=\"fa fa-eraser\"></i></button>\r\n\t</div>\r\n\t<div class = \"console-log\">\r\n\t\t<div class=\"message-container\" *ngFor=\"let msg of _messages;\">\r\n\t\t\t<span class=\"time\">{{msg.time | date:'mediumTime'}}</span>\r\n\t\t\t<div class=\"message\"\r\n\t\t\t\t[innerHTML]=\"msg.message\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/console/console.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.container {\n  position: relative;\n  height: 100%;\n  overflow-y: auto !important;\n  box-sizing: border-box !important;\n  padding: 15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap; }\n  .container .message-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column wrap;\n            flex-flow: column wrap;\n    margin: 7.5px;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-flex: 0;\n        -ms-flex-positive: 0;\n            flex-grow: 0;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    padding: 0 5 0 0 !important;\n    border-bottom: 1px solid #8AA8C0;\n    font-family: 'Ubuntu Mono', monospace; }\n    .container .message-container .time {\n      min-width: 50%;\n      font-size: 10px;\n      white-space: nowrap;\n      color: grey !important; }\n    .container .message-container .message {\n      min-width: auto;\n      font-size: 12px;\n      color: #395D73 !important; }\n      .container .message-container .message .error {\n        color: red; }\n  .container button {\n    max-width: 30px;\n    height: 30px;\n    min-width: 30px;\n    padding: 0px !important;\n    border-radius: 50%;\n    border: 1px solid #395D73;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .container button .fa-eraser {\n      height: 15px;\n      font-size: 15px !important;\n      color: #395D73;\n      padding: 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n    .container button:hover {\n      background-color: #F1F1F1 !important; }\n      .container button:hover .fa-eraser {\n        color: #F07A79 !important; }\n\n.btn-container {\n  position: absolute;\n  right: 60px;\n  top: 15px; }\n  .btn-container button {\n    position: fixed; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/console/console.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_console_service__ = __webpack_require__("../../../../../src/app/global-services/console.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ConsoleComponent = class ConsoleComponent {
    constructor(consoleService) {
        this.consoleService = consoleService;
        this._messages = [];
        this._subscription = this.consoleService.getMessage().subscribe(message => {
            this.notify();
        });
    }
    ngOnInit() {
        this._messages = this.consoleService.getContent();
    }
    notify() {
        this._messages = this.consoleService.getContent();
    }
    clearConsole() {
        this.consoleService.clearConsole();
    }
};
ConsoleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-console',
        template: __webpack_require__("../../../../../src/app/ui-components/console/console.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/console/console.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__global_services_console_service__["a" /* ConsoleService */]])
], ConsoleComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/controls/flowchart-controls/flowchart-controls.component.html":
/***/ (function(module, exports) {

module.exports = "<!--- Not in use -->\r\n<div class=\"viewer\">\r\n\t\r\n\t<div class=\"header\">\r\n\t\t\r\n\t\t<div class=\"title\">Flowchart Controls</div>\r\n\t\t<div class=\"buttons\">\r\n\t\t\t<button (click)=\"newfile()\">New File</button>\r\n\t\t\t<button type=\"submit\" (click)=\"loadFile()\">Load File</button>\r\n\t\t\t<button (click)=\"execute()\">Run Code</button>\r\n\t\t\t<button (click)=\"save()\">Save Flowchart</button>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n\t<div class=\"container\">\r\n\t\t\r\n\t</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/controls/flowchart-controls/flowchart-controls.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n", ""]);

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

module.exports = "<mat-toolbar style=\"min-height: 45px;\">\r\n  <mat-toolbar-row class=\"menu-bar\">\r\n    <div class='section'>\r\n\t\t<ul class='menu'>\r\n\t\t\t<li class='menu-item' [matMenuTriggerFor]=\"file_menu\">\r\n\t\t\t\tFile\r\n\t\t\t</li>\r\n\t\t\t\r\n\t\t\t<li class='menu-item'>Node</li>\r\n\t\t\t<li class='menu-item'>Code</li>\r\n\t\t\t<li class='menu-item'>Help</li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<div class='section'>\r\n\t\t<span id='branding'>Mobius v2.0</span>\r\n\t</div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<mat-menu class=\"menu\" #file_menu=\"matMenu\" yPosition=\"above\" [overlapTrigger]=\"false\">\r\n  <span mat-menu-item (click)=\"newfile()\">New File</span>\r\n  <span mat-menu-item (click)=\"save()\">Save File</span>\r\n  <span mat-menu-item (click)=\"openPicker()\">\r\n  \t\t<input #fileInput style=\"display: none;\"\r\n  \t\ttype=\"file\" (change)=\"loadFile()\"/>\r\n  \t\tLoad File\r\n  </span>\r\n  <span mat-menu-item (click)=\"execute()\">Run File</span>\r\n</mat-menu>\r\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/controls/main-menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset, .menu-bar ul.menu {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.menu-bar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background-color: #F7F7F7;\n  height: 45px;\n  line-height: 45px;\n  padding: 5px 15px; }\n  .menu-bar .section {\n    width: auto;\n    display: inline-block; }\n  .menu-bar #branding {\n    font-weight: bolder;\n    cursor: pointer;\n    font-size: 14px; }\n  .menu-bar ul.menu {\n    list-style: none; }\n    .menu-bar ul.menu .menu {\n      margin-left: 10px;\n      width: 200px; }\n    .menu-bar ul.menu li {\n      display: inline;\n      font-size: 16px;\n      margin-right: 10px; }\n      .menu-bar ul.menu li:hover {\n        color: #5D5959;\n        cursor: pointer; }\n", ""]);

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

module.exports = "<div class=\"toolbox\">\r\n\t<div class = \"toolbox-content\">\r\n\t\t<div class=\"inOutBtns\">\r\n\t\t\t<span class=\"fn_name\" (click)=\"addPort('in')\">Add Input</span>\r\n\t\t\t<span class =\"fn_name\" (click)=\"addPort('out')\">Add Output</span>\r\n\t\t</div>\r\n\r\n\t\t<mat-list condensed>\r\n\t\t\t<mat-list-item class=\"fn_name\" *ngFor=\"let type of procedureTypes\"\r\n\t\t\t\t\t\t\t\t \t\t(click)=\"addProcedure($event, type)\">{{getStringForProcedureType(type)}}</mat-list-item>\r\n\t\t</mat-list>\r\n\t\t<mat-accordion multi=\"true\">\r\n\r\n\t\t\t\t<!-- inputs -->\r\n\t\t\t\t<mat-expansion-panel [expanded]=\"true\" *ngFor=\"let cat of _category\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\t  {{ cat }} \r\n\t\t\t\t\t\t  <mat-icon style=\"font-size: 14px; margin-left: 5px;\" (click)=\"openModuleHelp($event, cat)\">help_outline</mat-icon>\r\n\t\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t\t  <!-- This is a summary of the content -->\r\n\t\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t\t</mat-expansion-panel-header>\r\n\r\n\t\t\t\t\t<mat-list condensed>\r\n\t\t\t\t\t \t<mat-list-item class=\"fn_name\" *ngFor=\"let fn of _moduleList[cat]\" (click)=\"addActionProcedure(fn);\"> \r\n\t\t\t\t\t \t\t<span class=\"module\">{{ fn.module }}</span>.<span class=\"function\">{{ fn.name }}</span>\r\n\t\t\t\t\t \t</mat-list-item>\r\n\t\t\t\t\t</mat-list>\r\n\r\n\t\t\t\t</mat-expansion-panel>\r\n\t\t\t\t\r\n\t\t</mat-accordion>\r\n\t\t\r\n\t</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/controls/modulebox/modulebox.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.disabled {\n  color: #8AA8C0 !important; }\n  .disabled:hover {\n    color: #8AA8C0 !important; }\n\n.toolbox {\n  height: 100%;\n  background-color: #F1F1F1;\n  position: relative;\n  box-sizing: border-box;\n  font-size: 12px;\n  line-height: 14px;\n  color: #395D73;\n  cursor: pointer; }\n  .toolbox .inOutBtns {\n    padding-left: 15px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    border-bottom: 1px solid #8AA8C0; }\n    .toolbox .inOutBtns span {\n      display: block; }\n  .toolbox .toolbox-content {\n    height: 100%;\n    overflow-y: auto;\n    overflow-x: hidden; }\n    .toolbox .toolbox-content .fn_name {\n      height: auto;\n      font-size: 12px;\n      line-height: 14px;\n      color: #395D73;\n      cursor: pointer;\n      white-space: nowrap; }\n      .toolbox .toolbox-content .fn_name:hover {\n        color: #F0BFA0; }\n    .toolbox .toolbox-content mat-expansion-panel {\n      margin: 0 !important; }\n    .toolbox .toolbox-content mat-expansion-panel-header {\n      background-color: #F1F1F1 !important;\n      border-top: 1px solid #8AA8C0 !important;\n      border-bottom: 1px solid #8AA8C0 !important;\n      padding-left: 15px !important; }\n      .toolbox .toolbox-content mat-expansion-panel-header mat-panel-title {\n        color: #395D73 !important;\n        font-weight: bold !important;\n        font-size: 12px !important;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n      .toolbox .toolbox-content mat-expansion-panel-header mat-icon {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n      .toolbox .toolbox-content mat-expansion-panel-header:hover {\n        background-color: #F1F1F1 !important; }\n    .toolbox .toolbox-content mat-list {\n      background-color: #F1F1F1 !important;\n      padding-top: 5px;\n      padding-bottom: 5px; }\n  .toolbox span.module {\n    color: #F3A32A !important;\n    font-weight: bold; }\n  .toolbox span.function {\n    color: #7B52AB !important;\n    font-weight: bold; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/controls/modulebox/modulebox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_layout_service__ = __webpack_require__("../../../../../src/app/global-services/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_classes_code_CodeModule__ = __webpack_require__("../../../../../src/app/base-classes/code/CodeModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_classes_procedure_ProcedureModule__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureModule.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let ModuleboxComponent = class ModuleboxComponent extends __WEBPACK_IMPORTED_MODULE_3__base_classes_viz_Viewer__["a" /* Viewer */] {
    constructor(injector, layoutService) {
        super(injector, "module-viewer");
        this.layoutService = layoutService;
        this._moduleList = [];
        this._category = [];
        this._procedureArr = [];
        this.procedureTypes = [
            __WEBPACK_IMPORTED_MODULE_4__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Data,
            __WEBPACK_IMPORTED_MODULE_4__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].ForLoopControl,
            __WEBPACK_IMPORTED_MODULE_4__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].IfElseControl
        ];
    }
    ngOnInit() {
        this._moduleList = [];
        this._node = this.flowchartService.getSelectedNode();
        this._procedureArr = this._node.getProcedure();
        let modules = this.flowchartService.getModules();
        for (let mod = 0; mod < modules.length; mod++) {
            let user_module = modules[mod];
            this._category.push(user_module["_name"]);
            this._moduleList[user_module["_name"]] = this._moduleList.concat(__WEBPACK_IMPORTED_MODULE_2__base_classes_code_CodeModule__["b" /* ModuleUtils */].getFunctions(user_module));
        }
    }
    reset() {
        this._node = undefined;
        this._procedureArr = [];
    }
    update() {
        this._node = this.flowchartService.getSelectedNode();
        if (this._node !== undefined) {
            this._procedureArr = this._node.getProcedure();
        }
        else {
            // do nothing
        }
    }
    //
    //
    //
    addActionProcedure(fn) {
        if (this._node == undefined) {
            alert("Oops.. No Node Selected");
            return;
        }
        let prod_data = { result: "", module: fn.module, function: fn.name, params: fn.params };
        let prod = __WEBPACK_IMPORTED_MODULE_4__base_classes_procedure_ProcedureModule__["a" /* ProcedureFactory */].getProcedure(__WEBPACK_IMPORTED_MODULE_4__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Action, prod_data);
        this.flowchartService.addProcedure(prod);
    }
    getStringForProcedureType(type) {
        let value = "";
        if (type == __WEBPACK_IMPORTED_MODULE_4__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Data) {
            value = "variable";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_4__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Action) {
            value = "function";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_4__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].IfElseControl) {
            value = "if-else";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_4__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].ForLoopControl) {
            value = "for-each loop";
        }
        return value;
    }
    addProcedure($event, type) {
        $event.stopPropagation();
        let prod;
        if (type == __WEBPACK_IMPORTED_MODULE_4__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Data) {
            let default_variable_name = "var" + this._procedureArr.length;
            let prod_data = { result: default_variable_name, value: "undefined" };
            prod = __WEBPACK_IMPORTED_MODULE_4__base_classes_procedure_ProcedureModule__["a" /* ProcedureFactory */].getProcedure(__WEBPACK_IMPORTED_MODULE_4__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Data, prod_data);
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_4__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].IfElseControl) {
            let prod_data = { if_condition: "undefined", el_condition: "undefined" };
            prod = __WEBPACK_IMPORTED_MODULE_4__base_classes_procedure_ProcedureModule__["a" /* ProcedureFactory */].getProcedure(__WEBPACK_IMPORTED_MODULE_4__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].IfElseControl, prod_data);
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_4__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].ForLoopControl) {
            let prod_data = { variable: "i", array_name: "[]" };
            prod = __WEBPACK_IMPORTED_MODULE_4__base_classes_procedure_ProcedureModule__["a" /* ProcedureFactory */].getProcedure(__WEBPACK_IMPORTED_MODULE_4__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].ForLoopControl, prod_data);
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_4__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Action) {
        }
        else {
            throw Error("Procedure Type invalid");
        }
        this.flowchartService.addProcedure(prod);
    }
    addPort(type) {
        // add port 
        if (type == "in") {
            this._node.addInput();
        }
        else if (type == "out") {
            this._node.addOutput();
        }
        else {
            throw Error("Unknown Port Type");
        }
        this.flowchartService.update();
    }
    openModuleHelp($event, category) {
        $event.stopPropagation();
        this.layoutService.showHelp({ module: category, name: undefined });
    }
};
ModuleboxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-modulebox',
        template: __webpack_require__("../../../../../src/app/ui-components/controls/modulebox/modulebox.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/controls/modulebox/modulebox.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */], __WEBPACK_IMPORTED_MODULE_1__global_services_layout_service__["a" /* LayoutService */]])
], ModuleboxComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/dialogs/file-load-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileLoadDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm2015/material.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//
// Component for Parameter Settings
//
let FileLoadDialogComponent = class FileLoadDialogComponent {
    constructor(dialogRef) {
        // let myStorage = window.localStorage;
        // let property = MOBIUS.PROPERTY.FLOWCHART;
        // let storageString = myStorage.getItem(property);
        this.dialogRef = dialogRef;
        // if(storageString){
        //   this.message = "A file saved at " + CircularJSON.parse(storageString)["_lastSaved"] + " was found. \
        //         Do you want to reload?"
        // }
    }
    onNoClick() {
        this.dialogRef.close('new');
    }
    closeDialog(action) {
        this.dialogRef.close(action);
    }
};
FileLoadDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'file-load-dialog',
        template: __webpack_require__("../../../../../src/app/ui-components/dialogs/file-load-dialog.html"),
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */]])
], FileLoadDialogComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/dialogs/file-load-dialog.html":
/***/ (function(module, exports) {

module.exports = "<p>{{message}}</p>\r\n\r\n<hr>\r\n\r\n<button (click)=\"closeDialog('load')\">Load File</button>\r\n<button (click)=\"closeDialog('new')\">New File</button>"

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"editor\">\r\n\t\r\n\t<div class=\"default\" *ngIf=\"!isVisible\">\r\n\t\tNo Node Selected\r\n\t</div>\r\n\t\r\n\t<!-- @Derek: Modify gutterSize/gutterColor/size -->\r\n\t<!-- https://bertrandg.github.io/angular-split/#/documentation -->\r\n\t<split  *ngIf=\"isVisible\"\r\n\t\t\t  direction=\"horizontal\" \r\n\t\t\t  gutterColor=\"white\"\r\n              [gutterSize]=\"7\" \r\n              [useTransition]=\"true\"\r\n              >\r\n\r\n\t\t<split-area [visible]=\"isVisible\" [size]=\"30\" order=\"1\">\r\n\t\t\t<app-modulebox></app-modulebox>\r\n\t\t</split-area>\r\n\r\n\t\t<split-area [visible]=\"isVisible\" [size]=\"70\" order=\"2\">\r\n\t\t\t<div class=\"editor-container\">\r\n\t\t \t\t<app-parameter-editor></app-parameter-editor>\r\n\t\t\t\t<app-procedure-editor></app-procedure-editor>\r\n\t\t\t</div>\r\n\t\t</split-area>\r\n\r\n    </split>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/editor/editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer, .editor {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container, .editor .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar, .editor .container .sidebar {\n      z-index: 100; }\n    .viewer .container .view-container, .editor .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.default {\n  text-align: center; }\n\n.editor {\n  background-color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  width: 100%;\n  padding-bottom: 30px;\n  box-sizing: border-box; }\n  .editor .view-container {\n    width: 100%; }\n  .editor split-area {\n    overflow-y: auto !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
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


let EditorComponent = class EditorComponent extends __WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__["a" /* Viewer */] {
    constructor(injector) {
        super(injector, "Editor");
        this._moduleList = [];
        this.isVisible = false;
    }
    update() {
        this._selectedNode = this.flowchartService.getSelectedNode();
        if (this._selectedNode == undefined) {
            this.isVisible = false;
        }
        else {
            this.isVisible = true;
        }
    }
    reset() {
        this._selectedNode = this.flowchartService.getSelectedNode();
        if (this._selectedNode == undefined) {
            this.isVisible = false;
        }
        else {
            this.isVisible = true;
        }
    }
    updateNodeName($event, node) {
        let name = $event.srcElement.value;
        name = name.replace(/[^\w]/gi, '');
        if (name.trim().length > 0) {
            node.setName(name);
            this.flowchartService.update();
        }
    }
};
EditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-editor',
        template: __webpack_require__("../../../../../src/app/ui-components/editors/editor/editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/editors/editor/editor.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
], EditorComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <mat-expansion-panel class='viewer' \r\n\t\t[expanded]=\"panelOpenState\">\r\n  \t<mat-expansion-panel-header>\r\n\t    <mat-panel-title class='header'> -->\r\n\r\n<div class=\"viewer\">\r\n\r\n\t<div class=\"container\">\r\n\t\t\r\n\t\t<!-- @Derek: Modify gutterSize/gutterColor/size -->\r\n\t\t<!-- https://bertrandg.github.io/angular-split/#/documentation -->\r\n\t\t<split  direction=\"horizontal\" \r\n              [gutterSize]=\"7\" \r\n              [useTransition]=\"true\" gutterColor=white\r\n              >\r\n\r\n\t\t\t\t<split-area class=\"sidebar\"\r\n\t\t\t\t\t[size]=\"30\"\r\n\t\t\t        order=\"1\">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<section>\r\n\t\t\t\t\t\t\t<div (click)=\"addNode($event, undefined)\">New Empty Node</div>\r\n\t\t\t\t\t\t\t<div class=\"disabled\">New Subnet</div>\r\n\t\t\t\t\t\t</section>\r\n\r\n\t\t\t\t\t\t<section>\r\n\t\t\t\t\t\t\t<div (click)=\"newfile()\">New Flowchart</div>\r\n\t\t\t\t\t\t</section>\r\n\r\n\t\t\t\t\t\t<section>\r\n\t\t\t\t\t\t\t<div (click)=\"loadFromMemory()\">Revert</div>\r\n\t\t\t\t\t\t</section>\r\n\r\n\t\t\t\t\t\t<section>\r\n\t\t\t\t\t\t\t<div (click)=\"save()\">Download Flowchart</div>\r\n\t\t\t\t\t\t\t<div (click)=\"openPicker()\">Load Flowchart\r\n\t\t\t\t\t\t\t\t<input #fileInput style=\"display: none;\"\r\n\t\t\t\t\t\t  \t\ttype=\"file\" (change)=\"loadFile()\"/>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</section>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<!--<section>\r\n\t\t\t\t\t\t\t<div>Save Node</div>\r\n\t\t\t\t\t\t</section>-->\r\n\r\n\t\t\t\t\t\t<section>\r\n\t\t\t\t\t\t\t<app-node-library></app-node-library>\r\n\t\t\t\t\t\t</section>\r\n\t\t\t\t\t\t\r\n\t\t\t\t</split-area>\r\n\t\t\t\t\r\n\t\t\r\n\t\t\t\t<split-area order=\"2\" [size]=\"70\">\r\n\t\t\t\t    \t<div class=\"info-container\" \r\n\t\t\t\t    \t\tstyle=\"position: absolute; \r\n\t\t\t\t    \t\ttop: 30px; \r\n\t\t\t\t    \t\tright: 30px\">\r\n\t\t\t\t    \t\t<!-- Zoom: {{zoom}} -->\r\n\t\t\t\t    \t</div>\r\n\r\n\t\t\t\t        <!-- svg canvas to draw the edges -->\r\n\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" \r\n\t\t\t\t\t\t\tclass=\"graph-container\" \r\n\t\t\t\t\t\t\tid=\"graph-edges\" \r\n\t\t\t\t\t\t\t[style.zoom]=\"zoom\">\r\n\r\n\t\t\t\t\t\t\t<g class=\"edge\" *ngFor=\"let edge of _edges\" >\r\n\t\t\t\t\t\t\t\t<path \r\n\t\t\t\t\t\t\t\t  [attr.d]=\"edge.path\" \r\n\t\t\t\t\t\t\t\t  stroke=\"#7469FF\"\r\n\t\t\t\t\t\t\t\t  stroke-width=\"3\" fill=\"none\" />\r\n\t\t\t\t\t\t\t</g>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!-- dragging path -->\r\n\t\t\t\t\t\t\t<g id=\"temporary-edge\" [class.hidden]=\"!_linkMode\" >\r\n\t\t\t\t\t\t\t\t<path \r\n\t\t\t\t\t\t\t\t[attr.d]=\"edgeString(mouse_pos.start, mouse_pos.current)\" \r\n\t\t\t\t\t\t\t\t \tstroke=\"#7469FF\"\r\n\t\t\t\t\t\t\t\t \tstroke-width=\"5\" \r\n\t\t\t\t\t\t\t\t \tfill=\"none\" \r\n\t\t\t\t\t\t\t\t \tstroke-dasharray=\"5, 5\"/>\r\n\t\t\t\t\t\t\t\t\t<circle id=\"pointC\" [attr.cx]=\"mouse_pos.current.x\" [attr.cy]=\"mouse_pos.current.y\" r=\"5\" />\r\n\t\t\t\t\t\t\t\t</g>\r\n\r\n\t\t\t\t\t\t</svg>\r\n\r\n\t\t\t\t\t\t<!-- div container for the nodes -->\r\n\t\t\t\t\t\t<div class=\"graph-container\" \r\n\t\t\t\t\t\t\tid=\"graph-nodes\" ondragover=\"return false\" [style.zoom]=\"zoom\" >\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!-- all nodes -->\r\n\t\t\t\t\t\t\t<div class=\"node-container\">\r\n\r\n\t\t\t\t\t\t\t\t<!-- one node -->\r\n\t\t\t\t\t\t\t\t<div  class=\"node\"\r\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let node of _nodes; let node_index = index\" \r\n\t\t\t\t\t\t\t\t\t\t[style.left.px]=\"node.position[0]\" \r\n\t\t\t\t\t\t\t\t\t\t[style.top.px]=\"node.position[1]\" >\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"btn-container\" *ngIf=\"node_index == _selectedNodeIndex\" >\r\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"btn-group node-btns\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"action-button\" (click)=\"addPort(node_index, 'in')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon>input</mat-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"action-button\" (click)=\"addPort(node_index, 'out')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon>add_to_queue</mat-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group port-btns\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"action-button\" (click)=\"deleteNode(node_index)\" \t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\tmatTooltip=\"Delete Node\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"action-button\" (click)=\"toggleNode(node)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tmatTooltip=\"Disable Node\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon *ngIf='!node.isDisabled()'>check_circle</mat-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon *ngIf='node.isDisabled()'>highlight_off</mat-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"action-button\" (click)=\"saveNode(node_index)\" \r\n\t\t\t\t\t\t\t\t\t\t\t\tmatTooltip=\"Save Node To Library\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!isSaved(node)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon>file_download</mat-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!-- node body -->\r\n\t\t\t\t\t\t\t\t\t<div class=\"node-body\" \r\n\t\t\t\t\t\t\t\t\t\t[class.library]=\"node.getType() !== undefined\"\r\n\t\t\t\t\t\t\t\t\t\t[class.error]=\"node._hasError\"\r\n\t\t\t\t\t\t\t\t\t\t[class.disabled] =\"node.isDisabled()\"\r\n\t\t\t\t\t\t\t\t\t\t(click)=\"clickNode($event, node_index)\"\r\n\t\t\t\t\t\t\t\t\t\tdraggable=true  \r\n\t\t\t\t\t\t\t\t\t\t(dragstart)=\"nodeDragStart($event, node)\" \r\n\t\t\t\t\t\t\t\t\t\t(drag)=\"nodeDragging($event, node, node_index)\" \r\n\t\t\t\t\t\t\t\t\t\t(dragend)=\"nodeDragEnd($event, node)\">\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"node-name\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t[class.selected]=\"node_index == _selectedNodeIndex\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tmatTooltip=\"{{node.getName()}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t    <input matInput\r\n\t\t\t\t\t\t\t\t\t\t\t    style=\"margin: 2px; min-width: 50px; width: 50px;\"\r\n\t\t\t\t\t\t\t\t\t\t\t    placeholder=\"Value\" value=\"{{ node.getName() }}\"\r\n\t\t\t\t\t\t\t\t\t\t\t    (change)=\"updateNodeName($event)\"/>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<!--inputs -->\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"port-container\">\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"port input\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let port of node.getInputs(); let pi=index\"  \r\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"n{{node_index}}pi{{pi}}\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"port-grip\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\tdraggable=true\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[class.connected]=\"port.isConnected()\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(dragstart)=\"portDragStart($event, port, [node_index, pi])\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(drag)=\"portDragging($event, port)\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(dragend)=\"portDragEnd($event, port)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(drop)=\"portDrop($event, port, [node_index, pi])\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"port-name\">{{ port.getName() }}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<!-- outputs -->\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"port-container\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"port output\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let port of node.getOutputs(); let po=index;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"n{{node_index}}po{{po}}\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"port-name\">{{port.getName()}}</span>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"port-grip\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\tdraggable=true\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[class.selected]=\"isPortSelected(node_index, po)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[class.connected]=\"port.isConnected()\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clickPort($event, node_index, po)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(dragstart)=\"portDragStart($event, port, [node_index, po])\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(drag)=\"portDragging($event, port)\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(dragend)=\"portDragEnd($event, port)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(drop)=\"portDrop($event, port, [node_index, po])\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div> \r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"fromLibrary\"  style=\"font-size: 8px; text-align: center\">\r\n\t\t\t\t\t\t\t\t\t\t\tLibrary Node\r\n\t\t\t\t\t\t\t\t\t\t</div> -->\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t</split-area>\r\n\r\n\t\t</split>\r\n\r\n\t</div>\r\n\t\r\n\r\n</div>\r\n<!-- </mat-expansion-panel> -->\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\nsplit-area {\n  overflow: auto !important; }\n\n.viewer {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-image: repeating-linear-gradient(0deg, transparent, transparent 70px, #F1F1F1 70px, #F1F1F1 71px), repeating-linear-gradient(-90deg, transparent, transparent 70px, #F1F1F1 70px, #F1F1F1 71px);\n  background-size: 71px 71px;\n  background-color: white;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  padding-bottom: 30px; }\n  .viewer .container {\n    position: relative;\n    height: 100%;\n    overflow: hidden; }\n    .viewer .container .disabled {\n      color: #8AA8C0; }\n      .viewer .container .disabled:hover {\n        color: #8AA8C0 !important; }\n    .viewer .container .sidebar {\n      font-size: 12px;\n      background-color: #F1F1F1;\n      color: #395D73;\n      white-space: nowrap;\n      overflow-x: hidden !important; }\n      .viewer .container .sidebar section {\n        padding-left: 15px;\n        padding-bottom: 5px;\n        padding-top: 5px;\n        border-bottom: 1px solid #8AA8C0; }\n        .viewer .container .sidebar section div {\n          cursor: pointer; }\n          .viewer .container .sidebar section div:hover {\n            color: #F0BFA0; }\n  .viewer .graph-container {\n    position: absolute;\n    height: 100%;\n    width: 100%; }\n    .viewer .graph-container #graph-edges {\n      background-color: transparent;\n      z-index: 1; }\n      .viewer .graph-container #graph-edges #temporary-edge .hidden {\n        display: none; }\n    .viewer .graph-container #graph-nodes {\n      background-color: transparent;\n      overflow: hidden;\n      z-index: 1; }\n  .viewer .node-container {\n    position: relative; }\n    .viewer .node-container .node {\n      position: absolute;\n      z-index: 3;\n      margin: 0px;\n      color: #395D73;\n      /* .port-container{\r\n\t\t\t\t\tdisplay: flex; \r\n\t\t\t\t\tflex-direction: row; \r\n\t\t\t\t\tjustify-content: space-around;\r\n\t\t\t\t\r\n\t\t\t\t\tposition: relative;\r\n\t\t\t\t\theight: 10px;\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\tz-index: 1;\r\n\t\t\t\t\r\n\t\t\t\t\tmargin-top: -2px;\r\n\t\t\t\t\t\r\n\t\t\t\t\t&.input{\r\n\t\t\t\t\r\n\t\t\t\t\t\t.port{\r\n\t\t\t\t\t\t\tborder-top-right-radius: 15px;\r\n\t\t\t\t\t\t\tborder-top-left-radius: 15px;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t\t&.output{\r\n\t\t\t\t\r\n\t\t\t\t\t\t.port{\r\n\t\t\t\t\t\t\tborder-bottom-right-radius: 15px;\r\n\t\t\t\t\t\t\tborder-bottom-left-radius: 15px;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t\t.port{\r\n\t\t\t\t\t\theight: 7.5px;\r\n\t\t\t\t\t\twidth: 15px;\r\n\t\t\t\t\t\tborder: 2px solid black;\r\n\t\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\t\tbackground-color: black;\r\n\t\t\t\t\t\tmargin: 0px 2px;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\tz-index: 3;\r\n\t\t\t\t\r\n\t\t\t\t\t\t&:hover{\r\n\t\t\t\t\t\t\tbackground-color: orange;\r\n\t\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t\t\t&.connected{\r\n\t\t\t\t\t\t\tbackground-color: green;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t\t.btn-sm{\r\n\t\t\t\t\t\tposition: absolute; \r\n\t\t\t\t\t\tright: -15px;\r\n\t\t\t\t\t\tborder: 2px solid gray;\r\n\t\t\t\t\t\tcolor: gray;\r\n\t\t\t\t\t\theight: 15px; \r\n\t\t\t\t\t\twidth: 15px;\r\n\t\t\t\t\t\tfont-size: 10px; \r\n\t\t\t\t\t\tline-height: 15px;\r\n\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\r\n\t\t\t\t\t\tbackground: url('../../../../assets/img/plus.png');\r\n\t\t\t\t\t\tbackground-size: cover;\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t\t\t&.input{\r\n\t\t\t\t\t\t\ttop: -5px; \r\n\t\t\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t\t\t&.output{\r\n\t\t\t\t\t\t\tbottom: 0px; \r\n\t\t\t\t\t\t\tleft: -15px;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t} */ }\n      .viewer .node-container .node .btn-container {\n        position: absolute;\n        right: -30px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        height: 100px; }\n        .viewer .node-container .node .btn-container .btn-group {\n          position: relative;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          background: none; }\n          .viewer .node-container .node .btn-container .btn-group .action-button {\n            position: relative;\n            width: 25px;\n            height: 24px;\n            cursor: pointer;\n            font-size: 9px;\n            text-align: center; }\n            .viewer .node-container .node .btn-container .btn-group .action-button .material-icons {\n              font-size: 18px;\n              line-height: 24px;\n              color: #8AA8C0; }\n            .viewer .node-container .node .btn-container .btn-group .action-button:hover {\n              color: white; }\n              .viewer .node-container .node .btn-container .btn-group .action-button:hover .mat-icon {\n                color: #F0BFA0; }\n      .viewer .node-container .node .node-body {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        position: relative;\n        min-height: 30px;\n        min-width: 70px;\n        width: auto;\n        border: 1px solid #395D73;\n        background-color: white;\n        cursor: move; }\n        .viewer .node-container .node .node-body.disabled {\n          opacity: 0.4; }\n        .viewer .node-container .node .node-body.selected {\n          border-width: 5px; }\n        .viewer .node-container .node .node-body.library {\n          border-color: #395D73;\n          border-style: solid; }\n        .viewer .node-container .node .node-body.error {\n          background-color: #E94858; }\n        .viewer .node-container .node .node-body .node-name {\n          font-family: sans-serif;\n          font-size: 12px;\n          border-bottom: 1px solid #395D73;\n          text-align: center;\n          background-color: #F1F1F1; }\n          .viewer .node-container .node .node-body .node-name input {\n            background-color: inherit;\n            border: 0px;\n            color: #395D73;\n            text-align: center; }\n          .viewer .node-container .node .node-body .node-name.selected {\n            background-color: #8AA8C0; }\n            .viewer .node-container .node .node-body .node-name.selected input {\n              color: white;\n              font-weight: bold; }\n              .viewer .node-container .node .node-body .node-name.selected input:focus {\n                color: #395D73;\n                background-color: #F0BFA0; }\n        .viewer .node-container .node .node-body .port-container {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          margin-top: 10px;\n          margin-bottom: 10px; }\n          .viewer .node-container .node .node-body .port-container .divider {\n            height: 2px;\n            width: 100%;\n            background-color: #8AA8C0; }\n          .viewer .node-container .node .node-body .port-container .port {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            margin: 5px 0px; }\n            .viewer .node-container .node .node-body .port-container .port .port-grip {\n              width: 15px;\n              height: 15px;\n              border-radius: 50%;\n              background-color: #F1F1F1;\n              border: 1px solid #395D73;\n              cursor: pointer; }\n              .viewer .node-container .node .node-body .port-container .port .port-grip.selected {\n                border: 2px solid #8AA8C0; }\n              .viewer .node-container .node .node-body .port-container .port .port-grip:hover {\n                background-color: #F0BFA0; }\n            .viewer .node-container .node .node-body .port-container .port .port-name {\n              font-size: 12px;\n              margin: 0px 5px; }\n            .viewer .node-container .node .node-body .port-container .port.input {\n              -webkit-box-pack: start;\n                  -ms-flex-pack: start;\n                      justify-content: flex-start;\n              margin-left: -7.5px; }\n            .viewer .node-container .node .node-body .port-container .port.output {\n              -webkit-box-pack: end;\n                  -ms-flex-pack: end;\n                      justify-content: flex-end;\n              margin-right: -7.5px; }\n      .viewer .node-container .node:active {\n        cursor: none; }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_services_console_service__ = __webpack_require__("../../../../../src/app/global-services/console.service.ts");
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
    constructor(injector, layoutService, consoleService) {
        super(injector, "FlowchartViewer");
        this.layoutService = layoutService;
        this.consoleService = consoleService;
        this.pan_mode = false;
        this.left = 0;
        this.top = 0;
        this.zoom = 1;
        this._portWidth = 15;
        this._margin = 10;
        this._nodes = [];
        this._edges = [];
        this.showLibrary = false;
        this.showDialog = { status: false, position: [0, 0] };
        // clickEdge(): void{
        //   alert("hello wrold");
        // }
        // addPort(nodeIndex: number, type: string): void{
        //   // select the node
        //   this.clickNode(null, nodeIndex);
        //   // add port 
        //   if(type == "in"){
        //       this._nodes[nodeIndex].addInput();
        //   }
        //   else if(type == "out"){
        //       this._nodes[nodeIndex].addOutput();
        //   }  
        //   this.flowchartService.update();
        // }
        //
        //  node dragging
        //
        this.dragStart = { x: 0, y: 0 };
        this.trend = { x: 1, y: 1 };
        this.shakeCount = 0;
        this._linkMode = false;
        this.mouse_pos = {
            start: { x: 0, y: 0 },
            current: { x: 0, y: 0 }
        };
        // bad bad bad!
        let self = this;
        document.addEventListener("keydown", function (e) {
            if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
                e.preventDefault();
                self.save(true);
                //your implementation or function calls
            }
        }, false);
    }
    reset() {
        if (this.flowchartService.getNodes().length) {
            this.update();
        }
        else {
            this._selectedNode = undefined;
            this._selectedNodeIndex = undefined;
            this._selectedPortIndex = undefined;
            this._nodes = [];
            this._edges = [];
        }
    }
    editNode() {
        //this.layoutService.toggleEditor();
    }
    deleteNode(node_index) {
        this._selectedNode = undefined;
        //this.layoutService.hideEditor();
        this.flowchartService.deleteNode(node_index);
    }
    toggleNode(node) {
        if (node.isDisabled()) {
            node.enable();
        }
        else {
            node.disable();
        }
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
        // let scaleFactor: number = 0.1;
        // let value: number = this.zoom  + (Math.sign($event.wheelDelta))*scaleFactor;
        // if(value > 0.5 && value < 1.5){
        //   this.zoom = Number( (value).toPrecision(2) );
        //   this.updateEdges();
        // }
    }
    startPan($event) {
        this.pan_mode = true;
        this.pan_init = [$event.clientX, $event.clientY];
    }
    panning($event) {
        if (this.pan_mode == true) {
            let relX = $event.clientX - this.pan_init[0];
            let relY = $event.clientY - this.pan_init[1];
            let factor = 1;
            this.left += relX;
            this.top += relY;
            this.pan_init = [$event.clientX, $event.clientY];
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
        this._selectedNodeIndex = this.flowchartService.getSelectedNodeIndex();
        this._selectedPortIndex = this.flowchartService.getSelectedPortIndex();
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
        if (node == undefined) {
            return false;
        }
        return this.flowchartService.isSelected(node);
    }
    isPortSelected(nodeIndex, portIndex) {
        return (nodeIndex == this._selectedNodeIndex && portIndex == this._selectedPortIndex);
    }
    isSaved(node) {
        if (node.getType() === undefined) {
            return false;
        }
        else {
            return true;
        }
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
    clickPort($event, nodeIndex, portIndex) {
        // select the node
        $event.stopPropagation();
        this.flowchartService.selectNode(nodeIndex, portIndex);
    }
    nodeDragStart($event, node) {
        $event.dataTransfer.setDragImage(new Image(), 0, 0);
        // todo : find more elegant solution
        this.dragStart = { x: $event.pageX, y: $event.pageY };
        this.trend = { x: 1, y: 1 };
        this.shakeCount = 0;
    }
    nodeDragging($event, node, nodeIndex) {
        this.pan_mode = false;
        let relX = $event.pageX - this.dragStart.x;
        let relY = $event.pageY - this.dragStart.y;
        node.position[0] += relX;
        node.position[1] += relY;
        this.dragStart = { x: $event.pageX, y: $event.pageY };
        if (relX && relY) {
            if (Math.sign(relX) !== this.trend.x || Math.sign(relY) !== this.trend.y) {
                this.trend = { x: Math.sign(relX), y: Math.sign(relY) };
                this.shakeCount++;
                if (this.shakeCount == 8) {
                    this.flowchartService.disconnectNode(nodeIndex);
                }
            }
        }
        this.updateEdges();
    }
    nodeDragEnd($event, node) {
        this.pan_mode = false;
        let relX = $event.pageX - this.dragStart.x;
        let relY = $event.pageY - this.dragStart.y;
        node.position[0] += relX;
        node.position[1] += relY;
        this.dragStart = { x: 0, y: 0 };
        this.trend = { x: 1, y: 1 };
        this.shakeCount = 0;
        this.updateEdges();
    }
    portDragStart($event, port, address) {
        $event.stopPropagation();
        $event.dataTransfer.setDragImage(new Image(), 0, 0);
        this._startPort = port;
        this._startPort['address'] = address;
        this._linkMode = true;
        let type;
        if (port instanceof __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["a" /* InputPort */]) {
            type = "pi";
        }
        if (port instanceof __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["c" /* OutputPort */]) {
            type = "po";
        }
        let port_position = this.getPortPosition(address[0], address[1], type);
        this.mouse_pos.start = { x: port_position.x, y: port_position.y };
        this.mouse_pos.current = { x: port_position.x, y: port_position.y };
        this.dragStart = { x: $event.clientX, y: $event.clientY };
    }
    portDragging($event, port) {
        $event.stopPropagation();
        // todo: compute total offset of this div dynamically
        // urgent!
        let relX = $event.clientX - this.dragStart.x;
        let relY = $event.clientY - this.dragStart.y;
        this.mouse_pos.current.x += relX;
        this.mouse_pos.current.y += relY;
        this.dragStart = { x: $event.clientX, y: $event.clientY };
    }
    portDragEnd($event, port) {
        $event.stopPropagation();
        let relX = $event.clientX - this.dragStart.x;
        let relY = $event.clientY - this.dragStart.y;
        this.mouse_pos.current.x += relX;
        this.mouse_pos.current.y += relY;
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
            if (this._startPort instanceof __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["c" /* OutputPort */]) {
                outputPort = this._startPort["address"];
            }
            if (this._endPort instanceof __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["a" /* InputPort */]) {
                inputPort = this._endPort["address"];
            }
            if (this._endPort instanceof __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["c" /* OutputPort */]) {
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
        let port_size = 15;
        let name = "n" + nodeIndex + type + portIndex;
        let el = document.getElementById(name);
        if (el == null) {
            return { x: 0, y: 0 };
        }
        let node_pos = this._nodes[nodeIndex].position;
        let port_pos_x = el.offsetLeft;
        let port_pos_y = el.offsetTop;
        let node_width = el.offsetParent.offsetWidth;
        if (type == "pi") {
            x = node_pos[0];
            y = node_pos[1] + port_pos_y + port_size / 2;
        }
        else if (type == "po") {
            x = node_pos[0] + node_width;
            y = node_pos[1] + port_pos_y + port_size / 2;
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
        let translate = 10;
        let shifted_startPoint = output_port_position.x + translate + " " + (output_port_position.y);
        let shifted_endPoint = input_port_position.x - translate + " " + (input_port_position.y);
        // compute curvy line
        var x0 = output_port_position.x + translate;
        var y0 = output_port_position.y;
        var x3 = input_port_position.x - translate;
        var y3 = input_port_position.y;
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
            //+ line + shifted_endPoint 
            + line + endPoint;
        return path;
    }
    edgeClicked() {
        alert("Edge clicked");
    }
    updateNodeName($event) {
        let name = $event.target.value.trim();
        name = name.replace(/[^\w\[\]]/gi, '');
        if (name.length == 0) {
            return;
        }
        // check no other node has the same name
        let flag = false;
        for (let i = 0; i < this._nodes.length; i++) {
            if (this._nodes[i].getName() == name) {
                this.consoleService.addMessage("Node with this name already exists in the flowchart!");
                this.layoutService.showConsole();
                flag = true;
                break;
            }
        }
        if (!flag) {
            this._selectedNode.setName(name);
            this.flowchartService.update();
        }
        else {
            $event.target.value = this._selectedNode.getName();
        }
    }
    saveNode(node) {
        this.flowchartService.saveNode(node);
    }
    openPicker() {
        let el = this.fileInput.nativeElement;
        el.click();
    }
    loadFile(url) {
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
        this.flowchartService.loadFile(url);
    }
    loadFromMemory() {
        this.flowchartService.checkSavedFile();
    }
    save(value) {
        this.flowchartService.saveFile(value);
        this.layoutService.showConsole();
    }
    newfile() {
        this.flowchartService.newFile();
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('fileInput'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
], FlowchartViewerComponent.prototype, "fileInput", void 0);
FlowchartViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-flowchart-viewer',
        template: __webpack_require__("../../../../../src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */],
        __WEBPACK_IMPORTED_MODULE_3__global_services_layout_service__["a" /* LayoutService */],
        __WEBPACK_IMPORTED_MODULE_4__global_services_console_service__["a" /* ConsoleService */]])
], FlowchartViewerComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/editors/parameter-editor/parameter-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer\">\r\n\r\n\t<div class=\"container\">\r\n\t\t\r\n\t\t<!-- default -->\r\n\t\t<div class=\"default\" *ngIf=\"!isVisible\">No node selected</div>\r\n\r\n\t\t<!-- main -->\r\n\t\t<div class=\"view-container\" *ngIf=\"isVisible\">\r\n\t\t\t<mat-accordion multi=\"true\" [displayMode]=\"flat\">\r\n\r\n\t\t\t\t<!-- inputs -->\r\n\t\t\t\t<mat-expansion-panel [disabled]=\"_inputs.length == 0\" [expanded]=\"true\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\t  Inputs ({{ _inputs.length }})\r\n\t\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t\t  <!-- This is a summary of the content -->\r\n\t\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t\t</mat-expansion-panel-header>\r\n\r\n\t\t\t\t\t<!-- <span class=\"addBtn\" (click)=\"addPort(node_index, 'in')\">Add Input</span> -->\r\n\r\n\t\t\t\t\t<div class='port input' *ngFor=\"let inp of _inputs; let i=index\">\r\n\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t<div class='row'>\r\n\t\t\t\t\t\t\t\t<!--<span class='label'>Name</span>-->\r\n\t\t\t\t\t\t\t\t<span class='content' contenteditable=\"true\" (blur)=\"updatePortName($event, inp)\" spellcheck=\"false\">\r\n\t\t\t\t\t\t\t\t\t{{ inp.getName() }}\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class='row'>\r\n\t\t\t\t\t\t\t\t<!--<span class='label'>Type</span>-->\r\n\t\t\t\t\t\t\t\t<span class='content'>\r\n\t\t\t\t\t\t\t\t\t<select (change)=\"updateType($event.target.value, inp)\">\r\n\t\t\t\t\t\t\t\t\t\t         \t    <option *ngFor=\"let x of inputPortOpts\" [value]=\"x\" [selected]=\"inp.getType() == x\">{{getInputTypeName(x)}}</option>\r\n\t\t\t\t\t\t\t\t\t\t            </select>\r\n\t\r\n\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t<!-- <div class='row'>\r\n\t\t\t\t\t\t\t\t<span class='content' contenteditable=\"true\" (blur)=\"updateDefaultValue($event, inp)\">\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"!inp.getDefaultValue()\"><i>Default Value</i></span>\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"inp.getDefaultValue()\">{{inp.getDefaultValue()}}</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\t -->\r\n\t\t\t\t\t\t</div>\t\t\t\r\n\t\t\t\t\t\t<div class=\"controls\">\r\n\t\t\t\t\t\t\t<button mat-button (click)='openSettingsDialog(inp)'>\r\n\t\t\t\t\t\t\t\t<mat-icon>settings</mat-icon>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t        <button mat-button (click)='deletePort($event, \"input\", i)'>\r\n\t\t\t\t\t    \t\t<mat-icon>delete</mat-icon>\r\n    \t\t\t\t\t    </button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</mat-expansion-panel>\r\n\r\n\t\t\t\t<!-- outputs -->\r\n\t\t\t\t<mat-expansion-panel [disabled]=\"_outputs.length == 0\" [expanded]=\"true\">\r\n\t\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\t  Outputs ({{ _outputs.length }})\r\n\t\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t\t  <!-- This is a summary of the content -->\r\n\t\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t\t</mat-expansion-panel-header>\r\n\r\n\t\t\t\t\t<!-- <span class =\"addBtn\" (click)=\"addPort(node_index, 'out')\">Add Output</span> -->\r\n\r\n\t\t\t\t\t<div class='port output' *ngFor=\"let output of _outputs; let o=index\"><div class=\"content\">\r\n\t\t\t\t\t\t<div class='row'>\r\n\t\t\t\t\t\t\t<!--<span class='label'>Name</span>-->\r\n\t\t\t\t\t\t\t<span class='content' contenteditable=\"true\" (blur)=\"updatePortName($event, output)\" spellcheck=\"false\">\r\n\t\t\t\t\t\t\t\t{{ output.getName() || \"undefined\" }}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class='row'>\r\n\t\t\t\t\t\t\t<!--<span class='label'>Type</span>-->\r\n\t\t\t\t\t\t\t<span class='content'>\r\n\t\t\t\t\t\t\t\t<select (change)=\"updateType($event.target.value, output)\">\r\n\t\t\t\t\t         \t    <option *ngFor=\"let x of outputPortOpts\" [value]=\"x\" [selected]=\"output.getType() == x\">{{getOutputTypeName(x)}}</option>\r\n\t\t\t\t\t            </select>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class='row hidden'>\r\n\t\t\t\t\t\t\t<!--<span class='label'>Default</span>-->\r\n\t\t\t\t\t\t\t<span class='content' contenteditable=\"true\" (blur)=\"updateDefaultValue($event, output)\">\r\n\t\t\t\t\t\t\t\t{{ output.getDefaultValue() || \"undefined\"}}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"controls\">\r\n\t\t\t\t\t        <button mat-button (click)='deletePort($event, \"output\", o)'>\r\n\t\t\t\t\t    \t\t<mat-icon>delete</mat-icon>\r\n    \t\t\t\t\t    </button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</mat-expansion-panel>\r\n\r\n\t\t\t</mat-accordion>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/parameter-editor/parameter-editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.addBtn {\n  font-size: 12px; }\n\n.viewer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  /*.port-heading{\r\n\t\tfont-size: $fsize2;\r\n\t\tline-height: $header-height;\r\n\t\tpadding: 0px 4px;\r\n\t\ttext-align: center;\r\n\t}*/ }\n  .viewer .port {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important;\n    padding-left: 15px;\n    height: auto;\n    min-height: 24px;\n    border-bottom: 1px solid #8AA8C0;\n    background-color: white; }\n    .viewer .port:hover .content {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row wrap;\n              flex-flow: row wrap;\n      height: auto !important; }\n    .viewer .port:hover .controls {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n    .viewer .port span {\n      width: 100px;\n      height: 12px; }\n    .viewer .port .content {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row nowrap;\n              flex-flow: row nowrap;\n      height: 15px;\n      font-size: 12px;\n      line-height: 15px;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      padding: 0;\n      margin: 2px 0px;\n      /*.row{\t\t\t\t\r\n\t\t\t\tdisplay: flex; \r\n\t\t\t\tflex-direction: row;\r\n\r\n\t\t\t\t.label{\r\n\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\ttext-transform: uppercase;\r\n\t\t\t\t\tfont-size: 10px; \r\n\t\t\t\t\tcolor: gray; \r\n\t\t\t\t\twidth: 100px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.content{\r\n\t\t\t\t\tmin-width: 50px;\r\n\r\n\t\t\t\t\t&.undefined{\r\n\t\t\t\t\t\tborder-bottom: 1px dashed blue;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}*/ }\n      .viewer .port .content .row {\n        height: 20px !important; }\n      .viewer .port .content span {\n        padding: 0 !important;\n        text-align: center !important;\n        border-bottom: 1px solid #8AA8C0;\n        margin-right: 5px; }\n      .viewer .port .content select {\n        font-size: 12px;\n        width: 100px;\n        border: 0px !important;\n        color: #395D73; }\n    .viewer .port .controls {\n      margin: 0 !important;\n      display: none; }\n      .viewer .port .controls button {\n        max-width: 15px !important;\n        height: 15px;\n        min-width: 15px !important;\n        padding: 0px !important;\n        -webkit-box-flex: 0 !important;\n            -ms-flex-positive: 0 !important;\n                flex-grow: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important; }\n        .viewer .port .controls button mat-icon {\n          height: 12px;\n          vertical-align: top !important;\n          font-size: 15px !important;\n          text-align: left !important; }\n        .viewer .port .controls button:hover {\n          background-color: #F1F1F1 !important; }\n          .viewer .port .controls button:hover mat-icon {\n            color: #F07A79 !important; }\n\n.hidden {\n  display: inline-block !important;\n  visibility: hidden !important; }\n\n.container {\n  overflow: hidden !important; }\n  .container mat-expansion-panel-header {\n    background-color: #F1F1F1 !important;\n    border-top: 1px solid #8AA8C0 !important;\n    border-bottom: 1px solid #8AA8C0 !important;\n    padding-left: 15px !important; }\n    .container mat-expansion-panel-header mat-panel-title {\n      color: #395D73 !important;\n      font-weight: bold !important;\n      font-size: 12px !important; }\n    .container mat-expansion-panel-header:hover {\n      background-color: #F1F1F1 !important; }\n\n.view-container {\n  padding: 0 !important;\n  overflow: hidden !important; }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm2015/material.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parameter_settings_dialog_component__ = __webpack_require__("../../../../../src/app/ui-components/editors/parameter-editor/parameter-settings-dialog.component.ts");
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
    constructor(injector, dialog) {
        super(injector, "parameter-editor");
        this.dialog = dialog;
        this.isVisible = false;
        // shift to iport
        this.inputPortOpts = [
            __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].Input,
            __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].Slider
            // InputPortTypes.ColorPicker, 
            // InputPortTypes.FilePicker, 
            // InputPortTypes.Dropdown
        ];
        this.outputPortOpts = [
            __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["d" /* OutputPortTypes */].Three,
            __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["d" /* OutputPortTypes */].Text,
            __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["d" /* OutputPortTypes */].Code,
            __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["d" /* OutputPortTypes */].Console
        ];
    }
    reset() {
        this._node = undefined;
        this._inputs = undefined;
        this._outputs = undefined;
        this.isVisible = false;
    }
    // addPort(nodeIndex: number, type: string): void{
    //   // add port 
    //   if(type == "in"){
    //       this._node.addInput();
    //   }
    //   else if(type == "out"){
    //       this._node.addOutput();
    //   }
    //   else{
    //     throw Error("Unknown Port Type");
    //   }  
    //   this.flowchartService.update();
    // }
    deletePort(event, type, portIndex) {
        event.stopPropagation();
        this.flowchartService.deletePort(type, portIndex);
    }
    updatePortName($event, port) {
        let name = $event.srcElement.innerText;
        // check for validity
        name = name.replace(/[^\w]/gi, '');
        if (name.trim().length > 0) {
            // put a timeout on this update or something similar to solve jumpiness
            port.setName(name);
            this.flowchartService.update();
        }
    }
    updateType(type, port) {
        port.setType(type);
        //defaults
        if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].Slider) {
            port.setOpts({ min: 0, max: 100, step: 1 });
            port.setDefaultValue(50);
        }
    }
    // updateDefaultValue($event, port: InputPort|OutputPort): void{
    //   let value: string = $event.srcElement.innerText;
    //   if(value.trim().length > 0){
    //     port.setDefaultValue(value)
    //     // put a timeout on this update or something similar to solve jumpiness
    //   }
    //   else{
    //     port.setDefaultValue(undefined)
    //   }
    //   this.flowchartService.update();
    // }
    getInputTypeName(type) {
        if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].ColorPicker) {
            return "Color";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].Input) {
            return "Simple Input";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].Dropdown) {
            return "Dropdown";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].FilePicker) {
            return "File";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].Slider) {
            return "Slider";
        }
        else {
            return "Not Identifiable";
        }
    }
    getOutputTypeName(type) {
        if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["d" /* OutputPortTypes */].Three) {
            return "Geometry";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["d" /* OutputPortTypes */].Text) {
            return "Text Viewer";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["d" /* OutputPortTypes */].Code) {
            return "Code Viewer";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["d" /* OutputPortTypes */].Console) {
            return "Console";
        }
        else {
            return "Not Identifiable";
        }
    }
    //
    //	this update runs when there is a message from other viewers that something changed; 
    //  beware of updating flowchart here - it will go into an unending loop :/
    //
    update() {
        this._node = this.flowchartService.getSelectedNode();
        if (this._node !== undefined) {
            this.isVisible = true;
            this._inputs = this._node.getInputs();
            this._outputs = this._node.getOutputs();
            this.isVisible = true;
        }
        else {
            this.isVisible = false;
        }
    }
    openSettingsDialog(input) {
        let dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__parameter_settings_dialog_component__["a" /* ParameterSettingsDialogComponent */], {
            height: '400px',
            width: '600px',
            data: {
                inputPortTypes: this.inputPortOpts,
                input: input
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
};
ParameterEditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-parameter-editor',
        template: __webpack_require__("../../../../../src/app/ui-components/editors/parameter-editor/parameter-editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/editors/parameter-editor/parameter-editor.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialog */]])
], ParameterEditorComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/editors/parameter-editor/parameter-settings-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParameterSettingsDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm2015/material.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_classes_port_PortModule__ = __webpack_require__("../../../../../src/app/base-classes/port/PortModule.ts");
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



//
// Component for Parameter Settings
//
let ParameterSettingsDialogComponent = class ParameterSettingsDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.inputPortTypes = __WEBPACK_IMPORTED_MODULE_2__base_classes_port_PortModule__["b" /* InputPortTypes */];
        this.type = data.input.getType();
        this.input = data.input;
        this.opts = this.input.getOpts();
    }
    updateDefaultValue($event) {
        let value = $event.srcElement.value;
        console.log("update");
        if (value.trim().length > 0) {
            if (this.type == __WEBPACK_IMPORTED_MODULE_2__base_classes_port_PortModule__["b" /* InputPortTypes */].Slider) {
                if (isNaN(parseInt(value))) {
                    alert("Slider values can only be numbers");
                    return;
                }
            }
            this.input.setDefaultValue(value);
        }
        else {
            this.input.setDefaultValue(undefined);
        }
    }
    updateSliderOpts($event, prop) {
        let value = $event.srcElement.value;
        if (value.trim().length > 0) {
            if (isNaN(parseInt(value))) {
                alert("Slider values can only be numbers");
                return;
            }
            else {
                this.opts[prop] = value;
            }
        }
        else {
            this.opts[prop] = 0;
        }
        this.input.setOpts(this.opts);
    }
    default(input) {
        return input.getDefaultValue();
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
ParameterSettingsDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'parameter-settings-dialog',
        template: __webpack_require__("../../../../../src/app/ui-components/editors/parameter-editor/parameter-settings-dialog.html"),
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object])
], ParameterSettingsDialogComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/editors/parameter-editor/parameter-settings-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h2>Input Name: {{input.getName()}}</h2>\r\n<h3>Input Type: {{input.getType()}}</h3>\r\n\r\n<div *ngIf='type == inputPortTypes.Input'>\r\n\r\n\t<form class=\"example-form\">\r\n\t  <mat-form-field class=\"example-full-width\">\r\n\t    <textarea matInput \r\n\t    \t\tmatTextareaAutosize \r\n\t\t\t\tmatAutosizeMinRows=\"2\"\r\n    \t\t\tmatAutosizeMaxRows=\"8\" \r\n    \t\t\tplaceholder=\"Default Value\" \r\n    \t\t\tvalue=\"{{ default(input) }}\"\r\n    \t\t\t(change)=\"updateDefaultValue($event, input)\">\r\n\t\t</textarea>\r\n\t  </mat-form-field>\r\n\t</form>\r\n\t\r\n</div>\r\n\r\n<div *ngIf='type == inputPortTypes.Slider'>\r\n\t<form class=\"example-form\"\r\n\t\t\tstyle=\"display: flex; flex-direction: column;\">\r\n\t\t  <mat-form-field class=\"example-full-width\" style=\"height: 45px;\">\r\n\t\t    <input matInput placeholder=\"Minimum Value\" \r\n\t\t    \t(change)=\"updateSliderOpts($event, 'min')\" \r\n\t\t    \tvalue=\"{{ opts.min }}\">\r\n\t\t    <!-- <mat-hint>Enter the minimum slider value</mat-hint> -->\r\n\t\t  </mat-form-field>\r\n\r\n\t\t  <mat-form-field class=\"example-full-width\"  style=\"height: 45px;\">\r\n\t\t    <input matInput placeholder=\"Maximum Value\" \r\n\t\t    \t(change)=\"updateSliderOpts($event, 'max')\" \r\n\t\t    \tvalue=\"{{ opts.max }}\">\r\n\t\t  \t<!-- <mat-hint>Enter the maximum slider value</mat-hint> -->\r\n\t\t  </mat-form-field>\r\n\r\n\t\t  <mat-form-field class=\"example-full-width\"  style=\"height: 45px;\">\r\n\t\t    <input matInput placeholder=\"Step\" \r\n\t\t    \t(change)=\"updateSliderOpts($event, 'step')\" \r\n\t\t    \tvalue=\"{{ opts.step }}\">\r\n\t\t  \t<!-- <mat-hint>Enter the step size value</mat-hint> -->\r\n\t\t  </mat-form-field>\r\n\r\n\t\t  <mat-form-field class=\"example-full-width\"  style=\"height: 45px;\">\r\n\t\t    <input matInput placeholder=\"Default Value\" \r\n\t\t    (change)=\"updateDefaultValue($event, input)\" \r\n\t\t    value=\"{{ default(input) }}\">\r\n\t\t  \t<!-- <mat-hint>Enter the default value</mat-hint> -->\r\n\t\t  </mat-form-field>\r\n\r\n\t</form>\r\n</div>\r\n\r\n<!-- <div *ngIf='type == inputPortTypes.File'>\r\n\tSunt dolor in officia veniam id tempor occaecat sint ea exercitation ut aliqua esse eu laborum elit commodo ea amet magna id consequat dolor occaecat esse id tempor labore nulla nisi velit mollit voluptate.\r\n</div>\r\n\r\n<div *ngIf='type == inputPortTypes.Input'>\r\n\tSunt dolor in officia veniam id tempor occaecat sint ea exercitation ut aliqua esse eu laborum elit commodo ea amet magna id consequat dolor occaecat esse id tempor labore nulla nisi velit mollit voluptate.\r\n</div> -->\r\n<!-- \r\n<div class=\"options\" style=\"width: 100%\" *ngIf='inp.getType() == inputPortOpts[1]'>\r\n\tMin: <input/><br>\r\n\tMax: <input/><br>\r\n\tStep: <input/><br>\r\n\tvalue: <input/><br>\r\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/procedure-editor/procedure-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer\">\r\n\t<mat-accordion>\r\n\t\t<mat-expansion-panel [expanded]=\"true\">\r\n\t\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\t  Procedure ({{_procedureArr.length}})\r\n\t\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t\t  <!-- This is a summary of the content -->\r\n\t\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t\t</mat-expansion-panel-header>\r\n\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- <button (click)=\"showProd=!showProd\">Procedure</button>\r\n\t\t\t\t\t<div *ngIf='showProd'> -->\r\n\t\t\t\t\t<div class=\"tree\">\r\n\t\t\t\t\t\t<datalist id=\"variable-suggestions\" >\r\n\t\t\t\t\t\t    <option *ngFor='let v of _variableList' value=\"{{v}}\"></option>\r\n\t\t\t\t\t\t</datalist>\r\n\r\n\t\t\t\t\t\t<tree-root #tree \t\r\n\t\t\t\t\t\t\t\t\t[nodes]='_procedureArr' \r\n\t\t\t\t\t\t\t\t\t[options]='_tree_options'  \r\n\t\t\t\t\t\t\t\t\t(moveNode)=\"onMoveNode($event)\">\r\n\t\t\t\t\t\t\t\t  <ng-template #treeNodeTemplate \r\n\t\t\t\t\t\t\t\t  \t\tlet-prod \r\n\t\t\t\t\t\t\t\t  \t\tlet-index=\"index\" \r\n\t\t\t\t\t\t\t\t  \t\tclass=\"tree-node-wrapper\">\r\n\t\t\t\t\t\t\t\t  \t\t<div class = \"full-container\" (click)=\"focus($event, prod)\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<!--<div class = \"seg3\" *ngIf=\"prod.data.getType() != 'Else' && prod.data.getType() != 'If'\">\r\n\t\t\t\t\t    \t\t\t\t\t   \t<button mat-button \r\n\t\t\t\t\t\t\t\t\t\t\t\t    *ngIf=\"prod.data.getType() =='Action'\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"openHelp($event, prod)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon>help_outline</mat-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\r\n\t\t\t\t\t\t    \t\t\t\t</div>-->\r\n\t\t\t\t\t\t\t\t  \t\t\t<div class = \"seg1\" \r\n\t\t\t\t\t\t\t\t  \t\t\t\t[class.error]=\"prod.data.hasError\" \r\n\t\t\t\t\t\t\t\t  \t\t\t\t[class.print]=\"prod.data.printToConsole()\"\r\n\t\t\t\t\t\t\t\t  \t\t\t\t[class.disabled]=\"prod.data.isDisabled()\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- template for data -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"prod.data.getType() == 'Data'\"> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='procedure-item'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input matInput class=\"tree-input\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"prod.data.getLeftComponent().expression\" #ctrl=\"ngModel\" required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"updateProcedure($event, prod, 'left')\" spellcheck=\"false\" list=\"variable-suggestions\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <input width=50 class=\"tree-input\" [(ngModel)]=\"prod.data.getLeftComponent().expression\" #ctrl=\"ngModel\" required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"updateProcedure($event, prod, 'left')\"> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"equal\">=</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input matInput class=\"tree-input\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"prod.data.getRightComponent().expression\" #ctrl=\"ngModel\" required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"updateProcedure($event, prod, 'right')\" spellcheck=\"false\" list=\"variable-suggestions\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <input width=50 class=\"tree-input\" [(ngModel)]=\"prod.data.getRightComponent().expression\" #ctrl=\"ngModel\" required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"updateProcedure($event, prod, 'right')\"> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"prod.data.getType() == 'IfElse'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='procedure-item'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>if-else</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"prod.data.getType() == 'If'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='procedure-item'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t <span>if</span> ( <input matInput class=\"tree-input\"  [(ngModel)]=\"prod.data.getLeftComponent().expression\" #ctrl=\"ngModel\" required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"updateProcedure($event, prod, 'left')\" spellcheck=\"false\"> )\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"prod.data.getType() == 'Else'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='procedure-item'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t <span>else</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"prod.data.getType() == 'For Loop'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='procedure-item'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t <span>for (</span> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <input matInput class=\"tree-input\"  [(ngModel)]=\"prod.data.getLeftComponent().expression\" #ctrl=\"ngModel\" required (change)=\"updateProcedure($event, prod, 'left')\" spellcheck=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t <span>in</span>  \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <input matInput class=\"tree-input\" [(ngModel)]=\"prod.data.getRightComponent().expression\" #ctrl=\"ngModel\" required (change)=\"updateProcedure($event, prod, 'right')\" spellcheck=\"false\" list=\"variable-suggestions\"> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t  )\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"prod.data.getType() == 'Action'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='procedure-item'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input matInput class=\"tree-input\" [(ngModel)]=\"prod.data.getLeftComponent().expression\" #ctrl=\"ngModel\" required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"updateProcedure($event, prod, 'left')\" spellcheck=\"false\" list=\"variable-suggestions\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"equal\">=</span>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"module\">{{prod.data.getRightComponent().module}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t.\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <span class=\"function\">{{prod.data.getRightComponent().fn_name}}</span> \r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t( <span *ngIf=\"prod.data.getRightComponent().params.length>0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"param-container\" \t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let p of prod.data.getRightComponent().params; let i=index\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input matInput class=\"tree-input\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t [(ngModel)]=\"prod.data.getRightComponent().params[i].value\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t #ctrl=\"ngModel\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t (change)=\"updateProcedure($event, prod, 'right')\" spellcheck=\"false\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t list=\"variable-suggestions\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf='i<prod.data.getRightComponent().params.length-1'>,</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <input width=50 class=\"tree-input\" [(ngModel)]=\"p\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t placeholder=\"Input something here\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t #ctrl=\"ngModel\" required \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t (change)=\"updateProcedure($event, prod, 'right')\"> --> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\t)\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class = \"divider\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class = \"seg2\" *ngIf=\"prod.data.getType() != 'Else' && prod.data.getType() != 'If'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button mat-button \r\n\t\t\t\t\t\t\t\t\t\t\t\t    *ngIf=\"prod.data.getType() =='Action'\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"openHelp($event, prod)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon>help_outline</mat-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t   <button mat-button\r\n\t\t\t\t\t\t\t\t\t\t\t   \t\t(click)=\"togglePrint(prod.data)\" \r\n\t\t\t\t\t\t\t\t\t\t\t   \t\tmatTooltip=\"Print value to console\"\r\n\t\t\t\t\t\t\t\t\t\t\t   \t\t*ngIf=\"prod.data.getType() =='Action' || prod.data.getType() =='Data'\">\r\n\t\t\t\t    \t\t\t\t\t    \t\t<mat-icon>print</mat-icon>\r\n\t\t\t\t\t    \t\t\t\t\t    </button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t <button mat-button (click)=\"toggle(prod.data)\" matTooltip=\"Enable/Disable Line\">\r\n\t\t\t\t    \t\t\t\t\t    \t\t<mat-icon>check_circle</mat-icon>\r\n\t\t\t\t\t    \t\t\t\t\t    </button>\r\n\t\t\t\t\t\t\t\t\t\t        <button mat-button (click)=\"deleteProcedure(prod)\" matTooltip=\"Delete Line\">\r\n\t\t\t\t    \t\t\t\t\t    \t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t    \t\t\t\t\t    </button>\r\n\t\t\t\t\t    \t\t\t\t\t    <!-- <button (click)=\"disableProcedure(prod, $event)\">Disable</button>\r\n\t\t\t\t\t    \t\t\t\t\t    <button (click)=\"go($event)\">Copy</button> -->\r\n\t\t\t\t\t\t    \t\t\t\t</div>\r\n\t\t\t\t\t\t    \t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </ng-template>\r\n\t\t\t\t\t\t</tree-root> \r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t\t<!-- </div>\t -->\t\t\t\t\t\r\n\r\n\t\t\t\t\t\r\n\t\t</mat-expansion-panel>\r\n\t</mat-accordion>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/procedure-editor/procedure-editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.procedure-item span.module {\n  color: #F3A32A !important;\n  font-weight: bold; }\n\n.procedure-item span.function {\n  color: #7B52AB !important;\n  font-weight: bold; }\n\n.procedure-item span.equal {\n  text-align: center;\n  width: 15px; }\n\n.seg1.disabled {\n  opacity: 0.4; }\n\n.seg1.print {\n  background-color: #A5F3A5; }\n\nmat-expansion-panel-header {\n  background-color: #F1F1F1 !important;\n  border-top: 1px solid #8AA8C0 !important;\n  border-bottom: 1px solid #8AA8C0 !important;\n  padding-left: 15px !important; }\n  mat-expansion-panel-header mat-panel-title {\n    color: #395D73 !important;\n    font-weight: bold !important;\n    font-size: 12px !important; }\n  mat-expansion-panel-header:hover {\n    background-color: #F1F1F1 !important; }\n\n/*\r\n.viewer{\r\n\t@extend .viewer;\r\n\t.container{\r\n\t\tposition: relative;\r\n\r\n\t\tpadding: 15px; \r\n\r\n\t\tdisplay: flex; \r\n\t\tflex-direction: column;\r\n\r\n\t\t.tree{\r\n\t\t\tmargin-top: 20px; \r\n\t\t\tmin-height: 150px;\r\n\t\t\theight: 100%;\r\n\t\t\twidth: 100%; \r\n\t\t}\r\n\r\n\t\t.tree-node-wrapper{\r\n\t\t\tinput.tree-input{\r\n\t\t\t\twidth: auto;\r\n\t\t\t\tdisplay: inline-block;\r\n\t\t\t\ttext-align: center;\r\n\t\t\t}\r\n\r\n\t\t\t/*.param-container{\r\n\t\t\t\tdisplay: inline-block;\r\n\t\t\t\tbackground-color: $color3;\r\n\t\t\t}*/\n/*\r\n\t\t\t.procedure-item{\r\n\t\t\t\tmargin: 3px; \r\n\t\t\t\tpadding: 3px;\r\n\r\n\t\t\t\tfont-size: 12px; \r\n\t\t\t\tline-height: 14px;\r\n\t\t\t\t\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\tborder: 1px solid $color2;\r\n\t\t\t\tbackground-color: $color2;\r\n\t\t\t\tcursor: move;\r\n\r\n\t\t\t\t.btn-group{\r\n\t\t\t\t\tdisplay: none;\r\n\t\t\t\t\tmargin: 5px 0px;\r\n\t\t\t\t\tdisplay: flex; \r\n\t\t\t\t\tflex-direction: row; \r\n\t\t\t\t\tjustify-content: space-between;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}*/\n/*.toolbox{\r\n\t\t\tmax-height: 600px;\r\n\t\t\tbackground-color:$color1;\r\n\t\t\t.fn_name{\r\n\t\t\t\tfont-size: 12px;\r\n\t\t\t}\r\n\t\t}\r\n\t}*/\n/* \t.container{\r\n\tposition: relative;\r\n\r\n\t.procedure{\r\n\r\n\t\tpadding: 4px; \r\n\t\twidth: 100%;\r\n\r\n\t\t[contenteditable=\"true\"]:active,\r\n\t\t[contenteditable=\"true\"]:focus{\r\n\t\tborder:none;\r\n\t\toutline:none;\r\n\t\t}\r\n\r\n\t\t[contenteditable=\"true\"]{\r\n\t\t\tcolor: blue;\r\n\t\t\tborder-bottom: 1px dashed blue;\r\n\t\t}\r\n\r\n\r\n\t\t&.disabled{\r\n\t\t\tbackground-color: red;\r\n\t\t}\r\n\r\n\t}\r\n\r\n\t.btn-container{\r\n\t\tposition: absolute;\r\n\t\tbottom: 0px; \r\n\t\tleft: 30%;\r\n\r\n\t\tbutton{\r\n\t\t\theight: 30px; \r\n\t\t\twidth: 30px;\r\n\t\t}\r\n\t}\r\n\r\n}\r\n\r\ninput.tree-input{\r\n\tbackground-color: transparent;\r\n\twidth: auto;\r\n\tborder: 0px; \r\n\theight: 18px; \r\n\tfont-size: 14px;\r\n\tpadding: 5px; \r\n\tdisplay: inline;\r\n\tfont-family: sans-serif;\r\n\tline-height: 18px;\r\n\ttext-align: center;\r\n\tvertical-align: middle;\r\n\tborder-bottom: 1px dashed blue;\r\n} \t\r\n\r\n}\r\n\r\n\r\n/* .dialog{\r\n\tposition: absolute;\r\n\ttop: 100px;\r\n\tleft: 0px;\r\n\tborder: 1px solid black;\r\n\tpadding: 10px;\r\n\tbackground-color: white;\r\n\tz-index: 14;\r\n\tfont-size: 12px;\r\n\r\n\t.close{\r\n\t\tcursor: pointer;\r\n\t}\r\n\r\n\t.toolbox{\r\n\t\t.fn_container{\r\n\t\t\t.fn_name{\r\n\t\t\t\t\r\n\t\t\t\tcursor: pointer;\r\n\t\t\t\t\r\n\t\t\t\t&:hover{\r\n\t\t\t\t\tbackground-color: gray;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n */\n", ""]);

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




let ProcedureEditorComponent = class ProcedureEditorComponent extends __WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__["a" /* Viewer */] {
    constructor(injector, layoutService) {
        super(injector, "procedure-editor");
        this.layoutService = layoutService;
        this._procedureArr = [];
        //_treeNodes = [];
        this._tree_options = {
            allowDrag: function (element) {
                if (element.data._type == __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].IfControl || element.data._type == __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].ElseControl) {
                    return false;
                }
                else {
                    return true;
                }
            },
            allowDrop: (element, { parent, index }) => {
                // return true / false based on element, to.parent, to.index. e.g.
                return (parent.data._type !== __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].IfElseControl
                    && parent.data._type !== __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Data
                    && parent.data._type !== __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Action); /*(parent.data._type == ProcedureTypes.IfControl)
        || parent.data._type == ProcedureTypes.ElseControl
        || parent.data._type == ProcedureTypes.ForLoopControl));*/
            }
        };
    }
    reset() {
        this._procedureArr = [];
        this._node = undefined;
        this._variableList = [];
        //this._treeNodes = [];
    }
    setProperties() {
        this._node = this.flowchartService.getSelectedNode();
        this._procedureArr = this._node.getProcedure();
        this._variableList = this._node.getVariableList();
    }
    update(message) {
        if (message == "procedure") {
            this.tree.treeModel.update();
            // let id: number = this.flowchartService.getSelectedProcedure()["id"];
            // if(id){
            // 	let n = this.tree.treeModel.getNodeById(id);
            //  	n.expand();
            //  	if(n.parent){
            //  		n.parent.expand();
            //  	}
            // }
            this._variableList = this._node.getVariableList();
            //this.tree.treeModel.expandAll();
        }
        else {
            this.setProperties();
            //this.updateProcedureTree();
        }
    }
    ngOnInit() {
        this.setProperties();
        this.tree.treeModel.update();
    }
    ngAfterViewInit() {
        this.tree.treeModel.expandAll();
    }
    getString(type) {
        return type.toString();
    }
    openHelp($event, prod) {
        $event.stopPropagation();
        if (prod.data._type == "Action") {
            let fn = prod.data.getRightComponent().expression.split(".");
            fn = { module: fn[0], name: fn[1] };
            this.layoutService.showHelp(fn);
        }
    }
    toggle(prod) {
        if (prod.isDisabled()) {
            prod.enable();
        }
        else {
            prod.disable();
        }
    }
    togglePrint(prod) {
        if (prod.printToConsole()) {
            prod.disablePrint();
        }
        else {
            prod.enablePrint();
        }
    }
    focus($event, prod) {
        this._focusedProd = prod;
        this.flowchartService.selectProcedure(prod.data);
    }
    //
    //
    //
    onMoveNode($event) {
        // get previous parent
        let moved_procedure = $event.node;
        let to_procedure = $event.to.parent;
        let moved_position = $event.to.index;
        moved_procedure.setParent(to_procedure);
        // case: no parent and parent added
        // case: no parent and no parent
        // case: parent and different parent
        // case: parent and same parent
        // case: parent and no parent
        // if( moved_procedure.getParent() === to_procedure ){
        // 	if(parent === undefined){
        // 		this._node.deleteProcedure(moved_procedure);
        // 		this._node.addProcedureAtPosition(moved_procedure, moved_position);
        // 	}
        // 	else{
        // 		to_procedure.deleteChild(moved_procedure);
        // 		to_procedure.addChildAtPosition(moved_procedure, moved_position);
        // 	}
        // }
        // else{
        // 	if(parent === undefined){
        // 		this._node.deleteProcedure(moved_procedure);
        // 	}
        // 	else{
        // 		parent.deleteChild(moved_procedure);
        // 	}
        // 	if(to_procedure === undefined){
        // 		this._node.addProcedureAtPosition(moved_procedure, moved_position)
        // 	}
        // 	else{
        // 		to_procedure.addChildAtPosition(moved_procedure, moved_position);
        // 	}
        // }
        //this.flowchartService.update();
    }
    // converts the procedure into a tree item
    // getTreeItem(prod : IProcedure, index: number): Object{
    // 	let self = this;
    // 	let procedure_type :ProcedureTypes = prod.getType();
    // 	let treeItem = { 
    // 		index: index,
    // 		name: procedure_type, 
    // 		expanded: true,
    // 		children: [], 
    // 		leftExpression: "undefined", 
    // 		rightExpression: "undefined",
    // 		model: prod
    // 	};
    // 	//let dataObj = { id: Math.random() , name: data.getTitle(), type: procedure_type, model: data } ; 
    // 	// ProcedureType.Data
    // 	if(procedure_type === ProcedureTypes.Data){
    // 		treeItem["leftExpression"] = prod.getLeftComponent().expression;
    // 		treeItem["rightExpression"] = prod.getRightComponent().expression;
    // 	}
    // 	else if(procedure_type === ProcedureTypes.Action ){
    // 		treeItem["leftExpression"] = prod.getLeftComponent().expression;
    // 		treeItem["module"] = prod.getRightComponent().module;
    // 		treeItem["function"] = prod.getRightComponent().fn_name;
    // 		treeItem["params"] = prod.getRightComponent().params;
    // 	}
    // 	else if(prod.hasChildren() == true){
    // 		treeItem["children"] = prod.getChildren().map(function(node, id){
    // 			return self.getTreeItem(node, id) 
    // 		})
    // 		if(procedure_type == ProcedureTypes.ForLoopControl){
    // 			treeItem["leftExpression"] = prod.getLeftComponent().expression;
    // 			treeItem["rightExpression"] = prod.getRightComponent().expression;
    // 		}
    // 		else if(procedure_type == ProcedureTypes.IfControl){
    // 			treeItem["leftExpression"] = prod.getLeftComponent().expression;
    // 		}
    // 	}
    // 	else{
    // 		throw Error("unknown procedure type");
    // 	}
    // 	return treeItem;
    // }
    // updateProcedureTree(){
    // 	let self = this;
    // 	this._treeNodes = this._procedureArr.map(function(prod, index){
    // 		return self.getTreeItem(prod, index);
    // 	})
    // }
    updateProcedure($event, prod, property) {
        // todo: change this string attachment!
        if (property == 'left' && prod.data._type !== "If") {
            prod.data.getLeftComponent().expression =
                prod.data.getLeftComponent().expression.replace(/[^\w\[\]]/gi, '');
        }
        this._variableList = this._node.getVariableList();
        // let procedure: IProcedure = prod.data;
        // if(property == "left"){	
        // 	let comp = procedure.getLeftComponent(); 
        // 	//comp.expression = prod.data.leftExpression;
        // 	//procedure.setLeftComponent(comp);
        // }
        // else if(property == "right"){
        // 	let comp = procedure.getRightComponent(); 
        // 	comp.expression = prod.data.rightExpression;
        // 	comp.params = prod.data.params;
        // 	procedure.setRightComponent(comp);
        // }
        // else{
        // 	throw Error("Invalid procedure update");
        // }
        //this.tree.treeModel.update();
        /// check if valid procedure was generated
        // this.flowchartService.updateProcedure(prod.data);
    }
    deleteProcedure(node) {
        let parent = node.parent;
        if (parent.data.virtual) {
            this._node.deleteProcedure(node.data);
            this._procedureArr = this._node.getProcedure();
        }
        else {
            parent.data.deleteChild(node.data);
            this.tree.treeModel.update();
        }
        this.flowchartService.selectProcedure(undefined);
        // let prod: IProcedure = node.data;
        // if(prod.getParent()){
        // 	prod.getParent().deleteChild(prod);
        // 	this.tree.treeModel.update();
        // }
        // else{
        // }
        // this.update("procedure");
        //this.flowchartService.update();
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('tree'),
    __metadata("design:type", Object)
], ProcedureEditorComponent.prototype, "tree", void 0);
ProcedureEditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-procedure-editor',
        template: __webpack_require__("../../../../../src/app/ui-components/editors/procedure-editor/procedure-editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/editors/procedure-editor/procedure-editor.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */], __WEBPACK_IMPORTED_MODULE_3__global_services_layout_service__["a" /* LayoutService */]])
], ProcedureEditorComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/help/help-viewer/help-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer\">\r\n\t\r\n\t<h1>Möbius Functions</h1>\r\n\r\n\t<mat-accordion *ngIf='!fnObj'>\r\n\r\n\t\t<!-- functions -->\r\n\t \t<mat-expansion-panel \r\n\t \t\t*ngFor=\"let m of _helpMods\"\r\n\t \t\t[expanded]=\"getModName(m.name) ==_activeMod\">\r\n\t    \t<mat-expansion-panel-header>\r\n\t    \t\t<mat-panel-title>\r\n\t\t\t      {{ getModName(m.name) }} \r\n\t\t\t    </mat-panel-title>\r\n\t    \t</mat-expansion-panel-header>\r\n\r\n\t\t\t<mat-list id=\"{{getModName(m.name)}}\" \r\n\t\t\t\tstyle=\"max-height: 500px; overflow: auto;\">\r\n\t\t\t\t<!-- <h3 mat-subheader>{{m.comment.shortText}}</h3> -->\r\n\r\n\t\t\t\t<h3 mat-subheader>Functions</h3>\r\n\t\t\t \t<mat-list-item *ngFor=\"let fn of m.children\">\r\n\t\t\t \t\t<div class = \"content\">\r\n\t\t\t\t \t\t<h4 mat-line>{{fn.name}}</h4>\r\n\t    \t\t\t\t<p class=\"head-descr\" mat-line>{{fn.signatures[0].comment.shortText}}</p>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<!-- @derek: parameters-->\r\n\t\t\t\t\t\t<div  class=\"parameters\" mat-line *ngIf='fn.signatures[0].parameters'>\r\n\t\t\t\t\t\t\t<div *ngFor=\"let pa of fn.signatures[0].parameters\">\r\n\t\t\t\t\t\t\t\t<!--<span class=\"topic\">Name: </span>-->\r\n\t\t\t\t\t\t\t\t<span class=\"topic\">{{pa.name}}: </span>\r\n\t\t\t\t\t\t\t\t<!-- <span *ngIf=\"pa.type\">Type: {{pa.type.type}}</span> -->\r\n\t\t\t\t\t\t\t\t<!--<span class=\"topic\">Description: </span>-->\r\n\t\t\t\t\t\t\t\t<span class=\"descr\" *ngIf=\"pa.comment\">{{pa.comment.text}}</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"return-block\">\r\n\t\t    \t\t\t\t<span class=\"topic\">Returns: </span>\r\n\t\t    \t\t\t\t<span class=\"descr\">{{fn.signatures[0].comment.returns}}</span>\r\n\t\t    \t\t\t</div>\r\n\r\n\t\t    \t\t\t\r\n\t    \t\t\t\t<p mat-line>\t\r\n\t    \t\t\t\t\t<a href=\"https://phtj.github.io/gs-modelling/docs/modules/{{getUrl(m.name, fn.name)}}\" target=\"_blank\">More</a>\r\n\t    \t\t\t\t</p>\r\n\r\n    \t\t\t\t</div>\r\n\t\t\t \t</mat-list-item>\r\n\t\t\t \t<mat-divider></mat-divider>\r\n\t\t\t</mat-list>\r\n\r\n\t \t</mat-expansion-panel>\r\n\t \t\r\n\t</mat-accordion>\r\n\r\n\t<!-- specific function -->\r\n\t<div *ngIf='fnObj && fnObj.name'>\r\n\t\t\r\n\t\t<h4>Module: {{fnObj.module}}</h4>\r\n\t\t<h3>{{fnObj.name}}</h3>\r\n\t\t\r\n\t\t<div *ngIf='fnObj.content'>\r\n\t\t\t{{fnObj.content.signatures[0].comment.shortText}}\r\n\t\t\tReturns: {{fnObj.content.signatures[0].comment.returns}}\r\n\t\t\t\t<a href=\"https://phtj.github.io/gs-modelling/docs/modules/{{getUrl(fnObj.module, fnObj.name)}}\" target=\"_blank\">\r\n\t\t\t\tMore\r\n\t\t\t\t</a>\r\n\t\t</div>\r\n\t\r\n\t\t<hr>\r\n\t\t\r\n\t\t<div (click)=\"showAll()\" style=\"cursor: pointer;\">[Show All]</div>\r\n\t\r\n\t</div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui-components/help/help-viewer/help-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.viewer {\n  padding: 15px;\n  height: 100%;\n  box-sizing: border-box;\n  padding-bottom: 30px;\n  overflow: auto; }\n  .viewer h1 {\n    padding-left: 15px;\n    padding-bottom: 5px;\n    color: #395D73;\n    display: block;\n    border-bottom: 1px solid #F1F1F1; }\n\nmat-expansion-panel {\n  margin: 0 !important;\n  overflow: hidden !important; }\n  mat-expansion-panel mat-expansion-panel-header mat-panel-title {\n    color: #F3A32A !important; }\n\nmat-panel-description {\n  display: none; }\n\n.content {\n  width: 100%;\n  text-align: left !important; }\n  .content .head-descr {\n    margin-bottom: 12px;\n    font-size: 12px; }\n\n/*\r\n.mat-list-item-content{\r\n\tpadding: 0;\r\n\tborder: 0;\r\n}\r\n\r\n.mat-line{\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tline-height: $fsize1;\r\n}*/\nmat-list .mat-subheader {\n  display: none;\n  font-size: 12px;\n  color: #395D73;\n  margin: 0;\n  padding: 0; }\n\nmat-list mat-list-item h4 {\n  color: #7B52AB;\n  font-size: 12px;\n  border-bottom: 1px solid #8AA8C0;\n  font-weight: bold;\n  display: block;\n  margin: 0; }\n\nmat-list mat-list-item p {\n  font-size: 12px;\n  color: #395D73;\n  margin: 0; }\n  mat-list mat-list-item p a {\n    color: #8AA8C0;\n    font-size: 12px; }\n\nmat-list div {\n  padding: 0 !important; }\n\n.topic {\n  color: #395D73;\n  cursor: default !important;\n  font-weight: bold;\n  font-size: 12px; }\n  .topic:hover {\n    color: #395D73; }\n\n.descr {\n  font-size: 12px;\n  color: #395D73;\n  cursor: default !important; }\n\n.return-block .topic {\n  text-decoration: underline; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/help/help-viewer/help-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_layout_service__ = __webpack_require__("../../../../../src/app/global-services/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_services_flowchart_service__ = __webpack_require__("../../../../../src/app/global-services/flowchart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_gs_modelling_docs_json_gs_modelling_json__ = __webpack_require__("../../../../gs-modelling/docs_json/gs-modelling.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_gs_modelling_docs_json_gs_modelling_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__node_modules_gs_modelling_docs_json_gs_modelling_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let HelpViewerComponent = class HelpViewerComponent {
    //modules/_group_.html
    constructor(layoutService, sanitizer, flowchartService) {
        this.layoutService = layoutService;
        this.sanitizer = sanitizer;
        this.flowchartService = flowchartService;
        this.sanitizer = sanitizer;
        this._subscription = this.layoutService.getMessage().subscribe(message => {
            if (message.text.startsWith("Module: ")) {
                this.notify();
            }
        });
        let mods = this.flowchartService.getModules().map(function (m) {
            return m["_name"].toLowerCase();
        });
        this._helpMods = __WEBPACK_IMPORTED_MODULE_4__node_modules_gs_modelling_docs_json_gs_modelling_json___default.a.children.filter(function (child) {
            let mod_name = child.name.substring(1, child.name.length - 1);
            return mods.indexOf(mod_name) > -1;
        });
    }
    notify() {
        let url_segment = this.layoutService.getUrl();
        let url = 'https://phtj.github.io/gs-modelling/docs/' + url_segment;
        this._url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        let fnObj = this.layoutService.getObj();
        if (fnObj && fnObj.name) {
            this.fnObj = fnObj;
            for (let m = 0; m < this._helpMods.length; m++) {
                let mo = this._helpMods[m];
                let mname = this.getModName(mo.name);
                if (mname.toLowerCase() == fnObj.module.toLowerCase()) {
                    for (let f = 0; f < mo.children.length; f++) {
                        let child = mo.children[f];
                        if (fnObj.name.toLowerCase() == child.name.toLowerCase()) {
                            fnObj["content"] = child;
                        }
                    }
                }
            }
        }
        else if (fnObj && fnObj.module && !fnObj.name) {
            this._activeMod = fnObj.module.toUpperCase();
            this.fnObj = undefined;
        }
    }
    getUrl(name, fn) {
        if (name.startsWith("\"")) {
            return "_" + name.substring(1, name.length - 1).toLowerCase() + "_.html#" + fn.toLowerCase();
        }
        else {
            return "_" + name.toLowerCase() + "_.html#" + fn.toLowerCase();
        }
    }
    getModName(name) {
        return name.substring(1, name.length - 1).toUpperCase();
    }
    getHash(m, fn) {
        return this.getModName(m.name) + "/" + fn.name;
    }
    showAll() {
        this.fnObj = undefined;
        this.layoutService.setObj();
    }
    ngOnInit() {
        this.notify();
    }
    ;
};
HelpViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-help-viewer',
        template: __webpack_require__("../../../../../src/app/ui-components/help/help-viewer/help-viewer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/help/help-viewer/help-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__global_services_layout_service__["a" /* LayoutService */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_2__global_services_flowchart_service__["a" /* FlowchartService */]])
], HelpViewerComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/help/info-viewer/help.about.tpl.html":
/***/ (function(module, exports) {

module.exports = "    <h1>\r\n        Möbius Modeller\r\n    </h1>\r\n    <p>\r\n        Möbius Modeller is a free and open-source web-application for parametric\r\n        modelling. It runs in the Chrome browser.\r\n    </p>\r\n\r\n    <h3 style=\"text-align: center;\">\r\n       Getting started with Möbius\r\n    </h3>\r\n    <p style=\"text-align: center;\">\r\n        <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/285M8St3WHQ\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen>\r\n        </iframe>\r\n    </p>\r\n\r\n    <h2>\r\n        Visual Programming\r\n    </h2>\r\n    <p>\r\n        In Möbius, users are provided with a set of visual programming tools to\r\n        define scripts for generating models. These tools integrate two types of\r\n        visual programming: flowcharts and procedures.\r\n    </p>\r\n    <p>\r\n        Flowcharts consist of nodes connected together with wires. Each node in the\r\n        flowchart has a set of input and output ports, and contains a small\r\n        procedure to perform some type of action.\r\n    </p>\r\n    <p>\r\n        Procedures consist of a sequence of lines of code. There are four types of\r\n        code lines: 1) variables assignments, 2) ‘for-each’ loops, 3) ‘if-else’\r\n        conditions, and 4) function calls.\r\n    </p>\r\n    <p>\r\n        Function calls are lines of code that call a particular function. Libraries\r\n        of different functions are provided. Additional libraries of functions can\r\n        be added at any stage.\r\n    </p>\r\n    <h2>\r\n        User Interface\r\n    </h2>\r\n    <p>\r\n        The Möbius Modeller user interface consists of four main viewports, with\r\n        one viewport on the left and three viewports on the right. The viewports\r\n        can be rearrange into any configuration. By default, the Output viewport is\r\n        on the right side, and the Flowchart, Procedure and Parameters viewports\r\n        are on the right side.\r\n    </p>\r\n    <p>\r\n        · The Flowchart viewports is for defining the flowcharts, consisting of\r\n        nodes connected with wires. Selecting one of the nodes in the Flowchart\r\n        viewport will change the contents of the other three viewports.\r\n    </p>\r\n    <p>\r\n        · The Procedure viewport is for defining the procedure inside each node.\r\n        The procedure that is shown is for the node selected in the Flowchart\r\n        viewport.\r\n    </p>\r\n    <p>\r\n        · The Parameters viewport is for setting the parameter values associated\r\n        with each node. The parameters that are shown are for the node selected in\r\n        the Flowchart viewport. This viewport also contain the green ‘Execute\r\n        Flowchart’ button, which will execute the flowchart using the specified\r\n        parameter values.\r\n    </p>\r\n    <p>\r\n        · The Output viewport is for viewing the output generated by executing the\r\n        script, as well as for viewing Help. The Output viewport has a number of\r\n        different viewers. The most basic viewer is the Text Viewer, which is for\r\n        viewing basic text. There is also an Output console, which is where various\r\n        messages (including error messages) get printed.\r\n    </p>\r\n    <p align=\"center\">\r\n        <img\r\n            width=\"600\"\r\n            height=\"310\"\r\n            src=\"./assets/img/info/image002.png\"\r\n        />\r\n    </p>\r\n    <h2>\r\n        Flowchart\r\n    </h2>\r\n    <p>\r\n        The Flowchart viewport allows you to create and delete nodes, and to wire\r\n        them together into a network. The flowchart flows from left to right, and\r\n        form a chain of execution. Nodes without wires attached to any of the\r\n        inputs are called “start nodes”, and nodes without wires attached to any of\r\n        the outputs are called “end nodes”. (An “isolated node” has neither.)\r\n    </p>\r\n    <p>\r\n        When a flowchart is executed, the first nodes to be executed are all the\r\n        start nodes. The data produced by the nodes will travel down the wires to\r\n        the next set of nodes, which are then executed. This continues until end\r\n        nodes are reached on the right hand side.\r\n    </p>\r\n    <p align=\"center\">\r\n        <img\r\n            width=\"249\"\r\n            height=\"91\"\r\n            src=\"./assets/img/info/image004.jpg\"\r\n        />\r\n    </p>\r\n    <p>\r\n        When a flowchart is executed, the data generated by each output of each\r\n        node is saved. This means that after execution, you can explore the data\r\n        generated by each node by clicking on its output ports and view the results\r\n        in one of the Output viewers. (See the section on Outputs.)\r\n    </p>\r\n    <p>\r\n        When wiring nodes together, inputs can only have a single wire attached.\r\n        However, outputs can have multiple wires attached. If an output has\r\n        multiple wires attached, then the data is copied and sent down each wire\r\n        separately.\r\n    </p>\r\n    <p align=\"center\">\r\n        <img\r\n            width=\"186\"\r\n            height=\"193\"\r\n            src=\"./assets/img/info/image006.jpg\"\r\n        />\r\n    </p>\r\n    <p>\r\n        If a node has multiple inputs, then it will not be executed until all the\r\n        data for all its inputs has been received.\r\n    </p>\r\n    <p align=\"center\">\r\n        <img\r\n            width=\"165\"\r\n            height=\"166\"\r\n            src=\"./assets/img/info/image008.jpg\"\r\n        />\r\n    </p>\r\n    <p>\r\n        The left sidebar allows you perform various operations:\r\n    </p>\r\n    <p>\r\n        · Save and Load Flowcharts as a file. These are saved as .mob files. It is\r\n        important to save often.\r\n    </p>\r\n    <p>\r\n        · Create new nodes and subnets. (Subnets are coming soon.)\r\n    </p>\r\n    <ul>\r\n        <li>\r\n            Save and Load Libraries of nodes as a file.\r\n        </li>\r\n    </ul>\r\n    <p>\r\n        Each node has three buttons (only displayed when the node is selected):\r\n    </p>\r\n    <p>\r\n        · Delete: Deletes the node. This cannot be undone, so be careful!\r\n    </p>\r\n    <p>\r\n        · Disable: Disables the node. When the network is executed, the network\r\n        behaves as if the node did not exist.\r\n    </p>\r\n    <p>\r\n        · Save: Saves the node to your library, stored in the browser cache.\r\n    </p>\r\n    <p>\r\n        Saving nodes allows you to use them multiple times in different Flowcharts.\r\n        It also allows you to share nodes with others. Note that the library is\r\n        stored in the browser cache. If you clear your cache, then you will lose\r\n        all your saved nodes. Therefore, if you have nodes that you want to keep,\r\n        it is a good idea to save them to file.\r\n    </p>\r\n    <h2>\r\n        Procedure\r\n    </h2>\r\n    <p>\r\n        The Procedure viewport allows you to define the procedure that gets\r\n        executed inside a node. The Procedure shown in this viewport is for the\r\n        node selected in the flowchart.\r\n    </p>\r\n    <p>\r\n        The procedure is basically a small script, but rather than typing the\r\n        script in a text editor, you create your Procedure by dragging and dropping\r\n        lines of code into the script.\r\n    </p>\r\n    <p>\r\n        The procedure consists of three sections, each of which can be expanded and\r\n        contracted. The Input and Outputs sections list the input and outputs for\r\n        the node. For each input and output, the name can be set, and the type can\r\n        be selected from a drop-down list. Based on the selection, other settings\r\n        can be set. Selecting an input or output line will show a ‘delete’ button\r\n        on the right hand side, allowing you to delete it.\r\n    </p>\r\n    <p>\r\n        The main procedure is define under the Procedure section. The procedure\r\n        consists of a sequence of lines of code that get executed one at a time.\r\n        These lines of code will read data from the inputs and write data to the\r\n        outputs. In the example below, the procedure has three lines of code that\r\n        do the following:\r\n    </p>\r\n    <p>\r\n        1. Creates a variable called ‘my_var’ and sets its value to the value from\r\n        the first input multiplied by 10.\r\n    </p>\r\n    <p>\r\n        2. Creates a second variable called ‘rand_num’ and uses a function call to\r\n        set its value to a random number between 0 and 1.\r\n    </p>\r\n    <p>\r\n        3. Set the value of the first output (named ‘out0’) to the value of\r\n        ‘my_var’ divided by the value of ‘rand_num’.\r\n    </p>\r\n    <p align=\"center\">\r\n        <img\r\n            width=\"201\"\r\n            height=\"152\"\r\n            src=\"./assets/img/info/image010.jpg\"\r\n        />\r\n    </p>\r\n    <p>\r\n        Procedures will typically include one or more function calls, and may also\r\n        include various variable assignments, for-each loops, and if-else\r\n        conditions. Clicking any of these items in the left sidebar will add them\r\n        to the procedure, underneath the currently selected line. The lines of code\r\n        can be repositioned by dragging and dropping.\r\n    </p>\r\n    <p>\r\n        There are four types of lines of code that can be inserted:\r\n    </p>\r\n    <p>\r\n        · Variable: Create a new variable or assigns a value to an existing\r\n        variable. Variables can have different data types. See Data Types for a\r\n        more detailed explanation.\r\n    </p>\r\n    <p>\r\n        · For-each loop: Create a loop that repeats the operations inside it,\r\n        multiple times. See For-Loop for a more detailed explanation.\r\n    </p>\r\n    <p>\r\n        · If-else condition: Create a conditional statement, and execute the\r\n        operations inside it based on whether the condition is true or false.\r\n    </p>\r\n    <p>\r\n        · Function: Call a function in the built the function library.\r\n    </p>\r\n    <p>\r\n        Selecting or hovering on a line in the procedure will show a set of buttons\r\n        on the right hand side.\r\n    </p>\r\n    <p>\r\n        · Help: Show the help for the particular function. The help will be\r\n        displayed in under the Output viewport.\r\n    </p>\r\n    <p>\r\n        · Print: Prints the value generated by that line of code to the console.\r\n        This is mainly used for debugging.\r\n    </p>\r\n    <p>\r\n        · Disable: Disables the line of code. When the code is executed, it will\r\n        simply ignore this line of code.\r\n    </p>\r\n    <ul>\r\n        <li>\r\n            Delete: Deletes the line of code.\r\n        </li>\r\n    </ul>\r\n    <p>\r\n        For more information about writing Procedures, see the Procedure help file.\r\n    </p>\r\n    <h2>\r\n        Parameters\r\n    </h2>\r\n    <p>\r\n        Each node can have zero or more parameters whose values can be set in the\r\n        Parameters viewport. The parameters shown in this viewport are for the node\r\n        selected in the flowchart.\r\n    </p>\r\n    <p>\r\n        The parameters are all node inputs for which no wires have been attached.\r\n        In the example below, the node has three inputs. The first input (‘in0’)\r\n        has a wire attached, so it does not appear as a parameter. The other two\r\n        parameters have no wires, so these will appear as Parameters whose values\r\n        you can set manually in the parameters viewport.\r\n    </p>\r\n    <p align=\"center\">\r\n        <img\r\n            width=\"82\"\r\n            height=\"117\"\r\n            src=\"./assets/img/info/image012.jpg\"\r\n        />\r\n        <img\r\n            width=\"294\"\r\n            height=\"112\"\r\n            src=\"./assets/img/info/image014.jpg\"\r\n        />\r\n    </p>\r\n    <p>\r\n        Clicking the execute button will execute the flowchart with the specified\r\n        parameters.\r\n    </p>\r\n    <h2>\r\n        Output\r\n    </h2>\r\n    <p>\r\n        Once a flowchart has been executed, the results can be viewed in the Output\r\n        viewport. The outputs that are shown in this viewport are for the node\r\n        selected in the flowchart.\r\n    </p>\r\n    <p>\r\n        The Output viewport has a number of different viewers.\r\n    </p>\r\n    <p>\r\n        The Console viewer shows messages resulting from the execution of the\r\n        flowchart. Each message has a time stamp and a short piece of text. If any\r\n        errors occurred, then an error message will also be shown. These outputs\r\n        are not linked to any particular node. As a result, selecting different\r\n        nodes in the flowchart has no effect on what is being displayed in the\r\n        Console. This is not the case with the other Output viewers.\r\n    </p>\r\n    <p>\r\n        The Console is an important viewer when debugging. For example, in the\r\n        example below, the ‘print’ on the variable called ‘rand_num’ was enabled,\r\n        which resulted in the value being printed out as a console message. This\r\n        allows you to see that variable was set to a value of ‘0.154…’.\r\n    </p>\r\n    <p align=\"center\">\r\n        <img\r\n            width=\"202\"\r\n            height=\"189\"\r\n            src=\"./assets/img/info/image016.jpg\"\r\n        />\r\n    </p>\r\n    <p>\r\n        The Text viewer shows the output or all the outputs of the node selected in\r\n        the Viewport. This is the most basic was of looking at the output of the\r\n        node, and works for any type of output. If the output is actually a text\r\n        value, then it is directly printed in the text viewer. If the output is not\r\n        text, then it is first converted to text and shown in the viewer.\r\n    </p>\r\n    <p align=\"center\">\r\n        <img\r\n            width=\"132\"\r\n            height=\"219\"\r\n            src=\"./assets/img/info/image018.jpg\"\r\n        />\r\n        <img\r\n            width=\"77\"\r\n            height=\"100\"\r\n            src=\"./assets/img/info/image020.jpg\"\r\n        />\r\n    </p>\r\n    <p>\r\n        The 3D viewer shows the output for the selected output port for the\r\n        selected node in the flowchart. Selecting different nodes and different\r\n        output ports in the flowchart will change what is being displayed in the 3D\r\n        viewer. However, note that the 3D viewer will only be able to display the\r\n        output if the content is compatible. Thus, if an output port is outputting\r\n        some text, then there is little that the 3D viewer will be able to do with\r\n        this and as a result nothing will be displayed.\r\n    </p>\r\n    <p>\r\n        In order to make switching between viewers easier, each output port has a\r\n        default Viewer. When an output port is selected, and the Output window will\r\n        automatically switch to that default Viewer. In the example below, the\r\n        first output (‘out0’) is set to use the Console viewer is set to use the\r\n        Console Viewer, while the other two outputs (‘out1’ and ‘out2’) are set to\r\n        use the Text Viewer.\r\n    </p>\r\n    <p align=\"center\">\r\n        <img\r\n            width=\"217\"\r\n            height=\"70\"\r\n            src=\"./assets/img/info/image022.jpg\"\r\n        />\r\n    </p>"

/***/ }),

/***/ "../../../../../src/app/ui-components/help/info-viewer/help.about.tpl.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/help/info-viewer/help.fundamentals.tpl.html":
/***/ (function(module, exports) {

module.exports = "<h1>Fundamentals</h1>\r\n\r\n<p>\r\n    In order to get a better understanding of creating procedures in Möbius, it will be helpful to review some of the fundamental constructs of programming.\r\n</p>\r\n\r\n<ul>\r\n    <li><a href=\"#execution\">Execution</a></li>\r\n    <li><a href=\"#variables\">Variables</a></li>\r\n    <li><a href=\"#primitive\">Primitive Data Types</a></li>\r\n    <li><a href=\"#list\">List Data Type</a></li>\r\n    <li><a href=\"#passing\">Passing Data: By Value and By Reference</a></li>\r\n    <li><a href=\"#expressions\">Expressions</a></li>\r\n    <li><a href=\"#if-else\"><i>If-else</i> Conditions</a></li>\r\n    <li><a href=\"#for-each\"><i>For-each</i> Loop</a></li>\r\n    <li><a href=\"#variable-scope\">Variable Scope</a></li>\r\n    <li><a href=\"#functions\">Functions</a></li>\r\n</ul>\r\n\r\n<a name=\"execution\"><h2>Execution</h2></a>\r\n\r\n<p>\r\n    A procedure consists of a sequence of lines of code. When you execute the procedure, your computer will execute the each line of code, one by one. It is like a sequence of instructions.\r\n</p>\r\n\r\n<code>\r\n    // code on line 1<br>\r\n    // code on line 2<br>\r\n    // code on line 3<br>\r\n</code>\r\n\r\n<p>\r\n    (Note that in the code example above, each line starts with a \"//\". This is actually a shorthand to indicate that this line consists of a comment. The computer will ignore such lines.)\r\n</p>\r\n\r\n<p>\r\n    (Note also that in this document, various code snippet are given as examples. The code that you create in Möbius of course looks a little different, but the structure is exactly the same. We are just writing the code snippets in this way in order to avoid having to do lots of screen captures. Each code snippet is assumed to be independent and stand alone.)\r\n</p>\r\n\r\n<p>\r\n    In general, the flow of the execution goes one line at a time, top to bottom. You can change this linear behaviour by using <i>if-else</i> conditions and <i>for-loops</i>. More on that later.\r\n</p>\r\n\r\n<p>\r\n    Each line of code can contain various types of statements. The most basic is a variable assignment.\r\n</p>\r\n\r\n<a name=\"variables\"><h2>Variables</h2></a>\r\n\r\n<p>\r\n    A variable can be thought of as a named container in which you can place some data. A variable is something like this:\r\n</p>\r\n\r\n<code>\r\n    x = 123<br>\r\n</code>\r\n\r\n<p>\r\n    In the above code, the variable named <code>x</code> contains the number <code>123</code>. We can say: \"the value of the variable is 123\". The first time you use a variable like this, it gets declared, which creates the container in memory. Once it is declared, you can change the value at any time.\r\n</p>\r\n\r\n<code>\r\n    x = 123<br>\r\n    x = 456<br>\r\n</code>\r\n\r\n<p>\r\n    In the above code, the variable named <code>x</code> was used for the first time, and value was set to <code>123</code>. Then, on the second line, the value <code>123</code> was discarded and replaced with the value <code>456</code>. We can say: \"the value of 456 was assigned to the variable x\". You can change the value as many times as you like.\r\n</p>\r\n\r\n<p>\r\n    By convention, variables are typically named using lowercase letters only. For example, \"my_variable\". The variable name should not contain spaces, or any special character. Also, it should not start with a number.\r\n</p>\r\n\r\n<a name=\"primitive\"><h2>Primitive Data Types</h2></a>\r\n\r\n<p>\r\n    The data that you assign to a variable can have different types. Möbius allows you to work with three primitive data types:\r\n</p>\r\n\r\n<ul>\r\n    <li>Numbers, eg. 123, 120.50 etc.</li>\r\n    <li>Strings of text e.g. \"This text string\" etc.</li>\r\n    <li>Boolean e.g. true or false.</li>\r\n</ul>\r\n\r\n<p>\r\n    Below is an example of some variable assignments for the three different primitive data types:\r\n</p>\r\n\r\n<code>\r\n    my_age = 47<br>\r\n    my_name = \"Patrick\"<br>\r\n    lives_in_sg = true<br>\r\n</code>\r\n\r\n<p>\r\n    There is also a special data type called <code>null</code>. When a value has already been assigned, and you want to clear it without assigning some other value, then you can assign <code>null</code>.\r\n</p>\r\n\r\n<code>\r\n    my_age = 47<br>\r\n    // do some other stuff<br>\r\n    my_age = null<br>\r\n</code>\r\n\r\n<p>\r\n    Strings can contain a lot of data. Here is an example of a longer string:\r\n</p>\r\n\r\n<code>\r\n    some_text = \"The Möbius Modeller is a 3D parametric modelling software. It has a visual programming interface that combines dataflow programming with blocks-based programming. Dataflow programming is used to define the overall structure of your code, using nodes connected by wires. Blocks-based programming is used to define the individual procedures in each of your nodes. Procedures contain fours main types if elements: 1) variables, 2) if-else conditions, 3) for loops, and 4) function calls.\"\r\n</code>\r\n\r\n<p>\r\n    In the example above, the variable called <code>some_text</code> is assigned a longer string. A string can also be much longer than that - for example, maybe a whole book.\r\n</p>\r\n\r\n<p>\r\n    Also, note also that strings can contain text that looks like a number, but that is actually not a number data type. Here is an example:\r\n</p>\r\n\r\n<code>\r\n    text_that_looks_like_number = \"123.456\"<br>\r\n    a_number = 123.456<br>\r\n</code>\r\n\r\n<p>\r\n    Note that characters in a string can also be accessed using the square bracket notation. For example:\r\n</p>\r\n\r\n<code>\r\n    my_name = \"patrick\"<br>\r\n    first_letter = my_name[0]<br>\r\n    last_letter = my_name[6]<br>\r\n</code>\r\n\r\n<p>\r\n    The square bracket notation for indexing will be explained in more detail in the section on lists.\r\n</p>\r\n\r\n<a name=\"list\"><h2>List Data Types</h2></a>\r\n\r\n<p>\r\n    The three primitive data types already allow many useful procedures to be written. However, there is one key problem: none of them allow you to handle collections of data items. When creating procedures, you will find that a lot of data needs to managed as a collection.\r\n</p>\r\n\r\n<p>\r\n    For example, lets say you have 10 people in your group, and you want to store their names. You could create 10 variables, named <code>person1=\"patrick\"</code>, <code>person2=\"kainwee\"</code>, <code>person3=\"akshata\"</code>,etc, and assign each one a different name. But that would get tedious. You could store them all in one string, for example: <code>people=\"patrick, kainwee, akshata\"</code>. But that is rather inflexible, since everything is stored in a single lump of text.\r\n</p>\r\n\r\n<p>\r\n    In order to be easily handle collections of data, Möbius allows you to use a list data type. A list lets you store multiple values in a single variable. A list is defined using square brackets, like this:\r\n</p>\r\n\r\n<code>\r\n    names_list = [\"patrick\", \"kianwee\", \"akshata\"]<br>\r\n    some_numbers = [1, 2, 3, 4.5, 6.7, 1000, 2000]<br>\r\n</code>\r\n\r\n<p>\r\n    In the first line of the above code, a variable called <code>names_list</code> has been created, and a value has been assigned to it that has a list data type. The list has three items inside it, each of which is a string. In the second line, a variable called <code>some_numbers</code> has been created, and the value is a list of various numbers.\r\n</p>\r\n\r\n<p>\r\n    The items in a list can be accessed using a zero based index. This index starts at zero, and counts up the list, one item at a time. So in the <code>names_list</code> above, <code>\"patrick\"</code> is at index 0, <code>\"kianwee\"</code> at 1, and <code>\"akshata\"</code> at 2. Below is an example of accessing items in names_list:\r\n</p>\r\n\r\n<code>\r\n    names_list = [\"patrick\", \"kianwee\", \"akshata\"]<br>\r\n    person = names_list[1]<br>\r\n</code>\r\n\r\n<p>\r\n    The variable called <code>person</code> is now assigned the value \"kianwee\". (This is because \"kainwee\" is at index position 1.) If you wanted to assign <code>\"patrick\"</code> to <code>person</code>, one would write <code>names_list[0]</code>, if you wanted \"akshata\", one would write <code>names_list[2]</code>. Note that for the first item, the index is 0, and for teh last item the index is the list length minus 1.\r\n</p>\r\n\r\n<p>\r\n    The same approach can be used in order to set the values of the items in a list. For example, we could change one of the names as follows:\r\n</p>\r\n\r\n<code>\r\n    names_list = [\"patrick\", \"kianwee\", \"akshata\"]<br>\r\n    names_list[0] = \"patrick_janssen\"<br>\r\n</code>\r\n\r\n<p>\r\n    The <code>names_list</code> would contain three items, namely <code>[\"patrick_janssen\", \"kianwee\", \"akshata\"]</code>. You can also add items to the list, like this.\r\n</p>\r\n\r\n<code>\r\n    names_list = [\"patrick\", \"kianwee\", \"akshata\"]<br>\r\n    names_list[3] = \"kamel\"<br>\r\n</code>\r\n\r\n<p>\r\n    The <code>names_list</code> would contain four items, namely <code>[\"patrick\", \"kianwee\", \"akshata\", \"kamel\"]</code>.\r\n</p>\r\n\r\n<p>\r\n    In some cases, rather than filling a list with items, we may instead need to create an empty list, that then gets filled later. Here is an example:\r\n</p>\r\n\r\n<code>\r\n    names_list = []<br>\r\n    // some other code<br>\r\n    names_list[0] = \"joie\"<br>\r\n    names_list[1] = \"derek\"<br>\r\n</code>\r\n\r\n<a name=\"passing\"><h2>Passing Data: By Value and By Reference</h2></a>\r\n\r\n<p>\r\n    Finally, the last thing to say about lists goes a little deeper into programming concepts. It may not be immediately relevant when you first get started, but still it s worth mentioning. It relates to how data is passed around. There are basically two ways that data can get passed: by value and by reference. Lets say you set <code>variable_a = variable_b</code>:\r\n</p>\r\n\r\n<ul>\r\n    <li>By Value: The data value in <code>variable_a</code> is copied, and assigned to <code>variable_b</code>. The two variables now have separate values stored in different locations in memory. The two values will currently be the same, but if you later change one, the other will not be affected.</li>\r\n    <li>By Reference: A reference to the data value in <code>variable_a</code> is copied, and the reference is assigned to <code>variable_b</code>. The two variables now have the same value stored in the same locations in memory. This means that is you change the value of one variable, the other will change as well.</li>\r\n\r\n</ul>\r\n\r\n<p>\r\n    The easiest way to understand this is with a pair of example. The first example will be using primitive data types (which are passed by value), and the second with a list data type (which is passed by reference).\r\n</p>\r\n\r\n<code>\r\n    a = 5<br>\r\n    b = a<br>\r\n    a = 6<br>\r\n</code>\r\n\r\n<p>\r\n    The question is, after executing all three lines of code, what is the value of <code>b</code>? The answer is 5. If we follow this line by line it makes sense.\r\n</p>\r\n\r\n<ul>\r\n    <li>Line 1) We set the value of <code>a</code> to 5. </li>\r\n    <li>Line 2) We set the value of <code>b</code> to <code>a</code>. This results in the value being passed <i>by value</i>.</li>\r\n    <li>Line 3) We change the value of a to 6. This does not affect b in any way,</li>\r\n</ul>\r\n\r\n<p>\r\n    Now lets look at a similar case using lists.\r\n</p>\r\n\r\n\r\n<code>\r\n    list_a = [1, 2, 3] <br>\r\n    list_b = list_a<br>\r\n    list_a[0] = 10<br>\r\n</code>\r\n\r\n<p>\r\n    The question again is, after executing all three lines of code, what is the value of <code>b</code>? The answer is [10, 2, 3]. This may be more surprising. Why is the first item now 10? In the third line, we change a, not b. Lets set through it line by line.\r\n</p>\r\n\r\n<ul>\r\n    <li>Line 1: We set the value of <code>list_a</code> to [1, 2, 3]. </li>\r\n    <li>Line 2: We set the value of <code>list_b</code> to <code>list_a</code>. This results in the value being passed <i>by reference</i>.</li>\r\n    <li>Line 3: We change the value of a to [10, 2, 3]. Since list_a and list_b are referencing the same value, this means that list_b now also has a value of [10, 2, 3]. </li>\r\n</ul>\r\n\r\n<a name=\"expressions\"><h2>Expressions</h2></a>\r\n\r\n<p>\r\n    As we have see above, a variable assignment has an \"=\" with something on the left and something on the right. The left hand side must specify a container in which the data will be stored. This can either be a variable name (for example <code>my_variable</code>), or, if the variable type is a list, then it can be a variable name with an index (for example, <code>my_list[1]</code>).\r\n</p>\r\n\r\n<p>\r\n    The right hand side of the assignment operator can be more interesting. So far, we have only been assigning a value. But on the right side you can write more complex expressions. For example:\r\n</p>\r\n\r\n<code>\r\n    my_variable = ((4 * 3) / 2) - 1<br>\r\n</code>\r\n\r\n<p>\r\n    Expressions can use arithmetic and comparison operators. For example, let us take a simple expression: 4 + 5 is equal to 9. Here 4 and 5 are called operands and ‘+’ is called the operator, which in this case is an arithmetic operator.\r\n</p>\r\n\r\n<p>\r\n    The arithmetic operators are as follows:\r\n</p>\r\n\r\n<ul>\r\n    <li>+ (Addition) Adds two operands</li>\r\n    <li>- (Subtraction) Subtracts the second operand from the first</li>\r\n    <li>* (Multiplication) Multiply both operands</li>\r\n    <li>/ (Division) Divide the numerator by the denominator</li>\r\n    <li>% (Modulus) Outputs the remainder of an integer division</li>\r\n    <li>++ (Increment) Increases an integer value by one</li>\r\n    <li>-- (Decrement) Decreases an integer value by one</li>\r\n</ul>\r\n\r\n<p>\r\n    The comparison operators are as follows:\r\n</p>\r\n\r\n<ul>\r\n    <li>(A == B) Checks if the value of two operands are equal or not, if yes, then the condition becomes true. </li>\r\n    <li>(A != B) Checks if the value of two operands are equal or not, if the values are not equal, then the condition becomes true.</li>\r\n    <li>(A > B) Checks if the value of the left operand is greater than the value of the right operand, if yes, then the condition becomes true.</li>\r\n    <li>(A < B) Checks if the value of the left operand is less than the value of the right operand, if yes, then the condition becomes true.</li>\r\n    <li>(A >= B) Checks if the value of the left operand is greater than or equal to the value of the right operand, if yes, then the condition becomes true.</li>\r\n    <li>(A <= B) Checks if the value of the left operand is less than or equal to the value of the right operand, if yes, then the condition becomes true.</li>\r\n</ul>\r\n\r\n<a name=\"if-else\"><h2><i>If-else</i> Conditions</h2></a>\r\n\r\n<p>\r\n    While creating a procedure, there may be a situation when you need to perform different actions based on different conditions.\r\n</p>\r\n\r\n<p>\r\n    Möbius supports an <code>if-else</code> conditional statements. Here is an example:\r\n</p>\r\n\r\n<code>\r\n    if (variable_a > 100)<br>\r\n    &nbsp;&nbsp;// execute the code that is inside the if, only if the condition is true<br>\r\n    else<br>\r\n    &nbsp;&nbsp;// execute the code that is inside the else, only if the condition is not true<br>\r\n</code>\r\n\r\n<p>\r\n    (In the Möbius procedure window, pay attention to the left indentation of the code. You can drag your lines of code into the if-else block, and they will become indented. This indicates that they are inside the if-condition, or the else condition.)\r\n</p>\r\n\r\n<p>\r\n    In this case, if <code>variable_a</code> is greater than <code>100</code>, then the first set of code is executed. Otherwise the second set of code is executed.\r\n</p>\r\n\r\n<a name=\"for-each\"><h2><i>For-each</i> Loops</h2></a>\r\n\r\n<p>\r\n    While creating a procedure, you may encounter a situation where you need to perform an action over and over again. In such situations, you would need to write loop statements.\r\n</p>\r\n\r\n<p>\r\n    Möbius provides a for-each loop that allows you to loop over a list of values.\r\n</p>\r\n\r\n<code>\r\n    list_of_items = [10, 20, 30, 40, 50]<br>\r\n    if (item in list_of_items)<br>\r\n    &nbsp;&nbsp;// execute the code that is inside the loop multiple times, using item<br>\r\n</code>\r\n\r\n<p>\r\n    (In the Möbius procedure window, pay attention to the left indentation of the code. You can drag your lines of code into the for-loop block, and they will become indented. This indicates that they are inside the loop.)\r\n</p>\r\n\r\n<p>\r\n    The example above shows the basic loop construct. The <code>list_of_items</code> contains five values, so the loop will execute five times. Each time, the a variable called <code>item</code> is created with a new value. The first time around the loop, <code>item</code> will have a value of 10, the second time, it will have a value of 20, and so forth. Each time around the loop, the code will most likely do something useful with this <code>item</code> variable.\r\n</p>\r\n\r\n<a name=\"variable-scope\"><h2>Variable Scope</h2></a>\r\n\r\n<p>\r\n    When using if-else conditions and for-each loops, it is important to look a little deeper at creating variables. If-else condition and for-each loops define inner blocks of code (shown graphically by the level of indentation). These blocks of code can have multiple lines, and these lines may include the creation of new variables. The are certain rules that define where variables are visible, referred to as the <i>variable scope</i>.\r\n</p>\r\n\r\n<p>\r\n    Lets assume you you create variable in your procedure called <code>variable_a</code>. Where can you use that variable name? Which is the same as asking, where is that variable \"in scope\"? (If you do it wrong, you will get a \"ReferenceError\" when you run your program.) To figure this out, you need to follow two basic rules (both rules need to be true).:\r\n</p>\r\n\r\n<ul>\r\n    <li>Rule 1: The line of code accessing the variable must come after the line of code that created the variable. </li>\r\n    <li>Rule 2: The line of code accessing the variable must be contained inside the code block that created the variable.</li>\r\n</ul>\r\n\r\n<p>\r\n    Lets look at an example, and analyse it line by line.\r\n</p>\r\n\r\n<code>\r\n    a = 2<br>\r\n    if (condition)<br>\r\n    &nbsp;&nbsp;b = a * 4<br>\r\n    c = b * 6 // ReferenceError<br>\r\n</code>\r\n\r\n<ul>\r\n    <li>Line 1:The variable <code>a</code> is created.</li>\r\n    <li>Line 2:The <i>if</i> creates a code sub-block, with a single line of code in it. There are now two code blocks, the main code block of the procedure, and nested inside that, this <i>if</i> code sub-block.</li>\r\n    <li>Line 3:This line is inside the <i>if</i> code block, which is inside the main code block. A new variable, <code>b</code> is created. The value is set to <code>a</code> multiplied by 4. In this cases, there is no problem accessing the variable <code>a</code>, because both rules are true. Rule 1: Line 3 come after line 1. Rule 2: Line 3 is inside the line 1 code block.</li>\r\n    <li>Line 4:This line is inside the <i>if</i> code block. This line generates an ReferenceError. A new variable, <code>c</code> is created, no problem here. But the problem occurs when the value is set to <code>b</code> multiplied by 6. In this cases, line 4 cannot access the variable <code>b</code> define on line 3. Rule 1 is still OK: Line 4 come after line 3. However, Rule 2 is not OK: Line 4 is not inside the line 3 code block. So, as far as this line is concerned, variable <code>b</code> does not exist.</li>\r\n</ul>\r\n\r\n<p>\r\n    Basically, anything you create in these inner code blocks is not visible to the code outside the block. To someone who is new to programming, this may seem annoying. However, it is actually a good thing, since it avoids many errors that are hard to catch. Furthermore, there is actually a simple way to fix this, as follows:\r\n</p>\r\n\r\n<code>\r\n    a = 2<br>\r\n    b = 0 // a default value<br>\r\n    if (condition)<br>\r\n    &nbsp;&nbsp;b = a * 4<br>\r\n    c = b * 6<br>\r\n</code>\r\n\r\n<p>\r\n    Since <code>b</code> is now created in the main code block, the last line no longer has an error.\r\n</p>\r\n\r\n<a name=\"functions\"><h2>Functions</h2></a>\r\n\r\n<p>\r\n    Finally, we get to the functions, which is where most of the useful operations can be performed. Möbius allow users to create procedures that call a set of predefined functions, organised into modules to make the easier to find. These functions are all called it the same way.\r\n</p>\r\n\r\n<ul>\r\n    <li>The function name species the function to be called.</li>\r\n    <li>The function inputs are called the \"arguments\", and are specified in round brackets after the function name. </li>\r\n    <li>The function may have an output, which is called the \"return value\". If it has a return value, then the return value will typically be assigned to a variable.</li>\r\n</ul>\r\n\r\n<p>\r\n    For example, consider the <code>string.len()</code> function that calculates the length of a string.\r\n</p>\r\n\r\n<code>\r\n    my_str = \"This is some text.\"<br>\r\n    result = string.len(my_str)<br>\r\n</code>\r\n\r\n<p>\r\n    In this case, the module name is <code>string</code>, and the function name is <code>len</code>. The function takes one argument as input, which is the string whose length needs to be calculated, which in this case is <code>my_str</code>. The function returns a number (the length of the string), which gets assigned to the variable called <code>result</code>.\r\n</p>\r\n\r\n<p>\r\n    The sections below give help documentation on all the functions available in Möbius.\r\n</p>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/help/info-viewer/help.fundamentals.tpl.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/help/info-viewer/help.template.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MobiusAbout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpFundamentals; });
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

let MobiusAbout = class MobiusAbout {
    constructor() { }
    ngOnInit() {
    }
};
MobiusAbout = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-help-about',
        template: __webpack_require__("../../../../../src/app/ui-components/help/info-viewer/help.about.tpl.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/help/info-viewer/help.about.tpl.scss")]
    }),
    __metadata("design:paramtypes", [])
], MobiusAbout);

let HelpFundamentals = class HelpFundamentals {
    constructor() { }
    ngOnInit() {
    }
};
HelpFundamentals = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-help-fundamentals',
        template: __webpack_require__("../../../../../src/app/ui-components/help/info-viewer/help.fundamentals.tpl.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/help/info-viewer/help.fundamentals.tpl.scss")]
    }),
    __metadata("design:paramtypes", [])
], HelpFundamentals);



/***/ }),

/***/ "../../../../../src/app/ui-components/help/info-viewer/info-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer\">\r\n\r\n    <!-- <h1>Möbius Procedures</h1> -->\r\n\r\n    <mat-accordion *ngIf='!fnObj'>\r\n\r\n        <mat-expansion-panel [expanded]='true' class=\"panel\">\r\n            <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                    ABOUT\r\n                </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            \r\n            <div class=\"panel-content\"> \r\n                <app-help-about></app-help-about>\r\n            </div>\r\n            \r\n        </mat-expansion-panel>\r\n\r\n        <!-- fundamentals -->\r\n        <mat-expansion-panel class=\"panel\">\r\n            <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                    FUNDAMENTALS\r\n                </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            \r\n            <div class=\"panel-content\"> \r\n                <app-help-fundamentals></app-help-fundamentals>\r\n            </div>\r\n\r\n        </mat-expansion-panel>\r\n\r\n    </mat-accordion>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui-components/help/info-viewer/info-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.viewer {\n  padding: 15px;\n  height: auto;\n  overflow: auto; }\n  .viewer .panel-content {\n    max-height: 700px;\n    overflow: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/help/info-viewer/info-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoViewerComponent; });
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

let InfoViewerComponent = class InfoViewerComponent {
    constructor() { }
    ngOnInit() {
    }
};
InfoViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-info-viewer',
        template: __webpack_require__("../../../../../src/app/ui-components/help/info-viewer/info-viewer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/help/info-viewer/info-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], InfoViewerComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/layout/panel/panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n\t<div class=\"title\">{{heading}}{{_selectedNodeName}}</div>\r\n\t<div class=\"data\"></div>\r\n\t<div class=\"btn-group\">\r\n\t\t<div (click)=\"maximize()\">\r\n\t\t\t<span matTooltip=\"Expand\">\r\n\t\t\t\t<mat-icon [class.disabled]=\"panel_id == 'main'\">aspect_ratio</mat-icon>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t\t<!-- <div (click)=\"minimize()\">\r\n\t\t\t<span matTooltip=\"Minimize\">\r\n\t\t\t\t<mat-icon  [class.disabled]=\"true\" >remove</mat-icon>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t\t<div (click)=\"restore()\">\r\n\t\t\t<span matTooltip=\"Restore\">\r\n\t\t\t\t<mat-icon  [class.disabled]=\"true\">open_in_new</mat-icon>\r\n\t\t\t</span>\r\n\t\t</div> -->\r\n\t</div>\r\n</div>\r\n\r\n\r\n<app-viewer-container *ngIf='heading === EV.Viewer'></app-viewer-container>        \r\n<app-flowchart-viewer *ngIf='heading === EV.Flowchart'></app-flowchart-viewer>\r\n<app-editor  *ngIf='heading === EV.Editor'></app-editor>\r\n<app-parameter-viewer  *ngIf='heading === EV.Parameter'></app-parameter-viewer>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/layout/panel/panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border-bottom: 1px solid #8AA8C0;\n  background-color: #395D73;\n  color: white;\n  height: 30px;\n  line-height: 30px;\n  font-size: 14px;\n  padding: 0px 15px; }\n  .header .btn-group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n    .header .btn-group span {\n      color: #F1F1F1; }\n      .header .btn-group span mat-icon {\n        font-size: 14px;\n        cursor: pointer; }\n        .header .btn-group span mat-icon.disabled {\n          color: #8AA8C0 !important; }\n        .header .btn-group span mat-icon:hover {\n          color: #F0BFA0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/layout/panel/panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_layout_service__ = __webpack_require__("../../../../../src/app/global-services/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewers_EViewer__ = __webpack_require__("../../../../../src/app/ui-components/viewers/EViewer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let PanelComponent = class PanelComponent extends __WEBPACK_IMPORTED_MODULE_3__base_classes_viz_Viewer__["a" /* Viewer */] {
    constructor(injector, layoutService) {
        super(injector);
        this.layoutService = layoutService;
        this.EV = __WEBPACK_IMPORTED_MODULE_2__viewers_EViewer__["a" /* EViewer */];
        this._lsubscription = this.layoutService.getMessage().subscribe(message => {
            this.refresh();
        });
        this.refresh();
    }
    update() {
        this._selectedNodeName = ":" + " " + this.flowchartService.getSelectedNode().getName();
    }
    reset() {
        this._selectedNodeName = "";
    }
    refresh() {
        this.layout = this.layoutService.getAssets();
        this.refreshContent();
    }
    refreshContent() {
        if (this.panel_id == "main") {
            this.heading = this.layout.content.main;
        }
        else {
            this.heading = this.layout.content.side[this.panel_id];
        }
    }
    ngOnInit() {
        this.refreshContent();
    }
    // shifts component to main panel
    maximize() {
        this.layoutService.maximize(this.panel_id);
    }
    // reduces size of component
    minimize() {
        this.layoutService.minimize(this.panel_id);
    }
    // refreshes size of component
    restore() {
        this.layoutService.restore(this.panel_id);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
    __metadata("design:type", String)
], PanelComponent.prototype, "panel_id", void 0);
PanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-panel',
        template: __webpack_require__("../../../../../src/app/ui-components/layout/panel/panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/layout/panel/panel.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */], __WEBPACK_IMPORTED_MODULE_1__global_services_layout_service__["a" /* LayoutService */]])
], PanelComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/EViewer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EViewer; });
var EViewer;
(function (EViewer) {
    EViewer["Viewer"] = "Output";
    EViewer["Flowchart"] = "Flowchart";
    EViewer["Editor"] = "Procedure";
    EViewer["Parameter"] = "Parameters";
})(EViewer || (EViewer = {}));


/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/code-viewer/code-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer\">\r\n\t<div class=\"ace-editor\" ace-editor [(text)]=\"code\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/code-viewer/code-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.viewer {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box !important;\n  padding-bottom: 60px !important; }\n  .viewer .ace-editor {\n    height: 100%; }\n", ""]);

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

module.exports = "<div class=\"viewer\">\r\n\t<div class=\"container\">\r\n\t\t<gs-viewer [data]=\"gs_dummy_data\"></gs-viewer>\r\n\t\t<!-- <div id=\"app-geometry-viewer\"></div> -->\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/geometry-viewer/geometry-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.viewer {\n  height: 100%;\n  width: 100%; }\n  .viewer .container {\n    height: 100%;\n    width: 100%; }\n    .viewer .container #app-geometry-viewer {\n      height: 100%;\n      width: 100%; }\n      .viewer .container #app-geometry-viewer canvas {\n        height: 100% !important;\n        width: 100% !important; }\n", ""]);

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
    }
    reset() {
    }
    ngOnInit() {
        this.update();
    }
    update() {
        try {
            this._port = this.flowchartService.getSelectedPort();
            this.gs_dummy_data = this._port.getValue();
        }
        catch (ex) {
            this.gs_dummy_data = undefined;
        }
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

// this.gs_dummy_data =  {
//               attribs: null,
//               geom: {
//                   objs: [
//                       [
//                           [
//                               [0, 1, 2, 3, -1],
//                           ],
//                           [
//                               [1, 5, 4, 0, -1],
//                               [2, 6, 5, 1, -1],
//                               [3, 7, 6, 2, -1],
//                               [0, 4, 7, 3, -1],
//                               [5, 6, 7, 4, -1],
//                           ],
//                           [200],
//                       ],
//                   ],
//                   points: [
//                       [0, 1, 2, 3, 4, 5, 6, 7],
//                       [
//                           [-0.7, -1.0, 0.0],
//                           [0.2, -1.0, 0.0],
//                           [0.2, -1.0, 3.0],
//                           [-0.7, -1.0, 3.0],
//                           [-0.7, 1.0, 0.0],
//                           [0.2, 1.0, 0.0],
//                           [0.2, 1.0, 3.0],
//                           [-0.7, 1.0, 3.0],
//                       ],
//                   ],
//               },
//               groups: [
//                   {
//                       name: "building_obj",
//                       objs: [0],
//                       props: [["descr", "The building object, that has wire and faces."]],
//                   },
//                   // groups with topo
//                   {
//                       name: "building_all_faces",
//                       topos: [
//                           [[0, [0, 1, 2, 3, 4]]],
//                           [],
//                           [],
//                           [],
//                           [],
//                           [],
//                       ],
//                   },
//                   {
//                       name: "walls",
//                       parent: "building_obj",
//                       props: [["descr", "Three walls."], ["material", "brick"], ["thickness", 300]],
//                       topos: [
//                           [[0, [1, 3, 4]]],
//                           [],
//                           [],
//                           [],
//                           [],
//                           [],
//                       ],
//                   },
//                   {
//                       name: "floor",
//                       parent: "building_obj",
//                       topos: [
//                           [[0, [0]]],
//                           [],
//                           [],
//                           [],
//                           [],
//                           [],
//                       ],
//                   },
//                   {
//                       name: "roof",
//                       parent: "building_obj",
//                       topos: [
//                           [[0, [2]]],
//                           [],
//                           [],
//                           [],
//                           [],
//                           [],
//                       ],
//                   },
//                   {
//                       name: "winodw_openings",
//                       parent: "building_obj",
//                       topos: [
//                           [],
//                           [[0, [0]]],
//                           [],
//                           [],
//                           [],
//                           [],
//                       ],
//                   },
//                   {
//                       name: "vertical_edges_of_faces",
//                       parent: "building_obj",
//                       topos: [
//                           [
//                               [0,
//                                   [
//                                       [1, [1, 3]],
//                                       [3, [1, 3]],
//                                       [4, [0, 2]],
//                                   ],
//                               ],
//                           ],
//                           [],
//                           [],
//                           [],
//                           [],
//                           [],
//                       ],
//                   },
//                   {
//                       name: "vertices_on_ground",
//                       parent: "building_obj",
//                       topos: [
//                           [
//                               [0,
//                                   [
//                                       [0, [0, 1, 2, 3]],
//                                       [1, [2, 3]],
//                                       [3, [0, 1]],
//                                       [4, [0, 3]],
//                                   ],
//                               ],
//                           ],
//                           [
//                               [0,
//                                   [
//                                       [0, [0, 1]],
//                                   ],
//                               ],
//                           ],
//                           [],
//                           [],
//                           [],
//                           [],
//                       ],
//                   },
//                   {
//                       name: "points_on_ground",
//                       parent: "building_obj",
//                       points: [0, 1, 4, 5],
//                   },
//               ],
//               metadata: {
//                   crs: { epsg: 3857 },
//                   filetype: "gs-json",
//                   location: "+0-0",
//                   version: "0.1.1",
//               },
//               skins: null,
//           }; 


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
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.viewer .function {\n  border-bottom: 1px solid gray;\n  padding: 5px;\n  margin: 0px 5px 0px 5px; }\n  .viewer .function:hover {\n    background-color: #BDBABA;\n    cursor: move; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/module-viewer/module-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleViewerComponent; });
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

let ModuleViewerComponent = class ModuleViewerComponent {
    constructor(injector) {
        this.functions = [];
        /*this.module_service = injector.get(ModuleService);
        let modules = this.module_service.getModule("gis");
        let fn_names = Object.keys(Object.getPrototypeOf(modules)).filter(function(t){  return (t != "constructor"); });
        this.functions = this.functions.concat(fn_names); */
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

/***/ "../../../../../src/app/ui-components/viewers/node-library/node-library.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"disabled\">Save Library</div>\r\n<div class=\"disabled\">Load Library</div>\r\n\r\n<div (click)=\"clearLibrary()\">\r\n\tClear Library\r\n</div>\r\n<br>\r\n<div class=\"node\" *ngFor=\"let n of _savedNodes; let i=index\"\r\n\t(click)=\"addNode($event, i)\">\r\n\t{{n._name}}\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/node-library/node-library.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.node {\n  cursor: pointer; }\n  .node:hover {\n    color: white; }\n\n.disabled {\n  color: #8AA8C0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/node-library/node-library.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeLibraryComponent; });
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


let NodeLibraryComponent = class NodeLibraryComponent extends __WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__["a" /* Viewer */] {
    constructor(injector) {
        super(injector, "Node Library");
        this._savedNodes = this.flowchartService.getSavedNodes();
    }
    reset() {
        this._savedNodes = this.flowchartService.getSavedNodes();
    }
    update() {
        this._savedNodes = this.flowchartService.getSavedNodes();
    }
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
    clearLibrary() {
        this.flowchartService.clearLibrary();
    }
    downloadLibrary() {
        // todo	
    }
    loadLibrary() {
        // todo
    }
};
NodeLibraryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-node-library',
        template: __webpack_require__("../../../../../src/app/ui-components/viewers/node-library/node-library.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/viewers/node-library/node-library.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
], NodeLibraryComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/parameter-viewer/parameter-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer\">\r\n\r\n\t<div class=\"container\">\r\n\r\n\t\t<div class=\"default\" *ngIf='_inputs == undefined || _inputs.length == 0'>\r\n\t\t\tThis node has no inputs\r\n\t\t</div>\r\n \r\n\t\t<div class='paramater-container' *ngFor=\"let inp of _inputs\" >\r\n\t\t\t\r\n\t\t\t<div class=\"info\">\r\n\t\t\t\t<div class='param'>\r\n\t\t\t\t\t<!--<span class='label'>Name</span>-->\r\n\t\t\t\t\t<span class='content'>{{ inp.getName() }}</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<!-- if input type == Input -->\r\n\t\t\t<div class=\"value\" *ngIf=\"inp.getType() == InputPortTypes.Input\">\r\n\t\t\t\t<form  class='content'>\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<textarea matInput \r\n\t\t\t\t\t\t\tmatTextareaAutosize \r\n\t\t\t\t\t\t\tmatAutosizeMinRows=\"1\"\r\n\t            \t\t\tmatAutosizeMaxRows=\"5\" \r\n\t            \t\t\t(change)=\"updateComputedValue($event, inp)\"\r\n\t            \t\t\tvalue=\"{{ getValue(inp) }}\">\r\n\t            \t\t</textarea>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</form>\r\n\t\t\t</div> \r\n\r\n\t\t\t<!-- if input type == Slider -->\r\n\t\t\t<div class=\"value\" \r\n\t\t\t\t*ngIf=\"inp.getType() == InputPortTypes.Slider\">\r\n\t\t\t\t<mat-slider min=\"{{inp.getOpts().min}}\" \r\n\t\t\t\t\t\t\tmax=\"{{inp.getOpts().max}}\" \r\n\t\t\t\t\t\t\tstep=\"{{inp.getOpts().step}}\" \r\n\t\t\t\t\t\t\t[thumb-label]=\"true\"\r\n\t\t\t\t\t\t\t#val\r\n\t\t\t\t\t\t\t[(ngModel)]=\"val.value\"\r\n\t\t\t\t\t\t\t(change)=\"updateComputedValue($event, inp, val.value)\"\r\n\t\t\t\t\t\t\tvalue=\"{{ getValue(inp) }}\"></mat-slider>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t\t<!-- todo: disable if port is connected -->\r\n\t\t\t<!-- ui options based on type -->\r\n\t\t\t<!-- todo: -->\r\n\t</div>\r\n\t<button id=\"execute\" mat-raised-button color=\"accent\" (click)=\"executeFlowchart($event)\">Execute Flowchart</button>  \r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/parameter-viewer/parameter-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\ndiv.mat-input-wrapper.mat-form-field-wrapper {\n  padding: 0; }\n\n.viewer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: no-wrap;\n      flex-wrap: no-wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background-color: white;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  padding-bottom: 30px;\n  /* \t.input{\r\n\tpadding: 0px 15px;\r\n\tborder-bottom: 1px solid gray;\r\n\r\n\t.row{\r\n\t\twidth: 100%; \r\n\r\n\t\t.label{\r\n\t\t\tdisplay: inline-block;\r\n\t\t\ttext-transform: uppercase;\r\n\t\t\tfont-size: 10px; \r\n\t\t\tcolor: gray; \r\n\t\t\twidth: 10%; \r\n\t\t\tmin-width: 50px;\r\n\t\t}\r\n\r\n\t\t.content{\r\n\t\t\twidth: 90%;\r\n\t\t\tmin-width: 50px;\r\n\r\n\r\n\t\t\t&.undefined{\r\n\t\t\t\tborder-bottom: 1px dashed blue;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    overflow: auto;\n    box-sizing: border-box;\n    height: auto;\n    padding-bottom: 36px; }\n    .viewer .container .paramater-container {\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n      height: auto;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: space-equally;\n          -ms-flex-pack: space-equally;\n              justify-content: space-equally;\n      font-size: 15px;\n      line-height: 18px;\n      border-bottom: 1px solid #8AA8C0;\n      width: 100%;\n      padding: 2px 0px;\n      /*.connection{\r\n\t\t\t\t\t//border-bottom: 1px solid $color2;\r\n\t\t\t\t\tpadding: 0 0 $default-side-padding 0;\r\n\t\t\t\t\tmargin: 0;\r\n\t\t\t}*/\n      /*border-top: 1px dashed $color1;\r\n\t\t\tborder-bottom: 1px dashed $color1;*/ }\n      .viewer .container .paramater-container .info {\n        background-color: white;\n        padding: 0 15px;\n        color: #395D73;\n        width: 20%; }\n        .viewer .container .paramater-container .info .param {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          margin: 5px 0px;\n          height: 100%;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center; }\n          .viewer .container .paramater-container .info .param .content {\n            font-size: 12px; }\n      .viewer .container .paramater-container .value {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center; }\n        .viewer .container .paramater-container .value .content {\n          /*input{\r\n\t\t\t\t\t\tcolor: $color1;\r\n\t\t\t\t\t\tborder:0;\r\n\t\t\t\t\t\tborder-style: solid !important;\r\n\t\t\t\t\t\tborder-bottom: 1px solid $color1;\r\n\t\t\t\t\t\t&:hover{\r\n\t\t\t\t\t\t\tbackground-color: $color4;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\t&:focus{\r\n\t\t\t\t\t\t\tbackground-color: $color4;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}*/ }\n\n#execute {\n  width: 100%;\n  background-color: #82BF6E;\n  color: white;\n  height: 36px;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  -ms-flex-negative: 0;\n      flex-shrink: 0; }\n  #execute:hover {\n    background-color: #F0BFA0;\n    color: #F07A79; }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_classes_port_PortModule__ = __webpack_require__("../../../../../src/app/base-classes/port/PortModule.ts");
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
        this.InputPortTypes = __WEBPACK_IMPORTED_MODULE_2__base_classes_port_PortModule__["b" /* InputPortTypes */];
    }
    ngOnInit() {
        this.update();
    }
    reset() {
        this._node = undefined;
        this._inputs = [];
    }
    // addInput(): void{
    //    	this._node.addInput();
    // 	  this.flowchartService.update();
    // }
    // updateInputName($event, input): void{
    //   let name: string = $event.srcElement.innerText;
    //   input.setName(name);
    //   // put a timeout on this update or something similar to solve jumpiness
    //   this.flowchartService.update();
    // }
    // updateInputType( type:string ){
    //   alert(type);
    // }
    updateComputedValue($event, input, value) {
        if ($event.srcElement) {
            value = $event.srcElement.value;
            value = value.trim();
            if (value.length == 0) {
                input.setComputedValue(undefined);
                return;
            }
        }
        input.setComputedValue(value);
        this.flowchartService.update();
    }
    getValue(port) {
        /*if(port.isConnected()){
          let address = port.getValue().port;
          let otp = this.flowchartService.getFlowchart().getNodeByIndex(address[0]).getOutputByIndex(address[1]);
          return otp.getValue();
        }
        else{*/
        return (port.getValue() || " ");
        //}
    }
    //
    //	this update runs when there is a message from other viewers that something changed; 
    //  beware of updating flowchart here - it will go into an unending loop :/
    //
    update() {
        this._node = this.flowchartService.getSelectedNode();
        if (this._node != undefined) {
            this._inputs = this._node.getInputs().filter(function (inp) {
                return !inp.isConnected();
            });
            this.isVisible = true;
        }
        else {
            this.isVisible = false;
        }
    }
    //
    //
    //
    executeFlowchart($event) {
        $event.stopPropagation();
        this.flowchartService.execute();
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

/***/ "../../../../../src/app/ui-components/viewers/text-viewer/text-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"default\" *ngIf=\"_selectedNode === undefined\">\r\n\tNo Node Selected\r\n</div>\r\n\r\n<div class=\"container\" *ngIf=\"_selectedNode != undefined\">\r\n\t<!-- <h3>Selected Node: {{_selectedNode.getName()}}</h3>\r\n\t<hr> -->\r\n\t<mat-accordion multi=\"true\" [displayMode]=\"flat\">\r\n\t\t\t<!-- inputs -->\r\n\t\t\t<mat-expansion-panel [expanded]=\"true\" *ngFor=\"let output of _selectedNode.getOutputs()\">\r\n\t\t\t\t\r\n\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t  {{ output.getName() }}\r\n\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t  <!-- This is a summary of the content -->\r\n\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t</mat-expansion-panel-header>\r\n\r\n\t\t\t\t<p>{{ getType(output) }}</p>\r\n\r\n\t\t\t</mat-expansion-panel>\r\n\t\t\t\r\n\t</mat-accordion>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/text-viewer/text-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.container {\n  height: 100%;\n  width: 100%;\n  padding: 15px;\n  color: #395D73;\n  box-sizing: border-box;\n  overflow: auto;\n  font-family: 'Ubuntu Mono', monospace; }\n  .container .nameLabel {\n    width: 100%; }\n  .container .outputPort {\n    width: 100%; }\n  .container .content {\n    margin-right: 15px;\n    width: 100%;\n    color: #F07A79;\n    font-size: 12px; }\n  .container mat-expansion-panel-header {\n    background-color: #F1F1F1 !important;\n    border-top: 1px solid #8AA8C0 !important;\n    border-bottom: 1px solid #8AA8C0 !important;\n    padding-left: 15px !important; }\n    .container mat-expansion-panel-header mat-panel-title {\n      color: #395D73 !important;\n      font-weight: bold !important;\n      font-size: 12px !important; }\n    .container mat-expansion-panel-header:hover {\n      background-color: #F1F1F1 !important; }\n\nspan {\n  font-size: 15px;\n  display: block;\n  border-bottom: 1px solid #8AA8C0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/text-viewer/text-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_circular_json__ = __webpack_require__("../../../../circular-json/build/circular-json.node.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_circular_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_circular_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let TextViewerComponent = class TextViewerComponent extends __WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__["a" /* Viewer */] {
    constructor(injector) {
        super(injector, "Text Viewer", "Displayed geometry with each node;");
    }
    ngOnInit() {
        this.update();
    }
    reset() {
        this.update();
    }
    getPortContent() {
        if (this._selectedPort == undefined) {
            return "";
        }
        let value = this._selectedPort.getValue();
        if (typeof (value) == "object") {
            value = JSON.stringify(value);
        }
        return value;
    }
    getType(output) {
        if (output.getValue()) {
            return __WEBPACK_IMPORTED_MODULE_2_circular_json___default.a.stringify(output.getValue());
        }
        else {
            return "no-value-available";
        }
    }
    update() {
        try {
            this._selectedNode = this.flowchartService.getSelectedNode();
            this._selectedPort = this.flowchartService.getSelectedPort();
        }
        catch (ex) {
        }
    }
};
TextViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-text-viewer',
        template: __webpack_require__("../../../../../src/app/ui-components/viewers/text-viewer/text-viewer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/viewers/text-viewer/text-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
], TextViewerComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/viewer-container/viewer-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer-container\">     \r\n\t<mat-button-toggle-group class=\"viewer-toggle\" [(ngModel)]=\"group.value\" (change)=\"changed()\">\r\n\t\t<div class= \"btn-grp1\">\r\n\t\t\t<mat-button-toggle value=\"0\" class=\"viewer-toggle-btn\" matTooltip=\"3D Viewer\">\r\n\t\t\t  <mat-icon>3d_rotation</mat-icon>\r\n\t\t\t</mat-button-toggle>\r\n\t\t\t<mat-button-toggle value=\"2\" class=\"viewer-toggle-btn\" matTooltip=\"Text Viewer\">\r\n\t\t\t  <mat-icon>description</mat-icon>\r\n\t\t\t</mat-button-toggle>\r\n\t\t\t<!-- <mat-button-toggle value=\"3\" disabled class=\"viewer-toggle-btn\" matTooltip=\"??\">\r\n\t\t\t  <mat-icon>text_format</mat-icon>\r\n\t\t\t</mat-button-toggle> -->\r\n\t\t\t<mat-button-toggle value=\"3\" class=\"viewer-toggle-btn\" matTooltip=\"Console\">\r\n\t\t\t  <mat-icon>info_outline</mat-icon>\r\n\t\t\t</mat-button-toggle>\r\n\t\t\t<mat-button-toggle value=\"4\" class=\"viewer-toggle-btn\" matTooltip=\"Function Help\" >\r\n\t\t\t  <mat-icon>help_outline</mat-icon>\r\n\t\t\t</mat-button-toggle>\r\n\t\t\t<mat-button-toggle value=\"5\" class=\"viewer-toggle-btn\" matTooltip=\"About Mobius\" >\r\n\t\t\t  <mat-icon>info</mat-icon>\r\n\t\t\t</mat-button-toggle>\r\n\t\t</div>\r\n\t\t<div class = \"btn-grp2\">\r\n\t\t\t<mat-button-toggle value=\"1\" id=\"codeViewer\" class=\"viewer-toggle-btn\" matTooltip=\"Code Viewer\">\r\n\t\t\t  <mat-icon>code</mat-icon>\r\n\t\t\t</mat-button-toggle>\r\n\t\t</div>\r\n\t</mat-button-toggle-group>\r\n\r\n\t<!-- <button class=\"viewer-toggle-btn\" \r\n\t\tmatTooltip=\"Locked: {{this._lock}}\" (click)=\"lock()\" \r\n\t\tstyle=\"position: absolute;right: 0px; top:0px;\">\r\n\t\t<mat-icon>lock</mat-icon>\r\n\t</button>\r\n -->\r\n\t<app-geometry-viewer *ngIf=\"group.value == 0\"></app-geometry-viewer>\r\n\t<app-code-viewer *ngIf=\"group.value == 1\"></app-code-viewer>\r\n\t<app-text-viewer *ngIf=\"group.value == 2\"></app-text-viewer>\r\n\t<app-console *ngIf=\"group.value == 3\"></app-console>\r\n\t<app-help-viewer *ngIf=\"group.value == 4\"></app-help-viewer>\r\n\t<app-info-viewer *ngIf=\"group.value == 5\"></app-info-viewer>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/viewer-container/viewer-container.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.viewer-toggle {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  width: 100%;\n  background-color: #395D73; }\n  .viewer-toggle span {\n    font-style: italic;\n    font-weight: bold; }\n  .viewer-toggle mat-icon {\n    color: #8AA8C0;\n    height: 30px !important;\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important;\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important;\n    font-size: 15px; }\n  .viewer-toggle:hover .btn-grp1 {\n    -ms-flex-flow: wrap;\n        flex-flow: wrap; }\n  .viewer-toggle .mat-button-toggle {\n    height: 30px !important; }\n  .viewer-toggle .mat-button-toggle-disabled {\n    background-color: #395D73; }\n    .viewer-toggle .mat-button-toggle-disabled mat-icon {\n      color: #F07A79 !important; }\n  .viewer-toggle .btn-grp1 {\n    max-width: 100% !important;\n    -webkit-box-flex: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important;\n    -ms-flex-negative: 1 !important;\n        flex-shrink: 1 !important;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap; }\n  .viewer-toggle .btn-grp2 {\n    width: 56px !important;\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-flow: row-reverse nowrap !important;\n            flex-flow: row-reverse nowrap !important;\n    -webkit-box-flex: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important;\n    -ms-flex-negative: 0 !important;\n        flex-shrink: 0 !important; }\n  .viewer-toggle .mat-button-toggle-checked {\n    background-color: #F1F1F1 !important; }\n\n.viewer-toggle-btn:hover mat-icon {\n  color: #F0BFA0; }\n\n.viewer-container {\n  position: relative;\n  height: 100%;\n  min-width: 56px !important;\n  margin: 0px !important;\n  overflow: hidden !important;\n  padding-bottom: 67.5px;\n  box-sizing: border-box; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/viewer-container/viewer-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_services_layout_service__ = __webpack_require__("../../../../../src/app/global-services/layout.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ViewerContainerComponent = class ViewerContainerComponent extends __WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__["a" /* Viewer */] {
    constructor(injector, layoutService) {
        super(injector, "Viewer Container", "Contains all the viewers");
        this.layoutService = layoutService;
        this.group = { value: 5 };
        this._lock = false;
        this._layout_subscription = this.layoutService.getMessage().subscribe(message => {
            if (message.text.startsWith("Module: ")) {
                this.switchToHelp();
            }
            else if (message.text == "console") {
                this.switchToConsole();
            }
        });
    }
    reset() {
    }
    updateGroupValue(value) {
        this.group.value = value;
        this.layoutService.setViewContainer(value);
    }
    switchToHelp() {
        this.updateGroupValue(4);
    }
    switchToConsole() {
        let self = this;
        setTimeout(function () {
            self.updateGroupValue(3);
        }, 100);
    }
    update() {
        let port = this.flowchartService.getSelectedPort();
        if (port == undefined) {
            this.updateGroupValue(this.layoutService.getViewContainer());
        }
        else {
            this.updateGroupValue(this.flowchartService.getSelectedPort().getType());
        }
    }
    ngOnInit() {
        this.updateGroupValue(this.layoutService.getViewContainer());
    }
    changed() {
        this.layoutService.setViewContainer(this.group.value);
    }
};
ViewerContainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-viewer-container',
        template: __webpack_require__("../../../../../src/app/ui-components/viewers/viewer-container/viewer-container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/viewers/viewer-container/viewer-container.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */], __WEBPACK_IMPORTED_MODULE_2__global_services_layout_service__["a" /* LayoutService */]])
], ViewerContainerComponent);



/***/ }),

/***/ "../../../../../src/assets/modules/AllModules.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calc", function() { return Calc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Math", function() { return Math; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "String", function() { return String; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attrib", function() { return Attrib; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Examples", function() { return Examples; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intersect", function() { return Intersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Obj", function() { return Obj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plane", function() { return Plane; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pline", function() { return Pline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PMesh", function() { return PMesh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ray", function() { return Ray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Split", function() { return Split; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Topo", function() { return Topo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__ = __webpack_require__("../../../../../src/app/base-classes/code/CodeModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gs_modelling__ = __webpack_require__("../../../../gs-modelling/dist/index.js");


//// version for dev
let Attrib = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Attrib", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["a" /* attrib */]);
let Circle = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Circle", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["c" /* circle */]);
let Ellipse = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Ellipse", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["d" /* ellipse */]);
let Examples = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Examples", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["e" /* examples */]);
let Intersect = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Intersect", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["f" /* intersect */]);
let Model = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Model", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["i" /* model */]);
let Obj = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Obj", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["j" /* object */]);
let Plane = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Plane", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["k" /* plane */]);
let Pline = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Pline", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["l" /* pline */]);
let PMesh = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("PMesh", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["m" /* pmesh */]);
let Point = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Point", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["n" /* point */]);
let Query = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Query", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["o" /* query */]);
let Ray = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Ray", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["p" /* ray */]);
let Split = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Split", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["q" /* split */]);
let Topo = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Topo", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["s" /* topo */]);
let List = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("List", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["g" /* list */]);
let Math = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Math", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["h" /* math */]);
let String = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("String", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["r" /* string */]);
let Calc = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Calc", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["b" /* calc */]);



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