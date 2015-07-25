function dijkstra(graph,v){
	var adjList = graph.getAdjacencyList()
	,relax = require('../CaminhosMinimos/relax');

	adjList.forEach(function(data){
		data.distance = Infinity;
		data.pred = null;
	})
	v.distance = 0;

	var S = [];

	while(adjList.length > 0){
		var u = getMin(adjList);
		console.log(u)
		S.push(u);
		u.edges.forEach(function(data){
			relax(u,data);
		})
	}

	function getMin(arr){
		var index = 0;
		for(var i = 1,len = arr.length;i<len;i++){
			if(arr[i].distance < arr[index].distance){
				index = i;
			}
		}
		return arr.splice(index,1)[0];
	}
}

module.exports = dijkstra