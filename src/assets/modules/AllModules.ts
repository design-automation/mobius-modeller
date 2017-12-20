import {ModuleUtils, IModule} from "../../app/base-classes/code/CodeModule";

import * as SimpleMath from "./SimpleMath";
import * as ComplexMath from "./ComplexMath";
import * as GSS from "gs-modelling";

/*
let SimpleMath:IModule = ModuleUtils.createModule("SimpleMath", "0.1", "AKM", sm);
let ComplexMath:IModule = ModuleUtils.createModule("ComplexMath", "0.1", "AKM", cm);
let gs_modeling_set:IModule = ModuleUtils.createModule("gs_modeling", "0.1", "Patrick", gs_modelling);*/


export {SimpleMath, ComplexMath, GSS};
