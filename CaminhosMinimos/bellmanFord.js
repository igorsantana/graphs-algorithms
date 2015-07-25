function bellmanFord(graph){
	var vertexs = graph.getAdjacencyList(),
		edges = graph.getEdges()
		first = vertexs[0];	
	first.distance = 0;
	function relax(u,v,w){
		if(v.distance > (u.distance + w)){
			v.distance = u.distance + w;
			v.pred = u;
		}
	}

	for (var i = 0;	i < edges.length;i++){
		edges.forEach(function(edge){
			relax(edge.from,edge.to,edge.weight);
		})
	}
	edges.forEach(function(edge){
		if(edge.to.distance > (edge.from.distance + edge.weight)){
			return true;
		}
	})
	return false;
}


module.exports = bellmanFord;