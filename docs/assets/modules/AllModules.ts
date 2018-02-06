import {ModuleUtils, IModule} from "../../app/base-classes/code/CodeModule";

import * as GSS from "gs-modelling";
import docs from "gs-modelling/docs_json/gs-modelling.json";

//// version for dev
let Attrib: IModule = ModuleUtils.createModule("Attrib", GSS["attrib"], "attrib", docs);
let Circle: IModule = ModuleUtils.createModule("Circle", GSS["circle"], "circle", docs);
let Ellipse: IModule = ModuleUtils.createModule("Ellipse", GSS["ellipse"], "ellipse", docs);
// let Examples: IModule = ModuleUtils.createModule("Examples", GSS["examples"], "examples", docs);
let Intersect: IModule = ModuleUtils.createModule("Intersect", GSS["intersect"], "intersect", docs);
let Model: IModule = ModuleUtils.createModule("Model", GSS["model"], "model", docs);
let Obj: IModule = ModuleUtils.createModule("Obj", GSS["object"], "object", docs);
let Plane: IModule = ModuleUtils.createModule("Plane", GSS["plane"], "plane", docs);
let Pline: IModule = ModuleUtils.createModule("Pline", GSS["pline"], "pline", docs);
let PMesh: IModule = ModuleUtils.createModule("PMesh", GSS["pmesh"], "pmesh", docs);
let Point: IModule = ModuleUtils.createModule("Point", GSS["point"], "point", docs);
let Query: IModule = ModuleUtils.createModule("Query", GSS["query"], "query", docs);
let Ray: IModule = ModuleUtils.createModule("Ray", GSS["ray"], "ray", docs);
let Split: IModule = ModuleUtils.createModule("Split", GSS["split"], "split", docs);
let Topo: IModule = ModuleUtils.createModule("Topo", GSS["topo"], "topo", docs);
let List: IModule = ModuleUtils.createModule("List", GSS["list"], "list", docs);
let Math: IModule = ModuleUtils.createModule("Math", GSS["math"], "math", docs);
let String: IModule = ModuleUtils.createModule("String", GSS["string"], "string", docs);
let Calc: IModule = ModuleUtils.createModule("Calc", GSS["calc"], "calc", docs);
let Group: IModule = ModuleUtils.createModule("Group", GSS["group"], "group", docs);

export {Calc,List, Math, String, Circle, Model, Attrib, Intersect, Obj, Plane, Pline, PMesh, Point, Query, Ray, Split, Topo, Group};

//// version for dev
