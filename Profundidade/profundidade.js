var Graph = require('../graph');
var Tree = require('../tree');
var Vertex = require('../vertex');
var time = 0;
function initialize(graph){
	var arr = [new Vertex('A'),new Vertex('B'),new Vertex('C'),new Vertex('D'),new Vertex('E'),new Vertex('F')];
	arr[0].addAdjacent([arr[1],arr[4]]);
	arr[1].addAdjacent([arr[0],arr[2],arr[3],arr[5]]);
	arr[2].addAdjacent([arr[1],arr[5]]);
	arr[3].addAdjacent([arr[1]]);
	arr[4].addAdjacent([arr[0],arr[2]]);
	arr[5].addAdjacent([arr[1],arr[2]]);
	arr.forEach(function(elm,index){
		graph.addVertex(elm);
	})
	return graph;
}

function profundidade(graph){
	graph = initialize(new Graph());
	graph.vertexs.forEach(function(vertex){
		if(vertex.state == 0){
			profundidadeVisit(vertex);
		}
	})
	console.log(graph.getResum());
}	

function profundidadeVisit(vertex){
	time++;
	vertex.state = 1;
	vertex.start = time;
	vertex.edges.forEach(function(auxVertex){
		if(auxVertex.state == 0){
			auxVertex.predecessor = vertex;
			profundidadeVisit(auxVertex);
		}
	})
	vertex.state = 2;
	time++;
	vertex.ending = time;
}

profundidade();
