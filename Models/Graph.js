var Graph = function(list,matrix,edges){
	this.listOfAdjacency = list;
	this.edges = edges;
	this.matrixOfAdjacency = matrix;
	this.getEdges = function(){
		return this.edges;
	}
	this.getAdjacencyList = function(){
		return this.listOfAdjacency;
	}
	this.getAdjacencyMatrix = function(){
		return this.matrixOfAdjacency;
	}
	this.getFormattedAdjacencyList = function(type){
		var list = [];
		switch(type){
			case 'largura':
				list = this.listOfAdjacency.map(function(vertex){
					return 'Valor: ' + vertex.value +
						   ' | Label: ' + vertex.label +
					   	   ' | State: ' + vertex.state + 
					   	   ' | Distance: ' + vertex.distance +
					   	   ' | Predecessor: ' + vertex.pred;
				});
				break;
			case 'profundidade':
				list = this.listOfAdjacency.map(function(vertex){
					var x = (vertex.pred ? vertex.pred.label : "Não existe");
					return 'Valor: ' + vertex.value +
						   ' | Label: ' + vertex.label +
					   	   ' | State: ' + vertex.state + 
					   	   ' | Predecessor: ' + x + 
					   	   ' | Tempo: (' + vertex.startingTime + '/' + vertex.endingTime + ')';
				});
				break;
			case 'bellman-ford':
				return this.edges;
		}
		return list;
	}

};
module.exports = Graph;



	
