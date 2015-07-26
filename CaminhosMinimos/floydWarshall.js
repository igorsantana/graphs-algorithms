function floydWarshall(graph){
	var adjs = graph.getAdjacencyList()
	,D = []
	n = adjs.length;

	for(var k = 0;k<n;k++){
		D[k] = [];
		for(var i = 0;i<n;i++){
			D[k][i] = [];
			for(var j = 0;j<n;j++){
				D[k][i][j] = Infinity;
			}		
		}
	}
	adjs.forEach(function(data){
		data.edges.forEach(function(adj){
			D[0][data.value-1][adj.vertex.value-1] = adj.weight;
		})
	})

	for(var k = 1;k<n;k++){
		// console.log('\n\n')		
		// console.log(k)		
		// console.log('\n')		
		for(var i= 0;i<n;i++){
			for(var j = 0;j<n;j++){
				D[k][i][j] = (D[k-1][i][j] > D[k-1][i][k]+D[k-1][k][j]) ? D[k-1][i][k]+D[k-1][k][j] : D[k-1][i][j];
				// console.log(D[k-1][i][j] , D[k-1][i][k],D[k-1][k][j])
			}		
		}
		// console.log('\n\n')		
		// console.log(D[k])
		// console.log('\n\n')		
	}
		console.log(D[0][5])
		console.log(D[6][5])
	

}
module.exports = floydWarshall