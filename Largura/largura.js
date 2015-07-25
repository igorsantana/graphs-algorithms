function BFS(graph){
	var Queue = new (require('../Models/Queue'))
	,	startVertex = graph.listOfAdjacency[Math.floor(Math.random()*30)];
	
	startVertex.state = 'grey';
	startVertex.distance = 0;
	startVertex.pred = null;

	Queue.add(startVertex);

	while(Queue.hasVertexToRemove()){

		var vertex = Queue.remove();

		vertex.edges.forEach(function(adjacent){

			if(adjacent.vertex.state == 'white'){
				adjacent.vertex.state = 'grey';
				adjacent.vertex.distance = vertex.distance+1;
				adjacent.vertex.pred = vertex.value;
				Queue.add(adjacent.vertex);
			}
			vertex.state = 'black';
		})
	}
}

module.exports = BFS;