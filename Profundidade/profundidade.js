var graph = require('../openFile')('../graph.tgf');

function DFS(graph,top){
	var vertexs = graph.getAdjacencyList()
	,	time = 0
	,	topological = [];

	vertexs.forEach(function(adjacent){
		if(adjacent.state == "white"){
			dfsVisit(adjacent);
		}
	})

	function dfsVisit(vertex){
		time++;
		vertex.state = 'grey';
		vertex.startingTime = time;
				
		vertex.edges.forEach(function(adjacent){
			if(adjacent.vertex.state == "white"){
				adjacent.vertex.pred = vertex;
				dfsVisit(adjacent.vertex);
			}
		})
		vertex.state = 'black';
		time++;
		topological.push(vertex.value);
		vertex.endingTime = time;
	}
	if(top) return topological;
}

module.exports = DFS;