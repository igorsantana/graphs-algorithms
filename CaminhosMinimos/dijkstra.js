function dijkstra(graph,v){
	var adjacencyList = graph.getAdjacencyList()
	,	relax = require('../CaminhosMinimos/relax')
	,	S = [];

	adjacencyList.forEach(function(data){
		data.distance = Infinity;
		data.pred = null;
	})

	v.distance = 0;

	while(adjacencyList.length > 0){
		var u = getMin(adjacencyList);
		S.push(u);
		u.edges.forEach(function(data){
			relax(u,data);
			// console.log(data)
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
	return S;
}

module.exports = dijkstra