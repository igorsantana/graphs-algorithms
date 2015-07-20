function Transposto(graph){
	var obj = {}

	graph.listOfAdjacency.forEach(function(data){
		data.edges = data.edges.map(function(adj){
			obj[adj.value] = obj[adj.value] || [];
			obj[adj.value].push(data); 
		})
	})

	graph.listOfAdjacency.forEach(function(data){
		data.edges = obj[data.value] || [];
	})
}

module.exports = Transposto;