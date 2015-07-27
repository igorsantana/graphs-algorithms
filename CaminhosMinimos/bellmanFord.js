function bellmanFord(graph,vert){
	var vertexs = graph.getAdjacencyList(),
		edges = graph.getEdges()
		first = vertexs[vert];	
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
	return edges.filter(function(edge){
		return (edge.to.distance > (edge.from.distance + edge.weight));
	}).length > 0;
	 
}


module.exports = bellmanFord;