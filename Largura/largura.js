function BFS(graph){
	var Queue = new (require('../Models/Queue'));
	var startVertex = graph.listOfAdjacency[Math.floor(Math.random()*30)];
	startVertex.state = 'grey';
	startVertex.distance = 0;
	startVertex.pred = null;
	Queue.add(startVertex);
	while(Queue.hasVertexToRemove()){
		var vertex = Queue.remove();
		vertex.edges.forEach(function(adjacent){
			if(adjacent.state == 'white'){
				adjacent.state = 'grey';
				adjacent.distance = vertex.distance+1;
				adjacent.pred = vertex.value;
				Queue.add(adjacent);
			}
			vertex.state = 'black';
		})
	}
}

module.exports = BFS;