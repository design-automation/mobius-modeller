import {ModuleUtils, IModule} from "../../app/base-classes/code/CodeModule";

import * as sm from "./SimpleMath";
import * as cm from "./ComplexMath";
import * as GSS from "gs-modelling";

/*let SimpleMath: IModule = ModuleUtils.createModule("SimpleMath", sm);
let ComplexMath: IModule = ModuleUtils.createModule("ComplexMath", cm);*/
// let Test: IModule = ModuleUtils.createModule("Test", tm);
let Model: IModule = ModuleUtils.createModule("Model", GSS.model);
let Examples: IModule = ModuleUtils.createModule("Examples", GSS.examples);
//let _ibj: IModule = ModuleUtils.createModule("Object", GSS.object);
let Plane: IModule = ModuleUtils.createModule("Plane", GSS.plane);
let Ray: IModule = ModuleUtils.createModule("Ray", GSS.ray);
let Point: IModule = ModuleUtils.createModule("Point", GSS.point);
let Pline: IModule = ModuleUtils.createModule("Pline", GSS.pline);
let PCurve: IModule = ModuleUtils.createModule("PCurve", GSS.pcurve);
let PMesh: IModule = ModuleUtils.createModule("PMesh", GSS.pmesh);
let Topo: IModule = ModuleUtils.createModule("Topo", GSS.topo);
let Attrib: IModule = ModuleUtils.createModule("Attrib", GSS.attrib);
// let Group: IModule = ModuleUtils.createModule("Group", GSS.group);


/*
let SimpleMath:IModule = ModuleUtils.createModule("SimpleMath", "0.1", "AKM", sm);
let ComplexMath:IModule = ModuleUtils.createModule("ComplexMath", "0.1", "AKM", cm);
let gs_modeling_set:IModule = ModuleUtils.createModule("gs_modeling", "0.1", "Patrick", gs_modelling);*/


export {Examples, Model, Pline, Point};
