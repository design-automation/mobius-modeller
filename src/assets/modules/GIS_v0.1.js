{

	name: "GIS", 
	version: "0.1", 
	code_name: "GIS_v0.1",
	TOPOLOGY_DEF : {"points": [], "vertices":[], "edges":[], "wires":[], "faces":[], "objects":[]},
	frm: {
		description : "Functions dealing with creation of local frames for drawing geometry.",
		byXYPoints : function(origin, xPoint, yPoint){
				if(origin.getGeometry != undefined)
					origin = origin.getGeometry();
			    
			    // how to you make sure the two axes are perpendicular
				var xaxis = [xPoint[0]-origin[0], xPoint[1]-origin[1], xPoint[2]-origin[2]];
				var yaxis = [yPoint[0]-origin[0], yPoint[1]-origin[1], yPoint[2]-origin[2]];

				if( mod.mtx.dot(xaxis, yaxis) != 0)
					mod.msc.print("Axes are not perpendicular");

				return new mObj_frame(origin, xaxis, yaxis, undefined);
		}
	},
	sld: {
		byExtrusion : function(frame, surface, zDistance){

			// extrude path later to extrude along different directions

			// can do it only if surface is a shape

			var shape;
			if(surface.getGeometry() instanceof THREE.Shape)
				console.log("Error Case - Shape received!")
			else if(surface.getGeometry() instanceof THREE.Geometry){

				shape = surface.getGeometry();
				
				// convert to global 
				shape.applyMatrix( getThreeMatrix(shape.frame.toGlobal()) ); 

				shape = convertShapeGeometryToShape(shape)
			}

			var extrusionSettings = {
				amount: zDistance, 
				size: 1, height: 1, curveSegments: 3,
				bevelThickness: 1, bevelSize: 2, bevelEnabled: false,
				material: 0, extrudeMaterial: 1
			};

			var exGeom = new THREE.ExtrudeGeometry( shape, extrusionSettings );
			//console.log("Processed extrudeGeom : ", exGeom);

			exGeom.boundingBox = new THREE.Box3();			
			exGeom.boundingSphere = new THREE.Sphere();
			exGeom.morphTargets = [];
			exGeom.morphNormals = [];
			exGeom.skinIndices = [];
			exGeom.skinWeights = [];


			exGeom.applyMatrix( getThreeMatrix(frame.toLocal()) );
			//console.log("Processed extrudeGeom after frame conversion : ", exGeom);


			return new mObj_geom_Solid( exGeom );
		}

	},
	srf: {
		polygonByPoints : function (frame, points, holes ){

			// check each point and convert any vertex formats to point format
			points = points.map(function(p){
				if (p instanceof mObj_geom_Vertex)
					return [p.x, p.y, p.z];
				else
					return p;
			})

			var shape = new THREE.Shape();
			shape.moveTo(points[0][0], points[0][1]);
			for(var p=1; p<points.length; p++){
				shape.lineTo(points[p][0], points[p][1]);
			}
			//shape.lineTo(points[points.length-1][0], points[points.length-1][1]);
			
			var shapeGeom = new THREE.ShapeGeometry(shape);
			var m = getThreeMatrix(frame.toLocal())
			shapeGeom.applyMatrix(m);

			// check that this shouldn't have curves.length == 0
			shapeGeom.frame = frame; 


			return new mObj_geom_Surface( shapeGeom ) ;
		}
	}


var convertGeomToThree = function( geom ){

	// internal function
	var convertToThree = function(singleDataObject){

		// normal three.js objects - for lines and curves
		if( singleDataObject instanceof THREE.Mesh || singleDataObject instanceof THREE.Line || singleDataObject instanceof THREE.Group || singleDataObject instanceof THREE.Object3D ){
			
			// to get lines in the mesh of the obj import
			// if(singleDataObject instanceof THREE.Group){
			// 	console.log("before edges" , singleDataObject);
			// 	var alledges = [];
			// 	for(var i=0; i<singleDataObject.children.length; i++){
			// 		var edges = new THREE.EdgesHelper( singleDataObject.children[i], "black");
			// 		edges.material.linewidth = 2;
			// 		alledges.push(edges);
			// 	}
			// 	for(var e=0; e<alledges.length; e++)
			// 		singleDataObject.add(new THREE.LineSegments(alledges[e].geometry,
			// 												 new THREE.LineBasicMaterial({
			// 												        side: THREE.DoubleSide,
			// 												        linewidth: 2,
			// 												        color: 0x000000
			// 												    })
			// 												 ));
            //
			// 	console.log("after edges", singleDataObject);
			// }
			return singleDataObject;

		}
		// three.js shapes may also be used for creating surfaces
		else if( singleDataObject instanceof THREE.Shape ){

			console.log("Shape received for conversion to Three. Error Case. ");
			//
			//	Changes shape according to frame
			//
/*			var m = new THREE.Matrix4();
			var arr = [];
			var frame = singleDataObject.frame.toLocal();
			for(var i=0; i<4; i++){
				for(var j=0; j<4; j++)
					arr.push(frame[j][i]);
			}
			m.fromArray(arr);
			var shapeGeom = new THREE.ShapeGeometry(singleDataObject);
			shapeGeom.applyMatrix( m );
			return new THREE.Mesh(shapeGeom);*/
		}
		// creating a three.js geometry from scratch - usually for solids
		else if(singleDataObject instanceof THREE.Geometry)
			return new THREE.Mesh( singleDataObject );
		// 
		else if(singleDataObject instanceof Array){
			if(singleDataObject[0] instanceof THREE.Mesh)
				return singleDataObject;
			// means it is a point
			var dotGeometry = new THREE.Geometry();
			dotGeometry.vertices.push( new THREE.Vector3(singleDataObject[0], singleDataObject[1], singleDataObject[2]) );
			return new THREE.Points( dotGeometry ); 
		}
		else {
			console.log("Module doesnt recognise either!", singleDataObject);
		}
	}

	var rawResult = convertToThree( geom );
	
	return rawResult;
}

//
// Takes native topology and converts it into three.js format
//
var convertTopoToThree = function( topology ){

	var topo = new THREE.Object3D();
	return topo;

	// convert vertices
	var topoPointMaterial = new THREE.PointsMaterial( { size: 5, sizeAttenuation: false, color:0xCC3333 } );
	var dotGeometry = new THREE.Geometry(); 
	for(var v = 0; v < topology.vertices.length; v++){
		var vertice = topology.vertices[v];
		dotGeometry.vertices.push( new THREE.Vector3( vertice.x, vertice.y, vertice.z) ); 
	}
	var allVertices = new THREE.Points( dotGeometry, topoPointMaterial ); 
	topo.add(allVertices);

 	
	// convert edges
	var topoEdgeMaterial = new THREE.LineBasicMaterial({
							    side: THREE.DoubleSide,
							    linewidth: 100,
							    color: 0x000000
							    });
	for(var e = 0; e < topology.edges.length; e++){ 
		var edge = topology.edges[e]; 
		if(edge instanceof THREE.Object3D)
			topo.add(edge);
		else
			topo.add(edge.extractThreeGeometry());

	} 

	// convert faces
	var topoSurfaceMaterial = new THREE.MeshLambertMaterial( {
									    side: THREE.DoubleSide,
									    wireframe: false,
									    transparent: false,
									    color: 0x6666FF
									    } );

	for(var f = 0; f < topology.faces.length; f++){
		var face = convertGeomToThree(topology.faces[f].getGeometry());
		
		face.material = topoSurfaceMaterial;
		if(face.geometry.vertices!=undefined && face.geometry.faces!=undefined){

			var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );

			topo.add(face);
		}
			
	} 


	return topo;
}

//
//	Takes native geometry ( geometry from module ) and converts it into mobius topology - edges, faces, vertices
//
// if mObj is a solid - it gets an array of faces
var computeTopology = function( mObj ){


	var topology = {"points": [], "vertices":[], "edges":[], "wires":[], "faces":[], "objects":[]};

	if(mObj instanceof mObj_geom_Compound){

		var geom_array = mObj.getGeometry();  // array of geometric elements

		for(var objCount = 0; objCount < geom_array.length; objCount++){

			var geom =  geom_array[objCount];
			MOBIUS.obj.addData( geom, "belongsTo", [objCount] )
			topology.objects.push( geom );
	
		}
	}

	if(mObj instanceof mObj_geom_Solid){

		var geom = mObj.getGeometry(); // THREE.Geometry

		topology.faces = [ [0], [1], [2], [3], [4], [5] ];

		topology.points = geom.vertices.map( function(v){

			return [v.x, v.y, v.z];
		
		})

	}

	if(mObj instanceof mObj_geom_Surface){

		MOBIUS.obj.addData( mObj, "belongsTo", [0, null] )	
		topology.objects = [ ];	
		topology.faces = [ mObj ] ;

		topology.points = mObj.getGeometry().vertices.map( function(v){

			return [v.x, v.y, v.z];
		
		})

	}
	
	//console.log("Topology:", topology);
	return topology;
}

var getThreeMatrix = function(DS_Matrix){

	//console.log("Matrix", DS_Matrix);

	var m = new THREE.Matrix4();
	var arr = [];
	for(var i=0; i<4; i++){
		for(var j=0; j<4; j++)
			arr.push(DS_Matrix[j][i]);
	}
	m.fromArray(arr);

	//console.log("Matrix", m);

	return m;
}

var getDSMatrix = function(three_matrix){

	console.log("Matrix", m);

	var m = new THREE.Matrix4();
	var arr = [];
	for(var i=0; i<4; i++){
		for(var j=0; j<4; j++)
			arr.push(DS_Matrix[j][i]);
	}
	m.fromArray(arr);

	console.log("Matrix", m);
	
	return m;
}

Array.prototype.flatten = function() {
    var ret = [];
    for(var i = 0; i < this.length; i++) {
        if(Array.isArray(this[i])) {
            ret = ret.concat(this[i].flatten());
        } else {
            ret.push(this[i]);
        }
    }
    return ret;
};



var convertShapeGeometryToShape = function(shapeGeom){


	// iterate through vertices and check if the any of the vertices are 3D - if yes, there is a problem. 
	// alert and exit

	// convert the shapeGeom into GLOBAL first
	// all shapeGeom originates from THREE.Shape - meaning, in GLOBAL reference, they have to be 2D

	var vertices = shapeGeom.vertices; 
	var points = []; 

	vertices.map(	function(v){
		
		if(v.z != 0){
			//console.log("Error! ShapeGeometry is 3D and cannot be converted into a 2D Shape", vertices);
		}
		//else{
			//console.log("Shape processed successfully from ShapeGeometry.")
			points.push( new THREE.Vector2(v.x, v.y) );
		//}

	});

	return new THREE.Shape(points);

} 

var GLOBAL = MOBIUS_MODULES[MODULE_NAME].frm.byXYAxes( [0,0,0], [1,0,0], [0,1,0] );
MOBIUS_MODULES[MODULE_NAME]._FN = {};
MOBIUS_MODULES[MODULE_NAME]._FN.convertGeomToThree = convertGeomToThree;
MOBIUS_MODULES[MODULE_NAME]._FN.convertTopoToThree = convertTopoToThree;
MOBIUS_MODULES[MODULE_NAME]._FN.computeTopology = computeTopology;

