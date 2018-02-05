import {ModuleUtils, IModule} from "../../app/base-classes/code/CodeModule";

import * as GSS from "gs-modelling";

//// version for dev
let Attrib: IModule = ModuleUtils.createModule("Attrib", GSS.attrib);
let Circle: IModule = ModuleUtils.createModule("Circle", GSS.circle);
let Ellipse: IModule = ModuleUtils.createModule("Ellipse", GSS.ellipse);
let Examples: IModule = ModuleUtils.createModule("Examples", GSS.examples);
let Intersect: IModule = ModuleUtils.createModule("Intersect", GSS.intersect);
let Model: IModule = ModuleUtils.createModule("Model", GSS.model);
let Obj: IModule = ModuleUtils.createModule("Obj", GSS.object);
let Plane: IModule = ModuleUtils.createModule("Plane", GSS.plane);
let Pline: IModule = ModuleUtils.createModule("Pline", GSS.pline);
let PMesh: IModule = ModuleUtils.createModule("PMesh", GSS.pmesh);
let Point: IModule = ModuleUtils.createModule("Point", GSS.point);
let Query: IModule = ModuleUtils.createModule("Query", GSS.query);
let Ray: IModule = ModuleUtils.createModule("Ray", GSS.ray);
let Split: IModule = ModuleUtils.createModule("Split", GSS.split);
let Topo: IModule = ModuleUtils.createModule("Topo", GSS.topo);
let List: IModule = ModuleUtils.createModule("List", GSS.list);
let Math: IModule = ModuleUtils.createModule("Math", GSS.math);
let String: IModule = ModuleUtils.createModule("String", GSS.string);
let Calc: IModule = ModuleUtils.createModule("Calc", GSS.calc);
let Group: IModule = ModuleUtils.createModule("Group", GSS.group);

export {Calc,List, Math, String, Circle, Model, Attrib, Examples, Intersect, Obj, Plane, Pline, PMesh, Point, Query, Ray, Split, Topo, Group};

//// version for dev
