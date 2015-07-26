function TTL(graph, x, propag){
	var Queue = new (require('../Models/Queue'))
	,	startVertex = graph.listOfAdjacency[x]
	,	count = 0;
	
	startVertex.state = 'grey';
	startVertex.distance = 0;
	startVertex.pred = null;

	Queue.add(startVertex);

	while(Queue.hasVertexToRemove()){

		var vertex = Queue.remove();
		if(vertex.distance <= propag){
			console.log(vertex.label)
			count++;
		}

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
	return count;
}

module.exports = TTL;